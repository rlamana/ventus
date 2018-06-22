/**
 * Signal/slots Emitter
 * (Fork of Basejs Emitter by A. Matías Quezada)
 *
 * Copyright © 2012-2013 Ramón Lamana
 * https://github.com/rlamana
 * Under MIT license
 */

/**
 * Copyright © 2009-2012 A. Matías Quezada
 * https://github.com/amatiasq
 */

/**
 * interface Emitter {
 *   void on(String signal, Function slot, [Object scope]);
 *   void off(String signal, Function slot, [Object scope]);
 *   void once(String signal, Function slot, [Object scope]);
 *   void emit(String signal, Object var_args...);
 *   void connect(Object slots, [Object scope]);
 *   void disconnect(Object slots, [Object scope]);
 * }
 *
 * Provides a constructor to listen and emit signals.
 */

define(function() {
  "use strict";

  function equals(slot, scope, expected) {
    return function(item) {
      return (item.funct === slot && item.scope === scope) === expected;
    };
  }

  function hasListener(listeners, signal, slot, scope) {
    if (!listeners[signal]) {
      return false;
    }

    return listeners[signal].some(equals(slot, scope, true));
  }

  /**
   * Creates an object with methods to add callbacks (listeners)
   *   to specific signals and invoke this callbacks.
   */
  function Emitter() {
    this._listeners = {};
  }

  Emitter.prototype = {
    /**
     * Returns the count of listeners for a specific signal.
     *
     * @param signal <String> The signal we want to count listeners from.
     * @returns <Number> The count.
     */
    listenersCount: function(signal) {
      var list = this._listeners[signal];
      return list ? list.length : 0;
    },

    /**
     * Adds a listener to a signal, optionally a scope can be provided.
     * NOTE: Calling this method with the same arguments will NOT add a new listener.
     *
     * @param signal <String> The signal to listen.
     * @param slot <Function> The callback function.
     * @param scope <Object?> The scope for the callback.
     */
    on: function on(signal, slot, scope) {
      var list = this._listeners;

      if (hasListener(list, signal, slot, scope)) {
        return;
      }

      if (!list[signal]) {
        list[signal] = [];
      }

      list[signal].push({
        funct: slot,
        scope: scope
      });
    },

    /**
     * Removes the listener added with exactly the same arguments.
     *
     * @param signal <String> The signal from we want to remove the listener.
     * @param slot <Function> The callback passed to .on() method.
     * @param scope <Object> The scope for the callback.
     */
    off: function off(signal, slot, scope) {
      var list = this._listeners[signal];
      if (!list) {
        return;
      }

      this._listeners[signal] = list.filter(equals(slot, scope, false));
    },

    /**
     * Adds a listener to be fired only the next time the signal is emitted.
     *
     * @param signal <String> The signal to listen.
     * @param slot <Function> The callback function.
     * @param scope <Object?> The scope for the callback.
     */
    once: function once(signal, slot, scope) {
      if (hasListener(this._listeners, signal, slot, scope)) {
        return;
      }

      this.on(
        signal,
        function wrapper() {
          this.off(signal, wrapper, this);
          slot.apply(scope, arguments);
        },
        this
      );
    },

    /**
     * Executes the callbacks for the given signal.
     * Any extra argument will be passed to the callback.
     *
     * @param signal <String> The signal of the listeners we want to invoke.
     * @param var_args <object...> Any arguments we want the callbacks to recive.
     */
    emit: function emit(signal /*, var_args*/) {
      var list = this._listeners[signal];
      if (!list) {
        return;
      }

      var data = Array.prototype.slice.call(arguments, 1);
      list.forEach(function(item) {
        item.funct.apply(item.scope, data);
      });
    },

    /**
     * Connects slots to a group of signals,
     * optionally a scope can be provided.
     *
     * @param slots <Object> Map of signals and slots.
     * @param scope <Object> The scope for the callback.
     */
    connect: function connect(slots, scope) {
      if (!slots) {
        return;
      }

      for (var signal in slots) {
        if (slots.hasOwnProperty(signal)) {
          this.on(signal, slots[signal], scope);
        }
      }
    },

    /**
     * Disconnects slots to a group of signals,
     * optionally a scope can be provided.
     *
     * @param slots <Object> Map of signals and slots.
     * @param scope <Object> The scope for the callback.
     */
    disconnect: function disconnect(slots, scope) {
      if (!slots) {
        return;
      }

      for (var signal in slots) {
        if (slots.hasOwnProperty(signal)) {
          this.off(signal, slots[signal], scope);
        }
      }
    }
  };

  return Emitter;
});
