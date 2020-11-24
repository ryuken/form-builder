"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _resolve = _interopRequireDefault(require("./resolve"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _default = function _default(props) {
  var _props$resolveAs = props.resolveAs,
      resolveAs = _props$resolveAs === void 0 ? "form" : _props$resolveAs,
      parent = props.parent,
      attr = props.attr,
      data = props.data,
      value = props.value,
      el = props.el,
      setFieldValue = props.setFieldValue,
      errors = props.errors;

  var onChange = function onChange(e) {
    setFieldValue(attr, e.target.value);
  };

  var FormElement = (0, _resolve["default"])(resolveAs, el.type);

  if ("undefined" !== typeof el.condition) {
    var result = false;
    var val = data[el.condition.variable];

    if (el.condition.operator === "equal") {
      if (val === el.condition.data) result = true;
    } else if (el.condition.operator === "not") {
      if (val !== el.condition.data) result = true;
    } else if (el.condition.operator === "in") {
      if (_toConsumableArray(JSON.parse(el.condition.data)).includes(val)) result = true;
    }

    if (false === result) return null;
  }

  return /*#__PURE__*/_react["default"].createElement(FormElement, _extends({
    key: el.name,
    parent: parent,
    onChange: onChange,
    setFieldValue: setFieldValue
  }, el, {
    id: attr,
    name: attr,
    labelStyle: props.labelStyle,
    value: value,
    errors: errors
  }));
};

exports["default"] = _default;