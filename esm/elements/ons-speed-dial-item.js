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

var defaultClassName = 'fab fab--mini speed-dial__item';

var scheme = {
  '': 'fab--* speed-dial__item--*'
};

/**
 * @element ons-speed-dial-item
 * @category control
 * @description
 *   [en]
 *     This component displays the child elements of the Material Design Speed dial component.
 *   [/en]
 *   [ja]
 *     Material DesignのSpeed dialの子要素を表現する要素です。
 *   [/ja]
 * @codepen dYQYLg
 * @tutorial vanilla/Reference/speed-dial
 * @seealso ons-speed-dial
 *   [en]The `<ons-speed-dial>` component.[/en]
 *   [ja]ons-speed-dialコンポーネント[/ja]
 * @seealso ons-fab
 *   [en]ons-fab component[/en]
 *   [ja]ons-fabコンポーネント[/ja]
 * @example
 * <ons-speed-dial position="left bottom">
 *   <ons-fab>
 *     <ons-icon icon="fa-twitter"></ons-icon>
 *   </ons-fab>
 *   <ons-speed-dial-item>A</ons-speed-dial-item>
 *   <ons-speed-dial-item>B</ons-speed-dial-item>
 *   <ons-speed-dial-item>C</ons-speed-dial-item>
 * </ons-speed-dial>
 */

var SpeedDialItemElement = function (_BaseElement) {
  _inherits(SpeedDialItemElement, _BaseElement);

  /**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the component.[/en]
   *   [ja]このコンポーネントの表現を指定します。[/ja]
   */

  /**
   * @attribute ripple
   * @description
   *  [en]If this attribute is defined, the button will have a ripple effect when tapped.[/en]
   *  [ja][/ja]
   */

  function SpeedDialItemElement() {
    _classCallCheck(this, SpeedDialItemElement);

    var _this = _possibleConstructorReturn(this, (SpeedDialItemElement.__proto__ || Object.getPrototypeOf(SpeedDialItemElement)).call(this));

    _this._compile();
    _this._boundOnClick = _this._onClick.bind(_this);
    return _this;
  }

  _createClass(SpeedDialItemElement, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      switch (name) {
        case 'class':
          _util2.default.restoreClass(this, defaultClassName, scheme);
          break;
        case 'modifier':
          _modifierUtil2.default.onModifierChanged(last, current, this, scheme);
          _util2.default.addModifier(this, 'mini');
          break;
        case 'ripple':
          this._updateRipple();
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.addEventListener('click', this._boundOnClick, false);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.removeEventListener('click', this._boundOnClick, false);
    }
  }, {
    key: '_updateRipple',
    value: function _updateRipple() {
      _util2.default.updateRipple(this);
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      e.stopPropagation();
    }
  }, {
    key: '_compile',
    value: function _compile() {
      var _this2 = this;

      _autostyle2.default.prepare(this);

      defaultClassName.split(/\s+/).forEach(function (token) {
        return _this2.classList.add(token);
      });

      _util2.default.addModifier(this, 'mini');
      this._updateRipple();

      _modifierUtil2.default.initModifier(this, scheme);
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['modifier', 'ripple', 'class'];
    }
  }]);

  return SpeedDialItemElement;
}(_baseElement2.default);

exports.default = SpeedDialItemElement;


_elements2.default.SpeedDialItem = SpeedDialItemElement;
customElements.define('ons-speed-dial-item', SpeedDialItemElement);