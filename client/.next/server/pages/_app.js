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

/***/ "./config/default.ts":
/*!***************************!*\
  !*** ./config/default.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SOCKET_URL\": () => (/* binding */ SOCKET_URL)\n/* harmony export */ });\nconst SOCKET_URL = process.env.SOCKET_URL || 'http://localhost:4000';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZGVmYXVsdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sS0FBSyxDQUFDQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixVQUFVLElBQUksQ0FBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb25maWcvZGVmYXVsdC50cz81YzE0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTT0NLRVRfVVJMID0gcHJvY2Vzcy5lbnYuU09DS0VUX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJztcbiJdLCJuYW1lcyI6WyJTT0NLRVRfVVJMIiwicHJvY2VzcyIsImVudiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/default.ts\n");

/***/ }),

/***/ "./context/socket.context.tsx":
/*!************************************!*\
  !*** ./context/socket.context.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useSocket\": () => (/* binding */ useSocket),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/default */ \"./config/default.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_config_default__WEBPACK_IMPORTED_MODULE_3__.SOCKET_URL);\nconst SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    socket,\n    setUsername: ()=>false\n});\nfunction SocketsProvider(props) {\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: roomId , 1: setRoomId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: rooms , 1: setRoom  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocketContext.Provider, {\n        value: {\n            socket,\n            username,\n            setUsername,\n            roomId,\n            rooms\n        },\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/ramtml/Desktop/ReactLearning/nodechat/client/context/socket.context.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n}\nconst useSocket = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SocketContext)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketsProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NvY2tldC5jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDZDtBQUNDO0FBVTlDLEtBQUssQ0FBQ0ssTUFBTSxHQUFHRiw0REFBRSxDQUFDQyx1REFBVTtBQUM1QixLQUFLLENBQUNFLGFBQWEsaUJBQUdOLG9EQUFhLENBQUMsQ0FBQztJQUFDSyxNQUFNO0lBQUVFLFdBQVcsTUFBUSxLQUFLO0FBQUMsQ0FBQztTQUUvREMsZUFBZSxDQUFDQyxLQUFVLEVBQUUsQ0FBQztJQUNwQyxLQUFLLE1BQUVDLFFBQVEsTUFBRUgsV0FBVyxNQUFJTCwrQ0FBUSxDQUFDLENBQUU7SUFDM0MsS0FBSyxNQUFFUyxNQUFNLE1BQUVDLFNBQVMsTUFBSVYsK0NBQVEsQ0FBQyxDQUFFO0lBQ3ZDLEtBQUssTUFBRVcsS0FBSyxNQUFFQyxPQUFPLE1BQUlaLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sNkVBQ0hJLGFBQWEsQ0FBQ1MsUUFBUTtRQUNyQkMsS0FBSyxFQUFFLENBQUM7WUFBQ1gsTUFBTTtZQUFFSyxRQUFRO1lBQUVILFdBQVc7WUFBRUksTUFBTTtZQUFFRSxLQUFLO1FBQUMsQ0FBQztXQUNuREosS0FBSzs7Ozs7O0FBR2YsQ0FBQztBQUVNLEtBQUssQ0FBQ1EsU0FBUyxPQUFTaEIsaURBQVUsQ0FBQ0ssYUFBYTs7QUFFdkQsaUVBQWVFLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnRleHQvc29ja2V0LmNvbnRleHQudHN4PzUwMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW8sIHsgU29ja2V0IH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBTT0NLRVRfVVJMIH0gZnJvbSAnLi4vY29uZmlnL2RlZmF1bHQnO1xuXG5pbnRlcmZhY2UgSUNvbnRleHQge1xuICBzb2NrZXQ6IFNvY2tldDtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgc2V0VXNlcm5hbWU6IEZ1bmN0aW9uO1xuICByb29tSWQ/OiBzdHJpbmc7XG4gIHJvb21zOiBvYmplY3Q7XG59XG5cbmNvbnN0IHNvY2tldCA9IGlvKFNPQ0tFVF9VUkwpO1xuY29uc3QgU29ja2V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyBzb2NrZXQsIHNldFVzZXJuYW1lOiAoKSA9PiBmYWxzZSB9KTtcblxuZnVuY3Rpb24gU29ja2V0c1Byb3ZpZGVyKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyb29tSWQsIHNldFJvb21JZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyb29tcywgc2V0Um9vbV0gPSB1c2VTdGF0ZShbXSk7XG4gIHJldHVybiAoXG4gICAgPFNvY2tldENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IHNvY2tldCwgdXNlcm5hbWUsIHNldFVzZXJuYW1lLCByb29tSWQsIHJvb21zIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNvY2tldCA9ICgpID0+IHVzZUNvbnRleHQoU29ja2V0Q29udGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2tldHNQcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiaW8iLCJTT0NLRVRfVVJMIiwic29ja2V0IiwiU29ja2V0Q29udGV4dCIsInNldFVzZXJuYW1lIiwiU29ja2V0c1Byb3ZpZGVyIiwicHJvcHMiLCJ1c2VybmFtZSIsInJvb21JZCIsInNldFJvb21JZCIsInJvb21zIiwic2V0Um9vbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTb2NrZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/socket.context.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_socket_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/socket.context */ \"./context/socket.context.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_socket_context__WEBPACK_IMPORTED_MODULE_1__]);\n_context_socket_context__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_socket_context__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/ramtml/Desktop/ReactLearning/nodechat/client/pages/_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ramtml/Desktop/ReactLearning/nodechat/client/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ3pCO1NBRXJCQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLDZFQUNISCwrREFBZTs4RkFDYkUsU0FBUztlQUFLQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvY2tldHNQcm92aWRlciBmcm9tICcuLi9jb250ZXh0L3NvY2tldC5jb250ZXh0JztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFNvY2tldHNQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1NvY2tldHNQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiU29ja2V0c1Byb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();