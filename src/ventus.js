/**
 * Ventus
 * Copyright © 2012-2013 Ramón Lamana
 * https://github.com/rlamana
 */
import WindowManager from 'ventus/wm/windowmanager';
import Window from 'ventus/wm/window';

export const version = '0.3.0';
export { WindowManager, Window };

// Default export for backward compatibility
export default {
	version: '0.3.0',
	WindowManager,
	Window
};