/**
 * Ventus example
 * Copyright © 2012 Ramón Lamana
 */
(function(Ventus) {
	document.addEventListener('DOMContentLoaded', function() {
		var wm = new Ventus.WindowManager();

		// Terminal App.
		var terminalWin = wm.createWindow.fromQuery('.terminal-app', {
			title: 'Terminal',
			classname: 'terminal-window',
			width: 600,
			height: 300,
			x: 50,
			y: 60
		});

		terminalWin.signals.on('click', function(win){
			terminal.display.focus();
		});

		var terminal = new Terminus('.terminal-app', {
			welcome: '<div class="identity"><img src="terminal/img/logo.png" /><h1>Terminus.js</h1> ' +
				Terminus.version +
				'</div>Copyright 2012-2013 Ramón Lamana.<br/>' +
				'Press <span style="color:green">&lt; tab &gt;</span> to see a list of available commands.'
		});
		terminal.shell.include([TestCommands, ShapeCommands]);

		terminal.display.events.on('prompt', function() {
			terminalWin.$content.el.scrollTo({
        top: terminalWin.view.find('.terminusjs').height,
        behavior: 'smooth'
      });
		});

    // Todo App.
		var todoWin = wm.createWindow.fromQuery('.todo-app', {
			title: 'Todo',
			width: 330,
			height: 400,
			x: 670,
			y: 60
		});

		var playerWin = wm.createWindow.fromQuery('.player-app', {
			title: 'Video Player',
			classname: 'player-window',
			width: 635,
			height: 300,
			x: 490,
			y: 320,
			resizable: false,
			opacity: 1 // To fix problems with chrome video on Linux
		});

    // About App.
		var aboutWin = wm.createWindow.fromQuery('.about-app', {
			title: 'About Ventus',
			width: 250,
			height: 280,
			x: 140,
			y: 380
		});

		// Hide loader when loaded.
		var loader = document.querySelector("#loading-screen");

		// For look & feel reasons.
		function openWithDelay(win, delay) {
			setTimeout(function(){win.open();}, delay);
		}

		function init() {
			loader.classList.add('hide');
			loader.addEventListener('animationend', function() {
				loader.style.display = 'none';

				// Open windows
				openWithDelay(terminalWin, 0);
				openWithDelay(todoWin, 200);
				openWithDelay(aboutWin, 400);
				openWithDelay(playerWin, 600);
			});
		}

		setTimeout(init, 3000);

		// Exposé test button.
		document.querySelector(".expose-button").addEventListener('click', function() {
			setTimeout(function() { wm.mode = 'expose' }, 100);
		}, false);
	});
})(Ventus);
