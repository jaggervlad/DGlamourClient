webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./apollo/index.js":
/*!*************************!*\
  !*** ./apollo/index.js ***!
  \*************************/
/*! exports provided: getStandAloneApollo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStandAloneApollo", function() { return getStandAloneApollo; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-ssr */ "./node_modules/@apollo/react-ssr/index.js");
/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_ssr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_3__);




var httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["createHttpLink"])({
  uri: 'https://blooming-citadel-99802.herokuapp.com/',
  fetch: node_fetch__WEBPACK_IMPORTED_MODULE_2___default.a,
  credentials: 'include'
});
function getStandAloneApollo() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    connectToDevTools: true,
    link: httpLink,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState || {})
  });
}
/* harmony default export */ __webpack_exports__["default"] = (_c2 = next_with_apollo__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c(_ref) {
  var initialState = _ref.initialState;
  return getStandAloneApollo(initialState);
}));

var _c, _c2;

$RefreshReg$(_c, "%default%$withApollo");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG8vaW5kZXguanMiXSwibmFtZXMiOlsiaHR0cExpbmsiLCJjcmVhdGVIdHRwTGluayIsInVyaSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJnZXRTdGFuZEFsb25lQXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwiQXBvbGxvQ2xpZW50IiwiY29ubmVjdFRvRGV2VG9vbHMiLCJsaW5rIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwicmVzdG9yZSIsIndpdGhBcG9sbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MscUVBQWMsQ0FBQztBQUM5QkMsS0FBRyxFQUFFLCtDQUR5QjtBQUU5QkMsT0FBSyxFQUFMQSxpREFGOEI7QUFHOUJDLGFBQVcsRUFBRTtBQUhpQixDQUFELENBQS9CO0FBTU8sU0FBU0MsbUJBQVQsR0FBZ0Q7QUFBQSxNQUFuQkMsWUFBbUIsdUVBQUosRUFBSTtBQUNyRCxTQUFPLElBQUlDLDJEQUFKLENBQWlCO0FBQ3RCQyxxQkFBaUIsRUFBRSxJQURHO0FBRXRCQyxRQUFJLEVBQUVULFFBRmdCO0FBR3RCVSxTQUFLLEVBQUUsSUFBSUMsNERBQUosR0FBb0JDLE9BQXBCLENBQTRCTixZQUFZLElBQUksRUFBNUM7QUFIZSxHQUFqQixDQUFQO0FBS0Q7QUFFYyxxRUFBQU8sdURBQVUsTUFBQztBQUFBLE1BQUdQLFlBQUgsUUFBR0EsWUFBSDtBQUFBLFNBQ3hCRCxtQkFBbUIsQ0FBQ0MsWUFBRCxDQURLO0FBQUEsQ0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy4xMzQ1ZDgzMjVjNzI3YzM2ODdmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBjcmVhdGVIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1zc3InO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ25leHQtd2l0aC1hcG9sbG8nO1xyXG5cclxuY29uc3QgaHR0cExpbmsgPSBjcmVhdGVIdHRwTGluayh7XHJcbiAgdXJpOiAnaHR0cHM6Ly9ibG9vbWluZy1jaXRhZGVsLTk5ODAyLmhlcm9rdWFwcC5jb20vJyxcclxuICBmZXRjaCxcclxuICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFuZEFsb25lQXBvbGxvKGluaXRpYWxTdGF0ZSA9IHt9KSB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgY29ubmVjdFRvRGV2VG9vbHM6IHRydWUsXHJcbiAgICBsaW5rOiBodHRwTGluayxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbygoeyBpbml0aWFsU3RhdGUgfSkgPT5cclxuICBnZXRTdGFuZEFsb25lQXBvbGxvKGluaXRpYWxTdGF0ZSlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==