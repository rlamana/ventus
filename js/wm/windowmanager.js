
define(function(require) {

	require('css!../../css/windowmanager.less');
	require('css!../../css/expose.less');

	var Window = require('wm/window');
	var View = require('core/view');

	var WindowManager = function () {

		// Its root dom element
		this.el = View("<div class='wm-space' unselectable='on'/>");
		$(document.body).append(this.el);

		// Overlay
		this.overlay = View("<div class='wm-overlay' />");
		this.overlay.css('z-index', this._baseZ-1);
		this.overlay.appendTo(this.el);

		this._windows = [];
		this._moving = null;
		this._active = null;
		this._resizing = null;
	};

	WindowManager.prototype = {
		_baseZ: 10000,

		slots: {
			maximize: function(win) {
				win.move(0,0);
				win.resize(this.el.width(), this.el.height());
			},

			restore: function(win) {
				win.restore();
			},

			minimize: function(win) {
				win.resize(0,0);
			},

			focus: function(win) {
				var currentZ, maxZ = this._baseZ + 1000;

				if (this._active && this._active === win)
					return;

				if(this._active) {
					currentZ = this._active.z;
					this._active.blur();
				}
				else {
					currentZ = this._baseZ;
				}

				// Reorder windows stack (@todo optimize this)
				this._windows = _.without(this._windows, win);
				this._windows.push(win);
				
				win.z = currentZ + 1;

				// Refresh z-indexes just every 'maxZ' activations
				if (currentZ > maxZ + this._windows.length) {
					for(var z, i=this._windows.length; i--;) {
						z = this._windows[i].z;
						this._windows[i].z = this._baseZ + (z - maxZ);
					}
				}

				this._active = win;
			},

			blur: function(win) {
				if(this._active === win)
					this.active = null;
			},

			close: function(win) {
				// Remove window from manager
				var id = _.indexOf(this._windows, win), len;
				if(id === -1) { 
					console.log('Trying to close a window that doesn\'t exist in this window manager');
					return;
				}

				this._windows = _.without(this._windows, win);	
				len = this._windows.length;
				if(this._active && this._active === win) {
					this._active = (len !== 0) ? this._windows[len-1] : null;
					if (this._active)
						this._active.focus();
				}		
			}
		},

		set expose(value) {
			if(value) {
				this._startExpose();
			} else {
				this._stopExpose();
			}

			this._expose = value;
		},

		get expose() {
			return this._expose;
		},

		createWindow: function(options) {
			var win = new Window(options||{});

			// Listen to window signals
			win.signals.on('move', this.slots.move, this);
			win.signals.on('resize', this.slots.resize, this);
			win.signals.on('focus', this.slots.focus, this);
			win.signals.on('blur', this.slots.focus, this);
			win.signals.on('close', this.slots.close, this);
			win.signals.on('maximize', this.slots.maximize, this);
			win.signals.on('minimize', this.slots.minimize, this);
			win.signals.on('restore', this.slots.restore, this);

			this._windows.push(win);

			win.space = this.el;

			win.focus();
			return win;
		},


		_startExpose: function() {
			var grid = Math.ceil(this._windows.length / 2);
			var maxWidth = Math.floor(this.el.width() / grid);
			var maxHeight = Math.floor(this.el.height() / 2);

			var scale;

			for(var z, win, i=0, len=this._windows.length; i<len; i++) {
				win = this._windows[i];

				win.stamp();

				if(win.height > win.width) {
					scale = (win.height > maxHeight) ? maxHeight / win.height : 1;
				} 
				else {
					scale = (win.width > maxWidth) ? maxWidth / win.width : 1;
				}

				win.el.addClass('expose');
				win.enabled = false;
				
				win.el.css('-webkit-transition', 'left .3s ease-out, top .3s ease-out, -webkit-transform .3s');
				win.el.css('-webkit-transform', 'scale('+(scale)+')');

				var left = Math.floor((maxWidth - scale*win.width) / 2) + (i%grid)*maxWidth;
				var top = Math.floor((maxHeight - scale*win.height) / 2) + ((i<grid-1)? maxHeight : 0);

				win.el.css('top', top);
				win.el.css('left', left);
			}

			this._toggleOverlay();
		},

		_stopExpose: function() {
			for(var z, win, i=this._windows.length; i--;) {
				win = this._windows[i];
				win.restore();
				win.el.css('-webkit-transform', 'scale(1)');
				win.enabled = true;
				win.el.removeClass('expose');
			}

			this._toggleOverlay();
		},

		_toggleOverlay: function() {
			var opacity = this.overlay.css('opacity');
			this.overlay.css('opacity', (opacity == 0) ? .6 : 0);
		},
	};

	return WindowManager;
});
