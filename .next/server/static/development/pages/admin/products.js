module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin/commons/uikit/components/AppBar/AppBar.js":
/*!*********************************************************!*\
  !*** ./admin/commons/uikit/components/AppBar/AppBar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/user */ "./admin/commons/utils/user.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Button */ "./admin/commons/uikit/components/Button/index.js");
/* harmony import */ var _AppBar_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AppBar.scss */ "./admin/commons/uikit/components/AppBar/AppBar.scss");
/* harmony import */ var _AppBar_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_AppBar_scss__WEBPACK_IMPORTED_MODULE_10__);











var NAV_ITEMS = [];

var AppBar =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AppBar, _React$PureComponent);

  function AppBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppBar).call(this, props));
    _this.logout = _this.logout.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppBar, [{
    key: "logout",
    value: function logout() {
      _utils_user__WEBPACK_IMPORTED_MODULE_8__["User"].removeSession();
      window.location.href = '/admin/login';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          triggerCollapse = _this$props.triggerCollapse;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_7___default()(_AppBar_scss__WEBPACK_IMPORTED_MODULE_10___default.a.root, className);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: _AppBar_scss__WEBPACK_IMPORTED_MODULE_10___default.a.header
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _AppBar_scss__WEBPACK_IMPORTED_MODULE_10___default.a['logo-section']
      }, "ADMIN"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        autoWidth: true,
        clear: true,
        color: "light-grey",
        className: _AppBar_scss__WEBPACK_IMPORTED_MODULE_10___default.a.collapseButton,
        onClick: triggerCollapse
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "menu")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _AppBar_scss__WEBPACK_IMPORTED_MODULE_10___default.a['nav-section']
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _AppBar_scss__WEBPACK_IMPORTED_MODULE_10___default.a.logout
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "Administrator"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        clear: true,
        autoWidth: true,
        className: _AppBar_scss__WEBPACK_IMPORTED_MODULE_10___default.a.logoutButton,
        onClick: this.logout
      }, "Log out ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "exit_to_app"))))));
    }
  }]);

  return AppBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

AppBar.propTypes = {};
AppBar.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (AppBar);

/***/ }),

/***/ "./admin/commons/uikit/components/AppBar/AppBar.scss":
/*!***********************************************************!*\
  !*** ./admin/commons/uikit/components/AppBar/AppBar.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"header": "stDTF4ZGvyd4vk-ttlyWv",
	"root": "_8nvfraM3m1DsdEvhWxaTe",
	"logo-section": "_2uudnAKHsVkX-htDASQ3-4",
	"collapseButton": "_2nGD5hC2zv2W3iLUg-C_eo",
	"nav-section": "_2B21FFBHve95_5Mflm5NAb",
	"logout": "_2oancJi-5Fc-NxdiqCVuXh",
	"nav-list": "_1hbGES6jnG2rJcw2XSMDOL",
	"nav-item": "_1AUXpeIu7KH3zA1dJeikfj",
	"nav-link": "_2iC9LtXAau2mQTXDYbF87y",
	"active": "_23ag2hG9hfTzYKTzoIFiLU",
	"searchbox-section": "HB-ai80HxNIjm7ZGIsxnC"
};

/***/ }),

/***/ "./admin/commons/uikit/components/AppBar/index.js":
/*!********************************************************!*\
  !*** ./admin/commons/uikit/components/AppBar/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ "./admin/commons/uikit/components/AppBar/AppBar.js");

/* harmony default export */ __webpack_exports__["default"] = (_AppBar__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/components/AppFooter/AppFooter.js":
/*!***************************************************************!*\
  !*** ./admin/commons/uikit/components/AppFooter/AppFooter.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Grid */ "./admin/commons/uikit/components/Grid/index.js");
/* harmony import */ var _AppFooter_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppFooter.scss */ "./admin/commons/uikit/components/AppFooter/AppFooter.scss");
/* harmony import */ var _AppFooter_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AppFooter_scss__WEBPACK_IMPORTED_MODULE_3__);




var NAV_ITEMS = [{
  key: "column1",
  items: [{
    label: "User Agreement",
    path: "/user-agreement"
  }, {
    label: "Privacy Policy",
    path: "/privacy"
  }, {
    label: "Ad Choices",
    path: "/ad-choices"
  }, {
    label: "Feedback",
    path: "/feedback"
  }]
}, {
  key: "column2",
  items: [{
    label: "Help Center",
    path: "/help"
  }, {
    label: "About",
    path: "/about"
  }, {
    label: "Blog",
    path: "/blog"
  }, {
    label: "Developers",
    path: "/developers"
  }]
}, {
  key: "column3",
  items: [{
    label: "Careers",
    path: "/careers"
  }, {
    label: "Advertising",
    path: "/advertising"
  }, {
    label: "Small Business",
    path: "/small-business"
  }, {
    label: "Language",
    path: "/language"
  }]
}];

var AppFooter = function AppFooter() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: _AppFooter_scss__WEBPACK_IMPORTED_MODULE_3___default.a.footer
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: 3
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AppFooter_scss__WEBPACK_IMPORTED_MODULE_3___default.a["logo-section"]
  })), NAV_ITEMS.map(function (col, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 3,
      sm: 4,
      key: col.key
    }, col.items.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: item.path,
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: _AppFooter_scss__WEBPACK_IMPORTED_MODULE_3___default.a["footer-link"]
      }, item.label));
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppFooter);

/***/ }),

/***/ "./admin/commons/uikit/components/AppFooter/AppFooter.scss":
/*!*****************************************************************!*\
  !*** ./admin/commons/uikit/components/AppFooter/AppFooter.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"footer": "_3JTrUykDSpwMCIzpV4witq",
	"footer-link": "_2YlZU8_iBOhoUv8arv227B"
};

/***/ }),

/***/ "./admin/commons/uikit/components/AppFooter/index.js":
/*!***********************************************************!*\
  !*** ./admin/commons/uikit/components/AppFooter/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter */ "./admin/commons/uikit/components/AppFooter/AppFooter.js");

/* harmony default export */ __webpack_exports__["default"] = (_AppFooter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/components/AppLayout/AppLayout.js":
/*!***************************************************************!*\
  !*** ./admin/commons/uikit/components/AppLayout/AppLayout.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-measure */ "react-measure");
/* harmony import */ var react_measure__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_measure__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../AppBar */ "./admin/commons/uikit/components/AppBar/index.js");
/* harmony import */ var _AppSideBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../AppSideBar */ "./admin/commons/uikit/components/AppSideBar/index.js");
/* harmony import */ var _AppLayout_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AppLayout.scss */ "./admin/commons/uikit/components/AppLayout/AppLayout.scss");
/* harmony import */ var _AppLayout_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_AppLayout_scss__WEBPACK_IMPORTED_MODULE_11__);













var AppLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AppLayout, _React$Component);

  function AppLayout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppLayout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppLayout).call(this, props));
    _this.state = {
      isMenuCollapse: false,
      dimensions: {}
    };
    _this.triggerCollapse = _this.triggerCollapse.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onResize = _this.onResize.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppLayout, [{
    key: "onResize",
    value: function onResize(contentRect) {
      var width = contentRect.bounds.width;
      var _this$state = this.state,
          isMenuCollapse = _this$state.isMenuCollapse,
          dimensions = _this$state.dimensions;

      if (width < 768 && width !== dimensions.width && !isMenuCollapse) {
        this.setState({
          isMenuCollapse: true,
          dimensions: contentRect.bounds
        });
      }
    }
  }, {
    key: "triggerCollapse",
    value: function triggerCollapse() {
      this.setState(function (prevState) {
        return {
          isMenuCollapse: !prevState.isMenuCollapse
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          topRightButton = _this$props.topRightButton,
          children = _this$props.children;
      var isMenuCollapse = this.state.isMenuCollapse;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_7___default()(_AppLayout_scss__WEBPACK_IMPORTED_MODULE_11___default.a['app-layout']);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_measure__WEBPACK_IMPORTED_MODULE_8___default.a, {
        bounds: true,
        onResize: this.onResize
      }, function (_ref) {
        var measureRef = _ref.measureRef;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          ref: measureRef,
          id: "app",
          className: _AppLayout_scss__WEBPACK_IMPORTED_MODULE_11___default.a.app
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_AppBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
          triggerCollapse: _this2.triggerCollapse
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: classes
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_AppSideBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
          isCollapse: isMenuCollapse
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_AppLayout_scss__WEBPACK_IMPORTED_MODULE_11___default.a['app-content'], isMenuCollapse && _AppLayout_scss__WEBPACK_IMPORTED_MODULE_11___default.a.menuCollapsed)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: _AppLayout_scss__WEBPACK_IMPORTED_MODULE_11___default.a['page-title']
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "flex-justify-content-right m-b-20"
        }, topRightButton && react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(topRightButton)), children)));
      });
    }
  }]);

  return AppLayout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./admin/commons/uikit/components/AppLayout/AppLayout.scss":
/*!*****************************************************************!*\
  !*** ./admin/commons/uikit/components/AppLayout/AppLayout.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"app": "_1A87NxFdMBfeBYqmysuNuR",
	"app-layout": "_3WPOjGJaZ4x6I8ROSpJU91",
	"app-content": "_1hUmv9skYqyMx9CN15XhgE",
	"menuCollapsed": "_1iE5JXfynyn0cNMh5f7-7p",
	"page-title": "_1jm-IAft6NF3lbLo-q4aCq"
};

/***/ }),

/***/ "./admin/commons/uikit/components/AppLayout/index.js":
/*!***********************************************************!*\
  !*** ./admin/commons/uikit/components/AppLayout/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout */ "./admin/commons/uikit/components/AppLayout/AppLayout.js");

/* harmony default export */ __webpack_exports__["default"] = (_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/components/AppSideBar/AppSideBar.js":
/*!*****************************************************************!*\
  !*** ./admin/commons/uikit/components/AppSideBar/AppSideBar.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AppSideBar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppSideBar.scss */ "./admin/commons/uikit/components/AppSideBar/AppSideBar.scss");
/* harmony import */ var _AppSideBar_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AppSideBar_scss__WEBPACK_IMPORTED_MODULE_4__);





var NAV_ITEMS = [{
  key: 'dashboard',
  label: 'Dashboard',
  path: '/admin',
  icon: 'dashboard'
}, {
  key: 'products',
  label: 'Products',
  path: '/admin/products',
  icon: 'card_giftcard',
  items: [{
    label: 'List products',
    path: '/admin/products'
  }, {
    label: 'Add a product',
    path: '/admin/products/add'
  }]
}];

var AppSideBar = function AppSideBar(_ref) {
  var router = _ref.router,
      isCollapse = _ref.isCollapse;
  var pathname = router.pathname;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_AppSideBar_scss__WEBPACK_IMPORTED_MODULE_4___default.a.sidebar, isCollapse && _AppSideBar_scss__WEBPACK_IMPORTED_MODULE_4___default.a.collapsed)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, NAV_ITEMS.map(function (menu) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      md: 3,
      sm: 4,
      key: menu.key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: menu.path,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_AppSideBar_scss__WEBPACK_IMPORTED_MODULE_4___default.a['sidebar-link'], pathname === menu.path && _AppSideBar_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active)
    }, menu.icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, menu.icon), menu.label));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(AppSideBar));

/***/ }),

/***/ "./admin/commons/uikit/components/AppSideBar/AppSideBar.scss":
/*!*******************************************************************!*\
  !*** ./admin/commons/uikit/components/AppSideBar/AppSideBar.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"sidebar": "_2-gkVDVS3JEwy7fzLAi8mP",
	"sidebar-link": "_2GA43PskqA04JHPY6uGi10",
	"active": "_1S4nBG9KDNueqKgeORMdHq",
	"sidebar-submenus": "Av14jsPQ80NqSy6qLg1vi",
	"collapsed": "_3202gDBH0w0FFpbC0Q54hh"
};

/***/ }),

/***/ "./admin/commons/uikit/components/AppSideBar/index.js":
/*!************************************************************!*\
  !*** ./admin/commons/uikit/components/AppSideBar/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppSideBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSideBar */ "./admin/commons/uikit/components/AppSideBar/AppSideBar.js");

/* harmony default export */ __webpack_exports__["default"] = (_AppSideBar__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/components/Block/Block.js":
/*!*******************************************************!*\
  !*** ./admin/commons/uikit/components/Block/Block.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Button */ "./admin/commons/uikit/components/Button/index.js");
/* harmony import */ var _Block_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Block.scss */ "./admin/commons/uikit/components/Block/Block.scss");
/* harmony import */ var _Block_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Block_scss__WEBPACK_IMPORTED_MODULE_10__);







 // import withStyles from "isomorphic-style-loader/lib/withStyles";





var Block =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Block, _React$PureComponent);

  function Block() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Block);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Block).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Block, [{
    key: "renderHeader",
    value: function renderHeader() {
      var _this$props = this.props,
          noHeader = _this$props.noHeader,
          icon = _this$props.icon,
          title = _this$props.title,
          rightButtons = _this$props.rightButtons;
      return !noHeader && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _Block_scss__WEBPACK_IMPORTED_MODULE_10___default.a["block-header"]
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: _Block_scss__WEBPACK_IMPORTED_MODULE_10___default.a["block-title"]
      }, icon && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, icon), title), this.renderRightButtons());
    }
  }, {
    key: "renderRightButtons",
    value: function renderRightButtons() {
      var rightButtons = this.props.rightButtons;
      return rightButtons.length > 0 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _Block_scss__WEBPACK_IMPORTED_MODULE_10___default.a["right-buttons"]
      }, rightButtons);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          style = _this$props2.style,
          children = _this$props2.children;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()(_Block_scss__WEBPACK_IMPORTED_MODULE_10___default.a.block, className);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "".concat(classes),
        style: style
      }, this.renderHeader(), children);
    }
  }]);

  return Block;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Block, "propTypes", {
  rightButtons: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node)
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Block, "defaultProps", {
  rightButtons: []
});

/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),

/***/ "./admin/commons/uikit/components/Block/Block.scss":
/*!*********************************************************!*\
  !*** ./admin/commons/uikit/components/Block/Block.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"block": "_34Ps9CSBW4UFOJFskLsUkK",
	"block-header": "_1xR4Iqj7E30FuGI-x4nbT7",
	"right-buttons": "_3Weaq47X7JJKccCkVDR6If",
	"block-title": "_2i6sxn0Xv4qHBqpIsqHWxQ"
};

/***/ }),

/***/ "./admin/commons/uikit/components/Block/index.js":
/*!*******************************************************!*\
  !*** ./admin/commons/uikit/components/Block/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Block */ "./admin/commons/uikit/components/Block/Block.js");

/* harmony default export */ __webpack_exports__["default"] = (_Block__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/components/Button/Button.js":
/*!*********************************************************!*\
  !*** ./admin/commons/uikit/components/Button/Button.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Button.scss */ "./admin/commons/uikit/components/Button/Button.scss");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_11__);









 // import withStyles from "isomorphic-style-loader/lib/withStyles";




var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Button, _React$PureComponent);

  function Button() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Button);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Button).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Button, [{
    key: "getColorClass",
    value: function getColorClass() {
      var color = this.props.color;
      var className = "";

      switch (color) {
        case "dark-grey":
          className = _Button_scss__WEBPACK_IMPORTED_MODULE_11___default.a["button-dark-grey"];
          break;

        case "light-grey":
          className = _Button_scss__WEBPACK_IMPORTED_MODULE_11___default.a["button-light-grey"];
          break;

        case "header":
          className = _Button_scss__WEBPACK_IMPORTED_MODULE_11___default.a["button-color-header"];
          break;

        case "white":
          className = _Button_scss__WEBPACK_IMPORTED_MODULE_11___default.a["button-color-white"];
          break;

        case "danger":
          className = _Button_scss__WEBPACK_IMPORTED_MODULE_11___default.a["button-color-danger"];
          break;
      }

      return className;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          clear = _this$props.clear,
          color = _this$props.color,
          outline = _this$props.outline,
          iconLeft = _this$props.iconLeft,
          autoWidth = _this$props.autoWidth,
          fullWidth = _this$props.fullWidth,
          iconRight = _this$props.iconRight,
          className = _this$props.className,
          children = _this$props.children,
          otherProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["clear", "color", "outline", "iconLeft", "autoWidth", "fullWidth", "iconRight", "className", "children"]);

      var classes = classnames__WEBPACK_IMPORTED_MODULE_10___default()(_Button_scss__WEBPACK_IMPORTED_MODULE_11___default.a.root, iconLeft && _Button_scss__WEBPACK_IMPORTED_MODULE_11___default.a["icon-left"], iconRight && _Button_scss__WEBPACK_IMPORTED_MODULE_11___default.a["icon-right"], clear && _Button_scss__WEBPACK_IMPORTED_MODULE_11___default.a["button-clear"], color && this.getColorClass(color), outline && _Button_scss__WEBPACK_IMPORTED_MODULE_11___default.a["button-outline"], autoWidth && _Button_scss__WEBPACK_IMPORTED_MODULE_11___default.a["auto-width"], fullWidth && _Button_scss__WEBPACK_IMPORTED_MODULE_11___default.a["full-width"], className);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "".concat(classes)
      }, otherProps), children);
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Button, "propTypes", {
  clear: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  outline: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  iconLeft: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  iconRight: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Button, "defaultProps", {
  iconLeft: false,
  iconRight: false,
  clear: false,
  outline: false,
  color: null
});

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./admin/commons/uikit/components/Button/Button.scss":
/*!***********************************************************!*\
  !*** ./admin/commons/uikit/components/Button/Button.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "_245bbT1LOrAnmb4WW8Crma",
	"icon-left": "D-h9kCfUCF47rb2080EKr",
	"icon-right": "_2l3T8sMdDofhtPAR6nD1mi",
	"auto-width": "_1t5ijXckAmWH8gv81TNeKX",
	"full-width": "wB9lNcEHx7pcxewzufyPZ",
	"button-color-header": "URd6J9_F6YcRJ4usgosIX",
	"button-dark-grey": "_2AdeuV1CpdI5Y5ao1SjYjf",
	"button-light-grey": "_1IscjEZfiYrjVlj8yw_OEe",
	"button-color-white": "_3pgnRKD-8sxuGD050ayLjI",
	"button-color-danger": "_2PH17HPM2IlQ2Z06xx1kdA",
	"button-clear": "_1I-E76A0xRCL33iSQhtfjY",
	"button-outline": "I0WpaZbdjg6c16fxFj_Yl"
};

/***/ }),

/***/ "./admin/commons/uikit/components/Button/index.js":
/*!********************************************************!*\
  !*** ./admin/commons/uikit/components/Button/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./admin/commons/uikit/components/Button/Button.js");

/* harmony default export */ __webpack_exports__["default"] = (_Button__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/components/Checkbox/Checkbox.js":
/*!*************************************************************!*\
  !*** ./admin/commons/uikit/components/Checkbox/Checkbox.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Checkbox.scss */ "./admin/commons/uikit/components/Checkbox/Checkbox.scss");
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_scss__WEBPACK_IMPORTED_MODULE_9__);







 // import withStyles from "isomorphic-style-loader/lib/withStyles";




var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Checkbox, _React$Component);

  function Checkbox(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Checkbox);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Checkbox).call(this, props));
    _this.state = {
      isChecked: props.checked || false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Checkbox, [{
    key: "onChange",
    value: function onChange(event) {
      var _this2 = this;

      this.setState({
        isChecked: event.target.checked
      }, function () {
        if (_this2.props.onChange) _this2.props.onChange(event);
      });
    }
  }, {
    key: "renderCheckboxIcon",
    value: function renderCheckboxIcon() {
      return this.props.checked ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "check_box_outline") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "check_box_outline_blank");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className,
          checked = _this$props.checked,
          label = _this$props.label,
          color = _this$props.color;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()(_Checkbox_scss__WEBPACK_IMPORTED_MODULE_9___default.a.root, className, color == "white" && _Checkbox_scss__WEBPACK_IMPORTED_MODULE_9___default.a["color-white"]);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "".concat(classes)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: id
      }, this.renderCheckboxIcon(), label), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: id,
        name: id,
        type: "checkbox",
        checked: checked,
        onChange: this.props.onChange
      }));
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Checkbox, "propTypes", {
  label: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node]),
  checked: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Checkbox, "defaultProps", {});

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./admin/commons/uikit/components/Checkbox/Checkbox.scss":
/*!***************************************************************!*\
  !*** ./admin/commons/uikit/components/Checkbox/Checkbox.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "_2kr7WIGDWkYhFXroOcCPAk",
	"color-white": "c6y4OrxMWJiHLLHoMs2-X"
};

/***/ }),

/***/ "./admin/commons/uikit/components/Checkbox/index.js":
/*!**********************************************************!*\
  !*** ./admin/commons/uikit/components/Checkbox/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "./admin/commons/uikit/components/Checkbox/Checkbox.js");

/* harmony default export */ __webpack_exports__["default"] = (_Checkbox__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/components/Collapse/index.js":
/*!**********************************************************!*\
  !*** ./admin/commons/uikit/components/Collapse/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1__);



var Expandable = function Expandable(_ref) {
  var isExpanded = _ref.in,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1___default.a, {
    in: isExpanded,
    timeout: "auto",
    unmountOnExit: true
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Expandable);

/***/ }),

/***/ "./admin/commons/uikit/components/Dropdown/Dropdown.js":
/*!*************************************************************!*\
  !*** ./admin/commons/uikit/components/Dropdown/Dropdown.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Button */ "./admin/commons/uikit/components/Button/index.js");
/* harmony import */ var _Dropdown_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Dropdown.scss */ "./admin/commons/uikit/components/Dropdown/Dropdown.scss");
/* harmony import */ var _Dropdown_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Dropdown_scss__WEBPACK_IMPORTED_MODULE_11__);













var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Dropdown);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Dropdown).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "closeDropdown", function () {
      if (!_this.preventNextClose && _this.state.active) {
        _this.setState({
          active: false
        });
      }

      _this.preventNextClose = false;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onDropdownClick", function () {
      _this.preventNextClose = true;
    });

    _this.state = {
      active: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.closeDropdown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.closeDropdown);
    }
  }, {
    key: "openDropdown",
    value: function openDropdown() {
      this.preventNextClose = true;
      this.setState({
        active: !this.state.active
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          buttonProps = _this$props.buttonProps,
          children = _this$props.children;
      var active = this.state.active;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Dropdown_scss__WEBPACK_IMPORTED_MODULE_11___default.a["dropdown"], active && _Dropdown_scss__WEBPACK_IMPORTED_MODULE_11___default.a["active"])
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "button",
        onClick: this.openDropdown.bind(this)
      }, buttonProps), label), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Dropdown_scss__WEBPACK_IMPORTED_MODULE_11___default.a["dropdown-wrapper"], active && _Dropdown_scss__WEBPACK_IMPORTED_MODULE_11___default.a["active"]),
        onClick: this.onDropdownClick
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _Dropdown_scss__WEBPACK_IMPORTED_MODULE_11___default.a["dropdown-menu"]
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.Children.map(children, function (child, index) {
        if (!react__WEBPACK_IMPORTED_MODULE_8___default.a.isValidElement(child)) {
          return null;
        }

        return react__WEBPACK_IMPORTED_MODULE_8___default.a.cloneElement(child, {
          key: index
        });
      }))));
    }
  }]);

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./admin/commons/uikit/components/Dropdown/Dropdown.scss":
/*!***************************************************************!*\
  !*** ./admin/commons/uikit/components/Dropdown/Dropdown.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"dropdown": "_11_UgCsEqiUS1uqDyxliLR",
	"dropdown-wrapper": "_3MSpk1wBOTH8qnn3X07vdF",
	"dropdown-menu": "_1i7Dr_6vFMSmffyzgFKlxA",
	"active": "_2cHl0geEDjT3qUuf1YZ8Tz"
};

/***/ }),

/***/ "./admin/commons/uikit/components/Dropdown/index.js":
/*!**********************************************************!*\
  !*** ./admin/commons/uikit/components/Dropdown/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ "./admin/commons/uikit/components/Dropdown/Dropdown.js");

/* harmony default export */ __webpack_exports__["default"] = (_Dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/components/Grid/Col/Col.js":
/*!********************************************************!*\
  !*** ./admin/commons/uikit/components/Grid/Col/Col.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sass/Grid.scss */ "./admin/commons/uikit/components/Grid/sass/Grid.scss");
/* harmony import */ var _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11__);









/* eslint-disable css-modules/no-undef-class */





var Col =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Col, _React$PureComponent);

  function Col() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Col);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Col).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Col, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          lg = _this$props.lg,
          xl = _this$props.xl,
          col = _this$props.col,
          other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["className", "children", "xs", "sm", "md", "lg", "xl", "col"]);

      var classname = classnames__WEBPACK_IMPORTED_MODULE_10___default()(xs && _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default.a["col-xs-".concat(xs)], sm && _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default.a["col-sm-".concat(sm)], md && _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default.a["col-md-".concat(md)], lg && _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default.a["col-lg-".concat(lg)], xl && _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default.a["col-xl-".concat(xl)], col && _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default.a.col, className);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: classname
      }, other), children);
    }
  }]);

  return Col;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Col, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  xs: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  sm: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  md: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  lg: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  xl: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  col: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Col, "defaultProps", {
  className: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  col: false
});

/* harmony default export */ __webpack_exports__["default"] = (Col);

/***/ }),

/***/ "./admin/commons/uikit/components/Grid/Col/index.js":
/*!**********************************************************!*\
  !*** ./admin/commons/uikit/components/Grid/Col/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Col */ "./admin/commons/uikit/components/Grid/Col/Col.js");

/* harmony default export */ __webpack_exports__["default"] = (_Col__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/components/Grid/Container/Container.js":
/*!********************************************************************!*\
  !*** ./admin/commons/uikit/components/Grid/Container/Container.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sass/Grid.scss */ "./admin/commons/uikit/components/Grid/sass/Grid.scss");
/* harmony import */ var _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11__);









/* eslint-disable css-modules/no-undef-class */


 // import withStyles from "isomorphic-style-loader/lib/withStyles";



var Container =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Container, _React$PureComponent);

  function Container() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Container);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Container).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Container, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          fluid = _this$props.fluid,
          other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["className", "children", "fluid"]);

      var classname = classnames__WEBPACK_IMPORTED_MODULE_10___default()(fluid ? _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default.a["container-fluid"] : _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default.a["container"], className);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: classname
      }, other), children);
    }
  }]);

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Container, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node,
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Container, "defaultProps", {
  className: null,
  fluid: false
});

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./admin/commons/uikit/components/Grid/Container/index.js":
/*!****************************************************************!*\
  !*** ./admin/commons/uikit/components/Grid/Container/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./admin/commons/uikit/components/Grid/Container/Container.js");

/* harmony default export */ __webpack_exports__["default"] = (_Container__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/components/Grid/Row/Row.js":
/*!********************************************************!*\
  !*** ./admin/commons/uikit/components/Grid/Row/Row.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sass/Grid.scss */ "./admin/commons/uikit/components/Grid/sass/Grid.scss");
/* harmony import */ var _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11__);









/* eslint-disable css-modules/no-undef-class */


 // import withStyles from "isomorphic-style-loader/lib/withStyles";



var Row =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Row, _React$PureComponent);

  function Row() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Row);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Row).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Row, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          nogutters = _this$props.nogutters,
          other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["className", "children", "nogutters"]);

      var classname = classnames__WEBPACK_IMPORTED_MODULE_10___default()(_sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default.a["row"], nogutters && _sass_Grid_scss__WEBPACK_IMPORTED_MODULE_11___default.a["no-gutters"], className);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: classname
      }, other), children);
    }
  }]);

  return Row;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Row, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node,
  nogutters: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Row, "defaultProps", {
  className: null,
  nogutters: false
});

/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./admin/commons/uikit/components/Grid/Row/index.js":
/*!**********************************************************!*\
  !*** ./admin/commons/uikit/components/Grid/Row/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Row */ "./admin/commons/uikit/components/Grid/Row/Row.js");

/* harmony default export */ __webpack_exports__["default"] = (_Row__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/components/Grid/index.js":
/*!******************************************************!*\
  !*** ./admin/commons/uikit/components/Grid/index.js ***!
  \******************************************************/
/*! exports provided: Container, Row, Col */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./admin/commons/uikit/components/Grid/Container/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ "./admin/commons/uikit/components/Grid/Row/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _Row__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Col */ "./admin/commons/uikit/components/Grid/Col/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _Col__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./admin/commons/uikit/components/Grid/sass/Grid.scss":
/*!************************************************************!*\
  !*** ./admin/commons/uikit/components/Grid/sass/Grid.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "_3315efPnuM3y9BS7osVZxV",
	"container-fluid": "_5T9Wp3naFX_pwOi-UnHRB",
	"row": "_2Nw2JkftB-BEjtqwrcWsSf",
	"reverse": "_2X4nQQOlXz24TX45HHVJ3t",
	"col": "_2szA0Pobcrvbn4KHFrOfbo",
	"col-xs": "_3hSXK2KcueF-syPiNxzbSn",
	"col-xs-1": "_39WyYYDdNLrZriV27pPIBT",
	"col-xs-2": "_1BWeWhAeyzHH5aZN7tPWCn",
	"col-xs-3": "_1CZg8WfyBt1BsVhwFPf2JR",
	"col-xs-4": "_1L9IeNlP3vERtxgaIA9sOT",
	"col-xs-5": "_2tB4wIcl50_CMKgP3J2vBb",
	"col-xs-6": "_1SXPu7BTbdEaUi1zWfdAHX",
	"col-xs-7": "_1x3iBBh34g-PlcvpnrSbDY",
	"col-xs-8": "_10y5rXvrkvpzRNtGL-MkK-",
	"col-xs-9": "_2lPPvjmHxYX4QUAebJcjz-",
	"col-xs-10": "_3wsP6dTYQ17_08DyBZfjvJ",
	"col-xs-11": "_2iFdynZdYV3PXyKO3DiDjv",
	"col-xs-12": "hMgvxmM6F9RRUbVTmP4-7",
	"col-xs-offset-0": "_3gNxoJd8d-bldsSjOltEfN",
	"col-xs-offset-1": "_10Fb4i-U0RSaAZqbrp_CY7",
	"col-xs-offset-2": "_3WD8NmzGr_zCZbzB5_NtMx",
	"col-xs-offset-3": "-y433WVlQqBGoAFj02ibP",
	"col-xs-offset-4": "_1xsZGT1REGWSrKTw6c4fgX",
	"col-xs-offset-5": "_2yy_1idcfDKFgQ5TcNNKvT",
	"col-xs-offset-6": "iq1hJ4fcdMkX9xyyxCO-H",
	"col-xs-offset-7": "_38OP_qKBm7ehKuJobLyysL",
	"col-xs-offset-8": "_2cL4xH_jio2VTggPFppKE7",
	"col-xs-offset-9": "_1BzvZDT0r-yf88gwFBdIfA",
	"col-xs-offset-10": "_1093UUO_KO5gqXMYCs2o4j",
	"col-xs-offset-11": "_3JYRk5s0dfkFF9GEqsMl3i",
	"col-xs-offset-12": "_2rNhF8fSI4JkD7nYy5bOY1",
	"col-sm": "_2eAwXZMLcA3y-N8UQQO95r",
	"col-sm-1": "_2PCkDzO_mKA6RNJMhRTz-T",
	"col-sm-2": "_3zPPwGFRIt2GDRfSwN_4Om",
	"col-sm-3": "_2L-j15ELZyojmT3eyoOtYD",
	"col-sm-4": "zGnlXEaOHABoQHI0-S-XT",
	"col-sm-5": "MVga9NTFwsVfbKfSB_MCg",
	"col-sm-6": "_19KWytUV-1-44xw1SsAjBk",
	"col-sm-7": "_1lx-Co8Fit6T7Jn6ypnwOm",
	"col-sm-8": "_3Lb7VaQgyIuIAP25oCTvkS",
	"col-sm-9": "X5Ui2qm-p-0zSF6xDPfAJ",
	"col-sm-10": "_2vxqiuJ4QxriNymBjC82SR",
	"col-sm-11": "_2npp2gZFPsJZD0Rk1yJkKn",
	"col-sm-12": "_3s_mYPsHHMtOwogyztk9sI",
	"col-sm-offset-0": "_28sf61pUebIK3vIvDVcT9h",
	"col-sm-offset-1": "_2wxMoFPLLM3EFxcFYHe4it",
	"col-sm-offset-2": "_2EDIS7pNFyy4oZQcuUOCSW",
	"col-sm-offset-3": "_1C2VROlSmVM-s7X_kL1OQl",
	"col-sm-offset-4": "_3fi9k92XK1Dt7sUCL3CVqk",
	"col-sm-offset-5": "_3BAocwgRj3-o2mGCJaZls",
	"col-sm-offset-6": "_2syN1-liWh-tdui07T4qaj",
	"col-sm-offset-7": "_250OvRw5Nz1ZcM5j8i-LB_",
	"col-sm-offset-8": "_1pJBvGvl1gs0VhIlW4f-m6",
	"col-sm-offset-9": "_2OAz7xnXZJAU6yQg7E0vW6",
	"col-sm-offset-10": "_3LJLh19Zff9KpIIFRoerIU",
	"col-sm-offset-11": "vawGTx0AT6YSkN9WC_Yhv",
	"col-sm-offset-12": "_2_rcSt9vc7VRBJVT2ViQp-",
	"col-md": "_1spa-jxiuuE2T4T8HpNYG7",
	"col-md-1": "_3EHi5o6fJYzmnfsChqbDwd",
	"col-md-2": "_3-PFkn6nUDsvXJMM19_ecs",
	"col-md-3": "B1coWYldHjRyJAnwsZN2i",
	"col-md-4": "XB80zd3_9WdDEaVHQmjiA",
	"col-md-5": "_3acD-sqvwh0-sDfru0rcFG",
	"col-md-6": "_3i5o7O_kZR4S1TO6AMCUFz",
	"col-md-7": "GTeLMvazZuIoLUqsLFvfP",
	"col-md-8": "_1tFM5ZgGJA2GuE_6S1kW7y",
	"col-md-9": "_4fP405MX4WIoIWZVJfb-m",
	"col-md-10": "OtBn1KSs_8GuBkSXqJNxz",
	"col-md-11": "_3a7vVJdwbRSnITn8_kJVE1",
	"col-md-12": "PDdEOdhhGH326qDGhZ-ZW",
	"col-md-offset-0": "_10faWxoB_dM8Mj42nTvmC8",
	"col-md-offset-1": "_1_zIAnFLxJVt1NUG4wijHg",
	"col-md-offset-2": "_193ZAzyfhFfT8DUuciLKJD",
	"col-md-offset-3": "SfqrtNQ5KwfkceOJyvqTt",
	"col-md-offset-4": "_120HQHYevt585x5x6Gfskw",
	"col-md-offset-5": "MuaJXxzaNN2G8JY9EOtxP",
	"col-md-offset-6": "_3bXQHKG8D1Tkr0jeNJAG_0",
	"col-md-offset-7": "gcunXblBjROS62U6ep5pa",
	"col-md-offset-8": "_2jGagSB2z_HsZac_n2bWT_",
	"col-md-offset-9": "MSTaGthEM-NbqthuqKoL1",
	"col-md-offset-10": "_1ztsS4jxfzhQjPunhTFnwH",
	"col-md-offset-11": "_3BEcGgWyaF7kxnvvGWz1CA",
	"col-md-offset-12": "_176O36-JUtSKTRjIhg3l-",
	"col-lg": "_1UDYsA34-hutJ_3NRUi_Aj",
	"col-lg-1": "_3UJ6drR4usYI8nGGV3ZozQ",
	"col-lg-2": "_3boxRD9kGYIBT8DwagU7vk",
	"col-lg-3": "_1qEzvuhKdfdZsIKTu359wx",
	"col-lg-4": "_19eAKT1YmCgBn-7VGguOtP",
	"col-lg-5": "_2WFMFmTX0Cy2zsVrsfnxJM",
	"col-lg-6": "YAK89JyHFdt0ZeyTPFFeF",
	"col-lg-7": "_2CTjghsK-zkhYWEs6G3_cw",
	"col-lg-8": "_3ur-4EYsP3B16EMfrYZgiA",
	"col-lg-9": "_7VXF-f-0bmC5S0RPISUfy",
	"col-lg-10": "_23PtyXT5E9ZLAqYFpClSLs",
	"col-lg-11": "_3dCbSfDnoLWC4FwTWF3tZl",
	"col-lg-12": "wVsWmebMip0hKXhAypx7f",
	"col-lg-offset-0": "_3YLZpzzZwvjWEKyRjbbptX",
	"col-lg-offset-1": "_1kjg1Iwv-mFy_qIwEUUCtc",
	"col-lg-offset-2": "_3AGcrHHfkUTDTfZYnhT9Dm",
	"col-lg-offset-3": "_2wnrVvESAPIKNxQlLOjPPq",
	"col-lg-offset-4": "_3M2p7hFEZw32maBA_OSYnD",
	"col-lg-offset-5": "_17fI53V4Dvq4G3JYChJo6y",
	"col-lg-offset-6": "_1JMYV7BkW50O_vK3VJ1iAi",
	"col-lg-offset-7": "_3ZJz0YBuskjQ9hyiEw7dys",
	"col-lg-offset-8": "_2ZTNMIULP0j0rGBjX8jLFu",
	"col-lg-offset-9": "zJxs1BPDp9il-bH8gRLBO",
	"col-lg-offset-10": "_2wz97LqKYDF-gaiBYBr4Ua",
	"col-lg-offset-11": "_3VrcEHIgLA8johSgkpr31S",
	"col-lg-offset-12": "_3EuwoXnqAGvh09usCp4YCX",
	"col-xl": "nC1Bmmf7RsQypB6jQA8xr",
	"col-xl-1": "_3bRaKmTW2FrcdktGPnead2",
	"col-xl-2": "_1RhJqqDFmHZQ1uQCzXfP-h",
	"col-xl-3": "_1tHH7RwWncBj-2JHI4RrsJ",
	"col-xl-4": "_2aaZzNDwV3dhf2M-4niuKI",
	"col-xl-5": "_26Kr9cAQdMRb7Y3bwDQChd",
	"col-xl-6": "_He3rTX7MkI_j-n7KPMQg",
	"col-xl-7": "_1x0yS_dbsWEcKUYPzjmDfR",
	"col-xl-8": "_3XH86GoFkqBSFoiUb20Y5d",
	"col-xl-9": "_18YVE7doKfDkvbIyJ--pOQ",
	"col-xl-10": "_3c5Lp5lB4mgGYDYmAzzkc3",
	"col-xl-11": "_1LsUBwkhQQoH4N53FtO6bc",
	"col-xl-12": "_2XVMsJkF9QInS4EQNLYJfX",
	"col-xl-offset-0": "_10Wlzi113C2d80TjtySB6k",
	"col-xl-offset-1": "_1_1nVmpOt-6o360k-LD-F2",
	"col-xl-offset-2": "_2Q88mhR06fdNPcP-j0LRyd",
	"col-xl-offset-3": "L2UIA6czP3S9RHL8ta8lU",
	"col-xl-offset-4": "_1_e9UQRgq_nDF_1TjRS4hk",
	"col-xl-offset-5": "Qu_wG0-X-lkQyHBZ6V_e2",
	"col-xl-offset-6": "_27j2FLG18H5xQmLr4hsXCd",
	"col-xl-offset-7": "_2EGR_-rNFTniR1frYYvMC_",
	"col-xl-offset-8": "_1UyxJJI4FoqPPHjkhfgj4j",
	"col-xl-offset-9": "_2OMfdyzE27b0EWiyhZhWUN",
	"col-xl-offset-10": "_16IG_ZqaKqSiza-CStFo2B",
	"col-xl-offset-11": "_2V4P2qUKfRbj6lJWU4zj2q",
	"col-xl-offset-12": "_1VmFS0fbSKbN9KFApU7EfO",
	"start-xs": "_194WYWsK2yfbkvevZZGnY1",
	"center-xs": "_3tuGIR-559nMZ8iNLj81ch",
	"end-xs": "_1qLEEAMOUkSQRCTrEgQ0OW",
	"top-xs": "_23ZEeno1Sr01EkAA8EdSf7",
	"middle-xs": "_3a5RaFJyLjQGXsFnFb23Cm",
	"bottom-xs": "_1pv7hVa1hnh_uIYL-ITFgm",
	"around-xs": "_2iXmOd3U8QNyQDcXYPymLo",
	"between-xs": "_3p26VQRfZSUiXAbOC0eQ_w",
	"first-xs": "_3t70ebvxwrDastXBmqpNMO",
	"last-xs": "_1RvOYvU2U8_RaQsAZcwG-Z",
	"initial-order-xs": "_1mfxLKp3UCSu8c1vSavQV2",
	"start-sm": "bzwQSHEDX8e6FxVEy-62x",
	"center-sm": "_2z9WmtUXyyKvmAhM2dyv5",
	"end-sm": "_2MXQxUnx7TLJopEj2rIgjN",
	"top-sm": "gaNpyGys75Nq99kZdRG1T",
	"middle-sm": "_1PwtuBt7M-352YjYO1-5DK",
	"bottom-sm": "aejxT-RuwWzAzwj6tSrfu",
	"around-sm": "_22LMfAeDnjnO5oFpn7Jk9u",
	"between-sm": "_3tQvIMpqPITarRwcNaOTwg",
	"first-sm": "_2Dz-jr5s_qIZkvZ-dEM-pT",
	"last-sm": "_3CK63qoMN-_zEUMdBNDXI1",
	"initial-order-sm": "_3_AEhLM_Kmm7PwTETApi6B",
	"start-md": "-vcOFQ2GQ9B0oODbJzwMg",
	"center-md": "ztc3epXDYYJEJKcPoVqmD",
	"end-md": "_1TL8rP1mCsakga8cpeEQf7",
	"top-md": "_11bENgeDBB0d2J2pGXGPNy",
	"middle-md": "_2TaAmSPJMW-X-fJ5Hf-MHE",
	"bottom-md": "TnTr9p0vnl2q0CZW3f6rC",
	"around-md": "_3D772RsmVE2DqpKRUt3XgH",
	"between-md": "phu9ltECM3gwhkdaiCTU7",
	"first-md": "_2jb6KynNwlSJewOi5Ajnt0",
	"last-md": "o0YRR1UNiOIe5eJar5CZN",
	"initial-order-md": "_1ruNkA83QCBut5H8yVvAhz",
	"start-lg": "_34_ZZLJcmhYxbxL1IWNH-4",
	"center-lg": "_2RTmKmvYhsQFiL3GDyF5O-",
	"end-lg": "_2l_GGD4isiHC7u83Hk9nH7",
	"top-lg": "uj_m_NsKuZBDrGjKngGeR",
	"middle-lg": "_11-AazFv3E2caA0TcL6VrK",
	"bottom-lg": "XL-_VkQ-TblGs9Iqix3ac",
	"around-lg": "XPoiTRiFsuanDuixKtcDd",
	"between-lg": "_3r-81hriCRITJ6sUmV7-am",
	"first-lg": "_21NoP-FLtSMgSZVdvQf-06",
	"last-lg": "_9Y40PHhqpXBXNm5wCj03u",
	"initial-order-lg": "_5eIbhlBxPrQjirmWxiB_D",
	"start-xl": "ZOnqSPs1t4q2iC5Ag5TjL",
	"center-xl": "_3r5GVbs4Zl_-k8Z27Re4xA",
	"end-xl": "_2ctkkNVq-unnp3UuxSTUYt",
	"top-xl": "_3KFS6NO4Fi6fHNV1Wp5T7_",
	"middle-xl": "PSO6OaeaGjvXUFbdr-ZRo",
	"bottom-xl": "_26Krk4YdfGL3Jkv9OhngnV",
	"around-xl": "_3mf8dxnRtWDeX3Ge4ShaJ8",
	"between-xl": "PJkj5Il2COrXNPkpCPuN3",
	"first-xl": "_2l-u6jjfdbZxAS_aqKfwYm",
	"last-xl": "_697bXIqDXnnEPABdrPy6J",
	"initial-order-xl": "_26z4ldsQKQvAvqkh2v8FB6",
	"hidden-xs": "_2KY0nmXvhEXx2TYBi2QIBw",
	"hidden-sm": "_3Kg0vUWAv6XOn83CNtnM85",
	"hidden-md": "_2xSdq7tDxUG0dAKi5CSMGX",
	"hidden-lg": "_3Vfzz0dn0YH78CXt9RYHDR",
	"hidden-xl": "_3DC78TRNjdk0_hKRo1HThk"
};

/***/ }),

/***/ "./admin/commons/uikit/components/PhotoUploader/index.js":
/*!***************************************************************!*\
  !*** ./admin/commons/uikit/components/PhotoUploader/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotoUploader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _photoUploaderStyle_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./photoUploaderStyle.scss */ "./admin/commons/uikit/components/PhotoUploader/photoUploaderStyle.scss");
/* harmony import */ var _photoUploaderStyle_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_photoUploaderStyle_scss__WEBPACK_IMPORTED_MODULE_12__);














var PhotoUploader =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(PhotoUploader, _PureComponent);

  function PhotoUploader() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PhotoUploader);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(PhotoUploader).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleUploadFile", function (e) {
      e.preventDefault();
      var handleUpload = _this.props.handleUpload;
      var files = e.target.files;
      if (files) handleUpload(files);
    });

    _this.inputUpload = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.handleDrop = _this.handleDrop.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PhotoUploader, [{
    key: "handleDrop",
    // Drag and Drop image handlers
    value: function handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      var handleUpload = this.props.handleUpload;
      var files = e.dataTransfer.files;
      if (files.length === 0) return false;
      handleUpload(files);
      return false;
    }
  }, {
    key: "_onDragEnter",
    value: function _onDragEnter(e) {
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }, {
    key: "_onDragOver",
    value: function _onDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, {
    key: "_onDragLeave",
    value: function _onDragLeave(e) {
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          preview = _this$props.preview,
          className = _this$props.className,
          wrapperClassName = _this$props.wrapperClassName,
          photoItemClassName = _this$props.photoItemClassName,
          handleUpload = _this$props.handleUpload,
          handleChange = _this$props.handleChange,
          other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["label", "preview", "className", "wrapperClassName", "photoItemClassName", "handleUpload", "handleChange"]);

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(_photoUploaderStyle_scss__WEBPACK_IMPORTED_MODULE_12___default.a.photoUploader, className)
      }, other), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "file",
        name: "file",
        accept: "image/*",
        id: "company-create-upload",
        className: _photoUploaderStyle_scss__WEBPACK_IMPORTED_MODULE_12___default.a.input,
        onChange: this.handleUploadFile,
        ref: this.inputUpload,
        multiple: true
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: _photoUploaderStyle_scss__WEBPACK_IMPORTED_MODULE_12___default.a.lablePhotoUploader,
        htmlFor: "company-create-upload",
        onDrop: this.handleDrop,
        onDragEnter: this._onDragEnter,
        onDragOver: this._onDragOver,
        onDragLeave: this._onDragLeave
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "material-icons"
      }, "add_a_photo"), label));
    }
  }]);

  return PhotoUploader;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(PhotoUploader, "propTypes", {
  label: prop_types__WEBPACK_IMPORTED_MODULE_10__["string"].isRequired
});



/***/ }),

/***/ "./admin/commons/uikit/components/PhotoUploader/photoUploaderStyle.scss":
/*!******************************************************************************!*\
  !*** ./admin/commons/uikit/components/PhotoUploader/photoUploaderStyle.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "VfcX0ee2Wh3m3LQ09w9jm",
	"photoUploader": "_2dU05vKsEbubmpuyRFeuX8",
	"input": "_3TN0RHYheNRscGYfSn4ESL",
	"image-previewer": "_1y-EuOSJRDDBExU4l3Qh2j",
	"imgContainer": "_3exoMUJohWYsYY8TlTrXmH",
	"imgCover": "_2SRlNM_SItJ5bl1X3VVFOU",
	"imgHover": "_3ONGDuWACtOQj1fb9UVPlh",
	"remove-img": "_1_PugwyzGnSYl95h0_Lboh",
	"lablePhotoUploader": "_1-sONhGcyWKIEBwIZQjowI"
};

/***/ }),

/***/ "./admin/commons/uikit/components/TextEditor/TextEditor.js":
/*!*****************************************************************!*\
  !*** ./admin/commons/uikit/components/TextEditor/TextEditor.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var draft_js_plugins_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! draft-js-plugins-editor */ "draft-js-plugins-editor");
/* harmony import */ var draft_js_plugins_editor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(draft_js_plugins_editor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Toolbar */ "./admin/commons/uikit/components/TextEditor/components/Toolbar.js");
/* harmony import */ var _components_InlineToolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/InlineToolbar */ "./admin/commons/uikit/components/TextEditor/components/InlineToolbar.js");
/* harmony import */ var _scss_TextEditor_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scss/TextEditor.scss */ "./admin/commons/uikit/components/TextEditor/scss/TextEditor.scss");
/* harmony import */ var _scss_TextEditor_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scss_TextEditor_scss__WEBPACK_IMPORTED_MODULE_14__);










/* eslint-disable */






var emptyContentState = Object(draft_js__WEBPACK_IMPORTED_MODULE_10__["convertFromRaw"])({
  entityMap: {},
  blocks: [{
    key: '0',
    text: '',
    type: 'unstyled',
    depth: 0,
    inlineStyleRanges: [],
    entityRanges: [],
    data: {}
  }]
});
var Toolbar = _components_Toolbar__WEBPACK_IMPORTED_MODULE_12__["default"].Toolbar;
var plugins = [_components_Toolbar__WEBPACK_IMPORTED_MODULE_12__["default"]].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_components_InlineToolbar__WEBPACK_IMPORTED_MODULE_13__["inlineToolbarPlugins"]));

var TextEditor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TextEditor, _React$Component);

  function TextEditor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TextEditor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TextEditor).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onEditorStateChange", function (editorState) {
      if (typeof _this.props.onChange === 'function') _this.props.onChange(editorState);

      _this.setState(function (prevState) {
        return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, prevState, {
          editorState: editorState
        });
      });
    });

    _this.state = {
      editorState: props.editorState || draft_js__WEBPACK_IMPORTED_MODULE_10__["EditorState"].createWithContent(emptyContentState)
    };
    _this.editor = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.handleKeyCommand = _this.handleKeyCommand.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handlePastedText = _this.handlePastedText.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onEditorStateChange = _this.onEditorStateChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handlePastedFiles = _this.handlePastedFiles.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TextEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        editorState: nextProps.editorState
      });
    }
  }, {
    key: "handleKeyCommand",
    value: function handleKeyCommand(command, editorState) {
      var newState = draft_js__WEBPACK_IMPORTED_MODULE_10__["RichUtils"].handleKeyCommand(editorState, command);

      if (newState) {
        this.onEditorStateChange(newState);
        return 'handled';
      }

      return 'not-handled';
    }
  }, {
    key: "handlePastedText",
    value: function handlePastedText(text) {
      var _this2 = this;

      if (text.match(/.png|.jpg|.jpeg|.sgv|.gif/)) {
        setTimeout(function () {
          return _this2.onEditorStateChange(imagePlugin.addImage(_this2.state.editorState, text));
        }, 1000);
      }

      if (text.match(/youtu.be|youtube.com/)) {
        setTimeout(function () {
          return _this2.onEditorStateChange(videoPlugin.addVideo(_this2.state.editorState, {
            srcID: text,
            srcType: 'youtube',
            url: text
          }));
        }, 1000);
      }
    }
  }, {
    key: "handlePastedFiles",
    value: function handlePastedFiles(file) {
      var _this3 = this;

      mockUpload(file[0], function (result) {
        _this3.onEditorStateChange(imagePlugin.addImage(_this3.state.editorState, result.src));
      }, null, function () {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var editorState = this.state.editorState;
      var _this$props = this.props,
          label = _this$props.label,
          readOnly = _this$props.readOnly;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _scss_TextEditor_scss__WEBPACK_IMPORTED_MODULE_14___default.a['text-editor']
      }, label && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "editor"
      }, label), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _scss_TextEditor_scss__WEBPACK_IMPORTED_MODULE_14___default.a['editor-container']
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Toolbar, {
        editorState: editorState,
        onChange: this.onEditorStateChange
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _scss_TextEditor_scss__WEBPACK_IMPORTED_MODULE_14___default.a.editor,
        onClick: function onClick() {
          return _this4.editor.current.focus();
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(draft_js_plugins_editor__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "editor-comspace",
        editorKey: "editor",
        editorState: editorState,
        onFocus: function onFocus() {
          return _this4.isFocus = true;
        },
        onChange: this.onEditorStateChange,
        handlePastedText: this.handlePastedText,
        handlePastedFiles: this.handlePastedFiles,
        handleKeyCommand: this.handleKeyCommand,
        plugins: plugins,
        readOnly: readOnly,
        ref: this.editor
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_InlineToolbar__WEBPACK_IMPORTED_MODULE_13__["InlineToolbar"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "clearfix"
      }))));
    }
  }]);

  return TextEditor;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TextEditor);

/***/ }),

/***/ "./admin/commons/uikit/components/TextEditor/components/InlineToolbar.js":
/*!*******************************************************************************!*\
  !*** ./admin/commons/uikit/components/TextEditor/components/InlineToolbar.js ***!
  \*******************************************************************************/
/*! exports provided: InlineToolbar, inlineToolbarPlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineToolbar", function() { return InlineToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlineToolbarPlugins", function() { return inlineToolbarPlugins; });
/* harmony import */ var draft_js_anchor_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js-anchor-plugin */ "draft-js-anchor-plugin");
/* harmony import */ var draft_js_anchor_plugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js_anchor_plugin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js_inline_toolbar_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js-inline-toolbar-plugin */ "draft-js-inline-toolbar-plugin");
/* harmony import */ var draft_js_inline_toolbar_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js_inline_toolbar_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js-buttons */ "draft-js-buttons");
/* harmony import */ var draft_js_buttons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js_buttons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draft_js_anchor_plugin_lib_plugin_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-js-anchor-plugin/lib/plugin.css */ "./node_modules/draft-js-anchor-plugin/lib/plugin.css");
/* harmony import */ var draft_js_anchor_plugin_lib_plugin_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draft_js_anchor_plugin_lib_plugin_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draft_js_inline_toolbar_plugin_lib_plugin_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js-inline-toolbar-plugin/lib/plugin.css */ "./node_modules/draft-js-inline-toolbar-plugin/lib/plugin.css");
/* harmony import */ var draft_js_inline_toolbar_plugin_lib_plugin_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js_inline_toolbar_plugin_lib_plugin_css__WEBPACK_IMPORTED_MODULE_4__);





var linkPlugin = draft_js_anchor_plugin__WEBPACK_IMPORTED_MODULE_0___default()();
var inlineToolbarPlugin = draft_js_inline_toolbar_plugin__WEBPACK_IMPORTED_MODULE_1___default()({
  structure: [draft_js_buttons__WEBPACK_IMPORTED_MODULE_2__["BoldButton"], draft_js_buttons__WEBPACK_IMPORTED_MODULE_2__["ItalicButton"], draft_js_buttons__WEBPACK_IMPORTED_MODULE_2__["UnderlineButton"], linkPlugin.LinkButton]
});
var InlineToolbar = inlineToolbarPlugin.InlineToolbar;
var inlineToolbarPlugins = [inlineToolbarPlugin, linkPlugin];


/***/ }),

/***/ "./admin/commons/uikit/components/TextEditor/components/Toolbar.js":
/*!*************************************************************************!*\
  !*** ./admin/commons/uikit/components/TextEditor/components/Toolbar.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var draft_js_static_toolbar_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! draft-js-static-toolbar-plugin */ "draft-js-static-toolbar-plugin");
/* harmony import */ var draft_js_static_toolbar_plugin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(draft_js_static_toolbar_plugin__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scss_Toolbar_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/Toolbar.scss */ "./admin/commons/uikit/components/TextEditor/scss/Toolbar.scss");
/* harmony import */ var _scss_Toolbar_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_Toolbar_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scss_ToolbarButton_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scss/ToolbarButton.scss */ "./admin/commons/uikit/components/TextEditor/scss/ToolbarButton.scss");
/* harmony import */ var _scss_ToolbarButton_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_ToolbarButton_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! draft-js-buttons */ "draft-js-buttons");
/* harmony import */ var draft_js_buttons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Dropdown */ "./admin/commons/uikit/components/Dropdown/index.js");













var HeadlinesButton =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HeadlinesButton, _React$PureComponent);

  function HeadlinesButton() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HeadlinesButton);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(HeadlinesButton).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(HeadlinesButton, [{
    key: "render",
    value: function render() {
      var _this = this;

      var buttons = [draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__["HeadlineOneButton"], draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__["HeadlineTwoButton"], draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__["HeadlineThreeButton"]];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _scss_ToolbarButton_scss__WEBPACK_IMPORTED_MODULE_9___default.a.buttonWrapper
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "H",
        buttonProps: {
          className: _scss_ToolbarButton_scss__WEBPACK_IMPORTED_MODULE_9___default.a.button,
          clear: true
        }
      }, buttons.map(function (Button, i) {
        return (// eslint-disable-next-line
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            key: i
          }, _this.props))
        );
      })));
    }
  }]);

  return HeadlinesButton;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

var toolbarPlugin = draft_js_static_toolbar_plugin__WEBPACK_IMPORTED_MODULE_7___default()({
  structure: [draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__["BoldButton"], draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__["ItalicButton"], draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__["UnderlineButton"], draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__["BlockquoteButton"], HeadlinesButton, draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__["UnorderedListButton"], draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__["OrderedListButton"], draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__["SupButton"], draft_js_buttons__WEBPACK_IMPORTED_MODULE_10__["SubButton"]],
  theme: {
    buttonStyles: _scss_ToolbarButton_scss__WEBPACK_IMPORTED_MODULE_9___default.a,
    toolbarStyles: _scss_Toolbar_scss__WEBPACK_IMPORTED_MODULE_8___default.a
  }
});
/* harmony default export */ __webpack_exports__["default"] = (toolbarPlugin);

/***/ }),

/***/ "./admin/commons/uikit/components/TextEditor/index.js":
/*!************************************************************!*\
  !*** ./admin/commons/uikit/components/TextEditor/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextEditor */ "./admin/commons/uikit/components/TextEditor/TextEditor.js");

/* harmony default export */ __webpack_exports__["default"] = (_TextEditor__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/components/TextEditor/scss/TextEditor.scss":
/*!************************************************************************!*\
  !*** ./admin/commons/uikit/components/TextEditor/scss/TextEditor.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"text-editor": "_3tQki-8NyPAF-KNiCVytao",
	"editor-container": "_2q3MwnK6xeb9t_MdzTwjua",
	"editor": "_2sawN_RhAlJq8uaaURxnsF"
};

/***/ }),

/***/ "./admin/commons/uikit/components/TextEditor/scss/Toolbar.scss":
/*!*********************************************************************!*\
  !*** ./admin/commons/uikit/components/TextEditor/scss/Toolbar.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"toolbar": "_2gUfsfXAzvgOSX-6GcQQjf"
};

/***/ }),

/***/ "./admin/commons/uikit/components/TextEditor/scss/ToolbarButton.scss":
/*!***************************************************************************!*\
  !*** ./admin/commons/uikit/components/TextEditor/scss/ToolbarButton.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"buttonWrapper": "_3dYw6cs_zHt-4Q6DYDgV4B",
	"button": "_3PCJ76UgYFVsts47u3rgAr",
	"active": "aTUvv7dOg-pepdNDB4Fxt"
};

/***/ }),

/***/ "./admin/commons/uikit/components/TextField/TextField.js":
/*!***************************************************************!*\
  !*** ./admin/commons/uikit/components/TextField/TextField.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _TextField_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TextField.scss */ "./admin/commons/uikit/components/TextField/TextField.scss");
/* harmony import */ var _TextField_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_TextField_scss__WEBPACK_IMPORTED_MODULE_12__);










 // import withStyles from 'isomorphic-style-loader/lib/withStyles';




var TextField =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(TextField, _React$Component);

  function TextField(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TextField);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(TextField).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onFocus", function (event) {
      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) _this.props.onFocus(event);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onBlur", function (event) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) _this.props.onBlur(event);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChange", function (event) {
      var _this$props = _this.props,
          multiline = _this$props.multiline,
          autoHeight = _this$props.autoHeight,
          onChange = _this$props.onChange;

      if (multiline && autoHeight) {
        var current = _this.textareaRef.current;
        var style = current.style;
        style.height = 'auto';
        var clientHeight = current.clientHeight,
            scrollHeight = current.scrollHeight;
        if (clientHeight < scrollHeight) style.height = "".concat(scrollHeight, "px");
      }

      if (onChange) onChange(event);
    });

    _this.state = {
      focused: false
    };
    _this.onFocus = _this.onFocus.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onBlur = _this.onBlur.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.renderInputElement = _this.renderInputElement.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.renderInputAdornment = _this.renderInputAdornment.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.textareaRef = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(TextField, [{
    key: "renderInputElement",
    value: function renderInputElement() {
      var _this$props2 = this.props,
          multiline = _this$props2.multiline,
          id = _this$props2.id,
          value = _this$props2.value,
          inputProps = _this$props2.inputProps,
          _this$props2$type = _this$props2.type,
          type = _this$props2$type === void 0 ? 'text' : _this$props2$type;
      return multiline ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        id: id,
        name: id,
        rows: 1,
        type: "text",
        ref: this.textareaRef,
        value: value,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange
      }, inputProps)) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        id: id,
        name: id,
        type: type,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        value: value
      }, inputProps));
    }
  }, {
    key: "renderInputAdornment",
    value: function renderInputAdornment(adornment) {
      return adornment && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _TextField_scss__WEBPACK_IMPORTED_MODULE_12___default.a['input-adornment']
      }, adornment);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          id = _this$props3.id,
          label = _this$props3.label,
          multiline = _this$props3.multiline,
          autoHeight = _this$props3.autoHeight,
          value = _this$props3.value,
          startAdornment = _this$props3.startAdornment,
          endAdornment = _this$props3.endAdornment,
          helperText = _this$props3.helperText,
          error = _this$props3.error,
          touched = _this$props3.touched,
          className = _this$props3.className,
          inputProps = _this$props3.inputProps,
          labelProps = _this$props3.labelProps,
          onChange = _this$props3.onChange,
          underlineColor = _this$props3.underlineColor,
          otherProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props3, ["id", "label", "multiline", "autoHeight", "value", "startAdornment", "endAdornment", "helperText", "error", "touched", "className", "inputProps", "labelProps", "onChange", "underlineColor"]);

      var focused = this.state.focused;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_11___default()(_TextField_scss__WEBPACK_IMPORTED_MODULE_12___default.a.root, className, touched && error && _TextField_scss__WEBPACK_IMPORTED_MODULE_12___default.a.error);
      var inputWrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_11___default()(_TextField_scss__WEBPACK_IMPORTED_MODULE_12___default.a['input-element'], underlineColor == "main" && _TextField_scss__WEBPACK_IMPORTED_MODULE_12___default.a['underline-color-main'], focused && _TextField_scss__WEBPACK_IMPORTED_MODULE_12___default.a.focused);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        className: "".concat(classes)
      }, otherProps), label && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        htmlFor: id
      }, labelProps), label), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: _TextField_scss__WEBPACK_IMPORTED_MODULE_12___default.a['input-group']
      }, this.renderInputAdornment(startAdornment), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: inputWrapperClasses
      }, this.renderInputElement()), this.renderInputAdornment(endAdornment)), helperText && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: _TextField_scss__WEBPACK_IMPORTED_MODULE_12___default.a['helper-text']
      }, helperText));
    }
  }]);

  return TextField;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

TextField.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.node]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number]))]),
  underlineColor: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string
};
TextField.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (TextField);

/***/ }),

/***/ "./admin/commons/uikit/components/TextField/TextField.scss":
/*!*****************************************************************!*\
  !*** ./admin/commons/uikit/components/TextField/TextField.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "_1kXxvfX998cvSq93JThxUj",
	"input-group": "_2KcWKHCdqQvRwapAmx3bRR",
	"input-adornment": "_1ZvcEsdUwOZxtvOmchCRn_",
	"input-element": "_23TGdE2280doZOI_sWnFHP",
	"focused": "aFHdH12oO8rEjLxTXtSm_",
	"underline-color-main": "_2im8i4BqhnhIlWBkM389pY",
	"helper-text": "E6AgX6W3S3SMops0my45g",
	"error": "_29TlnNMefqBOk3NyPL1wdv"
};

/***/ }),

/***/ "./admin/commons/uikit/components/TextField/index.js":
/*!***********************************************************!*\
  !*** ./admin/commons/uikit/components/TextField/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField */ "./admin/commons/uikit/components/TextField/TextField.js");

/* harmony default export */ __webpack_exports__["default"] = (_TextField__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./admin/commons/uikit/index.js":
/*!**************************************!*\
  !*** ./admin/commons/uikit/index.js ***!
  \**************************************/
/*! exports provided: AppLayout, AppBar, AppFooter, Button, Block, Checkbox, Container, Col, Row, TextField, TextEditor, Dropdown, Collapse, PhotoUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.scss */ "./admin/commons/uikit/reset.scss");
/* harmony import */ var _reset_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reset_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AppBar */ "./admin/commons/uikit/components/AppBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return _components_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_AppFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AppFooter */ "./admin/commons/uikit/components/AppFooter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppFooter", function() { return _components_AppFooter__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AppLayout */ "./admin/commons/uikit/components/AppLayout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppLayout", function() { return _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Button */ "./admin/commons/uikit/components/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_Button__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Block */ "./admin/commons/uikit/components/Block/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return _components_Block__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TextField */ "./admin/commons/uikit/components/TextField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return _components_TextField__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Checkbox */ "./admin/commons/uikit/components/Checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _components_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Grid */ "./admin/commons/uikit/components/Grid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _components_Grid__WEBPACK_IMPORTED_MODULE_8__["Container"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _components_Grid__WEBPACK_IMPORTED_MODULE_8__["Col"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _components_Grid__WEBPACK_IMPORTED_MODULE_8__["Row"]; });

/* harmony import */ var _components_TextEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/TextEditor */ "./admin/commons/uikit/components/TextEditor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextEditor", function() { return _components_TextEditor__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Dropdown */ "./admin/commons/uikit/components/Dropdown/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _components_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _components_Collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Collapse */ "./admin/commons/uikit/components/Collapse/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return _components_Collapse__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _components_PhotoUploader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/PhotoUploader */ "./admin/commons/uikit/components/PhotoUploader/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotoUploader", function() { return _components_PhotoUploader__WEBPACK_IMPORTED_MODULE_12__["default"]; });
















/***/ }),

/***/ "./admin/commons/uikit/reset.scss":
/*!****************************************!*\
  !*** ./admin/commons/uikit/reset.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./admin/commons/utils/authenticate.js":
/*!*********************************************!*\
  !*** ./admin/commons/utils/authenticate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user */ "./admin/commons/utils/user.js");










var Authentication = function Authentication(WrappedComponent) {
  var AuthComponent =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AuthComponent, _Component);

    function AuthComponent() {
      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AuthComponent);

      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AuthComponent).apply(this, arguments));
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AuthComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var token = this.props.token;
        var accessToken = _user__WEBPACK_IMPORTED_MODULE_8__["User"].getToken();

        if (!token && !accessToken) {
          global.window.location.href = '/admin/login';
        }
      }
    }, {
      key: "render",
      value: function render() {
        var token = this.props.token;

        if (!token) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null);
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "admin"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(WrappedComponent, this.props));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
          var req;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  req = _ref.req;
                  return _context.abrupt("return", {
                    token: req ? req.cookies['downyshoes@accesstoken'] : null
                  });

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return AuthComponent;
  }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

  return AuthComponent;
};

/* harmony default export */ __webpack_exports__["default"] = (Authentication);

/***/ }),

/***/ "./admin/commons/utils/cookies.js":
/*!****************************************!*\
  !*** ./admin/commons/utils/cookies.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);

var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (cookies);

/***/ }),

/***/ "./admin/commons/utils/request.js":
/*!****************************************!*\
  !*** ./admin/commons/utils/request.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Request; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./admin/constants/index.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! toastr */ "toastr");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user */ "./admin/commons/utils/user.js");
/* harmony import */ var toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! toastr/build/toastr.css */ "./node_modules/toastr/build/toastr.css");
/* harmony import */ var toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_11__);












toastr__WEBPACK_IMPORTED_MODULE_9___default.a.options.progressBar = true;
toastr__WEBPACK_IMPORTED_MODULE_9___default.a.options.positionClass = 'toast-bottom-right';
var request = axios__WEBPACK_IMPORTED_MODULE_6___default.a.create({
  baseURL: _constants__WEBPACK_IMPORTED_MODULE_8__["API_URL"],
  timeout: 10000,
  responseType: 'json'
});
var fileEndpoint = "/files/".concat(_constants__WEBPACK_IMPORTED_MODULE_8__["S3_BUCKET"], "/upload");

function handleRes(response) {
  if (response.data.status === 401) {
    toastr__WEBPACK_IMPORTED_MODULE_9___default.a.error(response.data.message, 'Please try login again!');
    window.location.href = '/admin/login';
    return {
      error: response.data.message
    };
  }

  return response.data;
}

function handleError() {
  toastr__WEBPACK_IMPORTED_MODULE_9___default.a.error('Something went wrong.', 'An Error Occurred!');
  throw error;
}

function initHeader(noAuth, isFormData) {
  var headers = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5___default()({}, {
    'Content-Type': isFormData ? 'multipart/form-data' : 'application/json'
  }, !noAuth && {
    Authorization: "".concat(_user__WEBPACK_IMPORTED_MODULE_10__["User"].getToken())
  });

  return headers;
}

var Request =
/*#__PURE__*/
function () {
  function Request() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Request);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Request, null, [{
    key: "post",
    value: function () {
      var _post = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(endpoint, data) {
        var noAuth,
            headers,
            response,
            _args = arguments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                noAuth = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
                headers = initHeader(noAuth);
                _context.prev = 2;
                _context.next = 5;
                return request.post(endpoint, data, {
                  headers: headers
                });

              case 5:
                response = _context.sent;
                return _context.abrupt("return", handleRes(response));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", handleError(_context.t0));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      function post(_x, _x2) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: "put",
    value: function () {
      var _put = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(endpoint, data) {
        var noAuth,
            headers,
            response,
            _args2 = arguments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                noAuth = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;
                headers = initHeader(noAuth);
                _context2.prev = 2;
                _context2.next = 5;
                return request.put(endpoint, data, headers);

              case 5:
                response = _context2.sent;
                return _context2.abrupt("return", handleRes(response));

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                return _context2.abrupt("return", handleError(_context2.t0));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 9]]);
      }));

      function put(_x3, _x4) {
        return _put.apply(this, arguments);
      }

      return put;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(endpoint) {
        var noAuth,
            headers,
            response,
            _args3 = arguments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                noAuth = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : false;
                headers = initHeader(noAuth);
                _context3.prev = 2;
                _context3.next = 5;
                return request.delete(endpoint, headers);

              case 5:
                response = _context3.sent;
                return _context3.abrupt("return", handleRes(response));

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                return _context3.abrupt("return", handleError(_context3.t0));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 9]]);
      }));

      function _delete(_x5) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "patch",
    value: function () {
      var _patch = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(endpoint, data) {
        var noAuth,
            headers,
            response,
            _args4 = arguments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                noAuth = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : false;
                headers = initHeader(noAuth);
                _context4.prev = 2;
                _context4.next = 5;
                return request.patch(endpoint, data, headers);

              case 5:
                response = _context4.sent;
                return _context4.abrupt("return", handleRes(response));

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](2);
                return _context4.abrupt("return", handleError(_context4.t0));

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 9]]);
      }));

      function patch(_x6, _x7) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(endpoint, params) {
        var noAuth,
            headers,
            response,
            _args5 = arguments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                noAuth = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : false;
                headers = initHeader(noAuth);
                _context5.prev = 2;
                _context5.next = 5;
                return request.get(endpoint, {
                  params: params,
                  headers: headers
                });

              case 5:
                response = _context5.sent;
                return _context5.abrupt("return", handleRes(response));

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](2);
                return _context5.abrupt("return", handleError(_context5.t0));

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[2, 9]]);
      }));

      function get(_x8, _x9) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(data, onUploadProgress) {
        var noAuth,
            headers,
            response,
            result,
            _args6 = arguments;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                noAuth = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : false;
                headers = initHeader(noAuth, true);
                _context6.prev = 2;
                _context6.next = 5;
                return request.post(fileEndpoint, data, {
                  headers: headers,
                  onUploadProgress: onUploadProgress
                });

              case 5:
                response = _context6.sent;
                result = response.data.result;
                return _context6.abrupt("return", result);

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](2);
                return _context6.abrupt("return", handleError(_context6.t0));

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[2, 10]]);
      }));

      function upload(_x10, _x11) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }()
  }]);

  return Request;
}();

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Request, "request", request);



/***/ }),

/***/ "./admin/commons/utils/user.js":
/*!*************************************!*\
  !*** ./admin/commons/utils/user.js ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookies */ "./admin/commons/utils/cookies.js");

var User = {
  store: function store(user, access_token) {
    _cookies__WEBPACK_IMPORTED_MODULE_0__["default"].set('downyshoes@accesstoken', access_token, {
      path: '/'
    });
    _cookies__WEBPACK_IMPORTED_MODULE_0__["default"].set('downyshoes@user', user, {
      path: '/'
    });
  },
  getCurrent: function getCurrent() {
    var user = _cookies__WEBPACK_IMPORTED_MODULE_0__["default"].get('downyshoes@user');
    return user;
  },
  getToken: function getToken() {
    var token = _cookies__WEBPACK_IMPORTED_MODULE_0__["default"].get('downyshoes@accesstoken');
    return token;
  },
  removeSession: function removeSession() {
    _cookies__WEBPACK_IMPORTED_MODULE_0__["default"].remove('downyshoes@accesstoken');
    _cookies__WEBPACK_IMPORTED_MODULE_0__["default"].remove('downyshoes@user');
  }
};

/***/ }),

/***/ "./admin/constants/index.js":
/*!**********************************!*\
  !*** ./admin/constants/index.js ***!
  \**********************************/
/*! exports provided: API_URL, S3_BUCKET, S3_URL, TOKEN_INVALID_CODE, AUTHORIZATION_REQUIRED_CODE, PRODUCTS_URL, PRODUCT_DETAIL, ADD_PRODUCT_URL, EDIT_PRODUCT_URL, ENDPOINT_USER_LOGIN, ENDPOINT_PRODUCTS, ENDPOINT_GET_PRODUCT_BY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S3_BUCKET", function() { return S3_BUCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S3_URL", function() { return S3_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_INVALID_CODE", function() { return TOKEN_INVALID_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHORIZATION_REQUIRED_CODE", function() { return AUTHORIZATION_REQUIRED_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_URL", function() { return PRODUCTS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_DETAIL", function() { return PRODUCT_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_URL", function() { return ADD_PRODUCT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_PRODUCT_URL", function() { return EDIT_PRODUCT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDPOINT_USER_LOGIN", function() { return ENDPOINT_USER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDPOINT_PRODUCTS", function() { return ENDPOINT_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDPOINT_GET_PRODUCT_BY_ID", function() { return ENDPOINT_GET_PRODUCT_BY_ID; });
var API_URL =  false ? undefined : 'http://localhost:5000/api';
var S3_BUCKET = 'pmh-souvenir';
var S3_URL = 'https://pmh-souvenir.s3.ap-southeast-1.amazonaws.com/';
var TOKEN_INVALID_CODE = 'INVALID_TOKEN';
var AUTHORIZATION_REQUIRED_CODE = 'AUTHORIZATION_REQUIRED'; //APP URLS

var PRODUCTS_URL = '/admin/products';
var PRODUCT_DETAIL = function PRODUCT_DETAIL(id) {
  return "/admin/products/detail?id=".concat(id);
};
var ADD_PRODUCT_URL = '/admin/products/add';
var EDIT_PRODUCT_URL = function EDIT_PRODUCT_URL(id) {
  return "/admin/products/edit?id=".concat(id);
}; //API ENDPOINTS

var ENDPOINT_USER_LOGIN = "/auth/login";
var ENDPOINT_PRODUCTS = '/products';
var ENDPOINT_GET_PRODUCT_BY_ID = function ENDPOINT_GET_PRODUCT_BY_ID(id) {
  return "/products/detail/".concat(id);
};

/***/ }),

/***/ "./admin/modules/app/products/AddProduct.js":
/*!**************************************************!*\
  !*** ./admin/modules/app/products/AddProduct.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! draft-js-export-html */ "draft-js-export-html");
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(draft_js_export_html__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var draft_js_import_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! draft-js-import-html */ "draft-js-import-html");
/* harmony import */ var draft_js_import_html__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(draft_js_import_html__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! toastr */ "toastr");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _commons_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../commons/uikit */ "./admin/commons/uikit/index.js");
/* harmony import */ var _commons_utils_request__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../commons/utils/request */ "./admin/commons/utils/request.js");
/* harmony import */ var _commons_utils_authenticate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../commons/utils/authenticate */ "./admin/commons/utils/authenticate.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../constants */ "./admin/constants/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services */ "./admin/modules/app/products/services.js");
/* harmony import */ var _Products_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Products.scss */ "./admin/modules/app/products/Products.scss");
/* harmony import */ var _Products_scss__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_Products_scss__WEBPACK_IMPORTED_MODULE_25__);



























var AddProduct =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(AddProduct, _React$Component);

  function AddProduct(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AddProduct);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(AddProduct).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "startUpload",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cloudinary.openUploadWidget({
                cloudName: 'izzilab',
                uploadPreset: 'downyshoes'
              }, function (error, result) {
                if (result && result.event === "success") {
                  var images = _this.state.images;
                  images.push(result.info.url);

                  _this.setState({
                    images: images
                  });
                }
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "getProduct",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
      var router, productId, _ref3, product, state;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              router = _this.props.router;
              productId = router.query.id;
              _context2.next = 4;
              return _services__WEBPACK_IMPORTED_MODULE_24__["getProduct"](productId);

            case 4:
              _ref3 = _context2.sent;
              product = _ref3.product;
              state = {
                id: product._id,
                name: product.name,
                cover: product.cover,
                images: product.images,
                price: product.price,
                sale_price: product.sale_price,
                short_description: product.short_description
              };
              state.editorState = draft_js__WEBPACK_IMPORTED_MODULE_15__["EditorState"].createWithContent(Object(draft_js_import_html__WEBPACK_IMPORTED_MODULE_14__["stateFromHTML"])(product.description));

              _this.setState(function (prevState) {
                return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, prevState, state);
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(e) {
        var _this$state, id, editorState, name, images, cover, short_description, price, sale_price, data, res, _res, product;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                e.preventDefault();
                _this$state = _this.state, id = _this$state.id, editorState = _this$state.editorState, name = _this$state.name, images = _this$state.images, cover = _this$state.cover, short_description = _this$state.short_description, price = _this$state.price, sale_price = _this$state.sale_price;
                data = {
                  name: name,
                  short_description: short_description,
                  price: price,
                  sale_price: sale_price,
                  images: images,
                  cover: cover || (images.length > 0 ? images[0] : null)
                };
                data.description = _this.convertToHtml(editorState);

                if (!id) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 7;
                return _services__WEBPACK_IMPORTED_MODULE_24__["updateProduct"](id, data);

              case 7:
                res = _context3.sent;
                _context3.next = 13;
                break;

              case 10:
                _context3.next = 12;
                return _services__WEBPACK_IMPORTED_MODULE_24__["addProduct"](data);

              case 12:
                res = _context3.sent;

              case 13:
                _res = res, product = _res.product;

                if (product._id) {
                  toastr__WEBPACK_IMPORTED_MODULE_19___default.a.success("".concat(id ? 'Update product' : 'Add new product', " successfully!"), 'Success!');
                  window.location.href = _constants__WEBPACK_IMPORTED_MODULE_23__["PRODUCTS_URL"];
                }

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "convertToHtml", function (editorState) {
      var options = {
        entityStyleFn: function entityStyleFn(entity) {
          var entityType = entity.get('type').toLowerCase();

          if (entityType === 'image') {
            var data = entity.getData();
            var imgEl = global.document.querySelector("img[src=\"".concat(data.src, "\"]"));
            return {
              element: 'img',
              attributes: {
                src: data.src
              },
              style: imgEl.style
            };
          }

          if (entityType === 'link') {
            var _data = entity.getData();

            return {
              element: 'a',
              attributes: {
                href: _data.url,
                target: '_blank'
              }
            };
          }

          return null;
        }
      };
      var contentState = editorState.getCurrentContent();
      return Object(draft_js_export_html__WEBPACK_IMPORTED_MODULE_13__["stateToHTML"])(contentState, options);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleUpload",
    /*#__PURE__*/
    function () {
      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(files) {
        var images, data, i, result, file;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                images = _this.state.images;
                data = new global.window.FormData();

                for (i = 0; i < files.length; i += 1) {
                  data.append('file', files[i]);
                }

                _context4.next = 5;
                return _commons_utils_request__WEBPACK_IMPORTED_MODULE_21__["default"].upload(data);

              case 5:
                result = _context4.sent;
                file = result.files.file;
                file.map(function (item) {
                  images.push(item.name);
                  return true;
                });

                _this.setState({
                  images: images
                });

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }());

    _this.state = {
      id: '',
      name: '',
      short_description: '',
      description: '',
      price: '',
      sale_price: '',
      images: [],
      editorState: null,
      canSubmit: true
    };
    _this.editor = react__WEBPACK_IMPORTED_MODULE_12___default.a.createRef();
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.onEditorStateChange = _this.onEditorStateChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.handleUpload = _this.handleUpload.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    _this.startUpload = _this.startUpload.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(AddProduct, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5() {
        var router, productId;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                router = this.props.router;
                productId = router.query.id;
                if (productId) this.getProduct();
                this.uploadWidget = window.cloudinary.createUploadWidget({
                  cloudName: 'izzilab',
                  uploadPreset: 'downyshoes'
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "onEditorStateChange",
    value: function onEditorStateChange(editorState) {
      this.setState({
        editorState: editorState
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e, field) {
      var state = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, this.state);

      state[field] = e.target.value;
      this.setState(state);
    }
  }, {
    key: "removeImage",
    value: function removeImage(index) {
      var _this$state2 = this.state,
          images = _this$state2.images,
          cover = _this$state2.cover;

      var copyImages = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(images);

      var image = images[index];

      if (image === cover) {
        cover = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("cover"), null);
      }

      copyImages.splice(index, 1);
      this.setState({
        images: copyImages,
        cover: cover
      });
    }
  }, {
    key: "makeCover",
    value: function makeCover(index) {
      var _this$state3 = this.state,
          images = _this$state3.images,
          cover = _this$state3.cover;
      var image = images[index];
      cover = image;
      this.setState({
        cover: cover
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state4 = this.state,
          id = _this$state4.id,
          name = _this$state4.name,
          short_description = _this$state4.short_description,
          price = _this$state4.price,
          sale_price = _this$state4.sale_price,
          editorState = _this$state4.editorState,
          canSubmit = _this$state4.canSubmit,
          images = _this$state4.images,
          cover = _this$state4.cover;
      var title = id ? 'EDIT PRODUCT' : 'ADD NEW PRODUCT';
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["AppLayout"], {
        title: title
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_17___default.a, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("script", {
        src: "https://widget.cloudinary.com/v2.0/global/all.js",
        type: "text/javascript"
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Row"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Col"], {
        md: 8
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Block"], {
        noHeader: true
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["TextField"], {
        id: "product-name",
        label: "Name",
        value: name,
        onChange: function onChange(e) {
          return _this2.handleInputChange(e, 'name');
        },
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Row"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Col"], {
        md: 6
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["TextField"], {
        id: "product-price",
        label: "Price",
        value: price,
        onChange: function onChange(e) {
          return _this2.handleInputChange(e, 'price');
        },
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Col"], {
        md: 6
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["TextField"], {
        id: "product-sale-price",
        label: "Sale Price (Not required)",
        value: sale_price,
        onChange: function onChange(e) {
          return _this2.handleInputChange(e, 'sale_price');
        }
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Row"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Col"], {
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["TextField"], {
        id: "product-summary",
        label: "Short Description",
        value: short_description,
        onChange: function onChange(e) {
          return _this2.handleInputChange(e, 'short_description');
        },
        multiline: true,
        autoHeight: true,
        required: true
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Row"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Col"], {
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["TextEditor"], {
        ref: this.editor,
        id: "product-description",
        label: "Detail",
        onChange: this.onEditorStateChange,
        editorState: editorState,
        required: true
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Button"], {
        type: "submit",
        className: "m-r-25 m-b-10",
        disabled: !canSubmit
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        href: "/admin/products"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Button"], {
        className: "m-r-25 m-b-10",
        type: "button",
        color: "dark-grey"
      }, "Cancel")))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Col"], {
        md: 4
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
        className: _Products_scss__WEBPACK_IMPORTED_MODULE_25___default.a.uploadButton,
        onClick: this.startUpload
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("i", {
        className: "material-icons"
      }, "add_a_photo"), "Upload photos"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: _Products_scss__WEBPACK_IMPORTED_MODULE_25___default.a['product-images-preview']
      }, images.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_18___default()(_Products_scss__WEBPACK_IMPORTED_MODULE_25___default.a.imageItem, item === cover && _Products_scss__WEBPACK_IMPORTED_MODULE_25___default.a.isCover),
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("img", {
          src: item,
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: _Products_scss__WEBPACK_IMPORTED_MODULE_25___default.a.imageHover
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Button"], {
          autoWidth: true,
          clear: true,
          className: _Products_scss__WEBPACK_IMPORTED_MODULE_25___default.a.removeImageButton,
          onClick: function onClick() {
            return _this2.removeImage(index);
          }
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("i", {
          className: "material-icons"
        }, "close")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_20__["Button"], {
          clear: true,
          className: _Products_scss__WEBPACK_IMPORTED_MODULE_25___default.a.makeCoverButton,
          onClick: function onClick() {
            return _this2.makeCover(index);
          }
        }, "Make cover")));
      })))));
    }
  }]);

  return AddProduct;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_commons_utils_authenticate__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_16__["withRouter"])(AddProduct)));

/***/ }),

/***/ "./admin/modules/app/products/ListProducts.js":
/*!****************************************************!*\
  !*** ./admin/modules/app/products/ListProducts.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _commons_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../commons/uikit */ "./admin/commons/uikit/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constants */ "./admin/constants/index.js");
/* harmony import */ var _commons_utils_authenticate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../commons/utils/authenticate */ "./admin/commons/utils/authenticate.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services */ "./admin/modules/app/products/services.js");
















var ListProducts =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ListProducts, _React$Component);

  function ListProducts(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ListProducts);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ListProducts).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getProducts",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _services__WEBPACK_IMPORTED_MODULE_14__["getProducts"]();

            case 2:
              data = _context.sent;

              if (data) {
                _this.setState({
                  products: data.products
                });
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "deleteProduct",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(index) {
        var products, product, count;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                products = _this.state.products;
                product = products[index];
                _context2.next = 4;
                return _services__WEBPACK_IMPORTED_MODULE_14__["deleteProduct"](product._id);

              case 4:
                count = _context2.sent;

                if (count) {
                  products.splice(index, 1);

                  _this.setState({
                    products: products
                  }, function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Deleted!', 'Your product has been deleted.', 'success');
                  });
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "comfirmDeleteProduct",
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(index) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                  title: 'Are you sure?',
                  text: 'You will not be able to recover this product!',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes, delete it!',
                  cancelButtonText: 'No, keep it'
                }).then(function (result) {
                  if (result.value) {
                    _this.deleteProduct(index);
                  }
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    _this.state = {
      products: []
    };
    _this.deleteProduct = _this.deleteProduct.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.comfirmDeleteProduct = _this.comfirmDeleteProduct.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ListProducts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getProducts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var products = this.state.products;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_11__["AppLayout"], {
        title: "Danh s\xE1ch s\u1EA3n ph\u1EA9m",
        topRightButton: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: _constants__WEBPACK_IMPORTED_MODULE_12__["ADD_PRODUCT_URL"]
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_11__["Button"], null, "Add new Product"))
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_11__["Block"], {
        noHeader: true
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "table-responsive"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", null, "#"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", null, "Name"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", null, "Price"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", null, "Sale Price"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", null)), products.map(function (_ref4, key) {
        var id = _ref4._id,
            name = _ref4.name,
            price = _ref4.price,
            salePrice = _ref4.sale_price;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
          key: id
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, key + 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, name), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, price), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, salePrice), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
          className: "cell-actions"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: Object(_constants__WEBPACK_IMPORTED_MODULE_12__["EDIT_PRODUCT_URL"])(id)
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          outline: true,
          autoWidth: true,
          className: "m-r-10"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          className: "material-icons"
        }, "edit"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_commons_uikit__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          outline: true,
          autoWidth: true,
          color: "danger",
          onClick: function onClick() {
            return _this2.comfirmDeleteProduct(key);
          }
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          className: "material-icons"
        }, "delete"))));
      }))))));
    }
  }]);

  return ListProducts;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_commons_utils_authenticate__WEBPACK_IMPORTED_MODULE_13__["default"])(ListProducts));

/***/ }),

/***/ "./admin/modules/app/products/Products.scss":
/*!**************************************************!*\
  !*** ./admin/modules/app/products/Products.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"uploadButton": "_3xAFfarxXSuufrD3RCV55r",
	"product-images-preview": "_1n2EYzE2TA45pTYd0cZf7u",
	"imageItem": "_2esddgdAdHS4MzOvf3aLo2",
	"isCover": "_2w3FcFdjba4Ay-ULnIiGFW",
	"imageHover": "_1rhitLmEhjvHxGcMYzJnoR",
	"removeImageButton": "_31S4855ebTd_uZicpU-vxp",
	"makeCoverButton": "_3BG57I3ClN6FG0CHW6j4mv"
};

/***/ }),

/***/ "./admin/modules/app/products/index.js":
/*!*********************************************!*\
  !*** ./admin/modules/app/products/index.js ***!
  \*********************************************/
/*! exports provided: ListProducts, AddProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProduct */ "./admin/modules/app/products/AddProduct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddProduct", function() { return _AddProduct__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ListProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListProducts */ "./admin/modules/app/products/ListProducts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListProducts", function() { return _ListProducts__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./admin/modules/app/products/services.js":
/*!************************************************!*\
  !*** ./admin/modules/app/products/services.js ***!
  \************************************************/
/*! exports provided: getProducts, getProduct, updateProduct, addProduct, deleteProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProduct", function() { return updateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _commons_utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/utils/request */ "./admin/commons/utils/request.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./admin/constants/index.js");




var getProducts =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _commons_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT_PRODUCTS"]);

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getProducts() {
    return _ref.apply(this, arguments);
  };
}();
var getProduct =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    var result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _commons_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].get("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT_PRODUCTS"], "/").concat(id));

          case 2:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getProduct(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var updateProduct =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id, data) {
    var result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _commons_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT_PRODUCTS"], "/").concat(id), data);

          case 2:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateProduct(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();
var addProduct =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
    var result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _commons_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT_PRODUCTS"], data);

          case 2:
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function addProduct(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteProduct =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
    var result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _commons_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].delete("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT_PRODUCTS"], "/").concat(id));

          case 2:
            result = _context5.sent;
            return _context5.abrupt("return", result);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteProduct(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/draft-js-anchor-plugin/lib/plugin.css":
/*!************************************************************!*\
  !*** ./node_modules/draft-js-anchor-plugin/lib/plugin.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/draft-js-inline-toolbar-plugin/lib/plugin.css":
/*!********************************************************************!*\
  !*** ./node_modules/draft-js-inline-toolbar-plugin/lib/plugin.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/toastr/build/toastr.css":
/*!**********************************************!*\
  !*** ./node_modules/toastr/build/toastr.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./pages/admin/products/index.js":
/*!***************************************!*\
  !*** ./pages/admin/products/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_modules_app_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../admin/modules/app/products */ "./admin/modules/app/products/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_admin_modules_app_products__WEBPACK_IMPORTED_MODULE_0__["ListProducts"]);

/***/ }),

/***/ 3:
/*!*********************************************!*\
  !*** multi ./pages/admin/products/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/minhhdl/workspace/shoes-store/pages/admin/products/index.js */"./pages/admin/products/index.js");


/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "draft-js":
/*!***************************!*\
  !*** external "draft-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "draft-js-anchor-plugin":
/*!*****************************************!*\
  !*** external "draft-js-anchor-plugin" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-anchor-plugin");

/***/ }),

/***/ "draft-js-buttons":
/*!***********************************!*\
  !*** external "draft-js-buttons" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-buttons");

/***/ }),

/***/ "draft-js-export-html":
/*!***************************************!*\
  !*** external "draft-js-export-html" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ }),

/***/ "draft-js-import-html":
/*!***************************************!*\
  !*** external "draft-js-import-html" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-import-html");

/***/ }),

/***/ "draft-js-inline-toolbar-plugin":
/*!*************************************************!*\
  !*** external "draft-js-inline-toolbar-plugin" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-inline-toolbar-plugin");

/***/ }),

/***/ "draft-js-plugins-editor":
/*!******************************************!*\
  !*** external "draft-js-plugins-editor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-plugins-editor");

/***/ }),

/***/ "draft-js-static-toolbar-plugin":
/*!*************************************************!*\
  !*** external "draft-js-static-toolbar-plugin" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-static-toolbar-plugin");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-measure":
/*!********************************!*\
  !*** external "react-measure" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-measure");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),

/***/ "toastr":
/*!*************************!*\
  !*** external "toastr" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("toastr");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=products.js.map