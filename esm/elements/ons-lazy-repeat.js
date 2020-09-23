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

var _baseElement = require('./base/base-element');

var _baseElement2 = _interopRequireDefault(_baseElement);

var _lazyRepeat = require('../ons/internal/lazy-repeat');

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
 * @element ons-lazy-repeat
 * @category list
 * @description
 *   [en]
 *     Using this component a list with millions of items can be rendered without a drop in performance.
 *     It does that by "lazily" loading elements into the DOM when they come into view and
 *     removing items from the DOM when they are not visible.
 *   [/en]
 *   [ja]
 *     このコンポーネント内で描画されるアイテムのDOM要素の読み込みは、画面に見えそうになった時まで自動的に遅延され、
 *     画面から見えなくなった場合にはその要素は動的にアンロードされます。
 *     このコンポーネントを使うことで、パフォーマンスを劣化させること無しに巨大な数の要素を描画できます。
 *   [/ja]
 * @codepen QwrGBm
 * @tutorial vanilla/Reference/lazy-repeat
 * @seealso ons-list
 *   [en]The `<ons-list>` element is used to render a list.[/en]
 *   [ja]`<ons-list>`要素はリストを描画するのに使われます。[/ja]
 * @example
 * <script>
 *   window.addEventListener('load', function() {
 *     var lazyRepeat = document.querySelector('#list');
 *     lazyRepeat.delegate = {
 *      createItemContent: function(i, template) {
 *        var dom = template.cloneNode(true);
 *        dom.innerText = i;
 *
 *        return dom;
 *      },
 *      countItems: function() {
 *        return 10000000;
 *      },
 *      destroyItem: function(index, item) {
 *        console.log('Destroyed item with index: ' + index);
 *      }
 *     };
 *   });
 * </script>
 *
 * <ons-list id="list">
 *   <ons-lazy-repeat>
 *     <ons-list-item></ons-list-item>
 *   </ons-lazy-repeat>
 * </ons-list>
 */
var LazyRepeatElement = function (_BaseElement) {
  _inherits(LazyRepeatElement, _BaseElement);

  function LazyRepeatElement() {
    _classCallCheck(this, LazyRepeatElement);

    return _possibleConstructorReturn(this, (LazyRepeatElement.__proto__ || Object.getPrototypeOf(LazyRepeatElement)).apply(this, arguments));
  }

  _createClass(LazyRepeatElement, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      // not very good idea and also not documented
      if (this.hasAttribute('delegate')) {
        this.delegate = window[this.getAttribute('delegate')];
      }
    }

    /**
     * @property delegate
     * @type {Object}
     * @description
     *  [en]Specify a delegate object to load and unload item elements.[/en]
     *  [ja]要素のロード、アンロードなどの処理を委譲するオブジェクトを指定します。[/ja]
     */

    /**
     * @property delegate.createItemContent
     * @type {Function}
     * @description
     *   [en]
     *     This function should return a `HTMLElement`.
     *
     *     To help rendering the element, the current index and a template is supplied as arguments. The template is the initial content of the `<ons-lazy-repeat>` element.
     *   [/en]
     *   [ja]
     *     この関数は`HTMLElement`を返してください。
     *     要素を生成しやすくするために、現在のアイテムのインデックスとテンプレートが引数に渡されます。
     *     このテンプレートは、`<ons-lazy-repeat>`要素のコンテンツが渡されます。
     *   [/ja]
     */

    /**
     * @property delegate.countItems
     * @type {Function}
     * @description
     *   [en]Should return the number of items in the list.[/en]
     *   [ja]リスト内のアイテム数を返してください。[/ja]
     */

    /**
     * @property delegate.calculateItemHeight
     * @type {Function}
     * @description
     *   [en]
     *     Should return the height of an item. The index is provided as an argument.
     *
     *     This is important when rendering lists where the items have different height.
     *
     *     The function is optional and if it isn't present the height of the first item will be automatically calculated and used for all other items.
     *   [/en]
     *   [ja]
     *     アイテムの高さ(ピクセル)を返してください。アイテムのインデックス値は引数で渡されます。
     *     この関数は、それぞれのアイムが違った高さを持つリストをレンダリングする際に重要です。
     *     この関数はオプショナルです。もしこの関数が無い場合には、
     *     最初のアイテムの高さが他のすべてのアイテムの高さとして利用されます。
     *   [/ja]
     */

    /**
     * @property delegate.destroyItem
     * @type {Function}
     * @description
     *   [en]
     *     This function is used called when an item is removed from the DOM. The index and DOM element is provided as arguments.
     *
     *     The function is optional but may be important in order to avoid memory leaks.
     *   [/en]
     *   [ja]
     *     この関数は、あるアイテムがDOMツリーから除かれた時に呼び出されます。
     *     アイテムのインデックス値とDOM要素が引数として渡されます。
     *     この関数はオプショナルですが、各アイテムの後処理が必要な場合にはメモリーリークを避けるために重要です。
     *   [/ja]
     */

  }, {
    key: 'refresh',


    /**
     * @method refresh
     * @signature refresh()
     * @description
     *   [en]Refresh the list. Use this method when the data has changed.[/en]
     *   [ja]リストを更新します。もしデータが変わった場合にはこのメソッドを使ってください。[/ja]
     */
    value: function refresh() {
      this._lazyRepeatProvider && this._lazyRepeatProvider.refresh();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, last, current) {}
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this._lazyRepeatProvider) {
        this._lazyRepeatProvider.destroy();
        this._lazyRepeatProvider = null;
      }
    }
  }, {
    key: 'delegate',
    set: function set(userDelegate) {
      this._lazyRepeatProvider && this._lazyRepeatProvider.destroy();

      if (!this._templateElement && this.children[0]) {
        this._templateElement = this.removeChild(this.children[0]);
      }

      var delegate = new _lazyRepeat.LazyRepeatDelegate(userDelegate, this._templateElement || null);
      this._lazyRepeatProvider = new _lazyRepeat.LazyRepeatProvider(this.parentElement, delegate);
    },
    get: function get() {
      _util2.default.throw('No delegate getter');
    }
  }]);

  return LazyRepeatElement;
}(_baseElement2.default);

exports.default = LazyRepeatElement;


_internal2.default.LazyRepeatDelegate = _lazyRepeat.LazyRepeatDelegate;
_internal2.default.LazyRepeatProvider = _lazyRepeat.LazyRepeatProvider;

_elements2.default.LazyRepeat = LazyRepeatElement;
customElements.define('ons-lazy-repeat', LazyRepeatElement);