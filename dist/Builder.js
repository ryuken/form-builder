"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dynamic = _interopRequireDefault(require("next/dynamic"));

var _reactstrap = require("reactstrap");

require("react-sortable-tree/style.css");

var _resolve = _interopRequireDefault(require("./resolve"));

var _Form = _interopRequireDefault(require("./Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SortableTree = (0, _dynamic["default"])(Promise.resolve().then(function () {
  return _interopRequireWildcard(require("react-sortable-tree"));
}), {
  ssr: false
});

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

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(BuildElement, _extends({}, currentElement, {
    onChange: onChange
  })), /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
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
    var newElements = [].concat(_toConsumableArray(elements), [{
      type: type,
      value: "",
      id: "",
      name: "test",
      label: "",
      placeholder: ""
    }]);
    setElements(newElements);
    setCurrent(newElements.length - 1);
  };

  var save = function save(data) {
    console.log(data);
  };

  var handleNodeClick = function handleNodeClick(node, e) {
    console.log(node);
  };

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Container, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
    onClick: add.bind(null, "textfield")
  }, "TextField"), /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
    onClick: add.bind(null, "select")
  }, "Select"))), /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
    sm: 6
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: 400
    }
  }, /*#__PURE__*/_react["default"].createElement(SortableTree, {
    treeData: elements,
    onChange: function onChange(treeData) {
      return setElements(treeData);
    },
    generateNodeProps: function generateNodeProps(node) {
      return {
        id: node.node.id,
        onClick: function onClick(e) {
          return handleNodeClick(node, e);
        },
        // **** This is where the actual row gets rendered so do what you want with isSelected *****
        title: /*#__PURE__*/_react["default"].createElement("div", {
          className: node.isSelected ? 'selected' : ''
        }, node.node.name)
      };
    }
  }))), /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
    sm: 6
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Preview"), /*#__PURE__*/_react["default"].createElement(_Form["default"], {
    elements: elements,
    onSubmit: save
  }))));
};

exports["default"] = _default;