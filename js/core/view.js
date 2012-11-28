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

	function start(className, callback, scope) {
		var self = this;
		
		this.addClass(className);
		this.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
			$(self).removeClass(className);
			callback && callback.apply(scope ? scope : self);
		});

		return this;
	}

	$.fn.extend({
		listen: listen,
		start: start
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
