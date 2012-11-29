define(function(require) {
	
	var $ = require('$');
	var _ = require('Underscore');
	
	var splitter = /^(?:(.*)\s)?(\w+)$/;

	var transitionEventNames = "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd";
	var animationEventNames = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";

	// CSS3 transform, transition, animation hooks, prefixless
	var hooks = ['transform', 'transition', 'animation'];
	for(var i=hooks.length;i--;) {
		(function(property) {
			$.cssHooks[property] = {
				get: function( elem, computed, extra ) {
					return null;
				},
				set: function(elem, value) {
					elem.style['-webkit-'+property] = value;
					elem.style['-moz-'+property] = value;
					elem.style['-ms-'+property] = value;
					elem.style['-o-'+property] = value;
					elem.style[property] = value;
				}
			};
		})(hooks[i]);
	}

	$.fn.extend({
		listen: function (map, scope) {
			_.each(map, function(handler, key) {
				var data = key.match(splitter);
				var selector = data[1];
				var event = data[2];

				if (typeof handler === 'string')
					handler = scope[handler];

				if (!handler)
					throw new Error('Handler not found');

				if (selector)
					this.on(event, selector, handler.bind(scope));
				else
					this.on(event, handler.bind(scope));
			}, this);

			return this;
		},

		onTransitionEnd: function (callback, scope) {
			this.one(transitionEventNames, function() {
				callback.apply(scope||this);
			});
		},

		onAnimationEnd: function (callback, scope) {
			this.one(animationEventNames, function() {
				callback.apply(scope||this);
			});
		}
	});

	return function(root) {
		if(typeof root === 'function') { 
			// It's a template
			return function(options) {
				return $(root(options || {}));
			};
		}
		else {
			// It's a selector
			return $(root);
		}
	};
});
