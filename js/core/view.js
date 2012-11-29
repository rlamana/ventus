define(function(require) {
	
	var $ = require('$');
	var _ = require('Underscore');
	var splitter = /^(?:(.*)\s)?(\w+)$/;

	function listen(map, scope) {
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
	}

	function onAnimationEnd(callback, scope) {
		$(this).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
			callback.apply(scope||this);
		});
	}

	function onTransitionEnd(callback, scope) {
		$(this).one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
			callback.apply(scope||this);
		});
	}

	$.fn.extend({
		listen: listen,

		onAnimationEnd: onAnimationEnd,
		onTransitionEnd: onTransitionEnd
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
