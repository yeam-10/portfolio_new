"use strict";
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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        const originalRenderPage = ctx.renderPage;\n        // Run the React rendering logic synchronously\n        ctx.renderPage = ()=>originalRenderPage({\n                // Useful for wrapping the whole react tree\n                enhanceApp: (App)=>App,\n                // Useful for wrapping in a per-page basis\n                enhanceComponent: (Component)=>Component\n            });\n        // Run the parent `getInitialProps`, it now includes the custom `renderPage`\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n        return initialProps;\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"My Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"/home/anyeimar/portfolio_new/pages/_document.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Anyeimar Requena\"\n                        }, void 0, false, {\n                            fileName: \"/home/anyeimar/portfolio_new/pages/_document.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css \"\n                        }, void 0, false, {\n                            fileName: \"/home/anyeimar/portfolio_new/pages/_document.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/anyeimar/portfolio_new/pages/_document.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/home/anyeimar/portfolio_new/pages/_document.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"/home/anyeimar/portfolio_new/pages/_document.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/anyeimar/portfolio_new/pages/_document.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/anyeimar/portfolio_new/pages/_document.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNFO0FBRXRFLE1BQU1LLG1CQUFtQkwsc0RBQVFBO0lBQzdCLGFBQWFNLGdCQUFnQkMsR0FBRyxFQUFFO1FBQzlCLE1BQU1DLHFCQUFxQkQsSUFBSUUsVUFBVTtRQUV6Qyw4Q0FBOEM7UUFDOUNGLElBQUlFLFVBQVUsR0FBRyxJQUNiRCxtQkFBbUI7Z0JBQ2YsMkNBQTJDO2dCQUMzQ0UsWUFBWSxDQUFDQyxNQUFRQTtnQkFDckIsMENBQTBDO2dCQUMxQ0Msa0JBQWtCLENBQUNDLFlBQWNBO1lBQ3JDO1FBRUosNEVBQTRFO1FBQzVFLE1BQU1DLGVBQWUsTUFBTWQsb0VBQXdCLENBQUNPO1FBRXBELE9BQU9PO0lBQ1g7SUFFQUMsU0FBUztRQUNMLHFCQUNJLDhEQUFDZCwrQ0FBSUE7WUFBQ2UsTUFBSzs7OEJBQ1AsOERBQUNkLCtDQUFJQTs7c0NBQ0QsOERBQUNlO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUFLQyxNQUFLOzRCQUFjQyxTQUFROzs7Ozs7c0NBQ2pDLDhEQUFDQzs0QkFBS0MsS0FBSTs0QkFBYUMsTUFBSzs7Ozs7Ozs7Ozs7OzhCQUdoQyw4REFBQ0M7O3NDQUNHLDhEQUFDckIsK0NBQUlBOzs7OztzQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUkzQjtBQUNKO0FBRUEsaUVBQWVDLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV3Ly4vcGFnZXMvX2RvY3VtZW50LmpzPzUzOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuXG5jbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlXG5cbiAgICAgICAgLy8gUnVuIHRoZSBSZWFjdCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseVxuICAgICAgICBjdHgucmVuZGVyUGFnZSA9ICgpID0+XG4gICAgICAgICAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3Igd3JhcHBpbmcgdGhlIHdob2xlIHJlYWN0IHRyZWVcbiAgICAgICAgICAgICAgICBlbmhhbmNlQXBwOiAoQXBwKSA9PiBBcHAsXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciB3cmFwcGluZyBpbiBhIHBlci1wYWdlIGJhc2lzXG4gICAgICAgICAgICAgICAgZW5oYW5jZUNvbXBvbmVudDogKENvbXBvbmVudCkgPT4gQ29tcG9uZW50LFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAvLyBSdW4gdGhlIHBhcmVudCBgZ2V0SW5pdGlhbFByb3BzYCwgaXQgbm93IGluY2x1ZGVzIHRoZSBjdXN0b20gYHJlbmRlclBhZ2VgXG4gICAgICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgICAgICAgcmV0dXJuIGluaXRpYWxQcm9wc1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TXkgUG9ydGZvbGlvPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkFueWVpbWFyIFJlcXVlbmFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL25wcm9ncmVzcy8wLjIuMC9ucHJvZ3Jlc3MuY3NzIFwiIC8+XG5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+IFxuICAgICAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICAgIDwvSHRtbD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDsiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiTXlEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJlbmhhbmNlQXBwIiwiQXBwIiwiZW5oYW5jZUNvbXBvbmVudCIsIkNvbXBvbmVudCIsImluaXRpYWxQcm9wcyIsInJlbmRlciIsImxhbmciLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();