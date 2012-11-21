
define(function(require) {

	require('css!../../css/window.less');

	var Window = function (options) {
		var templateWindow = require("tmpl!../tmpl/window.tmpl");

		this.$el = $(templateWindow({
			title: "Window"
		}));

		this.setSize(400, 200);

		$(document.body).append(this.$el);
	};

	Window.prototype = {
		setWidth: function(w) {
			this.$el.width(w);

			return this;
		},

		setHeight: function(h) {
			this.$el.height(h);

			return this;
		},

		setSize: function(w, h) {
			this.setWidth(w).setHeight(h);

			return this;
		},

		moveTo: function(x, y) {
			this.$el.css('left', x);
			this.$el.css('top', y);
		}
	}

	return Window;
});
