
define(function(require) {
	var Window = require('wm/window');
	var WindowManager = require('wm/windowmanager');

	function main(config) {
		require('css!../css/normalize.less');
		require('css!../css/environment.less');

		var wm = new WindowManager();
		wm.createWindow();
		wm.createWindow().moveTo(60, 60);
		wm.createWindow().moveTo(120, 120);		
	}

	return {main: main};
});
