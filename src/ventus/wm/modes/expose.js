/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define([
	'underscore',
	'ventus/core/events'
], function(_, Events) {
	'use strict';

	var ExposeMode = {
		// Launch when plugin is registered
		register: function() {
			var self = this;

			console.log('Expose mode registered.');

			this.$el.addEventListener('contextmenu', _.throttle(function() {
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
			var maxWidth = floor(this.width / grid);
			var maxHeight = floor(this.height / 2);

			var scale, left, top, pos;

			this.$el.classList.add('expose');

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

				win.$el.classList.add('exposing');
				win.$el.style.transformOrigin = '0 0';
				win.$el.style.transform = 'scale(' + scale + ')';
				win.$el.style.top = top + 'px';
				win.$el.style.left = left + 'px';
				Events.onTransitionEnd(win.$el, function() {
					win.$el.classList.remove('exposing');
				}, this);
			}

			this.overlay = true;

			var onClick = function() {
				self.$el.removeEventListener('click', onClick);
				self.mode = 'default';
			};
			this.$el.addEventListener('click', onClick);
		},

		// Lauch when plugin is disabled
		unplug: function() {
			for(var win, i=this.windows.length; i--;) {
				win = this.windows[i];

				win.restore();
				win.$el.style.transform = 'scale(1)';
				win.$el.style.transformOrigin = '50% 50%';

				var removeTransform = (function(win){
					return function () {
						this.$el.classList.remove('expose');
						win.$el.style.transform = '';
					};
				})(win);

				Events.onTransitionEnd(this.$el, removeTransform, this);

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
