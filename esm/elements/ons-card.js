'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

var _autostyle = require('../ons/autostyle');

var _autostyle2 = _interopRequireDefault(_autostyle);

var _modifierUtil = require('../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

var _baseElement = require('./base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

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

var defaultClassName = 'card';
var scheme = {
  '': 'card--*',
  '.card__title': 'card--*__title',
  '.card__content': 'card--*__content'
};

/**
 * @element ons-card
 * @category visual
 * @modifier material
 *   [en]A card with material design.[/en]
 *   [ja]リストの上下のボーダーが無いリストを表示します。[/ja]
 * @description
 *   [en]
 *    Component to create a card that displays some information.
 *
 *    The card may be composed by divs with specially prepared classes `title` and/or `content`. You can also add your own content as you please.[/en]
 *   [ja][/ja]
 * @tutorial vanilla/Reference/card
 * @example
 * <ons-card>
 *   <p>Some content</p>
 * </ons-card>
 */

var CardElement = function (_BaseElement) {
  _inherits(CardElement, _BaseElement);

  /**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the card.[/en]
   *   [ja]リストの表現を指定します。[/ja]
   */

  function CardElement() {
    _classCallCheck(this, CardElement);

    var _this = _possibleConstructorReturn(this, (CardElement.__proto__ || Object.getPrototypeOf(CardElement)).call(this));

    (0, _contentReady2.default)(_this, function () {
      _this._compile();
    });
    return _this;
  }

  _createClass(CardElement, [{
    key: '_compile',
    value: function _compile() {
      var title = void 0,
          content = void 0;

      for (var i = 0; i < this.children.length; i++) {
        var el = this.children[i];

        if (el.classList.contains('title')) {
          el.classList.add('card__title');
          title = el;
        } else if (el.classList.contains('content')) {
          el.classList.add('card__content');
          content = el;
        }
      }

      _autostyle2.default.prepare(this);
      this.classList.add(defaultClassName);
      _modifierUtil2.default.initModifier(this, scheme);
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      switch (name) {
        case 'class':
          _util2.default.restoreClass(this, defaultClassName, scheme);
          break;
        case 'modifier':
          _modifierUtil2.default.onModifierChanged(last, current, this, scheme);
          break;
      }
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['modifier', 'class'];
    }
  }]);

  return CardElement;
}(_baseElement2.default);

exports.default = CardElement;


_elements2.default.Card = CardElement;
customElements.define('ons-card', CardElement);