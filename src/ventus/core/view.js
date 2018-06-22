/**
 * Ventus
 * Copyright © 2012-2013 Ramón Lamana
 * https://github.com/rlamana
 */
define(function() {
  'use strict';

  const View = function(elementOrMarkup) {
    if (typeof elementOrMarkup === 'string') {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = elementOrMarkup;
      this.el = wrapper.firstChild;
    } else {
      this.el = elementOrMarkup;
    }
  };

  View.prototype = {
    listen(map, scope) {
      const splitter = /^(?:(.*)\s)?(\w+)$/;
      let handler, data, selector, event;
      for (let key in map) {
        if (!map.hasOwnProperty(key)) {
          continue;
        }

        handler = map[key];

        data = key.match(splitter);
        selector = data[1];
        event = data[2];

        if (event === 'mousedown') {
          event += ' touchstart';
        } else if (event === 'mousemove') {
          event += ' touchmove';
        } else if (event === 'mouseup') {
          event += ' touchend';
        } else if (event === 'click') {
          event += ' touchend';
        }

        if (typeof handler === 'string') {
          handler = scope[handler];
        }

        if (!handler) {
          throw new Error('Handler not found');
        }

        for (const eventName of event.split(' ').filter(e => !!e.trim())) {
          if (selector) {
            const elements = this.el.querySelectorAll(selector);
            for (let i = 0; i < elements.length; i++) {
              elements[i].addEventListener(
                eventName,
                handler.bind(scope || this)
              );
            }
          } else {
            this.el.addEventListener(eventName, handler.bind(scope || this));
          }
        }
      }
      return this;
    },

    on(name, handler) {
      this.el.addEventListener(name, handler);
    },

    off(name, handler) {
      this.el.removeEventListener(name, handler);
    },

    one(name, handler) {
      const wrapper = () => {
        this.el.removeEventListener(name, wrapper);
        handler.apply(this, arguments);
      };
      this.el.addEventListener(name, wrapper);
    },

    onTransitionEnd(handler, scope) {
      this.one('transitionend', () => {
        handler.apply(scope || this);
      });
    },

    onAnimationEnd(handler, scope) {
      this.one('animationend', () => {
        handler.apply(scope || this);
      });
    },

    show() {
      if (this.el.style.display === 'none' || this.el.style.display === '') {
        this.el.style.display = this._display || 'block';
      }
    },

    hide() {
      if (this.el.style.display !== 'none' && this.el.style.display !== '') {
        this._display = this.el.style.display;
        this.el.style.display = 'none';
      }
    },

    find(selector) {
      const element = this.el.querySelector(selector);
      return element ? new View(element) : null;
    },

    set width(value) {
      this.el.style.width = `${value}px`;
    },

    get width() {
      return this.el.offsetWidth;
    },

    set height(value) {
      this.el.style.height = `${value}px`;
    },

    get height() {
      return this.el.offsetHeight;
    },

    set top(value) {
      this.el.style.top = `${value || 0}px`;
    },

    get top() {
      return parseInt(this.el.style.top || 0, 10);
    },

    set bottom(value) {
      this.el.style.bottom = `${value || 0}px`;
    },

    get bottom() {
      return parseInt(this.el.style.top || 0, 10);
    },

    set left(value) {
      this.el.style.left = `${value || 0}px`;
    },

    get left() {
      return parseInt(this.el.style.left || 0, 10);
    },

    set right(value) {
      this.el.style.right = `${value || 0}px`;
    },

    get right() {
      return parseInt(this.el.style.right || 0, 10);
    },

    set zIndex(value) {
      this.el.style.zIndex = value;
    },

    get zIndex() {
      return parseInt(this.el.style.zIndex || 0, 10);
    },

    set opacity(value) {
      this.el.style.opacity = value;
    },

    get opacity() {
      return parseInt(this.el.style.opacity || 0, 10);
    },

    append(content) {
      const view = content instanceof View ? content : new View(content);
      this.el.appendChild(view.el);
    },

    empty() {
      this.el.innerHTML = '';
    }
  };

  return View;
});
