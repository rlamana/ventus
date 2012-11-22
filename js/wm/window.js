
define(function(require) {

	require('css!../../css/window.less');

	var Window = function (options) {
		var template = require("tmpl!../tmpl/window.tmpl");

		this.el = template({
			title: "Window"
		});
		this.el.listen(this.events, this); 

		this.setSize(400, 200);

		$(document.body).append(this.el);
	};

	Window.prototype = {
		events: {
			'header click': function() {
			},

			'header mousedown': function(e) {
				this._move = this.toLocal({
					x: e.clientX,
					y: e.clientY
				});
			},

			'header mousemove': function(e) {
				var place, diff, coord = {
					x: e.clientX,
					y: e.clientY
				};

				if(this._move) {
					local = this.toLocal(coord);
					place = {
						x: coord.x - this._move.x,
						y: coord.y - this._move.y
					};

					this.setPosition(place);

					console.log(diff, coord, place);
				}
			},

			'header mouseup': function(e) {
				this._move = false;
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

		moveTo: function(x, y) {
			this.el.css('left', x);
			this.el.css('top', y);

			return this;
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
