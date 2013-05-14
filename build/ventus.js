/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) { // AMD.
        define(['$', 'handlebars'], factory);
    } else { // Browser globals
        root.Ventus = factory(root.$, root.Handlebars);
    }
}(this, function ($, Handlebars) {


/**
 * almond 0.1.2 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var defined = {},
        waiting = {},
        config = {},
        defining = {},
        aps = [].slice,
        main, req;

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {},
            nameParts, nameSegment, mapValue, foundMap,
            foundI, foundStarMap, starI, i, j, part;

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that "directory" and not name of the baseName's
                //module. For instance, baseName of "one/two/three", maps to
                //"one/two/three.js", but we want the directory, "one/two" for
                //this normalization.
                baseParts = baseParts.slice(0, baseParts.length - 1);

                name = baseParts.concat(name.split("/"));

                //start trimDots
                for (i = 0; (part = name[i]); i++) {
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            return true;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            return req.apply(undef, aps.call(arguments, 0).concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (waiting.hasOwnProperty(name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!defined.hasOwnProperty(name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    function makeMap(name, relName) {
        var prefix, plugin,
            index = name.indexOf('!');

        if (index !== -1) {
            prefix = normalize(name.slice(0, index), relName);
            name = name.slice(index + 1);
            plugin = callDep(prefix);

            //Normalize according
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            p: plugin
        };
    }

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    main = function (name, deps, callback, relName) {
        var args = [],
            usingExports,
            cjsModule, depName, ret, map, i;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (typeof callback === 'function') {

            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i++) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = makeRequire(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = defined[name] = {};
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = {
                        id: name,
                        uri: '',
                        exports: defined[name],
                        config: makeConfig(name)
                    };
                } else if (defined.hasOwnProperty(depName) || waiting.hasOwnProperty(depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else if (!defining[depName]) {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback.apply(defined[name], args);

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                    cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync) {
        if (typeof deps === "string") {
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 15);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        config = cfg;
        return req;
    };

    define = function (name, deps, callback) {

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        waiting[name] = [name, deps, callback];
    };

    define.amd = {
        jQuery: true
    };
}());

define("almond", function(){});

/**
 * Signal/slots Emitter
 * (Fork of Basejs Emitter by A. Matías Quezada)
 *
 * Copyright © 2013 Ramón Lamana
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

(function(root) {
	

	function equals(slot, scope, expected) {
		return function(item) {
			return (
				item.funct === slot &&
				item.scope === scope
			) === expected;
		};
	}

	function hasListener(listeners, signal, slot, scope) {
		if (!listeners[signal])
			return false;

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
			return  list ? list.length : 0;
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

			if (hasListener(list, signal, slot, scope))
				return;

			if (!list[signal])
				list[signal] = [];

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
			if (!list)
				return;

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
			if (hasListener(this._listeners, signal, slot, scope))
				return;

			this.on(signal, function wrapper() {
				this.off(signal, wrapper, this);
				slot.apply(scope, arguments);
			}, this);
		},

		/**
		 * Executes the callbacks for the given signal.
		 * Any extra argument will be passed to the callback.
		 *
		 * @param signal <String> The signal of the listeners we want to invoke.
		 * @param var_args <object...> Any arguments we want the callbacks to recive.
		 */
		emit: function emit(signal/*, var_args*/) {
			var list = this._listeners[signal];
			if (!list)
				return;

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
			if (!slots)
				return;

			for (var signal in slots) {
				if(slots.hasOwnProperty(signal))
					this.on(signal, slots[signal], scope);
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
			if (!slots)
				return;

			for (var signal in slots) {
				if(slots.hasOwnProperty(signal))
					this.off(signal, slots[signal], scope);
			}
		}
	};

	/* global module: false */
	if (typeof module !== 'undefined' && module.exports)
		module.exports = Emitter;
	else if (typeof define !== 'undefined' && define.amd)
		define('ventus/core/emitter',[],function() { return Emitter });
	else
		root.Emitter = Emitter;
})(this);

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define('ventus/core/view',['$'], function($, _) {

	var splitter = /^(?:(.*)\s)?(\w+)$/;

	var transitionEventNames = "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd";
	var animationEventNames = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";

	// CSS3 transform, transition, animation hooks, prefixless
	var hooks = ['transform', 'transition', 'animation', 'transform-origin'];
	for(var i=hooks.length;i--;) {
		(function(property) {
			$.cssHooks[property] = {
				get: function( elem, computed, extra ) {
					return null;
				},
				set: function(elem, value) {
					elem.style['-webkit-'+property] = value;
					elem.style['-moz-'+property] = value;
					elem.style['-ms-'+property] = value;
					elem.style['-o-'+property] = value;
					elem.style[property] = value;
				}
			};
		})(hooks[i]);
	}

	$.fn.extend({
		listen: function (map, scope) {
			var handler, data, selector, event;
			for(var key in map) {
				if(!map.hasOwnProperty(key))
					continue;

				handler = map[key];
			
				data = key.match(splitter);
				selector = data[1];
				event = data[2];

				if (event === 'mousedown')
					event += ' touchstart';
				else if (event === 'mousemove')
					event += ' touchmove';
				else if (event === 'mouseup')
					event += ' touchend';
				else if (event === 'click')
					event += ' touchend';

				if (typeof handler === 'string')
					handler = scope[handler];

				if (!handler)
					throw new Error('Handler not found');

				if (selector)
					this.on(event, selector, handler.bind(scope));
				else
					this.on(event, handler.bind(scope));
			}

			return this;
		},

		onTransitionEnd: function (callback, scope) {
			this.one(transitionEventNames, function() {
				callback.apply(scope||this);
			});
		},

		onAnimationEnd: function (callback, scope) {
			this.one(animationEventNames, function() {
				callback.apply(scope||this);
			});
		}
	});

	return function(root) {
		if(typeof root === 'function') { 
			// It's a template
			return function(options) {
				return $(root(options || {}));
			};
		}
		else {
			// It's a selector
			return $(root);
		}
	};
});

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define('tpl',['require'],function(require) {
    var extension = '.tpl';

    function load(name, req, done, config) {
        req(['handlebars'], function(Handlebars) {
            var templateName = name.replace(/^.*[\\\/]/, '') + extension;

            if (config.isBuild) {
                req([name + extension]);
                done();
                return;
            }

            /*if ((typeof config.debug === 'undefined') || config.debug)  {
                // In debug mode compile template on the fly
                req(['$'], function($) {
                    $.get(req.toUrl(name) + extension, {}, function(response, status){
                        done(Handlebars.compile(response));
                    }, "html");
                });
            } 
            else*/ {
                // In release mode require the compiled template js file
                req([name + extension], function() {
                    done(Handlebars.templates[templateName]);
                });
            }
        });
    };

    function write(pluginName, name, write) {
        //write("define('"+name+extension+"', function() {");
        //write("done(Handlebars.templates['"+name+extension+"']);});");
    }

    return {
        load: load,
        write: write
    };
});

define('ventus/tpl/window.tpl',['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['window.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"wm-window ";
  foundHelper = helpers.classname;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.classname; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" >\n	<div class=\"wm-window-box\">\n		<header class=\"wm-window-title\" unselectable=\"on\">\n			<h1 unselectable=\"on\">";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h1>\n			<div class=\"wm-button-group\">\n				<button class=\"wm-minimize\">&nbsp;</button>\n				<button class=\"wm-maximize\">&nbsp;</button>\n				<button class=\"wm-close\">&nbsp;</button>\n			</div>\n		</header>\n\n		<section class=\"wm-content\"></section>\n\n		<button class=\"wm-resize\">&nbsp;</button>\n	</div>\n	<div class=\"wm-window-overlay\"></div>\n</div>\n";
  return buffer;});
});

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define('less',[],function() {

    var plugin = {
        options: {},
        load: function load(name, parentRequire, done, config) {
            var ext;

            this.options = config.css;

            if (config.isBuild || (!config.debug)) {
                done();
                return;
            }

            // Dynamically loading
            // Less can only be loaded on the browser
            /*require(['vendor/less'], function() {
                var ext = 'less';
                name = parentRequire.toUrl(name).replace(/\.[^/.]+$/, "");

                var style = document.createElement('link');
                style.setAttribute('rel', 'stylesheet/less');
                style.setAttribute('href', name + '.' + ext);

                less.sheets = [style];
                less.refresh();
                done(style);
            });*/
            done();
        },

        write: function write(pluginName, name, write) {
        }
    };

    return plugin;
});


/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define('ventus/wm/window',[
	'ventus/core/emitter',
	'ventus/core/view',
	'tpl!ventus/tpl/window',
	'less!ventus/css/window'
],
function(Emitter, View, WindowTemplate) {
	

	var Window = function (options) {
		this.signals = new Emitter();

		options = options || {
			title: 'Untitle Window',
			width: 400,
			height: 200,
			x: 0,
			y: 0,
			content: '',

			movable: true,
			resizable: true,
			widget: false,
			titlebar: true
		};

		// View
		this.el = View(WindowTemplate({
			title: options.title,
			classname: options.classname||''
		}));
		this.el.listen(this.events.window, this);

		if(options.opacity)
			this.el.css('opacity', options.opacity);

		// Cache content element
		this.$content = this.el.find('.wm-content');
		if(options.content)
			this.$content.append(options.content);

		// Cache header element
		this.$titlebar = this.el.find('header');

		this.width = options.width || 400;
		this.height = options.height || 200;

		this.x = options.x || 0;
		this.y = options.y || 0;
		this.z = 10000;

		// State
		this.opened = false;
		this.enabled = true;
		this.active = false;
		this.closed = false;
		this.maximized = false;
		this.minimized = false;

		// Properties
		this.widget = false;
		this.movable = true;
		this.resizable = (typeof options.resizable !== 'undefined') ?
			options.resizable :
			true;

		this.titlebar = true;
	};

	Window.prototype = {
		_restore: null,
		_moving: null,
		_resizing: null,

		slots: {
			move: function(e) {
				if(!this.enabled || !this.movable) return;

				this._moving = this.toLocal({
					x: e.originalEvent.pageX,
					y: e.originalEvent.pageY
				});

				this.el.addClass('move');

				e.preventDefault();
			}
		},

		events: {
			window: {
				'click': function(e) {
					this.signals.emit('select', this, e);
				},

				'mousedown': function(e) {
					this.focus();

					if(this.widget)
						this.slots.move.call(this, e);
				},

				'.wm-content click': function(e) {
					if(this.enabled)
						this.signals.emit('click', this, e);
				},

				'.wm-window-title mousedown': function(e) {
					this.slots.move.call(this, e);
				},

				'.wm-window-title dblclick': function() {
					if(this.enabled && this.resizable)
						this.maximize();
				},

				'.wm-window-title button.wm-close click': function(e) {
					e.stopPropagation();
					e.preventDefault();

					if(this.enabled)
						this.close();
				},

				'.wm-window-title button.wm-maximize click': function(e) {
					e.stopPropagation();
					e.preventDefault();

					if(this.enabled && this.resizable)
						this.maximize();
				},

				'.wm-window-title button.wm-minimize click': function(e) {
					e.stopPropagation();
					e.preventDefault();

					if(this.enabled)
						this.minimize();
				},

				'.wm-window-title button mousedown': function(e) {
					this.focus();

					e.stopPropagation();
					e.preventDefault();
				},

				'button.wm-resize mousedown': function(e) {
					if(!this.enabled || !this.resizable) return;

					this._resizing = {
						width: this.width - e.originalEvent.pageX,
						height: this.height - e.originalEvent.pageY
					};

					this.el.addClass('resizing');

					e.preventDefault();
				}
			},

			space: {
				'mousemove': function(e) {
					if (this._moving)
						this.move(
							e.originalEvent.pageX - this._moving.x,
							e.originalEvent.pageY - this._moving.y
						);

					if(this._resizing)
						this.resize(
							e.originalEvent.pageX + this._resizing.width,
							e.originalEvent.pageY + this._resizing.height
						);
				},

				'mouseup': function() {
					if (this._moving) {
						this.el.removeClass('move');
						this._moving = null;
					}

					if (this._resizing) {
						this.el.removeClass('resizing');
						this._restore = null;
						this._resizing = null;
					}
				}
			}
		},

		set space(el) {
			if(el && !el.listen) {
				console.error('The given space element is not a valid View');
				return;
			}

			this._space = el;
			el.append(this.el);
			el.listen(this.events.space, this);
		},

		get space() {
			return this._space;
		},

		get maximized() {
			return this._maximized;
		},

		set maximized(value) {
			if(value) {
				this._restoreMaximized = this.stamp();
				this.signals.emit('maximize', this, this._restoreMaximized);
			}
			else {
				this.signals.emit('restore', this, this._restoreMaximized);
			}
			this._maximized = value;
		},


		get minimized() {
			return this._minimized;
		},

		set minimized(value) {
			if(value) {
				this.stamp();
				this.signals.emit('minimize', this);
			}
			else {
				this.signals.emit('restore', this);
			}

			this._minimized = value;
		},

		set active(value) {
			if(value) {
				this.signals.emit('focus', this);
				this.el.addClass('active');
				this.el.removeClass('inactive');
			}
			else {
				this.signals.emit('blur', this);
				this.el.removeClass('active');
				this.el.addClass('inactive');
			}

			this._active = value;
		},

		get active() {
			return this._active;
		},

		set enabled(value) {
			if(!value) {
				this.el.addClass('disabled');
			}
			else {
				this.el.removeClass('disabled');
			}

			this._enabled = value;
		},

		get enabled() {
			return this._enabled;
		},

		set movable(value) {
			this._movable = !!value;
		},

		get movable() {
			return this._movable;
		},

		set resizable(value) {
			if(!value) {
				this.el.addClass('noresizable');
			}
			else {
				this.el.removeClass('noresizable');
			}

			this._resizable = !!value;
		},

		get resizable() {
			return this._resizable;
		},

		set closed(value) {
			if(value) {
				this.signals.emit('close', this);

				this.el.addClass('closing');
				this.el.onAnimationEnd(function(){
					this.el.removeClass('closing');
					this.el.addClass('closed');
					this.el.hide();

					// Remove element
					this.$content.html('');
				}, this);
			}

			this._closed = value;
		},

		get closed() {
			return this._closed;
		},

		set opened(value) {
			if(value) {
				this.signals.emit('open', this);

				// Open animation
				this.el.show();
				this.el.addClass('opening');
				this.el.onAnimationEnd(function(){
					this.el.removeClass('opening');
				}, this);
			}

			this._opened = value;
		},

		get opened() {
			return this._opened;
		},


		set widget(value) {
			this._widget = value;
		},

		get widget() {
			return this._widget;
		},

		set titlebar(value) {
			if(value)
				this.$titlebar.removeClass('hide');
			else
				this.$titlebar.addClass('hide');

			this._titlebar = value;
		},

		get titlebar() {
			return this._titlebar;
		},

		set width(value) {
			this.el.width(value);
		},

		get width() {
			return parseInt(this.el.width(), 10);
		},

		set height(value) {
			// This shouldn't be done if flexible box model
			// worked properly with overflow-y: auto
			//this.$content.height(value - this.$header.outerHeight());

			this.el.height(value);
		},

		get height() {
			return parseInt(this.el.height(), 10);
		},

		set x(value) {
			this.el.css('left', value);
		},

		set y(value) {
			this.el.css('top', value);
		},

		get x() {
			return parseInt(this.el.css('left'), 10);
		},

		get y() {
			return parseInt(this.el.css('top'), 10);
		},

		set z(value) {
			this.el.css('z-index', value);
		},

		get z() {
			return parseInt(this.el.css('z-index'), 10);
		},

		open: function() {
			this.opened = true;
			return this;
		},

		resize: function(w, h) {
			this.width = w;
			this.height = h;
			return this;
		},

		move: function(x, y) {
			this.x = x;
			this.y = y;
			return this;
		},

		/**
		 * @return A function that restores this window
		 */
		stamp: function() {
			this.restore = (function() {
				var size = {
					width: this.width,
					height: this.height
				};

				var pos = {
					x: this.x,
					y: this.y
				};

				return function() {
					this.resize(size.width, size.height);
					this.move(pos.x, pos.y);

					return this;
				};
			}).apply(this);

			return this.restore;
		},

		restore: function(){},

		maximize: function() {
			this.el.addClass('maximazing');
			this.el.onTransitionEnd(function(){
				this.el.removeClass('maximazing');
			}, this);

			this.maximized = !this.maximized;
			return this;
		},

		minimize: function() {
			this.el.addClass('minimizing');
			this.el.onTransitionEnd(function(){
				this.el.removeClass('minimizing');
			}, this);

			this.minimized = !this.minimized;
			return this;
		},

		close: function() {
			this.closed = true;
			return this;
		},

		focus: function() {
			this.active = true;
			return this;
		},

		blur: function() {
			this.active = false;
			return this;
		},

		toLocal: function(coord) {
			return {
				x: coord.x - this.x,
				y: coord.y - this.y
			};
		},

		toGlobal: function(coord) {
			return {
				x: coord.x + this.x,
				y: coord.y + this.y
			};
		},

		append: function(el) {
			el.appendTo(this.$content);
		}
	};

	return Window;
});

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define('ventus/wm/modes/default',['less!../../../css/windowmanager'], function() {

	var DefaultMode = {
		register: function() {
			console.log("Default mode registered.");
		},

		plug: function() {
		},

		unplug: function() {
		},

		actions: {
			maximize: function(win) {
				win.move(0,0);
				win.el.css('-webkit-transform', 'translate3d(0, 0, 0);');
				win.resize(this.el.width(), this.el.height());
			},

			restore: function(win, restore) {
				restore.call(win);
			},

			minimize: function(win) {
				win.resize(0,0);
			}
		}
	};

	return DefaultMode;
});

(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
define("Underscore", (function (global) {
    return function () {
        var ret, fn;
        return ret || global._;
    };
}(this)));

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define('ventus/wm/modes/expose',['Underscore', 'less!../../../css/expose'], function(_) {
	

	var ExposeMode = {

		// Launch when plugin is registered
		register: function() {
			var self = this;

			console.log('Expose mode registered.');

			this.el.on('contextmenu', _.throttle(function() {
				// Right click sets expose mode
				if (self.mode !== 'expose') {
					self.mode = 'expose';
				} else if(self.mode === 'expose') {
					self.mode = 'default';
				}

				return false;
			}, 1000));
		},

		// Launch when plugin is enabled
		plug: function() {
			var floor = Math.floor, ceil = Math.ceil, self = this;

			var grid = ceil(this.windows.length / 2);
			var maxWidth = floor(this.el.width() / grid);
			var maxHeight = floor(this.el.height() / 2);

			var scale, left, top, pos;

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

				scale -= 0.15; // To add a little padding

				pos = {
					x: (i%grid)*maxWidth,
					y: ((i<grid)?0:1)*maxHeight
				};

				// New position
				left = pos.x + floor((maxWidth - scale*win.width) / 2);
				top = pos.y + floor((maxHeight - scale*win.height) / 2);

				win.enabled = false;
				win.movable = false;

				win.el.addClass('exposing');
				win.el.css('transform-origin', '0 0');
				win.el.css('transform', 'scale(' + scale + ')');
				win.el.css('top', top);
				win.el.css('left', left);
				win.el.onTransitionEnd(function(){
					win.el.removeClass('exposing');
				}, this);
			}

			this.overlay = true;
			this.el.one('click', function() {
				self.mode = 'default';
			});
		},

		// Lauch when plugin is disabled
		unplug: function() {
			var space = this.el;
			for(var z, win, i=this.windows.length; i--;) {
				win = this.windows[i];

				win.restore();
				win.el.css('transform', 'scale(1)');
				win.el.css('transform-origin', '50% 50%');

				var removeTransform = (function(win){
					return function () {
						this.el.removeClass('expose');
						win.el.css('transform', '');
					}
				})(win);

				this.el.onTransitionEnd(removeTransform, this);

				win.movable = true;
				win.enabled = true;
			}

			this.overlay = false;
		},

		actions: {
			focus: function(win) {
			},

			close: function() {
				this.mode = 'expose';
			},

			select: function(win, e) {
				this.mode = 'default';
				win.focus();
			}
		}
	};

	return ExposeMode;
});

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define('ventus/wm/modes/fullscreen',['less!../../../css/fullscreen'], function() {
	

	var FullscreenMode = {

		// Launch when plugin is registered
		register: function() {
			console.log('Fullscreen mode registered.');
		},

		// Lauch when plugin is enabled
		plug: function() {
			this.el.addClass('fullscreen');

			for(var win, i=0, len=this.windows.length; i<len; i++) {
				win = this.windows[i];
				win.move(0,0);
				win.el.css('-webkit-transform', 'translate3d(0, 0, 0);');
				win.resize(this.el.width(), this.el.height());
			}
		},

		// Lauch when plugin is disabled
		unplug: function() {
			for(var win, i=this.windows.length; i--;) {
				win = this.windows[i];

				win.restore();
				win.el.css('transform', 'scale(1)');
				win.el.css('transform-origin', '50% 50%');

				var removeTransform = (function(win){
					return function () {
						this.el.removeClass('fullscreen');
						win.el.css('transform', '');
					};
				})(win);

				this.el.onTransitionEnd(removeTransform, this);

				win.movable = true;
				win.resizable = true;
				win.enabled = true;
			}

			this.overlay = false;
		},

		actions: {
			focus: function(/*win*/) {
			},

			close: function() {
				this.mode = 'expose';
			},

			select: function(win/*, e*/) {
				this.mode = 'default';
				win.focus();
			}
		}
	};

	return FullscreenMode;
});

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define('ventus/wm/windowmanager',['require','$','ventus/wm/window','ventus/core/view','ventus/wm/modes/default','ventus/wm/modes/expose','ventus/wm/modes/fullscreen'],function(require) {
	

	var $ = require('$');
	var Window = require('ventus/wm/window');
	var view = require('ventus/core/view');
	var DefaultMode = require('ventus/wm/modes/default');
	var ExposeMode = require('ventus/wm/modes/expose');
	var FullscreenMode = require('ventus/wm/modes/fullscreen');

	var WindowManager = function () {
		this.el = view('<div class="wm-space"><div class="wm-overlay" /></div>');
		$(document.body).prepend(this.el);

		this.$overlay = this.el.find('.wm-overlay');
		this.$overlay.css('z-index', this._baseZ-1);

		// Generate mode plugin actions wrapper
		this.actions.forEach(function(value){
			this[value] = (function(action) {
				return function() {
					if(this.currentMode.actions[action])
						this.currentMode.actions[action].apply(this, arguments);
				};
			}).call(this, value);
		}, this);

		// Launch register of every mode plugged-in
		for(var mode in this.modes) {
			if(this.modes.hasOwnProperty(mode) && this.modes[mode].register) {
				this.modes[mode].register.apply(this);
			}
		}

		this.windows = [];
		this.active = null;

		this.mode = 'default';

		// Binding sub-functions to this object
		this.createWindow.fromQuery = this.createWindow.fromQuery.bind(this);
		this.createWindow.fromElement = this.createWindow.fromElement.bind(this);
	};

	WindowManager.prototype = {
		actions: [
			'focus',
			'blur',
			'close',
			'maximize',
			'minimize',
			'restore',
			'select'
		],

		modes: {
			'default': DefaultMode,
			'expose': ExposeMode,
			'fullscreen': FullscreenMode
		},

		set mode(value) {

			var mode = this.modes[value];
			if(!mode || this._mode === value) return;

			// Unplug old system
			if (this._mode && this.currentMode.unplug)
				this.currentMode.unplug.apply(this);

			// Plug new mode system
			if(mode.plug)
				mode.plug.apply(this);

			this._mode = value;
		},

		get mode() {
			return this._mode;
		},

		get currentMode() {
			return this.modes[this._mode];
		},

		set overlay(value) {
			this.$overlay.css('opacity', value ? 0.8 : 0);
			this._overlay = value;
		},

		get overlay() {
			return this._overlay;
		},

		createWindow: function(options) {
			var win = new Window(options);

			// Show 'default' mode
			this.mode = 'default';

			// Connect window signals to the manager listeners
			win.signals.on('focus', this._focus, this);
			win.signals.on('blur', this._blur, this);
			win.signals.on('close', this._close, this);

			// Connect window signals to manager mode actions
			this.actions.forEach(function(action){
				win.signals.on(action, this[action], this);
			}, this);

			this.windows.push(win);

			win.space = this.el;

			win.focus();
			return win;
		},

		/**
		 * Internal action always performed besides the mode definition
		 */
		_focus: function(win) {
			var currentZ,
				baseZ = 10000,
				maxZ = baseZ + 10000,
				index;

			if (this.active && this.active === win)
				return;

			if(this.active) {
				currentZ = this.active.z;
				this.active.blur();
			}
			else {
				currentZ = baseZ;
			}

			// Reorder windows stack (@todo optimize this)
			index = this.windows.indexOf(win);
			this.windows.splice(index, 1); // Remove from array
			this.windows.push(win);

			win.z = currentZ + 1;

			// Refresh z-indexes just every 'maxZ' activations
			if (currentZ > maxZ + this.windows.length) {
				for(var z, i=this.windows.length; i--;) {
					z = this.windows[i].z;
					this.windows[i].z = baseZ + (z - maxZ);
				}
			}

			this.active = win;
		},

		/**
		 * Internal action always performed besides the mode definition
		 */
		_blur: function(win) {
			if(this.active === win)
				this.active = null;
		},

		/**
		 * Internal action always performed besides the mode definition
		 */
		_close: function(win) {
			// Remove window from manager
			var id = this.windows.indexOf(win), len;
			if(id === -1) {
				console.log('Trying to close a window that doesn\'t exist in this window manager');
				return;
			}

			this.windows.splice(id, 1); // Remove from array
			len = this.windows.length;
			if(this.active && this.active === win) {
				this.active = (len !== 0) ? this.windows[len-1] : null;
				if (this.active)
					this.active.focus();
			}
		}
	};

	WindowManager.prototype.createWindow.fromQuery = function(selector, options) {
		options.content = view(selector);
		return this.createWindow(options);
	};

	WindowManager.prototype.createWindow.fromElement = function(element, options) {
		options.content = view(element);
		return this.createWindow(options);
	};

	return WindowManager;
});

/**
 * Ventus
 * Copyright © 2012-2013 Ramón Lamana
 * https://github.com/rlamana
 */
define('ventus',['require','ventus/wm/windowmanager','ventus/wm/window'],function(require) {
	

	return {
		version: '0.1',

		browser: {
			animationEventName: function(){
				var style = document.body.style;
				var event = null;

				if(style.animation === '')
					event = 'animationend';

				else if(style.MozAnimation === '')
					event = 'mozAnimationEnd';

				else if(style.webkitAnimation === '')
					event = 'webkitAnimationEnd';

				return event;
			}
		},

		WindowManager: require('ventus/wm/windowmanager'),
		Window: require('ventus/wm/window')
	};
});
    // Register in the values from the outer closure for common dependencies
    // as local almond modules
    define('$', function () {
        return $;
    });

    define('handlebars', function () {
        return Handlebars;
    });

    return require('ventus');
}));