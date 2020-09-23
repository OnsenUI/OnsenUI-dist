'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animit = require('../../ons/animit');

var _animit2 = _interopRequireDefault(_animit);

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
 * iOS style animator for dialog.
 */
var FadeModalAnimator = function (_ModalAnimator) {
  _inherits(FadeModalAnimator, _ModalAnimator);

  function FadeModalAnimator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$timing = _ref.timing,
        timing = _ref$timing === undefined ? 'linear' : _ref$timing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0 : _ref$delay,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 0.3 : _ref$duration;

    _classCallCheck(this, FadeModalAnimator);

    return _possibleConstructorReturn(this, (FadeModalAnimator.__proto__ || Object.getPrototypeOf(FadeModalAnimator)).call(this, { timing: timing, delay: delay, duration: duration }));
  }

  /**
   * @param {HTMLElement} modal
   * @param {Function} callback
   */


  _createClass(FadeModalAnimator, [{
    key: 'show',
    value: function show(modal, callback) {
      callback = callback ? callback : function () {};

      (0, _animit2.default)(modal, this.def).default({ opacity: 0 }, { opacity: 1 }).queue(function (done) {
        callback();
        done();
      }).play();
    }

    /**
     * @param {HTMLElement} modal
     * @param {Function} callback
     */

  }, {
    key: 'hide',
    value: function hide(modal, callback) {
      callback = callback ? callback : function () {};

      (0, _animit2.default)(modal, this.def).default({ opacity: 1 }, { opacity: 0 }).queue(function (done) {
        callback();
        done();
      }).play();
    }
  }]);

  return FadeModalAnimator;
}(_animator2.default);

exports.default = FadeModalAnimator;