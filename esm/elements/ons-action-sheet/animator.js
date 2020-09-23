'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IOSActionSheetAnimator = exports.MDActionSheetAnimator = exports.ActionSheetAnimator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animit = require('../../ons/animit');

var _animit2 = _interopRequireDefault(_animit);

var _baseAnimator = require('../../ons/base-animator');

var _baseAnimator2 = _interopRequireDefault(_baseAnimator);

var _iphonexPatch = require('../../ons/iphonex-patch');

var _iphonexPatch2 = _interopRequireDefault(_iphonexPatch);

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

var ActionSheetAnimator = exports.ActionSheetAnimator = function (_BaseAnimator) {
  _inherits(ActionSheetAnimator, _BaseAnimator);

  function ActionSheetAnimator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$timing = _ref.timing,
        timing = _ref$timing === undefined ? 'linear' : _ref$timing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0 : _ref$delay,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 0.2 : _ref$duration;

    _classCallCheck(this, ActionSheetAnimator);

    return _possibleConstructorReturn(this, (ActionSheetAnimator.__proto__ || Object.getPrototypeOf(ActionSheetAnimator)).call(this, { timing: timing, delay: delay, duration: duration }));
  }

  /**
   * @param {HTMLElement} dialog
   * @param {Function} done
   */


  _createClass(ActionSheetAnimator, [{
    key: 'show',
    value: function show(dialog, done) {
      done();
    }

    /**
     * @param {HTMLElement} dialog
     * @param {Function} done
     */

  }, {
    key: 'hide',
    value: function hide(dialog, done) {
      done();
    }
  }]);

  return ActionSheetAnimator;
}(_baseAnimator2.default);

/**
 * Android style animator for Action Sheet.
 */


var MDActionSheetAnimator = exports.MDActionSheetAnimator = function (_ActionSheetAnimator) {
  _inherits(MDActionSheetAnimator, _ActionSheetAnimator);

  function MDActionSheetAnimator() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$timing = _ref2.timing,
        timing = _ref2$timing === undefined ? 'ease' : _ref2$timing,
        _ref2$delay = _ref2.delay,
        delay = _ref2$delay === undefined ? 0 : _ref2$delay,
        _ref2$duration = _ref2.duration,
        duration = _ref2$duration === undefined ? 0.4 : _ref2$duration;

    _classCallCheck(this, MDActionSheetAnimator);

    var _this2 = _possibleConstructorReturn(this, (MDActionSheetAnimator.__proto__ || Object.getPrototypeOf(MDActionSheetAnimator)).call(this, { timing: timing, delay: delay, duration: duration }));

    _this2.maskTiming = 'linear';
    _this2.maskDuration = 0.2;
    return _this2;
  }

  /**
   * @param {Object} dialog
   * @param {Function} callback
   */


  _createClass(MDActionSheetAnimator, [{
    key: 'show',
    value: function show(dialog, callback) {

      _animit2.default.runAll((0, _animit2.default)(dialog._mask).queue({ opacity: 0 }).wait(this.delay).queue({ opacity: 1.0 }, {
        duration: this.maskDuration,
        timing: this.maskTiming
      }), (0, _animit2.default)(dialog._sheet, this.def).default({ transform: 'translate3d(0, 80%, 0)', opacity: 0 }, { transform: 'translate3d(0, 0, 0)', opacity: 1 }).queue(function (done) {
        callback && callback();
        done();
      }));
    }

    /**
     * @param {Object} dialog
     * @param {Function} callback
     */

  }, {
    key: 'hide',
    value: function hide(dialog, callback) {
      _animit2.default.runAll((0, _animit2.default)(dialog._mask).queue({ opacity: 1 }).wait(this.delay).queue({ opacity: 0 }, {
        duration: this.maskDuration,
        timing: this.maskTiming
      }), (0, _animit2.default)(dialog._sheet, this.def).default({ transform: 'translate3d(0, 0, 0)', opacity: 1 }, { transform: 'translate3d(0, 80%, 0)', opacity: 0 }).queue(function (done) {
        callback && callback();
        done();
      }));
    }
  }]);

  return MDActionSheetAnimator;
}(ActionSheetAnimator);

/**
 * iOS style animator for dialog.
 */


var IOSActionSheetAnimator = exports.IOSActionSheetAnimator = function (_ActionSheetAnimator2) {
  _inherits(IOSActionSheetAnimator, _ActionSheetAnimator2);

  function IOSActionSheetAnimator() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$timing = _ref3.timing,
        timing = _ref3$timing === undefined ? 'ease' : _ref3$timing,
        _ref3$delay = _ref3.delay,
        delay = _ref3$delay === undefined ? 0 : _ref3$delay,
        _ref3$duration = _ref3.duration,
        duration = _ref3$duration === undefined ? 0.3 : _ref3$duration;

    _classCallCheck(this, IOSActionSheetAnimator);

    var _this3 = _possibleConstructorReturn(this, (IOSActionSheetAnimator.__proto__ || Object.getPrototypeOf(IOSActionSheetAnimator)).call(this, { timing: timing, delay: delay, duration: duration }));

    _this3.maskTiming = 'linear';
    _this3.maskDuration = 0.2;
    if (_iphonexPatch2.default.isIPhoneXPortraitPatchActive()) {
      _this3.liftAmount = 'calc(100% + 48px)';
    } else if (_iphonexPatch2.default.isIPhoneXLandscapePatchActive()) {
      _this3.liftAmount = 'calc(100% + 33px)';
    } else {
      _this3.liftAmount = document.body.clientHeight / 2.0 - 1 + 'px'; // avoid Forced Synchronous Layout
    }
    return _this3;
  }

  /**
   * @param {Object} dialog
   * @param {Function} callback
   */


  _createClass(IOSActionSheetAnimator, [{
    key: 'show',
    value: function show(dialog, callback) {
      _animit2.default.runAll((0, _animit2.default)(dialog._mask).queue({ opacity: 0 }).wait(this.delay).queue({ opacity: 1 }, {
        duration: this.maskDuration,
        timing: this.maskTiming
      }), (0, _animit2.default)(dialog._sheet, this.def).default({ transform: 'translate3d(0, ' + this.liftAmount + ', 0)' }, { transform: 'translate3d(0, 0, 0)' }).queue(function (done) {
        callback && callback();
        done();
      }));
    }

    /**
     * @param {Object} dialog
     * @param {Function} callback
     */

  }, {
    key: 'hide',
    value: function hide(dialog, callback) {
      _animit2.default.runAll((0, _animit2.default)(dialog._mask).queue({ opacity: 1 }).wait(this.delay).queue({ opacity: 0 }, {
        duration: this.maskDuration,
        timing: this.maskTiming
      }), (0, _animit2.default)(dialog._sheet, this.def).default({ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(0, ' + this.liftAmount + ', 0)' }).queue(function (done) {
        callback && callback();
        done();
      }));
    }
  }]);

  return IOSActionSheetAnimator;
}(ActionSheetAnimator);