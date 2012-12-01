
define(function(require) {
	var Window = require('wm/window');
	var WindowManager = require('wm/windowmanager');

	function main(config) {
		require('css!../css/normalize.less');
		require('css!../css/environment.less');

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

		/*
		var randomW, randomH;
		for(var i=1; i < 6; i++) {
			randomW = Math.ceil(Math.random()*1000 % 400);
			randomH = Math.ceil(Math.random()*1000 % 400);

			wm.createWindow()
				.move(i*60, i*60)
				.resize(
					randomW > 200 ? randomW : 200,
					randomH > 200 ? randomH : 200
				);
		}
		*/

		// For developing purposes
		window.wm = wm;
	}

	return {main: main};
});
