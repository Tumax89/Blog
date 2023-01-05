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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var highlight_js_styles_a11y_dark_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/styles/a11y-dark.css */ \"./node_modules/highlight.js/styles/a11y-dark.css\");\n/* harmony import */ var highlight_js_styles_a11y_dark_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_a11y_dark_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__]);\nswr__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst fetcher = async (url)=>{\n    const res = await fetch(url);\n    // If the status code is not in the range 200-299,\n    // we still try to parse and throw it.\n    if (!res.ok) {\n        const error = new Error(\"An error occurred while fetching the data.\");\n        // Attach extra info to the error object.\n        error.info = await res.json();\n        error.status = res.status;\n        throw error;\n    }\n    return res.json();\n};\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_4__.SWRConfig, {\n        value: {\n            refreshInterval: 3000,\n            fetcher,\n            onError: (error, key)=>{\n                if (error.status !== 403 && error.status !== 404) {\n                // We can send the error to Sentry,\n                // or show a notification UI.\n                }\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/dugertulga/Documents/GitHub/blog/pages/_app.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dugertulga/Documents/GitHub/blog/pages/_app.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEyQjtBQUNtQjtBQUNIO0FBQ1g7QUFFaEMsTUFBTUMsVUFBVSxPQUFPQyxNQUFRO0lBQzdCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUY7SUFFeEIsa0RBQWtEO0lBQ2xELHNDQUFzQztJQUN0QyxJQUFJLENBQUNDLElBQUlFLEVBQUUsRUFBRTtRQUNYLE1BQU1DLFFBQVEsSUFBSUMsTUFBTTtRQUN4Qix5Q0FBeUM7UUFDekNELE1BQU1FLElBQUksR0FBRyxNQUFNTCxJQUFJTSxJQUFJO1FBQzNCSCxNQUFNSSxNQUFNLEdBQUdQLElBQUlPLE1BQU07UUFDekIsTUFBTUosTUFBTTtJQUNkLENBQUM7SUFFRCxPQUFPSCxJQUFJTSxJQUFJO0FBQ2pCO0FBRUEsU0FBU0UsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDYiwwQ0FBU0E7UUFDUmMsT0FBTztZQUNMQyxpQkFBaUI7WUFDakJkO1lBQ0FlLFNBQVMsQ0FBQ1YsT0FBT1csTUFBUTtnQkFDdkIsSUFBSVgsTUFBTUksTUFBTSxLQUFLLE9BQU9KLE1BQU1JLE1BQU0sS0FBSyxLQUFLO2dCQUNoRCxtQ0FBbUM7Z0JBQ25DLDZCQUE2QjtnQkFDL0IsQ0FBQztZQUNIO1FBQ0Y7a0JBRUEsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwic3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9hMTF5LWRhcmsuY3NzXCI7XG5pbXBvcnQgeyBTV1JDb25maWcgfSBmcm9tIFwic3dyXCI7XG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgLy8gSWYgdGhlIHN0YXR1cyBjb2RlIGlzIG5vdCBpbiB0aGUgcmFuZ2UgMjAwLTI5OSxcbiAgLy8gd2Ugc3RpbGwgdHJ5IHRvIHBhcnNlIGFuZCB0aHJvdyBpdC5cbiAgaWYgKCFyZXMub2spIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHRoZSBkYXRhLlwiKTtcbiAgICAvLyBBdHRhY2ggZXh0cmEgaW5mbyB0byB0aGUgZXJyb3Igb2JqZWN0LlxuICAgIGVycm9yLmluZm8gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGVycm9yLnN0YXR1cyA9IHJlcy5zdGF0dXM7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICByZXR1cm4gcmVzLmpzb24oKTtcbn07XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxTV1JDb25maWdcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHJlZnJlc2hJbnRlcnZhbDogMzAwMCxcbiAgICAgICAgZmV0Y2hlcixcbiAgICAgICAgb25FcnJvcjogKGVycm9yLCBrZXkpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzICE9PSA0MDMgJiYgZXJyb3Iuc3RhdHVzICE9PSA0MDQpIHtcbiAgICAgICAgICAgIC8vIFdlIGNhbiBzZW5kIHRoZSBlcnJvciB0byBTZW50cnksXG4gICAgICAgICAgICAvLyBvciBzaG93IGEgbm90aWZpY2F0aW9uIFVJLlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvU1dSQ29uZmlnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJTV1JDb25maWciLCJmZXRjaGVyIiwidXJsIiwicmVzIiwiZmV0Y2giLCJvayIsImVycm9yIiwiRXJyb3IiLCJpbmZvIiwianNvbiIsInN0YXR1cyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidmFsdWUiLCJyZWZyZXNoSW50ZXJ2YWwiLCJvbkVycm9yIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/highlight.js/styles/a11y-dark.css":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/styles/a11y-dark.css ***!
  \********************************************************/
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
module.exports = import("swr");;

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