/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPageSetup: () => (/* binding */ aboutPageSetup)\n/* harmony export */ });\nfunction aboutPageSetup() {\n  const contentDiv = document.querySelector(\"div#content\");\n  // clear contentDiv\n  contentDiv.textContent = \"\";\n  // about header\n  const aboutHeader = document.createElement(\"h1\");\n  aboutHeader.textContent =\n    \"This is the about header! Use this space to talk about the history of the restaurant!!!\";\n  contentDiv.appendChild(aboutHeader);\n\n  // mission statement\n  const missionStatement = document.createElement(\"p\");\n  missionStatement.textContent = \"MISSION STATEMENT\";\n  contentDiv.appendChild(missionStatement);\n\n  // our team\n  const ourTeam = document.createElement(\"p\");\n  ourTeam.textContent = \"OUR TEAM\";\n  contentDiv.appendChild(ourTeam);\n  // profile pic, name, position\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXRQYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Fib3V0UGFnZS5qcz9hM2MzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhYm91dFBhZ2VTZXR1cCgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcbiAgLy8gY2xlYXIgY29udGVudERpdlxuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgLy8gYWJvdXQgaGVhZGVyXG4gIGNvbnN0IGFib3V0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBhYm91dEhlYWRlci50ZXh0Q29udGVudCA9XG4gICAgXCJUaGlzIGlzIHRoZSBhYm91dCBoZWFkZXIhIFVzZSB0aGlzIHNwYWNlIHRvIHRhbGsgYWJvdXQgdGhlIGhpc3Rvcnkgb2YgdGhlIHJlc3RhdXJhbnQhISFcIjtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChhYm91dEhlYWRlcik7XG5cbiAgLy8gbWlzc2lvbiBzdGF0ZW1lbnRcbiAgY29uc3QgbWlzc2lvblN0YXRlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtaXNzaW9uU3RhdGVtZW50LnRleHRDb250ZW50ID0gXCJNSVNTSU9OIFNUQVRFTUVOVFwiO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1pc3Npb25TdGF0ZW1lbnQpO1xuXG4gIC8vIG91ciB0ZWFtXG4gIGNvbnN0IG91clRlYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgb3VyVGVhbS50ZXh0Q29udGVudCA9IFwiT1VSIFRFQU1cIjtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChvdXJUZWFtKTtcbiAgLy8gcHJvZmlsZSBwaWMsIG5hbWUsIHBvc2l0aW9uXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/aboutPage.js\n");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePageSetup: () => (/* binding */ homePageSetup)\n/* harmony export */ });\n/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurant.jpg */ \"./src/assets/restaurant.jpg\");\n// initial page-layout setup module\n\n\nfunction homePageSetup() {\n  const contentDiv = document.querySelector(\"div#content\");\n  contentDiv.textContent = \"\";\n\n  const img = document.createElement(\"img\");\n  img.src = _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  contentDiv.appendChild(img);\n\n  const headline = document.createElement(\"h1\");\n  headline.textContent = \"Welcome to our Fancy Restaurant!\";\n  contentDiv.appendChild(headline);\n\n  const description = document.createElement(\"p\");\n  description.textContent = \"blah blah blah this is description text\";\n  contentDiv.appendChild(description);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZVBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNvRDs7QUFFN0M7QUFDUDtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtREFBYTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaG9tZVBhZ2UuanM/OWExMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbml0aWFsIHBhZ2UtbGF5b3V0IHNldHVwIG1vZHVsZVxuaW1wb3J0IHJlc3RhdXJhbnRJbWcgZnJvbSBcIi4vYXNzZXRzL3Jlc3RhdXJhbnQuanBnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZVNldHVwKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc3JjID0gcmVzdGF1cmFudEltZztcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBvdXIgRmFuY3kgUmVzdGF1cmFudCFcIjtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcImJsYWggYmxhaCBibGFoIHRoaXMgaXMgZGVzY3JpcHRpb24gdGV4dFwiO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/homePage.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aboutPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutPage.js */ \"./src/aboutPage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n\n\n\n\n(0,_homePage_js__WEBPACK_IMPORTED_MODULE_2__.homePageSetup)();\n\n// tab switching logic\n// when button clicked, clear content and fill with other tab\nconst homeBtn = document.querySelector(\"#home-btn\");\nhomeBtn.addEventListener(\"click\", _homePage_js__WEBPACK_IMPORTED_MODULE_2__.homePageSetup);\n\nconst menuBtn = document.querySelector(\"#menu-btn\");\nmenuBtn.addEventListener(\"click\", _menuPage_js__WEBPACK_IMPORTED_MODULE_1__.menuPageSetup);\n\nconst aboutBtn = document.querySelector(\"#about-btn\");\naboutBtn.addEventListener(\"click\", _aboutPage_js__WEBPACK_IMPORTED_MODULE_0__.aboutPageSetup);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFnRDtBQUNGO0FBQ0E7O0FBRTlDLDJEQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1REFBYTs7QUFFL0M7QUFDQSxrQ0FBa0MsdURBQWE7O0FBRS9DO0FBQ0EsbUNBQW1DLHlEQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWJvdXRQYWdlU2V0dXAgfSBmcm9tIFwiLi9hYm91dFBhZ2UuanNcIjtcbmltcG9ydCB7IG1lbnVQYWdlU2V0dXAgfSBmcm9tIFwiLi9tZW51UGFnZS5qc1wiO1xuaW1wb3J0IHsgaG9tZVBhZ2VTZXR1cCB9IGZyb20gXCIuL2hvbWVQYWdlLmpzXCI7XG5cbmhvbWVQYWdlU2V0dXAoKTtcblxuLy8gdGFiIHN3aXRjaGluZyBsb2dpY1xuLy8gd2hlbiBidXR0b24gY2xpY2tlZCwgY2xlYXIgY29udGVudCBhbmQgZmlsbCB3aXRoIG90aGVyIHRhYlxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZS1idG5cIik7XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lUGFnZVNldHVwKTtcblxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idG5cIik7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51UGFnZVNldHVwKTtcblxuY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0LWJ0blwiKTtcbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhYm91dFBhZ2VTZXR1cCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPageSetup: () => (/* binding */ menuPageSetup)\n/* harmony export */ });\nfunction menuPageSetup() {\n  const contentDiv = document.querySelector(\"div#content\");\n  // clear contentDiv\n  contentDiv.textContent = \"\";\n  // menu header\n  const menuHeader = document.createElement(\"h1\");\n  menuHeader.textContent = \"MENU HEADER\";\n  contentDiv.append(menuHeader);\n  // menuItemList\n  const menuItemList = document.createElement(\"ul\");\n  contentDiv.append(menuItemList);\n  // menuItems\n  // each item has a img, name, price, ingredients\n  const menuItem = document.createElement(\"li\");\n  menuItem.textContent = \"THIS IS A MENU ITEM (CHICKEN PARM)\";\n  menuItemList.appendChild(menuItem);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudVBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbWVudVBhZ2UuanM/MzYyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbWVudVBhZ2VTZXR1cCgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcbiAgLy8gY2xlYXIgY29udGVudERpdlxuICBjb250ZW50RGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgLy8gbWVudSBoZWFkZXJcbiAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiTUVOVSBIRUFERVJcIjtcbiAgY29udGVudERpdi5hcHBlbmQobWVudUhlYWRlcik7XG4gIC8vIG1lbnVJdGVtTGlzdFxuICBjb25zdCBtZW51SXRlbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kKG1lbnVJdGVtTGlzdCk7XG4gIC8vIG1lbnVJdGVtc1xuICAvLyBlYWNoIGl0ZW0gaGFzIGEgaW1nLCBuYW1lLCBwcmljZSwgaW5ncmVkaWVudHNcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIG1lbnVJdGVtLnRleHRDb250ZW50ID0gXCJUSElTIElTIEEgTUVOVSBJVEVNIChDSElDS0VOIFBBUk0pXCI7XG4gIG1lbnVJdGVtTGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menuPage.js\n");

/***/ }),

/***/ "./src/assets/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/assets/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad43cd4fead0348d2557.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;