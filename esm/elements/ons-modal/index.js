'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _elements = require('../../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _modifierUtil = require('../../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

var _animatorFactory = require('../../ons/internal/animator-factory');

var _animatorFactory2 = _interopRequireDefault(_animatorFactory);

var _animator = require('./animator');

var _animator2 = _interopRequireDefault(_animator);

var _fadeAnimator = require('./fade-animator');

var _fadeAnimator2 = _interopRequireDefault(_fadeAnimator);

var _liftAnimator = require('./lift-animator');

var _liftAnimator2 = _interopRequireDefault(_liftAnimator);

var _platform = require('../../ons/platform');

var _platform2 = _interopRequireDefault(_platform);

var _baseDialog = require('../base/base-dialog');

var _baseDialog2 = _interopRequireDefault(_baseDialog);

var _contentReady = require('../../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

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
  '': 'modal--*',
  'modal__content': 'modal--*__content'
};

var defaultClassName = 'modal';

var _animatorDict = {
  'default': _animator2.default,
  'fade': _fadeAnimator2.default,
  'lift': _liftAnimator2.default,
  'none': _animator2.default
};

/**
 * @element ons-modal
 * @category dialog
 * @description
 *   [en]
 *     Modal component that masks current screen. Underlying components are not subject to any events while the modal component is shown.
 *
 *     This component can be used to block user input while some operation is running or to show some information to the user.
 *   [/en]
 *   [ja]
 *     画面全体をマスクするモーダル用コンポーネントです。下側にあるコンポーネントは、
 *     モーダルが表示されている間はイベント通知が行われません。
 *   [/ja]
 * @seealso ons-dialog
 *   [en]The `<ons-dialog>` component can be used to create a modal dialog.[/en]
 *   [ja][/ja]
 * @codepen devIg
 * @tutorial vanilla/reference/modal
 * @example
 * <ons-modal id="modal">
 *   Modal content
 * </ons-modal>
 * <script>
 *   var modal = document.getElementById('modal');
 *   modal.show();
 * </script>
 */

var ModalElement = function (_BaseDialogElement) {
  _inherits(ModalElement, _BaseDialogElement);

  /**
   * @event preshow
   * @description
   * [en]Fired just before the modal is displayed.[/en]
   * [ja]モーダルが表示される直前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.modal
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Execute this function to stop the modal from being shown.[/en]
   *   [ja]この関数を実行すると、ダイアログの表示がキャンセルされます。[/ja]
   */

  /**
   * @event postshow
   * @description
   * [en]Fired just after the modal is displayed.[/en]
   * [ja]モーダルが表示された直後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.modal
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */

  /**
   * @event prehide
   * @description
   * [en]Fired just before the modal is hidden.[/en]
   * [ja]モーダルが隠れる直前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.modal
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   * @param {Function} event.cancel
   *   [en]Execute this function to stop the modal from being hidden.[/en]
   *   [ja]この関数を実行すると、ダイアログの非表示がキャンセルされます。[/ja]
   */

  /**
   * @event posthide
   * @description
   * [en]Fired just after the modal is hidden.[/en]
   * [ja]モーダルが隠れた後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   * @param {Object} event.modal
   *   [en]Component object.[/en]
   *   [ja]コンポーネントのオブジェクト。[/ja]
   */

  /**
   * @attribute animation
   * @type {String}
   * @default default
   * @description
   *  [en]The animation used when showing and hiding the modal. Can be either `"none"`, `"fade"` or `"lift"`.[/en]
   *  [ja]モーダルを表示する際のアニメーション名を指定します。"none"もしくは"fade","lift"を指定できます。[/ja]
   */

  /**
   * @attribute animation-options
   * @type {Expression}
   * @description
   *  [en]Specify the animation's duration, timing and delay with an object literal. E.g. `{duration: 0.2, delay: 1, timing: 'ease-in'}`.[/en]
   *  [ja]アニメーション時のduration, timing, delayをオブジェクトリテラルで指定します。e.g. <code>{duration: 0.2, delay: 1, timing: 'ease-in'}</code>[/ja]
   */

  function ModalElement() {
    _classCallCheck(this, ModalElement);

    var _this = _possibleConstructorReturn(this, (ModalElement.__proto__ || Object.getPrototypeOf(ModalElement)).call(this));

    _this._defaultDBB = function () {
      return undefined;
    };
    (0, _contentReady2.default)(_this, function () {
      return _this._compile();
    });
    return _this;
  }

  _createClass(ModalElement, [{
    key: '_updateAnimatorFactory',
    value: function _updateAnimatorFactory() {
      return new _animatorFactory2.default({
        animators: _animatorDict,
        baseClass: _animator2.default,
        baseClassName: 'ModalAnimator',
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
      this.style.display = 'none';
      this.style.zIndex = 10001;
      this.classList.add(defaultClassName);

      if (!_util2.default.findChild(this, '.modal__content')) {
        var content = document.createElement('div');
        content.classList.add('modal__content');

        while (this.childNodes[0]) {
          var node = this.childNodes[0];
          this.removeChild(node);
          content.insertBefore(node, null);
        }

        this.appendChild(content);
      }

      _modifierUtil2.default.initModifier(this, this._scheme);
    }
  }, {
    key: '_toggleStyle',
    value: function _toggleStyle(shouldShow) {
      this.style.display = shouldShow ? 'table' : 'none';
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(ModalElement.prototype.__proto__ || Object.getPrototypeOf(ModalElement.prototype), 'connectedCallback', this).call(this);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      _get(ModalElement.prototype.__proto__ || Object.getPrototypeOf(ModalElement.prototype), 'disconnectedCallback', this).call(this);
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
     *   [en]Animation name. Available animations are `"none"` and `"fade"`.[/en]
     *   [ja]アニメーション名を指定します。"none", "fade"のいずれかを指定します。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @param {Function} [options.callback]
     *   [en]This function is called after the modal has been revealed.[/en]
     *   [ja]モーダルが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Show modal.[/en]
     *   [ja]モーダルを表示します。[/ja]
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
     *   [en]Animation name. Available animations are `"none"` and `"fade"`.[/en]
     *   [ja]アニメーション名を指定します。"none", "fade"のいずれかを指定します。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @param {Function} [options.callback]
     *   [en]This function is called after the modal has been revealed.[/en]
     *   [ja]モーダルが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Toggle modal visibility.[/en]
     *   [ja]モーダルの表示を切り替えます。[/ja]
     */

    /**
     * @method hide
     * @signature hide([options])
     * @param {Object} [options]
     *   [en]Parameter object.[/en]
     *   [ja]オプションを指定するオブジェクト。[/ja]
     * @param {String} [options.animation]
     *   [en]Animation name. Available animations are `"none"` and `"fade"`.[/en]
     *   [ja]アニメーション名を指定します。"none", "fade"のいずれかを指定します。[/ja]
     * @param {String} [options.animationOptions]
     *   [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
     *   [ja]アニメーション時のduration, delay, timingを指定します。e.g. {duration: 0.2, delay: 0.4, timing: 'ease-in'}[/ja]
     * @param {Function} [options.callback]
     *   [en]This function is called after the modal has been revealed.[/en]
     *   [ja]モーダルが表示され終わった後に呼び出される関数オブジェクトを指定します。[/ja]
     * @description
     *   [en]Hide modal.[/en]
     *   [ja]モーダルを非表示にします。[/ja]
     * @return {Promise}
     *   [en]Resolves to the hidden element[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      if (name === 'class') {
        _util2.default.restoreClass(this, defaultClassName, scheme);
      } else {
        _get(ModalElement.prototype.__proto__ || Object.getPrototypeOf(ModalElement.prototype), 'attributeChangedCallback', this).call(this, name, last, current);
      }
    }

    /**
     * @param {String} name
     * @param {Function} Animator
     */

  }, {
    key: '_scheme',
    get: function get() {
      return scheme;
    }
  }], [{
    key: 'registerAnimator',
    value: function registerAnimator(name, Animator) {
      if (!(Animator.prototype instanceof _animator2.default)) {
        _util2.default.throwAnimator('Modal');
      }
      _animatorDict[name] = Animator;
    }
  }, {
    key: 'observedAttributes',
    get: function get() {
      return [].concat(_toConsumableArray(_get(ModalElement.__proto__ || Object.getPrototypeOf(ModalElement), 'observedAttributes', this)), ['class']);
    }
  }, {
    key: 'animators',
    get: function get() {
      return _animatorDict;
    }
  }, {
    key: 'ModalAnimator',
    get: function get() {
      return _animator2.default;
    }
  }]);

  return ModalElement;
}(_baseDialog2.default);

exports.default = ModalElement;


_elements2.default.Modal = ModalElement;
customElements.define('ons-modal', ModalElement);