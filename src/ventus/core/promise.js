/**
 * interface Promise {
 *   Future getFuture();
 *   void done(Object var_args...);
 *   void fail(Object var_args...);
 *   static Promise done(Object var_args...);
 *   static Promise failed(Object var_args...);
 *   static Promise parallel(Future var_args...);
 *   static Promise all(Array<Future> futures);
 *   static Promise serial(Array<Function> callbacks, Object scope);
 *   static Constructor Future;
 *   static Constructor PromiseError;
 * }
 *
 * interface Future {
 *   bool isCompleted();
 *   bool hasFailed();
 *   bool hasSucceed();
 *   void onDone(Function callback, Object scope);
 *   void onError(Function callback, Object scope);
 *   void onFinally(Function callback, Object scope);
 *   void then(Function success, Function error, Function fin);
 *   Future transform(Function adapter);
 * }
 *
 * Provides a type to handle asyncrhonous executions.
 * Usage:
 * A promise must be created on any method who executes a asyncrhonous operation and it's future should be returned.
 *   The future will collect listeners waiting for the asyncrhounous operation outside of your function.
 *   When the asyncrhonous operation is over you can call promise.done() or promise.fail() passing as many
 *     arguments as you need than will be recived by callbacks added to .onDone() or .onFail() respectively.
 *
 * function loadConfig() {
 *   var promise = new Promise();
 *   ajax('/config.file', function(err, response) {
 *     if (err)
 *       promise.fail(err);
 *     else
 *       promise.done(response.content, response.mimetype);
 *   });
 *   return promise.getFuture();
 * }
 * loadConfig().then(function(content, mime) {
 *   console.log("Success");
 * }, function(error) {
 *   console.log("Failed: " + error)
 * })
 */

define(function() {
	'use strict';

	var slice = Array.prototype.slice;

	function asyncCall(funct, scope, args) {
		setTimeout(function() {
			funct.apply(scope, args);
		});
	}

	function PromiseError(type, originalError, index) {
		var message = 'Error on ' + type +
			' promise execution at index [' + index + ']';

		Error.call(this, message);

		this.child = originalError;
		this.index = index;
		this.message = message;
	}

	/**
	 * Type to control the Future
	 */
	function Promise() {
		this._future = new Future();
	}

	Promise.prototype = {
		constructor: Promise,

		/**
		 * Invokes any callback added to .onDone() and .onFinally() to the future.
		 *
		 * @param var_args <Object> As many arguments as should be passed to the callbacks.
		 */
		done: function(/*var_args*/) {
			var args = slice.call(arguments);
			this.getFuture()._arrived('success', args);
		},

		/**
		 * Invokes any callback added to .onError() and .onFinally() to the future.
		 *
		 * @param var_args <Object> As many arguments as should be passed to the callbacks.
		 */
		fail: function(/*var_args*/) {
			var args = slice.call(arguments);
			this.getFuture()._arrived('failed', args);
		},

		/**
		 * Access to the future realted to this promise.
		 *
		 * @returns <Future> The future this promise will trigger.
		 */
		getFuture: function() {
			return this._future;
		}
	};

	/**
	 * Creates and return a promise already done.
	 * Any callback added to the future of this promise will be executed inmediately in a setTimeout().
	 *
	 * @param var_args <Object> Arguments to pass to the .done() method of the promise.
	 * @returns <Future> The future of the done promise.
	 */
	Promise.done = function(/*var_args*/) {
		var a = new Promise();
		a.done.apply(a, arguments);
		return a.getFuture();
	};

	/**
	 * Creates and return a promise already failed.
	 * Any callback added to the future of this promise will be executed inmediately in a setTimeout().
	 *
	 * @param var_args <Object> Arguments to pass to the .fail() method of the promise.
	 * @returns <Future> The future of the failed promise.
	 */
	Promise.failed = function(/*var_args*/) {
		var a = new Promise();
		a.fail.apply(a, arguments);
		return a.getFuture();
	};


	function succeed(item) {
		return item.hasSucceed();
	}

	/**
	 * Returns a future to be triggered when every passed future is completed.
	 * If any future fails the returned future will fail too.
	 *
	 * @param var_args <Future> Futures to wait.
	 * @returns <Future> The new future.
	 */
	Promise.parallel = function(/*var_args*/) {
		return Promise.all(slice.call(arguments));
	};

	/**
	 * Returns a future to be triggered when every passed future is completed.
	 * If any future fails the returned future will fail too.
	 *
	 * @param futures <Array<Future>> Futures to wait.
	 * @returns <Future> The new future.
	 */
	Promise.all = function(futures) {
		if (!futures || !futures.length) {
			return Promise.done();
		}

		futures = futures.map(function(future) {
			return future.getFuture ? future.getFuture() : future;
		});

		var promise = new Promise();
		var values = [];

		futures.forEach(function(future, index) {
			future.then(function() {
				values[index] = slice.call(arguments);
				if (futures.every(succeed)) {
					promise.done.apply(promise, values);
				}
			}, function(error) {
				promise.fail(new PromiseError('parallel', error, index));
			});
		});

		return promise.getFuture();
	};

	/**
	 * Executes a list of callbacks secuentially.
	 * The value returned by a callback will be passed to the next one.
	 * If any callback returns a future it will
	 *   wait until it is completed and pass it's result to the next callback.
	 * If any callback returns a future than fails the returned future will fail too.
	 *
	 * @param callbacks <Array<Function>> The list of callbacks.
	 * @param scope <Object> The scope for every callback.
	 * @returns <Future> The created future.
	 */
	Promise.serial = function(callbacks, scope) {
		if (!callbacks || callbacks.length === 0) {
			return Promise.done();
		}

		var promise = new Promise();

		setTimeout(function() {
			next(callbacks, scope, 0, promise, callbacks[0].call(scope));
		});

		return promise.getFuture();
	};

	function next(stack, scope, index, promise, value) {
		index += 1;

		if (index >= stack.length) {
			return promise.done(value);
		}

		if (!(value instanceof Future)) {
			return next(stack, scope, index, promise, stack[index].call(scope, value));
		}

		value.then(function() {
			next(stack, scope, index, promise, stack[index].apply(scope, arguments));
		}, function(error) {
			promise.fail(new PromiseError(' serial ', error, index));
		});
	}

	/**
	 * Contains the callbacks waiting the promise to be completed
	 */
	function Future() {
		this._args = null;
		this._fn = {
			'success': [],
			'failed': [],
			'finally': []
		};
	}

	Future.prototype = {
		constructor: Future,

		_add: function(type, callback, scope) {
			if (!callback) {
				console.warn('No callback passed');
			} else if (this._fn[type] === true) {
				asyncCall(callback, scope, this._args);
			} else if (this._fn[type]) {
				this._fn[type].push({
					callback: callback,
					scope: scope
				});
			}
			return this;
		},

		_arrived: function(type, args) {
			if (this.isCompleted()) {
				throw new Error('Future already arrived!');
			}

			function invoke(i) {
				i.callback.apply(i.scope, args);
			}

			var callbacks = this._fn[type].concat(this._fn['finally']);

			this._fn = {
				'success': false,
				'failed': false,
				'finally': true
			};

			this._args = args;
			this._fn[type] = true;

			callbacks.forEach(invoke);
		},

		/**
		 * Returns true if the promise is done or failed.
		 *
		 * @returns <bool>
		 */
		isCompleted: function() {
			return this._fn['finally'] === true;
		},

		/**
		 * Returns true if the promise has failed.
		 *
		 * @returns <bool>
		 */
		hasFailed: function() {
			return this._fn.failed === true;
		},

		/**
		 * Returns true if the promise has succeed.
		 *
		 * @returns <bool>
		 */
		hasSucceed: function() {
			return this._fn.success === true;
		},

		/**
		 * Adds a callback to be executed if the promise succeeds.
		 *
		 * @param callback <Function> The callback to execute.
		 * @param scope <Object> The scope for the callback.
		 * @returns <Future> Itself. Chainable.
		 */
		onDone: function(callback, scope) {
			return this._add('success', callback, scope);
		},

		/**
		 * Adds a callback to be executed if the promise fails.
		 *
		 * @param callback <Function> The callback to execute.
		 * @param scope <Object> The scope for the callback.
		 * @returns <Future> Itself. Chainable.
		 */
		onError: function(callback, scope) {
			return this._add('failed', callback, scope);
		},

		/**
		 * Adds a callback to be executed if the promise fails or succeeds.
		 *
		 * @param callback <Function> The callback to execute.
		 * @param scope <Object> The scope for the callback.
		 * @returns <Future> Itself. Chainable.
		 */
		onFinally: function(callback, scope) {
			return this._add('finally', callback, scope);
		},

		/**
		 * Adds many callback types at once.
		 * This method does not recive scope for callbacks.
		 *
		 * @param success <Function> Callback to be executed if the promise succeeds.
		 * @param error <Function> Callback to be executed if the promise fails.
		 * @param fin <Function> Callback to be executed when the promise is completed.
		 */
		then: function(success, error, fin) {
			if (success) {
				this.onDone(success);
			}

			if (error) {
				this.onError(error);
			}

			if (fin) {
				this.onFinally(fin);
			}
		},

		/**
		 * Returns a new future who will be fired when this future is completed
		 *   but the passed value will be the values returned by the adapter function.
		 *
		 * @param adapter <Function> Function than adapts the values. Will recive
		 *    the same arguments a normal callback will recive and the returned value
		 *    will be passed to the new future. If the returned value is a array they
		 *    will be passed as arguments.
		 * @returns <Future> The future with the adapted value.
		 */
		transform: function(adapter) {
			var promise = new Promise();

			this.then(function() {
				var values = adapter.apply(null, arguments);

				if (!values || values.constructor !== 'array') {
					values = [values];
				}

				promise.done.apply(promise, values);
			}, function() {
				promise.fail.apply(promise, arguments);
			});

			return promise.getFuture();
		}
	};

	Promise.PromiseError = PromiseError;
	Promise.Future = Future;
	
	return Promise;
});