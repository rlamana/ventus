/**
 * Ventus
 * Copyright © 2012-2013 Ramón Lamana
 * https://github.com/rlamana
 */

const DefaultMode = {
  register() {
    console.log('Default mode registered.');
  },

  actions: {
    maximize(win) {
      win.move(0, 0);
      win.resize(this.view.width, this.view.height);
    },

    restore(win, restore) {
      restore.call(win);
    },

    minimize(win) {
      win.resize(0, 0);
    }
  }
};

export default DefaultMode;
