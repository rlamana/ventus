define(function() {
	var requireTodo = require.config({
		context: 'todo',

		baseUrl: 'todo/js',

		shim: {
			'underscore': {
				exports: '_'
			},
			'backbone': {
				deps: [
					'underscore',
					'$'
				],
				exports: 'Backbone'
			},
			'$': {
				'exports': '$'
			}
		},
		paths: {
			'$': '../../../../vendor/jquery',
			underscore: 'lib/underscore',
			backbone: 'lib/backbone/backbone',
			text: 'lib/require/text'
		}
	});

	requireTodo(['views/app','routers/router'], function(AppView, Workspace) {
		// Initialize routing and start Backbone.history()
		new Workspace();
		Backbone.history.start();

		// Initialize the application view
		new AppView();
	});
});

