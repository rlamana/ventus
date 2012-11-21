
define(function(require) {

	require('css!../../css/window.less');

	var Window = function (options) {
		var template = require("tmpl!../tmpl/window.tmpl");

		this.el = template({
			title: "Window"
		});
		this.el.listen(Window.events, this); 

		this.setSize(400, 200);

		$(document.body).append(this.el);
	};

	Window.events = {
		'click': function() {
			console.log('prueba');
		}
	};

	Window.prototype = {
		setWidth: function(w) {
			this.el.width(w);

			return this;
		},

		setHeight: function(h) {
			this.el.height(h);

			return this;
		},

		setSize: function(w, h) {
			this.setWidth(w).setHeight(h);

			return this;
		},

		moveTo: function(x, y) {
			this.el.css('left', x);
			this.el.css('top', y);
		}
	}

	return Window;
});
