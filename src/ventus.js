/**
 * Ventus
 * Copyright © 2012-2013 Ramón Lamana
 * https://github.com/rlamana
 */
import WindowManager from 'ventus/wm/windowmanager';
import Window from 'ventus/wm/window';

export const version = '0.4.0';
export { WindowManager, Window };

// UMD/global compatibility
if (typeof window !== 'undefined') {
	window.Ventus = {
		version: '0.4.0',
		WindowManager,
		Window
	};
}