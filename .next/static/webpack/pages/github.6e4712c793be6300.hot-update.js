"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children, title, footer = true, dark = false } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleRouteChange = (url)=>{\n        console.log(url);\n        nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({\n            \"bg-dark\": dark,\n            \"bg-ligh\": !dark\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/anyeimar/portfolio_new/components/Layout.js\",\n                lineNumber: 33,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4\",\n                children: [\n                    title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(\"text-center\", {\n                            \"text-light\": dark\n                        }),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/anyeimar/portfolio_new/components/Layout.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anyeimar/portfolio_new/components/Layout.js\",\n                lineNumber: 35,\n                columnNumber: 1\n            }, undefined),\n            footer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-4 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\xa9 Anyeimar Requena portfolio\"\n                        }, void 0, false, {\n                            fileName: \"/home/anyeimar/portfolio_new/components/Layout.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \" 2017- \",\n                                new Date().getFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/anyeimar/portfolio_new/components/Layout.js\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"All rights Reserverd.\"\n                        }, void 0, false, {\n                            fileName: \"/home/anyeimar/portfolio_new/components/Layout.js\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/anyeimar/portfolio_new/components/Layout.js\",\n                    lineNumber: 50,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/anyeimar/portfolio_new/components/Layout.js\",\n                lineNumber: 49,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anyeimar/portfolio_new/components/Layout.js\",\n        lineNumber: 31,\n        columnNumber: 1\n    }, undefined);\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNUO0FBQ0k7QUFDQTtBQUNDO0FBRW5DLE1BQU9LLFNBQVM7UUFBQyxFQUFFQyxRQUFRLEVBQUdDLEtBQUssRUFBRUMsU0FBUyxJQUFJLEVBQUVDLE9BQU0sS0FBSyxFQUFDOztJQUU1RCxNQUFNQyxTQUFTVixzREFBU0E7SUFFeEIsTUFBTVcsb0JBQW9CQyxDQUFBQTtRQUN0QkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaVCxzREFBZTtJQUNuQjtJQUVBRCxnREFBU0EsQ0FBQztRQUNOUSxPQUFPTSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0JOO1FBRXJDRCxPQUFPTSxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUIsSUFBTWQscURBQWM7UUFHNUQsT0FBTztZQUNITyxPQUFPTSxNQUFNLENBQUNHLEdBQUcsQ0FBQyxvQkFBb0JSO1FBQzFDO0lBRUosR0FBRSxFQUFFO0lBRU4scUJBR0YsOERBQUNTO1FBQUlDLFdBQVdqQixpREFBVUEsQ0FBQztZQUFDLFdBQVdLO1lBQU0sV0FBVyxDQUFFQTtRQUFJOzswQkFFOUQsOERBQUNSLCtDQUFNQTs7Ozs7MEJBRVAsOERBQUNxQjtnQkFBTUQsV0FBVTs7b0JBRWhCZCx1QkFDTyw4REFBQ2dCO3dCQUFHRixXQUFXakIsaURBQVVBLENBQUMsZUFBZTs0QkFBQyxjQUFjSzt3QkFBSTtrQ0FDdkRGOzs7Ozs7b0JBR1hEOzs7Ozs7O1lBS0VFLHdCQUVKLDhEQUFDQTtnQkFBT2EsV0FBVTswQkFDZCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRTtzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQzs7Z0NBQUU7Z0NBQVEsSUFBSUMsT0FBT0MsV0FBVzs7Ozs7OztzQ0FDakMsOERBQUNGO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVWO0dBN0RNbkI7O1FBRVlMLGtEQUFTQTs7O0tBRnJCSztBQWdFTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcbmltcG9ydCBDbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmNvbnN0ICBMYXlvdXQgPSAoeyBjaGlsZHJlbiAsIHRpdGxlLCBmb290ZXIgPSB0cnVlLCBkYXJrPSBmYWxzZX0pICA9PiAgICAgeyBcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlciAoKTtcblxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gdXJsID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codXJsKVxuICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICBcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuICBcbiAgXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgICAgICB9XG4gICAgXG4gICAgfSxbXSkgXG5cbiAgcmV0dXJuIChcblxuICAgXG48ZGl2IGNsYXNzTmFtZT17Q2xhc3NuYW1lcyh7J2JnLWRhcmsnOiBkYXJrLCAnYmctbGlnaCc6ICEgZGFya30pfT5cblxuPE5hdmJhci8+XG5cbjxtYWluICBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNFwiPlxuXG57dGl0bGUgJiYoXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e0NsYXNzbmFtZXMoJ3RleHQtY2VudGVyJywgeyd0ZXh0LWxpZ2h0JzogZGFya30pfT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMT4gICAgXG4gICAgKX1cbnsgY2hpbGRyZW4gfVxuXG48L21haW4+XG5cbntcbiAgICBmb290ZXIgJiYgKFxuXG48Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1saWdodCB0ZXh0LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNCBcIj5cbiAgICAgICAgPGgxPiZjb3B5OyBBbnllaW1hciBSZXF1ZW5hIHBvcnRmb2xpbzwvaDE+XG4gICAgICAgIDxwPiAyMDE3LSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvcD5cbiAgICAgICAgPHA+QWxsIHJpZ2h0cyBSZXNlcnZlcmQuPC9wPlxuICAgIDwvZGl2PlxuXG48L2Zvb3Rlcj5cbiAgICApXG59XG5cblxuPC9kaXY+XG5cblxuICApXG5cblxuXG4gfVxuXG5cbiBleHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJ1c2VFZmZlY3QiLCJOUHJvZ3Jlc3MiLCJDbGFzc25hbWVzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImZvb3RlciIsImRhcmsiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsImV2ZW50cyIsIm9uIiwiZG9uZSIsIm9mZiIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsInAiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});