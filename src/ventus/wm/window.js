/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define([
	'ventus/core/emitter',
  'ventus/core/view',
  'ventus/less/window.less'
],
function(Emitter, View) {
  'use strict';

	function isTouchEvent(e) {
		return !!window.TouchEvent && (e.originalEvent instanceof window.TouchEvent);
	}

	function convertMoveEvent(e) {
		return isTouchEvent(e) ? e.originalEvent.changedTouches[0] : e;
	}

	var Window = function(options) {
		this.signals = new Emitter();

		options = options || {
			title: 'Untitle Window',
			width: 400,
			height: 200,
			x: 0,
			y: 0,
			content: '',
			movable: true,
			resizable: true,
			widget: false,
			titlebar: true,
			animations: true,
			classname: '',
			stayinspace: false
    };

    if (options.animations) {
      options.classname + ' animated';
    }

		// View
		this.view = new View(`<div class="wm-window ${options.classname}">
      <div class="wm-window-box">
        <header class="wm-window-title" unselectable="on">
          <h1 unselectable="on">${options.title}</h1>
          <div class="wm-button-group">
            <button class="wm-minimize">&nbsp;</button>
            <button class="wm-maximize">&nbsp;</button>
            <button class="wm-close">&nbsp;</button>
          </div>
        </header>

        <section class="wm-content"></section>

        <button class="wm-resize">&nbsp;</button>
      </div>
      <div class="wm-window-overlay"></div>
    </div>`);
		this.view.listen(this.events.window, this);

		if(options.opacity) {
			this.view.el.style.opacity = options.opacity;
		}

		// Predefined signal/events handlers.
		if(options.events) {
			for(var eventName in options.events) {
				if(options.events.hasOwnProperty(eventName) &&
				   typeof options.events[eventName] === 'function') {
					this.signals.on(eventName, options.events[eventName], this);
				}
			}
		}

		// Cache content element.
		this.$content = this.view.find('.wm-content');
		if(options.content) {
			this.$content.append(options.content);
		}

    // Cache header element.
		this.$titlebar = this.view.find('header');

		this.width = options.width || 400;
		this.height = options.height || 200;

		this.x = options.x || 0;
		this.y = options.y || 0;
		this.z = 10000;

		// State
		this.enabled = true;
		this.active = false;
		this.maximized = false;
		this.minimized = false;

		this._closed = true;
		this._destroyed = false;

		// Properties
		this.widget = false;
		this.movable = (typeof options.movable !== 'undefined') ?
			options.movable :
			true;
		this.resizable = (typeof options.resizable !== 'undefined') ?
			options.resizable :
			true;
		this.animations = (typeof options.animations !== 'undefined') ?
			options.animations:
			true;
		this.titlebar = true;
		this.stayinspace = (typeof options.stayinspace !== 'undefined') ?
			options.stayinspace:
			false;
	};

	Window.prototype = {
		_restore: null,
		_moving: null,
		_resizing: null,

		slots: {
			move(e) {
				var event = convertMoveEvent(e);

				if(!this.enabled || !this.movable) {
					return;
				}

				this._moving = this.toLocal({
					x: event.pageX,
					y: event.pageY
				});

				this.view.el.classList.add('move');
				this._space.el.classList.add('no-events');

				e.preventDefault();
			}
		},

		events: {
			window: {
				'click': function(e) {
					this.signals.emit('select', this, e);
				},

				'mousedown': function(e) {
					this.focus();

					if(this.widget) {
						this.slots.move.call(this, e);
					}
				},

				'.wm-content click': function(e) {
					if(this.enabled) {
						this.signals.emit('click', this, e);
					}
				},

				'.wm-window-title mousedown': function(e) {
					if(!this.maximized) {
						this.slots.move.call(this, e);
					}
				},

				'.wm-window-title dblclick': function() {
					if(this.enabled && this.resizable) {
						this.maximize();
					}
				},

				'.wm-window-title button.wm-close click': function(e) {
					e.stopPropagation();
					e.preventDefault();

					if(this.enabled) {
						this.close();
					}
				},

				'.wm-window-title button.wm-maximize click': function(e) {
					e.stopPropagation();
					e.preventDefault();

					if(this.enabled && this.resizable) {
						this.maximize();
					}
				},

				'.wm-window-title button.wm-minimize click': function(e) {
					e.stopPropagation();
					e.preventDefault();

					if(this.enabled) {
						this.minimize();
					}
				},

				'.wm-window-title button mousedown': function(e) {
					this.focus();

					e.stopPropagation();
					e.preventDefault();
				},

				'button.wm-resize mousedown': function(e) {
					var event = convertMoveEvent(e);

					if(!this.enabled || !this.resizable) {
						return;
					}

					this._resizing = {
						width: this.width - event.pageX,
						height: this.height - event.pageY
					};

					this._space.el.classList.add('no-events');
					this.view.el.classList.add('resizing');

					e.preventDefault();
				}
			},

			space: {
				'mousemove': function(e) {
					var event = convertMoveEvent(e);

					// Fix #20. Mousemove outside browser
					if (!isTouchEvent(e) && e.which !== 1) {
						this._moving && this._stopMove();
						this._resizing && this._stopResize();
					}

					if (this._moving) {
						if (this.stayinspace) {
							if (
                this.view.el.clientWidth > this.space.el.clientWidth ||
                this.view.el.clientHeight > this.space.el.clientHeight
							) {
								this.resize(
									Math.min(this.view.el.clientWidth, this.space.el.clientWidth),
									Math.min(this.view.el.clientHeight, this.space.el.clientHeight)
								);
							}
							var movingX = Math.max(0, event.pageX - this._moving.x);
							var minusX = 0;
							var movingY = Math.max(0, event.pageY - this._moving.y);
							var minusY = 0;
							if (movingX + this.view.el.clientWidth > this.space.el.clientWidth) {
								minusX = movingX + this.view.el.clientWidth - this.space.el.clientWidth;
							}
							if (movingY + this.view.el.clientHeight > this.space.el.clientHeight) {
								minusY = movingY + this.view.el.clientHeight - this.space.el.clientHeight;
							}
							this.move(
								(movingX - minusX),
								(movingY - minusY)
							);
						} else {
							this.move(
								event.pageX - this._moving.x,
								event.pageY - this._moving.y
							);
						}
					}

					if (this._resizing) {
						this.resize(
							event.pageX + this._resizing.width,
							event.pageY + this._resizing.height
						);
					}
				},

				'mouseup': function() {
					this._moving && this._stopMove();
					this._resizing && this._stopResize();
				}
			}
		},

		_stopMove: function() {
			this.view.el.classList.remove('move');
			this._space.el.classList.remove('no-events');
			this._moving = null;
		},

		_stopResize: function() {
		  this._space.el.classList.remove('no-events');
			this.view.el.classList.remove('resizing');
			this._restore = null;
			this._resizing = null;
		},

		set space(el) {
			if (el && !(el instanceof View)) {
				console.error('The given space element is not a valid View.');
				return;
			}

			this._space = el;
			el.append(this.view);
			el.listen(this.events.space, this);
		},

		get space() {
			return this._space;
		},

		get maximized() {
			return this._maximized;
		},

		set maximized(value) {
			if(value) {
				this._restoreMaximized = this.stamp();
				this.view.el.classList.add('maximized');
				this.signals.emit('maximize', this, this._restoreMaximized);
			} else {
				this.view.el.classList.remove('maximized');
				this.signals.emit('restore', this, this._restoreMaximized);
			}
			this._maximized = value;
		},


		get minimized() {
			return this._minimized;
		},

		set minimized(value) {
			if(value) {
				this._restoreMinimized = this.stamp();
				this.signals.emit('minimize', this, this._restoreMinimized);
			} else {
				this.signals.emit('restore', this, this._restoreMinimized);
			}

			this._minimized = value;
		},

		set active(value) {
			if(value) {
				this.signals.emit('focus', this);
				this.view.el.classList.add('active');
				this.view.el.classList.remove('inactive');
			}
			else {
				this.signals.emit('blur', this);
				this.view.el.classList.remove('active');
				this.view.el.classList.add('inactive');
			}

			this._active = value;
		},

		get active() {
			return this._active;
		},

		set enabled(value) {
			if(!value) {
				this.view.el.classList.add('disabled');
			} else {
				this.view.el.classList.remove('disabled');
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
			if(!value) {
				this.view.el.classList.add('noresizable');
			}	else {
				this.view.el.classList.remove('noresizable');
			}

			this._resizable = !!value;
		},

		get resizable() {
			return this._resizable;
		},

		set closed(value) {}, // jshint ignore:line
		get closed() {
			return this._closed;
		},

		set destroyed(value) {}, // jshint ignore:line
		get destroyed() {
			return this._destroyed;
		},

		set widget(value) {
			this._widget = value;
		},

		get widget() {
			return this._widget;
		},

		set titlebar(value) {
			if(value) {
				this.$titlebar.el.classList.remove('hide');
			} else {
				this.$titlebar.el.classList.add('hide');
			}

			this._titlebar = value;
		},

		get titlebar() {
			return this._titlebar;
		},

		set animations(value) {
			if (value) {
				this.view.el.classList.add('animated');
			} else {
				this.view.el.classList.remove('animated');
			}

			this._animations = value;
		},

		get animations() {
			return this._animations;
		},

		set width(value) {
			this.view.width = value;
		},

		get width() {
			return parseInt(this.view.width, 10);
		},

		set height(value) {
			this.view.height = value;
		},

		get height() {
			return parseInt(this.view.height, 10);
		},

		set x(value) {
			this.view.el.style.left = `${value}px`;
		},

		set y(value) {
			this.view.el.style.top = `${value}px`;
		},

		get x() {
			return parseInt(this.view.el.style.left||0, 10);
		},

		get y() {
			return parseInt(this.view.el.style.top||0, 10);
		},

		set z(value) {
			this.view.el.style.zIndex = value;
		},

		get z() {
			return parseInt(this.view.el.style.zIndex||0, 10);
		},

		open() {
      return new Promise(done => {
        this.signals.emit('open', this);

        // Open animation.
        this.view.show();
        this.view.el.classList.add('opening');
        this.view.onAnimationEnd(() => {
          this.view.el.classList.remove('opening');
          done();
        }, this);
        this._closed = false;
      });
		},

		close() {
			return new Promise(done => {
        this.signals.emit('close', this);

        this.view.el.classList.add('closing');
        this.view.onAnimationEnd(() => {
          this.view.el.classList.remove('closing');
          this.view.el.classList.add('closed');
          this.view.hide();

          this.signals.emit('closed', this);
          done();
        }, this);

        this._closed = true;
      });
		},

		destroy() {
			const destroy = () => {
				this.$content.empty();
				this.signals.emit('destroyed', this);
				this._destroyed = true;
      };
      
			this.signals.emit('destroy', this);

			if(!this.closed) {
				this.close().then(() => destroy());
			} else {
				destroy();
			}
		},

		resize(w, h) {
			this.width = w;
			this.height = h;
			return this;
		},

		move(x, y) {
			this.x = x;
			this.y = y;
			return this;
		},

		/**
		 * @return A function that restores this window
		 */
		stamp() {
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
				};
			}).apply(this);

			return this.restore;
		},

		restore(){},

		maximize() {
      this.view.el.classList.add('maximazing');
      
      var endMaximize = function(){
				this.view.el.classList.remove('maximazing');
			};

      if (this.animations) {
        this.view.onTransitionEnd(endMaximize, this);
      } else {
        endMaximize.call(this);
      }

			this.maximized = !this.maximized;
			return this;
		},

		minimize() {
      this.view.el.classList.add('minimizing');

      var endMinimize = function() {
				this.view.el.classList.remove('minimizing');
			};
      
      if (this.animations) {
        this.view.onTransitionEnd(endMinimize, this);
      } else {
        endMinimize.call(this);
      }

			this.minimized = !this.minimized;
			return this;
		},

		focus() {
			this.active = true;
			return this;
		},

		blur() {
			this.active = false;
			return this;
		},

		toLocal(coord) {
			return {
				x: coord.x - this.x,
				y: coord.y - this.y
			};
		},

		toGlobal(coord) {
			return {
				x: coord.x + this.x,
				y: coord.y + this.y
			};
		},

		append(content) {
			this.$content.append(content);
		}
	};

	return Window;
});
