'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _baseButton = require('./base/base-button');

var _baseButton2 = _interopRequireDefault(_baseButton);

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
 * @element ons-action-sheet-button
 * @category dialog
 * @modifier destructive
 *   [en]Shows a "destructive" button (only for iOS).[/en]
 *   [ja]"destructive"なボタンを表示します(iOSでのみ有効)。[/ja]
 * @description
 *   [en]Component that represent each button of the action sheet.[/en]
 *   [ja]アクションシートに表示される各ボタンを表現するコンポーネントです。[/ja]
 * @seealso ons-action-sheet
 *   [en]The `<ons-action-sheet>` component[/en]
 *   [ja]ons-action-sheetコンポーネント[/ja]
 * @seealso ons-list-item
 *   [en]The `<ons-list-item>` component[/en]
 *   [ja]ons-list-itemコンポーネント[/ja]
 * @seealso ons-icon
 *   [en]The `<ons-icon>` component[/en]
 *   [ja]ons-iconコンポーネント[/ja]
 * @tutorial vanilla/Reference/action-sheet
 * @guide appsize.html#removing-icon-packs [en]Removing icon packs.[/en][ja][/ja]
 * @guide faq.html#how-can-i-use-custom-icon-packs [en]Adding custom icon packs.[/en][ja][/ja]
 * @modifier material
 *   [en]Display a Material Design action sheet button.[/en]
 *   [ja]マテリアルデザインのアクションシート用のボタンを表示します。[/ja]
 * @example
 * <ons-action-sheet id="sheet">
 *   <ons-action-sheet-button>Label</ons-action-sheet-button>
 *   <ons-action-sheet-button>Label</ons-action-sheet-button>
 * </ons-action-sheet>
 *
 * <script>
 *   document.getElementById('sheet').show();
 * </script>
 */
var ActionSheetButtonElement = function (_BaseButtonElement) {
  _inherits(ActionSheetButtonElement, _BaseButtonElement);

  function ActionSheetButtonElement() {
    _classCallCheck(this, ActionSheetButtonElement);

    return _possibleConstructorReturn(this, (ActionSheetButtonElement.__proto__ || Object.getPrototypeOf(ActionSheetButtonElement)).apply(this, arguments));
  }

  _createClass(ActionSheetButtonElement, [{
    key: '_scheme',


    /**
     * @attribute icon
     * @type {String}
     * @description
     *  [en]Creates an `ons-icon` component with this string. Only visible on Android. Check [See also](#seealso) section for more information.[/en]
     *  [ja]`ons-icon`コンポーネントを悪性します。Androidでのみ表示されます。[/ja]
     */

    /**
     * @attribute modifier
     * @type {String}
     * @description
     *   [en]The appearance of the action sheet button.[/en]
     *   [ja]アクションシートボタンの見た目を設定します。[/ja]
     */

    get: function get() {
      return {
        '': 'action-sheet-button--*',
        '.action-sheet-icon': 'action-sheet-icon--*'
      };
    }
  }, {
    key: '_defaultClassName',
    get: function get() {
      return 'action-sheet-button';
    }
  }, {
    key: '_rippleOpt',
    get: function get() {
      return undefined;
    }
  }]);

  return ActionSheetButtonElement;
}(_baseButton2.default);

exports.default = ActionSheetButtonElement;


_elements2.default.ActionSheetButton = ActionSheetButtonElement;
customElements.define('ons-action-sheet-button', ActionSheetButtonElement);