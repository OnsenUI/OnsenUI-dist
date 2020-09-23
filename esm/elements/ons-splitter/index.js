'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _modifierUtil = require('../../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

var _animatorFactory = require('../../ons/internal/animator-factory');

var _animatorFactory2 = _interopRequireDefault(_animatorFactory);

var _overlayAnimator = require('./overlay-animator');

var _overlayAnimator2 = _interopRequireDefault(_overlayAnimator);

var _pushAnimator = require('./push-animator');

var _pushAnimator2 = _interopRequireDefault(_pushAnimator);

var _revealAnimator = require('./reveal-animator');

var _revealAnimator2 = _interopRequireDefault(_revealAnimator);

var _baseElement = require('../base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _deviceBackButtonDispatcher = require('../../ons/internal/device-back-button-dispatcher');

var _deviceBackButtonDispatcher2 = _interopRequireDefault(_deviceBackButtonDispatcher);

var _contentReady = require('../../ons/content-ready');

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

var _animatorDict = {
  default: _overlayAnimator2.default,
  overlay: _overlayAnimator2.default,
  push: _pushAnimator2.default,
  reveal: _revealAnimator2.default
};

/**
 * @element ons-splitter
 * @category menu
 * @description
 *  [en]
 *    A component that enables responsive layout by implementing both a two-column layout and a sliding menu layout.
 *
 *    It can be configured to automatically expand into a column layout on large screens and collapse the menu on smaller screens. When the menu is collapsed the user can open it by swiping.
 *  [/en]
 *  [ja][/ja]
 * @codepen rOQOML
 * @tutorial vanilla/Reference/splitter
 * @guide fundamentals.html#managing-pages
 *  [en]Managing multiple pages.[/en]
 *  [ja]複数のページを管理する[/ja]
 * @seealso ons-splitter-content
 *  [en]The `<ons-splitter-content>` component contains the main content of the page.[/en]
 *  [ja]ons-splitter-contentコンポーネント[/ja]
 * @seealso ons-splitter-side
 *  [en]The `<ons-splitter-side>` component contains the menu.[/en]
 *  [ja]ons-splitter-sideコンポーネント[/ja]
 * @example
 * <ons-splitter id="splitter">
 *   <ons-splitter-content>
 *     ...
 *   </ons-splitter-content>
 *
 *   <ons-splitter-side side="left" width="80%" collapse swipeable>
 *     ...
 *   </ons-splitter-side>
 * </ons-splitter>
 *
 * <script>
 *   var splitter = document.getElementById('splitter');
 *   splitter.left.open();
 * </script>
 */

var SplitterElement = function (_BaseElement) {
  _inherits(SplitterElement, _BaseElement);

  _createClass(SplitterElement, [{
    key: '_getSide',
    value: function _getSide(side) {
      var element = _util2.default.findChild(this, function (e) {
        return _util2.default.match(e, 'ons-splitter-side') && e.getAttribute('side') === side;
      });
      return element;
    }

    /**
     * @property left
     * @readonly
     * @type {HTMLElement}
     * @description
     *   [en]Left `<ons-splitter-side>` element.[/en]
     *   [ja][/ja]
     */

  }, {
    key: '_onDeviceBackButton',
    value: function _onDeviceBackButton(event) {
      this._sides.some(function (s) {
        return s.isOpen ? s.close() : false;
      }) || event.callParentHandler();
    }
  }, {
    key: '_onModeChange',
    value: function _onModeChange(e) {
      var _this2 = this;

      if (e.target.parentNode) {
        (0, _contentReady2.default)(this, function () {
          _this2._layout();
        });
      }
    }
  }, {
    key: '_layout',
    value: function _layout() {
      var _this3 = this;

      this._sides.forEach(function (side) {
        if (_this3.content) {
          _this3.content.style[side.side] = side.mode === 'split' ? side.style.width : 0;
        }
      });
    }
  }, {
    key: 'left',
    get: function get() {
      return this._getSide('left');
    }
    /**
     * @property right
     * @readonly
     * @type {HTMLElement}
     * @description
     *   [en]Right `<ons-splitter-side>` element.[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'right',
    get: function get() {
      return this._getSide('right');
    }

    /**
     * @property side
     * @readonly
     * @type {HTMLElement}
     * @description
     *   [en]First `<ons-splitter-side>` element regardless the actual side.[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'side',
    get: function get() {
      return _util2.default.findChild(this, 'ons-splitter-side');
    }
  }, {
    key: '_sides',
    get: function get() {
      return [this.left, this.right].filter(function (e) {
        return e;
      });
    }
    /**
     * @property content
     * @readonly
     * @type {HTMLElement}
     * @description
     *   [en]The `<ons-splitter-content>` element.[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'content',
    get: function get() {
      return _util2.default.findChild(this, 'ons-splitter-content');
    }
  }, {
    key: 'topPage',
    get: function get() {
      return this.content._content;
    }
  }, {
    key: 'mask',
    get: function get() {
      return _util2.default.findChild(this, 'ons-splitter-mask');
    }

    /**
     * @property onDeviceBackButton
     * @type {Object}
     * @description
     *   [en]Back-button handler.[/en]
     *   [ja]バックボタンハンドラ。[/ja]
     */

  }, {
    key: 'onDeviceBackButton',
    get: function get() {
      return this._backButtonHandler;
    },
    set: function set(callback) {
      if (this._backButtonHandler) {
        this._backButtonHandler.destroy();
      }

      this._backButtonHandler = _deviceBackButtonDispatcher2.default.createHandler(this, callback);
    }
  }]);

  function SplitterElement() {
    _classCallCheck(this, SplitterElement);

    var _this = _possibleConstructorReturn(this, (SplitterElement.__proto__ || Object.getPrototypeOf(SplitterElement)).call(this));

    _this._onModeChange = _this._onModeChange.bind(_this);

    (0, _contentReady2.default)(_this, function () {
      !_this.mask && _this.appendChild(document.createElement('ons-splitter-mask'));
      _this._layout();
    });
    return _this;
  }

  _createClass(SplitterElement, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.onDeviceBackButton = this._onDeviceBackButton.bind(this);
      this.addEventListener('modechange', this._onModeChange, false);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this._backButtonHandler.destroy();
      this._backButtonHandler = null;
      this.removeEventListener('modechange', this._onModeChange, false);
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {}
  }, {
    key: '_show',
    value: function _show() {
      _util2.default.propagateAction(this, '_show');
    }
  }, {
    key: '_hide',
    value: function _hide() {
      _util2.default.propagateAction(this, '_hide');
    }
  }, {
    key: '_destroy',
    value: function _destroy() {
      _util2.default.propagateAction(this, '_destroy');
      this.remove();
    }
  }], [{
    key: 'registerAnimator',
    value: function registerAnimator(name, Animator) {
      if (!(Animator instanceof SplitterAnimator)) {
        _util2.default.throwAnimator('Splitter');
      }
      _animatorDict[name] = Animator;
    }
  }, {
    key: 'SplitterAnimator',
    get: function get() {
      return SplitterAnimator;
    }
  }, {
    key: 'animators',
    get: function get() {
      return _animatorDict;
    }
  }]);

  return SplitterElement;
}(_baseElement2.default);

exports.default = SplitterElement;


_elements2.default.Splitter = SplitterElement;
customElements.define('ons-splitter', SplitterElement);