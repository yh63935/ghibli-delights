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

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEl: () => (/* binding */ createEl),\n/* harmony export */   createHeading: () => (/* binding */ createHeading)\n/* harmony export */ });\nfunction createHeading(heading) {\n    const h1 = createEl('h1', heading);\n    const body = document.querySelector('body');\n    body.append(h1);\n}\n\nfunction createEl(el, text, className) {\n    const element = document.createElement(el);\n    element.innerText = text;\n    element.classList.add(className)\n    return element;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/components.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad.js */ \"./src/onLoad.js\");\n/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact.js */ \"./src/pages/contact.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n\n\n\n\n(0,_onLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconsole.log(\"Webpack succeeded\")\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/index.js?");

/***/ }),

/***/ "./src/onLoad.js":
/*!***********************!*\
  !*** ./src/onLoad.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./src/components.js\");\n\n\nfunction createHome() {\n    const content = document.querySelector('body');\n\n    const h1 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createEl)('h1', 'Ghibli Delights Cafe');\n    const h2 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createEl)('h2', 'Where your tastebuds are transported into the heartwarming scenes of Ghibli films');\n    const description = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'Come experience the enchanting flavors of Studio Ghibli at Ghibli Delights Café. From the mouth-watering \\\"Ponyo Ramen\\\" to the sweet \\\"Kiki\\'s Delivery Service Pancakes,\\\" each dish is crafted with precision and love, capturing the essence of the studio\\'s enchanting storytelling.');\n    \n    content.append(h1);\n    content.append(h2);\n    content.append(description);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/onLoad.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components.js */ \"./src/components.js\");\n\n\n\n// All contact options\nconst contactOptions = {\n    Phone: '408-991-3934',\n    Email: 'ghiblidelights@gmail.com',\n    Address: '1730 Fox Drive, San Jose, California, 95131'\n}\n\n// Create a contact div for each method of contact\n// Debate whether to turn into a class\nfunction createContactOption(contactMethod, contact) {\n    const contactContainer = document.createElement('div');\n    contactContainer.classList.add('contact');\n\n    const h2 = document.createElement('h2');\n    h2.innerText = contactMethod;\n    contactContainer.append(h2)\n\n    const description = document.createElement('p');\n    description.innerText = contact;\n    contactContainer.append(description);\n\n    return contactContainer;\n}\n// Render contact page\nfunction renderContact() {\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createHeading)('Contact Us');\n    const body = document.querySelector(\"body\");\n    Object.entries(contactOptions).forEach(([contactMethod, contact]) => {\n        body.append(createContactOption(contactMethod, contact));\n        console.log(contactMethod, contact)\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components.js */ \"./src/components.js\");\n\n\nconst menuItems = [{\n    dish: \"Ponyo's Ramen\",\n    movie: \"Ponyo\",\n    price: 17.50,\n    description: \"Love being human right now? Enjoy this shoyu ramen with green onions, ham, and topped with a perfectly soft boiled egg.\"\n}, \n{\n    dish: \"Kiki's Pancakes\", \n    movie: \"Kiki's Delivery Service\",\n    price: 12.50,\n    description: \"Down-on-your-luck? Indulge in these fluffy souffle pancakes paired with tomatoes and sausages and we promise you'll feel better soon!\"\n}, \n{\n    dish: \"Sophie's Breakfast Spread\", \n    movie: \"Howl's Moving Castle\",\n    price: 14.50,\n    description: \"Pan fried eggs and bacon with a side of toast, fresh fruit, and sausages. Calcifer was not harmed in the making.\"\n}, \n{\n    dish: \"Satsuki's Bento\", \n    movie: \"My Neighbor Totoro\",\n    price: 15.50,\n    description: \"Handmade with care, taste the love with this sushi rice bento. Includes pickled Japanese plum, shishamo, edamame and topped with sakura denbu.\"\n}, \n{\n    dish: \"Haku's Onigiri\", \n    movie: \"Spirited Away\",\n    price: 4.50,\n    description: \"Restore your strength with this onigiri and remember that you can overcome difficulties. Choices of salmon, tuna, and onigiri.\"\n}]\n\n// Would it be better to create a class for creating item containers? then extended classes for menu items/contacts?\nfunction createMenuItem(dish, movie, price, desc) {\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-item');\n\n    const h2 = document.createElement('h2');\n    h2.innerText = dish;\n    menuContainer.append(h2)\n\n    const movieTitle = document.createElement('p');\n    movieTitle.innerText = movie;\n    menuContainer.append(movieTitle);\n\n    const pricing = document.createElement('p');\n    pricing.innerText = price;\n    menuContainer.append(price);\n\n    const description = document.createElement('p');\n    description.innerText = desc;\n    menuContainer.append(description);\n\n    return menuContainer;\n}\n\nfunction renderMenu() {\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createHeading)(\"Menu\");\n    const body = document.querySelector(\"body\");\n    menuItems.forEach(item=> {\n        body.append(createMenuItem(item.dish, item.movie, item.price, item.description));\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/pages/menu.js?");

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