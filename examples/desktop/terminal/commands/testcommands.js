/**
 * Terminus.js example commands
 * Copyright © 2012 Ramón Lamana
 */
(function(global) {

	'use strict';

	var TestCommands = {
		ls: function() {
			// Fake 'ls' command for demo purposes
			this.write('LICENSE\nMakefile\nREADME.md\nbuild/\nbuild.js\nexamples/\nsrc/\nvendor/\n');
			this.exit();
		},

		ll: function() {
			TestCommands.ls.call(this, arguments);
		},

		help: function() {
			this.write('Press < tab > to see a list of available commands.');
			this.exit();
		},

		pwd: function() {
			// Fake 'pwd' command for demo purposes
			this.write('github.com:rlamana/Ventus');
			this.exit();
		},

		cd: function() {
			// Fake 'cd' command for demo purposes
			this.write('Sorry, access not granted');
			this.exit();
		},

		exit: function() {
			location.reload();
		},

		sum: function(op1, op2) {
			if(arguments.length < 2)
				this.write('Please insert two numeric values (ex. > sum 5 6)', 'stderr');
			else
				this.write(parseInt(op1,10) + parseInt(op2,10));

			this.exit();
		},

		echo: function() {
			var args = Array.prototype.slice.call(arguments, 0);
			this.write(args.join(' '));

			this.exit(0);
		}
	};

	global.TestCommands = TestCommands;

})(this);