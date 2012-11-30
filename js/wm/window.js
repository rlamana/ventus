
define(function(require) {

	require('css!../../css/window.less');

	var WindowView = require("tmpl!../tmpl/window.tmpl");

	var Emitter = require('core/emitter');
	var View = require('core/view');


	var Window = function (options) {
		this.signals = new Emitter();

		// View
		this.el = WindowView(options||{
			title: "Window"
		});
		this.el.listen(this.events.window, this); 

		this.width = 400;
		this.height = 200;

		this.x = 0;
		this.y = 0;
		this.z = 10000;

		// Open animation
		this.el.addClass('opening');
		this.el.onAnimationEnd(function(){
			this.el.removeClass('opening');
		}, this);

		this.enabled = true;
		this.active = false;
		this.closed = false;
		this.maximized = false;
		this.minimized = false;

		this.movable = true;
		this.resizable = true;
	};

	Window.prototype = {
		_restore: null,
		_moving: null,
		_resizing: null,

		events: {
			window: {
				'click': function(e) {
					this.signals.emit('select', this, e);
				},

				'mousedown': function(e) {
					this.enabled && this.focus();
				},

				'header mousedown': function(e) {
					if(!this.enabled || !this.movable) return;

					this._moving = this.toLocal({
						x: e.clientX,
						y: e.clientY
					});

					this.el.addClass('move');
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
					if(!this.enabled || !this.movable) return;

					this._resizing = {
						width: this.width - e.clientX,
						height: this.height - e.clientY
					};

					this.el.addClass('resizing');
				}
			},

			space: {
				'mousemove': function(e) {
					this._moving && this.move(
						e.clientX - this._moving.x,
						e.clientY - this._moving.y
					);
					
					this._resizing && this.resize(
						e.clientX + this._resizing.width,
						e.clientY + this._resizing.height 
					);
				},

				'mouseup': function(e) {
					if (this._moving) {
						this.el.removeClass('move');
						this._moving = null;
					}

					if (this._resizing) {
						this.el.removeClass('resizing');
						this._restore = null;
						this._resizing = null;
					}
				}
			}
		},

		set space(el) {
			if(el && !el.listen) {
				console.error("The given space element is not a valid View");
				return;
			}

			el.append(this.el);
			el.listen(this.events.space, this);
		},


		get maximized() {
			return this._maximized;
		},

		set maximized(value) {
			if(value) {
				this.stamp();
				this.signals.emit('maximize', this);
			} 
			else {
				this.signals.emit('restore', this);
	
			}

			this._maximized = value;
		},


		get minimized() {
			return this._minimized;
		},

		set minimized(value) {
			if(value) {
				this.stamp();
				this.signals.emit('minimize', this);
			} 
			else {
				this.signals.emit('restore', this);
			}

			this._minimized = value;
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

		set movable(value) {
			this._movable = !!value;
		},

		get movable() {
			return this._movable;
		},

		set resizable(value) {
			this._resizable = !!value;
		},

		get resizable() {
			return this._resizable;
		},

		set closed (value) {
			var self = this;
			if(value) {
				this.signals.emit('close', this);

				this.el.addClass('closing');
				this.el.onAnimationEnd(function(){
					this.el.removeClass('closing');
					this.el.addClass('closed');
				}, this);

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

					return this;
				}
			}).apply(this);
		},

		restore: function(){},

		maximize: function() {
			this.el.addClass('maximazing');
			this.el.onTransitionEnd(function(){
				this.el.removeClass('maximazing');
			}, this);

			this.maximized = !this.maximized;
			return this;
		},

		minimize: function() {
			this.el.addClass('minimizing');
			this.el.onTransitionEnd(function(){
				this.el.removeClass('minimizing');
			}, this);
			
			this.minimized = !this.minimized;
			return this;
		},

		close: function() {
			this.closed = true;
			return this;
		},

		focus: function() {
			this.active = true;
			return this;
		},

		blur: function() {
			this.active = false;
			return this;
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
