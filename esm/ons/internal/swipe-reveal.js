'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _gestureDetector = require('../../ons/gesture-detector');

var _gestureDetector2 = _interopRequireDefault(_gestureDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var widthToPx = function widthToPx(width) {
  var _ref = [parseInt(width, 10), /px/.test(width)],
      value = _ref[0],
      px = _ref[1];

  return px ? value : Math.round(document.body.offsetWidth * value / 100);
};

var SwipeReveal = function () {
  function SwipeReveal(params) {
    var _this = this;

    _classCallCheck(this, SwipeReveal);

    'element ignoreSwipe isInitialState onDragCallback swipeMax swipeMin swipeMid'.split(/\s+/).forEach(function (key) {
      return _this[key] = params[key];
    });

    this.elementHandler = params.elementHandler || params.element;
    this.getThreshold = params.getThreshold || function () {
      return .5;
    };
    this.getSide = params.getSide || function () {
      return 'left';
    };

    this.handleGesture = this.handleGesture.bind(this);

    this._shouldFixScroll = _util2.default.globals.actualMobileOS === 'ios';
  }

  _createClass(SwipeReveal, [{
    key: 'update',
    value: function update() {
      var swipeable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element.hasAttribute('swipeable');

      if (!this.gestureDetector) {
        this.gestureDetector = new _gestureDetector2.default(this.elementHandler, { dragMinDistance: 1, passive: !this._shouldFixScroll });
      }

      var action = swipeable ? 'on' : 'off';
      this.gestureDetector[action]('drag dragstart dragend', this.handleGesture);
    }
  }, {
    key: 'handleGesture',
    value: function handleGesture(e) {
      if (e.gesture) {
        if (e.type === 'dragstart') {
          this.onDragStart(e);
        } else if (!this._ignoreDrag) {
          e.type === 'dragend' ? this.onDragEnd(e) : this.onDrag(e);
        }
      }
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart(event) {
      var _this2 = this;

      var getDistance = function getDistance() {
        return _this2.getSide() === 'left' ? event.gesture.center.clientX : window.innerWidth - event.gesture.center.clientX;
      };
      this._ignoreDrag = event.consumed || !_util2.default.isValidGesture(event) || this.ignoreSwipe(event, getDistance());

      if (!this._ignoreDrag) {
        event.consume && event.consume();
        event.consumed = true;

        this._width = widthToPx(this.element.style.width || '100%');
        this._startDistance = this._distance = !(this.isInitialState instanceof Function) || this.isInitialState() ? 0 : this._width;

        _util2.default.iosPreventScroll(this.gestureDetector);
      }
    }
  }, {
    key: 'onDrag',
    value: function onDrag(event) {
      event.stopPropagation();

      var delta = this.getSide() === 'left' ? event.gesture.deltaX : -event.gesture.deltaX;
      var distance = Math.max(0, Math.min(this._width, this._startDistance + delta));
      if (distance !== this._distance) {
        this._distance = distance;
        this.swipeMid(this._distance, this._width);
      }
    }
  }, {
    key: 'onDragEnd',
    value: function onDragEnd(event) {
      event.stopPropagation();

      var direction = event.gesture.interimDirection;
      var isSwipeMax = this.getSide() !== direction && this._distance > this._width * this.getThreshold();
      isSwipeMax ? this.swipeMax() : this.swipeMin();
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      this.gestureDetector && this.gestureDetector.dispose();
      this.gestureDetector = this.element = this.elementHandler = null;
    }
  }]);

  return SwipeReveal;
}();

exports.default = SwipeReveal;