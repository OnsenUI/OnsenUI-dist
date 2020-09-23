/* onsenui v2.11.1 - 2020-09-23 */

import './ons/platform';
import './ons/microevent.js';
import ons from './ons/index.js';

// For @onsenui/custom-elements
if (window.customElements) {
    // even if native CE1 impl exists, use polyfill
    window.customElements.forcePolyfill = true;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.11' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _core_1 = _core.version;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _isObject = function _isObject(it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function _anObject(it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function _fails(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function _domCreate(it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function _toPrimitive(it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
  f: f
};

var _propertyDesc = function _propertyDesc(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function _has(it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function _uid(key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _library = false;

var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode: _library ? 'pure' : 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
});

var _functionToString = _shared('native-function-to-string', Function.toString);

var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');

  var TO_STRING = 'toString';
  var TPL = ('' + _functionToString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return _functionToString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    }
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || _functionToString.call(this);
  });
});

var _aFunction = function _aFunction(it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function _ctx(fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // extend global
    if (target) _redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) _hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
_global.core = _core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

var toString = {}.toString;

var _cof = function _cof(it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function _defined(it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function _toIobject(it) {
  return _iobject(_defined(it));
};

var gOPD = Object.getOwnPropertyDescriptor;

var f$1 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
  f: f$1
};

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */

var check = function check(O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

var setPrototypeOf = _core.Object.setPrototypeOf;

var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var _Symbol = _global.Symbol;
  var USE_SYMBOL = typeof _Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

var _classof = function _classof(it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? _cof(O)
  // ES3 arguments fallback
  : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()

var test = {};
test[_wks('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  _redefine(Object.prototype, 'toString', function toString() {
    return '[object ' + _classof(this) + ']';
  }, true);
}

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function _toInteger(it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function _stringAt(TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _iterators = {};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function _toLength(it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes


var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

var shared = _shared('keys');

var _sharedKey = function _sharedKey(key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$1 = _sharedKey('IE_PROTO');

var _objectKeysInternal = function _objectKeysInternal(object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO$1) _has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)


var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    _objectDp.f(O, P = keys[i++], Properties[P]);
  }return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


var IE_PROTO = _sharedKey('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
  }return _createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var def = _objectDp.f;

var TAG$1 = _wks('toStringTag');

var _setToStringTag = function _setToStringTag(it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () {
  return this;
});

var _iterCreate = function _iterCreate(Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 7.1.13 ToObject(argument)

var _toObject = function _toObject(it) {
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
var _addToUnscopables = function _addToUnscopables(key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function _iterStep(done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

var ITERATOR$1 = _wks('iterator');
var TO_STRING_TAG = _wks('toStringTag');
var ArrayValues = _iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
    if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
    _iterators[NAME] = ArrayValues;
    if (explicit) for (key in es6_array_iterator) {
      if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
    }
  }
}

var _redefineAll = function _redefineAll(target, src, safe) {
  for (var key in src) {
    _redefine(target, key, src[key], safe);
  }return target;
};

var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }return it;
};

// call something on iterator step with safe closing on error

var _iterCall = function _iterCall(iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$2 = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function _isArrayIter(it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var ITERATOR$3 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$3] || it['@@iterator'] || _iterators[_classof(it)];
};

var _forOf = createCommonjsModule(function (module) {
  var BREAK = {};
  var RETURN = {};
  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () {
      return iterable;
    } : core_getIteratorMethod(iterable);
    var f = _ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
      result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = _iterCall(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
});

var SPECIES = _wks('species');

var _setSpecies = function _setSpecies(KEY) {
  var C = _global[KEY];
  if (_descriptors && C && !C[SPECIES]) _objectDp.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

var _meta = createCommonjsModule(function (module) {
  var META = _uid('meta');

  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function setMeta(it) {
    setDesc(it, META, { value: {
        i: 'O' + ++id, // object ID
        w: {} // weak collections IDs
      } });
  };
  var fastKey = function fastKey(it, create) {
    // return primitive with prefix
    if (!_isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
      // return object ID
    }return it[META].i;
  };
  var getWeak = function getWeak(it, create) {
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
      // return hash weak collections IDs
    }return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function onFreeze(it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
});

var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var _validateCollection = function _validateCollection(it, TYPE) {
  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

var dP$1 = _objectDp.f;

var fastKey = _meta.fastKey;

var SIZE = _descriptors ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

var _collectionStrong = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type
      that._i = _objectCreate(null); // index
      that._f = undefined; // first entry
      that._l = undefined; // last entry
      that[SIZE] = 0; // size
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = _validateCollection(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        _validateCollection(this, NAME);
        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(_validateCollection(this, NAME), key);
      }
    });
    if (_descriptors) dP$1(C.prototype, 'size', {
      get: function get() {
        return _validateCollection(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
      // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key, // <- key
        v: value, // <- value
        p: prev = that._l, // <- previous entry
        n: undefined, // <- next entry
        r: false // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    }return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    _iterDefine(C, NAME, function (iterated, kind) {
      this._t = _validateCollection(iterated, NAME); // target
      this._k = kind; // kind
      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return _iterStep(1);
      }
      // return step by kind
      if (kind == 'keys') return _iterStep(0, entry.k);
      if (kind == 'values') return _iterStep(0, entry.v);
      return _iterStep(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    _setSpecies(NAME);
  }
};

var ITERATOR$4 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  // eslint-disable-next-line no-throw-literal
  
} catch (e) {/* empty */}

var _iterDetect = function _iterDetect(exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$4]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR$4] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

var setPrototypeOf$2 = _setProto.set;
var _inheritIfRequired = function _inheritIfRequired(that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf$2) {
    setPrototypeOf$2(that, P);
  }return that;
};

var _collection = function _collection(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = _global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    _redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);return this;
    });
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    _redefineAll(C.prototype, methods);
    _meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = _fails(function () {
      instance.has(1);
    });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = _iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && _fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) {
        $instance[ADDER](index, index);
      }return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        _anInstance(target, C, NAME);
        var that = _inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  _setToStringTag(C, NAME);

  O[NAME] = C;
  _export(_export.G + _export.W + _export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

var SET = 'Set';

// 23.2 Set Objects
var es6_set = _collection(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
  }
}, _collectionStrong);

var _arrayFromIterable = function _arrayFromIterable(iter, ITERATOR) {
  var result = [];
  _forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


var _collectionToJson = function _collectionToJson(NAME) {
  return function toJSON() {
    if (_classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return _arrayFromIterable(this);
  };
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


_export(_export.P + _export.R, 'Set', { toJSON: _collectionToJson('Set') });

// https://tc39.github.io/proposal-setmap-offrom/


var _setCollectionOf = function _setCollectionOf(COLLECTION) {
  _export(_export.S, COLLECTION, { of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) {
        A[length] = arguments[length];
      }return new this(A);
    } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
_setCollectionOf('Set');

// https://tc39.github.io/proposal-setmap-offrom/


var _setCollectionFrom = function _setCollectionFrom(COLLECTION) {
  _export(_export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      _aFunction(this);
      mapping = mapFn !== undefined;
      if (mapping) _aFunction(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = _ctx(mapFn, arguments[2], 2);
        _forOf(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        _forOf(source, false, A.push, A);
      }
      return new this(A);
    } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
_setCollectionFrom('Set');

var set$1 = _core.Set;

var MAP = 'Map';

// 23.1 Map Objects
var es6_map = _collection(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
  }
}, _collectionStrong, true);

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


_export(_export.P + _export.R, 'Map', { toJSON: _collectionToJson('Map') });

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
_setCollectionOf('Map');

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
_setCollectionFrom('Map');

var map = _core.Map;

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

var SPECIES$1 = _wks('species');

var _arraySpeciesConstructor = function _arraySpeciesConstructor(original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  }return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function _arraySpeciesCreate(original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex


var _arrayMethods = function _arrayMethods(TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true; // some
              case 5:
                return val; // find
              case 6:
                return index; // findIndex
              case 2:
                result.push(val); // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

var f$3 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$3
};

// 19.1.2.1 Object.assign(target, source, ...)


var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
    }
  }return T;
} : $assign;

var getWeak = _meta.getWeak;

var arrayFind = _arrayMethods(5);
var arrayFindIndex = _arrayMethods(6);
var id$1 = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};
var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

var _collectionWeak = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type
      that._i = id$1++; // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function _delete(key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
        return data && _has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
        return data && _has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(_anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

var es6_weakMap = createCommonjsModule(function (module) {
  var each = _arrayMethods(0);

  var NATIVE_WEAK_MAP = _validateCollection;
  var IS_IE11 = !_global.ActiveXObject && 'ActiveXObject' in _global;
  var WEAK_MAP = 'WeakMap';
  var getWeak = _meta.getWeak;
  var isExtensible = Object.isExtensible;
  var uncaughtFrozenStore = _collectionWeak.ufstore;
  var InternalMap;

  var wrapper = function wrapper(get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  };

  var methods = {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key) {
      if (_isObject(key)) {
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
        return data ? data[this._i] : undefined;
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value) {
      return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
    }
  };

  // 23.3 WeakMap Objects
  var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true);

  // IE11 WeakMap frozen keys fix
  if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
    _objectAssign(InternalMap.prototype, methods);
    _meta.NEED = true;
    each(['delete', 'has', 'get', 'set'], function (key) {
      var proto = $WeakMap.prototype;
      var method = proto[key];
      _redefine(proto, key, function (a, b) {
        // store frozen objects on internal weakmap shim
        if (_isObject(a) && !isExtensible(a)) {
          if (!this._f) this._f = new InternalMap();
          var result = this._f[key](a, b);
          return key == 'set' ? this : result;
          // store all the rest on native weakmap
        }return method.call(this, a, b);
      });
    });
  }
});

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
_setCollectionOf('WeakMap');

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
_setCollectionFrom('WeakMap');

var weakMap = _core.WeakMap;

var _createProperty = function _createProperty(object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
};

_export(_export.S + _export.F * !_iterDetect(function (iter) {
  
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var from$1 = _core.Array.from;

var reservedTagList = new Set(['annotation-xml', 'color-profile', 'font-face', 'font-face-src', 'font-face-uri', 'font-face-format', 'font-face-name', 'missing-glyph']);

/**
 * @param {string} localName
 * @returns {boolean}
 */
function isValidCustomElementName(localName) {
  var reserved = reservedTagList.has(localName);
  var validForm = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(localName);
  return !reserved && validForm;
}

/**
 * @private
 * @param {!Node} node
 * @return {boolean}
 */
function isConnected(node) {
  // Use `Node#isConnected`, if defined.
  var nativeValue = node.isConnected;
  if (nativeValue !== undefined) {
    return nativeValue;
  }

  /** @type {?Node|undefined} */
  var current = node;
  while (current && !(current.__CE_isImportDocument || current instanceof Document)) {
    current = current.parentNode || (window.ShadowRoot && current instanceof ShadowRoot ? current.host : undefined);
  }
  return !!(current && (current.__CE_isImportDocument || current instanceof Document));
}

/**
 * @param {!Node} root
 * @param {!Node} start
 * @return {?Node}
 */
function nextSiblingOrAncestorSibling(root, start) {
  var node = start;
  while (node && node !== root && !node.nextSibling) {
    node = node.parentNode;
  }
  return !node || node === root ? null : node.nextSibling;
}

/**
 * @param {!Node} root
 * @param {!Node} start
 * @return {?Node}
 */
function nextNode(root, start) {
  return start.firstChild ? start.firstChild : nextSiblingOrAncestorSibling(root, start);
}

/**
 * @param {!Node} root
 * @param {!function(!Element)} callback
 * @param {!Set<Node>=} visitedImports
 */
function walkDeepDescendantElements(root, callback) {
  var visitedImports = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Set();

  var node = root;
  while (node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      var element = /** @type {!Element} */node;

      callback(element);

      var localName = element.localName;
      if (localName === 'link' && element.getAttribute('rel') === 'import') {
        // If this import (polyfilled or not) has it's root node available,
        // walk it.
        var importNode = /** @type {!Node} */element.import;
        if (importNode instanceof Node && !visitedImports.has(importNode)) {
          // Prevent multiple walks of the same import root.
          visitedImports.add(importNode);

          for (var child = importNode.firstChild; child; child = child.nextSibling) {
            walkDeepDescendantElements(child, callback, visitedImports);
          }
        }

        // Ignore descendants of import links to prevent attempting to walk the
        // elements created by the HTML Imports polyfill that we just walked
        // above.
        node = nextSiblingOrAncestorSibling(root, element);
        continue;
      } else if (localName === 'template') {
        // Ignore descendants of templates. There shouldn't be any descendants
        // because they will be moved into `.content` during construction in
        // browsers that support template but, in case they exist and are still
        // waiting to be moved by a polyfill, they will be ignored.
        node = nextSiblingOrAncestorSibling(root, element);
        continue;
      }

      // Walk shadow roots.
      var shadowRoot = element.__CE_shadowRoot;
      if (shadowRoot) {
        for (var _child = shadowRoot.firstChild; _child; _child = _child.nextSibling) {
          walkDeepDescendantElements(_child, callback, visitedImports);
        }
      }
    }

    node = nextNode(root, node);
  }
}

/**
 * Used to suppress Closure's "Modifying the prototype is only allowed if the
 * constructor is in the same scope" warning without using
 * `@suppress {newCheckTypes, duplicate}` because `newCheckTypes` is too broad.
 *
 * @param {!Object} destination
 * @param {string} name
 * @param {*} value
 */
function setPropertyUnchecked(destination, name, value) {
  destination[name] = value;
}

/**
 * @enum {number}
 */
var CustomElementState = {
  custom: 1,
  failed: 2
};

var CustomElementInternals = function () {
  function CustomElementInternals() {
    classCallCheck(this, CustomElementInternals);

    /** @type {!Map<string, !CustomElementDefinition>} */
    this._localNameToDefinition = new Map();

    /** @type {!Map<!Function, !CustomElementDefinition>} */
    this._constructorToDefinition = new Map();

    /** @type {!Array<!function(!Node)>} */
    this._patches = [];

    /** @type {boolean} */
    this._hasPatches = false;
  }

  /**
   * @param {string} localName
   * @param {!CustomElementDefinition} definition
   */


  createClass(CustomElementInternals, [{
    key: 'setDefinition',
    value: function setDefinition(localName, definition) {
      this._localNameToDefinition.set(localName, definition);
      this._constructorToDefinition.set(definition.constructor, definition);
    }

    /**
     * @param {string} localName
     * @return {!CustomElementDefinition|undefined}
     */

  }, {
    key: 'localNameToDefinition',
    value: function localNameToDefinition(localName) {
      return this._localNameToDefinition.get(localName);
    }

    /**
     * @param {!Function} constructor
     * @return {!CustomElementDefinition|undefined}
     */

  }, {
    key: 'constructorToDefinition',
    value: function constructorToDefinition(constructor) {
      return this._constructorToDefinition.get(constructor);
    }

    /**
     * @param {!function(!Node)} listener
     */

  }, {
    key: 'addPatch',
    value: function addPatch(listener) {
      this._hasPatches = true;
      this._patches.push(listener);
    }

    /**
     * @param {!Node} node
     */

  }, {
    key: 'patchTree',
    value: function patchTree(node) {
      var _this = this;

      if (!this._hasPatches) return;

      walkDeepDescendantElements(node, function (element) {
        return _this.patch(element);
      });
    }

    /**
     * @param {!Node} node
     */

  }, {
    key: 'patch',
    value: function patch(node) {
      if (!this._hasPatches) return;

      if (node.__CE_patched) return;
      node.__CE_patched = true;

      for (var i = 0; i < this._patches.length; i++) {
        this._patches[i](node);
      }
    }

    /**
     * @param {!Node} root
     */

  }, {
    key: 'connectTree',
    value: function connectTree(root) {
      var elements = [];

      walkDeepDescendantElements(root, function (element) {
        return elements.push(element);
      });

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.__CE_state === CustomElementState.custom) {
          if (isConnected(element)) {
            this.connectedCallback(element);
          }
        } else {
          this.upgradeElement(element);
        }
      }
    }

    /**
     * @param {!Node} root
     */

  }, {
    key: 'disconnectTree',
    value: function disconnectTree(root) {
      var elements = [];

      walkDeepDescendantElements(root, function (element) {
        return elements.push(element);
      });

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.__CE_state === CustomElementState.custom) {
          this.disconnectedCallback(element);
        }
      }
    }

    /**
     * Upgrades all uncustomized custom elements at and below a root node for
     * which there is a definition. When custom element reaction callbacks are
     * assumed to be called synchronously (which, by the current DOM / HTML spec
     * definitions, they are *not*), callbacks for both elements customized
     * synchronously by the parser and elements being upgraded occur in the same
     * relative order.
     *
     * NOTE: This function, when used to simulate the construction of a tree that
     * is already created but not customized (i.e. by the parser), does *not*
     * prevent the element from reading the 'final' (true) state of the tree. For
     * example, the element, during truly synchronous parsing / construction would
     * see that it contains no children as they have not yet been inserted.
     * However, this function does not modify the tree, the element will
     * (incorrectly) have children. Additionally, self-modification restrictions
     * for custom element constructors imposed by the DOM spec are *not* enforced.
     *
     *
     * The following nested list shows the steps extending down from the HTML
     * spec's parsing section that cause elements to be synchronously created and
     * upgraded:
     *
     * The "in body" insertion mode:
     * https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
     * - Switch on token:
     *   .. other cases ..
     *   -> Any other start tag
     *      - [Insert an HTML element](below) for the token.
     *
     * Insert an HTML element:
     * https://html.spec.whatwg.org/multipage/syntax.html#insert-an-html-element
     * - Insert a foreign element for the token in the HTML namespace:
     *   https://html.spec.whatwg.org/multipage/syntax.html#insert-a-foreign-element
     *   - Create an element for a token:
     *     https://html.spec.whatwg.org/multipage/syntax.html#create-an-element-for-the-token
     *     - Will execute script flag is true?
     *       - (Element queue pushed to the custom element reactions stack.)
     *     - Create an element:
     *       https://dom.spec.whatwg.org/#concept-create-element
     *       - Sync CE flag is true?
     *         - Constructor called.
     *         - Self-modification restrictions enforced.
     *       - Sync CE flag is false?
     *         - (Upgrade reaction enqueued.)
     *     - Attributes appended to element.
     *       (`attributeChangedCallback` reactions enqueued.)
     *     - Will execute script flag is true?
     *       - (Element queue popped from the custom element reactions stack.
     *         Reactions in the popped stack are invoked.)
     *   - (Element queue pushed to the custom element reactions stack.)
     *   - Insert the element:
     *     https://dom.spec.whatwg.org/#concept-node-insert
     *     - Shadow-including descendants are connected. During parsing
     *       construction, there are no shadow-*excluding* descendants.
     *       However, the constructor may have validly attached a shadow
     *       tree to itself and added descendants to that shadow tree.
     *       (`connectedCallback` reactions enqueued.)
     *   - (Element queue popped from the custom element reactions stack.
     *     Reactions in the popped stack are invoked.)
     *
     * @param {!Node} root
     * @param {!Set<Node>=} visitedImports
     */

  }, {
    key: 'patchAndUpgradeTree',
    value: function patchAndUpgradeTree(root) {
      var _this2 = this;

      var visitedImports = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

      var elements = [];

      var gatherElements = function gatherElements(element) {
        if (element.localName === 'link' && element.getAttribute('rel') === 'import') {
          // The HTML Imports polyfill sets a descendant element of the link to
          // the `import` property, specifically this is *not* a Document.
          var importNode = /** @type {?Node} */element.import;

          if (importNode instanceof Node && importNode.readyState === 'complete') {
            importNode.__CE_isImportDocument = true;

            // Connected links are associated with the registry.
            importNode.__CE_hasRegistry = true;
          } else {
            // If this link's import root is not available, its contents can't be
            // walked. Wait for 'load' and walk it when it's ready.
            element.addEventListener('load', function () {
              var importNode = /** @type {!Node} */element.import;

              if (importNode.__CE_documentLoadHandled) return;
              importNode.__CE_documentLoadHandled = true;

              importNode.__CE_isImportDocument = true;

              // Connected links are associated with the registry.
              importNode.__CE_hasRegistry = true;

              // Clone the `visitedImports` set that was populated sync during
              // the `patchAndUpgradeTree` call that caused this 'load' handler to
              // be added. Then, remove *this* link's import node so that we can
              // walk that import again, even if it was partially walked later
              // during the same `patchAndUpgradeTree` call.
              visitedImports.delete(importNode);

              _this2.patchAndUpgradeTree(importNode, visitedImports);
            });
          }
        } else {
          elements.push(element);
        }
      };

      // `walkDeepDescendantElements` populates (and internally checks against)
      // `visitedImports` when traversing a loaded import.
      walkDeepDescendantElements(root, gatherElements, visitedImports);

      if (this._hasPatches) {
        for (var i = 0; i < elements.length; i++) {
          this.patch(elements[i]);
        }
      }

      for (var _i = 0; _i < elements.length; _i++) {
        this.upgradeElement(elements[_i]);
      }
    }

    /**
     * @param {!Element} element
     */

  }, {
    key: 'upgradeElement',
    value: function upgradeElement(element) {
      var currentState = element.__CE_state;
      if (currentState !== undefined) return;

      var definition = this.localNameToDefinition(element.localName);
      if (!definition) return;

      definition.constructionStack.push(element);

      var constructor = definition.constructor;
      try {
        try {
          var result = new constructor();
          if (result !== element) {
            throw new Error('The custom element constructor did not produce the element being upgraded.');
          }
        } finally {
          definition.constructionStack.pop();
        }
      } catch (e) {
        element.__CE_state = CustomElementState.failed;
        throw e;
      }

      element.__CE_state = CustomElementState.custom;
      element.__CE_definition = definition;

      if (definition.attributeChangedCallback) {
        var observedAttributes = definition.observedAttributes;
        for (var i = 0; i < observedAttributes.length; i++) {
          var name = observedAttributes[i];
          var value = element.getAttribute(name);
          if (value !== null) {
            this.attributeChangedCallback(element, name, null, value, null);
          }
        }
      }

      if (isConnected(element)) {
        this.connectedCallback(element);
      }
    }

    /**
     * @param {!Element} element
     */

  }, {
    key: 'connectedCallback',
    value: function connectedCallback(element) {
      var definition = element.__CE_definition;
      if (definition.connectedCallback) {
        definition.connectedCallback.call(element);
      }

      element.__CE_isConnectedCallbackCalled = true;
    }

    /**
     * @param {!Element} element
     */

  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback(element) {
      if (!element.__CE_isConnectedCallbackCalled) {
        this.connectedCallback(element);
      }

      var definition = element.__CE_definition;
      if (definition.disconnectedCallback) {
        definition.disconnectedCallback.call(element);
      }

      element.__CE_isConnectedCallbackCalled = undefined;
    }

    /**
     * @param {!Element} element
     * @param {string} name
     * @param {?string} oldValue
     * @param {?string} newValue
     * @param {?string} namespace
     */

  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(element, name, oldValue, newValue, namespace) {
      var definition = element.__CE_definition;
      if (definition.attributeChangedCallback && definition.observedAttributes.indexOf(name) > -1) {
        definition.attributeChangedCallback.call(element, name, oldValue, newValue, namespace);
      }
    }
  }]);
  return CustomElementInternals;
}();

var DocumentConstructionObserver = function () {
  function DocumentConstructionObserver(internals, doc) {
    classCallCheck(this, DocumentConstructionObserver);

    /**
     * @type {!CustomElementInternals}
     */
    this._internals = internals;

    /**
     * @type {!Document}
     */
    this._document = doc;

    /**
     * @type {MutationObserver|undefined}
     */
    this._observer = undefined;

    // Simulate tree construction for all currently accessible nodes in the
    // document.
    this._internals.patchAndUpgradeTree(this._document);

    if (this._document.readyState === 'loading') {
      this._observer = new MutationObserver(this._handleMutations.bind(this));

      // Nodes created by the parser are given to the observer *before* the next
      // task runs. Inline scripts are run in a new task. This means that the
      // observer will be able to handle the newly parsed nodes before the inline
      // script is run.
      this._observer.observe(this._document, {
        childList: true,
        subtree: true
      });
    }
  }

  createClass(DocumentConstructionObserver, [{
    key: 'disconnect',
    value: function disconnect() {
      if (this._observer) {
        this._observer.disconnect();
      }
    }

    /**
     * @param {!Array<!MutationRecord>} mutations
     */

  }, {
    key: '_handleMutations',
    value: function _handleMutations(mutations) {
      // Once the document's `readyState` is 'interactive' or 'complete', all new
      // nodes created within that document will be the result of script and
      // should be handled by patching.
      var readyState = this._document.readyState;
      if (readyState === 'interactive' || readyState === 'complete') {
        this.disconnect();
      }

      for (var i = 0; i < mutations.length; i++) {
        var addedNodes = mutations[i].addedNodes;
        for (var j = 0; j < addedNodes.length; j++) {
          var node = addedNodes[j];
          this._internals.patchAndUpgradeTree(node);
        }
      }
    }
  }]);
  return DocumentConstructionObserver;
}();

/**
 * @template T
 */
var Deferred = function () {
  function Deferred() {
    var _this = this;

    classCallCheck(this, Deferred);

    /**
     * @private
     * @type {T|undefined}
     */
    this._value = undefined;

    /**
     * @private
     * @type {Function|undefined}
     */
    this._resolve = undefined;

    /**
     * @private
     * @type {!Promise<T>}
     */
    this._promise = new Promise(function (resolve) {
      _this._resolve = resolve;

      if (_this._value) {
        resolve(_this._value);
      }
    });
  }

  /**
   * @param {T} value
   */


  createClass(Deferred, [{
    key: 'resolve',
    value: function resolve(value) {
      if (this._value) {
        throw new Error('Already resolved.');
      }

      this._value = value;

      if (this._resolve) {
        this._resolve(value);
      }
    }

    /**
     * @return {!Promise<T>}
     */

  }, {
    key: 'toPromise',
    value: function toPromise() {
      return this._promise;
    }
  }]);
  return Deferred;
}();

/**
 * @unrestricted
 */

var CustomElementRegistry = function () {

  /**
   * @param {!CustomElementInternals} internals
   */
  function CustomElementRegistry(internals) {
    classCallCheck(this, CustomElementRegistry);

    /**
     * @private
     * @type {boolean}
     */
    this._elementDefinitionIsRunning = false;

    /**
     * @private
     * @type {!CustomElementInternals}
     */
    this._internals = internals;

    /**
     * @private
     * @type {!Map<string, !Deferred<undefined>>}
     */
    this._whenDefinedDeferred = new Map();

    /**
     * The default flush callback triggers the document walk synchronously.
     * @private
     * @type {!Function}
     */
    this._flushCallback = function (fn) {
      return fn();
    };

    /**
     * @private
     * @type {boolean}
     */
    this._flushPending = false;

    /**
     * @private
     * @type {!Array<string>}
     */
    this._unflushedLocalNames = [];

    /**
     * @private
     * @type {!DocumentConstructionObserver}
     */
    this._documentConstructionObserver = new DocumentConstructionObserver(internals, document);
  }

  /**
   * @param {string} localName
   * @param {!Function} constructor
   */


  createClass(CustomElementRegistry, [{
    key: 'define',
    value: function define(localName, constructor) {
      var _this = this;

      if (!(constructor instanceof Function)) {
        throw new TypeError('Custom element constructors must be functions.');
      }

      if (!isValidCustomElementName(localName)) {
        throw new SyntaxError('The element name \'' + localName + '\' is not valid.');
      }

      if (this._internals.localNameToDefinition(localName)) {
        throw new Error('A custom element with name \'' + localName + '\' has already been defined.');
      }

      if (this._elementDefinitionIsRunning) {
        throw new Error('A custom element is already being defined.');
      }
      this._elementDefinitionIsRunning = true;

      var connectedCallback = void 0;
      var disconnectedCallback = void 0;
      var adoptedCallback = void 0;
      var attributeChangedCallback = void 0;
      var observedAttributes = void 0;
      try {
        var getCallback = function getCallback(name) {
          var callbackValue = prototype[name];
          if (callbackValue !== undefined && !(callbackValue instanceof Function)) {
            throw new Error('The \'' + name + '\' callback must be a function.');
          }
          return callbackValue;
        };

        /** @type {!Object} */
        var prototype = constructor.prototype;
        if (!(prototype instanceof Object)) {
          throw new TypeError('The custom element constructor\'s prototype is not an object.');
        }

        connectedCallback = getCallback('connectedCallback');
        disconnectedCallback = getCallback('disconnectedCallback');
        adoptedCallback = getCallback('adoptedCallback');
        attributeChangedCallback = getCallback('attributeChangedCallback');
        observedAttributes = constructor['observedAttributes'] || [];
      } catch (e) {
        return;
      } finally {
        this._elementDefinitionIsRunning = false;
      }

      var definition = {
        localName: localName,
        constructor: constructor,
        connectedCallback: connectedCallback,
        disconnectedCallback: disconnectedCallback,
        adoptedCallback: adoptedCallback,
        attributeChangedCallback: attributeChangedCallback,
        observedAttributes: observedAttributes,
        constructionStack: []
      };

      this._internals.setDefinition(localName, definition);

      this._unflushedLocalNames.push(localName);

      // If we've already called the flush callback and it hasn't called back yet,
      // don't call it again.
      if (!this._flushPending) {
        this._flushPending = true;
        this._flushCallback(function () {
          return _this._flush();
        });
      }
    }
  }, {
    key: '_flush',
    value: function _flush() {
      // If no new definitions were defined, don't attempt to flush. This could
      // happen if a flush callback keeps the function it is given and calls it
      // multiple times.
      if (this._flushPending === false) return;

      this._flushPending = false;
      this._internals.patchAndUpgradeTree(document);

      while (this._unflushedLocalNames.length > 0) {
        var localName = this._unflushedLocalNames.shift();
        var deferred = this._whenDefinedDeferred.get(localName);
        if (deferred) {
          deferred.resolve(undefined);
        }
      }
    }

    /**
     * @param {string} localName
     * @return {Function|undefined}
     */

  }, {
    key: 'get',
    value: function get$$1(localName) {
      var definition = this._internals.localNameToDefinition(localName);
      if (definition) {
        return definition.constructor;
      }

      return undefined;
    }

    /**
     * @param {string} localName
     * @return {!Promise<undefined>}
     */

  }, {
    key: 'whenDefined',
    value: function whenDefined(localName) {
      if (!isValidCustomElementName(localName)) {
        return Promise.reject(new SyntaxError('\'' + localName + '\' is not a valid custom element name.'));
      }

      var prior = this._whenDefinedDeferred.get(localName);
      if (prior) {
        return prior.toPromise();
      }

      var deferred = new Deferred();
      this._whenDefinedDeferred.set(localName, deferred);

      var definition = this._internals.localNameToDefinition(localName);
      // Resolve immediately only if the given local name has a definition *and*
      // the full document walk to upgrade elements with that local name has
      // already happened.
      if (definition && this._unflushedLocalNames.indexOf(localName) === -1) {
        deferred.resolve(undefined);
      }

      return deferred.toPromise();
    }
  }, {
    key: 'polyfillWrapFlushCallback',
    value: function polyfillWrapFlushCallback(outer) {
      this._documentConstructionObserver.disconnect();
      var inner = this._flushCallback;
      this._flushCallback = function (flush) {
        return outer(function () {
          return inner(flush);
        });
      };
    }
  }]);
  return CustomElementRegistry;
}();

window['CustomElementRegistry'] = CustomElementRegistry;
CustomElementRegistry.prototype['define'] = CustomElementRegistry.prototype.define;
CustomElementRegistry.prototype['get'] = CustomElementRegistry.prototype.get;
CustomElementRegistry.prototype['whenDefined'] = CustomElementRegistry.prototype.whenDefined;
CustomElementRegistry.prototype['polyfillWrapFlushCallback'] = CustomElementRegistry.prototype.polyfillWrapFlushCallback;

var Native = {
  Document_createElement: window.Document.prototype.createElement,
  Document_createElementNS: window.Document.prototype.createElementNS,
  Document_importNode: window.Document.prototype.importNode,
  Document_prepend: window.Document.prototype['prepend'],
  Document_append: window.Document.prototype['append'],
  Node_cloneNode: window.Node.prototype.cloneNode,
  Node_appendChild: window.Node.prototype.appendChild,
  Node_insertBefore: window.Node.prototype.insertBefore,
  Node_removeChild: window.Node.prototype.removeChild,
  Node_replaceChild: window.Node.prototype.replaceChild,
  Node_textContent: Object.getOwnPropertyDescriptor(window.Node.prototype, 'textContent'),
  Element_attachShadow: window.Element.prototype['attachShadow'],
  Element_innerHTML: Object.getOwnPropertyDescriptor(window.Element.prototype, 'innerHTML'),
  Element_getAttribute: window.Element.prototype.getAttribute,
  Element_setAttribute: window.Element.prototype.setAttribute,
  Element_removeAttribute: window.Element.prototype.removeAttribute,
  Element_getAttributeNS: window.Element.prototype.getAttributeNS,
  Element_setAttributeNS: window.Element.prototype.setAttributeNS,
  Element_removeAttributeNS: window.Element.prototype.removeAttributeNS,
  Element_insertAdjacentElement: window.Element.prototype['insertAdjacentElement'],
  Element_prepend: window.Element.prototype['prepend'],
  Element_append: window.Element.prototype['append'],
  Element_before: window.Element.prototype['before'],
  Element_after: window.Element.prototype['after'],
  Element_replaceWith: window.Element.prototype['replaceWith'],
  Element_remove: window.Element.prototype['remove'],
  HTMLElement: window.HTMLElement,
  HTMLElement_innerHTML: Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'innerHTML'),
  HTMLElement_insertAdjacentElement: window.HTMLElement.prototype['insertAdjacentElement']
};

/**
 * This class exists only to work around Closure's lack of a way to describe
 * singletons. It represents the 'already constructed marker' used in custom
 * element construction stacks.
 *
 * https://html.spec.whatwg.org/#concept-already-constructed-marker
 */
var AlreadyConstructedMarker = function AlreadyConstructedMarker() {
  classCallCheck(this, AlreadyConstructedMarker);
};

var AlreadyConstructedMarker$1 = new AlreadyConstructedMarker();

/**
 * @param {!CustomElementInternals} internals
 */
var PatchHTMLElement = function (internals) {
  window['HTMLElement'] = function () {
    /**
     * @type {function(new: HTMLElement): !HTMLElement}
     */
    function HTMLElement() {
      // This should really be `new.target` but `new.target` can't be emulated
      // in ES5. Assuming the user keeps the default value of the constructor's
      // prototype's `constructor` property, this is equivalent.
      /** @type {!Function} */
      var constructor = this.constructor;

      var definition = internals.constructorToDefinition(constructor);
      if (!definition) {
        throw new Error('The custom element being constructed was not registered with `customElements`.');
      }

      var constructionStack = definition.constructionStack;

      if (constructionStack.length === 0) {
        var _element = Native.Document_createElement.call(document, definition.localName);
        Object.setPrototypeOf(_element, constructor.prototype);
        _element.__CE_state = CustomElementState.custom;
        _element.__CE_definition = definition;
        internals.patch(_element);
        return _element;
      }

      var lastIndex = constructionStack.length - 1;
      var element = constructionStack[lastIndex];
      if (element === AlreadyConstructedMarker$1) {
        throw new Error('The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.');
      }
      constructionStack[lastIndex] = AlreadyConstructedMarker$1;

      Object.setPrototypeOf(element, constructor.prototype);
      internals.patch( /** @type {!HTMLElement} */element);

      return element;
    }

    HTMLElement.prototype = Native.HTMLElement.prototype;

    return HTMLElement;
  }();
};

/**
 * @param {!CustomElementInternals} internals
 * @param {!Object} destination
 * @param {!ParentNodeNativeMethods} builtIn
 */
var PatchParentNode = function (internals, destination, builtIn) {
  /**
   * @param {...(!Node|string)} nodes
   */
  destination['prepend'] = function () {
    for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
      nodes[_key] = arguments[_key];
    }

    // TODO: Fix this for when one of `nodes` is a DocumentFragment!
    var connectedBefore = /** @type {!Array<!Node>} */nodes.filter(function (node) {
      // DocumentFragments are not connected and will not be added to the list.
      return node instanceof Node && isConnected(node);
    });

    builtIn.prepend.apply(this, nodes);

    for (var i = 0; i < connectedBefore.length; i++) {
      internals.disconnectTree(connectedBefore[i]);
    }

    if (isConnected(this)) {
      for (var _i = 0; _i < nodes.length; _i++) {
        var node = nodes[_i];
        if (node instanceof Element) {
          internals.connectTree(node);
        }
      }
    }
  };

  /**
   * @param {...(!Node|string)} nodes
   */
  destination['append'] = function () {
    for (var _len2 = arguments.length, nodes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      nodes[_key2] = arguments[_key2];
    }

    // TODO: Fix this for when one of `nodes` is a DocumentFragment!
    var connectedBefore = /** @type {!Array<!Node>} */nodes.filter(function (node) {
      // DocumentFragments are not connected and will not be added to the list.
      return node instanceof Node && isConnected(node);
    });

    builtIn.append.apply(this, nodes);

    for (var i = 0; i < connectedBefore.length; i++) {
      internals.disconnectTree(connectedBefore[i]);
    }

    if (isConnected(this)) {
      for (var _i2 = 0; _i2 < nodes.length; _i2++) {
        var node = nodes[_i2];
        if (node instanceof Element) {
          internals.connectTree(node);
        }
      }
    }
  };
};

/**
 * @param {!CustomElementInternals} internals
 */
var PatchDocument = function (internals) {
  setPropertyUnchecked(Document.prototype, 'createElement',
  /**
   * @this {Document}
   * @param {string} localName
   * @return {!Element}
   */
  function (localName) {
    // Only create custom elements if this document is associated with the registry.
    if (this.__CE_hasRegistry) {
      var definition = internals.localNameToDefinition(localName);
      if (definition) {
        return new definition.constructor();
      }
    }

    var result = /** @type {!Element} */
    Native.Document_createElement.call(this, localName);
    internals.patch(result);
    return result;
  });

  setPropertyUnchecked(Document.prototype, 'importNode',
  /**
   * @this {Document}
   * @param {!Node} node
   * @param {boolean=} deep
   * @return {!Node}
   */
  function (node, deep) {
    var clone = Native.Document_importNode.call(this, node, deep);
    // Only create custom elements if this document is associated with the registry.
    if (!this.__CE_hasRegistry) {
      internals.patchTree(clone);
    } else {
      internals.patchAndUpgradeTree(clone);
    }
    return clone;
  });

  var NS_HTML = "http://www.w3.org/1999/xhtml";

  setPropertyUnchecked(Document.prototype, 'createElementNS',
  /**
   * @this {Document}
   * @param {?string} namespace
   * @param {string} localName
   * @return {!Element}
   */
  function (namespace, localName) {
    // Only create custom elements if this document is associated with the registry.
    if (this.__CE_hasRegistry && (namespace === null || namespace === NS_HTML)) {
      var definition = internals.localNameToDefinition(localName);
      if (definition) {
        return new definition.constructor();
      }
    }

    var result = /** @type {!Element} */
    Native.Document_createElementNS.call(this, namespace, localName);
    internals.patch(result);
    return result;
  });

  PatchParentNode(internals, Document.prototype, {
    prepend: Native.Document_prepend,
    append: Native.Document_append
  });
};

/**
 * @param {!CustomElementInternals} internals
 */
var PatchNode = function (internals) {
  // `Node#nodeValue` is implemented on `Attr`.
  // `Node#textContent` is implemented on `Attr`, `Element`.

  setPropertyUnchecked(Node.prototype, 'insertBefore',
  /**
   * @this {Node}
   * @param {!Node} node
   * @param {?Node} refNode
   * @return {!Node}
   */
  function (node, refNode) {
    if (node instanceof DocumentFragment) {
      var insertedNodes = Array.prototype.slice.apply(node.childNodes);
      var _nativeResult = Native.Node_insertBefore.call(this, node, refNode);

      // DocumentFragments can't be connected, so `disconnectTree` will never
      // need to be called on a DocumentFragment's children after inserting it.

      if (isConnected(this)) {
        for (var i = 0; i < insertedNodes.length; i++) {
          internals.connectTree(insertedNodes[i]);
        }
      }

      return _nativeResult;
    }

    var nodeWasConnected = isConnected(node);
    var nativeResult = Native.Node_insertBefore.call(this, node, refNode);

    if (nodeWasConnected) {
      internals.disconnectTree(node);
    }

    if (isConnected(this)) {
      internals.connectTree(node);
    }

    return nativeResult;
  });

  setPropertyUnchecked(Node.prototype, 'appendChild',
  /**
   * @this {Node}
   * @param {!Node} node
   * @return {!Node}
   */
  function (node) {
    if (node instanceof DocumentFragment) {
      var insertedNodes = Array.prototype.slice.apply(node.childNodes);
      var _nativeResult2 = Native.Node_appendChild.call(this, node);

      // DocumentFragments can't be connected, so `disconnectTree` will never
      // need to be called on a DocumentFragment's children after inserting it.

      if (isConnected(this)) {
        for (var i = 0; i < insertedNodes.length; i++) {
          internals.connectTree(insertedNodes[i]);
        }
      }

      return _nativeResult2;
    }

    var nodeWasConnected = isConnected(node);
    var nativeResult = Native.Node_appendChild.call(this, node);

    if (nodeWasConnected) {
      internals.disconnectTree(node);
    }

    if (isConnected(this)) {
      internals.connectTree(node);
    }

    return nativeResult;
  });

  setPropertyUnchecked(Node.prototype, 'cloneNode',
  /**
   * @this {Node}
   * @param {boolean=} deep
   * @return {!Node}
   */
  function (deep) {
    var clone = Native.Node_cloneNode.call(this, deep);
    // Only create custom elements if this element's owner document is
    // associated with the registry.
    if (!this.ownerDocument.__CE_hasRegistry) {
      internals.patchTree(clone);
    } else {
      internals.patchAndUpgradeTree(clone);
    }
    return clone;
  });

  setPropertyUnchecked(Node.prototype, 'removeChild',
  /**
   * @this {Node}
   * @param {!Node} node
   * @return {!Node}
   */
  function (node) {
    var nodeWasConnected = isConnected(node);
    var nativeResult = Native.Node_removeChild.call(this, node);

    if (nodeWasConnected) {
      internals.disconnectTree(node);
    }

    return nativeResult;
  });

  setPropertyUnchecked(Node.prototype, 'replaceChild',
  /**
   * @this {Node}
   * @param {!Node} nodeToInsert
   * @param {!Node} nodeToRemove
   * @return {!Node}
   */
  function (nodeToInsert, nodeToRemove) {
    if (nodeToInsert instanceof DocumentFragment) {
      var insertedNodes = Array.prototype.slice.apply(nodeToInsert.childNodes);
      var _nativeResult3 = Native.Node_replaceChild.call(this, nodeToInsert, nodeToRemove);

      // DocumentFragments can't be connected, so `disconnectTree` will never
      // need to be called on a DocumentFragment's children after inserting it.

      if (isConnected(this)) {
        internals.disconnectTree(nodeToRemove);
        for (var i = 0; i < insertedNodes.length; i++) {
          internals.connectTree(insertedNodes[i]);
        }
      }

      return _nativeResult3;
    }

    var nodeToInsertWasConnected = isConnected(nodeToInsert);
    var nativeResult = Native.Node_replaceChild.call(this, nodeToInsert, nodeToRemove);
    var thisIsConnected = isConnected(this);

    if (thisIsConnected) {
      internals.disconnectTree(nodeToRemove);
    }

    if (nodeToInsertWasConnected) {
      internals.disconnectTree(nodeToInsert);
    }

    if (thisIsConnected) {
      internals.connectTree(nodeToInsert);
    }

    return nativeResult;
  });

  function patch_textContent(destination, baseDescriptor) {
    Object.defineProperty(destination, 'textContent', {
      enumerable: baseDescriptor.enumerable,
      configurable: true,
      get: baseDescriptor.get,
      set: /** @this {Node} */function set(assignedValue) {
        // If this is a text node then there are no nodes to disconnect.
        if (this.nodeType === Node.TEXT_NODE) {
          baseDescriptor.set.call(this, assignedValue);
          return;
        }

        var removedNodes = undefined;
        // Checking for `firstChild` is faster than reading `childNodes.length`
        // to compare with 0.
        if (this.firstChild) {
          // Using `childNodes` is faster than `children`, even though we only
          // care about elements.
          var childNodes = this.childNodes;
          var childNodesLength = childNodes.length;
          if (childNodesLength > 0 && isConnected(this)) {
            // Copying an array by iterating is faster than using slice.
            removedNodes = new Array(childNodesLength);
            for (var i = 0; i < childNodesLength; i++) {
              removedNodes[i] = childNodes[i];
            }
          }
        }

        baseDescriptor.set.call(this, assignedValue);

        if (removedNodes) {
          for (var _i = 0; _i < removedNodes.length; _i++) {
            internals.disconnectTree(removedNodes[_i]);
          }
        }
      }
    });
  }

  if (Native.Node_textContent && Native.Node_textContent.get) {
    patch_textContent(Node.prototype, Native.Node_textContent);
  } else {
    internals.addPatch(function (element) {
      patch_textContent(element, {
        enumerable: true,
        configurable: true,
        // NOTE: This implementation of the `textContent` getter assumes that
        // text nodes' `textContent` getter will not be patched.
        get: /** @this {Node} */function get() {
          /** @type {!Array<string>} */
          var parts = [];

          for (var i = 0; i < this.childNodes.length; i++) {
            parts.push(this.childNodes[i].textContent);
          }

          return parts.join('');
        },
        set: /** @this {Node} */function set(assignedValue) {
          while (this.firstChild) {
            Native.Node_removeChild.call(this, this.firstChild);
          }
          Native.Node_appendChild.call(this, document.createTextNode(assignedValue));
        }
      });
    });
  }
};

/**
 * @param {!CustomElementInternals} internals
 * @param {!Object} destination
 * @param {!ChildNodeNativeMethods} builtIn
 */
var PatchChildNode = function (internals, destination, builtIn) {
  /**
   * @param {...(!Node|string)} nodes
   */
  destination['before'] = function () {
    for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
      nodes[_key] = arguments[_key];
    }

    // TODO: Fix this for when one of `nodes` is a DocumentFragment!
    var connectedBefore = /** @type {!Array<!Node>} */nodes.filter(function (node) {
      // DocumentFragments are not connected and will not be added to the list.
      return node instanceof Node && isConnected(node);
    });

    builtIn.before.apply(this, nodes);

    for (var i = 0; i < connectedBefore.length; i++) {
      internals.disconnectTree(connectedBefore[i]);
    }

    if (isConnected(this)) {
      for (var _i = 0; _i < nodes.length; _i++) {
        var node = nodes[_i];
        if (node instanceof Element) {
          internals.connectTree(node);
        }
      }
    }
  };

  /**
   * @param {...(!Node|string)} nodes
   */
  destination['after'] = function () {
    for (var _len2 = arguments.length, nodes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      nodes[_key2] = arguments[_key2];
    }

    // TODO: Fix this for when one of `nodes` is a DocumentFragment!
    var connectedBefore = /** @type {!Array<!Node>} */nodes.filter(function (node) {
      // DocumentFragments are not connected and will not be added to the list.
      return node instanceof Node && isConnected(node);
    });

    builtIn.after.apply(this, nodes);

    for (var i = 0; i < connectedBefore.length; i++) {
      internals.disconnectTree(connectedBefore[i]);
    }

    if (isConnected(this)) {
      for (var _i2 = 0; _i2 < nodes.length; _i2++) {
        var node = nodes[_i2];
        if (node instanceof Element) {
          internals.connectTree(node);
        }
      }
    }
  };

  /**
   * @param {...(!Node|string)} nodes
   */
  destination['replaceWith'] = function () {
    for (var _len3 = arguments.length, nodes = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      nodes[_key3] = arguments[_key3];
    }

    // TODO: Fix this for when one of `nodes` is a DocumentFragment!
    var connectedBefore = /** @type {!Array<!Node>} */nodes.filter(function (node) {
      // DocumentFragments are not connected and will not be added to the list.
      return node instanceof Node && isConnected(node);
    });

    var wasConnected = isConnected(this);

    builtIn.replaceWith.apply(this, nodes);

    for (var i = 0; i < connectedBefore.length; i++) {
      internals.disconnectTree(connectedBefore[i]);
    }

    if (wasConnected) {
      internals.disconnectTree(this);
      for (var _i3 = 0; _i3 < nodes.length; _i3++) {
        var node = nodes[_i3];
        if (node instanceof Element) {
          internals.connectTree(node);
        }
      }
    }
  };

  destination['remove'] = function () {
    var wasConnected = isConnected(this);

    builtIn.remove.call(this);

    if (wasConnected) {
      internals.disconnectTree(this);
    }
  };
};

/**
 * @param {!CustomElementInternals} internals
 */
var PatchElement = function (internals) {
  if (Native.Element_attachShadow) {
    setPropertyUnchecked(Element.prototype, 'attachShadow',
    /**
     * @this {Element}
     * @param {!{mode: string}} init
     * @return {ShadowRoot}
     */
    function (init) {
      var shadowRoot = Native.Element_attachShadow.call(this, init);
      this.__CE_shadowRoot = shadowRoot;
      return shadowRoot;
    });
  } else {
    console.warn('Custom Elements: `Element#attachShadow` was not patched.');
  }

  function patch_innerHTML(destination, baseDescriptor) {
    Object.defineProperty(destination, 'innerHTML', {
      enumerable: baseDescriptor.enumerable,
      configurable: true,
      get: baseDescriptor.get,
      set: /** @this {Element} */function set(htmlString) {
        var _this = this;

        var isConnected$$1 = isConnected(this);

        // NOTE: In IE11, when using the native `innerHTML` setter, all nodes
        // that were previously descendants of the context element have all of
        // their children removed as part of the set - the entire subtree is
        // 'disassembled'. This work around walks the subtree *before* using the
        // native setter.
        /** @type {!Array<!Element>|undefined} */
        var removedElements = undefined;
        if (isConnected$$1) {
          removedElements = [];
          walkDeepDescendantElements(this, function (element) {
            if (element !== _this) {
              removedElements.push(element);
            }
          });
        }

        baseDescriptor.set.call(this, htmlString);

        if (removedElements) {
          for (var i = 0; i < removedElements.length; i++) {
            var element = removedElements[i];
            if (element.__CE_state === CustomElementState.custom) {
              internals.disconnectedCallback(element);
            }
          }
        }

        // Only create custom elements if this element's owner document is
        // associated with the registry.
        if (!this.ownerDocument.__CE_hasRegistry) {
          internals.patchTree(this);
        } else {
          internals.patchAndUpgradeTree(this);
        }
        return htmlString;
      }
    });
  }

  if (Native.Element_innerHTML && Native.Element_innerHTML.get) {
    patch_innerHTML(Element.prototype, Native.Element_innerHTML);
  } else if (Native.HTMLElement_innerHTML && Native.HTMLElement_innerHTML.get) {
    patch_innerHTML(HTMLElement.prototype, Native.HTMLElement_innerHTML);
  } else {

    /** @type {HTMLDivElement} */
    var rawDiv = Native.Document_createElement.call(document, 'div');

    internals.addPatch(function (element) {
      patch_innerHTML(element, {
        enumerable: true,
        configurable: true,
        // Implements getting `innerHTML` by performing an unpatched `cloneNode`
        // of the element and returning the resulting element's `innerHTML`.
        // TODO: Is this too expensive?
        get: /** @this {Element} */function get() {
          return Native.Node_cloneNode.call(this, true).innerHTML;
        },
        // Implements setting `innerHTML` by creating an unpatched element,
        // setting `innerHTML` of that element and replacing the target
        // element's children with those of the unpatched element.
        set: /** @this {Element} */function set(assignedValue) {
          // NOTE: re-route to `content` for `template` elements.
          // We need to do this because `template.appendChild` does not
          // route into `template.content`.
          /** @type {!Node} */
          var content = this.localName === 'template' ? /** @type {!HTMLTemplateElement} */this.content : this;
          rawDiv.innerHTML = assignedValue;

          while (content.childNodes.length > 0) {
            Native.Node_removeChild.call(content, content.childNodes[0]);
          }
          while (rawDiv.childNodes.length > 0) {
            Native.Node_appendChild.call(content, rawDiv.childNodes[0]);
          }
        }
      });
    });
  }

  setPropertyUnchecked(Element.prototype, 'setAttribute',
  /**
   * @this {Element}
   * @param {string} name
   * @param {string} newValue
   */
  function (name, newValue) {
    // Fast path for non-custom elements.
    if (this.__CE_state !== CustomElementState.custom) {
      return Native.Element_setAttribute.call(this, name, newValue);
    }

    var oldValue = Native.Element_getAttribute.call(this, name);
    Native.Element_setAttribute.call(this, name, newValue);
    newValue = Native.Element_getAttribute.call(this, name);
    internals.attributeChangedCallback(this, name, oldValue, newValue, null);
  });

  setPropertyUnchecked(Element.prototype, 'setAttributeNS',
  /**
   * @this {Element}
   * @param {?string} namespace
   * @param {string} name
   * @param {string} newValue
   */
  function (namespace, name, newValue) {
    // Fast path for non-custom elements.
    if (this.__CE_state !== CustomElementState.custom) {
      return Native.Element_setAttributeNS.call(this, namespace, name, newValue);
    }

    var oldValue = Native.Element_getAttributeNS.call(this, namespace, name);
    Native.Element_setAttributeNS.call(this, namespace, name, newValue);
    newValue = Native.Element_getAttributeNS.call(this, namespace, name);
    internals.attributeChangedCallback(this, name, oldValue, newValue, namespace);
  });

  setPropertyUnchecked(Element.prototype, 'removeAttribute',
  /**
   * @this {Element}
   * @param {string} name
   */
  function (name) {
    // Fast path for non-custom elements.
    if (this.__CE_state !== CustomElementState.custom) {
      return Native.Element_removeAttribute.call(this, name);
    }

    var oldValue = Native.Element_getAttribute.call(this, name);
    Native.Element_removeAttribute.call(this, name);
    if (oldValue !== null) {
      internals.attributeChangedCallback(this, name, oldValue, null, null);
    }
  });

  setPropertyUnchecked(Element.prototype, 'removeAttributeNS',
  /**
   * @this {Element}
   * @param {?string} namespace
   * @param {string} name
   */
  function (namespace, name) {
    // Fast path for non-custom elements.
    if (this.__CE_state !== CustomElementState.custom) {
      return Native.Element_removeAttributeNS.call(this, namespace, name);
    }

    var oldValue = Native.Element_getAttributeNS.call(this, namespace, name);
    Native.Element_removeAttributeNS.call(this, namespace, name);
    // In older browsers, `Element#getAttributeNS` may return the empty string
    // instead of null if the attribute does not exist. For details, see;
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNS#Notes
    var newValue = Native.Element_getAttributeNS.call(this, namespace, name);
    if (oldValue !== newValue) {
      internals.attributeChangedCallback(this, name, oldValue, newValue, namespace);
    }
  });

  function patch_insertAdjacentElement(destination, baseMethod) {
    setPropertyUnchecked(destination, 'insertAdjacentElement',
    /**
     * @this {Element}
     * @param {string} where
     * @param {!Element} element
     * @return {?Element}
     */
    function (where, element) {
      var wasConnected = isConnected(element);
      var insertedElement = /** @type {!Element} */
      baseMethod.call(this, where, element);

      if (wasConnected) {
        internals.disconnectTree(element);
      }

      if (isConnected(insertedElement)) {
        internals.connectTree(element);
      }
      return insertedElement;
    });
  }

  if (Native.HTMLElement_insertAdjacentElement) {
    patch_insertAdjacentElement(HTMLElement.prototype, Native.HTMLElement_insertAdjacentElement);
  } else if (Native.Element_insertAdjacentElement) {
    patch_insertAdjacentElement(Element.prototype, Native.Element_insertAdjacentElement);
  } else {
    console.warn('Custom Elements: `Element#insertAdjacentElement` was not patched.');
  }

  PatchParentNode(internals, Element.prototype, {
    prepend: Native.Element_prepend,
    append: Native.Element_append
  });

  PatchChildNode(internals, Element.prototype, {
    before: Native.Element_before,
    after: Native.Element_after,
    replaceWith: Native.Element_replaceWith,
    remove: Native.Element_remove
  });
};

/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

var priorCustomElements = window['customElements'];

if (!priorCustomElements || priorCustomElements['forcePolyfill'] || typeof priorCustomElements['define'] != 'function' || typeof priorCustomElements['get'] != 'function') {
  /** @type {!CustomElementInternals} */
  var internals = new CustomElementInternals();

  PatchHTMLElement(internals);
  PatchDocument(internals);
  PatchNode(internals);
  PatchElement(internals);

  // The main document is always associated with the registry.
  document.__CE_hasRegistry = true;

  /** @type {!CustomElementRegistry} */
  var customElements = new CustomElementRegistry(internals);

  Object.defineProperty(window, 'customElements', {
    configurable: true,
    enumerable: true,
    value: customElements
  });
}

/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version 0.7.22

(function (global) {
  if (global.JsMutationObserver) {
    return;
  }
  var registrationsTable = new WeakMap();
  var setImmediate;
  if (/Trident|Edge/.test(navigator.userAgent)) {
    setImmediate = setTimeout;
  } else if (window.setImmediate) {
    setImmediate = window.setImmediate;
  } else {
    var setImmediateQueue = [];
    var sentinel = String(Math.random());
    window.addEventListener("message", function (e) {
      if (e.data === sentinel) {
        var queue = setImmediateQueue;
        setImmediateQueue = [];
        queue.forEach(function (func) {
          func();
        });
      }
    });
    setImmediate = function setImmediate(func) {
      setImmediateQueue.push(func);
      window.postMessage(sentinel, "*");
    };
  }
  var isScheduled = false;
  var scheduledObservers = [];
  function scheduleCallback(observer) {
    scheduledObservers.push(observer);
    if (!isScheduled) {
      isScheduled = true;
      setImmediate(dispatchCallbacks);
    }
  }
  function wrapIfNeeded(node) {
    return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(node) || node;
  }
  function dispatchCallbacks() {
    isScheduled = false;
    var observers = scheduledObservers;
    scheduledObservers = [];
    observers.sort(function (o1, o2) {
      return o1.uid_ - o2.uid_;
    });
    var anyNonEmpty = false;
    observers.forEach(function (observer) {
      var queue = observer.takeRecords();
      removeTransientObserversFor(observer);
      if (queue.length) {
        observer.callback_(queue, observer);
        anyNonEmpty = true;
      }
    });
    if (anyNonEmpty) dispatchCallbacks();
  }
  function removeTransientObserversFor(observer) {
    observer.nodes_.forEach(function (node) {
      var registrations = registrationsTable.get(node);
      if (!registrations) return;
      registrations.forEach(function (registration) {
        if (registration.observer === observer) registration.removeTransientObservers();
      });
    });
  }
  function forEachAncestorAndObserverEnqueueRecord(target, callback) {
    for (var node = target; node; node = node.parentNode) {
      var registrations = registrationsTable.get(node);
      if (registrations) {
        for (var j = 0; j < registrations.length; j++) {
          var registration = registrations[j];
          var options = registration.options;
          if (node !== target && !options.subtree) continue;
          var record = callback(options);
          if (record) registration.enqueue(record);
        }
      }
    }
  }
  var uidCounter = 0;
  function JsMutationObserver(callback) {
    this.callback_ = callback;
    this.nodes_ = [];
    this.records_ = [];
    this.uid_ = ++uidCounter;
  }
  JsMutationObserver.prototype = {
    observe: function observe(target, options) {
      target = wrapIfNeeded(target);
      if (!options.childList && !options.attributes && !options.characterData || options.attributeOldValue && !options.attributes || options.attributeFilter && options.attributeFilter.length && !options.attributes || options.characterDataOldValue && !options.characterData) {
        throw new SyntaxError();
      }
      var registrations = registrationsTable.get(target);
      if (!registrations) registrationsTable.set(target, registrations = []);
      var registration;
      for (var i = 0; i < registrations.length; i++) {
        if (registrations[i].observer === this) {
          registration = registrations[i];
          registration.removeListeners();
          registration.options = options;
          break;
        }
      }
      if (!registration) {
        registration = new Registration(this, target, options);
        registrations.push(registration);
        this.nodes_.push(target);
      }
      registration.addListeners();
    },
    disconnect: function disconnect() {
      this.nodes_.forEach(function (node) {
        var registrations = registrationsTable.get(node);
        for (var i = 0; i < registrations.length; i++) {
          var registration = registrations[i];
          if (registration.observer === this) {
            registration.removeListeners();
            registrations.splice(i, 1);
            break;
          }
        }
      }, this);
      this.records_ = [];
    },
    takeRecords: function takeRecords() {
      var copyOfRecords = this.records_;
      this.records_ = [];
      return copyOfRecords;
    }
  };
  function MutationRecord(type, target) {
    this.type = type;
    this.target = target;
    this.addedNodes = [];
    this.removedNodes = [];
    this.previousSibling = null;
    this.nextSibling = null;
    this.attributeName = null;
    this.attributeNamespace = null;
    this.oldValue = null;
  }
  function copyMutationRecord(original) {
    var record = new MutationRecord(original.type, original.target);
    record.addedNodes = original.addedNodes.slice();
    record.removedNodes = original.removedNodes.slice();
    record.previousSibling = original.previousSibling;
    record.nextSibling = original.nextSibling;
    record.attributeName = original.attributeName;
    record.attributeNamespace = original.attributeNamespace;
    record.oldValue = original.oldValue;
    return record;
  }
  var currentRecord, recordWithOldValue;
  function getRecord(type, target) {
    return currentRecord = new MutationRecord(type, target);
  }
  function getRecordWithOldValue(oldValue) {
    if (recordWithOldValue) return recordWithOldValue;
    recordWithOldValue = copyMutationRecord(currentRecord);
    recordWithOldValue.oldValue = oldValue;
    return recordWithOldValue;
  }
  function clearRecords() {
    currentRecord = recordWithOldValue = undefined;
  }
  function recordRepresentsCurrentMutation(record) {
    return record === recordWithOldValue || record === currentRecord;
  }
  function selectRecord(lastRecord, newRecord) {
    if (lastRecord === newRecord) return lastRecord;
    if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord)) return recordWithOldValue;
    return null;
  }
  function Registration(observer, target, options) {
    this.observer = observer;
    this.target = target;
    this.options = options;
    this.transientObservedNodes = [];
  }
  Registration.prototype = {
    enqueue: function enqueue(record) {
      var records = this.observer.records_;
      var length = records.length;
      if (records.length > 0) {
        var lastRecord = records[length - 1];
        var recordToReplaceLast = selectRecord(lastRecord, record);
        if (recordToReplaceLast) {
          records[length - 1] = recordToReplaceLast;
          return;
        }
      } else {
        scheduleCallback(this.observer);
      }
      records[length] = record;
    },
    addListeners: function addListeners() {
      this.addListeners_(this.target);
    },
    addListeners_: function addListeners_(node) {
      var options = this.options;
      if (options.attributes) node.addEventListener("DOMAttrModified", this, true);
      if (options.characterData) node.addEventListener("DOMCharacterDataModified", this, true);
      if (options.childList) node.addEventListener("DOMNodeInserted", this, true);
      if (options.childList || options.subtree) node.addEventListener("DOMNodeRemoved", this, true);
    },
    removeListeners: function removeListeners() {
      this.removeListeners_(this.target);
    },
    removeListeners_: function removeListeners_(node) {
      var options = this.options;
      if (options.attributes) node.removeEventListener("DOMAttrModified", this, true);
      if (options.characterData) node.removeEventListener("DOMCharacterDataModified", this, true);
      if (options.childList) node.removeEventListener("DOMNodeInserted", this, true);
      if (options.childList || options.subtree) node.removeEventListener("DOMNodeRemoved", this, true);
    },
    addTransientObserver: function addTransientObserver(node) {
      if (node === this.target) return;
      this.addListeners_(node);
      this.transientObservedNodes.push(node);
      var registrations = registrationsTable.get(node);
      if (!registrations) registrationsTable.set(node, registrations = []);
      registrations.push(this);
    },
    removeTransientObservers: function removeTransientObservers() {
      var transientObservedNodes = this.transientObservedNodes;
      this.transientObservedNodes = [];
      transientObservedNodes.forEach(function (node) {
        this.removeListeners_(node);
        var registrations = registrationsTable.get(node);
        for (var i = 0; i < registrations.length; i++) {
          if (registrations[i] === this) {
            registrations.splice(i, 1);
            break;
          }
        }
      }, this);
    },
    handleEvent: function handleEvent(e) {
      e.stopImmediatePropagation();
      switch (e.type) {
        case "DOMAttrModified":
          var name = e.attrName;
          var namespace = e.relatedNode.namespaceURI;
          var target = e.target;
          var record = new getRecord("attributes", target);
          record.attributeName = name;
          record.attributeNamespace = namespace;
          var oldValue = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
          forEachAncestorAndObserverEnqueueRecord(target, function (options) {
            if (!options.attributes) return;
            if (options.attributeFilter && options.attributeFilter.length && options.attributeFilter.indexOf(name) === -1 && options.attributeFilter.indexOf(namespace) === -1) {
              return;
            }
            if (options.attributeOldValue) return getRecordWithOldValue(oldValue);
            return record;
          });
          break;

        case "DOMCharacterDataModified":
          var target = e.target;
          var record = getRecord("characterData", target);
          var oldValue = e.prevValue;
          forEachAncestorAndObserverEnqueueRecord(target, function (options) {
            if (!options.characterData) return;
            if (options.characterDataOldValue) return getRecordWithOldValue(oldValue);
            return record;
          });
          break;

        case "DOMNodeRemoved":
          this.addTransientObserver(e.target);

        case "DOMNodeInserted":
          var changedNode = e.target;
          var addedNodes, removedNodes;
          if (e.type === "DOMNodeInserted") {
            addedNodes = [changedNode];
            removedNodes = [];
          } else {
            addedNodes = [];
            removedNodes = [changedNode];
          }
          var previousSibling = changedNode.previousSibling;
          var nextSibling = changedNode.nextSibling;
          var record = getRecord("childList", e.target.parentNode);
          record.addedNodes = addedNodes;
          record.removedNodes = removedNodes;
          record.previousSibling = previousSibling;
          record.nextSibling = nextSibling;
          forEachAncestorAndObserverEnqueueRecord(e.relatedNode, function (options) {
            if (!options.childList) return;
            return record;
          });
      }
      clearRecords();
    }
  };
  global.JsMutationObserver = JsMutationObserver;
  if (!global.MutationObserver) {
    global.MutationObserver = JsMutationObserver;
    JsMutationObserver._isPolyfilled = true;
  }
})(self);

/*
Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic Denicola

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
(function (global, undefined) {
    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var setImmediate;

    function addFromSetImmediateArguments(args) {
        tasksByHandle[nextHandle] = partiallyApplied.apply(undefined, args);
        return nextHandle++;
    }

    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    function partiallyApplied(handler) {
        var args = [].slice.call(arguments, 1);
        return function () {
            if (typeof handler === "function") {
                handler.apply(undefined, args);
            } else {
                new Function("" + handler)();
            }
        };
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    task();
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function installNextTickImplementation() {
        setImmediate = function setImmediate() {
            var handle = addFromSetImmediateArguments(arguments);
            process.nextTick(partiallyApplied(runIfPresent, handle));
            return handle;
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        setImmediate = function setImmediate() {
            var handle = addFromSetImmediateArguments(arguments);
            global.postMessage(messagePrefix + handle, "*");
            return handle;
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        setImmediate = function setImmediate() {
            var handle = addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        setImmediate = function setImmediate() {
            var handle = addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
    }

    function installSetTimeoutImplementation() {
        setImmediate = function setImmediate() {
            var handle = addFromSetImmediateArguments(arguments);
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
            return handle;
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(self);

// Caution:
// Do not replace this import statement with codes.
//
// If you replace this import statement with codes,
// the codes will be executed after the following polyfills are imported
// because import statements are hoisted during compilation.
// Polyfill ECMAScript standard features with global namespace pollution
// Polyfill Custom Elements v1 with global namespace pollution
// Polyfill MutationObserver with global namespace pollution
// Polyfill setImmediate with global namespace pollution

(function () {
  var DEFAULT_VIEWPORT = 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no';

  var Viewport = {
    ensureViewportElement: function ensureViewportElement() {
      var viewportElement = document.querySelector('meta[name=viewport]');

      if (!viewportElement) {
        viewportElement = document.createElement('meta');
        viewportElement.name = 'viewport';
        document.head.appendChild(viewportElement);
      }

      return viewportElement;
    },

    setup: function setup() {
      var viewportElement = Viewport.ensureViewportElement();

      if (!viewportElement) {
        return;
      }

      if (!viewportElement.hasAttribute('content')) {
        viewportElement.setAttribute('content', DEFAULT_VIEWPORT);
      }
    }
  };

  window.Viewport = Viewport;
})();

function setup(ons$$1) {
  if (window._onsLoaded) {
    ons$$1._util.warn('Onsen UI is loaded more than once.');
  }
  window._onsLoaded = true;

  ons$$1.ready(function () {
    ons$$1.enableDeviceBackButtonHandler();
    ons$$1._defaultDeviceBackButtonHandler = ons$$1._internal.dbbDispatcher.createHandler(window.document.body, function () {
      if (Object.hasOwnProperty.call(navigator, 'app')) {
        navigator.app.exitApp();
      } else {
        console.warn('Could not close the app. Is \'cordova.js\' included?\nError: \'window.navigator.app\' is undefined.');
      }
    });
    document.body._gestureDetector = new ons$$1.GestureDetector(document.body, { passive: true });

    // Simulate Device Back Button on ESC press
    if (!ons$$1.platform.isWebView()) {
      document.body.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) {
          ons$$1.fireDeviceBackButtonEvent();
        }
      });
    }

    // setup loading placeholder
    ons$$1._setupLoadingPlaceHolders();
  });

  // viewport.js
  Viewport.setup();
}

setup(ons); // Setup initial listeners

export default ons;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvc3JjL3BvbHlmaWxscy9wb2x5ZmlsbC1zd2l0Y2hlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3ZhbGlkYXRlLWNvbGxlY3Rpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc2V0LnRvLWpzb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC5vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1jb2xsZWN0aW9uLWZyb20uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQuZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL3NldC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcubWFwLm9mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcubWFwLmZyb20uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9tYXAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXdlYWsuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LndlYWstbWFwLm9mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcud2Vhay1tYXAuZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL3dlYWstbWFwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL2FycmF5L2Zyb20uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9VdGlsaXRpZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9DdXN0b21FbGVtZW50U3RhdGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvRG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL0RlZmVycmVkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvUGF0Y2gvTmF0aXZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvUGF0Y2gvSFRNTEVsZW1lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9QYXRjaC9JbnRlcmZhY2UvUGFyZW50Tm9kZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL1BhdGNoL0RvY3VtZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvUGF0Y2gvTm9kZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL1BhdGNoL0ludGVyZmFjZS9DaGlsZE5vZGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9QYXRjaC9FbGVtZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvY3VzdG9tLWVsZW1lbnRzLmpzIiwiLi4vLi4vY29yZS9zcmMvcG9seWZpbGxzL011dGF0aW9uT2JzZXJ2ZXJAMC43LjIyL011dGF0aW9uT2JzZXJ2ZXIuanMiLCIuLi8uLi9jb3JlL3NyYy9wb2x5ZmlsbHMvc2V0SW1tZWRpYXRlQDEuMC4yK21vZC9zZXRJbW1lZGlhdGUuanMiLCIuLi8uLi9jb3JlL3NyYy9wb2x5ZmlsbHMvaW5kZXguanMiLCIuLi8uLi9jb3JlL3NyYy92ZW5kb3Ivdmlld3BvcnQuanMiLCIuLi8uLi9jb3JlL3NyYy9zZXR1cC5qcyIsIi4uLy4uL2NvcmUvc3JjL2luZGV4LmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb3IgQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzXG5pZiAod2luZG93LmN1c3RvbUVsZW1lbnRzKSB7IC8vIGV2ZW4gaWYgbmF0aXZlIENFMSBpbXBsIGV4aXN0cywgdXNlIHBvbHlmaWxsXG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmZvcmNlUG9seWZpbGwgPSB0cnVlO1xufVxuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi4xMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgdGVzdCA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFzdEtleSA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5O1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFNJWkUgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uICh0aGF0LCBrZXkpIHtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcbiAgdmFyIGVudHJ5O1xuICBpZiAoaW5kZXggIT09ICdGJykgcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yIChlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICBpZiAoZW50cnkuayA9PSBrZXkpIHJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll90ID0gTkFNRTsgICAgICAgICAvLyBjb2xsZWN0aW9uIHR5cGVcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICBmb3IgKHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSksIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZW50cnkucCkgZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm47XG4gICAgICAgICAgdmFyIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmIChuZXh0KSBuZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmICh0aGF0Ll9mID09IGVudHJ5KSB0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZiAodGhhdC5fbCA9PSBlbnRyeSkgdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMyk7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZikge1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChERVNDUklQVE9SUykgZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZSh0aGlzLCBOQU1FKVtTSVpFXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgdmFyIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGF0Ll9mKSB0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZiAocHJldikgcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSB0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbiAoQywgTkFNRSwgSVNfTUFQKSB7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICAgICAgdGhpcy5fdCA9IHZhbGlkYXRlKGl0ZXJhdGVkLCBOQU1FKTsgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAgICAgICAgICAgICAgICAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBraW5kID0gdGhhdC5faztcbiAgICAgIHZhciBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYgKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpIHtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCB0YXJnZXQsIEMpIHtcbiAgdmFyIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIHZhciBQO1xuICBpZiAoUyAhPT0gQyAmJiB0eXBlb2YgUyA9PSAnZnVuY3Rpb24nICYmIChQID0gUy5wcm90b3R5cGUpICE9PSBDLnByb3RvdHlwZSAmJiBpc09iamVjdChQKSAmJiBzZXRQcm90b3R5cGVPZikge1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRpdGVyRGV0ZWN0ID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYikgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYgKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlO1xuICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSAkaXRlckRldGVjdChmdW5jdGlvbiAoaXRlcikgeyBuZXcgQyhpdGVyKTsgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKCksIHRhcmdldCwgQyk7XG4gICAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIHByb3RvLmNsZWFyKSBkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0VUID0gJ1NldCc7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKFNFVCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgU0VUKSwgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpO1xuIiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXIsIElURVJBVE9SKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi9fYXJyYXktZnJvbS1pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSkge1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIGlmIChjbGFzc29mKHRoaXMpICE9IE5BTUUpIHRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdTZXQnLCB7IHRvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ1NldCcpIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBvZjogZnVuY3Rpb24gb2YoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIEEgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIEFbbGVuZ3RoXSA9IGFyZ3VtZW50c1tsZW5ndGhdO1xuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG4iLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1zZXQub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ1NldCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBmcm9tOiBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiAsIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIG1hcEZuID0gYXJndW1lbnRzWzFdO1xuICAgIHZhciBtYXBwaW5nLCBBLCBuLCBjYjtcbiAgICBhRnVuY3Rpb24odGhpcyk7XG4gICAgbWFwcGluZyA9IG1hcEZuICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG1hcHBpbmcpIGFGdW5jdGlvbihtYXBGbik7XG4gICAgaWYgKHNvdXJjZSA9PSB1bmRlZmluZWQpIHJldHVybiBuZXcgdGhpcygpO1xuICAgIEEgPSBbXTtcbiAgICBpZiAobWFwcGluZykge1xuICAgICAgbiA9IDA7XG4gICAgICBjYiA9IGN0eChtYXBGbiwgYXJndW1lbnRzWzJdLCAyKTtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIGZ1bmN0aW9uIChuZXh0SXRlbSkge1xuICAgICAgICBBLnB1c2goY2IobmV4dEl0ZW0sIG4rKykpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIEEucHVzaCwgQSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG4iLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1zZXQuZnJvbVxucmVxdWlyZSgnLi9fc2V0LWNvbGxlY3Rpb24tZnJvbScpKCdTZXQnKTtcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQub2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TZXQ7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBNQVAgPSAnTWFwJztcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoTUFQLCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7IHRvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpIH0pO1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLm9mXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1vZicpKCdNYXAnKTtcbiIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ01hcCcpO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC5vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG4iLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikge1xuICAgICAga2V5ID0ga2V5c1tqKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCBpc0VudW0uY2FsbChTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBnZXRXZWFrID0gcmVxdWlyZSgnLi9fbWV0YScpLmdldFdlYWs7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgY3JlYXRlQXJyYXlNZXRob2QgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJyk7XG52YXIgJGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIGFycmF5RmluZCA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpO1xudmFyIGFycmF5RmluZEluZGV4ID0gY3JlYXRlQXJyYXlNZXRob2QoNik7XG52YXIgaWQgPSAwO1xuXG4vLyBmYWxsYmFjayBmb3IgdW5jYXVnaHQgZnJvemVuIGtleXNcbnZhciB1bmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24gKHRoYXQpIHtcbiAgcmV0dXJuIHRoYXQuX2wgfHwgKHRoYXQuX2wgPSBuZXcgVW5jYXVnaHRGcm96ZW5TdG9yZSgpKTtcbn07XG52YXIgVW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hID0gW107XG59O1xudmFyIGZpbmRVbmNhdWdodEZyb3plbiA9IGZ1bmN0aW9uIChzdG9yZSwga2V5KSB7XG4gIHJldHVybiBhcnJheUZpbmQoc3RvcmUuYSwgZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gIH0pO1xufTtcblVuY2F1Z2h0RnJvemVuU3RvcmUucHJvdG90eXBlID0ge1xuICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZiAoZW50cnkpIHJldHVybiBlbnRyeVsxXTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICEhZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZiAoZW50cnkpIGVudHJ5WzFdID0gdmFsdWU7XG4gICAgZWxzZSB0aGlzLmEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9LFxuICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBpbmRleCA9IGFycmF5RmluZEluZGV4KHRoaXMuYSwgZnVuY3Rpb24gKGl0KSB7XG4gICAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgICB9KTtcbiAgICBpZiAofmluZGV4KSB0aGlzLmEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gISF+aW5kZXg7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5fdCA9IE5BTUU7ICAgICAgLy8gY29sbGVjdGlvbiB0eXBlXG4gICAgICB0aGF0Ll9pID0gaWQrKzsgICAgICAvLyBjb2xsZWN0aW9uIGlkXG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAvLyBsZWFrIHN0b3JlIGZvciB1bmNhdWdodCBmcm96ZW4gb2JqZWN0c1xuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4zLjMuMiBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdChrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodmFsaWRhdGUodGhpcywgTkFNRSkpWydkZWxldGUnXShrZXkpO1xuICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpICYmIGRlbGV0ZSBkYXRhW3RoaXMuX2ldO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjMuMy40IFdlYWtNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy40LjMuNCBXZWFrU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdChrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgcmV0dXJuIHVuY2F1Z2h0RnJvemVuU3RvcmUodmFsaWRhdGUodGhpcywgTkFNRSkpLmhhcyhrZXkpO1xuICAgICAgICByZXR1cm4gZGF0YSAmJiAkaGFzKGRhdGEsIHRoaXMuX2kpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGRhdGEgPSBnZXRXZWFrKGFuT2JqZWN0KGtleSksIHRydWUpO1xuICAgIGlmIChkYXRhID09PSB0cnVlKSB1bmNhdWdodEZyb3plblN0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtcbiAgICBlbHNlIGRhdGFbdGhhdC5faV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhhdDtcbiAgfSxcbiAgdWZzdG9yZTogdW5jYXVnaHRGcm96ZW5TdG9yZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKTtcbnZhciB3ZWFrID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi13ZWFrJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgSVNfSUUxMSA9ICFnbG9iYWwuQWN0aXZlWE9iamVjdCAmJiAnQWN0aXZlWE9iamVjdCcgaW4gZ2xvYmFsO1xudmFyIFdFQUtfTUFQID0gJ1dlYWtNYXAnO1xudmFyIGdldFdlYWsgPSBtZXRhLmdldFdlYWs7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcbnZhciB1bmNhdWdodEZyb3plblN0b3JlID0gd2Vhay51ZnN0b3JlO1xudmFyIEludGVybmFsTWFwO1xuXG52YXIgd3JhcHBlciA9IGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtNYXAoKSB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gIH07XG59O1xuXG52YXIgbWV0aG9kcyA9IHtcbiAgLy8gMjMuMy4zLjMgV2Vha01hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHZhbGlkYXRlKHRoaXMsIFdFQUtfTUFQKSkuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gZGF0YSA/IGRhdGFbdGhpcy5faV0gOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxuICAvLyAyMy4zLjMuNSBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB3ZWFrLmRlZih2YWxpZGF0ZSh0aGlzLCBXRUFLX01BUCksIGtleSwgdmFsdWUpO1xuICB9XG59O1xuXG4vLyAyMy4zIFdlYWtNYXAgT2JqZWN0c1xudmFyICRXZWFrTWFwID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoV0VBS19NQVAsIHdyYXBwZXIsIG1ldGhvZHMsIHdlYWssIHRydWUsIHRydWUpO1xuXG4vLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XG5pZiAoTkFUSVZFX1dFQUtfTUFQICYmIElTX0lFMTEpIHtcbiAgSW50ZXJuYWxNYXAgPSB3ZWFrLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIFdFQUtfTUFQKTtcbiAgYXNzaWduKEludGVybmFsTWFwLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gIG1ldGEuTkVFRCA9IHRydWU7XG4gIGVhY2goWydkZWxldGUnLCAnaGFzJywgJ2dldCcsICdzZXQnXSwgZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBwcm90byA9ICRXZWFrTWFwLnByb3RvdHlwZTtcbiAgICB2YXIgbWV0aG9kID0gcHJvdG9ba2V5XTtcbiAgICByZWRlZmluZShwcm90bywga2V5LCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gaW50ZXJuYWwgd2Vha21hcCBzaGltXG4gICAgICBpZiAoaXNPYmplY3QoYSkgJiYgIWlzRXh0ZW5zaWJsZShhKSkge1xuICAgICAgICBpZiAoIXRoaXMuX2YpIHRoaXMuX2YgPSBuZXcgSW50ZXJuYWxNYXAoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2Zba2V5XShhLCBiKTtcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICAvLyBzdG9yZSBhbGwgdGhlIHJlc3Qgb24gbmF0aXZlIHdlYWttYXBcbiAgICAgIH0gcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXdlYWttYXAub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ1dlYWtNYXAnKTtcbiIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXdlYWttYXAuZnJvbVxucmVxdWlyZSgnLi9fc2V0LWNvbGxlY3Rpb24tZnJvbScpKCdXZWFrTWFwJyk7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LndlYWstbWFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy53ZWFrLW1hcC5vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcud2Vhay1tYXAuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuV2Vha01hcDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG4iLCJjb25zdCByZXNlcnZlZFRhZ0xpc3QgPSBuZXcgU2V0KFtcbiAgJ2Fubm90YXRpb24teG1sJyxcbiAgJ2NvbG9yLXByb2ZpbGUnLFxuICAnZm9udC1mYWNlJyxcbiAgJ2ZvbnQtZmFjZS1zcmMnLFxuICAnZm9udC1mYWNlLXVyaScsXG4gICdmb250LWZhY2UtZm9ybWF0JyxcbiAgJ2ZvbnQtZmFjZS1uYW1lJyxcbiAgJ21pc3NpbmctZ2x5cGgnLFxuXSk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkQ3VzdG9tRWxlbWVudE5hbWUobG9jYWxOYW1lKSB7XG4gIGNvbnN0IHJlc2VydmVkID0gcmVzZXJ2ZWRUYWdMaXN0Lmhhcyhsb2NhbE5hbWUpO1xuICBjb25zdCB2YWxpZEZvcm0gPSAvXlthLXpdWy4wLTlfYS16XSotW1xcLS4wLTlfYS16XSokLy50ZXN0KGxvY2FsTmFtZSk7XG4gIHJldHVybiAhcmVzZXJ2ZWQgJiYgdmFsaWRGb3JtO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDb25uZWN0ZWQobm9kZSkge1xuICAvLyBVc2UgYE5vZGUjaXNDb25uZWN0ZWRgLCBpZiBkZWZpbmVkLlxuICBjb25zdCBuYXRpdmVWYWx1ZSA9IG5vZGUuaXNDb25uZWN0ZWQ7XG4gIGlmIChuYXRpdmVWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5hdGl2ZVZhbHVlO1xuICB9XG5cbiAgLyoqIEB0eXBlIHs/Tm9kZXx1bmRlZmluZWR9ICovXG4gIGxldCBjdXJyZW50ID0gbm9kZTtcbiAgd2hpbGUgKGN1cnJlbnQgJiYgIShjdXJyZW50Ll9fQ0VfaXNJbXBvcnREb2N1bWVudCB8fCBjdXJyZW50IGluc3RhbmNlb2YgRG9jdW1lbnQpKSB7XG4gICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fCAod2luZG93LlNoYWRvd1Jvb3QgJiYgY3VycmVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyBjdXJyZW50Lmhvc3QgOiB1bmRlZmluZWQpO1xuICB9XG4gIHJldHVybiAhIShjdXJyZW50ICYmIChjdXJyZW50Ll9fQ0VfaXNJbXBvcnREb2N1bWVudCB8fCBjdXJyZW50IGluc3RhbmNlb2YgRG9jdW1lbnQpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFOb2RlfSByb290XG4gKiBAcGFyYW0geyFOb2RlfSBzdGFydFxuICogQHJldHVybiB7P05vZGV9XG4gKi9cbmZ1bmN0aW9uIG5leHRTaWJsaW5nT3JBbmNlc3RvclNpYmxpbmcocm9vdCwgc3RhcnQpIHtcbiAgbGV0IG5vZGUgPSBzdGFydDtcbiAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gcm9vdCAmJiAhbm9kZS5uZXh0U2libGluZykge1xuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuICghbm9kZSB8fCBub2RlID09PSByb290KSA/IG51bGwgOiBub2RlLm5leHRTaWJsaW5nO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU5vZGV9IHJvb3RcbiAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0XG4gKiBAcmV0dXJuIHs/Tm9kZX1cbiAqL1xuZnVuY3Rpb24gbmV4dE5vZGUocm9vdCwgc3RhcnQpIHtcbiAgcmV0dXJuIHN0YXJ0LmZpcnN0Q2hpbGQgPyBzdGFydC5maXJzdENoaWxkIDogbmV4dFNpYmxpbmdPckFuY2VzdG9yU2libGluZyhyb290LCBzdGFydCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHshTm9kZX0gcm9vdFxuICogQHBhcmFtIHshZnVuY3Rpb24oIUVsZW1lbnQpfSBjYWxsYmFja1xuICogQHBhcmFtIHshU2V0PE5vZGU+PX0gdmlzaXRlZEltcG9ydHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKHJvb3QsIGNhbGxiYWNrLCB2aXNpdGVkSW1wb3J0cyA9IG5ldyBTZXQoKSkge1xuICBsZXQgbm9kZSA9IHJvb3Q7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8obm9kZSk7XG5cbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBsb2NhbE5hbWUgPSBlbGVtZW50LmxvY2FsTmFtZTtcbiAgICAgIGlmIChsb2NhbE5hbWUgPT09ICdsaW5rJyAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgncmVsJykgPT09ICdpbXBvcnQnKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaW1wb3J0IChwb2x5ZmlsbGVkIG9yIG5vdCkgaGFzIGl0J3Mgcm9vdCBub2RlIGF2YWlsYWJsZSxcbiAgICAgICAgLy8gd2FsayBpdC5cbiAgICAgICAgY29uc3QgaW1wb3J0Tm9kZSA9IC8qKiBAdHlwZSB7IU5vZGV9ICovIChlbGVtZW50LmltcG9ydCk7XG4gICAgICAgIGlmIChpbXBvcnROb2RlIGluc3RhbmNlb2YgTm9kZSAmJiAhdmlzaXRlZEltcG9ydHMuaGFzKGltcG9ydE5vZGUpKSB7XG4gICAgICAgICAgLy8gUHJldmVudCBtdWx0aXBsZSB3YWxrcyBvZiB0aGUgc2FtZSBpbXBvcnQgcm9vdC5cbiAgICAgICAgICB2aXNpdGVkSW1wb3J0cy5hZGQoaW1wb3J0Tm9kZSk7XG5cbiAgICAgICAgICBmb3IgKGxldCBjaGlsZCA9IGltcG9ydE5vZGUuZmlyc3RDaGlsZDsgY2hpbGQ7IGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIHdhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKGNoaWxkLCBjYWxsYmFjaywgdmlzaXRlZEltcG9ydHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElnbm9yZSBkZXNjZW5kYW50cyBvZiBpbXBvcnQgbGlua3MgdG8gcHJldmVudCBhdHRlbXB0aW5nIHRvIHdhbGsgdGhlXG4gICAgICAgIC8vIGVsZW1lbnRzIGNyZWF0ZWQgYnkgdGhlIEhUTUwgSW1wb3J0cyBwb2x5ZmlsbCB0aGF0IHdlIGp1c3Qgd2Fsa2VkXG4gICAgICAgIC8vIGFib3ZlLlxuICAgICAgICBub2RlID0gbmV4dFNpYmxpbmdPckFuY2VzdG9yU2libGluZyhyb290LCBlbGVtZW50KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGxvY2FsTmFtZSA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAvLyBJZ25vcmUgZGVzY2VuZGFudHMgb2YgdGVtcGxhdGVzLiBUaGVyZSBzaG91bGRuJ3QgYmUgYW55IGRlc2NlbmRhbnRzXG4gICAgICAgIC8vIGJlY2F1c2UgdGhleSB3aWxsIGJlIG1vdmVkIGludG8gYC5jb250ZW50YCBkdXJpbmcgY29uc3RydWN0aW9uIGluXG4gICAgICAgIC8vIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0ZW1wbGF0ZSBidXQsIGluIGNhc2UgdGhleSBleGlzdCBhbmQgYXJlIHN0aWxsXG4gICAgICAgIC8vIHdhaXRpbmcgdG8gYmUgbW92ZWQgYnkgYSBwb2x5ZmlsbCwgdGhleSB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICAgIG5vZGUgPSBuZXh0U2libGluZ09yQW5jZXN0b3JTaWJsaW5nKHJvb3QsIGVsZW1lbnQpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gV2FsayBzaGFkb3cgcm9vdHMuXG4gICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5fX0NFX3NoYWRvd1Jvb3Q7XG4gICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICBmb3IgKGxldCBjaGlsZCA9IHNoYWRvd1Jvb3QuZmlyc3RDaGlsZDsgY2hpbGQ7IGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICB3YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhjaGlsZCwgY2FsbGJhY2ssIHZpc2l0ZWRJbXBvcnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5vZGUgPSBuZXh0Tm9kZShyb290LCBub2RlKTtcbiAgfVxufVxuXG4vKipcbiAqIFVzZWQgdG8gc3VwcHJlc3MgQ2xvc3VyZSdzIFwiTW9kaWZ5aW5nIHRoZSBwcm90b3R5cGUgaXMgb25seSBhbGxvd2VkIGlmIHRoZVxuICogY29uc3RydWN0b3IgaXMgaW4gdGhlIHNhbWUgc2NvcGVcIiB3YXJuaW5nIHdpdGhvdXQgdXNpbmdcbiAqIGBAc3VwcHJlc3Mge25ld0NoZWNrVHlwZXMsIGR1cGxpY2F0ZX1gIGJlY2F1c2UgYG5ld0NoZWNrVHlwZXNgIGlzIHRvbyBicm9hZC5cbiAqXG4gKiBAcGFyYW0geyFPYmplY3R9IGRlc3RpbmF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHlVbmNoZWNrZWQoZGVzdGluYXRpb24sIG5hbWUsIHZhbHVlKSB7XG4gIGRlc3RpbmF0aW9uW25hbWVdID0gdmFsdWU7XG59XG4iLCIvKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmNvbnN0IEN1c3RvbUVsZW1lbnRTdGF0ZSA9IHtcbiAgY3VzdG9tOiAxLFxuICBmYWlsZWQ6IDIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21FbGVtZW50U3RhdGU7XG4iLCJpbXBvcnQgKiBhcyBVdGlsaXRpZXMgZnJvbSAnLi9VdGlsaXRpZXMuanMnO1xuaW1wb3J0IENFU3RhdGUgZnJvbSAnLi9DdXN0b21FbGVtZW50U3RhdGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21FbGVtZW50SW50ZXJuYWxzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHshTWFwPHN0cmluZywgIUN1c3RvbUVsZW1lbnREZWZpbml0aW9uPn0gKi9cbiAgICB0aGlzLl9sb2NhbE5hbWVUb0RlZmluaXRpb24gPSBuZXcgTWFwKCk7XG5cbiAgICAvKiogQHR5cGUgeyFNYXA8IUZ1bmN0aW9uLCAhQ3VzdG9tRWxlbWVudERlZmluaXRpb24+fSAqL1xuICAgIHRoaXMuX2NvbnN0cnVjdG9yVG9EZWZpbml0aW9uID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqIEB0eXBlIHshQXJyYXk8IWZ1bmN0aW9uKCFOb2RlKT59ICovXG4gICAgdGhpcy5fcGF0Y2hlcyA9IFtdO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuX2hhc1BhdGNoZXMgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxOYW1lXG4gICAqIEBwYXJhbSB7IUN1c3RvbUVsZW1lbnREZWZpbml0aW9ufSBkZWZpbml0aW9uXG4gICAqL1xuICBzZXREZWZpbml0aW9uKGxvY2FsTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIHRoaXMuX2xvY2FsTmFtZVRvRGVmaW5pdGlvbi5zZXQobG9jYWxOYW1lLCBkZWZpbml0aW9uKTtcbiAgICB0aGlzLl9jb25zdHJ1Y3RvclRvRGVmaW5pdGlvbi5zZXQoZGVmaW5pdGlvbi5jb25zdHJ1Y3RvciwgZGVmaW5pdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZVxuICAgKiBAcmV0dXJuIHshQ3VzdG9tRWxlbWVudERlZmluaXRpb258dW5kZWZpbmVkfVxuICAgKi9cbiAgbG9jYWxOYW1lVG9EZWZpbml0aW9uKGxvY2FsTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbE5hbWVUb0RlZmluaXRpb24uZ2V0KGxvY2FsTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gICAqIEByZXR1cm4geyFDdXN0b21FbGVtZW50RGVmaW5pdGlvbnx1bmRlZmluZWR9XG4gICAqL1xuICBjb25zdHJ1Y3RvclRvRGVmaW5pdGlvbihjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiB0aGlzLl9jb25zdHJ1Y3RvclRvRGVmaW5pdGlvbi5nZXQoY29uc3RydWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IWZ1bmN0aW9uKCFOb2RlKX0gbGlzdGVuZXJcbiAgICovXG4gIGFkZFBhdGNoKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5faGFzUGF0Y2hlcyA9IHRydWU7XG4gICAgdGhpcy5fcGF0Y2hlcy5wdXNoKGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqL1xuICBwYXRjaFRyZWUobm9kZSkge1xuICAgIGlmICghdGhpcy5faGFzUGF0Y2hlcykgcmV0dXJuO1xuXG4gICAgVXRpbGl0aWVzLndhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKG5vZGUsIGVsZW1lbnQgPT4gdGhpcy5wYXRjaChlbGVtZW50KSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKi9cbiAgcGF0Y2gobm9kZSkge1xuICAgIGlmICghdGhpcy5faGFzUGF0Y2hlcykgcmV0dXJuO1xuXG4gICAgaWYgKG5vZGUuX19DRV9wYXRjaGVkKSByZXR1cm47XG4gICAgbm9kZS5fX0NFX3BhdGNoZWQgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9wYXRjaGVzW2ldKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFOb2RlfSByb290XG4gICAqL1xuICBjb25uZWN0VHJlZShyb290KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICAgIFV0aWxpdGllcy53YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhyb290LCBlbGVtZW50ID0+IGVsZW1lbnRzLnB1c2goZWxlbWVudCkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaWYgKGVsZW1lbnQuX19DRV9zdGF0ZSA9PT0gQ0VTdGF0ZS5jdXN0b20pIHtcbiAgICAgICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZChlbGVtZW50KSkge1xuICAgICAgICAgIHRoaXMuY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBncmFkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU5vZGV9IHJvb3RcbiAgICovXG4gIGRpc2Nvbm5lY3RUcmVlKHJvb3QpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gICAgVXRpbGl0aWVzLndhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKHJvb3QsIGVsZW1lbnQgPT4gZWxlbWVudHMucHVzaChlbGVtZW50KSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWxlbWVudC5fX0NFX3N0YXRlID09PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhbGwgdW5jdXN0b21pemVkIGN1c3RvbSBlbGVtZW50cyBhdCBhbmQgYmVsb3cgYSByb290IG5vZGUgZm9yXG4gICAqIHdoaWNoIHRoZXJlIGlzIGEgZGVmaW5pdGlvbi4gV2hlbiBjdXN0b20gZWxlbWVudCByZWFjdGlvbiBjYWxsYmFja3MgYXJlXG4gICAqIGFzc3VtZWQgdG8gYmUgY2FsbGVkIHN5bmNocm9ub3VzbHkgKHdoaWNoLCBieSB0aGUgY3VycmVudCBET00gLyBIVE1MIHNwZWNcbiAgICogZGVmaW5pdGlvbnMsIHRoZXkgYXJlICpub3QqKSwgY2FsbGJhY2tzIGZvciBib3RoIGVsZW1lbnRzIGN1c3RvbWl6ZWRcbiAgICogc3luY2hyb25vdXNseSBieSB0aGUgcGFyc2VyIGFuZCBlbGVtZW50cyBiZWluZyB1cGdyYWRlZCBvY2N1ciBpbiB0aGUgc2FtZVxuICAgKiByZWxhdGl2ZSBvcmRlci5cbiAgICpcbiAgICogTk9URTogVGhpcyBmdW5jdGlvbiwgd2hlbiB1c2VkIHRvIHNpbXVsYXRlIHRoZSBjb25zdHJ1Y3Rpb24gb2YgYSB0cmVlIHRoYXRcbiAgICogaXMgYWxyZWFkeSBjcmVhdGVkIGJ1dCBub3QgY3VzdG9taXplZCAoaS5lLiBieSB0aGUgcGFyc2VyKSwgZG9lcyAqbm90KlxuICAgKiBwcmV2ZW50IHRoZSBlbGVtZW50IGZyb20gcmVhZGluZyB0aGUgJ2ZpbmFsJyAodHJ1ZSkgc3RhdGUgb2YgdGhlIHRyZWUuIEZvclxuICAgKiBleGFtcGxlLCB0aGUgZWxlbWVudCwgZHVyaW5nIHRydWx5IHN5bmNocm9ub3VzIHBhcnNpbmcgLyBjb25zdHJ1Y3Rpb24gd291bGRcbiAgICogc2VlIHRoYXQgaXQgY29udGFpbnMgbm8gY2hpbGRyZW4gYXMgdGhleSBoYXZlIG5vdCB5ZXQgYmVlbiBpbnNlcnRlZC5cbiAgICogSG93ZXZlciwgdGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBtb2RpZnkgdGhlIHRyZWUsIHRoZSBlbGVtZW50IHdpbGxcbiAgICogKGluY29ycmVjdGx5KSBoYXZlIGNoaWxkcmVuLiBBZGRpdGlvbmFsbHksIHNlbGYtbW9kaWZpY2F0aW9uIHJlc3RyaWN0aW9uc1xuICAgKiBmb3IgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3JzIGltcG9zZWQgYnkgdGhlIERPTSBzcGVjIGFyZSAqbm90KiBlbmZvcmNlZC5cbiAgICpcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBuZXN0ZWQgbGlzdCBzaG93cyB0aGUgc3RlcHMgZXh0ZW5kaW5nIGRvd24gZnJvbSB0aGUgSFRNTFxuICAgKiBzcGVjJ3MgcGFyc2luZyBzZWN0aW9uIHRoYXQgY2F1c2UgZWxlbWVudHMgdG8gYmUgc3luY2hyb25vdXNseSBjcmVhdGVkIGFuZFxuICAgKiB1cGdyYWRlZDpcbiAgICpcbiAgICogVGhlIFwiaW4gYm9keVwiIGluc2VydGlvbiBtb2RlOlxuICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNwYXJzaW5nLW1haW4taW5ib2R5XG4gICAqIC0gU3dpdGNoIG9uIHRva2VuOlxuICAgKiAgIC4uIG90aGVyIGNhc2VzIC4uXG4gICAqICAgLT4gQW55IG90aGVyIHN0YXJ0IHRhZ1xuICAgKiAgICAgIC0gW0luc2VydCBhbiBIVE1MIGVsZW1lbnRdKGJlbG93KSBmb3IgdGhlIHRva2VuLlxuICAgKlxuICAgKiBJbnNlcnQgYW4gSFRNTCBlbGVtZW50OlxuICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNpbnNlcnQtYW4taHRtbC1lbGVtZW50XG4gICAqIC0gSW5zZXJ0IGEgZm9yZWlnbiBlbGVtZW50IGZvciB0aGUgdG9rZW4gaW4gdGhlIEhUTUwgbmFtZXNwYWNlOlxuICAgKiAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2luc2VydC1hLWZvcmVpZ24tZWxlbWVudFxuICAgKiAgIC0gQ3JlYXRlIGFuIGVsZW1lbnQgZm9yIGEgdG9rZW46XG4gICAqICAgICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNjcmVhdGUtYW4tZWxlbWVudC1mb3ItdGhlLXRva2VuXG4gICAqICAgICAtIFdpbGwgZXhlY3V0ZSBzY3JpcHQgZmxhZyBpcyB0cnVlP1xuICAgKiAgICAgICAtIChFbGVtZW50IHF1ZXVlIHB1c2hlZCB0byB0aGUgY3VzdG9tIGVsZW1lbnQgcmVhY3Rpb25zIHN0YWNrLilcbiAgICogICAgIC0gQ3JlYXRlIGFuIGVsZW1lbnQ6XG4gICAqICAgICAgIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1jcmVhdGUtZWxlbWVudFxuICAgKiAgICAgICAtIFN5bmMgQ0UgZmxhZyBpcyB0cnVlP1xuICAgKiAgICAgICAgIC0gQ29uc3RydWN0b3IgY2FsbGVkLlxuICAgKiAgICAgICAgIC0gU2VsZi1tb2RpZmljYXRpb24gcmVzdHJpY3Rpb25zIGVuZm9yY2VkLlxuICAgKiAgICAgICAtIFN5bmMgQ0UgZmxhZyBpcyBmYWxzZT9cbiAgICogICAgICAgICAtIChVcGdyYWRlIHJlYWN0aW9uIGVucXVldWVkLilcbiAgICogICAgIC0gQXR0cmlidXRlcyBhcHBlbmRlZCB0byBlbGVtZW50LlxuICAgKiAgICAgICAoYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgcmVhY3Rpb25zIGVucXVldWVkLilcbiAgICogICAgIC0gV2lsbCBleGVjdXRlIHNjcmlwdCBmbGFnIGlzIHRydWU/XG4gICAqICAgICAgIC0gKEVsZW1lbnQgcXVldWUgcG9wcGVkIGZyb20gdGhlIGN1c3RvbSBlbGVtZW50IHJlYWN0aW9ucyBzdGFjay5cbiAgICogICAgICAgICBSZWFjdGlvbnMgaW4gdGhlIHBvcHBlZCBzdGFjayBhcmUgaW52b2tlZC4pXG4gICAqICAgLSAoRWxlbWVudCBxdWV1ZSBwdXNoZWQgdG8gdGhlIGN1c3RvbSBlbGVtZW50IHJlYWN0aW9ucyBzdGFjay4pXG4gICAqICAgLSBJbnNlcnQgdGhlIGVsZW1lbnQ6XG4gICAqICAgICBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1pbnNlcnRcbiAgICogICAgIC0gU2hhZG93LWluY2x1ZGluZyBkZXNjZW5kYW50cyBhcmUgY29ubmVjdGVkLiBEdXJpbmcgcGFyc2luZ1xuICAgKiAgICAgICBjb25zdHJ1Y3Rpb24sIHRoZXJlIGFyZSBubyBzaGFkb3ctKmV4Y2x1ZGluZyogZGVzY2VuZGFudHMuXG4gICAqICAgICAgIEhvd2V2ZXIsIHRoZSBjb25zdHJ1Y3RvciBtYXkgaGF2ZSB2YWxpZGx5IGF0dGFjaGVkIGEgc2hhZG93XG4gICAqICAgICAgIHRyZWUgdG8gaXRzZWxmIGFuZCBhZGRlZCBkZXNjZW5kYW50cyB0byB0aGF0IHNoYWRvdyB0cmVlLlxuICAgKiAgICAgICAoYGNvbm5lY3RlZENhbGxiYWNrYCByZWFjdGlvbnMgZW5xdWV1ZWQuKVxuICAgKiAgIC0gKEVsZW1lbnQgcXVldWUgcG9wcGVkIGZyb20gdGhlIGN1c3RvbSBlbGVtZW50IHJlYWN0aW9ucyBzdGFjay5cbiAgICogICAgIFJlYWN0aW9ucyBpbiB0aGUgcG9wcGVkIHN0YWNrIGFyZSBpbnZva2VkLilcbiAgICpcbiAgICogQHBhcmFtIHshTm9kZX0gcm9vdFxuICAgKiBAcGFyYW0geyFTZXQ8Tm9kZT49fSB2aXNpdGVkSW1wb3J0c1xuICAgKi9cbiAgcGF0Y2hBbmRVcGdyYWRlVHJlZShyb290LCB2aXNpdGVkSW1wb3J0cyA9IG5ldyBTZXQoKSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgICBjb25zdCBnYXRoZXJFbGVtZW50cyA9IGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSAnbGluaycgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JlbCcpID09PSAnaW1wb3J0Jykge1xuICAgICAgICAvLyBUaGUgSFRNTCBJbXBvcnRzIHBvbHlmaWxsIHNldHMgYSBkZXNjZW5kYW50IGVsZW1lbnQgb2YgdGhlIGxpbmsgdG9cbiAgICAgICAgLy8gdGhlIGBpbXBvcnRgIHByb3BlcnR5LCBzcGVjaWZpY2FsbHkgdGhpcyBpcyAqbm90KiBhIERvY3VtZW50LlxuICAgICAgICBjb25zdCBpbXBvcnROb2RlID0gLyoqIEB0eXBlIHs/Tm9kZX0gKi8gKGVsZW1lbnQuaW1wb3J0KTtcblxuICAgICAgICBpZiAoaW1wb3J0Tm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgaW1wb3J0Tm9kZS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgaW1wb3J0Tm9kZS5fX0NFX2lzSW1wb3J0RG9jdW1lbnQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gQ29ubmVjdGVkIGxpbmtzIGFyZSBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdHJ5LlxuICAgICAgICAgIGltcG9ydE5vZGUuX19DRV9oYXNSZWdpc3RyeSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBsaW5rJ3MgaW1wb3J0IHJvb3QgaXMgbm90IGF2YWlsYWJsZSwgaXRzIGNvbnRlbnRzIGNhbid0IGJlXG4gICAgICAgICAgLy8gd2Fsa2VkLiBXYWl0IGZvciAnbG9hZCcgYW5kIHdhbGsgaXQgd2hlbiBpdCdzIHJlYWR5LlxuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydE5vZGUgPSAvKiogQHR5cGUgeyFOb2RlfSAqLyAoZWxlbWVudC5pbXBvcnQpO1xuXG4gICAgICAgICAgICBpZiAoaW1wb3J0Tm9kZS5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQpIHJldHVybjtcbiAgICAgICAgICAgIGltcG9ydE5vZGUuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaW1wb3J0Tm9kZS5fX0NFX2lzSW1wb3J0RG9jdW1lbnQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBDb25uZWN0ZWQgbGlua3MgYXJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0cnkuXG4gICAgICAgICAgICBpbXBvcnROb2RlLl9fQ0VfaGFzUmVnaXN0cnkgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBDbG9uZSB0aGUgYHZpc2l0ZWRJbXBvcnRzYCBzZXQgdGhhdCB3YXMgcG9wdWxhdGVkIHN5bmMgZHVyaW5nXG4gICAgICAgICAgICAvLyB0aGUgYHBhdGNoQW5kVXBncmFkZVRyZWVgIGNhbGwgdGhhdCBjYXVzZWQgdGhpcyAnbG9hZCcgaGFuZGxlciB0b1xuICAgICAgICAgICAgLy8gYmUgYWRkZWQuIFRoZW4sIHJlbW92ZSAqdGhpcyogbGluaydzIGltcG9ydCBub2RlIHNvIHRoYXQgd2UgY2FuXG4gICAgICAgICAgICAvLyB3YWxrIHRoYXQgaW1wb3J0IGFnYWluLCBldmVuIGlmIGl0IHdhcyBwYXJ0aWFsbHkgd2Fsa2VkIGxhdGVyXG4gICAgICAgICAgICAvLyBkdXJpbmcgdGhlIHNhbWUgYHBhdGNoQW5kVXBncmFkZVRyZWVgIGNhbGwuXG4gICAgICAgICAgICBjb25zdCBjbG9uZWRWaXNpdGVkSW1wb3J0cyA9IG5ldyBTZXQodmlzaXRlZEltcG9ydHMpO1xuICAgICAgICAgICAgdmlzaXRlZEltcG9ydHMuZGVsZXRlKGltcG9ydE5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLnBhdGNoQW5kVXBncmFkZVRyZWUoaW1wb3J0Tm9kZSwgdmlzaXRlZEltcG9ydHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBgd2Fsa0RlZXBEZXNjZW5kYW50RWxlbWVudHNgIHBvcHVsYXRlcyAoYW5kIGludGVybmFsbHkgY2hlY2tzIGFnYWluc3QpXG4gICAgLy8gYHZpc2l0ZWRJbXBvcnRzYCB3aGVuIHRyYXZlcnNpbmcgYSBsb2FkZWQgaW1wb3J0LlxuICAgIFV0aWxpdGllcy53YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhyb290LCBnYXRoZXJFbGVtZW50cywgdmlzaXRlZEltcG9ydHMpO1xuXG4gICAgaWYgKHRoaXMuX2hhc1BhdGNoZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5wYXRjaChlbGVtZW50c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy51cGdyYWRlRWxlbWVudChlbGVtZW50c1tpXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIHVwZ3JhZGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBlbGVtZW50Ll9fQ0Vfc3RhdGU7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5sb2NhbE5hbWVUb0RlZmluaXRpb24oZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgIGlmICghZGVmaW5pdGlvbikgcmV0dXJuO1xuXG4gICAgZGVmaW5pdGlvbi5jb25zdHJ1Y3Rpb25TdGFjay5wdXNoKGVsZW1lbnQpO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBkZWZpbml0aW9uLmNvbnN0cnVjdG9yO1xuICAgIHRyeSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IChjb25zdHJ1Y3RvcikoKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yIGRpZCBub3QgcHJvZHVjZSB0aGUgZWxlbWVudCBiZWluZyB1cGdyYWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZGVmaW5pdGlvbi5jb25zdHJ1Y3Rpb25TdGFjay5wb3AoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlbGVtZW50Ll9fQ0Vfc3RhdGUgPSBDRVN0YXRlLmZhaWxlZDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgZWxlbWVudC5fX0NFX3N0YXRlID0gQ0VTdGF0ZS5jdXN0b207XG4gICAgZWxlbWVudC5fX0NFX2RlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuXG4gICAgaWYgKGRlZmluaXRpb24uYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7XG4gICAgICBjb25zdCBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBkZWZpbml0aW9uLm9ic2VydmVkQXR0cmlidXRlcztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzZXJ2ZWRBdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBvYnNlcnZlZEF0dHJpYnV0ZXNbaV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGVsZW1lbnQsIG5hbWUsIG51bGwsIHZhbHVlLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQoZWxlbWVudCkpIHtcbiAgICAgIHRoaXMuY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIGNvbm5lY3RlZENhbGxiYWNrKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gZWxlbWVudC5fX0NFX2RlZmluaXRpb247XG4gICAgaWYgKGRlZmluaXRpb24uY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgIGRlZmluaXRpb24uY29ubmVjdGVkQ2FsbGJhY2suY2FsbChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9fQ0VfaXNDb25uZWN0ZWRDYWxsYmFja0NhbGxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5fX0NFX2lzQ29ubmVjdGVkQ2FsbGJhY2tDYWxsZWQpIHtcbiAgICAgIHRoaXMuY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IGVsZW1lbnQuX19DRV9kZWZpbml0aW9uO1xuICAgIGlmIChkZWZpbml0aW9uLmRpc2Nvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICBkZWZpbml0aW9uLmRpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgZWxlbWVudC5fX0NFX2lzQ29ubmVjdGVkQ2FsbGJhY2tDYWxsZWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0gez9zdHJpbmd9IG9sZFZhbHVlXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gbmV3VmFsdWVcbiAgICogQHBhcmFtIHs/c3RyaW5nfSBuYW1lc3BhY2VcbiAgICovXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlbGVtZW50LCBuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIG5hbWVzcGFjZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBlbGVtZW50Ll9fQ0VfZGVmaW5pdGlvbjtcbiAgICBpZiAoXG4gICAgICBkZWZpbml0aW9uLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayAmJlxuICAgICAgZGVmaW5pdGlvbi5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihuYW1lKSA+IC0xXG4gICAgKSB7XG4gICAgICBkZWZpbml0aW9uLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjay5jYWxsKGVsZW1lbnQsIG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4vQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIge1xuICBjb25zdHJ1Y3RvcihpbnRlcm5hbHMsIGRvYykge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHshQ3VzdG9tRWxlbWVudEludGVybmFsc31cbiAgICAgKi9cbiAgICB0aGlzLl9pbnRlcm5hbHMgPSBpbnRlcm5hbHM7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7IURvY3VtZW50fVxuICAgICAqL1xuICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge011dGF0aW9uT2JzZXJ2ZXJ8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuX29ic2VydmVyID0gdW5kZWZpbmVkO1xuXG5cbiAgICAvLyBTaW11bGF0ZSB0cmVlIGNvbnN0cnVjdGlvbiBmb3IgYWxsIGN1cnJlbnRseSBhY2Nlc3NpYmxlIG5vZGVzIGluIHRoZVxuICAgIC8vIGRvY3VtZW50LlxuICAgIHRoaXMuX2ludGVybmFscy5wYXRjaEFuZFVwZ3JhZGVUcmVlKHRoaXMuX2RvY3VtZW50KTtcblxuICAgIGlmICh0aGlzLl9kb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5faGFuZGxlTXV0YXRpb25zLmJpbmQodGhpcykpO1xuXG4gICAgICAvLyBOb2RlcyBjcmVhdGVkIGJ5IHRoZSBwYXJzZXIgYXJlIGdpdmVuIHRvIHRoZSBvYnNlcnZlciAqYmVmb3JlKiB0aGUgbmV4dFxuICAgICAgLy8gdGFzayBydW5zLiBJbmxpbmUgc2NyaXB0cyBhcmUgcnVuIGluIGEgbmV3IHRhc2suIFRoaXMgbWVhbnMgdGhhdCB0aGVcbiAgICAgIC8vIG9ic2VydmVyIHdpbGwgYmUgYWJsZSB0byBoYW5kbGUgdGhlIG5ld2x5IHBhcnNlZCBub2RlcyBiZWZvcmUgdGhlIGlubGluZVxuICAgICAgLy8gc2NyaXB0IGlzIHJ1bi5cbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGlzY29ubmVjdCgpIHtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gbXV0YXRpb25zXG4gICAqL1xuICBfaGFuZGxlTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgIC8vIE9uY2UgdGhlIGRvY3VtZW50J3MgYHJlYWR5U3RhdGVgIGlzICdpbnRlcmFjdGl2ZScgb3IgJ2NvbXBsZXRlJywgYWxsIG5ld1xuICAgIC8vIG5vZGVzIGNyZWF0ZWQgd2l0aGluIHRoYXQgZG9jdW1lbnQgd2lsbCBiZSB0aGUgcmVzdWx0IG9mIHNjcmlwdCBhbmRcbiAgICAvLyBzaG91bGQgYmUgaGFuZGxlZCBieSBwYXRjaGluZy5cbiAgICBjb25zdCByZWFkeVN0YXRlID0gdGhpcy5fZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgICBpZiAocmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyB8fCByZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYWRkZWROb2RlcyA9IG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhZGRlZE5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBhZGRlZE5vZGVzW2pdO1xuICAgICAgICB0aGlzLl9pbnRlcm5hbHMucGF0Y2hBbmRVcGdyYWRlVHJlZShub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQHRlbXBsYXRlIFRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmZXJyZWQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtUfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXNvbHZlID0gdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IVByb21pc2U8VD59XG4gICAgICovXG4gICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cbiAgICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgICByZXNvbHZlKHRoaXMuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1R9IHZhbHVlXG4gICAqL1xuICByZXNvbHZlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FscmVhZHkgcmVzb2x2ZWQuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh0aGlzLl9yZXNvbHZlKSB7XG4gICAgICB0aGlzLl9yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IVByb21pc2U8VD59XG4gICAqL1xuICB0b1Byb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gIH1cbn1cbiIsImltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4vQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyc7XG5pbXBvcnQgRG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlciBmcm9tICcuL0RvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIuanMnO1xuaW1wb3J0IERlZmVycmVkIGZyb20gJy4vRGVmZXJyZWQuanMnO1xuaW1wb3J0ICogYXMgVXRpbGl0aWVzIGZyb20gJy4vVXRpbGl0aWVzLmpzJztcblxuLyoqXG4gKiBAdW5yZXN0cmljdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUN1c3RvbUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFsc1xuICAgKi9cbiAgY29uc3RydWN0b3IoaW50ZXJuYWxzKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9lbGVtZW50RGVmaW5pdGlvbklzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IUN1c3RvbUVsZW1lbnRJbnRlcm5hbHN9XG4gICAgICovXG4gICAgdGhpcy5faW50ZXJuYWxzID0gaW50ZXJuYWxzO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IU1hcDxzdHJpbmcsICFEZWZlcnJlZDx1bmRlZmluZWQ+Pn1cbiAgICAgKi9cbiAgICB0aGlzLl93aGVuRGVmaW5lZERlZmVycmVkID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgZmx1c2ggY2FsbGJhY2sgdHJpZ2dlcnMgdGhlIGRvY3VtZW50IHdhbGsgc3luY2hyb25vdXNseS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHshRnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fZmx1c2hDYWxsYmFjayA9IGZuID0+IGZuKCk7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2ZsdXNoUGVuZGluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IUFycmF5PHN0cmluZz59XG4gICAgICovXG4gICAgdGhpcy5fdW5mbHVzaGVkTG9jYWxOYW1lcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IURvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5fZG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlciA9IG5ldyBEb2N1bWVudENvbnN0cnVjdGlvbk9ic2VydmVyKGludGVybmFscywgZG9jdW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gICAqL1xuICBkZWZpbmUobG9jYWxOYW1lLCBjb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcnMgbXVzdCBiZSBmdW5jdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKCFVdGlsaXRpZXMuaXNWYWxpZEN1c3RvbUVsZW1lbnROYW1lKGxvY2FsTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVGhlIGVsZW1lbnQgbmFtZSAnJHtsb2NhbE5hbWV9JyBpcyBub3QgdmFsaWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ludGVybmFscy5sb2NhbE5hbWVUb0RlZmluaXRpb24obG9jYWxOYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIGN1c3RvbSBlbGVtZW50IHdpdGggbmFtZSAnJHtsb2NhbE5hbWV9JyBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnREZWZpbml0aW9uSXNSdW5uaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgY3VzdG9tIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBkZWZpbmVkLicpO1xuICAgIH1cbiAgICB0aGlzLl9lbGVtZW50RGVmaW5pdGlvbklzUnVubmluZyA9IHRydWU7XG5cbiAgICBsZXQgY29ubmVjdGVkQ2FsbGJhY2s7XG4gICAgbGV0IGRpc2Nvbm5lY3RlZENhbGxiYWNrO1xuICAgIGxldCBhZG9wdGVkQ2FsbGJhY2s7XG4gICAgbGV0IGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaztcbiAgICBsZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzO1xuICAgIHRyeSB7XG4gICAgICAvKiogQHR5cGUgeyFPYmplY3R9ICovXG4gICAgICBjb25zdCBwcm90b3R5cGUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICBpZiAoIShwcm90b3R5cGUgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvclxcJ3MgcHJvdG90eXBlIGlzIG5vdCBhbiBvYmplY3QuJyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldENhbGxiYWNrKG5hbWUpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tWYWx1ZSA9IHByb3RvdHlwZVtuYW1lXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrVmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhKGNhbGxiYWNrVmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtuYW1lfScgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFja1ZhbHVlO1xuICAgICAgfVxuXG4gICAgICBjb25uZWN0ZWRDYWxsYmFjayA9IGdldENhbGxiYWNrKCdjb25uZWN0ZWRDYWxsYmFjaycpO1xuICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBnZXRDYWxsYmFjaygnZGlzY29ubmVjdGVkQ2FsbGJhY2snKTtcbiAgICAgIGFkb3B0ZWRDYWxsYmFjayA9IGdldENhbGxiYWNrKCdhZG9wdGVkQ2FsbGJhY2snKTtcbiAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGdldENhbGxiYWNrKCdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snKTtcbiAgICAgIG9ic2VydmVkQXR0cmlidXRlcyA9IGNvbnN0cnVjdG9yWydvYnNlcnZlZEF0dHJpYnV0ZXMnXSB8fCBbXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2VsZW1lbnREZWZpbml0aW9uSXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHtcbiAgICAgIGxvY2FsTmFtZSxcbiAgICAgIGNvbnN0cnVjdG9yLFxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2ssXG4gICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjayxcbiAgICAgIGFkb3B0ZWRDYWxsYmFjayxcbiAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayxcbiAgICAgIG9ic2VydmVkQXR0cmlidXRlcyxcbiAgICAgIGNvbnN0cnVjdGlvblN0YWNrOiBbXSxcbiAgICB9O1xuXG4gICAgdGhpcy5faW50ZXJuYWxzLnNldERlZmluaXRpb24obG9jYWxOYW1lLCBkZWZpbml0aW9uKTtcblxuICAgIHRoaXMuX3VuZmx1c2hlZExvY2FsTmFtZXMucHVzaChsb2NhbE5hbWUpO1xuXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBjYWxsZWQgdGhlIGZsdXNoIGNhbGxiYWNrIGFuZCBpdCBoYXNuJ3QgY2FsbGVkIGJhY2sgeWV0LFxuICAgIC8vIGRvbid0IGNhbGwgaXQgYWdhaW4uXG4gICAgaWYgKCF0aGlzLl9mbHVzaFBlbmRpbmcpIHtcbiAgICAgIHRoaXMuX2ZsdXNoUGVuZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9mbHVzaENhbGxiYWNrKCgpID0+IHRoaXMuX2ZsdXNoKCkpO1xuICAgIH1cbiAgfVxuXG4gIF9mbHVzaCgpIHtcbiAgICAvLyBJZiBubyBuZXcgZGVmaW5pdGlvbnMgd2VyZSBkZWZpbmVkLCBkb24ndCBhdHRlbXB0IHRvIGZsdXNoLiBUaGlzIGNvdWxkXG4gICAgLy8gaGFwcGVuIGlmIGEgZmx1c2ggY2FsbGJhY2sga2VlcHMgdGhlIGZ1bmN0aW9uIGl0IGlzIGdpdmVuIGFuZCBjYWxscyBpdFxuICAgIC8vIG11bHRpcGxlIHRpbWVzLlxuICAgIGlmICh0aGlzLl9mbHVzaFBlbmRpbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICB0aGlzLl9mbHVzaFBlbmRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9pbnRlcm5hbHMucGF0Y2hBbmRVcGdyYWRlVHJlZShkb2N1bWVudCk7XG5cbiAgICB3aGlsZSAodGhpcy5fdW5mbHVzaGVkTG9jYWxOYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsb2NhbE5hbWUgPSB0aGlzLl91bmZsdXNoZWRMb2NhbE5hbWVzLnNoaWZ0KCk7XG4gICAgICBjb25zdCBkZWZlcnJlZCA9IHRoaXMuX3doZW5EZWZpbmVkRGVmZXJyZWQuZ2V0KGxvY2FsTmFtZSk7XG4gICAgICBpZiAoZGVmZXJyZWQpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxOYW1lXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAgICovXG4gIGdldChsb2NhbE5hbWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5faW50ZXJuYWxzLmxvY2FsTmFtZVRvRGVmaW5pdGlvbihsb2NhbE5hbWUpO1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICByZXR1cm4gZGVmaW5pdGlvbi5jb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWVcbiAgICogQHJldHVybiB7IVByb21pc2U8dW5kZWZpbmVkPn1cbiAgICovXG4gIHdoZW5EZWZpbmVkKGxvY2FsTmFtZSkge1xuICAgIGlmICghVXRpbGl0aWVzLmlzVmFsaWRDdXN0b21FbGVtZW50TmFtZShsb2NhbE5hbWUpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFN5bnRheEVycm9yKGAnJHtsb2NhbE5hbWV9JyBpcyBub3QgYSB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lLmApKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmlvciA9IHRoaXMuX3doZW5EZWZpbmVkRGVmZXJyZWQuZ2V0KGxvY2FsTmFtZSk7XG4gICAgaWYgKHByaW9yKSB7XG4gICAgICByZXR1cm4gcHJpb3IudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoKTtcbiAgICB0aGlzLl93aGVuRGVmaW5lZERlZmVycmVkLnNldChsb2NhbE5hbWUsIGRlZmVycmVkKTtcblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLl9pbnRlcm5hbHMubG9jYWxOYW1lVG9EZWZpbml0aW9uKGxvY2FsTmFtZSk7XG4gICAgLy8gUmVzb2x2ZSBpbW1lZGlhdGVseSBvbmx5IGlmIHRoZSBnaXZlbiBsb2NhbCBuYW1lIGhhcyBhIGRlZmluaXRpb24gKmFuZCpcbiAgICAvLyB0aGUgZnVsbCBkb2N1bWVudCB3YWxrIHRvIHVwZ3JhZGUgZWxlbWVudHMgd2l0aCB0aGF0IGxvY2FsIG5hbWUgaGFzXG4gICAgLy8gYWxyZWFkeSBoYXBwZW5lZC5cbiAgICBpZiAoZGVmaW5pdGlvbiAmJiB0aGlzLl91bmZsdXNoZWRMb2NhbE5hbWVzLmluZGV4T2YobG9jYWxOYW1lKSA9PT0gLTEpIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmZXJyZWQudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKG91dGVyKSB7XG4gICAgdGhpcy5fZG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgY29uc3QgaW5uZXIgPSB0aGlzLl9mbHVzaENhbGxiYWNrO1xuICAgIHRoaXMuX2ZsdXNoQ2FsbGJhY2sgPSBmbHVzaCA9PiBvdXRlcigoKSA9PiBpbm5lcihmbHVzaCkpO1xuICB9XG59XG5cbi8vIENsb3N1cmUgY29tcGlsZXIgZXhwb3J0cy5cbndpbmRvd1snQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5J10gPSBDdXN0b21FbGVtZW50UmVnaXN0cnk7XG5DdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlWydkZWZpbmUnXSA9IEN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGUuZGVmaW5lO1xuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZVsnZ2V0J10gPSBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLmdldDtcbkN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGVbJ3doZW5EZWZpbmVkJ10gPSBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLndoZW5EZWZpbmVkO1xuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZVsncG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayddID0gQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBEb2N1bWVudF9jcmVhdGVFbGVtZW50OiB3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQsXG4gIERvY3VtZW50X2NyZWF0ZUVsZW1lbnROUzogd2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50TlMsXG4gIERvY3VtZW50X2ltcG9ydE5vZGU6IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxcbiAgRG9jdW1lbnRfcHJlcGVuZDogd2luZG93LkRvY3VtZW50LnByb3RvdHlwZVsncHJlcGVuZCddLFxuICBEb2N1bWVudF9hcHBlbmQ6IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGVbJ2FwcGVuZCddLFxuICBOb2RlX2Nsb25lTm9kZTogd2luZG93Lk5vZGUucHJvdG90eXBlLmNsb25lTm9kZSxcbiAgTm9kZV9hcHBlbmRDaGlsZDogd2luZG93Lk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkLFxuICBOb2RlX2luc2VydEJlZm9yZTogd2luZG93Lk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSxcbiAgTm9kZV9yZW1vdmVDaGlsZDogd2luZG93Lk5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkLFxuICBOb2RlX3JlcGxhY2VDaGlsZDogd2luZG93Lk5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCxcbiAgTm9kZV90ZXh0Q29udGVudDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuTm9kZS5wcm90b3R5cGUsICd0ZXh0Q29udGVudCcpLFxuICBFbGVtZW50X2F0dGFjaFNoYWRvdzogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydhdHRhY2hTaGFkb3cnXSxcbiAgRWxlbWVudF9pbm5lckhUTUw6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkVsZW1lbnQucHJvdG90eXBlLCAnaW5uZXJIVE1MJyksXG4gIEVsZW1lbnRfZ2V0QXR0cmlidXRlOiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlLFxuICBFbGVtZW50X3NldEF0dHJpYnV0ZTogd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSxcbiAgRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGU6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsXG4gIEVsZW1lbnRfZ2V0QXR0cmlidXRlTlM6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOUyxcbiAgRWxlbWVudF9zZXRBdHRyaWJ1dGVOUzogd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZU5TLFxuICBFbGVtZW50X3JlbW92ZUF0dHJpYnV0ZU5TOiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlTlMsXG4gIEVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50OiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGVbJ2luc2VydEFkamFjZW50RWxlbWVudCddLFxuICBFbGVtZW50X3ByZXBlbmQ6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsncHJlcGVuZCddLFxuICBFbGVtZW50X2FwcGVuZDogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydhcHBlbmQnXSxcbiAgRWxlbWVudF9iZWZvcmU6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsnYmVmb3JlJ10sXG4gIEVsZW1lbnRfYWZ0ZXI6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsnYWZ0ZXInXSxcbiAgRWxlbWVudF9yZXBsYWNlV2l0aDogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydyZXBsYWNlV2l0aCddLFxuICBFbGVtZW50X3JlbW92ZTogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydyZW1vdmUnXSxcbiAgSFRNTEVsZW1lbnQ6IHdpbmRvdy5IVE1MRWxlbWVudCxcbiAgSFRNTEVsZW1lbnRfaW5uZXJIVE1MOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUsICdpbm5lckhUTUwnKSxcbiAgSFRNTEVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50OiB3aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlWydpbnNlcnRBZGphY2VudEVsZW1lbnQnXSxcbn07XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgZXhpc3RzIG9ubHkgdG8gd29yayBhcm91bmQgQ2xvc3VyZSdzIGxhY2sgb2YgYSB3YXkgdG8gZGVzY3JpYmVcbiAqIHNpbmdsZXRvbnMuIEl0IHJlcHJlc2VudHMgdGhlICdhbHJlYWR5IGNvbnN0cnVjdGVkIG1hcmtlcicgdXNlZCBpbiBjdXN0b21cbiAqIGVsZW1lbnQgY29uc3RydWN0aW9uIHN0YWNrcy5cbiAqXG4gKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWFscmVhZHktY29uc3RydWN0ZWQtbWFya2VyXG4gKi9cbmNsYXNzIEFscmVhZHlDb25zdHJ1Y3RlZE1hcmtlciB7fVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyKCk7XG4iLCJpbXBvcnQgTmF0aXZlIGZyb20gJy4vTmF0aXZlLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4uL0N1c3RvbUVsZW1lbnRJbnRlcm5hbHMuanMnO1xuaW1wb3J0IENFU3RhdGUgZnJvbSAnLi4vQ3VzdG9tRWxlbWVudFN0YXRlLmpzJztcbmltcG9ydCBBbHJlYWR5Q29uc3RydWN0ZWRNYXJrZXIgZnJvbSAnLi4vQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyLmpzJztcblxuLyoqXG4gKiBAcGFyYW0geyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJuYWxzKSB7XG4gIHdpbmRvd1snSFRNTEVsZW1lbnQnXSA9IChmdW5jdGlvbigpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb24obmV3OiBIVE1MRWxlbWVudCk6ICFIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBIVE1MRWxlbWVudCgpIHtcbiAgICAgIC8vIFRoaXMgc2hvdWxkIHJlYWxseSBiZSBgbmV3LnRhcmdldGAgYnV0IGBuZXcudGFyZ2V0YCBjYW4ndCBiZSBlbXVsYXRlZFxuICAgICAgLy8gaW4gRVM1LiBBc3N1bWluZyB0aGUgdXNlciBrZWVwcyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgY29uc3RydWN0b3Inc1xuICAgICAgLy8gcHJvdG90eXBlJ3MgYGNvbnN0cnVjdG9yYCBwcm9wZXJ0eSwgdGhpcyBpcyBlcXVpdmFsZW50LlxuICAgICAgLyoqIEB0eXBlIHshRnVuY3Rpb259ICovXG4gICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbnRlcm5hbHMuY29uc3RydWN0b3JUb0RlZmluaXRpb24oY29uc3RydWN0b3IpO1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGN1c3RvbSBlbGVtZW50IGJlaW5nIGNvbnN0cnVjdGVkIHdhcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBjdXN0b21FbGVtZW50c2AuJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnN0cnVjdGlvblN0YWNrID0gZGVmaW5pdGlvbi5jb25zdHJ1Y3Rpb25TdGFjaztcblxuICAgICAgaWYgKGNvbnN0cnVjdGlvblN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gTmF0aXZlLkRvY3VtZW50X2NyZWF0ZUVsZW1lbnQuY2FsbChkb2N1bWVudCwgZGVmaW5pdGlvbi5sb2NhbE5hbWUpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZWxlbWVudCwgY29uc3RydWN0b3IucHJvdG90eXBlKTtcbiAgICAgICAgZWxlbWVudC5fX0NFX3N0YXRlID0gQ0VTdGF0ZS5jdXN0b207XG4gICAgICAgIGVsZW1lbnQuX19DRV9kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICAgICAgaW50ZXJuYWxzLnBhdGNoKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGFzdEluZGV4ID0gY29uc3RydWN0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb25zdHJ1Y3Rpb25TdGFja1tsYXN0SW5kZXhdO1xuICAgICAgaWYgKGVsZW1lbnQgPT09IEFscmVhZHlDb25zdHJ1Y3RlZE1hcmtlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBIVE1MRWxlbWVudCBjb25zdHJ1Y3RvciB3YXMgZWl0aGVyIGNhbGxlZCByZWVudHJhbnRseSBmb3IgdGhpcyBjb25zdHJ1Y3RvciBvciBjYWxsZWQgbXVsdGlwbGUgdGltZXMuJyk7XG4gICAgICB9XG4gICAgICBjb25zdHJ1Y3Rpb25TdGFja1tsYXN0SW5kZXhdID0gQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyO1xuXG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZWxlbWVudCwgY29uc3RydWN0b3IucHJvdG90eXBlKTtcbiAgICAgIGludGVybmFscy5wYXRjaCgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGVsZW1lbnQpKTtcblxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlID0gTmF0aXZlLkhUTUxFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHJldHVybiBIVE1MRWxlbWVudDtcbiAgfSkoKTtcbn07XG4iLCJpbXBvcnQgQ3VzdG9tRWxlbWVudEludGVybmFscyBmcm9tICcuLi8uLi9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzJztcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICcuLi8uLi9VdGlsaXRpZXMuanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHByZXBlbmQ6ICFmdW5jdGlvbiguLi4oIU5vZGV8c3RyaW5nKSksXG4gICogIGFwcGVuZDogIWZ1bmN0aW9uKC4uLighTm9kZXxzdHJpbmcpKSxcbiAqIH19XG4gKi9cbmxldCBQYXJlbnROb2RlTmF0aXZlTWV0aG9kcztcblxuLyoqXG4gKiBAcGFyYW0geyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHNcbiAqIEBwYXJhbSB7IU9iamVjdH0gZGVzdGluYXRpb25cbiAqIEBwYXJhbSB7IVBhcmVudE5vZGVOYXRpdmVNZXRob2RzfSBidWlsdEluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscywgZGVzdGluYXRpb24sIGJ1aWx0SW4pIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uKCFOb2RlfHN0cmluZyl9IG5vZGVzXG4gICAqL1xuICBkZXN0aW5hdGlvblsncHJlcGVuZCddID0gZnVuY3Rpb24oLi4ubm9kZXMpIHtcbiAgICAvLyBUT0RPOiBGaXggdGhpcyBmb3Igd2hlbiBvbmUgb2YgYG5vZGVzYCBpcyBhIERvY3VtZW50RnJhZ21lbnQhXG4gICAgY29uc3QgY29ubmVjdGVkQmVmb3JlID0gLyoqIEB0eXBlIHshQXJyYXk8IU5vZGU+fSAqLyAobm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xuICAgICAgLy8gRG9jdW1lbnRGcmFnbWVudHMgYXJlIG5vdCBjb25uZWN0ZWQgYW5kIHdpbGwgbm90IGJlIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBOb2RlICYmIFV0aWxpdGllcy5pc0Nvbm5lY3RlZChub2RlKTtcbiAgICB9KSk7XG5cbiAgICBidWlsdEluLnByZXBlbmQuYXBwbHkodGhpcywgbm9kZXMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25uZWN0ZWRCZWZvcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShjb25uZWN0ZWRCZWZvcmVbaV0pO1xuICAgIH1cblxuICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uKCFOb2RlfHN0cmluZyl9IG5vZGVzXG4gICAqL1xuICBkZXN0aW5hdGlvblsnYXBwZW5kJ10gPSBmdW5jdGlvbiguLi5ub2Rlcykge1xuICAgIC8vIFRPRE86IEZpeCB0aGlzIGZvciB3aGVuIG9uZSBvZiBgbm9kZXNgIGlzIGEgRG9jdW1lbnRGcmFnbWVudCFcbiAgICBjb25zdCBjb25uZWN0ZWRCZWZvcmUgPSAvKiogQHR5cGUgeyFBcnJheTwhTm9kZT59ICovIChub2Rlcy5maWx0ZXIobm9kZSA9PiB7XG4gICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBhcmUgbm90IGNvbm5lY3RlZCBhbmQgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgIH0pKTtcblxuICAgIGJ1aWx0SW4uYXBwZW5kLmFwcGx5KHRoaXMsIG5vZGVzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ubmVjdGVkQmVmb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUoY29ubmVjdGVkQmVmb3JlW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCBOYXRpdmUgZnJvbSAnLi9OYXRpdmUuanMnO1xuaW1wb3J0IEN1c3RvbUVsZW1lbnRJbnRlcm5hbHMgZnJvbSAnLi4vQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyc7XG5pbXBvcnQgKiBhcyBVdGlsaXRpZXMgZnJvbSAnLi4vVXRpbGl0aWVzLmpzJztcblxuaW1wb3J0IFBhdGNoUGFyZW50Tm9kZSBmcm9tICcuL0ludGVyZmFjZS9QYXJlbnROb2RlLmpzJztcblxuLyoqXG4gKiBAcGFyYW0geyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJuYWxzKSB7XG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChEb2N1bWVudC5wcm90b3R5cGUsICdjcmVhdGVFbGVtZW50JyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7RG9jdW1lbnR9XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZVxuICAgICAqIEByZXR1cm4geyFFbGVtZW50fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKGxvY2FsTmFtZSkge1xuICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZG9jdW1lbnQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSByZWdpc3RyeS5cbiAgICAgIGlmICh0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGludGVybmFscy5sb2NhbE5hbWVUb0RlZmluaXRpb24obG9jYWxOYW1lKTtcbiAgICAgICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IChkZWZpbml0aW9uLmNvbnN0cnVjdG9yKSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovXG4gICAgICAgIChOYXRpdmUuRG9jdW1lbnRfY3JlYXRlRWxlbWVudC5jYWxsKHRoaXMsIGxvY2FsTmFtZSkpO1xuICAgICAgaW50ZXJuYWxzLnBhdGNoKHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChEb2N1bWVudC5wcm90b3R5cGUsICdpbXBvcnROb2RlJyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7RG9jdW1lbnR9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGRlZXBcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihub2RlLCBkZWVwKSB7XG4gICAgICBjb25zdCBjbG9uZSA9IE5hdGl2ZS5Eb2N1bWVudF9pbXBvcnROb2RlLmNhbGwodGhpcywgbm9kZSwgZGVlcCk7XG4gICAgICAvLyBPbmx5IGNyZWF0ZSBjdXN0b20gZWxlbWVudHMgaWYgdGhpcyBkb2N1bWVudCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdHJ5LlxuICAgICAgaWYgKCF0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpIHtcbiAgICAgICAgaW50ZXJuYWxzLnBhdGNoVHJlZShjbG9uZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnRlcm5hbHMucGF0Y2hBbmRVcGdyYWRlVHJlZShjbG9uZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xvbmU7XG4gICAgfSk7XG5cbiAgY29uc3QgTlNfSFRNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChEb2N1bWVudC5wcm90b3R5cGUsICdjcmVhdGVFbGVtZW50TlMnLFxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtEb2N1bWVudH1cbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IG5hbWVzcGFjZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWVcbiAgICAgKiBAcmV0dXJuIHshRWxlbWVudH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihuYW1lc3BhY2UsIGxvY2FsTmFtZSkge1xuICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZG9jdW1lbnQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSByZWdpc3RyeS5cbiAgICAgIGlmICh0aGlzLl9fQ0VfaGFzUmVnaXN0cnkgJiYgKG5hbWVzcGFjZSA9PT0gbnVsbCB8fCBuYW1lc3BhY2UgPT09IE5TX0hUTUwpKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbnRlcm5hbHMubG9jYWxOYW1lVG9EZWZpbml0aW9uKGxvY2FsTmFtZSk7XG4gICAgICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyAoZGVmaW5pdGlvbi5jb25zdHJ1Y3RvcikoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICAoTmF0aXZlLkRvY3VtZW50X2NyZWF0ZUVsZW1lbnROUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbG9jYWxOYW1lKSk7XG4gICAgICBpbnRlcm5hbHMucGF0Y2gocmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgUGF0Y2hQYXJlbnROb2RlKGludGVybmFscywgRG9jdW1lbnQucHJvdG90eXBlLCB7XG4gICAgcHJlcGVuZDogTmF0aXZlLkRvY3VtZW50X3ByZXBlbmQsXG4gICAgYXBwZW5kOiBOYXRpdmUuRG9jdW1lbnRfYXBwZW5kLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgTmF0aXZlIGZyb20gJy4vTmF0aXZlLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4uL0N1c3RvbUVsZW1lbnRJbnRlcm5hbHMuanMnO1xuaW1wb3J0ICogYXMgVXRpbGl0aWVzIGZyb20gJy4uL1V0aWxpdGllcy5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscykge1xuICAvLyBgTm9kZSNub2RlVmFsdWVgIGlzIGltcGxlbWVudGVkIG9uIGBBdHRyYC5cbiAgLy8gYE5vZGUjdGV4dENvbnRlbnRgIGlzIGltcGxlbWVudGVkIG9uIGBBdHRyYCwgYEVsZW1lbnRgLlxuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChOb2RlLnByb3RvdHlwZSwgJ2luc2VydEJlZm9yZScsXG4gICAgLyoqXG4gICAgICogQHRoaXMge05vZGV9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7P05vZGV9IHJlZk5vZGVcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihub2RlLCByZWZOb2RlKSB7XG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlLmNoaWxkTm9kZXMpO1xuICAgICAgICBjb25zdCBuYXRpdmVSZXN1bHQgPSBOYXRpdmUuTm9kZV9pbnNlcnRCZWZvcmUuY2FsbCh0aGlzLCBub2RlLCByZWZOb2RlKTtcblxuICAgICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBjYW4ndCBiZSBjb25uZWN0ZWQsIHNvIGBkaXNjb25uZWN0VHJlZWAgd2lsbCBuZXZlclxuICAgICAgICAvLyBuZWVkIHRvIGJlIGNhbGxlZCBvbiBhIERvY3VtZW50RnJhZ21lbnQncyBjaGlsZHJlbiBhZnRlciBpbnNlcnRpbmcgaXQuXG5cbiAgICAgICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKGluc2VydGVkTm9kZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYXRpdmVSZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vZGVXYXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQobm9kZSk7XG4gICAgICBjb25zdCBuYXRpdmVSZXN1bHQgPSBOYXRpdmUuTm9kZV9pbnNlcnRCZWZvcmUuY2FsbCh0aGlzLCBub2RlLCByZWZOb2RlKTtcblxuICAgICAgaWYgKG5vZGVXYXNDb25uZWN0ZWQpIHtcbiAgICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5hdGl2ZVJlc3VsdDtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoTm9kZS5wcm90b3R5cGUsICdhcHBlbmRDaGlsZCcsXG4gICAgLyoqXG4gICAgICogQHRoaXMge05vZGV9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEByZXR1cm4geyFOb2RlfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBjb25zdCBpbnNlcnRlZE5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KG5vZGUuY2hpbGROb2Rlcyk7XG4gICAgICAgIGNvbnN0IG5hdGl2ZVJlc3VsdCA9IE5hdGl2ZS5Ob2RlX2FwcGVuZENoaWxkLmNhbGwodGhpcywgbm9kZSk7XG5cbiAgICAgICAgLy8gRG9jdW1lbnRGcmFnbWVudHMgY2FuJ3QgYmUgY29ubmVjdGVkLCBzbyBgZGlzY29ubmVjdFRyZWVgIHdpbGwgbmV2ZXJcbiAgICAgICAgLy8gbmVlZCB0byBiZSBjYWxsZWQgb24gYSBEb2N1bWVudEZyYWdtZW50J3MgY2hpbGRyZW4gYWZ0ZXIgaW5zZXJ0aW5nIGl0LlxuXG4gICAgICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShpbnNlcnRlZE5vZGVzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmF0aXZlUmVzdWx0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub2RlV2FzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgICAgY29uc3QgbmF0aXZlUmVzdWx0ID0gTmF0aXZlLk5vZGVfYXBwZW5kQ2hpbGQuY2FsbCh0aGlzLCBub2RlKTtcblxuICAgICAgaWYgKG5vZGVXYXNDb25uZWN0ZWQpIHtcbiAgICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5hdGl2ZVJlc3VsdDtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoTm9kZS5wcm90b3R5cGUsICdjbG9uZU5vZGUnLFxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtOb2RlfVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGRlZXBcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihkZWVwKSB7XG4gICAgICBjb25zdCBjbG9uZSA9IE5hdGl2ZS5Ob2RlX2Nsb25lTm9kZS5jYWxsKHRoaXMsIGRlZXApO1xuICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZWxlbWVudCdzIG93bmVyIGRvY3VtZW50IGlzXG4gICAgICAvLyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdHJ5LlxuICAgICAgaWYgKCF0aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeSkge1xuICAgICAgICBpbnRlcm5hbHMucGF0Y2hUcmVlKGNsb25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludGVybmFscy5wYXRjaEFuZFVwZ3JhZGVUcmVlKGNsb25lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoTm9kZS5wcm90b3R5cGUsICdyZW1vdmVDaGlsZCcsXG4gICAgLyoqXG4gICAgICogQHRoaXMge05vZGV9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEByZXR1cm4geyFOb2RlfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGNvbnN0IG5vZGVXYXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQobm9kZSk7XG4gICAgICBjb25zdCBuYXRpdmVSZXN1bHQgPSBOYXRpdmUuTm9kZV9yZW1vdmVDaGlsZC5jYWxsKHRoaXMsIG5vZGUpO1xuXG4gICAgICBpZiAobm9kZVdhc0Nvbm5lY3RlZCkge1xuICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuYXRpdmVSZXN1bHQ7XG4gICAgfSk7XG5cbiAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKE5vZGUucHJvdG90eXBlLCAncmVwbGFjZUNoaWxkJyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7Tm9kZX1cbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlVG9JbnNlcnRcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlVG9SZW1vdmVcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihub2RlVG9JbnNlcnQsIG5vZGVUb1JlbW92ZSkge1xuICAgICAgaWYgKG5vZGVUb0luc2VydCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlVG9JbnNlcnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIGNvbnN0IG5hdGl2ZVJlc3VsdCA9IE5hdGl2ZS5Ob2RlX3JlcGxhY2VDaGlsZC5jYWxsKHRoaXMsIG5vZGVUb0luc2VydCwgbm9kZVRvUmVtb3ZlKTtcblxuICAgICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBjYW4ndCBiZSBjb25uZWN0ZWQsIHNvIGBkaXNjb25uZWN0VHJlZWAgd2lsbCBuZXZlclxuICAgICAgICAvLyBuZWVkIHRvIGJlIGNhbGxlZCBvbiBhIERvY3VtZW50RnJhZ21lbnQncyBjaGlsZHJlbiBhZnRlciBpbnNlcnRpbmcgaXQuXG5cbiAgICAgICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKSkge1xuICAgICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShub2RlVG9SZW1vdmUpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKGluc2VydGVkTm9kZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYXRpdmVSZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vZGVUb0luc2VydFdhc0Nvbm5lY3RlZCA9IFV0aWxpdGllcy5pc0Nvbm5lY3RlZChub2RlVG9JbnNlcnQpO1xuICAgICAgY29uc3QgbmF0aXZlUmVzdWx0ID0gTmF0aXZlLk5vZGVfcmVwbGFjZUNoaWxkLmNhbGwodGhpcywgbm9kZVRvSW5zZXJ0LCBub2RlVG9SZW1vdmUpO1xuICAgICAgY29uc3QgdGhpc0lzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpO1xuXG4gICAgICBpZiAodGhpc0lzQ29ubmVjdGVkKSB7XG4gICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShub2RlVG9SZW1vdmUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZVRvSW5zZXJ0V2FzQ29ubmVjdGVkKSB7XG4gICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShub2RlVG9JbnNlcnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpc0lzQ29ubmVjdGVkKSB7XG4gICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlVG9JbnNlcnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmF0aXZlUmVzdWx0O1xuICAgIH0pO1xuXG5cbiAgZnVuY3Rpb24gcGF0Y2hfdGV4dENvbnRlbnQoZGVzdGluYXRpb24sIGJhc2VEZXNjcmlwdG9yKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3RpbmF0aW9uLCAndGV4dENvbnRlbnQnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBiYXNlRGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBiYXNlRGVzY3JpcHRvci5nZXQsXG4gICAgICBzZXQ6IC8qKiBAdGhpcyB7Tm9kZX0gKi8gZnVuY3Rpb24oYXNzaWduZWRWYWx1ZSkge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgdGV4dCBub2RlIHRoZW4gdGhlcmUgYXJlIG5vIG5vZGVzIHRvIGRpc2Nvbm5lY3QuXG4gICAgICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIGJhc2VEZXNjcmlwdG9yLnNldC5jYWxsKHRoaXMsIGFzc2lnbmVkVmFsdWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZW1vdmVkTm9kZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIENoZWNraW5nIGZvciBgZmlyc3RDaGlsZGAgaXMgZmFzdGVyIHRoYW4gcmVhZGluZyBgY2hpbGROb2Rlcy5sZW5ndGhgXG4gICAgICAgIC8vIHRvIGNvbXBhcmUgd2l0aCAwLlxuICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgLy8gVXNpbmcgYGNoaWxkTm9kZXNgIGlzIGZhc3RlciB0aGFuIGBjaGlsZHJlbmAsIGV2ZW4gdGhvdWdoIHdlIG9ubHlcbiAgICAgICAgICAvLyBjYXJlIGFib3V0IGVsZW1lbnRzLlxuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXM7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID4gMCAmJiBVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgICAgICAgIC8vIENvcHlpbmcgYW4gYXJyYXkgYnkgaXRlcmF0aW5nIGlzIGZhc3RlciB0aGFuIHVzaW5nIHNsaWNlLlxuICAgICAgICAgICAgcmVtb3ZlZE5vZGVzID0gbmV3IEFycmF5KGNoaWxkTm9kZXNMZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgcmVtb3ZlZE5vZGVzW2ldID0gY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBiYXNlRGVzY3JpcHRvci5zZXQuY2FsbCh0aGlzLCBhc3NpZ25lZFZhbHVlKTtcblxuICAgICAgICBpZiAocmVtb3ZlZE5vZGVzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShyZW1vdmVkTm9kZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChOYXRpdmUuTm9kZV90ZXh0Q29udGVudCAmJiBOYXRpdmUuTm9kZV90ZXh0Q29udGVudC5nZXQpIHtcbiAgICBwYXRjaF90ZXh0Q29udGVudChOb2RlLnByb3RvdHlwZSwgTmF0aXZlLk5vZGVfdGV4dENvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGludGVybmFscy5hZGRQYXRjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBwYXRjaF90ZXh0Q29udGVudChlbGVtZW50LCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgLy8gTk9URTogVGhpcyBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgYHRleHRDb250ZW50YCBnZXR0ZXIgYXNzdW1lcyB0aGF0XG4gICAgICAgIC8vIHRleHQgbm9kZXMnIGB0ZXh0Q29udGVudGAgZ2V0dGVyIHdpbGwgbm90IGJlIHBhdGNoZWQuXG4gICAgICAgIGdldDogLyoqIEB0aGlzIHtOb2RlfSAqLyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvKiogQHR5cGUgeyFBcnJheTxzdHJpbmc+fSAqL1xuICAgICAgICAgIGNvbnN0IHBhcnRzID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFydHMucHVzaCh0aGlzLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0cy5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiAvKiogQHRoaXMge05vZGV9ICovIGZ1bmN0aW9uKGFzc2lnbmVkVmFsdWUpIHtcbiAgICAgICAgICB3aGlsZSAodGhpcy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBOYXRpdmUuTm9kZV9yZW1vdmVDaGlsZC5jYWxsKHRoaXMsIHRoaXMuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIE5hdGl2ZS5Ob2RlX2FwcGVuZENoaWxkLmNhbGwodGhpcywgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXNzaWduZWRWYWx1ZSkpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgQ3VzdG9tRWxlbWVudEludGVybmFscyBmcm9tICcuLi8uLi9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzJztcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICcuLi8uLi9VdGlsaXRpZXMuanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGJlZm9yZTogIWZ1bmN0aW9uKC4uLighTm9kZXxzdHJpbmcpKSxcbiAqICAgYWZ0ZXI6ICFmdW5jdGlvbiguLi4oIU5vZGV8c3RyaW5nKSksXG4gKiAgIHJlcGxhY2VXaXRoOiAhZnVuY3Rpb24oLi4uKCFOb2RlfHN0cmluZykpLFxuICogICByZW1vdmU6ICFmdW5jdGlvbigpLFxuICogfX1cbiAqL1xubGV0IENoaWxkTm9kZU5hdGl2ZU1ldGhvZHM7XG5cbi8qKlxuICogQHBhcmFtIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzXG4gKiBAcGFyYW0geyFPYmplY3R9IGRlc3RpbmF0aW9uXG4gKiBAcGFyYW0geyFDaGlsZE5vZGVOYXRpdmVNZXRob2RzfSBidWlsdEluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscywgZGVzdGluYXRpb24sIGJ1aWx0SW4pIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uKCFOb2RlfHN0cmluZyl9IG5vZGVzXG4gICAqL1xuICBkZXN0aW5hdGlvblsnYmVmb3JlJ10gPSBmdW5jdGlvbiguLi5ub2Rlcykge1xuICAgIC8vIFRPRE86IEZpeCB0aGlzIGZvciB3aGVuIG9uZSBvZiBgbm9kZXNgIGlzIGEgRG9jdW1lbnRGcmFnbWVudCFcbiAgICBjb25zdCBjb25uZWN0ZWRCZWZvcmUgPSAvKiogQHR5cGUgeyFBcnJheTwhTm9kZT59ICovIChub2Rlcy5maWx0ZXIobm9kZSA9PiB7XG4gICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBhcmUgbm90IGNvbm5lY3RlZCBhbmQgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgIH0pKTtcblxuICAgIGJ1aWx0SW4uYmVmb3JlLmFwcGx5KHRoaXMsIG5vZGVzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ubmVjdGVkQmVmb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUoY29ubmVjdGVkQmVmb3JlW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gey4uLighTm9kZXxzdHJpbmcpfSBub2Rlc1xuICAgKi9cbiAgZGVzdGluYXRpb25bJ2FmdGVyJ10gPSBmdW5jdGlvbiguLi5ub2Rlcykge1xuICAgIC8vIFRPRE86IEZpeCB0aGlzIGZvciB3aGVuIG9uZSBvZiBgbm9kZXNgIGlzIGEgRG9jdW1lbnRGcmFnbWVudCFcbiAgICBjb25zdCBjb25uZWN0ZWRCZWZvcmUgPSAvKiogQHR5cGUgeyFBcnJheTwhTm9kZT59ICovIChub2Rlcy5maWx0ZXIobm9kZSA9PiB7XG4gICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBhcmUgbm90IGNvbm5lY3RlZCBhbmQgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgIH0pKTtcblxuICAgIGJ1aWx0SW4uYWZ0ZXIuYXBwbHkodGhpcywgbm9kZXMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25uZWN0ZWRCZWZvcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShjb25uZWN0ZWRCZWZvcmVbaV0pO1xuICAgIH1cblxuICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uKCFOb2RlfHN0cmluZyl9IG5vZGVzXG4gICAqL1xuICBkZXN0aW5hdGlvblsncmVwbGFjZVdpdGgnXSA9IGZ1bmN0aW9uKC4uLm5vZGVzKSB7XG4gICAgLy8gVE9ETzogRml4IHRoaXMgZm9yIHdoZW4gb25lIG9mIGBub2Rlc2AgaXMgYSBEb2N1bWVudEZyYWdtZW50IVxuICAgIGNvbnN0IGNvbm5lY3RlZEJlZm9yZSA9IC8qKiBAdHlwZSB7IUFycmF5PCFOb2RlPn0gKi8gKG5vZGVzLmZpbHRlcihub2RlID0+IHtcbiAgICAgIC8vIERvY3VtZW50RnJhZ21lbnRzIGFyZSBub3QgY29ubmVjdGVkIGFuZCB3aWxsIG5vdCBiZSBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgTm9kZSAmJiBVdGlsaXRpZXMuaXNDb25uZWN0ZWQobm9kZSk7XG4gICAgfSkpO1xuXG4gICAgY29uc3Qgd2FzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpO1xuXG4gICAgYnVpbHRJbi5yZXBsYWNlV2l0aC5hcHBseSh0aGlzLCBub2Rlcyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbm5lY3RlZEJlZm9yZS5sZW5ndGg7IGkrKykge1xuICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKGNvbm5lY3RlZEJlZm9yZVtpXSk7XG4gICAgfVxuXG4gICAgaWYgKHdhc0Nvbm5lY3RlZCkge1xuICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKHRoaXMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkZXN0aW5hdGlvblsncmVtb3ZlJ10gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB3YXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcyk7XG5cbiAgICBidWlsdEluLnJlbW92ZS5jYWxsKHRoaXMpO1xuXG4gICAgaWYgKHdhc0Nvbm5lY3RlZCkge1xuICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKHRoaXMpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgTmF0aXZlIGZyb20gJy4vTmF0aXZlLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4uL0N1c3RvbUVsZW1lbnRJbnRlcm5hbHMuanMnO1xuaW1wb3J0IENFU3RhdGUgZnJvbSAnLi4vQ3VzdG9tRWxlbWVudFN0YXRlLmpzJztcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICcuLi9VdGlsaXRpZXMuanMnO1xuXG5pbXBvcnQgUGF0Y2hQYXJlbnROb2RlIGZyb20gJy4vSW50ZXJmYWNlL1BhcmVudE5vZGUuanMnO1xuaW1wb3J0IFBhdGNoQ2hpbGROb2RlIGZyb20gJy4vSW50ZXJmYWNlL0NoaWxkTm9kZS5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscykge1xuICBpZiAoTmF0aXZlLkVsZW1lbnRfYXR0YWNoU2hhZG93KSB7XG4gICAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKEVsZW1lbnQucHJvdG90eXBlLCAnYXR0YWNoU2hhZG93JyxcbiAgICAgIC8qKlxuICAgICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICAgKiBAcGFyYW0geyF7bW9kZTogc3RyaW5nfX0gaW5pdFxuICAgICAgICogQHJldHVybiB7U2hhZG93Um9vdH1cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24oaW5pdCkge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gTmF0aXZlLkVsZW1lbnRfYXR0YWNoU2hhZG93LmNhbGwodGhpcywgaW5pdCk7XG4gICAgICAgIHRoaXMuX19DRV9zaGFkb3dSb290ID0gc2hhZG93Um9vdDtcbiAgICAgICAgcmV0dXJuIHNoYWRvd1Jvb3Q7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oJ0N1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjYXR0YWNoU2hhZG93YCB3YXMgbm90IHBhdGNoZWQuJyk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHBhdGNoX2lubmVySFRNTChkZXN0aW5hdGlvbiwgYmFzZURlc2NyaXB0b3IpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdGluYXRpb24sICdpbm5lckhUTUwnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBiYXNlRGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBiYXNlRGVzY3JpcHRvci5nZXQsXG4gICAgICBzZXQ6IC8qKiBAdGhpcyB7RWxlbWVudH0gKi8gZnVuY3Rpb24oaHRtbFN0cmluZykge1xuICAgICAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKTtcblxuICAgICAgICAvLyBOT1RFOiBJbiBJRTExLCB3aGVuIHVzaW5nIHRoZSBuYXRpdmUgYGlubmVySFRNTGAgc2V0dGVyLCBhbGwgbm9kZXNcbiAgICAgICAgLy8gdGhhdCB3ZXJlIHByZXZpb3VzbHkgZGVzY2VuZGFudHMgb2YgdGhlIGNvbnRleHQgZWxlbWVudCBoYXZlIGFsbCBvZlxuICAgICAgICAvLyB0aGVpciBjaGlsZHJlbiByZW1vdmVkIGFzIHBhcnQgb2YgdGhlIHNldCAtIHRoZSBlbnRpcmUgc3VidHJlZSBpc1xuICAgICAgICAvLyAnZGlzYXNzZW1ibGVkJy4gVGhpcyB3b3JrIGFyb3VuZCB3YWxrcyB0aGUgc3VidHJlZSAqYmVmb3JlKiB1c2luZyB0aGVcbiAgICAgICAgLy8gbmF0aXZlIHNldHRlci5cbiAgICAgICAgLyoqIEB0eXBlIHshQXJyYXk8IUVsZW1lbnQ+fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgbGV0IHJlbW92ZWRFbGVtZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgcmVtb3ZlZEVsZW1lbnRzID0gW107XG4gICAgICAgICAgVXRpbGl0aWVzLndhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKHRoaXMsIGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlZEVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBiYXNlRGVzY3JpcHRvci5zZXQuY2FsbCh0aGlzLCBodG1sU3RyaW5nKTtcblxuICAgICAgICBpZiAocmVtb3ZlZEVsZW1lbnRzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZW1vdmVkRWxlbWVudHNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5fX0NFX3N0YXRlID09PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZWxlbWVudCdzIG93bmVyIGRvY3VtZW50IGlzXG4gICAgICAgIC8vIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0cnkuXG4gICAgICAgIGlmICghdGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnkpIHtcbiAgICAgICAgICBpbnRlcm5hbHMucGF0Y2hUcmVlKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGludGVybmFscy5wYXRjaEFuZFVwZ3JhZGVUcmVlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sU3RyaW5nO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChOYXRpdmUuRWxlbWVudF9pbm5lckhUTUwgJiYgTmF0aXZlLkVsZW1lbnRfaW5uZXJIVE1MLmdldCkge1xuICAgIHBhdGNoX2lubmVySFRNTChFbGVtZW50LnByb3RvdHlwZSwgTmF0aXZlLkVsZW1lbnRfaW5uZXJIVE1MKTtcbiAgfSBlbHNlIGlmIChOYXRpdmUuSFRNTEVsZW1lbnRfaW5uZXJIVE1MICYmIE5hdGl2ZS5IVE1MRWxlbWVudF9pbm5lckhUTUwuZ2V0KSB7XG4gICAgcGF0Y2hfaW5uZXJIVE1MKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgTmF0aXZlLkhUTUxFbGVtZW50X2lubmVySFRNTCk7XG4gIH0gZWxzZSB7XG5cbiAgICAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqL1xuICAgIGNvbnN0IHJhd0RpdiA9IE5hdGl2ZS5Eb2N1bWVudF9jcmVhdGVFbGVtZW50LmNhbGwoZG9jdW1lbnQsICdkaXYnKTtcblxuICAgIGludGVybmFscy5hZGRQYXRjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBwYXRjaF9pbm5lckhUTUwoZWxlbWVudCwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIC8vIEltcGxlbWVudHMgZ2V0dGluZyBgaW5uZXJIVE1MYCBieSBwZXJmb3JtaW5nIGFuIHVucGF0Y2hlZCBgY2xvbmVOb2RlYFxuICAgICAgICAvLyBvZiB0aGUgZWxlbWVudCBhbmQgcmV0dXJuaW5nIHRoZSByZXN1bHRpbmcgZWxlbWVudCdzIGBpbm5lckhUTUxgLlxuICAgICAgICAvLyBUT0RPOiBJcyB0aGlzIHRvbyBleHBlbnNpdmU/XG4gICAgICAgIGdldDogLyoqIEB0aGlzIHtFbGVtZW50fSAqLyBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gTmF0aXZlLk5vZGVfY2xvbmVOb2RlLmNhbGwodGhpcywgdHJ1ZSkuaW5uZXJIVE1MO1xuICAgICAgICB9LFxuICAgICAgICAvLyBJbXBsZW1lbnRzIHNldHRpbmcgYGlubmVySFRNTGAgYnkgY3JlYXRpbmcgYW4gdW5wYXRjaGVkIGVsZW1lbnQsXG4gICAgICAgIC8vIHNldHRpbmcgYGlubmVySFRNTGAgb2YgdGhhdCBlbGVtZW50IGFuZCByZXBsYWNpbmcgdGhlIHRhcmdldFxuICAgICAgICAvLyBlbGVtZW50J3MgY2hpbGRyZW4gd2l0aCB0aG9zZSBvZiB0aGUgdW5wYXRjaGVkIGVsZW1lbnQuXG4gICAgICAgIHNldDogLyoqIEB0aGlzIHtFbGVtZW50fSAqLyBmdW5jdGlvbihhc3NpZ25lZFZhbHVlKSB7XG4gICAgICAgICAgLy8gTk9URTogcmUtcm91dGUgdG8gYGNvbnRlbnRgIGZvciBgdGVtcGxhdGVgIGVsZW1lbnRzLlxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gZG8gdGhpcyBiZWNhdXNlIGB0ZW1wbGF0ZS5hcHBlbmRDaGlsZGAgZG9lcyBub3RcbiAgICAgICAgICAvLyByb3V0ZSBpbnRvIGB0ZW1wbGF0ZS5jb250ZW50YC5cbiAgICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmxvY2FsTmFtZSA9PT0gJ3RlbXBsYXRlJyA/ICgvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyAodGhpcykpLmNvbnRlbnQgOiB0aGlzO1xuICAgICAgICAgIHJhd0Rpdi5pbm5lckhUTUwgPSBhc3NpZ25lZFZhbHVlO1xuXG4gICAgICAgICAgd2hpbGUgKGNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBOYXRpdmUuTm9kZV9yZW1vdmVDaGlsZC5jYWxsKGNvbnRlbnQsIGNvbnRlbnQuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlIChyYXdEaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBOYXRpdmUuTm9kZV9hcHBlbmRDaGlsZC5jYWxsKGNvbnRlbnQsIHJhd0Rpdi5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKEVsZW1lbnQucHJvdG90eXBlLCAnc2V0QXR0cmlidXRlJyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7RWxlbWVudH1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgICAvLyBGYXN0IHBhdGggZm9yIG5vbi1jdXN0b20gZWxlbWVudHMuXG4gICAgICBpZiAodGhpcy5fX0NFX3N0YXRlICE9PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICByZXR1cm4gTmF0aXZlLkVsZW1lbnRfc2V0QXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IE5hdGl2ZS5FbGVtZW50X2dldEF0dHJpYnV0ZS5jYWxsKHRoaXMsIG5hbWUpO1xuICAgICAgTmF0aXZlLkVsZW1lbnRfc2V0QXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgbmV3VmFsdWUgPSBOYXRpdmUuRWxlbWVudF9nZXRBdHRyaWJ1dGUuY2FsbCh0aGlzLCBuYW1lKTtcbiAgICAgIGludGVybmFscy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcywgbmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBudWxsKTtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoRWxlbWVudC5wcm90b3R5cGUsICdzZXRBdHRyaWJ1dGVOUycsXG4gICAgLyoqXG4gICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSBuYW1lc3BhY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5hbWVzcGFjZSwgbmFtZSwgbmV3VmFsdWUpIHtcbiAgICAgIC8vIEZhc3QgcGF0aCBmb3Igbm9uLWN1c3RvbSBlbGVtZW50cy5cbiAgICAgIGlmICh0aGlzLl9fQ0Vfc3RhdGUgIT09IENFU3RhdGUuY3VzdG9tKSB7XG4gICAgICAgIHJldHVybiBOYXRpdmUuRWxlbWVudF9zZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IE5hdGl2ZS5FbGVtZW50X2dldEF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lKTtcbiAgICAgIE5hdGl2ZS5FbGVtZW50X3NldEF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lLCBuZXdWYWx1ZSk7XG4gICAgICBuZXdWYWx1ZSA9IE5hdGl2ZS5FbGVtZW50X2dldEF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lKTtcbiAgICAgIGludGVybmFscy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcywgbmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBuYW1lc3BhY2UpO1xuICAgIH0pO1xuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChFbGVtZW50LnByb3RvdHlwZSwgJ3JlbW92ZUF0dHJpYnV0ZScsXG4gICAgLyoqXG4gICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAvLyBGYXN0IHBhdGggZm9yIG5vbi1jdXN0b20gZWxlbWVudHMuXG4gICAgICBpZiAodGhpcy5fX0NFX3N0YXRlICE9PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICByZXR1cm4gTmF0aXZlLkVsZW1lbnRfcmVtb3ZlQXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gTmF0aXZlLkVsZW1lbnRfZ2V0QXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSk7XG4gICAgICBOYXRpdmUuRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGUuY2FsbCh0aGlzLCBuYW1lKTtcbiAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBpbnRlcm5hbHMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsIG5hbWUsIG9sZFZhbHVlLCBudWxsLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoRWxlbWVudC5wcm90b3R5cGUsICdyZW1vdmVBdHRyaWJ1dGVOUycsXG4gICAgLyoqXG4gICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSBuYW1lc3BhY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5hbWVzcGFjZSwgbmFtZSkge1xuICAgICAgLy8gRmFzdCBwYXRoIGZvciBub24tY3VzdG9tIGVsZW1lbnRzLlxuICAgICAgaWYgKHRoaXMuX19DRV9zdGF0ZSAhPT0gQ0VTdGF0ZS5jdXN0b20pIHtcbiAgICAgICAgcmV0dXJuIE5hdGl2ZS5FbGVtZW50X3JlbW92ZUF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSBOYXRpdmUuRWxlbWVudF9nZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgICBOYXRpdmUuRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgICAvLyBJbiBvbGRlciBicm93c2VycywgYEVsZW1lbnQjZ2V0QXR0cmlidXRlTlNgIG1heSByZXR1cm4gdGhlIGVtcHR5IHN0cmluZ1xuICAgICAgLy8gaW5zdGVhZCBvZiBudWxsIGlmIHRoZSBhdHRyaWJ1dGUgZG9lcyBub3QgZXhpc3QuIEZvciBkZXRhaWxzLCBzZWU7XG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9nZXRBdHRyaWJ1dGVOUyNOb3Rlc1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBOYXRpdmUuRWxlbWVudF9nZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIGludGVybmFscy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcywgbmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBuYW1lc3BhY2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgZnVuY3Rpb24gcGF0Y2hfaW5zZXJ0QWRqYWNlbnRFbGVtZW50KGRlc3RpbmF0aW9uLCBiYXNlTWV0aG9kKSB7XG4gICAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKGRlc3RpbmF0aW9uLCAnaW5zZXJ0QWRqYWNlbnRFbGVtZW50JyxcbiAgICAgIC8qKlxuICAgICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2hlcmVcbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICAgICAqIEByZXR1cm4gez9FbGVtZW50fVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbih3aGVyZSwgZWxlbWVudCkge1xuICAgICAgICBjb25zdCB3YXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGluc2VydGVkRWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovXG4gICAgICAgICAgKGJhc2VNZXRob2QuY2FsbCh0aGlzLCB3aGVyZSwgZWxlbWVudCkpO1xuXG4gICAgICAgIGlmICh3YXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKGluc2VydGVkRWxlbWVudCkpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc2VydGVkRWxlbWVudDtcbiAgICAgIH0pO1xuICB9XG5cbiAgaWYgKE5hdGl2ZS5IVE1MRWxlbWVudF9pbnNlcnRBZGphY2VudEVsZW1lbnQpIHtcbiAgICBwYXRjaF9pbnNlcnRBZGphY2VudEVsZW1lbnQoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBOYXRpdmUuSFRNTEVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50KTtcbiAgfSBlbHNlIGlmIChOYXRpdmUuRWxlbWVudF9pbnNlcnRBZGphY2VudEVsZW1lbnQpIHtcbiAgICBwYXRjaF9pbnNlcnRBZGphY2VudEVsZW1lbnQoRWxlbWVudC5wcm90b3R5cGUsIE5hdGl2ZS5FbGVtZW50X2luc2VydEFkamFjZW50RWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKCdDdXN0b20gRWxlbWVudHM6IGBFbGVtZW50I2luc2VydEFkamFjZW50RWxlbWVudGAgd2FzIG5vdCBwYXRjaGVkLicpO1xuICB9XG5cblxuICBQYXRjaFBhcmVudE5vZGUoaW50ZXJuYWxzLCBFbGVtZW50LnByb3RvdHlwZSwge1xuICAgIHByZXBlbmQ6IE5hdGl2ZS5FbGVtZW50X3ByZXBlbmQsXG4gICAgYXBwZW5kOiBOYXRpdmUuRWxlbWVudF9hcHBlbmQsXG4gIH0pO1xuXG4gIFBhdGNoQ2hpbGROb2RlKGludGVybmFscywgRWxlbWVudC5wcm90b3R5cGUsIHtcbiAgICBiZWZvcmU6IE5hdGl2ZS5FbGVtZW50X2JlZm9yZSxcbiAgICBhZnRlcjogTmF0aXZlLkVsZW1lbnRfYWZ0ZXIsXG4gICAgcmVwbGFjZVdpdGg6IE5hdGl2ZS5FbGVtZW50X3JlcGxhY2VXaXRoLFxuICAgIHJlbW92ZTogTmF0aXZlLkVsZW1lbnRfcmVtb3ZlLFxuICB9KTtcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IEN1c3RvbUVsZW1lbnRJbnRlcm5hbHMgZnJvbSAnLi9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50UmVnaXN0cnkgZnJvbSAnLi9DdXN0b21FbGVtZW50UmVnaXN0cnkuanMnO1xuXG5pbXBvcnQgUGF0Y2hIVE1MRWxlbWVudCBmcm9tICcuL1BhdGNoL0hUTUxFbGVtZW50LmpzJztcbmltcG9ydCBQYXRjaERvY3VtZW50IGZyb20gJy4vUGF0Y2gvRG9jdW1lbnQuanMnO1xuaW1wb3J0IFBhdGNoTm9kZSBmcm9tICcuL1BhdGNoL05vZGUuanMnO1xuaW1wb3J0IFBhdGNoRWxlbWVudCBmcm9tICcuL1BhdGNoL0VsZW1lbnQuanMnO1xuXG5jb25zdCBwcmlvckN1c3RvbUVsZW1lbnRzID0gd2luZG93WydjdXN0b21FbGVtZW50cyddO1xuXG5pZiAoIXByaW9yQ3VzdG9tRWxlbWVudHMgfHxcbiAgICAgcHJpb3JDdXN0b21FbGVtZW50c1snZm9yY2VQb2x5ZmlsbCddIHx8XG4gICAgICh0eXBlb2YgcHJpb3JDdXN0b21FbGVtZW50c1snZGVmaW5lJ10gIT0gJ2Z1bmN0aW9uJykgfHxcbiAgICAgKHR5cGVvZiBwcmlvckN1c3RvbUVsZW1lbnRzWydnZXQnXSAhPSAnZnVuY3Rpb24nKSkge1xuICAvKiogQHR5cGUgeyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSAqL1xuICBjb25zdCBpbnRlcm5hbHMgPSBuZXcgQ3VzdG9tRWxlbWVudEludGVybmFscygpO1xuXG4gIFBhdGNoSFRNTEVsZW1lbnQoaW50ZXJuYWxzKTtcbiAgUGF0Y2hEb2N1bWVudChpbnRlcm5hbHMpO1xuICBQYXRjaE5vZGUoaW50ZXJuYWxzKTtcbiAgUGF0Y2hFbGVtZW50KGludGVybmFscyk7XG5cbiAgLy8gVGhlIG1haW4gZG9jdW1lbnQgaXMgYWx3YXlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0cnkuXG4gIGRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnkgPSB0cnVlO1xuXG4gIC8qKiBAdHlwZSB7IUN1c3RvbUVsZW1lbnRSZWdpc3RyeX0gKi9cbiAgY29uc3QgY3VzdG9tRWxlbWVudHMgPSBuZXcgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5KGludGVybmFscyk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ2N1c3RvbUVsZW1lbnRzJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBjdXN0b21FbGVtZW50cyxcbiAgfSk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8vIEB2ZXJzaW9uIDAuNy4yMlxuXG4oZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIGlmIChnbG9iYWwuSnNNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciByZWdpc3RyYXRpb25zVGFibGUgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgc2V0SW1tZWRpYXRlO1xuICBpZiAoL1RyaWRlbnR8RWRnZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgIHNldEltbWVkaWF0ZSA9IHNldFRpbWVvdXQ7XG4gIH0gZWxzZSBpZiAod2luZG93LnNldEltbWVkaWF0ZSkge1xuICAgIHNldEltbWVkaWF0ZSA9IHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNldEltbWVkaWF0ZVF1ZXVlID0gW107XG4gICAgdmFyIHNlbnRpbmVsID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5kYXRhID09PSBzZW50aW5lbCkge1xuICAgICAgICB2YXIgcXVldWUgPSBzZXRJbW1lZGlhdGVRdWV1ZTtcbiAgICAgICAgc2V0SW1tZWRpYXRlUXVldWUgPSBbXTtcbiAgICAgICAgcXVldWUuZm9yRWFjaChmdW5jdGlvbihmdW5jKSB7XG4gICAgICAgICAgZnVuYygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgICBzZXRJbW1lZGlhdGVRdWV1ZS5wdXNoKGZ1bmMpO1xuICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHNlbnRpbmVsLCBcIipcIik7XG4gICAgfTtcbiAgfVxuICB2YXIgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgdmFyIHNjaGVkdWxlZE9ic2VydmVycyA9IFtdO1xuICBmdW5jdGlvbiBzY2hlZHVsZUNhbGxiYWNrKG9ic2VydmVyKSB7XG4gICAgc2NoZWR1bGVkT2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIGlmICghaXNTY2hlZHVsZWQpIHtcbiAgICAgIGlzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHNldEltbWVkaWF0ZShkaXNwYXRjaENhbGxiYWNrcyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChub2RlKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCAmJiB3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwud3JhcElmTmVlZGVkKG5vZGUpIHx8IG5vZGU7XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGF0Y2hDYWxsYmFja3MoKSB7XG4gICAgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICB2YXIgb2JzZXJ2ZXJzID0gc2NoZWR1bGVkT2JzZXJ2ZXJzO1xuICAgIHNjaGVkdWxlZE9ic2VydmVycyA9IFtdO1xuICAgIG9ic2VydmVycy5zb3J0KGZ1bmN0aW9uKG8xLCBvMikge1xuICAgICAgcmV0dXJuIG8xLnVpZF8gLSBvMi51aWRfO1xuICAgIH0pO1xuICAgIHZhciBhbnlOb25FbXB0eSA9IGZhbHNlO1xuICAgIG9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgICB2YXIgcXVldWUgPSBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xuICAgICAgcmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzRm9yKG9ic2VydmVyKTtcbiAgICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgb2JzZXJ2ZXIuY2FsbGJhY2tfKHF1ZXVlLCBvYnNlcnZlcik7XG4gICAgICAgIGFueU5vbkVtcHR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoYW55Tm9uRW1wdHkpIGRpc3BhdGNoQ2FsbGJhY2tzKCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzRm9yKG9ic2VydmVyKSB7XG4gICAgb2JzZXJ2ZXIubm9kZXNfLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIHJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zVGFibGUuZ2V0KG5vZGUpO1xuICAgICAgaWYgKCFyZWdpc3RyYXRpb25zKSByZXR1cm47XG4gICAgICByZWdpc3RyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgIGlmIChyZWdpc3RyYXRpb24ub2JzZXJ2ZXIgPT09IG9ic2VydmVyKSByZWdpc3RyYXRpb24ucmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBmb3JFYWNoQW5jZXN0b3JBbmRPYnNlcnZlckVucXVldWVSZWNvcmQodGFyZ2V0LCBjYWxsYmFjaykge1xuICAgIGZvciAodmFyIG5vZGUgPSB0YXJnZXQ7IG5vZGU7IG5vZGUgPSBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHZhciByZWdpc3RyYXRpb25zID0gcmVnaXN0cmF0aW9uc1RhYmxlLmdldChub2RlKTtcbiAgICAgIGlmIChyZWdpc3RyYXRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVnaXN0cmF0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHZhciByZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25zW2pdO1xuICAgICAgICAgIHZhciBvcHRpb25zID0gcmVnaXN0cmF0aW9uLm9wdGlvbnM7XG4gICAgICAgICAgaWYgKG5vZGUgIT09IHRhcmdldCAmJiAhb3B0aW9ucy5zdWJ0cmVlKSBjb250aW51ZTtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gY2FsbGJhY2sob3B0aW9ucyk7XG4gICAgICAgICAgaWYgKHJlY29yZCkgcmVnaXN0cmF0aW9uLmVucXVldWUocmVjb3JkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgdWlkQ291bnRlciA9IDA7XG4gIGZ1bmN0aW9uIEpzTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XG4gICAgdGhpcy5ub2Rlc18gPSBbXTtcbiAgICB0aGlzLnJlY29yZHNfID0gW107XG4gICAgdGhpcy51aWRfID0gKyt1aWRDb3VudGVyO1xuICB9XG4gIEpzTXV0YXRpb25PYnNlcnZlci5wcm90b3R5cGUgPSB7XG4gICAgb2JzZXJ2ZTogZnVuY3Rpb24odGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0YXJnZXQgPSB3cmFwSWZOZWVkZWQodGFyZ2V0KTtcbiAgICAgIGlmICghb3B0aW9ucy5jaGlsZExpc3QgJiYgIW9wdGlvbnMuYXR0cmlidXRlcyAmJiAhb3B0aW9ucy5jaGFyYWN0ZXJEYXRhIHx8IG9wdGlvbnMuYXR0cmlidXRlT2xkVmFsdWUgJiYgIW9wdGlvbnMuYXR0cmlidXRlcyB8fCBvcHRpb25zLmF0dHJpYnV0ZUZpbHRlciAmJiBvcHRpb25zLmF0dHJpYnV0ZUZpbHRlci5sZW5ndGggJiYgIW9wdGlvbnMuYXR0cmlidXRlcyB8fCBvcHRpb25zLmNoYXJhY3RlckRhdGFPbGRWYWx1ZSAmJiAhb3B0aW9ucy5jaGFyYWN0ZXJEYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcigpO1xuICAgICAgfVxuICAgICAgdmFyIHJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zVGFibGUuZ2V0KHRhcmdldCk7XG4gICAgICBpZiAoIXJlZ2lzdHJhdGlvbnMpIHJlZ2lzdHJhdGlvbnNUYWJsZS5zZXQodGFyZ2V0LCByZWdpc3RyYXRpb25zID0gW10pO1xuICAgICAgdmFyIHJlZ2lzdHJhdGlvbjtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocmVnaXN0cmF0aW9uc1tpXS5vYnNlcnZlciA9PT0gdGhpcykge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvbnNbaV07XG4gICAgICAgICAgcmVnaXN0cmF0aW9uLnJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgcmVnaXN0cmF0aW9uID0gbmV3IFJlZ2lzdHJhdGlvbih0aGlzLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgICAgICByZWdpc3RyYXRpb25zLnB1c2gocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgdGhpcy5ub2Rlc18ucHVzaCh0YXJnZXQpO1xuICAgICAgfVxuICAgICAgcmVnaXN0cmF0aW9uLmFkZExpc3RlbmVycygpO1xuICAgIH0sXG4gICAgZGlzY29ubmVjdDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLm5vZGVzXy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIHJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zVGFibGUuZ2V0KG5vZGUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdHJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgcmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uc1tpXTtcbiAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uLm9ic2VydmVyID09PSB0aGlzKSB7XG4gICAgICAgICAgICByZWdpc3RyYXRpb24ucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICByZWdpc3RyYXRpb25zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgICB0aGlzLnJlY29yZHNfID0gW107XG4gICAgfSxcbiAgICB0YWtlUmVjb3JkczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29weU9mUmVjb3JkcyA9IHRoaXMucmVjb3Jkc187XG4gICAgICB0aGlzLnJlY29yZHNfID0gW107XG4gICAgICByZXR1cm4gY29weU9mUmVjb3JkcztcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIE11dGF0aW9uUmVjb3JkKHR5cGUsIHRhcmdldCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5hZGRlZE5vZGVzID0gW107XG4gICAgdGhpcy5yZW1vdmVkTm9kZXMgPSBbXTtcbiAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgdGhpcy5hdHRyaWJ1dGVOYW1lID0gbnVsbDtcbiAgICB0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZSA9IG51bGw7XG4gICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gY29weU11dGF0aW9uUmVjb3JkKG9yaWdpbmFsKSB7XG4gICAgdmFyIHJlY29yZCA9IG5ldyBNdXRhdGlvblJlY29yZChvcmlnaW5hbC50eXBlLCBvcmlnaW5hbC50YXJnZXQpO1xuICAgIHJlY29yZC5hZGRlZE5vZGVzID0gb3JpZ2luYWwuYWRkZWROb2Rlcy5zbGljZSgpO1xuICAgIHJlY29yZC5yZW1vdmVkTm9kZXMgPSBvcmlnaW5hbC5yZW1vdmVkTm9kZXMuc2xpY2UoKTtcbiAgICByZWNvcmQucHJldmlvdXNTaWJsaW5nID0gb3JpZ2luYWwucHJldmlvdXNTaWJsaW5nO1xuICAgIHJlY29yZC5uZXh0U2libGluZyA9IG9yaWdpbmFsLm5leHRTaWJsaW5nO1xuICAgIHJlY29yZC5hdHRyaWJ1dGVOYW1lID0gb3JpZ2luYWwuYXR0cmlidXRlTmFtZTtcbiAgICByZWNvcmQuYXR0cmlidXRlTmFtZXNwYWNlID0gb3JpZ2luYWwuYXR0cmlidXRlTmFtZXNwYWNlO1xuICAgIHJlY29yZC5vbGRWYWx1ZSA9IG9yaWdpbmFsLm9sZFZhbHVlO1xuICAgIHJldHVybiByZWNvcmQ7XG4gIH1cbiAgdmFyIGN1cnJlbnRSZWNvcmQsIHJlY29yZFdpdGhPbGRWYWx1ZTtcbiAgZnVuY3Rpb24gZ2V0UmVjb3JkKHR5cGUsIHRhcmdldCkge1xuICAgIHJldHVybiBjdXJyZW50UmVjb3JkID0gbmV3IE11dGF0aW9uUmVjb3JkKHR5cGUsIHRhcmdldCk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0UmVjb3JkV2l0aE9sZFZhbHVlKG9sZFZhbHVlKSB7XG4gICAgaWYgKHJlY29yZFdpdGhPbGRWYWx1ZSkgcmV0dXJuIHJlY29yZFdpdGhPbGRWYWx1ZTtcbiAgICByZWNvcmRXaXRoT2xkVmFsdWUgPSBjb3B5TXV0YXRpb25SZWNvcmQoY3VycmVudFJlY29yZCk7XG4gICAgcmVjb3JkV2l0aE9sZFZhbHVlLm9sZFZhbHVlID0gb2xkVmFsdWU7XG4gICAgcmV0dXJuIHJlY29yZFdpdGhPbGRWYWx1ZTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhclJlY29yZHMoKSB7XG4gICAgY3VycmVudFJlY29yZCA9IHJlY29yZFdpdGhPbGRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiByZWNvcmRSZXByZXNlbnRzQ3VycmVudE11dGF0aW9uKHJlY29yZCkge1xuICAgIHJldHVybiByZWNvcmQgPT09IHJlY29yZFdpdGhPbGRWYWx1ZSB8fCByZWNvcmQgPT09IGN1cnJlbnRSZWNvcmQ7XG4gIH1cbiAgZnVuY3Rpb24gc2VsZWN0UmVjb3JkKGxhc3RSZWNvcmQsIG5ld1JlY29yZCkge1xuICAgIGlmIChsYXN0UmVjb3JkID09PSBuZXdSZWNvcmQpIHJldHVybiBsYXN0UmVjb3JkO1xuICAgIGlmIChyZWNvcmRXaXRoT2xkVmFsdWUgJiYgcmVjb3JkUmVwcmVzZW50c0N1cnJlbnRNdXRhdGlvbihsYXN0UmVjb3JkKSkgcmV0dXJuIHJlY29yZFdpdGhPbGRWYWx1ZTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiBSZWdpc3RyYXRpb24ob2JzZXJ2ZXIsIHRhcmdldCwgb3B0aW9ucykge1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMudHJhbnNpZW50T2JzZXJ2ZWROb2RlcyA9IFtdO1xuICB9XG4gIFJlZ2lzdHJhdGlvbi5wcm90b3R5cGUgPSB7XG4gICAgZW5xdWV1ZTogZnVuY3Rpb24ocmVjb3JkKSB7XG4gICAgICB2YXIgcmVjb3JkcyA9IHRoaXMub2JzZXJ2ZXIucmVjb3Jkc187XG4gICAgICB2YXIgbGVuZ3RoID0gcmVjb3Jkcy5sZW5ndGg7XG4gICAgICBpZiAocmVjb3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBsYXN0UmVjb3JkID0gcmVjb3Jkc1tsZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIHJlY29yZFRvUmVwbGFjZUxhc3QgPSBzZWxlY3RSZWNvcmQobGFzdFJlY29yZCwgcmVjb3JkKTtcbiAgICAgICAgaWYgKHJlY29yZFRvUmVwbGFjZUxhc3QpIHtcbiAgICAgICAgICByZWNvcmRzW2xlbmd0aCAtIDFdID0gcmVjb3JkVG9SZXBsYWNlTGFzdDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjaGVkdWxlQ2FsbGJhY2sodGhpcy5vYnNlcnZlcik7XG4gICAgICB9XG4gICAgICByZWNvcmRzW2xlbmd0aF0gPSByZWNvcmQ7XG4gICAgfSxcbiAgICBhZGRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnNfKHRoaXMudGFyZ2V0KTtcbiAgICB9LFxuICAgIGFkZExpc3RlbmVyc186IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMuYXR0cmlidXRlcykgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQXR0ck1vZGlmaWVkXCIsIHRoaXMsIHRydWUpO1xuICAgICAgaWYgKG9wdGlvbnMuY2hhcmFjdGVyRGF0YSkgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ2hhcmFjdGVyRGF0YU1vZGlmaWVkXCIsIHRoaXMsIHRydWUpO1xuICAgICAgaWYgKG9wdGlvbnMuY2hpbGRMaXN0KSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Ob2RlSW5zZXJ0ZWRcIiwgdGhpcywgdHJ1ZSk7XG4gICAgICBpZiAob3B0aW9ucy5jaGlsZExpc3QgfHwgb3B0aW9ucy5zdWJ0cmVlKSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Ob2RlUmVtb3ZlZFwiLCB0aGlzLCB0cnVlKTtcbiAgICB9LFxuICAgIHJlbW92ZUxpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyc18odGhpcy50YXJnZXQpO1xuICAgIH0sXG4gICAgcmVtb3ZlTGlzdGVuZXJzXzogZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGVzKSBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01BdHRyTW9kaWZpZWRcIiwgdGhpcywgdHJ1ZSk7XG4gICAgICBpZiAob3B0aW9ucy5jaGFyYWN0ZXJEYXRhKSBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01DaGFyYWN0ZXJEYXRhTW9kaWZpZWRcIiwgdGhpcywgdHJ1ZSk7XG4gICAgICBpZiAob3B0aW9ucy5jaGlsZExpc3QpIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVJbnNlcnRlZFwiLCB0aGlzLCB0cnVlKTtcbiAgICAgIGlmIChvcHRpb25zLmNoaWxkTGlzdCB8fCBvcHRpb25zLnN1YnRyZWUpIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVSZW1vdmVkXCIsIHRoaXMsIHRydWUpO1xuICAgIH0sXG4gICAgYWRkVHJhbnNpZW50T2JzZXJ2ZXI6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGlmIChub2RlID09PSB0aGlzLnRhcmdldCkgcmV0dXJuO1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnNfKG5vZGUpO1xuICAgICAgdGhpcy50cmFuc2llbnRPYnNlcnZlZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB2YXIgcmVnaXN0cmF0aW9ucyA9IHJlZ2lzdHJhdGlvbnNUYWJsZS5nZXQobm9kZSk7XG4gICAgICBpZiAoIXJlZ2lzdHJhdGlvbnMpIHJlZ2lzdHJhdGlvbnNUYWJsZS5zZXQobm9kZSwgcmVnaXN0cmF0aW9ucyA9IFtdKTtcbiAgICAgIHJlZ2lzdHJhdGlvbnMucHVzaCh0aGlzKTtcbiAgICB9LFxuICAgIHJlbW92ZVRyYW5zaWVudE9ic2VydmVyczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdHJhbnNpZW50T2JzZXJ2ZWROb2RlcyA9IHRoaXMudHJhbnNpZW50T2JzZXJ2ZWROb2RlcztcbiAgICAgIHRoaXMudHJhbnNpZW50T2JzZXJ2ZWROb2RlcyA9IFtdO1xuICAgICAgdHJhbnNpZW50T2JzZXJ2ZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnNfKG5vZGUpO1xuICAgICAgICB2YXIgcmVnaXN0cmF0aW9ucyA9IHJlZ2lzdHJhdGlvbnNUYWJsZS5nZXQobm9kZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChyZWdpc3RyYXRpb25zW2ldID09PSB0aGlzKSB7XG4gICAgICAgICAgICByZWdpc3RyYXRpb25zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfSxcbiAgICBoYW5kbGVFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgY2FzZSBcIkRPTUF0dHJNb2RpZmllZFwiOlxuICAgICAgICB2YXIgbmFtZSA9IGUuYXR0ck5hbWU7XG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBlLnJlbGF0ZWROb2RlLm5hbWVzcGFjZVVSSTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgcmVjb3JkID0gbmV3IGdldFJlY29yZChcImF0dHJpYnV0ZXNcIiwgdGFyZ2V0KTtcbiAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPSBuYW1lO1xuICAgICAgICByZWNvcmQuYXR0cmlidXRlTmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSBlLmF0dHJDaGFuZ2UgPT09IE11dGF0aW9uRXZlbnQuQURESVRJT04gPyBudWxsIDogZS5wcmV2VmFsdWU7XG4gICAgICAgIGZvckVhY2hBbmNlc3RvckFuZE9ic2VydmVyRW5xdWV1ZVJlY29yZCh0YXJnZXQsIGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuYXR0cmlidXRlcykgcmV0dXJuO1xuICAgICAgICAgIGlmIChvcHRpb25zLmF0dHJpYnV0ZUZpbHRlciAmJiBvcHRpb25zLmF0dHJpYnV0ZUZpbHRlci5sZW5ndGggJiYgb3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIuaW5kZXhPZihuYW1lKSA9PT0gLTEgJiYgb3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIuaW5kZXhPZihuYW1lc3BhY2UpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGVPbGRWYWx1ZSkgcmV0dXJuIGdldFJlY29yZFdpdGhPbGRWYWx1ZShvbGRWYWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAgY2FzZSBcIkRPTUNoYXJhY3RlckRhdGFNb2RpZmllZFwiOlxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIHZhciByZWNvcmQgPSBnZXRSZWNvcmQoXCJjaGFyYWN0ZXJEYXRhXCIsIHRhcmdldCk7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IGUucHJldlZhbHVlO1xuICAgICAgICBmb3JFYWNoQW5jZXN0b3JBbmRPYnNlcnZlckVucXVldWVSZWNvcmQodGFyZ2V0LCBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmNoYXJhY3RlckRhdGEpIHJldHVybjtcbiAgICAgICAgICBpZiAob3B0aW9ucy5jaGFyYWN0ZXJEYXRhT2xkVmFsdWUpIHJldHVybiBnZXRSZWNvcmRXaXRoT2xkVmFsdWUob2xkVmFsdWUpO1xuICAgICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgIGNhc2UgXCJET01Ob2RlUmVtb3ZlZFwiOlxuICAgICAgICB0aGlzLmFkZFRyYW5zaWVudE9ic2VydmVyKGUudGFyZ2V0KTtcblxuICAgICAgIGNhc2UgXCJET01Ob2RlSW5zZXJ0ZWRcIjpcbiAgICAgICAgdmFyIGNoYW5nZWROb2RlID0gZS50YXJnZXQ7XG4gICAgICAgIHZhciBhZGRlZE5vZGVzLCByZW1vdmVkTm9kZXM7XG4gICAgICAgIGlmIChlLnR5cGUgPT09IFwiRE9NTm9kZUluc2VydGVkXCIpIHtcbiAgICAgICAgICBhZGRlZE5vZGVzID0gWyBjaGFuZ2VkTm9kZSBdO1xuICAgICAgICAgIHJlbW92ZWROb2RlcyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZGVkTm9kZXMgPSBbXTtcbiAgICAgICAgICByZW1vdmVkTm9kZXMgPSBbIGNoYW5nZWROb2RlIF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXZpb3VzU2libGluZyA9IGNoYW5nZWROb2RlLnByZXZpb3VzU2libGluZztcbiAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gY2hhbmdlZE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIHZhciByZWNvcmQgPSBnZXRSZWNvcmQoXCJjaGlsZExpc3RcIiwgZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICAgIHJlY29yZC5hZGRlZE5vZGVzID0gYWRkZWROb2RlcztcbiAgICAgICAgcmVjb3JkLnJlbW92ZWROb2RlcyA9IHJlbW92ZWROb2RlcztcbiAgICAgICAgcmVjb3JkLnByZXZpb3VzU2libGluZyA9IHByZXZpb3VzU2libGluZztcbiAgICAgICAgcmVjb3JkLm5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmc7XG4gICAgICAgIGZvckVhY2hBbmNlc3RvckFuZE9ic2VydmVyRW5xdWV1ZVJlY29yZChlLnJlbGF0ZWROb2RlLCBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmNoaWxkTGlzdCkgcmV0dXJuO1xuICAgICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2xlYXJSZWNvcmRzKCk7XG4gICAgfVxuICB9O1xuICBnbG9iYWwuSnNNdXRhdGlvbk9ic2VydmVyID0gSnNNdXRhdGlvbk9ic2VydmVyO1xuICBpZiAoIWdsb2JhbC5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgPSBKc011dGF0aW9uT2JzZXJ2ZXI7XG4gICAgSnNNdXRhdGlvbk9ic2VydmVyLl9pc1BvbHlmaWxsZWQgPSB0cnVlO1xuICB9XG59KShzZWxmKTtcbiIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTIgQmFybmVzYW5kbm9ibGUuY29tLCBsbGMsIERvbmF2b24gV2VzdCwgYW5kIERvbWVuaWMgRGVuaWNvbGFcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbmluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxuTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG5XSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHNldEltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIGFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJncykge1xuICAgICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gcGFydGlhbGx5QXBwbGllZC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyB0aGUgc2FtZSBhcmd1bWVudHMgYXMgc2V0SW1tZWRpYXRlLCBidXRcbiAgICAvLyByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCByZXF1aXJlcyBubyBhcmd1bWVudHMuXG4gICAgZnVuY3Rpb24gcGFydGlhbGx5QXBwbGllZChoYW5kbGVyKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgKG5ldyBGdW5jdGlvbihcIlwiICsgaGFuZGxlcikpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChwYXJ0aWFsbHlBcHBsaWVkKHJ1bklmUHJlc2VudCwgaGFuZGxlKSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrKCk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2socGFydGlhbGx5QXBwbGllZChydW5JZlByZXNlbnQsIGhhbmRsZSkpO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBhZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHBhcnRpYWxseUFwcGxpZWQocnVuSWZQcmVzZW50LCBoYW5kbGUpLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufShzZWxmKSk7XG4iLCIvLyBDYXV0aW9uOlxuLy8gRG8gbm90IHJlcGxhY2UgdGhpcyBpbXBvcnQgc3RhdGVtZW50IHdpdGggY29kZXMuXG4vL1xuLy8gSWYgeW91IHJlcGxhY2UgdGhpcyBpbXBvcnQgc3RhdGVtZW50IHdpdGggY29kZXMsXG4vLyB0aGUgY29kZXMgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgZm9sbG93aW5nIHBvbHlmaWxscyBhcmUgaW1wb3J0ZWRcbi8vIGJlY2F1c2UgaW1wb3J0IHN0YXRlbWVudHMgYXJlIGhvaXN0ZWQgZHVyaW5nIGNvbXBpbGF0aW9uLlxuaW1wb3J0ICcuL3BvbHlmaWxsLXN3aXRjaGVzJztcblxuLy8gUG9seWZpbGwgRUNNQVNjcmlwdCBzdGFuZGFyZCBmZWF0dXJlcyB3aXRoIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uXG5pbXBvcnQgJ2NvcmUtanMvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YnO1xuaW1wb3J0ICdjb3JlLWpzL2ZuL3NldCc7XG5pbXBvcnQgJ2NvcmUtanMvZm4vbWFwJztcbmltcG9ydCAnY29yZS1qcy9mbi93ZWFrLW1hcCc7XG5pbXBvcnQgJ2NvcmUtanMvZm4vYXJyYXkvZnJvbSc7XG5cbi8vIFBvbHlmaWxsIEN1c3RvbSBFbGVtZW50cyB2MSB3aXRoIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uXG5pbXBvcnQgJ0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvY3VzdG9tLWVsZW1lbnRzJztcblxuLy8gUG9seWZpbGwgTXV0YXRpb25PYnNlcnZlciB3aXRoIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uXG5pbXBvcnQgJy4vTXV0YXRpb25PYnNlcnZlckAwLjcuMjIvTXV0YXRpb25PYnNlcnZlci5qcyc7XG5cbi8vIFBvbHlmaWxsIHNldEltbWVkaWF0ZSB3aXRoIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uXG5pbXBvcnQgJy4vc2V0SW1tZWRpYXRlQDEuMC4yK21vZC9zZXRJbW1lZGlhdGUuanMnO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgREVGQVVMVF9WSUVXUE9SVCA9ICd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLG1heGltdW0tc2NhbGU9MSxtaW5pbXVtLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ubyc7XG5cbiAgdmFyIFZpZXdwb3J0ID0geyBcbiAgICBlbnN1cmVWaWV3cG9ydEVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZpZXdwb3J0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuICAgICAgaWYgKCF2aWV3cG9ydEVsZW1lbnQpIHtcbiAgICAgICAgdmlld3BvcnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICAgICAgICB2aWV3cG9ydEVsZW1lbnQubmFtZSA9ICd2aWV3cG9ydCc7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodmlld3BvcnRFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZpZXdwb3J0RWxlbWVudDtcbiAgICB9LFxuXG4gICAgc2V0dXA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZpZXdwb3J0RWxlbWVudCA9IFZpZXdwb3J0LmVuc3VyZVZpZXdwb3J0RWxlbWVudCgpO1xuXG4gICAgICBpZiAoIXZpZXdwb3J0RWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdmlld3BvcnRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnY29udGVudCcpKSB7XG4gICAgICAgIHZpZXdwb3J0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBERUZBVUxUX1ZJRVdQT1JUKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2luZG93LlZpZXdwb3J0ID0gVmlld3BvcnQ7XG59KSgpO1xuIiwiaW1wb3J0ICcuL29ucy9wbGF0Zm9ybSc7IC8vIFRoaXMgZmlsZSBtdXN0IGJlIGxvYWRlZCBiZWZvcmUgQ3VzdG9tIEVsZW1lbnRzIHBvbHlmaWxscy5cbmltcG9ydCAnLi9wb2x5ZmlsbHMvaW5kZXguanMnO1xuaW1wb3J0ICcuL3ZlbmRvci9pbmRleC5qcyc7XG5pbXBvcnQgJy4vb25zL21pY3JvZXZlbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cChvbnMpIHtcbiAgaWYgKHdpbmRvdy5fb25zTG9hZGVkKSB7XG4gICAgb25zLl91dGlsLndhcm4oJ09uc2VuIFVJIGlzIGxvYWRlZCBtb3JlIHRoYW4gb25jZS4nKTtcbiAgfVxuICB3aW5kb3cuX29uc0xvYWRlZCA9IHRydWU7XG5cbiAgb25zLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIG9ucy5lbmFibGVEZXZpY2VCYWNrQnV0dG9uSGFuZGxlcigpO1xuICAgIG9ucy5fZGVmYXVsdERldmljZUJhY2tCdXR0b25IYW5kbGVyID0gb25zLl9pbnRlcm5hbC5kYmJEaXNwYXRjaGVyLmNyZWF0ZUhhbmRsZXIod2luZG93LmRvY3VtZW50LmJvZHksICgpID0+IHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChuYXZpZ2F0b3IsICdhcHAnKSkge1xuICAgICAgICBuYXZpZ2F0b3IuYXBwLmV4aXRBcHAoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IGNsb3NlIHRoZSBhcHAuIElzIFxcJ2NvcmRvdmEuanNcXCcgaW5jbHVkZWQ/XFxuRXJyb3I6IFxcJ3dpbmRvdy5uYXZpZ2F0b3IuYXBwXFwnIGlzIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5Ll9nZXN0dXJlRGV0ZWN0b3IgPSBuZXcgb25zLkdlc3R1cmVEZXRlY3Rvcihkb2N1bWVudC5ib2R5LCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICAvLyBTaW11bGF0ZSBEZXZpY2UgQmFjayBCdXR0b24gb24gRVNDIHByZXNzXG4gICAgaWYgKCFvbnMucGxhdGZvcm0uaXNXZWJWaWV3KCkpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgIG9ucy5maXJlRGV2aWNlQmFja0J1dHRvbkV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gc2V0dXAgbG9hZGluZyBwbGFjZWhvbGRlclxuICAgIG9ucy5fc2V0dXBMb2FkaW5nUGxhY2VIb2xkZXJzKCk7XG4gIH0pO1xuXG4gIC8vIHZpZXdwb3J0LmpzXG4gIFZpZXdwb3J0LnNldHVwKCk7XG59XG4iLCJpbXBvcnQgc2V0dXAgZnJvbSAnLi9zZXR1cCc7IC8vIEFkZCBwb2x5ZmlsbHNcbmltcG9ydCBvbnMgZnJvbSAnLi9vbnMnOyAvLyBFeHRlcm5hbCBkZXBlbmRlbmN5LCBhbHdheXMgaG9pc3RlZFxuXG5zZXR1cChvbnMpOyAvLyBTZXR1cCBpbml0aWFsIGxpc3RlbmVyc1xuXG5leHBvcnQgZGVmYXVsdCBvbnM7XG4iXSwibmFtZXMiOlsid2luZG93IiwiY3VzdG9tRWxlbWVudHMiLCJmb3JjZVBvbHlmaWxsIiwiZ2xvYmFsIiwibW9kdWxlIiwiTWF0aCIsInNlbGYiLCJGdW5jdGlvbiIsIl9fZyIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiaXQiLCJpc09iamVjdCIsIlR5cGVFcnJvciIsImV4ZWMiLCJlIiwicmVxdWlyZSQkMCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYSIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50IiwicmVxdWlyZSQkMSIsInJlcXVpcmUkJDIiLCJTIiwiZm4iLCJ2YWwiLCJ0b1N0cmluZyIsImNhbGwiLCJ2YWx1ZU9mIiwiZFAiLCJPIiwiUCIsIkF0dHJpYnV0ZXMiLCJ0b1ByaW1pdGl2ZSIsIklFOF9ET01fREVGSU5FIiwidmFsdWUiLCJiaXRtYXAiLCJvYmplY3QiLCJrZXkiLCJmIiwiY3JlYXRlRGVzYyIsImhhc093blByb3BlcnR5IiwiaWQiLCJweCIsInJhbmRvbSIsImNvbmNhdCIsInVuZGVmaW5lZCIsIlNIQVJFRCIsInN0b3JlIiwicHVzaCIsIlNSQyIsIlRPX1NUUklORyIsIlRQTCIsIiR0b1N0cmluZyIsInNwbGl0IiwiaW5zcGVjdFNvdXJjZSIsInNhZmUiLCJpc0Z1bmN0aW9uIiwiaGFzIiwiaGlkZSIsImpvaW4iLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ0aGF0IiwibGVuZ3RoIiwiYiIsImMiLCJhcHBseSIsImFyZ3VtZW50cyIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJ0eXBlIiwibmFtZSIsInNvdXJjZSIsIklTX0ZPUkNFRCIsIkYiLCJJU19HTE9CQUwiLCJHIiwiSVNfU1RBVElDIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiQiIsInRhcmdldCIsImV4cG9ydHMiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsImN0eCIsInJlZGVmaW5lIiwiVSIsIlciLCJSIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJzbGljZSIsImNvZiIsIklPYmplY3QiLCJkZWZpbmVkIiwiZ09QRCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInRvSU9iamVjdCIsInBJRSIsImNoZWNrIiwicHJvdG8iLCJzZXRQcm90b3R5cGVPZiIsInRlc3QiLCJidWdneSIsInNldCIsIkFycmF5IiwiX19wcm90b19fIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwidWlkIiwiVEFHIiwiQVJHIiwidHJ5R2V0IiwiVCIsImNhbGxlZSIsImNsYXNzb2YiLCJjZWlsIiwiZmxvb3IiLCJpc05hTiIsInBvcyIsInMiLCJpIiwidG9JbnRlZ2VyIiwibCIsImNoYXJDb2RlQXQiLCJjaGFyQXQiLCJtaW4iLCJtYXgiLCJpbmRleCIsIklTX0lOQ0xVREVTIiwiJHRoaXMiLCJlbCIsImZyb21JbmRleCIsInRvTGVuZ3RoIiwidG9BYnNvbHV0ZUluZGV4Iiwic2hhcmVkIiwiYXJyYXlJbmRleE9mIiwiSUVfUFJPVE8iLCJuYW1lcyIsInJlc3VsdCIsImtleXMiLCIka2V5cyIsImVudW1CdWdLZXlzIiwiZGVmaW5lUHJvcGVydGllcyIsIlByb3BlcnRpZXMiLCJnZXRLZXlzIiwiZG9jdW1lbnRFbGVtZW50IiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJjcmVhdGUiLCJhbk9iamVjdCIsImRQcyIsImRlZiIsInRhZyIsInN0YXQiLCJjb25maWd1cmFibGUiLCJJdGVyYXRvclByb3RvdHlwZSIsIkNvbnN0cnVjdG9yIiwiTkFNRSIsIm5leHQiLCJkZXNjcmlwdG9yIiwiT2JqZWN0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsInRvT2JqZWN0IiwiY29uc3RydWN0b3IiLCJJVEVSQVRPUiIsIkJVR0dZIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkJhc2UiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInZhbHVlcyIsImVudHJpZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIm1ldGhvZHMiLCJMSUJSQVJZIiwiJGF0IiwiaXRlcmF0ZWQiLCJfdCIsIl9pIiwicG9pbnQiLCJkb25lIiwiVU5TQ09QQUJMRVMiLCJBcnJheVByb3RvIiwiX2siLCJzdGVwIiwiSXRlcmF0b3JzIiwiQXJndW1lbnRzIiwiYWRkVG9VbnNjb3BhYmxlcyIsIndrcyIsIlRPX1NUUklOR19UQUciLCJBcnJheVZhbHVlcyIsIkRPTUl0ZXJhYmxlcyIsImNvbGxlY3Rpb25zIiwiZXhwbGljaXQiLCJDb2xsZWN0aW9uIiwiJGl0ZXJhdG9ycyIsImZvcmJpZGRlbkZpZWxkIiwiaXRlcmF0b3IiLCJyZXQiLCJnZXRJdGVyYXRvck1ldGhvZCIsIkJSRUFLIiwiUkVUVVJOIiwiaXRlcmFibGUiLCJpdGVyRm4iLCJnZXRJdGVyRm4iLCJpc0FycmF5SXRlciIsIlNQRUNJRVMiLCJLRVkiLCJDIiwiREVTQ1JJUFRPUlMiLCJNRVRBIiwic2V0RGVzYyIsImlzRXh0ZW5zaWJsZSIsIkZSRUVaRSIsInByZXZlbnRFeHRlbnNpb25zIiwic2V0TWV0YSIsImZhc3RLZXkiLCJnZXRXZWFrIiwidyIsIm9uRnJlZXplIiwibWV0YSIsIk5FRUQiLCJUWVBFIiwiU0laRSIsImdldEVudHJ5IiwiZW50cnkiLCJfZiIsIm4iLCJrIiwid3JhcHBlciIsIklTX01BUCIsIkFEREVSIiwiX2wiLCJmb3JPZiIsImNsZWFyIiwidmFsaWRhdGUiLCJkYXRhIiwiciIsInAiLCJwcmV2IiwiZm9yRWFjaCIsImNhbGxiYWNrZm4iLCJ2IiwiU0FGRV9DTE9TSU5HIiwicml0ZXIiLCJza2lwQ2xvc2luZyIsImFyciIsIml0ZXIiLCJjb21tb24iLCJJU19XRUFLIiwiZml4TWV0aG9kIiwiYWRkIiwiZmFpbHMiLCJnZXRDb25zdHJ1Y3RvciIsImluc3RhbmNlIiwiSEFTTlRfQ0hBSU5JTkciLCJUSFJPV1NfT05fUFJJTUlUSVZFUyIsIkFDQ0VQVF9JVEVSQUJMRVMiLCIkaXRlckRldGVjdCIsIkJVR0dZX1pFUk8iLCIkaW5zdGFuY2UiLCJpbmhlcml0SWZSZXF1aXJlZCIsInNldFN0cm9uZyIsIlNFVCIsIlNldCIsInN0cm9uZyIsInRvSlNPTiIsImZyb20iLCJDT0xMRUNUSU9OIiwib2YiLCJBIiwibWFwRm4iLCJtYXBwaW5nIiwiY2IiLCJhRnVuY3Rpb24iLCJuZXh0SXRlbSIsInJlcXVpcmUkJDciLCJNQVAiLCJNYXAiLCJpc0FycmF5IiwiYXJnIiwib3JpZ2luYWwiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCIkY3JlYXRlIiwiSVNfRklMVEVSIiwiSVNfU09NRSIsIklTX0VWRVJZIiwiSVNfRklORF9JTkRFWCIsIk5PX0hPTEVTIiwiYXNjIiwicmVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiJGFzc2lnbiIsImFzc2lnbiIsIksiLCJhTGVuIiwiZ2V0U3ltYm9scyIsImdPUFMiLCJpc0VudW0iLCJqIiwiYXJyYXlGaW5kIiwiY3JlYXRlQXJyYXlNZXRob2QiLCJhcnJheUZpbmRJbmRleCIsInVuY2F1Z2h0RnJvemVuU3RvcmUiLCJVbmNhdWdodEZyb3plblN0b3JlIiwiZmluZFVuY2F1Z2h0RnJvemVuIiwic3BsaWNlIiwiJGhhcyIsImVhY2giLCJOQVRJVkVfV0VBS19NQVAiLCJJU19JRTExIiwiQWN0aXZlWE9iamVjdCIsIldFQUtfTUFQIiwid2VhayIsInVmc3RvcmUiLCJJbnRlcm5hbE1hcCIsIldlYWtNYXAiLCIkV2Vha01hcCIsIm1ldGhvZCIsInJlcXVpcmUkJDUiLCIkZGVmaW5lUHJvcGVydHkiLCJhcnJheUxpa2UiLCJtYXBmbiIsInJlc2VydmVkVGFnTGlzdCIsImlzVmFsaWRDdXN0b21FbGVtZW50TmFtZSIsImxvY2FsTmFtZSIsInJlc2VydmVkIiwidmFsaWRGb3JtIiwiaXNDb25uZWN0ZWQiLCJub2RlIiwibmF0aXZlVmFsdWUiLCJjdXJyZW50IiwiX19DRV9pc0ltcG9ydERvY3VtZW50IiwiRG9jdW1lbnQiLCJwYXJlbnROb2RlIiwiU2hhZG93Um9vdCIsImhvc3QiLCJuZXh0U2libGluZ09yQW5jZXN0b3JTaWJsaW5nIiwicm9vdCIsInN0YXJ0IiwibmV4dFNpYmxpbmciLCJuZXh0Tm9kZSIsImZpcnN0Q2hpbGQiLCJ3YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyIsImNhbGxiYWNrIiwidmlzaXRlZEltcG9ydHMiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJlbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiaW1wb3J0Tm9kZSIsImltcG9ydCIsImNoaWxkIiwic2hhZG93Um9vdCIsIl9fQ0Vfc2hhZG93Um9vdCIsInNldFByb3BlcnR5VW5jaGVja2VkIiwiZGVzdGluYXRpb24iLCJDdXN0b21FbGVtZW50U3RhdGUiLCJDdXN0b21FbGVtZW50SW50ZXJuYWxzIiwiX2xvY2FsTmFtZVRvRGVmaW5pdGlvbiIsIl9jb25zdHJ1Y3RvclRvRGVmaW5pdGlvbiIsIl9wYXRjaGVzIiwiX2hhc1BhdGNoZXMiLCJkZWZpbml0aW9uIiwibGlzdGVuZXIiLCJwYXRjaCIsIl9fQ0VfcGF0Y2hlZCIsImVsZW1lbnRzIiwiX19DRV9zdGF0ZSIsIkNFU3RhdGUiLCJjdXN0b20iLCJVdGlsaXRpZXMiLCJjb25uZWN0ZWRDYWxsYmFjayIsInVwZ3JhZGVFbGVtZW50IiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJnYXRoZXJFbGVtZW50cyIsInJlYWR5U3RhdGUiLCJfX0NFX2hhc1JlZ2lzdHJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZCIsImRlbGV0ZSIsInBhdGNoQW5kVXBncmFkZVRyZWUiLCJjdXJyZW50U3RhdGUiLCJsb2NhbE5hbWVUb0RlZmluaXRpb24iLCJjb25zdHJ1Y3Rpb25TdGFjayIsIkVycm9yIiwicG9wIiwiZmFpbGVkIiwiX19DRV9kZWZpbml0aW9uIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiX19DRV9pc0Nvbm5lY3RlZENhbGxiYWNrQ2FsbGVkIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsIm5hbWVzcGFjZSIsImluZGV4T2YiLCJEb2N1bWVudENvbnN0cnVjdGlvbk9ic2VydmVyIiwiaW50ZXJuYWxzIiwiZG9jIiwiX2ludGVybmFscyIsIl9kb2N1bWVudCIsIl9vYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJfaGFuZGxlTXV0YXRpb25zIiwiYmluZCIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwibXV0YXRpb25zIiwiYWRkZWROb2RlcyIsIkRlZmVycmVkIiwiX3ZhbHVlIiwiX3Jlc29sdmUiLCJfcHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5IiwiX2VsZW1lbnREZWZpbml0aW9uSXNSdW5uaW5nIiwiX3doZW5EZWZpbmVkRGVmZXJyZWQiLCJfZmx1c2hDYWxsYmFjayIsIl9mbHVzaFBlbmRpbmciLCJfdW5mbHVzaGVkTG9jYWxOYW1lcyIsIl9kb2N1bWVudENvbnN0cnVjdGlvbk9ic2VydmVyIiwiU3ludGF4RXJyb3IiLCJhZG9wdGVkQ2FsbGJhY2siLCJnZXRDYWxsYmFjayIsImNhbGxiYWNrVmFsdWUiLCJzZXREZWZpbml0aW9uIiwiX2ZsdXNoIiwic2hpZnQiLCJkZWZlcnJlZCIsInJlamVjdCIsInByaW9yIiwidG9Qcm9taXNlIiwib3V0ZXIiLCJpbm5lciIsImZsdXNoIiwiZGVmaW5lIiwid2hlbkRlZmluZWQiLCJwb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrIiwiY3JlYXRlRWxlbWVudE5TIiwiY2xvbmVOb2RlIiwiaW5zZXJ0QmVmb3JlIiwicmVtb3ZlQ2hpbGQiLCJyZXBsYWNlQ2hpbGQiLCJFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlTlMiLCJzZXRBdHRyaWJ1dGVOUyIsInJlbW92ZUF0dHJpYnV0ZU5TIiwiSFRNTEVsZW1lbnQiLCJBbHJlYWR5Q29uc3RydWN0ZWRNYXJrZXIiLCJjb25zdHJ1Y3RvclRvRGVmaW5pdGlvbiIsIk5hdGl2ZSIsIkRvY3VtZW50X2NyZWF0ZUVsZW1lbnQiLCJsYXN0SW5kZXgiLCJidWlsdEluIiwibm9kZXMiLCJjb25uZWN0ZWRCZWZvcmUiLCJmaWx0ZXIiLCJwcmVwZW5kIiwiZGlzY29ubmVjdFRyZWUiLCJjb25uZWN0VHJlZSIsImFwcGVuZCIsImRlZXAiLCJjbG9uZSIsIkRvY3VtZW50X2ltcG9ydE5vZGUiLCJwYXRjaFRyZWUiLCJOU19IVE1MIiwiRG9jdW1lbnRfY3JlYXRlRWxlbWVudE5TIiwiRG9jdW1lbnRfcHJlcGVuZCIsIkRvY3VtZW50X2FwcGVuZCIsInJlZk5vZGUiLCJEb2N1bWVudEZyYWdtZW50IiwiaW5zZXJ0ZWROb2RlcyIsImNoaWxkTm9kZXMiLCJuYXRpdmVSZXN1bHQiLCJOb2RlX2luc2VydEJlZm9yZSIsIm5vZGVXYXNDb25uZWN0ZWQiLCJOb2RlX2FwcGVuZENoaWxkIiwiTm9kZV9jbG9uZU5vZGUiLCJvd25lckRvY3VtZW50IiwiTm9kZV9yZW1vdmVDaGlsZCIsIm5vZGVUb0luc2VydCIsIm5vZGVUb1JlbW92ZSIsIk5vZGVfcmVwbGFjZUNoaWxkIiwibm9kZVRvSW5zZXJ0V2FzQ29ubmVjdGVkIiwidGhpc0lzQ29ubmVjdGVkIiwicGF0Y2hfdGV4dENvbnRlbnQiLCJiYXNlRGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJhc3NpZ25lZFZhbHVlIiwiVEVYVF9OT0RFIiwicmVtb3ZlZE5vZGVzIiwiY2hpbGROb2Rlc0xlbmd0aCIsIk5vZGVfdGV4dENvbnRlbnQiLCJhZGRQYXRjaCIsInBhcnRzIiwidGV4dENvbnRlbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImJlZm9yZSIsImFmdGVyIiwid2FzQ29ubmVjdGVkIiwicmVwbGFjZVdpdGgiLCJyZW1vdmUiLCJFbGVtZW50X2F0dGFjaFNoYWRvdyIsImluaXQiLCJ3YXJuIiwicGF0Y2hfaW5uZXJIVE1MIiwiaHRtbFN0cmluZyIsInJlbW92ZWRFbGVtZW50cyIsIkVsZW1lbnRfaW5uZXJIVE1MIiwiSFRNTEVsZW1lbnRfaW5uZXJIVE1MIiwicmF3RGl2IiwiaW5uZXJIVE1MIiwiY29udGVudCIsIkVsZW1lbnRfc2V0QXR0cmlidXRlIiwiRWxlbWVudF9nZXRBdHRyaWJ1dGUiLCJFbGVtZW50X3NldEF0dHJpYnV0ZU5TIiwiRWxlbWVudF9nZXRBdHRyaWJ1dGVOUyIsIkVsZW1lbnRfcmVtb3ZlQXR0cmlidXRlIiwiRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGVOUyIsInBhdGNoX2luc2VydEFkamFjZW50RWxlbWVudCIsImJhc2VNZXRob2QiLCJ3aGVyZSIsImluc2VydGVkRWxlbWVudCIsIkhUTUxFbGVtZW50X2luc2VydEFkamFjZW50RWxlbWVudCIsIkVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiRWxlbWVudF9wcmVwZW5kIiwiRWxlbWVudF9hcHBlbmQiLCJFbGVtZW50X2JlZm9yZSIsIkVsZW1lbnRfYWZ0ZXIiLCJFbGVtZW50X3JlcGxhY2VXaXRoIiwiRWxlbWVudF9yZW1vdmUiLCJwcmlvckN1c3RvbUVsZW1lbnRzIiwiSnNNdXRhdGlvbk9ic2VydmVyIiwicmVnaXN0cmF0aW9uc1RhYmxlIiwic2V0SW1tZWRpYXRlIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwic2V0VGltZW91dCIsInNldEltbWVkaWF0ZVF1ZXVlIiwic2VudGluZWwiLCJxdWV1ZSIsImZ1bmMiLCJwb3N0TWVzc2FnZSIsImlzU2NoZWR1bGVkIiwic2NoZWR1bGVkT2JzZXJ2ZXJzIiwic2NoZWR1bGVDYWxsYmFjayIsIm9ic2VydmVyIiwiZGlzcGF0Y2hDYWxsYmFja3MiLCJ3cmFwSWZOZWVkZWQiLCJTaGFkb3dET01Qb2x5ZmlsbCIsIm9ic2VydmVycyIsInNvcnQiLCJvMSIsIm8yIiwidWlkXyIsImFueU5vbkVtcHR5IiwidGFrZVJlY29yZHMiLCJjYWxsYmFja18iLCJyZW1vdmVUcmFuc2llbnRPYnNlcnZlcnNGb3IiLCJub2Rlc18iLCJyZWdpc3RyYXRpb25zIiwicmVnaXN0cmF0aW9uIiwicmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzIiwiZm9yRWFjaEFuY2VzdG9yQW5kT2JzZXJ2ZXJFbnF1ZXVlUmVjb3JkIiwib3B0aW9ucyIsInN1YnRyZWUiLCJyZWNvcmQiLCJlbnF1ZXVlIiwidWlkQ291bnRlciIsInJlY29yZHNfIiwiY2hpbGRMaXN0IiwiYXR0cmlidXRlcyIsImNoYXJhY3RlckRhdGEiLCJhdHRyaWJ1dGVPbGRWYWx1ZSIsImF0dHJpYnV0ZUZpbHRlciIsImNoYXJhY3RlckRhdGFPbGRWYWx1ZSIsInJlbW92ZUxpc3RlbmVycyIsIlJlZ2lzdHJhdGlvbiIsImFkZExpc3RlbmVycyIsImNvcHlPZlJlY29yZHMiLCJNdXRhdGlvblJlY29yZCIsInByZXZpb3VzU2libGluZyIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVOYW1lc3BhY2UiLCJjb3B5TXV0YXRpb25SZWNvcmQiLCJjdXJyZW50UmVjb3JkIiwicmVjb3JkV2l0aE9sZFZhbHVlIiwiZ2V0UmVjb3JkIiwiZ2V0UmVjb3JkV2l0aE9sZFZhbHVlIiwiY2xlYXJSZWNvcmRzIiwicmVjb3JkUmVwcmVzZW50c0N1cnJlbnRNdXRhdGlvbiIsInNlbGVjdFJlY29yZCIsImxhc3RSZWNvcmQiLCJuZXdSZWNvcmQiLCJ0cmFuc2llbnRPYnNlcnZlZE5vZGVzIiwicmVjb3JkcyIsInJlY29yZFRvUmVwbGFjZUxhc3QiLCJhZGRMaXN0ZW5lcnNfIiwicmVtb3ZlTGlzdGVuZXJzXyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJhdHRyTmFtZSIsInJlbGF0ZWROb2RlIiwibmFtZXNwYWNlVVJJIiwiYXR0ckNoYW5nZSIsIk11dGF0aW9uRXZlbnQiLCJBRERJVElPTiIsInByZXZWYWx1ZSIsImFkZFRyYW5zaWVudE9ic2VydmVyIiwiY2hhbmdlZE5vZGUiLCJfaXNQb2x5ZmlsbGVkIiwibmV4dEhhbmRsZSIsInRhc2tzQnlIYW5kbGUiLCJjdXJyZW50bHlSdW5uaW5nQVRhc2siLCJhZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzIiwiYXJncyIsInBhcnRpYWxseUFwcGxpZWQiLCJoYW5kbGVyIiwicnVuSWZQcmVzZW50IiwiaGFuZGxlIiwidGFzayIsImNsZWFySW1tZWRpYXRlIiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJuZXh0VGljayIsImNhblVzZVBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJvbkdsb2JhbE1lc3NhZ2UiLCJldmVudCIsImF0dGFjaEV2ZW50IiwiaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24iLCJjaGFubmVsIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsInBvcnQyIiwiaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbiIsImh0bWwiLCJzY3JpcHQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uIiwiYXR0YWNoVG8iLCJwcm9jZXNzIiwiREVGQVVMVF9WSUVXUE9SVCIsIlZpZXdwb3J0Iiwidmlld3BvcnRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWQiLCJlbnN1cmVWaWV3cG9ydEVsZW1lbnQiLCJoYXNBdHRyaWJ1dGUiLCJzZXR1cCIsIm9ucyIsIl9vbnNMb2FkZWQiLCJfdXRpbCIsInJlYWR5IiwiZW5hYmxlRGV2aWNlQmFja0J1dHRvbkhhbmRsZXIiLCJfZGVmYXVsdERldmljZUJhY2tCdXR0b25IYW5kbGVyIiwiX2ludGVybmFsIiwiZGJiRGlzcGF0Y2hlciIsImNyZWF0ZUhhbmRsZXIiLCJib2R5IiwiYXBwIiwiZXhpdEFwcCIsIl9nZXN0dXJlRGV0ZWN0b3IiLCJHZXN0dXJlRGV0ZWN0b3IiLCJwYXNzaXZlIiwicGxhdGZvcm0iLCJpc1dlYlZpZXciLCJrZXlDb2RlIiwiZmlyZURldmljZUJhY2tCdXR0b25FdmVudCIsIl9zZXR1cExvYWRpbmdQbGFjZUhvbGRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsSUFBSUEsT0FBT0MsY0FBWCxFQUEyQjs7V0FDaEJBLGNBQVAsQ0FBc0JDLGFBQXRCLEdBQXNDLElBQXRDOzs7Ozs7Ozs7TUNEQUMsU0FBU0MsY0FBQSxHQUFpQixPQUFPSixNQUFQLElBQWlCLFdBQWpCLElBQWdDQSxPQUFPSyxJQUFQLElBQWVBLElBQS9DLEdBQzFCTCxNQUQwQixHQUNqQixPQUFPTSxJQUFQLElBQWUsV0FBZixJQUE4QkEsS0FBS0QsSUFBTCxJQUFhQSxJQUEzQyxHQUFrREM7O0lBRTNEQyxTQUFTLGFBQVQsR0FISjtNQUlJLE9BQU9DLEdBQVAsSUFBYyxRQUFsQixFQUE0QkEsTUFBTUwsTUFBTjs7OztNQ0x4Qk0sT0FBT0wsY0FBQSxHQUFpQixFQUFFTSxTQUFTLFFBQVgsRUFBNUI7TUFDSSxPQUFPQyxHQUFQLElBQWMsUUFBbEIsRUFBNEJBLE1BQU1GLElBQU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Q1QixnQkFBaUIsa0JBQUEsQ0FBVUcsRUFBVixFQUFjO1NBQ3RCLFFBQU9BLEVBQVAseUNBQU9BLEVBQVAsT0FBYyxRQUFkLEdBQXlCQSxPQUFPLElBQWhDLEdBQXVDLE9BQU9BLEVBQVAsS0FBYyxVQUE1RDtDQURGOztBQ0NBLGdCQUFpQixrQkFBQSxDQUFVQSxFQUFWLEVBQWM7TUFDekIsQ0FBQ0MsVUFBU0QsRUFBVCxDQUFMLEVBQW1CLE1BQU1FLFVBQVVGLEtBQUssb0JBQWYsQ0FBTjtTQUNaQSxFQUFQO0NBRkY7O0FDREEsYUFBaUIsZUFBQSxDQUFVRyxJQUFWLEVBQWdCO01BQzNCO1dBQ0ssQ0FBQyxDQUFDQSxNQUFUO0dBREYsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7V0FDSCxJQUFQOztDQUpKOztBQ0FBO0FBQ0EsbUJBQWlCLENBQUNDLE9BQW9CLFlBQVk7U0FDekNDLE9BQU9DLGNBQVAsQ0FBc0IsRUFBdEIsRUFBMEIsR0FBMUIsRUFBK0IsRUFBRUMsS0FBSyxlQUFZO2FBQVMsQ0FBUDtLQUFyQixFQUEvQixFQUFtRUMsQ0FBbkUsSUFBd0UsQ0FBL0U7Q0FEZ0IsQ0FBbEI7O0FDQUEsSUFBSUMsYUFBV0wsUUFBcUJLLFFBQXBDOztBQUVBLElBQUlDLEtBQUtWLFVBQVNTLFVBQVQsS0FBc0JULFVBQVNTLFdBQVNFLGFBQWxCLENBQS9CO0FBQ0EsaUJBQWlCLG1CQUFBLENBQVVaLEVBQVYsRUFBYztTQUN0QlcsS0FBS0QsV0FBU0UsYUFBVCxDQUF1QlosRUFBdkIsQ0FBTCxHQUFrQyxFQUF6QztDQURGOztBQ0pBLG9CQUFpQixDQUFDSyxZQUFELElBQThCLENBQUNRLE9BQW9CLFlBQVk7U0FDdkVQLE9BQU9DLGNBQVAsQ0FBc0JPLFdBQXlCLEtBQXpCLENBQXRCLEVBQXVELEdBQXZELEVBQTRELEVBQUVOLEtBQUssZUFBWTthQUFTLENBQVA7S0FBckIsRUFBNUQsRUFBZ0dDLENBQWhHLElBQXFHLENBQTVHO0NBRDhDLENBQWhEOztBQ0FBOzs7O0FBSUEsbUJBQWlCLHFCQUFBLENBQVVULEVBQVYsRUFBY2UsQ0FBZCxFQUFpQjtNQUM1QixDQUFDZCxVQUFTRCxFQUFULENBQUwsRUFBbUIsT0FBT0EsRUFBUDtNQUNmZ0IsRUFBSixFQUFRQyxHQUFSO01BQ0lGLEtBQUssUUFBUUMsS0FBS2hCLEdBQUdrQixRQUFoQixLQUE2QixVQUFsQyxJQUFnRCxDQUFDakIsVUFBU2dCLE1BQU1ELEdBQUdHLElBQUgsQ0FBUW5CLEVBQVIsQ0FBZixDQUFyRCxFQUFrRixPQUFPaUIsR0FBUDtNQUM5RSxRQUFRRCxLQUFLaEIsR0FBR29CLE9BQWhCLEtBQTRCLFVBQTVCLElBQTBDLENBQUNuQixVQUFTZ0IsTUFBTUQsR0FBR0csSUFBSCxDQUFRbkIsRUFBUixDQUFmLENBQS9DLEVBQTRFLE9BQU9pQixHQUFQO01BQ3hFLENBQUNGLENBQUQsSUFBTSxRQUFRQyxLQUFLaEIsR0FBR2tCLFFBQWhCLEtBQTZCLFVBQW5DLElBQWlELENBQUNqQixVQUFTZ0IsTUFBTUQsR0FBR0csSUFBSCxDQUFRbkIsRUFBUixDQUFmLENBQXRELEVBQW1GLE9BQU9pQixHQUFQO1FBQzdFZixVQUFVLHlDQUFWLENBQU47Q0FORjs7QUNEQSxJQUFJbUIsS0FBS2YsT0FBT0MsY0FBaEI7O0FBRUEsUUFBWUYsZUFBNEJDLE9BQU9DLGNBQW5DLEdBQW9ELFNBQVNBLGNBQVQsQ0FBd0JlLENBQXhCLEVBQTJCQyxDQUEzQixFQUE4QkMsVUFBOUIsRUFBMEM7WUFDL0ZGLENBQVQ7TUFDSUcsYUFBWUYsQ0FBWixFQUFlLElBQWYsQ0FBSjtZQUNTQyxVQUFUO01BQ0lFLGFBQUosRUFBb0IsSUFBSTtXQUNmTCxHQUFHQyxDQUFILEVBQU1DLENBQU4sRUFBU0MsVUFBVCxDQUFQO0dBRGtCLENBRWxCLE9BQU9wQixDQUFQLEVBQVU7TUFDUixTQUFTb0IsVUFBVCxJQUF1QixTQUFTQSxVQUFwQyxFQUFnRCxNQUFNdEIsVUFBVSwwQkFBVixDQUFOO01BQzVDLFdBQVdzQixVQUFmLEVBQTJCRixFQUFFQyxDQUFGLElBQU9DLFdBQVdHLEtBQWxCO1NBQ3BCTCxDQUFQO0NBVEY7Ozs7OztBQ0xBLG9CQUFpQixzQkFBQSxDQUFVTSxNQUFWLEVBQWtCRCxLQUFsQixFQUF5QjtTQUNqQztnQkFDTyxFQUFFQyxTQUFTLENBQVgsQ0FEUDtrQkFFUyxFQUFFQSxTQUFTLENBQVgsQ0FGVDtjQUdLLEVBQUVBLFNBQVMsQ0FBWCxDQUhMO1dBSUVEO0dBSlQ7Q0FERjs7QUNFQSxZQUFpQnRCLGVBQTRCLFVBQVV3QixNQUFWLEVBQWtCQyxHQUFsQixFQUF1QkgsS0FBdkIsRUFBOEI7U0FDbEVOLFVBQUdVLENBQUgsQ0FBS0YsTUFBTCxFQUFhQyxHQUFiLEVBQWtCRSxjQUFXLENBQVgsRUFBY0wsS0FBZCxDQUFsQixDQUFQO0NBRGUsR0FFYixVQUFVRSxNQUFWLEVBQWtCQyxHQUFsQixFQUF1QkgsS0FBdkIsRUFBOEI7U0FDekJHLEdBQVAsSUFBY0gsS0FBZDtTQUNPRSxNQUFQO0NBSkY7O0FDRkEsSUFBSUksaUJBQWlCLEdBQUdBLGNBQXhCO0FBQ0EsV0FBaUIsYUFBQSxDQUFVakMsRUFBVixFQUFjOEIsR0FBZCxFQUFtQjtTQUMzQkcsZUFBZWQsSUFBZixDQUFvQm5CLEVBQXBCLEVBQXdCOEIsR0FBeEIsQ0FBUDtDQURGOztBQ0RBLElBQUlJLEtBQUssQ0FBVDtBQUNBLElBQUlDLEtBQUsxQyxLQUFLMkMsTUFBTCxFQUFUO0FBQ0EsV0FBaUIsYUFBQSxDQUFVTixHQUFWLEVBQWU7U0FDdkIsVUFBVU8sTUFBVixDQUFpQlAsUUFBUVEsU0FBUixHQUFvQixFQUFwQixHQUF5QlIsR0FBMUMsRUFBK0MsSUFBL0MsRUFBcUQsQ0FBQyxFQUFFSSxFQUFGLEdBQU9DLEVBQVIsRUFBWWpCLFFBQVosQ0FBcUIsRUFBckIsQ0FBckQsQ0FBUDtDQURGOztBQ0ZBLGVBQWlCLEtBQWpCOzs7TUNFSXFCLFNBQVMsb0JBQWI7TUFDSUMsUUFBUWpELFFBQU9nRCxNQUFQLE1BQW1CaEQsUUFBT2dELE1BQVAsSUFBaUIsRUFBcEMsQ0FBWjs7R0FFQy9DLGNBQUEsR0FBaUIsVUFBVXNDLEdBQVYsRUFBZUgsS0FBZixFQUFzQjtXQUMvQmEsTUFBTVYsR0FBTixNQUFlVSxNQUFNVixHQUFOLElBQWFILFVBQVVXLFNBQVYsR0FBc0JYLEtBQXRCLEdBQThCLEVBQTFELENBQVA7R0FERixFQUVHLFVBRkgsRUFFZSxFQUZmLEVBRW1CYyxJQUZuQixDQUV3QjthQUNiNUMsTUFBS0MsT0FEUTtVQUVoQk8sV0FBd0IsTUFBeEIsR0FBaUMsUUFGakI7ZUFHWDtHQUxiOzs7QUNMQSx3QkFBaUJBLFFBQXFCLDJCQUFyQixFQUFrRFYsU0FBU3VCLFFBQTNELENBQWpCOzs7TUNHSXdCLE1BQU1yQyxLQUFrQixLQUFsQixDQUFWOztNQUVJc0MsWUFBWSxVQUFoQjtNQUNJQyxNQUFNLENBQUMsS0FBS0MsaUJBQU4sRUFBaUJDLEtBQWpCLENBQXVCSCxTQUF2QixDQUFWOztRQUVtQkksYUFBbkIsR0FBbUMsVUFBVS9DLEVBQVYsRUFBYztXQUN4QzZDLGtCQUFVMUIsSUFBVixDQUFlbkIsRUFBZixDQUFQO0dBREY7O0dBSUNSLGNBQUEsR0FBaUIsVUFBVThCLENBQVYsRUFBYVEsR0FBYixFQUFrQmIsR0FBbEIsRUFBdUIrQixJQUF2QixFQUE2QjtRQUN6Q0MsYUFBYSxPQUFPaEMsR0FBUCxJQUFjLFVBQS9CO1FBQ0lnQyxVQUFKLEVBQWdCQyxLQUFJakMsR0FBSixFQUFTLE1BQVQsS0FBb0JrQyxNQUFLbEMsR0FBTCxFQUFVLE1BQVYsRUFBa0JhLEdBQWxCLENBQXBCO1FBQ1pSLEVBQUVRLEdBQUYsTUFBV2IsR0FBZixFQUFvQjtRQUNoQmdDLFVBQUosRUFBZ0JDLEtBQUlqQyxHQUFKLEVBQVN5QixHQUFULEtBQWlCUyxNQUFLbEMsR0FBTCxFQUFVeUIsR0FBVixFQUFlcEIsRUFBRVEsR0FBRixJQUFTLEtBQUtSLEVBQUVRLEdBQUYsQ0FBZCxHQUF1QmMsSUFBSVEsSUFBSixDQUFTQyxPQUFPdkIsR0FBUCxDQUFULENBQXRDLENBQWpCO1FBQ1pSLE1BQU0vQixPQUFWLEVBQWtCO1FBQ2R1QyxHQUFGLElBQVNiLEdBQVQ7S0FERixNQUVPLElBQUksQ0FBQytCLElBQUwsRUFBVzthQUNUMUIsRUFBRVEsR0FBRixDQUFQO1lBQ0tSLENBQUwsRUFBUVEsR0FBUixFQUFhYixHQUFiO0tBRkssTUFHQSxJQUFJSyxFQUFFUSxHQUFGLENBQUosRUFBWTtRQUNmQSxHQUFGLElBQVNiLEdBQVQ7S0FESyxNQUVBO1lBQ0FLLENBQUwsRUFBUVEsR0FBUixFQUFhYixHQUFiOzs7R0FiSixFQWdCR3RCLFNBQVMyRCxTQWhCWixFQWdCdUJYLFNBaEJ2QixFQWdCa0MsU0FBU3pCLFFBQVQsR0FBb0I7V0FDN0MsT0FBTyxJQUFQLElBQWUsVUFBZixJQUE2QixLQUFLd0IsR0FBTCxDQUE3QixJQUEwQ0csa0JBQVUxQixJQUFWLENBQWUsSUFBZixDQUFqRDtHQWpCRjs7O0FDWkEsaUJBQWlCLG1CQUFBLENBQVVuQixFQUFWLEVBQWM7TUFDekIsT0FBT0EsRUFBUCxJQUFhLFVBQWpCLEVBQTZCLE1BQU1FLFVBQVVGLEtBQUsscUJBQWYsQ0FBTjtTQUN0QkEsRUFBUDtDQUZGOztBQ0FBOztBQUVBLFdBQWlCLGFBQUEsQ0FBVWdCLEVBQVYsRUFBY3VDLElBQWQsRUFBb0JDLE1BQXBCLEVBQTRCO2FBQ2pDeEMsRUFBVjtNQUNJdUMsU0FBU2pCLFNBQWIsRUFBd0IsT0FBT3RCLEVBQVA7VUFDaEJ3QyxNQUFSO1NBQ08sQ0FBTDthQUFlLFVBQVUvQyxDQUFWLEVBQWE7ZUFDbkJPLEdBQUdHLElBQUgsQ0FBUW9DLElBQVIsRUFBYzlDLENBQWQsQ0FBUDtPQURNO1NBR0gsQ0FBTDthQUFlLFVBQVVBLENBQVYsRUFBYWdELENBQWIsRUFBZ0I7ZUFDdEJ6QyxHQUFHRyxJQUFILENBQVFvQyxJQUFSLEVBQWM5QyxDQUFkLEVBQWlCZ0QsQ0FBakIsQ0FBUDtPQURNO1NBR0gsQ0FBTDthQUFlLFVBQVVoRCxDQUFWLEVBQWFnRCxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjtlQUN6QjFDLEdBQUdHLElBQUgsQ0FBUW9DLElBQVIsRUFBYzlDLENBQWQsRUFBaUJnRCxDQUFqQixFQUFvQkMsQ0FBcEIsQ0FBUDtPQURNOztTQUlILHlCQUF5QjtXQUN2QjFDLEdBQUcyQyxLQUFILENBQVNKLElBQVQsRUFBZUssU0FBZixDQUFQO0dBREY7Q0FkRjs7QUNHQSxJQUFJQyxZQUFZLFdBQWhCOztBQUVBLElBQUlDLFVBQVUsU0FBVkEsT0FBVSxDQUFVQyxJQUFWLEVBQWdCQyxJQUFoQixFQUFzQkMsTUFBdEIsRUFBOEI7TUFDdENDLFlBQVlILE9BQU9ELFFBQVFLLENBQS9CO01BQ0lDLFlBQVlMLE9BQU9ELFFBQVFPLENBQS9CO01BQ0lDLFlBQVlQLE9BQU9ELFFBQVEvQyxDQUEvQjtNQUNJd0QsV0FBV1IsT0FBT0QsUUFBUXZDLENBQTlCO01BQ0lpRCxVQUFVVCxPQUFPRCxRQUFRVyxDQUE3QjtNQUNJQyxTQUFTTixZQUFZN0UsT0FBWixHQUFxQitFLFlBQVkvRSxRQUFPeUUsSUFBUCxNQUFpQnpFLFFBQU95RSxJQUFQLElBQWUsRUFBaEMsQ0FBWixHQUFrRCxDQUFDekUsUUFBT3lFLElBQVAsS0FBZ0IsRUFBakIsRUFBcUJILFNBQXJCLENBQXBGO01BQ0ljLFVBQVVQLFlBQVl2RSxLQUFaLEdBQW1CQSxNQUFLbUUsSUFBTCxNQUFlbkUsTUFBS21FLElBQUwsSUFBYSxFQUE1QixDQUFqQztNQUNJWSxXQUFXRCxRQUFRZCxTQUFSLE1BQXVCYyxRQUFRZCxTQUFSLElBQXFCLEVBQTVDLENBQWY7TUFDSS9CLEdBQUosRUFBUytDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQkMsR0FBbkI7TUFDSVgsU0FBSixFQUFlSCxTQUFTRCxJQUFUO09BQ1ZsQyxHQUFMLElBQVltQyxNQUFaLEVBQW9COztVQUVaLENBQUNDLFNBQUQsSUFBY1EsTUFBZCxJQUF3QkEsT0FBTzVDLEdBQVAsTUFBZ0JRLFNBQTlDOztVQUVNLENBQUN1QyxNQUFNSCxNQUFOLEdBQWVULE1BQWhCLEVBQXdCbkMsR0FBeEIsQ0FBTjs7VUFFTTBDLFdBQVdLLEdBQVgsR0FBaUJHLEtBQUlGLEdBQUosRUFBU3ZGLE9BQVQsQ0FBakIsR0FBb0NnRixZQUFZLE9BQU9PLEdBQVAsSUFBYyxVQUExQixHQUF1Q0UsS0FBSXJGLFNBQVN3QixJQUFiLEVBQW1CMkQsR0FBbkIsQ0FBdkMsR0FBaUVBLEdBQTNHOztRQUVJSixNQUFKLEVBQVlPLFVBQVNQLE1BQVQsRUFBaUI1QyxHQUFqQixFQUFzQmdELEdBQXRCLEVBQTJCZixPQUFPRCxRQUFRb0IsQ0FBMUM7O1FBRVJQLFFBQVE3QyxHQUFSLEtBQWdCZ0QsR0FBcEIsRUFBeUIzQixNQUFLd0IsT0FBTCxFQUFjN0MsR0FBZCxFQUFtQmlELEdBQW5CO1FBQ3JCUixZQUFZSyxTQUFTOUMsR0FBVCxLQUFpQmdELEdBQWpDLEVBQXNDRixTQUFTOUMsR0FBVCxJQUFnQmdELEdBQWhCOztDQXRCMUM7QUF5QkF2RixRQUFPTSxJQUFQLEdBQWNBLEtBQWQ7O0FBRUFpRSxRQUFRSyxDQUFSLEdBQVksQ0FBWjtBQUNBTCxRQUFRTyxDQUFSLEdBQVksQ0FBWjtBQUNBUCxRQUFRL0MsQ0FBUixHQUFZLENBQVo7QUFDQStDLFFBQVF2QyxDQUFSLEdBQVksQ0FBWjtBQUNBdUMsUUFBUVcsQ0FBUixHQUFZLEVBQVo7QUFDQVgsUUFBUXFCLENBQVIsR0FBWSxFQUFaO0FBQ0FyQixRQUFRb0IsQ0FBUixHQUFZLEVBQVo7QUFDQXBCLFFBQVFzQixDQUFSLEdBQVksR0FBWjtBQUNBLGNBQWlCdEIsT0FBakI7O0FDMUNBLFVBQVksR0FBR3VCLG9CQUFmOzs7Ozs7QUNBQSxJQUFJbkUsV0FBVyxHQUFHQSxRQUFsQjs7QUFFQSxXQUFpQixhQUFBLENBQVVsQixFQUFWLEVBQWM7U0FDdEJrQixTQUFTQyxJQUFULENBQWNuQixFQUFkLEVBQWtCc0YsS0FBbEIsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBQyxDQUE1QixDQUFQO0NBREY7O0FDRkE7OztBQUdBLGVBQWlCaEYsT0FBTyxHQUFQLEVBQVkrRSxvQkFBWixDQUFpQyxDQUFqQyxJQUFzQy9FLE1BQXRDLEdBQStDLFVBQVVOLEVBQVYsRUFBYztTQUNyRXVGLEtBQUl2RixFQUFKLEtBQVcsUUFBWCxHQUFzQkEsR0FBRzhDLEtBQUgsQ0FBUyxFQUFULENBQXRCLEdBQXFDeEMsT0FBT04sRUFBUCxDQUE1QztDQURGOztBQ0hBO0FBQ0EsZUFBaUIsaUJBQUEsQ0FBVUEsRUFBVixFQUFjO01BQ3pCQSxNQUFNc0MsU0FBVixFQUFxQixNQUFNcEMsVUFBVSwyQkFBMkJGLEVBQXJDLENBQU47U0FDZEEsRUFBUDtDQUZGOztBQ0RBOzs7QUFHQSxpQkFBaUIsbUJBQUEsQ0FBVUEsRUFBVixFQUFjO1NBQ3RCd0YsU0FBUUMsU0FBUXpGLEVBQVIsQ0FBUixDQUFQO0NBREY7O0FDR0EsSUFBSTBGLE9BQU9wRixPQUFPcUYsd0JBQWxCOztBQUVBLFVBQVl0RixlQUE0QnFGLElBQTVCLEdBQW1DLFNBQVNDLHdCQUFULENBQWtDckUsQ0FBbEMsRUFBcUNDLENBQXJDLEVBQXdDO01BQ2pGcUUsV0FBVXRFLENBQVYsQ0FBSjtNQUNJRyxhQUFZRixDQUFaLEVBQWUsSUFBZixDQUFKO01BQ0lHLGFBQUosRUFBb0IsSUFBSTtXQUNmZ0UsS0FBS3BFLENBQUwsRUFBUUMsQ0FBUixDQUFQO0dBRGtCLENBRWxCLE9BQU9uQixDQUFQLEVBQVU7TUFDUjhDLEtBQUk1QixDQUFKLEVBQU9DLENBQVAsQ0FBSixFQUFlLE9BQU9TLGNBQVcsQ0FBQzZELFdBQUk5RCxDQUFKLENBQU1aLElBQU4sQ0FBV0csQ0FBWCxFQUFjQyxDQUFkLENBQVosRUFBOEJELEVBQUVDLENBQUYsQ0FBOUIsQ0FBUDtDQU5qQjs7Ozs7O0FDUkE7OztBQUlBLElBQUl1RSxRQUFRLFNBQVJBLEtBQVEsQ0FBVXhFLENBQVYsRUFBYXlFLEtBQWIsRUFBb0I7WUFDckJ6RSxDQUFUO01BQ0ksQ0FBQ3JCLFVBQVM4RixLQUFULENBQUQsSUFBb0JBLFVBQVUsSUFBbEMsRUFBd0MsTUFBTTdGLFVBQVU2RixRQUFRLDJCQUFsQixDQUFOO0NBRjFDO0FBSUEsZ0JBQWlCO09BQ1Z6RixPQUFPMEYsY0FBUCxLQUEwQixlQUFlLEVBQWY7WUFDbkJDLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCQyxHQUF2QixFQUE0QjtRQUN0QjtZQUNJOUYsS0FBa0JWLFNBQVN3QixJQUEzQixFQUFpQ04sWUFBMEJrQixDQUExQixDQUE0QnpCLE9BQU9nRCxTQUFuQyxFQUE4QyxXQUE5QyxFQUEyRDZDLEdBQTVGLEVBQWlHLENBQWpHLENBQU47VUFDSUYsSUFBSixFQUFVLEVBQVY7Y0FDUSxFQUFFQSxnQkFBZ0JHLEtBQWxCLENBQVI7S0FIRixDQUlFLE9BQU9oRyxDQUFQLEVBQVU7Y0FBVSxJQUFSOztXQUNQLFNBQVM0RixjQUFULENBQXdCMUUsQ0FBeEIsRUFBMkJ5RSxLQUEzQixFQUFrQztZQUNqQ3pFLENBQU4sRUFBU3lFLEtBQVQ7VUFDSUcsS0FBSixFQUFXNUUsRUFBRStFLFNBQUYsR0FBY04sS0FBZCxDQUFYLEtBQ0tJLElBQUk3RSxDQUFKLEVBQU95RSxLQUFQO2FBQ0V6RSxDQUFQO0tBSkY7R0FORixDQVlFLEVBWkYsRUFZTSxLQVpOLENBRDZCLEdBYWRnQixTQWJaLENBRFU7U0FlUndEO0NBZlQ7O0FDUkE7O0FBRUFoQyxRQUFRQSxRQUFRL0MsQ0FBaEIsRUFBbUIsUUFBbkIsRUFBNkIsRUFBRWlGLGdCQUFnQjNGLFVBQXdCOEYsR0FBMUMsRUFBN0I7O0FDREEscUJBQWlCdEYsTUFBK0JQLE1BQS9CLENBQXNDMEYsY0FBdkQ7OztNQ0RJeEQsUUFBUW5DLFFBQXFCLEtBQXJCLENBQVo7O01BRUlpRyxVQUFTekYsUUFBcUJ5RixNQUFsQztNQUNJQyxhQUFhLE9BQU9ELE9BQVAsSUFBaUIsVUFBbEM7O01BRUlFLFdBQVdoSCxjQUFBLEdBQWlCLFVBQVV3RSxJQUFWLEVBQWdCO1dBQ3ZDeEIsTUFBTXdCLElBQU4sTUFBZ0J4QixNQUFNd0IsSUFBTixJQUNyQnVDLGNBQWNELFFBQU90QyxJQUFQLENBQWQsSUFBOEIsQ0FBQ3VDLGFBQWFELE9BQWIsR0FBc0JHLElBQXZCLEVBQTRCLFlBQVl6QyxJQUF4QyxDQUR6QixDQUFQO0dBREY7O1dBS1N4QixLQUFULEdBQWlCQSxLQUFqQjs7O0FDVkE7O0FBRUEsSUFBSWtFLE1BQU1yRyxLQUFrQixhQUFsQixDQUFWOztBQUVBLElBQUlzRyxNQUFNcEIsS0FBSSxZQUFZO1NBQVMzQixTQUFQO0NBQWQsRUFBSixLQUE0QyxXQUF0RDs7O0FBR0EsSUFBSWdELFNBQVMsU0FBVEEsTUFBUyxDQUFVNUcsRUFBVixFQUFjOEIsR0FBZCxFQUFtQjtNQUMxQjtXQUNLOUIsR0FBRzhCLEdBQUgsQ0FBUDtHQURGLENBRUUsT0FBTzFCLENBQVAsRUFBVTtDQUhkOztBQU1BLGVBQWlCLGlCQUFBLENBQVVKLEVBQVYsRUFBYztNQUN6QnNCLENBQUosRUFBT3VGLENBQVAsRUFBVXBDLENBQVY7U0FDT3pFLE9BQU9zQyxTQUFQLEdBQW1CLFdBQW5CLEdBQWlDdEMsT0FBTyxJQUFQLEdBQWM7O0lBRWxELFFBQVE2RyxJQUFJRCxPQUFPdEYsSUFBSWhCLE9BQU9OLEVBQVAsQ0FBWCxFQUF1QjBHLEdBQXZCLENBQVosS0FBNEMsUUFBNUMsR0FBdURHOztJQUV2REYsTUFBTXBCLEtBQUlqRSxDQUFKOztJQUVOLENBQUNtRCxJQUFJYyxLQUFJakUsQ0FBSixDQUFMLEtBQWdCLFFBQWhCLElBQTRCLE9BQU9BLEVBQUV3RixNQUFULElBQW1CLFVBQS9DLEdBQTRELFdBQTVELEdBQTBFckMsQ0FOOUU7Q0FGRjs7OztBQ1ZBLElBQUl3QixPQUFPLEVBQVg7QUFDQUEsS0FBSzVGLEtBQWtCLGFBQWxCLENBQUwsSUFBeUMsR0FBekM7QUFDQSxJQUFJNEYsT0FBTyxFQUFQLElBQWEsWUFBakIsRUFBK0I7WUFDTjNGLE9BQU9nRCxTQUE5QixFQUF5QyxVQUF6QyxFQUFxRCxTQUFTcEMsUUFBVCxHQUFvQjtXQUNoRSxhQUFhNkYsU0FBUSxJQUFSLENBQWIsR0FBNkIsR0FBcEM7R0FERixFQUVHLElBRkg7OztBQ05GO0FBQ0EsSUFBSUMsT0FBT3ZILEtBQUt1SCxJQUFoQjtBQUNBLElBQUlDLFFBQVF4SCxLQUFLd0gsS0FBakI7QUFDQSxpQkFBaUIsbUJBQUEsQ0FBVWpILEVBQVYsRUFBYztTQUN0QmtILE1BQU1sSCxLQUFLLENBQUNBLEVBQVosSUFBa0IsQ0FBbEIsR0FBc0IsQ0FBQ0EsS0FBSyxDQUFMLEdBQVNpSCxLQUFULEdBQWlCRCxJQUFsQixFQUF3QmhILEVBQXhCLENBQTdCO0NBREY7O0FDREE7O0FBRUEsZ0JBQWlCLGtCQUFBLENBQVUyQyxTQUFWLEVBQXFCO1NBQzdCLFVBQVVZLElBQVYsRUFBZ0I0RCxHQUFoQixFQUFxQjtRQUN0QkMsSUFBSS9ELE9BQU9vQyxTQUFRbEMsSUFBUixDQUFQLENBQVI7UUFDSThELElBQUlDLFdBQVVILEdBQVYsQ0FBUjtRQUNJSSxJQUFJSCxFQUFFNUQsTUFBVjtRQUNJL0MsQ0FBSixFQUFPZ0QsQ0FBUDtRQUNJNEQsSUFBSSxDQUFKLElBQVNBLEtBQUtFLENBQWxCLEVBQXFCLE9BQU81RSxZQUFZLEVBQVosR0FBaUJMLFNBQXhCO1FBQ2pCOEUsRUFBRUksVUFBRixDQUFhSCxDQUFiLENBQUo7V0FDTzVHLElBQUksTUFBSixJQUFjQSxJQUFJLE1BQWxCLElBQTRCNEcsSUFBSSxDQUFKLEtBQVVFLENBQXRDLElBQTJDLENBQUM5RCxJQUFJMkQsRUFBRUksVUFBRixDQUFhSCxJQUFJLENBQWpCLENBQUwsSUFBNEIsTUFBdkUsSUFBaUY1RCxJQUFJLE1BQXJGLEdBQ0hkLFlBQVl5RSxFQUFFSyxNQUFGLENBQVNKLENBQVQsQ0FBWixHQUEwQjVHLENBRHZCLEdBRUhrQyxZQUFZeUUsRUFBRTlCLEtBQUYsQ0FBUStCLENBQVIsRUFBV0EsSUFBSSxDQUFmLENBQVosR0FBZ0MsQ0FBQzVHLElBQUksTUFBSixJQUFjLEVBQWYsS0FBc0JnRCxJQUFJLE1BQTFCLElBQW9DLE9BRnhFO0dBUEY7Q0FERjs7QUNKQSxpQkFBaUIsRUFBakI7O0FDQUE7O0FBRUEsSUFBSWlFLE1BQU1qSSxLQUFLaUksR0FBZjtBQUNBLGdCQUFpQixrQkFBQSxDQUFVMUgsRUFBVixFQUFjO1NBQ3RCQSxLQUFLLENBQUwsR0FBUzBILElBQUlKLFdBQVV0SCxFQUFWLENBQUosRUFBbUIsZ0JBQW5CLENBQVQsR0FBZ0QsQ0FBdkQsQ0FENkI7Q0FBL0I7O0FDRkEsSUFBSTJILE1BQU1sSSxLQUFLa0ksR0FBZjtBQUNBLElBQUlELFFBQU1qSSxLQUFLaUksR0FBZjtBQUNBLHVCQUFpQix5QkFBQSxDQUFVRSxLQUFWLEVBQWlCcEUsTUFBakIsRUFBeUI7VUFDaEM4RCxXQUFVTSxLQUFWLENBQVI7U0FDT0EsUUFBUSxDQUFSLEdBQVlELElBQUlDLFFBQVFwRSxNQUFaLEVBQW9CLENBQXBCLENBQVosR0FBcUNrRSxNQUFJRSxLQUFKLEVBQVdwRSxNQUFYLENBQTVDO0NBRkY7O0FDSEE7Ozs7QUFLQSxxQkFBaUIsdUJBQUEsQ0FBVXFFLFdBQVYsRUFBdUI7U0FDL0IsVUFBVUMsS0FBVixFQUFpQkMsRUFBakIsRUFBcUJDLFNBQXJCLEVBQWdDO1FBQ2pDMUcsSUFBSXNFLFdBQVVrQyxLQUFWLENBQVI7UUFDSXRFLFNBQVN5RSxVQUFTM0csRUFBRWtDLE1BQVgsQ0FBYjtRQUNJb0UsUUFBUU0saUJBQWdCRixTQUFoQixFQUEyQnhFLE1BQTNCLENBQVo7UUFDSTdCLEtBQUo7OztRQUdJa0csZUFBZUUsTUFBTUEsRUFBekIsRUFBNkIsT0FBT3ZFLFNBQVNvRSxLQUFoQixFQUF1QjtjQUMxQ3RHLEVBQUVzRyxPQUFGLENBQVI7O1VBRUlqRyxTQUFTQSxLQUFiLEVBQW9CLE9BQU8sSUFBUDs7S0FIdEIsTUFLTyxPQUFNNkIsU0FBU29FLEtBQWYsRUFBc0JBLE9BQXRCO1VBQW1DQyxlQUFlRCxTQUFTdEcsQ0FBNUIsRUFBK0I7WUFDL0RBLEVBQUVzRyxLQUFGLE1BQWFHLEVBQWpCLEVBQXFCLE9BQU9GLGVBQWVELEtBQWYsSUFBd0IsQ0FBL0I7O0tBQ3JCLE9BQU8sQ0FBQ0MsV0FBRCxJQUFnQixDQUFDLENBQXhCO0dBZEo7Q0FERjs7QUNMQSxJQUFJTSxTQUFTOUgsUUFBcUIsTUFBckIsQ0FBYjs7QUFFQSxpQkFBaUIsbUJBQUEsQ0FBVXlCLEdBQVYsRUFBZTtTQUN2QnFHLE9BQU9yRyxHQUFQLE1BQWdCcUcsT0FBT3JHLEdBQVAsSUFBYzJFLEtBQUkzRSxHQUFKLENBQTlCLENBQVA7Q0FERjs7QUNBQSxJQUFJc0csZUFBZS9ILGVBQTZCLEtBQTdCLENBQW5CO0FBQ0EsSUFBSWdJLGFBQVd4SCxXQUF5QixVQUF6QixDQUFmOztBQUVBLDBCQUFpQiw0QkFBQSxDQUFVZ0IsTUFBVixFQUFrQnlHLEtBQWxCLEVBQXlCO01BQ3BDaEgsSUFBSXNFLFdBQVUvRCxNQUFWLENBQVI7TUFDSXdGLElBQUksQ0FBUjtNQUNJa0IsU0FBUyxFQUFiO01BQ0l6RyxHQUFKO09BQ0tBLEdBQUwsSUFBWVIsQ0FBWjtRQUFtQlEsT0FBT3VHLFVBQVgsRUFBcUJuRixLQUFJNUIsQ0FBSixFQUFPUSxHQUFQLEtBQWV5RyxPQUFPOUYsSUFBUCxDQUFZWCxHQUFaLENBQWY7R0FMSTtTQU9qQ3dHLE1BQU05RSxNQUFOLEdBQWU2RCxDQUF0QjtRQUE2Qm5FLEtBQUk1QixDQUFKLEVBQU9RLE1BQU13RyxNQUFNakIsR0FBTixDQUFiLENBQUosRUFBOEI7T0FDcERlLGFBQWFHLE1BQWIsRUFBcUJ6RyxHQUFyQixDQUFELElBQThCeUcsT0FBTzlGLElBQVAsQ0FBWVgsR0FBWixDQUE5Qjs7R0FFRixPQUFPeUcsTUFBUDtDQVZGOztBQ0xBO0FBQ0EsbUJBQ0UsK0ZBRGUsQ0FFZnpGLEtBRmUsQ0FFVCxHQUZTLENBQWpCOztBQ0RBOzs7QUFJQSxrQkFBaUJ4QyxPQUFPa0ksSUFBUCxJQUFlLFNBQVNBLElBQVQsQ0FBY2xILENBQWQsRUFBaUI7U0FDeENtSCxvQkFBTW5ILENBQU4sRUFBU29ILFlBQVQsQ0FBUDtDQURGOztBQ0FBLGlCQUFpQnJJLGVBQTRCQyxPQUFPcUksZ0JBQW5DLEdBQXNELFNBQVNBLGdCQUFULENBQTBCckgsQ0FBMUIsRUFBNkJzSCxVQUE3QixFQUF5QztZQUNyR3RILENBQVQ7TUFDSWtILE9BQU9LLFlBQVFELFVBQVIsQ0FBWDtNQUNJcEYsU0FBU2dGLEtBQUtoRixNQUFsQjtNQUNJNkQsSUFBSSxDQUFSO01BQ0k5RixDQUFKO1NBQ09pQyxTQUFTNkQsQ0FBaEI7Y0FBc0J0RixDQUFILENBQUtULENBQUwsRUFBUUMsSUFBSWlILEtBQUtuQixHQUFMLENBQVosRUFBdUJ1QixXQUFXckgsQ0FBWCxDQUF2QjtHQUNuQixPQUFPRCxDQUFQO0NBUEY7O0FDSkEsSUFBSVosYUFBV0wsUUFBcUJLLFFBQXBDO0FBQ0EsWUFBaUJBLGNBQVlBLFdBQVNvSSxlQUF0Qzs7QUNEQTs7O0FBSUEsSUFBSVQsV0FBV2hJLFdBQXlCLFVBQXpCLENBQWY7QUFDQSxJQUFJMEksUUFBUSxTQUFSQSxLQUFRLEdBQVksYUFBeEI7QUFDQSxJQUFJbEYsY0FBWSxXQUFoQjs7O0FBR0EsSUFBSW1GLGNBQWEsc0JBQVk7O01BRXZCQyxTQUFTcEksV0FBeUIsUUFBekIsQ0FBYjtNQUNJd0csSUFBSXFCLGFBQVlsRixNQUFwQjtNQUNJMEYsS0FBSyxHQUFUO01BQ0lDLEtBQUssR0FBVDtNQUNJQyxjQUFKO1NBQ09DLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixNQUF2QjtRQUNtQkMsV0FBbkIsQ0FBK0JOLE1BQS9CO1NBQ09PLEdBQVAsR0FBYSxhQUFiLENBVDJCOzs7bUJBWVZQLE9BQU9RLGFBQVAsQ0FBcUIvSSxRQUF0QztpQkFDZWdKLElBQWY7aUJBQ2VDLEtBQWYsQ0FBcUJULEtBQUssUUFBTCxHQUFnQkMsRUFBaEIsR0FBcUIsbUJBQXJCLEdBQTJDRCxFQUEzQyxHQUFnRCxTQUFoRCxHQUE0REMsRUFBakY7aUJBQ2VTLEtBQWY7Z0JBQ2FSLGVBQWVqRixDQUE1QjtTQUNPa0QsR0FBUDtXQUFtQjJCLFlBQVduRixXQUFYLEVBQXNCNkUsYUFBWXJCLENBQVosQ0FBdEIsQ0FBUDtHQUNaLE9BQU8yQixhQUFQO0NBbEJGOztBQXFCQSxvQkFBaUIxSSxPQUFPdUosTUFBUCxJQUFpQixTQUFTQSxNQUFULENBQWdCdkksQ0FBaEIsRUFBbUJzSCxVQUFuQixFQUErQjtNQUMzREwsTUFBSjtNQUNJakgsTUFBTSxJQUFWLEVBQWdCO1VBQ1J1QyxXQUFOLElBQW1CaUcsVUFBU3hJLENBQVQsQ0FBbkI7YUFDUyxJQUFJeUgsS0FBSixFQUFUO1VBQ01sRixXQUFOLElBQW1CLElBQW5COztXQUVPd0UsUUFBUCxJQUFtQi9HLENBQW5CO0dBTEYsTUFNT2lILFNBQVNTLGFBQVQ7U0FDQUosZUFBZXRHLFNBQWYsR0FBMkJpRyxNQUEzQixHQUFvQ3dCLFdBQUl4QixNQUFKLEVBQVlLLFVBQVosQ0FBM0M7Q0FURjs7QUM5QkEsSUFBSW9CLE1BQU0zSixVQUF3QjBCLENBQWxDOztBQUVBLElBQUkyRSxRQUFNN0YsS0FBa0IsYUFBbEIsQ0FBVjs7QUFFQSxzQkFBaUIsd0JBQUEsQ0FBVWIsRUFBVixFQUFjaUssR0FBZCxFQUFtQkMsSUFBbkIsRUFBeUI7TUFDcENsSyxNQUFNLENBQUNrRCxLQUFJbEQsS0FBS2tLLE9BQU9sSyxFQUFQLEdBQVlBLEdBQUdzRCxTQUF4QixFQUFtQ29ELEtBQW5DLENBQVgsRUFBb0RzRCxJQUFJaEssRUFBSixFQUFRMEcsS0FBUixFQUFhLEVBQUV5RCxjQUFjLElBQWhCLEVBQXNCeEksT0FBT3NJLEdBQTdCLEVBQWI7Q0FEdEQ7O0FDQUEsSUFBSUcsb0JBQW9CLEVBQXhCOzs7QUFHQS9KLE1BQW1CK0osaUJBQW5CLEVBQXNDdkosS0FBa0IsVUFBbEIsQ0FBdEMsRUFBcUUsWUFBWTtTQUFTLElBQVA7Q0FBbkY7O0FBRUEsa0JBQWlCLG9CQUFBLENBQVV3SixXQUFWLEVBQXVCQyxJQUF2QixFQUE2QkMsSUFBN0IsRUFBbUM7Y0FDdENqSCxTQUFaLEdBQXdCdUcsY0FBT08saUJBQVAsRUFBMEIsRUFBRUcsTUFBTUMsY0FBVyxDQUFYLEVBQWNELElBQWQsQ0FBUixFQUExQixDQUF4QjtrQkFDZUYsV0FBZixFQUE0QkMsT0FBTyxXQUFuQztDQUZGOztBQ1RBOztBQUVBLGdCQUFpQixrQkFBQSxDQUFVdEssRUFBVixFQUFjO1NBQ3RCTSxPQUFPbUYsU0FBUXpGLEVBQVIsQ0FBUCxDQUFQO0NBREY7O0FDRkE7OztBQUdBLElBQUlxSSxhQUFXaEksV0FBeUIsVUFBekIsQ0FBZjtBQUNBLElBQUlvSyxjQUFjbkssT0FBT2dELFNBQXpCOztBQUVBLGlCQUFpQmhELE9BQU9vSyxjQUFQLElBQXlCLFVBQVVwSixDQUFWLEVBQWE7TUFDakRxSixVQUFTckosQ0FBVCxDQUFKO01BQ0k0QixLQUFJNUIsQ0FBSixFQUFPK0csVUFBUCxDQUFKLEVBQXNCLE9BQU8vRyxFQUFFK0csVUFBRixDQUFQO01BQ2xCLE9BQU8vRyxFQUFFc0osV0FBVCxJQUF3QixVQUF4QixJQUFzQ3RKLGFBQWFBLEVBQUVzSixXQUF6RCxFQUFzRTtXQUM3RHRKLEVBQUVzSixXQUFGLENBQWN0SCxTQUFyQjtHQUNBLE9BQU9oQyxhQUFhaEIsTUFBYixHQUFzQm1LLFdBQXRCLEdBQW9DLElBQTNDO0NBTEo7O0FDR0EsSUFBSUksV0FBV3hLLEtBQWtCLFVBQWxCLENBQWY7QUFDQSxJQUFJeUssUUFBUSxFQUFFLEdBQUd0QyxJQUFILElBQVcsVUFBVSxHQUFHQSxJQUFILEVBQXZCLENBQVo7QUFDQSxJQUFJdUMsY0FBYyxZQUFsQjtBQUNBLElBQUlDLE9BQU8sTUFBWDtBQUNBLElBQUlDLFNBQVMsUUFBYjs7QUFFQSxJQUFJQyxhQUFhLFNBQWJBLFVBQWEsR0FBWTtTQUFTLElBQVA7Q0FBL0I7O0FBRUEsa0JBQWlCLG9CQUFBLENBQVVDLElBQVYsRUFBZ0JiLElBQWhCLEVBQXNCRCxXQUF0QixFQUFtQ0UsSUFBbkMsRUFBeUNhLE9BQXpDLEVBQWtEQyxNQUFsRCxFQUEwREMsTUFBMUQsRUFBa0U7Y0FDckVqQixXQUFaLEVBQXlCQyxJQUF6QixFQUErQkMsSUFBL0I7TUFDSWdCLFlBQVksU0FBWkEsU0FBWSxDQUFVQyxJQUFWLEVBQWdCO1FBQzFCLENBQUNWLEtBQUQsSUFBVVUsUUFBUXpGLEtBQXRCLEVBQTZCLE9BQU9BLE1BQU15RixJQUFOLENBQVA7WUFDckJBLElBQVI7V0FDT1IsSUFBTDtlQUFrQixTQUFTeEMsSUFBVCxHQUFnQjtpQkFBUyxJQUFJNkIsV0FBSixDQUFnQixJQUFoQixFQUFzQm1CLElBQXRCLENBQVA7U0FBekI7V0FDTlAsTUFBTDtlQUFvQixTQUFTUSxNQUFULEdBQWtCO2lCQUFTLElBQUlwQixXQUFKLENBQWdCLElBQWhCLEVBQXNCbUIsSUFBdEIsQ0FBUDtTQUEzQjtLQUNiLE9BQU8sU0FBU0UsT0FBVCxHQUFtQjthQUFTLElBQUlyQixXQUFKLENBQWdCLElBQWhCLEVBQXNCbUIsSUFBdEIsQ0FBUDtLQUE1QjtHQUxKO01BT0k5RSxNQUFNNEQsT0FBTyxXQUFqQjtNQUNJcUIsYUFBYVAsV0FBV0gsTUFBNUI7TUFDSVcsYUFBYSxLQUFqQjtNQUNJN0YsUUFBUW9GLEtBQUs3SCxTQUFqQjtNQUNJdUksVUFBVTlGLE1BQU04RSxRQUFOLEtBQW1COUUsTUFBTWdGLFdBQU4sQ0FBbkIsSUFBeUNLLFdBQVdyRixNQUFNcUYsT0FBTixDQUFsRTtNQUNJVSxXQUFXRCxXQUFXTixVQUFVSCxPQUFWLENBQTFCO01BQ0lXLFdBQVdYLFVBQVUsQ0FBQ08sVUFBRCxHQUFjRyxRQUFkLEdBQXlCUCxVQUFVLFNBQVYsQ0FBbkMsR0FBMERqSixTQUF6RTtNQUNJMEosYUFBYTFCLFFBQVEsT0FBUixHQUFrQnZFLE1BQU0yRixPQUFOLElBQWlCRyxPQUFuQyxHQUE2Q0EsT0FBOUQ7TUFDSUksT0FBSixFQUFhbkssR0FBYixFQUFrQnNJLGlCQUFsQjs7TUFFSTRCLFVBQUosRUFBZ0I7d0JBQ010QixXQUFlc0IsV0FBVzdLLElBQVgsQ0FBZ0IsSUFBSWdLLElBQUosRUFBaEIsQ0FBZixDQUFwQjtRQUNJZixzQkFBc0I5SixPQUFPZ0QsU0FBN0IsSUFBMEM4RyxrQkFBa0JHLElBQWhFLEVBQXNFOztzQkFFckRILGlCQUFmLEVBQWtDMUQsR0FBbEMsRUFBdUMsSUFBdkM7O1VBRUksQ0FBQ3dGLFFBQUQsSUFBWSxPQUFPOUIsa0JBQWtCUyxRQUFsQixDQUFQLElBQXNDLFVBQXRELEVBQWtFMUgsTUFBS2lILGlCQUFMLEVBQXdCUyxRQUF4QixFQUFrQ0ssVUFBbEM7Ozs7TUFJbEVTLGNBQWNFLE9BQWQsSUFBeUJBLFFBQVE3SCxJQUFSLEtBQWlCaUgsTUFBOUMsRUFBc0Q7aUJBQ3ZDLElBQWI7ZUFDVyxTQUFTUSxNQUFULEdBQWtCO2FBQVNJLFFBQVExSyxJQUFSLENBQWEsSUFBYixDQUFQO0tBQS9COzs7TUFHRSxDQUFDLENBQUMrSyxRQUFELElBQVlaLE1BQWIsTUFBeUJSLFNBQVNjLFVBQVQsSUFBdUIsQ0FBQzdGLE1BQU04RSxRQUFOLENBQWpELENBQUosRUFBdUU7VUFDaEU5RSxLQUFMLEVBQVk4RSxRQUFaLEVBQXNCaUIsUUFBdEI7OzthQUdReEIsSUFBVixJQUFrQndCLFFBQWxCO2FBQ1VwRixHQUFWLElBQWlCd0UsVUFBakI7TUFDSUUsT0FBSixFQUFhO2NBQ0Q7Y0FDQU8sYUFBYUcsUUFBYixHQUF3QlAsVUFBVU4sTUFBVixDQUR4QjtZQUVGSSxTQUFTUyxRQUFULEdBQW9CUCxVQUFVUCxJQUFWLENBRmxCO2VBR0NlO0tBSFg7UUFLSVQsTUFBSixFQUFZLEtBQUt4SixHQUFMLElBQVltSyxPQUFaLEVBQXFCO1VBQzNCLEVBQUVuSyxPQUFPaUUsS0FBVCxDQUFKLEVBQXFCZCxVQUFTYyxLQUFULEVBQWdCakUsR0FBaEIsRUFBcUJtSyxRQUFRbkssR0FBUixDQUFyQjtLQUR2QixNQUVPZ0MsUUFBUUEsUUFBUXZDLENBQVIsR0FBWXVDLFFBQVFLLENBQVIsSUFBYTJHLFNBQVNjLFVBQXRCLENBQXBCLEVBQXVEdEIsSUFBdkQsRUFBNkQyQixPQUE3RDs7U0FFRkEsT0FBUDtDQWxERjs7QUNoQkEsSUFBSUUsTUFBTTlMLFVBQXdCLElBQXhCLENBQVY7OztBQUdBUSxZQUEwQndDLE1BQTFCLEVBQWtDLFFBQWxDLEVBQTRDLFVBQVUrSSxRQUFWLEVBQW9CO09BQ3pEQyxFQUFMLEdBQVVoSixPQUFPK0ksUUFBUCxDQUFWLENBRDhEO09BRXpERSxFQUFMLEdBQVUsQ0FBVixDQUY4RDs7Q0FBaEUsRUFJRyxZQUFZO01BQ1RoTCxJQUFJLEtBQUsrSyxFQUFiO01BQ0l6RSxRQUFRLEtBQUswRSxFQUFqQjtNQUNJQyxLQUFKO01BQ0kzRSxTQUFTdEcsRUFBRWtDLE1BQWYsRUFBdUIsT0FBTyxFQUFFN0IsT0FBT1csU0FBVCxFQUFvQmtLLE1BQU0sSUFBMUIsRUFBUDtVQUNmTCxJQUFJN0ssQ0FBSixFQUFPc0csS0FBUCxDQUFSO09BQ0swRSxFQUFMLElBQVdDLE1BQU0vSSxNQUFqQjtTQUNPLEVBQUU3QixPQUFPNEssS0FBVCxFQUFnQkMsTUFBTSxLQUF0QixFQUFQO0NBWEY7O0FDSkE7QUFDQSxJQUFJQyxjQUFjcE0sS0FBa0IsYUFBbEIsQ0FBbEI7QUFDQSxJQUFJcU0sYUFBYXRHLE1BQU05QyxTQUF2QjtBQUNBLElBQUlvSixXQUFXRCxXQUFYLEtBQTJCbkssU0FBL0IsRUFBMEN6QixNQUFtQjZMLFVBQW5CLEVBQStCRCxXQUEvQixFQUE0QyxFQUE1QztBQUMxQyx3QkFBaUIsMEJBQUEsQ0FBVTNLLEdBQVYsRUFBZTthQUNuQjJLLFdBQVgsRUFBd0IzSyxHQUF4QixJQUErQixJQUEvQjtDQURGOztBQ0pBLGdCQUFpQixrQkFBQSxDQUFVMEssSUFBVixFQUFnQjdLLEtBQWhCLEVBQXVCO1NBQy9CLEVBQUVBLE9BQU9BLEtBQVQsRUFBZ0I2SyxNQUFNLENBQUMsQ0FBQ0EsSUFBeEIsRUFBUDtDQURGOzs7Ozs7QUNVQSx5QkFBaUJuTSxZQUEwQitGLEtBQTFCLEVBQWlDLE9BQWpDLEVBQTBDLFVBQVVnRyxRQUFWLEVBQW9CWixJQUFwQixFQUEwQjtPQUM5RWEsRUFBTCxHQUFVekcsV0FBVXdHLFFBQVYsQ0FBVixDQURtRjtPQUU5RUUsRUFBTCxHQUFVLENBQVYsQ0FGbUY7T0FHOUVLLEVBQUwsR0FBVW5CLElBQVYsQ0FIbUY7O0NBQXBFLEVBS2QsWUFBWTtNQUNUbEssSUFBSSxLQUFLK0ssRUFBYjtNQUNJYixPQUFPLEtBQUttQixFQUFoQjtNQUNJL0UsUUFBUSxLQUFLMEUsRUFBTCxFQUFaO01BQ0ksQ0FBQ2hMLENBQUQsSUFBTXNHLFNBQVN0RyxFQUFFa0MsTUFBckIsRUFBNkI7U0FDdEI2SSxFQUFMLEdBQVUvSixTQUFWO1dBQ09zSyxVQUFLLENBQUwsQ0FBUDs7TUFFRXBCLFFBQVEsTUFBWixFQUFvQixPQUFPb0IsVUFBSyxDQUFMLEVBQVFoRixLQUFSLENBQVA7TUFDaEI0RCxRQUFRLFFBQVosRUFBc0IsT0FBT29CLFVBQUssQ0FBTCxFQUFRdEwsRUFBRXNHLEtBQUYsQ0FBUixDQUFQO1NBQ2ZnRixVQUFLLENBQUwsRUFBUSxDQUFDaEYsS0FBRCxFQUFRdEcsRUFBRXNHLEtBQUYsQ0FBUixDQUFSLENBQVA7Q0FmZSxFQWdCZCxRQWhCYyxDQUFqQjs7O0FBbUJBaUYsV0FBVUMsU0FBVixHQUFzQkQsV0FBVXpHLEtBQWhDOztBQUVBMkcsa0JBQWlCLE1BQWpCO0FBQ0FBLGtCQUFpQixRQUFqQjtBQUNBQSxrQkFBaUIsU0FBakI7O0FDMUJBLElBQUlsQyxhQUFXbUMsS0FBSSxVQUFKLENBQWY7QUFDQSxJQUFJQyxnQkFBZ0JELEtBQUksYUFBSixDQUFwQjtBQUNBLElBQUlFLGNBQWNMLFdBQVV6RyxLQUE1Qjs7QUFFQSxJQUFJK0csZUFBZTtlQUNKLElBREk7dUJBRUksS0FGSjtnQkFHSCxLQUhHO2tCQUlELEtBSkM7ZUFLSixLQUxJO2lCQU1GLEtBTkU7Z0JBT0gsSUFQRzt3QkFRSyxLQVJMO1lBU1AsS0FUTztxQkFVRSxLQVZGO2tCQVdELEtBWEM7bUJBWUEsS0FaQTtxQkFhRSxLQWJGO2FBY04sSUFkTTtpQkFlRixLQWZFO2dCQWdCSCxLQWhCRztZQWlCUCxJQWpCTztvQkFrQkMsS0FsQkQ7VUFtQlQsS0FuQlM7ZUFvQkosS0FwQkk7aUJBcUJGLEtBckJFO2lCQXNCRixLQXRCRTtrQkF1QkQsS0F2QkM7Z0JBd0JILEtBeEJHO2lCQXlCRixLQXpCRTtvQkEwQkMsS0ExQkQ7b0JBMkJDLEtBM0JEO2tCQTRCRCxJQTVCQztvQkE2QkMsS0E3QkQ7aUJBOEJGLEtBOUJFO2FBK0JOO0NBL0JiOztBQWtDQSxLQUFLLElBQUlDLGNBQWN2RSxZQUFRc0UsWUFBUixDQUFsQixFQUF5QzlGLElBQUksQ0FBbEQsRUFBcURBLElBQUkrRixZQUFZNUosTUFBckUsRUFBNkU2RCxHQUE3RSxFQUFrRjtNQUM1RWlELE9BQU84QyxZQUFZL0YsQ0FBWixDQUFYO01BQ0lnRyxXQUFXRixhQUFhN0MsSUFBYixDQUFmO01BQ0lnRCxhQUFhL04sUUFBTytLLElBQVAsQ0FBakI7TUFDSXZFLFFBQVF1SCxjQUFjQSxXQUFXaEssU0FBckM7TUFDSXhCLEdBQUo7TUFDSWlFLEtBQUosRUFBVztRQUNMLENBQUNBLE1BQU04RSxVQUFOLENBQUwsRUFBc0IxSCxNQUFLNEMsS0FBTCxFQUFZOEUsVUFBWixFQUFzQnFDLFdBQXRCO1FBQ2xCLENBQUNuSCxNQUFNa0gsYUFBTixDQUFMLEVBQTJCOUosTUFBSzRDLEtBQUwsRUFBWWtILGFBQVosRUFBMkIzQyxJQUEzQjtlQUNqQkEsSUFBVixJQUFrQjRDLFdBQWxCO1FBQ0lHLFFBQUosRUFBYyxLQUFLdkwsR0FBTCxJQUFZeUwsa0JBQVo7VUFBNEIsQ0FBQ3hILE1BQU1qRSxHQUFOLENBQUwsRUFBaUJtRCxVQUFTYyxLQUFULEVBQWdCakUsR0FBaEIsRUFBcUJ5TCxtQkFBV3pMLEdBQVgsQ0FBckIsRUFBc0MsSUFBdEM7Ozs7O0FDdEQzRCxtQkFBaUIscUJBQUEsQ0FBVTRDLE1BQVYsRUFBa0I4RSxHQUFsQixFQUF1QnhHLElBQXZCLEVBQTZCO09BQ3ZDLElBQUlsQixHQUFULElBQWdCMEgsR0FBaEI7Y0FBOEI5RSxNQUFULEVBQWlCNUMsR0FBakIsRUFBc0IwSCxJQUFJMUgsR0FBSixDQUF0QixFQUFnQ2tCLElBQWhDO0dBQ3JCLE9BQU8wQixNQUFQO0NBRkY7O0FDREEsa0JBQWlCLG9CQUFBLENBQVUxRSxFQUFWLEVBQWNxSyxXQUFkLEVBQTJCckcsSUFBM0IsRUFBaUN3SixjQUFqQyxFQUFpRDtNQUM1RCxFQUFFeE4sY0FBY3FLLFdBQWhCLEtBQWlDbUQsbUJBQW1CbEwsU0FBbkIsSUFBZ0NrTCxrQkFBa0J4TixFQUF2RixFQUE0RjtVQUNwRkUsVUFBVThELE9BQU8seUJBQWpCLENBQU47R0FDQSxPQUFPaEUsRUFBUDtDQUhKOztBQ0FBOztBQUVBLGdCQUFpQixrQkFBQSxDQUFVeU4sUUFBVixFQUFvQnpNLEVBQXBCLEVBQXdCVyxLQUF4QixFQUErQitKLE9BQS9CLEVBQXdDO01BQ25EO1dBQ0tBLFVBQVUxSyxHQUFHOEksVUFBU25JLEtBQVQsRUFBZ0IsQ0FBaEIsQ0FBSCxFQUF1QkEsTUFBTSxDQUFOLENBQXZCLENBQVYsR0FBNkNYLEdBQUdXLEtBQUgsQ0FBcEQ7O0dBREYsQ0FHRSxPQUFPdkIsQ0FBUCxFQUFVO1FBQ05zTixNQUFNRCxTQUFTLFFBQVQsQ0FBVjtRQUNJQyxRQUFRcEwsU0FBWixFQUF1QndILFVBQVM0RCxJQUFJdk0sSUFBSixDQUFTc00sUUFBVCxDQUFUO1VBQ2pCck4sQ0FBTjs7Q0FQSjs7QUNGQTs7QUFFQSxJQUFJeUssYUFBV3hLLEtBQWtCLFVBQWxCLENBQWY7QUFDQSxJQUFJcU0sZUFBYXRHLE1BQU05QyxTQUF2Qjs7QUFFQSxtQkFBaUIscUJBQUEsQ0FBVXRELEVBQVYsRUFBYztTQUN0QkEsT0FBT3NDLFNBQVAsS0FBcUJ1SyxXQUFVekcsS0FBVixLQUFvQnBHLEVBQXBCLElBQTBCME0sYUFBVzdCLFVBQVgsTUFBeUI3SyxFQUF4RSxDQUFQO0NBREY7O0FDSkEsSUFBSTZLLGFBQVd4SyxLQUFrQixVQUFsQixDQUFmOztBQUVBLDZCQUFpQlEsTUFBbUI4TSxpQkFBbkIsR0FBdUMsVUFBVTNOLEVBQVYsRUFBYztNQUNoRUEsTUFBTXNDLFNBQVYsRUFBcUIsT0FBT3RDLEdBQUc2SyxVQUFILEtBQ3ZCN0ssR0FBRyxZQUFILENBRHVCLElBRXZCNk0sV0FBVTlGLFNBQVEvRyxFQUFSLENBQVYsQ0FGZ0I7Q0FEdkI7OztNQ0dJNE4sUUFBUSxFQUFaO01BQ0lDLFNBQVMsRUFBYjtNQUNJbEosVUFBVW5GLGNBQUEsR0FBaUIsVUFBVXNPLFFBQVYsRUFBb0JwQyxPQUFwQixFQUE2QjFLLEVBQTdCLEVBQWlDdUMsSUFBakMsRUFBdUNzSCxRQUF2QyxFQUFpRDtRQUMxRWtELFNBQVNsRCxXQUFXLFlBQVk7YUFBU2lELFFBQVA7S0FBekIsR0FBOENFLHVCQUFVRixRQUFWLENBQTNEO1FBQ0kvTCxJQUFJaUQsS0FBSWhFLEVBQUosRUFBUXVDLElBQVIsRUFBY21JLFVBQVUsQ0FBVixHQUFjLENBQTVCLENBQVI7UUFDSTlELFFBQVEsQ0FBWjtRQUNJcEUsTUFBSixFQUFZb0osSUFBWixFQUFrQmEsUUFBbEIsRUFBNEJsRixNQUE1QjtRQUNJLE9BQU93RixNQUFQLElBQWlCLFVBQXJCLEVBQWlDLE1BQU03TixVQUFVNE4sV0FBVyxtQkFBckIsQ0FBTjs7UUFFN0JHLGFBQVlGLE1BQVosQ0FBSixFQUF5QixLQUFLdkssU0FBU3lFLFVBQVM2RixTQUFTdEssTUFBbEIsQ0FBZCxFQUF5Q0EsU0FBU29FLEtBQWxELEVBQXlEQSxPQUF6RCxFQUFrRTtlQUNoRjhELFVBQVUzSixFQUFFK0gsVUFBUzhDLE9BQU9rQixTQUFTbEcsS0FBVCxDQUFoQixFQUFpQyxDQUFqQyxDQUFGLEVBQXVDZ0YsS0FBSyxDQUFMLENBQXZDLENBQVYsR0FBNEQ3SyxFQUFFK0wsU0FBU2xHLEtBQVQsQ0FBRixDQUFyRTtVQUNJVyxXQUFXcUYsS0FBWCxJQUFvQnJGLFdBQVdzRixNQUFuQyxFQUEyQyxPQUFPdEYsTUFBUDtLQUY3QyxNQUdPLEtBQUtrRixXQUFXTSxPQUFPNU0sSUFBUCxDQUFZMk0sUUFBWixDQUFoQixFQUF1QyxDQUFDLENBQUNsQixPQUFPYSxTQUFTbEQsSUFBVCxFQUFSLEVBQXlCaUMsSUFBakUsR0FBd0U7ZUFDcEVyTCxVQUFLc00sUUFBTCxFQUFlMUwsQ0FBZixFQUFrQjZLLEtBQUtqTCxLQUF2QixFQUE4QitKLE9BQTlCLENBQVQ7VUFDSW5ELFdBQVdxRixLQUFYLElBQW9CckYsV0FBV3NGLE1BQW5DLEVBQTJDLE9BQU90RixNQUFQOztHQVovQztVQWVRcUYsS0FBUixHQUFnQkEsS0FBaEI7VUFDUUMsTUFBUixHQUFpQkEsTUFBakI7OztBQ3BCQSxJQUFJSyxVQUFVN04sS0FBa0IsU0FBbEIsQ0FBZDs7QUFFQSxrQkFBaUIsb0JBQUEsQ0FBVThOLEdBQVYsRUFBZTtNQUMxQkMsSUFBSTdPLFFBQU80TyxHQUFQLENBQVI7TUFDSUUsZ0JBQWVELENBQWYsSUFBb0IsQ0FBQ0EsRUFBRUYsT0FBRixDQUF6QixFQUFxQzdNLFVBQUdVLENBQUgsQ0FBS3FNLENBQUwsRUFBUUYsT0FBUixFQUFpQjtrQkFDdEMsSUFEc0M7U0FFL0MsZUFBWTthQUFTLElBQVA7O0dBRmdCO0NBRnZDOzs7TUNOSUksT0FBT2pPLEtBQWtCLE1BQWxCLENBQVg7O01BR0lrTyxVQUFVMU4sVUFBd0JrQixDQUF0QztNQUNJRyxLQUFLLENBQVQ7TUFDSXNNLGVBQWVsTyxPQUFPa08sWUFBUCxJQUF1QixZQUFZO1dBQzdDLElBQVA7R0FERjtNQUdJQyxTQUFTLENBQUMzTixPQUFvQixZQUFZO1dBQ3JDME4sYUFBYWxPLE9BQU9vTyxpQkFBUCxDQUF5QixFQUF6QixDQUFiLENBQVA7R0FEWSxDQUFkO01BR0lDLFVBQVUsU0FBVkEsT0FBVSxDQUFVM08sRUFBVixFQUFjO1lBQ2xCQSxFQUFSLEVBQVlzTyxJQUFaLEVBQWtCLEVBQUUzTSxPQUFPO1dBQ3RCLE1BQU0sRUFBRU8sRUFEYztXQUV0QixFQUZzQjtPQUFULEVBQWxCO0dBREY7TUFNSTBNLFVBQVUsU0FBVkEsT0FBVSxDQUFVNU8sRUFBVixFQUFjNkosTUFBZCxFQUFzQjs7UUFFOUIsQ0FBQzVKLFVBQVNELEVBQVQsQ0FBTCxFQUFtQixPQUFPLFFBQU9BLEVBQVAseUNBQU9BLEVBQVAsTUFBYSxRQUFiLEdBQXdCQSxFQUF4QixHQUE2QixDQUFDLE9BQU9BLEVBQVAsSUFBYSxRQUFiLEdBQXdCLEdBQXhCLEdBQThCLEdBQS9CLElBQXNDQSxFQUExRTtRQUNmLENBQUNrRCxLQUFJbEQsRUFBSixFQUFRc08sSUFBUixDQUFMLEVBQW9COztVQUVkLENBQUNFLGFBQWF4TyxFQUFiLENBQUwsRUFBdUIsT0FBTyxHQUFQOztVQUVuQixDQUFDNkosTUFBTCxFQUFhLE9BQU8sR0FBUDs7Y0FFTDdKLEVBQVI7O0tBRUEsT0FBT0EsR0FBR3NPLElBQUgsRUFBU2pILENBQWhCO0dBWEo7TUFhSXdILFVBQVUsU0FBVkEsT0FBVSxDQUFVN08sRUFBVixFQUFjNkosTUFBZCxFQUFzQjtRQUM5QixDQUFDM0csS0FBSWxELEVBQUosRUFBUXNPLElBQVIsQ0FBTCxFQUFvQjs7VUFFZCxDQUFDRSxhQUFheE8sRUFBYixDQUFMLEVBQXVCLE9BQU8sSUFBUDs7VUFFbkIsQ0FBQzZKLE1BQUwsRUFBYSxPQUFPLEtBQVA7O2NBRUw3SixFQUFSOztLQUVBLE9BQU9BLEdBQUdzTyxJQUFILEVBQVNRLENBQWhCO0dBVEo7O01BWUlDLFdBQVcsU0FBWEEsUUFBVyxDQUFVL08sRUFBVixFQUFjO1FBQ3ZCeU8sVUFBVU8sS0FBS0MsSUFBZixJQUF1QlQsYUFBYXhPLEVBQWIsQ0FBdkIsSUFBMkMsQ0FBQ2tELEtBQUlsRCxFQUFKLEVBQVFzTyxJQUFSLENBQWhELEVBQStESyxRQUFRM08sRUFBUjtXQUN4REEsRUFBUDtHQUZGO01BSUlnUCxPQUFPeFAsY0FBQSxHQUFpQjtTQUNyQjhPLElBRHFCO1VBRXBCLEtBRm9CO2FBR2pCTSxPQUhpQjthQUlqQkMsT0FKaUI7Y0FLaEJFO0dBTFo7Ozs7Ozs7OztBQzdDQSwwQkFBaUIsNEJBQUEsQ0FBVS9PLEVBQVYsRUFBY2tQLElBQWQsRUFBb0I7TUFDL0IsQ0FBQ2pQLFVBQVNELEVBQVQsQ0FBRCxJQUFpQkEsR0FBR3FNLEVBQUgsS0FBVTZDLElBQS9CLEVBQXFDLE1BQU1oUCxVQUFVLDRCQUE0QmdQLElBQTVCLEdBQW1DLFlBQTdDLENBQU47U0FDOUJsUCxFQUFQO0NBRkY7O0FDQUEsSUFBSXFCLE9BQUtoQixVQUF3QjBCLENBQWpDOztBQVVBLElBQUk2TSxVQUFVL04sTUFBbUIrTixPQUFqQzs7QUFFQSxJQUFJTyxPQUFPZCxlQUFjLElBQWQsR0FBcUIsTUFBaEM7O0FBRUEsSUFBSWUsV0FBVyxTQUFYQSxRQUFXLENBQVU3TCxJQUFWLEVBQWdCekIsR0FBaEIsRUFBcUI7O01BRTlCOEYsUUFBUWdILFFBQVE5TSxHQUFSLENBQVo7TUFDSXVOLEtBQUo7TUFDSXpILFVBQVUsR0FBZCxFQUFtQixPQUFPckUsS0FBSytJLEVBQUwsQ0FBUTFFLEtBQVIsQ0FBUDs7T0FFZHlILFFBQVE5TCxLQUFLK0wsRUFBbEIsRUFBc0JELEtBQXRCLEVBQTZCQSxRQUFRQSxNQUFNRSxDQUEzQyxFQUE4QztRQUN4Q0YsTUFBTUcsQ0FBTixJQUFXMU4sR0FBZixFQUFvQixPQUFPdU4sS0FBUDs7Q0FQeEI7O0FBV0Esd0JBQWlCO2tCQUNDLHdCQUFVSSxPQUFWLEVBQW1CbkYsSUFBbkIsRUFBeUJvRixNQUF6QixFQUFpQ0MsS0FBakMsRUFBd0M7UUFDbER2QixJQUFJcUIsUUFBUSxVQUFVbE0sSUFBVixFQUFnQnVLLFFBQWhCLEVBQTBCO2tCQUM3QnZLLElBQVgsRUFBaUI2SyxDQUFqQixFQUFvQjlELElBQXBCLEVBQTBCLElBQTFCO1dBQ0srQixFQUFMLEdBQVUvQixJQUFWLENBRndDO1dBR25DZ0MsRUFBTCxHQUFVekMsY0FBTyxJQUFQLENBQVYsQ0FId0M7V0FJbkN5RixFQUFMLEdBQVVoTixTQUFWLENBSndDO1dBS25Dc04sRUFBTCxHQUFVdE4sU0FBVixDQUx3QztXQU1uQzZNLElBQUwsSUFBYSxDQUFiLENBTndDO1VBT3BDckIsWUFBWXhMLFNBQWhCLEVBQTJCdU4sT0FBTS9CLFFBQU4sRUFBZ0I0QixNQUFoQixFQUF3Qm5NLEtBQUtvTSxLQUFMLENBQXhCLEVBQXFDcE0sSUFBckM7S0FQckIsQ0FBUjtpQkFTWTZLLEVBQUU5SyxTQUFkLEVBQXlCOzs7YUFHaEIsU0FBU3dNLEtBQVQsR0FBaUI7YUFDakIsSUFBSXZNLE9BQU93TSxvQkFBUyxJQUFULEVBQWV6RixJQUFmLENBQVgsRUFBaUMwRixPQUFPek0sS0FBSytJLEVBQTdDLEVBQWlEK0MsUUFBUTlMLEtBQUsrTCxFQUFuRSxFQUF1RUQsS0FBdkUsRUFBOEVBLFFBQVFBLE1BQU1FLENBQTVGLEVBQStGO2dCQUN2RlUsQ0FBTixHQUFVLElBQVY7Y0FDSVosTUFBTWEsQ0FBVixFQUFhYixNQUFNYSxDQUFOLEdBQVViLE1BQU1hLENBQU4sQ0FBUVgsQ0FBUixHQUFZak4sU0FBdEI7aUJBQ04wTixLQUFLWCxNQUFNaEksQ0FBWCxDQUFQOzthQUVHaUksRUFBTCxHQUFVL0wsS0FBS3FNLEVBQUwsR0FBVXROLFNBQXBCO2FBQ0s2TSxJQUFMLElBQWEsQ0FBYjtPQVZxQjs7O2dCQWNiLGlCQUFVck4sR0FBVixFQUFlO1lBQ25CeUIsT0FBT3dNLG9CQUFTLElBQVQsRUFBZXpGLElBQWYsQ0FBWDtZQUNJK0UsUUFBUUQsU0FBUzdMLElBQVQsRUFBZXpCLEdBQWYsQ0FBWjtZQUNJdU4sS0FBSixFQUFXO2NBQ0w5RSxPQUFPOEUsTUFBTUUsQ0FBakI7Y0FDSVksT0FBT2QsTUFBTWEsQ0FBakI7aUJBQ08zTSxLQUFLK0ksRUFBTCxDQUFRK0MsTUFBTWhJLENBQWQsQ0FBUDtnQkFDTTRJLENBQU4sR0FBVSxJQUFWO2NBQ0lFLElBQUosRUFBVUEsS0FBS1osQ0FBTCxHQUFTaEYsSUFBVDtjQUNOQSxJQUFKLEVBQVVBLEtBQUsyRixDQUFMLEdBQVNDLElBQVQ7Y0FDTjVNLEtBQUsrTCxFQUFMLElBQVdELEtBQWYsRUFBc0I5TCxLQUFLK0wsRUFBTCxHQUFVL0UsSUFBVjtjQUNsQmhILEtBQUtxTSxFQUFMLElBQVdQLEtBQWYsRUFBc0I5TCxLQUFLcU0sRUFBTCxHQUFVTyxJQUFWO2VBQ2pCaEIsSUFBTDtTQUNBLE9BQU8sQ0FBQyxDQUFDRSxLQUFUO09BM0JtQjs7O2VBK0JkLFNBQVNlLE9BQVQsQ0FBaUJDLFVBQWpCLDJCQUFzRDs0QkFDcEQsSUFBVCxFQUFlL0YsSUFBZjtZQUNJdkksSUFBSWlELEtBQUlxTCxVQUFKLEVBQWdCek0sVUFBVUosTUFBVixHQUFtQixDQUFuQixHQUF1QkksVUFBVSxDQUFWLENBQXZCLEdBQXNDdEIsU0FBdEQsRUFBaUUsQ0FBakUsQ0FBUjtZQUNJK00sS0FBSjtlQUNPQSxRQUFRQSxRQUFRQSxNQUFNRSxDQUFkLEdBQWtCLEtBQUtELEVBQXRDLEVBQTBDO1lBQ3RDRCxNQUFNaUIsQ0FBUixFQUFXakIsTUFBTUcsQ0FBakIsRUFBb0IsSUFBcEI7O2lCQUVPSCxTQUFTQSxNQUFNWSxDQUF0QjtvQkFBaUNaLE1BQU1hLENBQWQ7OztPQXRDTjs7O1dBMkNsQixTQUFTaE4sR0FBVCxDQUFhcEIsR0FBYixFQUFrQjtlQUNkLENBQUMsQ0FBQ3NOLFNBQVNXLG9CQUFTLElBQVQsRUFBZXpGLElBQWYsQ0FBVCxFQUErQnhJLEdBQS9CLENBQVQ7O0tBNUNKO1FBK0NJdU0sWUFBSixFQUFpQmhOLEtBQUcrTSxFQUFFOUssU0FBTCxFQUFnQixNQUFoQixFQUF3QjtXQUNsQyxlQUFZO2VBQ1J5TSxvQkFBUyxJQUFULEVBQWV6RixJQUFmLEVBQXFCNkUsSUFBckIsQ0FBUDs7S0FGYTtXQUtWZixDQUFQO0dBL0RhO09BaUVWLGFBQVU3SyxJQUFWLEVBQWdCekIsR0FBaEIsRUFBcUJILEtBQXJCLEVBQTRCO1FBQzNCME4sUUFBUUQsU0FBUzdMLElBQVQsRUFBZXpCLEdBQWYsQ0FBWjtRQUNJcU8sSUFBSixFQUFVdkksS0FBVjs7UUFFSXlILEtBQUosRUFBVztZQUNIaUIsQ0FBTixHQUFVM08sS0FBVjs7S0FERixNQUdPO1dBQ0FpTyxFQUFMLEdBQVVQLFFBQVE7V0FDYnpILFFBQVFnSCxRQUFROU0sR0FBUixFQUFhLElBQWIsQ0FESztXQUViQSxHQUZhO1dBR2JILEtBSGE7V0FJYndPLE9BQU81TSxLQUFLcU0sRUFKQztXQUtidE4sU0FMYTtXQU1iLEtBTmE7T0FBbEI7VUFRSSxDQUFDaUIsS0FBSytMLEVBQVYsRUFBYy9MLEtBQUsrTCxFQUFMLEdBQVVELEtBQVY7VUFDVmMsSUFBSixFQUFVQSxLQUFLWixDQUFMLEdBQVNGLEtBQVQ7V0FDTEYsSUFBTDs7VUFFSXZILFVBQVUsR0FBZCxFQUFtQnJFLEtBQUsrSSxFQUFMLENBQVExRSxLQUFSLElBQWlCeUgsS0FBakI7S0FDbkIsT0FBTzlMLElBQVA7R0F0Rlc7WUF3Rkw2TCxRQXhGSzthQXlGSixtQkFBVWhCLENBQVYsRUFBYTlELElBQWIsRUFBbUJvRixNQUFuQixFQUEyQjs7O2dCQUd4QnRCLENBQVosRUFBZTlELElBQWYsRUFBcUIsVUFBVThCLFFBQVYsRUFBb0JaLElBQXBCLEVBQTBCO1dBQ3hDYSxFQUFMLEdBQVUwRCxvQkFBUzNELFFBQVQsRUFBbUI5QixJQUFuQixDQUFWLENBRDZDO1dBRXhDcUMsRUFBTCxHQUFVbkIsSUFBVixDQUY2QztXQUd4Q29FLEVBQUwsR0FBVXROLFNBQVYsQ0FINkM7S0FBL0MsRUFJRyxZQUFZO1VBQ1RpQixPQUFPLElBQVg7VUFDSWlJLE9BQU9qSSxLQUFLb0osRUFBaEI7VUFDSTBDLFFBQVE5TCxLQUFLcU0sRUFBakI7O2FBRU9QLFNBQVNBLE1BQU1ZLENBQXRCO2dCQUFpQ1osTUFBTWEsQ0FBZDtPQUxaO1VBT1QsQ0FBQzNNLEtBQUs4SSxFQUFOLElBQVksRUFBRTlJLEtBQUtxTSxFQUFMLEdBQVVQLFFBQVFBLFFBQVFBLE1BQU1FLENBQWQsR0FBa0JoTSxLQUFLOEksRUFBTCxDQUFRaUQsRUFBOUMsQ0FBaEIsRUFBbUU7O2FBRTVEakQsRUFBTCxHQUFVL0osU0FBVjtlQUNPc0ssVUFBSyxDQUFMLENBQVA7OztVQUdFcEIsUUFBUSxNQUFaLEVBQW9CLE9BQU9vQixVQUFLLENBQUwsRUFBUXlDLE1BQU1HLENBQWQsQ0FBUDtVQUNoQmhFLFFBQVEsUUFBWixFQUFzQixPQUFPb0IsVUFBSyxDQUFMLEVBQVF5QyxNQUFNaUIsQ0FBZCxDQUFQO2FBQ2YxRCxVQUFLLENBQUwsRUFBUSxDQUFDeUMsTUFBTUcsQ0FBUCxFQUFVSCxNQUFNaUIsQ0FBaEIsQ0FBUixDQUFQO0tBbkJGLEVBb0JHWixTQUFTLFNBQVQsR0FBcUIsUUFwQnhCLEVBb0JrQyxDQUFDQSxNQXBCbkMsRUFvQjJDLElBcEIzQzs7O2dCQXVCV3BGLElBQVg7O0NBbkhKOztBQzFCQSxJQUFJTyxhQUFXeEssS0FBa0IsVUFBbEIsQ0FBZjtBQUNBLElBQUlrUSxlQUFlLEtBQW5COztBQUVBLElBQUk7TUFDRUMsUUFBUSxDQUFDLENBQUQsRUFBSTNGLFVBQUosR0FBWjtRQUNNLFFBQU4sSUFBa0IsWUFBWTttQkFBaUIsSUFBZjtHQUFoQzs7O0NBRkYsQ0FLRSxPQUFPekssQ0FBUCxFQUFVOztBQUVaLGtCQUFpQixvQkFBQSxDQUFVRCxJQUFWLEVBQWdCc1EsV0FBaEIsRUFBNkI7TUFDeEMsQ0FBQ0EsV0FBRCxJQUFnQixDQUFDRixZQUFyQixFQUFtQyxPQUFPLEtBQVA7TUFDL0J2TixPQUFPLEtBQVg7TUFDSTtRQUNFME4sTUFBTSxDQUFDLENBQUQsQ0FBVjtRQUNJQyxPQUFPRCxJQUFJN0YsVUFBSixHQUFYO1NBQ0tOLElBQUwsR0FBWSxZQUFZO2FBQVMsRUFBRWlDLE1BQU14SixPQUFPLElBQWYsRUFBUDtLQUExQjtRQUNJNkgsVUFBSixJQUFnQixZQUFZO2FBQVM4RixJQUFQO0tBQTlCO1NBQ0tELEdBQUw7R0FMRixDQU1FLE9BQU90USxDQUFQLEVBQVU7U0FDTDRDLElBQVA7Q0FWRjs7QUNUQSxJQUFJZ0QsbUJBQWlCM0YsVUFBd0I4RixHQUE3QztBQUNBLHlCQUFpQiwyQkFBQSxDQUFVNUMsSUFBVixFQUFnQm1CLE1BQWhCLEVBQXdCMEosQ0FBeEIsRUFBMkI7TUFDdENyTixJQUFJMkQsT0FBT2tHLFdBQWY7TUFDSXJKLENBQUo7TUFDSVIsTUFBTXFOLENBQU4sSUFBVyxPQUFPck4sQ0FBUCxJQUFZLFVBQXZCLElBQXFDLENBQUNRLElBQUlSLEVBQUV1QyxTQUFQLE1BQXNCOEssRUFBRTlLLFNBQTdELElBQTBFckQsVUFBU3NCLENBQVQsQ0FBMUUsSUFBeUZ5RSxnQkFBN0YsRUFBNkc7cUJBQzVGekMsSUFBZixFQUFxQmhDLENBQXJCO0dBQ0EsT0FBT2dDLElBQVA7Q0FMSjs7QUNZQSxrQkFBaUIsb0JBQUEsQ0FBVStHLElBQVYsRUFBZ0JtRixPQUFoQixFQUF5QnhELE9BQXpCLEVBQWtDMkUsTUFBbEMsRUFBMENsQixNQUExQyxFQUFrRG1CLE9BQWxELEVBQTJEO01BQ3RFMUYsT0FBTzVMLFFBQU8rSyxJQUFQLENBQVg7TUFDSThELElBQUlqRCxJQUFSO01BQ0l3RSxRQUFRRCxTQUFTLEtBQVQsR0FBaUIsS0FBN0I7TUFDSTNKLFFBQVFxSSxLQUFLQSxFQUFFOUssU0FBbkI7TUFDSWhDLElBQUksRUFBUjtNQUNJd1AsWUFBWSxTQUFaQSxTQUFZLENBQVUzQyxHQUFWLEVBQWU7UUFDekJuTixLQUFLK0UsTUFBTW9JLEdBQU4sQ0FBVDtjQUNTcEksS0FBVCxFQUFnQm9JLEdBQWhCLEVBQ0VBLE9BQU8sUUFBUCxHQUFrQixVQUFVMU4sQ0FBVixFQUFhO2FBQ3RCb1EsV0FBVyxDQUFDNVEsVUFBU1EsQ0FBVCxDQUFaLEdBQTBCLEtBQTFCLEdBQWtDTyxHQUFHRyxJQUFILENBQVEsSUFBUixFQUFjVixNQUFNLENBQU4sR0FBVSxDQUFWLEdBQWNBLENBQTVCLENBQXpDO0tBREYsR0FFSTBOLE9BQU8sS0FBUCxHQUFlLFNBQVNqTCxHQUFULENBQWF6QyxDQUFiLEVBQWdCO2FBQzFCb1EsV0FBVyxDQUFDNVEsVUFBU1EsQ0FBVCxDQUFaLEdBQTBCLEtBQTFCLEdBQWtDTyxHQUFHRyxJQUFILENBQVEsSUFBUixFQUFjVixNQUFNLENBQU4sR0FBVSxDQUFWLEdBQWNBLENBQTVCLENBQXpDO0tBREUsR0FFQTBOLE9BQU8sS0FBUCxHQUFlLFNBQVMzTixHQUFULENBQWFDLENBQWIsRUFBZ0I7YUFDMUJvUSxXQUFXLENBQUM1USxVQUFTUSxDQUFULENBQVosR0FBMEI2QixTQUExQixHQUFzQ3RCLEdBQUdHLElBQUgsQ0FBUSxJQUFSLEVBQWNWLE1BQU0sQ0FBTixHQUFVLENBQVYsR0FBY0EsQ0FBNUIsQ0FBN0M7S0FERSxHQUVBME4sT0FBTyxLQUFQLEdBQWUsU0FBUzRDLEdBQVQsQ0FBYXRRLENBQWIsRUFBZ0I7U0FBS1UsSUFBSCxDQUFRLElBQVIsRUFBY1YsTUFBTSxDQUFOLEdBQVUsQ0FBVixHQUFjQSxDQUE1QixFQUFnQyxPQUFPLElBQVA7S0FBakUsR0FDQSxTQUFTMEYsR0FBVCxDQUFhMUYsQ0FBYixFQUFnQmdELENBQWhCLEVBQW1CO1NBQUt0QyxJQUFILENBQVEsSUFBUixFQUFjVixNQUFNLENBQU4sR0FBVSxDQUFWLEdBQWNBLENBQTVCLEVBQStCZ0QsQ0FBL0IsRUFBbUMsT0FBTyxJQUFQO0tBUjlEO0dBRkY7TUFhSSxPQUFPMkssQ0FBUCxJQUFZLFVBQVosSUFBMEIsRUFBRXlDLFdBQVc5SyxNQUFNcUssT0FBTixJQUFpQixDQUFDWSxPQUFNLFlBQVk7UUFDekU1QyxDQUFKLEdBQVExQyxPQUFSLEdBQWtCbkIsSUFBbEI7R0FEMkQsQ0FBL0IsQ0FBOUIsRUFFSzs7UUFFQ3FHLE9BQU9LLGNBQVAsQ0FBc0J4QixPQUF0QixFQUErQm5GLElBQS9CLEVBQXFDb0YsTUFBckMsRUFBNkNDLEtBQTdDLENBQUo7aUJBQ1l2QixFQUFFOUssU0FBZCxFQUF5QjJJLE9BQXpCO1VBQ0tnRCxJQUFMLEdBQVksSUFBWjtHQU5GLE1BT087UUFDRGlDLFdBQVcsSUFBSTlDLENBQUosRUFBZjs7UUFFSStDLGlCQUFpQkQsU0FBU3ZCLEtBQVQsRUFBZ0JrQixVQUFVLEVBQVYsR0FBZSxDQUFDLENBQWhDLEVBQW1DLENBQW5DLEtBQXlDSyxRQUE5RDs7UUFFSUUsdUJBQXVCSixPQUFNLFlBQVk7ZUFBVzlOLEdBQVQsQ0FBYSxDQUFiO0tBQXBCLENBQTNCOztRQUVJbU8sbUJBQW1CQyxZQUFZLFVBQVVYLElBQVYsRUFBZ0I7VUFBTXZDLENBQUosQ0FBTXVDLElBQU47S0FBOUIsQ0FBdkIsQ0FQSzs7UUFTRFksYUFBYSxDQUFDVixPQUFELElBQVlHLE9BQU0sWUFBWTs7VUFFekNRLFlBQVksSUFBSXBELENBQUosRUFBaEI7VUFDSXhHLFFBQVEsQ0FBWjthQUNPQSxPQUFQO2tCQUEwQitILEtBQVYsRUFBaUIvSCxLQUFqQixFQUF3QkEsS0FBeEI7T0FDaEIsT0FBTyxDQUFDNEosVUFBVXRPLEdBQVYsQ0FBYyxDQUFDLENBQWYsQ0FBUjtLQUwyQixDQUE3QjtRQU9JLENBQUNtTyxnQkFBTCxFQUF1QjtVQUNqQjVCLFFBQVEsVUFBVS9LLE1BQVYsRUFBa0JvSixRQUFsQixFQUE0QjtvQkFDM0JwSixNQUFYLEVBQW1CMEosQ0FBbkIsRUFBc0I5RCxJQUF0QjtZQUNJL0csT0FBT2tPLG1CQUFrQixJQUFJdEcsSUFBSixFQUFsQixFQUE4QnpHLE1BQTlCLEVBQXNDMEosQ0FBdEMsQ0FBWDtZQUNJTixZQUFZeEwsU0FBaEIsRUFBMkJ1TixPQUFNL0IsUUFBTixFQUFnQjRCLE1BQWhCLEVBQXdCbk0sS0FBS29NLEtBQUwsQ0FBeEIsRUFBcUNwTSxJQUFyQztlQUNwQkEsSUFBUDtPQUpFLENBQUo7UUFNRUQsU0FBRixHQUFjeUMsS0FBZDtZQUNNNkUsV0FBTixHQUFvQndELENBQXBCOztRQUVFZ0Qsd0JBQXdCRyxVQUE1QixFQUF3QztnQkFDNUIsUUFBVjtnQkFDVSxLQUFWO2dCQUNVVCxVQUFVLEtBQVYsQ0FBVjs7UUFFRVMsY0FBY0osY0FBbEIsRUFBa0NMLFVBQVVuQixLQUFWOztRQUU5QmtCLFdBQVc5SyxNQUFNK0osS0FBckIsRUFBNEIsT0FBTy9KLE1BQU0rSixLQUFiOzs7a0JBR2YxQixDQUFmLEVBQWtCOUQsSUFBbEI7O0lBRUVBLElBQUYsSUFBVThELENBQVY7VUFDUXRLLFFBQVFPLENBQVIsR0FBWVAsUUFBUXFCLENBQXBCLEdBQXdCckIsUUFBUUssQ0FBUixJQUFhaUssS0FBS2pELElBQWxCLENBQWhDLEVBQXlEN0osQ0FBekQ7O01BRUksQ0FBQ3VQLE9BQUwsRUFBY0QsT0FBT2MsU0FBUCxDQUFpQnRELENBQWpCLEVBQW9COUQsSUFBcEIsRUFBMEJvRixNQUExQjs7U0FFUHRCLENBQVA7Q0FyRUY7O0FDWEEsSUFBSXVELE1BQU0sS0FBVjs7O0FBR0EsY0FBaUJ0UixZQUF5QnNSLEdBQXpCLEVBQThCLFVBQVVuUixHQUFWLEVBQWU7U0FDckQsU0FBU29SLEdBQVQsR0FBZTtXQUFTcFIsSUFBSSxJQUFKLEVBQVVvRCxVQUFVSixNQUFWLEdBQW1CLENBQW5CLEdBQXVCSSxVQUFVLENBQVYsQ0FBdkIsR0FBc0N0QixTQUFoRCxDQUFQO0dBQXhCO0NBRGUsRUFFZDs7T0FFSSxTQUFTeU8sR0FBVCxDQUFhcFAsS0FBYixFQUFvQjtXQUNoQmtRLGtCQUFPN0gsR0FBUCxDQUFXK0Ysb0JBQVMsSUFBVCxFQUFlNEIsR0FBZixDQUFYLEVBQWdDaFEsUUFBUUEsVUFBVSxDQUFWLEdBQWMsQ0FBZCxHQUFrQkEsS0FBMUQsRUFBaUVBLEtBQWpFLENBQVA7O0NBTGEsRUFPZGtRLGlCQVBjLENBQWpCOztBQ0pBLHlCQUFpQiwyQkFBQSxDQUFVbEIsSUFBVixFQUFnQjlGLFFBQWhCLEVBQTBCO01BQ3JDdEMsU0FBUyxFQUFiO1NBQ01vSSxJQUFOLEVBQVksS0FBWixFQUFtQnBJLE9BQU85RixJQUExQixFQUFnQzhGLE1BQWhDLEVBQXdDc0MsUUFBeEM7U0FDT3RDLE1BQVA7Q0FIRjs7QUNGQTs7O0FBR0Esd0JBQWlCLDBCQUFBLENBQVUrQixJQUFWLEVBQWdCO1NBQ3hCLFNBQVN3SCxNQUFULEdBQWtCO1FBQ25CL0ssU0FBUSxJQUFSLEtBQWlCdUQsSUFBckIsRUFBMkIsTUFBTXBLLFVBQVVvSyxPQUFPLHVCQUFqQixDQUFOO1dBQ3BCeUgsbUJBQUssSUFBTCxDQUFQO0dBRkY7Q0FERjs7QUNIQTs7O0FBR0FqTyxRQUFRQSxRQUFRdkMsQ0FBUixHQUFZdUMsUUFBUXNCLENBQTVCLEVBQStCLEtBQS9CLEVBQXNDLEVBQUUwTSxRQUFRelIsa0JBQWlDLEtBQWpDLENBQVYsRUFBdEM7Ozs7O0FDQ0EsdUJBQWlCLHlCQUFBLENBQVUyUixVQUFWLEVBQXNCO1VBQzdCbE8sUUFBUS9DLENBQWhCLEVBQW1CaVIsVUFBbkIsRUFBK0IsRUFBRUMsSUFBSSxTQUFTQSxFQUFULEdBQWM7VUFDN0N6TyxTQUFTSSxVQUFVSixNQUF2QjtVQUNJME8sSUFBSSxJQUFJOUwsS0FBSixDQUFVNUMsTUFBVixDQUFSO2FBQ09BLFFBQVA7VUFBbUJBLE1BQUYsSUFBWUksVUFBVUosTUFBVixDQUFaO09BQ2pCLE9BQU8sSUFBSSxJQUFKLENBQVMwTyxDQUFULENBQVA7S0FKNkIsRUFBL0I7Q0FERjs7QUNKQTtBQUNBN1IsaUJBQWdDLEtBQWhDOzs7OztBQ01BLHlCQUFpQiwyQkFBQSxDQUFVMlIsVUFBVixFQUFzQjtVQUM3QmxPLFFBQVEvQyxDQUFoQixFQUFtQmlSLFVBQW5CLEVBQStCLEVBQUVELE1BQU0sU0FBU0EsSUFBVCxDQUFjOU4sTUFBZCx5QkFBNkM7VUFDOUVrTyxRQUFRdk8sVUFBVSxDQUFWLENBQVo7VUFDSXdPLE9BQUosRUFBYUYsQ0FBYixFQUFnQjNDLENBQWhCLEVBQW1COEMsRUFBbkI7aUJBQ1UsSUFBVjtnQkFDVUYsVUFBVTdQLFNBQXBCO1VBQ0k4UCxPQUFKLEVBQWFFLFdBQVVILEtBQVY7VUFDVGxPLFVBQVUzQixTQUFkLEVBQXlCLE9BQU8sSUFBSSxJQUFKLEVBQVA7VUFDckIsRUFBSjtVQUNJOFAsT0FBSixFQUFhO1lBQ1AsQ0FBSjthQUNLcE4sS0FBSW1OLEtBQUosRUFBV3ZPLFVBQVUsQ0FBVixDQUFYLEVBQXlCLENBQXpCLENBQUw7ZUFDTUssTUFBTixFQUFjLEtBQWQsRUFBcUIsVUFBVXNPLFFBQVYsRUFBb0I7WUFDckM5UCxJQUFGLENBQU80UCxHQUFHRSxRQUFILEVBQWFoRCxHQUFiLENBQVA7U0FERjtPQUhGLE1BTU87ZUFDQ3RMLE1BQU4sRUFBYyxLQUFkLEVBQXFCaU8sRUFBRXpQLElBQXZCLEVBQTZCeVAsQ0FBN0I7O2FBRUssSUFBSSxJQUFKLENBQVNBLENBQVQsQ0FBUDtLQWpCNkIsRUFBL0I7Q0FERjs7QUNQQTtBQUNBN1IsbUJBQWtDLEtBQWxDOztBQ01BLFlBQWlCbVMsTUFBNEJaLEdBQTdDOztBQ0pBLElBQUlhLE1BQU0sS0FBVjs7O0FBR0EsY0FBaUJwUyxZQUF5Qm9TLEdBQXpCLEVBQThCLFVBQVVqUyxHQUFWLEVBQWU7U0FDckQsU0FBU2tTLEdBQVQsR0FBZTtXQUFTbFMsSUFBSSxJQUFKLEVBQVVvRCxVQUFVSixNQUFWLEdBQW1CLENBQW5CLEdBQXVCSSxVQUFVLENBQVYsQ0FBdkIsR0FBc0N0QixTQUFoRCxDQUFQO0dBQXhCO0NBRGUsRUFFZDs7T0FFSSxTQUFTOUIsR0FBVCxDQUFhc0IsR0FBYixFQUFrQjtRQUNqQnVOLFFBQVF3QyxrQkFBT3pDLFFBQVAsQ0FBZ0JXLG9CQUFTLElBQVQsRUFBZTBDLEdBQWYsQ0FBaEIsRUFBcUMzUSxHQUFyQyxDQUFaO1dBQ091TixTQUFTQSxNQUFNaUIsQ0FBdEI7R0FKRDs7T0FPSSxTQUFTbkssR0FBVCxDQUFhckUsR0FBYixFQUFrQkgsS0FBbEIsRUFBeUI7V0FDckJrUSxrQkFBTzdILEdBQVAsQ0FBVytGLG9CQUFTLElBQVQsRUFBZTBDLEdBQWYsQ0FBWCxFQUFnQzNRLFFBQVEsQ0FBUixHQUFZLENBQVosR0FBZ0JBLEdBQWhELEVBQXFESCxLQUFyRCxDQUFQOztDQVZhLEVBWWRrUSxpQkFaYyxFQVlOLElBWk0sQ0FBakI7O0FDTkE7OztBQUdBL04sUUFBUUEsUUFBUXZDLENBQVIsR0FBWXVDLFFBQVFzQixDQUE1QixFQUErQixLQUEvQixFQUFzQyxFQUFFME0sUUFBUXpSLGtCQUFpQyxLQUFqQyxDQUFWLEVBQXRDOztBQ0hBO0FBQ0FBLGlCQUFnQyxLQUFoQzs7QUNEQTtBQUNBQSxtQkFBa0MsS0FBbEM7O0FDTUEsVUFBaUJtUyxNQUE0QkUsR0FBN0M7O0FDUEE7O0FBRUEsZUFBaUJ0TSxNQUFNdU0sT0FBTixJQUFpQixTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtTQUMvQ3JOLEtBQUlxTixHQUFKLEtBQVksT0FBbkI7Q0FERjs7QUNBQSxJQUFJMUUsWUFBVTdOLEtBQWtCLFNBQWxCLENBQWQ7O0FBRUEsK0JBQWlCLGlDQUFBLENBQVV3UyxRQUFWLEVBQW9CO01BQy9CekUsQ0FBSjtNQUNJdUUsU0FBUUUsUUFBUixDQUFKLEVBQXVCO1FBQ2pCQSxTQUFTakksV0FBYjs7UUFFSSxPQUFPd0QsQ0FBUCxJQUFZLFVBQVosS0FBMkJBLE1BQU1oSSxLQUFOLElBQWV1TSxTQUFRdkUsRUFBRTlLLFNBQVYsQ0FBMUMsQ0FBSixFQUFxRThLLElBQUk5TCxTQUFKO1FBQ2pFckMsVUFBU21PLENBQVQsQ0FBSixFQUFpQjtVQUNYQSxFQUFFRixTQUFGLENBQUo7VUFDSUUsTUFBTSxJQUFWLEVBQWdCQSxJQUFJOUwsU0FBSjs7R0FFbEIsT0FBTzhMLE1BQU05TCxTQUFOLEdBQWtCOEQsS0FBbEIsR0FBMEJnSSxDQUFqQztDQVZKOztBQ0pBOzs7QUFHQSwwQkFBaUIsNEJBQUEsQ0FBVXlFLFFBQVYsRUFBb0JyUCxNQUFwQixFQUE0QjtTQUNwQyxLQUFLc1AseUJBQW1CRCxRQUFuQixDQUFMLEVBQW1DclAsTUFBbkMsQ0FBUDtDQURGOztBQ0hBOzs7Ozs7Ozs7QUFZQSxvQkFBaUIsc0JBQUEsQ0FBVTBMLElBQVYsRUFBZ0I2RCxPQUFoQixFQUF5QjtNQUNwQ3JELFNBQVNSLFFBQVEsQ0FBckI7TUFDSThELFlBQVk5RCxRQUFRLENBQXhCO01BQ0krRCxVQUFVL0QsUUFBUSxDQUF0QjtNQUNJZ0UsV0FBV2hFLFFBQVEsQ0FBdkI7TUFDSWlFLGdCQUFnQmpFLFFBQVEsQ0FBNUI7TUFDSWtFLFdBQVdsRSxRQUFRLENBQVIsSUFBYWlFLGFBQTVCO01BQ0l0SixTQUFTa0osV0FBV00sbUJBQXhCO1NBQ08sVUFBVXZMLEtBQVYsRUFBaUJ1SSxVQUFqQixFQUE2QjlNLElBQTdCLEVBQW1DO1FBQ3BDakMsSUFBSXFKLFVBQVM3QyxLQUFULENBQVI7UUFDSXBJLE9BQU84RixTQUFRbEUsQ0FBUixDQUFYO1FBQ0lTLElBQUlpRCxLQUFJcUwsVUFBSixFQUFnQjlNLElBQWhCLEVBQXNCLENBQXRCLENBQVI7UUFDSUMsU0FBU3lFLFVBQVN2SSxLQUFLOEQsTUFBZCxDQUFiO1FBQ0lvRSxRQUFRLENBQVo7UUFDSVcsU0FBU21ILFNBQVM3RixPQUFPL0IsS0FBUCxFQUFjdEUsTUFBZCxDQUFULEdBQWlDd1AsWUFBWW5KLE9BQU8vQixLQUFQLEVBQWMsQ0FBZCxDQUFaLEdBQStCeEYsU0FBN0U7UUFDSXJCLEdBQUosRUFBU3FTLEdBQVQ7V0FDTTlQLFNBQVNvRSxLQUFmLEVBQXNCQSxPQUF0QjtVQUFtQ3dMLFlBQVl4TCxTQUFTbEksSUFBekIsRUFBK0I7Y0FDdERBLEtBQUtrSSxLQUFMLENBQU47Y0FDTTdGLEVBQUVkLEdBQUYsRUFBTzJHLEtBQVAsRUFBY3RHLENBQWQsQ0FBTjtZQUNJNE4sSUFBSixFQUFVO2NBQ0pRLE1BQUosRUFBWW5ILE9BQU9YLEtBQVAsSUFBZ0IwTCxHQUFoQixDQUFaO2VBQ0ssSUFBSUEsR0FBSixFQUFTLFFBQVFwRSxJQUFSO21CQUNQLENBQUw7dUJBQWUsSUFBUCxDQURJO21CQUVQLENBQUw7dUJBQWVqTyxHQUFQLENBRkk7bUJBR1AsQ0FBTDt1QkFBZTJHLEtBQVAsQ0FISTttQkFJUCxDQUFMO3VCQUFlbkYsSUFBUCxDQUFZeEIsR0FBWixFQUpJO2FBQVQsTUFLRSxJQUFJaVMsUUFBSixFQUFjLE9BQU8sS0FBUCxDQVBiOzs7S0FVWixPQUFPQyxnQkFBZ0IsQ0FBQyxDQUFqQixHQUFxQkYsV0FBV0MsUUFBWCxHQUFzQkEsUUFBdEIsR0FBaUMzSyxNQUE3RDtHQXJCRjtDQVJGOztBQ1pBLFVBQVlqSSxPQUFPaVQscUJBQW5COzs7Ozs7Ozs7QUNRQSxJQUFJQyxVQUFVbFQsT0FBT21ULE1BQXJCOzs7QUFHQSxvQkFBaUIsQ0FBQ0QsT0FBRCxJQUFZblQsT0FBb0IsWUFBWTtNQUN2RDZSLElBQUksRUFBUjtNQUNJek4sSUFBSSxFQUFSOztNQUVJMUQsSUFBSXVGLFFBQVI7TUFDSW9OLElBQUksc0JBQVI7SUFDRTNTLENBQUYsSUFBTyxDQUFQO0lBQ0UrQixLQUFGLENBQVEsRUFBUixFQUFZc04sT0FBWixDQUFvQixVQUFVWixDQUFWLEVBQWE7TUFBSUEsQ0FBRixJQUFPQSxDQUFQO0dBQW5DO1NBQ09nRSxRQUFRLEVBQVIsRUFBWXRCLENBQVosRUFBZW5SLENBQWYsS0FBcUIsQ0FBckIsSUFBMEJULE9BQU9rSSxJQUFQLENBQVlnTCxRQUFRLEVBQVIsRUFBWS9PLENBQVosQ0FBWixFQUE0QnJCLElBQTVCLENBQWlDLEVBQWpDLEtBQXdDc1EsQ0FBekU7Q0FSMkIsQ0FBWixHQVNaLFNBQVNELE1BQVQsQ0FBZ0IvTyxNQUFoQixFQUF3QlQsTUFBeEIsRUFBZ0M7O01BQy9CNEMsSUFBSThELFVBQVNqRyxNQUFULENBQVI7TUFDSWlQLE9BQU8vUCxVQUFVSixNQUFyQjtNQUNJb0UsUUFBUSxDQUFaO01BQ0lnTSxhQUFhQyxZQUFLOVIsQ0FBdEI7TUFDSStSLFNBQVNqTyxXQUFJOUQsQ0FBakI7U0FDTzRSLE9BQU8vTCxLQUFkLEVBQXFCO1FBQ2Y3RyxJQUFJeUUsU0FBUTVCLFVBQVVnRSxPQUFWLENBQVIsQ0FBUjtRQUNJWSxPQUFPb0wsYUFBYS9LLFlBQVE5SCxDQUFSLEVBQVdzQixNQUFYLENBQWtCdVIsV0FBVzdTLENBQVgsQ0FBbEIsQ0FBYixHQUFnRDhILFlBQVE5SCxDQUFSLENBQTNEO1FBQ0l5QyxTQUFTZ0YsS0FBS2hGLE1BQWxCO1FBQ0l1USxJQUFJLENBQVI7UUFDSWpTLEdBQUo7V0FDTzBCLFNBQVN1USxDQUFoQixFQUFtQjtZQUNYdkwsS0FBS3VMLEdBQUwsQ0FBTjtVQUNJLENBQUMxRixZQUFELElBQWdCeUYsT0FBTzNTLElBQVAsQ0FBWUosQ0FBWixFQUFlZSxHQUFmLENBQXBCLEVBQXlDK0UsRUFBRS9FLEdBQUYsSUFBU2YsRUFBRWUsR0FBRixDQUFUOztHQUUzQyxPQUFPK0UsQ0FBUDtDQXpCYSxHQTBCYjJNLE9BMUJKOztBQ1RBLElBQUkzRSxVQUFVeE8sTUFBbUJ3TyxPQUFqQzs7QUFRQSxJQUFJbUYsWUFBWUMsY0FBa0IsQ0FBbEIsQ0FBaEI7QUFDQSxJQUFJQyxpQkFBaUJELGNBQWtCLENBQWxCLENBQXJCO0FBQ0EsSUFBSS9SLE9BQUssQ0FBVDs7O0FBR0EsSUFBSWlTLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQVU1USxJQUFWLEVBQWdCO1NBQ2pDQSxLQUFLcU0sRUFBTCxLQUFZck0sS0FBS3FNLEVBQUwsR0FBVSxJQUFJd0UsbUJBQUosRUFBdEIsQ0FBUDtDQURGO0FBR0EsSUFBSUEsc0JBQXNCLFNBQXRCQSxtQkFBc0IsR0FBWTtPQUMvQjNULENBQUwsR0FBUyxFQUFUO0NBREY7QUFHQSxJQUFJNFQscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBVTdSLEtBQVYsRUFBaUJWLEdBQWpCLEVBQXNCO1NBQ3RDa1MsVUFBVXhSLE1BQU0vQixDQUFoQixFQUFtQixVQUFVVCxFQUFWLEVBQWM7V0FDL0JBLEdBQUcsQ0FBSCxNQUFVOEIsR0FBakI7R0FESyxDQUFQO0NBREY7QUFLQXNTLG9CQUFvQjlRLFNBQXBCLEdBQWdDO09BQ3pCLGFBQVV4QixHQUFWLEVBQWU7UUFDZHVOLFFBQVFnRixtQkFBbUIsSUFBbkIsRUFBeUJ2UyxHQUF6QixDQUFaO1FBQ0l1TixLQUFKLEVBQVcsT0FBT0EsTUFBTSxDQUFOLENBQVA7R0FIaUI7T0FLekIsYUFBVXZOLEdBQVYsRUFBZTtXQUNYLENBQUMsQ0FBQ3VTLG1CQUFtQixJQUFuQixFQUF5QnZTLEdBQXpCLENBQVQ7R0FONEI7T0FRekIsYUFBVUEsR0FBVixFQUFlSCxLQUFmLEVBQXNCO1FBQ3JCME4sUUFBUWdGLG1CQUFtQixJQUFuQixFQUF5QnZTLEdBQXpCLENBQVo7UUFDSXVOLEtBQUosRUFBV0EsTUFBTSxDQUFOLElBQVcxTixLQUFYLENBQVgsS0FDSyxLQUFLbEIsQ0FBTCxDQUFPZ0MsSUFBUCxDQUFZLENBQUNYLEdBQUQsRUFBTUgsS0FBTixDQUFaO0dBWHVCO1lBYXBCLGlCQUFVRyxHQUFWLEVBQWU7UUFDbkI4RixRQUFRc00sZUFBZSxLQUFLelQsQ0FBcEIsRUFBdUIsVUFBVVQsRUFBVixFQUFjO2FBQ3hDQSxHQUFHLENBQUgsTUFBVThCLEdBQWpCO0tBRFUsQ0FBWjtRQUdJLENBQUM4RixLQUFMLEVBQVksS0FBS25ILENBQUwsQ0FBTzZULE1BQVAsQ0FBYzFNLEtBQWQsRUFBcUIsQ0FBckI7V0FDTCxDQUFDLENBQUMsQ0FBQ0EsS0FBVjs7Q0FsQko7O0FBc0JBLHNCQUFpQjtrQkFDQyx3QkFBVTZILE9BQVYsRUFBbUJuRixJQUFuQixFQUF5Qm9GLE1BQXpCLEVBQWlDQyxLQUFqQyxFQUF3QztRQUNsRHZCLElBQUlxQixRQUFRLFVBQVVsTSxJQUFWLEVBQWdCdUssUUFBaEIsRUFBMEI7a0JBQzdCdkssSUFBWCxFQUFpQjZLLENBQWpCLEVBQW9COUQsSUFBcEIsRUFBMEIsSUFBMUI7V0FDSytCLEVBQUwsR0FBVS9CLElBQVYsQ0FGd0M7V0FHbkNnQyxFQUFMLEdBQVVwSyxNQUFWLENBSHdDO1dBSW5DME4sRUFBTCxHQUFVdE4sU0FBVixDQUp3QztVQUtwQ3dMLFlBQVl4TCxTQUFoQixFQUEyQnVOLE9BQU0vQixRQUFOLEVBQWdCNEIsTUFBaEIsRUFBd0JuTSxLQUFLb00sS0FBTCxDQUF4QixFQUFxQ3BNLElBQXJDO0tBTHJCLENBQVI7aUJBT1k2SyxFQUFFOUssU0FBZCxFQUF5Qjs7O2dCQUdiLGlCQUFVeEIsR0FBVixFQUFlO1lBQ25CLENBQUM3QixVQUFTNkIsR0FBVCxDQUFMLEVBQW9CLE9BQU8sS0FBUDtZQUNoQmtPLE9BQU9uQixRQUFRL00sR0FBUixDQUFYO1lBQ0lrTyxTQUFTLElBQWIsRUFBbUIsT0FBT21FLG9CQUFvQnBFLG9CQUFTLElBQVQsRUFBZXpGLElBQWYsQ0FBcEIsRUFBMEMsUUFBMUMsRUFBb0R4SSxHQUFwRCxDQUFQO2VBQ1prTyxRQUFRdUUsS0FBS3ZFLElBQUwsRUFBVyxLQUFLMUQsRUFBaEIsQ0FBUixJQUErQixPQUFPMEQsS0FBSyxLQUFLMUQsRUFBVixDQUE3QztPQVBxQjs7O1dBV2xCLFNBQVNwSixHQUFULENBQWFwQixHQUFiLEVBQWtCO1lBQ2pCLENBQUM3QixVQUFTNkIsR0FBVCxDQUFMLEVBQW9CLE9BQU8sS0FBUDtZQUNoQmtPLE9BQU9uQixRQUFRL00sR0FBUixDQUFYO1lBQ0lrTyxTQUFTLElBQWIsRUFBbUIsT0FBT21FLG9CQUFvQnBFLG9CQUFTLElBQVQsRUFBZXpGLElBQWYsQ0FBcEIsRUFBMENwSCxHQUExQyxDQUE4Q3BCLEdBQTlDLENBQVA7ZUFDWmtPLFFBQVF1RSxLQUFLdkUsSUFBTCxFQUFXLEtBQUsxRCxFQUFoQixDQUFmOztLQWZKO1dBa0JPOEIsQ0FBUDtHQTNCYTtPQTZCVixhQUFVN0ssSUFBVixFQUFnQnpCLEdBQWhCLEVBQXFCSCxLQUFyQixFQUE0QjtRQUMzQnFPLE9BQU9uQixRQUFRL0UsVUFBU2hJLEdBQVQsQ0FBUixFQUF1QixJQUF2QixDQUFYO1FBQ0lrTyxTQUFTLElBQWIsRUFBbUJtRSxvQkFBb0I1USxJQUFwQixFQUEwQjRDLEdBQTFCLENBQThCckUsR0FBOUIsRUFBbUNILEtBQW5DLEVBQW5CLEtBQ0txTyxLQUFLek0sS0FBSytJLEVBQVYsSUFBZ0IzSyxLQUFoQjtXQUNFNEIsSUFBUDtHQWpDYTtXQW1DTjRRO0NBbkNYOzs7TUM5Q0lLLE9BQU9uVSxjQUE0QixDQUE1QixDQUFYOztNQU9Jb1Usa0JBQWtCMUUsbUJBQXRCO01BQ0kyRSxVQUFVLENBQUNuVixRQUFPb1YsYUFBUixJQUF5QixtQkFBbUJwVixPQUExRDtNQUNJcVYsV0FBVyxTQUFmO01BQ0kvRixVQUFVRyxNQUFLSCxPQUFuQjtNQUNJTCxlQUFlbE8sT0FBT2tPLFlBQTFCO01BQ0kyRixzQkFBc0JVLGdCQUFLQyxPQUEvQjtNQUNJQyxXQUFKOztNQUVJdEYsVUFBVSxTQUFWQSxPQUFVLENBQVVqUCxHQUFWLEVBQWU7V0FDcEIsU0FBU3dVLE9BQVQsR0FBbUI7YUFDakJ4VSxJQUFJLElBQUosRUFBVW9ELFVBQVVKLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUJJLFVBQVUsQ0FBVixDQUF2QixHQUFzQ3RCLFNBQWhELENBQVA7S0FERjtHQURGOztNQU1JMkosVUFBVTs7U0FFUCxTQUFTekwsR0FBVCxDQUFhc0IsR0FBYixFQUFrQjtVQUNqQjdCLFVBQVM2QixHQUFULENBQUosRUFBbUI7WUFDYmtPLE9BQU9uQixRQUFRL00sR0FBUixDQUFYO1lBQ0lrTyxTQUFTLElBQWIsRUFBbUIsT0FBT21FLG9CQUFvQnBFLG9CQUFTLElBQVQsRUFBZTZFLFFBQWYsQ0FBcEIsRUFBOENwVSxHQUE5QyxDQUFrRHNCLEdBQWxELENBQVA7ZUFDWmtPLE9BQU9BLEtBQUssS0FBSzFELEVBQVYsQ0FBUCxHQUF1QmhLLFNBQTlCOztLQU5ROztTQVVQLFNBQVM2RCxHQUFULENBQWFyRSxHQUFiLEVBQWtCSCxLQUFsQixFQUF5QjthQUNyQmtULGdCQUFLN0ssR0FBTCxDQUFTK0Ysb0JBQVMsSUFBVCxFQUFlNkUsUUFBZixDQUFULEVBQW1DOVMsR0FBbkMsRUFBd0NILEtBQXhDLENBQVA7O0dBWEo7OztNQWdCSXNULFdBQVd6VixjQUFBLEdBQWlCcUIsWUFBeUIrVCxRQUF6QixFQUFtQ25GLE9BQW5DLEVBQTRDeEQsT0FBNUMsRUFBcUQ0SSxlQUFyRCxFQUEyRCxJQUEzRCxFQUFpRSxJQUFqRSxDQUFoQzs7O01BR0lKLG1CQUFtQkMsT0FBdkIsRUFBZ0M7a0JBQ2hCRyxnQkFBSzVELGNBQUwsQ0FBb0J4QixPQUFwQixFQUE2Qm1GLFFBQTdCLENBQWQ7a0JBQ09HLFlBQVl6UixTQUFuQixFQUE4QjJJLE9BQTlCO1VBQ0tnRCxJQUFMLEdBQVksSUFBWjtTQUNLLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsS0FBbEIsRUFBeUIsS0FBekIsQ0FBTCxFQUFzQyxVQUFVbk4sR0FBVixFQUFlO1VBQy9DaUUsUUFBUWtQLFNBQVMzUixTQUFyQjtVQUNJNFIsU0FBU25QLE1BQU1qRSxHQUFOLENBQWI7Z0JBQ1NpRSxLQUFULEVBQWdCakUsR0FBaEIsRUFBcUIsVUFBVXJCLENBQVYsRUFBYWdELENBQWIsRUFBZ0I7O1lBRS9CeEQsVUFBU1EsQ0FBVCxLQUFlLENBQUMrTixhQUFhL04sQ0FBYixDQUFwQixFQUFxQztjQUMvQixDQUFDLEtBQUs2TyxFQUFWLEVBQWMsS0FBS0EsRUFBTCxHQUFVLElBQUl5RixXQUFKLEVBQVY7Y0FDVnhNLFNBQVMsS0FBSytHLEVBQUwsQ0FBUXhOLEdBQVIsRUFBYXJCLENBQWIsRUFBZ0JnRCxDQUFoQixDQUFiO2lCQUNPM0IsT0FBTyxLQUFQLEdBQWUsSUFBZixHQUFzQnlHLE1BQTdCOztTQUVBLE9BQU8yTSxPQUFPL1QsSUFBUCxDQUFZLElBQVosRUFBa0JWLENBQWxCLEVBQXFCZ0QsQ0FBckIsQ0FBUDtPQVBKO0tBSEY7Ozs7QUM5Q0Y7QUFDQXBELGlCQUFnQyxTQUFoQzs7QUNEQTtBQUNBQSxtQkFBa0MsU0FBbEM7O0FDSUEsY0FBaUI4VSxNQUE0QkgsT0FBN0M7O0FDREEsc0JBQWlCLHdCQUFBLENBQVVuVCxNQUFWLEVBQWtCK0YsS0FBbEIsRUFBeUJqRyxLQUF6QixFQUFnQztNQUMzQ2lHLFNBQVMvRixNQUFiLEVBQXFCdVQsVUFBZ0JyVCxDQUFoQixDQUFrQkYsTUFBbEIsRUFBMEIrRixLQUExQixFQUFpQzVGLGNBQVcsQ0FBWCxFQUFjTCxLQUFkLENBQWpDLEVBQXJCLEtBQ0tFLE9BQU8rRixLQUFQLElBQWdCakcsS0FBaEI7Q0FGUDs7QUNNQW1DLFFBQVFBLFFBQVEvQyxDQUFSLEdBQVkrQyxRQUFRSyxDQUFSLEdBQVksQ0FBQzlELFlBQTBCLFVBQVVzUSxJQUFWLEVBQWdCOztDQUExQyxDQUFqQyxFQUFtRyxPQUFuRyxFQUE0Rzs7UUFFcEcsU0FBU29CLElBQVQsQ0FBY3NELFNBQWQsaURBQXdFO1FBQ3hFL1QsSUFBSXFKLFVBQVMwSyxTQUFULENBQVI7UUFDSWpILElBQUksT0FBTyxJQUFQLElBQWUsVUFBZixHQUE0QixJQUE1QixHQUFtQ2hJLEtBQTNDO1FBQ0l1TixPQUFPL1AsVUFBVUosTUFBckI7UUFDSThSLFFBQVEzQixPQUFPLENBQVAsR0FBVy9QLFVBQVUsQ0FBVixDQUFYLEdBQTBCdEIsU0FBdEM7UUFDSThQLFVBQVVrRCxVQUFVaFQsU0FBeEI7UUFDSXNGLFFBQVEsQ0FBWjtRQUNJbUcsU0FBU0MsdUJBQVUxTSxDQUFWLENBQWI7UUFDSWtDLE1BQUosRUFBWStFLE1BQVosRUFBb0JxRSxJQUFwQixFQUEwQmEsUUFBMUI7UUFDSTJFLE9BQUosRUFBYWtELFFBQVF0USxLQUFJc1EsS0FBSixFQUFXM0IsT0FBTyxDQUFQLEdBQVcvUCxVQUFVLENBQVYsQ0FBWCxHQUEwQnRCLFNBQXJDLEVBQWdELENBQWhELENBQVI7O1FBRVR5TCxVQUFVekwsU0FBVixJQUF1QixFQUFFOEwsS0FBS2hJLEtBQUwsSUFBYzZILGFBQVlGLE1BQVosQ0FBaEIsQ0FBM0IsRUFBaUU7V0FDMUROLFdBQVdNLE9BQU81TSxJQUFQLENBQVlHLENBQVosQ0FBWCxFQUEyQmlILFNBQVMsSUFBSTZGLENBQUosRUFBekMsRUFBa0QsQ0FBQyxDQUFDeEIsT0FBT2EsU0FBU2xELElBQVQsRUFBUixFQUF5QmlDLElBQTVFLEVBQWtGNUUsT0FBbEYsRUFBMkY7d0JBQzFFVyxNQUFmLEVBQXVCWCxLQUF2QixFQUE4QndLLFVBQVVqUixVQUFLc00sUUFBTCxFQUFlNkgsS0FBZixFQUFzQixDQUFDMUksS0FBS2pMLEtBQU4sRUFBYWlHLEtBQWIsQ0FBdEIsRUFBMkMsSUFBM0MsQ0FBVixHQUE2RGdGLEtBQUtqTCxLQUFoRzs7S0FGSixNQUlPO2VBQ0lzRyxVQUFTM0csRUFBRWtDLE1BQVgsQ0FBVDtXQUNLK0UsU0FBUyxJQUFJNkYsQ0FBSixDQUFNNUssTUFBTixDQUFkLEVBQTZCQSxTQUFTb0UsS0FBdEMsRUFBNkNBLE9BQTdDLEVBQXNEO3dCQUNyQ1csTUFBZixFQUF1QlgsS0FBdkIsRUFBOEJ3SyxVQUFVa0QsTUFBTWhVLEVBQUVzRyxLQUFGLENBQU4sRUFBZ0JBLEtBQWhCLENBQVYsR0FBbUN0RyxFQUFFc0csS0FBRixDQUFqRTs7O1dBR0dwRSxNQUFQLEdBQWdCb0UsS0FBaEI7V0FDT1csTUFBUDs7Q0F4Qko7O0FDUkEsYUFBaUJ6SCxNQUErQnNGLEtBQS9CLENBQXFDMkwsSUFBdEQ7O0FDRkEsSUFBTXdELGtCQUFrQixJQUFJM0QsR0FBSixDQUFRLENBQzlCLGdCQUQ4QixFQUU5QixlQUY4QixFQUc5QixXQUg4QixFQUk5QixlQUo4QixFQUs5QixlQUw4QixFQU05QixrQkFOOEIsRUFPOUIsZ0JBUDhCLEVBUTlCLGVBUjhCLENBQVIsQ0FBeEI7Ozs7OztBQWVBLEFBQU8sU0FBUzRELHdCQUFULENBQWtDQyxTQUFsQyxFQUE2QztNQUM1Q0MsV0FBV0gsZ0JBQWdCclMsR0FBaEIsQ0FBb0J1UyxTQUFwQixDQUFqQjtNQUNNRSxZQUFZLG1DQUFtQzFQLElBQW5DLENBQXdDd1AsU0FBeEMsQ0FBbEI7U0FDTyxDQUFDQyxRQUFELElBQWFDLFNBQXBCOzs7Ozs7OztBQVFGLEFBQU8sU0FBU0MsV0FBVCxDQUFxQkMsSUFBckIsRUFBMkI7O01BRTFCQyxjQUFjRCxLQUFLRCxXQUF6QjtNQUNJRSxnQkFBZ0J4VCxTQUFwQixFQUErQjtXQUN0QndULFdBQVA7Ozs7TUFJRUMsVUFBVUYsSUFBZDtTQUNPRSxXQUFXLEVBQUVBLFFBQVFDLHFCQUFSLElBQWlDRCxtQkFBbUJFLFFBQXRELENBQWxCLEVBQW1GO2NBQ3ZFRixRQUFRRyxVQUFSLEtBQXVCOVcsT0FBTytXLFVBQVAsSUFBcUJKLG1CQUFtQkksVUFBeEMsR0FBcURKLFFBQVFLLElBQTdELEdBQW9FOVQsU0FBM0YsQ0FBVjs7U0FFSyxDQUFDLEVBQUV5VCxZQUFZQSxRQUFRQyxxQkFBUixJQUFpQ0QsbUJBQW1CRSxRQUFoRSxDQUFGLENBQVI7Ozs7Ozs7O0FBUUYsU0FBU0ksNEJBQVQsQ0FBc0NDLElBQXRDLEVBQTRDQyxLQUE1QyxFQUFtRDtNQUM3Q1YsT0FBT1UsS0FBWDtTQUNPVixRQUFRQSxTQUFTUyxJQUFqQixJQUF5QixDQUFDVCxLQUFLVyxXQUF0QyxFQUFtRDtXQUMxQ1gsS0FBS0ssVUFBWjs7U0FFTSxDQUFDTCxJQUFELElBQVNBLFNBQVNTLElBQW5CLEdBQTJCLElBQTNCLEdBQWtDVCxLQUFLVyxXQUE5Qzs7Ozs7Ozs7QUFRRixTQUFTQyxRQUFULENBQWtCSCxJQUFsQixFQUF3QkMsS0FBeEIsRUFBK0I7U0FDdEJBLE1BQU1HLFVBQU4sR0FBbUJILE1BQU1HLFVBQXpCLEdBQXNDTCw2QkFBNkJDLElBQTdCLEVBQW1DQyxLQUFuQyxDQUE3Qzs7Ozs7Ozs7QUFRRixBQUFPLFNBQVNJLDBCQUFULENBQW9DTCxJQUFwQyxFQUEwQ00sUUFBMUMsRUFBZ0Y7TUFBNUJDLGNBQTRCLHVFQUFYLElBQUlqRixHQUFKLEVBQVc7O01BQ2pGaUUsT0FBT1MsSUFBWDtTQUNPVCxJQUFQLEVBQWE7UUFDUEEsS0FBS2lCLFFBQUwsS0FBa0JDLEtBQUtDLFlBQTNCLEVBQXlDO1VBQ2pDQyxpQ0FBa0NwQixJQUF4Qzs7ZUFFU29CLE9BQVQ7O1VBRU14QixZQUFZd0IsUUFBUXhCLFNBQTFCO1VBQ0lBLGNBQWMsTUFBZCxJQUF3QndCLFFBQVFDLFlBQVIsQ0FBcUIsS0FBckIsTUFBZ0MsUUFBNUQsRUFBc0U7OztZQUc5REMsaUNBQW1DRixRQUFRRyxNQUFqRDtZQUNJRCxzQkFBc0JKLElBQXRCLElBQThCLENBQUNGLGVBQWUzVCxHQUFmLENBQW1CaVUsVUFBbkIsQ0FBbkMsRUFBbUU7O3lCQUVsRHBHLEdBQWYsQ0FBbUJvRyxVQUFuQjs7ZUFFSyxJQUFJRSxRQUFRRixXQUFXVCxVQUE1QixFQUF3Q1csS0FBeEMsRUFBK0NBLFFBQVFBLE1BQU1iLFdBQTdELEVBQTBFO3VDQUM3Q2EsS0FBM0IsRUFBa0NULFFBQWxDLEVBQTRDQyxjQUE1Qzs7Ozs7OztlQU9HUiw2QkFBNkJDLElBQTdCLEVBQW1DVyxPQUFuQyxDQUFQOztPQWhCRixNQWtCTyxJQUFJeEIsY0FBYyxVQUFsQixFQUE4Qjs7Ozs7ZUFLNUJZLDZCQUE2QkMsSUFBN0IsRUFBbUNXLE9BQW5DLENBQVA7Ozs7O1VBS0lLLGFBQWFMLFFBQVFNLGVBQTNCO1VBQ0lELFVBQUosRUFBZ0I7YUFDVCxJQUFJRCxTQUFRQyxXQUFXWixVQUE1QixFQUF3Q1csTUFBeEMsRUFBK0NBLFNBQVFBLE9BQU1iLFdBQTdELEVBQTBFO3FDQUM3Q2EsTUFBM0IsRUFBa0NULFFBQWxDLEVBQTRDQyxjQUE1Qzs7Ozs7V0FLQ0osU0FBU0gsSUFBVCxFQUFlVCxJQUFmLENBQVA7Ozs7Ozs7Ozs7Ozs7QUFhSixBQUFPLFNBQVMyQixvQkFBVCxDQUE4QkMsV0FBOUIsRUFBMkN6VCxJQUEzQyxFQUFpRHJDLEtBQWpELEVBQXdEO2NBQ2pEcUMsSUFBWixJQUFvQnJDLEtBQXBCOzs7QUMvSEY7OztBQUdBLElBQU0rVixxQkFBcUI7VUFDakIsQ0FEaUI7VUFFakI7Q0FGVjs7SUNBcUJDO29DQUNMOzs7O1NBRVBDLHNCQUFMLEdBQThCLElBQUlsRixHQUFKLEVBQTlCOzs7U0FHS21GLHdCQUFMLEdBQWdDLElBQUluRixHQUFKLEVBQWhDOzs7U0FHS29GLFFBQUwsR0FBZ0IsRUFBaEI7OztTQUdLQyxXQUFMLEdBQW1CLEtBQW5COzs7Ozs7Ozs7OztrQ0FPWXRDLFdBQVd1QyxZQUFZO1dBQzlCSixzQkFBTCxDQUE0QnpSLEdBQTVCLENBQWdDc1AsU0FBaEMsRUFBMkN1QyxVQUEzQztXQUNLSCx3QkFBTCxDQUE4QjFSLEdBQTlCLENBQWtDNlIsV0FBV3BOLFdBQTdDLEVBQTBEb04sVUFBMUQ7Ozs7Ozs7Ozs7MENBT29CdkMsV0FBVzthQUN4QixLQUFLbUMsc0JBQUwsQ0FBNEJwWCxHQUE1QixDQUFnQ2lWLFNBQWhDLENBQVA7Ozs7Ozs7Ozs7NENBT3NCN0ssYUFBYTthQUM1QixLQUFLaU4sd0JBQUwsQ0FBOEJyWCxHQUE5QixDQUFrQ29LLFdBQWxDLENBQVA7Ozs7Ozs7Ozs2QkFNT3FOLFVBQVU7V0FDWkYsV0FBTCxHQUFtQixJQUFuQjtXQUNLRCxRQUFMLENBQWNyVixJQUFkLENBQW1Cd1YsUUFBbkI7Ozs7Ozs7Ozs4QkFNUXBDLE1BQU07OztVQUNWLENBQUMsS0FBS2tDLFdBQVYsRUFBdUI7O2dDQUV2QixDQUFxQ2xDLElBQXJDLEVBQTJDO2VBQVcsTUFBS3FDLEtBQUwsQ0FBV2pCLE9BQVgsQ0FBWDtPQUEzQzs7Ozs7Ozs7OzBCQU1JcEIsTUFBTTtVQUNOLENBQUMsS0FBS2tDLFdBQVYsRUFBdUI7O1VBRW5CbEMsS0FBS3NDLFlBQVQsRUFBdUI7V0FDbEJBLFlBQUwsR0FBb0IsSUFBcEI7O1dBRUssSUFBSTlRLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLeVEsUUFBTCxDQUFjdFUsTUFBbEMsRUFBMEM2RCxHQUExQyxFQUErQzthQUN4Q3lRLFFBQUwsQ0FBY3pRLENBQWQsRUFBaUJ3TyxJQUFqQjs7Ozs7Ozs7OztnQ0FPUVMsTUFBTTtVQUNWOEIsV0FBVyxFQUFqQjs7Z0NBRUEsQ0FBcUM5QixJQUFyQyxFQUEyQztlQUFXOEIsU0FBUzNWLElBQVQsQ0FBY3dVLE9BQWQsQ0FBWDtPQUEzQzs7V0FFSyxJQUFJNVAsSUFBSSxDQUFiLEVBQWdCQSxJQUFJK1EsU0FBUzVVLE1BQTdCLEVBQXFDNkQsR0FBckMsRUFBMEM7WUFDbEM0UCxVQUFVbUIsU0FBUy9RLENBQVQsQ0FBaEI7WUFDSTRQLFFBQVFvQixVQUFSLEtBQXVCQyxtQkFBUUMsTUFBbkMsRUFBMkM7Y0FDckNDLFdBQUEsQ0FBc0J2QixPQUF0QixDQUFKLEVBQW9DO2lCQUM3QndCLGlCQUFMLENBQXVCeEIsT0FBdkI7O1NBRkosTUFJTztlQUNBeUIsY0FBTCxDQUFvQnpCLE9BQXBCOzs7Ozs7Ozs7OzttQ0FRU1gsTUFBTTtVQUNiOEIsV0FBVyxFQUFqQjs7Z0NBRUEsQ0FBcUM5QixJQUFyQyxFQUEyQztlQUFXOEIsU0FBUzNWLElBQVQsQ0FBY3dVLE9BQWQsQ0FBWDtPQUEzQzs7V0FFSyxJQUFJNVAsSUFBSSxDQUFiLEVBQWdCQSxJQUFJK1EsU0FBUzVVLE1BQTdCLEVBQXFDNkQsR0FBckMsRUFBMEM7WUFDbEM0UCxVQUFVbUIsU0FBUy9RLENBQVQsQ0FBaEI7WUFDSTRQLFFBQVFvQixVQUFSLEtBQXVCQyxtQkFBUUMsTUFBbkMsRUFBMkM7ZUFDcENJLG9CQUFMLENBQTBCMUIsT0FBMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQW9FY1gsTUFBa0M7OztVQUE1Qk8sY0FBNEIsdUVBQVgsSUFBSWpGLEdBQUosRUFBVzs7VUFDOUN3RyxXQUFXLEVBQWpCOztVQUVNUSxpQkFBaUIsU0FBakJBLGNBQWlCLFVBQVc7WUFDNUIzQixRQUFReEIsU0FBUixLQUFzQixNQUF0QixJQUFnQ3dCLFFBQVFDLFlBQVIsQ0FBcUIsS0FBckIsTUFBZ0MsUUFBcEUsRUFBOEU7OztjQUd0RUMsaUNBQW1DRixRQUFRRyxNQUFqRDs7Y0FFSUQsc0JBQXNCSixJQUF0QixJQUE4QkksV0FBVzBCLFVBQVgsS0FBMEIsVUFBNUQsRUFBd0U7dUJBQzNEN0MscUJBQVgsR0FBbUMsSUFBbkM7Ozt1QkFHVzhDLGdCQUFYLEdBQThCLElBQTlCO1dBSkYsTUFLTzs7O29CQUdHQyxnQkFBUixDQUF5QixNQUF6QixFQUFpQyxZQUFNO2tCQUMvQjVCLGlDQUFtQ0YsUUFBUUcsTUFBakQ7O2tCQUVJRCxXQUFXNkIsd0JBQWYsRUFBeUM7eUJBQzlCQSx3QkFBWCxHQUFzQyxJQUF0Qzs7eUJBRVdoRCxxQkFBWCxHQUFtQyxJQUFuQzs7O3lCQUdXOEMsZ0JBQVgsR0FBOEIsSUFBOUI7Ozs7Ozs7NkJBUWVHLE1BQWYsQ0FBc0I5QixVQUF0Qjs7cUJBRUsrQixtQkFBTCxDQUF5Qi9CLFVBQXpCLEVBQXFDTixjQUFyQzthQW5CRjs7U0FiSixNQW1DTzttQkFDSXBVLElBQVQsQ0FBY3dVLE9BQWQ7O09BckNKOzs7O2dDQTJDQSxDQUFxQ1gsSUFBckMsRUFBMkNzQyxjQUEzQyxFQUEyRC9CLGNBQTNEOztVQUVJLEtBQUtrQixXQUFULEVBQXNCO2FBQ2YsSUFBSTFRLElBQUksQ0FBYixFQUFnQkEsSUFBSStRLFNBQVM1VSxNQUE3QixFQUFxQzZELEdBQXJDLEVBQTBDO2VBQ25DNlEsS0FBTCxDQUFXRSxTQUFTL1EsQ0FBVCxDQUFYOzs7O1dBSUMsSUFBSUEsS0FBSSxDQUFiLEVBQWdCQSxLQUFJK1EsU0FBUzVVLE1BQTdCLEVBQXFDNkQsSUFBckMsRUFBMEM7YUFDbkNxUixjQUFMLENBQW9CTixTQUFTL1EsRUFBVCxDQUFwQjs7Ozs7Ozs7OzttQ0FPVzRQLFNBQVM7VUFDaEJrQyxlQUFlbEMsUUFBUW9CLFVBQTdCO1VBQ0ljLGlCQUFpQjdXLFNBQXJCLEVBQWdDOztVQUUxQjBWLGFBQWEsS0FBS29CLHFCQUFMLENBQTJCbkMsUUFBUXhCLFNBQW5DLENBQW5CO1VBQ0ksQ0FBQ3VDLFVBQUwsRUFBaUI7O2lCQUVOcUIsaUJBQVgsQ0FBNkI1VyxJQUE3QixDQUFrQ3dVLE9BQWxDOztVQUVNck0sY0FBY29OLFdBQVdwTixXQUEvQjtVQUNJO1lBQ0U7Y0FDRXJDLFNBQVMsSUFBS3FDLFdBQUwsRUFBYjtjQUNJckMsV0FBVzBPLE9BQWYsRUFBd0I7a0JBQ2hCLElBQUlxQyxLQUFKLENBQVUsNEVBQVYsQ0FBTjs7U0FISixTQUtVO3FCQUNHRCxpQkFBWCxDQUE2QkUsR0FBN0I7O09BUEosQ0FTRSxPQUFPblosQ0FBUCxFQUFVO2dCQUNGaVksVUFBUixHQUFxQkMsbUJBQVFrQixNQUE3QjtjQUNNcFosQ0FBTjs7O2NBR01pWSxVQUFSLEdBQXFCQyxtQkFBUUMsTUFBN0I7Y0FDUWtCLGVBQVIsR0FBMEJ6QixVQUExQjs7VUFFSUEsV0FBVzBCLHdCQUFmLEVBQXlDO1lBQ2pDQyxxQkFBcUIzQixXQUFXMkIsa0JBQXRDO2FBQ0ssSUFBSXRTLElBQUksQ0FBYixFQUFnQkEsSUFBSXNTLG1CQUFtQm5XLE1BQXZDLEVBQStDNkQsR0FBL0MsRUFBb0Q7Y0FDNUNyRCxPQUFPMlYsbUJBQW1CdFMsQ0FBbkIsQ0FBYjtjQUNNMUYsUUFBUXNWLFFBQVFDLFlBQVIsQ0FBcUJsVCxJQUFyQixDQUFkO2NBQ0lyQyxVQUFVLElBQWQsRUFBb0I7aUJBQ2IrWCx3QkFBTCxDQUE4QnpDLE9BQTlCLEVBQXVDalQsSUFBdkMsRUFBNkMsSUFBN0MsRUFBbURyQyxLQUFuRCxFQUEwRCxJQUExRDs7Ozs7VUFLRjZXLFdBQUEsQ0FBc0J2QixPQUF0QixDQUFKLEVBQW9DO2FBQzdCd0IsaUJBQUwsQ0FBdUJ4QixPQUF2Qjs7Ozs7Ozs7OztzQ0FPY0EsU0FBUztVQUNuQmUsYUFBYWYsUUFBUXdDLGVBQTNCO1VBQ0l6QixXQUFXUyxpQkFBZixFQUFrQzttQkFDckJBLGlCQUFYLENBQTZCdFgsSUFBN0IsQ0FBa0M4VixPQUFsQzs7O2NBR00yQyw4QkFBUixHQUF5QyxJQUF6Qzs7Ozs7Ozs7O3lDQU1tQjNDLFNBQVM7VUFDeEIsQ0FBQ0EsUUFBUTJDLDhCQUFiLEVBQTZDO2FBQ3RDbkIsaUJBQUwsQ0FBdUJ4QixPQUF2Qjs7O1VBR0llLGFBQWFmLFFBQVF3QyxlQUEzQjtVQUNJekIsV0FBV1csb0JBQWYsRUFBcUM7bUJBQ3hCQSxvQkFBWCxDQUFnQ3hYLElBQWhDLENBQXFDOFYsT0FBckM7OztjQUdNMkMsOEJBQVIsR0FBeUN0WCxTQUF6Qzs7Ozs7Ozs7Ozs7Ozs2Q0FVdUIyVSxTQUFTalQsTUFBTTZWLFVBQVVDLFVBQVVDLFdBQVc7VUFDL0QvQixhQUFhZixRQUFRd0MsZUFBM0I7VUFFRXpCLFdBQVcwQix3QkFBWCxJQUNBMUIsV0FBVzJCLGtCQUFYLENBQThCSyxPQUE5QixDQUFzQ2hXLElBQXRDLElBQThDLENBQUMsQ0FGakQsRUFHRTttQkFDVzBWLHdCQUFYLENBQW9DdlksSUFBcEMsQ0FBeUM4VixPQUF6QyxFQUFrRGpULElBQWxELEVBQXdENlYsUUFBeEQsRUFBa0VDLFFBQWxFLEVBQTRFQyxTQUE1RTs7Ozs7OztJQzdUZUU7d0NBQ1BDLFNBQVosRUFBdUJDLEdBQXZCLEVBQTRCOzs7Ozs7U0FJckJDLFVBQUwsR0FBa0JGLFNBQWxCOzs7OztTQUtLRyxTQUFMLEdBQWlCRixHQUFqQjs7Ozs7U0FLS0csU0FBTCxHQUFpQmhZLFNBQWpCOzs7O1NBS0s4WCxVQUFMLENBQWdCbEIsbUJBQWhCLENBQW9DLEtBQUttQixTQUF6Qzs7UUFFSSxLQUFLQSxTQUFMLENBQWV4QixVQUFmLEtBQThCLFNBQWxDLEVBQTZDO1dBQ3RDeUIsU0FBTCxHQUFpQixJQUFJQyxnQkFBSixDQUFxQixLQUFLQyxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBckIsQ0FBakI7Ozs7OztXQU1LSCxTQUFMLENBQWVJLE9BQWYsQ0FBdUIsS0FBS0wsU0FBNUIsRUFBdUM7bUJBQzFCLElBRDBCO2lCQUU1QjtPQUZYOzs7Ozs7aUNBT1M7VUFDUCxLQUFLQyxTQUFULEVBQW9CO2FBQ2JBLFNBQUwsQ0FBZUssVUFBZjs7Ozs7Ozs7OztxQ0FPYUMsV0FBVzs7OztVQUlwQi9CLGFBQWEsS0FBS3dCLFNBQUwsQ0FBZXhCLFVBQWxDO1VBQ0lBLGVBQWUsYUFBZixJQUFnQ0EsZUFBZSxVQUFuRCxFQUErRDthQUN4RDhCLFVBQUw7OztXQUdHLElBQUl0VCxJQUFJLENBQWIsRUFBZ0JBLElBQUl1VCxVQUFVcFgsTUFBOUIsRUFBc0M2RCxHQUF0QyxFQUEyQztZQUNuQ3dULGFBQWFELFVBQVV2VCxDQUFWLEVBQWF3VCxVQUFoQzthQUNLLElBQUk5RyxJQUFJLENBQWIsRUFBZ0JBLElBQUk4RyxXQUFXclgsTUFBL0IsRUFBdUN1USxHQUF2QyxFQUE0QztjQUNwQzhCLE9BQU9nRixXQUFXOUcsQ0FBWCxDQUFiO2VBQ0txRyxVQUFMLENBQWdCbEIsbUJBQWhCLENBQW9DckQsSUFBcEM7Ozs7Ozs7O0FDNURSOzs7SUFHcUJpRjtzQkFDTDs7Ozs7Ozs7O1NBS1BDLE1BQUwsR0FBY3pZLFNBQWQ7Ozs7OztTQU1LMFksUUFBTCxHQUFnQjFZLFNBQWhCOzs7Ozs7U0FNSzJZLFFBQUwsR0FBZ0IsSUFBSUMsT0FBSixDQUFZLG1CQUFXO1lBQ2hDRixRQUFMLEdBQWdCRyxPQUFoQjs7VUFFSSxNQUFLSixNQUFULEVBQWlCO2dCQUNQLE1BQUtBLE1BQWI7O0tBSlksQ0FBaEI7Ozs7Ozs7Ozs7NEJBWU1wWixPQUFPO1VBQ1QsS0FBS29aLE1BQVQsRUFBaUI7Y0FDVCxJQUFJekIsS0FBSixDQUFVLG1CQUFWLENBQU47OztXQUdHeUIsTUFBTCxHQUFjcFosS0FBZDs7VUFFSSxLQUFLcVosUUFBVCxFQUFtQjthQUNaQSxRQUFMLENBQWNyWixLQUFkOzs7Ozs7Ozs7O2dDQU9RO2FBQ0gsS0FBS3NaLFFBQVo7Ozs7OztBQzVDSjs7OztJQUdxQkc7Ozs7O2lDQUtQbEIsU0FBWixFQUF1Qjs7Ozs7OztTQUtoQm1CLDJCQUFMLEdBQW1DLEtBQW5DOzs7Ozs7U0FNS2pCLFVBQUwsR0FBa0JGLFNBQWxCOzs7Ozs7U0FNS29CLG9CQUFMLEdBQTRCLElBQUk1SSxHQUFKLEVBQTVCOzs7Ozs7O1NBT0s2SSxjQUFMLEdBQXNCO2FBQU12YSxJQUFOO0tBQXRCOzs7Ozs7U0FNS3dhLGFBQUwsR0FBcUIsS0FBckI7Ozs7OztTQU1LQyxvQkFBTCxHQUE0QixFQUE1Qjs7Ozs7O1NBTUtDLDZCQUFMLEdBQXFDLElBQUl6Qiw0QkFBSixDQUFpQ0MsU0FBakMsRUFBNEN4WixRQUE1QyxDQUFyQzs7Ozs7Ozs7Ozs7MkJBT0srVSxXQUFXN0ssYUFBYTs7O1VBQ3pCLEVBQUVBLHVCQUF1QmpMLFFBQXpCLENBQUosRUFBd0M7Y0FDaEMsSUFBSU8sU0FBSixDQUFjLGdEQUFkLENBQU47OztVQUdFLENBQUNzWSx3QkFBQSxDQUFtQy9DLFNBQW5DLENBQUwsRUFBb0Q7Y0FDNUMsSUFBSWtHLFdBQUoseUJBQXFDbEcsU0FBckMsc0JBQU47OztVQUdFLEtBQUsyRSxVQUFMLENBQWdCaEIscUJBQWhCLENBQXNDM0QsU0FBdEMsQ0FBSixFQUFzRDtjQUM5QyxJQUFJNkQsS0FBSixtQ0FBeUM3RCxTQUF6QyxrQ0FBTjs7O1VBR0UsS0FBSzRGLDJCQUFULEVBQXNDO2NBQzlCLElBQUkvQixLQUFKLENBQVUsNENBQVYsQ0FBTjs7V0FFRytCLDJCQUFMLEdBQW1DLElBQW5DOztVQUVJNUMsMEJBQUo7VUFDSUUsNkJBQUo7VUFDSWlELHdCQUFKO1VBQ0lsQyxpQ0FBSjtVQUNJQywyQkFBSjtVQUNJO1lBT09rQyxXQVBQLEdBT0YsU0FBU0EsV0FBVCxDQUFxQjdYLElBQXJCLEVBQTJCO2NBQ25COFgsZ0JBQWdCeFksVUFBVVUsSUFBVixDQUF0QjtjQUNJOFgsa0JBQWtCeFosU0FBbEIsSUFBK0IsRUFBRXdaLHlCQUF5Qm5jLFFBQTNCLENBQW5DLEVBQXlFO2tCQUNqRSxJQUFJMlosS0FBSixZQUFrQnRWLElBQWxCLHFDQUFOOztpQkFFSzhYLGFBQVA7U0FaQTs7O1lBRUl4WSxZQUFZc0gsWUFBWXRILFNBQTlCO1lBQ0ksRUFBRUEscUJBQXFCaEQsTUFBdkIsQ0FBSixFQUFvQztnQkFDNUIsSUFBSUosU0FBSixDQUFjLCtEQUFkLENBQU47Ozs0QkFXa0IyYixZQUFZLG1CQUFaLENBQXBCOytCQUN1QkEsWUFBWSxzQkFBWixDQUF2QjswQkFDa0JBLFlBQVksaUJBQVosQ0FBbEI7bUNBQzJCQSxZQUFZLDBCQUFaLENBQTNCOzZCQUNxQmpSLFlBQVksb0JBQVosS0FBcUMsRUFBMUQ7T0FuQkYsQ0FvQkUsT0FBT3hLLENBQVAsRUFBVTs7T0FwQlosU0FzQlU7YUFDSGliLDJCQUFMLEdBQW1DLEtBQW5DOzs7VUFHSXJELGFBQWE7NEJBQUE7Z0NBQUE7NENBQUE7a0RBQUE7d0NBQUE7MERBQUE7OENBQUE7MkJBUUU7T0FSckI7O1dBV0tvQyxVQUFMLENBQWdCMkIsYUFBaEIsQ0FBOEJ0RyxTQUE5QixFQUF5Q3VDLFVBQXpDOztXQUVLeUQsb0JBQUwsQ0FBMEJoWixJQUExQixDQUErQmdULFNBQS9COzs7O1VBSUksQ0FBQyxLQUFLK0YsYUFBVixFQUF5QjthQUNsQkEsYUFBTCxHQUFxQixJQUFyQjthQUNLRCxjQUFMLENBQW9CO2lCQUFNLE1BQUtTLE1BQUwsRUFBTjtTQUFwQjs7Ozs7NkJBSUs7Ozs7VUFJSCxLQUFLUixhQUFMLEtBQXVCLEtBQTNCLEVBQWtDOztXQUU3QkEsYUFBTCxHQUFxQixLQUFyQjtXQUNLcEIsVUFBTCxDQUFnQmxCLG1CQUFoQixDQUFvQ3hZLFFBQXBDOzthQUVPLEtBQUsrYSxvQkFBTCxDQUEwQmpZLE1BQTFCLEdBQW1DLENBQTFDLEVBQTZDO1lBQ3JDaVMsWUFBWSxLQUFLZ0csb0JBQUwsQ0FBMEJRLEtBQTFCLEVBQWxCO1lBQ01DLFdBQVcsS0FBS1osb0JBQUwsQ0FBMEI5YSxHQUExQixDQUE4QmlWLFNBQTlCLENBQWpCO1lBQ0l5RyxRQUFKLEVBQWM7bUJBQ0hmLE9BQVQsQ0FBaUI3WSxTQUFqQjs7Ozs7Ozs7Ozs7OzJCQVNGbVQsV0FBVztVQUNQdUMsYUFBYSxLQUFLb0MsVUFBTCxDQUFnQmhCLHFCQUFoQixDQUFzQzNELFNBQXRDLENBQW5CO1VBQ0l1QyxVQUFKLEVBQWdCO2VBQ1BBLFdBQVdwTixXQUFsQjs7O2FBR0t0SSxTQUFQOzs7Ozs7Ozs7O2dDQU9VbVQsV0FBVztVQUNqQixDQUFDK0Msd0JBQUEsQ0FBbUMvQyxTQUFuQyxDQUFMLEVBQW9EO2VBQzNDeUYsUUFBUWlCLE1BQVIsQ0FBZSxJQUFJUixXQUFKLFFBQW9CbEcsU0FBcEIsNENBQWYsQ0FBUDs7O1VBR0kyRyxRQUFRLEtBQUtkLG9CQUFMLENBQTBCOWEsR0FBMUIsQ0FBOEJpVixTQUE5QixDQUFkO1VBQ0kyRyxLQUFKLEVBQVc7ZUFDRkEsTUFBTUMsU0FBTixFQUFQOzs7VUFHSUgsV0FBVyxJQUFJcEIsUUFBSixFQUFqQjtXQUNLUSxvQkFBTCxDQUEwQm5WLEdBQTFCLENBQThCc1AsU0FBOUIsRUFBeUN5RyxRQUF6Qzs7VUFFTWxFLGFBQWEsS0FBS29DLFVBQUwsQ0FBZ0JoQixxQkFBaEIsQ0FBc0MzRCxTQUF0QyxDQUFuQjs7OztVQUlJdUMsY0FBYyxLQUFLeUQsb0JBQUwsQ0FBMEJ6QixPQUExQixDQUFrQ3ZFLFNBQWxDLE1BQWlELENBQUMsQ0FBcEUsRUFBdUU7aUJBQzVEMEYsT0FBVCxDQUFpQjdZLFNBQWpCOzs7YUFHSzRaLFNBQVNHLFNBQVQsRUFBUDs7Ozs4Q0FHd0JDLE9BQU87V0FDMUJaLDZCQUFMLENBQW1DZixVQUFuQztVQUNNNEIsUUFBUSxLQUFLaEIsY0FBbkI7V0FDS0EsY0FBTCxHQUFzQjtlQUFTZSxNQUFNO2lCQUFNQyxNQUFNQyxLQUFOLENBQU47U0FBTixDQUFUO09BQXRCOzs7Ozs7QUFJSixBQUNBcGQsT0FBTyx1QkFBUCxJQUFrQ2djLHFCQUFsQztBQUNBQSxzQkFBc0I5WCxTQUF0QixDQUFnQyxRQUFoQyxJQUE0QzhYLHNCQUFzQjlYLFNBQXRCLENBQWdDbVosTUFBNUU7QUFDQXJCLHNCQUFzQjlYLFNBQXRCLENBQWdDLEtBQWhDLElBQXlDOFgsc0JBQXNCOVgsU0FBdEIsQ0FBZ0M5QyxHQUF6RTtBQUNBNGEsc0JBQXNCOVgsU0FBdEIsQ0FBZ0MsYUFBaEMsSUFBaUQ4WCxzQkFBc0I5WCxTQUF0QixDQUFnQ29aLFdBQWpGO0FBQ0F0QixzQkFBc0I5WCxTQUF0QixDQUFnQywyQkFBaEMsSUFBK0Q4WCxzQkFBc0I5WCxTQUF0QixDQUFnQ3FaLHlCQUEvRjs7QUM3TUEsYUFBZTswQkFDV3ZkLE9BQU82VyxRQUFQLENBQWdCM1MsU0FBaEIsQ0FBMEIxQyxhQURyQzs0QkFFYXhCLE9BQU82VyxRQUFQLENBQWdCM1MsU0FBaEIsQ0FBMEJzWixlQUZ2Qzt1QkFHUXhkLE9BQU82VyxRQUFQLENBQWdCM1MsU0FBaEIsQ0FBMEI2VCxVQUhsQztvQkFJSy9YLE9BQU82VyxRQUFQLENBQWdCM1MsU0FBaEIsQ0FBMEIsU0FBMUIsQ0FKTDttQkFLSWxFLE9BQU82VyxRQUFQLENBQWdCM1MsU0FBaEIsQ0FBMEIsUUFBMUIsQ0FMSjtrQkFNR2xFLE9BQU8yWCxJQUFQLENBQVl6VCxTQUFaLENBQXNCdVosU0FOekI7b0JBT0t6ZCxPQUFPMlgsSUFBUCxDQUFZelQsU0FBWixDQUFzQmlHLFdBUDNCO3FCQVFNbkssT0FBTzJYLElBQVAsQ0FBWXpULFNBQVosQ0FBc0J3WixZQVI1QjtvQkFTSzFkLE9BQU8yWCxJQUFQLENBQVl6VCxTQUFaLENBQXNCeVosV0FUM0I7cUJBVU0zZCxPQUFPMlgsSUFBUCxDQUFZelQsU0FBWixDQUFzQjBaLFlBVjVCO29CQVdLMWMsT0FBT3FGLHdCQUFQLENBQWdDdkcsT0FBTzJYLElBQVAsQ0FBWXpULFNBQTVDLEVBQXVELGFBQXZELENBWEw7d0JBWVNsRSxPQUFPNmQsT0FBUCxDQUFlM1osU0FBZixDQUF5QixjQUF6QixDQVpUO3FCQWFNaEQsT0FBT3FGLHdCQUFQLENBQWdDdkcsT0FBTzZkLE9BQVAsQ0FBZTNaLFNBQS9DLEVBQTBELFdBQTFELENBYk47d0JBY1NsRSxPQUFPNmQsT0FBUCxDQUFlM1osU0FBZixDQUF5QjRULFlBZGxDO3dCQWVTOVgsT0FBTzZkLE9BQVAsQ0FBZTNaLFNBQWYsQ0FBeUI0WixZQWZsQzsyQkFnQlk5ZCxPQUFPNmQsT0FBUCxDQUFlM1osU0FBZixDQUF5QjZaLGVBaEJyQzswQkFpQlcvZCxPQUFPNmQsT0FBUCxDQUFlM1osU0FBZixDQUF5QjhaLGNBakJwQzswQkFrQldoZSxPQUFPNmQsT0FBUCxDQUFlM1osU0FBZixDQUF5QitaLGNBbEJwQzs2QkFtQmNqZSxPQUFPNmQsT0FBUCxDQUFlM1osU0FBZixDQUF5QmdhLGlCQW5CdkM7aUNBb0JrQmxlLE9BQU82ZCxPQUFQLENBQWUzWixTQUFmLENBQXlCLHVCQUF6QixDQXBCbEI7bUJBcUJJbEUsT0FBTzZkLE9BQVAsQ0FBZTNaLFNBQWYsQ0FBeUIsU0FBekIsQ0FyQko7a0JBc0JHbEUsT0FBTzZkLE9BQVAsQ0FBZTNaLFNBQWYsQ0FBeUIsUUFBekIsQ0F0Qkg7a0JBdUJHbEUsT0FBTzZkLE9BQVAsQ0FBZTNaLFNBQWYsQ0FBeUIsUUFBekIsQ0F2Qkg7aUJBd0JFbEUsT0FBTzZkLE9BQVAsQ0FBZTNaLFNBQWYsQ0FBeUIsT0FBekIsQ0F4QkY7dUJBeUJRbEUsT0FBTzZkLE9BQVAsQ0FBZTNaLFNBQWYsQ0FBeUIsYUFBekIsQ0F6QlI7a0JBMEJHbEUsT0FBTzZkLE9BQVAsQ0FBZTNaLFNBQWYsQ0FBeUIsUUFBekIsQ0ExQkg7ZUEyQkFsRSxPQUFPbWUsV0EzQlA7eUJBNEJVamQsT0FBT3FGLHdCQUFQLENBQWdDdkcsT0FBT21lLFdBQVAsQ0FBbUJqYSxTQUFuRCxFQUE4RCxXQUE5RCxDQTVCVjtxQ0E2QnNCbEUsT0FBT21lLFdBQVAsQ0FBbUJqYSxTQUFuQixDQUE2Qix1QkFBN0I7Q0E3QnJDOztBQ0FBOzs7Ozs7O0lBT01rYTs7OztBQUVOLGlDQUFlLElBQUlBLHdCQUFKLEVBQWY7O0FDSkE7OztBQUdBLHVCQUFlLFVBQVN0RCxTQUFULEVBQW9CO1NBQzFCLGFBQVAsSUFBeUIsWUFBVzs7OzthQUl6QnFELFdBQVQsR0FBdUI7Ozs7O1VBS2YzUyxjQUFjLEtBQUtBLFdBQXpCOztVQUVNb04sYUFBYWtDLFVBQVV1RCx1QkFBVixDQUFrQzdTLFdBQWxDLENBQW5CO1VBQ0ksQ0FBQ29OLFVBQUwsRUFBaUI7Y0FDVCxJQUFJc0IsS0FBSixDQUFVLGdGQUFWLENBQU47OztVQUdJRCxvQkFBb0JyQixXQUFXcUIsaUJBQXJDOztVQUVJQSxrQkFBa0I3VixNQUFsQixLQUE2QixDQUFqQyxFQUFvQztZQUM1QnlULFdBQVV5RyxPQUFPQyxzQkFBUCxDQUE4QnhjLElBQTlCLENBQW1DVCxRQUFuQyxFQUE2Q3NYLFdBQVd2QyxTQUF4RCxDQUFoQjtlQUNPelAsY0FBUCxDQUFzQmlSLFFBQXRCLEVBQStCck0sWUFBWXRILFNBQTNDO2lCQUNRK1UsVUFBUixHQUFxQkMsbUJBQVFDLE1BQTdCO2lCQUNRa0IsZUFBUixHQUEwQnpCLFVBQTFCO2tCQUNVRSxLQUFWLENBQWdCakIsUUFBaEI7ZUFDT0EsUUFBUDs7O1VBR0kyRyxZQUFZdkUsa0JBQWtCN1YsTUFBbEIsR0FBMkIsQ0FBN0M7VUFDTXlULFVBQVVvQyxrQkFBa0J1RSxTQUFsQixDQUFoQjtVQUNJM0csWUFBWXVHLDBCQUFoQixFQUEwQztjQUNsQyxJQUFJbEUsS0FBSixDQUFVLDBHQUFWLENBQU47O3dCQUVnQnNFLFNBQWxCLElBQStCSiwwQkFBL0I7O2FBRU94WCxjQUFQLENBQXNCaVIsT0FBdEIsRUFBK0JyTSxZQUFZdEgsU0FBM0M7Z0JBQ1U0VSxLQUFWLDZCQUE2Q2pCLE9BQTdDOzthQUVPQSxPQUFQOzs7Z0JBR1UzVCxTQUFaLEdBQXdCb2EsT0FBT0gsV0FBUCxDQUFtQmphLFNBQTNDOztXQUVPaWEsV0FBUDtHQTFDc0IsRUFBeEI7OztBQ0VGOzs7OztBQUtBLHNCQUFlLFVBQVNyRCxTQUFULEVBQW9CekMsV0FBcEIsRUFBaUNvRyxPQUFqQyxFQUEwQzs7OztjQUkzQyxTQUFaLElBQXlCLFlBQW1CO3NDQUFQQyxLQUFPO1dBQUE7Ozs7UUFFcENDLDhDQUFnREQsTUFBTUUsTUFBTixDQUFhLGdCQUFROzthQUVsRW5JLGdCQUFnQmtCLElBQWhCLElBQXdCeUIsV0FBQSxDQUFzQjNDLElBQXRCLENBQS9CO0tBRm9ELENBQXREOztZQUtRb0ksT0FBUixDQUFnQnRhLEtBQWhCLENBQXNCLElBQXRCLEVBQTRCbWEsS0FBNUI7O1NBRUssSUFBSXpXLElBQUksQ0FBYixFQUFnQkEsSUFBSTBXLGdCQUFnQnZhLE1BQXBDLEVBQTRDNkQsR0FBNUMsRUFBaUQ7Z0JBQ3JDNlcsY0FBVixDQUF5QkgsZ0JBQWdCMVcsQ0FBaEIsQ0FBekI7OztRQUdFbVIsV0FBQSxDQUFzQixJQUF0QixDQUFKLEVBQWlDO1dBQzFCLElBQUluUixLQUFJLENBQWIsRUFBZ0JBLEtBQUl5VyxNQUFNdGEsTUFBMUIsRUFBa0M2RCxJQUFsQyxFQUF1QztZQUMvQndPLE9BQU9pSSxNQUFNelcsRUFBTixDQUFiO1lBQ0l3TyxnQkFBZ0JvSCxPQUFwQixFQUE2QjtvQkFDakJrQixXQUFWLENBQXNCdEksSUFBdEI7Ozs7R0FqQlI7Ozs7O2NBMEJZLFFBQVosSUFBd0IsWUFBbUI7dUNBQVBpSSxLQUFPO1dBQUE7Ozs7UUFFbkNDLDhDQUFnREQsTUFBTUUsTUFBTixDQUFhLGdCQUFROzthQUVsRW5JLGdCQUFnQmtCLElBQWhCLElBQXdCeUIsV0FBQSxDQUFzQjNDLElBQXRCLENBQS9CO0tBRm9ELENBQXREOztZQUtRdUksTUFBUixDQUFlemEsS0FBZixDQUFxQixJQUFyQixFQUEyQm1hLEtBQTNCOztTQUVLLElBQUl6VyxJQUFJLENBQWIsRUFBZ0JBLElBQUkwVyxnQkFBZ0J2YSxNQUFwQyxFQUE0QzZELEdBQTVDLEVBQWlEO2dCQUNyQzZXLGNBQVYsQ0FBeUJILGdCQUFnQjFXLENBQWhCLENBQXpCOzs7UUFHRW1SLFdBQUEsQ0FBc0IsSUFBdEIsQ0FBSixFQUFpQztXQUMxQixJQUFJblIsTUFBSSxDQUFiLEVBQWdCQSxNQUFJeVcsTUFBTXRhLE1BQTFCLEVBQWtDNkQsS0FBbEMsRUFBdUM7WUFDL0J3TyxPQUFPaUksTUFBTXpXLEdBQU4sQ0FBYjtZQUNJd08sZ0JBQWdCb0gsT0FBcEIsRUFBNkI7b0JBQ2pCa0IsV0FBVixDQUFzQnRJLElBQXRCOzs7O0dBakJSOzs7QUN4Q0Y7OztBQUdBLG9CQUFlLFVBQVNxRSxTQUFULEVBQW9CO3NCQUNqQyxDQUErQmpFLFNBQVMzUyxTQUF4QyxFQUFtRCxlQUFuRDs7Ozs7O1lBTVdtUyxTQUFULEVBQW9COztRQUVkLEtBQUtxRCxnQkFBVCxFQUEyQjtVQUNuQmQsYUFBYWtDLFVBQVVkLHFCQUFWLENBQWdDM0QsU0FBaEMsQ0FBbkI7VUFDSXVDLFVBQUosRUFBZ0I7ZUFDUCxJQUFLQSxXQUFXcE4sV0FBaEIsRUFBUDs7OztRQUlFckM7V0FDSW9WLHNCQUFQLENBQThCeGMsSUFBOUIsQ0FBbUMsSUFBbkMsRUFBeUNzVSxTQUF6QyxDQURIO2NBRVV5QyxLQUFWLENBQWdCM1AsTUFBaEI7V0FDT0EsTUFBUDtHQWxCSjs7c0JBcUJBLENBQStCME4sU0FBUzNTLFNBQXhDLEVBQW1ELFlBQW5EOzs7Ozs7O1lBT1d1UyxJQUFULEVBQWV3SSxJQUFmLEVBQXFCO1FBQ2JDLFFBQVFaLE9BQU9hLG1CQUFQLENBQTJCcGQsSUFBM0IsQ0FBZ0MsSUFBaEMsRUFBc0MwVSxJQUF0QyxFQUE0Q3dJLElBQTVDLENBQWQ7O1FBRUksQ0FBQyxLQUFLdkYsZ0JBQVYsRUFBNEI7Z0JBQ2hCMEYsU0FBVixDQUFvQkYsS0FBcEI7S0FERixNQUVPO2dCQUNLcEYsbUJBQVYsQ0FBOEJvRixLQUE5Qjs7V0FFS0EsS0FBUDtHQWZKOztNQWtCTUcsVUFBVSw4QkFBaEI7O3NCQUVBLENBQStCeEksU0FBUzNTLFNBQXhDLEVBQW1ELGlCQUFuRDs7Ozs7OztZQU9XeVcsU0FBVCxFQUFvQnRFLFNBQXBCLEVBQStCOztRQUV6QixLQUFLcUQsZ0JBQUwsS0FBMEJpQixjQUFjLElBQWQsSUFBc0JBLGNBQWMwRSxPQUE5RCxDQUFKLEVBQTRFO1VBQ3BFekcsYUFBYWtDLFVBQVVkLHFCQUFWLENBQWdDM0QsU0FBaEMsQ0FBbkI7VUFDSXVDLFVBQUosRUFBZ0I7ZUFDUCxJQUFLQSxXQUFXcE4sV0FBaEIsRUFBUDs7OztRQUlFckM7V0FDSW1XLHdCQUFQLENBQWdDdmQsSUFBaEMsQ0FBcUMsSUFBckMsRUFBMkM0WSxTQUEzQyxFQUFzRHRFLFNBQXRELENBREg7Y0FFVXlDLEtBQVYsQ0FBZ0IzUCxNQUFoQjtXQUNPQSxNQUFQO0dBbkJKOztrQkFzQmdCMlIsU0FBaEIsRUFBMkJqRSxTQUFTM1MsU0FBcEMsRUFBK0M7YUFDcENvYSxPQUFPaUIsZ0JBRDZCO1lBRXJDakIsT0FBT2tCO0dBRmpCOzs7QUNyRUY7OztBQUdBLGdCQUFlLFVBQVMxRSxTQUFULEVBQW9COzs7O3NCQUlqQyxDQUErQm5ELEtBQUt6VCxTQUFwQyxFQUErQyxjQUEvQzs7Ozs7OztZQU9XdVMsSUFBVCxFQUFlZ0osT0FBZixFQUF3QjtRQUNsQmhKLGdCQUFnQmlKLGdCQUFwQixFQUFzQztVQUM5QkMsZ0JBQWdCM1ksTUFBTTlDLFNBQU4sQ0FBZ0JnQyxLQUFoQixDQUFzQjNCLEtBQXRCLENBQTRCa1MsS0FBS21KLFVBQWpDLENBQXRCO1VBQ01DLGdCQUFldkIsT0FBT3dCLGlCQUFQLENBQXlCL2QsSUFBekIsQ0FBOEIsSUFBOUIsRUFBb0MwVSxJQUFwQyxFQUEwQ2dKLE9BQTFDLENBQXJCOzs7OztVQUtJckcsV0FBQSxDQUFzQixJQUF0QixDQUFKLEVBQWlDO2FBQzFCLElBQUluUixJQUFJLENBQWIsRUFBZ0JBLElBQUkwWCxjQUFjdmIsTUFBbEMsRUFBMEM2RCxHQUExQyxFQUErQztvQkFDbkM4VyxXQUFWLENBQXNCWSxjQUFjMVgsQ0FBZCxDQUF0Qjs7OzthQUlHNFgsYUFBUDs7O1FBR0lFLG1CQUFtQjNHLFdBQUEsQ0FBc0IzQyxJQUF0QixDQUF6QjtRQUNNb0osZUFBZXZCLE9BQU93QixpQkFBUCxDQUF5Qi9kLElBQXpCLENBQThCLElBQTlCLEVBQW9DMFUsSUFBcEMsRUFBMENnSixPQUExQyxDQUFyQjs7UUFFSU0sZ0JBQUosRUFBc0I7Z0JBQ1ZqQixjQUFWLENBQXlCckksSUFBekI7OztRQUdFMkMsV0FBQSxDQUFzQixJQUF0QixDQUFKLEVBQWlDO2dCQUNyQjJGLFdBQVYsQ0FBc0J0SSxJQUF0Qjs7O1dBR0tvSixZQUFQO0dBbkNKOztzQkFzQ0EsQ0FBK0JsSSxLQUFLelQsU0FBcEMsRUFBK0MsYUFBL0M7Ozs7OztZQU1XdVMsSUFBVCxFQUFlO1FBQ1RBLGdCQUFnQmlKLGdCQUFwQixFQUFzQztVQUM5QkMsZ0JBQWdCM1ksTUFBTTlDLFNBQU4sQ0FBZ0JnQyxLQUFoQixDQUFzQjNCLEtBQXRCLENBQTRCa1MsS0FBS21KLFVBQWpDLENBQXRCO1VBQ01DLGlCQUFldkIsT0FBTzBCLGdCQUFQLENBQXdCamUsSUFBeEIsQ0FBNkIsSUFBN0IsRUFBbUMwVSxJQUFuQyxDQUFyQjs7Ozs7VUFLSTJDLFdBQUEsQ0FBc0IsSUFBdEIsQ0FBSixFQUFpQzthQUMxQixJQUFJblIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMFgsY0FBY3ZiLE1BQWxDLEVBQTBDNkQsR0FBMUMsRUFBK0M7b0JBQ25DOFcsV0FBVixDQUFzQlksY0FBYzFYLENBQWQsQ0FBdEI7Ozs7YUFJRzRYLGNBQVA7OztRQUdJRSxtQkFBbUIzRyxXQUFBLENBQXNCM0MsSUFBdEIsQ0FBekI7UUFDTW9KLGVBQWV2QixPQUFPMEIsZ0JBQVAsQ0FBd0JqZSxJQUF4QixDQUE2QixJQUE3QixFQUFtQzBVLElBQW5DLENBQXJCOztRQUVJc0osZ0JBQUosRUFBc0I7Z0JBQ1ZqQixjQUFWLENBQXlCckksSUFBekI7OztRQUdFMkMsV0FBQSxDQUFzQixJQUF0QixDQUFKLEVBQWlDO2dCQUNyQjJGLFdBQVYsQ0FBc0J0SSxJQUF0Qjs7O1dBR0tvSixZQUFQO0dBbENKOztzQkFxQ0EsQ0FBK0JsSSxLQUFLelQsU0FBcEMsRUFBK0MsV0FBL0M7Ozs7OztZQU1XK2EsSUFBVCxFQUFlO1FBQ1BDLFFBQVFaLE9BQU8yQixjQUFQLENBQXNCbGUsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUNrZCxJQUFqQyxDQUFkOzs7UUFHSSxDQUFDLEtBQUtpQixhQUFMLENBQW1CeEcsZ0JBQXhCLEVBQTBDO2dCQUM5QjBGLFNBQVYsQ0FBb0JGLEtBQXBCO0tBREYsTUFFTztnQkFDS3BGLG1CQUFWLENBQThCb0YsS0FBOUI7O1dBRUtBLEtBQVA7R0FmSjs7c0JBa0JBLENBQStCdkgsS0FBS3pULFNBQXBDLEVBQStDLGFBQS9DOzs7Ozs7WUFNV3VTLElBQVQsRUFBZTtRQUNQc0osbUJBQW1CM0csV0FBQSxDQUFzQjNDLElBQXRCLENBQXpCO1FBQ01vSixlQUFldkIsT0FBTzZCLGdCQUFQLENBQXdCcGUsSUFBeEIsQ0FBNkIsSUFBN0IsRUFBbUMwVSxJQUFuQyxDQUFyQjs7UUFFSXNKLGdCQUFKLEVBQXNCO2dCQUNWakIsY0FBVixDQUF5QnJJLElBQXpCOzs7V0FHS29KLFlBQVA7R0FkSjs7c0JBaUJBLENBQStCbEksS0FBS3pULFNBQXBDLEVBQStDLGNBQS9DOzs7Ozs7O1lBT1drYyxZQUFULEVBQXVCQyxZQUF2QixFQUFxQztRQUMvQkQsd0JBQXdCVixnQkFBNUIsRUFBOEM7VUFDdENDLGdCQUFnQjNZLE1BQU05QyxTQUFOLENBQWdCZ0MsS0FBaEIsQ0FBc0IzQixLQUF0QixDQUE0QjZiLGFBQWFSLFVBQXpDLENBQXRCO1VBQ01DLGlCQUFldkIsT0FBT2dDLGlCQUFQLENBQXlCdmUsSUFBekIsQ0FBOEIsSUFBOUIsRUFBb0NxZSxZQUFwQyxFQUFrREMsWUFBbEQsQ0FBckI7Ozs7O1VBS0lqSCxXQUFBLENBQXNCLElBQXRCLENBQUosRUFBaUM7a0JBQ3JCMEYsY0FBVixDQUF5QnVCLFlBQXpCO2FBQ0ssSUFBSXBZLElBQUksQ0FBYixFQUFnQkEsSUFBSTBYLGNBQWN2YixNQUFsQyxFQUEwQzZELEdBQTFDLEVBQStDO29CQUNuQzhXLFdBQVYsQ0FBc0JZLGNBQWMxWCxDQUFkLENBQXRCOzs7O2FBSUc0WCxjQUFQOzs7UUFHSVUsMkJBQTJCbkgsV0FBQSxDQUFzQmdILFlBQXRCLENBQWpDO1FBQ01QLGVBQWV2QixPQUFPZ0MsaUJBQVAsQ0FBeUJ2ZSxJQUF6QixDQUE4QixJQUE5QixFQUFvQ3FlLFlBQXBDLEVBQWtEQyxZQUFsRCxDQUFyQjtRQUNNRyxrQkFBa0JwSCxXQUFBLENBQXNCLElBQXRCLENBQXhCOztRQUVJb0gsZUFBSixFQUFxQjtnQkFDVDFCLGNBQVYsQ0FBeUJ1QixZQUF6Qjs7O1FBR0VFLHdCQUFKLEVBQThCO2dCQUNsQnpCLGNBQVYsQ0FBeUJzQixZQUF6Qjs7O1FBR0VJLGVBQUosRUFBcUI7Z0JBQ1R6QixXQUFWLENBQXNCcUIsWUFBdEI7OztXQUdLUCxZQUFQO0dBekNKOztXQTZDU1ksaUJBQVQsQ0FBMkJwSSxXQUEzQixFQUF3Q3FJLGNBQXhDLEVBQXdEO1dBQy9DdmYsY0FBUCxDQUFzQmtYLFdBQXRCLEVBQW1DLGFBQW5DLEVBQWtEO2tCQUNwQ3FJLGVBQWVDLFVBRHFCO29CQUVsQyxJQUZrQztXQUczQ0QsZUFBZXRmLEdBSDRCOzhCQUl2QixhQUFTd2YsYUFBVCxFQUF3Qjs7WUFFM0MsS0FBS2xKLFFBQUwsS0FBa0JDLEtBQUtrSixTQUEzQixFQUFzQzt5QkFDckI5WixHQUFmLENBQW1CaEYsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEI2ZSxhQUE5Qjs7OztZQUlFRSxlQUFlNWQsU0FBbkI7OztZQUdJLEtBQUtvVSxVQUFULEVBQXFCOzs7Y0FHYnNJLGFBQWEsS0FBS0EsVUFBeEI7Y0FDTW1CLG1CQUFtQm5CLFdBQVd4YixNQUFwQztjQUNJMmMsbUJBQW1CLENBQW5CLElBQXdCM0gsV0FBQSxDQUFzQixJQUF0QixDQUE1QixFQUF5RDs7MkJBRXhDLElBQUlwUyxLQUFKLENBQVUrWixnQkFBVixDQUFmO2lCQUNLLElBQUk5WSxJQUFJLENBQWIsRUFBZ0JBLElBQUk4WSxnQkFBcEIsRUFBc0M5WSxHQUF0QyxFQUEyQzsyQkFDNUJBLENBQWIsSUFBa0IyWCxXQUFXM1gsQ0FBWCxDQUFsQjs7Ozs7dUJBS1NsQixHQUFmLENBQW1CaEYsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEI2ZSxhQUE5Qjs7WUFFSUUsWUFBSixFQUFrQjtlQUNYLElBQUk3WSxLQUFJLENBQWIsRUFBZ0JBLEtBQUk2WSxhQUFhMWMsTUFBakMsRUFBeUM2RCxJQUF6QyxFQUE4QztzQkFDbEM2VyxjQUFWLENBQXlCZ0MsYUFBYTdZLEVBQWIsQ0FBekI7Ozs7S0FoQ1I7OztNQXVDRXFXLE9BQU8wQyxnQkFBUCxJQUEyQjFDLE9BQU8wQyxnQkFBUCxDQUF3QjVmLEdBQXZELEVBQTREO3NCQUN4Q3VXLEtBQUt6VCxTQUF2QixFQUFrQ29hLE9BQU8wQyxnQkFBekM7R0FERixNQUVPO2NBQ0tDLFFBQVYsQ0FBbUIsVUFBU3BKLE9BQVQsRUFBa0I7d0JBQ2pCQSxPQUFsQixFQUEyQjtvQkFDYixJQURhO3NCQUVYLElBRlc7OztnQ0FLQSxlQUFXOztjQUU1QnFKLFFBQVEsRUFBZDs7ZUFFSyxJQUFJalosSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUsyWCxVQUFMLENBQWdCeGIsTUFBcEMsRUFBNEM2RCxHQUE1QyxFQUFpRDtrQkFDekM1RSxJQUFOLENBQVcsS0FBS3VjLFVBQUwsQ0FBZ0IzWCxDQUFoQixFQUFtQmtaLFdBQTlCOzs7aUJBR0tELE1BQU1sZCxJQUFOLENBQVcsRUFBWCxDQUFQO1NBYnVCO2dDQWVBLGFBQVM0YyxhQUFULEVBQXdCO2lCQUN4QyxLQUFLdEosVUFBWixFQUF3QjttQkFDZjZJLGdCQUFQLENBQXdCcGUsSUFBeEIsQ0FBNkIsSUFBN0IsRUFBbUMsS0FBS3VWLFVBQXhDOztpQkFFSzBJLGdCQUFQLENBQXdCamUsSUFBeEIsQ0FBNkIsSUFBN0IsRUFBbUNULFNBQVM4ZixjQUFULENBQXdCUixhQUF4QixDQUFuQzs7T0FuQko7S0FERjs7OztBQ3BNSjs7Ozs7QUFLQSxxQkFBZSxVQUFTOUYsU0FBVCxFQUFvQnpDLFdBQXBCLEVBQWlDb0csT0FBakMsRUFBMEM7Ozs7Y0FJM0MsUUFBWixJQUF3QixZQUFtQjtzQ0FBUEMsS0FBTztXQUFBOzs7O1FBRW5DQyw4Q0FBZ0RELE1BQU1FLE1BQU4sQ0FBYSxnQkFBUTs7YUFFbEVuSSxnQkFBZ0JrQixJQUFoQixJQUF3QnlCLFdBQUEsQ0FBc0IzQyxJQUF0QixDQUEvQjtLQUZvRCxDQUF0RDs7WUFLUTRLLE1BQVIsQ0FBZTljLEtBQWYsQ0FBcUIsSUFBckIsRUFBMkJtYSxLQUEzQjs7U0FFSyxJQUFJelcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMFcsZ0JBQWdCdmEsTUFBcEMsRUFBNEM2RCxHQUE1QyxFQUFpRDtnQkFDckM2VyxjQUFWLENBQXlCSCxnQkFBZ0IxVyxDQUFoQixDQUF6Qjs7O1FBR0VtUixXQUFBLENBQXNCLElBQXRCLENBQUosRUFBaUM7V0FDMUIsSUFBSW5SLEtBQUksQ0FBYixFQUFnQkEsS0FBSXlXLE1BQU10YSxNQUExQixFQUFrQzZELElBQWxDLEVBQXVDO1lBQy9Cd08sT0FBT2lJLE1BQU16VyxFQUFOLENBQWI7WUFDSXdPLGdCQUFnQm9ILE9BQXBCLEVBQTZCO29CQUNqQmtCLFdBQVYsQ0FBc0J0SSxJQUF0Qjs7OztHQWpCUjs7Ozs7Y0EwQlksT0FBWixJQUF1QixZQUFtQjt1Q0FBUGlJLEtBQU87V0FBQTs7OztRQUVsQ0MsOENBQWdERCxNQUFNRSxNQUFOLENBQWEsZ0JBQVE7O2FBRWxFbkksZ0JBQWdCa0IsSUFBaEIsSUFBd0J5QixXQUFBLENBQXNCM0MsSUFBdEIsQ0FBL0I7S0FGb0QsQ0FBdEQ7O1lBS1E2SyxLQUFSLENBQWMvYyxLQUFkLENBQW9CLElBQXBCLEVBQTBCbWEsS0FBMUI7O1NBRUssSUFBSXpXLElBQUksQ0FBYixFQUFnQkEsSUFBSTBXLGdCQUFnQnZhLE1BQXBDLEVBQTRDNkQsR0FBNUMsRUFBaUQ7Z0JBQ3JDNlcsY0FBVixDQUF5QkgsZ0JBQWdCMVcsQ0FBaEIsQ0FBekI7OztRQUdFbVIsV0FBQSxDQUFzQixJQUF0QixDQUFKLEVBQWlDO1dBQzFCLElBQUluUixNQUFJLENBQWIsRUFBZ0JBLE1BQUl5VyxNQUFNdGEsTUFBMUIsRUFBa0M2RCxLQUFsQyxFQUF1QztZQUMvQndPLE9BQU9pSSxNQUFNelcsR0FBTixDQUFiO1lBQ0l3TyxnQkFBZ0JvSCxPQUFwQixFQUE2QjtvQkFDakJrQixXQUFWLENBQXNCdEksSUFBdEI7Ozs7R0FqQlI7Ozs7O2NBMEJZLGFBQVosSUFBNkIsWUFBbUI7dUNBQVBpSSxLQUFPO1dBQUE7Ozs7UUFFeENDLDhDQUFnREQsTUFBTUUsTUFBTixDQUFhLGdCQUFROzthQUVsRW5JLGdCQUFnQmtCLElBQWhCLElBQXdCeUIsV0FBQSxDQUFzQjNDLElBQXRCLENBQS9CO0tBRm9ELENBQXREOztRQUtNOEssZUFBZW5JLFdBQUEsQ0FBc0IsSUFBdEIsQ0FBckI7O1lBRVFvSSxXQUFSLENBQW9CamQsS0FBcEIsQ0FBMEIsSUFBMUIsRUFBZ0NtYSxLQUFoQzs7U0FFSyxJQUFJelcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMFcsZ0JBQWdCdmEsTUFBcEMsRUFBNEM2RCxHQUE1QyxFQUFpRDtnQkFDckM2VyxjQUFWLENBQXlCSCxnQkFBZ0IxVyxDQUFoQixDQUF6Qjs7O1FBR0VzWixZQUFKLEVBQWtCO2dCQUNOekMsY0FBVixDQUF5QixJQUF6QjtXQUNLLElBQUk3VyxNQUFJLENBQWIsRUFBZ0JBLE1BQUl5VyxNQUFNdGEsTUFBMUIsRUFBa0M2RCxLQUFsQyxFQUF1QztZQUMvQndPLE9BQU9pSSxNQUFNelcsR0FBTixDQUFiO1lBQ0l3TyxnQkFBZ0JvSCxPQUFwQixFQUE2QjtvQkFDakJrQixXQUFWLENBQXNCdEksSUFBdEI7Ozs7R0FwQlI7O2NBMEJZLFFBQVosSUFBd0IsWUFBVztRQUMzQjhLLGVBQWVuSSxXQUFBLENBQXNCLElBQXRCLENBQXJCOztZQUVRcUksTUFBUixDQUFlMWYsSUFBZixDQUFvQixJQUFwQjs7UUFFSXdmLFlBQUosRUFBa0I7Z0JBQ056QyxjQUFWLENBQXlCLElBQXpCOztHQU5KOzs7QUM1RkY7OztBQUdBLG1CQUFlLFVBQVNoRSxTQUFULEVBQW9CO01BQzdCd0QsT0FBT29ELG9CQUFYLEVBQWlDO3dCQUMvQixDQUErQjdELFFBQVEzWixTQUF2QyxFQUFrRCxjQUFsRDs7Ozs7O2NBTVd5ZCxJQUFULEVBQWU7VUFDUHpKLGFBQWFvRyxPQUFPb0Qsb0JBQVAsQ0FBNEIzZixJQUE1QixDQUFpQyxJQUFqQyxFQUF1QzRmLElBQXZDLENBQW5CO1dBQ0t4SixlQUFMLEdBQXVCRCxVQUF2QjthQUNPQSxVQUFQO0tBVEo7R0FERixNQVlPO1lBQ0cwSixJQUFSLENBQWEsMERBQWI7OztXQUlPQyxlQUFULENBQXlCeEosV0FBekIsRUFBc0NxSSxjQUF0QyxFQUFzRDtXQUM3Q3ZmLGNBQVAsQ0FBc0JrWCxXQUF0QixFQUFtQyxXQUFuQyxFQUFnRDtrQkFDbENxSSxlQUFlQyxVQURtQjtvQkFFaEMsSUFGZ0M7V0FHekNELGVBQWV0ZixHQUgwQjtpQ0FJbEIsYUFBUzBnQixVQUFULEVBQXFCOzs7WUFDekN0TCxpQkFBYzRDLFdBQUEsQ0FBc0IsSUFBdEIsQ0FBcEI7Ozs7Ozs7O1lBUUkySSxrQkFBa0I3ZSxTQUF0QjtZQUNJc1QsY0FBSixFQUFpQjs0QkFDRyxFQUFsQjtvQ0FDQSxDQUFxQyxJQUFyQyxFQUEyQyxtQkFBVztnQkFDaERxQixpQkFBSixFQUFzQjs4QkFDSnhVLElBQWhCLENBQXFCd1UsT0FBckI7O1dBRko7Ozt1QkFPYTlRLEdBQWYsQ0FBbUJoRixJQUFuQixDQUF3QixJQUF4QixFQUE4QitmLFVBQTlCOztZQUVJQyxlQUFKLEVBQXFCO2VBQ2QsSUFBSTlaLElBQUksQ0FBYixFQUFnQkEsSUFBSThaLGdCQUFnQjNkLE1BQXBDLEVBQTRDNkQsR0FBNUMsRUFBaUQ7Z0JBQ3pDNFAsVUFBVWtLLGdCQUFnQjlaLENBQWhCLENBQWhCO2dCQUNJNFAsUUFBUW9CLFVBQVIsS0FBdUJDLG1CQUFRQyxNQUFuQyxFQUEyQzt3QkFDL0JJLG9CQUFWLENBQStCMUIsT0FBL0I7Ozs7Ozs7WUFPRixDQUFDLEtBQUtxSSxhQUFMLENBQW1CeEcsZ0JBQXhCLEVBQTBDO29CQUM5QjBGLFNBQVYsQ0FBb0IsSUFBcEI7U0FERixNQUVPO29CQUNLdEYsbUJBQVYsQ0FBOEIsSUFBOUI7O2VBRUtnSSxVQUFQOztLQXpDSjs7O01BOENFeEQsT0FBTzBELGlCQUFQLElBQTRCMUQsT0FBTzBELGlCQUFQLENBQXlCNWdCLEdBQXpELEVBQThEO29CQUM1Q3ljLFFBQVEzWixTQUF4QixFQUFtQ29hLE9BQU8wRCxpQkFBMUM7R0FERixNQUVPLElBQUkxRCxPQUFPMkQscUJBQVAsSUFBZ0MzRCxPQUFPMkQscUJBQVAsQ0FBNkI3Z0IsR0FBakUsRUFBc0U7b0JBQzNEK2MsWUFBWWphLFNBQTVCLEVBQXVDb2EsT0FBTzJELHFCQUE5QztHQURLLE1BRUE7OztRQUdDQyxTQUFTNUQsT0FBT0Msc0JBQVAsQ0FBOEJ4YyxJQUE5QixDQUFtQ1QsUUFBbkMsRUFBNkMsS0FBN0MsQ0FBZjs7Y0FFVTJmLFFBQVYsQ0FBbUIsVUFBU3BKLE9BQVQsRUFBa0I7c0JBQ25CQSxPQUFoQixFQUF5QjtvQkFDWCxJQURXO3NCQUVULElBRlM7Ozs7bUNBTUssZUFBVztpQkFDOUJ5RyxPQUFPMkIsY0FBUCxDQUFzQmxlLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLElBQWpDLEVBQXVDb2dCLFNBQTlDO1NBUHFCOzs7O21DQVlLLGFBQVN2QixhQUFULEVBQXdCOzs7OztjQUs1Q3dCLFVBQVUsS0FBSy9MLFNBQUwsS0FBbUIsVUFBbkIsc0NBQXNFLElBQXRDLENBQTZDK0wsT0FBN0UsR0FBdUYsSUFBdkc7aUJBQ09ELFNBQVAsR0FBbUJ2QixhQUFuQjs7aUJBRU93QixRQUFReEMsVUFBUixDQUFtQnhiLE1BQW5CLEdBQTRCLENBQW5DLEVBQXNDO21CQUM3QitiLGdCQUFQLENBQXdCcGUsSUFBeEIsQ0FBNkJxZ0IsT0FBN0IsRUFBc0NBLFFBQVF4QyxVQUFSLENBQW1CLENBQW5CLENBQXRDOztpQkFFS3NDLE9BQU90QyxVQUFQLENBQWtCeGIsTUFBbEIsR0FBMkIsQ0FBbEMsRUFBcUM7bUJBQzVCNGIsZ0JBQVAsQ0FBd0JqZSxJQUF4QixDQUE2QnFnQixPQUE3QixFQUFzQ0YsT0FBT3RDLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FBdEM7OztPQXhCTjtLQURGOzs7c0JBaUNGLENBQStCL0IsUUFBUTNaLFNBQXZDLEVBQWtELGNBQWxEOzs7Ozs7WUFNV1UsSUFBVCxFQUFlOFYsUUFBZixFQUF5Qjs7UUFFbkIsS0FBS3pCLFVBQUwsS0FBb0JDLG1CQUFRQyxNQUFoQyxFQUF3QzthQUMvQm1GLE9BQU8rRCxvQkFBUCxDQUE0QnRnQixJQUE1QixDQUFpQyxJQUFqQyxFQUF1QzZDLElBQXZDLEVBQTZDOFYsUUFBN0MsQ0FBUDs7O1FBR0lELFdBQVc2RCxPQUFPZ0Usb0JBQVAsQ0FBNEJ2Z0IsSUFBNUIsQ0FBaUMsSUFBakMsRUFBdUM2QyxJQUF2QyxDQUFqQjtXQUNPeWQsb0JBQVAsQ0FBNEJ0Z0IsSUFBNUIsQ0FBaUMsSUFBakMsRUFBdUM2QyxJQUF2QyxFQUE2QzhWLFFBQTdDO2VBQ1c0RCxPQUFPZ0Usb0JBQVAsQ0FBNEJ2Z0IsSUFBNUIsQ0FBaUMsSUFBakMsRUFBdUM2QyxJQUF2QyxDQUFYO2NBQ1UwVix3QkFBVixDQUFtQyxJQUFuQyxFQUF5QzFWLElBQXpDLEVBQStDNlYsUUFBL0MsRUFBeURDLFFBQXpELEVBQW1FLElBQW5FO0dBZko7O3NCQWtCQSxDQUErQm1ELFFBQVEzWixTQUF2QyxFQUFrRCxnQkFBbEQ7Ozs7Ozs7WUFPV3lXLFNBQVQsRUFBb0IvVixJQUFwQixFQUEwQjhWLFFBQTFCLEVBQW9DOztRQUU5QixLQUFLekIsVUFBTCxLQUFvQkMsbUJBQVFDLE1BQWhDLEVBQXdDO2FBQy9CbUYsT0FBT2lFLHNCQUFQLENBQThCeGdCLElBQTlCLENBQW1DLElBQW5DLEVBQXlDNFksU0FBekMsRUFBb0QvVixJQUFwRCxFQUEwRDhWLFFBQTFELENBQVA7OztRQUdJRCxXQUFXNkQsT0FBT2tFLHNCQUFQLENBQThCemdCLElBQTlCLENBQW1DLElBQW5DLEVBQXlDNFksU0FBekMsRUFBb0QvVixJQUFwRCxDQUFqQjtXQUNPMmQsc0JBQVAsQ0FBOEJ4Z0IsSUFBOUIsQ0FBbUMsSUFBbkMsRUFBeUM0WSxTQUF6QyxFQUFvRC9WLElBQXBELEVBQTBEOFYsUUFBMUQ7ZUFDVzRELE9BQU9rRSxzQkFBUCxDQUE4QnpnQixJQUE5QixDQUFtQyxJQUFuQyxFQUF5QzRZLFNBQXpDLEVBQW9EL1YsSUFBcEQsQ0FBWDtjQUNVMFYsd0JBQVYsQ0FBbUMsSUFBbkMsRUFBeUMxVixJQUF6QyxFQUErQzZWLFFBQS9DLEVBQXlEQyxRQUF6RCxFQUFtRUMsU0FBbkU7R0FoQko7O3NCQW1CQSxDQUErQmtELFFBQVEzWixTQUF2QyxFQUFrRCxpQkFBbEQ7Ozs7O1lBS1dVLElBQVQsRUFBZTs7UUFFVCxLQUFLcVUsVUFBTCxLQUFvQkMsbUJBQVFDLE1BQWhDLEVBQXdDO2FBQy9CbUYsT0FBT21FLHVCQUFQLENBQStCMWdCLElBQS9CLENBQW9DLElBQXBDLEVBQTBDNkMsSUFBMUMsQ0FBUDs7O1FBR0k2VixXQUFXNkQsT0FBT2dFLG9CQUFQLENBQTRCdmdCLElBQTVCLENBQWlDLElBQWpDLEVBQXVDNkMsSUFBdkMsQ0FBakI7V0FDTzZkLHVCQUFQLENBQStCMWdCLElBQS9CLENBQW9DLElBQXBDLEVBQTBDNkMsSUFBMUM7UUFDSTZWLGFBQWEsSUFBakIsRUFBdUI7Z0JBQ1hILHdCQUFWLENBQW1DLElBQW5DLEVBQXlDMVYsSUFBekMsRUFBK0M2VixRQUEvQyxFQUF5RCxJQUF6RCxFQUErRCxJQUEvRDs7R0FkTjs7c0JBa0JBLENBQStCb0QsUUFBUTNaLFNBQXZDLEVBQWtELG1CQUFsRDs7Ozs7O1lBTVd5VyxTQUFULEVBQW9CL1YsSUFBcEIsRUFBMEI7O1FBRXBCLEtBQUtxVSxVQUFMLEtBQW9CQyxtQkFBUUMsTUFBaEMsRUFBd0M7YUFDL0JtRixPQUFPb0UseUJBQVAsQ0FBaUMzZ0IsSUFBakMsQ0FBc0MsSUFBdEMsRUFBNEM0WSxTQUE1QyxFQUF1RC9WLElBQXZELENBQVA7OztRQUdJNlYsV0FBVzZELE9BQU9rRSxzQkFBUCxDQUE4QnpnQixJQUE5QixDQUFtQyxJQUFuQyxFQUF5QzRZLFNBQXpDLEVBQW9EL1YsSUFBcEQsQ0FBakI7V0FDTzhkLHlCQUFQLENBQWlDM2dCLElBQWpDLENBQXNDLElBQXRDLEVBQTRDNFksU0FBNUMsRUFBdUQvVixJQUF2RDs7OztRQUlNOFYsV0FBVzRELE9BQU9rRSxzQkFBUCxDQUE4QnpnQixJQUE5QixDQUFtQyxJQUFuQyxFQUF5QzRZLFNBQXpDLEVBQW9EL1YsSUFBcEQsQ0FBakI7UUFDSTZWLGFBQWFDLFFBQWpCLEVBQTJCO2dCQUNmSix3QkFBVixDQUFtQyxJQUFuQyxFQUF5QzFWLElBQXpDLEVBQStDNlYsUUFBL0MsRUFBeURDLFFBQXpELEVBQW1FQyxTQUFuRTs7R0FuQk47O1dBd0JTZ0ksMkJBQVQsQ0FBcUN0SyxXQUFyQyxFQUFrRHVLLFVBQWxELEVBQThEO3dCQUM1RCxDQUErQnZLLFdBQS9CLEVBQTRDLHVCQUE1Qzs7Ozs7OztjQU9Xd0ssS0FBVCxFQUFnQmhMLE9BQWhCLEVBQXlCO1VBQ2pCMEosZUFBZW5JLFdBQUEsQ0FBc0J2QixPQUF0QixDQUFyQjtVQUNNaUw7aUJBQ1EvZ0IsSUFBWCxDQUFnQixJQUFoQixFQUFzQjhnQixLQUF0QixFQUE2QmhMLE9BQTdCLENBREg7O1VBR0kwSixZQUFKLEVBQWtCO2tCQUNOekMsY0FBVixDQUF5QmpILE9BQXpCOzs7VUFHRXVCLFdBQUEsQ0FBc0IwSixlQUF0QixDQUFKLEVBQTRDO2tCQUNoQy9ELFdBQVYsQ0FBc0JsSCxPQUF0Qjs7YUFFS2lMLGVBQVA7S0FuQko7OztNQXVCRXhFLE9BQU95RSxpQ0FBWCxFQUE4QztnQ0FDaEI1RSxZQUFZamEsU0FBeEMsRUFBbURvYSxPQUFPeUUsaUNBQTFEO0dBREYsTUFFTyxJQUFJekUsT0FBTzBFLDZCQUFYLEVBQTBDO2dDQUNuQm5GLFFBQVEzWixTQUFwQyxFQUErQ29hLE9BQU8wRSw2QkFBdEQ7R0FESyxNQUVBO1lBQ0dwQixJQUFSLENBQWEsbUVBQWI7OztrQkFJYzlHLFNBQWhCLEVBQTJCK0MsUUFBUTNaLFNBQW5DLEVBQThDO2FBQ25Db2EsT0FBTzJFLGVBRDRCO1lBRXBDM0UsT0FBTzRFO0dBRmpCOztpQkFLZXBJLFNBQWYsRUFBMEIrQyxRQUFRM1osU0FBbEMsRUFBNkM7WUFDbkNvYSxPQUFPNkUsY0FENEI7V0FFcEM3RSxPQUFPOEUsYUFGNkI7aUJBRzlCOUUsT0FBTytFLG1CQUh1QjtZQUluQy9FLE9BQU9nRjtHQUpqQjs7O0FDM09GOzs7Ozs7Ozs7O0FBVUEsQUFRQSxJQUFNQyxzQkFBc0J2akIsT0FBTyxnQkFBUCxDQUE1Qjs7QUFFQSxJQUFJLENBQUN1akIsbUJBQUQsSUFDQ0Esb0JBQW9CLGVBQXBCLENBREQsSUFFRSxPQUFPQSxvQkFBb0IsUUFBcEIsQ0FBUCxJQUF3QyxVQUYxQyxJQUdFLE9BQU9BLG9CQUFvQixLQUFwQixDQUFQLElBQXFDLFVBSDNDLEVBR3dEOztNQUVoRHpJLFlBQVksSUFBSXZDLHNCQUFKLEVBQWxCOzttQkFFaUJ1QyxTQUFqQjtnQkFDY0EsU0FBZDtZQUNVQSxTQUFWO2VBQ2FBLFNBQWI7OztXQUdTcEIsZ0JBQVQsR0FBNEIsSUFBNUI7OztNQUdNelosaUJBQWlCLElBQUkrYixxQkFBSixDQUEwQmxCLFNBQTFCLENBQXZCOztTQUVPM1osY0FBUCxDQUFzQm5CLE1BQXRCLEVBQThCLGdCQUE5QixFQUFnRDtrQkFDaEMsSUFEZ0M7Z0JBRWxDLElBRmtDO1dBR3ZDQztHQUhUOzs7QUN0Q0Y7Ozs7Ozs7Ozs7O0FBV0EsQ0FBQyxVQUFTRSxNQUFULEVBQWlCO01BQ1pBLE9BQU9xakIsa0JBQVgsRUFBK0I7OztNQUczQkMscUJBQXFCLElBQUk3TixPQUFKLEVBQXpCO01BQ0k4TixZQUFKO01BQ0ksZUFBZTdjLElBQWYsQ0FBb0I4YyxVQUFVQyxTQUE5QixDQUFKLEVBQThDO21CQUM3QkMsVUFBZjtHQURGLE1BRU8sSUFBSTdqQixPQUFPMGpCLFlBQVgsRUFBeUI7bUJBQ2YxakIsT0FBTzBqQixZQUF0QjtHQURLLE1BRUE7UUFDREksb0JBQW9CLEVBQXhCO1FBQ0lDLFdBQVc5ZixPQUFPNUQsS0FBSzJDLE1BQUwsRUFBUCxDQUFmO1dBQ08yVyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFTM1ksQ0FBVCxFQUFZO1VBQ3pDQSxFQUFFNFAsSUFBRixLQUFXbVQsUUFBZixFQUF5QjtZQUNuQkMsUUFBUUYsaUJBQVo7NEJBQ29CLEVBQXBCO2NBQ005UyxPQUFOLENBQWMsVUFBU2lULElBQVQsRUFBZTs7U0FBN0I7O0tBSko7bUJBU2Usc0JBQVNBLElBQVQsRUFBZTt3QkFDVjVnQixJQUFsQixDQUF1QjRnQixJQUF2QjthQUNPQyxXQUFQLENBQW1CSCxRQUFuQixFQUE2QixHQUE3QjtLQUZGOztNQUtFSSxjQUFjLEtBQWxCO01BQ0lDLHFCQUFxQixFQUF6QjtXQUNTQyxnQkFBVCxDQUEwQkMsUUFBMUIsRUFBb0M7dUJBQ2ZqaEIsSUFBbkIsQ0FBd0JpaEIsUUFBeEI7UUFDSSxDQUFDSCxXQUFMLEVBQWtCO29CQUNGLElBQWQ7bUJBQ2FJLGlCQUFiOzs7V0FHS0MsWUFBVCxDQUFzQi9OLElBQXRCLEVBQTRCO1dBQ25CelcsT0FBT3lrQixpQkFBUCxJQUE0QnprQixPQUFPeWtCLGlCQUFQLENBQXlCRCxZQUF6QixDQUFzQy9OLElBQXRDLENBQTVCLElBQTJFQSxJQUFsRjs7V0FFTzhOLGlCQUFULEdBQTZCO2tCQUNiLEtBQWQ7UUFDSUcsWUFBWU4sa0JBQWhCO3lCQUNxQixFQUFyQjtjQUNVTyxJQUFWLENBQWUsVUFBU0MsRUFBVCxFQUFhQyxFQUFiLEVBQWlCO2FBQ3ZCRCxHQUFHRSxJQUFILEdBQVVELEdBQUdDLElBQXBCO0tBREY7UUFHSUMsY0FBYyxLQUFsQjtjQUNVL1QsT0FBVixDQUFrQixVQUFTc1QsUUFBVCxFQUFtQjtVQUMvQk4sUUFBUU0sU0FBU1UsV0FBVCxFQUFaO2tDQUM0QlYsUUFBNUI7VUFDSU4sTUFBTTVmLE1BQVYsRUFBa0I7aUJBQ1A2Z0IsU0FBVCxDQUFtQmpCLEtBQW5CLEVBQTBCTSxRQUExQjtzQkFDYyxJQUFkOztLQUxKO1FBUUlTLFdBQUosRUFBaUJSOztXQUVWVywyQkFBVCxDQUFxQ1osUUFBckMsRUFBK0M7YUFDcENhLE1BQVQsQ0FBZ0JuVSxPQUFoQixDQUF3QixVQUFTeUYsSUFBVCxFQUFlO1VBQ2pDMk8sZ0JBQWdCM0IsbUJBQW1CcmlCLEdBQW5CLENBQXVCcVYsSUFBdkIsQ0FBcEI7VUFDSSxDQUFDMk8sYUFBTCxFQUFvQjtvQkFDTnBVLE9BQWQsQ0FBc0IsVUFBU3FVLFlBQVQsRUFBdUI7WUFDdkNBLGFBQWFmLFFBQWIsS0FBMEJBLFFBQTlCLEVBQXdDZSxhQUFhQyx3QkFBYjtPQUQxQztLQUhGOztXQVFPQyx1Q0FBVCxDQUFpRGpnQixNQUFqRCxFQUF5RGtTLFFBQXpELEVBQW1FO1NBQzVELElBQUlmLE9BQU9uUixNQUFoQixFQUF3Qm1SLElBQXhCLEVBQThCQSxPQUFPQSxLQUFLSyxVQUExQyxFQUFzRDtVQUNoRHNPLGdCQUFnQjNCLG1CQUFtQnJpQixHQUFuQixDQUF1QnFWLElBQXZCLENBQXBCO1VBQ0kyTyxhQUFKLEVBQW1CO2FBQ1osSUFBSXpRLElBQUksQ0FBYixFQUFnQkEsSUFBSXlRLGNBQWNoaEIsTUFBbEMsRUFBMEN1USxHQUExQyxFQUErQztjQUN6QzBRLGVBQWVELGNBQWN6USxDQUFkLENBQW5CO2NBQ0k2USxVQUFVSCxhQUFhRyxPQUEzQjtjQUNJL08sU0FBU25SLE1BQVQsSUFBbUIsQ0FBQ2tnQixRQUFRQyxPQUFoQyxFQUF5QztjQUNyQ0MsU0FBU2xPLFNBQVNnTyxPQUFULENBQWI7Y0FDSUUsTUFBSixFQUFZTCxhQUFhTSxPQUFiLENBQXFCRCxNQUFyQjs7Ozs7TUFLaEJFLGFBQWEsQ0FBakI7V0FDU3BDLGtCQUFULENBQTRCaE0sUUFBNUIsRUFBc0M7U0FDL0J5TixTQUFMLEdBQWlCek4sUUFBakI7U0FDSzJOLE1BQUwsR0FBYyxFQUFkO1NBQ0tVLFFBQUwsR0FBZ0IsRUFBaEI7U0FDS2YsSUFBTCxHQUFZLEVBQUVjLFVBQWQ7O3FCQUVpQjFoQixTQUFuQixHQUErQjthQUNwQixpQkFBU29CLE1BQVQsRUFBaUJrZ0IsT0FBakIsRUFBMEI7ZUFDeEJoQixhQUFhbGYsTUFBYixDQUFUO1VBQ0ksQ0FBQ2tnQixRQUFRTSxTQUFULElBQXNCLENBQUNOLFFBQVFPLFVBQS9CLElBQTZDLENBQUNQLFFBQVFRLGFBQXRELElBQXVFUixRQUFRUyxpQkFBUixJQUE2QixDQUFDVCxRQUFRTyxVQUE3RyxJQUEySFAsUUFBUVUsZUFBUixJQUEyQlYsUUFBUVUsZUFBUixDQUF3QjloQixNQUFuRCxJQUE2RCxDQUFDb2hCLFFBQVFPLFVBQWpNLElBQStNUCxRQUFRVyxxQkFBUixJQUFpQyxDQUFDWCxRQUFRUSxhQUE3UCxFQUE0UTtjQUNwUSxJQUFJekosV0FBSixFQUFOOztVQUVFNkksZ0JBQWdCM0IsbUJBQW1CcmlCLEdBQW5CLENBQXVCa0UsTUFBdkIsQ0FBcEI7VUFDSSxDQUFDOGYsYUFBTCxFQUFvQjNCLG1CQUFtQjFjLEdBQW5CLENBQXVCekIsTUFBdkIsRUFBK0I4ZixnQkFBZ0IsRUFBL0M7VUFDaEJDLFlBQUo7V0FDSyxJQUFJcGQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJbWQsY0FBY2hoQixNQUFsQyxFQUEwQzZELEdBQTFDLEVBQStDO1lBQ3pDbWQsY0FBY25kLENBQWQsRUFBaUJxYyxRQUFqQixLQUE4QixJQUFsQyxFQUF3Qzt5QkFDdkJjLGNBQWNuZCxDQUFkLENBQWY7dUJBQ2FtZSxlQUFiO3VCQUNhWixPQUFiLEdBQXVCQSxPQUF2Qjs7OztVQUlBLENBQUNILFlBQUwsRUFBbUI7dUJBQ0YsSUFBSWdCLFlBQUosQ0FBaUIsSUFBakIsRUFBdUIvZ0IsTUFBdkIsRUFBK0JrZ0IsT0FBL0IsQ0FBZjtzQkFDY25pQixJQUFkLENBQW1CZ2lCLFlBQW5CO2FBQ0tGLE1BQUwsQ0FBWTloQixJQUFaLENBQWlCaUMsTUFBakI7O21CQUVXZ2hCLFlBQWI7S0F0QjJCO2dCQXdCakIsc0JBQVc7V0FDaEJuQixNQUFMLENBQVluVSxPQUFaLENBQW9CLFVBQVN5RixJQUFULEVBQWU7WUFDN0IyTyxnQkFBZ0IzQixtQkFBbUJyaUIsR0FBbkIsQ0FBdUJxVixJQUF2QixDQUFwQjthQUNLLElBQUl4TyxJQUFJLENBQWIsRUFBZ0JBLElBQUltZCxjQUFjaGhCLE1BQWxDLEVBQTBDNkQsR0FBMUMsRUFBK0M7Y0FDekNvZCxlQUFlRCxjQUFjbmQsQ0FBZCxDQUFuQjtjQUNJb2QsYUFBYWYsUUFBYixLQUEwQixJQUE5QixFQUFvQzt5QkFDckI4QixlQUFiOzBCQUNjbFIsTUFBZCxDQUFxQmpOLENBQXJCLEVBQXdCLENBQXhCOzs7O09BTk4sRUFVRyxJQVZIO1dBV0s0ZCxRQUFMLEdBQWdCLEVBQWhCO0tBcEMyQjtpQkFzQ2hCLHVCQUFXO1VBQ2xCVSxnQkFBZ0IsS0FBS1YsUUFBekI7V0FDS0EsUUFBTCxHQUFnQixFQUFoQjthQUNPVSxhQUFQOztHQXpDSjtXQTRDU0MsY0FBVCxDQUF3QjdoQixJQUF4QixFQUE4QlcsTUFBOUIsRUFBc0M7U0FDL0JYLElBQUwsR0FBWUEsSUFBWjtTQUNLVyxNQUFMLEdBQWNBLE1BQWQ7U0FDS21XLFVBQUwsR0FBa0IsRUFBbEI7U0FDS3FGLFlBQUwsR0FBb0IsRUFBcEI7U0FDSzJGLGVBQUwsR0FBdUIsSUFBdkI7U0FDS3JQLFdBQUwsR0FBbUIsSUFBbkI7U0FDS3NQLGFBQUwsR0FBcUIsSUFBckI7U0FDS0Msa0JBQUwsR0FBMEIsSUFBMUI7U0FDS2xNLFFBQUwsR0FBZ0IsSUFBaEI7O1dBRU9tTSxrQkFBVCxDQUE0Qm5ULFFBQTVCLEVBQXNDO1FBQ2hDaVMsU0FBUyxJQUFJYyxjQUFKLENBQW1CL1MsU0FBUzlPLElBQTVCLEVBQWtDOE8sU0FBU25PLE1BQTNDLENBQWI7V0FDT21XLFVBQVAsR0FBb0JoSSxTQUFTZ0ksVUFBVCxDQUFvQnZWLEtBQXBCLEVBQXBCO1dBQ080YSxZQUFQLEdBQXNCck4sU0FBU3FOLFlBQVQsQ0FBc0I1YSxLQUF0QixFQUF0QjtXQUNPdWdCLGVBQVAsR0FBeUJoVCxTQUFTZ1QsZUFBbEM7V0FDT3JQLFdBQVAsR0FBcUIzRCxTQUFTMkQsV0FBOUI7V0FDT3NQLGFBQVAsR0FBdUJqVCxTQUFTaVQsYUFBaEM7V0FDT0Msa0JBQVAsR0FBNEJsVCxTQUFTa1Qsa0JBQXJDO1dBQ09sTSxRQUFQLEdBQWtCaEgsU0FBU2dILFFBQTNCO1dBQ09pTCxNQUFQOztNQUVFbUIsYUFBSixFQUFtQkMsa0JBQW5CO1dBQ1NDLFNBQVQsQ0FBbUJwaUIsSUFBbkIsRUFBeUJXLE1BQXpCLEVBQWlDO1dBQ3hCdWhCLGdCQUFnQixJQUFJTCxjQUFKLENBQW1CN2hCLElBQW5CLEVBQXlCVyxNQUF6QixDQUF2Qjs7V0FFTzBoQixxQkFBVCxDQUErQnZNLFFBQS9CLEVBQXlDO1FBQ25DcU0sa0JBQUosRUFBd0IsT0FBT0Esa0JBQVA7eUJBQ0hGLG1CQUFtQkMsYUFBbkIsQ0FBckI7dUJBQ21CcE0sUUFBbkIsR0FBOEJBLFFBQTlCO1dBQ09xTSxrQkFBUDs7V0FFT0csWUFBVCxHQUF3QjtvQkFDTkgscUJBQXFCNWpCLFNBQXJDOztXQUVPZ2tCLCtCQUFULENBQXlDeEIsTUFBekMsRUFBaUQ7V0FDeENBLFdBQVdvQixrQkFBWCxJQUFpQ3BCLFdBQVdtQixhQUFuRDs7V0FFT00sWUFBVCxDQUFzQkMsVUFBdEIsRUFBa0NDLFNBQWxDLEVBQTZDO1FBQ3ZDRCxlQUFlQyxTQUFuQixFQUE4QixPQUFPRCxVQUFQO1FBQzFCTixzQkFBc0JJLGdDQUFnQ0UsVUFBaEMsQ0FBMUIsRUFBdUUsT0FBT04sa0JBQVA7V0FDaEUsSUFBUDs7V0FFT1QsWUFBVCxDQUFzQi9CLFFBQXRCLEVBQWdDaGYsTUFBaEMsRUFBd0NrZ0IsT0FBeEMsRUFBaUQ7U0FDMUNsQixRQUFMLEdBQWdCQSxRQUFoQjtTQUNLaGYsTUFBTCxHQUFjQSxNQUFkO1NBQ0trZ0IsT0FBTCxHQUFlQSxPQUFmO1NBQ0s4QixzQkFBTCxHQUE4QixFQUE5Qjs7ZUFFV3BqQixTQUFiLEdBQXlCO2FBQ2QsaUJBQVN3aEIsTUFBVCxFQUFpQjtVQUNwQjZCLFVBQVUsS0FBS2pELFFBQUwsQ0FBY3VCLFFBQTVCO1VBQ0l6aEIsU0FBU21qQixRQUFRbmpCLE1BQXJCO1VBQ0ltakIsUUFBUW5qQixNQUFSLEdBQWlCLENBQXJCLEVBQXdCO1lBQ2xCZ2pCLGFBQWFHLFFBQVFuakIsU0FBUyxDQUFqQixDQUFqQjtZQUNJb2pCLHNCQUFzQkwsYUFBYUMsVUFBYixFQUF5QjFCLE1BQXpCLENBQTFCO1lBQ0k4QixtQkFBSixFQUF5QjtrQkFDZnBqQixTQUFTLENBQWpCLElBQXNCb2pCLG1CQUF0Qjs7O09BSkosTUFPTzt5QkFDWSxLQUFLbEQsUUFBdEI7O2NBRU1sZ0IsTUFBUixJQUFrQnNoQixNQUFsQjtLQWRxQjtrQkFnQlQsd0JBQVc7V0FDbEIrQixhQUFMLENBQW1CLEtBQUtuaUIsTUFBeEI7S0FqQnFCO21CQW1CUix1QkFBU21SLElBQVQsRUFBZTtVQUN4QitPLFVBQVUsS0FBS0EsT0FBbkI7VUFDSUEsUUFBUU8sVUFBWixFQUF3QnRQLEtBQUtrRCxnQkFBTCxDQUFzQixpQkFBdEIsRUFBeUMsSUFBekMsRUFBK0MsSUFBL0M7VUFDcEI2TCxRQUFRUSxhQUFaLEVBQTJCdlAsS0FBS2tELGdCQUFMLENBQXNCLDBCQUF0QixFQUFrRCxJQUFsRCxFQUF3RCxJQUF4RDtVQUN2QjZMLFFBQVFNLFNBQVosRUFBdUJyUCxLQUFLa0QsZ0JBQUwsQ0FBc0IsaUJBQXRCLEVBQXlDLElBQXpDLEVBQStDLElBQS9DO1VBQ25CNkwsUUFBUU0sU0FBUixJQUFxQk4sUUFBUUMsT0FBakMsRUFBMENoUCxLQUFLa0QsZ0JBQUwsQ0FBc0IsZ0JBQXRCLEVBQXdDLElBQXhDLEVBQThDLElBQTlDO0tBeEJyQjtxQkEwQk4sMkJBQVc7V0FDckIrTixnQkFBTCxDQUFzQixLQUFLcGlCLE1BQTNCO0tBM0JxQjtzQkE2QkwsMEJBQVNtUixJQUFULEVBQWU7VUFDM0IrTyxVQUFVLEtBQUtBLE9BQW5CO1VBQ0lBLFFBQVFPLFVBQVosRUFBd0J0UCxLQUFLa1IsbUJBQUwsQ0FBeUIsaUJBQXpCLEVBQTRDLElBQTVDLEVBQWtELElBQWxEO1VBQ3BCbkMsUUFBUVEsYUFBWixFQUEyQnZQLEtBQUtrUixtQkFBTCxDQUF5QiwwQkFBekIsRUFBcUQsSUFBckQsRUFBMkQsSUFBM0Q7VUFDdkJuQyxRQUFRTSxTQUFaLEVBQXVCclAsS0FBS2tSLG1CQUFMLENBQXlCLGlCQUF6QixFQUE0QyxJQUE1QyxFQUFrRCxJQUFsRDtVQUNuQm5DLFFBQVFNLFNBQVIsSUFBcUJOLFFBQVFDLE9BQWpDLEVBQTBDaFAsS0FBS2tSLG1CQUFMLENBQXlCLGdCQUF6QixFQUEyQyxJQUEzQyxFQUFpRCxJQUFqRDtLQWxDckI7MEJBb0NELDhCQUFTbFIsSUFBVCxFQUFlO1VBQy9CQSxTQUFTLEtBQUtuUixNQUFsQixFQUEwQjtXQUNyQm1pQixhQUFMLENBQW1CaFIsSUFBbkI7V0FDSzZRLHNCQUFMLENBQTRCamtCLElBQTVCLENBQWlDb1QsSUFBakM7VUFDSTJPLGdCQUFnQjNCLG1CQUFtQnJpQixHQUFuQixDQUF1QnFWLElBQXZCLENBQXBCO1VBQ0ksQ0FBQzJPLGFBQUwsRUFBb0IzQixtQkFBbUIxYyxHQUFuQixDQUF1QjBQLElBQXZCLEVBQTZCMk8sZ0JBQWdCLEVBQTdDO29CQUNOL2hCLElBQWQsQ0FBbUIsSUFBbkI7S0ExQ3FCOzhCQTRDRyxvQ0FBVztVQUMvQmlrQix5QkFBeUIsS0FBS0Esc0JBQWxDO1dBQ0tBLHNCQUFMLEdBQThCLEVBQTlCOzZCQUN1QnRXLE9BQXZCLENBQStCLFVBQVN5RixJQUFULEVBQWU7YUFDdkNpUixnQkFBTCxDQUFzQmpSLElBQXRCO1lBQ0kyTyxnQkFBZ0IzQixtQkFBbUJyaUIsR0FBbkIsQ0FBdUJxVixJQUF2QixDQUFwQjthQUNLLElBQUl4TyxJQUFJLENBQWIsRUFBZ0JBLElBQUltZCxjQUFjaGhCLE1BQWxDLEVBQTBDNkQsR0FBMUMsRUFBK0M7Y0FDekNtZCxjQUFjbmQsQ0FBZCxNQUFxQixJQUF6QixFQUErQjswQkFDZmlOLE1BQWQsQ0FBcUJqTixDQUFyQixFQUF3QixDQUF4Qjs7OztPQUxOLEVBU0csSUFUSDtLQS9DcUI7aUJBMERWLHFCQUFTakgsQ0FBVCxFQUFZO1FBQ3JCNG1CLHdCQUFGO2NBQ1E1bUIsRUFBRTJELElBQVY7YUFDTSxpQkFBTDtjQUNLQyxPQUFPNUQsRUFBRTZtQixRQUFiO2NBQ0lsTixZQUFZM1osRUFBRThtQixXQUFGLENBQWNDLFlBQTlCO2NBQ0l6aUIsU0FBU3RFLEVBQUVzRSxNQUFmO2NBQ0lvZ0IsU0FBUyxJQUFJcUIsU0FBSixDQUFjLFlBQWQsRUFBNEJ6aEIsTUFBNUIsQ0FBYjtpQkFDT29oQixhQUFQLEdBQXVCOWhCLElBQXZCO2lCQUNPK2hCLGtCQUFQLEdBQTRCaE0sU0FBNUI7Y0FDSUYsV0FBV3paLEVBQUVnbkIsVUFBRixLQUFpQkMsY0FBY0MsUUFBL0IsR0FBMEMsSUFBMUMsR0FBaURsbkIsRUFBRW1uQixTQUFsRTtrREFDd0M3aUIsTUFBeEMsRUFBZ0QsVUFBU2tnQixPQUFULEVBQWtCO2dCQUM1RCxDQUFDQSxRQUFRTyxVQUFiLEVBQXlCO2dCQUNyQlAsUUFBUVUsZUFBUixJQUEyQlYsUUFBUVUsZUFBUixDQUF3QjloQixNQUFuRCxJQUE2RG9oQixRQUFRVSxlQUFSLENBQXdCdEwsT0FBeEIsQ0FBZ0NoVyxJQUFoQyxNQUEwQyxDQUFDLENBQXhHLElBQTZHNGdCLFFBQVFVLGVBQVIsQ0FBd0J0TCxPQUF4QixDQUFnQ0QsU0FBaEMsTUFBK0MsQ0FBQyxDQUFqSyxFQUFvSzs7O2dCQUdoSzZLLFFBQVFTLGlCQUFaLEVBQStCLE9BQU9lLHNCQUFzQnZNLFFBQXRCLENBQVA7bUJBQ3hCaUwsTUFBUDtXQU5GOzs7YUFVSSwwQkFBTDtjQUNLcGdCLFNBQVN0RSxFQUFFc0UsTUFBZjtjQUNJb2dCLFNBQVNxQixVQUFVLGVBQVYsRUFBMkJ6aEIsTUFBM0IsQ0FBYjtjQUNJbVYsV0FBV3paLEVBQUVtbkIsU0FBakI7a0RBQ3dDN2lCLE1BQXhDLEVBQWdELFVBQVNrZ0IsT0FBVCxFQUFrQjtnQkFDNUQsQ0FBQ0EsUUFBUVEsYUFBYixFQUE0QjtnQkFDeEJSLFFBQVFXLHFCQUFaLEVBQW1DLE9BQU9hLHNCQUFzQnZNLFFBQXRCLENBQVA7bUJBQzVCaUwsTUFBUDtXQUhGOzs7YUFPSSxnQkFBTDtlQUNNMEMsb0JBQUwsQ0FBMEJwbkIsRUFBRXNFLE1BQTVCOzthQUVJLGlCQUFMO2NBQ0sraUIsY0FBY3JuQixFQUFFc0UsTUFBcEI7Y0FDSW1XLFVBQUosRUFBZ0JxRixZQUFoQjtjQUNJOWYsRUFBRTJELElBQUYsS0FBVyxpQkFBZixFQUFrQzt5QkFDbkIsQ0FBRTBqQixXQUFGLENBQWI7MkJBQ2UsRUFBZjtXQUZGLE1BR087eUJBQ1EsRUFBYjsyQkFDZSxDQUFFQSxXQUFGLENBQWY7O2NBRUU1QixrQkFBa0I0QixZQUFZNUIsZUFBbEM7Y0FDSXJQLGNBQWNpUixZQUFZalIsV0FBOUI7Y0FDSXNPLFNBQVNxQixVQUFVLFdBQVYsRUFBdUIvbEIsRUFBRXNFLE1BQUYsQ0FBU3dSLFVBQWhDLENBQWI7aUJBQ08yRSxVQUFQLEdBQW9CQSxVQUFwQjtpQkFDT3FGLFlBQVAsR0FBc0JBLFlBQXRCO2lCQUNPMkYsZUFBUCxHQUF5QkEsZUFBekI7aUJBQ09yUCxXQUFQLEdBQXFCQSxXQUFyQjtrREFDd0NwVyxFQUFFOG1CLFdBQTFDLEVBQXVELFVBQVN0QyxPQUFULEVBQWtCO2dCQUNuRSxDQUFDQSxRQUFRTSxTQUFiLEVBQXdCO21CQUNqQkosTUFBUDtXQUZGOzs7O0dBOUdOO1NBc0hPbEMsa0JBQVAsR0FBNEJBLGtCQUE1QjtNQUNJLENBQUNyakIsT0FBT2diLGdCQUFaLEVBQThCO1dBQ3JCQSxnQkFBUCxHQUEwQnFJLGtCQUExQjt1QkFDbUI4RSxhQUFuQixHQUFtQyxJQUFuQzs7Q0E3U0osRUErU0dob0IsSUEvU0g7O0FDWEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJDLFdBQVVILE1BQVYsRUFBa0IrQyxTQUFsQixFQUE2QjtRQUd0Qi9DLE9BQU91akIsWUFBWCxFQUF5Qjs7OztRQUlyQjZFLGFBQWEsQ0FBakIsQ0FQMEI7UUFRdEJDLGdCQUFnQixFQUFwQjtRQUNJQyx3QkFBd0IsS0FBNUI7UUFDSTFOLE1BQU01YSxPQUFPbUIsUUFBakI7UUFDSW9pQixZQUFKOzthQUVTZ0YsNEJBQVQsQ0FBc0NDLElBQXRDLEVBQTRDO3NCQUMxQkosVUFBZCxJQUE0QkssaUJBQWlCcmtCLEtBQWpCLENBQXVCckIsU0FBdkIsRUFBa0N5bEIsSUFBbEMsQ0FBNUI7ZUFDT0osWUFBUDs7Ozs7YUFLS0ssZ0JBQVQsQ0FBMEJDLE9BQTFCLEVBQW1DO1lBQzNCRixPQUFPLEdBQUd6aUIsS0FBSCxDQUFTbkUsSUFBVCxDQUFjeUMsU0FBZCxFQUF5QixDQUF6QixDQUFYO2VBQ08sWUFBVztnQkFDVixPQUFPcWtCLE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7d0JBQ3ZCdGtCLEtBQVIsQ0FBY3JCLFNBQWQsRUFBeUJ5bEIsSUFBekI7YUFESixNQUVPO29CQUNFcG9CLFFBQUosQ0FBYSxLQUFLc29CLE9BQWxCLENBQUQ7O1NBSlI7OzthQVNLQyxZQUFULENBQXNCQyxNQUF0QixFQUE4Qjs7O1lBR3RCTixxQkFBSixFQUEyQjs7O3VCQUdaRyxpQkFBaUJFLFlBQWpCLEVBQStCQyxNQUEvQixDQUFYLEVBQW1ELENBQW5EO1NBSEosTUFJTztnQkFDQ0MsT0FBT1IsY0FBY08sTUFBZCxDQUFYO2dCQUNJQyxJQUFKLEVBQVU7d0NBQ2tCLElBQXhCO29CQUNJOztpQkFBSixTQUVVO21DQUNTRCxNQUFmOzRDQUN3QixLQUF4Qjs7Ozs7O2FBTVBFLGNBQVQsQ0FBd0JGLE1BQXhCLEVBQWdDO2VBQ3JCUCxjQUFjTyxNQUFkLENBQVA7OzthQUdLRyw2QkFBVCxHQUF5Qzt1QkFDdEIsd0JBQVc7Z0JBQ2xCSCxTQUFTTCw2QkFBNkJsa0IsU0FBN0IsQ0FBYjtvQkFDUTJrQixRQUFSLENBQWlCUCxpQkFBaUJFLFlBQWpCLEVBQStCQyxNQUEvQixDQUFqQjttQkFDT0EsTUFBUDtTQUhKOzs7YUFPS0ssaUJBQVQsR0FBNkI7OztZQUdyQmpwQixPQUFPK2pCLFdBQVAsSUFBc0IsQ0FBQy9qQixPQUFPa3BCLGFBQWxDLEVBQWlEO2dCQUN6Q0MsNEJBQTRCLElBQWhDO2dCQUNJQyxlQUFlcHBCLE9BQU9xcEIsU0FBMUI7bUJBQ09BLFNBQVAsR0FBbUIsWUFBVzs0Q0FDRSxLQUE1QjthQURKO21CQUdPdEYsV0FBUCxDQUFtQixFQUFuQixFQUF1QixHQUF2QjttQkFDT3NGLFNBQVAsR0FBbUJELFlBQW5CO21CQUNPRCx5QkFBUDs7OzthQUlDRyxnQ0FBVCxHQUE0Qzs7Ozs7WUFLcENDLGdCQUFnQixrQkFBa0JycEIsS0FBSzJDLE1BQUwsRUFBbEIsR0FBa0MsR0FBdEQ7WUFDSTJtQixrQkFBa0IsU0FBbEJBLGVBQWtCLENBQVNDLEtBQVQsRUFBZ0I7Z0JBQzlCQSxNQUFNL2tCLE1BQU4sS0FBaUIxRSxNQUFqQixJQUNBLE9BQU95cEIsTUFBTWhaLElBQWIsS0FBc0IsUUFEdEIsSUFFQWdaLE1BQU1oWixJQUFOLENBQVdnSyxPQUFYLENBQW1COE8sYUFBbkIsTUFBc0MsQ0FGMUMsRUFFNkM7NkJBQzVCLENBQUNFLE1BQU1oWixJQUFOLENBQVcxSyxLQUFYLENBQWlCd2pCLGNBQWN0bEIsTUFBL0IsQ0FBZDs7U0FKUjs7WUFRSWpFLE9BQU93WixnQkFBWCxFQUE2QjttQkFDbEJBLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DZ1EsZUFBbkMsRUFBb0QsS0FBcEQ7U0FESixNQUVPO21CQUNJRSxXQUFQLENBQW1CLFdBQW5CLEVBQWdDRixlQUFoQzs7O3VCQUdXLHdCQUFXO2dCQUNsQlosU0FBU0wsNkJBQTZCbGtCLFNBQTdCLENBQWI7bUJBQ08wZixXQUFQLENBQW1Cd0YsZ0JBQWdCWCxNQUFuQyxFQUEyQyxHQUEzQzttQkFDT0EsTUFBUDtTQUhKOzs7YUFPS2UsbUNBQVQsR0FBK0M7WUFDdkNDLFVBQVUsSUFBSUMsY0FBSixFQUFkO2dCQUNRQyxLQUFSLENBQWNULFNBQWQsR0FBMEIsVUFBU0ksS0FBVCxFQUFnQjtnQkFDbENiLFNBQVNhLE1BQU1oWixJQUFuQjt5QkFDYW1ZLE1BQWI7U0FGSjs7dUJBS2Usd0JBQVc7Z0JBQ2xCQSxTQUFTTCw2QkFBNkJsa0IsU0FBN0IsQ0FBYjtvQkFDUTBsQixLQUFSLENBQWNoRyxXQUFkLENBQTBCNkUsTUFBMUI7bUJBQ09BLE1BQVA7U0FISjs7O2FBT0tvQixxQ0FBVCxHQUFpRDtZQUN6Q0MsT0FBT3JQLElBQUlyUixlQUFmO3VCQUNlLHdCQUFXO2dCQUNsQnFmLFNBQVNMLDZCQUE2QmxrQixTQUE3QixDQUFiOzs7Z0JBR0k2bEIsU0FBU3RQLElBQUl2WixhQUFKLENBQWtCLFFBQWxCLENBQWI7bUJBQ084b0Isa0JBQVAsR0FBNEIsWUFBWTs2QkFDdkJ2QixNQUFiO3VCQUNPdUIsa0JBQVAsR0FBNEIsSUFBNUI7cUJBQ0szTSxXQUFMLENBQWlCME0sTUFBakI7eUJBQ1MsSUFBVDthQUpKO2lCQU1LbGdCLFdBQUwsQ0FBaUJrZ0IsTUFBakI7bUJBQ090QixNQUFQO1NBWko7OzthQWdCS3dCLCtCQUFULEdBQTJDO3VCQUN4Qix3QkFBVztnQkFDbEJ4QixTQUFTTCw2QkFBNkJsa0IsU0FBN0IsQ0FBYjt1QkFDV29rQixpQkFBaUJFLFlBQWpCLEVBQStCQyxNQUEvQixDQUFYLEVBQW1ELENBQW5EO21CQUNPQSxNQUFQO1NBSEo7Ozs7UUFRQXlCLFdBQVd0cEIsT0FBT29LLGNBQVAsSUFBeUJwSyxPQUFPb0ssY0FBUCxDQUFzQm5MLE1BQXRCLENBQXhDO2VBQ1dxcUIsWUFBWUEsU0FBUzNHLFVBQXJCLEdBQWtDMkcsUUFBbEMsR0FBNkNycUIsTUFBeEQ7OztRQUdJLEdBQUcyQixRQUFILENBQVlDLElBQVosQ0FBaUI1QixPQUFPc3FCLE9BQXhCLE1BQXFDLGtCQUF6QyxFQUE2RDs7O0tBQTdELE1BSU8sSUFBSXJCLG1CQUFKLEVBQXlCOzs7S0FBekIsTUFJQSxJQUFJanBCLE9BQU82cEIsY0FBWCxFQUEyQjs7O0tBQTNCLE1BSUEsSUFBSWpQLE9BQU8sd0JBQXdCQSxJQUFJdlosYUFBSixDQUFrQixRQUFsQixDQUFuQyxFQUFnRTs7O0tBQWhFLE1BSUE7Ozs7O2FBS0VraUIsWUFBVCxHQUF3QkEsWUFBeEI7YUFDU3VGLGNBQVQsR0FBMEJBLGNBQTFCO0NBN0tILEVBOEtDM29CLElBOUtELENBQUQ7O0FDdkJBOzs7Ozs7QUFNQSxBQUVBO0FBQ0EsQUFNQTtBQUNBLEFBRUE7QUFDQSxBQUVBOztBQ3JCQSxDQUFDLFlBQVc7TUFDTm9xQixtQkFBbUIscUZBQXZCOztNQUVJQyxXQUFXOzJCQUNVLGlDQUFXO1VBQzVCQyxrQkFBa0J0cEIsU0FBU3VwQixhQUFULENBQXVCLHFCQUF2QixDQUF0Qjs7VUFFSSxDQUFDRCxlQUFMLEVBQXNCOzBCQUNGdHBCLFNBQVNFLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbEI7d0JBQ2dCb0QsSUFBaEIsR0FBdUIsVUFBdkI7aUJBQ1NrbUIsSUFBVCxDQUFjM2dCLFdBQWQsQ0FBMEJ5Z0IsZUFBMUI7OzthQUdLQSxlQUFQO0tBVlc7O1dBYU4saUJBQVc7VUFDWkEsa0JBQWtCRCxTQUFTSSxxQkFBVCxFQUF0Qjs7VUFFSSxDQUFDSCxlQUFMLEVBQXNCOzs7O1VBSWxCLENBQUNBLGdCQUFnQkksWUFBaEIsQ0FBNkIsU0FBN0IsQ0FBTCxFQUE4Qzt3QkFDNUJsTixZQUFoQixDQUE2QixTQUE3QixFQUF3QzRNLGdCQUF4Qzs7O0dBckJOOztTQTBCT0MsUUFBUCxHQUFrQkEsUUFBbEI7Q0E3QkY7O0FDS2UsU0FBU00sS0FBVCxDQUFlQyxNQUFmLEVBQW9CO01BQzdCbHJCLE9BQU9tckIsVUFBWCxFQUF1QjtXQUNqQkMsS0FBSixDQUFVeEosSUFBVixDQUFlLG9DQUFmOztTQUVLdUosVUFBUCxHQUFvQixJQUFwQjs7U0FFSUUsS0FBSixDQUFVLFlBQVc7V0FDZkMsNkJBQUo7V0FDSUMsK0JBQUosR0FBc0NMLE9BQUlNLFNBQUosQ0FBY0MsYUFBZCxDQUE0QkMsYUFBNUIsQ0FBMEMxckIsT0FBT3NCLFFBQVAsQ0FBZ0JxcUIsSUFBMUQsRUFBZ0UsWUFBTTtVQUN0R3pxQixPQUFPMkIsY0FBUCxDQUFzQmQsSUFBdEIsQ0FBMkI0aEIsU0FBM0IsRUFBc0MsS0FBdEMsQ0FBSixFQUFrRDtrQkFDdENpSSxHQUFWLENBQWNDLE9BQWQ7T0FERixNQUVPO2dCQUNHakssSUFBUixDQUFhLHFHQUFiOztLQUprQyxDQUF0QzthQU9TK0osSUFBVCxDQUFjRyxnQkFBZCxHQUFpQyxJQUFJWixPQUFJYSxlQUFSLENBQXdCenFCLFNBQVNxcUIsSUFBakMsRUFBdUMsRUFBRUssU0FBUyxJQUFYLEVBQXZDLENBQWpDOzs7UUFHSSxDQUFDZCxPQUFJZSxRQUFKLENBQWFDLFNBQWIsRUFBTCxFQUErQjtlQUNwQlAsSUFBVCxDQUFjaFMsZ0JBQWQsQ0FBK0IsU0FBL0IsRUFBMEMsVUFBU2lRLEtBQVQsRUFBZ0I7WUFDcERBLE1BQU11QyxPQUFOLEtBQWtCLEVBQXRCLEVBQTBCO2lCQUNwQkMseUJBQUo7O09BRko7Ozs7V0FRRUMseUJBQUo7R0FyQkY7OztXQXlCU3BCLEtBQVQ7OztBQ2pDRkEsTUFBTUMsR0FBTjs7OzsifQ==
