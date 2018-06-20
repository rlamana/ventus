/**
 * Ventus
 * Copyright © 2012-2013 Ramón Lamana
 * https://github.com/rlamana
 */

import WindowManager from 'ventus/wm/windowmanager';
import Window from 'ventus/wm/window';

module.exports = {
	version: '0.3',
	browser: {
		animationEventName: function () {
			var style = document.body.style;
			var event = null;

			if (style.animation === '') {
					event = 'animationend';
			} else if (style.MozAnimation === '') {
					event = 'mozAnimationEnd';
			} else if (style.webkitAnimation === '') {
					event = 'webkitAnimationEnd';
			}

			return event;
		}
	},

  WindowManager,
  Window
};