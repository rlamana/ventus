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
 * Basejs
 * Copyright © 2009-2012 A. Matías Quezada
 * https://github.com/amatiasq
 */
 
/**
 * interface Emitter {
 *   void on(String signal, Function handler, [Object scope]);
 *   void off(String signal, Function handler, [Object scope]);
 *   void emit(String signal, Object var_args...);
 * }
 *
 * Provides a constructor to listen and emit signals.
 *
 * TODO: Add .once() method to listen a signal only once.
 */

(function(root) {
	

	function equals(handler, scope, expected) {
		return function(item) {
			return (
				item.funct === handler &&
				item.scope === scope
			) === expected;
		};
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
		 * @param handler <Function> The callback function.
		 * @param scope <Object?> The scope for the callback.
		 */
		on: function on(signal, handler, scope) {
			var list = this._listeners;

			if (!list[signal])
				list[signal] = [];

			if (list[signal].some(equals(handler, scope, true)))
				return;

			list[signal].push({
				funct: handler,
				scope: scope
			});
		},

		/**
		 * Removes the listener added with exactly the same arguments.
		 *
		 * @param signal <String> The signal from we want to remove the listener.
		 * @param handler <Function> The callback passed to .on() method.
		 * @param scope <Object> The scope for the callback.
		 */
		off: function off(signal, handler, scope) {
			var list = this._listeners[signal];
			if (!list)
				return;

			this._listeners[signal] = list.filter(equals(handler, scope, false));
		},

		/**
		 * Executes the callbacks for the given signal.
		 * Any extra argument will be passed to the callback.
		 *
		 * @param signal <String> The signal of the listeners we want to invoke.
		 * @param var_args <object...> Any arguments we want the callbacks to recive.
		 */
		emit: function emit(signal, var_args) {
			var list = this._listeners[signal];
			if (!list)
				return;

			var data = Array.prototype.slice.call(arguments, 1);
			list.forEach(function(item) {
				item.funct.apply(item.scope, data);
			});
		},

		/**
		 * Adds listeners to a group of signals, optionally a scope can be provided
		 *
		 * @param slots <String> Map of signals and listeners.
		 * @param scope <Object> The scope for the callback.
		 */
		connect: function connect(slots, scope) {
			if (!slots)
				return;

			for (var signal in slots) {
		       	if(!slots.hasOwnProperty(signal)) 
		       		continue;
		        
		       	this.on(signal, slots[signal], scope);
		    }
		},

		/**
		 * Removes listeners to a group of signals, optionally a scope can be provided
		 *
		 * @param slots <String> Map of signals and listeners.
		 * @param scope <Object> The scope for the callback.
		 */
		disconnect: function disconnect(slots, scope) {
			if (!slots)
				return;

			for (var signal in slots) {
		       	if(!slots.hasOwnProperty(signal)) 
		       		continue;
		        
		       	this.off(signal, slots[signal], scope);
		    }
		}
	};

	if (typeof Base === 'function')
		Emitter = Base.extend(Emitter.prototype);

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
  buffer += escapeExpression(stack1) + "\" >\n	<div class=\"wm-window-box\">\n		<header class=\"wm-window-title\" unselectable=\"on\">\n			<div class=\"wm-button-group\">\n				<button class=\"wm-close\">&nbsp;</button>\n				<button class=\"wm-maximize\">&nbsp;</button>\n				<button class=\"wm-minimize\">&nbsp;</button>\n			</div>\n\n			<h1 unselectable=\"on\">";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h1>\n		</header>\n\n		<section class=\"wm-content\"></section>\n\n		<button class=\"wm-resize\">&nbsp;</button>\n	</div>\n	<div class=\"wm-window-overlay\"></div>\n</div>\n";
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
			title: "Untitle Window",
			width: 400,
			height: 200,
			x: 0,
			y: 0,
			content: '',
			resizable: true
		};

		// View
		this.el = View(WindowTemplate({
			title: options.title,
			classname: options.classname||''
		}));
		this.el.listen(this.events.window, this); 

		// Cache content element
		this.$content = this.el.find('.wm-content');
		if(options.content)
			this.append(options.content);

		// Cache header element
		this.$header = this.el.find('header');

		this.width = options.width || 400;
		this.height = options.height || 200;

		this.x = options.x || 0;
		this.y = options.y || 0;
		this.z = 10000;

		this.opened = false;
		this.enabled = true;
		this.active = false;
		this.closed = false;
		this.maximized = false;
		this.minimized = false;

		this.movable = true;
		this.resizable = (typeof options.resizable !== 'undefined') ? 
			options.resizable :
			true;
	};

	Window.prototype = {
		_restore: null,
		_moving: null,
		_resizing: null,

		events: {
			window: {
				'click': function(e) {
					this.signals.emit('select', this, e);
				},

				'mousedown': function(e) {
					this.focus();
				},

				'.wm-content click': function(e) {
					this.enabled && this.signals.emit('click', this, e);
				},

				'.wm-window-title mousedown': function(e) {
					if(!this.enabled || !this.movable) return;

					this._moving = this.toLocal({
						x: e.originalEvent.pageX,
						y: e.originalEvent.pageY
					});

					this.el.addClass('move');

					e.preventDefault();
				},

				'.wm-window-title dblclick': function(e) {
					(this.enabled && this.resizable) && this.maximize();
				},

				'.wm-window-title button.wm-close click': function(e) {
					e.stopPropagation();
					e.preventDefault();

					this.enabled && this.close();
				},

				'.wm-window-title button.wm-maximize click': function(e) {
					e.stopPropagation();
					e.preventDefault();

					(this.enabled && this.resizable) && this.maximize();
				},

				'.wm-window-title button.wm-minimize click': function(e) {
					e.stopPropagation();
					e.preventDefault();

					this.enabled && this.minimize();
				},

				'.wm-window-title button mousedown': function(e) {
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
					this._moving && this.move(
						e.originalEvent.pageX - this._moving.x,
						e.originalEvent.pageY - this._moving.y
					);
					
					this._resizing && this.resize(
						e.originalEvent.pageX + this._resizing.width,
						e.originalEvent.pageY + this._resizing.height 
					);
				},

				'mouseup': function(e) {
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
				console.error("The given space element is not a valid View");
				return;
			}

			el.append(this.el);
			el.listen(this.events.space, this);
		},


		get maximized() {
			return this._maximized;
		},

		set maximized(value) {
			if(value) {
				this.stamp();
				this.signals.emit('maximize', this);
			} 
			else {
				this.signals.emit('restore', this);
	
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

		set closed (value) {
			var self = this;
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

		set opened (value) {
			var self = this;
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

		set width(value) {
			this.el.width(value);
		},

		get width() {
			return parseInt(this.el.width());
		},

		set height(value) {
			// This shouldn't be done if flexible box model
			// worked properly with overflow-y: auto
			//this.$content.height(value - this.$header.outerHeight());

			this.el.height(value);
		},
		
		get height() {
			return parseInt(this.el.height());
		},

		set x(value) {
			this.el.css('left', value);
		},

		set y(value) {
			this.el.css('top', value);
		},

		get x() {
			return parseInt(this.el.css('left'));
		},

		get y() {
			return parseInt(this.el.css('top'));
		},

		set z(value) {
			this.el.css('z-index', value);
		},

		get z() {
			return parseInt(this.el.css('z-index'));
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
				}
			}).apply(this);
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
	}

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

			restore: function(win) {
				win.restore();
			},

			minimize: function(win) {
				win.resize(0,0);
			}
		}
	};

	return DefaultMode;
});

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define('ventus/wm/modes/expose',['less!../../../css/expose'],function() {

	var ExposeMode = {

		// Launch when plugin is registered
		register: function() {
			var self = this;

			console.log("Expose mode registered.");

			this.el.on('contextmenu', function(event) {
				// Right click sets expose mode
				if (self.mode !== 'expose') {
					self.mode = 'expose';	
				} else if(self.mode === 'expose') {
					self.mode = 'default';
				}

				return false;		
			});
		},

		// Lauch when plugin is enabled
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

				scale -= .15; // To add a little padding

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
			var self = this;

			console.log("Fullscreen mode registered.");
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
			var space = this.el;
			for(var z, win, i=this.windows.length; i--;) {
				win = this.windows[i];
				
				win.restore();
				win.el.css('transform', 'scale(1)');
				win.el.css('transform-origin', '50% 50%');

				var removeTransform = (function(win){
					return function () {
						this.el.removeClass('fullscreen');
						win.el.css('transform', '');
					}
				})(win);

				this.el.onTransitionEnd(removeTransform, this);
				
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
			},

			select: function(win, e) {
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
define('ventus/wm/windowmanager',[
	'$',
	'ventus/wm/window',
	'ventus/core/view',
	'ventus/wm/modes/default',
	'ventus/wm/modes/expose',
	'ventus/wm/modes/fullscreen'
], 
function($, Window, View, DefaultMode, ExposeMode, FullscreenMode) {
	var WindowManager = function () {
		this.el = View("<div class='wm-space'><div class='wm-overlay' /></div>");
		$(document.body).prepend(this.el);

		this.$overlay = this.el.find('.wm-overlay');
		this.$overlay.css('z-index', this._baseZ-1);

		// Generate mode plugin actions wrapper
		this.actions.forEach(function(value){
			this[value] = (function(action) {
				return function() {
					this.currentMode.actions[action] && 
					this.currentMode.actions[action].apply(this, arguments);
				}
			}).call(this, value);
		}, this);

		// Launch register of every mode plugged-in
		for(var mode in this.modes) {
			if(this.modes.hasOwnProperty(mode) && 
			   this.modes[mode].register) {
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
			if (this._mode)
				this.currentMode['unplug'] && this.currentMode.unplug.apply(this);

			// Plug new mode system
			mode['plug'] && mode.plug.apply(this);

			this._mode = value;
		},

		get mode() {
			return this._mode;
		},

		get currentMode() {
			return this.modes[this._mode];
		},

		set overlay(value) {
			this.$overlay.css('opacity', value ? .8 : 0);
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
		options.content = View(selector);
		return this.createWindow(options);
	};

	WindowManager.prototype.createWindow.fromElement = function(element, options) {
		options.content = View(element);
		return this.createWindow(options);
	};

	return WindowManager;
});

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
define('ventus',['require','$','ventus/wm/windowmanager','ventus/wm/window'],function(require) {
	
	var $ = require('$');

	return {
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