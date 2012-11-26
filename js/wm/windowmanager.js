
define(function(require) {

	var Window = require('wm/window');
	var dom = require('dom');

	var WindowManager = function () {
		this.el = dom("<div class='wm-space'/>")();
		this.el.css({
			position: 'absolute',
			width: '100%',
			height: '100%',
			overflow: 'hidden'
		});

		this.el.listen(this.events, this);
		$(document.body).append(this.el);

		this._windows = [];
		this._moving = null;
		this._active = null;
		this._resizing = null;
	};

	WindowManager.prototype = {
		_baseZ: 10000,

		events: {
			'mousemove': function(e) {
				var local, 
					move = this._moving, 
					resize = this._resizing;

				if(move && move.window) {
					move.window.setPosition({
						x: e.clientX - move.offset.x,
						y: e.clientY - move.offset.y
					});
				}

				if (resize && resize.window) {
					resize.window.setSize(
						resize.current.width + e.clientX - resize.origin.x,
						resize.current.height + e.clientY - resize.origin.y
					);
				}
			},

			'mouseup': function(e) {
				if (this._moving) {
					this._moving.window.signals.emit('movestop');
					this._moving = null;
				}

				if (this._resizing) {
					this._resizing.window.signals.emit('resizestop');
					this._resizing = null;
				}
			}
		},

		slots: {
			move: function(e, win) {
				this._moving = {
					window: win,
					offset: win.toLocal({
						x: e.clientX,
						y: e.clientY
					})
				};
			},

			resize: function(e, win) {
				this._resizing = {
					window: win,
					origin: {
						x: e.clientX,
						y: e.clientY
					},
					current: win.getSize()
				};
			},

			focus: function(win) {
				var currentZ, maxZ = this._baseZ + 5;

				if (this._active && this._active === win)
					return;

				if(this._active) {
					currentZ = this._active.getZIndex();
					this._active.blur();
				}
				else
					currentZ = this._baseZ;

				// Reorder windows stack (@todo optimize this)
				this._windows = _.without(this._windows, win);
				this._windows.push(win);
				
				win.setZIndex(currentZ + 1);

				// Refresh z-indexes just every 'maxZ' activations
				if (currentZ > maxZ + this._windows.length) {
					for(var z, i=this._windows.length; i--;) {
						z = this._windows[i].getZIndex();
						this._windows[i].setZIndex(this._baseZ + (z  - maxZ));
					}
				}

				this._active = win;
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

		createWindow: function(options) {
			var win = new Window(options||{});

			win.signals.on('movestart', this.slots.move, this);
			win.signals.on('resize', this.slots.resize, this);
			win.signals.on('focus', this.slots.focus, this);
			win.signals.on('close', this.slots.close, this);

			this._windows.push(win);

			this.el.append(win.view.el);

			win.focus();
			return win;
		}
	};

	return WindowManager;
});
