'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _baseElement = require('./base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

var _contentReady = require('../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var SplitterMaskElement = function (_BaseElement) {
  _inherits(SplitterMaskElement, _BaseElement);

  function SplitterMaskElement() {
    _classCallCheck(this, SplitterMaskElement);

    var _this = _possibleConstructorReturn(this, (SplitterMaskElement.__proto__ || Object.getPrototypeOf(SplitterMaskElement)).call(this));

    _this._boundOnClick = _this._onClick.bind(_this);
    (0, _contentReady2.default)(_this, function () {
      if (_this.parentNode._sides.every(function (side) {
        return side.mode === 'split';
      })) {
        _this.setAttribute('style', 'display: none !important');
      }
    });
    return _this;
  }

  _createClass(SplitterMaskElement, [{
    key: '_onClick',
    value: function _onClick(event) {
      if (this.onClick instanceof Function) {
        this.onClick();
      } else if (_util2.default.match(this.parentNode, 'ons-splitter')) {
        this.parentNode._sides.forEach(function (side) {
          return side.close('left').catch(function () {});
        });
      }
      event.stopPropagation();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {}
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.addEventListener('click', this._boundOnClick);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.removeEventListener('click', this._boundOnClick);
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return [];
    }
  }]);

  return SplitterMaskElement;
}(_baseElement2.default);

exports.default = SplitterMaskElement;


_elements2.default.SplitterMask = SplitterMaskElement;
customElements.define('ons-splitter-mask', SplitterMaskElement);