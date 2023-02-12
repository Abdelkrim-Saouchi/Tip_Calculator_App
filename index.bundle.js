"use strict";
(self["webpackChunktip_calculator_app_main"] = self["webpackChunktip_calculator_app_main"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --strong-cyan: hsl(172, 67%, 45%);\n\n  --very-dark-cyan: hsl(183, 100%, 15%);\n  --grayish-cyan: hsl(184, 14%, 56%);\n  --light-grayish-cyan: hsl(185, 41%, 84%);\n  --very-light-grayish-cyan: hsl(189, 41%, 97%);\n  --white: hsl(0, 0%, 100%);\n  --red-color: red;\n\n  --space-between: 40px;\n  --myfont: 'Space Mono';\n  --myfont-size: 24px;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--myfont);\n  font-size: var(--myfont-size);\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  background-color: var(--light-grayish-cyan);\n}\n\n.container {\n  display: grid;\n  grid-template-rows: min-content min-content;\n  grid-template-columns: auto;\n  place-items: center;\n  margin-block: var(--space-between);\n}\n\n#logo {\n  margin-block: var(--space-between);\n}\n\n#calculator {\n  min-width: 100%;\n  background-color: var(--white);\n  padding: var(--space-between) 30px;\n  border-radius: 16px;\n  display: grid;\n  grid-template-rows: auto auto;\n}\n\n.subtitle {\n  font-size: 16px;\n  color: var(--very-dark-cyan);\n  opacity: 0.7;\n  margin-bottom: 12px;\n}\n\n#calculator input {\n  background-color: var(--very-light-grayish-cyan);\n  color: var(--very-dark-cyan);\n  font-size: var(--myfont-size);\n  font-family: var(--myfont);\n  font-weight: 700;\n  min-width: 100%;\n  direction: rtl;\n  border: 0;\n  border-radius: 8px;\n  padding: 5px 10px;\n  margin-bottom: var(--space-between);\n  cursor: pointer;\n}\n\n#calculator #bill-input-wrapper {\n  position: relative;\n}\n\n#calculator #dollar {\n  width: 10px;\n  position: absolute;\n  left: 10px;\n  top: 12px;\n}\n\n#calculator #percentages-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 16px;\n  margin-bottom: var(--space-between);\n  position: relative;\n}\n\n#calculator .tip-btn {\n  font-size: var(--myfont-size);\n  font-family: var(--myfont);\n  padding-block: 14px;\n  border: 0;\n  border-radius: 8px;\n  color: var(--white);\n  background-color: var(--very-dark-cyan);\n  cursor: pointer;\n}\n\n#calculator #custom {\n  border-radius: 8px;\n}\n\n#calculator #custom input {\n  width: 100%;\n  height: 100%;\n  color: var(--very-dark-cyan);\n  background-color: var(--very-light-grayish-cyan);\n  opacity: 0.7;\n  text-align: center;\n}\n\n#calculator #people-number-wrapper {\n  position: relative;\n}\n\n#calculator #person-icon {\n  position: absolute;\n  left: 10px;\n  top: 12px;\n}\n\n#result-panel {\n  background-color: var(--very-dark-cyan);\n  padding: var(--space-between) 30px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n}\n\n#calculator .result-wrapper {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n\n.result-wrapper h3 {\n  font-size: 12px;\n  color: var(--white);\n}\n\n.result-wrapper p {\n  color: var(--strong-cyan);\n}\n\n.result-wrapper span {\n  display: block;\n  color: var(--grayish-cyan);\n  font-size: 12px;\n}\n\n#result-panel .reset {\n  background-color: var(--strong-cyan);\n  color: var(--very-dark-cyan);\n  min-width: 100%;\n  padding-block: 14px;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 700;\n  margin-top: auto;\n}\n\n/*active states */\n#calculator input:is(:focus, :active) {\n  outline: 2px solid var(--strong-cyan);\n  cursor: pointer;\n}\n\n#calculator .tip-btn:is(:hover, :focus) {\n  background-color: var(--strong-cyan);\n}\n\n#calculator #custom:is(:focus, :hover) {\n  outline: 2px solid var(--strong-cyan);\n}\n\n#result-panel .reset:is(:focus, :hover) {\n  background-color: var(--light-grayish-cyan);\n  cursor: pointer;\n}\n\n/* manage invalid inputs */\n.error-msg {\n  display: block;\n  color: var(--red-color);\n  font-size: 12px;\n  position: absolute;\n  top: -30px;\n  right: 0;\n}\n\n.invalid-percentage {\n  display: block;\n  color: var(--red-color);\n  font-size: 12px;\n  position: absolute;\n  bottom: -20px;\n  right: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.invalid-border {\n  outline: 2px solid var(--red-color);\n}\n\n@media (min-width: 970px) {\n  .container {\n    width: 80%;\n    min-height: 80%;\n  }\n\n  #calculator {\n    min-width: 5%;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: auto;\n    gap: 30px;\n  }\n\n  #calculator #percentages-div {\n    grid-template-columns: repeat(3, minmax(110px, 1fr));\n    grid-template-rows: repeat(2, 50px);\n  }\n\n  #calculator .tip-btn {\n    padding-block: 8px;\n  }\n\n  .result-wrapper h3 {\n    font-size: var(--myfont-size);\n  }\n\n  .result-wrapper span {\n    font-size: 16px;\n  }\n\n  .result-wrapper p {\n    font-size: 32px;\n  }\n\n  #result-panel .rest {\n    font-size: 28px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');\n:root {\n  --strong-cyan: hsl(172, 67%, 45%);\n\n  --very-dark-cyan: hsl(183, 100%, 15%);\n  --grayish-cyan: hsl(184, 14%, 56%);\n  --light-grayish-cyan: hsl(185, 41%, 84%);\n  --very-light-grayish-cyan: hsl(189, 41%, 97%);\n  --white: hsl(0, 0%, 100%);\n  --red-color: red;\n\n  --space-between: 40px;\n  --myfont: 'Space Mono';\n  --myfont-size: 24px;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nhtml {\n  font-family: var(--myfont);\n  font-size: var(--myfont-size);\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  background-color: var(--light-grayish-cyan);\n}\n\n.container {\n  display: grid;\n  grid-template-rows: min-content min-content;\n  grid-template-columns: auto;\n  place-items: center;\n  margin-block: var(--space-between);\n}\n\n#logo {\n  margin-block: var(--space-between);\n}\n\n#calculator {\n  min-width: 100%;\n  background-color: var(--white);\n  padding: var(--space-between) 30px;\n  border-radius: 16px;\n  display: grid;\n  grid-template-rows: auto auto;\n}\n\n.subtitle {\n  font-size: 16px;\n  color: var(--very-dark-cyan);\n  opacity: 0.7;\n  margin-bottom: 12px;\n}\n\n#calculator input {\n  background-color: var(--very-light-grayish-cyan);\n  color: var(--very-dark-cyan);\n  font-size: var(--myfont-size);\n  font-family: var(--myfont);\n  font-weight: 700;\n  min-width: 100%;\n  direction: rtl;\n  border: 0;\n  border-radius: 8px;\n  padding: 5px 10px;\n  margin-bottom: var(--space-between);\n  cursor: pointer;\n}\n\n#calculator #bill-input-wrapper {\n  position: relative;\n}\n\n#calculator #dollar {\n  width: 10px;\n  position: absolute;\n  left: 10px;\n  top: 12px;\n}\n\n#calculator #percentages-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 16px;\n  margin-bottom: var(--space-between);\n  position: relative;\n}\n\n#calculator .tip-btn {\n  font-size: var(--myfont-size);\n  font-family: var(--myfont);\n  padding-block: 14px;\n  border: 0;\n  border-radius: 8px;\n  color: var(--white);\n  background-color: var(--very-dark-cyan);\n  cursor: pointer;\n}\n\n#calculator #custom {\n  border-radius: 8px;\n}\n\n#calculator #custom input {\n  width: 100%;\n  height: 100%;\n  color: var(--very-dark-cyan);\n  background-color: var(--very-light-grayish-cyan);\n  opacity: 0.7;\n  text-align: center;\n}\n\n#calculator #people-number-wrapper {\n  position: relative;\n}\n\n#calculator #person-icon {\n  position: absolute;\n  left: 10px;\n  top: 12px;\n}\n\n#result-panel {\n  background-color: var(--very-dark-cyan);\n  padding: var(--space-between) 30px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n}\n\n#calculator .result-wrapper {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n\n.result-wrapper h3 {\n  font-size: 12px;\n  color: var(--white);\n}\n\n.result-wrapper p {\n  color: var(--strong-cyan);\n}\n\n.result-wrapper span {\n  display: block;\n  color: var(--grayish-cyan);\n  font-size: 12px;\n}\n\n#result-panel .reset {\n  background-color: var(--strong-cyan);\n  color: var(--very-dark-cyan);\n  min-width: 100%;\n  padding-block: 14px;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 700;\n  margin-top: auto;\n}\n\n/*active states */\n#calculator input:is(:focus, :active) {\n  outline: 2px solid var(--strong-cyan);\n  cursor: pointer;\n}\n\n#calculator .tip-btn:is(:hover, :focus) {\n  background-color: var(--strong-cyan);\n}\n\n#calculator #custom:is(:focus, :hover) {\n  outline: 2px solid var(--strong-cyan);\n}\n\n#result-panel .reset:is(:focus, :hover) {\n  background-color: var(--light-grayish-cyan);\n  cursor: pointer;\n}\n\n/* manage invalid inputs */\n.error-msg {\n  display: block;\n  color: var(--red-color);\n  font-size: 12px;\n  position: absolute;\n  top: -30px;\n  right: 0;\n}\n\n.invalid-percentage {\n  display: block;\n  color: var(--red-color);\n  font-size: 12px;\n  position: absolute;\n  bottom: -20px;\n  right: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.invalid-border {\n  outline: 2px solid var(--red-color);\n}\n\n@media (min-width: 970px) {\n  .container {\n    width: 80%;\n    min-height: 80%;\n  }\n\n  #calculator {\n    min-width: 5%;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: auto;\n    gap: 30px;\n  }\n\n  #calculator #percentages-div {\n    grid-template-columns: repeat(3, minmax(110px, 1fr));\n    grid-template-rows: repeat(2, 50px);\n  }\n\n  #calculator .tip-btn {\n    padding-block: 8px;\n  }\n\n  .result-wrapper h3 {\n    font-size: var(--myfont-size);\n  }\n\n  .result-wrapper span {\n    font-size: 16px;\n  }\n\n  .result-wrapper p {\n    font-size: 32px;\n  }\n\n  #result-panel .rest {\n    font-size: 28px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/calculator_logic.js":
/*!*********************************!*\
  !*** ./src/calculator_logic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateTipAmountPerPerson": () => (/* binding */ calculateTipAmountPerPerson),
/* harmony export */   "calculateTotal": () => (/* binding */ calculateTotal)
/* harmony export */ });
function calculateTipAmountPerPerson(bill, percentage, peopleNumber) {
  return (bill * percentage) / 100 / peopleNumber;
}

function calculateTotal(bill, peopleNumber, tipAmountPerPerson) {
  return bill / peopleNumber + tipAmountPerPerson;
}




/***/ }),

/***/ "./src/display_controller.js":
/*!***********************************!*\
  !*** ./src/display_controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controlDisplay)
/* harmony export */ });
/* harmony import */ var _calculator_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator_logic */ "./src/calculator_logic.js");
/* eslint-disable no-param-reassign */


function reset(billInput, customInput, peopleNumber, tipAmount, totalPara) {
  billInput.value = '0';
  customInput.value = 'Custom';
  peopleNumber.value = '0';
  tipAmount.textContent = '$0.00';
  totalPara.textContent = '$0.00';
}

function clearInput(event) {
  event.target.value = '';
}

function isNumber(input) {
  return !Number.isNaN(Number(input));
}

function isZero(input) {
  return Number(input) === 0;
}

function isValidPercentage(input) {
  return isNumber(input.split('%').join(''));
}

function calculate(bill, percentage, peopleNumber, tipAmount, totalPara) {
  const tipAmountPerPerson = (0,_calculator_logic__WEBPACK_IMPORTED_MODULE_0__.calculateTipAmountPerPerson)(
    bill,
    percentage.split('%').join(''),
    peopleNumber
  );
  const total = (0,_calculator_logic__WEBPACK_IMPORTED_MODULE_0__.calculateTotal)(bill, peopleNumber, tipAmountPerPerson);
  tipAmount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
  totalPara.textContent = `$${total.toFixed(2)}`;
}

function areInputsValid(billInput, peopleNumberInput) {
  if (
    isNumber(billInput.value) &&
    isNumber(peopleNumberInput.value) &&
    !isZero(peopleNumberInput.value)
  ) {
    return true;
  }
  return false;
}

function displayInvalidMsg(inputElement, msg) {
  let span = inputElement.parentElement.querySelector('span');
  if (!span) {
    span = document.createElement('span');
    inputElement.parentElement.appendChild(span);
  }

  span.textContent = msg;
  if (isNumber(inputElement.value) && !isZero(inputElement.value)) {
    span.classList.add('hidden');
    span.classList.remove('error-msg');
    inputElement.classList.remove('invalid-border');
  } else {
    span.classList.add('error-msg');
    inputElement.classList.add('invalid-border');
    span.classList.remove('hidden');
  }
}

function displayInvalidPercentage(inputElement, msg) {
  let span = inputElement.parentElement.parentElement.querySelector('span');
  if (!span) {
    span = document.createElement('span');
    inputElement.parentElement.parentElement.appendChild(span);
  }
  span.textContent = msg;
  if (isValidPercentage(inputElement.value)) {
    span.classList.add('hidden');
    inputElement.classList.remove('invalid-border');
    span.classList.remove('invalid-percentage');
  } else {
    span.classList.add('invalid-percentage');
    inputElement.classList.add('invalid-border');
    span.classList.remove('hidden');
  }
}

function controlDisplay() {
  const billInput = document.querySelector('#bill-input-wrapper input');
  const peopleNumberInput = document.querySelector(
    '#people-number-wrapper input'
  );
  const customInput = document.querySelector('#custom input');
  const tipAmount = document.querySelector('.result-wrapper #tip-amount');
  const totalPara = document.querySelector('.result-wrapper #total');
  const percentageBtns = Array.from(document.querySelectorAll('.tip-btn'));
  const resetBtn = document.querySelector('.reset');

  billInput.addEventListener('click', clearInput);
  peopleNumberInput.addEventListener('click', clearInput);
  customInput.addEventListener('click', clearInput);

  billInput.addEventListener('input', () => {
    displayInvalidMsg(billInput, '* Must be Number');
  });

  peopleNumberInput.addEventListener('input', () => {
    if (isZero(peopleNumberInput.value)) {
      displayInvalidMsg(peopleNumberInput, '* Must not be Zero');
    } else {
      displayInvalidMsg(peopleNumberInput, '* Must be Number');
    }
  });

  customInput.addEventListener('input', () => {
    displayInvalidPercentage(customInput, '* Invalid Percentage');
    if (isValidPercentage(customInput.value)) {
      calculate(
        billInput.value,
        customInput.value,
        peopleNumberInput.value,
        tipAmount,
        totalPara
      );
    }
  });

  percentageBtns.forEach((percentageBtn) => {
    percentageBtn.addEventListener('click', (e) => {
      if (areInputsValid(billInput, peopleNumberInput)) {
        calculate(
          billInput.value,
          e.target.textContent,
          peopleNumberInput.value,
          tipAmount,
          totalPara
        );
      }
    });
  });

  resetBtn.addEventListener('click', () => {
    reset(billInput, customInput, peopleNumberInput, tipAmount, totalPara);
  });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tip_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tip_calculator */ "./src/tip_calculator.js");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display_controller */ "./src/display_controller.js");





function createMainPage() {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.classList.add('container');
  const logo = new Image();
  logo.src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_2__;
  logo.id = 'logo';

  const tipCalculator = (0,_tip_calculator__WEBPACK_IMPORTED_MODULE_1__["default"])();
  container.appendChild(logo);
  container.appendChild(tipCalculator);
  body.appendChild(container);
  return body;
}

createMainPage();
(0,_display_controller__WEBPACK_IMPORTED_MODULE_3__["default"])();


/***/ }),

/***/ "./src/tip_calculator.js":
/*!*******************************!*\
  !*** ./src/tip_calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTipCalculator)
/* harmony export */ });
/* harmony import */ var _images_icon_dollar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon-dollar.svg */ "./src/images/icon-dollar.svg");
/* harmony import */ var _images_icon_person_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icon-person.svg */ "./src/images/icon-person.svg");



function createSubTitle(text) {
  const subTitle = document.createElement('h3');
  subTitle.textContent = text;
  subTitle.classList.add('subtitle');
  return subTitle;
}

function createTextInput(id, value) {
  const inputWrapper = document.createElement('div');
  inputWrapper.id = id;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = value;
  inputWrapper.appendChild(input);
  return inputWrapper;
}

function createBtn(clas, text) {
  const btn = document.createElement('button');
  btn.classList.add(clas);
  btn.textContent = text;
  return btn;
}

function createResultComponent(id, text, rslt) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('result-wrapper');
  const subTitle = document.createElement('h3');

  subTitle.textContent = text;
  const span = document.createElement('span');
  span.textContent = '/ person';

  const result = document.createElement('P');
  result.textContent = `$${rslt}`;
  result.id = id;

  subTitle.appendChild(span);
  wrapper.append(subTitle, result);

  return wrapper;
}

function createTipCalculator() {
  const calculator = document.createElement('div');
  calculator.id = 'calculator';
  const calcPanel = document.createElement('div');
  calcPanel.id = 'calc-panel';
  const resultPanel = document.createElement('div');
  resultPanel.id = 'result-panel';

  const bill = createSubTitle('Bill');
  const billInput = createTextInput('bill-input-wrapper', '0');
  const dollar = new Image();
  dollar.src = _images_icon_dollar_svg__WEBPACK_IMPORTED_MODULE_0__;
  dollar.id = 'dollar';
  billInput.appendChild(dollar);

  const selectTipPercentage = createSubTitle('Select Tip %');
  const fivePercent = createBtn('tip-btn', '5%');
  const tenPercent = createBtn('tip-btn', '10%');
  const fifteenPercent = createBtn('tip-btn', '15%');
  const twentyFivePercent = createBtn('tip-btn', '25%');
  const fiftyPercent = createBtn('tip-btn', '50%');
  const custom = createTextInput('custom', 'Custom');

  const percentages = document.createElement('div');
  percentages.id = 'percentages-div';
  percentages.append(
    fivePercent,
    tenPercent,
    fifteenPercent,
    twentyFivePercent,
    fiftyPercent,
    custom
  );

  const nOfPSubtitle = createSubTitle('Number of People');
  const numberOfPeople = createTextInput('people-number-wrapper', '0');
  const personImg = new Image();
  personImg.src = _images_icon_person_svg__WEBPACK_IMPORTED_MODULE_1__;
  personImg.id = 'person-icon';
  numberOfPeople.appendChild(personImg);

  calcPanel.append(
    bill,
    billInput,
    selectTipPercentage,
    percentages,
    nOfPSubtitle,
    numberOfPeople
  );

  const tipAmount = createResultComponent('tip-amount', 'Tip Amount', '0.00');
  const total = createResultComponent('total', 'Total', '0.00');
  const restBtn = createBtn('reset', 'RESET');

  resultPanel.append(tipAmount, total, restBtn);

  calculator.append(calcPanel, resultPanel);

  return calculator;
}


/***/ }),

/***/ "./src/images/icon-dollar.svg":
/*!************************************!*\
  !*** ./src/images/icon-dollar.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f9be3534a9295a65957.svg";

/***/ }),

/***/ "./src/images/icon-person.svg":
/*!************************************!*\
  !*** ./src/images/icon-person.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65bfd20465dd1d2cb58c.svg";

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cc0528bd46321d63d85.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsK0RBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJvQztBQUNBOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsS0FBSztBQUNoQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBVTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvREFBVTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXAtY2FsY3VsYXRvci1hcHAtbWFpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGlwLWNhbGN1bGF0b3ItYXBwLW1haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpcC1jYWxjdWxhdG9yLWFwcC1tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGlwLWNhbGN1bGF0b3ItYXBwLW1haW4vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGlwLWNhbGN1bGF0b3ItYXBwLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGlwLWNhbGN1bGF0b3ItYXBwLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RpcC1jYWxjdWxhdG9yLWFwcC1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RpcC1jYWxjdWxhdG9yLWFwcC1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RpcC1jYWxjdWxhdG9yLWFwcC1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGlwLWNhbGN1bGF0b3ItYXBwLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aXAtY2FsY3VsYXRvci1hcHAtbWFpbi8uL3NyYy9jYWxjdWxhdG9yX2xvZ2ljLmpzIiwid2VicGFjazovL3RpcC1jYWxjdWxhdG9yLWFwcC1tYWluLy4vc3JjL2Rpc3BsYXlfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90aXAtY2FsY3VsYXRvci1hcHAtbWFpbi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aXAtY2FsY3VsYXRvci1hcHAtbWFpbi8uL3NyYy90aXBfY2FsY3VsYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNwYWNlK01vbm86d2dodEA3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1zdHJvbmctY3lhbjogaHNsKDE3MiwgNjclLCA0NSUpO1xcblxcbiAgLS12ZXJ5LWRhcmstY3lhbjogaHNsKDE4MywgMTAwJSwgMTUlKTtcXG4gIC0tZ3JheWlzaC1jeWFuOiBoc2woMTg0LCAxNCUsIDU2JSk7XFxuICAtLWxpZ2h0LWdyYXlpc2gtY3lhbjogaHNsKDE4NSwgNDElLCA4NCUpO1xcbiAgLS12ZXJ5LWxpZ2h0LWdyYXlpc2gtY3lhbjogaHNsKDE4OSwgNDElLCA5NyUpO1xcbiAgLS13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIC0tcmVkLWNvbG9yOiByZWQ7XFxuXFxuICAtLXNwYWNlLWJldHdlZW46IDQwcHg7XFxuICAtLW15Zm9udDogJ1NwYWNlIE1vbm8nO1xcbiAgLS1teWZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbXlmb250KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbXlmb250LXNpemUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5aXNoLWN5YW4pO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ibG9jazogdmFyKC0tc3BhY2UtYmV0d2Vlbik7XFxufVxcblxcbiNsb2dvIHtcXG4gIG1hcmdpbi1ibG9jazogdmFyKC0tc3BhY2UtYmV0d2Vlbik7XFxufVxcblxcbiNjYWxjdWxhdG9yIHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWJldHdlZW4pIDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHZhcigtLXZlcnktZGFyay1jeWFuKTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbiNjYWxjdWxhdG9yIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZlcnktbGlnaHQtZ3JheWlzaC1jeWFuKTtcXG4gIGNvbG9yOiB2YXIoLS12ZXJ5LWRhcmstY3lhbik7XFxuICBmb250LXNpemU6IHZhcigtLW15Zm9udC1zaXplKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1teWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIGRpcmVjdGlvbjogcnRsO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1iZXR3ZWVuKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NhbGN1bGF0b3IgI2JpbGwtaW5wdXQtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNjYWxjdWxhdG9yICNkb2xsYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxMHB4O1xcbiAgdG9wOiAxMnB4O1xcbn1cXG5cXG4jY2FsY3VsYXRvciAjcGVyY2VudGFnZXMtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgZ2FwOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtYmV0d2Vlbik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNjYWxjdWxhdG9yIC50aXAtYnRuIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbXlmb250LXNpemUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW15Zm9udCk7XFxuICBwYWRkaW5nLWJsb2NrOiAxNHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZlcnktZGFyay1jeWFuKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NhbGN1bGF0b3IgI2N1c3RvbSB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNjYWxjdWxhdG9yICNjdXN0b20gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tdmVyeS1kYXJrLWN5YW4pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmVyeS1saWdodC1ncmF5aXNoLWN5YW4pO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY2FsY3VsYXRvciAjcGVvcGxlLW51bWJlci13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NhbGN1bGF0b3IgI3BlcnNvbi1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IDEycHg7XFxufVxcblxcbiNyZXN1bHQtcGFuZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmVyeS1kYXJrLWN5YW4pO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtYmV0d2VlbikgMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY2FsY3VsYXRvciAucmVzdWx0LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5yZXN1bHQtd3JhcHBlciBoMyB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ucmVzdWx0LXdyYXBwZXIgcCB7XFxuICBjb2xvcjogdmFyKC0tc3Ryb25nLWN5YW4pO1xcbn1cXG5cXG4ucmVzdWx0LXdyYXBwZXIgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiB2YXIoLS1ncmF5aXNoLWN5YW4pO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jcmVzdWx0LXBhbmVsIC5yZXNldCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdHJvbmctY3lhbik7XFxuICBjb2xvcjogdmFyKC0tdmVyeS1kYXJrLWN5YW4pO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ibG9jazogMTRweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4vKmFjdGl2ZSBzdGF0ZXMgKi9cXG4jY2FsY3VsYXRvciBpbnB1dDppcyg6Zm9jdXMsIDphY3RpdmUpIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1zdHJvbmctY3lhbik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjYWxjdWxhdG9yIC50aXAtYnRuOmlzKDpob3ZlciwgOmZvY3VzKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdHJvbmctY3lhbik7XFxufVxcblxcbiNjYWxjdWxhdG9yICNjdXN0b206aXMoOmZvY3VzLCA6aG92ZXIpIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1zdHJvbmctY3lhbik7XFxufVxcblxcbiNyZXN1bHQtcGFuZWwgLnJlc2V0OmlzKDpmb2N1cywgOmhvdmVyKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5aXNoLWN5YW4pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBtYW5hZ2UgaW52YWxpZCBpbnB1dHMgKi9cXG4uZXJyb3ItbXNnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0zMHB4O1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5pbnZhbGlkLXBlcmNlbnRhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTIwcHg7XFxuICByaWdodDogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaW52YWxpZC1ib3JkZXIge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLXJlZC1jb2xvcik7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5NzBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1pbi1oZWlnaHQ6IDgwJTtcXG4gIH1cXG5cXG4gICNjYWxjdWxhdG9yIHtcXG4gICAgbWluLXdpZHRoOiA1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBnYXA6IDMwcHg7XFxuICB9XFxuXFxuICAjY2FsY3VsYXRvciAjcGVyY2VudGFnZXMtZGl2IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDExMHB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNTBweCk7XFxuICB9XFxuXFxuICAjY2FsY3VsYXRvciAudGlwLWJ0biB7XFxuICAgIHBhZGRpbmctYmxvY2s6IDhweDtcXG4gIH1cXG5cXG4gIC5yZXN1bHQtd3JhcHBlciBoMyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbXlmb250LXNpemUpO1xcbiAgfVxcblxcbiAgLnJlc3VsdC13cmFwcGVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAucmVzdWx0LXdyYXBwZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gIH1cXG5cXG4gICNyZXN1bHQtcGFuZWwgLnJlc3Qge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxpQ0FBaUM7O0VBRWpDLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsd0NBQXdDO0VBQ3hDLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIsZ0JBQWdCOztFQUVoQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsU0FBUztFQUNULGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixTQUFTO0VBQ1QsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsZ0RBQWdEO0VBQ2hELFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGVBQWU7QUFDakI7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHdCQUF3QjtJQUN4QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxvREFBb0Q7SUFDcEQsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrTW9ubzp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcXG46cm9vdCB7XFxuICAtLXN0cm9uZy1jeWFuOiBoc2woMTcyLCA2NyUsIDQ1JSk7XFxuXFxuICAtLXZlcnktZGFyay1jeWFuOiBoc2woMTgzLCAxMDAlLCAxNSUpO1xcbiAgLS1ncmF5aXNoLWN5YW46IGhzbCgxODQsIDE0JSwgNTYlKTtcXG4gIC0tbGlnaHQtZ3JheWlzaC1jeWFuOiBoc2woMTg1LCA0MSUsIDg0JSk7XFxuICAtLXZlcnktbGlnaHQtZ3JheWlzaC1jeWFuOiBoc2woMTg5LCA0MSUsIDk3JSk7XFxuICAtLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgLS1yZWQtY29sb3I6IHJlZDtcXG5cXG4gIC0tc3BhY2UtYmV0d2VlbjogNDBweDtcXG4gIC0tbXlmb250OiAnU3BhY2UgTW9ubyc7XFxuICAtLW15Zm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1teWZvbnQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1teWZvbnQtc2l6ZSk7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXlpc2gtY3lhbik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJsb2NrOiB2YXIoLS1zcGFjZS1iZXR3ZWVuKTtcXG59XFxuXFxuI2xvZ28ge1xcbiAgbWFyZ2luLWJsb2NrOiB2YXIoLS1zcGFjZS1iZXR3ZWVuKTtcXG59XFxuXFxuI2NhbGN1bGF0b3Ige1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtYmV0d2VlbikgMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogdmFyKC0tdmVyeS1kYXJrLWN5YW4pO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuI2NhbGN1bGF0b3IgaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmVyeS1saWdodC1ncmF5aXNoLWN5YW4pO1xcbiAgY29sb3I6IHZhcigtLXZlcnktZGFyay1jeWFuKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbXlmb250LXNpemUpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW15Zm9udCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgZGlyZWN0aW9uOiBydGw7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLWJldHdlZW4pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY2FsY3VsYXRvciAjYmlsbC1pbnB1dC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NhbGN1bGF0b3IgI2RvbGxhciB7XFxuICB3aWR0aDogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IDEycHg7XFxufVxcblxcbiNjYWxjdWxhdG9yICNwZXJjZW50YWdlcy1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICBnYXA6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1iZXR3ZWVuKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NhbGN1bGF0b3IgLnRpcC1idG4ge1xcbiAgZm9udC1zaXplOiB2YXIoLS1teWZvbnQtc2l6ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tbXlmb250KTtcXG4gIHBhZGRpbmctYmxvY2s6IDE0cHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmVyeS1kYXJrLWN5YW4pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY2FsY3VsYXRvciAjY3VzdG9tIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI2NhbGN1bGF0b3IgI2N1c3RvbSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS12ZXJ5LWRhcmstY3lhbik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXJ5LWxpZ2h0LWdyYXlpc2gtY3lhbik7XFxuICBvcGFjaXR5OiAwLjc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjYWxjdWxhdG9yICNwZW9wbGUtbnVtYmVyLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY2FsY3VsYXRvciAjcGVyc29uLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogMTJweDtcXG59XFxuXFxuI3Jlc3VsdC1wYW5lbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXJ5LWRhcmstY3lhbik7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1iZXR3ZWVuKSAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjYWxjdWxhdG9yIC5yZXN1bHQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnJlc3VsdC13cmFwcGVyIGgzIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5yZXN1bHQtd3JhcHBlciBwIHtcXG4gIGNvbG9yOiB2YXIoLS1zdHJvbmctY3lhbik7XFxufVxcblxcbi5yZXN1bHQtd3JhcHBlciBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IHZhcigtLWdyYXlpc2gtY3lhbik7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbiNyZXN1bHQtcGFuZWwgLnJlc2V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0cm9uZy1jeWFuKTtcXG4gIGNvbG9yOiB2YXIoLS12ZXJ5LWRhcmstY3lhbik7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJsb2NrOiAxNHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi8qYWN0aXZlIHN0YXRlcyAqL1xcbiNjYWxjdWxhdG9yIGlucHV0OmlzKDpmb2N1cywgOmFjdGl2ZSkge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLXN0cm9uZy1jeWFuKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NhbGN1bGF0b3IgLnRpcC1idG46aXMoOmhvdmVyLCA6Zm9jdXMpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0cm9uZy1jeWFuKTtcXG59XFxuXFxuI2NhbGN1bGF0b3IgI2N1c3RvbTppcyg6Zm9jdXMsIDpob3Zlcikge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLXN0cm9uZy1jeWFuKTtcXG59XFxuXFxuI3Jlc3VsdC1wYW5lbCAucmVzZXQ6aXMoOmZvY3VzLCA6aG92ZXIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXlpc2gtY3lhbik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIG1hbmFnZSBpbnZhbGlkIGlucHV0cyAqL1xcbi5lcnJvci1tc2cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTMwcHg7XFxuICByaWdodDogMDtcXG59XFxuXFxuLmludmFsaWQtcGVyY2VudGFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMjBweDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pbnZhbGlkLWJvcmRlciB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tcmVkLWNvbG9yKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDk3MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWluLWhlaWdodDogODAlO1xcbiAgfVxcblxcbiAgI2NhbGN1bGF0b3Ige1xcbiAgICBtaW4td2lkdGg6IDUlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdhcDogMzBweDtcXG4gIH1cXG5cXG4gICNjYWxjdWxhdG9yICNwZXJjZW50YWdlcy1kaXYge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTEwcHgsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MHB4KTtcXG4gIH1cXG5cXG4gICNjYWxjdWxhdG9yIC50aXAtYnRuIHtcXG4gICAgcGFkZGluZy1ibG9jazogOHB4O1xcbiAgfVxcblxcbiAgLnJlc3VsdC13cmFwcGVyIGgzIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1teWZvbnQtc2l6ZSk7XFxuICB9XFxuXFxuICAucmVzdWx0LXdyYXBwZXIgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5yZXN1bHQtd3JhcHBlciBwIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgfVxcblxcbiAgI3Jlc3VsdC1wYW5lbCAucmVzdCB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY2FsY3VsYXRlVGlwQW1vdW50UGVyUGVyc29uKGJpbGwsIHBlcmNlbnRhZ2UsIHBlb3BsZU51bWJlcikge1xuICByZXR1cm4gKGJpbGwgKiBwZXJjZW50YWdlKSAvIDEwMCAvIHBlb3BsZU51bWJlcjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVG90YWwoYmlsbCwgcGVvcGxlTnVtYmVyLCB0aXBBbW91bnRQZXJQZXJzb24pIHtcbiAgcmV0dXJuIGJpbGwgLyBwZW9wbGVOdW1iZXIgKyB0aXBBbW91bnRQZXJQZXJzb247XG59XG5cbmV4cG9ydCB7IGNhbGN1bGF0ZVRpcEFtb3VudFBlclBlcnNvbiwgY2FsY3VsYXRlVG90YWwgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQge1xuICBjYWxjdWxhdGVUaXBBbW91bnRQZXJQZXJzb24sXG4gIGNhbGN1bGF0ZVRvdGFsLFxufSBmcm9tICcuL2NhbGN1bGF0b3JfbG9naWMnO1xuXG5mdW5jdGlvbiByZXNldChiaWxsSW5wdXQsIGN1c3RvbUlucHV0LCBwZW9wbGVOdW1iZXIsIHRpcEFtb3VudCwgdG90YWxQYXJhKSB7XG4gIGJpbGxJbnB1dC52YWx1ZSA9ICcwJztcbiAgY3VzdG9tSW5wdXQudmFsdWUgPSAnQ3VzdG9tJztcbiAgcGVvcGxlTnVtYmVyLnZhbHVlID0gJzAnO1xuICB0aXBBbW91bnQudGV4dENvbnRlbnQgPSAnJDAuMDAnO1xuICB0b3RhbFBhcmEudGV4dENvbnRlbnQgPSAnJDAuMDAnO1xufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0KGV2ZW50KSB7XG4gIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihpbnB1dCkge1xuICByZXR1cm4gIU51bWJlci5pc05hTihOdW1iZXIoaW5wdXQpKTtcbn1cblxuZnVuY3Rpb24gaXNaZXJvKGlucHV0KSB7XG4gIHJldHVybiBOdW1iZXIoaW5wdXQpID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkUGVyY2VudGFnZShpbnB1dCkge1xuICByZXR1cm4gaXNOdW1iZXIoaW5wdXQuc3BsaXQoJyUnKS5qb2luKCcnKSk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZShiaWxsLCBwZXJjZW50YWdlLCBwZW9wbGVOdW1iZXIsIHRpcEFtb3VudCwgdG90YWxQYXJhKSB7XG4gIGNvbnN0IHRpcEFtb3VudFBlclBlcnNvbiA9IGNhbGN1bGF0ZVRpcEFtb3VudFBlclBlcnNvbihcbiAgICBiaWxsLFxuICAgIHBlcmNlbnRhZ2Uuc3BsaXQoJyUnKS5qb2luKCcnKSxcbiAgICBwZW9wbGVOdW1iZXJcbiAgKTtcbiAgY29uc3QgdG90YWwgPSBjYWxjdWxhdGVUb3RhbChiaWxsLCBwZW9wbGVOdW1iZXIsIHRpcEFtb3VudFBlclBlcnNvbik7XG4gIHRpcEFtb3VudC50ZXh0Q29udGVudCA9IGAkJHt0aXBBbW91bnRQZXJQZXJzb24udG9GaXhlZCgyKX1gO1xuICB0b3RhbFBhcmEudGV4dENvbnRlbnQgPSBgJCR7dG90YWwudG9GaXhlZCgyKX1gO1xufVxuXG5mdW5jdGlvbiBhcmVJbnB1dHNWYWxpZChiaWxsSW5wdXQsIHBlb3BsZU51bWJlcklucHV0KSB7XG4gIGlmIChcbiAgICBpc051bWJlcihiaWxsSW5wdXQudmFsdWUpICYmXG4gICAgaXNOdW1iZXIocGVvcGxlTnVtYmVySW5wdXQudmFsdWUpICYmXG4gICAgIWlzWmVybyhwZW9wbGVOdW1iZXJJbnB1dC52YWx1ZSlcbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW52YWxpZE1zZyhpbnB1dEVsZW1lbnQsIG1zZykge1xuICBsZXQgc3BhbiA9IGlucHV0RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgaWYgKCFzcGFuKSB7XG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpbnB1dEVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfVxuXG4gIHNwYW4udGV4dENvbnRlbnQgPSBtc2c7XG4gIGlmIChpc051bWJlcihpbnB1dEVsZW1lbnQudmFsdWUpICYmICFpc1plcm8oaW5wdXRFbGVtZW50LnZhbHVlKSkge1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvci1tc2cnKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1ib3JkZXInKTtcbiAgfSBlbHNlIHtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1zZycpO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWJvcmRlcicpO1xuICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUludmFsaWRQZXJjZW50YWdlKGlucHV0RWxlbWVudCwgbXNnKSB7XG4gIGxldCBzcGFuID0gaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIGlmICghc3Bhbikge1xuICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaW5wdXRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfVxuICBzcGFuLnRleHRDb250ZW50ID0gbXNnO1xuICBpZiAoaXNWYWxpZFBlcmNlbnRhZ2UoaW5wdXRFbGVtZW50LnZhbHVlKSkge1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtYm9yZGVyJyk7XG4gICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXBlcmNlbnRhZ2UnKTtcbiAgfSBlbHNlIHtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtcGVyY2VudGFnZScpO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWJvcmRlcicpO1xuICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbERpc3BsYXkoKSB7XG4gIGNvbnN0IGJpbGxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiaWxsLWlucHV0LXdyYXBwZXIgaW5wdXQnKTtcbiAgY29uc3QgcGVvcGxlTnVtYmVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjcGVvcGxlLW51bWJlci13cmFwcGVyIGlucHV0J1xuICApO1xuICBjb25zdCBjdXN0b21JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b20gaW5wdXQnKTtcbiAgY29uc3QgdGlwQW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdC13cmFwcGVyICN0aXAtYW1vdW50Jyk7XG4gIGNvbnN0IHRvdGFsUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtd3JhcHBlciAjdG90YWwnKTtcbiAgY29uc3QgcGVyY2VudGFnZUJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXAtYnRuJykpO1xuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpO1xuXG4gIGJpbGxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFySW5wdXQpO1xuICBwZW9wbGVOdW1iZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFySW5wdXQpO1xuICBjdXN0b21JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFySW5wdXQpO1xuXG4gIGJpbGxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBkaXNwbGF5SW52YWxpZE1zZyhiaWxsSW5wdXQsICcqIE11c3QgYmUgTnVtYmVyJyk7XG4gIH0pO1xuXG4gIHBlb3BsZU51bWJlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGlmIChpc1plcm8ocGVvcGxlTnVtYmVySW5wdXQudmFsdWUpKSB7XG4gICAgICBkaXNwbGF5SW52YWxpZE1zZyhwZW9wbGVOdW1iZXJJbnB1dCwgJyogTXVzdCBub3QgYmUgWmVybycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5SW52YWxpZE1zZyhwZW9wbGVOdW1iZXJJbnB1dCwgJyogTXVzdCBiZSBOdW1iZXInKTtcbiAgICB9XG4gIH0pO1xuXG4gIGN1c3RvbUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGRpc3BsYXlJbnZhbGlkUGVyY2VudGFnZShjdXN0b21JbnB1dCwgJyogSW52YWxpZCBQZXJjZW50YWdlJyk7XG4gICAgaWYgKGlzVmFsaWRQZXJjZW50YWdlKGN1c3RvbUlucHV0LnZhbHVlKSkge1xuICAgICAgY2FsY3VsYXRlKFxuICAgICAgICBiaWxsSW5wdXQudmFsdWUsXG4gICAgICAgIGN1c3RvbUlucHV0LnZhbHVlLFxuICAgICAgICBwZW9wbGVOdW1iZXJJbnB1dC52YWx1ZSxcbiAgICAgICAgdGlwQW1vdW50LFxuICAgICAgICB0b3RhbFBhcmFcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBwZXJjZW50YWdlQnRucy5mb3JFYWNoKChwZXJjZW50YWdlQnRuKSA9PiB7XG4gICAgcGVyY2VudGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBpZiAoYXJlSW5wdXRzVmFsaWQoYmlsbElucHV0LCBwZW9wbGVOdW1iZXJJbnB1dCkpIHtcbiAgICAgICAgY2FsY3VsYXRlKFxuICAgICAgICAgIGJpbGxJbnB1dC52YWx1ZSxcbiAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCxcbiAgICAgICAgICBwZW9wbGVOdW1iZXJJbnB1dC52YWx1ZSxcbiAgICAgICAgICB0aXBBbW91bnQsXG4gICAgICAgICAgdG90YWxQYXJhXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlc2V0KGJpbGxJbnB1dCwgY3VzdG9tSW5wdXQsIHBlb3BsZU51bWJlcklucHV0LCB0aXBBbW91bnQsIHRvdGFsUGFyYSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlVGlwQ2FsY3VsYXRvciBmcm9tICcuL3RpcF9jYWxjdWxhdG9yJztcbmltcG9ydCBsb2dvSWNvbiBmcm9tICcuL2ltYWdlcy9sb2dvLnN2Zyc7XG5pbXBvcnQgY29udHJvbERpc3BsYXkgZnJvbSAnLi9kaXNwbGF5X2NvbnRyb2xsZXInO1xuXG5mdW5jdGlvbiBjcmVhdGVNYWluUGFnZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICBsb2dvLnNyYyA9IGxvZ29JY29uO1xuICBsb2dvLmlkID0gJ2xvZ28nO1xuXG4gIGNvbnN0IHRpcENhbGN1bGF0b3IgPSBjcmVhdGVUaXBDYWxjdWxhdG9yKCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpcENhbGN1bGF0b3IpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIHJldHVybiBib2R5O1xufVxuXG5jcmVhdGVNYWluUGFnZSgpO1xuY29udHJvbERpc3BsYXkoKTtcbiIsImltcG9ydCBkb2xsYXJJY29uIGZyb20gJy4vaW1hZ2VzL2ljb24tZG9sbGFyLnN2Zyc7XG5pbXBvcnQgcGVyc29uSWNvbiBmcm9tICcuL2ltYWdlcy9pY29uLXBlcnNvbi5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVTdWJUaXRsZSh0ZXh0KSB7XG4gIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBzdWJUaXRsZS5jbGFzc0xpc3QuYWRkKCdzdWJ0aXRsZScpO1xuICByZXR1cm4gc3ViVGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRJbnB1dChpZCwgdmFsdWUpIHtcbiAgY29uc3QgaW5wdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0V3JhcHBlci5pZCA9IGlkO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gIGlucHV0V3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIHJldHVybiBpbnB1dFdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ0bihjbGFzLCB0ZXh0KSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4uY2xhc3NMaXN0LmFkZChjbGFzKTtcbiAgYnRuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVzdWx0Q29tcG9uZW50KGlkLCB0ZXh0LCByc2x0KSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdyZXN1bHQtd3JhcHBlcicpO1xuICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cbiAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLnRleHRDb250ZW50ID0gJy8gcGVyc29uJztcblxuICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gIHJlc3VsdC50ZXh0Q29udGVudCA9IGAkJHtyc2x0fWA7XG4gIHJlc3VsdC5pZCA9IGlkO1xuXG4gIHN1YlRpdGxlLmFwcGVuZENoaWxkKHNwYW4pO1xuICB3cmFwcGVyLmFwcGVuZChzdWJUaXRsZSwgcmVzdWx0KTtcblxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGlwQ2FsY3VsYXRvcigpIHtcbiAgY29uc3QgY2FsY3VsYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYWxjdWxhdG9yLmlkID0gJ2NhbGN1bGF0b3InO1xuICBjb25zdCBjYWxjUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FsY1BhbmVsLmlkID0gJ2NhbGMtcGFuZWwnO1xuICBjb25zdCByZXN1bHRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXN1bHRQYW5lbC5pZCA9ICdyZXN1bHQtcGFuZWwnO1xuXG4gIGNvbnN0IGJpbGwgPSBjcmVhdGVTdWJUaXRsZSgnQmlsbCcpO1xuICBjb25zdCBiaWxsSW5wdXQgPSBjcmVhdGVUZXh0SW5wdXQoJ2JpbGwtaW5wdXQtd3JhcHBlcicsICcwJyk7XG4gIGNvbnN0IGRvbGxhciA9IG5ldyBJbWFnZSgpO1xuICBkb2xsYXIuc3JjID0gZG9sbGFySWNvbjtcbiAgZG9sbGFyLmlkID0gJ2RvbGxhcic7XG4gIGJpbGxJbnB1dC5hcHBlbmRDaGlsZChkb2xsYXIpO1xuXG4gIGNvbnN0IHNlbGVjdFRpcFBlcmNlbnRhZ2UgPSBjcmVhdGVTdWJUaXRsZSgnU2VsZWN0IFRpcCAlJyk7XG4gIGNvbnN0IGZpdmVQZXJjZW50ID0gY3JlYXRlQnRuKCd0aXAtYnRuJywgJzUlJyk7XG4gIGNvbnN0IHRlblBlcmNlbnQgPSBjcmVhdGVCdG4oJ3RpcC1idG4nLCAnMTAlJyk7XG4gIGNvbnN0IGZpZnRlZW5QZXJjZW50ID0gY3JlYXRlQnRuKCd0aXAtYnRuJywgJzE1JScpO1xuICBjb25zdCB0d2VudHlGaXZlUGVyY2VudCA9IGNyZWF0ZUJ0bigndGlwLWJ0bicsICcyNSUnKTtcbiAgY29uc3QgZmlmdHlQZXJjZW50ID0gY3JlYXRlQnRuKCd0aXAtYnRuJywgJzUwJScpO1xuICBjb25zdCBjdXN0b20gPSBjcmVhdGVUZXh0SW5wdXQoJ2N1c3RvbScsICdDdXN0b20nKTtcblxuICBjb25zdCBwZXJjZW50YWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwZXJjZW50YWdlcy5pZCA9ICdwZXJjZW50YWdlcy1kaXYnO1xuICBwZXJjZW50YWdlcy5hcHBlbmQoXG4gICAgZml2ZVBlcmNlbnQsXG4gICAgdGVuUGVyY2VudCxcbiAgICBmaWZ0ZWVuUGVyY2VudCxcbiAgICB0d2VudHlGaXZlUGVyY2VudCxcbiAgICBmaWZ0eVBlcmNlbnQsXG4gICAgY3VzdG9tXG4gICk7XG5cbiAgY29uc3Qgbk9mUFN1YnRpdGxlID0gY3JlYXRlU3ViVGl0bGUoJ051bWJlciBvZiBQZW9wbGUnKTtcbiAgY29uc3QgbnVtYmVyT2ZQZW9wbGUgPSBjcmVhdGVUZXh0SW5wdXQoJ3Blb3BsZS1udW1iZXItd3JhcHBlcicsICcwJyk7XG4gIGNvbnN0IHBlcnNvbkltZyA9IG5ldyBJbWFnZSgpO1xuICBwZXJzb25JbWcuc3JjID0gcGVyc29uSWNvbjtcbiAgcGVyc29uSW1nLmlkID0gJ3BlcnNvbi1pY29uJztcbiAgbnVtYmVyT2ZQZW9wbGUuYXBwZW5kQ2hpbGQocGVyc29uSW1nKTtcblxuICBjYWxjUGFuZWwuYXBwZW5kKFxuICAgIGJpbGwsXG4gICAgYmlsbElucHV0LFxuICAgIHNlbGVjdFRpcFBlcmNlbnRhZ2UsXG4gICAgcGVyY2VudGFnZXMsXG4gICAgbk9mUFN1YnRpdGxlLFxuICAgIG51bWJlck9mUGVvcGxlXG4gICk7XG5cbiAgY29uc3QgdGlwQW1vdW50ID0gY3JlYXRlUmVzdWx0Q29tcG9uZW50KCd0aXAtYW1vdW50JywgJ1RpcCBBbW91bnQnLCAnMC4wMCcpO1xuICBjb25zdCB0b3RhbCA9IGNyZWF0ZVJlc3VsdENvbXBvbmVudCgndG90YWwnLCAnVG90YWwnLCAnMC4wMCcpO1xuICBjb25zdCByZXN0QnRuID0gY3JlYXRlQnRuKCdyZXNldCcsICdSRVNFVCcpO1xuXG4gIHJlc3VsdFBhbmVsLmFwcGVuZCh0aXBBbW91bnQsIHRvdGFsLCByZXN0QnRuKTtcblxuICBjYWxjdWxhdG9yLmFwcGVuZChjYWxjUGFuZWwsIHJlc3VsdFBhbmVsKTtcblxuICByZXR1cm4gY2FsY3VsYXRvcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==