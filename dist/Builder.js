"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _resolve = _interopRequireDefault(require("./resolve"));

var _Form = _interopRequireDefault(require("./Form"));

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