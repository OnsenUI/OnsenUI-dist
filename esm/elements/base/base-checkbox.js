'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _baseInput = require('./base-input');

var _baseInput2 = _interopRequireDefault(_baseInput);

var _contentReady = require('../../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright 2013-2015 ASIAL CORPORATION
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var BaseCheckboxElement = function (_BaseInputElement) {
  _inherits(BaseCheckboxElement, _BaseInputElement);

  function BaseCheckboxElement() {
    _classCallCheck(this, BaseCheckboxElement);

    var _this = _possibleConstructorReturn(this, (BaseCheckboxElement.__proto__ || Object.getPrototypeOf(BaseCheckboxElement)).call(this));

    if (_this.constructor === BaseCheckboxElement) {
      util.throwAbstract();
    }

    (0, _contentReady2.default)(_this, function () {
      _this.attributeChangedCallback('checked', null, _this.getAttribute('checked'));
    });
    return _this;
  }

  /* Inherited props */

  _createClass(BaseCheckboxElement, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      switch (name) {
        case 'checked':
          this.checked = current !== null;
          break;
        default:
          _get(BaseCheckboxElement.prototype.__proto__ || Object.getPrototypeOf(BaseCheckboxElement.prototype), 'attributeChangedCallback', this).call(this, name, last, current);
      }
    }
  }, {
    key: '_template',
    get: function get() {
      return '\n      <input type="' + this.type + '" class="' + this._defaultClassName + '__input">\n      <span class="' + this._defaultClassName + '__checkmark"></span>\n    ';
    }

    /* Own props */

  }, {
    key: '_helper',
    get: function get() {
      return this.querySelector('span');
    }
  }, {
    key: 'checked',
    get: function get() {
      return this._input.checked;
    },
    set: function set(val) {
      var _this2 = this;

      (0, _contentReady2.default)(this, function () {
        _this2._input.checked = val;
      });
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return [].concat(_toConsumableArray(_get(BaseCheckboxElement.__proto__ || Object.getPrototypeOf(BaseCheckboxElement), 'observedAttributes', this)), ['checked']);
    }
  }]);

  return BaseCheckboxElement;
}(_baseInput2.default);

exports.default = BaseCheckboxElement;