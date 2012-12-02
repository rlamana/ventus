
define(function(require) {
	var Window = require('wm/window');
	var WindowManager = require('wm/windowmanager');

	function init(config) {
		require('less!../css/normalize.less');
		require('less!../css/environment.less');

		var wm = new WindowManager();

		// Terminal App example
		var terminalApp = $('<div />');
		terminalApp.load('apps/terminal/main.html', function() {
			var win, el = $(this);
			var win = wm.createWindow({
				title: 'Terminal',
				width: 600,
				height: 300,
				x: 60,
				y: 60,
				content: el
			});

			win.el.css('background-color', '#111');

			Apps.Terminal.main(this);
			el.addClass("app app-terminal");

			win.signals.on('focus click', function(){
				el.find('.terminusjs-input').focus();
			})
		});

		// For developing purposes
		window.wm = wm;
	}

	return {init: init};
});
