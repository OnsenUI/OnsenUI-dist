'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _iosSwipeAnimator = require('./ios-swipe-animator');

var _iosSwipeAnimator2 = _interopRequireDefault(_iosSwipeAnimator);

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _animit = require('../../ons/animit');

var _animit2 = _interopRequireDefault(_animit);

var _contentReady = require('../../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

var translate3d = function translate3d() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return 'translate3d(' + x + ', ' + y + ', ' + z + ')';
};

/**
 * Slide animator for navigator transition like iOS's screen slide transition.
 */

var IOSSlideNavigatorAnimator = function (_IOSSwipeNavigatorAni) {
  _inherits(IOSSlideNavigatorAnimator, _IOSSwipeNavigatorAni);

  function IOSSlideNavigatorAnimator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref$timing = _ref.timing,
        timing = _ref$timing === undefined ? 'cubic-bezier(0.3, .4, 0, .9)' : _ref$timing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0 : _ref$delay,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 0.4 : _ref$duration,
        rest = _objectWithoutProperties(_ref, ['timing', 'delay', 'duration']);

    _classCallCheck(this, IOSSlideNavigatorAnimator);

    var _this = _possibleConstructorReturn(this, (IOSSlideNavigatorAnimator.__proto__ || Object.getPrototypeOf(IOSSlideNavigatorAnimator)).call(this, _extends({ timing: timing, delay: delay, duration: duration }, rest)));

    _this.backgroundMask = _util2.default.createElement('<div style="position: absolute; width: 100%; height: 100%;' + 'background-color: black; z-index: 2"></div>');
    return _this;
  }

  _createClass(IOSSlideNavigatorAnimator, [{
    key: '_decompose',
    value: function _decompose(page) {
      var toolbar = page._getToolbarElement();
      var left = toolbar._getToolbarLeftItemsElement();
      var right = toolbar._getToolbarRightItemsElement();

      var excludeBackButton = function excludeBackButton(elements) {
        var result = [];

        for (var i = 0; i < elements.length; i++) {
          if (elements[i].nodeName.toLowerCase() !== 'ons-back-button') {
            result.push(elements[i]);
          }
        }

        return result;
      };

      var other = [].concat(left.children.length === 0 ? left : excludeBackButton(left.children)).concat(right.children.length === 0 ? right : excludeBackButton(right.children));

      return {
        toolbarCenter: toolbar._getToolbarCenterItemsElement(),
        backButtonIcon: toolbar._getToolbarBackButtonIconElement(),
        backButtonLabel: toolbar._getToolbarBackButtonLabelElement(),
        other: other,
        content: page._getContentElement(),
        background: page._getBackgroundElement(),
        toolbar: toolbar,
        bottomToolbar: page._getBottomToolbarElement()
      };
    }
  }, {
    key: '_shouldAnimateToolbar',
    value: function _shouldAnimateToolbar(enterPage, leavePage) {
      var toolbars = enterPage._canAnimateToolbar() && leavePage._canAnimateToolbar();

      var enterToolbar = enterPage._getToolbarElement();
      var leaveToolbar = leavePage._getToolbarElement();

      var isStatic = enterToolbar.hasAttribute('static') || leaveToolbar.hasAttribute('static');
      var isMaterial = _util2.default.hasModifier(enterToolbar, 'material') || _util2.default.hasModifier(leaveToolbar, 'material');
      var isTransparent = _util2.default.hasModifier(enterToolbar, 'transparent') || _util2.default.hasModifier(leaveToolbar, 'transparent');

      return toolbars && !isStatic && !isMaterial && !isTransparent;
    }
  }, {
    key: '_calculateDelta',
    value: function _calculateDelta(element, decomposition) {
      var title = void 0,
          label = void 0;

      var pageRect = element.getBoundingClientRect();
      if (decomposition.backButtonLabel.classList.contains('back-button__label')) {
        var labelRect = decomposition.backButtonLabel.getBoundingClientRect();
        title = Math.round(pageRect.width / 2 - labelRect.width / 2 - labelRect.left);
      } else {
        title = Math.round(pageRect.width / 2 * 0.6);
      }

      if (decomposition.backButtonIcon.classList.contains('back-button__icon')) {
        label = decomposition.backButtonIcon.getBoundingClientRect().right - 2;
      }

      return { title: title, label: label };
    }

    /**
     * @param {Object} enterPage
     * @param {Object} leavePage
     * @param {Function} callback
     */

  }, {
    key: 'push',
    value: function push(enterPage, leavePage, callback) {
      var _this2 = this;

      this.backgroundMask.remove();
      leavePage.parentNode.insertBefore(this.backgroundMask, leavePage);

      var unblock = _get(IOSSlideNavigatorAnimator.prototype.__proto__ || Object.getPrototypeOf(IOSSlideNavigatorAnimator.prototype), 'block', this).call(this, enterPage);

      (0, _contentReady2.default)(enterPage, function () {
        var enterPageTarget = _util2.default.findToolbarPage(enterPage) || enterPage;
        var leavePageTarget = _util2.default.findToolbarPage(leavePage) || leavePage;
        var enterPageDecomposition = _this2._decompose(enterPageTarget);
        var leavePageDecomposition = _this2._decompose(leavePageTarget);

        var delta = _this2._calculateDelta(leavePage, enterPageDecomposition);

        var shouldAnimateToolbar = _this2._shouldAnimateToolbar(enterPageTarget, leavePageTarget);

        if (shouldAnimateToolbar) {

          _animit2.default.runAll((0, _animit2.default)([enterPageDecomposition.content, enterPageDecomposition.bottomToolbar, enterPageDecomposition.background], _this2.def).default({ transform: translate3d('100%') }, { transform: translate3d() }), (0, _animit2.default)(enterPageDecomposition.toolbar, _this2.def).default({ opacity: 0 }, { opacity: 1 }), (0, _animit2.default)(enterPageDecomposition.toolbarCenter, _this2.def).default({ transform: translate3d('125%'), opacity: 1 }, { transform: translate3d(), opacity: 1 }), (0, _animit2.default)(enterPageDecomposition.backButtonLabel, _this2.def).default({ transform: translate3d(delta.title + 'px'), opacity: 0 }, {
            transform: translate3d(),
            opacity: 1,
            transition: 'opacity ' + _this2.duration + 's linear, transform ' + _this2.duration + 's ' + _this2.timing
          }), (0, _animit2.default)(enterPageDecomposition.other, _this2.def).default({ opacity: 0 }, { css: { opacity: 1 }, timing: 'linear' }), (0, _animit2.default)([leavePageDecomposition.content, leavePageDecomposition.bottomToolbar, leavePageDecomposition.background], _this2.def).default({ transform: translate3d(), opacity: 1 }, { transform: translate3d('-25%'), opacity: 0.9 }).queue(function (done) {
            _this2.backgroundMask.remove();
            unblock();
            callback();
            done();
          }), (0, _animit2.default)(leavePageDecomposition.toolbarCenter, _this2.def).default({ transform: translate3d(), opacity: 1 }, {
            transform: translate3d('-' + delta.title + 'px'),
            opacity: 0,
            transition: 'opacity ' + _this2.duration + 's linear, transform ' + _this2.duration + 's ' + _this2.timing
          }), (0, _animit2.default)(leavePageDecomposition.backButtonLabel, _this2.def).default({ transform: translate3d(), opacity: 1 }, { transform: translate3d('-' + delta.label + 'px'), opacity: 0 }), (0, _animit2.default)(leavePageDecomposition.other, _this2.def).default({ opacity: 1 }, { css: { opacity: 0 }, timing: 'linear' }));
        } else {

          _animit2.default.runAll((0, _animit2.default)(enterPage, _this2.def).default({ transform: translate3d('100%') }, { transform: translate3d() }), (0, _animit2.default)(leavePage, _this2.def).default({ transform: translate3d(), opacity: 1 }, { transform: translate3d('-25%'), opacity: .9 }).queue(function (done) {
            _this2.backgroundMask.remove();
            unblock();
            callback();
            done();
          }));
        }
      });
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

      if (this.isSwiping) {
        return this.popSwipe(enterPage, leavePage, callback);
      }

      this.backgroundMask.remove();
      enterPage.parentNode.insertBefore(this.backgroundMask, enterPage);

      var unblock = _get(IOSSlideNavigatorAnimator.prototype.__proto__ || Object.getPrototypeOf(IOSSlideNavigatorAnimator.prototype), 'block', this).call(this, enterPage);

      var enterPageTarget = _util2.default.findToolbarPage(enterPage) || enterPage;
      var leavePageTarget = _util2.default.findToolbarPage(leavePage) || leavePage;
      var enterPageDecomposition = this._decompose(enterPageTarget);
      var leavePageDecomposition = this._decompose(leavePageTarget);

      var delta = this._calculateDelta(leavePage, leavePageDecomposition);

      var shouldAnimateToolbar = this._shouldAnimateToolbar(enterPageTarget, leavePageTarget);

      if (shouldAnimateToolbar) {
        _animit2.default.runAll((0, _animit2.default)([enterPageDecomposition.content, enterPageDecomposition.bottomToolbar, enterPageDecomposition.background], this.def).default({ transform: translate3d('-25%'), opacity: .9 }, { transform: translate3d(), opacity: 1 }), (0, _animit2.default)(enterPageDecomposition.toolbarCenter, this.def).default({ transform: translate3d('-' + delta.title + 'px'), opacity: 0 }, {
          transform: translate3d(),
          opacity: 1,
          transition: 'opacity ' + this.duration + 's linear, transform ' + this.duration + 's ' + this.timing
        }), (0, _animit2.default)(enterPageDecomposition.backButtonLabel, this.def).default({ transform: translate3d('-' + delta.label + 'px') }, { transform: translate3d() }), (0, _animit2.default)(enterPageDecomposition.other, this.def).default({ opacity: 0 }, { css: { opacity: 1 }, timing: 'linear' }), (0, _animit2.default)([leavePageDecomposition.content, leavePageDecomposition.bottomToolbar, leavePageDecomposition.background], this.def).default({ transform: translate3d() }, { transform: translate3d('100%') }).wait(0).queue(function (done) {
          _this3.backgroundMask.remove();
          unblock();
          callback();
          done();
        }), (0, _animit2.default)(leavePageDecomposition.toolbar, this.def).default({ opacity: 1 }, { opacity: 0 }), (0, _animit2.default)(leavePageDecomposition.toolbarCenter, this.def).default({ transform: translate3d() }, { transform: translate3d('125%') }), (0, _animit2.default)(leavePageDecomposition.backButtonLabel, this.def).default({ transform: translate3d(), opacity: 1 }, {
          transform: translate3d(delta.title + 'px'),
          opacity: 0,
          transition: 'opacity ' + this.duration + 's linear, transform ' + this.duration + 's ' + this.timing
        }));
      } else {
        _animit2.default.runAll((0, _animit2.default)(enterPage, this.def).default({ transform: translate3d('-25%'), opacity: .9 }, { transform: translate3d(), opacity: 1 }), (0, _animit2.default)(leavePage, this.def).default({ transform: translate3d() }, { transform: translate3d('100%') }).queue(function (done) {
          _this3.backgroundMask.remove();
          unblock();
          callback();
          done();
        }));
      }
    }
  }]);

  return IOSSlideNavigatorAnimator;
}(_iosSwipeAnimator2.default);

exports.default = IOSSlideNavigatorAnimator;