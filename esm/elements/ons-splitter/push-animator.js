'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _animit = require('../../ons/animit');

var _animit2 = _interopRequireDefault(_animit);

var _animator = require('./animator.js');

var _animator2 = _interopRequireDefault(_animator);

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

var PushSplitterAnimator = function (_SplitterAnimator) {
  _inherits(PushSplitterAnimator, _SplitterAnimator);

  function PushSplitterAnimator() {
    _classCallCheck(this, PushSplitterAnimator);

    return _possibleConstructorReturn(this, (PushSplitterAnimator.__proto__ || Object.getPrototypeOf(PushSplitterAnimator)).apply(this, arguments));
  }

  _createClass(PushSplitterAnimator, [{
    key: '_getSlidingElements',
    value: function _getSlidingElements() {
      var slidingElements = [this._side, this._content];
      if (this._oppositeSide && this._oppositeSide.mode === 'split') {
        slidingElements.push(this._oppositeSide);
      }

      return slidingElements;
    }
  }, {
    key: 'translate',
    value: function translate(distance) {
      if (!this._slidingElements) {
        this._slidingElements = this._getSlidingElements();
      }

      this._mask.style.display = 'block'; // Avoid content clicks

      (0, _animit2.default)(this._slidingElements).queue({
        transform: 'translate3d(' + (this.minus + distance) + 'px, 0, 0)'
      }).play();
    }

    /**
     * @param {Function} done
     */

  }, {
    key: 'open',
    value: function open(done) {
      var _this2 = this;

      var max = this._side.offsetWidth;
      this._slidingElements = this._getSlidingElements();

      _animit2.default.runAll((0, _animit2.default)(this._slidingElements).wait(this.delay).queue({
        transform: 'translate3d(' + (this.minus + max) + 'px, 0, 0)'
      }, this.def).queue(function (callback) {
        _this2._slidingElements = null;
        callback();
        done && done();
      }), (0, _animit2.default)(this._mask).wait(this.delay).queue({
        display: 'block'
      }));
    }

    /**
     * @param {Function} done
     */

  }, {
    key: 'close',
    value: function close(done) {
      var _this3 = this;

      this._slidingElements = this._getSlidingElements();

      _animit2.default.runAll((0, _animit2.default)(this._slidingElements).wait(this.delay).queue({
        transform: 'translate3d(0, 0, 0)'
      }, this.def).queue(function (callback) {
        _this3._slidingElements = null;
        _get(PushSplitterAnimator.prototype.__proto__ || Object.getPrototypeOf(PushSplitterAnimator.prototype), 'clearTransition', _this3).call(_this3);
        done && done();
        callback();
      }), (0, _animit2.default)(this._mask).wait(this.delay).queue({
        display: 'none'
      }));
    }
  }]);

  return PushSplitterAnimator;
}(_animator2.default);

exports.default = PushSplitterAnimator;