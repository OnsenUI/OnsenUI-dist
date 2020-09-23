'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _styler = require('../ons/styler');

var _styler2 = _interopRequireDefault(_styler);

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

/**
 * @element ons-col
 * @category grid
 * @description
 *   [en]Represents a column in the grid system. Use with `<ons-row>` to layout components.[/en]
 *   [ja]グリッドシステムにて列を定義します。ons-rowとともに使用し、コンポーネントのレイアウトに利用します。[/ja]
 * @note
 *   [en]For Android 4.3 and earlier, and iOS6 and earlier, when using mixed alignment with ons-row and ons-column, they may not be displayed correctly. You can use only one alignment.[/en]
 *   [ja]Android 4.3以前、もしくはiOS 6以前のOSの場合、ons-rowとons-columnを組み合わせた場合に描画が崩れる場合があります。[/ja]
 * @codepen GgujC {wide}
 * @guide theming.html [en]Layouting guide[/en][ja]レイアウト機能[/ja]
 * @seealso ons-row
 *   [en]The `<ons-row>` component is the parent of `<ons-col>`.[/en]
 *   [ja]ons-rowコンポーネント[/ja]
 * @example
 * <ons-row>
 *   <ons-col width="50px"><ons-icon icon="fa-twitter"></ons-icon></ons-col>
 *   <ons-col>Text</ons-col>
 * </ons-row>
 */

/**
 * @attribute vertical-align
 * @type {String}
 * @description
 *   [en]Vertical alignment of the column. Valid values are "top", "center", and "bottom".[/en]
 *   [ja]縦の配置を指定する。"top", "center", "bottom"のいずれかを指定します。[/ja]
 */

/**
 * @attribute width
 * @type {String}
 * @description
 *   [en]The width of the column. Valid values are css width values ("10%", "50px").[/en]
 *   [ja]カラムの横幅を指定する。パーセントもしくはピクセルで指定します（10%や50px）。[/ja]
 */
var ColElement = function (_BaseElement) {
  _inherits(ColElement, _BaseElement);

  function ColElement() {
    _classCallCheck(this, ColElement);

    var _this = _possibleConstructorReturn(this, (ColElement.__proto__ || Object.getPrototypeOf(ColElement)).call(this));

    if (_this.getAttribute('width')) {
      _this._updateWidth();
    }
    return _this;
  }

  _createClass(ColElement, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      if (name === 'width') {
        this._updateWidth();
      }
    }
  }, {
    key: '_updateWidth',
    value: function _updateWidth() {
      var width = this.getAttribute('width');
      if (!width) {
        _styler2.default.clear(this, 'flex maxWidth');
      } else {
        width = width.trim().match(/^\d+$/) ? width + '%' : width;

        (0, _styler2.default)(this, {
          flex: '0 0 ' + width,
          maxWidth: width
        });
      }
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['width'];
    }
  }]);

  return ColElement;
}(_baseElement2.default);

exports.default = ColElement;


_elements2.default.Col = ColElement;
customElements.define('ons-col', ColElement);