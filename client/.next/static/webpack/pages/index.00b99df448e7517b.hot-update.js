"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./containers/Rooms.tsx":
/*!******************************!*\
  !*** ./containers/Rooms.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_socket_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/socket.context */ \"./context/socket.context.tsx\");\n\n\n\nvar _s = $RefreshSig$();\nfunction RoomsContainer() {\n    _s();\n    var ref = (0,_context_socket_context__WEBPACK_IMPORTED_MODULE_2__.useSocket)(), socket = ref.socket, roomId = ref.roomId, rooms = ref.rooms;\n    var newRoom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var handleCreateRoom = function() {\n        // Get room name\n        var roomName = newRoom.current.value || '';\n    // Set Room\n    // Clear Room Name from input\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Please enter your name\",\n                    ref: newRoom\n                }, void 0, false, {\n                    fileName: \"/Users/ramtml/Desktop/ReactLearning/nodechat/client/containers/Rooms.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleCreateRoom,\n                    children: \"Create Room\"\n                }, void 0, false, {\n                    fileName: \"/Users/ramtml/Desktop/ReactLearning/nodechat/client/containers/Rooms.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ramtml/Desktop/ReactLearning/nodechat/client/containers/Rooms.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ramtml/Desktop/ReactLearning/nodechat/client/containers/Rooms.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n}\n_s(RoomsContainer, \"H0JRVVFGnnXmnLlQWDVXDrhB+KA=\", false, function() {\n    return [\n        _context_socket_context__WEBPACK_IMPORTED_MODULE_2__.useSocket\n    ];\n});\n_c = RoomsContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomsContainer);\nvar _c;\n$RefreshReg$(_c, \"RoomsContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXJzL1Jvb21zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThCO0FBQ3VCOztTQUU1Q0UsY0FBYyxHQUFHLENBQUM7O0lBQ3pCLEdBQUssQ0FBNkJELEdBQVcsR0FBWEEsa0VBQVMsSUFBbkNFLE1BQU0sR0FBb0JGLEdBQVcsQ0FBckNFLE1BQU0sRUFBRUMsTUFBTSxHQUFZSCxHQUFXLENBQTdCRyxNQUFNLEVBQUVDLEtBQUssR0FBS0osR0FBVyxDQUFyQkksS0FBSztJQUM3QixHQUFLLENBQUNDLE9BQU8sR0FBR04sNkNBQU0sQ0FBQyxJQUFJO0lBQzNCLEdBQUssQ0FBQ08sZ0JBQWdCLEdBQUcsUUFDM0IsR0FEaUMsQ0FBQztRQUM5QixFQUFnQjtRQUNoQixHQUFLLENBQUNDLFFBQVEsR0FBR0YsT0FBTyxDQUFDRyxPQUFPLENBQUNDLEtBQUssSUFBSSxDQUFFO0lBQzVDLEVBQVc7SUFDWCxFQUE2QjtJQUMvQixDQUFDO0lBQ0QsTUFBTSw2RUFDSEMsQ0FBRzs4RkFDREMsQ0FBRzs7NEZBQ0RDLENBQUs7b0JBQUNDLElBQUksRUFBQyxDQUFNO29CQUFDQyxXQUFXLEVBQUMsQ0FBd0I7b0JBQUNDLEdBQUcsRUFBRVYsT0FBTzs7Ozs7OzRGQUNuRVcsQ0FBTTtvQkFBQ0MsT0FBTyxFQUFFWCxnQkFBZ0I7OEJBQUUsQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEQsQ0FBQztHQWpCUUwsY0FBYzs7UUFDYUQsOERBQVM7OztLQURwQ0MsY0FBYztBQWtCdkIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL1Jvb21zLnRzeD9iNmMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNvY2tldCB9IGZyb20gJy4uL2NvbnRleHQvc29ja2V0LmNvbnRleHQnO1xuXG5mdW5jdGlvbiBSb29tc0NvbnRhaW5lcigpIHtcbiAgY29uc3QgeyBzb2NrZXQsIHJvb21JZCwgcm9vbXMgfSA9IHVzZVNvY2tldCgpO1xuICBjb25zdCBuZXdSb29tID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBoYW5kbGVDcmVhdGVSb29tID0gKCkgPT4ge1xuICAgIC8vIEdldCByb29tIG5hbWVcbiAgICBjb25zdCByb29tTmFtZSA9IG5ld1Jvb20uY3VycmVudC52YWx1ZSB8fCAnJztcbiAgICAvLyBTZXQgUm9vbVxuICAgIC8vIENsZWFyIFJvb20gTmFtZSBmcm9tIGlucHV0XG4gIH07XG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZVwiIHJlZj17bmV3Um9vbX0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDcmVhdGVSb29tfT5DcmVhdGUgUm9vbTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBSb29tc0NvbnRhaW5lcjtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTb2NrZXQiLCJSb29tc0NvbnRhaW5lciIsInNvY2tldCIsInJvb21JZCIsInJvb21zIiwibmV3Um9vbSIsImhhbmRsZUNyZWF0ZVJvb20iLCJyb29tTmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsIm5hdiIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVmIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/Rooms.tsx\n");

/***/ })

});