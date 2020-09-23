'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elements = require('../ons/elements');

var _elements2 = _interopRequireDefault(_elements);

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

var _internal = require('../ons/internal');

var _internal2 = _interopRequireDefault(_internal);

var _autostyle = require('../ons/autostyle');

var _autostyle2 = _interopRequireDefault(_autostyle);

var _modifierUtil = require('../ons/internal/modifier-util');

var _modifierUtil2 = _interopRequireDefault(_modifierUtil);

var _baseElement = require('./base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _deviceBackButtonDispatcher = require('../ons/internal/device-back-button-dispatcher');

var _deviceBackButtonDispatcher2 = _interopRequireDefault(_deviceBackButtonDispatcher);

var _contentReady = require('../ons/content-ready');

var _contentReady2 = _interopRequireDefault(_contentReady);

require('./ons-toolbar');

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

// ensures that 'ons-toolbar' element is registered

var defaultClassName = 'page';
var scheme = {
  '': 'page--*',
  '.page__content': 'page--*__content',
  '.page__background': 'page--*__background'
};

/**
 * @element ons-page
 * @category page
 * @modifier material
 *   [en]Material Design style[/en]
 *   [ja][/ja]
 * @description
 *   [en]
 *     This component defines the root of each page. If the content is large it will become scrollable.
 *
 *     A navigation bar can be added to the top of the page using the `<ons-toolbar>` element.
 *   [/en]
 *   [ja]ページ定義のためのコンポーネントです。このコンポーネントの内容はスクロールが許可されます。[/ja]
 * @tutorial vanilla/Reference/page
 * @guide lifecycle.html#events
 *   [en]Overview of page events[/en]
 *   [ja]Overview of page events[/ja]
 * @guide fundamentals.html#managing-pages
 *   [en]Managing multiple pages[/en]
 *   [ja]複数のページを管理する[/ja]
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @seealso ons-toolbar
 *   [en]Use the `<ons-toolbar>` element to add a navigation bar to the top of the page.[/en]
 *   [ja][/ja]
 * @example
 * <ons-page>
 *   <ons-toolbar>
 *     <div class="left">
 *       <ons-back-button>Back</ons-back-button>
 *     </div>
 *     <div class="center">Title</div>
 *     <div class="right">
 *       <ons-toolbar-button>
 *         <ons-icon icon="md-menu"></ons-icon>
 *       </ons-toolbar-button>
 *     </div>
 *   </ons-toolbar>
 *
 *   <p>Page content</p>
 * </ons-page>
 *
 * @example
 * <script>
 *   myApp.handler = function(done) {
 *     loadMore().then(done);
 *   }
 * </script>
 *
 * <ons-page on-infinite-scroll="myApp.handler">
 *   <ons-toolbar>
 *     <div class="center">List</div>
 *   </ons-toolbar>
 *
 *   <ons-list>
 *     <ons-list-item>#1</ons-list-item>
 *     <ons-list-item>#2</ons-list-item>
 *     <ons-list-item>#3</ons-list-item>
 *     ...
 *   </ons-list>
 * </ons-page>
 */

var PageElement = function (_BaseElement) {
  _inherits(PageElement, _BaseElement);

  /**
   * @event init
   * @description
   *   [en]Fired right after the page is attached.[/en]
   *   [ja]ページがアタッチされた後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   */

  /**
   * @event show
   * @description
   *   [en]Fired right after the page is shown.[/en]
   *   [ja]ページが表示された後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   */

  /**
   * @event hide
   * @description
   *   [en]Fired right after the page is hidden.[/en]
   *   [ja]ページが隠れた後に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   */

  /**
   * @event destroy
   * @description
   *   [en]Fired right before the page is destroyed.[/en]
   *   [ja]ページが破棄される前に発火します。[/ja]
   * @param {Object} event [en]Event object.[/en]
   */

  /**
   * @attribute modifier
   * @type {String}
   * @description
   *   [en]Specify modifier name to specify custom styles.[/en]
   *   [ja]スタイル定義をカスタマイズするための名前を指定します。[/ja]
   */

  /**
   * @attribute on-infinite-scroll
   * @type {String}
   * @description
   *   [en]Path of the function to be executed on infinite scrolling. Example: `app.loadData`. The function receives a done callback that must be called when it's finished.[/en]
   *   [ja][/ja]
   */

  function PageElement() {
    _classCallCheck(this, PageElement);

    var _this = _possibleConstructorReturn(this, (PageElement.__proto__ || Object.getPrototypeOf(PageElement)).call(this));

    _this._deriveHooks();

    _this._defaultClassName = defaultClassName;
    _this.classList.add(defaultClassName);

    _this._initialized = false;

    (0, _contentReady2.default)(_this, function () {
      _this._compile();

      _this._isShown = false;
      _this._contentElement = _this._getContentElement();
      _this._backgroundElement = _this._getBackgroundElement();
    });
    return _this;
  }

  _createClass(PageElement, [{
    key: '_compile',
    value: function _compile() {
      var _this2 = this;

      _autostyle2.default.prepare(this);

      var toolbar = _util2.default.findChild(this, 'ons-toolbar');

      var background = _util2.default.findChild(this, '.page__background') || _util2.default.findChild(this, '.background') || document.createElement('div');
      background.classList.add('page__background');
      this.insertBefore(background, !toolbar && this.firstChild || toolbar && toolbar.nextSibling);

      var content = _util2.default.findChild(this, '.page__content') || _util2.default.findChild(this, '.content') || document.createElement('div');
      content.classList.add('page__content');
      if (!content.parentElement) {
        _util2.default.arrayFrom(this.childNodes).forEach(function (node) {
          if (node.nodeType !== 1 || _this2._elementShouldBeMoved(node)) {
            content.appendChild(node); // Can trigger detached connectedCallbacks
          }
        });
      }

      this._tryToFillStatusBar(content); // Must run before child pages try to fill status bar.
      this.insertBefore(content, background.nextSibling); // Can trigger attached connectedCallbacks

      if ((!toolbar || !_util2.default.hasModifier(toolbar, 'transparent')) && content.children.length === 1 && _util2.default.isPageControl(content.children[0])) {
        this._defaultClassName += ' page--wrapper';
        this.attributeChangedCallback('class');
      }

      var bottomToolbar = _util2.default.findChild(this, 'ons-bottom-toolbar');
      if (bottomToolbar) {
        this._defaultClassName += ' page-with-bottom-toolbar';
        this.attributeChangedCallback('class');
      }

      _modifierUtil2.default.initModifier(this, scheme);
    }
  }, {
    key: '_elementShouldBeMoved',
    value: function _elementShouldBeMoved(el) {
      if (el.classList.contains('page__background')) {
        return false;
      }
      var tagName = el.tagName.toLowerCase();
      if (tagName === 'ons-fab') {
        return !el.hasAttribute('position');
      }
      var fixedElements = ['script', 'ons-toolbar', 'ons-bottom-toolbar', 'ons-modal', 'ons-speed-dial', 'ons-dialog', 'ons-alert-dialog', 'ons-popover', 'ons-action-sheet'];
      return el.hasAttribute('inline') || fixedElements.indexOf(tagName) === -1;
    }
  }, {
    key: '_tryToFillStatusBar',
    value: function _tryToFillStatusBar() {
      var _this3 = this;

      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._contentElement;

      _internal2.default.autoStatusBarFill(function () {
        _util2.default.toggleAttribute(_this3, 'status-bar-fill', !_util2.default.findParent(_this3, function (e) {
          return e.hasAttribute('status-bar-fill');
        }) // Not already filled
        && (_this3._canAnimateToolbar(content) || !_util2.default.findChild(content, _util2.default.isPageControl)) // Has toolbar or cannot delegate
        );
      });
    }
  }, {
    key: '_canAnimateToolbar',
    value: function _canAnimateToolbar() {
      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._contentElement;

      if (_util2.default.findChild(this, 'ons-toolbar')) {
        return true;
      }

      return !!_util2.default.findChild(content, function (el) {
        return _util2.default.match(el, 'ons-toolbar') && !el.hasAttribute('inline');
      });
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this4 = this;

      if (!_util2.default.isAttached(this)) {
        // Avoid detached calls
        return;
      }

      (0, _contentReady2.default)(this, function () {
        _this4._tryToFillStatusBar(); // Ensure status bar when the element was compiled before connected

        if (_this4.hasAttribute('on-infinite-scroll')) {
          _this4.attributeChangedCallback('on-infinite-scroll', null, _this4.getAttribute('on-infinite-scroll'));
        }

        if (!_this4._initialized) {
          _this4._initialized = true;

          setImmediate(function () {
            _this4.onInit && _this4.onInit();
            _util2.default.triggerElementEvent(_this4, 'init');
          });

          if (!_util2.default.hasAnyComponentAsParent(_this4)) {
            setImmediate(function () {
              return _this4._show();
            });
          }
        }
      });
    }
  }, {
    key: 'updateBackButton',
    value: function updateBackButton(show) {
      if (this.backButton) {
        show ? this.backButton.show() : this.backButton.hide();
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll() {
      var _this5 = this;

      var c = this._contentElement,
          overLimit = (c.scrollTop + c.clientHeight) / c.scrollHeight >= this._infiniteScrollLimit;

      if (this._onInfiniteScroll && !this._loadingContent && overLimit) {
        this._loadingContent = true;
        this._onInfiniteScroll(function () {
          return _this5._loadingContent = false;
        });
      }
    }

    /**
     * @property onDeviceBackButton
     * @type {Object}
     * @description
     *   [en]Back-button handler.[/en]
     *   [ja]バックボタンハンドラ。[/ja]
     */

  }, {
    key: '_getContentElement',
    value: function _getContentElement() {
      var result = _util2.default.findChild(this, '.page__content');
      if (result) {
        return result;
      }
      _util2.default.throw('Fail to get ".page__content" element');
    }
  }, {
    key: '_getBackgroundElement',
    value: function _getBackgroundElement() {
      var result = _util2.default.findChild(this, '.page__background');
      if (result) {
        return result;
      }
      _util2.default.throw('Fail to get ".page__background" element');
    }
  }, {
    key: '_getBottomToolbarElement',
    value: function _getBottomToolbarElement() {
      return _util2.default.findChild(this, 'ons-bottom-toolbar') || _internal2.default.nullElement;
    }
  }, {
    key: '_getToolbarElement',
    value: function _getToolbarElement() {
      return _util2.default.findChild(this, 'ons-toolbar') || document.createElement('ons-toolbar');
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {
      var _this6 = this;

      switch (name) {
        case 'class':
          _util2.default.restoreClass(this, this._defaultClassName, scheme);
          break;
        case 'modifier':
          _modifierUtil2.default.onModifierChanged(last, current, this, scheme);
          break;
        case 'on-infinite-scroll':
          if (current === null) {
            this.onInfiniteScroll = null;
          } else {
            this.onInfiniteScroll = function (done) {
              var f = _util2.default.findFromPath(current);
              _this6.onInfiniteScroll = f;
              f(done);
            };
          }
          break;
      }
    }
  }, {
    key: '_show',
    value: function _show() {
      if (!this._isShown && _util2.default.isAttached(this)) {
        this._isShown = true;
        this.setAttribute('shown', '');
        this.onShow && this.onShow();
        _util2.default.triggerElementEvent(this, 'show');
        _util2.default.propagateAction(this, '_show');
      }
    }
  }, {
    key: '_hide',
    value: function _hide() {
      if (this._isShown) {
        this._isShown = false;
        this.removeAttribute('shown');
        this.onHide && this.onHide();
        _util2.default.triggerElementEvent(this, 'hide');
        _util2.default.propagateAction(this, '_hide');
      }
    }
  }, {
    key: '_destroy',
    value: function _destroy() {
      this._hide();

      this.onDestroy && this.onDestroy();
      _util2.default.triggerElementEvent(this, 'destroy');

      if (this.onDeviceBackButton) {
        this.onDeviceBackButton.destroy();
      }

      _util2.default.propagateAction(this, '_destroy');

      this.remove();
    }
  }, {
    key: '_deriveHooks',
    value: function _deriveHooks() {
      var _this7 = this;

      this.constructor.events.forEach(function (event) {
        var key = 'on' + event.charAt(0).toUpperCase() + event.slice(1);
        Object.defineProperty(_this7, key, {
          configurable: true,
          enumerable: true,
          get: function get() {
            return _this7['_' + key];
          },
          set: function set(value) {
            if (!(value instanceof Function)) {
              _util2.default.throw('"' + key + '" hook must be a function');
            }
            _this7['_' + key] = value.bind(_this7);
          }
        });
      });
    }
  }, {
    key: 'name',
    set: function set(str) {
      this.setAttribute('name', str);
    },
    get: function get() {
      return this.getAttribute('name');
    }
  }, {
    key: 'backButton',
    get: function get() {
      return this.querySelector('ons-back-button');
    }

    /**
     * @property onInfiniteScroll
     * @description
     *  [en]Function to be executed when scrolling to the bottom of the page. The function receives a done callback as an argument that must be called when it's finished.[/en]
     *  [ja][/ja]
     */

  }, {
    key: 'onInfiniteScroll',
    set: function set(value) {
      var _this8 = this;

      if (value && !(value instanceof Function)) {
        _util2.default.throw('"onInfiniteScroll" must be function or null');
      }

      (0, _contentReady2.default)(this, function () {
        if (!value) {
          _this8._contentElement.removeEventListener('scroll', _this8._boundOnScroll);
        } else if (!_this8._onInfiniteScroll) {
          _this8._infiniteScrollLimit = 0.9;
          _this8._boundOnScroll = _this8._onScroll.bind(_this8);
          setImmediate(function () {
            return _this8._contentElement.addEventListener('scroll', _this8._boundOnScroll);
          });
        }
        _this8._onInfiniteScroll = value;
      });
    },
    get: function get() {
      return this._onInfiniteScroll;
    }
  }, {
    key: 'onDeviceBackButton',
    get: function get() {
      return this._backButtonHandler;
    },
    set: function set(callback) {
      if (this._backButtonHandler) {
        this._backButtonHandler.destroy();
      }

      this._backButtonHandler = _deviceBackButtonDispatcher2.default.createHandler(this, callback);
    }
  }, {
    key: 'scrollTop',
    get: function get() {
      return this._contentElement.scrollTop;
    },
    set: function set(newValue) {
      this._contentElement.scrollTop = newValue;
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['modifier', 'on-infinite-scroll', 'class'];
    }
  }, {
    key: 'events',
    get: function get() {
      return ['init', 'show', 'hide', 'destroy'];
    }

    /**
     * @property data
     * @type {*}
     * @description
     *   [en]User's custom data passed to `pushPage()`-like methods.[/en]
     *   [ja][/ja]
     */

  }]);

  return PageElement;
}(_baseElement2.default);

exports.default = PageElement;


_elements2.default.Page = PageElement;
customElements.define('ons-page', PageElement);