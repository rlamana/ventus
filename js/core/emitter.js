/**
 * interface Emitter {
 *   void on(String signal, Function handler, [Object scope]);
 *   void off(String signal, Function handler, [Object scope]);
 *   void emit(String signal, Object var_args...);
 * }
 *
 * Provides a constructor to listen and emit signals.
 *
 * TODO: Add .once() method to listen a signal only once.
 */

(function(root) {
	"use strict";

	function equals(handler, scope, expected) {
		return function(item) {
			return (
				item.funct === handler &&
				item.scope === scope
			) === expected;
		};
	}

	/**
	 * Creates an object with methods to add callbacks (listeners)
	 *   to specific signals and invoke this callbacks.
	 */
	function Emitter() {
		this._listeners = {};
	}

	Emitter.prototype = {
		/**
		 * Returns the count of listeners for a specific signal.
		 *
		 * @param signal <String> The signal we want to count listeners from.
		 * @returns <Number> The count.
		 */
		listenersCount: function(signal) {
			var list = this._listeners[signal];
			return  list ? list.length : 0;
		},

		/**
		 * Adds a listener to a signal, optionally a scope can be provided.
		 * NOTE: Calling this method with the same arguments will NOT add a new listener.
		 *
		 * @param signal <String> The signal to listen.
		 * @param handler <Function> The callback function.
		 * @param scope <Object?> The scope for the callback.
		 */
		on: function on(signal, handler, scope) {
			var list = this._listeners;

			if (!list[signal])
				list[signal] = [];

			if (list[signal].some(equals(handler, scope, true)))
				return;

			list[signal].push({
				funct: handler,
				scope: scope
			});
		},

		/**
		 * Removes the listener added with exactly the same arguments.
		 *
		 * @param signal <String> The signal from we want to remove the listener.
		 * @param handler <Function> The callback passed to .on() method.
		 * @param scope <Object> The scope for the callback.
		 */
		off: function off(signal, handler, scope) {
			var list = this._listeners[signal];
			if (!list)
				return;

			this._listeners[signal] = list.filter(equals(handler, scope, false));
		},

		/**
		 * Executes the callbacks for the given signal.
		 * Any extra argument will be passed to the callback.
		 *
		 * @param signal <String> The signal of the listeners we want to invoke.
		 * @param var_args <object...> Any arguments we want the callbacks to recive.
		 */
		emit: function emit(signal, var_args) {
			var list = this._listeners[signal];
			if (!list)
				return;

			var data = Array.prototype.slice.call(arguments, 1);
			list.forEach(function(item) {
				item.funct.apply(item.scope, data);
			});
		}
	};

	if (typeof Base === 'function')
		Emitter = Base.extend(Emitter.prototype);

	if (typeof module !== 'undefined' && module.exports)
		module.exports = Emitter;
	else if (typeof define !== 'undefined' && define.amd)
		define(function() { return Emitter });
	else
		root.Emitter = Emitter;

})(this);
