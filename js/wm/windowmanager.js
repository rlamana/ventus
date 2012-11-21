
define(function(require) {

	var Window = require('wm/window');

	var WindowManager = function (selector) {
		this.el = selector ? document.querySelector(selector) : document.createElement('div');

		if(this.el === null)
			throw "Invalid Selector";

		document.body.appendChild(this.el);

		this.el.className = "wm-space";
	};

	return WindowManager;
});
