'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('../../ons/util');

var _util2 = _interopRequireDefault(_util);

var _baseElement = require('./base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _autostyle = require('../../ons/autostyle');

var _autostyle2 = _interopRequireDefault(_autostyle);

var _modifierUtil = require('../../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

var _contentReady = require('../../ons/content-ready');

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

var INPUT_ATTRIBUTES = ['autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'disabled', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'validator', 'value'];

var BaseInputElement = function (_BaseElement) {
  _inherits(BaseInputElement, _BaseElement);

  _createClass(BaseInputElement, [{
    key: '_update',
    value: function _update() {} // Optionally implemented

  }, {
    key: '_scheme',
    get: function get() {
      _util2.default.throwMember();
    }
  }, {
    key: '_template',
    get: function get() {
      _util2.default.throwMember();
    }
  }, {
    key: 'type',
    get: function get() {
      _util2.default.throwMember();
    }
  }]);

  function BaseInputElement() {
    _classCallCheck(this, BaseInputElement);

    var _this = _possibleConstructorReturn(this, (BaseInputElement.__proto__ || Object.getPrototypeOf(BaseInputElement)).call(this));

    if (_this.constructor === BaseInputElement) {
      _util2.default.throwAbstract();
    }

    (0, _contentReady2.default)(_this, function () {
      return _this._compile();
    });
    _this._boundDelegateEvent = _this._delegateEvent.bind(_this);
    return _this;
  }

  _createClass(BaseInputElement, [{
    key: '_compile',
    value: function _compile() {
      _autostyle2.default.prepare(this);
      this._defaultClassName && this.classList.add(this._defaultClassName);

      if (this.children.length !== 0) {
        return;
      }

      this.appendChild(_util2.default.createFragment(this._template));

      this._setInputId();

      this._updateBoundAttributes();

      _modifierUtil2.default.initModifier(this, this._scheme);
    }
  }, {
    key: '_updateBoundAttributes',
    value: function _updateBoundAttributes() {
      var _this2 = this;

      INPUT_ATTRIBUTES.forEach(function (attr) {
        if (_this2.hasAttribute(attr)) {
          _this2._input.setAttribute(attr, _this2.getAttribute(attr));
        } else {
          _this2._input.removeAttribute(attr);
        }
      });

      this._update();
    }
  }, {
    key: '_delegateEvent',
    value: function _delegateEvent(event) {
      var e = new CustomEvent(event.type, {
        bubbles: false,
        cancelable: true
      });

      return this.dispatchEvent(e);
    }
  }, {
    key: '_setInputId',
    value: function _setInputId() {
      if (this.hasAttribute('input-id')) {
        this._input.id = this.getAttribute('input-id');
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this3 = this;

      (0, _contentReady2.default)(this, function () {
        _this3._input.addEventListener('focus', _this3._boundDelegateEvent);
        _this3._input.addEventListener('blur', _this3._boundDelegateEvent);
      });
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      var _this4 = this;

      (0, _contentReady2.default)(this, function () {
        _this4._input.removeEventListener('focus', _this4._boundDelegateEvent);
        _this4._input.removeEventListener('blur', _this4._boundDelegateEvent);
      });
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      var _this5 = this;

      switch (name) {
        case 'modifier':
          (0, _contentReady2.default)(this, function () {
            return _modifierUtil2.default.onModifierChanged(last, current, _this5, _this5._scheme);
          });
          break;
        case 'input-id':
          (0, _contentReady2.default)(this, function () {
            return _this5._setInputId();
          });
          break;
        case 'class':
          _util2.default.restoreClass(this, this._defaultClassName, this._scheme);
          break;
      }

      if (INPUT_ATTRIBUTES.indexOf(name) >= 0) {
        (0, _contentReady2.default)(this, function () {
          return _this5._updateBoundAttributes();
        });
      }
    }
  }, {
    key: '_defaultClassName',
    get: function get() {
      return '';
    }
  }, {
    key: '_input',
    get: function get() {
      return this.querySelector('input');
    }
  }, {
    key: 'value',
    get: function get() {
      return this._input === null ? this.getAttribute('value') : this._input.value;
    },
    set: function set(val) {
      var _this6 = this;

      (0, _contentReady2.default)(this, function () {
        if (val instanceof Date) {
          val = val.toISOString().substring(0, 10);
        }
        _this6._input.value = val;
        _this6._update();
      });
    }
  }, {
    key: 'disabled',
    set: function set(value) {
      return _util2.default.toggleAttribute(this, 'disabled', value);
    },
    get: function get() {
      return this.hasAttribute('disabled');
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['modifier', 'input-id', 'class'].concat(INPUT_ATTRIBUTES);
    }
  }]);

  return BaseInputElement;
}(_baseElement2.default);

exports.default = BaseInputElement;