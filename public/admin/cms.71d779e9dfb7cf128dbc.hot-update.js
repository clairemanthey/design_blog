"use strict";
self["webpackHotUpdategatsby_starter_netlify_cms"]("cms",{

/***/ "./src/templates/index-page.js":
/*!*************************************!*\
  !*** ./src/templates/index-page.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageTemplate": function() { return /* binding */ IndexPageTemplate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _img_header_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/header_image.png */ "./src/img/header_image.png");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/clairemanthey/design_blog/src/templates/index-page.js",
    _this = undefined;






 //import BlogRoll from "../components/BlogRoll";
// eslint-disable-next-line

var IndexPageTemplate = function IndexPageTemplate(_ref) {
  var image = _ref.image,
      title = _ref.title,
      heading = _ref.heading,
      subheading = _ref.subheading,
      mainpitch = _ref.mainpitch,
      description = _ref.description,
      intro = _ref.intro;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_header_image_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Header Graphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "main-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "main-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Adventures in Web Design"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "para blog-para para-home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Welcome to my blog. Follow me along my journey to making the web a more beautiful place."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "para blog-para para-home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Starting from the basics with HTML and working up to add functionality with JS and making it lookgood with CSS."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn-blog center pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 26
    }
  }, "Go to Blog"))));
};
_c = IndexPageTemplate;
IndexPageTemplate.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)]),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  subheading: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  mainpitch: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  intro: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    blurbs: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array)
  })
};

var IndexPage = function IndexPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IndexPageTemplate, {
    image: frontmatter.image,
    title: frontmatter.title,
    heading: frontmatter.heading,
    subheading: frontmatter.subheading,
    mainpitch: frontmatter.mainpitch,
    description: frontmatter.description,
    intro: frontmatter.intro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }));
};

_c2 = IndexPage;
IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
      frontmatter: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
    })
  })
};
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
var pageQuery = "669772693";

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "IndexPageTemplate");
__webpack_require__.$Refresh$.register(_c2, "IndexPage");

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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "dde9f70d43b1b53543f4"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.71d779e9dfb7cf128dbc.hot-update.js.map