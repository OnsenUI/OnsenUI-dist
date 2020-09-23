'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

var _styler = require('../ons/styler');

var _styler2 = _interopRequireDefault(_styler);

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

var defaultClassName = 'fab';

var scheme = {
  '': 'fab--*',
  '.fab__icon': 'fab--*__icon'
};

/**
 * @element ons-fab
 * @category form
 * @description
 *   [en]
 *     The Floating action button is a circular button defined in the [Material Design specification](https://www.google.com/design/spec/components/buttons-floating-action-button.html). They are often used to promote the primary action of the app.
 *
 *     It can be displayed either as an inline element or in one of the corners. Normally it will be positioned in the lower right corner of the screen.
 *   [/en]
 *   [ja][/ja]
 * @tutorial vanilla/Reference/fab
 * @modifier mini
 *   [en]Makes the `ons-fab` smaller.[/en]
 *   [ja][/ja]
 * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
 * @seealso ons-speed-dial
 *   [en]The `<ons-speed-dial>` component is a Floating action button that displays a menu when tapped.[/en]
 *   [ja][/ja]
 */

var FabElement = function (_BaseElement) {
  _inherits(FabElement, _BaseElement);

  /**
   * @attribute modifier
   * @type {String}
   * @description
   *  [en]The appearance of the button.[/en]
   *  [ja]ボタンの表現を指定します。[/ja]
   */

  /**
   * @attribute ripple
   * @description
   *  [en]If this attribute is defined, the button will have a ripple effect when tapped.[/en]
   *  [ja][/ja]
   */

  /**
   * @attribute position
   * @type {String}
   * @description
   *  [en]The position of the button. Should be a string like `"bottom right"` or `"top left"`. If this attribute is not defined it will be displayed as an inline element.[/en]
   *  [ja][/ja]
   */

  /**
   * @attribute disabled
   * @description
   *   [en]Specify if button should be disabled.[/en]
   *   [ja]ボタンを無効化する場合は指定します。[/ja]
   */

  function FabElement() {
    _classCallCheck(this, FabElement);

    // The following statements can be executed before contentReady
    // since these do not access the children
    var _this = _possibleConstructorReturn(this, (FabElement.__proto__ || Object.getPrototypeOf(FabElement)).call(this));

    _this._hide();
    _this.classList.add(defaultClassName);

    (0, _contentReady2.default)(_this, function () {
      _this._compile();
    });
    return _this;
  }

  _createClass(FabElement, [{
    key: '_compile',
    value: function _compile() {
      _autostyle2.default.prepare(this);

      if (!_util2.default.findChild(this, '.fab__icon')) {
        var content = document.createElement('span');
        content.classList.add('fab__icon');

        _util2.default.arrayFrom(this.childNodes).forEach(function (element) {
          if (!element.tagName || element.tagName.toLowerCase() !== 'ons-ripple') {
            content.appendChild(element);
          }
        });
        this.appendChild(content);
      }

      this._updateRipple();

      _modifierUtil2.default.initModifier(this, scheme);

      this._updatePosition();
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      setImmediate(function () {
        return _this2._show();
      });
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
        case 'ripple':
          this._updateRipple();
          break;
        case 'position':
          this._updatePosition();
          break;
      }
    }
  }, {
    key: '_show',
    value: function _show() {
      if (!this._manuallyHidden) {
        // if user has not called ons-fab.hide()
        this._toggle(true);
      }
    }
  }, {
    key: '_hide',
    value: function _hide() {
      var _this3 = this;

      setImmediate(function () {
        return _this3._toggle(false);
      });
    }
  }, {
    key: '_updateRipple',
    value: function _updateRipple() {
      _util2.default.updateRipple(this);
    }
  }, {
    key: '_updatePosition',
    value: function _updatePosition() {
      var position = this.getAttribute('position');
      this.classList.remove('fab--top__left', 'fab--bottom__right', 'fab--bottom__left', 'fab--top__right', 'fab--top__center', 'fab--bottom__center');
      switch (position) {
        case 'top right':
        case 'right top':
          this.classList.add('fab--top__right');
          break;
        case 'top left':
        case 'left top':
          this.classList.add('fab--top__left');
          break;
        case 'bottom right':
        case 'right bottom':
          this.classList.add('fab--bottom__right');
          break;
        case 'bottom left':
        case 'left bottom':
          this.classList.add('fab--bottom__left');
          break;
        case 'center top':
        case 'top center':
          this.classList.add('fab--top__center');
          break;
        case 'center bottom':
        case 'bottom center':
          this.classList.add('fab--bottom__center');
          break;
        default:
          break;
      }
    }

    /**
     * @method show
     * @signature show()
     * @description
     *  [en]Show the floating action button.[/en]
     *  [ja][/ja]
     */

  }, {
    key: 'show',
    value: function show() {
      this.toggle(true);
    }

    /**
     * @method hide
     * @signature hide()
     * @description
     *  [en]Hide the floating action button.[/en]
     *  [ja][/ja]
     */

  }, {
    key: 'hide',
    value: function hide() {
      this.toggle(false);
    }

    /**
     * @method toggle
     * @signature toggle()
     * @description
     *   [en]Toggle the visibility of the button.[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'toggle',
    value: function toggle() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.visible;

      this._manuallyHidden = !action;
      this._toggle(action);
    }
  }, {
    key: '_toggle',
    value: function _toggle() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.visible;

      var isBottom = (this.getAttribute('position') || '').indexOf('bottom') >= 0;
      var translate = isBottom ? 'translate3d(0px, -' + (_util2.default.globals.fabOffset || 0) + 'px, 0px)' : '';

      (0, _styler2.default)(this, { transform: translate + ' scale(' + Number(action) + ')' });
    }

    /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the element is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */

  }, {
    key: 'disabled',
    set: function set(value) {
      return _util2.default.toggleAttribute(this, 'disabled', value);
    },
    get: function get() {
      return this.hasAttribute('disabled');
    }

    /**
     * @property visible
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the element is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */

  }, {
    key: 'visible',
    get: function get() {
      return this.style.transform.indexOf('scale(0)') === -1 && this.style.display !== 'none';
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['modifier', 'ripple', 'position', 'class'];
    }
  }]);

  return FabElement;
}(_baseElement2.default);

exports.default = FabElement;


_elements2.default.Fab = FabElement;
customElements.define('ons-fab', FabElement);