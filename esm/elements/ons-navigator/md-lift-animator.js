'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _animator = require('./animator');

var _animator2 = _interopRequireDefault(_animator);

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _animit = require('../../ons/animit');

var _animit2 = _interopRequireDefault(_animit);

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

/**
 * Lift screen transition.
 */
var MDLiftNavigatorAnimator = function (_NavigatorAnimator) {
  _inherits(MDLiftNavigatorAnimator, _NavigatorAnimator);

  function MDLiftNavigatorAnimator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$timing = _ref.timing,
        timing = _ref$timing === undefined ? 'cubic-bezier(.1, .7, .1, 1)' : _ref$timing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0.05 : _ref$delay,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 0.4 : _ref$duration;

    _classCallCheck(this, MDLiftNavigatorAnimator);

    var _this = _possibleConstructorReturn(this, (MDLiftNavigatorAnimator.__proto__ || Object.getPrototypeOf(MDLiftNavigatorAnimator)).call(this, { timing: timing, delay: delay, duration: duration }));

    _this.backgroundMask = _util2.default.createElement('<div style="position: absolute; width: 100%; height: 100%;' + 'background-color: black;"></div>');
    return _this;
  }

  /**
   * @param {Object} enterPage
   * @param {Object} leavePage
   * @param {Function} callback
   */


  _createClass(MDLiftNavigatorAnimator, [{
    key: 'push',
    value: function push(enterPage, leavePage, callback) {
      var _this2 = this;

      this.backgroundMask.remove();
      leavePage.parentNode.insertBefore(this.backgroundMask, leavePage);

      var unblock = _get(MDLiftNavigatorAnimator.prototype.__proto__ || Object.getPrototypeOf(MDLiftNavigatorAnimator.prototype), 'block', this).call(this, enterPage);

      var maskClear = (0, _animit2.default)(this.backgroundMask).wait(this.delay + this.duration).queue(function (done) {
        _this2.backgroundMask.remove();
        done();
      });

      _animit2.default.runAll(maskClear, (0, _animit2.default)(enterPage, this.def).default({ transform: 'translate3d(0, 100%, 0)' }, { transform: 'translate3d(0, 0, 0)' }), (0, _animit2.default)(leavePage, this.def).default({ opacity: 1 }, { opacity: .4 }).queue(function (done) {
        unblock();
        callback();
        done();
      }));
    }

    /**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} callback
     */

  }, {
    key: 'pop',
    value: function pop(enterPage, leavePage, callback) {
      var _this3 = this;

      this.backgroundMask.remove();
      enterPage.parentNode.insertBefore(this.backgroundMask, enterPage);

      var unblock = _get(MDLiftNavigatorAnimator.prototype.__proto__ || Object.getPrototypeOf(MDLiftNavigatorAnimator.prototype), 'block', this).call(this, enterPage);

      _animit2.default.runAll((0, _animit2.default)(this.backgroundMask).wait(this.delay + this.duration).queue(function (done) {
        _this3.backgroundMask.remove();
        done();
      }), (0, _animit2.default)(enterPage, this.def).default({ opacity: .4 }, { opacity: 1 }).queue(function (done) {
        unblock();
        callback();
        done();
      }), (0, _animit2.default)(leavePage, this.def).default({ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(0, 100%, 0)' }));
    }
  }]);

  return MDLiftNavigatorAnimator;
}(_animator2.default);

exports.default = MDLiftNavigatorAnimator;