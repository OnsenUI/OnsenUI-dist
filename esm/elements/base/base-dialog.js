'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _baseElement = require('./base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _modifierUtil = require('../../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

var _animatorFactory = require('../../ons/internal/animator-factory');

var _animatorFactory2 = _interopRequireDefault(_animatorFactory);

var _doorlock = require('../../ons/doorlock');

var _doorlock2 = _interopRequireDefault(_doorlock);

var _deviceBackButtonDispatcher = require('../../ons/internal/device-back-button-dispatcher');

var _deviceBackButtonDispatcher2 = _interopRequireDefault(_deviceBackButtonDispatcher);

var _contentReady = require('../../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var BaseDialogElement = function (_BaseElement) {
  _inherits(BaseDialogElement, _BaseElement);

  _createClass(BaseDialogElement, [{
    key: '_updateAnimatorFactory',
    value: function _updateAnimatorFactory() {
      _util2.default.throwMember();
    }
  }, {
    key: '_toggleStyle',
    value: function _toggleStyle(shouldShow) {
      this.style.display = shouldShow ? 'block' : 'none';
    }
  }, {
    key: '_scheme',
    get: function get() {
      _util2.default.throwMember();
    }
  }]);

  function BaseDialogElement() {
    _classCallCheck(this, BaseDialogElement);

    var _this = _possibleConstructorReturn(this, (BaseDialogElement.__proto__ || Object.getPrototypeOf(BaseDialogElement)).call(this));

    if (_this.constructor === BaseDialogElement) {
      _util2.default.throwAbstract();
    }

    _this._visible = false;
    _this._doorLock = new _doorlock2.default();
    _this._cancel = _this._cancel.bind(_this);
    _this._selfCamelName = _util2.default.camelize(_this.tagName.slice(4));
    _this._defaultDBB = function (e) {
      return _this.cancelable ? _this._cancel() : e.callParentHandler();
    };
    _this._animatorFactory = _this._updateAnimatorFactory();
    return _this;
  }

  _createClass(BaseDialogElement, [{
    key: '_cancel',
    value: function _cancel() {
      var _this2 = this;

      if (this.cancelable && !this._running) {
        this._running = true;
        this.hide().then(function () {
          _this2._running = false;
          _util2.default.triggerElementEvent(_this2, 'dialog-cancel');
        }, function () {
          return _this2._running = false;
        });
      }
    }
  }, {
    key: 'show',
    value: function show() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this._setVisible.apply(this, [true].concat(args));
    }
  }, {
    key: 'hide',
    value: function hide() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this._setVisible.apply(this, [false].concat(args));
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this._setVisible.apply(this, [!this.visible].concat(args));
    }
  }, {
    key: '_setVisible',
    value: function _setVisible(shouldShow) {
      var _util$triggerElementE,
          _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var action = shouldShow ? 'show' : 'hide';

      options = _extends({}, options);
      options.animationOptions = _util2.default.extend(options.animationOptions || {}, _animatorFactory2.default.parseAnimationOptionsString(this.getAttribute('animation-options')));

      var canceled = false;
      _util2.default.triggerElementEvent(this, 'pre' + action, (_util$triggerElementE = {}, _defineProperty(_util$triggerElementE, this._selfCamelName, this), _defineProperty(_util$triggerElementE, 'cancel', function cancel() {
        return canceled = true;
      }), _util$triggerElementE));

      if (canceled) {
        return Promise.reject('Canceled in pre' + action + ' event.');
      }

      return new Promise(function (resolve) {
        _this3._doorLock.waitUnlock(function () {
          var unlock = _this3._doorLock.lock();
          var animator = _this3._animatorFactory.newAnimator(options);

          shouldShow && _this3._toggleStyle(true, options);
          _this3._visible = shouldShow;
          _util2.default.iosPageScrollFix(shouldShow);

          (0, _contentReady2.default)(_this3, function () {
            animator[action](_this3, function () {
              !shouldShow && _this3._toggleStyle(false, options);

              unlock();

              _util2.default.propagateAction(_this3, '_' + action);
              _util2.default.triggerElementEvent(_this3, 'post' + action, _defineProperty({}, _this3._selfCamelName, _this3)); // postshow posthide

              if (options.callback instanceof Function) {
                options.callback(_this3);
              }

              resolve(_this3);
            });
          });
        });
      });
    }
  }, {
    key: '_updateMask',
    value: function _updateMask() {
      var _this4 = this;

      (0, _contentReady2.default)(this, function () {
        if (_this4._mask && _this4.getAttribute('mask-color')) {
          _this4._mask.style.backgroundColor = _this4.getAttribute('mask-color');
        }
      });
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this5 = this;

      if (typeof this._defaultDBB === 'function') {
        this.onDeviceBackButton = this._defaultDBB.bind(this);
      }

      (0, _contentReady2.default)(this, function () {
        if (_this5._mask) {
          _this5._mask.addEventListener('click', _this5._cancel, false);
        }
      });
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this._backButtonHandler) {
        this._backButtonHandler.destroy();
        this._backButtonHandler = null;
      }

      if (this._mask) {
        this._mask.removeEventListener('click', this._cancel, false);
      }
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      switch (name) {
        case 'modifier':
          _modifierUtil2.default.onModifierChanged(last, current, this, this._scheme);
          break;
        case 'animation':
          this._animatorFactory = this._updateAnimatorFactory();
          break;
        case 'mask-color':
          this._updateMask();
          break;
      }
    }
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
  }, {
    key: 'visible',
    get: function get() {
      return this._visible;
    }
  }, {
    key: 'disabled',
    set: function set(value) {
      return _util2.default.toggleAttribute(this, 'disabled', value);
    },
    get: function get() {
      return this.hasAttribute('disabled');
    }
  }, {
    key: 'cancelable',
    set: function set(value) {
      return _util2.default.toggleAttribute(this, 'cancelable', value);
    },
    get: function get() {
      return this.hasAttribute('cancelable');
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['modifier', 'animation', 'mask-color'];
    }
  }, {
    key: 'events',
    get: function get() {
      return ['preshow', 'postshow', 'prehide', 'posthide', 'dialog-cancel'];
    }
  }]);

  return BaseDialogElement;
}(_baseElement2.default);

exports.default = BaseDialogElement;