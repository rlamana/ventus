define(function(require) {
	
	var ExposeMode = {
		plug: function() {
			var grid = Math.ceil(this.windows.length / 2);
			var maxWidth = Math.floor(this.el.width() / grid);
			var maxHeight = Math.floor(this.el.height() / 2);

			var scale;

			for(var z, win, i=0, len=this.windows.length; i<len; i++) {
				win = this.windows[i];

				win.stamp();

				if(win.height > win.width) {
					scale = (win.height > maxHeight) ? maxHeight / win.height : 1;
				} 
				else {
					scale = (win.width > maxWidth) ? maxWidth / win.width : 1;
				}

				win.el.addClass('expose');
				//win.enabled = false;
				
				win.el.css('-webkit-transition', 'left .3s ease-out, top .3s ease-out, -webkit-transform .3s');
				win.el.css('-webkit-transform', 'scale('+(scale)+')');

				var left = Math.floor((maxWidth - scale*win.width) / 2) + (i%grid)*maxWidth;
				var top = Math.floor((maxHeight - scale*win.height) / 2) + ((i<grid-1)? maxHeight : 0);

				win.el.css('top', top);
				win.el.css('left', left);
			}

			this.overlay = true;
		},

		unplug: function() {
			for(var z, win, i=this.windows.length; i--;) {
				win = this.windows[i];
				win.restore();
				win.el.css('-webkit-transform', 'scale(1)');
				win.enabled = true;
				win.el.removeClass('expose');
			}

			this.overlay = false;
		},

		actions: {
			focus: function(win) {
				console.log('focus?');
			}
		}
	};

	return ExposeMode;
});
