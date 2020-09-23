'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('../ons/util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Add vendor prefix.
 *
 * @param {String} name
 * @return {String}
 */
var prefix = function () {
  var styles = window.getComputedStyle(document.documentElement, '');
  var prefix = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];

  return function (name) {
    return '-' + prefix + '-' + _util2.default.hyphenate(name);
  };
}();

/**
 * Minimal utility library for manipulating element's style.
 * Set element's style.
 *
 * @param {Element} element
 * @param {Object} styles
 * @return {Element}
 */
/*
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

var styler = function styler(element, style) {
  Object.keys(style).forEach(function (key) {
    if (key in element.style) {
      element.style[key] = style[key];
    } else if (prefix(key) in element.style) {
      element.style[prefix(key)] = style[key];
    } else {
      _util2.default.warn('No such style property: ' + key);
    }
  });
  return element;
};

/**
 * @param {Element} element
 * @param {String} styles Space-separated CSS properties to remove
 */
styler.clear = function (element) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var clearlist = styles.split(/\s+/).reduce(function (r, s) {
    return r.concat([_util2.default.hyphenate(s), prefix(s)]);
  }, []),
      keys = [];

  var _loop = function _loop(i) {
    var key = element.style[i];
    if (clearlist.length === 0 || clearlist.some(function (s) {
      return key.indexOf(s) === 0;
    })) {
      keys.push(key); // Store the key to fix Safari style indexes
    }
  };

  for (var i = element.style.length - 1; i >= 0; i--) {
    _loop(i);
  }

  keys.forEach(function (key) {
    return element.style[key] = '';
  });
  element.getAttribute('style') === '' && element.removeAttribute('style');
};

exports.default = styler;