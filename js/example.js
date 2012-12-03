
require(['js/ventus'], function(Ventus) {
	var Window = require('wm/window');

	function init(config) {
		//require('less!../css/normalize.less');
		//require('less!../css/environment.less');

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

		// Todo App example
		require('less!../apps/todo/css/base.less');

		var todoApp = $('<div />');
		todoApp.load('apps/todo/main.html', function() {
			var win, el = $(this);
			var win = wm.createWindow({
				title: 'Todo',
				width: 330,
				height: 400,
				x: 500,
				y: 150,
				content: el
			});

			win.el.css('background-color', '#f9f9f9');
			win.focus();
		});

		// For developing purposes
		window.wm = wm;
	}

	init();
});
