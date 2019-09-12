"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectFieldBuilder = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  return _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
    "for": name
  }, label), _react["default"].createElement(_reactstrap.Input, {
    type: "select",
    id: id,
    name: name,
    disabled: disabled,
    value: value,
    onChange: onChange,
    invalid: feedback ? feedback.invalid : null
  }, options.map(function (o) {
    return _react["default"].createElement("option", {
      key: o.id,
      value: o.id,
      disabled: o.disabled
    }, o.text);
  })), feedback.invalid && _react["default"].createElement(_reactstrap.FormFeedback, null, feedback.data[0]), help && _react["default"].createElement(_reactstrap.FormText, null, help));
};

exports["default"] = _default;

var SelectFieldBuilder = function SelectFieldBuilder(_ref2) {
  var id = _ref2.id,
      name = _ref2.name,
      label = _ref2.label,
      _ref2$options = _ref2.options,
      options = _ref2$options === void 0 ? [] : _ref2$options,
      onChange = _ref2.onChange;

  var _useState = (0, _react.useState)({
    id: "",
    text: "",
    disabled: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      option = _useState2[0],
      setOption = _useState2[1];

  var addOption = function addOption() {
    onChange({
      target: {
        name: "options",
        value: [].concat(_toConsumableArray(options), [option])
      }
    }); // reset option

    setOption({
      id: "",
      text: "",
      disabled: false
    });
  };

  var removeOption = function removeOption(i) {
    var newOptions = _toConsumableArray(options);

    newOptions.splice(i, 1);
    onChange({
      target: {
        name: "options",
        value: newOptions
      }
    }); // reset option

    setOption({
      id: "",
      text: "",
      disabled: false
    });
  };

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
    "for": "options"
  }, "Options"), _react["default"].createElement(_reactstrap.ListGroup, null, options.map(function (option, i) {
    return _react["default"].createElement(_reactstrap.ListGroupItem, {
      key: i,
      className: "d-flex justify-content-between"
    }, _react["default"].createElement("span", {
      onClick: function onClick() {
        return setOption(option);
      }
    }, option.id, " - ", option.text), _react["default"].createElement(_reactstrap.Button, {
      color: "danger",
      onClick: removeOption.bind(null, i)
    }, "Remove"));
  })), _react["default"].createElement(_reactstrap.Label, {
    htmlFor: "option-id"
  }, "Option ID"), _react["default"].createElement(_reactstrap.Input, {
    id: "option-id",
    onChange: function onChange(e) {
      return setOption(_objectSpread({}, option, {
        id: e.target.value
      }));
    },
    value: option.id
  }), _react["default"].createElement(_reactstrap.Label, {
    htmlFor: "option-text"
  }, "Option Text"), _react["default"].createElement(_reactstrap.Input, {
    id: "option-text",
    onChange: function onChange(e) {
      return setOption(_objectSpread({}, option, {
        text: e.target.value
      }));
    },
    value: option.text
  }), _react["default"].createElement(_reactstrap.FormGroup, {
    check: true
  }, _react["default"].createElement(_reactstrap.Input, {
    id: "option-disabled",
    type: "checkbox",
    onChange: function onChange(e) {
      return setOption(_objectSpread({}, option, {
        disabled: e.target.checked
      }));
    },
    checked: option.disabled
  }), _react["default"].createElement(_reactstrap.Label, {
    htmlFor: "option-disabled"
  }, "Option disabled?")), _react["default"].createElement(_reactstrap.Button, {
    onClick: addOption
  }, "Save option")));
};

exports.SelectFieldBuilder = SelectFieldBuilder;