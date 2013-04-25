Ventus WM
===========================

A window manager experiment written in Javascript, HTML5 and CSS3.

<a href="http://www.rlamana.es/ventus">Live Demo!</a> (http://www.rlamana.es/ventus) | <a href="https://vimeo.com/62041866">Video Demo</a>

### Create a new window manager

	var wm = new Ventus.WindowManager();
	
### Create a new empty window

	var window = wm.createWindow({
		title: 'A new window',
		x: 50,
		y: 50,
		width: 400,
		height: 250
	});
	
	window.open();
	
### Create a new window wrapping a DOM Element

##### Using a query
	wm.createWindow.fromQuery('.my-app-content', {
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
