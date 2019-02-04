webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/list.js":
/*!****************************!*\
  !*** ./components/list.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var CountriesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "list__CountriesWrapper",
  componentId: "sc-18nsjsg-0"
})(["display:flex;justify-content:center;align-items:center;background:#efefef;width:50%;ul{overflow-y:scroll;height:100vh;padding:0 100px;}"]);
var Country = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "list__Country",
  componentId: "sc-18nsjsg-1"
})(["list-style:none;margin:14px 0;a{color:#343434;font-weight:900;text-decoration:none;font-size:72px;text-transform:capitalize;&:focus{color:#ff0000;}}"]);
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
  name: 'australia',
  id: 11
}, {
  name: 'korea',
  id: 12
}, {
  name: 'qatar',
  id: 13
}, {
  name: 'oman',
  id: 14
}];

var List = function List() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CountriesWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, countries.map(function (_ref) {
    var name = _ref.name,
        id = _ref.id;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Country, {
      key: id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      as: "/post/".concat(name),
      href: "/post?id=".concat(name)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, name)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=post.js.121341330d8d484471cb.hot-update.js.map