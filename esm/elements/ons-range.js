'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

var _baseInput = require('./base/base-input');

var _baseInput2 = _interopRequireDefault(_baseInput);

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
  '': 'range--*',
  '.range__input': 'range--*__input',
  '.range__focus-ring': 'range--*__focus-ring'
};

var activeClassToken = 'range__input--active';

/**
 * @element ons-range
 * @category form
 * @modifier material
 *   [en]Material Design slider[/en]
 *   [ja][/ja]
 * @description
 *   [en]
 *     Range input component. Used to display a draggable slider.
 *
 *     Works very similar to the `<input type="range">` element.
 *   [/en]
 *   [ja][/ja]
 * @codepen xZQomM
 * @tutorial vanilla/Reference/range
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @seealso ons-input
 *   [en]The `<ons-input>` component is used to display text inputs, radio buttons and checkboxes.[/en]
 *   [ja][/ja]
 * @example
 * <ons-range value="20"></ons-range>
 * <ons-range modifier="material" value="10"></range>
 */

var RangeElement = function (_BaseInputElement) {
  _inherits(RangeElement, _BaseInputElement);

  function RangeElement() {
    _classCallCheck(this, RangeElement);

    var _this = _possibleConstructorReturn(this, (RangeElement.__proto__ || Object.getPrototypeOf(RangeElement)).call(this));

    _this._onMouseDown = _this._onMouseDown.bind(_this);
    _this._onMouseUp = _this._onMouseUp.bind(_this);
    _this._onTouchStart = _this._onTouchStart.bind(_this);
    _this._onTouchEnd = _this._onTouchEnd.bind(_this);
    _this._onInput = _this._update.bind(_this);
    _this._onDragstart = _this._onDragstart.bind(_this);
    _this._onDragend = _this._onDragend.bind(_this);
    return _this;
  }

  _createClass(RangeElement, [{
    key: '_compile',
    value: function _compile() {
      _get(RangeElement.prototype.__proto__ || Object.getPrototypeOf(RangeElement.prototype), '_compile', this).call(this);
      this._updateDisabled(this.hasAttribute('disabled'));
    }

    /* Inherited props */

  }, {
    key: '_update',
    value: function _update() {
      var input = this._input;
      var focusRing = this._focusRing;

      input.style.backgroundSize = 100 * this._ratio + '% 2px';
      focusRing.value = this.value;

      // NOTE: "_zero" attribute is used for CSS styling.
      if (input.min === '' && input.value === '0' || input.min === input.value) {
        input.setAttribute('_zero', '');
      } else {
        input.removeAttribute('_zero');
      }

      ['min', 'max'].forEach(function (attr) {
        return focusRing[attr] = input[attr];
      });
    }
  }, {
    key: '_onMouseDown',


    /* Own props */

    value: function _onMouseDown(e) {
      var _this2 = this;

      this._input.classList.add(activeClassToken);
      setImmediate(function () {
        return _this2._input.focus();
      });
    }
  }, {
    key: '_onTouchStart',
    value: function _onTouchStart(e) {
      this._onMouseDown();
    }
  }, {
    key: '_onMouseUp',
    value: function _onMouseUp(e) {
      this._input.classList.remove(activeClassToken);
    }
  }, {
    key: '_onTouchEnd',
    value: function _onTouchEnd(e) {
      this._onMouseUp(e);
    }
  }, {
    key: '_onDragstart',
    value: function _onDragstart(e) {
      e.consumed = true;
      e.gesture.stopPropagation();
      this._input.classList.add(activeClassToken);
      this.addEventListener('drag', this._onDrag);
    }
  }, {
    key: '_onDrag',
    value: function _onDrag(e) {
      e.stopPropagation();
    }
  }, {
    key: '_onDragend',
    value: function _onDragend(e) {
      this._input.classList.remove(activeClassToken);
      this.removeEventListener('drag', this._onDrag);
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      if (name === 'disabled') {
        this._updateDisabled(current);
      }
      _get(RangeElement.prototype.__proto__ || Object.getPrototypeOf(RangeElement.prototype), 'attributeChangedCallback', this).call(this, name, last, current);
    }

    /**
     * @param {boolean} disabled
     */

  }, {
    key: '_updateDisabled',
    value: function _updateDisabled(disabled) {
      if (disabled) {
        this.classList.add('range--disabled');
      } else {
        this.classList.remove('range--disabled');
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._setupListeners(true);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this._setupListeners(false);
    }
  }, {
    key: '_setupListeners',
    value: function _setupListeners(add) {
      var action = (add ? 'add' : 'remove') + 'EventListener';
      _util2.default[action](this, 'touchstart', this._onTouchStart, { passive: true });
      this[action]('mousedown', this._onMouseDown);
      this[action]('mouseup', this._onMouseUp);
      this[action]('touchend', this._onTouchEnd);
      this[action]('dragstart', this._onDragstart);
      this[action]('dragend', this._onDragend);
      this[action]('input', this._onInput);
    }

    /**
     * @attribute disabled
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */

    /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */

    /**
     * @property value
     * @type {Number}
     * @description
     *   [en]Current value.[/en]
     *   [ja][/ja]
     */

    /**
     * @method focus
     * @signature focus()
     * @description
     *   [en]Focuses the range.[/en]
     *   [ja][/ja]
     */

    /**
     * @method blur
     * @signature blur()
     * @description
     *   [en]Removes focus from the range.[/en]
     *   [ja][/ja]
     */

  }, {
    key: '_scheme',
    get: function get() {
      return scheme;
    }
  }, {
    key: '_template',
    get: function get() {
      return '\n      <input type="' + this.type + '" class="' + this._defaultClassName + '__input">\n      <input type="range" class="range__focus-ring" tabIndex="-1">\n    ';
    }
  }, {
    key: '_defaultClassName',
    get: function get() {
      return 'range';
    }
  }, {
    key: 'type',
    get: function get() {
      return 'range';
    }
  }, {
    key: '_focusRing',
    get: function get() {
      return this.children[1];
    }
  }, {
    key: '_ratio',
    get: function get() {
      // Returns the current ratio.
      var min = this._input.min === '' ? 0 : parseInt(this._input.min);
      var max = this._input.max === '' ? 100 : parseInt(this._input.max);

      return (this.value - min) / (max - min);
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['disabled'].concat(_toConsumableArray(_baseInput2.default.observedAttributes));
    }
  }]);

  return RangeElement;
}(_baseInput2.default);

exports.default = RangeElement;


_elements2.default.Range = RangeElement;
customElements.define('ons-range', RangeElement);