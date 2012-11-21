//define(function(require) {
(function() {
	var config = {
		context: 'wm',
		baseUrl: 'js',
		enforceDefine: true,

		// To bypass browser cache uncomment this...
		//urlArgs: "bust=" +  (new Date()).getTime(),

		paths: {
			'tmpl': 'tmpl',
			'css': 'css',

			'$': 'vendor/jquery',
			'Underscore': 'vendor/underscore',
		},

		shim: {
			'$': {
				'exports': '$'
			},

			'Underscore': {
				'exports': '_'
			}
		}
	};

	require.config(config)([ '../js/main' ], function(boot) {
		setTimeout(function() {
			boot.main(config);
		}, 1000);
	});

})();

function debug(key, moduleName) {
	require([moduleName], function(module) {
		window[key] = module
	})
}

