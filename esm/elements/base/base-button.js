'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _autostyle = require('../../ons/autostyle');

var _autostyle2 = _interopRequireDefault(_autostyle);

var _contentReady = require('../../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

var _modifierUtil = require('../../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

var _baseElement = require('./base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

var BaseButtonElement = function (_BaseElement) {
  _inherits(BaseButtonElement, _BaseElement);

  _createClass(BaseButtonElement, [{
    key: '_scheme',
    get: function get() {
      _util2.default.throwMember();
    }
  }, {
    key: '_defaultClassName',
    get: function get() {
      _util2.default.throwMember();
    }
  }, {
    key: '_rippleOpt',
    get: function get() {
      return [this];
    }
  }]);

  function BaseButtonElement() {
    _classCallCheck(this, BaseButtonElement);

    var _this = _possibleConstructorReturn(this, (BaseButtonElement.__proto__ || Object.getPrototypeOf(BaseButtonElement)).call(this));

    if (_this.constructor === BaseButtonElement) {
      _util2.default.throwAbstract();
    }

    (0, _contentReady2.default)(_this, function () {
      return _this._compile();
    });
    return _this;
  }

  _createClass(BaseButtonElement, [{
    key: '_compile',
    value: function _compile() {
      _autostyle2.default.prepare(this);

      this.classList.add(this._defaultClassName);

      if (!this._icon && this.hasAttribute('icon')) {
        _util2.default.checkMissingImport('Icon');
        var icon = _util2.default.createElement('<ons-icon icon="' + this.getAttribute('icon') + '"></ons-icon>');
        icon.classList.add(this._defaultClassName.replace('button', 'icon'));
        this.insertBefore(icon, this.firstChild);
      }

      this._updateRipple();

      _modifierUtil2.default.initModifier(this, this._scheme);
    }
  }, {
    key: '_updateIcon',
    value: function _updateIcon() {
      if (this._icon) {
        this._icon.setAttribute('icon', this.getAttribute('icon'));
      }
    }
  }, {
    key: '_updateRipple',
    value: function _updateRipple() {
      this._rippleOpt && _util2.default.updateRipple.apply(_util2.default, _toConsumableArray(this._rippleOpt));
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      switch (name) {
        case 'class':
          _util2.default.restoreClass(this, this._defaultClassName, this._scheme);
          break;
        case 'modifier':
          _modifierUtil2.default.onModifierChanged(last, current, this, this._scheme);
          break;
        case 'icon':
          this._updateIcon();
          break;
        case 'ripple':
          this.classList.contains(this._defaultClassName) && this._updateRipple();
          break;
      }
    }
  }, {
    key: 'disabled',
    set: function set(value) {
      return _util2.default.toggleAttribute(this, 'disabled', value);
    },
    get: function get() {
      return this.hasAttribute('disabled');
    }
  }, {
    key: '_icon',
    get: function get() {
      return _util2.default.findChild(this, 'ons-icon');
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['modifier', 'class', 'icon', 'ripple'];
    }
  }]);

  return BaseButtonElement;
}(_baseElement2.default);

exports.default = BaseButtonElement;