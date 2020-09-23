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

var iosBackButtonIcon = '<svg width="13" height="21" xmlns="http://www.w3.org/2000/svg"><g id="iosBackButtonIcon-toolbar-back-button" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="ios" transform="translate(-34 -30)"><path id="ios-back-button-icon" d="M34 40.5L44.5 30l2 2-8.5 8.5 8.5 8.5-2 2z"/></g></g></svg>';
var mdBackButtonIcon = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g id="mdBackButtonIcon-toolbar-back-button" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="android" transform="translate(-32 -32)" fill-rule="nonzero"><path id="md-back-button-icon" d="M48 39H35.83l5.59-5.59L40 32l-8 8 8 8 1.41-1.41L35.83 41H48z"/></g></g></svg>';


var defaultClassName = 'back-button';

var scheme = {
  '': 'back-button--*',
  '.back-button__icon': 'back-button--*__icon',
  '.back-button__label': 'back-button--*__label'
};

/**
 * @element ons-back-button
 * @category navigation
 * @description
 *   [en]
 *     Back button component for `<ons-toolbar>`. Put it in the left part of the `<ons-toolbar>`.
 *
 *     It will find the parent `<ons-navigator>` element and pop a page when clicked. This behavior can be overriden by specifying the `onClick` property.
 *   [/en]
 *   [ja][/ja]
 * @codepen aHmGL
 * @tutorial vanilla/Reference/back-button
 * @modifier material
 *   [en]Material Design style[/en]
 *   [ja][/ja]
 * @seealso ons-toolbar
 *   [en]ons-toolbar component[/en]
 *   [ja]ons-toolbarコンポーネント[/ja]
 * @seealso ons-navigator
 *   [en]ons-navigator component[/en]
 *   [ja]ons-navigatorコンポーネント[/ja]
 * @example
 * <ons-toolbar>
 *   <div class="left">
 *     <ons-back-button>Back</ons-back-button>
 *   </div>
 *   <div class="center">
 *     Title
 *   <div>
 * </ons-toolbar>
 */

var BackButtonElement = function (_BaseElement) {
  _inherits(BackButtonElement, _BaseElement);

  /**
   * @attribute modifier
   * @type {String}
   * @description
   *  [en]The appearance of the back button.[/en]
   *  [ja]バックボタンの見た目を指定します。[/ja]
   */

  function BackButtonElement() {
    _classCallCheck(this, BackButtonElement);

    var _this = _possibleConstructorReturn(this, (BackButtonElement.__proto__ || Object.getPrototypeOf(BackButtonElement)).call(this));

    (0, _contentReady2.default)(_this, function () {
      _this._compile();
    });

    _this._options = {};
    _this._boundOnClick = _this._onClick.bind(_this);
    return _this;
  }

  _createClass(BackButtonElement, [{
    key: '_updateIcon',
    value: function _updateIcon() {
      var icon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _util2.default.findChild(this, '.back-button__icon');

      icon.innerHTML = _autostyle2.default.getPlatform(this) === 'android' || _util2.default.hasModifier(this, 'material') ? mdBackButtonIcon : iosBackButtonIcon;
    }
  }, {
    key: '_compile',
    value: function _compile() {
      _autostyle2.default.prepare(this);

      this.classList.add(defaultClassName);

      if (!_util2.default.findChild(this, '.back-button__label')) {
        var label = _util2.default.create('span.back-button__label');

        while (this.childNodes[0]) {
          label.appendChild(this.childNodes[0]);
        }
        this.appendChild(label);
      }

      if (!_util2.default.findChild(this, '.back-button__icon')) {
        var icon = _util2.default.create('span.back-button__icon');
        this._updateIcon(icon);

        this.insertBefore(icon, this.children[0]);
      }

      _util2.default.updateRipple(this, undefined, { center: '', 'size': 'contain', 'background': 'transparent' });

      _modifierUtil2.default.initModifier(this, scheme);
    }

    /**
     * @property options
     * @type {Object}
     * @description
     *   [en]Options object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     */

    /**
     * @property options.animation
     * @type {String}
     * @description
     *   [en]Animation name. Available animations are "slide", "lift", "fade" and "none".
     *     These are platform based animations. For fixed animations, add "-ios" or "-md"
     *     suffix to the animation name. E.g. "lift-ios", "lift-md". Defaults values are "slide-ios" and "fade-md".
     *   [/en]
     *   [ja][/ja]
     */

    /**
     * @property options.animationOptions
     * @type {String}
     * @description
     *   [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}` [/ja]
     */

    /**
     * @property options.callback
     * @type {String}
     * @description
     *   [en]Function that is called when the transition has ended.[/en]
     *   [ja]このメソッドによる画面遷移が終了した際に呼び出される関数オブジェクトを指定します。[/ja]
     */

  }, {
    key: '_onClick',


    /**
     * @property onClick
     * @type {Function}
     * @description
     *   [en]Used to override the default back button behavior.[/en]
     *   [ja][/ja]
     */
    value: function _onClick() {
      if (this.onClick) {
        this.onClick.apply(this);
      } else {
        var navigator = _util2.default.findParent(this, 'ons-navigator');
        if (navigator) {
          navigator.popPage(this.options);
        }
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.addEventListener('click', this._boundOnClick, false);
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      switch (name) {
        case 'class':
          _util2.default.restoreClass(this, defaultClassName, scheme);
          break;

        case 'modifier':
          {
            _modifierUtil2.default.onModifierChanged(last, current, this, scheme) && this._updateIcon();
            break;
          }
      }
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.removeEventListener('click', this._boundOnClick, false);
    }
  }, {
    key: 'show',
    value: function show() {
      this.style.display = 'inline-block';
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.style.display = 'none';
    }
  }, {
    key: 'options',
    get: function get() {
      return this._options;
    },
    set: function set(object) {
      this._options = object;
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['modifier', 'class'];
    }
  }]);

  return BackButtonElement;
}(_baseElement2.default);

exports.default = BackButtonElement;


_elements2.default.BackButton = BackButtonElement;
customElements.define('ons-back-button', BackButtonElement);