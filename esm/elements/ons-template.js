'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

var _baseElement = require('./base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

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
 * @element ons-template
 * @category util
 * @description
 *   [en]
 *     Define a separate HTML fragment and use as a template. These templates can be loaded as pages in `<ons-navigator>`, `<ons-tabbar>` and `<ons-splitter>`. They can also be used to generate dialogs. Since Onsen UI 2.4.0, the native `<template>` element can be used instead of `<ons-template>` for better performance and features. `<ons-template>` is still supported for backward compatibility.
 *   [/en]
 *   [ja]テンプレートとして使用するためのHTMLフラグメントを定義します。この要素でHTMLを宣言すると、id属性に指定した名前をpageのURLとしてons-navigatorなどのコンポーネントから参照できます。[/ja]
 * @seealso ons-navigator
 *   [en]The `<ons-navigator>` component enables stack based navigation.[/en]
 *   [ja][/ja]
 * @seealso ons-tabbar
 *   [en]The `<ons-tabbar>` component is used to add tab navigation.[/en]
 *   [ja][/ja]
 * @seealso ons-splitter
 *   [en]The `<ons-splitter>` component can be used to create a draggable menu or column based layout.[/en]
 *   [ja][/ja]
 * @example
 * <ons-template id="foobar.html">
 *   <ons-page>
 *     Page content
 *   </ons-page>
 * </ons-template>
 *
 * <ons-navigator page="foobar.html"></ons-navigator>
 */
var TemplateElement = function (_BaseElement) {
  _inherits(TemplateElement, _BaseElement);

  /**
   * @property template
   * @type {String}
   * @description
   *  [en]Template content. This property can not be used with AngularJS bindings.[/en]
   *  [ja][/ja]
   */

  function TemplateElement() {
    _classCallCheck(this, TemplateElement);

    var _this = _possibleConstructorReturn(this, (TemplateElement.__proto__ || Object.getPrototypeOf(TemplateElement)).call(this));

    _this.template = _this.innerHTML;

    while (_this.firstChild) {
      _this.removeChild(_this.firstChild);
    }
    return _this;
  }

  _createClass(TemplateElement, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (this.parentNode) {
        // Note: this.parentNode is not set in some CE0/CE1 polyfills.
        // Show warning when the ons-template is not located just under document.body
        if (this.parentNode !== document.body) {
          // if the parent is not document.body
          _util2.default.warn('ons-template (id = ' + this.getAttribute('id') + ') must be located just under document.body' + (this.parentNode.outerHTML ? ':\n\n' + this.parentNode.outerHTML : '.'));
        }
      }

      var event = new CustomEvent('_templateloaded', { bubbles: true, cancelable: true });
      event.template = this.template;
      event.templateId = this.getAttribute('id');

      this.dispatchEvent(event);
    }
  }]);

  return TemplateElement;
}(_baseElement2.default);

exports.default = TemplateElement;


_elements2.default.Template = TemplateElement;
customElements.define('ons-template', TemplateElement);