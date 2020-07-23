module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./apollo/index.js":
/*!*************************!*\
  !*** ./apollo/index.js ***!
  \*************************/
/*! exports provided: getStandAloneApollo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStandAloneApollo", function() { return getStandAloneApollo; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_2__);



const httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["createHttpLink"])({
  uri: 'https://blooming-citadel-99802.herokuapp.com/',
  fetch: (node_fetch__WEBPACK_IMPORTED_MODULE_1___default()),
  credentials: 'include'
});
function getStandAloneApollo(initialState = {}) {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    connectToDevTools: true,
    link: httpLink,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState || {})
  });
}
/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_2___default()(({
  initialState
}) => getStandAloneApollo(initialState)));

/***/ }),

/***/ "./context/pedidos/PedidoContex.js":
/*!*****************************************!*\
  !*** ./context/pedidos/PedidoContex.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PedidoContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (PedidoContext);

/***/ }),

/***/ "./context/pedidos/PedidoReducer.js":
/*!******************************************!*\
  !*** ./context/pedidos/PedidoReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SELECCIONAR_CLIENTE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cliente: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SELECCIONAR_PRODUCTO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productos: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productos: state.productos.map(product => product.id === action.payload.id ? product = action.payload : product)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ACTUALIZAR_TOTAL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.productos.reduce((nuevoTotal, articulo) => nuevoTotal += articulo.precio * articulo.cantidad, 0)
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/pedidos/PedidoState.js":
/*!****************************************!*\
  !*** ./context/pedidos/PedidoState.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PedidoContex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PedidoContex */ "./context/pedidos/PedidoContex.js");
/* harmony import */ var _PedidoReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PedidoReducer */ "./context/pedidos/PedidoReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\DGlamour\\client\\context\\pedidos\\PedidoState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PedidoState = ({
  children
}) => {
  const initialState = {
    cliente: {},
    productos: [],
    total: 0
  };
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_PedidoReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);

  const agregarCliente = cliente => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["SELECCIONAR_CLIENTE"],
      payload: cliente
    });
  };

  const agregarProducto = productosSeleccionados => {
    let nuevoState;

    if (state.productos.length > 0) {
      nuevoState = productosSeleccionados.map(producto => {
        const nuevoObjeto = state.productos.find(productoState => productoState.id === producto.id);
        return _objectSpread(_objectSpread({}, producto), nuevoObjeto);
      });
    } else {
      nuevoState = productosSeleccionados;
    }

    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["SELECCIONAR_PRODUCTO"],
      payload: nuevoState
    });
  };

  const cantidadProductos = nuevoProducto => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["CANTIDAD_PRODUCTOS"],
      payload: nuevoProducto
    });
  };

  const actualizarTotal = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["ACTUALIZAR_TOTAL"]
    });
  };

  return __jsx(_PedidoContex__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      cliente: state.cliente,
      productos: state.productos,
      total: state.total,
      agregarCliente,
      agregarProducto,
      cantidadProductos,
      actualizarTotal
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (PedidoState);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_pedidos_PedidoState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/pedidos/PedidoState */ "./context/pedidos/PedidoState.js");
/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apollo */ "./apollo/index.js");
var _jsxFileName = "C:\\Users\\USER\\Desktop\\DGlamour\\client\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps,
      apollo
    } = this.props;
    return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
      client: apollo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, __jsx(_context_pedidos_PedidoState__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_apollo__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp));

/***/ }),

/***/ "./types/index.js":
/*!************************!*\
  !*** ./types/index.js ***!
  \************************/
/*! exports provided: SELECCIONAR_CLIENTE, SELECCIONAR_PRODUCTO, CANTIDAD_PRODUCTOS, ACTUALIZAR_TOTAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECCIONAR_CLIENTE", function() { return SELECCIONAR_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECCIONAR_PRODUCTO", function() { return SELECCIONAR_PRODUCTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANTIDAD_PRODUCTOS", function() { return CANTIDAD_PRODUCTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTUALIZAR_TOTAL", function() { return ACTUALIZAR_TOTAL; });
const SELECCIONAR_CLIENTE = 'SELECCIONAR_CLIENTE';
const SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO';
const CANTIDAD_PRODUCTOS = 'CANTIDAD_PRODUCTOS';
const ACTUALIZAR_TOTAL = 'ACTUALIZAR_TOTAL';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2Fwb2xsby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L3BlZGlkb3MvUGVkaWRvQ29udGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvcGVkaWRvcy9QZWRpZG9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvcGVkaWRvcy9QZWRpZG9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC13aXRoLWFwb2xsb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImh0dHBMaW5rIiwiY3JlYXRlSHR0cExpbmsiLCJ1cmkiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiZ2V0U3RhbmRBbG9uZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIkFwb2xsb0NsaWVudCIsImNvbm5lY3RUb0RldlRvb2xzIiwibGluayIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsInJlc3RvcmUiLCJ3aXRoQXBvbGxvIiwiUGVkaWRvQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTRUxFQ0NJT05BUl9DTElFTlRFIiwiY2xpZW50ZSIsInBheWxvYWQiLCJTRUxFQ0NJT05BUl9QUk9EVUNUTyIsInByb2R1Y3RvcyIsIkNBTlRJREFEX1BST0RVQ1RPUyIsIm1hcCIsInByb2R1Y3QiLCJpZCIsIkFDVFVBTElaQVJfVE9UQUwiLCJ0b3RhbCIsInJlZHVjZSIsIm51ZXZvVG90YWwiLCJhcnRpY3VsbyIsInByZWNpbyIsImNhbnRpZGFkIiwiUGVkaWRvU3RhdGUiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsIlBlZGlkb1JlZHVjZXIiLCJhZ3JlZ2FyQ2xpZW50ZSIsImFncmVnYXJQcm9kdWN0byIsInByb2R1Y3Rvc1NlbGVjY2lvbmFkb3MiLCJudWV2b1N0YXRlIiwibGVuZ3RoIiwicHJvZHVjdG8iLCJudWV2b09iamV0byIsImZpbmQiLCJwcm9kdWN0b1N0YXRlIiwiY2FudGlkYWRQcm9kdWN0b3MiLCJudWV2b1Byb2R1Y3RvIiwiYWN0dWFsaXphclRvdGFsIiwicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJNeUFwcCIsImFwb2xsbyIsInByb3BzIiwid2l0aERhdGEiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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T0EsQ0FBUDtBQXJDSjtBQUFPLEdBQVA7QUF3Q0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1VLEtBQU4sU0FBb0JuQiwrQ0FBcEIsQ0FBd0I7QUFDdEJKLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUYsZUFBRjtBQUFhRixlQUFiO0FBQXdCNEI7QUFBeEIsUUFBbUMsS0FBS0MsS0FBOUM7QUFFQSxXQUNFLE1BQUMsNkRBQUQ7QUFBZ0IsWUFBTSxFQUFFRCxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxTQUFELGVBQWU1QixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixDQURGLENBREY7QUFPRDs7QUFYcUI7O0FBY1Q4QixzSEFBUSxDQUFDSCxLQUFELENBQXZCLEU7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTTVELG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1HLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1FLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1JLGdCQUFnQixHQUFHLGtCQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQLDJDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIGNyZWF0ZUh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ25leHQtd2l0aC1hcG9sbG8nO1xyXG5cclxuY29uc3QgaHR0cExpbmsgPSBjcmVhdGVIdHRwTGluayh7XHJcbiAgdXJpOiAnaHR0cHM6Ly9ibG9vbWluZy1jaXRhZGVsLTk5ODAyLmhlcm9rdWFwcC5jb20vJyxcclxuICBmZXRjaCxcclxuICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFuZEFsb25lQXBvbGxvKGluaXRpYWxTdGF0ZSA9IHt9KSB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgY29ubmVjdFRvRGV2VG9vbHM6IHRydWUsXHJcbiAgICBsaW5rOiBodHRwTGluayxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbygoeyBpbml0aWFsU3RhdGUgfSkgPT5cclxuICBnZXRTdGFuZEFsb25lQXBvbGxvKGluaXRpYWxTdGF0ZSlcclxuKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFBlZGlkb0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZWRpZG9Db250ZXh0O1xyXG4iLCJpbXBvcnQge1xyXG4gIFNFTEVDQ0lPTkFSX0NMSUVOVEUsXHJcbiAgU0VMRUNDSU9OQVJfUFJPRFVDVE8sXHJcbiAgQ0FOVElEQURfUFJPRFVDVE9TLFxyXG4gIEFDVFVBTElaQVJfVE9UQUwsXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNFTEVDQ0lPTkFSX0NMSUVOVEU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2xpZW50ZTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBTRUxFQ0NJT05BUl9QUk9EVUNUTzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0b3M6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgQ0FOVElEQURfUFJPRFVDVE9TOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3Rvczogc3RhdGUucHJvZHVjdG9zLm1hcCgocHJvZHVjdCkgPT5cclxuICAgICAgICAgIHByb2R1Y3QuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgICAgID8gKHByb2R1Y3QgPSBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgOiBwcm9kdWN0XHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIEFDVFVBTElaQVJfVE9UQUw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdG90YWw6IHN0YXRlLnByb2R1Y3Rvcy5yZWR1Y2UoXHJcbiAgICAgICAgICAobnVldm9Ub3RhbCwgYXJ0aWN1bG8pID0+XHJcbiAgICAgICAgICAgIChudWV2b1RvdGFsICs9IGFydGljdWxvLnByZWNpbyAqIGFydGljdWxvLmNhbnRpZGFkKSxcclxuICAgICAgICAgIDBcclxuICAgICAgICApLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGVkaWRvQ29udGV4dCBmcm9tICcuL1BlZGlkb0NvbnRleCc7XHJcbmltcG9ydCBQZWRpZG9SZWR1Y2VyIGZyb20gJy4vUGVkaWRvUmVkdWNlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFDVFVBTElaQVJfVE9UQUwsXHJcbiAgQ0FOVElEQURfUFJPRFVDVE9TLFxyXG4gIFNFTEVDQ0lPTkFSX0NMSUVOVEUsXHJcbiAgU0VMRUNDSU9OQVJfUFJPRFVDVE8sXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5jb25zdCBQZWRpZG9TdGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjbGllbnRlOiB7fSxcclxuICAgIHByb2R1Y3RvczogW10sXHJcbiAgICB0b3RhbDogMCxcclxuICB9O1xyXG5cclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoUGVkaWRvUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgY29uc3QgYWdyZWdhckNsaWVudGUgPSAoY2xpZW50ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTRUxFQ0NJT05BUl9DTElFTlRFLFxyXG4gICAgICBwYXlsb2FkOiBjbGllbnRlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWdyZWdhclByb2R1Y3RvID0gKHByb2R1Y3Rvc1NlbGVjY2lvbmFkb3MpID0+IHtcclxuICAgIGxldCBudWV2b1N0YXRlO1xyXG4gICAgaWYgKHN0YXRlLnByb2R1Y3Rvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG51ZXZvU3RhdGUgPSBwcm9kdWN0b3NTZWxlY2Npb25hZG9zLm1hcCgocHJvZHVjdG8pID0+IHtcclxuICAgICAgICBjb25zdCBudWV2b09iamV0byA9IHN0YXRlLnByb2R1Y3Rvcy5maW5kKFxyXG4gICAgICAgICAgKHByb2R1Y3RvU3RhdGUpID0+IHByb2R1Y3RvU3RhdGUuaWQgPT09IHByb2R1Y3RvLmlkXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4geyAuLi5wcm9kdWN0bywgLi4ubnVldm9PYmpldG8gfTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBudWV2b1N0YXRlID0gcHJvZHVjdG9zU2VsZWNjaW9uYWRvcztcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFNFTEVDQ0lPTkFSX1BST0RVQ1RPLFxyXG4gICAgICBwYXlsb2FkOiBudWV2b1N0YXRlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FudGlkYWRQcm9kdWN0b3MgPSAobnVldm9Qcm9kdWN0bykgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDQU5USURBRF9QUk9EVUNUT1MsXHJcbiAgICAgIHBheWxvYWQ6IG51ZXZvUHJvZHVjdG8sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhY3R1YWxpemFyVG90YWwgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFDVFVBTElaQVJfVE9UQUwsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBlZGlkb0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBjbGllbnRlOiBzdGF0ZS5jbGllbnRlLFxyXG4gICAgICAgIHByb2R1Y3Rvczogc3RhdGUucHJvZHVjdG9zLFxyXG4gICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCxcclxuICAgICAgICBhZ3JlZ2FyQ2xpZW50ZSxcclxuICAgICAgICBhZ3JlZ2FyUHJvZHVjdG8sXHJcbiAgICAgICAgY2FudGlkYWRQcm9kdWN0b3MsXHJcbiAgICAgICAgYWN0dWFsaXphclRvdGFsLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1BlZGlkb0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlZGlkb1N0YXRlO1xyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IFBlZGlkb1N0YXRlIGZyb20gJy4uL2NvbnRleHQvcGVkaWRvcy9QZWRpZG9TdGF0ZSc7XHJcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9hcG9sbG8nO1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGFwb2xsbyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG99PlxyXG4gICAgICAgIDxQZWRpZG9TdGF0ZT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1BlZGlkb1N0YXRlPlxyXG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKE15QXBwKTtcclxuIiwiZXhwb3J0IGNvbnN0IFNFTEVDQ0lPTkFSX0NMSUVOVEUgPSAnU0VMRUNDSU9OQVJfQ0xJRU5URSc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ0NJT05BUl9QUk9EVUNUTyA9ICdTRUxFQ0NJT05BUl9QUk9EVUNUTyc7XHJcbmV4cG9ydCBjb25zdCBDQU5USURBRF9QUk9EVUNUT1MgPSAnQ0FOVElEQURfUFJPRFVDVE9TJztcclxuZXhwb3J0IGNvbnN0IEFDVFVBTElaQVJfVE9UQUwgPSAnQUNUVUFMSVpBUl9UT1RBTCc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtd2l0aC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9