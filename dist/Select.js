"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactstrap = require("reactstrap");

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