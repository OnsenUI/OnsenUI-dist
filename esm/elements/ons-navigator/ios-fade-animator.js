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

var transform = 'translate3d(0, 0, 0)';

/**
 * Fade-in screen transition.
 */

var IOSFadeNavigatorAnimator = function (_NavigatorAnimator) {
  _inherits(IOSFadeNavigatorAnimator, _NavigatorAnimator);

  function IOSFadeNavigatorAnimator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$timing = _ref.timing,
        timing = _ref$timing === undefined ? 'linear' : _ref$timing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0 : _ref$delay,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 0.4 : _ref$duration;

    _classCallCheck(this, IOSFadeNavigatorAnimator);

    return _possibleConstructorReturn(this, (IOSFadeNavigatorAnimator.__proto__ || Object.getPrototypeOf(IOSFadeNavigatorAnimator)).call(this, { timing: timing, delay: delay, duration: duration }));
  }

  /**
   * @param {Object} enterPage
   * @param {Object} leavePage
   * @param {Function} callback
   */


  _createClass(IOSFadeNavigatorAnimator, [{
    key: 'push',
    value: function push(enterPage, leavePage, callback) {
      var unblock = _get(IOSFadeNavigatorAnimator.prototype.__proto__ || Object.getPrototypeOf(IOSFadeNavigatorAnimator.prototype), 'block', this).call(this, enterPage);

      _animit2.default.runAll((0, _animit2.default)(enterPage, this.def).default({ transform: transform, opacity: 0 }, { transform: transform, opacity: 1 }).queue(function (done) {
        unblock();
        callback();
        done();
      }));
    }

    /**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} done
     */

  }, {
    key: 'pop',
    value: function pop(enterPage, leavePage, callback) {
      var unblock = _get(IOSFadeNavigatorAnimator.prototype.__proto__ || Object.getPrototypeOf(IOSFadeNavigatorAnimator.prototype), 'block', this).call(this, enterPage);

      _animit2.default.runAll((0, _animit2.default)(leavePage, this.def).default({ transform: transform, opacity: 1 }, { transform: transform, opacity: 0 }).queue(function (done) {
        unblock();
        callback();
        done();
      }));
    }
  }]);

  return IOSFadeNavigatorAnimator;
}(_animator2.default);

exports.default = IOSFadeNavigatorAnimator;