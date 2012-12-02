(function() {
	var config = {
		baseUrl: 'js',

		// To bypass browser cache uncomment this...
		//urlArgs: "bust=" +  (new Date()).getTime(),
		paths: {
	        'tmpl': 'vendor/plugins/tmpl',
	        'less': 'vendor/plugins/less',
	        'text': 'vendor/plugins/text',

			'$': 'vendor/jquery',
			'Underscore': 'vendor/underscore'
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

	var coreRequire = require.config(config)
	coreRequire([ 'main' ], function(main) {
		main.init(config);
	});
})();

