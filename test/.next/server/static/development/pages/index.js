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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dist/Builder.js":
/*!**************************!*\
  !*** ../dist/Builder.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactstrap = __webpack_require__(/*! reactstrap */ "reactstrap");

var _resolve = _interopRequireDefault(__webpack_require__(/*! ./resolve */ "../dist/resolve.js"));

var _Form = _interopRequireDefault(__webpack_require__(/*! ./Form */ "../dist/Form.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Build = function Build(_ref) {
  var elements = _ref.elements,
      setElements = _ref.setElements,
      current = _ref.current;
  var currentElement = elements[current];
  var BuildElement = (0, _resolve["default"])("build", currentElement.type);

  var onChange = function onChange(e) {
    var newElements = _toConsumableArray(elements);

    newElements[current][e.target.name] = e.target.value;
    setElements(newElements);
  };

  var remove = function remove() {
    var newElements = _toConsumableArray(elements);

    newElements.splice(current, 1);
    setElements(newElements);
  };

  return _react["default"].createElement("div", null, _react["default"].createElement(BuildElement, _extends({}, currentElement, {
    onChange: onChange
  })), _react["default"].createElement(_reactstrap.Button, {
    onClick: remove
  }, "Remove"));
};

var _default = function _default() {
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      elements = _useState4[0],
      setElements = _useState4[1];

  var add = function add(type) {
    if ("textfield" === type) {
      var newElements = _toConsumableArray(elements);

      newElements.push({
        type: type,
        value: "",
        id: "",
        name: "",
        label: "",
        placeholder: ""
      });
      setElements(newElements);
      setCurrent(newElements.length - 1);
    }
  };

  var save = function save(data) {
    console.log(data);
  };

  return _react["default"].createElement(_reactstrap.Container, null, _react["default"].createElement(_reactstrap.Row, null, _react["default"].createElement(_reactstrap.Col, null, _react["default"].createElement(_reactstrap.Button, {
    onClick: add.bind(null, "textfield")
  }, "TextField"))), _react["default"].createElement(_reactstrap.Row, null, _react["default"].createElement(_reactstrap.Col, {
    sm: 6
  }, _react["default"].createElement("h1", null, "Items"), elements[current] && _react["default"].createElement(Build, {
    elements: elements,
    setElements: setElements,
    current: current
  })), _react["default"].createElement(_reactstrap.Col, {
    sm: 6
  }, _react["default"].createElement("h1", null, "Preview"), _react["default"].createElement(_Form["default"], {
    elements: elements,
    onSubmit: save
  }))));
};

exports["default"] = _default;

/***/ }),

/***/ "../dist/Checkbox.js":
/*!***************************!*\
  !*** ../dist/Checkbox.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactstrap = __webpack_require__(/*! reactstrap */ "reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var name = _ref.name,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? name : _ref$id,
      label = _ref.label,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? false : _ref$value,
      onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      help = _ref.help,
      errors = _ref.errors;

  var _React$useState = _react["default"].useState(Boolean(value)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var feedback = {
    invalid: false
  };

  if (errors[id]) {
    feedback.invalid = true;
    feedback.data = errors[id];
  }

  var toggle = function toggle(e) {
    setChecked(!checked);
    onChange({
      target: {
        name: e.target.name,
        value: !checked
      }
    });
  };

  return _react["default"].createElement(_reactstrap.FormGroup, {
    check: true
  }, _react["default"].createElement(_reactstrap.Label, {
    check: true
  }, _react["default"].createElement(_reactstrap.Input, {
    type: "checkbox",
    id: id,
    name: name,
    disabled: disabled,
    onChange: toggle,
    checked: checked,
    invalid: feedback ? feedback.invalid : null
  }), label), feedback.invalid && _react["default"].createElement(_reactstrap.FormFeedback, null, feedback.data[0]), help && _react["default"].createElement(_reactstrap.FormText, null, help));
};

exports["default"] = _default;

/***/ }),

/***/ "../dist/Form.js":
/*!***********************!*\
  !*** ../dist/Form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _formik = __webpack_require__(/*! formik */ "formik");

var _validatorjs = _interopRequireDefault(__webpack_require__(/*! validatorjs */ "validatorjs"));

var _reactstrap = __webpack_require__(/*! reactstrap */ "reactstrap");

var _FormElement = _interopRequireDefault(__webpack_require__(/*! ./FormElement */ "../dist/FormElement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var form = function form(_ref) {
  var elements = _ref.elements,
      initialValues = _ref.initialValues,
      onSubmit = _ref.onSubmit;
  return _react["default"].createElement(_formik.Formik, {
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: function validate(values) {
      var rules = elements.reduce(function (acc, el) {
        if (el.rule) acc[el.name] = el.rule;

        if (el.options) {
          el.options.forEach(function (o) {
            if (o.rule) acc[o.ruleName || o.name] = o.rule;
          });
        }

        return acc;
      }, {});
      var validation = new _validatorjs["default"](values, rules);
      validation.passes();
      return validation.errors.all();
    },
    render: function render(_ref2) {
      var values = _ref2.values,
          errors = _ref2.errors,
          isSubmitting = _ref2.isSubmitting,
          handleSubmit = _ref2.handleSubmit,
          setFieldValue = _ref2.setFieldValue;
      return _react["default"].createElement(_formik.Form, {
        onSubmit: handleSubmit
      }, elements.map(function (el) {
        return _react["default"].createElement(_FormElement["default"], {
          key: el.name,
          id: el.name,
          attr: el.name,
          data: values,
          value: values[el.name],
          setFieldValue: setFieldValue,
          el: el,
          errors: errors
        });
      }), _react["default"].createElement(_reactstrap.Button, {
        id: "save",
        type: "submit",
        color: "primary",
        onClick: handleSubmit,
        disabled: isSubmitting
      }, "Save"));
    }
  });
};

form.propTypes = {
  elements: _propTypes["default"].array.isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  initialValues: _propTypes["default"].object
};
var _default = form;
exports["default"] = _default;

/***/ }),

/***/ "../dist/FormElement.js":
/*!******************************!*\
  !*** ../dist/FormElement.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _resolve = _interopRequireDefault(__webpack_require__(/*! ./resolve */ "../dist/resolve.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = function _default(_ref) {
  var parent = _ref.parent,
      id = _ref.id,
      attr = _ref.attr,
      data = _ref.data,
      value = _ref.value,
      el = _ref.el,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var onChange = function onChange(e) {
    setFieldValue(attr, e.target.value);
  };

  var FormElement = (0, _resolve["default"])("form", el.type);

  if ("undefined" !== typeof el.condition) {
    var result = false;
    var val = data[el.condition.variable];

    if (el.condition.operator === "equal") {
      if (val === el.condition.data) result = true;
    } else if (el.condition.operator === "in") {
      if (_toConsumableArray(JSON.parse(el.condition.data)).includes(val)) result = true;
    }

    if (false === result) return null;
  }

  return _react["default"].createElement(FormElement, _extends({
    key: el.name,
    parent: parent,
    id: id,
    onChange: onChange,
    setFieldValue: setFieldValue
  }, el, {
    value: value,
    errors: errors
  }));
};

exports["default"] = _default;

/***/ }),

/***/ "../dist/Select.js":
/*!*************************!*\
  !*** ../dist/Select.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactstrap = __webpack_require__(/*! reactstrap */ "reactstrap");

var _default = function _default(_ref) {
  var name = _ref.name,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? name : _ref$id,
      label = _ref.label,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? "" : _ref$value,
      onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      help = _ref.help,
      errors = _ref.errors;
  var feedback = {
    invalid: false
  };

  if (errors[name]) {
    feedback.invalid = true;
    feedback.data = errors[name];
  }

  return React.createElement(_reactstrap.FormGroup, null, React.createElement(_reactstrap.Label, {
    "for": name
  }, label), React.createElement(_reactstrap.Input, {
    type: "select",
    id: id,
    name: name,
    disabled: disabled,
    value: value,
    onChange: onChange,
    invalid: feedback ? feedback.invalid : null
  }, options.map(function (o) {
    return React.createElement("option", {
      key: o.value,
      value: o.value
    }, o.label);
  })), feedback.invalid && React.createElement(_reactstrap.FormFeedback, null, feedback.data[0]), help && React.createElement(_reactstrap.FormText, null, help));
};

exports["default"] = _default;

/***/ }),

/***/ "../dist/TextField.js":
/*!****************************!*\
  !*** ../dist/TextField.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFieldBuilder = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactstrap = __webpack_require__(/*! reactstrap */ "reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var name = _ref.name,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? name : _ref$id,
      label = _ref.label,
      placeholder = _ref.placeholder,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? "" : _ref$value,
      onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      help = _ref.help,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors;
  var feedback = {
    invalid: false
  };

  if (errors[id]) {
    feedback.invalid = true;
    feedback.data = errors[id];
  }

  return _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": name
  }, label), _react["default"].createElement(_reactstrap.Input, {
    type: type,
    id: id,
    name: name,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    value: value,
    invalid: feedback ? feedback.invalid : null
  }), feedback.invalid && _react["default"].createElement(_reactstrap.FormFeedback, null, feedback.data[0]), help && _react["default"].createElement(_reactstrap.FormText, null, help));
};

exports["default"] = _default;

var TextFieldBuilder = function TextFieldBuilder(_ref2) {
  var id = _ref2.id,
      name = _ref2.name,
      label = _ref2.label,
      _ref2$value = _ref2.value,
      value = _ref2$value === void 0 ? "" : _ref2$value,
      placeholder = _ref2.placeholder,
      onChange = _ref2.onChange;
  return _react["default"].createElement(_reactstrap.Container, null, _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "id"
  }, "ID"), _react["default"].createElement(_reactstrap.Input, {
    name: "id",
    onChange: onChange,
    value: id
  })), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "name"
  }, "Name"), _react["default"].createElement(_reactstrap.Input, {
    name: "name",
    onChange: onChange,
    value: name
  })), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "label"
  }, "Label"), _react["default"].createElement(_reactstrap.Input, {
    name: "label",
    onChange: onChange,
    value: label
  })), _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": "placeholder"
  }, "Placeholder"), _react["default"].createElement(_reactstrap.Input, {
    name: "placeholder",
    onChange: onChange,
    value: placeholder
  })));
};

exports.TextFieldBuilder = TextFieldBuilder;

/***/ }),

/***/ "../dist/resolve.js":
/*!**************************!*\
  !*** ../dist/resolve.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Select = _interopRequireDefault(__webpack_require__(/*! ./Select */ "../dist/Select.js"));

var _TextField = _interopRequireWildcard(__webpack_require__(/*! ./TextField */ "../dist/TextField.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! ./Checkbox */ "../dist/Checkbox.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "form";
  var element = arguments.length > 1 ? arguments[1] : undefined;
  var FormElement = "form" === type ? _TextField["default"] : _TextField.TextFieldBuilder;

  if ("checkbox" === element) {
    FormElement = _Checkbox["default"];
  }

  if ("select" === element) {
    FormElement = _Select["default"];
  }

  return FormElement;
};

exports["default"] = _default;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dist_Builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dist/Builder */ "../dist/Builder.js");
/* harmony import */ var _dist_Builder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dist_Builder__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossOrigin: "anonymous"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dist_Builder__WEBPACK_IMPORTED_MODULE_2___default.a, null));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/projects/form-builder/test/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "validatorjs":
/*!******************************!*\
  !*** external "validatorjs" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validatorjs");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map