
define(function(require) {

	require('css!../../css/window.less');

	var template = require("tmpl!../tmpl/window.tmpl");
	var Emitter = require('core/emitter');


	/**
	 * Window Presenter
	 * Adapts de window view and dom elements, and 
	 * listens to the dom event, transforming them to 
	 * signals
	 */
	var WindowView = function (options) {
		this.signals = new Emitter();

		this.el = template({
			title: "Window"
		});

		// Dom events
		this.el.listen(this.events, this); 

		this.width = 400;
		this.height = 200;

		this.state = 'default';
	};

	WindowView.prototype = {
		events: {
			'mousedown': function(e) {
				this.signals.emit('mousedown', e, this);
			},

			'header mousedown': function(e) {
				this.signals.emit('drag', e, this);
				this.el.addClass('move');
			},

			'header button.wm-close click': function(e) {
				e.stopPropagation();
				e.preventDefault();

				this.signals.emit('close', this);
			},

			'button.wm-resize mousedown': function(e) {
				this.signals.emit('resize', e, this);
			}
		},

		set active(isActive) {
			if(isActive) {
				this.el.addClass('active');
			} 
			else {
				this.el.removeClass('active');
			}
		},

		set closed (isClosed) {
			if(isClosed) {
				this.el.addClass('closed');
				//this.detachContent(); @todo implement this function and attachContent();
			}
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

		movestop: function() {
			this.el.removeClass('move');
		}
	}

	return WindowView;
});
