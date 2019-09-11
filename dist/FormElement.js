"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _resolve = _interopRequireDefault(require("./resolve"));

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