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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEl: () => (/* binding */ createEl),\n/* harmony export */   createHeading: () => (/* binding */ createHeading),\n/* harmony export */   createNavBar: () => (/* binding */ createNavBar)\n/* harmony export */ });\n// Create the title heading for each page\nfunction createHeading(heading) {\n    const main = document.querySelector('main');\n    const h1 = createEl('h1', heading, main);\n}\n\n// Create any element\nfunction createEl(el, text, parent, className) {\n    const element = document.createElement(el);\n    element.innerText = text;\n    element.classList.add(className)\n    parent.append(element);\n}\n\n// Create the website nav bar\nfunction createNavBar() {\n    const body = document.querySelector('body');\n    const navBar = document.createElement('nav');\n    const navList = document.createElement('ul');\n  \n    createEl('li', 'Home', navList, 'home');\n    createEl('li', 'Menu', navList, 'menu');\n    createEl('li', 'Contact', navList, 'contact');\n\n    navBar.append(navList);\n    return navBar;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/components.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact.js */ \"./src/pages/contact.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ \"./src/components.js\");\n\n\n\n\n\n\n// Initialize website with navbar and inital page\nfunction initializeWebsite() {\n    const header = document.createElement('header');\n    const navBar = (0,_components_js__WEBPACK_IMPORTED_MODULE_4__.createNavBar)();\n    header.append(navBar);\n    const main = document.createElement('main');\n    const body = document.querySelector('body');\n    body.append(header);\n    body.append(main);\n    (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\ninitializeWebsite();\n\n// Render page depending on nav bar item\nconst header = document.querySelector('header');\nheader.addEventListener(\"click\", (e) => {\n    // Get closest nav bar menu item\n    const target = e.target.closest('nav li');\n\n    if (target) {\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        target.classList.contains('home') ? (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n        : target.classList.contains('menu') ? (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n        : (0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n})\n\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components.js */ \"./src/components.js\");\n\n\n\n// All contact options\nconst contactOptions = {\n    Phone: '408-991-3934',\n    Email: 'ghiblidelights@gmail.com',\n    Address: '1730 Fox Drive, San Jose, California, 95131'\n}\n\n// Create a contact div for each method of contact\nfunction createContactOption(contactMethod, contact) {\n    const contactContainer = document.createElement('div');\n    contactContainer.classList.add('contact');\n\n    createEl('h2', contactMethod, contactContainer);\n    createEl('p', contact, contactContainer);\n\n    return contactContainer;\n}\n\n// Render contact page with all contact options\nfunction renderContact() {\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createHeading)('Contact Us');\n    const main = document.querySelector(\"main\");\n    Object.entries(contactOptions).forEach(([contactMethod, contact]) => {\n        main.append(createContactOption(contactMethod, contact));\n        console.log(contactMethod, contact)\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components.js */ \"./src/components.js\");\n\n\nfunction createHome() {\n    const content = document.querySelector('main');\n\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createEl)('h1', 'Ghibli Delights Cafe', content);\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createEl)('h2', 'Where your tastebuds are transported into the heartwarming scenes of Ghibli films', content);\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', 'Come experience the enchanting flavors of Studio Ghibli at Ghibli Delights Café. From the mouth-watering \\\"Ponyo Ramen\\\" to the sweet \\\"Kiki\\'s Delivery Service Pancakes,\\\" each dish is crafted with precision and love, capturing the essence of the studio\\'s enchanting storytelling.', content);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components.js */ \"./src/components.js\");\n\n\n\n\nconst menuItems = [{\n    dish: \"Ponyo's Ramen\",\n    movie: \"Ponyo\",\n    price: 17.50,\n    description: \"Love being human right now? Enjoy this shoyu ramen with green onions, ham, and topped with a perfectly soft boiled egg.\"\n}, \n{\n    dish: \"Kiki's Pancakes\", \n    movie: \"Kiki's Delivery Service\",\n    price: 12.50,\n    description: \"Down-on-your-luck? Indulge in these fluffy souffle pancakes paired with tomatoes and sausages and we promise you'll feel better soon!\"\n}, \n{\n    dish: \"Sophie's Breakfast Spread\", \n    movie: \"Howl's Moving Castle\",\n    price: 14.50,\n    description: \"Pan fried eggs and bacon with a side of toast, fresh fruit, and sausages. Calcifer was not harmed in the making.\"\n}, \n{\n    dish: \"Satsuki's Bento\", \n    movie: \"My Neighbor Totoro\",\n    price: 15.50,\n    description: \"Handmade with care, taste the love with this sushi rice bento. Includes pickled Japanese plum, shishamo, edamame and topped with sakura denbu.\"\n}, \n{\n    dish: \"Haku's Onigiri\", \n    movie: \"Spirited Away\",\n    price: 4.50,\n    description: \"Restore your strength with this onigiri and remember that you can overcome difficulties. Choices of salmon, tuna, and onigiri.\"\n}]\n\n// Would it be better to create a class for creating item containers? then extended classes for menu items/contacts?\nfunction createMenuItem(dish, movie, price, desc) {\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-item');\n\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createEl)('h2', dish, menuContainer);\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', movie, menuContainer);\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', price, menuContainer);\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createEl)('p', desc, menuContainer);\n\n    return menuContainer;\n}\n\nfunction renderMenu() {\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createHeading)(\"Menu\");\n    const main = document.querySelector(\"main\");\n    menuItems.forEach(item=> {\n        main.append(createMenuItem(item.dish, item.movie, item.price, item.description));\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/pages/menu.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./src/components.js\");\n\n\n// Clear page content\nfunction clearContent() {\n    const main = document.querySelector('main');\n    main.innerHTML = \"\";\n}\n\n// Reset page and render nav bar\nfunction resetPage() {\n    clearContent();\n    (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createNavBar)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetPage);\n\n//# sourceURL=webpack://restaurant-page-webpack/./src/utils.js?");

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