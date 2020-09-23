'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _orientation = require('../ons/orientation');

var _orientation2 = _interopRequireDefault(_orientation);

var _platform = require('../ons/platform');

var _platform2 = _interopRequireDefault(_platform);

var _baseElement = require('./base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _contentReady = require('../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

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
 * @element ons-if
 * @category conditional
 * @tutorial vanilla/Reference/if
 * @description
 *   [en]
 *     Conditionally display content depending on the platform, device orientation or both.
 *
 *     Sometimes it is useful to conditionally hide or show certain components based on platform. When running on iOS the `<ons-if>` element can be used to hide the `<ons-fab>` element.
 *   [/en]
 *   [ja][/ja]
 * @guide theming.html#cross-platform-styling-autostyling [en]Information about cross platform styling[/en][ja]Information about cross platform styling[/ja]
 * @example
 * <ons-page>
 *   <ons-if orientation="landscape">
 *     Landscape view!
 *   </ons-if>
 *   <ons-if platform="android">
 *     This is Android.
 *   </ons-if>
 *   <ons-if platform="ios other">
 *     This is not Android.
 *   </ons-if>
 * </ons-page>
 */
var IfElement = function (_BaseElement) {
  _inherits(IfElement, _BaseElement);

  /**
   * @attribute platform
   * @initonly
   * @type {string}
   * @description
   *  [en]Space-separated platform names. Possible values are `"ios"`, `"android"`, `"windows"` and `"other"`.[/en]
   *  [ja][/ja]
   */

  /**
   * @attribute orientation
   * @type {string}
   * @description
   *  [en]Either `"portrait"` or `"landscape"`.[/en]
   *  [ja]portraitもしくはlandscapeを指定します[/ja]
   */

  function IfElement() {
    _classCallCheck(this, IfElement);

    var _this = _possibleConstructorReturn(this, (IfElement.__proto__ || Object.getPrototypeOf(IfElement)).call(this));

    (0, _contentReady2.default)(_this, function () {
      if (_platform2.default._getSelectedPlatform() !== null) {
        _this._platformUpdate();
      } else if (!_this._isAllowedPlatform()) {
        while (_this.childNodes[0]) {
          _this.childNodes[0].remove();
        }
        _this._platformUpdate();
      }
    });

    _this._onOrientationChange();
    return _this;
  }

  _createClass(IfElement, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _orientation2.default.on('change', this._onOrientationChange.bind(this));
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name) {
      if (name === 'orientation') {
        this._onOrientationChange();
      }
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      _orientation2.default.off('change', this._onOrientationChange);
    }
  }, {
    key: '_platformUpdate',
    value: function _platformUpdate() {
      this.style.display = this._isAllowedPlatform() ? '' : 'none';
    }
  }, {
    key: '_isAllowedPlatform',
    value: function _isAllowedPlatform() {
      return !this.getAttribute('platform') || this.getAttribute('platform').split(/\s+/).indexOf(_platform2.default.getMobileOS()) >= 0;
    }
  }, {
    key: '_onOrientationChange',
    value: function _onOrientationChange() {
      if (this.hasAttribute('orientation') && this._isAllowedPlatform()) {
        var conditionalOrientation = this.getAttribute('orientation').toLowerCase();
        var currentOrientation = _orientation2.default.isPortrait() ? 'portrait' : 'landscape';

        this.style.display = conditionalOrientation === currentOrientation ? '' : 'none';
      }
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['orientation'];
    }
  }]);

  return IfElement;
}(_baseElement2.default);

exports.default = IfElement;


_elements2.default.If = IfElement;
customElements.define('ons-if', IfElement);