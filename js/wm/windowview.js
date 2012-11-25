
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
				this.signals.emit('focus', e, this);
			},

			'header mousedown': function(e) {
				this.signals.emit('movestart', e, this);
			}
		},

		set state(value) {
			switch(value) {
				case 'focused': 
					this.el.addClass('active');
				break;
				case 'blurred': 
					this.el.removeClass('active');
				break;
				case 'moving': 
					this.el.addClass('move');
				break;
				default: 
					this.el.removeClass('active');
					this.el.removeClass('move');
				break;
			}
		},

		set width(value) {
			this.el.width(value);
		},

		set height(value) {
			this.el.height(value);
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
		}
	}

	return WindowView;
});
