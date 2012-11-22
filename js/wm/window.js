
define(function(require) {

	require('css!../../css/window.less');

	var template = require("tmpl!../tmpl/window.tmpl");
	var Emitter = require('core/emitter');

	var Window = function (options) {
		this.signals = new Emitter();

		this.el = template({
			title: "Window"
		});

		// Dom events
		this.el.listen(this.events, this); 

		// Object signals
		this.signals.on('focus', this.slots.focus, this);
		this.signals.on('blur', this.slots.blur, this);
		this.signals.on('drag', this.slots.drag, this);
		this.signals.on('drop', this.slots.drop, this);

		this.setSize(400, 200);
	};

	Window.prototype = {
		events: {
			'mousedown': function(e) {
				this.signals.emit('focus', e, this);
			},

			'header mousedown': function(e) {
				this.signals.emit('drag', e, this);
			}
		},

		slots: {
			focus: function(e) {
				this.el.addClass('active');
			},

			blur: function(e) {
				this.el.removeClass('active');
			},

			drag: function(e) {
				this.el.addClass('drag');
			},

			drop: function(e) {
				this.el.removeClass('drag');
			}
		},

		_move: false,

		setWidth: function(w) {
			this.el.width(w);

			return this;
		},

		setHeight: function(h) {
			this.el.height(h);

			return this;
		},

		setSize: function(w, h) {
			this.setWidth(w).setHeight(h);

			return this;
		},

		focus: function() {
			this.signals.emit('focus', e, this);
		},

		moveTo: function(x, y) {
			this.el.css('left', x);
			this.el.css('top', y);

			return this;
		},

		setZIndex: function(value) {
			this.el.css('z-index', value);
		},

		getZIndex: function() {
			return this.el.css('z-index');
		},

		setPosition: function(coord) {
			return this.moveTo(coord.x, coord.y);
		},

		getPosition: function() {
			return {
				x: parseInt(this.el.css('left')),
				y: parseInt(this.el.css('top'))
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
