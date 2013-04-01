/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define(['less!../../../css/fullscreen'], function() {
	'use strict';

	var FullscreenMode = {

		// Launch when plugin is registered
		register: function() {
			console.log('Fullscreen mode registered.');
		},

		// Lauch when plugin is enabled
		plug: function() {
			this.el.addClass('fullscreen');

			for(var win, i=0, len=this.windows.length; i<len; i++) {
				win = this.windows[i];
				win.move(0,0);
				win.el.css('-webkit-transform', 'translate3d(0, 0, 0);');
				win.resize(this.el.width(), this.el.height());
			}
		},

		// Lauch when plugin is disabled
		unplug: function() {
			for(var win, i=this.windows.length; i--;) {
				win = this.windows[i];

				win.restore();
				win.el.css('transform', 'scale(1)');
				win.el.css('transform-origin', '50% 50%');

				var removeTransform = (function(win){
					return function () {
						this.el.removeClass('fullscreen');
						win.el.css('transform', '');
					};
				})(win);

				this.el.onTransitionEnd(removeTransform, this);

				win.movable = true;
				win.resizable = true;
				win.enabled = true;
			}

			this.overlay = false;
		},

		actions: {
			focus: function(/*win*/) {
			},

			close: function() {
				this.mode = 'expose';
			},

			select: function(win/*, e*/) {
				this.mode = 'default';
				win.focus();
			}
		}
	};

	return FullscreenMode;
});
