/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 */
requirejs.config({
	// To bypass browser cache uncomment this...
	//urlArgs: "bust=" +  (new Date()).getTime(),
	
	paths: {
        'tmpl': 'vendor/require-plugins/tmpl',
        'less': 'vendor/require-plugins/less',
        'text': 'vendor/require-plugins/text',

		'$': 'vendor/jquery',
		'Underscore': 'vendor/underscore',
		'domready': 'vendor/domready'
	},

	shim: {
		'$': {
			'exports': '$'
		},

		'Underscore': {
			'exports': '_'
		},

		'domready': {
			'exports': 'domready'
		}
	}
});	