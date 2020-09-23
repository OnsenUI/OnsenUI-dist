'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

var _autostyle = require('../ons/autostyle');

var _autostyle2 = _interopRequireDefault(_autostyle);

var _modifierUtil = require('../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

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

var scheme = {
  '.progress-bar': 'progress-bar--*',
  '.progress-bar__primary': 'progress-bar--*__primary',
  '.progress-bar__secondary': 'progress-bar--*__secondary'
};

var template = _util2.default.createElement('\n  <div class="progress-bar">\n    <div class="progress-bar__secondary"></div>\n    <div class="progress-bar__primary"></div>\n  </div>\n');

var INDET = 'indeterminate';

/**
 * @element ons-progress-bar
 * @category visual
 * @modifier material
 *   [en]Display a Material Design progress bar.[/en]
 *   [ja]マテリアルデザインのスタイルでプログレスバーを表示します。[/ja]
 * @description
 *   [en]
 *     The component is used to display a linear progress bar. It can either display a progress bar that shows the user how much of a task has been completed. In the case where the percentage is not known it can be used to display an animated progress bar so the user can see that an operation is in progress.
 *   [/en]
 *   [ja][/ja]
 * @codepen zvQbGj
 * @tutorial vanilla/Reference/progress
 * @seealso ons-progress-circular
 *   [en]The `<ons-progress-circular>` component displays a circular progress indicator.[/en]
 *   [ja][/ja]
 * @example
 * <ons-progress-bar
 *  value="55"
 *  secondary-value="87">
 * </ons-progress-bar>
 *
 * <ons-progress-bar
 *  indeterminate>
 * </ons-progress-bar>
 */

var ProgressBarElement = function (_BaseElement) {
  _inherits(ProgressBarElement, _BaseElement);

  /**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]Change the appearance of the progress indicator.[/en]
   *   [ja]プログレスインジケータの見た目を変更します。[/ja]
   */

  /**
   * @attribute value
   * @type {Number}
   * @description
   *   [en]Current progress. Should be a value between 0 and 100.[/en]
   *   [ja]現在の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
   */

  /**
   * @attribute secondary-value
   * @type {Number}
   * @description
   *   [en]Current secondary progress. Should be a value between 0 and 100.[/en]
   *   [ja]現在の２番目の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
   */

  /**
   * @attribute indeterminate
   * @description
   *   [en]If this attribute is set, an infinite looping animation will be shown.[/en]
   *   [ja]この属性が設定された場合、ループするアニメーションが表示されます。[/ja]
   */

  function ProgressBarElement() {
    _classCallCheck(this, ProgressBarElement);

    var _this = _possibleConstructorReturn(this, (ProgressBarElement.__proto__ || Object.getPrototypeOf(ProgressBarElement)).call(this));

    (0, _contentReady2.default)(_this, function () {
      return _this._compile();
    });
    return _this;
  }

  _createClass(ProgressBarElement, [{
    key: '_compile',
    value: function _compile() {
      if (!this._isCompiled()) {
        this._template = template.cloneNode(true);
      } else {
        this._template = _util2.default.findChild(this, '.progress-bar');
      }

      this._primary = _util2.default.findChild(this._template, '.progress-bar__primary');
      this._secondary = _util2.default.findChild(this._template, '.progress-bar__secondary');

      this._updateDeterminate();
      this._updateValue();

      this.appendChild(this._template);

      _autostyle2.default.prepare(this);
      _modifierUtil2.default.initModifier(this, scheme);
    }
  }, {
    key: '_isCompiled',
    value: function _isCompiled() {
      if (!_util2.default.findChild(this, '.progress-bar')) {
        return false;
      }

      var barElement = _util2.default.findChild(this, '.progress-bar');

      if (!_util2.default.findChild(barElement, '.progress-bar__secondary')) {
        return false;
      }

      if (!_util2.default.findChild(barElement, '.progress-bar__primary')) {
        return false;
      }

      return true;
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      if (name === 'modifier') {
        _modifierUtil2.default.onModifierChanged(last, current, this, scheme);
        this.hasAttribute(INDET) && this._updateDeterminate();
      } else if (name === 'value' || name === 'secondary-value') {
        this._updateValue();
      } else if (name === INDET) {
        this._updateDeterminate();
      }
    }
  }, {
    key: '_updateDeterminate',
    value: function _updateDeterminate() {
      var _this2 = this;

      (0, _contentReady2.default)(this, function () {
        return _util2.default.toggleModifier(_this2, INDET, { force: _this2.hasAttribute(INDET) });
      });
    }
  }, {
    key: '_updateValue',
    value: function _updateValue() {
      var _this3 = this;

      (0, _contentReady2.default)(this, function () {
        _this3._primary.style.width = _this3.hasAttribute('value') ? _this3.getAttribute('value') + '%' : '0%';
        _this3._secondary.style.width = _this3.hasAttribute('secondary-value') ? _this3.getAttribute('secondary-value') + '%' : '0%';
      });
    }

    /**
     * @property value
     * @type {Number}
     * @description
     *   [en]Current progress. Should be a value between 0 and 100.[/en]
     *   [ja]現在の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
     */

  }, {
    key: 'value',
    set: function set(value) {
      if (typeof value !== 'number' || value < 0 || value > 100) {
        _util2.default.throw('Invalid value');
      }

      this.setAttribute('value', Math.floor(value));
    },
    get: function get() {
      return parseInt(this.getAttribute('value') || '0');
    }

    /**
     * @property secondaryValue
     * @type {Number}
     * @description
     *   [en]Current secondary progress. Should be a value between 0 and 100.[/en]
     *   [ja]現在の２番目の進行状況の値を指定します。0から100の間の値を指定して下さい。[/ja]
     */

  }, {
    key: 'secondaryValue',
    set: function set(value) {
      if (typeof value !== 'number' || value < 0 || value > 100) {
        _util2.default.throw('Invalid value');
      }

      this.setAttribute('secondary-value', Math.floor(value));
    },
    get: function get() {
      return parseInt(this.getAttribute('secondary-value') || '0');
    }

    /**
     * @property indeterminate
     * @type {Boolean}
     * @description
     *   [en]If this property is `true`, an infinite looping animation will be shown.[/en]
     *   [ja]この属性が設定された場合、ループするアニメーションが表示されます。[/ja]
     */

  }, {
    key: 'indeterminate',
    set: function set(value) {
      if (value) {
        this.setAttribute(INDET, '');
      } else {
        this.removeAttribute(INDET);
      }
    },
    get: function get() {
      return this.hasAttribute(INDET);
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['modifier', 'value', 'secondary-value', INDET];
    }
  }]);

  return ProgressBarElement;
}(_baseElement2.default);

exports.default = ProgressBarElement;


_elements2.default.ProgressBar = ProgressBarElement;
customElements.define('ons-progress-bar', ProgressBarElement);