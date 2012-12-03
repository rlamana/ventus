
define(function(require) {

	require('less!../../css/windowmanager.less');
	require('less!../../css/expose.less');

	var Window = require('wm/window');
	var View = require('core/view');

	var DefaultMode = require('wm/modes/default');
	var ExposeMode = require('wm/modes/expose');

	var WindowManager = function () {
		this.el = View("<div class='wm-space'><div class='wm-overlay' /></div>");
		$(document.body).append(this.el);

		this.$overlay = this.el.find('.wm-overlay');
		this.$overlay.css('z-index', this._baseZ-1);

		// Generate mode plugin actions wrapper
		_.each(this.actions, function(value){
			this[value] = (function(action) {
				return function() {
					this.mode.actions[action] && 
					this.mode.actions[action].apply(this, arguments);
				}
			}).call(this, value);
		}, this);

		this.windows = [];
		this.active = null;

		this.mode = 'default';
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
			if(!mode) return;

			// Unplug old system
			if (this._mode)
				this.mode['unplug'] && this.mode.unplug.apply(this);

			// Plug new mode system
			mode['plug'] && mode.plug.apply(this);

			this._mode = value;
		},

		get mode() {
			return this.modes[this._mode];
		},

		set overlay(value) {
			this.$overlay.css('opacity', value ? .8 : 0);
			this._overlay = value;
		},

		get overlay() {
			return this._overlay;
		},

		createWindow: function(options) {
			var win = new Window(options);

			// Connect window signals to the manager listeners
			win.signals.on('focus', this._focus, this);
			win.signals.on('blur', this._blur, this);
			win.signals.on('close', this._close, this);

			// Connect window signals to manager mode actions
			_.each(this.actions, function(action){
				win.signals.on(action, this[action], this);
			}, this);

			this.windows.push(win);

			win.space = this.el;

			win.focus();
			return win;
		},

		/**
		 * Internal action always performed besides the mode definition
		 */
		_focus: function(win) {
			var currentZ, 
				baseZ = 10000, 
				maxZ = baseZ + 10000;

			if (this.active && this.active === win)
				return;

			if(this.active) {
				currentZ = this.active.z;
				this.active.blur();
			}
			else {
				currentZ = baseZ;
			}

			// Reorder windows stack (@todo optimize this)
			this.windows = _.without(this.windows, win);
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
		_blur: function(win) {
			if(this.active === win)
				this.active = null;
		},

		/**
		 * Internal action always performed besides the mode definition
		 */
		_close: function(win) {
			// Remove window from manager
			var id = _.indexOf(this.windows, win), len;
			if(id === -1) { 
				console.log('Trying to close a window that doesn\'t exist in this window manager');
				return;
			}

			this.windows = _.without(this.windows, win);	
			len = this.windows.length;
			if(this.active && this.active === win) {
				this.active = (len !== 0) ? this.windows[len-1] : null;
				if (this.active)
					this.active.focus();
			}		
		}
	};

	return WindowManager;
});
