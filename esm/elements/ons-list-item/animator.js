'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideListItemAnimator = exports.ListItemAnimator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animit3 = require('../../ons/animit');

var _animit4 = _interopRequireDefault(_animit3);

var _baseAnimator = require('../../ons/base-animator');

var _baseAnimator2 = _interopRequireDefault(_baseAnimator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright 2013-2018 ASIAL CORPORATION
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
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

var ListItemAnimator = exports.ListItemAnimator = function (_BaseAnimator) {
  _inherits(ListItemAnimator, _BaseAnimator);

  function ListItemAnimator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$timing = _ref.timing,
        timing = _ref$timing === undefined ? 'linear' : _ref$timing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0 : _ref$delay,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 0.2 : _ref$duration;

    _classCallCheck(this, ListItemAnimator);

    return _possibleConstructorReturn(this, (ListItemAnimator.__proto__ || Object.getPrototypeOf(ListItemAnimator)).call(this, { timing: timing, delay: delay, duration: duration }));
  }

  _createClass(ListItemAnimator, [{
    key: 'showExpansion',
    value: function showExpansion(listItem, callback) {
      callback();
    }
  }, {
    key: 'hideExpansion',
    value: function hideExpansion(listItem, callback) {
      callback();
    }
  }]);

  return ListItemAnimator;
}(_baseAnimator2.default);

var SlideListItemAnimator = exports.SlideListItemAnimator = function (_ListItemAnimator) {
  _inherits(SlideListItemAnimator, _ListItemAnimator);

  function SlideListItemAnimator() {
    _classCallCheck(this, SlideListItemAnimator);

    return _possibleConstructorReturn(this, (SlideListItemAnimator.__proto__ || Object.getPrototypeOf(SlideListItemAnimator)).apply(this, arguments));
  }

  _createClass(SlideListItemAnimator, [{
    key: 'showExpansion',
    value: function showExpansion(listItem, callback) {
      this._animateExpansion(listItem, true, callback);
    }
  }, {
    key: 'hideExpansion',
    value: function hideExpansion(listItem, callback) {
      this._animateExpansion(listItem, false, callback);
    }
  }, {
    key: '_animateExpansion',
    value: function _animateExpansion(listItem, shouldOpen, callback) {
      var _animit;

      // To animate the opening of the expansion panel correctly, we need to know its
      // height. To calculate this, we set its height to auto, and then get the computed
      // height and padding. Once this is done, we set the height back to its original value.
      var oldHeight = listItem.expandableContent.style.height;
      var oldDisplay = listItem.expandableContent.style.display;
      listItem.expandableContent.style.height = 'auto';
      listItem.expandableContent.style.display = 'block';
      var computedStyle = window.getComputedStyle(listItem.expandableContent);

      var expansionOpenTransition = [{ height: 0, paddingTop: 0, paddingBottom: 0 }, {
        height: computedStyle.height,
        paddingTop: computedStyle.paddingTop,
        paddingBottom: computedStyle.paddingBottom
      }];
      var iconOpenTransition = [{ transform: 'rotate(45deg)' }, { transform: 'rotate(225deg)' }];

      // Now that we have the values we need, reset the height back to its original state
      listItem.expandableContent.style.height = oldHeight;

      (_animit = (0, _animit4.default)(listItem.expandableContent, { duration: this.duration, property: 'height padding-top padding-bottom' })).default.apply(_animit, _toConsumableArray(shouldOpen ? expansionOpenTransition : expansionOpenTransition.reverse())).play(function () {
        listItem.expandableContent.style.display = oldDisplay;
        callback && callback();
      });

      if (listItem.expandChevron) {
        var _animit2;

        (_animit2 = (0, _animit4.default)(listItem.expandChevron, { duration: this.duration, property: 'transform' })).default.apply(_animit2, _toConsumableArray(shouldOpen ? iconOpenTransition : iconOpenTransition.reverse())).play();
      }
    }
  }]);

  return SlideListItemAnimator;
}(ListItemAnimator);