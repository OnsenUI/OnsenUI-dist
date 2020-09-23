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

var _onsTabbar = require('./ons-tabbar');

var _onsTabbar2 = _interopRequireDefault(_onsTabbar);

var _contentReady = require('../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

var _pageLoader = require('../ons/page-loader');

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

var defaultClassName = 'tabbar__item';

var scheme = {
  '': 'tabbar--*__item',
  '.tabbar__button': 'tabbar--*__button'
};

/**
 * @element ons-tab
 * @category tabbar
 * @description
 *   [en]Represents a tab inside tab bar. Each `<ons-tab>` represents a page.[/en]
 *   [ja]
 *     タブバーに配置される各アイテムのコンポーネントです。それぞれのons-tabはページを表します。
 *     ons-tab要素の中には、タブに表示されるコンテンツを直接記述することが出来ます。
 *   [/ja]
 * @codepen pGuDL
 * @tutorial vanilla/Reference/tabbar
 * @guide fundamentals.html#managing-pages
 *   [en]Managing multiple pages.[/en]
 *   [ja]複数のページを管理する[/ja]]
 * @guide appsize.html#removing-icon-packs [en]Removing icon packs.[/en][ja][/ja]
 * @guide faq.html#how-can-i-use-custom-icon-packs [en]Adding custom icon packs.[/en][ja][/ja]
 * @seealso ons-tabbar
 *   [en]ons-tabbar component[/en]
 *   [ja]ons-tabbarコンポーネント[/ja]
 * @seealso ons-page
 *   [en]ons-page component[/en]
 *   [ja]ons-pageコンポーネント[/ja]
 * @seealso ons-icon
 *   [en]ons-icon component[/en]
 *   [ja]ons-iconコンポーネント[/ja]
 * @example
 * <ons-tabbar>
 *   <ons-tab
 *     page="home.html"
 *     label="Home"
 *     active>
 *   </ons-tab>
 *   <ons-tab
 *     page="settings.html"
 *     label="Settings"
 *     active>
 *   </ons-tab>
 * </ons-tabbar>
 *
 * <template id="home.html">
 *   ...
 * </template>
 *
 * <template id="settings.html">
 *   ...
 * </template>

 */

var TabElement = function (_BaseElement) {
  _inherits(TabElement, _BaseElement);

  /**
   * @attribute page
   * @initonly
   * @type {String}
   * @description
   *   [en]The page that is displayed when the tab is tapped.[/en]
   *   [ja]ons-tabが参照するページへのURLを指定します。[/ja]
   */

  /**
   * @attribute icon
   * @type {String}
   * @description
   *   [en]
   *     The icon name for the tab. Can specify the same icon name as `<ons-icon>`. Check [See also](#seealso) section for more information.
   *   [/en]
   *   [ja]
   *     アイコン名を指定します。ons-iconと同じアイコン名を指定できます。
   *     個別にアイコンをカスタマイズする場合は、background-imageなどのCSSスタイルを用いて指定できます。
   *   [/ja]
   */

  /**
   * @attribute active-icon
   * @type {String}
   * @description
   *   [en]The name of the icon when the tab is active.[/en]
   *   [ja]アクティブの際のアイコン名を指定します。[/ja]
   */

  /**
   * @attribute label
   * @type {String}
   * @description
   *   [en]The label of the tab item.[/en]
   *   [ja]アイコン下に表示されるラベルを指定します。[/ja]
   */

  /**
   * @attribute badge
   * @type {String}
   * @description
   *   [en]Display a notification badge on top of the tab.[/en]
   *   [ja]バッジに表示する内容を指定します。[/ja]
   */

  /**
   * @attribute active
   * @description
   *   [en]This attribute should be set to the tab that is active by default.[/en]
   *   [ja][/ja]
   */

  function TabElement() {
    _classCallCheck(this, TabElement);

    var _this = _possibleConstructorReturn(this, (TabElement.__proto__ || Object.getPrototypeOf(TabElement)).call(this));

    if (['label', 'icon', 'badge'].some(_this.hasAttribute.bind(_this))) {
      _this._compile();
    } else {
      (0, _contentReady2.default)(_this, function () {
        return _this._compile();
      });
    }

    _this._pageLoader = _pageLoader.defaultPageLoader;
    _this._onClick = _this._onClick.bind(_this);
    return _this;
  }

  _createClass(TabElement, [{
    key: '_compile',
    value: function _compile() {
      _autostyle2.default.prepare(this);
      this.classList.add(defaultClassName);

      if (this._button) {
        return;
      }

      var button = _util2.default.create('button.tabbar__button');
      while (this.childNodes[0]) {
        button.appendChild(this.childNodes[0]);
      }

      var input = _util2.default.create('input', { display: 'none' });
      input.type = 'radio';

      this.appendChild(input);
      this.appendChild(button);

      this._updateButtonContent();
      _modifierUtil2.default.initModifier(this, scheme);
      this._updateRipple();
    }
  }, {
    key: '_updateRipple',
    value: function _updateRipple() {
      this._button && _util2.default.updateRipple(this._button, this.hasAttribute('ripple'));
    }
  }, {
    key: '_updateButtonContent',
    value: function _updateButtonContent() {
      var _this2 = this;

      var button = this._button;

      var iconWrapper = this._icon;
      if (this.hasAttribute('icon')) {
        iconWrapper = iconWrapper || _util2.default.createElement('<div class="tabbar__icon"><ons-icon></ons-icon></div>');
        var icon = iconWrapper.children[0];
        var fix = function (last) {
          return function () {
            return icon.attributeChangedCallback('icon', last, _this2.getAttribute('icon'));
          };
        }(icon.getAttribute('icon'));
        if (this.hasAttribute('icon') && this.hasAttribute('active-icon')) {
          icon.setAttribute('icon', this.getAttribute(this.isActive() ? 'active-icon' : 'icon'));
        } else if (this.hasAttribute('icon')) {
          icon.setAttribute('icon', this.getAttribute('icon'));
        }
        iconWrapper.parentElement !== button && button.insertBefore(iconWrapper, button.firstChild);

        // dirty fix for https://github.com/OnsenUI/OnsenUI/issues/1654
        icon.attributeChangedCallback instanceof Function ? fix() : setImmediate(function () {
          return icon.attributeChangedCallback instanceof Function && fix();
        });
      } else {
        iconWrapper && iconWrapper.remove();
      }

      ['label', 'badge'].forEach(function (attr, index) {
        var prop = _this2.querySelector('.tabbar__' + attr);
        if (_this2.hasAttribute(attr)) {
          prop = prop || _util2.default.create('.tabbar__' + attr + (attr === 'badge' ? ' notification' : ''));
          prop.textContent = _this2.getAttribute(attr);
          prop.parentElement !== button && button.appendChild(prop);
        } else {
          prop && prop.remove();
        }
      });
    }
  }, {
    key: '_onClick',
    value: function _onClick() {
      if (this.onClick instanceof Function) {
        this.onClick();
      } else {
        this._tabbar.setActiveTab(this.index, { reject: false });
      }
    }
  }, {
    key: 'setActive',
    value: function setActive() {
      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this._input.checked = active;
      this.classList.toggle('active', active);
      _util2.default.toggleAttribute(this, 'active', active);

      if (this.hasAttribute('icon') && this.hasAttribute('active-icon')) {
        this._icon.children[0].setAttribute('icon', this.getAttribute(active ? 'active-icon' : 'icon'));
      }
    }
  }, {
    key: '_loadPageElement',
    value: function _loadPageElement(parent, page) {
      var _this3 = this;

      this._hasLoaded = true;

      return new Promise(function (resolve) {
        _this3._pageLoader.load({ parent: parent, page: page }, function (pageElement) {
          parent.replaceChild(pageElement, parent.children[_this3.index]); // Ensure position
          _this3._loadedPage = pageElement;
          resolve(pageElement);
        });
      });
    }
  }, {
    key: 'isActive',


    /**
     * @return {Boolean}
     */
    value: function isActive() {
      return this.classList.contains('active');
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.removeEventListener('click', this._onClick, false);
      if (this._loadedPage) {
        this._hasLoaded = false;
        this.loaded = null;
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this4 = this;

      this.addEventListener('click', this._onClick, false);

      if (!_util2.default.isAttached(this) || this.loaded) {
        return; // ons-tabbar compilation may trigger this
      }

      var deferred = _util2.default.defer();
      this.loaded = deferred.promise;

      (0, _contentReady2.default)(this, function () {
        var index = _this4.index;
        var tabbar = _this4._tabbar;
        if (!tabbar) {
          _util2.default.throw('Tab elements must be children of Tabbar');
        }

        if (tabbar.hasAttribute('modifier')) {
          _util2.default.addModifier(_this4, tabbar.getAttribute('modifier'));
        }

        if (!_this4._hasLoaded) {
          if (_this4.hasAttribute('active')) {
            _this4.setActive(true);
            tabbar.setAttribute('activeIndex', index);
          }

          if (index === tabbar.tabs.length - 1) {
            tabbar._onRefresh();
            setImmediate(function () {
              return tabbar._onRefresh();
            });
          }

          _onsTabbar2.default.rewritables.ready(tabbar, function () {
            var pageTarget = _this4.page || _this4.getAttribute('page');
            if (!_this4.pageElement && pageTarget) {
              var parentTarget = tabbar._targetElement;
              var dummyPage = _util2.default.create('div', { height: '100%', width: '100%', visibility: 'hidden' });
              parentTarget.insertBefore(dummyPage, parentTarget.children[index]); // Ensure position

              var load = function load() {
                return _this4._loadPageElement(parentTarget, pageTarget).then(deferred.resolve);
              };
              return _this4.isActive() ? load() : tabbar._loadInactive.promise.then(load);
            }

            return deferred.resolve(_this4.pageElement);
          });
        }
      });
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      var _this5 = this;

      switch (name) {
        case 'class':
          _util2.default.restoreClass(this, defaultClassName, scheme);
          break;
        case 'modifier':
          (0, _contentReady2.default)(this, function () {
            return _modifierUtil2.default.onModifierChanged(last, current, _this5, scheme);
          });
          break;
        case 'ripple':
          (0, _contentReady2.default)(this, function () {
            return _this5._updateRipple();
          });
          break;
        case 'icon':
        case 'label':
        case 'badge':
          (0, _contentReady2.default)(this, function () {
            return _this5._updateButtonContent();
          });
          break;
        case 'page':
          this.page = current || '';
          break;
      }
    }
  }, {
    key: 'pageLoader',
    set: function set(loader) {
      if (!(loader instanceof _pageLoader.PageLoader)) {
        _util2.default.throwPageLoader();
      }
      this._pageLoader = loader;
    },
    get: function get() {
      return this._pageLoader;
    }
  }, {
    key: '_input',
    get: function get() {
      return _util2.default.findChild(this, 'input');
    }
  }, {
    key: '_button',
    get: function get() {
      return _util2.default.findChild(this, '.tabbar__button');
    }
  }, {
    key: '_icon',
    get: function get() {
      return this.querySelector('.tabbar__icon');
    }
  }, {
    key: '_tabbar',
    get: function get() {
      return _util2.default.findParent(this, 'ons-tabbar');
    }
  }, {
    key: 'index',
    get: function get() {
      return Array.prototype.indexOf.call(this.parentElement.children, this);
    }
  }, {
    key: 'pageElement',
    get: function get() {
      // It has been loaded by ons-tab
      if (this._loadedPage) {
        return this._loadedPage;
      }
      // Manually attached to DOM, 1 per tab
      var tabbar = this._tabbar;
      if (tabbar.pages.length === tabbar.tabs.length) {
        return tabbar.pages[this.index];
      }
      // Loaded in another way
      return null;
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['modifier', 'ripple', 'icon', 'label', 'page', 'badge', 'class'];
    }
  }]);

  return TabElement;
}(_baseElement2.default);

exports.default = TabElement;


_elements2.default.Tab = TabElement;
customElements.define('ons-tab', TabElement);