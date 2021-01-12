'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _baseCheckbox = require('./base/base-checkbox');

var _baseCheckbox2 = _interopRequireDefault(_baseCheckbox);

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

var scheme = {
  '.radio-button': 'radio-button--*',
  '.radio-button__input': 'radio-button--*__input',
  '.radio-button__checkmark': 'radio-button--*__checkmark'
};

/**
 * @element ons-radio
 * @category form
 * @modifier material
 *  [en]Displays a Material Design radio button.[/en]
 *  [ja][/ja]
 * @description
 *  [en]
 *    A radio button element. The component will automatically render as a Material Design radio button on Android devices.
 *
 *    Most attributes that can be used for a normal `<input type="radio">` element can also be used on the `<ons-radio>` element.
 *  [/en]
 *  [ja][/ja]
 * @tutorial vanilla/Reference/radio
 * @seealso ons-select
 *   [en]The `<ons-select>` element is used to display a select box.[/en]
 *   [ja][/ja]
 * @seealso ons-checkbox
 *   [en]The `<ons-checkbox>` element is used to display a checkbox.[/en]
 *   [ja][/ja]
 * @seealso ons-switch
 *   [en]The `<ons-switch>` element is used to display a draggable toggle switch.[/en]
 *   [ja][/ja]
 * @seealso ons-input
 *   [en]The `<ons-input>` element is used to display a text input.[/en]
 *   [ja][/ja]
 * @seealso ons-search-input
 *   [en]The `<ons-search-input>` element is used to display a search input.[/en]
 *   [ja][/ja]
 * @seealso ons-range
 *   [en]The `<ons-range>` element is used to display a range slider.[/en]
 *   [ja][/ja]
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @example
 * <ons-radio checked></ons-radio>
 */

var RadioElement = function (_BaseCheckboxElement) {
  _inherits(RadioElement, _BaseCheckboxElement);

  function RadioElement() {
    _classCallCheck(this, RadioElement);

    return _possibleConstructorReturn(this, (RadioElement.__proto__ || Object.getPrototypeOf(RadioElement)).apply(this, arguments));
  }

  _createClass(RadioElement, [{
    key: '_scheme',
    get: function get() {
      return scheme;
    }
  }, {
    key: '_defaultClassName',
    get: function get() {
      return 'radio-button';
    }
  }, {
    key: 'type',
    get: function get() {
      return 'radio';
    }

    /**
     * @attribute input-id
     * @type {String}
     * @description
     *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
     *  [ja][/ja]
     */

    /**
     * @property value
     * @type {String}
     * @description
     *   [en]The current value of the radio button.[/en]
     *   [ja][/ja]
     */

    /**
     * @property checked
     * @type {Boolean}
     * @description
     *   [en]Whether the radio button is checked or not.[/en]
     *   [ja][/ja]
     */

    /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the radio button is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */

    /**
     * @method focus
     * @signature focus()
     * @description
     *   [en]Focuses the radio button.[/en]
     *   [ja][/ja]
     */

    /**
     * @method blur
     * @signature blur()
     * @description
     *   [en]Removes focus from the radio button.[/en]
     *   [ja][/ja]
     */

  }]);

  return RadioElement;
}(_baseCheckbox2.default);

exports.default = RadioElement;


_elements2.default.Radio = RadioElement;
customElements.define('ons-radio', RadioElement);