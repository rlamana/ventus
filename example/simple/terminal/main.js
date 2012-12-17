define(function() {
	var requireTerminal = require.config({
		context: 'terminal',

		baseUrl: 'terminal',

		shim: {
			'terminus': {
				'exports': 'Terminus'
			}
		},
		paths: {
			'terminus': 'terminus.min'
		}
	});

	requireTerminal(['terminus', 'commands/testcommands'], function(Terminus, TestCommands) {
	    var terminal = new Terminus('.terminal-app', {
	        welcome: "<div class='identity'><img src='terminal/img/logo.png' /><h1>Terminus.js</h1> "+Terminus.version+"</div>Copyright 2012 Ramón Lamana.<br/>Press <span style='color:green'>&lt; tab &gt;</span> to see a list of available commands."
	    });

	    terminal.shell.include([TestCommands]);
	});
});
