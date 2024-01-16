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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad.js */ \"./src/onLoad.js\");\n/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact.js */ \"./src/pages/contact.js\");\n\n\n\n(0,_onLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconsole.log(\"Webpack succeeded\")\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/index.js?");

/***/ }),

/***/ "./src/onLoad.js":
/*!***********************!*\
  !*** ./src/onLoad.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const content = document.querySelector('body');\n\n    const h1 = document.createElement('h1');\n    h1.innerText = 'Ghibli Delights Cafe';\n\n    const h2 = document.createElement('h2');\n    h2.innerText = 'Where your tastebuds are transported into the heartwarming scenes of Ghibli films';\n\n    const description = document.createElement('p')\n    description.innerText = 'Come experience the enchanting flavors of Studio Ghibli at Ghibli Delights Café. From the mouth-watering \\\"Ponyo Ramen\\\" to the sweet \\\"Kiki\\'s Delivery Service Pancakes,\\\" each dish is crafted with precision and love, capturing the essence of the studio\\'s enchanting storytelling.'\n\n    content.append(h1);\n    content.append(h2);\n    content.append(description);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/onLoad.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n// All contact options\nconst contactOptions = {\n    Phone: '408-991-3934',\n    Email: 'ghiblidelights@gmail.com',\n    Address: '1730 Fox Drive, San Jose, California, 95131'\n}\n\n// Create a contact div for each method of contact\n// Debate whether to turn into a class\nfunction createContactOption(contactMethod, contact) {\n    const contactContainer = document.createElement('div');\n    contactContainer.classList.add('contact');\n\n    const h2 = document.createElement('h2');\n    h2.innerText = contactMethod;\n    contactContainer.append(h2)\n\n    const description = document.createElement('p');\n    description.innerText = contact;\n    contactContainer.append(description);\n\n    return contactContainer;\n}\n// Render contact page\nfunction renderContact() {\n    // this might be better as another function\n    const h1 = document.createElement('h1');\n    h1.innerText = 'Contact Us';\n    const body = document.querySelector('body');\n    body.append(h1);\n    Object.entries(contactOptions).forEach(([contactMethod, contact]) => {\n        body.append(createContactOption(contactMethod, contact));\n        console.log(contactMethod, contact)\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/pages/contact.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;