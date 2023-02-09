"use strict";
self["webpackHotUpdategatsby_starter_netlify_cms"]("cms",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _img_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/icon.png */ "./src/img/icon.png");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/clairemanthey/design_blog/src/components/Navbar.js",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();





var Navbar = function Navbar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isActive = _useState[0],
      setIsActive = _useState[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar is-transparent",
    role: "navigation",
    "aria-label": "main-navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "navbar-item",
    title: "Logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_icon_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Kaldi",
    style: {
      width: "88px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "navbar-burger burger " + (isActive && "is-active"),
    "aria-expanded": isActive,
    onClick: function onClick() {
      return setIsActive(!isActive);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    id: "navMenu",
    className: " navbar-start has-text-centered navbar-menu " + (isActive && "is-active"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "navbar-item",
    style: {
      padding: "0px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "navbar-item",
    to: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "navbar-item",
    style: {
      padding: "0px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "navbar-item",
    to: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "navbar-item",
    style: {
      padding: "0px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "navbar-item",
    to: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Contact")))));
};

_s(Navbar, "OFRYOMGmWDzfQ4dzLF00ag1mHo0=");

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Navbar");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/img/icon.png":
/*!**************************!*\
  !*** ./src/img/icon.png ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABQ9JREFUeJzt23loHVUUx/FPmgabWk2rscaViltdW6tCcV+qKApqFXHHHbRoK24IRUFQEHH9QwQ33FFQ2krdrYIbioqiWP9SqOK+S9q6xj/Oec1kkpjEvveCZr4wvJk7d/3NuXdmzplHRUVFRcWQtAwz7f9IT/GgOOjpuBgz0NrMHo0Cf+I93ICPiid2xbdCpbG0fYNd6LWIJ3E4luF6rB6Buv9F2nEpDsRSHEmI8aNQaMdR61rz2UmM+QcYl4nr5O93o9GjUaI21gn0CjHmqYRIKiGSSoikEiKphEgqIZJKiKQSIhmJEC3YuFEd+Re0o6NelQ0kxHiciifES9id2E08hj85RH3H4bwR9uHUbKP46n8hbh2i3KG4bIRtDcr40nELLhJvY5fhJ+yFs4WvYkoh77jc/soN3pHP7llXH+dHoc1imZ1xFB7Bc5iEecJn8E9trZN5i30vtldup1ZPS6nuNSeK1F5PT8AbwmlxtxCnyHZ4JvMsxcxM3xazcn8hjsAduARtuBYvCMvapVDfXZif+yfj8cK5rfB0tvUU9igPAtOyjvVzDDdlO0uyT4QFPYtXcMsAdWjBKqHmkXhzoEziSn+c+13YHZMxF89n+jm4OvcXZcNzsacQ+Bqsh9l4NfNdh5OENeyEF4U74MM8PzXLTxbCvpLpx+eAOrOuAzL9mmxrUg7+qRzjihRlQ5yWY+jJsfebGu3oHkSIIt9hn6xwKjYbJN9VeD33bxFWdHoeT9fXIm8Xa8Vr+KWQ/j32xik5iE0L5ybiQeFyeynT5gorPiOPd83fX3GMEOZRIewaylPjM2w9QHqZ+UKERbjxH/IV5+f6Wf/nuZ1byrtEDPS2Uvp5wtIWC+9Z0c96rJg6P5faWVFo53xx5Y8SIj4obgR9jKBsEZ/gS5wl5jYxJfbRa5Ly+FZhxtMMjw+EGT6Wx536CvU7dhAL2RaF9L2FOMuwSanOR4SlLcHRYjp9ICyqdofrFHekr7FACPk+Ni9WVBaiB2figaz4a+HVfkJfIZaKBektg0+LMlfjYTFvW7PcQaU8/VbzHNB1wuTLQvwmFvQLCnUvFFPjWDHVJ4n15EWxlrTh09z6UFwsaw9MHeKqH45t9N52tsvzrdgXc8Rcq63MU8SaAVtmR4psiIOF07Qz07r0fzBqK9Q5TljFodlWrQ8dJWG2LdQzFYdgP723/M1xGPbHukqL5WBCjAX6CFG9aySVEEklRFIJkVRCJJUQSSVEUgmRVEIklRBJJURSCZGUX8PvEZ6cscCE4kFLbivLJ8YQq9FetogFwoU/FujAzbWDskV04asmdmaeiGsQ7rOyv7KRdOELaRH0dcx0NbEjE4XHvPbNY3emNYtNst2VxGLZI6bDBGwvnLfNYCVOFA5bWF7rVJPYPn9/oveusVi41+/HQ0bng9NZeqNkjaZdXARi7GvYSES4RvuT4GZvb0oncjFY0i5c5jP1f75YW2bn9r6ISQ6HOWIhfV3EPevJH3hXxFhXDZG3rtwnrsDlIyhzRZa5tyE9KtGsR+za3H9nBGXeLpVtKPWeAm0iKFS8DbaKFbpHbzR6OGyQv9PFpwLFKFi3COb+sTadbSQniHhmoxe5v0QYr27U2yImiwX4C/EPmUYwQzwMTRkq40iotxA1lovAbSO4Uv9g8FpTbyFq3zAdpH+ku94M9H3Wv6beQizDyyLa3Ei6s6260Yi/Njbr75J1tYiKioqKimHwNz2ugu1T2KPrAAAAAElFTkSuQmCC");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "462bc2eb3cc08f7b03e1"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.2f8184e262c20c921a66.hot-update.js.map