
define(function(require) {
	var Window = require('wm/window');
	var WindowManager = require('wm/windowmanager');

	function main(config) {
		require('css!../css/normalize.less');
		require('css!../css/environment.less');

		var wm = new WindowManager();

		var randomW, randomH;
		for(var i=1; i < 6; i++) {
			randomW = Math.ceil(Math.random()*1000 % 600);
			randomH = Math.ceil(Math.random()*1000 % 600);

			wm.createWindow()
				.moveTo(i*60, i*60)
				.setSize(
					randomW > 200 ? randomW : 200,
					randomH > 200 ? randomH : 200
				);
		}

		// For developing purposes
		window.wm = wm;
	}

	return {main: main};
});
