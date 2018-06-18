/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define([
	'$',
	'underscore',
	'ventus/core/promise'
], function($, _, Promise) {
	'use strict';

	var ExposeMode = {
		// Launch when plugin is registered
		register: function() {
			var self = this;
			var listener;
			var listeners = this.exposeListeners;

			var setMode = function (){
				if (self.mode !== 'expose') {
					if (self.windows.length > 0) {
						self.mode = 'expose';
					}
				} else {
					self.mode = 'default';
				}
			};

			var keypressCallback = function (keyCode) {
				return {
					selector: $(document),
					on: 'keypress',
					callback: function (event) {
						if (event.keyCode === keyCode) {
							setMode();
						}
					}
				};
			};

			var validListeners = {
				a: keypressCallback(97),
				enter: keypressCallback(13),
				space: keypressCallback(32),
				rightclick: {
					selector: this.el,
					on: 'contextmenu',
					callback: function () {
						setMode();
						return false;
					}
				}
			};

			if (typeof listeners !== 'string') {
				throw new Error('Error, showExposeOn/exposeListeners must be a string.');
			}

			listeners = listeners.split('|');
			if (listeners.indexOf('none') < 0) {
				listeners.forEach(function (type) {
					if (type in validListeners === false) {
						throw new Error('Error, exposeListener type is not valid. Valid types are "a,enter,space,rightclick,none".');
					}

					listener = validListeners[type];
					listener.selector.on(listener.on, _.throttle(listener.callback, 1000));
				});
			}

			console.log('Expose mode registered.');
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

				var endExposing = function() {
					win.el.removeClass('exposing');
				};

				if (win.animations) {
					win.el.onTransitionEnd(endExposing, this);
				} else {
					endExposing.call(this);
				}
			}

			this.overlay = true;
			this.el.one('click', function() {
				self.mode = 'default';
			});
		},

		// Lauch when plugin is disabled
		unplug: function() {
			var promise = new Promise();
			promise.getFuture().then(function() {
				this.el.removeClass('expose');
			}.bind(this));

			if (this.windows.length === 0) {
				promise.done();
			}

			for(var win, i=this.windows.length; i--;) {
				win = this.windows[i];

				win.restore();
				win.el.css('transform', 'scale(1)');
				win.el.css('transform-origin', '50% 50%');

				var removeTransform = (function(win, windowIndex){
					return function () {
						if (windowIndex === 0) {
							promise.done();
						}
						win.el.css('transform', '');
					};
				})(win, i);

				if (win.animations) {
					this.el.onTransitionEnd(removeTransform, this);
				} else {
					removeTransform.call(this);
				}

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
