"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Select = _interopRequireDefault(require("./Select"));

var _TextField = _interopRequireWildcard(require("./TextField"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

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