"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFieldBuilder = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var name = _ref.name,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? name : _ref$id,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
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

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    style: labelStyle,
    "for": name
  }, label), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    type: type,
    id: id,
    name: name,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    value: value,
    invalid: feedback ? feedback.invalid : null
  }), feedback.invalid && /*#__PURE__*/_react["default"].createElement(_reactstrap.FormFeedback, null, feedback.data[0]), help && /*#__PURE__*/_react["default"].createElement(_reactstrap.FormText, null, help));
};

exports["default"] = _default;

var TextFieldBuilder = function TextFieldBuilder(_ref2) {
  var id = _ref2.id,
      name = _ref2.name,
      label = _ref2.label,
      placeholder = _ref2.placeholder,
      onChange = _ref2.onChange;
  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Container, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    "for": "id"
  }, "ID"), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    name: "id",
    onChange: onChange,
    value: id
  })), /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    "for": "name"
  }, "Name"), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    name: "name",
    onChange: onChange,
    value: name
  })), /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    "for": "label"
  }, "Label"), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    name: "label",
    onChange: onChange,
    value: label
  })), /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    "for": "placeholder"
  }, "Placeholder"), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    name: "placeholder",
    onChange: onChange,
    value: placeholder
  })));
};

exports.TextFieldBuilder = TextFieldBuilder;