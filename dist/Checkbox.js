"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, {
    check: true
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    check: true
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    type: "checkbox",
    id: id,
    name: name,
    disabled: disabled,
    onChange: toggle,
    checked: checked,
    invalid: feedback ? feedback.invalid : null
  }), label), feedback.invalid && /*#__PURE__*/_react["default"].createElement(_reactstrap.FormFeedback, null, feedback.data[0]), help && /*#__PURE__*/_react["default"].createElement(_reactstrap.FormText, null, help));
};

exports["default"] = _default;