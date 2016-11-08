/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define(function() {
	'use strict';

	var DefaultMode = {
		register: function() {
			console.log('Default mode registered.');
		},

		plug: function() {
		},

		unplug: function() {
		},

		actions: {
			maximize: function(win) {
				win.move(0, 0);
				win.$el.style.transform = 'translate3d(0, 0, 0);';
				setTimeout(function() {
					win.resize(this.$el.offsetWidth, this.$el.offsetHeight);
				}.bind(this), 0);
			},

			restore: function(win, restore) {
				restore.call(win);
			},

			minimize: function(win) {
				win.resize(0,0);
			}
		}
	};

	return DefaultMode;
});
