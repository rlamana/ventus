
define(function(require) {

	require('css!../../css/window.less');

	var WindowView = require('wm/windowview');
	var Emitter = require('core/emitter');

	var Window = function (options) {
		this.signals = new Emitter();

		var view = this.view = new WindowView();

		// Listen to views signals
		view.signals.on('mousedown', this.slots.focus, this);
		view.signals.on('drag', this.slots.movestart, this);
		view.signals.on('resize', this.slots.resize, this);
		view.signals.on('maximize', this.slots.maximize, this);
		view.signals.on('minimize', this.slots.minimize, this);
		view.signals.on('close', this.slots.close, this);

		// Listen to own signals
		this.signals.on('movestop', this.slots.movestop, this);
	};

	Window.prototype = {
		_restore: null,
		slots: {
			focus: function() {
				this.focus();
			},

			close: function() {
				this.close();
			},

			movestart: function(e) {
				this.signals.emit('movestart', e, this);
			},

			movestop: function(e) {
				this.view.movestop();
			},

			resize: function(e) {
				this.signals.emit('resize', e, this);
				this._restore = null;
			},

			maximize: function() {
				this.maximize();
			},

			minimize: function() {
				this.setSize(0,0);
			}
		},

		setWidth: function(w) {
			this.view.width = w;
			return this;
		},

		setHeight: function(h) {
			this.view.height = h;
			return this;
		},

		setSize: function(w, h) {
			this.view.width = w;
			this.view.height = h;
			return this;
		},

		getSize: function() {
			return {
				width: this.view.width,
				height: this.view.height
			}
		},

		maximize: function() {
			if (typeof this._restore === 'function') {
				// Restore las size ans position
				this._restore.apply(this);
				this._restore = null;
			} 
			else {
				// Create function to restore with old size and pos in its closure
				this._restore = (function() {
					var size = this.getSize();
					var pos = this.getPosition();

					return function() {
						this.setSize(size.width, size.height);
						this.setPosition(pos.x, pos.y);
					}
				}).apply(this);

				this.signals.emit('maximize', this);
			}
		},

		close: function() {
			this.signals.emit('close', this);
			this.view.closed = true;
		},

		focus: function() {
			this.signals.emit('focus', this);
			this.view.active = true;
		},

		blur: function() {
			this.signals.emit('blur', this);
			this.view.active = false;
		},

		moveTo: function(x, y) {
			this.view.x = x;
			this.view.y = y;
			return this;
		},

		setZIndex: function(value) {
			this.view.z = value
		},

		getZIndex: function() {
			return this.view.z;
		},

		setPosition: function(x, y) {
			return this.moveTo(x, y);
		},

		getPosition: function() {
			return {
				x: this.view.x,
				y: this.view.y
			};
		},

		toLocal: function(coord) {
			var origin = this.getPosition();

			return {
				x: coord.x - origin.x,
				y: coord.y - origin.y
			};
		},

		toGlobal: function(coord) {
			var origin = this.getPosition();

			return {
				x: coord.x + origin.x,
				y: coord.y + origin.y
			};
		}
	}

	return Window;
});
