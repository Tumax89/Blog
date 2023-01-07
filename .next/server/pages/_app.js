/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var highlight_js_styles_agate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/styles/agate.css */ \"./node_modules/highlight.js/styles/agate.css\");\n/* harmony import */ var highlight_js_styles_agate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_agate_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst fetcher = async (url)=>{\n    const res = await fetch(url);\n    // If the status code is not in the range 200-299,\n    // we still try to parse and throw it.\n    if (!res.ok) {\n        const error = new Error(\"An error occurred while fetching the data.\");\n        // Attach extra info to the error object.\n        error.info = await res.json();\n        error.status = res.status;\n        throw error;\n    }\n    return res.json();\n};\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_4__.SWRConfig, {\n        value: {\n            refreshInterval: 3000,\n            fetcher,\n            onError: (error, key)=>{\n                if (error.status !== 403 && error.status !== 404) {\n                // We can send the error to Sentry,\n                // or show a notification UI.\n                // alert(\"Алдаа\");\n                }\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/dugertulga/Documents/GitHub/blog/pages/_app.js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dugertulga/Documents/GitHub/blog/pages/_app.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMkI7QUFDbUI7QUFDUDtBQUNQO0FBRWhDLE1BQU1DLFVBQVUsT0FBT0MsTUFBUTtJQUM3QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO0lBRXhCLGtEQUFrRDtJQUNsRCxzQ0FBc0M7SUFDdEMsSUFBSSxDQUFDQyxJQUFJRSxFQUFFLEVBQUU7UUFDWCxNQUFNQyxRQUFRLElBQUlDLE1BQU07UUFDeEIseUNBQXlDO1FBQ3pDRCxNQUFNRSxJQUFJLEdBQUcsTUFBTUwsSUFBSU0sSUFBSTtRQUMzQkgsTUFBTUksTUFBTSxHQUFHUCxJQUFJTyxNQUFNO1FBQ3pCLE1BQU1KLE1BQU07SUFDZCxDQUFDO0lBRUQsT0FBT0gsSUFBSU0sSUFBSTtBQUNqQjtBQUVBLFNBQVNFLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ2IsMENBQVNBO1FBQ1JjLE9BQU87WUFDTEMsaUJBQWlCO1lBQ2pCZDtZQUNBZSxTQUFTLENBQUNWLE9BQU9XLE1BQVE7Z0JBQ3ZCLElBQUlYLE1BQU1JLE1BQU0sS0FBSyxPQUFPSixNQUFNSSxNQUFNLEtBQUssS0FBSztnQkFDaEQsbUNBQW1DO2dCQUNuQyw2QkFBNkI7Z0JBQzdCLGtCQUFrQjtnQkFDcEIsQ0FBQztZQUNIO1FBQ0Y7a0JBRUEsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwic3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9hZ2F0ZS5jc3NcIjtcbmltcG9ydCB7IFNXUkNvbmZpZyB9IGZyb20gXCJzd3JcIjtcblxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICh1cmwpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICAvLyBJZiB0aGUgc3RhdHVzIGNvZGUgaXMgbm90IGluIHRoZSByYW5nZSAyMDAtMjk5LFxuICAvLyB3ZSBzdGlsbCB0cnkgdG8gcGFyc2UgYW5kIHRocm93IGl0LlxuICBpZiAoIXJlcy5vaykge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGEuXCIpO1xuICAgIC8vIEF0dGFjaCBleHRyYSBpbmZvIHRvIHRoZSBlcnJvciBvYmplY3QuXG4gICAgZXJyb3IuaW5mbyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgZXJyb3Iuc3RhdHVzID0gcmVzLnN0YXR1cztcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIHJldHVybiByZXMuanNvbigpO1xufTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFNXUkNvbmZpZ1xuICAgICAgdmFsdWU9e3tcbiAgICAgICAgcmVmcmVzaEludGVydmFsOiAzMDAwLFxuICAgICAgICBmZXRjaGVyLFxuICAgICAgICBvbkVycm9yOiAoZXJyb3IsIGtleSkgPT4ge1xuICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgIT09IDQwMyAmJiBlcnJvci5zdGF0dXMgIT09IDQwNCkge1xuICAgICAgICAgICAgLy8gV2UgY2FuIHNlbmQgdGhlIGVycm9yIHRvIFNlbnRyeSxcbiAgICAgICAgICAgIC8vIG9yIHNob3cgYSBub3RpZmljYXRpb24gVUkuXG4gICAgICAgICAgICAvLyBhbGVydChcItCQ0LvQtNCw0LBcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9TV1JDb25maWc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlNXUkNvbmZpZyIsImZldGNoZXIiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsIm9rIiwiZXJyb3IiLCJFcnJvciIsImluZm8iLCJqc29uIiwic3RhdHVzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ2YWx1ZSIsInJlZnJlc2hJbnRlcnZhbCIsIm9uRXJyb3IiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/highlight.js/styles/agate.css":
/*!****************************************************!*\
  !*** ./node_modules/highlight.js/styles/agate.css ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();