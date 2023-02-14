"use strict";
self["webpackHotUpdategatsby_starter_netlify_cms"]("cms",{

/***/ "./src/templates/blog-post.js":
/*!************************************!*\
  !*** ./src/templates/blog-post.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPostTemplate": function() { return /* binding */ BlogPostTemplate; }
/* harmony export */ });
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/kebabCase */ "./node_modules/lodash/kebabCase.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
/* harmony import */ var _img_header_image_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/header_image.png */ "./src/img/header_image.png");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var _jsxFileName = "/Users/clairemanthey/design_blog/src/templates/blog-post.js",
    _this = undefined;







 // eslint-disable-next-line

var BlogPostTemplate = function BlogPostTemplate(_ref) {
  var content = _ref.content,
      contentComponent = _ref.contentComponent,
      description = _ref.description,
      tags = _ref.tags,
      title = _ref.title,
      helmet = _ref.helmet;
  var PostContent = contentComponent || _components_Content__WEBPACK_IMPORTED_MODULE_5__["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: _img_header_image_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "Header Graphic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "individual-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, helmet || "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "individual-container content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", {
    className: "center individual-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "individual-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(PostContent, {
    content: content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  })), tags && tags.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "tag-container-post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", {
    className: "tag-title-post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, "Tags"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "taglist",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, tags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      key: tag + "tag",
      className: "tag-post",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/tags/" + lodash_kebabCase__WEBPACK_IMPORTED_MODULE_0___default()(tag) + "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }, tag));
  }))) : null)));
};
_c = BlogPostTemplate;
BlogPostTemplate.propTypes = {
  content: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node.isRequired),
  contentComponent: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  helmet: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)
};

var BlogPost = function BlogPost(_ref2) {
  var data = _ref2.data;
  var post = data.markdownRemark;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(BlogPostTemplate, {
    content: post.html,
    contentComponent: _components_Content__WEBPACK_IMPORTED_MODULE_5__.HTMLContent,
    description: post.frontmatter.description,
    helmet: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
      titleTemplate: "%s | Blog",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, "" + post.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      name: "description",
      content: "" + post.frontmatter.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    })),
    tags: post.frontmatter.tags,
    title: post.frontmatter.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }));
};

_c2 = BlogPost;
BlogPost.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    markdownRemark: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)
  })
};
/* harmony default export */ __webpack_exports__["default"] = (BlogPost);
var pageQuery = "2655957122";

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "BlogPostTemplate");
__webpack_require__.$Refresh$.register(_c2, "BlogPost");

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
/******/ 	__webpack_require__.h = function() { return "7785c88924aaf56335aa"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.336f4769dfa567cef1cf.hot-update.js.map