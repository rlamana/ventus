/**
 * Copyright © 2012 Ramón Lamana
 */
 
(function(global) {

	'use strict';

	var TestCommands = {
		block: function() {
			this.exit();
		},

		exit: function() {
			location.reload();
		},

		sum: function(op1, op2) {
			this.write(parseInt(op1) + parseInt(op2));
			this.exit();
		},

		hello: function() {
			this.write("<div style='color:blue'>Hola mundo</div>", 'WEB');
			this.exit(0);
		},

		read: function() {
			var self = this;

			this.write('¿Cómo te llamas?');
			this.read().then(function(data){
				self.write("Hola " + data + "!!!!!");
				self.exit(0);
			});
		}

	};

	if (typeof module !== 'undefined' && module.exports)
		module.exports = TestCommands;
	else if (typeof define !== 'undefined' && define.amd)
		define(function() { return TestCommands });
	else
		global.TestCommands = TestCommands;
	
})(this);