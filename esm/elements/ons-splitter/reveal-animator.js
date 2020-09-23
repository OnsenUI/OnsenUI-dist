'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _contentReady = require('../../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

var _styler = require('../../ons/styler');

var _styler2 = _interopRequireDefault(_styler);

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

var RevealSplitterAnimator = function (_SplitterAnimator) {
  _inherits(RevealSplitterAnimator, _SplitterAnimator);

  function RevealSplitterAnimator() {
    _classCallCheck(this, RevealSplitterAnimator);

    return _possibleConstructorReturn(this, (RevealSplitterAnimator.__proto__ || Object.getPrototypeOf(RevealSplitterAnimator)).apply(this, arguments));
  }

  _createClass(RevealSplitterAnimator, [{
    key: '_getSlidingElements',
    value: function _getSlidingElements() {
      var slidingElements = [this._content, this._mask];
      if (this._oppositeSide && this._oppositeSide.mode === 'split') {
        slidingElements.push(this._oppositeSide);
      }

      return slidingElements;
    }
  }, {
    key: 'activate',
    value: function activate(sideElement) {
      _get(RevealSplitterAnimator.prototype.__proto__ || Object.getPrototypeOf(RevealSplitterAnimator.prototype), 'activate', this).call(this, sideElement);
      if (sideElement.mode === 'collapse') {
        this._setStyles(sideElement);
      }
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this._side && this._unsetStyles(this._side);
      _get(RevealSplitterAnimator.prototype.__proto__ || Object.getPrototypeOf(RevealSplitterAnimator.prototype), 'deactivate', this).call(this);
    }
  }, {
    key: '_setStyles',
    value: function _setStyles(sideElement) {
      (0, _styler2.default)(sideElement, {
        left: sideElement.side === 'right' ? 'auto' : 0,
        right: sideElement.side === 'right' ? 0 : 'auto',
        zIndex: 0,
        backgroundColor: 'black',
        transform: this._generateBehindPageStyle(0).container.transform,
        display: 'none'
      });

      var splitter = sideElement.parentElement;
      (0, _contentReady2.default)(splitter, function () {
        return splitter.content && (0, _styler2.default)(splitter.content, { boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.2)' });
      });
    }
  }, {
    key: '_unsetStyles',
    value: function _unsetStyles(sideElement) {
      _styler2.default.clear(sideElement, 'left right zIndex backgroundColor display');
      if (sideElement._content) {
        sideElement._content.style.opacity = '';
      }

      // Check if the other side needs the common styles
      if (!this._oppositeSide || this._oppositeSide.mode === 'split') {
        sideElement.parentElement.content && _styler2.default.clear(sideElement.parentElement.content, 'boxShadow');
      }
    }
  }, {
    key: '_generateBehindPageStyle',
    value: function _generateBehindPageStyle(distance) {
      var max = this.maxWidth;

      var behindDistance = (distance - max) / max * 10;
      behindDistance = isNaN(behindDistance) ? 0 : Math.max(Math.min(behindDistance, 0), -10);

      var behindTransform = 'translate3d(' + (this.minus ? -1 : 1) * behindDistance + '%, 0, 0)';
      var opacity = 1 + behindDistance / 100;

      return {
        content: {
          opacity: opacity
        },
        container: {
          transform: behindTransform
        }
      };
    }
  }, {
    key: 'translate',
    value: function translate(distance) {
      this._side.style.display = '';
      this._side.style.zIndex = 1;
      this.maxWidth = this.maxWidth || this._getMaxWidth();
      var menuStyle = this._generateBehindPageStyle(Math.min(distance, this.maxWidth));

      if (!this._slidingElements) {
        this._slidingElements = this._getSlidingElements();
      }

      this._mask.style.display = 'block'; // Avoid content clicks

      _animit2.default.runAll((0, _animit2.default)(this._slidingElements).queue({
        transform: 'translate3d(' + (this.minus + distance) + 'px, 0, 0)'
      }), (0, _animit2.default)(this._side._content).queue(menuStyle.content), (0, _animit2.default)(this._side).queue(menuStyle.container));
    }

    /**
     * @param {Function} done
     */

  }, {
    key: 'open',
    value: function open(done) {
      var _this2 = this;

      this._side.style.display = '';
      this._side.style.zIndex = 1;
      this.maxWidth = this.maxWidth || this._getMaxWidth();
      var menuStyle = this._generateBehindPageStyle(this.maxWidth);
      this._slidingElements = this._getSlidingElements();

      setTimeout(function () {
        // Fix: Time to update previous translate3d after changing style.display
        _animit2.default.runAll((0, _animit2.default)(_this2._slidingElements).wait(_this2.delay).queue({
          transform: 'translate3d(' + (_this2.minus + _this2.maxWidth) + 'px, 0, 0)'
        }, _this2.def), (0, _animit2.default)(_this2._mask).wait(_this2.delay).queue({
          display: 'block'
        }), (0, _animit2.default)(_this2._side._content).wait(_this2.delay).queue(menuStyle.content, _this2.def), (0, _animit2.default)(_this2._side).wait(_this2.delay).queue(menuStyle.container, _this2.def).queue(function (callback) {
          _this2._slidingElements = null;
          callback();
          done && done();
        }));
      }, 1000 / 60);
    }

    /**
     * @param {Function} done
     */

  }, {
    key: 'close',
    value: function close(done) {
      var _this3 = this;

      var menuStyle = this._generateBehindPageStyle(0);
      this._slidingElements = this._getSlidingElements();

      _animit2.default.runAll((0, _animit2.default)(this._slidingElements).wait(this.delay).queue({
        transform: 'translate3d(0, 0, 0)'
      }, this.def), (0, _animit2.default)(this._mask).wait(this.delay).queue({
        display: 'none'
      }), (0, _animit2.default)(this._side._content).wait(this.delay).queue(menuStyle.content, this.def), (0, _animit2.default)(this._side).wait(this.delay).queue(menuStyle.container, this.def).queue(function (callback) {
        _this3._slidingElements = null;
        _this3._side.style.zIndex = 0;
        _this3._side.style.display = 'none';
        _this3._side._content.style.opacity = '';
        done && done();
        callback();
      }));
    }
  }, {
    key: '_getMaxWidth',
    value: function _getMaxWidth() {
      return this._side.offsetWidth;
    }
  }]);

  return RevealSplitterAnimator;
}(_animator2.default);

exports.default = RevealSplitterAnimator;