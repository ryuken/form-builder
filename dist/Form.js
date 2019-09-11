"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formik = require("formik");

var _validatorjs = _interopRequireDefault(require("validatorjs"));

var _reactstrap = require("reactstrap");

var _FormElement = _interopRequireDefault(require("./FormElement"));

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