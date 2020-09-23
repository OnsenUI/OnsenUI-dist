'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IOSFadePopoverAnimator = exports.MDFadePopoverAnimator = exports.PopoverAnimator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _animit = require('../../ons/animit');

var _animit2 = _interopRequireDefault(_animit);

var _baseAnimator = require('../../ons/base-animator');

var _baseAnimator2 = _interopRequireDefault(_baseAnimator);

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


var PopoverAnimator = exports.PopoverAnimator = function (_BaseAnimator) {
  _inherits(PopoverAnimator, _BaseAnimator);

  /**
   * @param {Object} options
   * @param {String} options.timing
   * @param {Number} options.duration
   * @param {Number} options.delay
   */
  function PopoverAnimator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$timing = _ref.timing,
        timing = _ref$timing === undefined ? 'cubic-bezier(.1, .7, .4, 1)' : _ref$timing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0 : _ref$delay,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 0.2 : _ref$duration;

    _classCallCheck(this, PopoverAnimator);

    return _possibleConstructorReturn(this, (PopoverAnimator.__proto__ || Object.getPrototypeOf(PopoverAnimator)).call(this, { timing: timing, delay: delay, duration: duration }));
  }

  _createClass(PopoverAnimator, [{
    key: 'show',
    value: function show(popover, callback) {
      callback();
    }
  }, {
    key: 'hide',
    value: function hide(popover, callback) {
      callback();
    }
  }, {
    key: '_animate',
    value: function _animate(element, _ref2) {
      var from = _ref2.from,
          to = _ref2.to,
          options = _ref2.options,
          callback = _ref2.callback,
          _ref2$restore = _ref2.restore,
          restore = _ref2$restore === undefined ? false : _ref2$restore,
          animation = _ref2.animation;

      options = _util2.default.extend({}, this.options, options);

      if (animation) {
        from = animation.from;
        to = animation.to;
      }

      animation = (0, _animit2.default)(element);
      if (restore) {
        animation = animation.saveStyle();
      }
      animation = animation.queue(from).wait(this.delay).queue({
        css: to,
        duration: this.duration,
        timing: this.timing
      });
      if (restore) {
        animation = animation.restoreStyle();
      }
      if (callback) {
        animation = animation.queue(function (done) {
          callback();
          done();
        });
      }
      return animation;
    }
  }, {
    key: '_animateAll',
    value: function _animateAll(element, animations) {
      var _this2 = this;

      Object.keys(animations).forEach(function (key) {
        return _this2._animate(element[key], animations[key]).play();
      });
    }
  }]);

  return PopoverAnimator;
}(_baseAnimator2.default);

var fade = {
  out: {
    from: { opacity: 1.0 },
    to: { opacity: 0 }
  },
  in: {
    from: { opacity: 0 },
    to: { opacity: 1.0 }
  }
};

var MDFadePopoverAnimator = exports.MDFadePopoverAnimator = function (_PopoverAnimator) {
  _inherits(MDFadePopoverAnimator, _PopoverAnimator);

  function MDFadePopoverAnimator() {
    _classCallCheck(this, MDFadePopoverAnimator);

    return _possibleConstructorReturn(this, (MDFadePopoverAnimator.__proto__ || Object.getPrototypeOf(MDFadePopoverAnimator)).apply(this, arguments));
  }

  _createClass(MDFadePopoverAnimator, [{
    key: 'show',
    value: function show(popover, callback) {
      this._animateAll(popover, {
        _mask: fade.in,
        _popover: { animation: fade.in, restore: true, callback: callback }
      });
    }
  }, {
    key: 'hide',
    value: function hide(popover, callback) {
      this._animateAll(popover, {
        _mask: fade.out,
        _popover: { animation: fade.out, restore: true, callback: callback }
      });
    }
  }]);

  return MDFadePopoverAnimator;
}(PopoverAnimator);

var IOSFadePopoverAnimator = exports.IOSFadePopoverAnimator = function (_MDFadePopoverAnimato) {
  _inherits(IOSFadePopoverAnimator, _MDFadePopoverAnimato);

  function IOSFadePopoverAnimator() {
    _classCallCheck(this, IOSFadePopoverAnimator);

    return _possibleConstructorReturn(this, (IOSFadePopoverAnimator.__proto__ || Object.getPrototypeOf(IOSFadePopoverAnimator)).apply(this, arguments));
  }

  _createClass(IOSFadePopoverAnimator, [{
    key: 'show',
    value: function show(popover, callback) {
      this._animateAll(popover, {
        _mask: fade.in,
        _popover: {
          from: {
            transform: 'scale3d(1.3, 1.3, 1.0)',
            opacity: 0
          },
          to: {
            transform: 'scale3d(1.0, 1.0,  1.0)',
            opacity: 1.0
          },
          restore: true,
          callback: callback
        }
      });
    }
  }]);

  return IOSFadePopoverAnimator;
}(MDFadePopoverAnimator);