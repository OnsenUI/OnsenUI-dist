'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _baseInput = require('./base/base-input');

var _baseInput2 = _interopRequireDefault(_baseInput);

var _contentReady = require('../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

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

var scheme = {
  '.text-input': 'text-input--*',
  '.text-input__label': 'text-input--*__label'
};

/**
 * @element ons-input
 * @category form
 * @modifier material
 *  [en]Displays a Material Design input.[/en]
 *  [ja][/ja]
 * @modifier underbar
 *  [en]Displays a horizontal line underneath a text input.[/en]
 *  [ja][/ja]
 * @modifier transparent
 *  [en]Displays a transparent input. Works for Material Design.[/en]
 *  [ja][/ja]
 * @description
 *  [en]
 *    An input element. The `type` attribute can be used to change the input type. All text input types are supported.
 *
 *    The component will automatically render as a Material Design input on Android devices.
 *
 *    Most attributes that can be used for a normal `<input>` element can also be used on the `<ons-input>` element.
 *  [/en]
 *  [ja][/ja]
 * @tutorial vanilla/Reference/input
 * @seealso ons-checkbox
 *   [en]The `<ons-checkbox>` element is used to display a checkbox.[/en]
 *   [ja][/ja]
 * @seealso ons-radio
 *   [en]The `<ons-radio>` element is used to display a radio button.[/en]
 *   [ja][/ja]
 * @seealso ons-range
 *   [en]The `<ons-range>` element is used to display a range slider.[/en]
 *   [ja][/ja]
 * @seealso ons-switch
 *   [en]The `<ons-switch>` element is used to display a draggable toggle switch.[/en]
 *   [ja][/ja]
 * @seealso ons-select
 *   [en]The `<ons-select>` element is used to display a select box.[/en]
 *   [ja][/ja]
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @example
 * <ons-input placeholder="Username" float></ons-input>
 */

var InputElement = function (_BaseInputElement) {
  _inherits(InputElement, _BaseInputElement);

  function InputElement() {
    _classCallCheck(this, InputElement);

    var _this = _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call(this));

    _this._boundOnInput = _this._update.bind(_this);
    _this._boundOnFocusin = _this._update.bind(_this);
    return _this;
  }

  /* Inherited props */

  _createClass(InputElement, [{
    key: '_update',
    value: function _update() {
      this._updateLabel();
      this._updateLabelClass();
    }
  }, {
    key: '_updateLabel',


    /* Own props */

    value: function _updateLabel() {
      var label = this.getAttribute('placeholder') || '';

      if (typeof this._helper.textContent !== 'undefined') {
        this._helper.textContent = label;
      } else {
        this._helper.innerText = label;
      }
    }
  }, {
    key: '_updateLabelClass',
    value: function _updateLabelClass() {
      if (this.value === '') {
        this._helper.classList.remove('text-input--material__label--active');
      } else {
        this._helper.classList.add('text-input--material__label--active');
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      _get(InputElement.prototype.__proto__ || Object.getPrototypeOf(InputElement.prototype), 'connectedCallback', this).call(this);

      (0, _contentReady2.default)(this, function () {
        _this2._input.addEventListener('input', _this2._boundOnInput);
        _this2._input.addEventListener('focusin', _this2._boundOnFocusin);
      });

      var type = this.getAttribute('type');
      if (['checkbox', 'radio'].indexOf(type) >= 0) {
        _util2.default.warn('Warn: <ons-input type="' + type + '"> is deprecated since v2.4.0. Use <ons-' + type + '> instead.');
      }
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      var _this3 = this;

      _get(InputElement.prototype.__proto__ || Object.getPrototypeOf(InputElement.prototype), 'disconnectedCallback', this).call(this);

      (0, _contentReady2.default)(this, function () {
        _this3._input.removeEventListener('input', _this3._boundOnInput);
        _this3._input.removeEventListener('focusin', _this3._boundOnFocusin);
      });
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      var _this4 = this;

      switch (name) {
        case 'type':
          (0, _contentReady2.default)(this, function () {
            return _this4._input.setAttribute('type', _this4.type);
          });
          break;
        default:
          _get(InputElement.prototype.__proto__ || Object.getPrototypeOf(InputElement.prototype), 'attributeChangedCallback', this).call(this, name, last, current);
      }
    }

    /**
     * @attribute placeholder
     * @type {String}
     * @description
     *   [en]Placeholder text. In Material Design, this placeholder will be a floating label.[/en]
     *   [ja][/ja]
     */

    /**
     * @attribute float
     * @description
     *  [en]If this attribute is present, the placeholder will be animated in Material Design.[/en]
     *  [ja]この属性が設定された時、ラベルはアニメーションするようになります。[/ja]
     */

    /**
     * @attribute type
     * @type {String}
     * @description
     *  [en]
     *    Specify the input type. This is the same as the "type" attribute for normal inputs. It expects strict text types such as `text`, `password`, etc. For checkbox, radio button, select or range, please have a look at the corresponding elements.
     *
     *    Please take a look at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) for an exhaustive list of possible values. Depending on the platform and browser version some of these might not work.
     *  [/en]
     *  [ja][/ja]
     */

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
     *   [en]The current value of the input.[/en]
     *   [ja][/ja]
     */

    /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the input is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */

  }, {
    key: '_scheme',
    get: function get() {
      return scheme;
    }
  }, {
    key: '_template',
    get: function get() {
      return '\n      <input type="' + this.type + '" class="text-input">\n      <span class="text-input__label"></span>\n    ';
    }
  }, {
    key: 'type',
    get: function get() {
      var type = this.getAttribute('type');
      return ['checkbox', 'radio'].indexOf(type) < 0 && type || 'text';
    }
  }, {
    key: '_helper',
    get: function get() {
      return this.querySelector('span');
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return [].concat(_toConsumableArray(_get(InputElement.__proto__ || Object.getPrototypeOf(InputElement), 'observedAttributes', this)), ['type']);
    }
  }]);

  return InputElement;
}(_baseInput2.default);

exports.default = InputElement;


_elements2.default.Input = InputElement;
customElements.define('ons-input', InputElement);