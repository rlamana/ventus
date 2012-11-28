
define(function(require) {

	require('css!../../css/window.less');

	var template = require("tmpl!../tmpl/window.tmpl");
	var Emitter = require('core/emitter');

	var Window = function (options) {
		var self = this;

		this.signals = new Emitter();

		this.el = template({
			title: "Window"
		});

		// Dom events
		this.el.listen(this.events, this); 

		this.width = 400;
		this.height = 200;
		this.z = 10000;

		// Open animation
		this.el.addClass('opened');
		this.el.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
			self.el.removeClass('opened');
		});

		this.enabled = true;
		this.active = false;
		this.closed = false;
	};

	Window.prototype = {
		_restore: null,

		signals: [
			'focus',
			'blur',
			'maximize',
			'minimize',
			'close',
			'move',
			'resize'
		],

		events: {
			'mousedown': function(e) {
				this.enabled && this.focus();
			},

			'header mousedown': function(e) {
				if(!this.enabled) return;

				this.el.addClass('move');
				this.signals.emit('move', e, this);
			},

			'header dblclick': function(e) {
				this.enabled && this.maximize();
			},

			'header button.wm-close click': function(e) {
				e.stopPropagation();
				e.preventDefault();

				this.enabled && this.close();
			},

			'header button.wm-maximize click': function(e) {
				e.stopPropagation();
				e.preventDefault();

				this.enabled && this.maximize();
			},

			'header button.wm-minimize click': function(e) {
				e.stopPropagation();
				e.preventDefault();

				this.enabled && this.minimize();
			},

			'header button mousedown': function(e) {
				e.stopPropagation();
				e.preventDefault();
			},

			'button.wm-resize mousedown': function(e) {
				this.enabled && this.signals.emit('resize', e, this);
			}
		},

		set active(value) {
			if(value) {
				this.signals.emit('focus', this);
				this.el.addClass('active');
			} 
			else {
				this.signals.emit('blur', this);
				this.el.removeClass('active');
			}

			this._active = value;
		},

		get active() {
			return this._active;
		},

		set enabled(value) {
			if(!value) {
				this.el.addClass('disabled');
			} 
			else {
				this.el.removeClass('disabled');
			}

			this._enabled = value;
		},

		get enabled() {
			return this._enabled;
		},

		set closed (value) {
			var self = this;
			if(value) {
				this.signals.emit('close', this);

				this.el.addClass('closed');
				this.el.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
					//self.el.css('display', 'none');
				});
				//this.detachContent(); @todo implement this function and attachContent();
			}

			this._closed = value;
		},

		get closed() {
			return this._closed;
		},

		set width(value) {
			this.el.width(value);
		},

		get width() {
			return parseInt(this.el.width());
		},

		set height(value) {
			this.el.height(value);
		},
		
		get height() {
			return parseInt(this.el.height());
		},

		set x(value) {
			this.el.css('left', value);
		},

		set y(value) {
			this.el.css('top', value);
		},

		get x() {
			return parseInt(this.el.css('left'));
		},

		get y() {
			return parseInt(this.el.css('top'));
		},

		set z(value) {
			this.el.css('z-index', value);
		},

		get z() {
			return parseInt(this.el.css('z-index'));
		},

		resize: function(w, h) {
			this.width = w;
			this.height = h;
			return this;
		},

		move: function(x, y) {
			this.x = x;
			this.y = y;
			return this;
		},

		/**
		 * @return A function that restores this window
		 */
		stamp: function() {
			this.restore = (function() {
				var size = {
					width: this.width,
					height: this.height
				};

				var pos = {
					x: this.x,
					y: this.y
				};

				return function() {
					this.resize(size.width, size.height);
					this.move(pos.x, pos.y);
				}
			}).apply(this);
		},

		restore: function(){},

		maximize: function() {
			if (typeof this._restore === 'function') {
				// Restore las size and position
				this._restore.apply(this);
				this._restore = null;
			} 
			else {
				// Create function to restore with old size and pos in its closure
				this._restore = this.stamp();

				this.signals.emit('maximize', this);
			}
		},

		minimize: function() {
			this.signals.emit('minimize', this);
		},

		close: function() {
			this.closed = true;
		},

		focus: function() {
			this.active = true;
		},

		blur: function() {
			this.active = false;
		},

		drop: function() {
			this.el.removeClass('move');
		},

		toLocal: function(coord) {
			return {
				x: coord.x - this.x,
				y: coord.y - this.y
			};
		},

		toGlobal: function(coord) {
			return {
				x: coord.x + this.x,
				y: coord.y + this.y
			};
		}
	}

	return Window;
});
