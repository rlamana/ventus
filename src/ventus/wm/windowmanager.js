/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define([
	'ventus/wm/window',
	'ventus/core/view',
	'ventus/wm/modes/default',
	'ventus/wm/modes/expose',
  'ventus/less/windowmanager.less'
],
function(Window, View, DefaultMode, ExposeMode) {
	'use strict';

	var WindowManager = function (container) {
		var createWindow;
    var root = container ? container : document.body;

		this.view = new View(
      '<div class="wm-space"><div class="wm-overlay" /></div>'
    );
    root.insertBefore(this.view.el, root.firstChild);

		this.$overlay = this.view.find('.wm-overlay');
		this.$overlay.el.style.zIndex = this._baseZ - 1;

		// Generate mode plugin actions wrapper
		this.actions.forEach(function(value){
			this[value] = (function(action) {
				return function() {
					if(this.currentMode.actions[action]) {
						this.currentMode.actions[action].apply(this, arguments);
					}
				};
			}).call(this, value);
		}, this);

		// Launch register of every mode plugged-in
		for(var mode in this.modes) {
			if(this.modes.hasOwnProperty(mode) && this.modes[mode].register) {
				this.modes[mode].register.apply(this);
			}
		}

		this.windows = [];
		this.active = null;

		this.mode = 'default';

		// Replace createWindow function on prototype with instance-specific copy
		// (avoids pollution of prototype during the next step)
		createWindow = this.createWindow;
		this.createWindow = createWindow.bind(this);
		// Bind this to sub-functions of createWindow function
		this.createWindow.fromQuery = createWindow.fromQuery.bind(this);
		this.createWindow.fromElement = createWindow.fromElement.bind(this);
	};

	WindowManager.prototype = {
		actions: [
			'focus',
			'blur',
			'close',
			'maximize',
			'minimize',
			'restore',
			'select'
		],

		modes: {
			'default': DefaultMode,
			'expose': ExposeMode
		},

		set mode(value) {
			var mode = this.modes[value];
			if(!mode || this._mode === value) {
				return;
			}

			// Unplug old system
			if (this._mode && this.currentMode.unplug) {
				this.currentMode.unplug.apply(this);
			}

			// Plug new mode system
			if(mode.plug) {
				mode.plug.apply(this);
			}

			this._mode = value;
		},

		get mode() {
			return this._mode;
		},

		get currentMode() {
			return this.modes[this._mode];
		},

		set overlay(value) {
			this.$overlay.el.style.opacity = value ? 0.8 : 0;
			this._overlay = this.$overlay.el.style.opacity;
		},

		get overlay() {
			return this._overlay;
		},

		createWindow(options) {
			var win = new Window(options);

			// Show 'default' mode
			this.mode = 'default';

			// Connect window signals to the manager listeners
			win.signals.on('focus', this._focus, this);
			win.signals.on('blur', this._blur, this);
			win.signals.on('close', this._close, this);

			// Connect window signals to manager mode actions
			this.actions.forEach(function(action){
				win.signals.on(action, this[action], this);
			}, this);

			this.windows.push(win);

			win.space = this.view;

			win.focus();
			return win;
		},

		/**
		 * Internal action always performed besides the mode definition
		 */
		_focus(win) {
			var currentZ,
				baseZ = 10000,
				maxZ = baseZ + 10000,
				index;

			if (this.active && this.active === win) {
				return;
			}

			if(this.active) {
				currentZ = this.active.z;
				this.active.blur();
			}
			else {
				currentZ = baseZ;
			}

			// Reorder windows stack (@todo optimize this)
			index = this.windows.indexOf(win);
			this.windows.splice(index, 1); // Remove from array
			this.windows.push(win);

			win.z = currentZ + 1;

			// Refresh z-indexes just every 'maxZ' activations
			if (currentZ > maxZ + this.windows.length) {
				for(var z, i=this.windows.length; i--;) {
					z = this.windows[i].z;
					this.windows[i].z = baseZ + (z - maxZ);
				}
			}

			this.active = win;
		},

		/**
		 * Internal action always performed besides the mode definition
		 */
		_blur(win) {
			if(this.active === win) {
				this.active = null;
			}
		},

		/**
		 * Internal action always performed besides the mode definition
		 */
		_close(win) {
			// Remove window from manager
			var id = this.windows.indexOf(win), len;
			if(id === -1) {
				console.log('Trying to close a window that doesn\'t exist in this window manager');
				return;
			}

			this.windows.splice(id, 1); // Remove from array
			len = this.windows.length;
			if(this.active && this.active === win) {
				this.active = (len !== 0) ? this.windows[len-1] : null;
				if (this.active) {
					this.active.focus();
				}
			}
		}
	};

	WindowManager.prototype.createWindow.fromQuery = function(selector, options) {
    const element = document.querySelector(selector);
    if (!!element) {
      options.content = new View(element);
    }
		return this.createWindow(options);
	};

	WindowManager.prototype.createWindow.fromElement = function(element, options) {
		options.content = new View(element);
		return this.createWindow(options);
	};

	return WindowManager;
});
