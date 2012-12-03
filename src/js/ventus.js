
requirejs.config({
	baseUrl: '../src/js',

	// To bypass browser cache uncomment this...
	//urlArgs: "bust=" +  (new Date()).getTime(),
	paths: {
        'tmpl': 'vendor/require-plugins/tmpl',
        'less': 'vendor/require-plugins/less',
        'text': 'vendor/require-plugins/text',

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
});		 

define('ventus', function(require) {
	return {
		WindowManager: require('wm/windowmanager'),
		Window: require('wm/window')
	};
});


