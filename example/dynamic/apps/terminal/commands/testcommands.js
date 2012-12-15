/**
 * Copyright © 2012 Ramón Lamana
 */
 
(function(global, Terminus) {

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

	global.TestCommands = TestCommands;

})( window, window.Terminus );