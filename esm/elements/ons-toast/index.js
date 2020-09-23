'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _autostyle = require('../../ons/autostyle');

var _autostyle2 = _interopRequireDefault(_autostyle);

var _modifierUtil = require('../../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

var _animatorFactory = require('../../ons/internal/animator-factory');

var _animatorFactory2 = _interopRequireDefault(_animatorFactory);

var _animator = require('./animator');

var _animator2 = _interopRequireDefault(_animator);

var _fadeAnimator = require('./fade-animator');

var _fadeAnimator2 = _interopRequireDefault(_fadeAnimator);

var _ascendAnimator = require('./ascend-animator');

var _ascendAnimator2 = _interopRequireDefault(_ascendAnimator);

var _liftAnimator = require('./lift-animator');

var _liftAnimator2 = _interopRequireDefault(_liftAnimator);

var _fallAnimator = require('./fall-animator');

var _fallAnimator2 = _interopRequireDefault(_fallAnimator);

var _platform = require('../../ons/platform');

var _platform2 = _interopRequireDefault(_platform);

var _baseDialog = require('../base/base-dialog');

var _baseDialog2 = _interopRequireDefault(_baseDialog);

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

var scheme = {
  '.toast': 'toast--*',
  '.toast__message': 'toast--*__message',
  '.toast__button': 'toast--*__button'
};

var defaultClassName = 'toast';

var _animatorDict = {
  'default': _platform2.default.isAndroid() ? _ascendAnimator2.default : _liftAnimator2.default,
  'fade': _fadeAnimator2.default,
  'ascend': _ascendAnimator2.default,
  'lift': _liftAnimator2.default,
  'fall': _fallAnimator2.default,
  'none': _animator2.default
};

/**
 * @element ons-toast
 * @category dialog
 * @description
 *   [en]
 *     The Toast or Snackbar component is useful for displaying dismissable information or simple actions at (normally) the bottom of the page.
 *
 *     This component does not block user input, allowing the app to continue its flow. For simple toasts, consider `ons.notification.toast` instead.
 *   [/en]
 *   [ja][/ja]
 * @tutorial vanilla/Reference/toast
 * @seealso ons-alert-dialog
 *   [en]The `<ons-alert-dialog>` component is preferred for displaying undismissable information.[/en]
 *   [ja][/ja]
 */

var ToastElement = function (_BaseDialogElement) {
  _inherits(ToastElement, _BaseDialogElement);

  /**
   * @attribute animation
   * @type {String}
   * @default default
   * @description
   *  [en]The animation used when showing and hiding the toast. Can be either `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
   *  [ja][/ja]
   */

  /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. <code>{duration: 0.2, delay: 1, timing: 'ease-in'}</code>[/ja]
   */

  function ToastElement() {
    _classCallCheck(this, ToastElement);

    var _this = _possibleConstructorReturn(this, (ToastElement.__proto__ || Object.getPrototypeOf(ToastElement)).call(this));

    _this._defaultDBB = null;
    (0, _contentReady2.default)(_this, function () {
      return _this._compile();
    });
    return _this;
  }

  _createClass(ToastElement, [{
    key: '_updateAnimatorFactory',
    value: function _updateAnimatorFactory() {
      // Reset position style
      this._toast && (this._toast.style.top = this._toast.style.bottom = '');

      return new _animatorFactory2.default({
        animators: _animatorDict,
        baseClass: _animator2.default,
        baseClassName: 'ToastAnimator',
        defaultAnimation: this.getAttribute('animation')
      });
    }

    /**
     * @property onDeviceBackButton
     * @type {Object}
     * @description
     *   [en]Back-button handler.[/en]
     *   [ja]バックボタンハンドラ。[/ja]
     */

  }, {
    key: '_compile',
    value: function _compile() {
      _autostyle2.default.prepare(this);

      this.style.display = 'none';
      this.style.zIndex = 10000; // Lower than dialogs

      var messageClassName = 'toast__message';
      var buttonClassName = 'toast__button';

      var toast = _util2.default.findChild(this, '.' + defaultClassName);
      if (!toast) {
        toast = document.createElement('div');
        toast.classList.add(defaultClassName);
        while (this.childNodes[0]) {
          toast.appendChild(this.childNodes[0]);
        }
      }

      var button = _util2.default.findChild(toast, '.' + buttonClassName);
      if (!button) {
        button = _util2.default.findChild(toast, function (e) {
          return _util2.default.match(e, '.button') || _util2.default.match(e, 'button');
        });
        if (button) {
          button.classList.remove('button');
          button.classList.add(buttonClassName);
          toast.appendChild(button);
        }
      }

      if (!_util2.default.findChild(toast, '.' + messageClassName)) {
        var message = _util2.default.findChild(toast, '.message');
        if (!message) {
          message = document.createElement('div');
          for (var i = toast.childNodes.length - 1; i >= 0; i--) {
            if (toast.childNodes[i] !== button) {
              message.insertBefore(toast.childNodes[i], message.firstChild);
            }
          }
        }
        message.classList.add(messageClassName);

        toast.insertBefore(message, toast.firstChild);
      }

      if (toast.parentNode !== this) {
        this.appendChild(toast);
      }

      _modifierUtil2.default.initModifier(this, this._scheme);
    }

    /**
     * @property visible
     * @readonly
     * @type {Boolean}
     * @description
     *   [en]Whether the element is visible or not.[/en]
     *   [ja]要素が見える場合に`true`。[/ja]
     */

    /**
     * @method show
     * @signature show([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
     *   [ja][/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @description
     *   [en]Show the element.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the displayed element[/en]
     *   [ja][/ja]
     */

    /**
     * @method toggle
     * @signature toggle([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
     *   [ja][/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @description
     *   [en]Toggle toast visibility.[/en]
     *   [ja][/ja]
     */

    /**
     * @method hide
     * @signature hide([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
     *   [ja][/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @description
     *   [en]Hide toast.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Resolves to the hidden element[/en]
     *   [ja][/ja]
     */

    /**
     * @param {String} name
     * @param {Function} Animator
     */

  }, {
    key: '_scheme',
    get: function get() {
      return scheme;
    }
  }, {
    key: '_toast',
    get: function get() {
      return _util2.default.findChild(this, '.' + defaultClassName);
    }
  }], [{
    key: 'registerAnimator',
    value: function registerAnimator(name, Animator) {
      if (!(Animator.prototype instanceof _animator2.default)) {
        _util2.default.throw('"Animator" param must inherit OnsToastElement.ToastAnimator');
      }
      _animatorDict[name] = Animator;
    }
  }, {
    key: 'animators',
    get: function get() {
      return _animatorDict;
    }
  }, {
    key: 'ToastAnimator',
    get: function get() {
      return _animator2.default;
    }
  }]);

  return ToastElement;
}(_baseDialog2.default);

exports.default = ToastElement;


_elements2.default.Toast = ToastElement;
customElements.define('ons-toast', ToastElement);