"use strict";
self["webpackHotUpdategatsby_starter_netlify_cms"]("cms",{

/***/ "./src/components/Features.js":
/*!************************************!*\
  !*** ./src/components/Features.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PreviewCompatibleImage */ "./src/components/PreviewCompatibleImage.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/clairemanthey/design_blog/src/components/Features.js",
    _this = undefined;





var FeatureGrid = function FeatureGrid(_ref) {
  var gridItems = _ref.gridItems;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "columns is-multiline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, gridItems.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: item.text,
      className: "column is-6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "has-text-centered",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        width: "240px",
        display: "inline-block"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_PreviewCompatibleImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      imageInfo: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, item.text)));
  }));
};

_c = FeatureGrid;
FeatureGrid.propTypes = {
  gridItems: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    image: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
    text: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureGrid);

var _c;

__webpack_require__.$Refresh$.register(_c, "FeatureGrid");

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

/***/ "./src/components/FullWidthImage.js":
/*!******************************************!*\
  !*** ./src/components/FullWidthImage.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FullWidthImage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/index.browser-dc34ce8e.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/clairemanthey/design_blog/src/components/FullWidthImage.js";



function FullWidthImage(props) {
  var _props$height = props.height,
      height = _props$height === void 0 ? 400 : _props$height,
      img = props.img,
      title = props.title,
      subheading = props.subheading,
      _props$imgPosition = props.imgPosition,
      imgPosition = _props$imgPosition === void 0 ? "top left" : _props$imgPosition;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "margin-top-0",
    style: {
      display: "grid",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, img !== null && img !== void 0 && img.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: img,
    objectFit: "cover",
    objectPosition: imgPosition,
    style: {
      gridArea: "1/1",
      // You can set a maximum height for the image, if you wish.
      height: height,
      width: "100%"
    } // This is a presentational image, so the alt should be an empty string
    ,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.G, {
    image: img,
    objectFit: "cover",
    objectPosition: imgPosition,
    style: {
      gridArea: "1/1",
      // You can set a maximum height for the image, if you wish.
      maxHeight: height
    },
    layout: "fullWidth" // You can optionally force an aspect ratio for the generated image
    ,
    aspectratio: 3 / 1 // This is a presentational image, so the alt should be an empty string
    ,
    alt: "",
    formats: ["auto", "webp", "avif"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), (title || subheading) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      // By using the same grid area for both, they are stacked on top of each other
      gridArea: "1/1",
      position: "relative",
      // This centers the other elements inside the hero component
      placeItems: "center",
      display: "grid"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen",
    style: {
      boxShadow: "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
      backgroundColor: "rgb(255, 68, 0)",
      color: "white",
      lineHeight: "1",
      padding: "0.25em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, title), subheading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen",
    style: {
      boxShadow: "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
      backgroundColor: "rgb(255, 68, 0)",
      color: "white",
      lineHeight: "1",
      padding: "0.25rem",
      marginTop: "0.5rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, subheading))));
}
_c = FullWidthImage;
FullWidthImage.propTypes = {
  img: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  subheading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};

var _c;

__webpack_require__.$Refresh$.register(_c, "FullWidthImage");

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/index.browser-dc34ce8e.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Features */ "./src/components/Features.js");
/* harmony import */ var _components_BlogRoll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogRoll */ "./src/components/BlogRoll.js");
/* harmony import */ var _components_FullWidthImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FullWidthImage */ "./src/components/FullWidthImage.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/gatsby/dist/utils/fast-refresh-module.js */ "./node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/clairemanthey/design_blog/src/templates/index-page.js",
    _this = undefined;








 // eslint-disable-next-line

var IndexPageTemplate = function IndexPageTemplate(_ref) {
  var image = _ref.image,
      title = _ref.title,
      heading = _ref.heading,
      subheading = _ref.subheading,
      mainpitch = _ref.mainpitch,
      description = _ref.description,
      intro = _ref.intro;
  var heroImage = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__.c)(image) || image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FullWidthImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: heroImage,
    title: title,
    subheading: subheading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "section section--gradient",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-10 is-offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }, mainpitch.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 23
    }
  }, mainpitch.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "has-text-weight-semibold is-size-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 23
    }
  }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 23
    }
  }, description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Features__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gridItems: intro.blurbs,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-12 has-text-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "btn",
    to: "/products",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 23
    }
  }, "See all products"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "has-text-weight-semibold is-size-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "Latest stories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BlogRoll__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-12 has-text-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "btn",
    to: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }, "Read more"))))))))));
};
_c = IndexPageTemplate;
IndexPageTemplate.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)]),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  subheading: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  mainpitch: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  intro: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    blurbs: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array)
  })
};

var IndexPage = function IndexPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 94,
      columnNumber: 7
    }
  }));
};

_c2 = IndexPage;
IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
      frontmatter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)
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
/******/ 	__webpack_require__.h = function() { return "1984bf2e1d01d6e54585"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.f863a27c8993b8565a7b.hot-update.js.map