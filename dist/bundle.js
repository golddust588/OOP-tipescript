/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Logger.ts":
/*!***********************!*\
  !*** ./src/Logger.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Logger: () => (/* binding */ Logger)\n/* harmony export */ });\nvar Logger = /** @class */ (function () {\n    function Logger() {\n        this.messages = [];\n    }\n    Logger.getInstance = function () {\n        if (!Logger.instance) {\n            Logger.instance = new Logger();\n        }\n        return Logger.instance;\n    };\n    Logger.prototype.log = function (messege) {\n        console.log(messege);\n        this.messages.push(messege);\n        console.log(this.messages); // for testing\n    };\n    return Logger;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/Logger.ts?");

/***/ }),

/***/ "./src/Zookeeper.ts":
/*!**************************!*\
  !*** ./src/Zookeeper.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Zookeeper: () => (/* binding */ Zookeeper)\n/* harmony export */ });\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ \"./src/Logger.ts\");\n\nvar Zookeeper = /** @class */ (function () {\n    function Zookeeper() {\n        this.timeNow = new Date();\n    }\n    Zookeeper.prototype.feed = function (animal) {\n        var logger = _Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.getInstance();\n        logger.log(\"\".concat(animal, \" was fed at \").concat(this.getTime(this.timeNow)));\n    };\n    Zookeeper.prototype.getTime = function (timeNow) {\n        var hours = timeNow.getHours();\n        var minutes = timeNow.getMinutes();\n        var seconds = timeNow.getSeconds();\n        return \"time: \".concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n    };\n    return Zookeeper;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/Zookeeper.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Zookeeper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Zookeeper */ \"./src/Zookeeper.ts\");\n\nvar zookeeper = new _Zookeeper__WEBPACK_IMPORTED_MODULE_0__.Zookeeper();\nzookeeper.feed(\"elephant\");\nzookeeper.feed(\"tiger\");\nzookeeper.feed(\"zebra\");\n\n\n//# sourceURL=webpack://wbepack-setup/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;