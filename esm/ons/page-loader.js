'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instantPageLoader = exports.defaultPageLoader = exports.PageLoader = undefined;

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


var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _internal = require('./internal');

var _internal2 = _interopRequireDefault(_internal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Default implementation for global PageLoader.
function loadPage(_ref, done, error) {
  var page = _ref.page,
      parent = _ref.parent,
      _ref$params = _ref.params,
      params = _ref$params === undefined ? {} : _ref$params;

  _internal2.default.getPageHTMLAsync(page).then(function (html) {
    var pageElement = _util2.default.createElement(html);
    parent.appendChild(pageElement);

    done(pageElement);
  }).catch(function (e) {
    return error(e);
  });
}

function unloadPage(element) {
  if (element._destroy instanceof Function) {
    element._destroy();
  } else {
    element.remove();
  }
}

var PageLoader = exports.PageLoader = function () {
  /**
   * @param {Function} [fn] Returns an object that has "element" property and "unload" function.
   */
  function PageLoader(loader, unloader) {
    _classCallCheck(this, PageLoader);

    this._loader = loader instanceof Function ? loader : loadPage;
    this._unloader = unloader instanceof Function ? unloader : unloadPage;
  }

  /**
   * Set internal loader implementation.
   */


  _createClass(PageLoader, [{
    key: 'load',


    /**
     * @param {any} options.page
     * @param {Element} options.parent A location to load page.
     * @param {Object} [options.params] Extra parameters for ons-page.
     * @param {Function} done Take an object that has "element" property and "unload" function.
     * @param {Function} error Function called when there is an error.
     */
    value: function load(_ref2, done, error) {
      var page = _ref2.page,
          parent = _ref2.parent,
          _ref2$params = _ref2.params,
          params = _ref2$params === undefined ? {} : _ref2$params;

      this._loader({ page: page, parent: parent, params: params }, function (pageElement) {
        if (!(pageElement instanceof Element)) {
          throw Error('pageElement must be an instance of Element.');
        }

        done(pageElement);
      }, error);
    }
  }, {
    key: 'unload',
    value: function unload(pageElement) {
      if (!(pageElement instanceof Element)) {
        throw Error('pageElement must be an instance of Element.');
      }

      this._unloader(pageElement);
    }
  }, {
    key: 'internalLoader',
    set: function set(fn) {
      if (!(fn instanceof Function)) {
        throw Error('First parameter must be an instance of Function');
      }
      this._loader = fn;
    },
    get: function get() {
      return this._loader;
    }
  }]);

  return PageLoader;
}();

var defaultPageLoader = exports.defaultPageLoader = new PageLoader();

var instantPageLoader = exports.instantPageLoader = new PageLoader(function (_ref3, done) {
  var page = _ref3.page,
      parent = _ref3.parent,
      _ref3$params = _ref3.params,
      params = _ref3$params === undefined ? {} : _ref3$params;

  var element = _util2.default.createElement(page.trim());
  parent.appendChild(element);

  done(element);
}, unloadPage);