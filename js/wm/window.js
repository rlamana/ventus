
define(function(require) {

	require('css!../../css/window.less');

	var WindowView = require('wm/windowview');
	var Emitter = require('core/emitter');

	var Window = function (options) {
		this.signals = new Emitter();

		var view = this.view = new WindowView();

		// Listen to presenters signals
		view.signals.on('focus', this.slots.focus, this);
		view.signals.on('blur', this.slots.blur, this);
		view.signals.on('movestart', this.slots.movestart, this);

		this.signals.on('movestop', this.slots.movestop, this);
	};

	Window.prototype = {
		slots: {
			focus: function(e) {
				this.signals.emit('focus', e, this);
				this.view.state = 'focused';
			},

			blur: function(e) {
				this.signals.emit('blur', e, this);
				this.view.state = 'blurred';
			},

			movestart: function(e) {
				this.signals.emit('movestart', e, this);
				this.view.state = 'moving';
			},

			movestop: function(e) {
				this.view.state = 'default';
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

		focus: function() {
			this.signals.emit('focus', e, this);
			this.view.state = 'focused';
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

		setPosition: function(coord) {
			return this.moveTo(coord.x, coord.y);
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
