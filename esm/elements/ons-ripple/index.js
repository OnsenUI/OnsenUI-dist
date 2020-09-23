'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _internal = require('../../ons/internal');

var _internal2 = _interopRequireDefault(_internal);

var _baseElement = require('../base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _animatorCss = require('./animator-css');

var _animatorCss2 = _interopRequireDefault(_animatorCss);

var _contentReady = require('../../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

var _modifierUtil = require('../../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

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

var defaultClassName = 'ripple';
var scheme = {
  '': 'ripple--*',
  '.ripple__wave': 'ripple--*__wave',
  '.ripple__background': 'ripple--*__background'
};

/**
 * @element ons-ripple
 * @category visual
 * @description
 *   [en]
 *     Adds a Material Design "ripple" effect to an element. The ripple effect will spread from the position where the user taps.
 *
 *     Some elements such as `<ons-button>` and `<ons-fab>`  support a `ripple` attribute.
 *   [/en]
 *   [ja]マテリアルデザインのリップル効果をDOM要素に追加します。[/ja]
 * @codepen wKQWdZ
 * @tutorial vanilla/Reference/ripple
 * @modifier light-gray
 *   [en]Change the color of effects to light gray.[/en]
 *   [ja]エフェクトの色が明るい灰色になります。[/ja]
 * @guide theming.html#cross-platform-styling-autostyling
 *  [en]Cross platform styling[/en]
 *  [ja]Cross platform styling[/ja]
 * @example
 * <div class="my-div">
 *  <ons-ripple></ons-ripple>
 * </div>
 *
 * @example
 * <ons-button ripple>Click me!</ons-button>
 */

var RippleElement = function (_BaseElement) {
  _inherits(RippleElement, _BaseElement);

  /**
   * @attribute color
   * @type {String}
   * @description
   *   [en]Color of the ripple effect.[/en]
   *   [ja]リップルエフェクトの色を指定します。[/ja]
   */

  /**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]The appearance of the ripple effect.[/en]
   *   [ja]エフェクトの表現を指定します。[/ja]
   */

  /**
   * @attribute background
   * @type {String}
   * @description
   *   [en]Color of the background.[/en]
   *   [ja]背景の色を設定します。[/ja]
   */

  /**
   * @attribute size
   * @type {String}
   * @description
   *   [en]Sizing of the wave on ripple effect. Set "cover" or "contain". Default is "cover".[/en]
   *   [ja]エフェクトのサイズを指定します。"cover"もしくは"contain"を指定します。デフォルトは"cover"です。[/ja]
   */

  /**
   * @attribute center
   * @type {Boolean}
   * @description
   *   [en]If this attribute presents, change the position of wave effect to center of the target element.[/en]
   *   [ja]この要素を設定すると、エフェクトの位置が要素の真ん中から始まります。[/ja]
   */

  /**
   * @attribute disabled
   * @description
   *   [en]If this attribute is set, the ripple effect will be disabled.[/en]
   *   [ja]この属性が設定された場合、リップルエフェクトは無効になります。[/ja]
   */

  function RippleElement() {
    _classCallCheck(this, RippleElement);

    var _this = _possibleConstructorReturn(this, (RippleElement.__proto__ || Object.getPrototypeOf(RippleElement)).call(this));

    _this._onTap = _this._onTap.bind(_this);
    _this._onHold = _this._onHold.bind(_this);
    _this._onDragStart = _this._onDragStart.bind(_this);
    _this._onRelease = _this._onRelease.bind(_this);

    (0, _contentReady2.default)(_this, function () {
      return _this._compile();
    });

    _this._animator = new _animatorCss2.default();

    ['color', 'center', 'start-radius', 'background', 'modifier'].forEach(function (e) {
      _this.attributeChangedCallback(e, null, _this.getAttribute(e));
    });
    return _this;
  }

  _createClass(RippleElement, [{
    key: '_compile',
    value: function _compile() {
      this.classList.add(defaultClassName);

      this._wave = this.getElementsByClassName('ripple__wave')[0];
      this._background = this.getElementsByClassName('ripple__background')[0];

      if (!(this._background && this._wave)) {
        this._wave = _util2.default.create('.ripple__wave');
        this._background = _util2.default.create('.ripple__background');

        this.appendChild(this._wave);
        this.appendChild(this._background);
      }

      _modifierUtil2.default.initModifier(this, scheme);
    }
  }, {
    key: '_getEffectSize',
    value: function _getEffectSize() {
      var sizes = ['cover', 'contain'];
      if (this.hasAttribute('size')) {
        var size = this.getAttribute('size');
        if (sizes.indexOf(size) !== -1) {
          return size;
        }
      }

      return 'cover';
    }
  }, {
    key: '_calculateCoords',
    value: function _calculateCoords(e) {
      var x = void 0,
          y = void 0,
          h = void 0,
          w = void 0,
          r = void 0;
      var b = this.getBoundingClientRect();
      var size = this._getEffectSize();
      var error = function error() {
        return _util2.default.throw('Ripple invalid state');
      };

      if (this._center) {
        x = b.width / 2;
        y = b.height / 2;

        if (size === 'cover') {
          r = Math.sqrt(x * x + y * y);
        } else if (size === 'contain') {
          r = Math.min(x, y);
        } else {
          error();
        }
      } else {
        x = (typeof e.clientX === 'number' ? e.clientX : e.changedTouches[0].clientX) - b.left;
        y = (typeof e.clientY === 'number' ? e.clientY : e.changedTouches[0].clientY) - b.top;
        h = Math.max(y, b.height - y);
        w = Math.max(x, b.width - x);

        if (size === 'cover') {
          r = Math.sqrt(h * h + w * w);
        } else if (size === 'contain') {
          r = Math.min(Math.round(h / 2), Math.round(w / 2));
        } else {
          error();
        }
      }

      return { x: x, y: y, r: r };
    }
  }, {
    key: '_rippleAnimation',
    value: function _rippleAnimation(e) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
      var _animator = this._animator,
          _wave = this._wave,
          _background = this._background,
          _minR = this._minR;

      var _calculateCoords2 = this._calculateCoords(e),
          x = _calculateCoords2.x,
          y = _calculateCoords2.y,
          r = _calculateCoords2.r;

      _animator.stopAll({ stopNext: 1 });
      _animator.animate(_background, { opacity: 1 }, duration);

      _util2.default.extend(_wave.style, {
        opacity: 1,
        top: y - _minR + 'px',
        left: x - _minR + 'px',
        width: 2 * _minR + 'px',
        height: 2 * _minR + 'px'
      });

      return _animator.animate(_wave, {
        top: y - r,
        left: x - r,
        height: 2 * r,
        width: 2 * r
      }, duration);
    }
  }, {
    key: '_updateParent',
    value: function _updateParent() {
      if (!this._parentUpdated && this.parentNode) {
        var computedStyle = window.getComputedStyle(this.parentNode);
        if (computedStyle.getPropertyValue('position') === 'static') {
          this.parentNode.style.position = 'relative';
        }
        this._parentUpdated = true;
      }
    }
  }, {
    key: '_onTap',
    value: function _onTap(e) {
      var _this2 = this;

      if (!this.disabled && !e.ripple) {
        e.ripple = true;
        this._updateParent();
        this._rippleAnimation(e.gesture.srcEvent).then(function () {
          _this2._animator.fade(_this2._wave);
          _this2._animator.fade(_this2._background);
        });
      }
    }
  }, {
    key: '_onHold',
    value: function _onHold(e) {
      if (!this.disabled && !e.ripple) {
        e.ripple = true;
        this._updateParent();
        this._holding = this._rippleAnimation(e.gesture.srcEvent, 2000);
        document.addEventListener('release', this._onRelease);
      }
    }
  }, {
    key: '_onRelease',
    value: function _onRelease(e) {
      var _this3 = this;

      if (this._holding && !e.ripple) {
        e.ripple = true;
        this._holding.speed(300).then(function () {
          _this3._animator.stopAll({ stopNext: true });
          _this3._animator.fade(_this3._wave);
          _this3._animator.fade(_this3._background);
        });

        this._holding = false;
      }

      document.removeEventListener('release', this._onRelease);
    }
  }, {
    key: '_onDragStart',
    value: function _onDragStart(e) {
      if (this._holding) {
        return this._onRelease(e);
      }
      if (['left', 'right'].indexOf(e.gesture.direction) != -1) {
        this._onTap(e);
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._parentNode = this.parentNode;

      if (_internal2.default.config.animationsDisabled) {
        this.disabled = true;
      } else {
        this._parentNode.addEventListener('tap', this._onTap);
        this._parentNode.addEventListener('hold', this._onHold);
        this._parentNode.addEventListener('dragstart', this._onDragStart);
      }
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      var pn = this._parentNode || this.parentNode;
      pn.removeEventListener('tap', this._onTap);
      pn.removeEventListener('hold', this._onHold);
      pn.removeEventListener('dragstart', this._onDragStart);
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      var _this4 = this;

      switch (name) {

        case 'class':
          _util2.default.restoreClass(this, defaultClassName, scheme);
          break;

        case 'modifier':
          _modifierUtil2.default.onModifierChanged(last, current, this, scheme);
          break;

        case 'start-radius':
          this._minR = Math.max(0, parseFloat(current) || 0);
          break;

        case 'color':
          if (current) {
            (0, _contentReady2.default)(this, function () {
              _this4._wave.style.background = current;
              if (!_this4.hasAttribute('background')) {
                _this4._background.style.background = current;
              }
            });
          }
          break;

        case 'background':
          if (current || last) {
            if (current === 'none') {
              (0, _contentReady2.default)(this, function () {
                _this4._background.setAttribute('disabled', 'disabled');
                _this4._background.style.background = 'transparent';
              });
            } else {
              (0, _contentReady2.default)(this, function () {
                if (_this4._background.hasAttribute('disabled')) {
                  _this4._background.removeAttribute('disabled');
                }
                _this4._background.style.background = current;
              });
            }
          }
          break;

        case 'center':
          if (name === 'center') {
            this._center = current != null && current != 'false';
          }
          break;

      }
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
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['start-radius', 'color', 'background', 'center', 'class', 'modifier'];
    }
  }]);

  return RippleElement;
}(_baseElement2.default);

exports.default = RippleElement;


_elements2.default.Ripple = RippleElement;
customElements.define('ons-ripple', RippleElement);