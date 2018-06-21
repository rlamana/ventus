(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Ventus"] = factory();
	else
		root["Ventus"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ventus.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/less-loader/dist/cjs.js??ref--6-3!./ventus/less/expose.less":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/postcss-loader/lib!../node_modules/less-loader/dist/cjs.js??ref--6-3!./ventus/less/expose.less ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wm-space.expose .wm-window {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.wm-space.expose .wm-window section.wm-content {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.wm-space.expose .wm-window.wm-window.animated {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: top 0.5s ease-out, left 0.5s ease-out;\n  transition: top 0.5s ease-out, left 0.5s ease-out;\n}\n.wm-space.expose .wm-window:hover {\n  box-shadow: 0px 0px 40px #000088;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/less-loader/dist/cjs.js??ref--6-3!./ventus/less/fullscreen.less":
/*!*****************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/postcss-loader/lib!../node_modules/less-loader/dist/cjs.js??ref--6-3!./ventus/less/fullscreen.less ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wm-space.fullscreen .wm-window {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.wm-space.fullscreen .wm-window.animated {\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n.wm-space.fullscreen .wm-window.animated .wm-window-title,\n.wm-space.fullscreen .wm-window.animated .wm-window-title h1 {\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n.wm-space.fullscreen .wm-window-title {\n  background: transparent;\n  font-size: 40px;\n  height: 50px;\n  padding: 40px 50px;\n}\n.wm-space.fullscreen .wm-window-title .wm-button-group {\n  display: none;\n}\n.wm-space.fullscreen .wm-window-title h1 {\n  font-size: 40px;\n}\n.wm-space.fullscreen .wm-content {\n  padding: 0 40px;\n}\n.wm-space.fullscreen .wm-content.animated {\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n.wm-space.fullscreen .wm-resize {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/less-loader/dist/cjs.js??ref--6-3!./ventus/less/window.less":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/postcss-loader/lib!../node_modules/less-loader/dist/cjs.js??ref--6-3!./ventus/less/window.less ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Wobbly animation */\n@-webkit-keyframes wobbly {\n  0% {\n    -webkit-transform: rotate(4deg);\n            transform: rotate(4deg);\n  }\n  50% {\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n  100% {\n    -webkit-transform: rotate(4deg);\n            transform: rotate(4deg);\n  }\n}\n@keyframes wobbly {\n  0% {\n    -webkit-transform: rotate(4deg);\n            transform: rotate(4deg);\n  }\n  50% {\n    -webkit-transform: rotate(-4deg);\n            transform: rotate(-4deg);\n  }\n  100% {\n    -webkit-transform: rotate(4deg);\n            transform: rotate(4deg);\n  }\n}\n/* Appear animation */\n@-webkit-keyframes appear {\n  0% {\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  80% {\n    -webkit-transform: scale(1.2, 1.2);\n            transform: scale(1.2, 1.2);\n  }\n  100% {\n    -webkit-transform: rotate(1, 1);\n            transform: rotate(1, 1);\n  }\n}\n@keyframes appear {\n  0% {\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  80% {\n    -webkit-transform: scale(1.2, 1.2);\n            transform: scale(1.2, 1.2);\n  }\n  100% {\n    -webkit-transform: rotate(1, 1);\n            transform: rotate(1, 1);\n  }\n}\n/* Close animation */\n@-webkit-keyframes close {\n  0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  20% {\n    -webkit-transform: scale(1.2, 1.2);\n            transform: scale(1.2, 1.2);\n  }\n  100% {\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n@keyframes close {\n  0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  20% {\n    -webkit-transform: scale(1.2, 1.2);\n            transform: scale(1.2, 1.2);\n  }\n  100% {\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n/* Window styles */\n.wm-window {\n  opacity: 0.98;\n  display: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  position: absolute;\n  min-width: 200px;\n  min-height: 60px;\n  background-color: #fff;\n  box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.6);\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.wm-window .wm-window-overlay {\n  display: none;\n}\n.wm-window .wm-window-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  min-height: 60px;\n  width: 100%;\n}\n.wm-window .wm-window-box .wm-window-title {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n     -moz-box-orient: horizontal;\n     -moz-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 36px;\n  min-height: 36px;\n  background-color: #365d98;\n  border: 0;\n  padding: 0 8px;\n  overflow: hidden;\n  /*button.wm-close {\n\t\t\t\tbackground: no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAA6NJREFUeAEAkwNs/AH///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAP///wD///8AAgAAAAAAAAAAAAAAGQAAAIAAAAC6AAAABQAAAAAAAAAAAAAAAAAAAAUAAAC6AAAAgAAAABkAAAAAAAAAAAD///8A////AAAAALQAAAD/AAAA/wAAAL8AAAAFAAAAAAAAAAUAAAC/AAAA/wAAAP8AAAC0////AP///wAA////AP///wAAAABiAAAA/wAAAP8AAAD/AAAAvwAAAAoAAAC/AAAA/wAAAP8AAAD/AAAAYv///wD///8AAP///wD///8AAAAAAAAAAHAAAAD/AAAA/wAAAP8AAADvAAAA/wAAAP8AAAD/AAAAcAAAAAD///8A////AAD///8A////AAAAAAAAAAAAAAAAcAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAcAAAAAAAAAAA////AP///wAA////AP///wAAAAAAAAAAAAAAAAUAAADbAAAA/wAAAP8AAAD/AAAA2wAAAAUAAAAAAAAAAP///wD///8AAP///wD///8AAAAAAAAAAAUAAAC/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAC/AAAABQAAAAD///8A////AAD///8A////AAAAAAUAAAC/AAAA/wAAAP8AAAD/AAAArwAAAP8AAAD/AAAA/wAAAL8AAAAF////AP///wAA////AP///wAAAADYAAAA/wAAAP8AAAD/AAAAcAAAAAAAAABwAAAA/wAAAP8AAAD/AAAA2P///wD///8AAP///wD///8AAAAAugAAAPMAAAD/AAAAcAAAAAAAAAAAAAAAAAAAAHAAAAD/AAAA8wAAALr///8A////AAD///8A////AAAAAAcAAACpAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAKkAAAAH////AP///wAA////AP///wAAAAAAAAAANQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1AAAAAP///wD///8AAf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAP//3IrZ3HU6n9QAAAAASUVORK5CYII=);\n\t\t\t}\n\n\t\t\tbutton.wm-maximize {\n\t\t\t\tbackground: no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1QjVBNEU5QjQ4MjA2ODExODIyQUFEQUJGRDI2QzFCNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MTM1RjQxMzRFRTAxMUUyODUwRjg1ODE1RkQxMDIxRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MTM1RjQxMjRFRTAxMUUyODUwRjg1ODE1RkQxMDIxRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUI1QTRFOUI0ODIwNjgxMTgyMkFBREFCRkQyNkMxQjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUI1QTRFOUI0ODIwNjgxMTgyMkFBREFCRkQyNkMxQjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5/zPe0AAAAPUlEQVR42mL8//8/A7mAiYECwAIiGBkZSbYe6GJGimym3NnozsGlGN17A+fsQRRgpMT5wDmbccAyBkCAAQBGYQ8f7/o0HQAAAABJRU5ErkJggg==);\n\t\t\t}\n\n\t\t\tbutton.wm-minimize {\n\t\t\t\tbackground: no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1QjVBNEU5QjQ4MjA2ODExODIyQUFEQUJGRDI2QzFCNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MTM1RjQxNzRFRTAxMUUyODUwRjg1ODE1RkQxMDIxRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MTM1RjQxNjRFRTAxMUUyODUwRjg1ODE1RkQxMDIxRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUI1QTRFOUI0ODIwNjgxMTgyMkFBREFCRkQyNkMxQjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUI1QTRFOUI0ODIwNjgxMTgyMkFBREFCRkQyNkMxQjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6V8bAdAAAALUlEQVR42mL8//8/A7mAiYECMBI1s4AIRkZGkoMcGEuMA+dsxtFEQkfNAAEGAAPWChlCSQpaAAAAAElFTkSuQmCC);\n\t\t\t}*/\n}\n.wm-window .wm-window-box .wm-window-title h1 {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n     -moz-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n     -moz-box-orient: horizontal;\n     -moz-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: default;\n  padding: 0;\n  padding-left: 8px;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 400;\n  color: #fff;\n}\n.wm-window .wm-window-box .wm-window-title .wm-button-group {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n     -moz-box-orient: horizontal;\n     -moz-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n  padding-left: 2px;\n}\n.wm-window .wm-window-box .wm-window-title button {\n  display: inline-block;\n  border: 0;\n  background-repeat: no-repeat;\n  background-color: #365d98;\n  color: #FFFFFF;\n  margin: 0;\n  margin-left: 3px;\n  padding: 0;\n  width: 15px;\n  height: 15px;\n  opacity: .7;\n}\n.wm-window .wm-window-box .wm-window-title button:hover {\n  opacity: 1;\n}\n.wm-window .wm-window-box .wm-window-title button.wm-close {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkIxOUQwNTEzMDM0MTFFMkI5MUFGMzlFMTgwOEI4ODEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkIxOUQwNTIzMDM0MTFFMkI5MUFGMzlFMTgwOEI4ODEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQjE5RDA0RjMwMzQxMUUyQjkxQUYzOUUxODA4Qjg4MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQjE5RDA1MDMwMzQxMUUyQjkxQUYzOUUxODA4Qjg4MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpFaWsQAAABxSURBVHjajJDRDcAgCERtJ2AER+oIjuZIHcER3IBCvDYX5KMklwg8lPNQ1fI3TjpfJgl9QX2F32yquuI2CWqCXNH/YFejgUpgexmGeUAjmMH+9AA4aKUN5h174qFkYEs8CMNuaMYdkc/sNySAW/0RYABjHiW8yydeWwAAAABJRU5ErkJggg==) no-repeat 1px 1px;\n}\n.wm-window .wm-window-box .wm-window-title button.wm-maximize {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkIxOUQwNTUzMDM0MTFFMkI5MUFGMzlFMTgwOEI4ODEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkIxOUQwNTYzMDM0MTFFMkI5MUFGMzlFMTgwOEI4ODEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQjE5RDA1MzMwMzQxMUUyQjkxQUYzOUUxODA4Qjg4MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQjE5RDA1NDMwMzQxMUUyQjkxQUYzOUUxODA4Qjg4MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqAiG1YAAAA7SURBVHjaYvz//z8DsYAJSj8E4v948AdkxSSZDALyQMyIBQtgU0ySyQOomAWJ/RCPuo8ggpGUSAEIMACTWxDft/Hl3wAAAABJRU5ErkJggg==) no-repeat 1px 1px;\n}\n.wm-window .wm-window-box .wm-window-title button.wm-minimize {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzYwRDNDRkMzMDM5MTFFMkI5MUFGMzlFMTgwOEI4ODEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzYwRDNDRkQzMDM5MTFFMkI5MUFGMzlFMTgwOEI4ODEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQjE5RDA1NzMwMzQxMUUyQjkxQUYzOUUxODA4Qjg4MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQjE5RDA1ODMwMzQxMUUyQjkxQUYzOUUxODA4Qjg4MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsZJjdUAAAAlSURBVHjaYvz//z8DsYCJgQQwqhgZsCCx8QU4I7piRkImAwQYAJ10BBYiYyqTAAAAAElFTkSuQmCC) no-repeat 1px 1px;\n}\n.wm-window .wm-window-box header.wm-window-title.hide {\n  display: none;\n}\n.wm-window .wm-window-box section.wm-content {\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n     -moz-box-flex: 1;\n          flex: 1;\n  min-height: 60px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.wm-window .wm-window-box button.wm-resize {\n  position: absolute;\n  bottom: 0;\n  right: 4px;\n  background: transparent;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  cursor: se-resize;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzREODAwQzcyRjZDMTFFMjg5NkREMENBNjJERUE4Q0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzREODAwQzgyRjZDMTFFMjg5NkREMENBNjJERUE4Q0IiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNEQ4MDBDNTJGNkMxMUUyODk2REQwQ0E2MkRFQThDQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNEQ4MDBDNjJGNkMxMUUyODk2REQwQ0E2MkRFQThDQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuQy0VQAAACLSURBVHjaYpw9ezYDEUARiO8zEaHQHohPArEcCxEK1wGxPxA/wmeyDZLCIyABJjwKNwJxEFShIi7FyAoPArEZEB8DYi0mHFaHIikEaUwE4mtMWBRGAPE+NIU7kJ0BUxiNQyFInpMJKgFTuBuLQj8gXg3yJCicHyFZDQJfgDgOqhEE3gGxD8jNAAEGADlXJQUd3J75AAAAAElFTkSuQmCC) no-repeat;\n  height: 15px;\n  width: 10px;\n}\n.wm-window.disabled * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.wm-window.disabled .wm-window-overlay {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0;\n  z-index: 30000;\n}\n.wm-window.inactive * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.wm-window.inactive header.wm-window-title {\n  background-color: #888;\n}\n.wm-window.inactive header.wm-window-title h1 {\n  color: #bbb;\n}\n.wm-window.active .wm-content * {\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n.wm-window.noresizable .wm-window-box header.wm-window-title button.wm-maximize,\n.wm-window.noresizable .wm-window-box header.wm-window-title button.wm-minimize {\n  display: none;\n}\n.wm-window.noresizable .wm-window-box section.wm-content {\n  overflow-y: hidden;\n}\n.wm-window.noresizable .wm-window-box button.wm-resize {\n  display: none;\n}\n.wm-window.animated.minimizing,\n.wm-window.animated.maximazing {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n}\n.wm-window.animated.closing {\n  -webkit-animation: close 0.3s 1 ease-in forwards;\n          animation: close 0.3s 1 ease-in forwards;\n}\n.wm-window.closing {\n  -webkit-animation: close;\n          animation: close;\n}\n.wm-window.animated.opening {\n  -webkit-animation: appear 0.4s 1 ease-out forwards;\n          animation: appear 0.4s 1 ease-out forwards;\n}\n.wm-window.opening {\n  -webkit-animation: appear;\n          animation: appear;\n}\n.wm-window.animated.resizing {\n  -webkit-transition: none;\n  transition: none;\n}\n.wm-window.animated.move {\n  -webkit-animation: wobbly 0.5s 0.2s infinite;\n          animation: wobbly 0.5s 0.2s infinite;\n}\n.wm-window.animated.move * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.wm-window.closed {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/less-loader/dist/cjs.js??ref--6-3!./ventus/less/windowmanager.less":
/*!********************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/postcss-loader/lib!../node_modules/less-loader/dist/cjs.js??ref--6-3!./ventus/less/windowmanager.less ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wm-space {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: -1;\n  cursor: default;\n}\n.wm-space .wm-overlay {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #000;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s ease-out;\n  transition: opacity 0.5s ease-out;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../node_modules/lodash.throttle/index.js":
/*!************************************************!*\
  !*** ../node_modules/lodash.throttle/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../node_modules/webpack/buildin/amd-options.js":
/*!******************************************************!*\
  !*** ../node_modules/webpack/buildin/amd-options.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./jquery.js":
/*!*******************!*\
  !*** ./jquery.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jQuery JavaScript Library v1.8.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Sep 20 2012 21:13:05 GMT-0400 (Eastern Daylight Time)
 */
(function (window, undefined) {
	var
	// A central reference to the root jQuery(document)
	rootjQuery,


	// The deferred used on DOM ready
	readyList,


	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,
	    location = window.location,
	    navigator = window.navigator,


	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$,


	// Save a reference to some core methods
	core_push = Array.prototype.push,
	    core_slice = Array.prototype.slice,
	    core_indexOf = Array.prototype.indexOf,
	    core_toString = Object.prototype.toString,
	    core_hasOwn = Object.prototype.hasOwnProperty,
	    core_trim = String.prototype.trim,


	// Define a local copy of jQuery
	jQuery = function jQuery(selector, context) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init(selector, context, rootjQuery);
	},


	// Used for matching numbers
	core_pnum = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,


	// Used for detecting and trimming whitespace
	core_rnotwhite = /\S/,
	    core_rspace = /\s+/,


	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,


	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,


	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	    rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	    rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	    rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,


	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([\da-z])/gi,


	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function fcamelCase(all, letter) {
		return (letter + "").toUpperCase();
	},


	// The ready event handler and self cleanup method
	DOMContentLoaded = function DOMContentLoaded() {
		if (document.addEventListener) {
			document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
			jQuery.ready();
		} else if (document.readyState === "complete") {
			// we're here because readyState === "complete" in oldIE
			// which is good enough for us to call the dom ready!
			document.detachEvent("onreadystatechange", DOMContentLoaded);
			jQuery.ready();
		}
	},


	// [[Class]] -> type pairs
	class2type = {};

	jQuery.fn = jQuery.prototype = {
		constructor: jQuery,
		init: function init(selector, context, rootjQuery) {
			var match, elem, ret, doc;

			// Handle $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}

			// Handle $(DOMElement)
			if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
			}

			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}

				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {

					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;
						doc = context && context.nodeType ? context.ownerDocument || context : document;

						// scripts is true for back-compat
						selector = jQuery.parseHTML(match[1], doc, true);
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							this.attr.call(selector, context, true);
						}

						return jQuery.merge(this, selector);

						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if (elem && elem.parentNode) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if (elem.id !== match[2]) {
								return rootjQuery.find(selector);
							}

							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || rootjQuery).find(selector);

					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}

				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (jQuery.isFunction(selector)) {
				return rootjQuery.ready(selector);
			}

			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray(selector, this);
		},

		// Start with an empty selector
		selector: "",

		// The current version of jQuery being used
		jquery: "1.8.2",

		// The default length of a jQuery object is 0
		length: 0,

		// The number of elements contained in the matched element set
		size: function size() {
			return this.length;
		},

		toArray: function toArray() {
			return core_slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function get(num) {
			return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			num < 0 ? this[this.length + num] : this[num];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function pushStack(elems, name, selector) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			ret.context = this.context;

			if (name === "find") {
				ret.selector = this.selector + (this.selector ? " " : "") + selector;
			} else if (name) {
				ret.selector = this.selector + "." + name + "(" + selector + ")";
			}

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function each(callback, args) {
			return jQuery.each(this, callback, args);
		},

		ready: function ready(fn) {
			// Add the callback
			jQuery.ready.promise().done(fn);

			return this;
		},

		eq: function eq(i) {
			i = +i;
			return i === -1 ? this.slice(i) : this.slice(i, i + 1);
		},

		first: function first() {
			return this.eq(0);
		},

		last: function last() {
			return this.eq(-1);
		},

		slice: function slice() {
			return this.pushStack(core_slice.apply(this, arguments), "slice", core_slice.call(arguments).join(","));
		},

		map: function map(callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		end: function end() {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: core_push,
		sort: [].sort,
		splice: [].splice
	};

	// Give the init function the jQuery prototype for later instantiation
	jQuery.fn.init.prototype = jQuery.fn;

	jQuery.extend = jQuery.fn.extend = function () {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if (length === i) {
			target = this;
			--i;
		}

		for (; i < length; i++) {
			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		noConflict: function noConflict(deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}

			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}

			return jQuery;
		},

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function holdReady(hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		},

		// Handle when the DOM is ready
		ready: function ready(wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if (!document.body) {
				return setTimeout(jQuery.ready, 1);
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);

			// Trigger any bound ready events
			if (jQuery.fn.trigger) {
				jQuery(document).trigger("ready").off("ready");
			}
		},

		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function isFunction(obj) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray || function (obj) {
			return jQuery.type(obj) === "array";
		},

		isWindow: function isWindow(obj) {
			return obj != null && obj == obj.window;
		},

		isNumeric: function isNumeric(obj) {
			return !isNaN(parseFloat(obj)) && isFinite(obj);
		},

		type: function type(obj) {
			return obj == null ? String(obj) : class2type[core_toString.call(obj)] || "object";
		},

		isPlainObject: function isPlainObject(obj) {
			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
				return false;
			}

			try {
				// Not own constructor property must be Object
				if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.

			var key;
			for (key in obj) {}

			return key === undefined || core_hasOwn.call(obj, key);
		},

		isEmptyObject: function isEmptyObject(obj) {
			var name;
			for (name in obj) {
				return false;
			}
			return true;
		},

		error: function error(msg) {
			throw new Error(msg);
		},

		// data: string of html
		// context (optional): If specified, the fragment will be created in this context, defaults to document
		// scripts (optional): If true, will include scripts passed in the html string
		parseHTML: function parseHTML(data, context, scripts) {
			var parsed;
			if (!data || typeof data !== "string") {
				return null;
			}
			if (typeof context === "boolean") {
				scripts = context;
				context = 0;
			}
			context = context || document;

			// Single tag
			if (parsed = rsingleTag.exec(data)) {
				return [context.createElement(parsed[1])];
			}

			parsed = jQuery.buildFragment([data], context, scripts ? null : []);
			return jQuery.merge([], (parsed.cacheable ? jQuery.clone(parsed.fragment) : parsed.fragment).childNodes);
		},

		parseJSON: function parseJSON(data) {
			if (!data || typeof data !== "string") {
				return null;
			}

			// Make sure leading/trailing whitespace is removed (IE can't handle it)
			data = jQuery.trim(data);

			// Attempt to parse using the native JSON parser first
			if (window.JSON && window.JSON.parse) {
				return window.JSON.parse(data);
			}

			// Make sure the incoming data is actual JSON
			// Logic borrowed from http://json.org/json2.js
			if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {

				return new Function("return " + data)();
			}
			jQuery.error("Invalid JSON: " + data);
		},

		// Cross-browser xml parsing
		parseXML: function parseXML(data) {
			var xml, tmp;
			if (!data || typeof data !== "string") {
				return null;
			}
			try {
				if (window.DOMParser) {
					// Standard
					tmp = new DOMParser();
					xml = tmp.parseFromString(data, "text/xml");
				} else {
					// IE
					xml = new ActiveXObject("Microsoft.XMLDOM");
					xml.async = "false";
					xml.loadXML(data);
				}
			} catch (e) {
				xml = undefined;
			}
			if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		},

		noop: function noop() {},

		// Evaluates a script in a global context
		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function globalEval(data) {
			if (data && core_rnotwhite.test(data)) {
				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				(window.execScript || function (data) {
					window["eval"].call(window, data);
				})(data);
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function camelCase(string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		nodeName: function nodeName(elem, name) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function each(obj, callback, args) {
			var name,
			    i = 0,
			    length = obj.length,
			    isObj = length === undefined || jQuery.isFunction(obj);

			if (args) {
				if (isObj) {
					for (name in obj) {
						if (callback.apply(obj[name], args) === false) {
							break;
						}
					}
				} else {
					for (; i < length;) {
						if (callback.apply(obj[i++], args) === false) {
							break;
						}
					}
				}

				// A special, fast, case for the most common use of each
			} else {
				if (isObj) {
					for (name in obj) {
						if (callback.call(obj[name], name, obj[name]) === false) {
							break;
						}
					}
				} else {
					for (; i < length;) {
						if (callback.call(obj[i], i, obj[i++]) === false) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Use native String.trim function wherever possible
		trim: core_trim && !core_trim.call("\uFEFF\xA0") ? function (text) {
			return text == null ? "" : core_trim.call(text);
		} :

		// Otherwise use our own trimming functionality
		function (text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function makeArray(arr, results) {
			var type,
			    ret = results || [];

			if (arr != null) {
				// The window, strings (and functions) also have 'length'
				// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
				type = jQuery.type(arr);

				if (arr.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow(arr)) {
					core_push.call(ret, arr);
				} else {
					jQuery.merge(ret, arr);
				}
			}

			return ret;
		},

		inArray: function inArray(elem, arr, i) {
			var len;

			if (arr) {
				if (core_indexOf) {
					return core_indexOf.call(arr, elem, i);
				}

				len = arr.length;
				i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

				for (; i < len; i++) {
					// Skip accessing in sparse arrays
					if (i in arr && arr[i] === elem) {
						return i;
					}
				}
			}

			return -1;
		},

		merge: function merge(first, second) {
			var l = second.length,
			    i = first.length,
			    j = 0;

			if (typeof l === "number") {
				for (; j < l; j++) {
					first[i++] = second[j];
				}
			} else {
				while (second[j] !== undefined) {
					first[i++] = second[j++];
				}
			}

			first.length = i;

			return first;
		},

		grep: function grep(elems, callback, inv) {
			var retVal,
			    ret = [],
			    i = 0,
			    length = elems.length;
			inv = !!inv;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				retVal = !!callback(elems[i], i);
				if (inv !== retVal) {
					ret.push(elems[i]);
				}
			}

			return ret;
		},

		// arg is for internal usage only
		map: function map(elems, callback, arg) {
			var value,
			    key,
			    ret = [],
			    i = 0,
			    length = elems.length,

			// jquery objects are treated as arrays
			isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && (length > 0 && elems[0] && elems[length - 1] || length === 0 || jQuery.isArray(elems));

			// Go through the array, translating each of the items to their
			if (isArray) {
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret[ret.length] = value;
					}
				}

				// Go through every key on the object,
			} else {
				for (key in elems) {
					value = callback(elems[key], key, arg);

					if (value != null) {
						ret[ret.length] = value;
					}
				}
			}

			// Flatten any nested arrays
			return ret.concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function proxy(fn, context) {
			var tmp, args, proxy;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = core_slice.call(arguments, 2);
			proxy = function proxy() {
				return fn.apply(context, args.concat(core_slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		access: function access(elems, fn, key, value, chainable, emptyGet, pass) {
			var exec,
			    bulk = key == null,
			    i = 0,
			    length = elems.length;

			// Sets many values
			if (key && (typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
				for (i in key) {
					jQuery.access(elems, fn, i, key[i], 1, emptyGet, value);
				}
				chainable = 1;

				// Sets one value
			} else if (value !== undefined) {
				// Optionally, function values get executed if exec is true
				exec = pass === undefined && jQuery.isFunction(value);

				if (bulk) {
					// Bulk operations only iterate when executing function values
					if (exec) {
						exec = fn;
						fn = function fn(elem, key, value) {
							return exec.call(jQuery(elem), value);
						};

						// Otherwise they run against the entire set
					} else {
						fn.call(elems, value);
						fn = null;
					}
				}

				if (fn) {
					for (; i < length; i++) {
						fn(elems[i], key, exec ? value.call(elems[i], i, fn(elems[i], key)) : value, pass);
					}
				}

				chainable = 1;
			}

			return chainable ? elems :

			// Gets
			bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
		},

		now: function now() {
			return new Date().getTime();
		}
	});

	jQuery.ready.promise = function (obj) {
		if (!readyList) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// we once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if (document.readyState === "complete") {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout(jQuery.ready, 1);

				// Standards-based browsers support DOMContentLoaded
			} else if (document.addEventListener) {
				// Use the handy event callback
				document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);

				// A fallback to window.onload, that will always work
				window.addEventListener("load", jQuery.ready, false);

				// If IE event model is used
			} else {
				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent("onreadystatechange", DOMContentLoaded);

				// A fallback to window.onload, that will always work
				window.attachEvent("onload", jQuery.ready);

				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;

				try {
					top = window.frameElement == null && document.documentElement;
				} catch (e) {}

				if (top && top.doScroll) {
					(function doScrollCheck() {
						if (!jQuery.isReady) {

							try {
								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll("left");
							} catch (e) {
								return setTimeout(doScrollCheck, 50);
							}

							// and execute any waiting functions
							jQuery.ready();
						}
					})();
				}
			}
		}
		return readyList.promise(obj);
	};

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	// All jQuery objects should point back to these
	rootjQuery = jQuery(document);
	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions(options) {
		var object = optionsCache[options] = {};
		jQuery.each(options.split(core_rspace), function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);

		var // Last fire value (for non-forgettable lists)
		memory,

		// Flag to know if list was already fired
		_fired,

		// Flag to know if list is currently firing
		firing,

		// First callback to fire (used internally by add and fireWith)
		firingStart,

		// End of the loop when firing
		firingLength,

		// Index of currently firing callback (modified by remove if needed)
		firingIndex,

		// Actual callback list
		list = [],

		// Stack of fire calls for repeatable lists
		stack = !options.once && [],

		// Fire callbacks
		fire = function fire(data) {
			memory = options.memory && data;
			_fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for (; list && firingIndex < firingLength; firingIndex++) {
				if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if (list) {
				if (stack) {
					if (stack.length) {
						fire(stack.shift());
					}
				} else if (memory) {
					list = [];
				} else {
					self.disable();
				}
			}
		},

		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function add() {
				if (list) {
					// First, we save the current length
					var start = list.length;
					(function add(args) {
						jQuery.each(args, function (_, arg) {
							var type = jQuery.type(arg);
							if (type === "function" && (!options.unique || !self.has(arg))) {
								list.push(arg);
							} else if (arg && arg.length && type !== "string") {
								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);
					// Do we need to add the callbacks to the
					// current firing batch?
					if (firing) {
						firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
					} else if (memory) {
						firingStart = start;
						fire(memory);
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function remove() {
				if (list) {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);
							// Handle firing indexes
							if (firing) {
								if (index <= firingLength) {
									firingLength--;
								}
								if (index <= firingIndex) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Control if a given callback is in the list
			has: function has(fn) {
				return jQuery.inArray(fn, list) > -1;
			},
			// Remove all callbacks from the list
			empty: function empty() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function disable() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function disabled() {
				return !list;
			},
			// Lock the list in its current state
			lock: function lock() {
				stack = undefined;
				if (!memory) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function locked() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function fireWith(context, args) {
				args = args || [];
				args = [context, args.slice ? args.slice() : args];
				if (list && (!_fired || stack)) {
					if (firing) {
						stack.push(args);
					} else {
						fire(args);
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function fire() {
				self.fireWith(this, arguments);
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function fired() {
				return !!_fired;
			}
		};

		return self;
	};
	jQuery.extend({

		Deferred: function Deferred(func) {
			var tuples = [
			// action, add listener, listener list, final state
			["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
			    _state = "pending",
			    _promise = {
				state: function state() {
					return _state;
				},
				always: function always() {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				then: function then() /* fnDone, fnFail, fnProgress */{
					var fns = arguments;
					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {
							var action = tuple[0],
							    fn = fns[i];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[tuple[1]](jQuery.isFunction(fn) ? function () {
								var returned = fn.apply(this, arguments);
								if (returned && jQuery.isFunction(returned.promise)) {
									returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
								} else {
									newDefer[action + "With"](this === deferred ? newDefer : this, [returned]);
								}
							} : newDefer[action]);
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function promise(obj) {
					return obj != null ? jQuery.extend(obj, _promise) : _promise;
				}
			},
			    deferred = {};

			// Keep pipe for back-compat
			_promise.pipe = _promise.then;

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[3];

				// promise[ done | fail | progress ] = list.add
				_promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {
						// state = [ resolved | rejected ]
						_state = stateString;

						// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
				}

				// deferred[ resolve | reject | notify ] = list.fire
				deferred[tuple[0]] = list.fire;
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			_promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function when(subordinate /* , ..., subordinateN */) {
			var i = 0,
			    resolveValues = core_slice.call(arguments),
			    length = resolveValues.length,


			// the count of uncompleted subordinates
			remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,


			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),


			// Update function for both resolve and progress values
			updateFunc = function updateFunc(i, contexts, values) {
				return function (value) {
					contexts[i] = this;
					values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
					if (values === progressValues) {
						deferred.notifyWith(contexts, values);
					} else if (! --remaining) {
						deferred.resolveWith(contexts, values);
					}
				};
			},
			    progressValues,
			    progressContexts,
			    resolveContexts;

			// add listeners to Deferred subordinates; treat others as resolved
			if (length > 1) {
				progressValues = new Array(length);
				progressContexts = new Array(length);
				resolveContexts = new Array(length);
				for (; i < length; i++) {
					if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
						resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
					} else {
						--remaining;
					}
				}
			}

			// if we're not waiting on anything, resolve the master
			if (!remaining) {
				deferred.resolveWith(resolveContexts, resolveValues);
			}

			return deferred.promise();
		}
	});
	jQuery.support = function () {

		var support,
		    all,
		    a,
		    select,
		    opt,
		    input,
		    fragment,
		    eventName,
		    i,
		    isSupported,
		    clickFn,
		    div = document.createElement("div");

		// Preliminary tests
		div.setAttribute("className", "t");
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

		all = div.getElementsByTagName("*");
		a = div.getElementsByTagName("a")[0];
		a.style.cssText = "top:1px;float:left;opacity:.5";

		// Can't get basic test support
		if (!all || !all.length) {
			return {};
		}

		// First batch of supports tests
		select = document.createElement("select");
		opt = select.appendChild(document.createElement("option"));
		input = div.getElementsByTagName("input")[0];

		support = {
			// IE strips leading whitespace when .innerHTML is used
			leadingWhitespace: div.firstChild.nodeType === 3,

			// Make sure that tbody elements aren't automatically inserted
			// IE will insert them into empty tables
			tbody: !div.getElementsByTagName("tbody").length,

			// Make sure that link elements get serialized correctly by innerHTML
			// This requires a wrapper element in IE
			htmlSerialize: !!div.getElementsByTagName("link").length,

			// Get the style information from getAttribute
			// (IE uses .cssText instead)
			style: /top/.test(a.getAttribute("style")),

			// Make sure that URLs aren't manipulated
			// (IE normalizes it by default)
			hrefNormalized: a.getAttribute("href") === "/a",

			// Make sure that element opacity exists
			// (IE uses filter instead)
			// Use a regex to work around a WebKit issue. See #5145
			opacity: /^0.5/.test(a.style.opacity),

			// Verify style float existence
			// (IE uses styleFloat instead of cssFloat)
			cssFloat: !!a.style.cssFloat,

			// Make sure that if no value is specified for a checkbox
			// that it defaults to "on".
			// (WebKit defaults to "" instead)
			checkOn: input.value === "on",

			// Make sure that a selected-by-default option has a working selected property.
			// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
			optSelected: opt.selected,

			// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
			getSetAttribute: div.className !== "t",

			// Tests for enctype support on a form(#6743)
			enctype: !!document.createElement("form").enctype,

			// Makes sure cloning an html5 element does not cause problems
			// Where outerHTML is undefined, this still works
			html5Clone: document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",

			// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
			boxModel: document.compatMode === "CSS1Compat",

			// Will be defined later
			submitBubbles: true,
			changeBubbles: true,
			focusinBubbles: false,
			deleteExpando: true,
			noCloneEvent: true,
			inlineBlockNeedsLayout: false,
			shrinkWrapBlocks: false,
			reliableMarginRight: true,
			boxSizingReliable: true,
			pixelPosition: false
		};

		// Make sure checked status is properly cloned
		input.checked = true;
		support.noCloneChecked = input.cloneNode(true).checked;

		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Test to see if it's possible to delete an expando from an element
		// Fails in Internet Explorer
		try {
			delete div.test;
		} catch (e) {
			support.deleteExpando = false;
		}

		if (!div.addEventListener && div.attachEvent && div.fireEvent) {
			div.attachEvent("onclick", clickFn = function clickFn() {
				// Cloning a node shouldn't copy over any
				// bound event handlers (IE does this)
				support.noCloneEvent = false;
			});
			div.cloneNode(true).fireEvent("onclick");
			div.detachEvent("onclick", clickFn);
		}

		// Check if a radio maintains its value
		// after being appended to the DOM
		input = document.createElement("input");
		input.value = "t";
		input.setAttribute("type", "radio");
		support.radioValue = input.value === "t";

		input.setAttribute("checked", "checked");

		// #11217 - WebKit loses check when the name is after the checked attribute
		input.setAttribute("name", "t");

		div.appendChild(input);
		fragment = document.createDocumentFragment();
		fragment.appendChild(div.lastChild);

		// WebKit doesn't clone checked state correctly in fragments
		support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;

		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		support.appendChecked = input.checked;

		fragment.removeChild(input);
		fragment.appendChild(div);

		// Technique from Juriy Zaytsev
		// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
		// We only care about the case where non-standard event systems
		// are used, namely in IE. Short-circuiting here helps us to
		// avoid an eval call (in setAttribute) which can cause CSP
		// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
		if (div.attachEvent) {
			for (i in {
				submit: true,
				change: true,
				focusin: true
			}) {
				eventName = "on" + i;
				isSupported = eventName in div;
				if (!isSupported) {
					div.setAttribute(eventName, "return;");
					isSupported = typeof div[eventName] === "function";
				}
				support[i + "Bubbles"] = isSupported;
			}
		}

		// Run tests that need a body at doc ready
		jQuery(function () {
			var container,
			    div,
			    tds,
			    marginDiv,
			    divReset = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
			    body = document.getElementsByTagName("body")[0];

			if (!body) {
				// Return for frameset docs that don't have a body
				return;
			}

			container = document.createElement("div");
			container.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
			body.insertBefore(container, body.firstChild);

			// Construct the test element
			div = document.createElement("div");
			container.appendChild(div);

			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			// (only IE 8 fails this test)
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			tds = div.getElementsByTagName("td");
			tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
			isSupported = tds[0].offsetHeight === 0;

			tds[0].style.display = "";
			tds[1].style.display = "none";

			// Check if empty table cells still have offsetWidth/Height
			// (IE <= 8 fail this test)
			support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;

			// Check box-sizing and margin behavior
			div.innerHTML = "";
			div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
			support.boxSizing = div.offsetWidth === 4;
			support.doesNotIncludeMarginInBodyOffset = body.offsetTop !== 1;

			// NOTE: To any future maintainer, we've window.getComputedStyle
			// because jsdom on node.js will break without it.
			if (window.getComputedStyle) {
				support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
				support.boxSizingReliable = (window.getComputedStyle(div, null) || { width: "4px" }).width === "4px";

				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. For more
				// info see bug #3333
				// Fails in WebKit before Feb 2011 nightlies
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				marginDiv = document.createElement("div");
				marginDiv.style.cssText = div.style.cssText = divReset;
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				div.appendChild(marginDiv);
				support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
			}

			if (typeof div.style.zoom !== "undefined") {
				// Check if natively block-level elements act like inline-block
				// elements when setting their display to 'inline' and giving
				// them layout
				// (IE < 8 does this)
				div.innerHTML = "";
				div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
				support.inlineBlockNeedsLayout = div.offsetWidth === 3;

				// Check if elements with layout shrink-wrap their children
				// (IE 6 does this)
				div.style.display = "block";
				div.style.overflow = "visible";
				div.innerHTML = "<div></div>";
				div.firstChild.style.width = "5px";
				support.shrinkWrapBlocks = div.offsetWidth !== 3;

				container.style.zoom = 1;
			}

			// Null elements to avoid leaks in IE
			body.removeChild(container);
			container = div = tds = marginDiv = null;
		});

		// Null elements to avoid leaks in IE
		fragment.removeChild(div);
		all = a = select = opt = input = fragment = div = null;

		return support;
	}();
	var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	    rmultiDash = /([A-Z])/g;

	jQuery.extend({
		cache: {},

		deletedIds: [],

		// Remove at next major release (1.9/2.0)
		uuid: 0,

		// Unique for each copy of jQuery on the page
		// Non-digits removed to match rinlinejQuery
		expando: "jQuery" + (jQuery.fn.jquery + Math.random()).replace(/\D/g, ""),

		// The following elements throw uncatchable exceptions if you
		// attempt to add expando properties to them.
		noData: {
			"embed": true,
			// Ban all objects except for Flash (which handle expandos)
			"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			"applet": true
		},

		hasData: function hasData(elem) {
			elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
			return !!elem && !isEmptyDataObject(elem);
		},

		data: function data(elem, name, _data, pvt /* Internal Use Only */) {
			if (!jQuery.acceptData(elem)) {
				return;
			}

			var thisCache,
			    ret,
			    internalKey = jQuery.expando,
			    getByName = typeof name === "string",


			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,


			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,


			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;

			// Avoid doing any more work than we need to when trying to get data on an
			// object that has no data at all
			if ((!id || !cache[id] || !pvt && !cache[id].data) && getByName && _data === undefined) {
				return;
			}

			if (!id) {
				// Only DOM nodes need a new unique ID for each element since their data
				// ends up in the global cache
				if (isNode) {
					elem[internalKey] = id = jQuery.deletedIds.pop() || jQuery.guid++;
				} else {
					id = internalKey;
				}
			}

			if (!cache[id]) {
				cache[id] = {};

				// Avoids exposing jQuery metadata on plain JS objects when the object
				// is serialized using JSON.stringify
				if (!isNode) {
					cache[id].toJSON = jQuery.noop;
				}
			}

			// An object can be passed to jQuery.data instead of a key/value pair; this gets
			// shallow copied over onto the existing cache
			if ((typeof name === "undefined" ? "undefined" : _typeof(name)) === "object" || typeof name === "function") {
				if (pvt) {
					cache[id] = jQuery.extend(cache[id], name);
				} else {
					cache[id].data = jQuery.extend(cache[id].data, name);
				}
			}

			thisCache = cache[id];

			// jQuery data() is stored in a separate object inside the object's internal data
			// cache in order to avoid key collisions between internal data and user-defined
			// data.
			if (!pvt) {
				if (!thisCache.data) {
					thisCache.data = {};
				}

				thisCache = thisCache.data;
			}

			if (_data !== undefined) {
				thisCache[jQuery.camelCase(name)] = _data;
			}

			// Check for both converted-to-camel and non-converted data property names
			// If a data property was specified
			if (getByName) {

				// First Try to find as-is property data
				ret = thisCache[name];

				// Test for null|undefined property data
				if (ret == null) {

					// Try to find the camelCased property
					ret = thisCache[jQuery.camelCase(name)];
				}
			} else {
				ret = thisCache;
			}

			return ret;
		},

		removeData: function removeData(elem, name, pvt /* Internal Use Only */) {
			if (!jQuery.acceptData(elem)) {
				return;
			}

			var thisCache,
			    i,
			    l,
			    isNode = elem.nodeType,


			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			    id = isNode ? elem[jQuery.expando] : jQuery.expando;

			// If there is already no cache entry for this object, there is no
			// purpose in continuing
			if (!cache[id]) {
				return;
			}

			if (name) {

				thisCache = pvt ? cache[id] : cache[id].data;

				if (thisCache) {

					// Support array or space separated string names for data keys
					if (!jQuery.isArray(name)) {

						// try the string as a key before any manipulation
						if (name in thisCache) {
							name = [name];
						} else {

							// split the camel cased version by spaces unless a key with the spaces exists
							name = jQuery.camelCase(name);
							if (name in thisCache) {
								name = [name];
							} else {
								name = name.split(" ");
							}
						}
					}

					for (i = 0, l = name.length; i < l; i++) {
						delete thisCache[name[i]];
					}

					// If there is no data left in the cache, we want to continue
					// and let the cache object itself get destroyed
					if (!(pvt ? isEmptyDataObject : jQuery.isEmptyObject)(thisCache)) {
						return;
					}
				}
			}

			// See jQuery.data for more information
			if (!pvt) {
				delete cache[id].data;

				// Don't destroy the parent cache unless the internal data object
				// had been the only thing left in it
				if (!isEmptyDataObject(cache[id])) {
					return;
				}
			}

			// Destroy the cache
			if (isNode) {
				jQuery.cleanData([elem], true);

				// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
			} else if (jQuery.support.deleteExpando || cache != cache.window) {
				delete cache[id];

				// When all else fails, null
			} else {
				cache[id] = null;
			}
		},

		// For internal use only.
		_data: function _data(elem, name, data) {
			return jQuery.data(elem, name, data, true);
		},

		// A method for determining if a DOM node can handle the data expando
		acceptData: function acceptData(elem) {
			var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];

			// nodes accept data unless otherwise specified; rejection can be conditional
			return !noData || noData !== true && elem.getAttribute("classid") === noData;
		}
	});

	jQuery.fn.extend({
		data: function data(key, value) {
			var parts,
			    part,
			    attr,
			    name,
			    l,
			    elem = this[0],
			    i = 0,
			    data = null;

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = jQuery.data(elem);

					if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
						attr = elem.attributes;
						for (l = attr.length; i < l; i++) {
							name = attr[i].name;

							if (!name.indexOf("data-")) {
								name = jQuery.camelCase(name.substring(5));

								dataAttr(elem, name, data[name]);
							}
						}
						jQuery._data(elem, "parsedAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
				return this.each(function () {
					jQuery.data(this, key);
				});
			}

			parts = key.split(".", 2);
			parts[1] = parts[1] ? "." + parts[1] : "";
			part = parts[1] + "!";

			return jQuery.access(this, function (value) {

				if (value === undefined) {
					data = this.triggerHandler("getData" + part, [parts[0]]);

					// Try to fetch any internally stored data first
					if (data === undefined && elem) {
						data = jQuery.data(elem, key);
						data = dataAttr(elem, key, data);
					}

					return data === undefined && parts[1] ? this.data(parts[0]) : data;
				}

				parts[1] = value;
				this.each(function () {
					var self = jQuery(this);

					self.triggerHandler("setData" + part, parts);
					jQuery.data(this, key, value);
					self.triggerHandler("changeData" + part, parts);
				});
			}, null, value, arguments.length > 1, null, false);
		},

		removeData: function removeData(key) {
			return this.each(function () {
				jQuery.removeData(this, key);
			});
		}
	});

	function dataAttr(elem, key, data) {
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {

			var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();

			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = data === "true" ? true : data === "false" ? false : data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				jQuery.data(elem, key, data);
			} else {
				data = undefined;
			}
		}

		return data;
	}

	// checks a cache object for emptiness
	function isEmptyDataObject(obj) {
		var name;
		for (name in obj) {

			// if the public data object is empty, the private is still empty
			if (name === "data" && jQuery.isEmptyObject(obj[name])) {
				continue;
			}
			if (name !== "toJSON") {
				return false;
			}
		}

		return true;
	}
	jQuery.extend({
		queue: function queue(elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = jQuery._data(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || jQuery.isArray(data)) {
						queue = jQuery._data(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function dequeue(elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function next() {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// not intended for public consumption - generates a queueHooks object, or returns the current one
		_queueHooks: function _queueHooks(elem, type) {
			var key = type + "queueHooks";
			return jQuery._data(elem, key) || jQuery._data(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					jQuery.removeData(elem, type + "queue", true);
					jQuery.removeData(elem, key, true);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function queue(type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function dequeue(type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		// Based off of the plugin by Clint Helfers, with permission.
		// http://blindsignals.com/index.php/2009/07/jquery-delay/
		delay: function delay(time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";

			return this.queue(type, function (next, hooks) {
				var timeout = setTimeout(next, time);
				hooks.stop = function () {
					clearTimeout(timeout);
				};
			});
		},
		clearQueue: function clearQueue(type) {
			return this.queue(type || "fx", []);
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function promise(type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function resolve() {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = jQuery._data(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var nodeHook,
	    boolHook,
	    fixSpecified,
	    rclass = /[\t\r\n]/g,
	    rreturn = /\r/g,
	    rtype = /^(?:button|input)$/i,
	    rfocusable = /^(?:button|input|object|select|textarea)$/i,
	    rclickable = /^a(?:rea|)$/i,
	    rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	    getSetAttribute = jQuery.support.getSetAttribute;

	jQuery.fn.extend({
		attr: function attr(name, value) {
			return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function removeAttr(name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		},

		prop: function prop(name, value) {
			return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function removeProp(name) {
			name = jQuery.propFix[name] || name;
			return this.each(function () {
				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[name] = undefined;
					delete this[name];
				} catch (e) {}
			});
		},

		addClass: function addClass(value) {
			var classNames, i, l, elem, setClass, c, cl;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, this.className));
				});
			}

			if (value && typeof value === "string") {
				classNames = value.split(core_rspace);

				for (i = 0, l = this.length; i < l; i++) {
					elem = this[i];

					if (elem.nodeType === 1) {
						if (!elem.className && classNames.length === 1) {
							elem.className = value;
						} else {
							setClass = " " + elem.className + " ";

							for (c = 0, cl = classNames.length; c < cl; c++) {
								if (setClass.indexOf(" " + classNames[c] + " ") < 0) {
									setClass += classNames[c] + " ";
								}
							}
							elem.className = jQuery.trim(setClass);
						}
					}
				}
			}

			return this;
		},

		removeClass: function removeClass(value) {
			var removes, className, elem, c, cl, i, l;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, this.className));
				});
			}
			if (value && typeof value === "string" || value === undefined) {
				removes = (value || "").split(core_rspace);

				for (i = 0, l = this.length; i < l; i++) {
					elem = this[i];
					if (elem.nodeType === 1 && elem.className) {

						className = (" " + elem.className + " ").replace(rclass, " ");

						// loop over each item in the removal list
						for (c = 0, cl = removes.length; c < cl; c++) {
							// Remove until there is nothing to remove,
							while (className.indexOf(" " + removes[c] + " ") >= 0) {
								className = className.replace(" " + removes[c] + " ", " ");
							}
						}
						elem.className = value ? jQuery.trim(className) : "";
					}
				}
			}

			return this;
		},

		toggleClass: function toggleClass(value, stateVal) {
			var type = typeof value === "undefined" ? "undefined" : _typeof(value),
			    isBool = typeof stateVal === "boolean";

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
				});
			}

			return this.each(function () {
				if (type === "string") {
					// toggle individual class names
					var className,
					    i = 0,
					    self = jQuery(this),
					    state = stateVal,
					    classNames = value.split(core_rspace);

					while (className = classNames[i++]) {
						// check each className given, space separated list
						state = isBool ? state : !self.hasClass(className);
						self[state ? "addClass" : "removeClass"](className);
					}
				} else if (type === "undefined" || type === "boolean") {
					if (this.className) {
						// store className if set
						jQuery._data(this, "__className__", this.className);
					}

					// toggle whole className
					this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
				}
			});
		},

		hasClass: function hasClass(selector) {
			var className = " " + selector + " ",
			    i = 0,
			    l = this.length;
			for (; i < l; i++) {
				if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
					return true;
				}
			}

			return false;
		},

		val: function val(value) {
			var hooks,
			    ret,
			    isFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val,
				    self = jQuery(this);

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, self.val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (jQuery.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function get(elem) {
					// attributes.value is undefined in Blackberry 4.7 but
					// uses .value. See #6932
					var val = elem.attributes.value;
					return !val || val.specified ? elem.value : elem.text;
				}
			},
			select: {
				get: function get(elem) {
					var value,
					    i,
					    max,
					    option,
					    index = elem.selectedIndex,
					    values = [],
					    options = elem.options,
					    one = elem.type === "select-one";

					// Nothing was selected
					if (index < 0) {
						return null;
					}

					// Loop through all the selected options
					i = one ? index : 0;
					max = one ? index + 1 : options.length;
					for (; i < max; i++) {
						option = options[i];

						// Don't return options that are disabled or in a disabled optgroup
						if (option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					// Fixes Bug #2551 -- select.val() broken in IE after form.reset()
					if (one && !values.length && options.length) {
						return jQuery(options[index]).val();
					}

					return values;
				},

				set: function set(elem, value) {
					var values = jQuery.makeArray(value);

					jQuery(elem).find("option").each(function () {
						this.selected = jQuery.inArray(jQuery(this).val(), values) >= 0;
					});

					if (!values.length) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		},

		// Unused in 1.8, left in so attrFn-stabbers won't die; remove in 1.9
		attrFn: {},

		attr: function attr(elem, name, value, pass) {
			var ret,
			    hooks,
			    notxml,
			    nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			if (pass && jQuery.isFunction(jQuery.fn[name])) {
				return jQuery(elem)[name](value);
			}

			// Fallback to prop when attributes are not supported
			if (typeof elem.getAttribute === "undefined") {
				return jQuery.prop(elem, name, value);
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if (notxml) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[name] || (rboolean.test(name) ? boolHook : nodeHook);
			}

			if (value !== undefined) {

				if (value === null) {
					jQuery.removeAttr(elem, name);
					return;
				} else if (hooks && "set" in hooks && notxml && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				} else {
					elem.setAttribute(name, value + "");
					return value;
				}
			} else if (hooks && "get" in hooks && notxml && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			} else {

				ret = elem.getAttribute(name);

				// Non-existent attributes return null, we normalize to undefined
				return ret === null ? undefined : ret;
			}
		},

		removeAttr: function removeAttr(elem, value) {
			var propName,
			    attrNames,
			    name,
			    isBool,
			    i = 0;

			if (value && elem.nodeType === 1) {

				attrNames = value.split(core_rspace);

				for (; i < attrNames.length; i++) {
					name = attrNames[i];

					if (name) {
						propName = jQuery.propFix[name] || name;
						isBool = rboolean.test(name);

						// See #9699 for explanation of this approach (setting first, then removal)
						// Do not do this for boolean attributes (see #10870)
						if (!isBool) {
							jQuery.attr(elem, name, "");
						}
						elem.removeAttribute(getSetAttribute ? name : propName);

						// Set corresponding property to false for boolean attributes
						if (isBool && propName in elem) {
							elem[propName] = false;
						}
					}
				}
			}
		},

		attrHooks: {
			type: {
				set: function set(elem, value) {
					// We can't allow the type property to be changed (since it causes problems in IE)
					if (rtype.test(elem.nodeName) && elem.parentNode) {
						jQuery.error("type property can't be changed");
					} else if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
						// Setting the type on a radio button after the value resets the value in IE6-9
						// Reset value to it's default in case type is set after value
						// This is for element creation
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			},
			// Use the value property for back compat
			// Use the nodeHook for button elements in IE6/7 (#1954)
			value: {
				get: function get(elem, name) {
					if (nodeHook && jQuery.nodeName(elem, "button")) {
						return nodeHook.get(elem, name);
					}
					return name in elem ? elem.value : null;
				},
				set: function set(elem, value, name) {
					if (nodeHook && jQuery.nodeName(elem, "button")) {
						return nodeHook.set(elem, value, name);
					}
					// Does not return so that setAttribute is also used
					elem.value = value;
				}
			}
		},

		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},

		prop: function prop(elem, name, value) {
			var ret,
			    hooks,
			    notxml,
			    nType = elem.nodeType;

			// don't get/set properties on text, comment and attribute nodes
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

			if (notxml) {
				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				} else {
					return elem[name] = value;
				}
			} else {
				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				} else {
					return elem[name];
				}
			}
		},

		propHooks: {
			tabIndex: {
				get: function get(elem) {
					// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					var attributeNode = elem.getAttributeNode("tabindex");

					return attributeNode && attributeNode.specified ? parseInt(attributeNode.value, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : undefined;
				}
			}
		}
	});

	// Hook for boolean attributes
	boolHook = {
		get: function get(elem, name) {
			// Align boolean attributes with corresponding properties
			// Fall back to attribute presence where some booleans are not supported
			var attrNode,
			    property = jQuery.prop(elem, name);
			return property === true || typeof property !== "boolean" && (attrNode = elem.getAttributeNode(name)) && attrNode.nodeValue !== false ? name.toLowerCase() : undefined;
		},
		set: function set(elem, value, name) {
			var propName;
			if (value === false) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else {
				// value is true since we know at this point it's type boolean and not false
				// Set boolean attributes to the same name and set the DOM property
				propName = jQuery.propFix[name] || name;
				if (propName in elem) {
					// Only set the IDL specifically if it already exists on the element
					elem[propName] = true;
				}

				elem.setAttribute(name, name.toLowerCase());
			}
			return name;
		}
	};

	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if (!getSetAttribute) {

		fixSpecified = {
			name: true,
			id: true,
			coords: true
		};

		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = jQuery.valHooks.button = {
			get: function get(elem, name) {
				var ret;
				ret = elem.getAttributeNode(name);
				return ret && (fixSpecified[name] ? ret.value !== "" : ret.specified) ? ret.value : undefined;
			},
			set: function set(elem, value, name) {
				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode(name);
				if (!ret) {
					ret = document.createAttribute(name);
					elem.setAttributeNode(ret);
				}
				return ret.value = value + "";
			}
		};

		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each(["width", "height"], function (i, name) {
			jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
				set: function set(elem, value) {
					if (value === "") {
						elem.setAttribute(name, "auto");
						return value;
					}
				}
			});
		});

		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			get: nodeHook.get,
			set: function set(elem, value, name) {
				if (value === "") {
					value = "false";
				}
				nodeHook.set(elem, value, name);
			}
		};
	}

	// Some attributes require a special call on IE
	if (!jQuery.support.hrefNormalized) {
		jQuery.each(["href", "src", "width", "height"], function (i, name) {
			jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
				get: function get(elem) {
					var ret = elem.getAttribute(name, 2);
					return ret === null ? undefined : ret;
				}
			});
		});
	}

	if (!jQuery.support.style) {
		jQuery.attrHooks.style = {
			get: function get(elem) {
				// Return undefined in the case of empty string
				// Normalize to lowercase since IE uppercases css property names
				return elem.style.cssText.toLowerCase() || undefined;
			},
			set: function set(elem, value) {
				return elem.style.cssText = value + "";
			}
		};
	}

	// Safari mis-reports the default selected property of an option
	// Accessing the parent's selectedIndex property fixes it
	if (!jQuery.support.optSelected) {
		jQuery.propHooks.selected = jQuery.extend(jQuery.propHooks.selected, {
			get: function get(elem) {
				var parent = elem.parentNode;

				if (parent) {
					parent.selectedIndex;

					// Make sure that it also works with optgroups, see #5701
					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			}
		});
	}

	// IE6/7 call enctype encoding
	if (!jQuery.support.enctype) {
		jQuery.propFix.enctype = "encoding";
	}

	// Radios and checkboxes getter/setter
	if (!jQuery.support.checkOn) {
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				get: function get(elem) {
					// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
					return elem.getAttribute("value") === null ? "on" : elem.value;
				}
			};
		});
	}
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = jQuery.extend(jQuery.valHooks[this], {
			set: function set(elem, value) {
				if (jQuery.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
				}
			}
		});
	});
	var rformElems = /^(?:textarea|input|select)$/i,
	    rtypenamespace = /^([^\.]*|)(?:\.(.+)|)$/,
	    rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
	    rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|contextmenu)|click/,
	    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	    hoverHack = function hoverHack(events) {
		return jQuery.event.special.hover ? events : events.replace(rhoverHack, "mouseenter$1 mouseleave$1");
	};

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		add: function add(elem, types, handler, data, selector) {

			var elemData, _eventHandle, events, t, tns, type, namespaces, handleObj, handleObjIn, handlers, special;

			// Don't attach events to noData or text/comment nodes (allow plain objects tho)
			if (elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data(elem))) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			events = elemData.events;
			if (!events) {
				elemData.events = events = {};
			}
			_eventHandle = elemData.handle;
			if (!_eventHandle) {
				elemData.handle = _eventHandle = function eventHandle(e) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(_eventHandle.elem, arguments) : undefined;
				};
				// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
				_eventHandle.elem = elem;
			}

			// Handle multiple events separated by a space
			// jQuery(...).bind("mouseover mouseout", fn);
			types = jQuery.trim(hoverHack(types)).split(" ");
			for (t = 0; t < types.length; t++) {

				tns = rtypenamespace.exec(types[t]) || [];
				type = tns[1];
				namespaces = (tns[2] || "").split(".").sort();

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: tns[1],
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				handlers = events[type];
				if (!handlers) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener/attachEvent if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, _eventHandle) === false) {
						// Bind the global event handler to the element
						if (elem.addEventListener) {
							elem.addEventListener(type, _eventHandle, false);
						} else if (elem.attachEvent) {
							elem.attachEvent("on" + type, _eventHandle);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}

			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},

		global: {},

		// Detach an event or set of events from an element
		remove: function remove(elem, types, handler, selector, mappedTypes) {

			var t,
			    tns,
			    type,
			    origType,
			    namespaces,
			    origCount,
			    j,
			    events,
			    special,
			    eventType,
			    handleObj,
			    elemData = jQuery.hasData(elem) && jQuery._data(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = jQuery.trim(hoverHack(types || "")).split(" ");
			for (t = 0; t < types.length; t++) {
				tns = rtypenamespace.exec(types[t]) || [];
				type = origType = tns[1];
				namespaces = tns[2];

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				eventType = events[type] || [];
				origCount = eventType.length;
				namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

				// Remove matching events
				for (j = 0; j < eventType.length; j++) {
					handleObj = eventType[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!namespaces || namespaces.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						eventType.splice(j--, 1);

						if (handleObj.selector) {
							eventType.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (eventType.length === 0 && origCount !== eventType.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				delete elemData.handle;

				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery.removeData(elem, "events", true);
			}
		},

		// Events that are safe to short-circuit if no handlers are attached.
		// Native DOM events should not be added, they may have inline handlers.
		customEvent: {
			"getData": true,
			"setData": true,
			"changeData": true
		},

		trigger: function trigger(event, data, elem, onlyHandlers) {
			// Don't do events on text and comment nodes
			if (elem && (elem.nodeType === 3 || elem.nodeType === 8)) {
				return;
			}

			// Event object or event type
			var cache,
			    exclusive,
			    i,
			    cur,
			    old,
			    ontype,
			    special,
			    handle,
			    eventPath,
			    bubbleType,
			    type = event.type || event,
			    namespaces = [];

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf("!") >= 0) {
				// Exclusive events trigger only for the exact event (no namespaces)
				type = type.slice(0, -1);
				exclusive = true;
			}

			if (type.indexOf(".") >= 0) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}

			if ((!elem || jQuery.event.customEvent[type]) && !jQuery.event.global[type]) {
				// No jQuery handlers for this event type, and it can't have inline handlers
				return;
			}

			// Caller can pass in an Event, Object, or just an event type string
			event = (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" ?
			// jQuery.Event object
			event[jQuery.expando] ? event :
			// Object literal
			new jQuery.Event(type, event) :
			// Just the event type (string)
			new jQuery.Event(type);

			event.type = type;
			event.isTrigger = true;
			event.exclusive = exclusive;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
			ontype = type.indexOf(":") < 0 ? "on" + type : "";

			// Handle a global trigger
			if (!elem) {

				// TODO: Stop taunting the data cache; remove global events and always attach to document
				cache = jQuery.cache;
				for (i in cache) {
					if (cache[i].events && cache[i].events[type]) {
						jQuery.event.trigger(event, data, cache[i].handle.elem, true);
					}
				}
				return;
			}

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data != null ? jQuery.makeArray(data) : [];
			data.unshift(event);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			eventPath = [[elem, special.bindType || type]];
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				cur = rfocusMorph.test(bubbleType + type) ? elem : elem.parentNode;
				for (old = elem; cur; cur = cur.parentNode) {
					eventPath.push([cur, bubbleType]);
					old = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (old === (elem.ownerDocument || document)) {
					eventPath.push([old.defaultView || old.parentWindow || window, bubbleType]);
				}
			}

			// Fire handlers on the event path
			for (i = 0; i < eventPath.length && !event.isPropagationStopped(); i++) {

				cur = eventPath[i][0];
				event.type = eventPath[i][1];

				handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}
				// Note that this is a bare JS function and not a jQuery handler
				handle = ontype && cur[ontype];
				if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
					event.preventDefault();
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(elem.ownerDocument, data) === false) && !(type === "click" && jQuery.nodeName(elem, "a")) && jQuery.acceptData(elem)) {

					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					// IE<9 dies on focus/blur to hidden element (#1486)
					if (ontype && elem[type] && (type !== "focus" && type !== "blur" || event.target.offsetWidth !== 0) && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						old = elem[ontype];

						if (old) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[type]();
						jQuery.event.triggered = undefined;

						if (old) {
							elem[ontype] = old;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function dispatch(event) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix(event || window.event);

			var i,
			    j,
			    cur,
			    ret,
			    selMatch,
			    matched,
			    matches,
			    handleObj,
			    sel,
			    related,
			    handlers = (jQuery._data(this, "events") || {})[event.type] || [],
			    delegateCount = handlers.delegateCount,
			    args = core_slice.call(arguments),
			    run_all = !event.exclusive && !event.namespace,
			    special = jQuery.event.special[event.type] || {},
			    handlerQueue = [];

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers that should run if there are delegated events
			// Avoid non-left-click bubbling in Firefox (#3861)
			if (delegateCount && !(event.button && event.type === "click")) {

				for (cur = event.target; cur != this; cur = cur.parentNode || this) {

					// Don't process clicks (ONLY) on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.disabled !== true || event.type !== "click") {
						selMatch = {};
						matches = [];
						for (i = 0; i < delegateCount; i++) {
							handleObj = handlers[i];
							sel = handleObj.selector;

							if (selMatch[sel] === undefined) {
								selMatch[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (selMatch[sel]) {
								matches.push(handleObj);
							}
						}
						if (matches.length) {
							handlerQueue.push({ elem: cur, matches: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if (handlers.length > delegateCount) {
				handlerQueue.push({ elem: this, matches: handlers.slice(delegateCount) });
			}

			// Run delegates first; they may want to stop propagation beneath us
			for (i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++) {
				matched = handlerQueue[i];
				event.currentTarget = matched.elem;

				for (j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++) {
					handleObj = matched.matches[j];

					// Triggered event must either 1) be non-exclusive and have no namespace, or
					// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
					if (run_all || !event.namespace && !handleObj.namespace || event.namespace_re && event.namespace_re.test(handleObj.namespace)) {

						event.data = handleObj.data;
						event.handleObj = handleObj;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							event.result = ret;
							if (ret === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		// *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function filter(event, original) {

				// Add which for key events
				if (event.which == null) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function filter(event, original) {
				var eventDoc,
				    doc,
				    body,
				    button = original.button,
				    fromElement = original.fromElement;

				// Calculate pageX/Y if missing and clientX/Y available
				if (event.pageX == null && original.clientX != null) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
					event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
				}

				// Add relatedTarget, if necessary
				if (!event.relatedTarget && fromElement) {
					event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if (!event.which && button !== undefined) {
					event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
				}

				return event;
			}
		},

		fix: function fix(event) {
			if (event[jQuery.expando]) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i,
			    prop,
			    originalEvent = event,
			    fixHook = jQuery.event.fixHooks[event.type] || {},
			    copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

			event = jQuery.Event(originalEvent);

			for (i = copy.length; i;) {
				prop = copy[--i];
				event[prop] = originalEvent[prop];
			}

			// Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
			if (!event.target) {
				event.target = originalEvent.srcElement || document;
			}

			// Target should not be a text node (#504, Safari)
			if (event.target.nodeType === 3) {
				event.target = event.target.parentNode;
			}

			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328; IE6/7/8)
			event.metaKey = !!event.metaKey;

			return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},

			focus: {
				delegateType: "focusin"
			},
			blur: {
				delegateType: "focusout"
			},

			beforeunload: {
				setup: function setup(data, namespaces, eventHandle) {
					// We only want to do this special case on windows
					if (jQuery.isWindow(this)) {
						this.onbeforeunload = eventHandle;
					}
				},

				teardown: function teardown(namespaces, eventHandle) {
					if (this.onbeforeunload === eventHandle) {
						this.onbeforeunload = null;
					}
				}
			}
		},

		simulate: function simulate(type, elem, event, bubble) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(new jQuery.Event(), event, { type: type,
				isSimulated: true,
				originalEvent: {}
			});
			if (bubble) {
				jQuery.event.trigger(e, null, elem);
			} else {
				jQuery.event.dispatch.call(elem, e);
			}
			if (e.isDefaultPrevented()) {
				event.preventDefault();
			}
		}
	};

	// Some plugins are using, but it's undocumented/deprecated and will be removed.
	// The 1.7 special event interface should provide all the hooks needed now.
	jQuery.event.handle = jQuery.event.dispatch;

	jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle, false);
		}
	} : function (elem, type, handle) {
		var name = "on" + type;

		if (elem.detachEvent) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8 –
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if (typeof elem[name] === "undefined") {
				elem[name] = null;
			}

			elem.detachEvent(name, handle);
		}
	};

	jQuery.Event = function (src, props) {
		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	function returnFalse() {
		return false;
	}
	function returnTrue() {
		return true;
	}

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		preventDefault: function preventDefault() {
			this.isDefaultPrevented = returnTrue;

			var e = this.originalEvent;
			if (!e) {
				return;
			}

			// if preventDefault exists run it on the original event
			if (e.preventDefault) {
				e.preventDefault();

				// otherwise set the returnValue property of the original event to false (IE)
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function stopPropagation() {
			this.isPropagationStopped = returnTrue;

			var e = this.originalEvent;
			if (!e) {
				return;
			}
			// if stopPropagation exists run it on the original event
			if (e.stopPropagation) {
				e.stopPropagation();
			}
			// otherwise set the cancelBubble property of the original event to true (IE)
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function stopImmediatePropagation() {
			this.isImmediatePropagationStopped = returnTrue;
			this.stopPropagation();
		},
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function handle(event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj,
				    selector = handleObj.selector;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// IE submit delegation
	if (!jQuery.support.submitBubbles) {

		jQuery.event.special.submit = {
			setup: function setup() {
				// Only need this for delegated form submit events
				if (jQuery.nodeName(this, "form")) {
					return false;
				}

				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add(this, "click._submit keypress._submit", function (e) {
					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
					    form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
					if (form && !jQuery._data(form, "_submit_attached")) {
						jQuery.event.add(form, "submit._submit", function (event) {
							event._submit_bubble = true;
						});
						jQuery._data(form, "_submit_attached", true);
					}
				});
				// return undefined since we don't need an event listener
			},

			postDispatch: function postDispatch(event) {
				// If form was submitted by the user, bubble the event up the tree
				if (event._submit_bubble) {
					delete event._submit_bubble;
					if (this.parentNode && !event.isTrigger) {
						jQuery.event.simulate("submit", this.parentNode, event, true);
					}
				}
			},

			teardown: function teardown() {
				// Only need this for delegated form submit events
				if (jQuery.nodeName(this, "form")) {
					return false;
				}

				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove(this, "._submit");
			}
		};
	}

	// IE change delegation and checkbox/radio fix
	if (!jQuery.support.changeBubbles) {

		jQuery.event.special.change = {

			setup: function setup() {

				if (rformElems.test(this.nodeName)) {
					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if (this.type === "checkbox" || this.type === "radio") {
						jQuery.event.add(this, "propertychange._change", function (event) {
							if (event.originalEvent.propertyName === "checked") {
								this._just_changed = true;
							}
						});
						jQuery.event.add(this, "click._change", function (event) {
							if (this._just_changed && !event.isTrigger) {
								this._just_changed = false;
							}
							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate("change", this, event, true);
						});
					}
					return false;
				}
				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add(this, "beforeactivate._change", function (e) {
					var elem = e.target;

					if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "_change_attached")) {
						jQuery.event.add(elem, "change._change", function (event) {
							if (this.parentNode && !event.isSimulated && !event.isTrigger) {
								jQuery.event.simulate("change", this.parentNode, event, true);
							}
						});
						jQuery._data(elem, "_change_attached", true);
					}
				});
			},

			handle: function handle(event) {
				var elem = event.target;

				// Swallow native change events from checkbox/radio, we already triggered them above
				if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
					return event.handleObj.handler.apply(this, arguments);
				}
			},

			teardown: function teardown() {
				jQuery.event.remove(this, "._change");

				return !rformElems.test(this.nodeName);
			}
		};
	}

	// Create "bubbling" focus and blur events
	if (!jQuery.support.focusinBubbles) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler while someone wants focusin/focusout
			var attaches = 0,
			    handler = function handler(event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
			};

			jQuery.event.special[fix] = {
				setup: function setup() {
					if (attaches++ === 0) {
						document.addEventListener(orig, handler, true);
					}
				},
				teardown: function teardown() {
					if (--attaches === 0) {
						document.removeEventListener(orig, handler, true);
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function on(types, selector, data, fn, /*INTERNAL*/one) {
			var origFn, type;

			// Types can be a map of types/handlers
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
				// ( types-Object, selector, data )
				if (typeof selector !== "string") {
					// && selector != null
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					this.on(type, selector, data, types[type], one);
				}
				return this;
			}

			if (data == null && fn == null) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return this;
			}

			if (one === 1) {
				origFn = fn;
				fn = function fn(event) {
					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return this.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		},
		one: function one(types, selector, data, fn) {
			return this.on(types, selector, data, fn, 1);
		},
		off: function off(types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		},

		bind: function bind(types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function unbind(types, fn) {
			return this.off(types, null, fn);
		},

		live: function live(types, data, fn) {
			jQuery(this.context).on(types, this.selector, data, fn);
			return this;
		},
		die: function die(types, fn) {
			jQuery(this.context).off(types, this.selector || "**", fn);
			return this;
		},

		delegate: function delegate(selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function undelegate(selector, types, fn) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		},

		trigger: function trigger(type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function triggerHandler(type, data) {
			if (this[0]) {
				return jQuery.event.trigger(type, data, this[0], true);
			}
		},

		toggle: function toggle(fn) {
			// Save reference to arguments for access in closure
			var args = arguments,
			    guid = fn.guid || jQuery.guid++,
			    i = 0,
			    toggler = function toggler(event) {
				// Figure out which function to execute
				var lastToggle = (jQuery._data(this, "lastToggle" + fn.guid) || 0) % i;
				jQuery._data(this, "lastToggle" + fn.guid, lastToggle + 1);

				// Make sure that clicks stop
				event.preventDefault();

				// and execute the function
				return args[lastToggle].apply(this, arguments) || false;
			};

			// link all the functions, so any of them can unbind this click handler
			toggler.guid = guid;
			while (i < args.length) {
				args[i++].guid = guid;
			}

			return this.click(toggler);
		},

		hover: function hover(fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		}
	});

	jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			if (fn == null) {
				fn = data;
				data = null;
			}

			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};

		if (rkeyEvent.test(name)) {
			jQuery.event.fixHooks[name] = jQuery.event.keyHooks;
		}

		if (rmouseEvent.test(name)) {
			jQuery.event.fixHooks[name] = jQuery.event.mouseHooks;
		}
	});
	/*!
  * Sizzle CSS Selector Engine
  * Copyright 2012 jQuery Foundation and other contributors
  * Released under the MIT license
  * http://sizzlejs.com/
  */
	(function (window, undefined) {

		var cachedruns,
		    assertGetIdNotName,
		    Expr,
		    getText,
		    isXML,
		    contains,
		    compile,
		    sortOrder,
		    hasDuplicate,
		    outermostContext,
		    baseHasDuplicate = true,
		    strundefined = "undefined",
		    expando = ("sizcache" + Math.random()).replace(".", ""),
		    Token = String,
		    document = window.document,
		    docElem = document.documentElement,
		    dirruns = 0,
		    done = 0,
		    pop = [].pop,
		    push = [].push,
		    slice = [].slice,

		// Use a stripped-down indexOf if a native one is unavailable
		indexOf = [].indexOf || function (elem) {
			var i = 0,
			    len = this.length;
			for (; i < len; i++) {
				if (this[i] === elem) {
					return i;
				}
			}
			return -1;
		},


		// Augment a function for special use by Sizzle
		markFunction = function markFunction(fn, value) {
			fn[expando] = value == null || value;
			return fn;
		},
		    createCache = function createCache() {
			var cache = {},
			    keys = [];

			return markFunction(function (key, value) {
				// Only keep the most recent entries
				if (keys.push(key) > Expr.cacheLength) {
					delete cache[keys.shift()];
				}

				return cache[key] = value;
			}, cache);
		},
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),


		// Regex

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",


		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier (http://www.w3.org/TR/css3-selectors/#attribute-selectors)
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace("w", "w#"),


		// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
		operators = "([*^$|!~]?=)",
		    attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",


		// Prefer arguments not in parens/brackets,
		//   then attribute selectors and non-pseudos (denoted by :),
		//   then anything else
		// These preferences are here to reduce the number of selectors
		//   needing tokenize in the PSEUDO preFilter
		pseudos = ":(" + characterEncoding + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + attributes + ")|[^:]|\\\\.)*|.*))\\)|)",


		// For matchExpr.POS and matchExpr.needsContext
		pos = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*"),
		    rpseudo = new RegExp(pseudos),


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
		    rnot = /^:not/,
		    rsibling = /[\x20\t\r\n\f]*[+~]/,
		    rendsWithNot = /:not\($/,
		    rheader = /h\d/i,
		    rinputs = /input|select|textarea|button/i,
		    rbackslash = /\\(?!\\)/g,
		    matchExpr = {
			"ID": new RegExp("^#(" + characterEncoding + ")"),
			"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
			"NAME": new RegExp("^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]"),
			"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"POS": new RegExp(pos, "i"),
			"CHILD": new RegExp("^:(only|nth|first|last)-child(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			// For use in libraries implementing .is()
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|" + pos, "i")
		},


		// Support

		// Used for testing something on an element
		assert = function assert(fn) {
			var div = document.createElement("div");

			try {
				return fn(div);
			} catch (e) {
				return false;
			} finally {
				// release memory in IE
				div = null;
			}
		},


		// Check if getElementsByTagName("*") returns only elements
		assertTagNameNoComments = assert(function (div) {
			div.appendChild(document.createComment(""));
			return !div.getElementsByTagName("*").length;
		}),


		// Check if getAttribute returns normalized href attributes
		assertHrefNotNormalized = assert(function (div) {
			div.innerHTML = "<a href='#'></a>";
			return div.firstChild && _typeof(div.firstChild.getAttribute) !== strundefined && div.firstChild.getAttribute("href") === "#";
		}),


		// Check if attributes should be retrieved by attribute nodes
		assertAttributes = assert(function (div) {
			div.innerHTML = "<select></select>";
			var type = _typeof(div.lastChild.getAttribute("multiple"));
			// IE8 returns a string for some attributes even when not present
			return type !== "boolean" && type !== "string";
		}),


		// Check if getElementsByClassName can be trusted
		assertUsableClassName = assert(function (div) {
			// Opera can't find a second classname (in 9.6)
			div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
			if (!div.getElementsByClassName || !div.getElementsByClassName("e").length) {
				return false;
			}

			// Safari 3.2 caches class attributes and doesn't catch changes
			div.lastChild.className = "e";
			return div.getElementsByClassName("e").length === 2;
		}),


		// Check if getElementById returns elements by name
		// Check if getElementsByName privileges form controls or returns elements by ID
		assertUsableName = assert(function (div) {
			// Inject content
			div.id = expando + 0;
			div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
			docElem.insertBefore(div, docElem.firstChild);

			// Test
			var pass = document.getElementsByName &&
			// buggy browsers will return fewer than the correct 2
			document.getElementsByName(expando).length === 2 +
			// buggy browsers will return more than the correct 0
			document.getElementsByName(expando + 0).length;
			assertGetIdNotName = !document.getElementById(expando);

			// Cleanup
			docElem.removeChild(div);

			return pass;
		});

		// If slice is not available, provide a backup
		try {
			slice.call(docElem.childNodes, 0)[0].nodeType;
		} catch (e) {
			slice = function slice(i) {
				var elem,
				    results = [];
				for (; elem = this[i]; i++) {
					results.push(elem);
				}
				return results;
			};
		}

		function Sizzle(selector, context, results, seed) {
			results = results || [];
			context = context || document;
			var match,
			    elem,
			    xml,
			    m,
			    nodeType = context.nodeType;

			if (!selector || typeof selector !== "string") {
				return results;
			}

			if (nodeType !== 1 && nodeType !== 9) {
				return [];
			}

			xml = isXML(context);

			if (!xml && !seed) {
				if (match = rquickExpr.exec(selector)) {
					// Speed-up: Sizzle("#ID")
					if (m = match[1]) {
						if (nodeType === 9) {
							elem = context.getElementById(m);
							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document #6963
							if (elem && elem.parentNode) {
								// Handle the case where IE, Opera, and Webkit return items
								// by name instead of ID
								if (elem.id === m) {
									results.push(elem);
									return results;
								}
							} else {
								return results;
							}
						} else {
							// Context is not a document
							if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
								results.push(elem);
								return results;
							}
						}

						// Speed-up: Sizzle("TAG")
					} else if (match[2]) {
						push.apply(results, slice.call(context.getElementsByTagName(selector), 0));
						return results;

						// Speed-up: Sizzle(".CLASS")
					} else if ((m = match[3]) && assertUsableClassName && context.getElementsByClassName) {
						push.apply(results, slice.call(context.getElementsByClassName(m), 0));
						return results;
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed, xml);
		}

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			return Sizzle(expr, null, null, [elem]).length > 0;
		};

		// Returns a function to use in pseudos for input types
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		// Returns a function to use in pseudos for buttons
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		// Returns a function to use in pseudos for positionals
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (nodeType) {
				if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (see #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes
			} else {

				// If no nodeType, this is expected to be an array
				for (; node = elem[i]; i++) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			}
			return ret;
		};

		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		// Element contains another
		contains = Sizzle.contains = docElem.contains ? function (a, b) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
			    bup = b && b.parentNode;
			return a === bup || !!(bup && bup.nodeType === 1 && adown.contains && adown.contains(bup));
		} : docElem.compareDocumentPosition ? function (a, b) {
			return b && !!(a.compareDocumentPosition(b) & 16);
		} : function (a, b) {
			while (b = b.parentNode) {
				if (b === a) {
					return true;
				}
			}
			return false;
		};

		Sizzle.attr = function (elem, name) {
			var val,
			    xml = isXML(elem);

			if (!xml) {
				name = name.toLowerCase();
			}
			if (val = Expr.attrHandle[name]) {
				return val(elem);
			}
			if (xml || assertAttributes) {
				return elem.getAttribute(name);
			}
			val = elem.getAttributeNode(name);
			return val ? typeof elem[name] === "boolean" ? elem[name] ? name : null : val.specified ? val.value : null : null;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			// IE6/7 return a modified href
			attrHandle: assertHrefNotNormalized ? {} : {
				"href": function href(elem) {
					return elem.getAttribute("href", 2);
				},
				"type": function type(elem) {
					return elem.getAttribute("type");
				}
			},

			find: {
				"ID": assertGetIdNotName ? function (id, context, xml) {
					if (_typeof(context.getElementById) !== strundefined && !xml) {
						var m = context.getElementById(id);
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						return m && m.parentNode ? [m] : [];
					}
				} : function (id, context, xml) {
					if (_typeof(context.getElementById) !== strundefined && !xml) {
						var m = context.getElementById(id);

						return m ? m.id === id || _typeof(m.getAttributeNode) !== strundefined && m.getAttributeNode("id").value === id ? [m] : undefined : [];
					}
				},

				"TAG": assertTagNameNoComments ? function (tag, context) {
					if (_typeof(context.getElementsByTagName) !== strundefined) {
						return context.getElementsByTagName(tag);
					}
				} : function (tag, context) {
					var results = context.getElementsByTagName(tag);

					// Filter out possible comments
					if (tag === "*") {
						var elem,
						    tmp = [],
						    i = 0;

						for (; elem = results[i]; i++) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}

						return tmp;
					}
					return results;
				},

				"NAME": assertUsableName && function (tag, context) {
					if (_typeof(context.getElementsByName) !== strundefined) {
						return context.getElementsByName(name);
					}
				},

				"CLASS": assertUsableClassName && function (className, context, xml) {
					if (_typeof(context.getElementsByClassName) !== strundefined && !xml) {
						return context.getElementsByClassName(className);
					}
				}
			},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function ATTR(match) {
					match[1] = match[1].replace(rbackslash, "");

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[4] || match[5] || "").replace(rbackslash, "");

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function CHILD(match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	3 xn-component of xn+y argument ([+-]?\d*n|)
     	4 sign of xn-component
     	5 x of xn-component
     	6 sign of y-component
     	7 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1] === "nth") {
						// nth-child requires argument
						if (!match[2]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[3] = +(match[3] ? match[4] + (match[5] || 1) : 2 * (match[2] === "even" || match[2] === "odd"));
						match[4] = +(match[6] + match[7] || match[2] === "odd");

						// other types prohibit arguments
					} else if (match[2]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function PSEUDO(match) {
					var unquoted, excess;
					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					if (match[3]) {
						match[2] = match[3];
					} else if (unquoted = match[4]) {
						// Only check arguments that contain a pseudo
						if (rpseudo.test(unquoted) && (
						// Get excess from tokenize (recursively)
						excess = tokenize(unquoted, true)) && (
						// advance to the next closing parenthesis
						excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

							// excess is a negative index
							unquoted = unquoted.slice(0, excess);
							match[0] = match[0].slice(0, excess);
						}
						match[2] = unquoted;
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {
				"ID": assertGetIdNotName ? function (id) {
					id = id.replace(rbackslash, "");
					return function (elem) {
						return elem.getAttribute("id") === id;
					};
				} : function (id) {
					id = id.replace(rbackslash, "");
					return function (elem) {
						var node = _typeof(elem.getAttributeNode) !== strundefined && elem.getAttributeNode("id");
						return node && node.value === id;
					};
				},

				"TAG": function TAG(nodeName) {
					if (nodeName === "*") {
						return function () {
							return true;
						};
					}
					nodeName = nodeName.replace(rbackslash, "").toLowerCase();

					return function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function CLASS(className) {
					var pattern = classCache[expando][className];
					if (!pattern) {
						pattern = classCache(className, new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)"));
					}
					return function (elem) {
						return pattern.test(elem.className || _typeof(elem.getAttribute) !== strundefined && elem.getAttribute("class") || "");
					};
				},

				"ATTR": function ATTR(name, operator, check) {
					return function (elem, context) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.substr(result.length - check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.substr(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function CHILD(type, argument, first, last) {

					if (type === "nth") {
						return function (elem) {
							var node,
							    diff,
							    parent = elem.parentNode;

							if (first === 1 && last === 0) {
								return true;
							}

							if (parent) {
								diff = 0;
								for (node = parent.firstChild; node; node = node.nextSibling) {
									if (node.nodeType === 1) {
										diff++;
										if (elem === node) {
											break;
										}
									}
								}
							}

							// Incorporate the offset (or cast to NaN), then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						};
					}

					return function (elem) {
						var node = elem;

						switch (type) {
							case "only":
							case "first":
								while (node = node.previousSibling) {
									if (node.nodeType === 1) {
										return false;
									}
								}

								if (type === "first") {
									return true;
								}

								node = elem;

							/* falls through */
							case "last":
								while (node = node.nextSibling) {
									if (node.nodeType === 1) {
										return false;
									}
								}

								return true;
						}
					};
				},

				"PSEUDO": function PSEUDO(pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf.call(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				"enabled": function enabled(elem) {
					return elem.disabled === false;
				},

				"disabled": function disabled(elem) {
					return elem.disabled === true;
				},

				"checked": function checked(elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function selected(elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				"parent": function parent(elem) {
					return !Expr.pseudos["empty"](elem);
				},

				"empty": function empty(elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
					//   not comment, processing instructions, or others
					// Thanks to Diego Perini for the nodeName shortcut
					//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
					var nodeType;
					elem = elem.firstChild;
					while (elem) {
						if (elem.nodeName > "@" || (nodeType = elem.nodeType) === 3 || nodeType === 4) {
							return false;
						}
						elem = elem.nextSibling;
					}
					return true;
				},

				"header": function header(elem) {
					return rheader.test(elem.nodeName);
				},

				"text": function text(elem) {
					var type, attr;
					// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
					// use getAttribute instead to test this case
					return elem.nodeName.toLowerCase() === "input" && (type = elem.type) === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === type);
				},

				// Input types
				"radio": createInputPseudo("radio"),
				"checkbox": createInputPseudo("checkbox"),
				"file": createInputPseudo("file"),
				"password": createInputPseudo("password"),
				"image": createInputPseudo("image"),

				"submit": createButtonPseudo("submit"),
				"reset": createButtonPseudo("reset"),

				"button": function button(elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"input": function input(elem) {
					return rinputs.test(elem.nodeName);
				},

				"focus": function focus(elem) {
					var doc = elem.ownerDocument;
					return elem === doc.activeElement && (!doc.hasFocus || doc.hasFocus()) && !!(elem.type || elem.href);
				},

				"active": function active(elem) {
					return elem === elem.ownerDocument.activeElement;
				},

				// Positional types
				"first": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length, argument) {
					for (var i = 0; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length, argument) {
					for (var i = 1; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					for (var i = argument < 0 ? argument + length : argument; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					for (var i = argument < 0 ? argument + length : argument; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		function siblingCheck(a, b, ret) {
			if (a === b) {
				return ret;
			}

			var cur = a.nextSibling;

			while (cur) {
				if (cur === b) {
					return -1;
				}

				cur = cur.nextSibling;
			}

			return 1;
		}

		sortOrder = docElem.compareDocumentPosition ? function (a, b) {
			if (a === b) {
				hasDuplicate = true;
				return 0;
			}

			return (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1;
		} : function (a, b) {
			// The nodes are identical, we can exit early
			if (a === b) {
				hasDuplicate = true;
				return 0;

				// Fallback to using sourceIndex (in IE) if it's available on both nodes
			} else if (a.sourceIndex && b.sourceIndex) {
				return a.sourceIndex - b.sourceIndex;
			}

			var al,
			    bl,
			    ap = [],
			    bp = [],
			    aup = a.parentNode,
			    bup = b.parentNode,
			    cur = aup;

			// If the nodes are siblings (or identical) we can do a quick check
			if (aup === bup) {
				return siblingCheck(a, b);

				// If no parents were found then the nodes are disconnected
			} else if (!aup) {
				return -1;
			} else if (!bup) {
				return 1;
			}

			// Otherwise they're somewhere else in the tree so we need
			// to build up a full list of the parentNodes for comparison
			while (cur) {
				ap.unshift(cur);
				cur = cur.parentNode;
			}

			cur = bup;

			while (cur) {
				bp.unshift(cur);
				cur = cur.parentNode;
			}

			al = ap.length;
			bl = bp.length;

			// Start walking down the tree looking for a discrepancy
			for (var i = 0; i < al && i < bl; i++) {
				if (ap[i] !== bp[i]) {
					return siblingCheck(ap[i], bp[i]);
				}
			}

			// We ended someplace up the tree so do a sibling check
			return i === al ? siblingCheck(a, bp[i], -1) : siblingCheck(ap[i], b, 1);
		};

		// Always assume the presence of duplicates if sort doesn't
		// pass them to our comparison function (as in Google Chrome).
		[0, 0].sort(sortOrder);
		baseHasDuplicate = !hasDuplicate;

		// Document sorting and removing duplicates
		Sizzle.uniqueSort = function (results) {
			var elem,
			    i = 1;

			hasDuplicate = baseHasDuplicate;
			results.sort(sortOrder);

			if (hasDuplicate) {
				for (; elem = results[i]; i++) {
					if (elem === results[i - 1]) {
						results.splice(i--, 1);
					}
				}
			}

			return results;
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		function tokenize(selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[expando][selector];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						soFar = soFar.slice(match[0].length);
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					tokens.push(matched = new Token(match.shift()));
					soFar = soFar.slice(matched.length);

					// Cast descendant combinators to space
					matched.type = match[0].replace(rtrim, " ");
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (
					// The last two arguments here are (context, xml) for backCompat
					match = preFilters[type](match, document, true)))) {

						tokens.push(matched = new Token(match.shift()));
						soFar = soFar.slice(matched.length);
						matched.type = type;
						matched.matches = match;
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    checkNonElements = base && combinator.dir === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (checkNonElements || elem.nodeType === 1) {
						return matcher(elem, context, xml);
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if (!xml) {
					var cache,
					    dirkey = dirruns + " " + doneName + " ",
					    cachedkey = dirkey + cachedruns;
					while (elem = elem[dir]) {
						if (checkNonElements || elem.nodeType === 1) {
							if ((cache = elem[expando]) === cachedkey) {
								return elem.sizset;
							} else if (typeof cache === "string" && cache.indexOf(dirkey) === 0) {
								if (elem.sizset) {
									return elem;
								}
							} else {
								elem[expando] = cachedkey;
								if (matcher(elem, context, xml)) {
									elem.sizset = true;
									return elem;
								}
								elem.sizset = false;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (checkNonElements || elem.nodeType === 1) {
							if (matcher(elem, context, xml)) {
								return elem;
							}
						}
					}
				}
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				// Positional selectors apply to seed elements, so it is invalid to follow them with relative ones
				if (seed && postFinder) {
					return;
				}

				var i,
				    elem,
				    postFilterIn,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, [], seed),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					postFilterIn = condense(matcherOut, postMap);
					postFilter(postFilterIn, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = postFilterIn.length;
					while (i--) {
						if (elem = postFilterIn[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				// Keep seed and results synchronized
				if (seed) {
					// Ignore postFinder because it can't coexist with seed
					i = preFilter && matcherOut.length;
					while (i--) {
						if (elem = matcherOut[i]) {
							seed[preMap[i]] = !(results[preMap[i]] = elem);
						}
					}
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf.call(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					// The concatenated values are (context, xml) for backCompat
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && tokens.slice(0, i - 1).join("").replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && tokens.join(""));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function superMatcher(seed, context, xml, results, expandContext) {
				var elem,
				    j,
				    matcher,
				    setMatched = [],
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    outermost = expandContext != null,
				    contextBackup = outermostContext,

				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context),

				// Nested matchers should use non-integer dirruns
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.E;

				if (outermost) {
					outermostContext = context !== document && context;
					cachedruns = superMatcher.el;
				}

				// Add elements passing elementMatchers directly to results
				for (; (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						for (j = 0; matcher = elementMatchers[j]; j++) {
							if (matcher(elem, context, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
							cachedruns = ++superMatcher.el;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if (bySet && i !== matchedCount) {
					for (j = 0; matcher = setMatchers[j]; j++) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			superMatcher.el = 0;
			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, group /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[expando][selector];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!group) {
					group = tokenize(selector);
				}
				i = group.length;
				while (i--) {
					cached = matcherFromTokens(group[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
			}
			return cached;
		};

		function multipleContexts(selector, contexts, results, seed) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results, seed);
			}
			return results;
		}

		function select(selector, context, results, seed, xml) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    match = tokenize(selector),
			    j = match.length;

			if (!seed) {
				// Try to minimize operations if there is only one group
				if (match.length === 1) {

					// Take a shortcut and set the context if the root selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && !xml && Expr.relative[tokens[1].type]) {

						context = Expr.find["ID"](token.matches[0].replace(rbackslash, ""), context, xml)[0];
						if (!context) {
							return results;
						}

						selector = selector.slice(tokens.shift().length);
					}

					// Fetch a seed set for right-to-left matching
					for (i = matchExpr["POS"].test(selector) ? -1 : tokens.length - 1; i >= 0; i--) {
						token = tokens[i];

						// Abort if we hit a combinator
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							// Search, expanding context for leading sibling combinators
							if (seed = find(token.matches[0].replace(rbackslash, ""), rsibling.test(tokens[0].type) && context.parentNode || context, xml)) {

								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && tokens.join("");
								if (!selector) {
									push.apply(results, slice.call(seed, 0));
									return results;
								}

								break;
							}
						}
					}
				}
			}

			// Compile and execute a filtering function
			// Provide `match` to avoid retokenization if we modified the selector above
			compile(selector, match)(seed, context, xml, results, rsibling.test(selector));
			return results;
		}

		if (document.querySelectorAll) {
			(function () {
				var disconnectedMatch,
				    oldSelect = select,
				    rescape = /'|\\/g,
				    rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,


				// qSa(:focus) reports false when true (Chrome 21),
				// A support test would require too much code (would include document ready)
				rbuggyQSA = [":focus"],


				// matchesSelector(:focus) reports false when true (Chrome 21),
				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				// A support test would require too much code (would include document ready)
				// just skip matchesSelector for :active
				rbuggyMatches = [":active", ":focus"],
				    matches = docElem.matchesSelector || docElem.mozMatchesSelector || docElem.webkitMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector;

				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (div) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explictly
					// setting a boolean content attribute,
					// since its presence should be enough
					// http://bugs.jquery.com/ticket/12359
					div.innerHTML = "<select><option selected=''></option></select>";

					// IE8 - Some boolean attributes are not treated correctly
					if (!div.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here (do not put tests after this one)
					if (!div.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}
				});

				assert(function (div) {

					// Opera 10-12/IE9 - ^= $= *= and empty values
					// Should not select anything
					div.innerHTML = "<p test=''></p>";
					if (div.querySelectorAll("[test^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:\"\"|'')");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here (do not put tests after this one)
					div.innerHTML = "<input type='hidden'/>";
					if (!div.querySelectorAll(":enabled").length) {
						rbuggyQSA.push(":enabled", ":disabled");
					}
				});

				// rbuggyQSA always contains :focus, so no need for a length check
				rbuggyQSA = /* rbuggyQSA.length && */new RegExp(rbuggyQSA.join("|"));

				select = function select(selector, context, results, seed, xml) {
					// Only use querySelectorAll when not filtering,
					// when this is not xml,
					// and when no QSA bugs apply
					if (!seed && !xml && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
						var groups,
						    i,
						    old = true,
						    nid = expando,
						    newContext = context,
						    newSelector = context.nodeType === 9 && selector;

						// qSA works strangely on Element-rooted queries
						// We can work around this by specifying an extra ID on the root
						// and working up from there (Thanks to Andrew Dupont for the technique)
						// IE 8 doesn't work on object elements
						if (context.nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
							groups = tokenize(selector);

							if (old = context.getAttribute("id")) {
								nid = old.replace(rescape, "\\$&");
							} else {
								context.setAttribute("id", nid);
							}
							nid = "[id='" + nid + "'] ";

							i = groups.length;
							while (i--) {
								groups[i] = nid + groups[i].join("");
							}
							newContext = rsibling.test(selector) && context.parentNode || context;
							newSelector = groups.join(",");
						}

						if (newSelector) {
							try {
								push.apply(results, slice.call(newContext.querySelectorAll(newSelector), 0));
								return results;
							} catch (qsaError) {} finally {
								if (!old) {
									context.removeAttribute("id");
								}
							}
						}
					}

					return oldSelect(selector, context, results, seed, xml);
				};

				if (matches) {
					assert(function (div) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						disconnectedMatch = matches.call(div, "div");

						// This should fail with an exception
						// Gecko does not error, returns false instead
						try {
							matches.call(div, "[test!='']:sizzle");
							rbuggyMatches.push("!=", pseudos);
						} catch (e) {}
					});

					// rbuggyMatches always contains :active and :focus, so no need for a length check
					rbuggyMatches = /* rbuggyMatches.length && */new RegExp(rbuggyMatches.join("|"));

					Sizzle.matchesSelector = function (elem, expr) {
						// Make sure that attribute selectors are quoted
						expr = expr.replace(rattributeQuotes, "='$1']");

						// rbuggyMatches always contains :active, so no need for an existence check
						if (!isXML(elem) && !rbuggyMatches.test(expr) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
							try {
								var ret = matches.call(elem, expr);

								// IE 9's matchesSelector returns false on disconnected nodes
								if (ret || disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9
								elem.document && elem.document.nodeType !== 11) {
									return ret;
								}
							} catch (e) {}
						}

						return Sizzle(expr, null, null, [elem]).length > 0;
					};
				}
			})();
		}

		// Deprecated
		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Back-compat
		function setFilters() {}
		Expr.filters = setFilters.prototype = Expr.pseudos;
		Expr.setFilters = new setFilters();

		// Override sizzle attribute retrieval
		Sizzle.attr = jQuery.attr;
		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;
	})(window);
	var runtil = /Until$/,
	    rparentsprev = /^(?:parents|prev(?:Until|All))/,
	    isSimple = /^.[^:#\[\.,]*$/,
	    rneedsContext = jQuery.expr.match.needsContext,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.fn.extend({
		find: function find(selector) {
			var i,
			    l,
			    length,
			    n,
			    r,
			    ret,
			    self = this;

			if (typeof selector !== "string") {
				return jQuery(selector).filter(function () {
					for (i = 0, l = self.length; i < l; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				});
			}

			ret = this.pushStack("", "find", selector);

			for (i = 0, l = this.length; i < l; i++) {
				length = ret.length;
				jQuery.find(selector, this[i], ret);

				if (i > 0) {
					// Make sure that the results are unique
					for (n = length; n < ret.length; n++) {
						for (r = 0; r < length; r++) {
							if (ret[r] === ret[n]) {
								ret.splice(n--, 1);
								break;
							}
						}
					}
				}
			}

			return ret;
		},

		has: function has(target) {
			var i,
			    targets = jQuery(target, this),
			    len = targets.length;

			return this.filter(function () {
				for (i = 0; i < len; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		not: function not(selector) {
			return this.pushStack(winnow(this, selector, false), "not", selector);
		},

		filter: function filter(selector) {
			return this.pushStack(winnow(this, selector, true), "filter", selector);
		},

		is: function is(selector) {
			return !!selector && (typeof selector === "string" ?
			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			rneedsContext.test(selector) ? jQuery(selector, this.context).index(this[0]) >= 0 : jQuery.filter(selector, this).length > 0 : this.filter(selector).length > 0);
		},

		closest: function closest(selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    ret = [],
			    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

			for (; i < l; i++) {
				cur = this[i];

				while (cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11) {
					if (pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors)) {
						ret.push(cur);
						break;
					}
					cur = cur.parentNode;
				}
			}

			ret = ret.length > 1 ? jQuery.unique(ret) : ret;

			return this.pushStack(ret, "closest", selectors);
		},

		// Determine the position of an element within
		// the matched set of elements
		index: function index(elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.prevAll().length : -1;
			}

			// index in selector
			if (typeof elem === "string") {
				return jQuery.inArray(this[0], jQuery(elem));
			}

			// Locate the position of the desired element
			return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this);
		},

		add: function add(selector, context) {
			var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
			    all = jQuery.merge(this.get(), set);

			return this.pushStack(isDisconnected(set[0]) || isDisconnected(all[0]) ? all : jQuery.unique(all));
		},

		addBack: function addBack(selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	jQuery.fn.andSelf = jQuery.fn.addBack;

	// A painfully simple check to see if an element is disconnected
	// from a document (should be improved, where feasible).
	function isDisconnected(node) {
		return !node || !node.parentNode || node.parentNode.nodeType === 11;
	}

	function sibling(cur, dir) {
		do {
			cur = cur[dir];
		} while (cur && cur.nodeType !== 1);

		return cur;
	}

	jQuery.each({
		parent: function parent(elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function parents(elem) {
			return jQuery.dir(elem, "parentNode");
		},
		parentsUntil: function parentsUntil(elem, i, until) {
			return jQuery.dir(elem, "parentNode", until);
		},
		next: function next(elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function prev(elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function nextAll(elem) {
			return jQuery.dir(elem, "nextSibling");
		},
		prevAll: function prevAll(elem) {
			return jQuery.dir(elem, "previousSibling");
		},
		nextUntil: function nextUntil(elem, i, until) {
			return jQuery.dir(elem, "nextSibling", until);
		},
		prevUntil: function prevUntil(elem, i, until) {
			return jQuery.dir(elem, "previousSibling", until);
		},
		siblings: function siblings(elem) {
			return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
		},
		children: function children(elem) {
			return jQuery.sibling(elem.firstChild);
		},
		contents: function contents(elem) {
			return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var ret = jQuery.map(this, fn, until);

			if (!runtil.test(name)) {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				ret = jQuery.filter(selector, ret);
			}

			ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;

			if (this.length > 1 && rparentsprev.test(name)) {
				ret = ret.reverse();
			}

			return this.pushStack(ret, name, core_slice.call(arguments).join(","));
		};
	});

	jQuery.extend({
		filter: function filter(expr, elems, not) {
			if (not) {
				expr = ":not(" + expr + ")";
			}

			return elems.length === 1 ? jQuery.find.matchesSelector(elems[0], expr) ? [elems[0]] : [] : jQuery.find.matches(expr, elems);
		},

		dir: function dir(elem, _dir, until) {
			var matched = [],
			    cur = elem[_dir];

			while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
				if (cur.nodeType === 1) {
					matched.push(cur);
				}
				cur = cur[_dir];
			}
			return matched;
		},

		sibling: function sibling(n, elem) {
			var r = [];

			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					r.push(n);
				}
			}

			return r;
		}
	});

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, keep) {

		// Can't pass null or undefined to indexOf in Firefox 4
		// Set to 0 to skip string check
		qualifier = qualifier || 0;

		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				var retVal = !!qualifier.call(elem, i, elem);
				return retVal === keep;
			});
		} else if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem, i) {
				return elem === qualifier === keep;
			});
		} else if (typeof qualifier === "string") {
			var filtered = jQuery.grep(elements, function (elem) {
				return elem.nodeType === 1;
			});

			if (isSimple.test(qualifier)) {
				return jQuery.filter(qualifier, filtered, !keep);
			} else {
				qualifier = jQuery.filter(qualifier, filtered);
			}
		}

		return jQuery.grep(elements, function (elem, i) {
			return jQuery.inArray(elem, qualifier) >= 0 === keep;
		});
	}
	function createSafeFragment(document) {
		var list = nodeNames.split("|"),
		    safeFrag = document.createDocumentFragment();

		if (safeFrag.createElement) {
			while (list.length) {
				safeFrag.createElement(list.pop());
			}
		}
		return safeFrag;
	}

	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	    rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	    rleadingWhitespace = /^\s+/,
	    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	    rtagName = /<([\w:]+)/,
	    rtbody = /<tbody/i,
	    rhtml = /<|&#?\w+;/,
	    rnoInnerhtml = /<(?:script|style|link)/i,
	    rnocache = /<(?:script|object|embed|option|style)/i,
	    rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	    rcheckableType = /^(?:checkbox|radio)$/,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rscriptType = /\/(java|ecma)script/i,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
	    wrapMap = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		area: [1, "<map>", "</map>"],
		_default: [0, "", ""]
	},
	    safeFragment = createSafeFragment(document),
	    fragmentDiv = safeFragment.appendChild(document.createElement("div"));

	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	if (!jQuery.support.htmlSerialize) {
		wrapMap._default = [1, "X<div>", "</div>"];
	}

	jQuery.fn.extend({
		text: function text(value) {
			return jQuery.access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
			}, null, value, arguments.length);
		},

		wrapAll: function wrapAll(html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapAll(html.call(this, i));
				});
			}

			if (this[0]) {
				// The elements to wrap the target around
				var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstChild && elem.firstChild.nodeType === 1) {
						elem = elem.firstChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function wrapInner(html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function wrap(html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function unwrap() {
			return this.parent().each(function () {
				if (!jQuery.nodeName(this, "body")) {
					jQuery(this).replaceWith(this.childNodes);
				}
			}).end();
		},

		append: function append() {
			return this.domManip(arguments, true, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11) {
					this.appendChild(elem);
				}
			});
		},

		prepend: function prepend() {
			return this.domManip(arguments, true, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11) {
					this.insertBefore(elem, this.firstChild);
				}
			});
		},

		before: function before() {
			if (!isDisconnected(this[0])) {
				return this.domManip(arguments, false, function (elem) {
					this.parentNode.insertBefore(elem, this);
				});
			}

			if (arguments.length) {
				var set = jQuery.clean(arguments);
				return this.pushStack(jQuery.merge(set, this), "before", this.selector);
			}
		},

		after: function after() {
			if (!isDisconnected(this[0])) {
				return this.domManip(arguments, false, function (elem) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				});
			}

			if (arguments.length) {
				var set = jQuery.clean(arguments);
				return this.pushStack(jQuery.merge(this, set), "after", this.selector);
			}
		},

		// keepData is for internal use only--do not document
		remove: function remove(selector, keepData) {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				if (!selector || jQuery.filter(selector, [elem]).length) {
					if (!keepData && elem.nodeType === 1) {
						jQuery.cleanData(elem.getElementsByTagName("*"));
						jQuery.cleanData([elem]);
					}

					if (elem.parentNode) {
						elem.parentNode.removeChild(elem);
					}
				}
			}

			return this;
		},

		empty: function empty() {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				// Remove element nodes and prevent memory leaks
				if (elem.nodeType === 1) {
					jQuery.cleanData(elem.getElementsByTagName("*"));
				}

				// Remove any remaining nodes
				while (elem.firstChild) {
					elem.removeChild(elem.firstChild);
				}
			}

			return this;
		},

		clone: function clone(dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function html(value) {
			return jQuery.access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined) {
					return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = value.replace(rxhtmlTag, "<$1></$2>");

					try {
						for (; i < l; i++) {
							// Remove element nodes and prevent memory leaks
							elem = this[i] || {};
							if (elem.nodeType === 1) {
								jQuery.cleanData(elem.getElementsByTagName("*"));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function replaceWith(value) {
			if (!isDisconnected(this[0])) {
				// Make sure that the elements are removed from the DOM before they are inserted
				// this can help fix replacing a parent with child elements
				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						var self = jQuery(this),
						    old = self.html();
						self.replaceWith(value.call(this, i, old));
					});
				}

				if (typeof value !== "string") {
					value = jQuery(value).detach();
				}

				return this.each(function () {
					var next = this.nextSibling,
					    parent = this.parentNode;

					jQuery(this).remove();

					if (next) {
						jQuery(next).before(value);
					} else {
						jQuery(parent).append(value);
					}
				});
			}

			return this.length ? this.pushStack(jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value) : this;
		},

		detach: function detach(selector) {
			return this.remove(selector, true);
		},

		domManip: function domManip(args, table, callback) {

			// Flatten any nested arrays
			args = [].concat.apply([], args);

			var results,
			    first,
			    fragment,
			    iNoClone,
			    i = 0,
			    value = args[0],
			    scripts = [],
			    l = this.length;

			// We can't cloneNode fragments that contain checked, in WebKit
			if (!jQuery.support.checkClone && l > 1 && typeof value === "string" && rchecked.test(value)) {
				return this.each(function () {
					jQuery(this).domManip(args, table, callback);
				});
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					var self = jQuery(this);
					args[0] = value.call(this, i, table ? self.html() : undefined);
					self.domManip(args, table, callback);
				});
			}

			if (this[0]) {
				results = jQuery.buildFragment(args, this, scripts);
				fragment = results.fragment;
				first = fragment.firstChild;

				if (fragment.childNodes.length === 1) {
					fragment = first;
				}

				if (first) {
					table = table && jQuery.nodeName(first, "tr");

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					// Fragments from the fragment cache must always be cloned and never used in place.
					for (iNoClone = results.cacheable || l - 1; i < l; i++) {
						callback.call(table && jQuery.nodeName(this[i], "table") ? findOrAppend(this[i], "tbody") : this[i], i === iNoClone ? fragment : jQuery.clone(fragment, true, true));
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;

				if (scripts.length) {
					jQuery.each(scripts, function (i, elem) {
						if (elem.src) {
							if (jQuery.ajax) {
								jQuery.ajax({
									url: elem.src,
									type: "GET",
									dataType: "script",
									async: false,
									global: false,
									"throws": true
								});
							} else {
								jQuery.error("no ajax");
							}
						} else {
							jQuery.globalEval((elem.text || elem.textContent || elem.innerHTML || "").replace(rcleanScript, ""));
						}

						if (elem.parentNode) {
							elem.parentNode.removeChild(elem);
						}
					});
				}
			}

			return this;
		}
	});

	function findOrAppend(elem, tag) {
		return elem.getElementsByTagName(tag)[0] || elem.appendChild(elem.ownerDocument.createElement(tag));
	}

	function cloneCopyEvent(src, dest) {

		if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
			return;
		}

		var type,
		    i,
		    l,
		    oldData = jQuery._data(src),
		    curData = jQuery._data(dest, oldData),
		    events = oldData.events;

		if (events) {
			delete curData.handle;
			curData.events = {};

			for (type in events) {
				for (i = 0, l = events[type].length; i < l; i++) {
					jQuery.event.add(dest, type, events[type][i]);
				}
			}
		}

		// make the cloned public data object a copy from the original
		if (curData.data) {
			curData.data = jQuery.extend({}, curData.data);
		}
	}

	function cloneFixAttributes(src, dest) {
		var nodeName;

		// We do not need to do anything for non-Elements
		if (dest.nodeType !== 1) {
			return;
		}

		// clearAttributes removes the attributes, which we don't want,
		// but also removes the attachEvent events, which we *do* want
		if (dest.clearAttributes) {
			dest.clearAttributes();
		}

		// mergeAttributes, in contrast, only merges back on the
		// original attributes, not the events
		if (dest.mergeAttributes) {
			dest.mergeAttributes(src);
		}

		nodeName = dest.nodeName.toLowerCase();

		if (nodeName === "object") {
			// IE6-10 improperly clones children of object elements using classid.
			// IE10 throws NoModificationAllowedError if parent is null, #12132.
			if (dest.parentNode) {
				dest.outerHTML = src.outerHTML;
			}

			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
				dest.innerHTML = src.innerHTML;
			}
		} else if (nodeName === "input" && rcheckableType.test(src.type)) {
			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set

			dest.defaultChecked = dest.checked = src.checked;

			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if (dest.value !== src.value) {
				dest.value = src.value;
			}

			// IE6-8 fails to return the selected option to the default selected
			// state when cloning options
		} else if (nodeName === "option") {
			dest.selected = src.defaultSelected;

			// IE6-8 fails to set the defaultValue to the correct value when
			// cloning other types of input fields
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;

			// IE blanks contents when cloning scripts
		} else if (nodeName === "script" && dest.text !== src.text) {
			dest.text = src.text;
		}

		// Event data gets referenced instead of copied if the expando
		// gets copied too
		dest.removeAttribute(jQuery.expando);
	}

	jQuery.buildFragment = function (args, context, scripts) {
		var fragment,
		    cacheable,
		    cachehit,
		    first = args[0];

		// Set context from what may come in as undefined or a jQuery collection or a node
		// Updated to fix #12266 where accessing context[0] could throw an exception in IE9/10 &
		// also doubles as fix for #8950 where plain objects caused createDocumentFragment exception
		context = context || document;
		context = !context.nodeType && context[0] || context;
		context = context.ownerDocument || context;

		// Only cache "small" (1/2 KB) HTML strings that are associated with the main document
		// Cloning options loses the selected state, so don't cache them
		// IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
		// Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
		// Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
		if (args.length === 1 && typeof first === "string" && first.length < 512 && context === document && first.charAt(0) === "<" && !rnocache.test(first) && (jQuery.support.checkClone || !rchecked.test(first)) && (jQuery.support.html5Clone || !rnoshimcache.test(first))) {

			// Mark cacheable and look for a hit
			cacheable = true;
			fragment = jQuery.fragments[first];
			cachehit = fragment !== undefined;
		}

		if (!fragment) {
			fragment = context.createDocumentFragment();
			jQuery.clean(args, context, fragment, scripts);

			// Update the cache, but only store false
			// unless this is a second parsing of the same content
			if (cacheable) {
				jQuery.fragments[first] = cachehit && fragment;
			}
		}

		return { fragment: fragment, cacheable: cacheable };
	};

	jQuery.fragments = {};

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    i = 0,
			    ret = [],
			    insert = jQuery(selector),
			    l = insert.length,
			    parent = this.length === 1 && this[0].parentNode;

			if ((parent == null || parent && parent.nodeType === 11 && parent.childNodes.length === 1) && l === 1) {
				insert[original](this[0]);
				return this;
			} else {
				for (; i < l; i++) {
					elems = (i > 0 ? this.clone(true) : this).get();
					jQuery(insert[i])[original](elems);
					ret = ret.concat(elems);
				}

				return this.pushStack(ret, name, insert.selector);
			}
		};
	});

	function getAll(elem) {
		if (typeof elem.getElementsByTagName !== "undefined") {
			return elem.getElementsByTagName("*");
		} else if (typeof elem.querySelectorAll !== "undefined") {
			return elem.querySelectorAll("*");
		} else {
			return [];
		}
	}

	// Used in clean, fixes the defaultChecked property
	function fixDefaultChecked(elem) {
		if (rcheckableType.test(elem.type)) {
			elem.defaultChecked = elem.checked;
		}
	}

	jQuery.extend({
		clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
			var srcElements, destElements, i, clone;

			if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
				clone = elem.cloneNode(true);

				// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
			}

			if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
				// IE copies events bound via attachEvent when using cloneNode.
				// Calling detachEvent on the clone will also remove the events
				// from the original. In order to get around this, we use some
				// proprietary methods to clear the events. Thanks to MooTools
				// guys for this hotness.

				cloneFixAttributes(elem, clone);

				// Using Sizzle here is crazy slow, so we use getElementsByTagName instead
				srcElements = getAll(elem);
				destElements = getAll(clone);

				// Weird iteration because IE will replace the length property
				// with an element if you are cloning the body and one of the
				// elements on the page has a name or id of "length"
				for (i = 0; srcElements[i]; ++i) {
					// Ensure that the destination node is not null; Fixes #9587
					if (destElements[i]) {
						cloneFixAttributes(srcElements[i], destElements[i]);
					}
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				cloneCopyEvent(elem, clone);

				if (deepDataAndEvents) {
					srcElements = getAll(elem);
					destElements = getAll(clone);

					for (i = 0; srcElements[i]; ++i) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				}
			}

			srcElements = destElements = null;

			// Return the cloned set
			return clone;
		},

		clean: function clean(elems, context, fragment, scripts) {
			var i,
			    j,
			    elem,
			    tag,
			    wrap,
			    depth,
			    div,
			    hasBody,
			    tbody,
			    len,
			    handleScript,
			    jsTags,
			    safe = context === document && safeFragment,
			    ret = [];

			// Ensure that context is a document
			if (!context || typeof context.createDocumentFragment === "undefined") {
				context = document;
			}

			// Use the already-created safe fragment if context permits
			for (i = 0; (elem = elems[i]) != null; i++) {
				if (typeof elem === "number") {
					elem += "";
				}

				if (!elem) {
					continue;
				}

				// Convert html string into DOM nodes
				if (typeof elem === "string") {
					if (!rhtml.test(elem)) {
						elem = context.createTextNode(elem);
					} else {
						// Ensure a safe container in which to render the html
						safe = safe || createSafeFragment(context);
						div = context.createElement("div");
						safe.appendChild(div);

						// Fix "XHTML"-style tags in all browsers
						elem = elem.replace(rxhtmlTag, "<$1></$2>");

						// Go to html and back, then peel off extra wrappers
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;
						depth = wrap[0];
						div.innerHTML = wrap[1] + elem + wrap[2];

						// Move to the right depth
						while (depth--) {
							div = div.lastChild;
						}

						// Remove IE's autoinserted <tbody> from table fragments
						if (!jQuery.support.tbody) {

							// String was a <table>, *may* have spurious <tbody>
							hasBody = rtbody.test(elem);
							tbody = tag === "table" && !hasBody ? div.firstChild && div.firstChild.childNodes :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !hasBody ? div.childNodes : [];

							for (j = tbody.length - 1; j >= 0; --j) {
								if (jQuery.nodeName(tbody[j], "tbody") && !tbody[j].childNodes.length) {
									tbody[j].parentNode.removeChild(tbody[j]);
								}
							}
						}

						// IE completely kills leading whitespace when innerHTML is used
						if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
							div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]), div.firstChild);
						}

						elem = div.childNodes;

						// Take out of fragment container (we need a fresh div each time)
						div.parentNode.removeChild(div);
					}
				}

				if (elem.nodeType) {
					ret.push(elem);
				} else {
					jQuery.merge(ret, elem);
				}
			}

			// Fix #11356: Clear elements from safeFragment
			if (div) {
				elem = div = safe = null;
			}

			// Reset defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			if (!jQuery.support.appendChecked) {
				for (i = 0; (elem = ret[i]) != null; i++) {
					if (jQuery.nodeName(elem, "input")) {
						fixDefaultChecked(elem);
					} else if (typeof elem.getElementsByTagName !== "undefined") {
						jQuery.grep(elem.getElementsByTagName("input"), fixDefaultChecked);
					}
				}
			}

			// Append elements to a provided document fragment
			if (fragment) {
				// Special handling of each script element
				handleScript = function handleScript(elem) {
					// Check if we consider it executable
					if (!elem.type || rscriptType.test(elem.type)) {
						// Detach the script and store it in the scripts array (if provided) or the fragment
						// Return truthy to indicate that it has been handled
						return scripts ? scripts.push(elem.parentNode ? elem.parentNode.removeChild(elem) : elem) : fragment.appendChild(elem);
					}
				};

				for (i = 0; (elem = ret[i]) != null; i++) {
					// Check if we're done after handling an executable script
					if (!(jQuery.nodeName(elem, "script") && handleScript(elem))) {
						// Append to fragment and handle embedded scripts
						fragment.appendChild(elem);
						if (typeof elem.getElementsByTagName !== "undefined") {
							// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
							jsTags = jQuery.grep(jQuery.merge([], elem.getElementsByTagName("script")), handleScript);

							// Splice the scripts into ret after their former ancestor and advance our index beyond them
							ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
							i += jsTags.length;
						}
					}
				}
			}

			return ret;
		},

		cleanData: function cleanData(elems, /* internal */acceptData) {
			var data,
			    id,
			    elem,
			    type,
			    i = 0,
			    internalKey = jQuery.expando,
			    cache = jQuery.cache,
			    deleteExpando = jQuery.support.deleteExpando,
			    special = jQuery.event.special;

			for (; (elem = elems[i]) != null; i++) {

				if (acceptData || jQuery.acceptData(elem)) {

					id = elem[internalKey];
					data = id && cache[id];

					if (data) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}

						// Remove cache only if it was not already removed by jQuery.event.remove
						if (cache[id]) {

							delete cache[id];

							// IE does not allow us to delete expando properties from nodes,
							// nor does it have a removeAttribute function on Document nodes;
							// we must handle all of these cases
							if (deleteExpando) {
								delete elem[internalKey];
							} else if (elem.removeAttribute) {
								elem.removeAttribute(internalKey);
							} else {
								elem[internalKey] = null;
							}

							jQuery.deletedIds.push(id);
						}
					}
				}
			}
		}
	});
	// Limit scope pollution from any deprecated API
	(function () {

		var matched, browser;

		// Use of jQuery.browser is frowned upon.
		// More details: http://api.jquery.com/jQuery.browser
		// jQuery.uaMatch maintained for back-compat
		jQuery.uaMatch = function (ua) {
			ua = ua.toLowerCase();

			var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

			return {
				browser: match[1] || "",
				version: match[2] || "0"
			};
		};

		matched = jQuery.uaMatch(navigator.userAgent);
		browser = {};

		if (matched.browser) {
			browser[matched.browser] = true;
			browser.version = matched.version;
		}

		// Chrome is Webkit, but Webkit is also Safari.
		if (browser.chrome) {
			browser.webkit = true;
		} else if (browser.webkit) {
			browser.safari = true;
		}

		jQuery.browser = browser;

		jQuery.sub = function () {
			function jQuerySub(selector, context) {
				return new jQuerySub.fn.init(selector, context);
			}
			jQuery.extend(true, jQuerySub, this);
			jQuerySub.superclass = this;
			jQuerySub.fn = jQuerySub.prototype = this();
			jQuerySub.fn.constructor = jQuerySub;
			jQuerySub.sub = this.sub;
			jQuerySub.fn.init = function init(selector, context) {
				if (context && context instanceof jQuery && !(context instanceof jQuerySub)) {
					context = jQuerySub(context);
				}

				return jQuery.fn.init.call(this, selector, context, rootjQuerySub);
			};
			jQuerySub.fn.init.prototype = jQuerySub.fn;
			var rootjQuerySub = jQuerySub(document);
			return jQuerySub;
		};
	})();
	var curCSS,
	    iframe,
	    iframeDoc,
	    ralpha = /alpha\([^)]*\)/i,
	    ropacity = /opacity=([^)]*)/,
	    rposition = /^(top|right|bottom|left)$/,

	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    rmargin = /^margin/,
	    rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
	    rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
	    rrelNum = new RegExp("^([-+])=(" + core_pnum + ")", "i"),
	    elemdisplay = {},
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},
	    cssExpand = ["Top", "Right", "Bottom", "Left"],
	    cssPrefixes = ["Webkit", "O", "Moz", "ms"],
	    eventsToggle = jQuery.fn.toggle;

	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(style, name) {

		// shortcut for names that are not vendor prefixed
		if (name in style) {
			return name;
		}

		// check for vendor prefixed names
		var capName = name.charAt(0).toUpperCase() + name.slice(1),
		    origName = name,
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in style) {
				return name;
			}
		}

		return origName;
	}

	function isHidden(elem, el) {
		elem = el || elem;
		return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
	}

	function showHide(elements, show) {
		var elem,
		    display,
		    values = [],
		    index = 0,
		    length = elements.length;

		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}
			values[index] = jQuery._data(elem, "olddisplay");
			if (show) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if (!values[index] && elem.style.display === "none") {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if (elem.style.display === "" && isHidden(elem)) {
					values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
				}
			} else {
				display = curCSS(elem, "display");

				if (!values[index] && display !== "none") {
					jQuery._data(elem, "olddisplay", display);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for (index = 0; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}
			if (!show || elem.style.display === "none" || elem.style.display === "") {
				elem.style.display = show ? values[index] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		css: function css(name, value) {
			return jQuery.access(this, function (elem, name, value) {
				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		},
		show: function show() {
			return showHide(this, true);
		},
		hide: function hide() {
			return showHide(this);
		},
		toggle: function toggle(state, fn2) {
			var bool = typeof state === "boolean";

			if (jQuery.isFunction(state) && jQuery.isFunction(fn2)) {
				return eventsToggle.apply(this, arguments);
			}

			return this.each(function () {
				if (bool ? state : isHidden(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});

	jQuery.extend({
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function get(elem, computed) {
					if (computed) {
						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Exclude the following css properties to add px
		cssNumber: {
			"fillOpacity": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			// normalize float css property
			"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
		},

		// Get and set the style property on a DOM Node
		style: function style(elem, name, value, extra) {
			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = jQuery.camelCase(name),
			    style = elem.style;

			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value === "undefined" ? "undefined" : _typeof(value);

				// convert relative number strings (+= or -=) to relative numbers. #7345
				if (type === "string" && (ret = rrelNum.exec(value))) {
					value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that NaN and null values aren't set. See: #7116
				if (value == null || type === "number" && isNaN(value)) {
					return;
				}

				// If a number was passed in, add 'px' to the (except for certain CSS properties)
				if (type === "number" && !jQuery.cssNumber[origName]) {
					value += "px";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
					// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
					// Fixes bug #5509
					try {
						style[name] = value;
					} catch (e) {}
				}
			} else {
				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function css(elem, name, numeric, extra) {
			var val,
			    num,
			    hooks,
			    origName = jQuery.camelCase(name);

			// Make sure that we're working with the right name
			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));

			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name);
			}

			//convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if (numeric || extra !== undefined) {
				num = parseFloat(val);
				return numeric || jQuery.isNumeric(num) ? num || 0 : val;
			}
			return val;
		},

		// A method for quickly swapping in/out CSS properties to get correct calculations
		swap: function swap(elem, options, callback) {
			var ret,
			    name,
			    old = {};

			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}

			ret = callback.call(elem);

			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}

			return ret;
		}
	});

	// NOTE: To any future maintainer, we've window.getComputedStyle
	// because jsdom on node.js will break without it.
	if (window.getComputedStyle) {
		curCSS = function curCSS(elem, name) {
			var ret,
			    width,
			    minWidth,
			    maxWidth,
			    computed = window.getComputedStyle(elem, null),
			    style = elem.style;

			if (computed) {

				ret = computed[name];
				if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
					ret = jQuery.style(elem, name);
				}

				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
				// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
				if (rnumnonpx.test(ret) && rmargin.test(name)) {
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			return ret;
		};
	} else if (document.documentElement.currentStyle) {
		curCSS = function curCSS(elem, name) {
			var left,
			    rsLeft,
			    ret = elem.currentStyle && elem.currentStyle[name],
			    style = elem.style;

			// Avoid setting ret to empty string here
			// so we don't default to auto
			if (ret == null && style && style[name]) {
				ret = style[name];
			}

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are proportional to the parent element instead
			// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
			if (rnumnonpx.test(ret) && !rposition.test(name)) {

				// Remember the original values
				left = style.left;
				rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;

				// Put in the new values to get a computed value out
				if (rsLeft) {
					elem.runtimeStyle.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				if (rsLeft) {
					elem.runtimeStyle.left = rsLeft;
				}
			}

			return ret === "" ? "auto" : ret;
		};
	}

	function setPositiveNumber(elem, value, subtract) {
		var matches = rnumsplit.exec(value);
		return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox) {
		var i = extra === (isBorderBox ? "border" : "content") ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,
		    val = 0;

		for (; i < 4; i += 2) {
			// both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				// we use jQuery.css instead of curCSS here
				// because of the reliableMarginRight CSS hook!
				val += jQuery.css(elem, extra + cssExpand[i], true);
			}

			// From this point on we use curCSS for maximum performance (relevant in animations)
			if (isBorderBox) {
				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= parseFloat(curCSS(elem, "padding" + cssExpand[i])) || 0;
				}

				// at this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= parseFloat(curCSS(elem, "border" + cssExpand[i] + "Width")) || 0;
				}
			} else {
				// at this point, extra isn't content, so add padding
				val += parseFloat(curCSS(elem, "padding" + cssExpand[i])) || 0;

				// at this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += parseFloat(curCSS(elem, "border" + cssExpand[i] + "Width")) || 0;
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with offset property, which is equivalent to the border-box value
		var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		    valueIsBorderBox = true,
		    isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing") === "border-box";

		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if (val <= 0 || val == null) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS(elem, name);
			if (val < 0 || val == null) {
				val = elem.style[name];
			}

			// Computed unit is not pixels. Stop here and return.
			if (rnumnonpx.test(val)) {
				return val;
			}

			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);

			// Normalize "", auto, and prepare for extra
			val = parseFloat(val) || 0;
		}

		// use the active box-sizing model to add/subtract irrelevant styles
		return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox) + "px";
	}

	// Try to determine the default display value of an element
	function css_defaultDisplay(nodeName) {
		if (elemdisplay[nodeName]) {
			return elemdisplay[nodeName];
		}

		var elem = jQuery("<" + nodeName + ">").appendTo(document.body),
		    display = elem.css("display");
		elem.remove();

		// If the simple way fails,
		// get element's real default display by attaching it to a temp iframe
		if (display === "none" || display === "") {
			// Use the already-created iframe if possible
			iframe = document.body.appendChild(iframe || jQuery.extend(document.createElement("iframe"), {
				frameBorder: 0,
				width: 0,
				height: 0
			}));

			// Create a cacheable copy of the iframe document on first call.
			// IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
			// document to it; WebKit & Firefox won't allow reusing the iframe document.
			if (!iframeDoc || !iframe.createElement) {
				iframeDoc = (iframe.contentWindow || iframe.contentDocument).document;
				iframeDoc.write("<!doctype html><html><body>");
				iframeDoc.close();
			}

			elem = iframeDoc.body.appendChild(iframeDoc.createElement(nodeName));

			display = curCSS(elem, "display");
			document.body.removeChild(iframe);
		}

		// Store the correct default display
		elemdisplay[nodeName] = display;

		return display;
	}

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function get(elem, computed, extra) {
				if (computed) {
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					if (elem.offsetWidth === 0 && rdisplayswap.test(curCSS(elem, "display"))) {
						return jQuery.swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						});
					} else {
						return getWidthOrHeight(elem, name, extra);
					}
				}
			},

			set: function set(elem, value, extra) {
				return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing") === "border-box") : 0);
			}
		};
	});

	if (!jQuery.support.opacity) {
		jQuery.cssHooks.opacity = {
			get: function get(elem, computed) {
				// IE uses filters for opacity
				return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
			},

			set: function set(elem, value) {
				var style = elem.style,
				    currentStyle = elem.currentStyle,
				    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
				    filter = currentStyle && currentStyle.filter || style.filter || "";

				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;

				// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
				if (value >= 1 && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {

					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute("filter");

					// if there there is no filter style applied in a css rule, we are done
					if (currentStyle && !currentStyle.filter) {
						return;
					}
				}

				// otherwise, set new filter values
				style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
			}
		};
	}

	// These hooks cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	jQuery(function () {
		if (!jQuery.support.reliableMarginRight) {
			jQuery.cssHooks.marginRight = {
				get: function get(elem, computed) {
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// Work around by temporarily setting element display to inline-block
					return jQuery.swap(elem, { "display": "inline-block" }, function () {
						if (computed) {
							return curCSS(elem, "marginRight");
						}
					});
				}
			};
		}

		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// getComputedStyle returns percent when specified for top/left/bottom/right
		// rather than make the css module depend on the offset module, we just check for it here
		if (!jQuery.support.pixelPosition && jQuery.fn.position) {
			jQuery.each(["top", "left"], function (i, prop) {
				jQuery.cssHooks[prop] = {
					get: function get(elem, computed) {
						if (computed) {
							var ret = curCSS(elem, prop);
							// if curCSS returns percentage, fallback to offset
							return rnumnonpx.test(ret) ? jQuery(elem).position()[prop] + "px" : ret;
						}
					}
				};
			});
		}
	});

	if (jQuery.expr && jQuery.expr.filters) {
		jQuery.expr.filters.hidden = function (elem) {
			return elem.offsetWidth === 0 && elem.offsetHeight === 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || curCSS(elem, "display")) === "none";
		};

		jQuery.expr.filters.visible = function (elem) {
			return !jQuery.expr.filters.hidden(elem);
		};
	}

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function expand(value) {
				var i,


				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value],
				    expanded = {};

				for (i = 0; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});
	var r20 = /%20/g,
	    rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	    rselectTextarea = /^(?:select|textarea)/i;

	jQuery.fn.extend({
		serialize: function serialize() {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function serializeArray() {
			return this.map(function () {
				return this.elements ? jQuery.makeArray(this.elements) : this;
			}).filter(function () {
				return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val, i) {
					return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	//Serialize an array of form elements or a set of
	//key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function add(key, value) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
		};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if (traditional === undefined) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&").replace(r20, "+");
	};

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (jQuery.isArray(obj)) {
			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {
					// Treat each array item as a scalar.
					add(prefix, v);
				} else {
					// If array item is non-scalar (array or object), encode its
					// numeric index to resolve deserialization ambiguity issues.
					// Note that rack (as of 1.0.0) can't currently deserialize
					// nested arrays properly, and attempting to do so may cause
					// a server error. Possible fixes are to modify rack's
					// deserialization algorithm or to provide an option or flag
					// to force array serialization to be shallow.
					buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {
			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {
			// Serialize scalar item.
			add(prefix, obj);
		}
	}
	var
	// Document location
	ajaxLocParts,
	    ajaxLocation,
	    rhash = /#.*$/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	    // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,
	    rquery = /\?/,
	    rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	    rts = /([?&])_=[^&]*/,
	    rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,


	// Keep a copy of the old load method
	_load = jQuery.fn.load,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = ["*/"] + ["*"];

	// #8138, IE may throw an exception when accessing
	// a field from window.location if document.domain has been set
	try {
		ajaxLocation = location.href;
	} catch (e) {
		// Use the href attribute of an A element
		// since IE will modify it given document.location
		ajaxLocation = document.createElement("a");
		ajaxLocation.href = "";
		ajaxLocation = ajaxLocation.href;
	}

	// Segment location into parts
	ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    list,
			    placeBefore,
			    dataTypes = dataTypeExpression.toLowerCase().split(core_rspace),
			    i = 0,
			    length = dataTypes.length;

			if (jQuery.isFunction(func)) {
				// For each dataType in the dataTypeExpression
				for (; i < length; i++) {
					dataType = dataTypes[i];
					// We control if we're asked to add before
					// any existing element
					placeBefore = /^\+/.test(dataType);
					if (placeBefore) {
						dataType = dataType.substr(1) || "*";
					}
					list = structure[dataType] = structure[dataType] || [];
					// then we add to the structure accordingly
					list[placeBefore ? "unshift" : "push"](func);
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR, dataType /* internal */, inspected /* internal */) {

		dataType = dataType || options.dataTypes[0];
		inspected = inspected || {};

		inspected[dataType] = true;

		var selection,
		    list = structure[dataType],
		    i = 0,
		    length = list ? list.length : 0,
		    executeOnly = structure === prefilters;

		for (; i < length && (executeOnly || !selection); i++) {
			selection = list[i](options, originalOptions, jqXHR);
			// If we got redirected to another dataType
			// we try there if executing only and not done already
			if (typeof selection === "string") {
				if (!executeOnly || inspected[selection]) {
					selection = undefined;
				} else {
					options.dataTypes.unshift(selection);
					selection = inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR, selection, inspected);
				}
			}
		}
		// If we're only executing or nothing was selected
		// we try the catchall dataType if not done already
		if ((executeOnly || !selection) && !inspected["*"]) {
			selection = inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR, "*", inspected);
		}
		// unnecessary when only executing (prefilters)
		// but it'll be ignored by the caller in that case
		return selection;
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var key,
		    deep,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};
		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}
	}

	jQuery.fn.load = function (url, params, callback) {
		if (typeof url !== "string" && _load) {
			return _load.apply(this, arguments);
		}

		// Don't do a request if no elements are being requested
		if (!this.length) {
			return this;
		}

		var selector,
		    type,
		    response,
		    self = this,
		    off = url.indexOf(" ");

		if (off >= 0) {
			selector = url.slice(off, url.length);
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
			type = "POST";
		}

		// Request the remote document
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params,
			complete: function complete(jqXHR, status) {
				if (callback) {
					self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
				}
			}
		}).done(function (responseText) {

			// Save response for use in complete callback
			response = arguments;

			// See if a selector was specified
			self.html(selector ?

			// Create a dummy div to hold the results
			jQuery("<div>")

			// inject the contents of the document in, removing the scripts
			// to avoid any 'Permission Denied' errors in IE
			.append(responseText.replace(rscript, ""))

			// Locate the specified elements
			.find(selector) :

			// If not, just inject the full result
			responseText);
		});

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (i, o) {
		jQuery.fn[o] = function (f) {
			return this.on(o, f);
		};
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {
			// shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				type: method,
				url: url,
				data: data,
				success: callback,
				dataType: type
			});
		};
	});

	jQuery.extend({

		getScript: function getScript(url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		},

		getJSON: function getJSON(url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function ajaxSetup(target, settings) {
			if (settings) {
				// Building a settings object
				ajaxExtend(target, jQuery.ajaxSettings);
			} else {
				// Extending ajaxSettings
				settings = target;
				target = jQuery.ajaxSettings;
			}
			ajaxExtend(target, settings);
			return target;
		},

		ajaxSettings: {
			url: ajaxLocation,
			isLocal: rlocalProtocol.test(ajaxLocParts[1]),
			global: true,
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			processData: true,
			async: true,
			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": allTypes
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},

			// List of data converters
			// 1) key format is "source_type destination_type" (a single space in-between)
			// 2) the catchall symbol "*" can be used for source_type
			converters: {

				// Convert anything to text
				"* text": window.String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				context: true,
				url: true
			}
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function ajax(url, options) {

			// If url is an object, simulate pre-1.5 signature
			if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var // ifModified key
			ifModifiedKey,

			// Response headers
			responseHeadersString,
			    responseHeaders,

			// transport
			transport,

			// timeout handle
			timeoutTimer,

			// Cross-domain detection vars
			parts,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup({}, options),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events
			// It's the callbackContext if one was provided in the options
			// and if it's a DOM node or a jQuery collection
			globalEventContext = callbackContext !== s && (callbackContext.nodeType || callbackContext instanceof jQuery) ? jQuery(callbackContext) : jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {

				readyState: 0,

				// Caches the header
				setRequestHeader: function setRequestHeader(name, value) {
					if (!state) {
						var lname = name.toLowerCase();
						name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Raw string
				getAllResponseHeaders: function getAllResponseHeaders() {
					return state === 2 ? responseHeadersString : null;
				},

				// Builds headers hashtable if needed
				getResponseHeader: function getResponseHeader(key) {
					var match;
					if (state === 2) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match === undefined ? null : match;
				},

				// Overrides response content-type header
				overrideMimeType: function overrideMimeType(type) {
					if (!state) {
						s.mimeType = type;
					}
					return this;
				},

				// Cancel the request
				abort: function abort(statusText) {
					statusText = statusText || strAbort;
					if (transport) {
						transport.abort(statusText);
					}
					done(0, statusText);
					return this;
				}
			};

			// Callback for when everything is done
			// It is defined here because jslint complains if it is declared
			// at the end of the function (which would be more logical and readable)
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Called once
				if (state === 2) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if (timeoutTimer) {
					clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// If successful, handle type chaining
				if (status >= 200 && status < 300 || status === 304) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {

						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[ifModifiedKey] = modified;
						}
						modified = jqXHR.getResponseHeader("Etag");
						if (modified) {
							jQuery.etag[ifModifiedKey] = modified;
						}
					}

					// If not modified
					if (status === 304) {

						statusText = "notmodified";
						isSuccess = true;

						// If we have data
					} else {

						isSuccess = ajaxConvert(s, response);
						statusText = isSuccess.state;
						success = isSuccess.data;
						error = isSuccess.error;
						isSuccess = !error;
					}
				} else {
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if (!statusText || status) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(statusCode);
				statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger("ajax" + (isSuccess ? "Success" : "Error"), [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			// Attach deferreds
			deferred.promise(jqXHR);
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
			jqXHR.complete = completeDeferred.add;

			// Status-dependent callbacks
			jqXHR.statusCode = function (map) {
				if (map) {
					var tmp;
					if (state < 2) {
						for (tmp in map) {
							statusCode[tmp] = [statusCode[tmp], map[tmp]];
						}
					} else {
						tmp = map[jqXHR.status];
						jqXHR.always(tmp);
					}
				}
				return this;
			};

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// We also use the url parameter if available
			s.url = ((url || s.url) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

			// Extract dataTypes list
			s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().split(core_rspace);

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if (s.crossDomain == null) {
				parts = rurl.exec(s.url.toLowerCase()) || false;
				s.crossDomain = parts && parts.join(":") + (parts[3] ? "" : parts[1] === "http:" ? 80 : 443) !== ajaxLocParts.join(":") + (ajaxLocParts[3] ? "" : ajaxLocParts[1] === "http:" ? 80 : 443);
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (state === 2) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			fireGlobals = s.global;

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// More options handling for requests with no content
			if (!s.hasContent) {

				// If data is available, append data to url
				if (s.data) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.data;
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Get ifModifiedKey before adding the anti-cache parameter
				ifModifiedKey = s.url;

				// Add anti-cache in url if needed
				if (s.cache === false) {

					var ts = jQuery.now(),

					// try replacing _= if it is there
					ret = s.url.replace(rts, "$1_=" + ts);

					// if nothing was replaced, add timestamp to the end
					s.url = ret + (ret === s.url ? (rquery.test(s.url) ? "&" : "?") + "_=" + ts : "");
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				ifModifiedKey = ifModifiedKey || s.url;
				if (jQuery.lastModified[ifModifiedKey]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[ifModifiedKey]);
				}
				if (jQuery.etag[ifModifiedKey]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[ifModifiedKey]);
				}
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for (i in { success: 1, error: 1, complete: 1 }) {
				jqXHR[i](s[i]);
			}

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;
				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}
				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					state = 1;
					transport.send(requestHeaders, done);
				} catch (e) {
					// Propagate exception as error if not done
					if (state < 2) {
						done(-1, e);
						// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			return jqXHR;
		},

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {}

	});

	/* Handles responses to an ajax request:
  * - sets all responseXXX fields accordingly
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {

		var ct,
		    type,
		    finalDataType,
		    firstDataType,
		    contents = s.contents,
		    dataTypes = s.dataTypes,
		    responseFields = s.responseFields;

		// Fill responseXXX fields
		for (type in responseFields) {
			if (type in responses) {
				jqXHR[responseFields[type]] = responses[type];
			}
		}

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("content-type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {
			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	// Chain conversions given the request and the original response
	function ajaxConvert(s, response) {

		var conv,
		    conv2,
		    current,
		    tmp,

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice(),
		    prev = dataTypes[0],
		    converters = {},
		    i = 0;

		// Apply the dataFilter if provided
		if (s.dataFilter) {
			response = s.dataFilter(response, s.dataType);
		}

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		// Convert to each sequential dataType, tolerating list modification
		for (; current = dataTypes[++i];) {

			// There's only work to do if current dataType is non-auto
			if (current !== "*") {

				// Convert response if prev dataType is non-auto and differs from current
				if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {
									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.splice(i--, 0, current);
									}

									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s["throws"]) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}

				// Update prev for next iteration
				prev = current;
			}
		}

		return { state: "success", data: response };
	}
	var oldCallbacks = [],
	    rquestion = /\?/,
	    rjsonp = /(=)\?(?=&|$)|\?\?/,
	    nonce = jQuery.now();

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function jsonpCallback() {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    data = s.data,
		    url = s.url,
		    hasCallback = s.jsonp !== false,
		    replaceInUrl = hasCallback && rjsonp.test(url),
		    replaceInData = hasCallback && !replaceInUrl && typeof data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(data);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (s.dataTypes[0] === "jsonp" || replaceInUrl || replaceInData) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
			overwritten = window[callbackName];

			// Insert callback into url or form data
			if (replaceInUrl) {
				s.url = url.replace(rjsonp, "$1" + callbackName);
			} else if (replaceInData) {
				s.data = data.replace(rjsonp, "$1" + callbackName);
			} else if (hasCallback) {
				s.url += (rquestion.test(url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {
				// Restore preexisting value
				window[callbackName] = overwritten;

				// Save back as free
				if (s[callbackName]) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function textScript(text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and global
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
			s.global = false;
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {

		// This transport only deals with cross domain requests
		if (s.crossDomain) {

			var script,
			    head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;

			return {

				send: function send(_, callback) {

					script = document.createElement("script");

					script.async = "async";

					if (s.scriptCharset) {
						script.charset = s.scriptCharset;
					}

					script.src = s.url;

					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function (_, isAbort) {

						if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {

							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;

							// Remove the script
							if (head && script.parentNode) {
								head.removeChild(script);
							}

							// Dereference the script
							script = undefined;

							// Callback if not abort
							if (!isAbort) {
								callback(200, "success");
							}
						}
					};
					// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
					// This arises when a base node is used (#2709 and #4378).
					head.insertBefore(script, head.firstChild);
				},

				abort: function abort() {
					if (script) {
						script.onload(0, 1);
					}
				}
			};
		}
	});
	var xhrCallbacks,

	// #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject ? function () {
		// Abort all pending requests
		for (var key in xhrCallbacks) {
			xhrCallbacks[key](0, 1);
		}
	} : false,
	    xhrId = 0;

	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch (e) {}
	}

	function createActiveXHR() {
		try {
			return new window.ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {}
	}

	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
  * implement the XMLHttpRequest in IE7 (can't request local files),
  * so we use the ActiveXObject when it is available
  * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
  * we need a fallback.
  */
	function () {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

	// Determine support properties
	(function (xhr) {
		jQuery.extend(jQuery.support, {
			ajax: !!xhr,
			cors: !!xhr && "withCredentials" in xhr
		});
	})(jQuery.ajaxSettings.xhr());

	// Create transport if the browser can provide an xhr
	if (jQuery.support.ajax) {

		jQuery.ajaxTransport(function (s) {
			// Cross domain only allowed if supported through XMLHttpRequest
			if (!s.crossDomain || jQuery.support.cors) {

				var _callback;

				return {
					send: function send(headers, complete) {

						// Get a new xhr
						var handle,
						    i,
						    xhr = s.xhr();

						// Open the socket
						// Passing null username, generates a login popup on Opera (#2865)
						if (s.username) {
							xhr.open(s.type, s.url, s.async, s.username, s.password);
						} else {
							xhr.open(s.type, s.url, s.async);
						}

						// Apply custom fields if provided
						if (s.xhrFields) {
							for (i in s.xhrFields) {
								xhr[i] = s.xhrFields[i];
							}
						}

						// Override mime type if needed
						if (s.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(s.mimeType);
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if (!s.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						// Need an extra try/catch for cross domain requests in Firefox 3
						try {
							for (i in headers) {
								xhr.setRequestHeader(i, headers[i]);
							}
						} catch (_) {}

						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send(s.hasContent && s.data || null);

						// Listener
						_callback = function callback(_, isAbort) {

							var status, statusText, responseHeaders, responses, xml;

							// Firefox throws exceptions when accessing properties
							// of an xhr when a network error occurred
							// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
							try {

								// Was never called and is aborted or complete
								if (_callback && (isAbort || xhr.readyState === 4)) {

									// Only called once
									_callback = undefined;

									// Do not keep as active anymore
									if (handle) {
										xhr.onreadystatechange = jQuery.noop;
										if (xhrOnUnloadAbort) {
											delete xhrCallbacks[handle];
										}
									}

									// If it's an abort
									if (isAbort) {
										// Abort it manually if needed
										if (xhr.readyState !== 4) {
											xhr.abort();
										}
									} else {
										status = xhr.status;
										responseHeaders = xhr.getAllResponseHeaders();
										responses = {};
										xml = xhr.responseXML;

										// Construct response list
										if (xml && xml.documentElement /* #4958 */) {
												responses.xml = xml;
											}

										// When requesting binary data, IE6-9 will throw an exception
										// on any attempt to access responseText (#11426)
										try {
											responses.text = xhr.responseText;
										} catch (_) {}

										// Firefox throws an exception when accessing
										// statusText for faulty cross-domain requests
										try {
											statusText = xhr.statusText;
										} catch (e) {
											// We normalize with Webkit giving an empty statusText
											statusText = "";
										}

										// Filter status for non standard behaviors

										// If the request is local and we have data: assume a success
										// (success with no data won't get notified, that's the best we
										// can do given current implementations)
										if (!status && s.isLocal && !s.crossDomain) {
											status = responses.text ? 200 : 404;
											// IE - #1450: sometimes returns 1223 when it should be 204
										} else if (status === 1223) {
											status = 204;
										}
									}
								}
							} catch (firefoxAccessException) {
								if (!isAbort) {
									complete(-1, firefoxAccessException);
								}
							}

							// Call complete if needed
							if (responses) {
								complete(status, statusText, responses, responseHeaders);
							}
						};

						if (!s.async) {
							// if we're in sync mode we fire the callback
							_callback();
						} else if (xhr.readyState === 4) {
							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							setTimeout(_callback, 0);
						} else {
							handle = ++xhrId;
							if (xhrOnUnloadAbort) {
								// Create the active xhrs callbacks list if needed
								// and attach the unload handler
								if (!xhrCallbacks) {
									xhrCallbacks = {};
									jQuery(window).unload(xhrOnUnloadAbort);
								}
								// Add to list of active xhrs callbacks
								xhrCallbacks[handle] = _callback;
							}
							xhr.onreadystatechange = _callback;
						}
					},

					abort: function abort() {
						if (_callback) {
							_callback(0, 1);
						}
					}
				};
			}
		});
	}
	var fxNow,
	    timerId,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rfxnum = new RegExp("^(?:([-+])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
	    rrun = /queueHooks$/,
	    animationPrefilters = [defaultPrefilter],
	    tweeners = {
		"*": [function (prop, value) {
			var end,
			    unit,
			    tween = this.createTween(prop, value),
			    parts = rfxnum.exec(value),
			    target = tween.cur(),
			    start = +target || 0,
			    scale = 1,
			    maxIterations = 20;

			if (parts) {
				end = +parts[2];
				unit = parts[3] || (jQuery.cssNumber[prop] ? "" : "px");

				// We need to compute starting value
				if (unit !== "px" && start) {
					// Iteratively approximate from a nonzero starting point
					// Prefer the current property, because this process will be trivial if it uses the same units
					// Fallback to end or a simple constant
					start = jQuery.css(tween.elem, prop, true) || end || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style(tween.elem, prop, start + unit);

						// Update scale, tolerating zero or NaN from tween.cur()
						// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
				}

				tween.unit = unit;
				tween.start = start;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[1] ? start + (parts[1] + 1) * end : end;
			}
			return tween;
		}]
	};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function () {
			fxNow = undefined;
		}, 0);
		return fxNow = jQuery.now();
	}

	function createTweens(animation, props) {
		jQuery.each(props, function (prop, value) {
			var collection = (tweeners[prop] || []).concat(tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (collection[index].call(animation, prop, value)) {

					// we're done with this property
					return;
				}
			}
		});
	}

	function Animation(elem, properties, options) {
		var result,
		    index = 0,
		    tweenerIndex = 0,
		    length = animationPrefilters.length,
		    deferred = jQuery.Deferred().always(function () {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function tick() {
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
			    percent = 1 - (remaining / animation.duration || 0),
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			if (percent < 1 && length) {
				return remaining;
			} else {
				deferred.resolveWith(elem, [animation]);
				return false;
			}
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, { specialEasing: {} }, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function createTween(prop, end, easing) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function stop(gotoEnd) {
				var index = 0,

				// if we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;

				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// resolve when we played the last frame
				// otherwise, reject
				if (gotoEnd) {
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = animationPrefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				return result;
			}
		}

		createTweens(animation, props);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		jQuery.fx.timer(jQuery.extend(tick, {
			anim: animation,
			queue: animation.opts.queue,
			elem: elem
		}));

		// attach callbacks from options
		return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (jQuery.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweener: function tweener(props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.split(" ");
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				tweeners[prop] = tweeners[prop] || [];
				tweeners[prop].unshift(callback);
			}
		},

		prefilter: function prefilter(callback, prepend) {
			if (prepend) {
				animationPrefilters.unshift(callback);
			} else {
				animationPrefilters.push(callback);
			}
		}
	});

	function defaultPrefilter(elem, props, opts) {
		var index,
		    prop,
		    value,
		    length,
		    dataShow,
		    tween,
		    hooks,
		    oldfire,
		    anim = this,
		    style = elem.style,
		    orig = {},
		    handled = [],
		    hidden = elem.nodeType && isHidden(elem);

		// handle queue: false promises
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// height/width overflow pass
		if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {

				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			if (!jQuery.support.shrinkWrapBlocks) {
				anim.done(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}
		}

		// show/hide pass
		for (index in props) {
			value = props[index];
			if (rfxtypes.exec(value)) {
				delete props[index];
				if (value === (hidden ? "hide" : "show")) {
					continue;
				}
				handled.push(index);
			}
		}

		length = handled.length;
		if (length) {
			dataShow = jQuery._data(elem, "fxshow") || jQuery._data(elem, "fxshow", {});
			if (hidden) {
				jQuery(elem).show();
			} else {
				anim.done(function () {
					jQuery(elem).hide();
				});
			}
			anim.done(function () {
				var prop;
				jQuery.removeData(elem, "fxshow", true);
				for (prop in orig) {
					jQuery.style(elem, prop, orig[prop]);
				}
			});
			for (index = 0; index < length; index++) {
				prop = handled[index];
				tween = anim.createTween(prop, hidden ? dataShow[prop] : 0);
				orig[prop] = dataShow[prop] || jQuery.style(elem, prop);

				if (!(prop in dataShow)) {
					dataShow[prop] = tween.start;
					if (hidden) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
		}
	}

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function init(elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function cur() {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function run(percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function get(tween) {
				var result;

				if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
					return tween.elem[tween.prop];
				}

				// passing any value as a 4th parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css(tween.elem, tween.prop, false, "");
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function set(tween) {
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Remove in 2.0 - this supports IE8's panic based approach
	// to setting things on disconnected nodes

	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function set(tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ||
			// special check for .toggle( handler, handler, ... )
			!i && jQuery.isFunction(speed) && jQuery.isFunction(easing) ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	jQuery.fn.extend({
		fadeTo: function fadeTo(speed, to, easing, callback) {

			// show any hidden elements after setting opacity to 0
			return this.filter(isHidden).css("opacity", 0).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function animate(prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function doAnimation() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations resolve immediately
				if (empty) {
					anim.stop(true);
				}
			};

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function stop(type, clearQueue, gotoEnd) {
			var stopQueue = function stopQueue(hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = jQuery._data(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		}
	});

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    attrs = { height: type },
		    i = 0;

		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.easing = {
		linear: function linear(p) {
			return p;
		},
		swing: function swing(p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		}
	};

	jQuery.timers = [];
	jQuery.fx = Tween.prototype.init;
	jQuery.fx.tick = function () {
		var timer,
		    timers = jQuery.timers,
		    i = 0;

		for (; i < timers.length; i++) {
			timer = timers[i];
			// Checks the timer has not already been removed
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
	};

	jQuery.fx.timer = function (timer) {
		if (timer() && jQuery.timers.push(timer) && !timerId) {
			timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.stop = function () {
		clearInterval(timerId);
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};

	if (jQuery.expr && jQuery.expr.filters) {
		jQuery.expr.filters.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};
	}
	var rroot = /^(?:body|html)$/i;

	jQuery.fn.offset = function (options) {
		if (arguments.length) {
			return options === undefined ? this : this.each(function (i) {
				jQuery.offset.setOffset(this, options, i);
			});
		}

		var docElem,
		    body,
		    win,
		    clientTop,
		    clientLeft,
		    scrollTop,
		    scrollLeft,
		    box = { top: 0, left: 0 },
		    elem = this[0],
		    doc = elem && elem.ownerDocument;

		if (!doc) {
			return;
		}

		if ((body = doc.body) === elem) {
			return jQuery.offset.bodyOffset(elem);
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if (!jQuery.contains(docElem, elem)) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if (typeof elem.getBoundingClientRect !== "undefined") {
			box = elem.getBoundingClientRect();
		}
		win = getWindow(doc);
		clientTop = docElem.clientTop || body.clientTop || 0;
		clientLeft = docElem.clientLeft || body.clientLeft || 0;
		scrollTop = win.pageYOffset || docElem.scrollTop;
		scrollLeft = win.pageXOffset || docElem.scrollLeft;
		return {
			top: box.top + scrollTop - clientTop,
			left: box.left + scrollLeft - clientLeft
		};
	};

	jQuery.offset = {

		bodyOffset: function bodyOffset(body) {
			var top = body.offsetTop,
			    left = body.offsetLeft;

			if (jQuery.support.doesNotIncludeMarginInBodyOffset) {
				top += parseFloat(jQuery.css(body, "marginTop")) || 0;
				left += parseFloat(jQuery.css(body, "marginLeft")) || 0;
			}

			return { top: top, left: left };
		},

		setOffset: function setOffset(elem, options, i) {
			var position = jQuery.css(elem, "position");

			// set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			var curElem = jQuery(elem),
			    curOffset = curElem.offset(),
			    curCSSTop = jQuery.css(elem, "top"),
			    curCSSLeft = jQuery.css(elem, "left"),
			    calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			    props = {},
			    curPosition = {},
			    curTop,
			    curLeft;

			// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {
				options = options.call(elem, i, curOffset);
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({

		position: function position() {
			if (!this[0]) {
				return;
			}

			var elem = this[0],


			// Get *real* offsetParent
			offsetParent = this.offsetParent(),


			// Get correct offsets
			offset = this.offset(),
			    parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

			// Subtract element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			offset.top -= parseFloat(jQuery.css(elem, "marginTop")) || 0;
			offset.left -= parseFloat(jQuery.css(elem, "marginLeft")) || 0;

			// Add offsetParent borders
			parentOffset.top += parseFloat(jQuery.css(offsetParent[0], "borderTopWidth")) || 0;
			parentOffset.left += parseFloat(jQuery.css(offsetParent[0], "borderLeftWidth")) || 0;

			// Subtract the two offsets
			return {
				top: offset.top - parentOffset.top,
				left: offset.left - parentOffset.left
			};
		},

		offsetParent: function offsetParent() {
			return this.map(function () {
				var offsetParent = this.offsetParent || document.body;
				while (offsetParent && !rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || document.body;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = /Y/.test(prop);

		jQuery.fn[method] = function (val) {
			return jQuery.access(this, function (elem, method, val) {
				var win = getWindow(elem);

				if (val === undefined) {
					return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length, null);
		};
	});

	function getWindow(elem) {
		return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
	}
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
			// margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return jQuery.access(this, function (elem, type, value) {
					var doc;

					if (jQuery.isWindow(elem)) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, value, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable, null);
			};
		});
	});
	// Expose jQuery to the global object
	window.jQuery = window.$ = jQuery;

	// Expose jQuery as an AMD module, but only for AMD loaders that
	// understand the issues with loading multiple versions of jQuery
	// in a page that all might call define(). The loader will indicate
	// they have special allowances for multiple jQuery versions by
	// specifying define.amd.jQuery = true. Register as a named module,
	// since jQuery can be concatenated with other files that may use define,
	// but not use a proper concatenation script that understands anonymous
	// AMD modules. A named AMD is safest and most robust way to register.
	// Lowercase jquery is used because AMD module names are derived from
	// file names, and jQuery is normally delivered in a lowercase file name.
	// Do this after creating the global so that if an AMD module wants to call
	// noConflict to hide this version of jQuery, it will work.
	if ("function" === "function" && __webpack_require__(/*! !webpack amd options */ "../node_modules/webpack/buildin/amd-options.js") && __webpack_require__(/*! !webpack amd options */ "../node_modules/webpack/buildin/amd-options.js").jQuery) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return jQuery;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
})(window);

/***/ }),

/***/ "./ventus.js":
/*!*******************!*\
  !*** ./ventus.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _windowmanager = __webpack_require__(/*! ventus/wm/windowmanager */ "./ventus/wm/windowmanager.js");

var _windowmanager2 = _interopRequireDefault(_windowmanager);

var _window = __webpack_require__(/*! ventus/wm/window */ "./ventus/wm/window.js");

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Ventus
 * Copyright © 2012-2013 Ramón Lamana
 * https://github.com/rlamana
 */

module.exports = {
	version: '0.3',
	browser: {
		animationEventName: function animationEventName() {
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

	WindowManager: _windowmanager2.default,
	Window: _window2.default
};

/***/ }),

/***/ "./ventus/core/emitter.js":
/*!********************************!*\
  !*** ./ventus/core/emitter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

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

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
	'use strict';

	function equals(slot, scope, expected) {
		return function (item) {
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
		listenersCount: function listenersCount(signal) {
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
		emit: function emit(signal /*, var_args*/) {
			var list = this._listeners[signal];
			if (!list) {
				return;
			}

			var data = Array.prototype.slice.call(arguments, 1);
			list.forEach(function (item) {
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
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./ventus/core/promise.js":
/*!********************************!*\
  !*** ./ventus/core/promise.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * interface Promise {
 *   Future getFuture();
 *   void done(Object var_args...);
 *   void fail(Object var_args...);
 *   static Promise done(Object var_args...);
 *   static Promise failed(Object var_args...);
 *   static Promise parallel(Future var_args...);
 *   static Promise all(Array<Future> futures);
 *   static Promise serial(Array<Function> callbacks, Object scope);
 *   static Constructor Future;
 *   static Constructor PromiseError;
 * }
 *
 * interface Future {
 *   bool isCompleted();
 *   bool hasFailed();
 *   bool hasSucceed();
 *   void onDone(Function callback, Object scope);
 *   void onError(Function callback, Object scope);
 *   void onFinally(Function callback, Object scope);
 *   void then(Function success, Function error, Function fin);
 *   Future transform(Function adapter);
 * }
 *
 * Provides a type to handle asyncrhonous executions.
 * Usage:
 * A promise must be created on any method who executes a asyncrhonous operation and it's future should be returned.
 *   The future will collect listeners waiting for the asyncrhounous operation outside of your function.
 *   When the asyncrhonous operation is over you can call promise.done() or promise.fail() passing as many
 *     arguments as you need than will be recived by callbacks added to .onDone() or .onFail() respectively.
 *
 * function loadConfig() {
 *   var promise = new Promise();
 *   ajax('/config.file', function(err, response) {
 *     if (err)
 *       promise.fail(err);
 *     else
 *       promise.done(response.content, response.mimetype);
 *   });
 *   return promise.getFuture();
 * }
 * loadConfig().then(function(content, mime) {
 *   console.log("Success");
 * }, function(error) {
 *   console.log("Failed: " + error)
 * })
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
	'use strict';

	var slice = Array.prototype.slice;

	function asyncCall(funct, scope, args) {
		setTimeout(function () {
			funct.apply(scope, args);
		});
	}

	function PromiseError(type, originalError, index) {
		var message = 'Error on ' + type + ' promise execution at index [' + index + ']';

		Error.call(this, message);

		this.child = originalError;
		this.index = index;
		this.message = message;
	}

	/**
  * Type to control the Future
  */
	function Promise() {
		this._future = new Future();
	}

	Promise.prototype = {
		constructor: Promise,

		/**
   * Invokes any callback added to .onDone() and .onFinally() to the future.
   *
   * @param var_args <Object> As many arguments as should be passed to the callbacks.
   */
		done: function done() /*var_args*/{
			var args = slice.call(arguments);
			this.getFuture()._arrived('success', args);
		},

		/**
   * Invokes any callback added to .onError() and .onFinally() to the future.
   *
   * @param var_args <Object> As many arguments as should be passed to the callbacks.
   */
		fail: function fail() /*var_args*/{
			var args = slice.call(arguments);
			this.getFuture()._arrived('failed', args);
		},

		/**
   * Access to the future realted to this promise.
   *
   * @returns <Future> The future this promise will trigger.
   */
		getFuture: function getFuture() {
			return this._future;
		}
	};

	/**
  * Creates and return a promise already done.
  * Any callback added to the future of this promise will be executed inmediately in a setTimeout().
  *
  * @param var_args <Object> Arguments to pass to the .done() method of the promise.
  * @returns <Future> The future of the done promise.
  */
	Promise.done = function () /*var_args*/{
		var a = new Promise();
		a.done.apply(a, arguments);
		return a.getFuture();
	};

	/**
  * Creates and return a promise already failed.
  * Any callback added to the future of this promise will be executed inmediately in a setTimeout().
  *
  * @param var_args <Object> Arguments to pass to the .fail() method of the promise.
  * @returns <Future> The future of the failed promise.
  */
	Promise.failed = function () /*var_args*/{
		var a = new Promise();
		a.fail.apply(a, arguments);
		return a.getFuture();
	};

	function succeed(item) {
		return item.hasSucceed();
	}

	/**
  * Returns a future to be triggered when every passed future is completed.
  * If any future fails the returned future will fail too.
  *
  * @param var_args <Future> Futures to wait.
  * @returns <Future> The new future.
  */
	Promise.parallel = function () /*var_args*/{
		return Promise.all(slice.call(arguments));
	};

	/**
  * Returns a future to be triggered when every passed future is completed.
  * If any future fails the returned future will fail too.
  *
  * @param futures <Array<Future>> Futures to wait.
  * @returns <Future> The new future.
  */
	Promise.all = function (futures) {
		if (!futures || !futures.length) {
			return Promise.done();
		}

		futures = futures.map(function (future) {
			return future.getFuture ? future.getFuture() : future;
		});

		var promise = new Promise();
		var values = [];

		futures.forEach(function (future, index) {
			future.then(function () {
				values[index] = slice.call(arguments);
				if (futures.every(succeed)) {
					promise.done.apply(promise, values);
				}
			}, function (error) {
				promise.fail(new PromiseError('parallel', error, index));
			});
		});

		return promise.getFuture();
	};

	/**
  * Executes a list of callbacks secuentially.
  * The value returned by a callback will be passed to the next one.
  * If any callback returns a future it will
  *   wait until it is completed and pass it's result to the next callback.
  * If any callback returns a future than fails the returned future will fail too.
  *
  * @param callbacks <Array<Function>> The list of callbacks.
  * @param scope <Object> The scope for every callback.
  * @returns <Future> The created future.
  */
	Promise.serial = function (callbacks, scope) {
		if (!callbacks || callbacks.length === 0) {
			return Promise.done();
		}

		var promise = new Promise();

		setTimeout(function () {
			next(callbacks, scope, 0, promise, callbacks[0].call(scope));
		});

		return promise.getFuture();
	};

	function next(stack, scope, index, promise, value) {
		index += 1;

		if (index >= stack.length) {
			return promise.done(value);
		}

		if (!(value instanceof Future)) {
			return next(stack, scope, index, promise, stack[index].call(scope, value));
		}

		value.then(function () {
			next(stack, scope, index, promise, stack[index].apply(scope, arguments));
		}, function (error) {
			promise.fail(new PromiseError(' serial ', error, index));
		});
	}

	/**
  * Contains the callbacks waiting the promise to be completed
  */
	function Future() {
		this._args = null;
		this._fn = {
			'success': [],
			'failed': [],
			'finally': []
		};
	}

	Future.prototype = {
		constructor: Future,

		_add: function _add(type, callback, scope) {
			if (!callback) {
				console.warn('No callback passed');
			} else if (this._fn[type] === true) {
				asyncCall(callback, scope, this._args);
			} else if (this._fn[type]) {
				this._fn[type].push({
					callback: callback,
					scope: scope
				});
			}
			return this;
		},

		_arrived: function _arrived(type, args) {
			if (this.isCompleted()) {
				throw new Error('Future already arrived!');
			}

			function invoke(i) {
				i.callback.apply(i.scope, args);
			}

			var callbacks = this._fn[type].concat(this._fn['finally']);

			this._fn = {
				'success': false,
				'failed': false,
				'finally': true
			};

			this._args = args;
			this._fn[type] = true;

			callbacks.forEach(invoke);
		},

		/**
   * Returns true if the promise is done or failed.
   *
   * @returns <bool>
   */
		isCompleted: function isCompleted() {
			return this._fn['finally'] === true;
		},

		/**
   * Returns true if the promise has failed.
   *
   * @returns <bool>
   */
		hasFailed: function hasFailed() {
			return this._fn.failed === true;
		},

		/**
   * Returns true if the promise has succeed.
   *
   * @returns <bool>
   */
		hasSucceed: function hasSucceed() {
			return this._fn.success === true;
		},

		/**
   * Adds a callback to be executed if the promise succeeds.
   *
   * @param callback <Function> The callback to execute.
   * @param scope <Object> The scope for the callback.
   * @returns <Future> Itself. Chainable.
   */
		onDone: function onDone(callback, scope) {
			return this._add('success', callback, scope);
		},

		/**
   * Adds a callback to be executed if the promise fails.
   *
   * @param callback <Function> The callback to execute.
   * @param scope <Object> The scope for the callback.
   * @returns <Future> Itself. Chainable.
   */
		onError: function onError(callback, scope) {
			return this._add('failed', callback, scope);
		},

		/**
   * Adds a callback to be executed if the promise fails or succeeds.
   *
   * @param callback <Function> The callback to execute.
   * @param scope <Object> The scope for the callback.
   * @returns <Future> Itself. Chainable.
   */
		onFinally: function onFinally(callback, scope) {
			return this._add('finally', callback, scope);
		},

		/**
   * Adds many callback types at once.
   * This method does not recive scope for callbacks.
   *
   * @param success <Function> Callback to be executed if the promise succeeds.
   * @param error <Function> Callback to be executed if the promise fails.
   * @param fin <Function> Callback to be executed when the promise is completed.
   */
		then: function then(success, error, fin) {
			if (success) {
				this.onDone(success);
			}

			if (error) {
				this.onError(error);
			}

			if (fin) {
				this.onFinally(fin);
			}
		},

		/**
   * Returns a new future who will be fired when this future is completed
   *   but the passed value will be the values returned by the adapter function.
   *
   * @param adapter <Function> Function than adapts the values. Will recive
   *    the same arguments a normal callback will recive and the returned value
   *    will be passed to the new future. If the returned value is a array they
   *    will be passed as arguments.
   * @returns <Future> The future with the adapted value.
   */
		transform: function transform(adapter) {
			var promise = new Promise();

			this.then(function () {
				var values = adapter.apply(null, arguments);

				if (!values || values.constructor !== 'array') {
					values = [values];
				}

				promise.done.apply(promise, values);
			}, function () {
				promise.fail.apply(promise, arguments);
			});

			return promise.getFuture();
		}
	};

	Promise.PromiseError = PromiseError;
	Promise.Future = Future;

	return Promise;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./ventus/core/view.js":
/*!*****************************!*\
  !*** ./ventus/core/view.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
	'use strict';

	var $ = window.$;

	var splitter = /^(?:(.*)\s)?(\w+)$/;

	var transitionEventNames = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';
	var animationEventNames = 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd';

	// CSS3 transform, transition, animation hooks, prefixless
	var hooks = ['transform', 'transition', 'animation', 'transform-origin'];
	for (var i = hooks.length; i--;) {
		(function (property) {
			$.cssHooks[property] = {
				get: function get() {
					return null;
				},
				set: function set(elem, value) {
					elem.style['-webkit-' + property] = value;
					elem.style['-moz-' + property] = value;
					elem.style['-ms-' + property] = value;
					elem.style['-o-' + property] = value;
					elem.style[property] = value;
				}
			};
		})(hooks[i]);
	}

	$.fn.extend({
		listen: function listen(map, scope) {
			var handler, data, selector, event;
			for (var key in map) {
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

				if (selector) {
					this.on(event, selector, handler.bind(scope));
				} else {
					this.on(event, handler.bind(scope));
				}
			}

			return this;
		},

		onTransitionEnd: function onTransitionEnd(callback, scope) {
			this.one(transitionEventNames, function () {
				callback.apply(scope || this);
			});
		},

		onAnimationEnd: function onAnimationEnd(callback, scope) {
			this.one(animationEventNames, function () {
				callback.apply(scope || this);
			});
		}
	});

	return function (root) {
		if (typeof root === 'function') {
			// It's a template
			return function (options) {
				return $(root(options || {}));
			};
		} else {
			// It's a selector
			return $(root);
		}
	};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./ventus/less/expose.less":
/*!*********************************!*\
  !*** ./ventus/less/expose.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/less-loader/dist/cjs.js??ref--6-3!./expose.less */ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/less-loader/dist/cjs.js??ref--6-3!./ventus/less/expose.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./ventus/less/fullscreen.less":
/*!*************************************!*\
  !*** ./ventus/less/fullscreen.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/less-loader/dist/cjs.js??ref--6-3!./fullscreen.less */ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/less-loader/dist/cjs.js??ref--6-3!./ventus/less/fullscreen.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./ventus/less/window.less":
/*!*********************************!*\
  !*** ./ventus/less/window.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/less-loader/dist/cjs.js??ref--6-3!./window.less */ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/less-loader/dist/cjs.js??ref--6-3!./ventus/less/window.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./ventus/less/windowmanager.less":
/*!****************************************!*\
  !*** ./ventus/less/windowmanager.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/lib!../../../node_modules/less-loader/dist/cjs.js??ref--6-3!./windowmanager.less */ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/less-loader/dist/cjs.js??ref--6-3!./ventus/less/windowmanager.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./ventus/wm/modes/default.js":
/*!************************************!*\
  !*** ./ventus/wm/modes/default.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
	'use strict';

	var DefaultMode = {
		register: function register() {
			console.log('Default mode registered.');
		},

		plug: function plug() {},

		unplug: function unplug() {},

		actions: {
			maximize: function maximize(win) {
				win.move(0, 0);
				win.el.css('-webkit-transform', 'translate3d(0, 0, 0);');
				win.resize(this.el.width(), this.el.height());
			},

			restore: function restore(win, _restore) {
				_restore.call(win);
			},

			minimize: function minimize(win) {
				win.resize(0, 0);
			}
		}
	};

	return DefaultMode;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./ventus/wm/modes/expose.js":
/*!***********************************!*\
  !*** ./ventus/wm/modes/expose.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lodash.throttle */ "../node_modules/lodash.throttle/index.js"), __webpack_require__(/*! ventus/core/promise */ "./ventus/core/promise.js"), __webpack_require__(/*! ventus/less/expose.less */ "./ventus/less/expose.less")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (throttle, Promise) {
	'use strict';

	var ExposeMode = {
		// Launch when plugin is registered
		register: function register() {
			var self = this;

			console.log('Expose mode registered.');

			this.el.on('contextmenu', throttle(function () {
				// Right click sets expose mode
				if (self.mode !== 'expose') {
					if (self.windows.length > 0) {
						self.mode = 'expose';
					}
				} else if (self.mode === 'expose') {
					self.mode = 'default';
				}

				return false;
			}, 1000));
		},

		// Launch when plugin is enabled
		plug: function plug() {
			var floor = Math.floor,
			    ceil = Math.ceil,
			    self = this;

			var grid = ceil(this.windows.length / 2);
			var maxWidth = floor(this.el.width() / grid);
			var maxHeight = floor(this.el.height() / 2);

			var scale, left, top, pos;

			this.el.addClass('expose');

			for (var win, i = 0, len = this.windows.length; i < len; i++) {
				win = this.windows[i];

				win.stamp();

				// Scale factor
				if (win.height > win.width) {
					scale = win.height > maxHeight ? maxHeight / win.height : 1;
				} else {
					scale = win.width > maxWidth ? maxWidth / win.width : 1;
				}

				scale -= 0.15; // To add a little padding

				pos = {
					x: i % grid * maxWidth,
					y: (i < grid ? 0 : 1) * maxHeight
				};

				// New position
				left = pos.x + floor((maxWidth - scale * win.width) / 2);
				top = pos.y + floor((maxHeight - scale * win.height) / 2);

				win.enabled = false;
				win.movable = false;

				win.el.addClass('exposing');
				win.el.css('transform-origin', '0 0');
				win.el.css('transform', 'scale(' + scale + ')');
				win.el.css('top', top);
				win.el.css('left', left);

				var endExposing = function endExposing() {
					win.el.removeClass('exposing');
				};

				if (win.animations) {
					win.el.onTransitionEnd(endExposing, this);
				} else {
					endExposing.call(this);
				}
			}

			this.overlay = true;
			this.el.one('click', function () {
				self.mode = 'default';
			});
		},

		// Lauch when plugin is disabled
		unplug: function unplug() {
			var promise = new Promise();
			promise.getFuture().then(function () {
				this.el.removeClass('expose');
			}.bind(this));

			if (this.windows.length === 0) {
				promise.done();
			}

			for (var win, i = this.windows.length; i--;) {
				win = this.windows[i];

				win.restore();
				win.el.css('transform', 'scale(1)');
				win.el.css('transform-origin', '50% 50%');

				var removeTransform = function (win, windowIndex) {
					return function () {
						if (windowIndex === 0) {
							promise.done();
						}
						win.el.css('transform', '');
					};
				}(win, i);

				if (win.animations) {
					this.el.onTransitionEnd(removeTransform, this);
				} else {
					removeTransform.call(this);
				}

				win.movable = true;
				win.enabled = true;
			}

			this.overlay = false;
		},

		actions: {
			focus: function focus() {},

			close: function close() {
				this.mode = 'expose';
			},

			select: function select(win) {
				this.mode = 'default';
				win.focus();
			}
		}
	};

	return ExposeMode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./ventus/wm/modes/fullscreen.js":
/*!***************************************!*\
  !*** ./ventus/wm/modes/fullscreen.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ventus/less/fullscreen.less */ "./ventus/less/fullscreen.less")], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
	'use strict';

	var FullscreenMode = {

		// Launch when plugin is registered
		register: function register() {
			console.log('Fullscreen mode registered.');
		},

		// Lauch when plugin is enabled
		plug: function plug() {
			this.el.addClass('fullscreen');

			for (var win, i = 0, len = this.windows.length; i < len; i++) {
				win = this.windows[i];
				win.move(0, 0);
				win.el.css('-webkit-transform', 'translate3d(0, 0, 0);');
				win.resize(this.el.width(), this.el.height());
			}
		},

		// Lauch when plugin is disabled
		unplug: function unplug() {
			for (var win, i = this.windows.length; i--;) {
				win = this.windows[i];

				win.restore();
				win.el.css('transform', 'scale(1)');
				win.el.css('transform-origin', '50% 50%');

				var removeTransform = function (win) {
					return function () {
						this.el.removeClass('fullscreen');
						win.el.css('transform', '');
					};
				}(win);

				this.el.onTransitionEnd(removeTransform, this);

				win.movable = true;
				win.resizable = true;
				win.enabled = true;
			}

			this.overlay = false;
		},

		actions: {
			focus: function focus() /*win*/{},

			close: function close() {
				this.mode = 'expose';
			},

			select: function select(win /*, e*/) {
				this.mode = 'default';
				win.focus();
			}
		}
	};

	return FullscreenMode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./ventus/wm/window.js":
/*!*****************************!*\
  !*** ./ventus/wm/window.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ventus/core/emitter */ "./ventus/core/emitter.js"), __webpack_require__(/*! ventus/core/promise */ "./ventus/core/promise.js"), __webpack_require__(/*! ventus/core/view */ "./ventus/core/view.js"), __webpack_require__(/*! ventus/less/window.less */ "./ventus/less/window.less")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Emitter, Promise, View) {
	'use strict';

	function render(title, className) {
		var markup = '<div class="wm-window ' + className + '">\n      <div class="wm-window-box">\n        <header class="wm-window-title" unselectable="on">\n          <h1 unselectable="on">' + title + '</h1>\n          <div class="wm-button-group">\n            <button class="wm-minimize">&nbsp;</button>\n            <button class="wm-maximize">&nbsp;</button>\n            <button class="wm-close">&nbsp;</button>\n          </div>\n        </header>\n\n        <section class="wm-content"></section>\n\n        <button class="wm-resize">&nbsp;</button>\n      </div>\n      <div class="wm-window-overlay"></div>\n    </div>';

		var wrapper = document.createElement('div');
		wrapper.innerHTML = markup;
		return wrapper.firstChild;
	}

	function isTouchEvent(e) {
		return !!window.TouchEvent && e.originalEvent instanceof window.TouchEvent;
	}

	function convertMoveEvent(e) {
		return isTouchEvent(e) ? e.originalEvent.changedTouches[0] : e.originalEvent;
	}

	var Window = function Window(options) {
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
			titlebar: true,
			animations: true,
			classname: '',
			stayinspace: false
		};

		if (options.animations) {
			options.classname + ' animated';
		}

		// View
		this.el = View(render(options.title, options.classname));
		this.el.listen(this.events.window, this);

		if (options.opacity) {
			this.el.css('opacity', options.opacity);
		}

		// Predefined signal/events handlers
		if (options.events) {
			for (var eventName in options.events) {
				if (options.events.hasOwnProperty(eventName) && typeof options.events[eventName] === 'function') {
					this.signals.on(eventName, options.events[eventName], this);
				}
			}
		}

		// Cache content element
		this.$content = this.el.find('.wm-content');
		if (options.content) {
			this.$content.append(options.content);
		}

		// Cache header element
		this.$titlebar = this.el.find('header');

		this.width = options.width || 400;
		this.height = options.height || 200;

		this.x = options.x || 0;
		this.y = options.y || 0;
		this.z = 10000;

		// State
		this.enabled = true;
		this.active = false;
		this.maximized = false;
		this.minimized = false;

		this._closed = true;
		this._destroyed = false;

		// Properties
		this.widget = false;
		this.movable = typeof options.movable !== 'undefined' ? options.movable : true;
		this.resizable = typeof options.resizable !== 'undefined' ? options.resizable : true;
		this.animations = typeof options.animations !== 'undefined' ? options.animations : true;
		this.titlebar = true;
		this.stayinspace = typeof options.stayinspace !== 'undefined' ? options.stayinspace : false;
	};

	Window.prototype = {
		_restore: null,
		_moving: null,
		_resizing: null,

		slots: {
			move: function move(e) {
				var event = convertMoveEvent(e);

				if (!this.enabled || !this.movable) {
					return;
				}

				this._moving = this.toLocal({
					x: event.pageX,
					y: event.pageY
				});

				this.el.addClass('move');

				e.preventDefault();
			}
		},

		events: {
			window: {
				'click': function click(e) {
					this.signals.emit('select', this, e);
				},

				'mousedown': function mousedown(e) {
					this.focus();

					if (this.widget) {
						this.slots.move.call(this, e);
					}
				},

				'.wm-content click': function wmContentClick(e) {
					if (this.enabled) {
						this.signals.emit('click', this, e);
					}
				},

				'.wm-window-title mousedown': function wmWindowTitleMousedown(e) {
					if (!this.maximized) {
						this.slots.move.call(this, e);
					}
				},

				'.wm-window-title dblclick': function wmWindowTitleDblclick() {
					if (this.enabled && this.resizable) {
						this.maximize();
					}
				},

				'.wm-window-title button.wm-close click': function wmWindowTitleButtonWmCloseClick(e) {
					e.stopPropagation();
					e.preventDefault();

					if (this.enabled) {
						this.close();
					}
				},

				'.wm-window-title button.wm-maximize click': function wmWindowTitleButtonWmMaximizeClick(e) {
					e.stopPropagation();
					e.preventDefault();

					if (this.enabled && this.resizable) {
						this.maximize();
					}
				},

				'.wm-window-title button.wm-minimize click': function wmWindowTitleButtonWmMinimizeClick(e) {
					e.stopPropagation();
					e.preventDefault();

					if (this.enabled) {
						this.minimize();
					}
				},

				'.wm-window-title button mousedown': function wmWindowTitleButtonMousedown(e) {
					this.focus();

					e.stopPropagation();
					e.preventDefault();
				},

				'button.wm-resize mousedown': function buttonWmResizeMousedown(e) {
					var event = convertMoveEvent(e);

					if (!this.enabled || !this.resizable) {
						return;
					}

					this._resizing = {
						width: this.width - event.pageX,
						height: this.height - event.pageY
					};

					this.el.addClass('resizing');

					e.preventDefault();
				}
			},

			space: {
				'mousemove': function mousemove(e) {
					var event = convertMoveEvent(e);

					// Fix #20. Mousemove outside browser
					if (!isTouchEvent(e) && e.which !== 1) {
						this._moving && this._stopMove();
						this._resizing && this._stopResize();
					}

					if (this._moving) {
						if (this.stayinspace) {
							if (this.el[0].clientWidth > this.space[0].clientWidth || this.el[0].clientHeight > this.space[0].clientHeight) {
								this.resize(Math.min(this.el[0].clientWidth, this.space[0].clientWidth), Math.min(this.el[0].clientHeight, this.space[0].clientHeight));
							}
							var movingX = Math.max(0, event.pageX - this._moving.x);
							var minusX = 0;
							var movingY = Math.max(0, event.pageY - this._moving.y);
							var minusY = 0;
							if (movingX + this.el[0].clientWidth > this.space[0].clientWidth) {
								minusX = movingX + this.el[0].clientWidth - this.space[0].clientWidth;
							}
							if (movingY + this.el[0].clientHeight > this.space[0].clientHeight) {
								minusY = movingY + this.el[0].clientHeight - this.space[0].clientHeight;
							}
							this.move(movingX - minusX, movingY - minusY);
						} else {
							this.move(event.pageX - this._moving.x, event.pageY - this._moving.y);
						}
					}

					if (this._resizing) {
						this.resize(event.pageX + this._resizing.width, event.pageY + this._resizing.height);
					}
				},

				'mouseup': function mouseup() {
					this._moving && this._stopMove();
					this._resizing && this._stopResize();
				}
			}
		},

		_stopMove: function _stopMove() {
			this.el.removeClass('move');
			this._moving = null;
		},

		_stopResize: function _stopResize() {
			this.el.removeClass('resizing');
			this._restore = null;
			this._resizing = null;
		},

		set space(el) {
			if (el && !el.listen) {
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
			if (value) {
				this._restoreMaximized = this.stamp();
				this.el.addClass('maximized');
				this.signals.emit('maximize', this, this._restoreMaximized);
			} else {
				this.el.removeClass('maximized');
				this.signals.emit('restore', this, this._restoreMaximized);
			}
			this._maximized = value;
		},

		get minimized() {
			return this._minimized;
		},

		set minimized(value) {
			if (value) {
				this._restoreMinimized = this.stamp();
				this.signals.emit('minimize', this, this._restoreMinimized);
			} else {
				this.signals.emit('restore', this, this._restoreMinimized);
			}

			this._minimized = value;
		},

		set active(value) {
			if (value) {
				this.signals.emit('focus', this);
				this.el.addClass('active');
				this.el.removeClass('inactive');
			} else {
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
			if (!value) {
				this.el.addClass('disabled');
			} else {
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
			if (!value) {
				this.el.addClass('noresizable');
			} else {
				this.el.removeClass('noresizable');
			}

			this._resizable = !!value;
		},

		get resizable() {
			return this._resizable;
		},

		set closed(value) {}, // jshint ignore:line
		get closed() {
			return this._closed;
		},

		set destroyed(value) {}, // jshint ignore:line
		get destroyed() {
			return this._destroyed;
		},

		set widget(value) {
			this._widget = value;
		},

		get widget() {
			return this._widget;
		},

		set titlebar(value) {
			if (value) {
				this.$titlebar.removeClass('hide');
			} else {
				this.$titlebar.addClass('hide');
			}

			this._titlebar = value;
		},

		get titlebar() {
			return this._titlebar;
		},

		set animations(value) {
			if (value) {
				this.el.addClass('animated');
			} else {
				this.el.removeClass('animated');
			}

			this._animations = value;
		},

		get animations() {
			return this._animations;
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

		open: function open() {
			var promise = new Promise();
			this.signals.emit('open', this);

			// Open animation
			this.el.show();
			this.el.addClass('opening');
			this.el.onAnimationEnd(function () {
				this.el.removeClass('opening');
				promise.done();
			}, this);

			this._closed = false;
			return promise;
		},

		close: function close() {
			var promise = new Promise();
			this.signals.emit('close', this);

			this.el.addClass('closing');
			this.el.onAnimationEnd(function () {
				this.el.removeClass('closing');
				this.el.addClass('closed');
				this.el.hide();

				this.signals.emit('closed', this);
				promise.done();
			}, this);

			this._closed = true;
			return promise;
		},

		destroy: function destroy() {
			var destroy = function () {
				// Remove element
				this.$content.html('');
				this.signals.emit('destroyed', this);

				this._destroyed = true;
			}.bind(this);

			this.signals.emit('destroy', this);

			if (!this.closed) {
				this.close().getFuture().then(function () {
					destroy();
				});
			} else {
				destroy();
			}
		},

		resize: function resize(w, h) {
			this.width = w;
			this.height = h;
			return this;
		},

		move: function move(x, y) {
			this.x = x;
			this.y = y;
			return this;
		},

		/**
   * @return A function that restores this window
   */
		stamp: function stamp() {
			this.restore = function () {
				var size = {
					width: this.width,
					height: this.height
				};

				var pos = {
					x: this.x,
					y: this.y
				};

				return function () {
					this.resize(size.width, size.height);
					this.move(pos.x, pos.y);

					return this;
				};
			}.apply(this);

			return this.restore;
		},

		restore: function restore() {},

		maximize: function maximize() {
			this.el.addClass('maximazing');

			var endMaximize = function endMaximize() {
				this.el.removeClass('maximazing');
			};

			if (this.animations) {
				this.el.onTransitionEnd(endMaximize, this);
			} else {
				endMaximize.call(this);
			}

			this.maximized = !this.maximized;
			return this;
		},

		minimize: function minimize() {
			this.el.addClass('minimizing');

			var endMinimize = function endMinimize() {
				this.el.removeClass('minimizing');
			};

			if (this.animations) {
				this.el.onTransitionEnd(endMinimize, this);
			} else {
				endMinimize.call(this);
			}

			this.minimized = !this.minimized;
			return this;
		},

		focus: function focus() {
			this.active = true;
			return this;
		},

		blur: function blur() {
			this.active = false;
			return this;
		},

		toLocal: function toLocal(coord) {
			return {
				x: coord.x - this.x,
				y: coord.y - this.y
			};
		},

		toGlobal: function toGlobal(coord) {
			return {
				x: coord.x + this.x,
				y: coord.y + this.y
			};
		},

		append: function append(el) {
			el.appendTo(this.$content);
		}
	};

	return Window;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./ventus/wm/windowmanager.js":
/*!************************************!*\
  !*** ./ventus/wm/windowmanager.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Ventus
 * Copyright © 2012 Ramón Lamana
 * https://github.com/rlamana
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ventus/wm/window */ "./ventus/wm/window.js"), __webpack_require__(/*! ventus/core/view */ "./ventus/core/view.js"), __webpack_require__(/*! ventus/wm/modes/default */ "./ventus/wm/modes/default.js"), __webpack_require__(/*! ventus/wm/modes/expose */ "./ventus/wm/modes/expose.js"), __webpack_require__(/*! ventus/wm/modes/fullscreen */ "./ventus/wm/modes/fullscreen.js"), __webpack_require__(/*! ventus/less/windowmanager.less */ "./ventus/less/windowmanager.less")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Window, View, DefaultMode, ExposeMode, FullscreenMode) {
	'use strict';

	var WindowManager = function WindowManager() {
		var createWindow;

		this.el = View('<div class="wm-space"><div class="wm-overlay" /></div>');
		document.body.insertBefore(this.el[0], document.body.firstChild);

		this.$overlay = this.el.find('.wm-overlay');
		this.$overlay.css('z-index', this._baseZ - 1);

		// Generate mode plugin actions wrapper
		this.actions.forEach(function (value) {
			this[value] = function (action) {
				return function () {
					if (this.currentMode.actions[action]) {
						this.currentMode.actions[action].apply(this, arguments);
					}
				};
			}.call(this, value);
		}, this);

		// Launch register of every mode plugged-in
		for (var mode in this.modes) {
			if (this.modes.hasOwnProperty(mode) && this.modes[mode].register) {
				this.modes[mode].register.apply(this);
			}
		}

		this.windows = [];
		this.active = null;

		this.mode = 'default';

		// Replace createWindow function on prototype with instance-specific copy
		// (avoids pollution of prototype during the next step)
		createWindow = this.createWindow;
		this.createWindow = createWindow.bind(this);
		// Bind this to sub-functions of createWindow function
		this.createWindow.fromQuery = createWindow.fromQuery.bind(this);
		this.createWindow.fromElement = createWindow.fromElement.bind(this);
	};

	WindowManager.prototype = {
		actions: ['focus', 'blur', 'close', 'maximize', 'minimize', 'restore', 'select'],

		modes: {
			'default': DefaultMode,
			'expose': ExposeMode,
			'fullscreen': FullscreenMode
		},

		set mode(value) {
			var mode = this.modes[value];
			if (!mode || this._mode === value) {
				return;
			}

			// Unplug old system
			if (this._mode && this.currentMode.unplug) {
				this.currentMode.unplug.apply(this);
			}

			// Plug new mode system
			if (mode.plug) {
				mode.plug.apply(this);
			}

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

		createWindow: function createWindow(options) {
			var win = new Window(options);

			// Show 'default' mode
			this.mode = 'default';

			// Connect window signals to the manager listeners
			win.signals.on('focus', this._focus, this);
			win.signals.on('blur', this._blur, this);
			win.signals.on('close', this._close, this);

			// Connect window signals to manager mode actions
			this.actions.forEach(function (action) {
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
		_focus: function _focus(win) {
			var currentZ,
			    baseZ = 10000,
			    maxZ = baseZ + 10000,
			    index;

			if (this.active && this.active === win) {
				return;
			}

			if (this.active) {
				currentZ = this.active.z;
				this.active.blur();
			} else {
				currentZ = baseZ;
			}

			// Reorder windows stack (@todo optimize this)
			index = this.windows.indexOf(win);
			this.windows.splice(index, 1); // Remove from array
			this.windows.push(win);

			win.z = currentZ + 1;

			// Refresh z-indexes just every 'maxZ' activations
			if (currentZ > maxZ + this.windows.length) {
				for (var z, i = this.windows.length; i--;) {
					z = this.windows[i].z;
					this.windows[i].z = baseZ + (z - maxZ);
				}
			}

			this.active = win;
		},

		/**
   * Internal action always performed besides the mode definition
   */
		_blur: function _blur(win) {
			if (this.active === win) {
				this.active = null;
			}
		},

		/**
   * Internal action always performed besides the mode definition
   */
		_close: function _close(win) {
			// Remove window from manager
			var id = this.windows.indexOf(win),
			    len;
			if (id === -1) {
				console.log('Trying to close a window that doesn\'t exist in this window manager');
				return;
			}

			this.windows.splice(id, 1); // Remove from array
			len = this.windows.length;
			if (this.active && this.active === win) {
				this.active = len !== 0 ? this.windows[len - 1] : null;
				if (this.active) {
					this.active.focus();
				}
			}
		}
	};

	WindowManager.prototype.createWindow.fromQuery = function (selector, options) {
		options.content = View(selector);
		return this.createWindow(options);
	};

	WindowManager.prototype.createWindow.fromElement = function (element, options) {
		options.content = View(element);
		return this.createWindow(options);
	};

	return WindowManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ });
});
//# sourceMappingURL=ventus.js.map