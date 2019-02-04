webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CommonLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CommonLayout.js */ "./components/CommonLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

// This is the Link API




var CountriesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pages__CountriesWrapper",
  componentId: "sc-1ao6dy1-0"
})(["display:flex;justify-content:center;align-items:center;overflow-y:scroll;width:50%;"]);
var Country = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "pages__Country",
  componentId: "sc-1ao6dy1-1"
})(["list-style:none;margin:8px 0;a{color:#343434;font-weight:900;text-decoration:none;font-size:42px;text-transform:capitalize;}"]);
var countries = [{
  name: 'italy',
  id: 1
}, {
  name: 'france',
  id: 2
}, {
  name: 'spain',
  id: 4
}, {
  name: 'portugal',
  id: 5
}, {
  name: 'mexico',
  id: 6
}, {
  name: 'greece',
  id: 7
}, {
  name: 'germany',
  id: 8
}, {
  name: 'japan',
  id: 9
}, {
  name: 'turkey',
  id: 10
}, {
  name: 'austrailia',
  id: 11
}, {
  name: 'korea',
  id: 12
}, {
  name: 'qatar',
  id: 13
}, {
  name: 'dubai',
  id: 14
}];

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CommonLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CountriesWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, countries.map(function (_ref) {
    var name = _ref.name,
        id = _ref.id;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Country, {
      key: id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      as: "/post/".concat(name),
      href: "/post?id=".concat(name)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, name)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.927d8e34c918cb948da0.hot-update.js.map