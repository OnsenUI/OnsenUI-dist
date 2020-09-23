'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animator = require('./animator');

var _animator2 = _interopRequireDefault(_animator);

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _animit = require('../../ons/animit');

var _animit2 = _interopRequireDefault(_animit);

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

/**
 * Abstract swipe animator for iOS navigator transition.
 */
var IOSSwipeNavigatorAnimator = function (_NavigatorAnimator) {
  _inherits(IOSSwipeNavigatorAnimator, _NavigatorAnimator);

  _createClass(IOSSwipeNavigatorAnimator, null, [{
    key: 'swipeable',
    get: function get() {
      return true;
    }
  }]);

  function IOSSwipeNavigatorAnimator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref$durationRestore = _ref.durationRestore,
        durationRestore = _ref$durationRestore === undefined ? 0.1 : _ref$durationRestore,
        _ref$durationSwipe = _ref.durationSwipe,
        durationSwipe = _ref$durationSwipe === undefined ? 0.15 : _ref$durationSwipe,
        _ref$timingSwipe = _ref.timingSwipe,
        timingSwipe = _ref$timingSwipe === undefined ? 'linear' : _ref$timingSwipe,
        rest = _objectWithoutProperties(_ref, ['durationRestore', 'durationSwipe', 'timingSwipe']);

    _classCallCheck(this, IOSSwipeNavigatorAnimator);

    var _this = _possibleConstructorReturn(this, (IOSSwipeNavigatorAnimator.__proto__ || Object.getPrototypeOf(IOSSwipeNavigatorAnimator)).call(this, _extends({}, rest)));

    if (_this.constructor === IOSSwipeNavigatorAnimator) {
      _util2.default.throwAbstract();
    }

    _this.durationRestore = durationRestore;
    _this.durationSwipe = durationSwipe;
    _this.timingSwipe = timingSwipe;

    _this.optSwipe = { timing: timingSwipe, duration: durationSwipe };
    _this.optRestore = { timing: timingSwipe, duration: durationRestore };

    _this.swipeShadow = _util2.default.createElement('<div style="position: absolute; height: 100%; width: 12px; right: 100%; top: 0; bottom: 0; z-index: -1;' + 'background: linear-gradient(to right, transparent 0, rgba(0,0,0,.04) 40%, rgba(0,0,0,.12) 80%, rgba(0,0,0,.16) 100%);"></div>');

    _this.isDragStart = true;
    return _this;
  }

  _createClass(IOSSwipeNavigatorAnimator, [{
    key: '_decompose',
    value: function _decompose() {
      _util2.default.throwMember();
    }
  }, {
    key: '_shouldAnimateToolbar',
    value: function _shouldAnimateToolbar() {
      _util2.default.throwMember();
    }
  }, {
    key: '_calculateDelta',
    value: function _calculateDelta() {
      _util2.default.throwMember();
    }
  }, {
    key: '_dragStartSetup',
    value: function _dragStartSetup(enterPage, leavePage) {
      this.isDragStart = false;

      // Avoid content clicks
      this.unblock = _get(IOSSwipeNavigatorAnimator.prototype.__proto__ || Object.getPrototypeOf(IOSSwipeNavigatorAnimator.prototype), 'block', this).call(this, leavePage);

      // Mask
      enterPage.parentElement.insertBefore(this.backgroundMask, enterPage);

      // Decomposition
      this.target = {
        enter: _util2.default.findToolbarPage(enterPage) || enterPage,
        leave: _util2.default.findToolbarPage(leavePage) || leavePage
      };
      this.decomp = {
        enter: this._decompose(this.target.enter),
        leave: this._decompose(this.target.leave)
      };

      // Animation values
      this.delta = this._calculateDelta(leavePage, this.decomp.leave);
      this.shouldAnimateToolbar = this._shouldAnimateToolbar(this.target.enter, this.target.leave);

      // Shadow && styles
      if (this.shouldAnimateToolbar) {
        this.swipeShadow.style.top = this.decomp.leave.toolbar.offsetHeight + 'px';
        this.target.leave.appendChild(this.swipeShadow);
        this._saveStyle(this.target.enter, this.target.leave);
      } else {
        leavePage.appendChild(this.swipeShadow);
        this._saveStyle(enterPage, leavePage);
      }
      leavePage.classList.add('overflow-visible');
      this.overflowElement = leavePage;
      this.decomp.leave.content.classList.add('content-swiping');
    }
  }, {
    key: 'translate',
    value: function translate(distance, maxWidth, enterPage, leavePage) {
      this.isSwiping = true;

      if (enterPage.style.display === 'none') {
        enterPage.style.display = '';
      }

      if (this.isDragStart) {
        this.maxWidth = maxWidth;
        this._dragStartSetup(enterPage, leavePage);
      }

      var swipeRatio = (distance - maxWidth) / maxWidth;

      if (this.shouldAnimateToolbar) {

        _animit2.default.runAll(

        /* Enter page */

        (0, _animit2.default)([this.decomp.enter.content, this.decomp.enter.bottomToolbar, this.decomp.enter.background]).queue({
          transform: 'translate3d(' + swipeRatio * 25 + '%, 0, 0)',
          opacity: 1 + swipeRatio * 10 / 100 // 0.9 -> 1
        }), (0, _animit2.default)(this.decomp.enter.toolbarCenter).queue({
          transform: 'translate3d(' + this.delta.title * swipeRatio + 'px, 0, 0)',
          opacity: 1 + swipeRatio // 0 -> 1
        }), (0, _animit2.default)(this.decomp.enter.backButtonLabel).queue({
          opacity: 1 + swipeRatio * 10 / 100, // 0.9 -> 1
          transform: 'translate3d(' + this.delta.label * swipeRatio + 'px, 0, 0)'
        }), (0, _animit2.default)(this.decomp.enter.other).queue({
          opacity: 1 + swipeRatio // 0 -> 1
        }),

        /* Leave page */

        (0, _animit2.default)([this.decomp.leave.content, this.decomp.leave.bottomToolbar, this.decomp.leave.background, this.swipeShadow]).queue({
          transform: 'translate3d(' + distance + 'px, 0, 0)'
        }), (0, _animit2.default)(this.decomp.leave.toolbar).queue({
          opacity: -1 * swipeRatio // 1 -> 0
        }), (0, _animit2.default)(this.decomp.leave.toolbarCenter).queue({
          transform: 'translate3d(' + (1 + swipeRatio) * 125 + '%, 0, 0)'
        }), (0, _animit2.default)(this.decomp.leave.backButtonLabel).queue({
          opacity: -1 * swipeRatio, // 1 -> 0
          transform: 'translate3d(' + this.delta.title * (1 + swipeRatio) + 'px, 0, 0)'
        }),

        /* Other */

        (0, _animit2.default)(this.swipeShadow).queue({
          opacity: -1 * swipeRatio // 1 -> 0
        }));
      } else {
        _animit2.default.runAll((0, _animit2.default)(leavePage).queue({
          transform: 'translate3d(' + distance + 'px, 0, 0)'
        }), (0, _animit2.default)(enterPage).queue({
          transform: 'translate3d(' + swipeRatio * 25 + '%, 0, 0)',
          opacity: 1 + swipeRatio * 10 / 100 // 0.9 -> 1
        }), (0, _animit2.default)(this.swipeShadow).queue({
          opacity: -1 * swipeRatio // 1 -> 0
        }));
      }
    }
  }, {
    key: 'restore',
    value: function restore(enterPage, leavePage, callback) {
      var _this2 = this;

      if (this.isDragStart) {
        return;
      }

      if (this.shouldAnimateToolbar) {

        _animit2.default.runAll(

        /* Enter page */

        (0, _animit2.default)([this.decomp.enter.content, this.decomp.enter.bottomToolbar, this.decomp.enter.background]).queue({
          transform: 'translate3d(-25%, 0, 0)',
          opacity: 0.9
        }, this.optRestore), (0, _animit2.default)(this.decomp.enter.toolbarCenter).queue({
          transform: 'translate3d(-' + this.delta.title + 'px, 0, 0)',
          transition: 'opacity ' + this.durationRestore + 's linear, transform ' + this.durationRestore + 's ' + this.timingSwipe,
          opacity: 0
        }), (0, _animit2.default)(this.decomp.enter.backButtonLabel).queue({
          transform: 'translate3d(-' + this.delta.label + 'px, 0, 0)'
        }, this.optRestore), (0, _animit2.default)(this.decomp.enter.other).queue({
          opacity: 0
        }, this.optRestore),

        /* Leave page */

        (0, _animit2.default)([this.decomp.leave.content, this.decomp.leave.bottomToolbar, this.decomp.leave.background, this.swipeShadow]).queue({
          transform: 'translate3d(0, 0, 0)'
        }, this.optRestore), (0, _animit2.default)(this.decomp.leave.toolbar).queue({
          opacity: 1
        }, this.optRestore), (0, _animit2.default)(this.decomp.leave.toolbarCenter).queue({
          transform: 'translate3d(0, 0, 0)'
        }, this.optRestore), (0, _animit2.default)(this.decomp.leave.backButtonLabel).queue({
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
          transition: 'opacity ' + this.durationRestore + 's linear, transform ' + this.durationRestore + 's ' + this.timingSwipe
        }),

        /* Other */

        (0, _animit2.default)(this.swipeShadow).queue({
          opacity: 0
        }, this.optRestore).queue(function (done) {
          _this2._reset(_this2.target.enter, _this2.target.leave);
          enterPage.style.display = 'none';
          callback && callback();
          done();
        }));
      } else {
        _animit2.default.runAll((0, _animit2.default)(enterPage).queue({
          transform: 'translate3D(-25%, 0, 0)',
          opacity: 0.9
        }, this.optRestore), (0, _animit2.default)(leavePage).queue({
          transform: 'translate3D(0, 0, 0)'
        }, this.optRestore).queue(function (done) {
          _this2._reset(enterPage, leavePage);
          enterPage.style.display = 'none';
          callback && callback();
          done();
        }));
      }
    }
  }, {
    key: 'popSwipe',
    value: function popSwipe(enterPage, leavePage, callback) {
      var _this3 = this;

      if (this.isDragStart) {
        return;
      }

      if (this.shouldAnimateToolbar) {

        _animit2.default.runAll(

        /* Enter page */

        (0, _animit2.default)([this.decomp.enter.content, this.decomp.enter.bottomToolbar, this.decomp.enter.background]).queue({
          transform: 'translate3d(0, 0, 0)',
          opacity: 1
        }, this.optSwipe), (0, _animit2.default)(this.decomp.enter.toolbarCenter).queue({
          transform: 'translate3d(0, 0, 0)',
          transition: 'opacity ' + this.durationSwipe + 's linear, transform ' + this.durationSwipe + 's ' + this.timingSwipe,
          opacity: 1
        }), (0, _animit2.default)(this.decomp.enter.backButtonLabel).queue({
          transform: 'translate3d(0, 0, 0)'
        }, this.optSwipe), (0, _animit2.default)(this.decomp.enter.other).queue({
          opacity: 1
        }, this.optSwipe),

        /* Leave page */

        (0, _animit2.default)([this.decomp.leave.content, this.decomp.leave.bottomToolbar, this.decomp.leave.background]).queue({
          transform: 'translate3d(100%, 0, 0)'
        }, this.optSwipe), (0, _animit2.default)(this.decomp.leave.toolbar).queue({
          opacity: 0
        }, this.optSwipe), (0, _animit2.default)(this.decomp.leave.toolbarCenter).queue({
          transform: 'translate3d(125%, 0, 0)'
        }, this.optSwipe), (0, _animit2.default)(this.decomp.leave.backButtonLabel).queue({
          opacity: 0,
          transform: 'translate3d(' + this.delta.title + 'px, 0, 0)',
          transition: 'opacity ' + this.durationSwipe + 's linear, transform ' + this.durationSwipe + 's ' + this.timingSwipe
        }),

        /* Other */

        (0, _animit2.default)(this.swipeShadow).queue({
          opacity: 0,
          transform: 'translate3d(' + this.maxWidth + 'px, 0, 0)'
        }, this.optSwipe).queue(function (done) {
          _this3._reset(_this3.target.enter, _this3.target.leave);
          callback && callback();
          done();
        }));
      } else {
        _animit2.default.runAll((0, _animit2.default)(enterPage).queue({
          transform: 'translate3D(0, 0, 0)',
          opacity: 1.0
        }, this.optSwipe), (0, _animit2.default)(leavePage).queue({
          transform: 'translate3D(100%, 0, 0)'
        }, this.optSwipe).queue(function (done) {
          _this3._reset(enterPage, leavePage);
          callback && callback();
          done();
        }));
      }
    }
  }, {
    key: '_saveStyle',
    value: function _saveStyle() {
      var _this4 = this;

      this._savedStyle = new WeakMap();
      var save = function save(el) {
        return _this4._savedStyle.set(el, el.getAttribute('style'));
      };

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.forEach(save);

      Object.keys(this.decomp).forEach(function (p) {
        Object.keys(_this4.decomp[p]).forEach(function (k) {
          (_this4.decomp[p][k] instanceof Array ? _this4.decomp[p][k] : [_this4.decomp[p][k]]).forEach(save);
        });
      });
    }
  }, {
    key: '_restoreStyle',
    value: function _restoreStyle() {
      var _this5 = this;

      var restore = function restore(el) {
        _this5._savedStyle.get(el) === null ? el.removeAttribute('style') : el.setAttribute('style', _this5._savedStyle.get(el));
        _this5._savedStyle.delete(el);
      };

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args.forEach(restore);

      Object.keys(this.decomp).forEach(function (p) {
        Object.keys(_this5.decomp[p]).forEach(function (k) {
          (_this5.decomp[p][k] instanceof Array ? _this5.decomp[p][k] : [_this5.decomp[p][k]]).forEach(restore);
        });
      });
    }
  }, {
    key: '_reset',
    value: function _reset() {
      this.isSwiping = false;
      this._savedStyle && this._restoreStyle.apply(this, arguments);
      this.unblock && this.unblock();
      this.swipeShadow.remove();
      this.backgroundMask.remove();
      this.overflowElement.classList.remove('overflow-visible');
      this.decomp.leave.content.classList.remove('content-swiping');
      this.decomp = this.target = this.overflowElement = this._savedStyle = null;
      this.isDragStart = true;
    }
  }]);

  return IOSSwipeNavigatorAnimator;
}(_animator2.default);

exports.default = IOSSwipeNavigatorAnimator;