Ventus WM [![Build Status](https://travis-ci.org/rlamana/Ventus.svg?branch=master)](https://travis-ci.org/rlamana/Ventus) [![Join the chat at https://gitter.im/rlamana/Ventus](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/rlamana/Ventus?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
===========================

A window manager written in Javascript, HTML5 and CSS3.

<a href="http://www.rlamana.com/ventus">Live Demo!</a> (http://www.rlamana.com/ventus) | <a href="https://vimeo.com/62041866">Video Demo</a>

This project started as an experiment and even though it was stable enough **it was never meant to be mantained over time**. However, feel free to fork and send PRs!

Version 0.3.0 migrates code to webpack and ES6 and is available in branch: https://github.com/rlamana/Ventus/tree/v0.3.0.

### Creating a new window manager

	var wm = new Ventus.WindowManager();
	
### Creating a new empty window

	var window = wm.createWindow({
		title: 'A new window',
		x: 50,
		y: 50,
		width: 400,
		height: 250
	});
	
	window.open();

### Creating a new empty window without animations and staying inside of the space

	var window = wm.createWindow({
		title: 'A new window',
		x: 50,
		y: 50,
		width: 400,
		height: 250

		animations: false,
		stayinspace: true,
	});
	
	window.open();
	
### Creating a new window wrapping a DOM Element

##### Using a query
	wm.createWindow.fromQuery('#element .selector', {
		title: 'My App',
		width: 330,
		height: 400,
		x: 670,
		y: 60
	});
	
##### Using a reference
	wm.createWindow.fromElement(domElement, {
		title: 'My App',
		width: 500,
		height: 500,
		x: 0,
		y: 0
	});

### Listening to events

##### Defining handlers in constructor
	var window = wm.createWindow({
		title: 'A new window',
		events: {
			open: function() {
				console.log('The window was open');
			},
			
			closed: function() {
				console.log('The window was closed');
			},
		}
	});

##### Using the 'signals' property
	var window = wm.createWindow({
		title: 'A new window'
	});
	
	window.signals.on('open', function() {
		console.log('The window was open');
	});
	
### Destroying a window
When a window is closed the content is not destroyed by default. This way windows can be open again keeping the wrapped DOM element. To completely destroy the window, the method 'destroy' needs to be called:

	var window = wm.createWindow({
		title: 'A new window',
		events: {
			closed: function() {
				this.destroy();
			}
		}
	});
