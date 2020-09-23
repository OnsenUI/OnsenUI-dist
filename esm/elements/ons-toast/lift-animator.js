'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _animit = require('../../ons/animit');

var _animit2 = _interopRequireDefault(_animit);

var _iphonexPatch = require('../../ons/iphonex-patch');

var _iphonexPatch2 = _interopRequireDefault(_iphonexPatch);

var _animator = require('./animator');

var _animator2 = _interopRequireDefault(_animator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*
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

/**
 * Lift-fade Toast Animator
 */
var LiftToastAnimator = function (_ToastAnimator) {
  _inherits(LiftToastAnimator, _ToastAnimator);

  function LiftToastAnimator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$timing = _ref.timing,
        timing = _ref$timing === undefined ? 'ease' : _ref$timing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0 : _ref$delay,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 0.35 : _ref$duration;

    _classCallCheck(this, LiftToastAnimator);

    var _this = _possibleConstructorReturn(this, (LiftToastAnimator.__proto__ || Object.getPrototypeOf(LiftToastAnimator)).call(this, { timing: timing, delay: delay, duration: duration }));

    _this.bodyHeight = document.body.clientHeight; // avoid Forced Synchronous Layout
    if (_iphonexPatch2.default.isIPhoneXPortraitPatchActive()) {
      _this.liftAmount = 'calc(100% + 34px)';
    } else if (_iphonexPatch2.default.isIPhoneXLandscapePatchActive()) {
      _this.liftAmount = 'calc(100% + 21px)';
    } else {
      _this.liftAmount = '100%';
    }
    return _this;
  }

  /**
   * @param {HTMLElement} toast
   * @param {Function} callback
   */


  _createClass(LiftToastAnimator, [{
    key: 'show',
    value: function show(toast, callback) {
      toast = toast._toast;

      _animit2.default.runAll((0, _animit2.default)(toast, this.def).default({ transform: 'translate3d(0, ' + this.liftAmount + ', 0)', opacity: 0 }, { transform: 'translate3d(0, 0, 0)', opacity: 1 }).queue(function (done) {
        callback && callback();
        done();
      }));
    }

    /**
     * @param {HTMLElement} toast
     * @param {Function} callback
     */

  }, {
    key: 'hide',
    value: function hide(toast, callback) {
      toast = toast._toast;

      _animit2.default.runAll((0, _animit2.default)(toast, this.def).default({ transform: 'translate3d(0, 0, 0)', opacity: 1 }, { transform: 'translate3d(0, ' + this.liftAmount + ', 0)', opacity: 0 }).queue(function (done) {
        callback && callback();
        done();
      }));
    }
  }, {
    key: '_updatePosition',
    value: function _updatePosition(toast) {
      if (parseInt(toast.style.top, 10) === 0) {
        toast.style.top = toast.style.bottom = '';
      }
    }
  }]);

  return LiftToastAnimator;
}(_animator2.default);

exports.default = LiftToastAnimator;