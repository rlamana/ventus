define(function(require) {
	
	var ExposeMode = {
		plug: function() {
			var floor = Math.floor, ceil = 	Math.ceil;

			var grid = ceil(this.windows.length / 2);
			var maxWidth = floor(this.el.width() / grid);
			var maxHeight = floor(this.el.height() / 2);

			var scale, left, top;

			this.el.addClass('expose');

			for(var z, win, i=0, len=this.windows.length; i<len; i++) {
				win = this.windows[i];

				win.stamp();

				// Scale factor
				if(win.height > win.width) {
					scale = (win.height > maxHeight) ? maxHeight / win.height : 1;
				} 
				else {
					scale = (win.width > maxWidth) ? maxWidth / win.width : 1;
				}

				// New position
				left = floor((maxWidth - scale*win.width) / 2) + (i%grid)*maxWidth;
				top = floor((maxHeight - scale*win.height) / 2) + ((i<grid-1)? maxHeight : 0);

				win.enabled = false;
				win.movable = false;
				win.resizable = false;

				//win.el.css('-webkit-transform', 'scale('+(scale)+')');
				//win.el.start('exposing');
				
				win.el.css('top', top);
				win.el.css('left', left);
			}

			this.overlay = true;
		},

		unplug: function() {
			var space = this.el;
			for(var z, win, i=this.windows.length; i--;) {
				win = this.windows[i];
				
				win.restore();
				win.el.css('-webkit-transform', 'scale(1)');
				
				this.el.onTransitionEnd(function(){
					this.el.removeClass('expose');
				}, this);
				
				

				win.movable = true;
				win.resizable = true;
				win.enabled = true;
			}

			this.overlay = false;
		},

		actions: {
			focus: function(win) {
			},

			close: function() {
				this.mode = 'expose';
			}
		}
	};

	return ExposeMode;
});
