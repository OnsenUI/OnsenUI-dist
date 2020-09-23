'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

var _internal = require('../internal');

var _internal2 = _interopRequireDefault(_internal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimatorFactory = function () {

  /**
   * @param {Object} opts
   * @param {Object} opts.animators The dictionary for animator classes
   * @param {Function} opts.baseClass The base class of animators
   * @param {String} [opts.baseClassName] The name of the base class of animators
   * @param {String} [opts.defaultAnimation] The default animation name
   * @param {Object} [opts.defaultAnimationOptions] The default animation options
   */
  function AnimatorFactory(opts) {
    _classCallCheck(this, AnimatorFactory);

    this._animators = opts.animators;
    this._baseClass = opts.baseClass;
    this._baseClassName = opts.baseClassName || opts.baseClass.name;
    this._animation = opts.defaultAnimation || 'default';
    this._animationOptions = opts.defaultAnimationOptions || {};

    if (!this._animators[this._animation]) {
      _util2.default.throw('No such animation: ' + this._animation);
    }
  }

  /**
   * @param {String} jsonString
   * @return {Object/null}
   */


  _createClass(AnimatorFactory, [{
    key: 'setAnimationOptions',


    /**
     * @param {Object} options
     */
    value: function setAnimationOptions(options) {
      this._animationOptions = options;
    }

    /**
     * @param {Object} options
     * @param {String} [options.animation] The animation name
     * @param {Object} [options.animationOptions] The animation options
     * @param {Object} defaultAnimator The default animator instance
     * @return {Object} An animator instance
     */

  }, {
    key: 'newAnimator',
    value: function newAnimator() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var defaultAnimator = arguments[1];


      var animator = null;

      if (options.animation instanceof this._baseClass) {
        return options.animation;
      }

      var Animator = null;

      if (typeof options.animation === 'string') {
        Animator = this._animators[options.animation];
      }

      if (!Animator && defaultAnimator) {
        animator = defaultAnimator;
      } else {
        Animator = Animator || this._animators[this._animation];

        var animationOpts = _util2.default.extend({}, this._animationOptions, options.animationOptions || {}, _internal2.default.config.animationsDisabled ? { duration: 0, delay: 0 } : {});

        animator = new Animator(animationOpts);

        if (typeof animator === 'function') {
          animator = new animator(animationOpts); // eslint-disable-line new-cap
        }
      }

      if (!(animator instanceof this._baseClass)) {
        _util2.default.throw('"animator" is not an instance of ' + this._baseClassName);
      }

      return animator;
    }
  }], [{
    key: 'parseAnimationOptionsString',
    value: function parseAnimationOptionsString(jsonString) {
      try {
        if (typeof jsonString === 'string') {
          var result = _util2.default.animationOptionsParse(jsonString);
          if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' && result !== null) {
            return result;
          } else {
            console.error('"animation-options" attribute must be a JSON object string: ' + jsonString);
          }
        }
        return {};
      } catch (e) {
        console.error('"animation-options" attribute must be a JSON object string: ' + jsonString);
        return {};
      }
    }
  }]);

  return AnimatorFactory;
}();

exports.default = AnimatorFactory;