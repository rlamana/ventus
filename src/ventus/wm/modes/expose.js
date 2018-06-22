/**
 * Ventus
 * Copyright © 2012-2013 Ramón Lamana
 * https://github.com/rlamana
 */
define(['lodash.throttle', 'ventus/less/expose.less'], function(throttle) {
  'use strict';

  const ExposeMode = {
    // Launch when plugin is registered.
    register() {
      console.log('Expose mode registered.');

      this.view.on(
        'contextmenu',
        throttle(event => {
          // Right click sets expose mode.
          if (this.mode !== 'expose') {
            if (this.windows.length > 0) {
              this.mode = 'expose';
            }
          } else if (this.mode === 'expose') {
            this.mode = 'default';
          }
					event.stopPropagation();
					event.preventDEfault();
        }, 1000)
      );
    },

    // Launch when plugin is enabled.
    plug() {
      const grid = Math.ceil(this.windows.length / 2);
      const maxWidth = Math.floor(this.view.width / grid);
      const maxHeight = Math.floor(this.view.height / 2);
      let scale, left, top, pos;

      this.view.el.classList.add('expose');

      for (let win, i = 0, len = this.windows.length; i < len; i++) {
        win = this.windows[i];
        win.stamp();

        // Scale factor.
        if (win.height > win.width) {
          scale = win.height > maxHeight ? maxHeight / win.height : 1;
        } else {
          scale = win.width > maxWidth ? maxWidth / win.width : 1;
        }

        scale -= 0.15; // To add a little padding.

        pos = {
          x: (i % grid) * maxWidth,
          y: (i < grid ? 0 : 1) * maxHeight
        };

        // New position.
        left = pos.x + Math.floor((maxWidth - scale * win.width) / 2);
        top = pos.y + Math.floor((maxHeight - scale * win.height) / 2);

        win.enabled = false;
        win.movable = false;

        win.view.el.classList.add('exposing');
        win.view.el.style.transformOrigin = '0 0';
        win.view.el.style.transform = `scale(${scale})`;
        win.view.top = top;
        win.view.left = left;

        const endExposing = () => {
          win.view.el.classList.remove('exposing');
        };

        if (win.animations) {
          win.view.on('transitionend', endExposing);
        } else {
          endExposing();
        }
      }

      this.overlay = true;
      this.view.one('click', () => {
        this.mode = 'default';
      });
    },

    // Lauch when plugin is disabled
    unplug() {
      return new Promise(done => {
        if (this.windows.length === 0) {
          done();
        }

        for (let win, i = this.windows.length; i--; ) {
          win = this.windows[i];
          win.restore();
          win.view.el.style.transform = 'scale(1)';
          win.view.el.style.transformOrigin = '50% 50%';

          const removeTransform = (function(win, windowIndex) {
            return function() {
              if (windowIndex === 0) {
                done();
              }
              win.view.el.style.transform = '';
            };
          })(win, i);

          if (win.animations) {
            this.view.onTransitionEnd(removeTransform, this);
          } else {
            removeTransform.call(this);
          }

          win.movable = true;
          win.enabled = true;
        }

        this.overlay = false;
      }).then(() => {
        this.view.el.classList.remove('expose');
      });
    },

    actions: {
      focus() {},

      close() {
        this.mode = 'expose';
      },

      select(win) {
        this.mode = 'default';
        win.focus();
      }
    }
  };

  return ExposeMode;
});
