
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

	// Horrible crap because Promises.all not working properly...
	terminalLoaded.getFuture().then(function(launcher) {
		var terminalLaunch = launcher;
		todoLoaded.getFuture().then(function(launcher) {
			var todoLaunch = launcher;
			loaded.getFuture().then(function() {
				terminalLaunch();
				todoLaunch();
			});
		});
	});

	// For developing purposes
	window.wm = wm;
});
