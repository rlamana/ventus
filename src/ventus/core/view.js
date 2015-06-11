/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define([], function() {
	'use strict';

	var splitter = /^(?:(.*)\s)?(\w+)$/;

	var transitionPrefixes = 'webkitTransitionEnd oTransitionEnd MSTransitionEnd';
	var animationPrefixes = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd';

	function View(element) {
		this._el = element;
	}

	View.parse = function(template) {
		var element = document.createElement('div');
		element.innerHTML = template;
		return element.firstChild;
	};

	View.prototype = {
		find: function(selector) {
			var element = this._el.querySelector(selector);
			return element ? new View(element) : undefined;
		},

		css: function(property, value) {
			if(this._el) {
				this._el.style[property] = value;
			}

			return this;
		},

		width: function() {
			return this._el.offsetWidth;
		},

		height: function() {
			return this._el.offsetHeight;
		},

		appendTo: function(element) {
			element.appendChild(this._el);
			return this;
		},

		append: function(view) {
			this._el.appendChild(view._el);
			return this;
		},

		prepend: function(view) {
			this._el.insertBefore(view._el, this._el.firstChild);
			return this;
		},

		addClass: function(className) {
			this._el.classList.add(className);
		},

		removeClass: function(className) {
			this._el.classList.remove(className);
		},

		show: function() {
			this.css('display', 'block');
		},

		hide: function() {
			this.css('display', 'none');
		},

		html: function(content) {
			this._el.innerHTML = content;
		},

		on: function(events, callback, scope) {
			var self = this,
				eventList = events.split(/\s+/),
				listener = function (e) {
					callback.call(scope, e);
				};

			eventList.forEach(function(eventName) {
				if(eventName === 'animationend') {
					self.on(animationPrefixes, callback, scope);
				} else if(eventName === 'transitionend') {
					self.on(transitionPrefixes, callback, scope);
				}

				self._el.addEventListener(eventName, listener, false);
			});

			// Returns a function to turn event listeners off
			return function() {
				eventList.forEach(function(eventName) {
					self._el.removeEventListener(eventName, listener, false);
				});
			};
		},

		once: function(events, callback, scope) {
			var off = this.on(events, function (e) {
				callback.call(scope, e);
				off();
			}, false);
		},

		listen: function (map, scope) {
			var handler, data, selector, event;
			for(var key in map) {
				if(!map.hasOwnProperty(key)) {
					continue;
				}

				handler = map[key];

				data = key.match(splitter);
				selector = data[1];
				event = data[2];

				if (event === 'mousedown') {
					event += ' touchstart';
				}
				else if (event === 'mousemove') {
					event += ' touchmove';
				}
				else if (event === 'mouseup') {
					event += ' touchend';
				}
				else if (event === 'click') {
					event += ' touchend';
				}

				if (typeof handler === 'string') {
					handler = scope[handler];
				}

				if (!handler) {
					throw new Error('Handler not found');
				}

				if (selector) {
					this.find(selector).on(event, handler.bind(scope));
				}
				else {
					this.on(event, handler.bind(scope));
				}
			}

			return this;
		}
	};

	return function(root) {
		if(typeof root === 'function') {
			// It's a template
			return function(options) {
				return new View(root(options || {}));
			};
		}
		else {
			// It's a template string or a DOM element
			return new View(typeof root === 'object' ? root : View.parse(root));
		}
	};
});
