/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define(['underscore'], function(_) {
	'use strict';

	var ExposeMode = {
		// Launch when plugin is registered
		register: function() {
			var self = this;

			console.log('Expose mode registered.');

			this.el.on('contextmenu', _.throttle(function() {
				// Right click sets expose mode
				if (self.mode !== 'expose') {
					if(self.windows.length > 0) {
						self.mode = 'expose';
					}
				} else if(self.mode === 'expose') {
					self.mode = 'default';
				}

				return false;
			}, 1000));
		},

		// Launch when plugin is enabled
		plug: function() {
			var floor = Math.floor, ceil = Math.ceil, self = this;

			var grid = ceil(this.windows.length / 2);
			var maxWidth = floor(this.el.width() / grid);
			var maxHeight = floor(this.el.height() / 2);

			var scale, left, top, pos;

			this.el.addClass('expose');

			for(var win, i=0, len=this.windows.length; i<len; i++) {
				win = this.windows[i];

				win.stamp();

				// Scale factor
				if(win.height > win.width) {
					scale = (win.height > maxHeight) ? maxHeight / win.height : 1;
				}
				else {
					scale = (win.width > maxWidth) ? maxWidth / win.width : 1;
				}

				scale -= 0.15; // To add a little padding

				pos = {
					x: (i%grid)*maxWidth,
					y: ((i<grid)?0:1)*maxHeight
				};

				// New position
				left = pos.x + floor((maxWidth - scale*win.width) / 2);
				top = pos.y + floor((maxHeight - scale*win.height) / 2);

				win.enabled = false;
				win.movable = false;

				win.el.addClass('exposing');
				win.el.css('transform-origin', '0 0');
				win.el.css('transform', 'scale(' + scale + ')');
				win.el.css('top', top);
				win.el.css('left', left);
				win.el.onTransitionEnd(function(){
					win.el.removeClass('exposing');
				}, this);
			}

			this.overlay = true;
			this.el.one('click', function() {
				self.mode = 'default';
			});
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
						this.el.removeClass('expose');
						win.el.css('transform', '');
					};
				})(win);

				this.el.onTransitionEnd(removeTransform, this);

				win.movable = true;
				win.enabled = true;
			}

			this.overlay = false;
		},

		actions: {
			focus: function() {
			},

			close: function() {
				this.mode = 'expose';
			},

			select: function(win) {
				this.mode = 'default';
				win.focus();
			}
		}
	};

	return ExposeMode;
});
