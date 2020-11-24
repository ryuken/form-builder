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

var MyForm = function MyForm(props) {
  var _props$values = props.values,
      values = _props$values === void 0 ? {} : _props$values,
      errors = props.errors,
      setFieldValue = props.setFieldValue,
      handleSubmit = props.handleSubmit,
      isSubmitting = props.isSubmitting;
  var buttonProps = {
    id: "save",
    type: "submit",
    onClick: handleSubmit,
    disabled: isSubmitting
  };

  if (props.button) {
    if (props.button.className) buttonProps.className = props.button.className;
    if (props.button.style) buttonProps.style = props.button.style;
    if (props.button.color) buttonProps.color = props.button.color;else buttonProps.color = "primary";
  }

  return /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit
  }, props.elements.map(function (el) {
    return /*#__PURE__*/_react["default"].createElement(_FormElement["default"], {
      key: el.name,
      id: el.name,
      attr: el.name,
      data: values,
      value: values[el.name],
      setFieldValue: setFieldValue,
      el: el,
      errors: errors,
      labelStyle: props.labelStyle
    });
  }), /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, buttonProps, props.button && props.button.label || "Save"));
};

var form = (0, _formik.withFormik)({
  mapPropsToValues: function mapPropsToValues(_ref) {
    var _ref$initialValues = _ref.initialValues,
        initialValues = _ref$initialValues === void 0 ? {} : _ref$initialValues;
    return initialValues;
  },
  // Custom sync validation
  validate: function validate(values, _ref2) {
    var elements = _ref2.elements;
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
  handleSubmit: function handleSubmit(values, formikBag) {
    return formikBag.props.onSubmit(values, formikBag);
  }
})(MyForm);
form.propTypes = {
  elements: _propTypes["default"].array.isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  initialValues: _propTypes["default"].object
};
var _default = form;
exports["default"] = _default;