
define(function(require) {

	var Window = require('wm/window');
	var dom = require('dom');

	var WindowManager = function () {
		this.el = dom("<div class='wm-space'/>")();
		this.el.css({
			position: 'absolute',
			width: '100%',
			height: '100%'
		});

		this.el.listen(this.events, this);
		$(document.body).append(this.el);

		this._windows = [];
		this._moving = null;
		this._active = null;
	};

	WindowManager.prototype = {
		events: {
			'mousemove': function(e) {
				var local, move = this._moving;

				if(move && move.window) {
					move.window.setPosition({
						x: e.clientX - move.offset.x,
						y: e.clientY - move.offset.y
					});
				}
			},

			'mouseup': function(e) {
				if (!this._moving)
					return ;

				this._moving.window.signals.emit('movestop');
				this._moving = null;
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

			focus: function(e, win) {
				var z = 100000 + this._windows.length;
				win.setZIndex(z + 1);

				if(this._active) {
					this._active.setZIndex(z);
					this._active.signals.emit('blur');
				}

				this._active = win;
			}
		},

		createWindow: function(options) {
			var win = new Window(options||{});
			win.signals.on('movestart', this.slots.move, this);
			win.signals.on('focus', this.slots.focus, this);

			this._windows.push(win);

			this.el.append(win.view.el);

			this._active = win;
			return win;
		}
	};

	return WindowManager;
});
