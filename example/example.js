
require(['ventus', '$', 'core/promise'], function(Ventus, $, Promise) {

	var wm = new Ventus.WindowManager();

	var loaded = new Promise(),
		terminalLoaded = new Promise(),
		todoLoaded = new Promise();

	var $loader = $("#loading-screen");

	// Terminal App example
	$('<div id="terminal" />').load('apps/terminal/main.html', function() {
		var el = $(this), self = this;
		terminalLoaded.done(function() {
			var win = wm.createWindow({
				title: 'Terminal',
				width: 600,
				height: 300,
				x: 60,
				y: 60,
				content: el
			});

			el.css('opacity', 1);
			win.el.css('background-color', '#111');

			Apps.Terminal.main(self);
			el.addClass("app app-terminal");

			win.signals.on('focus click', function(){
				el.find('.terminusjs-input').focus();
			});
		});
	}).appendTo('body').css('opacity', 0);

	// Todo App example
	$('<div id="todo" />').load('apps/todo/main.html', function() {
		var el = $(this);
		todoLoaded.done(function(){
			var win = wm.createWindow({
				title: 'Todo',
				width: 330,
				height: 400,
				x: 500,
				y: 150,
				content: el
			});

			el.css('opacity', 1);
			win.el.css('background-color', '#f9f9f9');
			win.focus();
		});
	}).appendTo('body').css('opacity', 0);

	// Termporal timeout
	setTimeout(function() {
		$loader.addClass('hide');
		$loader.on('webkitAnimationEnd', function() {
			$loader.hide();
				loaded.done();
		});
	}, 2000);

	Promise.all([terminalLoaded, todoLoaded, loaded]).then(
	function(terminalLaunch, todoLaunch) {
		terminalLaunch[0].call();

		// For look & feel reasons..
		setTimeout(function() {
			todoLaunch[0].call();
		}, 200);
	});

	// For developing purposes
	window.wm = wm;
});
