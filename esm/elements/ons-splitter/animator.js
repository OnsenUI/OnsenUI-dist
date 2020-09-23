'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _styler = require('../../ons/styler');

var _styler2 = _interopRequireDefault(_styler);

var _contentReady = require('../../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

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

var SplitterAnimator = function (_BaseAnimator) {
  _inherits(SplitterAnimator, _BaseAnimator);

  function SplitterAnimator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$timing = _ref.timing,
        timing = _ref$timing === undefined ? 'cubic-bezier(.1, .7, .1, 1)' : _ref$timing,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 0.3 : _ref$duration,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0 : _ref$delay;

    _classCallCheck(this, SplitterAnimator);

    return _possibleConstructorReturn(this, (SplitterAnimator.__proto__ || Object.getPrototypeOf(SplitterAnimator)).call(this, { timing: timing, duration: duration, delay: delay }));
  }

  _createClass(SplitterAnimator, [{
    key: 'updateOptions',
    value: function updateOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _util2.default.extend(this, {
        timing: this.timing, duration: this.duration, delay: this.delay
      }, options);
    }

    /**
     * @param {Element} sideElement
     */

  }, {
    key: 'activate',
    value: function activate(sideElement) {
      var _this2 = this;

      var splitter = sideElement.parentNode;

      (0, _contentReady2.default)(splitter, function () {
        _this2._side = sideElement;
        _this2._oppositeSide = splitter.right !== sideElement && splitter.right || splitter.left !== sideElement && splitter.left;
        _this2._content = splitter.content;
        _this2._mask = splitter.mask;
      });
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.clearTransition();
      this._mask && this.clearMask();
      this._content = this._side = this._oppositeSide = this._mask = null;
    }
  }, {
    key: 'clearTransition',
    value: function clearTransition() {
      var _this3 = this;

      'side mask content'.split(/\s+/).forEach(function (e) {
        return _this3['_' + e] && _styler2.default.clear(_this3['_' + e], 'transform transition');
      });
    }
  }, {
    key: 'clearMask',
    value: function clearMask() {
      // Check if the other side needs the mask before clearing
      if (!this._oppositeSide || this._oppositeSide.mode === 'split' || !this._oppositeSide.isOpen) {
        this._mask.style.opacity = '';
        this._mask.style.display = 'none';
      }
    }

    /**
     * @param {Number} distance
     */

  }, {
    key: 'translate',
    value: function translate(distance) {}

    /**
     * @param {Function} done
     */

  }, {
    key: 'open',
    value: function open(done) {
      done();
    }

    /**
     * @param {Function} done
     */

  }, {
    key: 'close',
    value: function close(done) {
      done();
    }
  }, {
    key: 'minus',
    get: function get() {
      return this._side.side === 'right' ? '-' : '';
    }
  }]);

  return SplitterAnimator;
}(_baseAnimator2.default);

exports.default = SplitterAnimator;