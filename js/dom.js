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

	$.fn.extend({
		listen: listen
	});

	return function(template) {
		return function(options) {
			return $(template(options || {}));
		};
	};
});
