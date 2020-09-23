'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

var _animatorFactory = require('../ons/internal/animator-factory');

var _animatorFactory2 = _interopRequireDefault(_animatorFactory);

var _orientation = require('../ons/orientation');

var _orientation2 = _interopRequireDefault(_orientation);

var _internal = require('../ons/internal');

var _internal2 = _interopRequireDefault(_internal);

var _modifierUtil = require('../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

var _baseElement = require('./base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _animator = require('./ons-splitter/animator');

var _animator2 = _interopRequireDefault(_animator);

var _swipeReveal = require('../ons/internal/swipe-reveal');

var _swipeReveal2 = _interopRequireDefault(_swipeReveal);

var _doorlock = require('../ons/doorlock');

var _doorlock2 = _interopRequireDefault(_doorlock);

var _contentReady = require('../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

var _pageLoader = require('../ons/page-loader');

var _onsSplitter = require('./ons-splitter');

var _onsSplitter2 = _interopRequireDefault(_onsSplitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SPLIT_MODE = 'split';
var COLLAPSE_MODE = 'collapse';
var CLOSED_STATE = 'closed';
var OPEN_STATE = 'open';
var CHANGING_STATE = 'changing';

var rewritables = {
  /**
   * @param {Element} splitterSideElement
   * @param {Function} callback
   */
  ready: function ready(splitterSideElement, callback) {
    setImmediate(callback);
  }
};

var CollapseDetection = function () {
  function CollapseDetection(element, target) {
    _classCallCheck(this, CollapseDetection);

    this._element = element;
    this._onChange = this._onChange.bind(this);
    target && this.changeTarget(target);
  }

  _createClass(CollapseDetection, [{
    key: 'changeTarget',
    value: function changeTarget(target) {
      this.disable();
      this._target = target;
      if (target) {
        this._orientation = ['portrait', 'landscape'].indexOf(target) !== -1;
        this.activate();
      }
    }
  }, {
    key: '_match',
    value: function _match(value) {
      if (this._orientation) {
        return this._target === (value.isPortrait ? 'portrait' : 'landscape');
      }
      return value.matches;
    }
  }, {
    key: '_onChange',
    value: function _onChange(value) {
      this._element._updateMode(this._match(value) ? COLLAPSE_MODE : SPLIT_MODE);
    }
  }, {
    key: 'activate',
    value: function activate() {
      if (this._orientation) {
        _orientation2.default.on('change', this._onChange);
        this._onChange({ isPortrait: _orientation2.default.isPortrait() });
      } else {
        this._queryResult = window.matchMedia(this._target);
        this._queryResult.addListener(this._onChange);
        this._onChange(this._queryResult);
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      if (this._orientation) {
        _orientation2.default.off('change', this._onChange);
      } else if (this._queryResult) {
        this._queryResult.removeListener(this._onChange);
        this._queryResult = null;
      }
    }
  }]);

  return CollapseDetection;
}();

var widthToPx = function widthToPx(width, parent) {
  var _ref = [parseInt(width, 10), /px/.test(width)],
      value = _ref[0],
      px = _ref[1];

  return px ? value : Math.round(parent.offsetWidth * value / 100);
};

/**
 * @element ons-splitter-side
 * @category menu
 * @description
 *  [en]
 *    The `<ons-splitter-side>` element is used as a child element of `<ons-splitter>`.
 *
 *    It will be displayed on either the left or right side of the `<ons-splitter-content>` element.
 *
 *    It supports two modes: collapsed and split. When it's in collapsed mode it will be hidden from view and can be displayed when the user swipes the screen or taps a button. In split mode the element is always shown. It can be configured to automatically switch between the two modes depending on the screen size.
 *  [/en]
 *  [ja]ons-splitter-side要素は、ons-splitter要素の子要素として利用します。[/ja]
 * @codepen rOQOML
 * @tutorial vanilla/Reference/splitter
 * @guide fundamentals.html#managing-pages
 *  [en]Managing multiple pages.[/en]
 *  [ja]複数のページを管理する[/ja]
 * @seealso ons-splitter
 *  [en]The `<ons-splitter>` is the parent component.[/en]
 *  [ja]ons-splitterコンポーネント[/ja]
 * @seealso ons-splitter-content
 *  [en]The `<ons-splitter-content>` component contains the main content of the page.[/en]
 *  [ja]ons-splitter-contentコンポーネント[/ja]
 * @example
 * <ons-splitter>
 *   <ons-splitter-content>
 *     ...
 *   </ons-splitter-content>
 *
 *   <ons-splitter-side side="left" width="80%" collapse>
 *     ...
 *   </ons-splitter-side>
 * </ons-splitter>
 */

var SplitterSideElement = function (_BaseElement) {
  _inherits(SplitterSideElement, _BaseElement);

  /**
   * @event modechange
   * @description
   *   [en]Fired just after the component's mode changes.[/en]
   *   [ja]この要素のモードが変化した際に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Object} event.side
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {String} event.mode
   *   [en]Returns the current mode. Can be either `"collapse"` or `"split"`.[/en]
   *   [ja]現在のモードを返します。[/ja]
   */

  /**
   * @event preopen
   * @description
   *   [en]Fired just before the sliding menu is opened.[/en]
   *   [ja]スライディングメニューが開く前に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Function} event.cancel
   *   [en]Call to cancel opening sliding menu.[/en]
   *   [ja]スライディングメニューが開くのをキャンセルします。[/ja]
   * @param {Object} event.side
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */

  /**
   * @event postopen
   * @description
   *   [en]Fired just after the sliding menu is opened.[/en]
   *   [ja]スライディングメニューが開いた後に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Object} event.side
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */

  /**
   * @event preclose
   * @description
   *   [en]Fired just before the sliding menu is closed.[/en]
   *   [ja]スライディングメニューが閉じる前に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Object} event.side
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Call to cancel opening sliding-menu.[/en]
   *   [ja]スライディングメニューが閉じるのをキャンセルします。[/ja]
   */

  /**
   * @event postclose
   * @description
   *   [en]Fired just after the sliding menu is closed.[/en]
   *   [ja]スライディングメニューが閉じた後に発火します。[/ja]
   * @param {Object} event
   *   [en]Event object.[/en]
   *   [ja]イベントオブジェクトです。[/ja]
   * @param {Object} event.side
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */

  /**
   * @attribute animation
   * @type {String}
   * @default  default
   * @description
   *  [en]Specify the animation. Use one of `overlay`, `push`, `reveal` or  `default`.[/en]
   *  [ja]アニメーションを指定します。"overlay", "push", "reveal", "default"のいずれかを指定できます。[/ja]
   */

  /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. {duration: 0.2, delay: 1, timing: 'ease-in'}[/ja]
   */

  /**
   * @attribute open-threshold
   * @type {Number}
   * @default  0.3
   * @description
   *  [en]Specify how much the menu needs to be swiped before opening. A value between `0` and `1`.[/en]
   *  [ja]どのくらいスワイプすればスライディングメニューを開くかどうかの割合を指定します。0から1の間の数値を指定します。スワイプの距離がここで指定した数値掛けるこの要素の幅よりも大きければ、スワイプが終わった時にこの要素を開きます。デフォルトは0.3です。[/ja]
   */

  /**
   * @attribute collapse
   * @type {String}
   * @description
   *   [en]
   *     Specify the collapse behavior. Valid values are `"portrait"`, `"landscape"` or a media query.
   *     The strings `"portrait"` and `"landscape"` means the view will collapse when device is in landscape or portrait orientation.
   *     If the value is a media query, the view will collapse when the media query resolves to `true`.
   *     If the value is not defined, the view always be in `"collapse"` mode.
   *   [/en]
   *   [ja]
   *     左側のページを非表示にする条件を指定します。portrait, landscape、width #pxもしくはメディアクエリの指定が可能です。
   *     portraitもしくはlandscapeを指定すると、デバイスの画面が縦向きもしくは横向きになった時に適用されます。
   *     メディアクエリを指定すると、指定したクエリに適合している場合に適用されます。
   *     値に何も指定しない場合には、常にcollapseモードになります。
   *   [/ja]
   */

  /**
   * @attribute swipe-target-width
   * @type {String}
   * @description
   *   [en]The width of swipeable area calculated from the edge (in pixels). Use this to enable swipe only when the finger touch on the screen edge.[/en]
   *   [ja]スワイプの判定領域をピクセル単位で指定します。画面の端から指定した距離に達するとページが表示されます。[/ja]
   */

  /**
   * @attribute width
   * @type {String}
   * @description
   *   [en]Can be specified in either pixels or as a percentage, e.g. `90%` or `200px`.[/en]
   *   [ja]この要素の横幅を指定します。pxと%での指定が可能です。eg. 90%, 200px[/ja]
   */

  /**
   * @attribute side
   * @type {String}
   * @default left
   * @description
   *   [en]Specify which side of the screen the `<ons-splitter-side>` element is located. Possible values are `"left"` and `"right"`.[/en]
   *   [ja]この要素が左か右かを指定します。指定できる値は"left"か"right"のみです。[/ja]
   */

  /**
   * @attribute mode
   * @type {String}
   * @description
   *   [en]Current mode. Possible values are `"collapse"` or `"split"`. This attribute is read only.[/en]
   *   [ja]現在のモードが設定されます。"collapse"もしくは"split"が指定されます。この属性は読み込み専用です。[/ja]
   */

  /**
   * @attribute page
   * @initonly
   * @type {String}
   * @description
   *   [en]The URL of the menu page.[/en]
   *   [ja]ons-splitter-side要素に表示するページのURLを指定します。[/ja]
   */

  /**
   * @attribute swipeable
   * @type {Boolean}
   * @description
   *   [en]Whether to enable swipe interaction on collapse mode.[/en]
   *   [ja]collapseモード時にスワイプ操作を有効にする場合に指定します。[/ja]
   */

  function SplitterSideElement() {
    _classCallCheck(this, SplitterSideElement);

    var _this = _possibleConstructorReturn(this, (SplitterSideElement.__proto__ || Object.getPrototypeOf(SplitterSideElement)).call(this));

    _this._page = null;
    _this._state = CLOSED_STATE;
    _this._lock = new _doorlock2.default();
    _this._pageLoader = _pageLoader.defaultPageLoader;
    _this._collapseDetection = new CollapseDetection(_this);

    _this._animatorFactory = new _animatorFactory2.default({
      animators: _onsSplitter2.default.animators,
      baseClass: _animator2.default,
      baseClassName: 'SplitterAnimator',
      defaultAnimation: _this.getAttribute('animation')
    });

    (0, _contentReady2.default)(_this, function () {
      // These attributes are used early by the parent element
      _this.attributeChangedCallback('width');
      if (!_this.hasAttribute('side')) {
        _this.setAttribute('side', 'left');
      }

      rewritables.ready(_this, function () {
        var page = _this._page || _this.getAttribute('page');
        page && _this.load(page);
      });
    });
    return _this;
  }

  _createClass(SplitterSideElement, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      if (!_util2.default.match(this.parentNode, 'ons-splitter')) {
        _util2.default.throw('Parent must be an ons-splitter element');
      }

      this._swipe = new _swipeReveal2.default({
        element: this,
        elementHandler: this.parentElement,
        swipeMax: function swipeMax() {
          _this2._onSwipe && _this2._onSwipe(1, _this2._animationOpt);
          _this2.open();
        },
        swipeMid: function swipeMid(distance, width) {
          _this2._onSwipe && _this2._onSwipe(distance / width);
          _this2._animator.translate(distance);
        },
        swipeMin: function swipeMin() {
          _this2._onSwipe && _this2._onSwipe(0, _this2._animationOpt);
          _this2.close();
        },
        getThreshold: function getThreshold() {
          return Math.max(0, Math.min(1, parseFloat(_this2.getAttribute('open-threshold')) || 0.3));
        },
        getSide: function getSide() {
          return _this2.side;
        },
        isInitialState: function isInitialState() {
          var closed = _this2._state === CLOSED_STATE;
          _this2._state = CHANGING_STATE;
          return closed;
        },
        ignoreSwipe: function ignoreSwipe(event, distance) {
          var isOpen = _this2.isOpen;
          var validDrag = function validDrag(d) {
            return _this2.side === 'left' ? d === 'left' && isOpen || d === 'right' && !isOpen : d === 'left' && !isOpen || d === 'right' && isOpen;
          };

          var area = Math.max(0, parseInt(_this2.getAttribute('swipe-target-width'), 10) || 0);

          return _this2._mode === SPLIT_MODE || _this2._lock.isLocked() || _this2._isOtherSideOpen() || !validDrag(event.gesture.direction) || !isOpen && area !== 0 && distance > area;
        }
      });

      this.attributeChangedCallback('swipeable');

      (0, _contentReady2.default)(this, function () {
        _this2.constructor.observedAttributes.forEach(function (attr) {
          return _this2.attributeChangedCallback(attr, null, _this2.getAttribute(attr));
        });
      });
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this._swipe && this._swipe.dispose();
      this._animator = this._animationOpt = this._swipe = null;
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      switch (name) {
        case 'swipeable':
          this._swipe && this._swipe.update();
          break;
        case 'width':
          current = this.getAttribute('width'); // Sometimes undefined. CE bug?
          this.style.width = /^\d+(px|%)$/.test(current) ? current : '80%';
          break;
        default:
          this[_util2.default.camelize('_update-' + name)](current);
      }
    }
  }, {
    key: '_emitEvent',
    value: function _emitEvent(name) {
      if (name.slice(0, 3) !== 'pre') {
        return _util2.default.triggerElementEvent(this, name, { side: this });
      }
      var isCanceled = false;

      _util2.default.triggerElementEvent(this, name, {
        side: this,
        cancel: function cancel() {
          return isCanceled = true;
        }
      });

      return isCanceled;
    }
  }, {
    key: '_isOtherSideOpen',
    value: function _isOtherSideOpen() {
      var _this3 = this;

      return !!_util2.default.findChild(this.parentElement, function (el) {
        return el instanceof _this3.constructor && el !== _this3 && el._mode === COLLAPSE_MODE && el.isOpen;
      });
    }
  }, {
    key: '_updateCollapse',
    value: function _updateCollapse() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getAttribute('collapse');

      if (value === null || value === 'split') {
        this._collapseDetection.disable();
        return this._updateMode(SPLIT_MODE);
      }
      if (value === '' || value === 'collapse') {
        this._collapseDetection.disable();
        return this._updateMode(COLLAPSE_MODE);
      }

      this._collapseDetection.changeTarget(value);
    }
  }, {
    key: '_updateMode',
    value: function _updateMode(mode) {
      if (mode !== this._mode) {
        this._mode = mode;
        this.setAttribute('mode', mode); // readonly attribute for the users

        if (mode === SPLIT_MODE) {
          this._animator && this._animator.deactivate();
          this._state = CLOSED_STATE;
        } else {
          this._animator && this._animator.activate(this);
          this._state === OPEN_STATE && this._animator.open();
        }

        _util2.default.triggerElementEvent(this, 'modechange', { side: this, mode: mode });
      }
    }
  }, {
    key: '_updateAnimation',
    value: function _updateAnimation() {
      var animation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getAttribute('animation');

      if (this.parentNode) {
        this._animator && this._animator.deactivate();
        this._animator = this._animatorFactory.newAnimator({ animation: animation });
        this._animator.activate(this);
        this._animationOpt = {
          timing: this._animator.duration,
          duration: this._animator.duration
        };
      }
    }
  }, {
    key: '_updateAnimationOptions',
    value: function _updateAnimationOptions() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getAttribute('animation-options');

      this._animator.updateOptions(_animatorFactory2.default.parseAnimationOptionsString(value));
    }

    /**
     * @property page
     * @type {*}
     * @description
     *   [en]Page location to load in the splitter side.[/en]
     *   [ja]この要素内に表示するページを指定します。[/ja]
     */

  }, {
    key: 'open',


    /**
     * @method open
     * @signature open([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {Function} [options.callback]
     *   [en]This function will be called after the menu has been opened.[/en]
     *   [ja]メニューが開いた後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Open menu in collapse mode.[/en]
     *   [ja]collapseモードになっているons-splitter-side要素を開きます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the splitter side element or false if not in collapse mode[/en]
     *   [ja][/ja]
     */
    value: function open(options) {
      return this.toggle(options, true);
    }

    /**
     * @method close
     * @signature close([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {Function} [options.callback]
     *   [en]This function will be called after the menu has been closed.[/en]
     *   [ja]メニューが閉じた後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Close menu in collapse mode.[/en]
     *   [ja]collapseモードになっているons-splitter-side要素を閉じます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the splitter side element or false if not in collapse mode[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'close',
    value: function close(options) {
      return this.toggle(options, false);
    }

    /**
     * @method toggle
     * @signature toggle([options])
     * @param {Object} [options]
     * @description
     *   [en]Opens if it's closed. Closes if it's open.[/en]
     *   [ja]開けている場合は要素を閉じますそして開けている場合は要素を開きます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the splitter side element or false if not in collapse mode[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'toggle',
    value: function toggle() {
      var _this4 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var force = arguments[1];

      var shouldOpen = typeof force === 'boolean' ? force : !this.isOpen;
      var action = shouldOpen ? 'open' : 'close';
      var FINAL_STATE = shouldOpen ? OPEN_STATE : CLOSED_STATE;

      if (this._mode === SPLIT_MODE) {
        return Promise.resolve(false);
      }
      if (this._state === FINAL_STATE) {
        return Promise.resolve(this);
      }
      if (this._lock.isLocked()) {
        return Promise.reject('Another splitter-side action is already running.');
      }
      if (shouldOpen && this._isOtherSideOpen()) {
        return Promise.reject('Another menu is already open.');
      }
      if (this._emitEvent('pre' + action)) {
        return Promise.reject('Canceled in pre' + action + ' event.');
      }

      var unlock = this._lock.lock();
      this._state = CHANGING_STATE;

      if (options.animation) {
        this._updateAnimation(options.animation);
      }

      return new Promise(function (resolve) {
        _this4._animator[action](function () {
          _util2.default.iosPageScrollFix(shouldOpen);
          _this4._state = FINAL_STATE;
          unlock();
          _this4._emitEvent('post' + action);
          options.callback instanceof Function && options.callback(_this4);
          resolve(_this4);
        });
      });
    }

    /**
     * @method load
     * @signature load(page, [options])
     * @param {String} page
     *   [en]Page URL. Can be either an HTML document or a `<template>`.[/en]
     *   [ja]pageのURLか、`<template>`で宣言したテンプレートのid属性の値を指定します。[/ja]
     * @param {Object} [options]
     * @param {Function} [options.callback]
     * @description
     *   [en]Show the page specified in pageUrl in the right section[/en]
     *   [ja]指定したURLをメインページを読み込みます。[/ja]
     * @return {Promise}
     *   [en]Resolves to the new page element[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'load',
    value: function load(page) {
      var _this5 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._page = page;
      var callback = options.callback || function () {};

      return new Promise(function (resolve) {
        var oldContent = _this5._content || null;

        _this5._pageLoader.load({ page: page, parent: _this5 }, function (pageElement) {
          if (oldContent) {
            _this5._pageLoader.unload(oldContent);
            oldContent = null;
          }

          setImmediate(function () {
            return _this5._show();
          });

          callback(pageElement);
          resolve(pageElement);
        });
      });
    }
  }, {
    key: '_show',
    value: function _show() {
      if (this._content) {
        this._content._show();
      }
    }
  }, {
    key: '_hide',
    value: function _hide() {
      if (this._content) {
        this._content._hide();
      }
    }
  }, {
    key: '_destroy',
    value: function _destroy() {
      if (this._content) {
        this._pageLoader.unload(this._content);
      }
      this.remove();
    }
  }, {
    key: 'side',
    get: function get() {
      return this.getAttribute('side') === 'right' ? 'right' : 'left';
    }
  }, {
    key: 'page',
    get: function get() {
      return this._page;
    }

    /**
     * @param {*} page
     */
    ,
    set: function set(page) {
      this._page = page;
    }
  }, {
    key: '_content',
    get: function get() {
      return this.children[0];
    }

    /**
     * @property pageLoader
     * @description
     *   [en][/en]
     *   [ja][/ja]
     */

  }, {
    key: 'pageLoader',
    get: function get() {
      return this._pageLoader;
    },
    set: function set(loader) {
      if (!(loader instanceof _pageLoader.PageLoader)) {
        _util2.default.throwPageLoader();
      }
      this._pageLoader = loader;
    }

    /**
     * @property mode
     * @readonly
     * @type {String}
     * @description
     *   [en]Current mode. Possible values are "split", "collapse", "closed", "open" or "changing".[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'mode',
    get: function get() {
      return this._mode;
    }

    /**
     * @property onSwipe
     * @type {Function}
     * @description
     *   [en]Hook called whenever the user slides the splitter. It gets a decimal ratio (0-1) and an animationOptions object as arguments.[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'onSwipe',
    get: function get() {
      return this._onSwipe;
    },
    set: function set(value) {
      if (value && !(value instanceof Function)) {
        _util2.default.throw('"onSwipe" must be a function');
      }
      this._onSwipe = value;
    }

    /**
     * @property isOpen
     * @type {Boolean}
     * @readonly
     * @description
     *   [en]This value is `true` when the menu is open.[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'isOpen',
    get: function get() {
      return this._mode === COLLAPSE_MODE && this._state !== CLOSED_STATE;
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['animation', 'width', 'collapse', 'swipeable', 'animation-options'];
    }
  }, {
    key: 'events',
    get: function get() {
      return ['preopen', 'postopen', 'preclose', 'postclose', 'modechange'];
    }
  }, {
    key: 'rewritables',
    get: function get() {
      return rewritables;
    }
  }]);

  return SplitterSideElement;
}(_baseElement2.default);

exports.default = SplitterSideElement;


_elements2.default.SplitterSide = SplitterSideElement;
customElements.define('ons-splitter-side', SplitterSideElement);