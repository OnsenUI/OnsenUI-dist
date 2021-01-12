'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
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

var _platform = require('../platform');

var _platform2 = _interopRequireDefault(_platform);

var _pageAttributeExpression = require('../page-attribute-expression');

var _pageAttributeExpression2 = _interopRequireDefault(_pageAttributeExpression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var internal = {};

internal.config = {
  autoStatusBarFill: true,
  animationsDisabled: false,
  warningsDisabled: false
};

internal.nullElement = window.document.createElement('div');

/**
 * @return {Boolean}
 */
internal.isEnabledAutoStatusBarFill = function () {
  return !!internal.config.autoStatusBarFill;
};

/**
 * @param {String} html
 * @return {String}
 */
internal.normalizePageHTML = function (html) {
  return ('' + html).trim();
};

internal.waitDOMContentLoaded = function (callback) {
  if (window.document.readyState === 'loading' || window.document.readyState == 'uninitialized') {
    var wrappedCallback = function wrappedCallback() {
      callback();
      window.document.removeEventListener('DOMContentLoaded', wrappedCallback);
    };
    window.document.addEventListener('DOMContentLoaded', wrappedCallback);
  } else {
    setImmediate(callback);
  }
};

internal.autoStatusBarFill = function (action) {
  var onReady = function onReady() {
    if (internal.shouldFillStatusBar()) {
      action();
    }
    document.removeEventListener('deviceready', onReady);
  };

  if ((typeof device === 'undefined' ? 'undefined' : _typeof(device)) === 'object') {
    document.addEventListener('deviceready', onReady);
  } else if (['complete', 'interactive'].indexOf(document.readyState) === -1) {
    internal.waitDOMContentLoaded(onReady);
  } else {
    onReady();
  }
};

internal.shouldFillStatusBar = function () {
  return internal.isEnabledAutoStatusBarFill() && (_platform2.default.isWebView() && (_platform2.default.isIOS7above() || _platform2.default.isIPadOS()) && !_platform2.default.isIPhoneX() || document.body.querySelector('.ons-status-bar-mock.ios'));
};

internal.templateStore = {
  _storage: {},

  /**
   * @param {String} key
   * @return {String/null} template
   */
  get: function get(key) {
    return internal.templateStore._storage[key] || null;
  },


  /**
   * @param {String} key
   * @param {String} template
   */
  set: function set(key, template) {
    internal.templateStore._storage[key] = template;
  }
};

window.document.addEventListener('_templateloaded', function (e) {
  if (e.target.nodeName.toLowerCase() === 'ons-template') {
    internal.templateStore.set(e.templateId, e.template);
  }
}, false);

/**
 * @param {String} page
 * @return {Promise}
 */
internal.getTemplateHTMLAsync = function (page) {
  return new Promise(function (resolve, reject) {
    internal.waitDOMContentLoaded(function () {
      var cache = internal.templateStore.get(page);
      if (cache) {
        if (cache instanceof DocumentFragment) {
          return resolve(cache);
        }

        var html = typeof cache === 'string' ? cache : cache[1];
        return resolve(internal.normalizePageHTML(html));
      }

      var local = window.document.getElementById(page);
      if (local) {
        var _html = local.textContent || local.content;
        return resolve(_html);
      }

      var xhr = new XMLHttpRequest();
      xhr.open('GET', page, true);
      xhr.onload = function () {
        var html = xhr.responseText;
        if (xhr.status >= 400 && xhr.status < 600) {
          reject(html);
        } else {
          // Refresh script tags
          var fragment = _util2.default.createFragment(html);
          _util2.default.arrayFrom(fragment.querySelectorAll('script')).forEach(function (el) {
            var script = document.createElement('script');
            script.type = el.type || 'text/javascript';
            script.appendChild(document.createTextNode(el.text || el.textContent || el.innerHTML));
            el.parentNode.replaceChild(script, el);
          });

          internal.templateStore.set(page, fragment);
          resolve(fragment);
        }
      };
      xhr.onerror = function () {
        _util2.default.throw('Page template not found: ' + page);
      };
      xhr.send(null);
    });
  });
};

/**
 * @param {String} page
 * @return {Promise}
 */
internal.getPageHTMLAsync = function (page) {
  var pages = _pageAttributeExpression2.default.evaluate(page);

  var getPage = function getPage(page) {
    if (typeof page !== 'string') {
      return Promise.reject('Must specify a page.');
    }

    return internal.getTemplateHTMLAsync(page).catch(function (error) {
      if (pages.length === 0) {
        return Promise.reject(error);
      }

      return getPage(pages.shift());
    });
  };

  return getPage(pages.shift());
};

exports.default = internal;