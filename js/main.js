
define(function(require) {
	var Window = require('wm/window');

	function main(config) {
		require('css!../css/normalize.less');
		require('css!../css/environment.less');

		var win = new Window();
		win.moveTo(100, 100);
	}

	return {main: main};
});
