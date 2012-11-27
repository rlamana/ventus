
define(function(require) {
	var Window = require('wm/window');
	var WindowManager = require('wm/windowmanager');

	function main(config) {
		require('css!../css/normalize.less');
		require('css!../css/environment.less');

		var wm = new WindowManager();

		for(var i=1; i < 6; i++) {
			wm.createWindow().moveTo(i*60, i*60);
		}
	}

	return {main: main};
});
