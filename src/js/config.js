/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
requirejs.config({
	// To bypass browser cache uncomment this...
	//urlArgs: "bust=" +  (new Date()).getTime(),

	paths: {
        'tpl': 'vendor/require-plugins/tpl',
        'less': 'vendor/require-plugins/less',
        'text': 'vendor/require-plugins/text',

		'$': 'vendor/jquery', //'empty:'
		'handlebars': 'vendor/handlebars' //'empty:'
	},

	shim: {
		'$': {
			'exports': '$'
		},

		'Handlebars': {
			'exports': 'Handlebars'
		}
	}
});	