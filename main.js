/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
box-sizing: border-box;
margin: 0;
padding: 0;
}

body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-form-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto
}

#add-project-btn, #add-to-do-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  height: 50px;
  width: 100px;
  border: 2px solid black;
  border-radius: 10px;
}

#add-project-form, #add-to-do-form {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 350px;
  height: 500px;
  border: 1px solid black;
}

.form-styling {
  display: flex;
  flex-direction: column;
}

.form-label {
  margin-bottom: 10px;
}

.form-input {
  margin-bottom: 20px;
}

#projects-section {
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#projects-section > h2 {
  text-align: center;
  margin: 20px auto;
}

#projects-container {
  width: 350px;
  margin: 0 auto;
}

.project-item {
  width: 100%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.project-text {
  width: 75px;
}

.expand-project-btn {
  height: 20px;
  width: 50px;
  margin-left: auto;
}

.project-to-do-list {
  width: 150px;
}

.project-to-do {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 10px;
}

.inner-list-item {
  display: flex;
}

.project-to-do > button {
  margin-left: auto;
}

.hide {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;AACA,sBAAsB;AACtB,SAAS;AACT,UAAU;AACV;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\nbox-sizing: border-box;\nmargin: 0;\npadding: 0;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.btn-form-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px auto\n}\n\n#add-project-btn, #add-to-do-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 40px;\n  height: 50px;\n  width: 100px;\n  border: 2px solid black;\n  border-radius: 10px;\n}\n\n#add-project-form, #add-to-do-form {\n  position: absolute;\n  top: 50px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  width: 350px;\n  height: 500px;\n  border: 1px solid black;\n}\n\n.form-styling {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-label {\n  margin-bottom: 10px;\n}\n\n.form-input {\n  margin-bottom: 20px;\n}\n\n#projects-section {\n  width: 400px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n#projects-section > h2 {\n  text-align: center;\n  margin: 20px auto;\n}\n\n#projects-container {\n  width: 350px;\n  margin: 0 auto;\n}\n\n.project-item {\n  width: 100%;\n  margin: 20px auto;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.project-text {\n  width: 75px;\n}\n\n.expand-project-btn {\n  height: 20px;\n  width: 50px;\n  margin-left: auto;\n}\n\n.project-to-do-list {\n  width: 150px;\n}\n\n.project-to-do {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin: 0 10px;\n}\n\n.inner-list-item {\n  display: flex;\n}\n\n.project-to-do > button {\n  margin-left: auto;\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/dom-handling.js":
/*!*************************************!*\
  !*** ./src/modules/dom-handling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickAddProjectBtn: () => (/* binding */ clickAddProjectBtn),
/* harmony export */   clickAddToDoBtn: () => (/* binding */ clickAddToDoBtn),
/* harmony export */   clickProjectExpand: () => (/* binding */ clickProjectExpand),
/* harmony export */   getLogic: () => (/* binding */ getLogic)
/* harmony export */ });
/* harmony import */ var _logic_handling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic-handling */ "./src/modules/logic-handling.js");
// Import functions


// Define all DOM objects
function DefineDOMItems() {
  // Btns to open form modals
  const addProjectBtn = document.getElementById("add-project-btn");
  const addToDoBtn = document.getElementById("add-to-do-btn");
  // Form modal objects
  const addProjectForm = document.getElementById("add-project-form");
  const addToDoForm = document.getElementById("add-to-do-form");
  // Btns to submit form modals
  const addProjectSubmitBtn = document.getElementById("add-project-submit-btn");
  const addToDoSubmitBtn = document.getElementById("add-to-do-submit-btn");
  // Project inputs
  const newProjectInput = document.getElementById("new-project-input");
  //Projects container
  const projectsContainer = document.getElementById("projects-container");
  // Projects expand btn
  let expandProjectBtn = document.querySelectorAll(".expand-project-btn");
  // To-do inputs
  const toDoProjectSelect = document.getElementById("to-do-project-select");
  const newToDoTitle = document.getElementById("new-to-do-title");
  const newToDoDescription = document.getElementById("new-to-do-description");
  const newToDoDueDate = document.getElementById("new-to-do-due-date");
  const newToDoPriority = document.getElementById("new-to-do-priority");
  const newToDoNotes = document.getElementById("new-to-do-notes");
  // Return all
  return { addProjectForm, addToDoForm, addProjectBtn, addToDoBtn, addProjectSubmitBtn, addToDoSubmitBtn, newProjectInput, projectsContainer, expandProjectBtn, toDoProjectSelect, newToDoTitle, newToDoDescription, newToDoDueDate, newToDoPriority, newToDoNotes }
}


// Add click event to add-project-btn
function clickAddProjectBtn() {
  const addProjectBtn = DefineDOMItems().addProjectBtn;
  addProjectBtn.addEventListener("click", (e) => {
    console.log(e.target);
    // Show projects form modal
    const addProjectForm = DefineDOMItems().addProjectForm;
    addProjectForm.classList.remove("hide");
    // Hide To-Do form modal
    const addToDoForm = DefineDOMItems().addToDoForm;
    addToDoForm.classList.add("hide");
    // Remove project form input values
    const newProjectInput = DefineDOMItems().newProjectInput;
    newProjectInput.value = "";
  })
}

// Add click event to add-to-do-btn
function clickAddToDoBtn() {
  const addToDoBtn = DefineDOMItems().addToDoBtn;
  addToDoBtn.addEventListener("click", (e) => {
    console.log(e.target);
    // Show To-Do form modal
    const addToDoForm = DefineDOMItems().addToDoForm;
    addToDoForm.classList.remove("hide");
    // Hide projects form modal
    const addProjectForm = DefineDOMItems().addProjectForm;
    addProjectForm.classList.add("hide");
    // Define to-do values and set to empty values
    const toDoProjectSelect = DefineDOMItems().toDoProjectSelect;
    const newToDoTitle = DefineDOMItems().newToDoTitle;
    const newToDoDescription = DefineDOMItems().newToDoDescription;
    const newToDoDueDate = DefineDOMItems().newToDoDueDate;
    const newToDoPriority = DefineDOMItems().newToDoPriority;
    const newToDoNotes = DefineDOMItems().newToDoNotes;
    toDoProjectSelect.value = "";
    newToDoTitle.value = "";
    newToDoDescription.value = "";
    newToDoDueDate.value = "";
    newToDoPriority.value = "";
    newToDoNotes.value = "";
  })
}

// Add click event to expand btn on projects
function clickProjectExpand() {
  let expandProjectBtn = DefineDOMItems().expandProjectBtn;
  for (let i = 0; i < expandProjectBtn.length; i++) {
    expandProjectBtn[i].addEventListener("click", (e) => {
      let target = e.target;
      let targetSibling = target.nextElementSibling;
      // Loop through siblings
      while (targetSibling) {
        targetSibling.classList.toggle("hide");
        targetSibling = targetSibling.nextElementSibling;
      }
    })
  }
}

// Add click event to expand btn on to-dos
function clickToDoExpand() {
  let expandToDoBtn = DefineDOMItems().expandToDoBtn;
  for (let i = 0; i < expandToDoBtn.length; i++) {
    expandToDoBtn[i].addEventListener("click", (e) => {
      let target = e.target;

    })
  }
}

// Add new project
function newProjectValue() {
  const newProjectInput = DefineDOMItems().newProjectInput;
  return newProjectInput.value;
}

// Get logic
function getLogic() {
  // Get modifyProjects 
  const modifyProjects = (0,_logic_handling__WEBPACK_IMPORTED_MODULE_0__.ModifyProjects)();

  // Show projects on page
  const showProjects = () => {
    // Get DOM element
    const projectsContainer = DefineDOMItems().projectsContainer;
    // Remove children in preparation for showing new children
    while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.firstChild);
    }
    // Show projects on page
    for (const [key, value] of Object.entries(modifyProjects.projects)) {
      projectsContainer.append((0,_logic_handling__WEBPACK_IMPORTED_MODULE_0__.createDiv)(key));
      value.map((v) => { projectsContainer.lastElementChild.append((0,_logic_handling__WEBPACK_IMPORTED_MODULE_0__.createUl)(v.title)) })
    }
    // Test log to delete later
    console.log(modifyProjects.projects)
    return modifyProjects.projects;
  }

  const showToDos = () => {
    // Get DOM element
    let projectItems = document.querySelectorAll(".project-item");
    for (let i = 0; i < projectItems.length; i++) {
      let item = projectItems[i];
      for (let j = 0; j < item.children.length; j++) {
        if (item.children[j].classList.contains("project-to-do-list")) {
        }
        if (item.children[j].childElementCount > 0) {
          for (let k = 0; k < item.children[j].children.length; k++) {
            item.children[j].children[k].firstElementChild.addEventListener("click", () => {
              for (const [key, value] of Object.entries(modifyProjects.projects)) {
                if (key === item.firstElementChild.textContent) {
                  for (let m = 0; m < value.length; m++) {
                    if (value[m].title === item.children[j].children[k].firstChild.textContent) {
                      item.children[j].children[k].firstChild.textContent = "";
                      let html = `<li class="inner-list-item">
                                      <label class="inner-list-item-label">Title:</label>
                                      <p class="inner-list-item-p">${value[m].title}</p>
                                    </li>
                                    <li class="inner-list-item">
                                      <label class="inner-list-item-label">Description:</label>
                                      <p class="inner-list-item-p">${value[m].description}</p>
                                    </li>
                                    <li class="inner-list-item">
                                      <label class="inner-list-item-label">Due Date:</label>
                                      <p class="inner-list-item-p">${value[m].dueDate}</p>
                                    </li>
                                    <li class="inner-list-item">
                                      <label class="inner-list-item-label">Priority:</label>
                                      <p class="inner-list-item-p">${value[m].priority}</p>
                                    </li>
                                    <li class="inner-list-item">
                                      <label class="inner-list-item-label">Notes:</label>
                                      <p class="inner-list-item-p">${value[m].notes}</p>
                                    </li>`;
                      item.children[j].children[k].insertAdjacentHTML("afterbegin", html)
                    }
                  }
                }
              }
            })
          }
        }
      }
    }
  }

  // Submit new project form
  const submitProjectForm = () => {
    const addProjectSubmitBtn = DefineDOMItems().addProjectSubmitBtn;
    addProjectSubmitBtn.addEventListener("click", (e) => {
      console.log(e.target);
      e.preventDefault();
      // Hide form
      const addProjectForm = DefineDOMItems().addProjectForm;
      addProjectForm.classList.add("hide");
      // Run everything
      modifyProjects.newProject(newProjectValue());
      showProjects();
      clickProjectExpand();
      addProjectOptions();
      showToDos();
    })
  }

  // Add project options
  const addProjectOptions = () => {
    const toDoProjectSelect = DefineDOMItems().toDoProjectSelect;
    // Remove existing options
    while (toDoProjectSelect.firstChild) {
      toDoProjectSelect.removeChild(toDoProjectSelect.firstChild);
    }
    // Add options
    for (const key of Object.keys(modifyProjects.projects)) {
      toDoProjectSelect.append((0,_logic_handling__WEBPACK_IMPORTED_MODULE_0__.createOption)(key))
    }
  }

  // Submit new to-do form 
  const submitToDoForm = () => {
    const addToDoSubmitBtn = DefineDOMItems().addToDoSubmitBtn;
    addToDoSubmitBtn.addEventListener("click", (e) => {
      console.log(e.target);
      e.preventDefault();
      // Hide form
      const addToDoForm = DefineDOMItems().addToDoForm;
      addToDoForm.classList.add("hide");
      // Define to-do values
      const toDoProjectSelect = DefineDOMItems().toDoProjectSelect;
      const newToDoTitle = DefineDOMItems().newToDoTitle;
      const newToDoDescription = DefineDOMItems().newToDoDescription;
      const newToDoDueDate = DefineDOMItems().newToDoDueDate;
      const newToDoPriority = DefineDOMItems().newToDoPriority;
      const newToDoNotes = DefineDOMItems().newToDoNotes;
      // Add to-dos
      for (const [key, value] of Object.entries(modifyProjects.projects)) {
        if (key === toDoProjectSelect.value) {
          value.push((0,_logic_handling__WEBPACK_IMPORTED_MODULE_0__.createToDo)(newToDoTitle.value, newToDoDescription.value, newToDoDueDate.value, newToDoPriority.value, newToDoNotes.value))
        }
      }
      // Show new to-dos on screen
      showProjects();
      clickProjectExpand();
      showToDos();
    })
  }
  // Run all funcitons
  showProjects();
  showToDos();
  submitProjectForm();
  submitToDoForm();
  addProjectOptions();
}




/***/ }),

/***/ "./src/modules/logic-handling.js":
/*!***************************************!*\
  !*** ./src/modules/logic-handling.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModifyProjects: () => (/* binding */ ModifyProjects),
/* harmony export */   createDiv: () => (/* binding */ createDiv),
/* harmony export */   createOption: () => (/* binding */ createOption),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createToDo: () => (/* binding */ createToDo),
/* harmony export */   createUl: () => (/* binding */ createUl)
/* harmony export */ });
// Projects container
function createProject() {
  const projects = {};

  // Check if projects object is empty
  if (Object.keys(projects).length === 0) {
    Object.assign(projects, { default: [{ title: "hi", description: "describe", dueDate: "idk", priority: "high", notes: "nope" }, { title: "yo" }] })
    Object.assign(projects, { test: [{ title: "hey" }, { title: "bro" }] })
  }
  return { projects }
}

// Add/Edit/Delete projects
function ModifyProjects() {
  const projects = createProject().projects;

  // Create new projects
  const newProject = (projectName) => {
    projects[projectName] = [];
    return projects;
  }

  // Edit projects
  const editProject = () => {
  }

  // Delete projects
  function deleteProject() {

  }

  return { projects, newProject, editProject, deleteProject }
}

// Create toDo factory function
function createToDo(title, description, dueDate, priority, notes) {
  return { title: title, description: description, dueDate: dueDate, priority: priority, notes: notes };
}

// Add toDos
function addToDo() {

}

// Edit toDos
function editToDo() {

}

// Delete toDos
function deleteToDo() {

}

// Add DOM div element builders
function createDiv(pText, liText) {
  const div = document.createElement("div");
  div.classList.add("project-item");
  div.appendChild(createH3(pText))
  div.appendChild(btnProject());
  return div;
}

// Add DOM h3 element builder 
function createH3(text) {
  const h3 = document.createElement("h3");
  h3.textContent = text;
  h3.classList.add("project-text");
  return h3;
}

// Add DOM p element builder
function createP(text) {
  const p = document.createElement("p");
  p.textContent = text;
  p.classList.add("project-text");
  return p;
}

// Add DOM buttom element builder
function createBtn() {
  const btn = document.createElement("button");
  return btn;
}

function btnProject() {
  const btn = createBtn();
  btn.textContent = "+";
  btn.setAttribute("type", "button");
  btn.classList.add("expand-project-btn")
  return btn;
}

function btnToDo() {
  const btn = createBtn();
  btn.textContent = "+";
  btn.setAttribute("type", "button");
  btn.classList.add("expand-do-do-btn")
  return btn;
}

// Add DOM ul element bulider
function createUl(text) {
  const ul = document.createElement("ul");
  ul.classList.add("project-to-do-list", "hide");
  ul.appendChild(createLi(text))
  return ul;
}

// Add DOM li element builder
function createLi(text) {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("project-to-do");
  li.appendChild(btnToDo());
  return li
}

// Add DOM option element builder
function createOption(text) {
  const option = document.createElement("option");
  option.setAttribute("value", text);
  option.textContent = text;
  option.classList.add("project-option");
  return option;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom_handling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom-handling */ "./src/modules/dom-handling.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





function run() {
  (0,_modules_dom_handling__WEBPACK_IMPORTED_MODULE_0__.clickAddProjectBtn)();
  (0,_modules_dom_handling__WEBPACK_IMPORTED_MODULE_0__.clickAddToDoBtn)();
  (0,_modules_dom_handling__WEBPACK_IMPORTED_MODULE_0__.getLogic)();
  (0,_modules_dom_handling__WEBPACK_IMPORTED_MODULE_0__.clickProjectExpand)();
}

run();
















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FhOztBQUU4RjtBQUN0Rjs7QUFFckI7QUFDQSxFQUFFLHlFQUFrQjtBQUNwQixFQUFFLHNFQUFlO0FBQ2pCLEVBQUUsK0RBQVE7QUFDVixFQUFFLHlFQUFrQjtBQUNwQjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbS1oYW5kbGluZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9naWMtaGFuZGxpbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xubWFyZ2luOiAwO1xucGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idG4tZm9ybS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCBhdXRvXG59XG5cbiNhZGQtcHJvamVjdC1idG4sICNhZGQtdG8tZG8tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCA0MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNhZGQtcHJvamVjdC1mb3JtLCAjYWRkLXRvLWRvLWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmZvcm0tc3R5bGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0taW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jcHJvamVjdHMtc2VjdGlvbiB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jcHJvamVjdHMtc2VjdGlvbiA+IGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuI3Byb2plY3RzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5wcm9qZWN0LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG59XG5cbi5wcm9qZWN0LXRleHQge1xuICB3aWR0aDogNzVweDtcbn1cblxuLmV4cGFuZC1wcm9qZWN0LWJ0biB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucHJvamVjdC10by1kby1saXN0IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4ucHJvamVjdC10by1kbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uaW5uZXItbGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2plY3QtdG8tZG8gPiBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0Esc0JBQXNCO0FBQ3RCLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5tYXJnaW46IDA7XFxucGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnRuLWZvcm0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG9cXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0biwgI2FkZC10by1kby1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCA0MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybSwgI2FkZC10by1kby1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZm9ybS1zdHlsaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1sYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jcHJvamVjdHMtc2VjdGlvbiB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Byb2plY3RzLXNlY3Rpb24gPiBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbi5wcm9qZWN0LXRleHQge1xcbiAgd2lkdGg6IDc1cHg7XFxufVxcblxcbi5leHBhbmQtcHJvamVjdC1idG4ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnByb2plY3QtdG8tZG8tbGlzdCB7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5wcm9qZWN0LXRvLWRvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4uaW5uZXItbGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0LXRvLWRvID4gYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0IGZ1bmN0aW9uc1xuaW1wb3J0IHsgY3JlYXRlVG9EbywgTW9kaWZ5UHJvamVjdHMsIGNyZWF0ZURpdiwgY3JlYXRlVWwsIGNyZWF0ZU9wdGlvbiB9IGZyb20gXCIuL2xvZ2ljLWhhbmRsaW5nXCI7XG5cbi8vIERlZmluZSBhbGwgRE9NIG9iamVjdHNcbmZ1bmN0aW9uIERlZmluZURPTUl0ZW1zKCkge1xuICAvLyBCdG5zIHRvIG9wZW4gZm9ybSBtb2RhbHNcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuICBjb25zdCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG8tZG8tYnRuXCIpO1xuICAvLyBGb3JtIG1vZGFsIG9iamVjdHNcbiAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWZvcm1cIik7XG4gIGNvbnN0IGFkZFRvRG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG8tZG8tZm9ybVwiKTtcbiAgLy8gQnRucyB0byBzdWJtaXQgZm9ybSBtb2RhbHNcbiAgY29uc3QgYWRkUHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3Qtc3VibWl0LWJ0blwiKTtcbiAgY29uc3QgYWRkVG9Eb1N1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvLWRvLXN1Ym1pdC1idG5cIik7XG4gIC8vIFByb2plY3QgaW5wdXRzXG4gIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaW5wdXRcIik7XG4gIC8vUHJvamVjdHMgY29udGFpbmVyXG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gIC8vIFByb2plY3RzIGV4cGFuZCBidG5cbiAgbGV0IGV4cGFuZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmV4cGFuZC1wcm9qZWN0LWJ0blwiKTtcbiAgLy8gVG8tZG8gaW5wdXRzXG4gIGNvbnN0IHRvRG9Qcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0by1kby1wcm9qZWN0LXNlbGVjdFwiKTtcbiAgY29uc3QgbmV3VG9Eb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG8tZG8tdGl0bGVcIik7XG4gIGNvbnN0IG5ld1RvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvLWRvLWRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBuZXdUb0RvRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvLWRvLWR1ZS1kYXRlXCIpO1xuICBjb25zdCBuZXdUb0RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10by1kby1wcmlvcml0eVwiKTtcbiAgY29uc3QgbmV3VG9Eb05vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG8tZG8tbm90ZXNcIik7XG4gIC8vIFJldHVybiBhbGxcbiAgcmV0dXJuIHsgYWRkUHJvamVjdEZvcm0sIGFkZFRvRG9Gb3JtLCBhZGRQcm9qZWN0QnRuLCBhZGRUb0RvQnRuLCBhZGRQcm9qZWN0U3VibWl0QnRuLCBhZGRUb0RvU3VibWl0QnRuLCBuZXdQcm9qZWN0SW5wdXQsIHByb2plY3RzQ29udGFpbmVyLCBleHBhbmRQcm9qZWN0QnRuLCB0b0RvUHJvamVjdFNlbGVjdCwgbmV3VG9Eb1RpdGxlLCBuZXdUb0RvRGVzY3JpcHRpb24sIG5ld1RvRG9EdWVEYXRlLCBuZXdUb0RvUHJpb3JpdHksIG5ld1RvRG9Ob3RlcyB9XG59XG5cblxuLy8gQWRkIGNsaWNrIGV2ZW50IHRvIGFkZC1wcm9qZWN0LWJ0blxuZnVuY3Rpb24gY2xpY2tBZGRQcm9qZWN0QnRuKCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gRGVmaW5lRE9NSXRlbXMoKS5hZGRQcm9qZWN0QnRuO1xuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAvLyBTaG93IHByb2plY3RzIGZvcm0gbW9kYWxcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IERlZmluZURPTUl0ZW1zKCkuYWRkUHJvamVjdEZvcm07XG4gICAgYWRkUHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgLy8gSGlkZSBUby1EbyBmb3JtIG1vZGFsXG4gICAgY29uc3QgYWRkVG9Eb0Zvcm0gPSBEZWZpbmVET01JdGVtcygpLmFkZFRvRG9Gb3JtO1xuICAgIGFkZFRvRG9Gb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIC8vIFJlbW92ZSBwcm9qZWN0IGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gRGVmaW5lRE9NSXRlbXMoKS5uZXdQcm9qZWN0SW5wdXQ7XG4gICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbiAgfSlcbn1cblxuLy8gQWRkIGNsaWNrIGV2ZW50IHRvIGFkZC10by1kby1idG5cbmZ1bmN0aW9uIGNsaWNrQWRkVG9Eb0J0bigpIHtcbiAgY29uc3QgYWRkVG9Eb0J0biA9IERlZmluZURPTUl0ZW1zKCkuYWRkVG9Eb0J0bjtcbiAgYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgLy8gU2hvdyBUby1EbyBmb3JtIG1vZGFsXG4gICAgY29uc3QgYWRkVG9Eb0Zvcm0gPSBEZWZpbmVET01JdGVtcygpLmFkZFRvRG9Gb3JtO1xuICAgIGFkZFRvRG9Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIC8vIEhpZGUgcHJvamVjdHMgZm9ybSBtb2RhbFxuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gRGVmaW5lRE9NSXRlbXMoKS5hZGRQcm9qZWN0Rm9ybTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAvLyBEZWZpbmUgdG8tZG8gdmFsdWVzIGFuZCBzZXQgdG8gZW1wdHkgdmFsdWVzXG4gICAgY29uc3QgdG9Eb1Byb2plY3RTZWxlY3QgPSBEZWZpbmVET01JdGVtcygpLnRvRG9Qcm9qZWN0U2VsZWN0O1xuICAgIGNvbnN0IG5ld1RvRG9UaXRsZSA9IERlZmluZURPTUl0ZW1zKCkubmV3VG9Eb1RpdGxlO1xuICAgIGNvbnN0IG5ld1RvRG9EZXNjcmlwdGlvbiA9IERlZmluZURPTUl0ZW1zKCkubmV3VG9Eb0Rlc2NyaXB0aW9uO1xuICAgIGNvbnN0IG5ld1RvRG9EdWVEYXRlID0gRGVmaW5lRE9NSXRlbXMoKS5uZXdUb0RvRHVlRGF0ZTtcbiAgICBjb25zdCBuZXdUb0RvUHJpb3JpdHkgPSBEZWZpbmVET01JdGVtcygpLm5ld1RvRG9Qcmlvcml0eTtcbiAgICBjb25zdCBuZXdUb0RvTm90ZXMgPSBEZWZpbmVET01JdGVtcygpLm5ld1RvRG9Ob3RlcztcbiAgICB0b0RvUHJvamVjdFNlbGVjdC52YWx1ZSA9IFwiXCI7XG4gICAgbmV3VG9Eb1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgICBuZXdUb0RvRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIG5ld1RvRG9EdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICBuZXdUb0RvUHJpb3JpdHkudmFsdWUgPSBcIlwiO1xuICAgIG5ld1RvRG9Ob3Rlcy52YWx1ZSA9IFwiXCI7XG4gIH0pXG59XG5cbi8vIEFkZCBjbGljayBldmVudCB0byBleHBhbmQgYnRuIG9uIHByb2plY3RzXG5mdW5jdGlvbiBjbGlja1Byb2plY3RFeHBhbmQoKSB7XG4gIGxldCBleHBhbmRQcm9qZWN0QnRuID0gRGVmaW5lRE9NSXRlbXMoKS5leHBhbmRQcm9qZWN0QnRuO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cGFuZFByb2plY3RCdG4ubGVuZ3RoOyBpKyspIHtcbiAgICBleHBhbmRQcm9qZWN0QnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgbGV0IHRhcmdldFNpYmxpbmcgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIHNpYmxpbmdzXG4gICAgICB3aGlsZSAodGFyZ2V0U2libGluZykge1xuICAgICAgICB0YXJnZXRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB0YXJnZXRTaWJsaW5nID0gdGFyZ2V0U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vLyBBZGQgY2xpY2sgZXZlbnQgdG8gZXhwYW5kIGJ0biBvbiB0by1kb3NcbmZ1bmN0aW9uIGNsaWNrVG9Eb0V4cGFuZCgpIHtcbiAgbGV0IGV4cGFuZFRvRG9CdG4gPSBEZWZpbmVET01JdGVtcygpLmV4cGFuZFRvRG9CdG47XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwYW5kVG9Eb0J0bi5sZW5ndGg7IGkrKykge1xuICAgIGV4cGFuZFRvRG9CdG5baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgICB9KVxuICB9XG59XG5cbi8vIEFkZCBuZXcgcHJvamVjdFxuZnVuY3Rpb24gbmV3UHJvamVjdFZhbHVlKCkge1xuICBjb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBEZWZpbmVET01JdGVtcygpLm5ld1Byb2plY3RJbnB1dDtcbiAgcmV0dXJuIG5ld1Byb2plY3RJbnB1dC52YWx1ZTtcbn1cblxuLy8gR2V0IGxvZ2ljXG5mdW5jdGlvbiBnZXRMb2dpYygpIHtcbiAgLy8gR2V0IG1vZGlmeVByb2plY3RzIFxuICBjb25zdCBtb2RpZnlQcm9qZWN0cyA9IE1vZGlmeVByb2plY3RzKCk7XG5cbiAgLy8gU2hvdyBwcm9qZWN0cyBvbiBwYWdlXG4gIGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAvLyBHZXQgRE9NIGVsZW1lbnRcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IERlZmluZURPTUl0ZW1zKCkucHJvamVjdHNDb250YWluZXI7XG4gICAgLy8gUmVtb3ZlIGNoaWxkcmVuIGluIHByZXBhcmF0aW9uIGZvciBzaG93aW5nIG5ldyBjaGlsZHJlblxuICAgIHdoaWxlIChwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gU2hvdyBwcm9qZWN0cyBvbiBwYWdlXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobW9kaWZ5UHJvamVjdHMucHJvamVjdHMpKSB7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQoY3JlYXRlRGl2KGtleSkpO1xuICAgICAgdmFsdWUubWFwKCh2KSA9PiB7IHByb2plY3RzQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kKGNyZWF0ZVVsKHYudGl0bGUpKSB9KVxuICAgIH1cbiAgICAvLyBUZXN0IGxvZyB0byBkZWxldGUgbGF0ZXJcbiAgICBjb25zb2xlLmxvZyhtb2RpZnlQcm9qZWN0cy5wcm9qZWN0cylcbiAgICByZXR1cm4gbW9kaWZ5UHJvamVjdHMucHJvamVjdHM7XG4gIH1cblxuICBjb25zdCBzaG93VG9Eb3MgPSAoKSA9PiB7XG4gICAgLy8gR2V0IERPTSBlbGVtZW50XG4gICAgbGV0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1pdGVtXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHByb2plY3RJdGVtc1tpXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaXRlbS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbltqXS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LXRvLWRvLWxpc3RcIikpIHtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbltqXS5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGl0ZW0uY2hpbGRyZW5bal0uY2hpbGRyZW4ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW5bal0uY2hpbGRyZW5ba10uZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobW9kaWZ5UHJvamVjdHMucHJvamVjdHMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gaXRlbS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCB2YWx1ZS5sZW5ndGg7IG0rKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVbbV0udGl0bGUgPT09IGl0ZW0uY2hpbGRyZW5bal0uY2hpbGRyZW5ba10uZmlyc3RDaGlsZC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW5bal0uY2hpbGRyZW5ba10uZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWwgPSBgPGxpIGNsYXNzPVwiaW5uZXItbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImlubmVyLWxpc3QtaXRlbS1sYWJlbFwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5uZXItbGlzdC1pdGVtLXBcIj4ke3ZhbHVlW21dLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJpbm5lci1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5uZXItbGlzdC1pdGVtLWxhYmVsXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbm5lci1saXN0LWl0ZW0tcFwiPiR7dmFsdWVbbV0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImlubmVyLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbm5lci1saXN0LWl0ZW0tbGFiZWxcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImlubmVyLWxpc3QtaXRlbS1wXCI+JHt2YWx1ZVttXS5kdWVEYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJpbm5lci1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiaW5uZXItbGlzdC1pdGVtLWxhYmVsXCI+UHJpb3JpdHk6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbm5lci1saXN0LWl0ZW0tcFwiPiR7dmFsdWVbbV0ucHJpb3JpdHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImlubmVyLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJpbm5lci1saXN0LWl0ZW0tbGFiZWxcIj5Ob3Rlczo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImlubmVyLWxpc3QtaXRlbS1wXCI+JHt2YWx1ZVttXS5ub3Rlc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmA7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGlsZHJlbltqXS5jaGlsZHJlbltrXS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3VibWl0IG5ldyBwcm9qZWN0IGZvcm1cbiAgY29uc3Qgc3VibWl0UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdFN1Ym1pdEJ0biA9IERlZmluZURPTUl0ZW1zKCkuYWRkUHJvamVjdFN1Ym1pdEJ0bjtcbiAgICBhZGRQcm9qZWN0U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gSGlkZSBmb3JtXG4gICAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IERlZmluZURPTUl0ZW1zKCkuYWRkUHJvamVjdEZvcm07XG4gICAgICBhZGRQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIC8vIFJ1biBldmVyeXRoaW5nXG4gICAgICBtb2RpZnlQcm9qZWN0cy5uZXdQcm9qZWN0KG5ld1Byb2plY3RWYWx1ZSgpKTtcbiAgICAgIHNob3dQcm9qZWN0cygpO1xuICAgICAgY2xpY2tQcm9qZWN0RXhwYW5kKCk7XG4gICAgICBhZGRQcm9qZWN0T3B0aW9ucygpO1xuICAgICAgc2hvd1RvRG9zKCk7XG4gICAgfSlcbiAgfVxuXG4gIC8vIEFkZCBwcm9qZWN0IG9wdGlvbnNcbiAgY29uc3QgYWRkUHJvamVjdE9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9Eb1Byb2plY3RTZWxlY3QgPSBEZWZpbmVET01JdGVtcygpLnRvRG9Qcm9qZWN0U2VsZWN0O1xuICAgIC8vIFJlbW92ZSBleGlzdGluZyBvcHRpb25zXG4gICAgd2hpbGUgKHRvRG9Qcm9qZWN0U2VsZWN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRvRG9Qcm9qZWN0U2VsZWN0LnJlbW92ZUNoaWxkKHRvRG9Qcm9qZWN0U2VsZWN0LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBBZGQgb3B0aW9uc1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG1vZGlmeVByb2plY3RzLnByb2plY3RzKSkge1xuICAgICAgdG9Eb1Byb2plY3RTZWxlY3QuYXBwZW5kKGNyZWF0ZU9wdGlvbihrZXkpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN1Ym1pdCBuZXcgdG8tZG8gZm9ybSBcbiAgY29uc3Qgc3VibWl0VG9Eb0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVG9Eb1N1Ym1pdEJ0biA9IERlZmluZURPTUl0ZW1zKCkuYWRkVG9Eb1N1Ym1pdEJ0bjtcbiAgICBhZGRUb0RvU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gSGlkZSBmb3JtXG4gICAgICBjb25zdCBhZGRUb0RvRm9ybSA9IERlZmluZURPTUl0ZW1zKCkuYWRkVG9Eb0Zvcm07XG4gICAgICBhZGRUb0RvRm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIC8vIERlZmluZSB0by1kbyB2YWx1ZXNcbiAgICAgIGNvbnN0IHRvRG9Qcm9qZWN0U2VsZWN0ID0gRGVmaW5lRE9NSXRlbXMoKS50b0RvUHJvamVjdFNlbGVjdDtcbiAgICAgIGNvbnN0IG5ld1RvRG9UaXRsZSA9IERlZmluZURPTUl0ZW1zKCkubmV3VG9Eb1RpdGxlO1xuICAgICAgY29uc3QgbmV3VG9Eb0Rlc2NyaXB0aW9uID0gRGVmaW5lRE9NSXRlbXMoKS5uZXdUb0RvRGVzY3JpcHRpb247XG4gICAgICBjb25zdCBuZXdUb0RvRHVlRGF0ZSA9IERlZmluZURPTUl0ZW1zKCkubmV3VG9Eb0R1ZURhdGU7XG4gICAgICBjb25zdCBuZXdUb0RvUHJpb3JpdHkgPSBEZWZpbmVET01JdGVtcygpLm5ld1RvRG9Qcmlvcml0eTtcbiAgICAgIGNvbnN0IG5ld1RvRG9Ob3RlcyA9IERlZmluZURPTUl0ZW1zKCkubmV3VG9Eb05vdGVzO1xuICAgICAgLy8gQWRkIHRvLWRvc1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobW9kaWZ5UHJvamVjdHMucHJvamVjdHMpKSB7XG4gICAgICAgIGlmIChrZXkgPT09IHRvRG9Qcm9qZWN0U2VsZWN0LnZhbHVlKSB7XG4gICAgICAgICAgdmFsdWUucHVzaChjcmVhdGVUb0RvKG5ld1RvRG9UaXRsZS52YWx1ZSwgbmV3VG9Eb0Rlc2NyaXB0aW9uLnZhbHVlLCBuZXdUb0RvRHVlRGF0ZS52YWx1ZSwgbmV3VG9Eb1ByaW9yaXR5LnZhbHVlLCBuZXdUb0RvTm90ZXMudmFsdWUpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTaG93IG5ldyB0by1kb3Mgb24gc2NyZWVuXG4gICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgIGNsaWNrUHJvamVjdEV4cGFuZCgpO1xuICAgICAgc2hvd1RvRG9zKCk7XG4gICAgfSlcbiAgfVxuICAvLyBSdW4gYWxsIGZ1bmNpdG9uc1xuICBzaG93UHJvamVjdHMoKTtcbiAgc2hvd1RvRG9zKCk7XG4gIHN1Ym1pdFByb2plY3RGb3JtKCk7XG4gIHN1Ym1pdFRvRG9Gb3JtKCk7XG4gIGFkZFByb2plY3RPcHRpb25zKCk7XG59XG5cbmV4cG9ydCB7IGNsaWNrQWRkUHJvamVjdEJ0biwgY2xpY2tBZGRUb0RvQnRuLCBnZXRMb2dpYywgY2xpY2tQcm9qZWN0RXhwYW5kIH1cbiIsIi8vIFByb2plY3RzIGNvbnRhaW5lclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSB7fTtcblxuICAvLyBDaGVjayBpZiBwcm9qZWN0cyBvYmplY3QgaXMgZW1wdHlcbiAgaWYgKE9iamVjdC5rZXlzKHByb2plY3RzKS5sZW5ndGggPT09IDApIHtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3RzLCB7IGRlZmF1bHQ6IFt7IHRpdGxlOiBcImhpXCIsIGRlc2NyaXB0aW9uOiBcImRlc2NyaWJlXCIsIGR1ZURhdGU6IFwiaWRrXCIsIHByaW9yaXR5OiBcImhpZ2hcIiwgbm90ZXM6IFwibm9wZVwiIH0sIHsgdGl0bGU6IFwieW9cIiB9XSB9KVxuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdHMsIHsgdGVzdDogW3sgdGl0bGU6IFwiaGV5XCIgfSwgeyB0aXRsZTogXCJicm9cIiB9XSB9KVxuICB9XG4gIHJldHVybiB7IHByb2plY3RzIH1cbn1cblxuLy8gQWRkL0VkaXQvRGVsZXRlIHByb2plY3RzXG5mdW5jdGlvbiBNb2RpZnlQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBjcmVhdGVQcm9qZWN0KCkucHJvamVjdHM7XG5cbiAgLy8gQ3JlYXRlIG5ldyBwcm9qZWN0c1xuICBjb25zdCBuZXdQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgcHJvamVjdHNbcHJvamVjdE5hbWVdID0gW107XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9XG5cbiAgLy8gRWRpdCBwcm9qZWN0c1xuICBjb25zdCBlZGl0UHJvamVjdCA9ICgpID0+IHtcbiAgfVxuXG4gIC8vIERlbGV0ZSBwcm9qZWN0c1xuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuXG4gIH1cblxuICByZXR1cm4geyBwcm9qZWN0cywgbmV3UHJvamVjdCwgZWRpdFByb2plY3QsIGRlbGV0ZVByb2plY3QgfVxufVxuXG4vLyBDcmVhdGUgdG9EbyBmYWN0b3J5IGZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gIHJldHVybiB7IHRpdGxlOiB0aXRsZSwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBkdWVEYXRlOiBkdWVEYXRlLCBwcmlvcml0eTogcHJpb3JpdHksIG5vdGVzOiBub3RlcyB9O1xufVxuXG4vLyBBZGQgdG9Eb3NcbmZ1bmN0aW9uIGFkZFRvRG8oKSB7XG5cbn1cblxuLy8gRWRpdCB0b0Rvc1xuZnVuY3Rpb24gZWRpdFRvRG8oKSB7XG5cbn1cblxuLy8gRGVsZXRlIHRvRG9zXG5mdW5jdGlvbiBkZWxldGVUb0RvKCkge1xuXG59XG5cbi8vIEFkZCBET00gZGl2IGVsZW1lbnQgYnVpbGRlcnNcbmZ1bmN0aW9uIGNyZWF0ZURpdihwVGV4dCwgbGlUZXh0KSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSDMocFRleHQpKVxuICBkaXYuYXBwZW5kQ2hpbGQoYnRuUHJvamVjdCgpKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuLy8gQWRkIERPTSBoMyBlbGVtZW50IGJ1aWxkZXIgXG5mdW5jdGlvbiBjcmVhdGVIMyh0ZXh0KSB7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMy50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGgzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHRcIik7XG4gIHJldHVybiBoMztcbn1cblxuLy8gQWRkIERPTSBwIGVsZW1lbnQgYnVpbGRlclxuZnVuY3Rpb24gY3JlYXRlUCh0ZXh0KSB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHAuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGV4dFwiKTtcbiAgcmV0dXJuIHA7XG59XG5cbi8vIEFkZCBET00gYnV0dG9tIGVsZW1lbnQgYnVpbGRlclxuZnVuY3Rpb24gY3JlYXRlQnRuKCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByZXR1cm4gYnRuO1xufVxuXG5mdW5jdGlvbiBidG5Qcm9qZWN0KCkge1xuICBjb25zdCBidG4gPSBjcmVhdGVCdG4oKTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidG4uY2xhc3NMaXN0LmFkZChcImV4cGFuZC1wcm9qZWN0LWJ0blwiKVxuICByZXR1cm4gYnRuO1xufVxuXG5mdW5jdGlvbiBidG5Ub0RvKCkge1xuICBjb25zdCBidG4gPSBjcmVhdGVCdG4oKTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidG4uY2xhc3NMaXN0LmFkZChcImV4cGFuZC1kby1kby1idG5cIilcbiAgcmV0dXJuIGJ0bjtcbn1cblxuLy8gQWRkIERPTSB1bCBlbGVtZW50IGJ1bGlkZXJcbmZ1bmN0aW9uIGNyZWF0ZVVsKHRleHQpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRvLWRvLWxpc3RcIiwgXCJoaWRlXCIpO1xuICB1bC5hcHBlbmRDaGlsZChjcmVhdGVMaSh0ZXh0KSlcbiAgcmV0dXJuIHVsO1xufVxuXG4vLyBBZGQgRE9NIGxpIGVsZW1lbnQgYnVpbGRlclxuZnVuY3Rpb24gY3JlYXRlTGkodGV4dCkge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsaS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10by1kb1wiKTtcbiAgbGkuYXBwZW5kQ2hpbGQoYnRuVG9EbygpKTtcbiAgcmV0dXJuIGxpXG59XG5cbi8vIEFkZCBET00gb3B0aW9uIGVsZW1lbnQgYnVpbGRlclxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKHRleHQpIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRleHQpO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBvcHRpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3Qtb3B0aW9uXCIpO1xuICByZXR1cm4gb3B0aW9uO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb0RvLCBjcmVhdGVQcm9qZWN0LCBNb2RpZnlQcm9qZWN0cywgY3JlYXRlRGl2LCBjcmVhdGVVbCwgY3JlYXRlT3B0aW9uIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjbGlja0FkZFByb2plY3RCdG4sIGNsaWNrQWRkVG9Eb0J0biwgY2xpY2tQcm9qZWN0RXhwYW5kLCBnZXRMb2dpYyB9IGZyb20gXCIuL21vZHVsZXMvZG9tLWhhbmRsaW5nXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBydW4oKSB7XG4gIGNsaWNrQWRkUHJvamVjdEJ0bigpO1xuICBjbGlja0FkZFRvRG9CdG4oKTtcbiAgZ2V0TG9naWMoKTtcbiAgY2xpY2tQcm9qZWN0RXhwYW5kKCk7XG59XG5cbnJ1bigpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9