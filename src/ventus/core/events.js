/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define(function() {
	'use strict';

	var splitter = /^(?:(.*)\s)?(\w+)$/;

	var Events = {
		/**
		 * Register a map of events for an element and its
		 * children, all at once.
		 */
		register: function ($root, map, scope) {
			var handler, data, selector, event;
			for(var key in map) {
				if(!map.hasOwnProperty(key)) {
					continue;
				}

				handler = map[key];

				data = key.match(splitter);
				selector = data[1];
				event = data[2];

				if (typeof handler === 'string') {
					handler = scope[handler];
				}

				if (!handler) {
					throw new Error('Handler not found');
				}

				if (selector) {
					$root.querySelectorAll(selector).forEach(function(element) {
						element.addEventListener(event, handler.bind(scope));
					});
				}
				else {
					$root.addEventListener(event, handler.bind(scope));
				}
			}

			return $root;
		},

		onTransitionEnd: function ($root, callback, scope) {
			var listener = function() {
				$root.removeEventListener('transitionend', listener);
				callback.apply(scope);
			}.bind(scope);
			$root.addEventListener('transitionend', listener);
		},

		onAnimationEnd: function ($root, callback, scope) {
			var listener = function() {
				$root.removeEventListener('animationend', listener);
				callback.apply(scope);
			}.bind(scope);
			$root.addEventListener('animationend', listener);
		}
	};

	return Events;
});
