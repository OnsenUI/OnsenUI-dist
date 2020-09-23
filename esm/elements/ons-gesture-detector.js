'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _baseElement = require('./base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _gestureDetector = require('../ons/gesture-detector');

var _gestureDetector2 = _interopRequireDefault(_gestureDetector);

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
 * @element ons-gesture-detector
 * @category gesture
 * @description
 *   [en]
 *     Component to detect finger gestures within the wrapped element. Following gestures are supported:
 *     - Drag gestures: `drag`, `dragleft`, `dragright`, `dragup`, `dragdown`
 *     - Hold gestures: `hold`, `release`
 *     - Swipe gestures: `swipe`, `swipeleft`, `swiperight`, `swipeup`, `swipedown`
 *     - Tap gestures: `tap`, `doubletap`
 *     - Pinch gestures: `pinch`, `pinchin`, `pinchout`
 *     - Other gestures: `touch`, `transform`, `rotate`
 *   [/en]
 *   [ja]要素内のジェスチャー操作を検知します。詳しくはガイドを参照してください。[/ja]
 * @guide features.html#gesture-detection
 *   [en]Detecting finger gestures[/en]
 *   [ja]ジェスチャー操作の検知[/ja]
 * @example
 * <ons-gesture-detector>
 *   <div id="detect-area" style="width: 100px; height: 100px;">
 *     Swipe Here
 *   </div>
 * </ons-gesture-detector>
 *
 * <script>
 *   document.addEventListener('swipeleft', function(event) {
 *     if (event.target.matches('#detect-area')) {
 *       console.log('Swipe left is detected.');
 *     }
 *   });
 * </script>
 */
var GestureDetectorElement = function (_BaseElement) {
  _inherits(GestureDetectorElement, _BaseElement);

  function GestureDetectorElement() {
    _classCallCheck(this, GestureDetectorElement);

    var _this = _possibleConstructorReturn(this, (GestureDetectorElement.__proto__ || Object.getPrototypeOf(GestureDetectorElement)).call(this));

    _this._gestureDetector = new _gestureDetector2.default(_this, { passive: true });
    return _this;
  }

  return GestureDetectorElement;
}(_baseElement2.default);

exports.default = GestureDetectorElement;


_elements2.default.GestureDetector = GestureDetectorElement;
customElements.define('ons-gesture-detector', GestureDetectorElement);