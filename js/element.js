define(function(require) {
	
	var $ = require('$');
	var _ = require('Underscore');
	var splitter = /^(?:(.*)\s)?(\w+)$/;

	function extract(map) {
		var ref = this._lorelei_ref = {};

		_.each(map, function(value, name) {
			if (name === 'main')
				return map.main = this;

			var selector = value || ('.' + name);
			map[name] = this.find(selector);
			ref[name] = selector;

			if (!map[name].length)
				throw new Error('No element found for selector ' + selector);
		}, this);

		return this;
	}

	function listen(map, scope) {
		_.each(map, function(handler, key) {
			data = key.match(splitter);
			selector = data[1];
			event = data[2];

			if (selector[0] === '$')
				selector = this._lorelei_ref[selector.substr(1)];

			if (typeof handler === 'string')
				handler = scope[handler];

			if (!handler)
				throw new Error('Handler not found');

			this.delegate(selector, event, handler.bind(scope));
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
