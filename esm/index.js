/* onsenui v2.8.3 - 2017-12-14 */

import ons from './ons/index.js';
import './ons/platform';
import './ons/microevent.js';

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
  var core = module.exports = { version: '2.5.1' };
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

var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');
  var TO_STRING = 'toString';
  var $toString = Function[TO_STRING];
  var TPL = ('' + $toString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return $toString.call(it);
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
    return typeof this == 'function' && this[SRC] || $toString.call(this);
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

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function _shared(key) {
  return store[key] || (store[key] = {});
};

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

var _library = false;

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
      if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
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
      var A = Array(length);
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
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
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

  var WEAK_MAP = 'WeakMap';
  var getWeak = _meta.getWeak;
  var isExtensible = Object.isExtensible;
  var uncaughtFrozenStore = _collectionWeak.ufstore;
  var tmp = {};
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
  if (_fails(function () {
    return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
  })) {
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
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
   * Whether a click is currently being tracked.
   *
   * @type boolean
   */
		this.trackingClick = false;

		/**
   * Timestamp for when click tracking started.
   *
   * @type number
   */
		this.trackingClickStart = 0;

		/**
   * The element being tracked for a click.
   *
   * @type EventTarget
   */
		this.targetElement = null;

		/**
   * X-coordinate of touch start event.
   *
   * @type number
   */
		this.touchStartX = 0;

		/**
   * Y-coordinate of touch start event.
   *
   * @type number
   */
		this.touchStartY = 0;

		/**
   * ID of the last touch, retrieved from Touch.identifier.
   *
   * @type number
   */
		this.lastTouchIdentifier = 0;

		/**
   * Touchmove boundary, beyond which a click will be cancelled.
   *
   * @type number
   */
		this.touchBoundary = options.touchBoundary || 10;

		/**
   * The FastClick layer.
   *
   * @type Element
   */
		this.layer = layer;

		/**
   * The minimum time between tap(touchstart and touchend) events
   *
   * @type number
   */
		this.tapDelay = options.tapDelay || 200;

		/**
   * The maximum time for a tap
   *
   * @type number
   */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function () {
				return method.apply(context, arguments);
			};
		}

		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function (type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function (type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function (event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
 * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
 *
 * @type boolean
 */
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
  * Android requires exceptions.
  *
  * @type boolean
  */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;

	/**
  * iOS requires exceptions.
  *
  * @type boolean
  */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;

	/**
  * iOS 4 requires an exception for select elements.
  *
  * @type boolean
  */
	var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);

	/**
  * iOS 6.0-7.* requires the target element to be manually derived
  *
  * @type boolean
  */
	var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);

	/**
  * BlackBerry requires exceptions.
  *
  * @type boolean
  */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
  * Determine whether a given element requires a native click.
  *
  * @param {EventTarget|Element} target Target DOM element
  * @returns {boolean} Returns true if the element needs a native click
  */
	FastClick.prototype.needsClick = function (target) {
		switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if (deviceIsIOS && target.type === 'file' || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
		}

		return (/\bneedsclick\b/.test(target.className)
		);
	};

	/**
  * Determine whether a given element requires a call to focus to simulate click into element.
  *
  * @param {EventTarget|Element} target Target DOM element
  * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
  */
	FastClick.prototype.needsFocus = function (target) {
		switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
					case 'button':
					case 'checkbox':
					case 'file':
					case 'image':
					case 'radio':
					case 'submit':
						return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/.test(target.className)
				);
		}
	};

	/**
  * Send a click event to the specified element.
  *
  * @param {EventTarget|Element} targetElement
  * @param {Event} event
  */
	FastClick.prototype.sendClick = function (targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesize a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function (targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};

	/**
  * @param {EventTarget|Element} targetElement
  */
	FastClick.prototype.focus = function (targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};

	/**
  * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
  *
  * @param {EventTarget|Element} targetElement
  */
	FastClick.prototype.updateScrollParent = function (targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};

	/**
  * @param {EventTarget} targetElement
  * @returns {Element|EventTarget}
  */
	FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};

	/**
  * On touch start, record the position and scroll offset.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onTouchStart = function (event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		// Ignore touches on contenteditable elements to prevent conflict with text selection.
		// (For details: https://github.com/ftlabs/fastclick/pull/211 )
		if (targetElement.isContentEditable) {
			return true;
		}

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if (event.timeStamp - this.lastClickTime < this.tapDelay && event.timeStamp - this.lastClickTime > -1) {
			event.preventDefault();
		}

		return true;
	};

	/**
  * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.touchHasMoved = function (event) {
		var touch = event.changedTouches[0],
		    boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};

	/**
  * Update the last position.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onTouchMove = function (event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};

	/**
  * Attempt to find the labelled control for the given label element.
  *
  * @param {EventTarget|HTMLLabelElement} labelElement
  * @returns {Element|null}
  */
	FastClick.prototype.findControl = function (labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};

	/**
  * On touch end, determine whether to send a click event at once.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onTouchEnd = function (event) {
		var forElement,
		    trackingClickStart,
		    targetTagName,
		    scrollParent,
		    touch,
		    targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if (event.timeStamp - this.lastClickTime < this.tapDelay && event.timeStamp - this.lastClickTime > -1) {
			this.cancelNextClick = true;
			return true;
		}

		if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};

	/**
  * On touch cancel, stop tracking the click.
  *
  * @returns {void}
  */
	FastClick.prototype.onTouchCancel = function () {
		this.trackingClick = false;
		this.targetElement = null;
	};

	/**
  * Determine mouse events which should be permitted.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onMouse = function (event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};

	/**
  * On actual clicks, determine whether this is a touch-generated click, a click action occurring
  * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
  * an actual click which should be permitted.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onClick = function (event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behavior on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};

	/**
  * Remove all FastClick's event listeners.
  *
  * @returns {void}
  */
	FastClick.prototype.destroy = function () {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};

	/**
  * Check whether FastClick is needed.
  *
  * @param {Element} layer The layer to listen on
  */
	FastClick.notNeeded = function (layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

				// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recommended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};

	/**
  * Factory method for creating a FastClick object
  *
  * @param {Element} layer The layer to listen on
  * @param {Object} [options={}] The options to override the defaults
  */
	FastClick.attach = function (layer, options) {
		return new FastClick(layer, options);
	};

	window.FastClick = FastClick;
})();

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

// Load non-polyfill libraries
// import './microevent.js@47cbc14+mod/microevent.js';

function setup(ons$$1) {
  if (window._onsLoaded) {
    ons$$1._util.warn('Onsen UI is loaded more than once.');
  }
  window._onsLoaded = true;

  // fastclick
  window.addEventListener('load', function () {
    ons$$1.fastClick = FastClick.attach(document.body);

    var supportTouchAction = 'touch-action' in document.body.style;

    ons$$1.platform._runOnActualPlatform(function () {
      if (ons$$1.platform.isAndroid()) {
        // In Android4.4+, correct viewport settings can remove click delay.
        // So disable FastClick on Android.
        ons$$1.fastClick.destroy();
      } else if (ons$$1.platform.isIOS()) {
        if (supportTouchAction && (ons$$1.platform.isIOSSafari() || ons$$1.platform.isWKWebView())) {
          // If 'touch-action' supported in iOS Safari or WKWebView, disable FastClick.
          ons$$1.fastClick.destroy();
        } else {
          // Do nothing. 'touch-action: manipulation' has no effect on UIWebView.
        }
      }
    });
  }, false);

  ons$$1.ready(function () {
    ons$$1.enableDeviceBackButtonHandler();
    ons$$1._defaultDeviceBackButtonHandler = ons$$1._internal.dbbDispatcher.createHandler(window.document.body, function () {
      if (Object.hasOwnProperty.call(navigator, 'app')) {
        navigator.app.exitApp();
      } else {
        console.warn('Could not close the app. Is \'cordova.js\' included?\nError: \'window.navigator.app\' is undefined.');
      }
    });
    document.body._gestureDetector = new ons$$1.GestureDetector(document.body);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvc3JjL3BvbHlmaWxscy9wb2x5ZmlsbC1zd2l0Y2hlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3ZhbGlkYXRlLWNvbGxlY3Rpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc2V0LnRvLWpzb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC5vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1jb2xsZWN0aW9uLWZyb20uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQuZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL3NldC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcubWFwLm9mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcubWFwLmZyb20uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9tYXAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXdlYWsuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LndlYWstbWFwLm9mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcud2Vhay1tYXAuZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL3dlYWstbWFwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvVXRpbGl0aWVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvQ3VzdG9tRWxlbWVudFN0YXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL0RvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9EZWZlcnJlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL0N1c3RvbUVsZW1lbnRSZWdpc3RyeS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL1BhdGNoL05hdGl2ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL0FscmVhZHlDb25zdHJ1Y3RlZE1hcmtlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL1BhdGNoL0hUTUxFbGVtZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvUGF0Y2gvSW50ZXJmYWNlL1BhcmVudE5vZGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9QYXRjaC9Eb2N1bWVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL1BhdGNoL05vZGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9QYXRjaC9JbnRlcmZhY2UvQ2hpbGROb2RlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvUGF0Y2gvRWxlbWVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL2N1c3RvbS1lbGVtZW50cy5qcyIsIi4uLy4uL2NvcmUvc3JjL3BvbHlmaWxscy9NdXRhdGlvbk9ic2VydmVyQDAuNy4yMi9NdXRhdGlvbk9ic2VydmVyLmpzIiwiLi4vLi4vY29yZS9zcmMvcG9seWZpbGxzL3NldEltbWVkaWF0ZUAxLjAuMittb2Qvc2V0SW1tZWRpYXRlLmpzIiwiLi4vLi4vY29yZS9zcmMvcG9seWZpbGxzL2luZGV4LmpzIiwiLi4vLi4vY29yZS9zcmMvdmVuZG9yL0Zhc3RDbGlja0AxLjAuNittb2QvZmFzdGNsaWNrLmpzIiwiLi4vLi4vY29yZS9zcmMvdmVuZG9yL3ZpZXdwb3J0LmpzIiwiLi4vLi4vY29yZS9zcmMvdmVuZG9yL2luZGV4LmpzIiwiLi4vLi4vY29yZS9zcmMvc2V0dXAuanMiLCIuLi8uLi9jb3JlL3NyYy9pbmRleC5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9yIEBvbnNlbnVpL2N1c3RvbS1lbGVtZW50c1xuaWYgKHdpbmRvdy5jdXN0b21FbGVtZW50cykgeyAvLyBldmVuIGlmIG5hdGl2ZSBDRTEgaW1wbCBleGlzdHMsIHVzZSBwb2x5ZmlsbFxuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5mb3JjZVBvbHlmaWxsID0gdHJ1ZTtcbn1cbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciB0ZXN0ID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFzdEtleSA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5O1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFNJWkUgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uICh0aGF0LCBrZXkpIHtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcbiAgdmFyIGVudHJ5O1xuICBpZiAoaW5kZXggIT09ICdGJykgcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yIChlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICBpZiAoZW50cnkuayA9PSBrZXkpIHJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll90ID0gTkFNRTsgICAgICAgICAvLyBjb2xsZWN0aW9uIHR5cGVcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICBmb3IgKHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSksIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pIHtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZW50cnkucCkgZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm47XG4gICAgICAgICAgdmFyIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmIChuZXh0KSBuZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmICh0aGF0Ll9mID09IGVudHJ5KSB0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZiAodGhhdC5fbCA9PSBlbnRyeSkgdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHZhbGlkYXRlKHRoaXMsIE5BTUUpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMyk7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZikge1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChERVNDUklQVE9SUykgZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZSh0aGlzLCBOQU1FKVtTSVpFXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgdmFyIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGF0Ll9mKSB0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZiAocHJldikgcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSB0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbiAoQywgTkFNRSwgSVNfTUFQKSB7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICAgICAgdGhpcy5fdCA9IHZhbGlkYXRlKGl0ZXJhdGVkLCBOQU1FKTsgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAgICAgICAgICAgICAgICAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBraW5kID0gdGhhdC5faztcbiAgICAgIHZhciBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYgKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpIHtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCB0YXJnZXQsIEMpIHtcbiAgdmFyIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIHZhciBQO1xuICBpZiAoUyAhPT0gQyAmJiB0eXBlb2YgUyA9PSAnZnVuY3Rpb24nICYmIChQID0gUy5wcm90b3R5cGUpICE9PSBDLnByb3RvdHlwZSAmJiBpc09iamVjdChQKSAmJiBzZXRQcm90b3R5cGVPZikge1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRpdGVyRGV0ZWN0ID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYikgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYgKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlO1xuICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSAkaXRlckRldGVjdChmdW5jdGlvbiAoaXRlcikgeyBuZXcgQyhpdGVyKTsgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKCksIHRhcmdldCwgQyk7XG4gICAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIHByb3RvLmNsZWFyKSBkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0VUID0gJ1NldCc7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKFNFVCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgU0VUKSwgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpO1xuIiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXIsIElURVJBVE9SKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi9fYXJyYXktZnJvbS1pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSkge1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIGlmIChjbGFzc29mKHRoaXMpICE9IE5BTUUpIHRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdTZXQnLCB7IHRvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ1NldCcpIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBvZjogZnVuY3Rpb24gb2YoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIEEgPSBBcnJheShsZW5ndGgpO1xuICAgIHdoaWxlIChsZW5ndGgtLSkgQVtsZW5ndGhdID0gYXJndW1lbnRzW2xlbmd0aF07XG4gICAgcmV0dXJuIG5ldyB0aGlzKEEpO1xuICB9IH0pO1xufTtcbiIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXNldC5vZlxucmVxdWlyZSgnLi9fc2V0LWNvbGxlY3Rpb24tb2YnKSgnU2V0Jyk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT0xMRUNUSU9OKSB7XG4gICRleHBvcnQoJGV4cG9ydC5TLCBDT0xMRUNUSU9OLCB7IGZyb206IGZ1bmN0aW9uIGZyb20oc291cmNlIC8qICwgbWFwRm4sIHRoaXNBcmcgKi8pIHtcbiAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHNbMV07XG4gICAgdmFyIG1hcHBpbmcsIEEsIG4sIGNiO1xuICAgIGFGdW5jdGlvbih0aGlzKTtcbiAgICBtYXBwaW5nID0gbWFwRm4gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAobWFwcGluZykgYUZ1bmN0aW9uKG1hcEZuKTtcbiAgICBpZiAoc291cmNlID09IHVuZGVmaW5lZCkgcmV0dXJuIG5ldyB0aGlzKCk7XG4gICAgQSA9IFtdO1xuICAgIGlmIChtYXBwaW5nKSB7XG4gICAgICBuID0gMDtcbiAgICAgIGNiID0gY3R4KG1hcEZuLCBhcmd1bWVudHNbMl0sIDIpO1xuICAgICAgZm9yT2Yoc291cmNlLCBmYWxzZSwgZnVuY3Rpb24gKG5leHRJdGVtKSB7XG4gICAgICAgIEEucHVzaChjYihuZXh0SXRlbSwgbisrKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yT2Yoc291cmNlLCBmYWxzZSwgQS5wdXNoLCBBKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyB0aGlzKEEpO1xuICB9IH0pO1xufTtcbiIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXNldC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ1NldCcpO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnNldCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuc2V0LnRvLWpzb24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC5vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuc2V0LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlNldDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIE1BUCA9ICdNYXAnO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShNQVAsIGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpIHsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHsgdG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJykgfSk7XG4iLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1tYXAub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ01hcCcpO1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnTWFwJyk7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLm9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwO1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbiIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07XG4iLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYXNjID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRZUEUsICRjcmVhdGUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICB2YXIgY3JlYXRlID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IElPYmplY3QoTyk7XG4gICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWwsIHJlcztcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHJlc3VsdFtpbmRleF0gPSByZXM7ICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlcykgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGdldFdlYWsgPSByZXF1aXJlKCcuL19tZXRhJykuZ2V0V2VhaztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBjcmVhdGVBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKTtcbnZhciAkaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgYXJyYXlGaW5kID0gY3JlYXRlQXJyYXlNZXRob2QoNSk7XG52YXIgYXJyYXlGaW5kSW5kZXggPSBjcmVhdGVBcnJheU1ldGhvZCg2KTtcbnZhciBpZCA9IDA7XG5cbi8vIGZhbGxiYWNrIGZvciB1bmNhdWdodCBmcm96ZW4ga2V5c1xudmFyIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbiAodGhhdCkge1xuICByZXR1cm4gdGhhdC5fbCB8fCAodGhhdC5fbCA9IG5ldyBVbmNhdWdodEZyb3plblN0b3JlKCkpO1xufTtcbnZhciBVbmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmEgPSBbXTtcbn07XG52YXIgZmluZFVuY2F1Z2h0RnJvemVuID0gZnVuY3Rpb24gKHN0b3JlLCBrZXkpIHtcbiAgcmV0dXJuIGFycmF5RmluZChzdG9yZS5hLCBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgfSk7XG59O1xuVW5jYXVnaHRGcm96ZW5TdG9yZS5wcm90b3R5cGUgPSB7XG4gIGdldDogZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmIChlbnRyeSkgcmV0dXJuIGVudHJ5WzFdO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gISFmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmIChlbnRyeSkgZW50cnlbMV0gPSB2YWx1ZTtcbiAgICBlbHNlIHRoaXMuYS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0sXG4gICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGluZGV4ID0gYXJyYXlGaW5kSW5kZXgodGhpcy5hLCBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICAgIH0pO1xuICAgIGlmICh+aW5kZXgpIHRoaXMuYS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiAhIX5pbmRleDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll90ID0gTkFNRTsgICAgICAvLyBjb2xsZWN0aW9uIHR5cGVcbiAgICAgIHRoYXQuX2kgPSBpZCsrOyAgICAgIC8vIGNvbGxlY3Rpb24gaWRcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7IC8vIGxlYWsgc3RvcmUgZm9yIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RzXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy40LjMuMyBXZWFrU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGtleSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmIChkYXRhID09PSB0cnVlKSByZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSlbJ2RlbGV0ZSddKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSkgJiYgZGVsZXRlIGRhdGFbdGhpcy5faV07XG4gICAgICB9LFxuICAgICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjQuMy40IFdlYWtTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGtleSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmIChkYXRhID09PSB0cnVlKSByZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSkuaGFzKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZGF0YSA9IGdldFdlYWsoYW5PYmplY3Qoa2V5KSwgdHJ1ZSk7XG4gICAgaWYgKGRhdGEgPT09IHRydWUpIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhhdCkuc2V0KGtleSwgdmFsdWUpO1xuICAgIGVsc2UgZGF0YVt0aGF0Ll9pXSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGF0O1xuICB9LFxuICB1ZnN0b3JlOiB1bmNhdWdodEZyb3plblN0b3JlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMCk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpO1xudmFyIHdlYWsgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXdlYWsnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBXRUFLX01BUCA9ICdXZWFrTWFwJztcbnZhciBnZXRXZWFrID0gbWV0YS5nZXRXZWFrO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG52YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IHdlYWsudWZzdG9yZTtcbnZhciB0bXAgPSB7fTtcbnZhciBJbnRlcm5hbE1hcDtcblxudmFyIHdyYXBwZXIgPSBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrTWFwKCkge1xuICAgIHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICB9O1xufTtcblxudmFyIG1ldGhvZHMgPSB7XG4gIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIGlmIChpc09iamVjdChrZXkpKSB7XG4gICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgIGlmIChkYXRhID09PSB0cnVlKSByZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh2YWxpZGF0ZSh0aGlzLCBXRUFLX01BUCkpLmdldChrZXkpO1xuICAgICAgcmV0dXJuIGRhdGEgPyBkYXRhW3RoaXMuX2ldIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcbiAgLy8gMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gd2Vhay5kZWYodmFsaWRhdGUodGhpcywgV0VBS19NQVApLCBrZXksIHZhbHVlKTtcbiAgfVxufTtcblxuLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcbnZhciAkV2Vha01hcCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKFdFQUtfTUFQLCB3cmFwcGVyLCBtZXRob2RzLCB3ZWFrLCB0cnVlLCB0cnVlKTtcblxuLy8gSUUxMSBXZWFrTWFwIGZyb3plbiBrZXlzIGZpeFxuaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyAkV2Vha01hcCgpLnNldCgoT2JqZWN0LmZyZWV6ZSB8fCBPYmplY3QpKHRtcCksIDcpLmdldCh0bXApICE9IDc7IH0pKSB7XG4gIEludGVybmFsTWFwID0gd2Vhay5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBXRUFLX01BUCk7XG4gIGFzc2lnbihJbnRlcm5hbE1hcC5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICBtZXRhLk5FRUQgPSB0cnVlO1xuICBlYWNoKFsnZGVsZXRlJywgJ2hhcycsICdnZXQnLCAnc2V0J10sIGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcHJvdG8gPSAkV2Vha01hcC5wcm90b3R5cGU7XG4gICAgdmFyIG1ldGhvZCA9IHByb3RvW2tleV07XG4gICAgcmVkZWZpbmUocHJvdG8sIGtleSwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIC8vIHN0b3JlIGZyb3plbiBvYmplY3RzIG9uIGludGVybmFsIHdlYWttYXAgc2hpbVxuICAgICAgaWYgKGlzT2JqZWN0KGEpICYmICFpc0V4dGVuc2libGUoYSkpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9mKSB0aGlzLl9mID0gbmV3IEludGVybmFsTWFwKCk7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9mW2tleV0oYSwgYik7XG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NldCcgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgLy8gc3RvcmUgYWxsIHRoZSByZXN0IG9uIG5hdGl2ZSB3ZWFrbWFwXG4gICAgICB9IHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy13ZWFrbWFwLm9mXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1vZicpKCdXZWFrTWFwJyk7XG4iLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy13ZWFrbWFwLmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnV2Vha01hcCcpO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi53ZWFrLW1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcud2Vhay1tYXAub2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LndlYWstbWFwLmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLldlYWtNYXA7XG4iLCJjb25zdCByZXNlcnZlZFRhZ0xpc3QgPSBuZXcgU2V0KFtcbiAgJ2Fubm90YXRpb24teG1sJyxcbiAgJ2NvbG9yLXByb2ZpbGUnLFxuICAnZm9udC1mYWNlJyxcbiAgJ2ZvbnQtZmFjZS1zcmMnLFxuICAnZm9udC1mYWNlLXVyaScsXG4gICdmb250LWZhY2UtZm9ybWF0JyxcbiAgJ2ZvbnQtZmFjZS1uYW1lJyxcbiAgJ21pc3NpbmctZ2x5cGgnLFxuXSk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkQ3VzdG9tRWxlbWVudE5hbWUobG9jYWxOYW1lKSB7XG4gIGNvbnN0IHJlc2VydmVkID0gcmVzZXJ2ZWRUYWdMaXN0Lmhhcyhsb2NhbE5hbWUpO1xuICBjb25zdCB2YWxpZEZvcm0gPSAvXlthLXpdWy4wLTlfYS16XSotW1xcLS4wLTlfYS16XSokLy50ZXN0KGxvY2FsTmFtZSk7XG4gIHJldHVybiAhcmVzZXJ2ZWQgJiYgdmFsaWRGb3JtO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDb25uZWN0ZWQobm9kZSkge1xuICAvLyBVc2UgYE5vZGUjaXNDb25uZWN0ZWRgLCBpZiBkZWZpbmVkLlxuICBjb25zdCBuYXRpdmVWYWx1ZSA9IG5vZGUuaXNDb25uZWN0ZWQ7XG4gIGlmIChuYXRpdmVWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5hdGl2ZVZhbHVlO1xuICB9XG5cbiAgLyoqIEB0eXBlIHs/Tm9kZXx1bmRlZmluZWR9ICovXG4gIGxldCBjdXJyZW50ID0gbm9kZTtcbiAgd2hpbGUgKGN1cnJlbnQgJiYgIShjdXJyZW50Ll9fQ0VfaXNJbXBvcnREb2N1bWVudCB8fCBjdXJyZW50IGluc3RhbmNlb2YgRG9jdW1lbnQpKSB7XG4gICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fCAod2luZG93LlNoYWRvd1Jvb3QgJiYgY3VycmVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyBjdXJyZW50Lmhvc3QgOiB1bmRlZmluZWQpO1xuICB9XG4gIHJldHVybiAhIShjdXJyZW50ICYmIChjdXJyZW50Ll9fQ0VfaXNJbXBvcnREb2N1bWVudCB8fCBjdXJyZW50IGluc3RhbmNlb2YgRG9jdW1lbnQpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFOb2RlfSByb290XG4gKiBAcGFyYW0geyFOb2RlfSBzdGFydFxuICogQHJldHVybiB7P05vZGV9XG4gKi9cbmZ1bmN0aW9uIG5leHRTaWJsaW5nT3JBbmNlc3RvclNpYmxpbmcocm9vdCwgc3RhcnQpIHtcbiAgbGV0IG5vZGUgPSBzdGFydDtcbiAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gcm9vdCAmJiAhbm9kZS5uZXh0U2libGluZykge1xuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuICghbm9kZSB8fCBub2RlID09PSByb290KSA/IG51bGwgOiBub2RlLm5leHRTaWJsaW5nO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU5vZGV9IHJvb3RcbiAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0XG4gKiBAcmV0dXJuIHs/Tm9kZX1cbiAqL1xuZnVuY3Rpb24gbmV4dE5vZGUocm9vdCwgc3RhcnQpIHtcbiAgcmV0dXJuIHN0YXJ0LmZpcnN0Q2hpbGQgPyBzdGFydC5maXJzdENoaWxkIDogbmV4dFNpYmxpbmdPckFuY2VzdG9yU2libGluZyhyb290LCBzdGFydCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHshTm9kZX0gcm9vdFxuICogQHBhcmFtIHshZnVuY3Rpb24oIUVsZW1lbnQpfSBjYWxsYmFja1xuICogQHBhcmFtIHshU2V0PE5vZGU+PX0gdmlzaXRlZEltcG9ydHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKHJvb3QsIGNhbGxiYWNrLCB2aXNpdGVkSW1wb3J0cyA9IG5ldyBTZXQoKSkge1xuICBsZXQgbm9kZSA9IHJvb3Q7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8obm9kZSk7XG5cbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBsb2NhbE5hbWUgPSBlbGVtZW50LmxvY2FsTmFtZTtcbiAgICAgIGlmIChsb2NhbE5hbWUgPT09ICdsaW5rJyAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgncmVsJykgPT09ICdpbXBvcnQnKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaW1wb3J0IChwb2x5ZmlsbGVkIG9yIG5vdCkgaGFzIGl0J3Mgcm9vdCBub2RlIGF2YWlsYWJsZSxcbiAgICAgICAgLy8gd2FsayBpdC5cbiAgICAgICAgY29uc3QgaW1wb3J0Tm9kZSA9IC8qKiBAdHlwZSB7IU5vZGV9ICovIChlbGVtZW50LmltcG9ydCk7XG4gICAgICAgIGlmIChpbXBvcnROb2RlIGluc3RhbmNlb2YgTm9kZSAmJiAhdmlzaXRlZEltcG9ydHMuaGFzKGltcG9ydE5vZGUpKSB7XG4gICAgICAgICAgLy8gUHJldmVudCBtdWx0aXBsZSB3YWxrcyBvZiB0aGUgc2FtZSBpbXBvcnQgcm9vdC5cbiAgICAgICAgICB2aXNpdGVkSW1wb3J0cy5hZGQoaW1wb3J0Tm9kZSk7XG5cbiAgICAgICAgICBmb3IgKGxldCBjaGlsZCA9IGltcG9ydE5vZGUuZmlyc3RDaGlsZDsgY2hpbGQ7IGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIHdhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKGNoaWxkLCBjYWxsYmFjaywgdmlzaXRlZEltcG9ydHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElnbm9yZSBkZXNjZW5kYW50cyBvZiBpbXBvcnQgbGlua3MgdG8gcHJldmVudCBhdHRlbXB0aW5nIHRvIHdhbGsgdGhlXG4gICAgICAgIC8vIGVsZW1lbnRzIGNyZWF0ZWQgYnkgdGhlIEhUTUwgSW1wb3J0cyBwb2x5ZmlsbCB0aGF0IHdlIGp1c3Qgd2Fsa2VkXG4gICAgICAgIC8vIGFib3ZlLlxuICAgICAgICBub2RlID0gbmV4dFNpYmxpbmdPckFuY2VzdG9yU2libGluZyhyb290LCBlbGVtZW50KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGxvY2FsTmFtZSA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAvLyBJZ25vcmUgZGVzY2VuZGFudHMgb2YgdGVtcGxhdGVzLiBUaGVyZSBzaG91bGRuJ3QgYmUgYW55IGRlc2NlbmRhbnRzXG4gICAgICAgIC8vIGJlY2F1c2UgdGhleSB3aWxsIGJlIG1vdmVkIGludG8gYC5jb250ZW50YCBkdXJpbmcgY29uc3RydWN0aW9uIGluXG4gICAgICAgIC8vIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0ZW1wbGF0ZSBidXQsIGluIGNhc2UgdGhleSBleGlzdCBhbmQgYXJlIHN0aWxsXG4gICAgICAgIC8vIHdhaXRpbmcgdG8gYmUgbW92ZWQgYnkgYSBwb2x5ZmlsbCwgdGhleSB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICAgIG5vZGUgPSBuZXh0U2libGluZ09yQW5jZXN0b3JTaWJsaW5nKHJvb3QsIGVsZW1lbnQpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gV2FsayBzaGFkb3cgcm9vdHMuXG4gICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5fX0NFX3NoYWRvd1Jvb3Q7XG4gICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICBmb3IgKGxldCBjaGlsZCA9IHNoYWRvd1Jvb3QuZmlyc3RDaGlsZDsgY2hpbGQ7IGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICB3YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhjaGlsZCwgY2FsbGJhY2ssIHZpc2l0ZWRJbXBvcnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5vZGUgPSBuZXh0Tm9kZShyb290LCBub2RlKTtcbiAgfVxufVxuXG4vKipcbiAqIFVzZWQgdG8gc3VwcHJlc3MgQ2xvc3VyZSdzIFwiTW9kaWZ5aW5nIHRoZSBwcm90b3R5cGUgaXMgb25seSBhbGxvd2VkIGlmIHRoZVxuICogY29uc3RydWN0b3IgaXMgaW4gdGhlIHNhbWUgc2NvcGVcIiB3YXJuaW5nIHdpdGhvdXQgdXNpbmdcbiAqIGBAc3VwcHJlc3Mge25ld0NoZWNrVHlwZXMsIGR1cGxpY2F0ZX1gIGJlY2F1c2UgYG5ld0NoZWNrVHlwZXNgIGlzIHRvbyBicm9hZC5cbiAqXG4gKiBAcGFyYW0geyFPYmplY3R9IGRlc3RpbmF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHlVbmNoZWNrZWQoZGVzdGluYXRpb24sIG5hbWUsIHZhbHVlKSB7XG4gIGRlc3RpbmF0aW9uW25hbWVdID0gdmFsdWU7XG59XG4iLCIvKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmNvbnN0IEN1c3RvbUVsZW1lbnRTdGF0ZSA9IHtcbiAgY3VzdG9tOiAxLFxuICBmYWlsZWQ6IDIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21FbGVtZW50U3RhdGU7XG4iLCJpbXBvcnQgKiBhcyBVdGlsaXRpZXMgZnJvbSAnLi9VdGlsaXRpZXMuanMnO1xuaW1wb3J0IENFU3RhdGUgZnJvbSAnLi9DdXN0b21FbGVtZW50U3RhdGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21FbGVtZW50SW50ZXJuYWxzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHshTWFwPHN0cmluZywgIUN1c3RvbUVsZW1lbnREZWZpbml0aW9uPn0gKi9cbiAgICB0aGlzLl9sb2NhbE5hbWVUb0RlZmluaXRpb24gPSBuZXcgTWFwKCk7XG5cbiAgICAvKiogQHR5cGUgeyFNYXA8IUZ1bmN0aW9uLCAhQ3VzdG9tRWxlbWVudERlZmluaXRpb24+fSAqL1xuICAgIHRoaXMuX2NvbnN0cnVjdG9yVG9EZWZpbml0aW9uID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqIEB0eXBlIHshQXJyYXk8IWZ1bmN0aW9uKCFOb2RlKT59ICovXG4gICAgdGhpcy5fcGF0Y2hlcyA9IFtdO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuX2hhc1BhdGNoZXMgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxOYW1lXG4gICAqIEBwYXJhbSB7IUN1c3RvbUVsZW1lbnREZWZpbml0aW9ufSBkZWZpbml0aW9uXG4gICAqL1xuICBzZXREZWZpbml0aW9uKGxvY2FsTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIHRoaXMuX2xvY2FsTmFtZVRvRGVmaW5pdGlvbi5zZXQobG9jYWxOYW1lLCBkZWZpbml0aW9uKTtcbiAgICB0aGlzLl9jb25zdHJ1Y3RvclRvRGVmaW5pdGlvbi5zZXQoZGVmaW5pdGlvbi5jb25zdHJ1Y3RvciwgZGVmaW5pdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZVxuICAgKiBAcmV0dXJuIHshQ3VzdG9tRWxlbWVudERlZmluaXRpb258dW5kZWZpbmVkfVxuICAgKi9cbiAgbG9jYWxOYW1lVG9EZWZpbml0aW9uKGxvY2FsTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbE5hbWVUb0RlZmluaXRpb24uZ2V0KGxvY2FsTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gICAqIEByZXR1cm4geyFDdXN0b21FbGVtZW50RGVmaW5pdGlvbnx1bmRlZmluZWR9XG4gICAqL1xuICBjb25zdHJ1Y3RvclRvRGVmaW5pdGlvbihjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiB0aGlzLl9jb25zdHJ1Y3RvclRvRGVmaW5pdGlvbi5nZXQoY29uc3RydWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IWZ1bmN0aW9uKCFOb2RlKX0gbGlzdGVuZXJcbiAgICovXG4gIGFkZFBhdGNoKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5faGFzUGF0Y2hlcyA9IHRydWU7XG4gICAgdGhpcy5fcGF0Y2hlcy5wdXNoKGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqL1xuICBwYXRjaFRyZWUobm9kZSkge1xuICAgIGlmICghdGhpcy5faGFzUGF0Y2hlcykgcmV0dXJuO1xuXG4gICAgVXRpbGl0aWVzLndhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKG5vZGUsIGVsZW1lbnQgPT4gdGhpcy5wYXRjaChlbGVtZW50KSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKi9cbiAgcGF0Y2gobm9kZSkge1xuICAgIGlmICghdGhpcy5faGFzUGF0Y2hlcykgcmV0dXJuO1xuXG4gICAgaWYgKG5vZGUuX19DRV9wYXRjaGVkKSByZXR1cm47XG4gICAgbm9kZS5fX0NFX3BhdGNoZWQgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9wYXRjaGVzW2ldKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFOb2RlfSByb290XG4gICAqL1xuICBjb25uZWN0VHJlZShyb290KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICAgIFV0aWxpdGllcy53YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhyb290LCBlbGVtZW50ID0+IGVsZW1lbnRzLnB1c2goZWxlbWVudCkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaWYgKGVsZW1lbnQuX19DRV9zdGF0ZSA9PT0gQ0VTdGF0ZS5jdXN0b20pIHtcbiAgICAgICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZChlbGVtZW50KSkge1xuICAgICAgICAgIHRoaXMuY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBncmFkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU5vZGV9IHJvb3RcbiAgICovXG4gIGRpc2Nvbm5lY3RUcmVlKHJvb3QpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gICAgVXRpbGl0aWVzLndhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKHJvb3QsIGVsZW1lbnQgPT4gZWxlbWVudHMucHVzaChlbGVtZW50KSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWxlbWVudC5fX0NFX3N0YXRlID09PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhbGwgdW5jdXN0b21pemVkIGN1c3RvbSBlbGVtZW50cyBhdCBhbmQgYmVsb3cgYSByb290IG5vZGUgZm9yXG4gICAqIHdoaWNoIHRoZXJlIGlzIGEgZGVmaW5pdGlvbi4gV2hlbiBjdXN0b20gZWxlbWVudCByZWFjdGlvbiBjYWxsYmFja3MgYXJlXG4gICAqIGFzc3VtZWQgdG8gYmUgY2FsbGVkIHN5bmNocm9ub3VzbHkgKHdoaWNoLCBieSB0aGUgY3VycmVudCBET00gLyBIVE1MIHNwZWNcbiAgICogZGVmaW5pdGlvbnMsIHRoZXkgYXJlICpub3QqKSwgY2FsbGJhY2tzIGZvciBib3RoIGVsZW1lbnRzIGN1c3RvbWl6ZWRcbiAgICogc3luY2hyb25vdXNseSBieSB0aGUgcGFyc2VyIGFuZCBlbGVtZW50cyBiZWluZyB1cGdyYWRlZCBvY2N1ciBpbiB0aGUgc2FtZVxuICAgKiByZWxhdGl2ZSBvcmRlci5cbiAgICpcbiAgICogTk9URTogVGhpcyBmdW5jdGlvbiwgd2hlbiB1c2VkIHRvIHNpbXVsYXRlIHRoZSBjb25zdHJ1Y3Rpb24gb2YgYSB0cmVlIHRoYXRcbiAgICogaXMgYWxyZWFkeSBjcmVhdGVkIGJ1dCBub3QgY3VzdG9taXplZCAoaS5lLiBieSB0aGUgcGFyc2VyKSwgZG9lcyAqbm90KlxuICAgKiBwcmV2ZW50IHRoZSBlbGVtZW50IGZyb20gcmVhZGluZyB0aGUgJ2ZpbmFsJyAodHJ1ZSkgc3RhdGUgb2YgdGhlIHRyZWUuIEZvclxuICAgKiBleGFtcGxlLCB0aGUgZWxlbWVudCwgZHVyaW5nIHRydWx5IHN5bmNocm9ub3VzIHBhcnNpbmcgLyBjb25zdHJ1Y3Rpb24gd291bGRcbiAgICogc2VlIHRoYXQgaXQgY29udGFpbnMgbm8gY2hpbGRyZW4gYXMgdGhleSBoYXZlIG5vdCB5ZXQgYmVlbiBpbnNlcnRlZC5cbiAgICogSG93ZXZlciwgdGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBtb2RpZnkgdGhlIHRyZWUsIHRoZSBlbGVtZW50IHdpbGxcbiAgICogKGluY29ycmVjdGx5KSBoYXZlIGNoaWxkcmVuLiBBZGRpdGlvbmFsbHksIHNlbGYtbW9kaWZpY2F0aW9uIHJlc3RyaWN0aW9uc1xuICAgKiBmb3IgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3JzIGltcG9zZWQgYnkgdGhlIERPTSBzcGVjIGFyZSAqbm90KiBlbmZvcmNlZC5cbiAgICpcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBuZXN0ZWQgbGlzdCBzaG93cyB0aGUgc3RlcHMgZXh0ZW5kaW5nIGRvd24gZnJvbSB0aGUgSFRNTFxuICAgKiBzcGVjJ3MgcGFyc2luZyBzZWN0aW9uIHRoYXQgY2F1c2UgZWxlbWVudHMgdG8gYmUgc3luY2hyb25vdXNseSBjcmVhdGVkIGFuZFxuICAgKiB1cGdyYWRlZDpcbiAgICpcbiAgICogVGhlIFwiaW4gYm9keVwiIGluc2VydGlvbiBtb2RlOlxuICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNwYXJzaW5nLW1haW4taW5ib2R5XG4gICAqIC0gU3dpdGNoIG9uIHRva2VuOlxuICAgKiAgIC4uIG90aGVyIGNhc2VzIC4uXG4gICAqICAgLT4gQW55IG90aGVyIHN0YXJ0IHRhZ1xuICAgKiAgICAgIC0gW0luc2VydCBhbiBIVE1MIGVsZW1lbnRdKGJlbG93KSBmb3IgdGhlIHRva2VuLlxuICAgKlxuICAgKiBJbnNlcnQgYW4gSFRNTCBlbGVtZW50OlxuICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNpbnNlcnQtYW4taHRtbC1lbGVtZW50XG4gICAqIC0gSW5zZXJ0IGEgZm9yZWlnbiBlbGVtZW50IGZvciB0aGUgdG9rZW4gaW4gdGhlIEhUTUwgbmFtZXNwYWNlOlxuICAgKiAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2luc2VydC1hLWZvcmVpZ24tZWxlbWVudFxuICAgKiAgIC0gQ3JlYXRlIGFuIGVsZW1lbnQgZm9yIGEgdG9rZW46XG4gICAqICAgICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNjcmVhdGUtYW4tZWxlbWVudC1mb3ItdGhlLXRva2VuXG4gICAqICAgICAtIFdpbGwgZXhlY3V0ZSBzY3JpcHQgZmxhZyBpcyB0cnVlP1xuICAgKiAgICAgICAtIChFbGVtZW50IHF1ZXVlIHB1c2hlZCB0byB0aGUgY3VzdG9tIGVsZW1lbnQgcmVhY3Rpb25zIHN0YWNrLilcbiAgICogICAgIC0gQ3JlYXRlIGFuIGVsZW1lbnQ6XG4gICAqICAgICAgIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1jcmVhdGUtZWxlbWVudFxuICAgKiAgICAgICAtIFN5bmMgQ0UgZmxhZyBpcyB0cnVlP1xuICAgKiAgICAgICAgIC0gQ29uc3RydWN0b3IgY2FsbGVkLlxuICAgKiAgICAgICAgIC0gU2VsZi1tb2RpZmljYXRpb24gcmVzdHJpY3Rpb25zIGVuZm9yY2VkLlxuICAgKiAgICAgICAtIFN5bmMgQ0UgZmxhZyBpcyBmYWxzZT9cbiAgICogICAgICAgICAtIChVcGdyYWRlIHJlYWN0aW9uIGVucXVldWVkLilcbiAgICogICAgIC0gQXR0cmlidXRlcyBhcHBlbmRlZCB0byBlbGVtZW50LlxuICAgKiAgICAgICAoYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgcmVhY3Rpb25zIGVucXVldWVkLilcbiAgICogICAgIC0gV2lsbCBleGVjdXRlIHNjcmlwdCBmbGFnIGlzIHRydWU/XG4gICAqICAgICAgIC0gKEVsZW1lbnQgcXVldWUgcG9wcGVkIGZyb20gdGhlIGN1c3RvbSBlbGVtZW50IHJlYWN0aW9ucyBzdGFjay5cbiAgICogICAgICAgICBSZWFjdGlvbnMgaW4gdGhlIHBvcHBlZCBzdGFjayBhcmUgaW52b2tlZC4pXG4gICAqICAgLSAoRWxlbWVudCBxdWV1ZSBwdXNoZWQgdG8gdGhlIGN1c3RvbSBlbGVtZW50IHJlYWN0aW9ucyBzdGFjay4pXG4gICAqICAgLSBJbnNlcnQgdGhlIGVsZW1lbnQ6XG4gICAqICAgICBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1pbnNlcnRcbiAgICogICAgIC0gU2hhZG93LWluY2x1ZGluZyBkZXNjZW5kYW50cyBhcmUgY29ubmVjdGVkLiBEdXJpbmcgcGFyc2luZ1xuICAgKiAgICAgICBjb25zdHJ1Y3Rpb24sIHRoZXJlIGFyZSBubyBzaGFkb3ctKmV4Y2x1ZGluZyogZGVzY2VuZGFudHMuXG4gICAqICAgICAgIEhvd2V2ZXIsIHRoZSBjb25zdHJ1Y3RvciBtYXkgaGF2ZSB2YWxpZGx5IGF0dGFjaGVkIGEgc2hhZG93XG4gICAqICAgICAgIHRyZWUgdG8gaXRzZWxmIGFuZCBhZGRlZCBkZXNjZW5kYW50cyB0byB0aGF0IHNoYWRvdyB0cmVlLlxuICAgKiAgICAgICAoYGNvbm5lY3RlZENhbGxiYWNrYCByZWFjdGlvbnMgZW5xdWV1ZWQuKVxuICAgKiAgIC0gKEVsZW1lbnQgcXVldWUgcG9wcGVkIGZyb20gdGhlIGN1c3RvbSBlbGVtZW50IHJlYWN0aW9ucyBzdGFjay5cbiAgICogICAgIFJlYWN0aW9ucyBpbiB0aGUgcG9wcGVkIHN0YWNrIGFyZSBpbnZva2VkLilcbiAgICpcbiAgICogQHBhcmFtIHshTm9kZX0gcm9vdFxuICAgKiBAcGFyYW0geyFTZXQ8Tm9kZT49fSB2aXNpdGVkSW1wb3J0c1xuICAgKi9cbiAgcGF0Y2hBbmRVcGdyYWRlVHJlZShyb290LCB2aXNpdGVkSW1wb3J0cyA9IG5ldyBTZXQoKSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgICBjb25zdCBnYXRoZXJFbGVtZW50cyA9IGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSAnbGluaycgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JlbCcpID09PSAnaW1wb3J0Jykge1xuICAgICAgICAvLyBUaGUgSFRNTCBJbXBvcnRzIHBvbHlmaWxsIHNldHMgYSBkZXNjZW5kYW50IGVsZW1lbnQgb2YgdGhlIGxpbmsgdG9cbiAgICAgICAgLy8gdGhlIGBpbXBvcnRgIHByb3BlcnR5LCBzcGVjaWZpY2FsbHkgdGhpcyBpcyAqbm90KiBhIERvY3VtZW50LlxuICAgICAgICBjb25zdCBpbXBvcnROb2RlID0gLyoqIEB0eXBlIHs/Tm9kZX0gKi8gKGVsZW1lbnQuaW1wb3J0KTtcblxuICAgICAgICBpZiAoaW1wb3J0Tm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgaW1wb3J0Tm9kZS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgaW1wb3J0Tm9kZS5fX0NFX2lzSW1wb3J0RG9jdW1lbnQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gQ29ubmVjdGVkIGxpbmtzIGFyZSBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdHJ5LlxuICAgICAgICAgIGltcG9ydE5vZGUuX19DRV9oYXNSZWdpc3RyeSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBsaW5rJ3MgaW1wb3J0IHJvb3QgaXMgbm90IGF2YWlsYWJsZSwgaXRzIGNvbnRlbnRzIGNhbid0IGJlXG4gICAgICAgICAgLy8gd2Fsa2VkLiBXYWl0IGZvciAnbG9hZCcgYW5kIHdhbGsgaXQgd2hlbiBpdCdzIHJlYWR5LlxuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydE5vZGUgPSAvKiogQHR5cGUgeyFOb2RlfSAqLyAoZWxlbWVudC5pbXBvcnQpO1xuXG4gICAgICAgICAgICBpZiAoaW1wb3J0Tm9kZS5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQpIHJldHVybjtcbiAgICAgICAgICAgIGltcG9ydE5vZGUuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaW1wb3J0Tm9kZS5fX0NFX2lzSW1wb3J0RG9jdW1lbnQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBDb25uZWN0ZWQgbGlua3MgYXJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0cnkuXG4gICAgICAgICAgICBpbXBvcnROb2RlLl9fQ0VfaGFzUmVnaXN0cnkgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBDbG9uZSB0aGUgYHZpc2l0ZWRJbXBvcnRzYCBzZXQgdGhhdCB3YXMgcG9wdWxhdGVkIHN5bmMgZHVyaW5nXG4gICAgICAgICAgICAvLyB0aGUgYHBhdGNoQW5kVXBncmFkZVRyZWVgIGNhbGwgdGhhdCBjYXVzZWQgdGhpcyAnbG9hZCcgaGFuZGxlciB0b1xuICAgICAgICAgICAgLy8gYmUgYWRkZWQuIFRoZW4sIHJlbW92ZSAqdGhpcyogbGluaydzIGltcG9ydCBub2RlIHNvIHRoYXQgd2UgY2FuXG4gICAgICAgICAgICAvLyB3YWxrIHRoYXQgaW1wb3J0IGFnYWluLCBldmVuIGlmIGl0IHdhcyBwYXJ0aWFsbHkgd2Fsa2VkIGxhdGVyXG4gICAgICAgICAgICAvLyBkdXJpbmcgdGhlIHNhbWUgYHBhdGNoQW5kVXBncmFkZVRyZWVgIGNhbGwuXG4gICAgICAgICAgICBjb25zdCBjbG9uZWRWaXNpdGVkSW1wb3J0cyA9IG5ldyBTZXQodmlzaXRlZEltcG9ydHMpO1xuICAgICAgICAgICAgdmlzaXRlZEltcG9ydHMuZGVsZXRlKGltcG9ydE5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLnBhdGNoQW5kVXBncmFkZVRyZWUoaW1wb3J0Tm9kZSwgdmlzaXRlZEltcG9ydHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBgd2Fsa0RlZXBEZXNjZW5kYW50RWxlbWVudHNgIHBvcHVsYXRlcyAoYW5kIGludGVybmFsbHkgY2hlY2tzIGFnYWluc3QpXG4gICAgLy8gYHZpc2l0ZWRJbXBvcnRzYCB3aGVuIHRyYXZlcnNpbmcgYSBsb2FkZWQgaW1wb3J0LlxuICAgIFV0aWxpdGllcy53YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhyb290LCBnYXRoZXJFbGVtZW50cywgdmlzaXRlZEltcG9ydHMpO1xuXG4gICAgaWYgKHRoaXMuX2hhc1BhdGNoZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5wYXRjaChlbGVtZW50c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy51cGdyYWRlRWxlbWVudChlbGVtZW50c1tpXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIHVwZ3JhZGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBlbGVtZW50Ll9fQ0Vfc3RhdGU7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5sb2NhbE5hbWVUb0RlZmluaXRpb24oZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgIGlmICghZGVmaW5pdGlvbikgcmV0dXJuO1xuXG4gICAgZGVmaW5pdGlvbi5jb25zdHJ1Y3Rpb25TdGFjay5wdXNoKGVsZW1lbnQpO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBkZWZpbml0aW9uLmNvbnN0cnVjdG9yO1xuICAgIHRyeSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IChjb25zdHJ1Y3RvcikoKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yIGRpZCBub3QgcHJvZHVjZSB0aGUgZWxlbWVudCBiZWluZyB1cGdyYWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZGVmaW5pdGlvbi5jb25zdHJ1Y3Rpb25TdGFjay5wb3AoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlbGVtZW50Ll9fQ0Vfc3RhdGUgPSBDRVN0YXRlLmZhaWxlZDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgZWxlbWVudC5fX0NFX3N0YXRlID0gQ0VTdGF0ZS5jdXN0b207XG4gICAgZWxlbWVudC5fX0NFX2RlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuXG4gICAgaWYgKGRlZmluaXRpb24uYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7XG4gICAgICBjb25zdCBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBkZWZpbml0aW9uLm9ic2VydmVkQXR0cmlidXRlcztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzZXJ2ZWRBdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBvYnNlcnZlZEF0dHJpYnV0ZXNbaV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGVsZW1lbnQsIG5hbWUsIG51bGwsIHZhbHVlLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQoZWxlbWVudCkpIHtcbiAgICAgIHRoaXMuY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIGNvbm5lY3RlZENhbGxiYWNrKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gZWxlbWVudC5fX0NFX2RlZmluaXRpb247XG4gICAgaWYgKGRlZmluaXRpb24uY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgIGRlZmluaXRpb24uY29ubmVjdGVkQ2FsbGJhY2suY2FsbChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9fQ0VfaXNDb25uZWN0ZWRDYWxsYmFja0NhbGxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5fX0NFX2lzQ29ubmVjdGVkQ2FsbGJhY2tDYWxsZWQpIHtcbiAgICAgIHRoaXMuY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IGVsZW1lbnQuX19DRV9kZWZpbml0aW9uO1xuICAgIGlmIChkZWZpbml0aW9uLmRpc2Nvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICBkZWZpbml0aW9uLmRpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgZWxlbWVudC5fX0NFX2lzQ29ubmVjdGVkQ2FsbGJhY2tDYWxsZWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0gez9zdHJpbmd9IG9sZFZhbHVlXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gbmV3VmFsdWVcbiAgICogQHBhcmFtIHs/c3RyaW5nfSBuYW1lc3BhY2VcbiAgICovXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlbGVtZW50LCBuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIG5hbWVzcGFjZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBlbGVtZW50Ll9fQ0VfZGVmaW5pdGlvbjtcbiAgICBpZiAoXG4gICAgICBkZWZpbml0aW9uLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayAmJlxuICAgICAgZGVmaW5pdGlvbi5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihuYW1lKSA+IC0xXG4gICAgKSB7XG4gICAgICBkZWZpbml0aW9uLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjay5jYWxsKGVsZW1lbnQsIG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4vQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIge1xuICBjb25zdHJ1Y3RvcihpbnRlcm5hbHMsIGRvYykge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHshQ3VzdG9tRWxlbWVudEludGVybmFsc31cbiAgICAgKi9cbiAgICB0aGlzLl9pbnRlcm5hbHMgPSBpbnRlcm5hbHM7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7IURvY3VtZW50fVxuICAgICAqL1xuICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge011dGF0aW9uT2JzZXJ2ZXJ8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuX29ic2VydmVyID0gdW5kZWZpbmVkO1xuXG5cbiAgICAvLyBTaW11bGF0ZSB0cmVlIGNvbnN0cnVjdGlvbiBmb3IgYWxsIGN1cnJlbnRseSBhY2Nlc3NpYmxlIG5vZGVzIGluIHRoZVxuICAgIC8vIGRvY3VtZW50LlxuICAgIHRoaXMuX2ludGVybmFscy5wYXRjaEFuZFVwZ3JhZGVUcmVlKHRoaXMuX2RvY3VtZW50KTtcblxuICAgIGlmICh0aGlzLl9kb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5faGFuZGxlTXV0YXRpb25zLmJpbmQodGhpcykpO1xuXG4gICAgICAvLyBOb2RlcyBjcmVhdGVkIGJ5IHRoZSBwYXJzZXIgYXJlIGdpdmVuIHRvIHRoZSBvYnNlcnZlciAqYmVmb3JlKiB0aGUgbmV4dFxuICAgICAgLy8gdGFzayBydW5zLiBJbmxpbmUgc2NyaXB0cyBhcmUgcnVuIGluIGEgbmV3IHRhc2suIFRoaXMgbWVhbnMgdGhhdCB0aGVcbiAgICAgIC8vIG9ic2VydmVyIHdpbGwgYmUgYWJsZSB0byBoYW5kbGUgdGhlIG5ld2x5IHBhcnNlZCBub2RlcyBiZWZvcmUgdGhlIGlubGluZVxuICAgICAgLy8gc2NyaXB0IGlzIHJ1bi5cbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGlzY29ubmVjdCgpIHtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gbXV0YXRpb25zXG4gICAqL1xuICBfaGFuZGxlTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgIC8vIE9uY2UgdGhlIGRvY3VtZW50J3MgYHJlYWR5U3RhdGVgIGlzICdpbnRlcmFjdGl2ZScgb3IgJ2NvbXBsZXRlJywgYWxsIG5ld1xuICAgIC8vIG5vZGVzIGNyZWF0ZWQgd2l0aGluIHRoYXQgZG9jdW1lbnQgd2lsbCBiZSB0aGUgcmVzdWx0IG9mIHNjcmlwdCBhbmRcbiAgICAvLyBzaG91bGQgYmUgaGFuZGxlZCBieSBwYXRjaGluZy5cbiAgICBjb25zdCByZWFkeVN0YXRlID0gdGhpcy5fZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgICBpZiAocmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyB8fCByZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYWRkZWROb2RlcyA9IG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhZGRlZE5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBhZGRlZE5vZGVzW2pdO1xuICAgICAgICB0aGlzLl9pbnRlcm5hbHMucGF0Y2hBbmRVcGdyYWRlVHJlZShub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQHRlbXBsYXRlIFRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmZXJyZWQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtUfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXNvbHZlID0gdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IVByb21pc2U8VD59XG4gICAgICovXG4gICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cbiAgICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgICByZXNvbHZlKHRoaXMuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1R9IHZhbHVlXG4gICAqL1xuICByZXNvbHZlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FscmVhZHkgcmVzb2x2ZWQuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh0aGlzLl9yZXNvbHZlKSB7XG4gICAgICB0aGlzLl9yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IVByb21pc2U8VD59XG4gICAqL1xuICB0b1Byb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gIH1cbn1cbiIsImltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4vQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyc7XG5pbXBvcnQgRG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlciBmcm9tICcuL0RvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIuanMnO1xuaW1wb3J0IERlZmVycmVkIGZyb20gJy4vRGVmZXJyZWQuanMnO1xuaW1wb3J0ICogYXMgVXRpbGl0aWVzIGZyb20gJy4vVXRpbGl0aWVzLmpzJztcblxuLyoqXG4gKiBAdW5yZXN0cmljdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUN1c3RvbUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFsc1xuICAgKi9cbiAgY29uc3RydWN0b3IoaW50ZXJuYWxzKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9lbGVtZW50RGVmaW5pdGlvbklzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IUN1c3RvbUVsZW1lbnRJbnRlcm5hbHN9XG4gICAgICovXG4gICAgdGhpcy5faW50ZXJuYWxzID0gaW50ZXJuYWxzO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IU1hcDxzdHJpbmcsICFEZWZlcnJlZDx1bmRlZmluZWQ+Pn1cbiAgICAgKi9cbiAgICB0aGlzLl93aGVuRGVmaW5lZERlZmVycmVkID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgZmx1c2ggY2FsbGJhY2sgdHJpZ2dlcnMgdGhlIGRvY3VtZW50IHdhbGsgc3luY2hyb25vdXNseS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHshRnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fZmx1c2hDYWxsYmFjayA9IGZuID0+IGZuKCk7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2ZsdXNoUGVuZGluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IUFycmF5PHN0cmluZz59XG4gICAgICovXG4gICAgdGhpcy5fdW5mbHVzaGVkTG9jYWxOYW1lcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IURvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5fZG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlciA9IG5ldyBEb2N1bWVudENvbnN0cnVjdGlvbk9ic2VydmVyKGludGVybmFscywgZG9jdW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gICAqL1xuICBkZWZpbmUobG9jYWxOYW1lLCBjb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcnMgbXVzdCBiZSBmdW5jdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKCFVdGlsaXRpZXMuaXNWYWxpZEN1c3RvbUVsZW1lbnROYW1lKGxvY2FsTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVGhlIGVsZW1lbnQgbmFtZSAnJHtsb2NhbE5hbWV9JyBpcyBub3QgdmFsaWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ludGVybmFscy5sb2NhbE5hbWVUb0RlZmluaXRpb24obG9jYWxOYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIGN1c3RvbSBlbGVtZW50IHdpdGggbmFtZSAnJHtsb2NhbE5hbWV9JyBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnREZWZpbml0aW9uSXNSdW5uaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgY3VzdG9tIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBkZWZpbmVkLicpO1xuICAgIH1cbiAgICB0aGlzLl9lbGVtZW50RGVmaW5pdGlvbklzUnVubmluZyA9IHRydWU7XG5cbiAgICBsZXQgY29ubmVjdGVkQ2FsbGJhY2s7XG4gICAgbGV0IGRpc2Nvbm5lY3RlZENhbGxiYWNrO1xuICAgIGxldCBhZG9wdGVkQ2FsbGJhY2s7XG4gICAgbGV0IGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaztcbiAgICBsZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzO1xuICAgIHRyeSB7XG4gICAgICAvKiogQHR5cGUgeyFPYmplY3R9ICovXG4gICAgICBjb25zdCBwcm90b3R5cGUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICBpZiAoIShwcm90b3R5cGUgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvclxcJ3MgcHJvdG90eXBlIGlzIG5vdCBhbiBvYmplY3QuJyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldENhbGxiYWNrKG5hbWUpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tWYWx1ZSA9IHByb3RvdHlwZVtuYW1lXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrVmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhKGNhbGxiYWNrVmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtuYW1lfScgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFja1ZhbHVlO1xuICAgICAgfVxuXG4gICAgICBjb25uZWN0ZWRDYWxsYmFjayA9IGdldENhbGxiYWNrKCdjb25uZWN0ZWRDYWxsYmFjaycpO1xuICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBnZXRDYWxsYmFjaygnZGlzY29ubmVjdGVkQ2FsbGJhY2snKTtcbiAgICAgIGFkb3B0ZWRDYWxsYmFjayA9IGdldENhbGxiYWNrKCdhZG9wdGVkQ2FsbGJhY2snKTtcbiAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGdldENhbGxiYWNrKCdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snKTtcbiAgICAgIG9ic2VydmVkQXR0cmlidXRlcyA9IGNvbnN0cnVjdG9yWydvYnNlcnZlZEF0dHJpYnV0ZXMnXSB8fCBbXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2VsZW1lbnREZWZpbml0aW9uSXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHtcbiAgICAgIGxvY2FsTmFtZSxcbiAgICAgIGNvbnN0cnVjdG9yLFxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2ssXG4gICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjayxcbiAgICAgIGFkb3B0ZWRDYWxsYmFjayxcbiAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayxcbiAgICAgIG9ic2VydmVkQXR0cmlidXRlcyxcbiAgICAgIGNvbnN0cnVjdGlvblN0YWNrOiBbXSxcbiAgICB9O1xuXG4gICAgdGhpcy5faW50ZXJuYWxzLnNldERlZmluaXRpb24obG9jYWxOYW1lLCBkZWZpbml0aW9uKTtcblxuICAgIHRoaXMuX3VuZmx1c2hlZExvY2FsTmFtZXMucHVzaChsb2NhbE5hbWUpO1xuXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBjYWxsZWQgdGhlIGZsdXNoIGNhbGxiYWNrIGFuZCBpdCBoYXNuJ3QgY2FsbGVkIGJhY2sgeWV0LFxuICAgIC8vIGRvbid0IGNhbGwgaXQgYWdhaW4uXG4gICAgaWYgKCF0aGlzLl9mbHVzaFBlbmRpbmcpIHtcbiAgICAgIHRoaXMuX2ZsdXNoUGVuZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9mbHVzaENhbGxiYWNrKCgpID0+IHRoaXMuX2ZsdXNoKCkpO1xuICAgIH1cbiAgfVxuXG4gIF9mbHVzaCgpIHtcbiAgICAvLyBJZiBubyBuZXcgZGVmaW5pdGlvbnMgd2VyZSBkZWZpbmVkLCBkb24ndCBhdHRlbXB0IHRvIGZsdXNoLiBUaGlzIGNvdWxkXG4gICAgLy8gaGFwcGVuIGlmIGEgZmx1c2ggY2FsbGJhY2sga2VlcHMgdGhlIGZ1bmN0aW9uIGl0IGlzIGdpdmVuIGFuZCBjYWxscyBpdFxuICAgIC8vIG11bHRpcGxlIHRpbWVzLlxuICAgIGlmICh0aGlzLl9mbHVzaFBlbmRpbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICB0aGlzLl9mbHVzaFBlbmRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9pbnRlcm5hbHMucGF0Y2hBbmRVcGdyYWRlVHJlZShkb2N1bWVudCk7XG5cbiAgICB3aGlsZSAodGhpcy5fdW5mbHVzaGVkTG9jYWxOYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsb2NhbE5hbWUgPSB0aGlzLl91bmZsdXNoZWRMb2NhbE5hbWVzLnNoaWZ0KCk7XG4gICAgICBjb25zdCBkZWZlcnJlZCA9IHRoaXMuX3doZW5EZWZpbmVkRGVmZXJyZWQuZ2V0KGxvY2FsTmFtZSk7XG4gICAgICBpZiAoZGVmZXJyZWQpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxOYW1lXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAgICovXG4gIGdldChsb2NhbE5hbWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5faW50ZXJuYWxzLmxvY2FsTmFtZVRvRGVmaW5pdGlvbihsb2NhbE5hbWUpO1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICByZXR1cm4gZGVmaW5pdGlvbi5jb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWVcbiAgICogQHJldHVybiB7IVByb21pc2U8dW5kZWZpbmVkPn1cbiAgICovXG4gIHdoZW5EZWZpbmVkKGxvY2FsTmFtZSkge1xuICAgIGlmICghVXRpbGl0aWVzLmlzVmFsaWRDdXN0b21FbGVtZW50TmFtZShsb2NhbE5hbWUpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFN5bnRheEVycm9yKGAnJHtsb2NhbE5hbWV9JyBpcyBub3QgYSB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lLmApKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmlvciA9IHRoaXMuX3doZW5EZWZpbmVkRGVmZXJyZWQuZ2V0KGxvY2FsTmFtZSk7XG4gICAgaWYgKHByaW9yKSB7XG4gICAgICByZXR1cm4gcHJpb3IudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoKTtcbiAgICB0aGlzLl93aGVuRGVmaW5lZERlZmVycmVkLnNldChsb2NhbE5hbWUsIGRlZmVycmVkKTtcblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLl9pbnRlcm5hbHMubG9jYWxOYW1lVG9EZWZpbml0aW9uKGxvY2FsTmFtZSk7XG4gICAgLy8gUmVzb2x2ZSBpbW1lZGlhdGVseSBvbmx5IGlmIHRoZSBnaXZlbiBsb2NhbCBuYW1lIGhhcyBhIGRlZmluaXRpb24gKmFuZCpcbiAgICAvLyB0aGUgZnVsbCBkb2N1bWVudCB3YWxrIHRvIHVwZ3JhZGUgZWxlbWVudHMgd2l0aCB0aGF0IGxvY2FsIG5hbWUgaGFzXG4gICAgLy8gYWxyZWFkeSBoYXBwZW5lZC5cbiAgICBpZiAoZGVmaW5pdGlvbiAmJiB0aGlzLl91bmZsdXNoZWRMb2NhbE5hbWVzLmluZGV4T2YobG9jYWxOYW1lKSA9PT0gLTEpIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmZXJyZWQudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKG91dGVyKSB7XG4gICAgdGhpcy5fZG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgY29uc3QgaW5uZXIgPSB0aGlzLl9mbHVzaENhbGxiYWNrO1xuICAgIHRoaXMuX2ZsdXNoQ2FsbGJhY2sgPSBmbHVzaCA9PiBvdXRlcigoKSA9PiBpbm5lcihmbHVzaCkpO1xuICB9XG59XG5cbi8vIENsb3N1cmUgY29tcGlsZXIgZXhwb3J0cy5cbndpbmRvd1snQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5J10gPSBDdXN0b21FbGVtZW50UmVnaXN0cnk7XG5DdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlWydkZWZpbmUnXSA9IEN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGUuZGVmaW5lO1xuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZVsnZ2V0J10gPSBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLmdldDtcbkN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGVbJ3doZW5EZWZpbmVkJ10gPSBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLndoZW5EZWZpbmVkO1xuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZVsncG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayddID0gQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBEb2N1bWVudF9jcmVhdGVFbGVtZW50OiB3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQsXG4gIERvY3VtZW50X2NyZWF0ZUVsZW1lbnROUzogd2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50TlMsXG4gIERvY3VtZW50X2ltcG9ydE5vZGU6IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxcbiAgRG9jdW1lbnRfcHJlcGVuZDogd2luZG93LkRvY3VtZW50LnByb3RvdHlwZVsncHJlcGVuZCddLFxuICBEb2N1bWVudF9hcHBlbmQ6IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGVbJ2FwcGVuZCddLFxuICBOb2RlX2Nsb25lTm9kZTogd2luZG93Lk5vZGUucHJvdG90eXBlLmNsb25lTm9kZSxcbiAgTm9kZV9hcHBlbmRDaGlsZDogd2luZG93Lk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkLFxuICBOb2RlX2luc2VydEJlZm9yZTogd2luZG93Lk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSxcbiAgTm9kZV9yZW1vdmVDaGlsZDogd2luZG93Lk5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkLFxuICBOb2RlX3JlcGxhY2VDaGlsZDogd2luZG93Lk5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCxcbiAgTm9kZV90ZXh0Q29udGVudDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuTm9kZS5wcm90b3R5cGUsICd0ZXh0Q29udGVudCcpLFxuICBFbGVtZW50X2F0dGFjaFNoYWRvdzogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydhdHRhY2hTaGFkb3cnXSxcbiAgRWxlbWVudF9pbm5lckhUTUw6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkVsZW1lbnQucHJvdG90eXBlLCAnaW5uZXJIVE1MJyksXG4gIEVsZW1lbnRfZ2V0QXR0cmlidXRlOiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlLFxuICBFbGVtZW50X3NldEF0dHJpYnV0ZTogd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSxcbiAgRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGU6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsXG4gIEVsZW1lbnRfZ2V0QXR0cmlidXRlTlM6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOUyxcbiAgRWxlbWVudF9zZXRBdHRyaWJ1dGVOUzogd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZU5TLFxuICBFbGVtZW50X3JlbW92ZUF0dHJpYnV0ZU5TOiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlTlMsXG4gIEVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50OiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGVbJ2luc2VydEFkamFjZW50RWxlbWVudCddLFxuICBFbGVtZW50X3ByZXBlbmQ6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsncHJlcGVuZCddLFxuICBFbGVtZW50X2FwcGVuZDogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydhcHBlbmQnXSxcbiAgRWxlbWVudF9iZWZvcmU6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsnYmVmb3JlJ10sXG4gIEVsZW1lbnRfYWZ0ZXI6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsnYWZ0ZXInXSxcbiAgRWxlbWVudF9yZXBsYWNlV2l0aDogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydyZXBsYWNlV2l0aCddLFxuICBFbGVtZW50X3JlbW92ZTogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydyZW1vdmUnXSxcbiAgSFRNTEVsZW1lbnQ6IHdpbmRvdy5IVE1MRWxlbWVudCxcbiAgSFRNTEVsZW1lbnRfaW5uZXJIVE1MOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUsICdpbm5lckhUTUwnKSxcbiAgSFRNTEVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50OiB3aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlWydpbnNlcnRBZGphY2VudEVsZW1lbnQnXSxcbn07XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgZXhpc3RzIG9ubHkgdG8gd29yayBhcm91bmQgQ2xvc3VyZSdzIGxhY2sgb2YgYSB3YXkgdG8gZGVzY3JpYmVcbiAqIHNpbmdsZXRvbnMuIEl0IHJlcHJlc2VudHMgdGhlICdhbHJlYWR5IGNvbnN0cnVjdGVkIG1hcmtlcicgdXNlZCBpbiBjdXN0b21cbiAqIGVsZW1lbnQgY29uc3RydWN0aW9uIHN0YWNrcy5cbiAqXG4gKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWFscmVhZHktY29uc3RydWN0ZWQtbWFya2VyXG4gKi9cbmNsYXNzIEFscmVhZHlDb25zdHJ1Y3RlZE1hcmtlciB7fVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyKCk7XG4iLCJpbXBvcnQgTmF0aXZlIGZyb20gJy4vTmF0aXZlLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4uL0N1c3RvbUVsZW1lbnRJbnRlcm5hbHMuanMnO1xuaW1wb3J0IENFU3RhdGUgZnJvbSAnLi4vQ3VzdG9tRWxlbWVudFN0YXRlLmpzJztcbmltcG9ydCBBbHJlYWR5Q29uc3RydWN0ZWRNYXJrZXIgZnJvbSAnLi4vQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyLmpzJztcblxuLyoqXG4gKiBAcGFyYW0geyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJuYWxzKSB7XG4gIHdpbmRvd1snSFRNTEVsZW1lbnQnXSA9IChmdW5jdGlvbigpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb24obmV3OiBIVE1MRWxlbWVudCk6ICFIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBIVE1MRWxlbWVudCgpIHtcbiAgICAgIC8vIFRoaXMgc2hvdWxkIHJlYWxseSBiZSBgbmV3LnRhcmdldGAgYnV0IGBuZXcudGFyZ2V0YCBjYW4ndCBiZSBlbXVsYXRlZFxuICAgICAgLy8gaW4gRVM1LiBBc3N1bWluZyB0aGUgdXNlciBrZWVwcyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgY29uc3RydWN0b3Inc1xuICAgICAgLy8gcHJvdG90eXBlJ3MgYGNvbnN0cnVjdG9yYCBwcm9wZXJ0eSwgdGhpcyBpcyBlcXVpdmFsZW50LlxuICAgICAgLyoqIEB0eXBlIHshRnVuY3Rpb259ICovXG4gICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbnRlcm5hbHMuY29uc3RydWN0b3JUb0RlZmluaXRpb24oY29uc3RydWN0b3IpO1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGN1c3RvbSBlbGVtZW50IGJlaW5nIGNvbnN0cnVjdGVkIHdhcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBjdXN0b21FbGVtZW50c2AuJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnN0cnVjdGlvblN0YWNrID0gZGVmaW5pdGlvbi5jb25zdHJ1Y3Rpb25TdGFjaztcblxuICAgICAgaWYgKGNvbnN0cnVjdGlvblN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gTmF0aXZlLkRvY3VtZW50X2NyZWF0ZUVsZW1lbnQuY2FsbChkb2N1bWVudCwgZGVmaW5pdGlvbi5sb2NhbE5hbWUpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZWxlbWVudCwgY29uc3RydWN0b3IucHJvdG90eXBlKTtcbiAgICAgICAgZWxlbWVudC5fX0NFX3N0YXRlID0gQ0VTdGF0ZS5jdXN0b207XG4gICAgICAgIGVsZW1lbnQuX19DRV9kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICAgICAgaW50ZXJuYWxzLnBhdGNoKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGFzdEluZGV4ID0gY29uc3RydWN0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb25zdHJ1Y3Rpb25TdGFja1tsYXN0SW5kZXhdO1xuICAgICAgaWYgKGVsZW1lbnQgPT09IEFscmVhZHlDb25zdHJ1Y3RlZE1hcmtlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBIVE1MRWxlbWVudCBjb25zdHJ1Y3RvciB3YXMgZWl0aGVyIGNhbGxlZCByZWVudHJhbnRseSBmb3IgdGhpcyBjb25zdHJ1Y3RvciBvciBjYWxsZWQgbXVsdGlwbGUgdGltZXMuJyk7XG4gICAgICB9XG4gICAgICBjb25zdHJ1Y3Rpb25TdGFja1tsYXN0SW5kZXhdID0gQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyO1xuXG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZWxlbWVudCwgY29uc3RydWN0b3IucHJvdG90eXBlKTtcbiAgICAgIGludGVybmFscy5wYXRjaCgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGVsZW1lbnQpKTtcblxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlID0gTmF0aXZlLkhUTUxFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHJldHVybiBIVE1MRWxlbWVudDtcbiAgfSkoKTtcbn07XG4iLCJpbXBvcnQgQ3VzdG9tRWxlbWVudEludGVybmFscyBmcm9tICcuLi8uLi9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzJztcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICcuLi8uLi9VdGlsaXRpZXMuanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHByZXBlbmQ6ICFmdW5jdGlvbiguLi4oIU5vZGV8c3RyaW5nKSksXG4gICogIGFwcGVuZDogIWZ1bmN0aW9uKC4uLighTm9kZXxzdHJpbmcpKSxcbiAqIH19XG4gKi9cbmxldCBQYXJlbnROb2RlTmF0aXZlTWV0aG9kcztcblxuLyoqXG4gKiBAcGFyYW0geyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHNcbiAqIEBwYXJhbSB7IU9iamVjdH0gZGVzdGluYXRpb25cbiAqIEBwYXJhbSB7IVBhcmVudE5vZGVOYXRpdmVNZXRob2RzfSBidWlsdEluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscywgZGVzdGluYXRpb24sIGJ1aWx0SW4pIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uKCFOb2RlfHN0cmluZyl9IG5vZGVzXG4gICAqL1xuICBkZXN0aW5hdGlvblsncHJlcGVuZCddID0gZnVuY3Rpb24oLi4ubm9kZXMpIHtcbiAgICAvLyBUT0RPOiBGaXggdGhpcyBmb3Igd2hlbiBvbmUgb2YgYG5vZGVzYCBpcyBhIERvY3VtZW50RnJhZ21lbnQhXG4gICAgY29uc3QgY29ubmVjdGVkQmVmb3JlID0gLyoqIEB0eXBlIHshQXJyYXk8IU5vZGU+fSAqLyAobm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xuICAgICAgLy8gRG9jdW1lbnRGcmFnbWVudHMgYXJlIG5vdCBjb25uZWN0ZWQgYW5kIHdpbGwgbm90IGJlIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBOb2RlICYmIFV0aWxpdGllcy5pc0Nvbm5lY3RlZChub2RlKTtcbiAgICB9KSk7XG5cbiAgICBidWlsdEluLnByZXBlbmQuYXBwbHkodGhpcywgbm9kZXMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25uZWN0ZWRCZWZvcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShjb25uZWN0ZWRCZWZvcmVbaV0pO1xuICAgIH1cblxuICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uKCFOb2RlfHN0cmluZyl9IG5vZGVzXG4gICAqL1xuICBkZXN0aW5hdGlvblsnYXBwZW5kJ10gPSBmdW5jdGlvbiguLi5ub2Rlcykge1xuICAgIC8vIFRPRE86IEZpeCB0aGlzIGZvciB3aGVuIG9uZSBvZiBgbm9kZXNgIGlzIGEgRG9jdW1lbnRGcmFnbWVudCFcbiAgICBjb25zdCBjb25uZWN0ZWRCZWZvcmUgPSAvKiogQHR5cGUgeyFBcnJheTwhTm9kZT59ICovIChub2Rlcy5maWx0ZXIobm9kZSA9PiB7XG4gICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBhcmUgbm90IGNvbm5lY3RlZCBhbmQgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgIH0pKTtcblxuICAgIGJ1aWx0SW4uYXBwZW5kLmFwcGx5KHRoaXMsIG5vZGVzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ubmVjdGVkQmVmb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUoY29ubmVjdGVkQmVmb3JlW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCBOYXRpdmUgZnJvbSAnLi9OYXRpdmUuanMnO1xuaW1wb3J0IEN1c3RvbUVsZW1lbnRJbnRlcm5hbHMgZnJvbSAnLi4vQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyc7XG5pbXBvcnQgKiBhcyBVdGlsaXRpZXMgZnJvbSAnLi4vVXRpbGl0aWVzLmpzJztcblxuaW1wb3J0IFBhdGNoUGFyZW50Tm9kZSBmcm9tICcuL0ludGVyZmFjZS9QYXJlbnROb2RlLmpzJztcblxuLyoqXG4gKiBAcGFyYW0geyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJuYWxzKSB7XG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChEb2N1bWVudC5wcm90b3R5cGUsICdjcmVhdGVFbGVtZW50JyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7RG9jdW1lbnR9XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZVxuICAgICAqIEByZXR1cm4geyFFbGVtZW50fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKGxvY2FsTmFtZSkge1xuICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZG9jdW1lbnQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSByZWdpc3RyeS5cbiAgICAgIGlmICh0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGludGVybmFscy5sb2NhbE5hbWVUb0RlZmluaXRpb24obG9jYWxOYW1lKTtcbiAgICAgICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IChkZWZpbml0aW9uLmNvbnN0cnVjdG9yKSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovXG4gICAgICAgIChOYXRpdmUuRG9jdW1lbnRfY3JlYXRlRWxlbWVudC5jYWxsKHRoaXMsIGxvY2FsTmFtZSkpO1xuICAgICAgaW50ZXJuYWxzLnBhdGNoKHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChEb2N1bWVudC5wcm90b3R5cGUsICdpbXBvcnROb2RlJyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7RG9jdW1lbnR9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGRlZXBcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihub2RlLCBkZWVwKSB7XG4gICAgICBjb25zdCBjbG9uZSA9IE5hdGl2ZS5Eb2N1bWVudF9pbXBvcnROb2RlLmNhbGwodGhpcywgbm9kZSwgZGVlcCk7XG4gICAgICAvLyBPbmx5IGNyZWF0ZSBjdXN0b20gZWxlbWVudHMgaWYgdGhpcyBkb2N1bWVudCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdHJ5LlxuICAgICAgaWYgKCF0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpIHtcbiAgICAgICAgaW50ZXJuYWxzLnBhdGNoVHJlZShjbG9uZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnRlcm5hbHMucGF0Y2hBbmRVcGdyYWRlVHJlZShjbG9uZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xvbmU7XG4gICAgfSk7XG5cbiAgY29uc3QgTlNfSFRNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChEb2N1bWVudC5wcm90b3R5cGUsICdjcmVhdGVFbGVtZW50TlMnLFxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtEb2N1bWVudH1cbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IG5hbWVzcGFjZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWVcbiAgICAgKiBAcmV0dXJuIHshRWxlbWVudH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihuYW1lc3BhY2UsIGxvY2FsTmFtZSkge1xuICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZG9jdW1lbnQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSByZWdpc3RyeS5cbiAgICAgIGlmICh0aGlzLl9fQ0VfaGFzUmVnaXN0cnkgJiYgKG5hbWVzcGFjZSA9PT0gbnVsbCB8fCBuYW1lc3BhY2UgPT09IE5TX0hUTUwpKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbnRlcm5hbHMubG9jYWxOYW1lVG9EZWZpbml0aW9uKGxvY2FsTmFtZSk7XG4gICAgICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyAoZGVmaW5pdGlvbi5jb25zdHJ1Y3RvcikoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICAoTmF0aXZlLkRvY3VtZW50X2NyZWF0ZUVsZW1lbnROUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbG9jYWxOYW1lKSk7XG4gICAgICBpbnRlcm5hbHMucGF0Y2gocmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgUGF0Y2hQYXJlbnROb2RlKGludGVybmFscywgRG9jdW1lbnQucHJvdG90eXBlLCB7XG4gICAgcHJlcGVuZDogTmF0aXZlLkRvY3VtZW50X3ByZXBlbmQsXG4gICAgYXBwZW5kOiBOYXRpdmUuRG9jdW1lbnRfYXBwZW5kLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgTmF0aXZlIGZyb20gJy4vTmF0aXZlLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4uL0N1c3RvbUVsZW1lbnRJbnRlcm5hbHMuanMnO1xuaW1wb3J0ICogYXMgVXRpbGl0aWVzIGZyb20gJy4uL1V0aWxpdGllcy5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscykge1xuICAvLyBgTm9kZSNub2RlVmFsdWVgIGlzIGltcGxlbWVudGVkIG9uIGBBdHRyYC5cbiAgLy8gYE5vZGUjdGV4dENvbnRlbnRgIGlzIGltcGxlbWVudGVkIG9uIGBBdHRyYCwgYEVsZW1lbnRgLlxuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChOb2RlLnByb3RvdHlwZSwgJ2luc2VydEJlZm9yZScsXG4gICAgLyoqXG4gICAgICogQHRoaXMge05vZGV9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7P05vZGV9IHJlZk5vZGVcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihub2RlLCByZWZOb2RlKSB7XG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlLmNoaWxkTm9kZXMpO1xuICAgICAgICBjb25zdCBuYXRpdmVSZXN1bHQgPSBOYXRpdmUuTm9kZV9pbnNlcnRCZWZvcmUuY2FsbCh0aGlzLCBub2RlLCByZWZOb2RlKTtcblxuICAgICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBjYW4ndCBiZSBjb25uZWN0ZWQsIHNvIGBkaXNjb25uZWN0VHJlZWAgd2lsbCBuZXZlclxuICAgICAgICAvLyBuZWVkIHRvIGJlIGNhbGxlZCBvbiBhIERvY3VtZW50RnJhZ21lbnQncyBjaGlsZHJlbiBhZnRlciBpbnNlcnRpbmcgaXQuXG5cbiAgICAgICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKGluc2VydGVkTm9kZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYXRpdmVSZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vZGVXYXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQobm9kZSk7XG4gICAgICBjb25zdCBuYXRpdmVSZXN1bHQgPSBOYXRpdmUuTm9kZV9pbnNlcnRCZWZvcmUuY2FsbCh0aGlzLCBub2RlLCByZWZOb2RlKTtcblxuICAgICAgaWYgKG5vZGVXYXNDb25uZWN0ZWQpIHtcbiAgICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5hdGl2ZVJlc3VsdDtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoTm9kZS5wcm90b3R5cGUsICdhcHBlbmRDaGlsZCcsXG4gICAgLyoqXG4gICAgICogQHRoaXMge05vZGV9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEByZXR1cm4geyFOb2RlfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBjb25zdCBpbnNlcnRlZE5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KG5vZGUuY2hpbGROb2Rlcyk7XG4gICAgICAgIGNvbnN0IG5hdGl2ZVJlc3VsdCA9IE5hdGl2ZS5Ob2RlX2FwcGVuZENoaWxkLmNhbGwodGhpcywgbm9kZSk7XG5cbiAgICAgICAgLy8gRG9jdW1lbnRGcmFnbWVudHMgY2FuJ3QgYmUgY29ubmVjdGVkLCBzbyBgZGlzY29ubmVjdFRyZWVgIHdpbGwgbmV2ZXJcbiAgICAgICAgLy8gbmVlZCB0byBiZSBjYWxsZWQgb24gYSBEb2N1bWVudEZyYWdtZW50J3MgY2hpbGRyZW4gYWZ0ZXIgaW5zZXJ0aW5nIGl0LlxuXG4gICAgICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShpbnNlcnRlZE5vZGVzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmF0aXZlUmVzdWx0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub2RlV2FzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgICAgY29uc3QgbmF0aXZlUmVzdWx0ID0gTmF0aXZlLk5vZGVfYXBwZW5kQ2hpbGQuY2FsbCh0aGlzLCBub2RlKTtcblxuICAgICAgaWYgKG5vZGVXYXNDb25uZWN0ZWQpIHtcbiAgICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5hdGl2ZVJlc3VsdDtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoTm9kZS5wcm90b3R5cGUsICdjbG9uZU5vZGUnLFxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtOb2RlfVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGRlZXBcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihkZWVwKSB7XG4gICAgICBjb25zdCBjbG9uZSA9IE5hdGl2ZS5Ob2RlX2Nsb25lTm9kZS5jYWxsKHRoaXMsIGRlZXApO1xuICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZWxlbWVudCdzIG93bmVyIGRvY3VtZW50IGlzXG4gICAgICAvLyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdHJ5LlxuICAgICAgaWYgKCF0aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeSkge1xuICAgICAgICBpbnRlcm5hbHMucGF0Y2hUcmVlKGNsb25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludGVybmFscy5wYXRjaEFuZFVwZ3JhZGVUcmVlKGNsb25lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoTm9kZS5wcm90b3R5cGUsICdyZW1vdmVDaGlsZCcsXG4gICAgLyoqXG4gICAgICogQHRoaXMge05vZGV9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEByZXR1cm4geyFOb2RlfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGNvbnN0IG5vZGVXYXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQobm9kZSk7XG4gICAgICBjb25zdCBuYXRpdmVSZXN1bHQgPSBOYXRpdmUuTm9kZV9yZW1vdmVDaGlsZC5jYWxsKHRoaXMsIG5vZGUpO1xuXG4gICAgICBpZiAobm9kZVdhc0Nvbm5lY3RlZCkge1xuICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuYXRpdmVSZXN1bHQ7XG4gICAgfSk7XG5cbiAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKE5vZGUucHJvdG90eXBlLCAncmVwbGFjZUNoaWxkJyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7Tm9kZX1cbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlVG9JbnNlcnRcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlVG9SZW1vdmVcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihub2RlVG9JbnNlcnQsIG5vZGVUb1JlbW92ZSkge1xuICAgICAgaWYgKG5vZGVUb0luc2VydCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlVG9JbnNlcnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIGNvbnN0IG5hdGl2ZVJlc3VsdCA9IE5hdGl2ZS5Ob2RlX3JlcGxhY2VDaGlsZC5jYWxsKHRoaXMsIG5vZGVUb0luc2VydCwgbm9kZVRvUmVtb3ZlKTtcblxuICAgICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBjYW4ndCBiZSBjb25uZWN0ZWQsIHNvIGBkaXNjb25uZWN0VHJlZWAgd2lsbCBuZXZlclxuICAgICAgICAvLyBuZWVkIHRvIGJlIGNhbGxlZCBvbiBhIERvY3VtZW50RnJhZ21lbnQncyBjaGlsZHJlbiBhZnRlciBpbnNlcnRpbmcgaXQuXG5cbiAgICAgICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKSkge1xuICAgICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShub2RlVG9SZW1vdmUpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKGluc2VydGVkTm9kZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYXRpdmVSZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vZGVUb0luc2VydFdhc0Nvbm5lY3RlZCA9IFV0aWxpdGllcy5pc0Nvbm5lY3RlZChub2RlVG9JbnNlcnQpO1xuICAgICAgY29uc3QgbmF0aXZlUmVzdWx0ID0gTmF0aXZlLk5vZGVfcmVwbGFjZUNoaWxkLmNhbGwodGhpcywgbm9kZVRvSW5zZXJ0LCBub2RlVG9SZW1vdmUpO1xuICAgICAgY29uc3QgdGhpc0lzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpO1xuXG4gICAgICBpZiAodGhpc0lzQ29ubmVjdGVkKSB7XG4gICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShub2RlVG9SZW1vdmUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZVRvSW5zZXJ0V2FzQ29ubmVjdGVkKSB7XG4gICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShub2RlVG9JbnNlcnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpc0lzQ29ubmVjdGVkKSB7XG4gICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlVG9JbnNlcnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmF0aXZlUmVzdWx0O1xuICAgIH0pO1xuXG5cbiAgZnVuY3Rpb24gcGF0Y2hfdGV4dENvbnRlbnQoZGVzdGluYXRpb24sIGJhc2VEZXNjcmlwdG9yKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3RpbmF0aW9uLCAndGV4dENvbnRlbnQnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBiYXNlRGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBiYXNlRGVzY3JpcHRvci5nZXQsXG4gICAgICBzZXQ6IC8qKiBAdGhpcyB7Tm9kZX0gKi8gZnVuY3Rpb24oYXNzaWduZWRWYWx1ZSkge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgdGV4dCBub2RlIHRoZW4gdGhlcmUgYXJlIG5vIG5vZGVzIHRvIGRpc2Nvbm5lY3QuXG4gICAgICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIGJhc2VEZXNjcmlwdG9yLnNldC5jYWxsKHRoaXMsIGFzc2lnbmVkVmFsdWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZW1vdmVkTm9kZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIENoZWNraW5nIGZvciBgZmlyc3RDaGlsZGAgaXMgZmFzdGVyIHRoYW4gcmVhZGluZyBgY2hpbGROb2Rlcy5sZW5ndGhgXG4gICAgICAgIC8vIHRvIGNvbXBhcmUgd2l0aCAwLlxuICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgLy8gVXNpbmcgYGNoaWxkTm9kZXNgIGlzIGZhc3RlciB0aGFuIGBjaGlsZHJlbmAsIGV2ZW4gdGhvdWdoIHdlIG9ubHlcbiAgICAgICAgICAvLyBjYXJlIGFib3V0IGVsZW1lbnRzLlxuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXM7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID4gMCAmJiBVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgICAgICAgIC8vIENvcHlpbmcgYW4gYXJyYXkgYnkgaXRlcmF0aW5nIGlzIGZhc3RlciB0aGFuIHVzaW5nIHNsaWNlLlxuICAgICAgICAgICAgcmVtb3ZlZE5vZGVzID0gbmV3IEFycmF5KGNoaWxkTm9kZXNMZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgcmVtb3ZlZE5vZGVzW2ldID0gY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBiYXNlRGVzY3JpcHRvci5zZXQuY2FsbCh0aGlzLCBhc3NpZ25lZFZhbHVlKTtcblxuICAgICAgICBpZiAocmVtb3ZlZE5vZGVzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShyZW1vdmVkTm9kZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChOYXRpdmUuTm9kZV90ZXh0Q29udGVudCAmJiBOYXRpdmUuTm9kZV90ZXh0Q29udGVudC5nZXQpIHtcbiAgICBwYXRjaF90ZXh0Q29udGVudChOb2RlLnByb3RvdHlwZSwgTmF0aXZlLk5vZGVfdGV4dENvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGludGVybmFscy5hZGRQYXRjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBwYXRjaF90ZXh0Q29udGVudChlbGVtZW50LCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgLy8gTk9URTogVGhpcyBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgYHRleHRDb250ZW50YCBnZXR0ZXIgYXNzdW1lcyB0aGF0XG4gICAgICAgIC8vIHRleHQgbm9kZXMnIGB0ZXh0Q29udGVudGAgZ2V0dGVyIHdpbGwgbm90IGJlIHBhdGNoZWQuXG4gICAgICAgIGdldDogLyoqIEB0aGlzIHtOb2RlfSAqLyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvKiogQHR5cGUgeyFBcnJheTxzdHJpbmc+fSAqL1xuICAgICAgICAgIGNvbnN0IHBhcnRzID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFydHMucHVzaCh0aGlzLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0cy5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiAvKiogQHRoaXMge05vZGV9ICovIGZ1bmN0aW9uKGFzc2lnbmVkVmFsdWUpIHtcbiAgICAgICAgICB3aGlsZSAodGhpcy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBOYXRpdmUuTm9kZV9yZW1vdmVDaGlsZC5jYWxsKHRoaXMsIHRoaXMuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIE5hdGl2ZS5Ob2RlX2FwcGVuZENoaWxkLmNhbGwodGhpcywgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXNzaWduZWRWYWx1ZSkpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgQ3VzdG9tRWxlbWVudEludGVybmFscyBmcm9tICcuLi8uLi9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzJztcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICcuLi8uLi9VdGlsaXRpZXMuanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGJlZm9yZTogIWZ1bmN0aW9uKC4uLighTm9kZXxzdHJpbmcpKSxcbiAqICAgYWZ0ZXI6ICFmdW5jdGlvbiguLi4oIU5vZGV8c3RyaW5nKSksXG4gKiAgIHJlcGxhY2VXaXRoOiAhZnVuY3Rpb24oLi4uKCFOb2RlfHN0cmluZykpLFxuICogICByZW1vdmU6ICFmdW5jdGlvbigpLFxuICogfX1cbiAqL1xubGV0IENoaWxkTm9kZU5hdGl2ZU1ldGhvZHM7XG5cbi8qKlxuICogQHBhcmFtIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzXG4gKiBAcGFyYW0geyFPYmplY3R9IGRlc3RpbmF0aW9uXG4gKiBAcGFyYW0geyFDaGlsZE5vZGVOYXRpdmVNZXRob2RzfSBidWlsdEluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscywgZGVzdGluYXRpb24sIGJ1aWx0SW4pIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uKCFOb2RlfHN0cmluZyl9IG5vZGVzXG4gICAqL1xuICBkZXN0aW5hdGlvblsnYmVmb3JlJ10gPSBmdW5jdGlvbiguLi5ub2Rlcykge1xuICAgIC8vIFRPRE86IEZpeCB0aGlzIGZvciB3aGVuIG9uZSBvZiBgbm9kZXNgIGlzIGEgRG9jdW1lbnRGcmFnbWVudCFcbiAgICBjb25zdCBjb25uZWN0ZWRCZWZvcmUgPSAvKiogQHR5cGUgeyFBcnJheTwhTm9kZT59ICovIChub2Rlcy5maWx0ZXIobm9kZSA9PiB7XG4gICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBhcmUgbm90IGNvbm5lY3RlZCBhbmQgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgIH0pKTtcblxuICAgIGJ1aWx0SW4uYmVmb3JlLmFwcGx5KHRoaXMsIG5vZGVzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ubmVjdGVkQmVmb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUoY29ubmVjdGVkQmVmb3JlW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gey4uLighTm9kZXxzdHJpbmcpfSBub2Rlc1xuICAgKi9cbiAgZGVzdGluYXRpb25bJ2FmdGVyJ10gPSBmdW5jdGlvbiguLi5ub2Rlcykge1xuICAgIC8vIFRPRE86IEZpeCB0aGlzIGZvciB3aGVuIG9uZSBvZiBgbm9kZXNgIGlzIGEgRG9jdW1lbnRGcmFnbWVudCFcbiAgICBjb25zdCBjb25uZWN0ZWRCZWZvcmUgPSAvKiogQHR5cGUgeyFBcnJheTwhTm9kZT59ICovIChub2Rlcy5maWx0ZXIobm9kZSA9PiB7XG4gICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBhcmUgbm90IGNvbm5lY3RlZCBhbmQgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgIH0pKTtcblxuICAgIGJ1aWx0SW4uYWZ0ZXIuYXBwbHkodGhpcywgbm9kZXMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25uZWN0ZWRCZWZvcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShjb25uZWN0ZWRCZWZvcmVbaV0pO1xuICAgIH1cblxuICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uKCFOb2RlfHN0cmluZyl9IG5vZGVzXG4gICAqL1xuICBkZXN0aW5hdGlvblsncmVwbGFjZVdpdGgnXSA9IGZ1bmN0aW9uKC4uLm5vZGVzKSB7XG4gICAgLy8gVE9ETzogRml4IHRoaXMgZm9yIHdoZW4gb25lIG9mIGBub2Rlc2AgaXMgYSBEb2N1bWVudEZyYWdtZW50IVxuICAgIGNvbnN0IGNvbm5lY3RlZEJlZm9yZSA9IC8qKiBAdHlwZSB7IUFycmF5PCFOb2RlPn0gKi8gKG5vZGVzLmZpbHRlcihub2RlID0+IHtcbiAgICAgIC8vIERvY3VtZW50RnJhZ21lbnRzIGFyZSBub3QgY29ubmVjdGVkIGFuZCB3aWxsIG5vdCBiZSBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgTm9kZSAmJiBVdGlsaXRpZXMuaXNDb25uZWN0ZWQobm9kZSk7XG4gICAgfSkpO1xuXG4gICAgY29uc3Qgd2FzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpO1xuXG4gICAgYnVpbHRJbi5yZXBsYWNlV2l0aC5hcHBseSh0aGlzLCBub2Rlcyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbm5lY3RlZEJlZm9yZS5sZW5ndGg7IGkrKykge1xuICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKGNvbm5lY3RlZEJlZm9yZVtpXSk7XG4gICAgfVxuXG4gICAgaWYgKHdhc0Nvbm5lY3RlZCkge1xuICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKHRoaXMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkZXN0aW5hdGlvblsncmVtb3ZlJ10gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB3YXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcyk7XG5cbiAgICBidWlsdEluLnJlbW92ZS5jYWxsKHRoaXMpO1xuXG4gICAgaWYgKHdhc0Nvbm5lY3RlZCkge1xuICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKHRoaXMpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgTmF0aXZlIGZyb20gJy4vTmF0aXZlLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4uL0N1c3RvbUVsZW1lbnRJbnRlcm5hbHMuanMnO1xuaW1wb3J0IENFU3RhdGUgZnJvbSAnLi4vQ3VzdG9tRWxlbWVudFN0YXRlLmpzJztcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICcuLi9VdGlsaXRpZXMuanMnO1xuXG5pbXBvcnQgUGF0Y2hQYXJlbnROb2RlIGZyb20gJy4vSW50ZXJmYWNlL1BhcmVudE5vZGUuanMnO1xuaW1wb3J0IFBhdGNoQ2hpbGROb2RlIGZyb20gJy4vSW50ZXJmYWNlL0NoaWxkTm9kZS5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscykge1xuICBpZiAoTmF0aXZlLkVsZW1lbnRfYXR0YWNoU2hhZG93KSB7XG4gICAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKEVsZW1lbnQucHJvdG90eXBlLCAnYXR0YWNoU2hhZG93JyxcbiAgICAgIC8qKlxuICAgICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICAgKiBAcGFyYW0geyF7bW9kZTogc3RyaW5nfX0gaW5pdFxuICAgICAgICogQHJldHVybiB7U2hhZG93Um9vdH1cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24oaW5pdCkge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gTmF0aXZlLkVsZW1lbnRfYXR0YWNoU2hhZG93LmNhbGwodGhpcywgaW5pdCk7XG4gICAgICAgIHRoaXMuX19DRV9zaGFkb3dSb290ID0gc2hhZG93Um9vdDtcbiAgICAgICAgcmV0dXJuIHNoYWRvd1Jvb3Q7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oJ0N1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjYXR0YWNoU2hhZG93YCB3YXMgbm90IHBhdGNoZWQuJyk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHBhdGNoX2lubmVySFRNTChkZXN0aW5hdGlvbiwgYmFzZURlc2NyaXB0b3IpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdGluYXRpb24sICdpbm5lckhUTUwnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBiYXNlRGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBiYXNlRGVzY3JpcHRvci5nZXQsXG4gICAgICBzZXQ6IC8qKiBAdGhpcyB7RWxlbWVudH0gKi8gZnVuY3Rpb24oaHRtbFN0cmluZykge1xuICAgICAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKTtcblxuICAgICAgICAvLyBOT1RFOiBJbiBJRTExLCB3aGVuIHVzaW5nIHRoZSBuYXRpdmUgYGlubmVySFRNTGAgc2V0dGVyLCBhbGwgbm9kZXNcbiAgICAgICAgLy8gdGhhdCB3ZXJlIHByZXZpb3VzbHkgZGVzY2VuZGFudHMgb2YgdGhlIGNvbnRleHQgZWxlbWVudCBoYXZlIGFsbCBvZlxuICAgICAgICAvLyB0aGVpciBjaGlsZHJlbiByZW1vdmVkIGFzIHBhcnQgb2YgdGhlIHNldCAtIHRoZSBlbnRpcmUgc3VidHJlZSBpc1xuICAgICAgICAvLyAnZGlzYXNzZW1ibGVkJy4gVGhpcyB3b3JrIGFyb3VuZCB3YWxrcyB0aGUgc3VidHJlZSAqYmVmb3JlKiB1c2luZyB0aGVcbiAgICAgICAgLy8gbmF0aXZlIHNldHRlci5cbiAgICAgICAgLyoqIEB0eXBlIHshQXJyYXk8IUVsZW1lbnQ+fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgbGV0IHJlbW92ZWRFbGVtZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgcmVtb3ZlZEVsZW1lbnRzID0gW107XG4gICAgICAgICAgVXRpbGl0aWVzLndhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKHRoaXMsIGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlZEVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBiYXNlRGVzY3JpcHRvci5zZXQuY2FsbCh0aGlzLCBodG1sU3RyaW5nKTtcblxuICAgICAgICBpZiAocmVtb3ZlZEVsZW1lbnRzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZW1vdmVkRWxlbWVudHNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5fX0NFX3N0YXRlID09PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZWxlbWVudCdzIG93bmVyIGRvY3VtZW50IGlzXG4gICAgICAgIC8vIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0cnkuXG4gICAgICAgIGlmICghdGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnkpIHtcbiAgICAgICAgICBpbnRlcm5hbHMucGF0Y2hUcmVlKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGludGVybmFscy5wYXRjaEFuZFVwZ3JhZGVUcmVlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sU3RyaW5nO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChOYXRpdmUuRWxlbWVudF9pbm5lckhUTUwgJiYgTmF0aXZlLkVsZW1lbnRfaW5uZXJIVE1MLmdldCkge1xuICAgIHBhdGNoX2lubmVySFRNTChFbGVtZW50LnByb3RvdHlwZSwgTmF0aXZlLkVsZW1lbnRfaW5uZXJIVE1MKTtcbiAgfSBlbHNlIGlmIChOYXRpdmUuSFRNTEVsZW1lbnRfaW5uZXJIVE1MICYmIE5hdGl2ZS5IVE1MRWxlbWVudF9pbm5lckhUTUwuZ2V0KSB7XG4gICAgcGF0Y2hfaW5uZXJIVE1MKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgTmF0aXZlLkhUTUxFbGVtZW50X2lubmVySFRNTCk7XG4gIH0gZWxzZSB7XG5cbiAgICAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqL1xuICAgIGNvbnN0IHJhd0RpdiA9IE5hdGl2ZS5Eb2N1bWVudF9jcmVhdGVFbGVtZW50LmNhbGwoZG9jdW1lbnQsICdkaXYnKTtcblxuICAgIGludGVybmFscy5hZGRQYXRjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBwYXRjaF9pbm5lckhUTUwoZWxlbWVudCwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIC8vIEltcGxlbWVudHMgZ2V0dGluZyBgaW5uZXJIVE1MYCBieSBwZXJmb3JtaW5nIGFuIHVucGF0Y2hlZCBgY2xvbmVOb2RlYFxuICAgICAgICAvLyBvZiB0aGUgZWxlbWVudCBhbmQgcmV0dXJuaW5nIHRoZSByZXN1bHRpbmcgZWxlbWVudCdzIGBpbm5lckhUTUxgLlxuICAgICAgICAvLyBUT0RPOiBJcyB0aGlzIHRvbyBleHBlbnNpdmU/XG4gICAgICAgIGdldDogLyoqIEB0aGlzIHtFbGVtZW50fSAqLyBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gTmF0aXZlLk5vZGVfY2xvbmVOb2RlLmNhbGwodGhpcywgdHJ1ZSkuaW5uZXJIVE1MO1xuICAgICAgICB9LFxuICAgICAgICAvLyBJbXBsZW1lbnRzIHNldHRpbmcgYGlubmVySFRNTGAgYnkgY3JlYXRpbmcgYW4gdW5wYXRjaGVkIGVsZW1lbnQsXG4gICAgICAgIC8vIHNldHRpbmcgYGlubmVySFRNTGAgb2YgdGhhdCBlbGVtZW50IGFuZCByZXBsYWNpbmcgdGhlIHRhcmdldFxuICAgICAgICAvLyBlbGVtZW50J3MgY2hpbGRyZW4gd2l0aCB0aG9zZSBvZiB0aGUgdW5wYXRjaGVkIGVsZW1lbnQuXG4gICAgICAgIHNldDogLyoqIEB0aGlzIHtFbGVtZW50fSAqLyBmdW5jdGlvbihhc3NpZ25lZFZhbHVlKSB7XG4gICAgICAgICAgLy8gTk9URTogcmUtcm91dGUgdG8gYGNvbnRlbnRgIGZvciBgdGVtcGxhdGVgIGVsZW1lbnRzLlxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gZG8gdGhpcyBiZWNhdXNlIGB0ZW1wbGF0ZS5hcHBlbmRDaGlsZGAgZG9lcyBub3RcbiAgICAgICAgICAvLyByb3V0ZSBpbnRvIGB0ZW1wbGF0ZS5jb250ZW50YC5cbiAgICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmxvY2FsTmFtZSA9PT0gJ3RlbXBsYXRlJyA/ICgvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyAodGhpcykpLmNvbnRlbnQgOiB0aGlzO1xuICAgICAgICAgIHJhd0Rpdi5pbm5lckhUTUwgPSBhc3NpZ25lZFZhbHVlO1xuXG4gICAgICAgICAgd2hpbGUgKGNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBOYXRpdmUuTm9kZV9yZW1vdmVDaGlsZC5jYWxsKGNvbnRlbnQsIGNvbnRlbnQuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlIChyYXdEaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBOYXRpdmUuTm9kZV9hcHBlbmRDaGlsZC5jYWxsKGNvbnRlbnQsIHJhd0Rpdi5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKEVsZW1lbnQucHJvdG90eXBlLCAnc2V0QXR0cmlidXRlJyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7RWxlbWVudH1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgICAvLyBGYXN0IHBhdGggZm9yIG5vbi1jdXN0b20gZWxlbWVudHMuXG4gICAgICBpZiAodGhpcy5fX0NFX3N0YXRlICE9PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICByZXR1cm4gTmF0aXZlLkVsZW1lbnRfc2V0QXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IE5hdGl2ZS5FbGVtZW50X2dldEF0dHJpYnV0ZS5jYWxsKHRoaXMsIG5hbWUpO1xuICAgICAgTmF0aXZlLkVsZW1lbnRfc2V0QXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgbmV3VmFsdWUgPSBOYXRpdmUuRWxlbWVudF9nZXRBdHRyaWJ1dGUuY2FsbCh0aGlzLCBuYW1lKTtcbiAgICAgIGludGVybmFscy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcywgbmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBudWxsKTtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoRWxlbWVudC5wcm90b3R5cGUsICdzZXRBdHRyaWJ1dGVOUycsXG4gICAgLyoqXG4gICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSBuYW1lc3BhY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5hbWVzcGFjZSwgbmFtZSwgbmV3VmFsdWUpIHtcbiAgICAgIC8vIEZhc3QgcGF0aCBmb3Igbm9uLWN1c3RvbSBlbGVtZW50cy5cbiAgICAgIGlmICh0aGlzLl9fQ0Vfc3RhdGUgIT09IENFU3RhdGUuY3VzdG9tKSB7XG4gICAgICAgIHJldHVybiBOYXRpdmUuRWxlbWVudF9zZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IE5hdGl2ZS5FbGVtZW50X2dldEF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lKTtcbiAgICAgIE5hdGl2ZS5FbGVtZW50X3NldEF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lLCBuZXdWYWx1ZSk7XG4gICAgICBuZXdWYWx1ZSA9IE5hdGl2ZS5FbGVtZW50X2dldEF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lKTtcbiAgICAgIGludGVybmFscy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcywgbmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBuYW1lc3BhY2UpO1xuICAgIH0pO1xuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChFbGVtZW50LnByb3RvdHlwZSwgJ3JlbW92ZUF0dHJpYnV0ZScsXG4gICAgLyoqXG4gICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAvLyBGYXN0IHBhdGggZm9yIG5vbi1jdXN0b20gZWxlbWVudHMuXG4gICAgICBpZiAodGhpcy5fX0NFX3N0YXRlICE9PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICByZXR1cm4gTmF0aXZlLkVsZW1lbnRfcmVtb3ZlQXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gTmF0aXZlLkVsZW1lbnRfZ2V0QXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSk7XG4gICAgICBOYXRpdmUuRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGUuY2FsbCh0aGlzLCBuYW1lKTtcbiAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBpbnRlcm5hbHMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsIG5hbWUsIG9sZFZhbHVlLCBudWxsLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoRWxlbWVudC5wcm90b3R5cGUsICdyZW1vdmVBdHRyaWJ1dGVOUycsXG4gICAgLyoqXG4gICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSBuYW1lc3BhY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5hbWVzcGFjZSwgbmFtZSkge1xuICAgICAgLy8gRmFzdCBwYXRoIGZvciBub24tY3VzdG9tIGVsZW1lbnRzLlxuICAgICAgaWYgKHRoaXMuX19DRV9zdGF0ZSAhPT0gQ0VTdGF0ZS5jdXN0b20pIHtcbiAgICAgICAgcmV0dXJuIE5hdGl2ZS5FbGVtZW50X3JlbW92ZUF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSBOYXRpdmUuRWxlbWVudF9nZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgICBOYXRpdmUuRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgICAvLyBJbiBvbGRlciBicm93c2VycywgYEVsZW1lbnQjZ2V0QXR0cmlidXRlTlNgIG1heSByZXR1cm4gdGhlIGVtcHR5IHN0cmluZ1xuICAgICAgLy8gaW5zdGVhZCBvZiBudWxsIGlmIHRoZSBhdHRyaWJ1dGUgZG9lcyBub3QgZXhpc3QuIEZvciBkZXRhaWxzLCBzZWU7XG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9nZXRBdHRyaWJ1dGVOUyNOb3Rlc1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBOYXRpdmUuRWxlbWVudF9nZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIGludGVybmFscy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcywgbmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBuYW1lc3BhY2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgZnVuY3Rpb24gcGF0Y2hfaW5zZXJ0QWRqYWNlbnRFbGVtZW50KGRlc3RpbmF0aW9uLCBiYXNlTWV0aG9kKSB7XG4gICAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKGRlc3RpbmF0aW9uLCAnaW5zZXJ0QWRqYWNlbnRFbGVtZW50JyxcbiAgICAgIC8qKlxuICAgICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2hlcmVcbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICAgICAqIEByZXR1cm4gez9FbGVtZW50fVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbih3aGVyZSwgZWxlbWVudCkge1xuICAgICAgICBjb25zdCB3YXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGluc2VydGVkRWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovXG4gICAgICAgICAgKGJhc2VNZXRob2QuY2FsbCh0aGlzLCB3aGVyZSwgZWxlbWVudCkpO1xuXG4gICAgICAgIGlmICh3YXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKGluc2VydGVkRWxlbWVudCkpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc2VydGVkRWxlbWVudDtcbiAgICAgIH0pO1xuICB9XG5cbiAgaWYgKE5hdGl2ZS5IVE1MRWxlbWVudF9pbnNlcnRBZGphY2VudEVsZW1lbnQpIHtcbiAgICBwYXRjaF9pbnNlcnRBZGphY2VudEVsZW1lbnQoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBOYXRpdmUuSFRNTEVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50KTtcbiAgfSBlbHNlIGlmIChOYXRpdmUuRWxlbWVudF9pbnNlcnRBZGphY2VudEVsZW1lbnQpIHtcbiAgICBwYXRjaF9pbnNlcnRBZGphY2VudEVsZW1lbnQoRWxlbWVudC5wcm90b3R5cGUsIE5hdGl2ZS5FbGVtZW50X2luc2VydEFkamFjZW50RWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKCdDdXN0b20gRWxlbWVudHM6IGBFbGVtZW50I2luc2VydEFkamFjZW50RWxlbWVudGAgd2FzIG5vdCBwYXRjaGVkLicpO1xuICB9XG5cblxuICBQYXRjaFBhcmVudE5vZGUoaW50ZXJuYWxzLCBFbGVtZW50LnByb3RvdHlwZSwge1xuICAgIHByZXBlbmQ6IE5hdGl2ZS5FbGVtZW50X3ByZXBlbmQsXG4gICAgYXBwZW5kOiBOYXRpdmUuRWxlbWVudF9hcHBlbmQsXG4gIH0pO1xuXG4gIFBhdGNoQ2hpbGROb2RlKGludGVybmFscywgRWxlbWVudC5wcm90b3R5cGUsIHtcbiAgICBiZWZvcmU6IE5hdGl2ZS5FbGVtZW50X2JlZm9yZSxcbiAgICBhZnRlcjogTmF0aXZlLkVsZW1lbnRfYWZ0ZXIsXG4gICAgcmVwbGFjZVdpdGg6IE5hdGl2ZS5FbGVtZW50X3JlcGxhY2VXaXRoLFxuICAgIHJlbW92ZTogTmF0aXZlLkVsZW1lbnRfcmVtb3ZlLFxuICB9KTtcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IEN1c3RvbUVsZW1lbnRJbnRlcm5hbHMgZnJvbSAnLi9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50UmVnaXN0cnkgZnJvbSAnLi9DdXN0b21FbGVtZW50UmVnaXN0cnkuanMnO1xuXG5pbXBvcnQgUGF0Y2hIVE1MRWxlbWVudCBmcm9tICcuL1BhdGNoL0hUTUxFbGVtZW50LmpzJztcbmltcG9ydCBQYXRjaERvY3VtZW50IGZyb20gJy4vUGF0Y2gvRG9jdW1lbnQuanMnO1xuaW1wb3J0IFBhdGNoTm9kZSBmcm9tICcuL1BhdGNoL05vZGUuanMnO1xuaW1wb3J0IFBhdGNoRWxlbWVudCBmcm9tICcuL1BhdGNoL0VsZW1lbnQuanMnO1xuXG5jb25zdCBwcmlvckN1c3RvbUVsZW1lbnRzID0gd2luZG93WydjdXN0b21FbGVtZW50cyddO1xuXG5pZiAoIXByaW9yQ3VzdG9tRWxlbWVudHMgfHxcbiAgICAgcHJpb3JDdXN0b21FbGVtZW50c1snZm9yY2VQb2x5ZmlsbCddIHx8XG4gICAgICh0eXBlb2YgcHJpb3JDdXN0b21FbGVtZW50c1snZGVmaW5lJ10gIT0gJ2Z1bmN0aW9uJykgfHxcbiAgICAgKHR5cGVvZiBwcmlvckN1c3RvbUVsZW1lbnRzWydnZXQnXSAhPSAnZnVuY3Rpb24nKSkge1xuICAvKiogQHR5cGUgeyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSAqL1xuICBjb25zdCBpbnRlcm5hbHMgPSBuZXcgQ3VzdG9tRWxlbWVudEludGVybmFscygpO1xuXG4gIFBhdGNoSFRNTEVsZW1lbnQoaW50ZXJuYWxzKTtcbiAgUGF0Y2hEb2N1bWVudChpbnRlcm5hbHMpO1xuICBQYXRjaE5vZGUoaW50ZXJuYWxzKTtcbiAgUGF0Y2hFbGVtZW50KGludGVybmFscyk7XG5cbiAgLy8gVGhlIG1haW4gZG9jdW1lbnQgaXMgYWx3YXlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0cnkuXG4gIGRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnkgPSB0cnVlO1xuXG4gIC8qKiBAdHlwZSB7IUN1c3RvbUVsZW1lbnRSZWdpc3RyeX0gKi9cbiAgY29uc3QgY3VzdG9tRWxlbWVudHMgPSBuZXcgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5KGludGVybmFscyk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ2N1c3RvbUVsZW1lbnRzJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBjdXN0b21FbGVtZW50cyxcbiAgfSk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8vIEB2ZXJzaW9uIDAuNy4yMlxuXG4oZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIGlmIChnbG9iYWwuSnNNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciByZWdpc3RyYXRpb25zVGFibGUgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgc2V0SW1tZWRpYXRlO1xuICBpZiAoL1RyaWRlbnR8RWRnZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgIHNldEltbWVkaWF0ZSA9IHNldFRpbWVvdXQ7XG4gIH0gZWxzZSBpZiAod2luZG93LnNldEltbWVkaWF0ZSkge1xuICAgIHNldEltbWVkaWF0ZSA9IHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNldEltbWVkaWF0ZVF1ZXVlID0gW107XG4gICAgdmFyIHNlbnRpbmVsID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5kYXRhID09PSBzZW50aW5lbCkge1xuICAgICAgICB2YXIgcXVldWUgPSBzZXRJbW1lZGlhdGVRdWV1ZTtcbiAgICAgICAgc2V0SW1tZWRpYXRlUXVldWUgPSBbXTtcbiAgICAgICAgcXVldWUuZm9yRWFjaChmdW5jdGlvbihmdW5jKSB7XG4gICAgICAgICAgZnVuYygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgICBzZXRJbW1lZGlhdGVRdWV1ZS5wdXNoKGZ1bmMpO1xuICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHNlbnRpbmVsLCBcIipcIik7XG4gICAgfTtcbiAgfVxuICB2YXIgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgdmFyIHNjaGVkdWxlZE9ic2VydmVycyA9IFtdO1xuICBmdW5jdGlvbiBzY2hlZHVsZUNhbGxiYWNrKG9ic2VydmVyKSB7XG4gICAgc2NoZWR1bGVkT2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIGlmICghaXNTY2hlZHVsZWQpIHtcbiAgICAgIGlzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHNldEltbWVkaWF0ZShkaXNwYXRjaENhbGxiYWNrcyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChub2RlKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCAmJiB3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwud3JhcElmTmVlZGVkKG5vZGUpIHx8IG5vZGU7XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGF0Y2hDYWxsYmFja3MoKSB7XG4gICAgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICB2YXIgb2JzZXJ2ZXJzID0gc2NoZWR1bGVkT2JzZXJ2ZXJzO1xuICAgIHNjaGVkdWxlZE9ic2VydmVycyA9IFtdO1xuICAgIG9ic2VydmVycy5zb3J0KGZ1bmN0aW9uKG8xLCBvMikge1xuICAgICAgcmV0dXJuIG8xLnVpZF8gLSBvMi51aWRfO1xuICAgIH0pO1xuICAgIHZhciBhbnlOb25FbXB0eSA9IGZhbHNlO1xuICAgIG9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgICB2YXIgcXVldWUgPSBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xuICAgICAgcmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzRm9yKG9ic2VydmVyKTtcbiAgICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgb2JzZXJ2ZXIuY2FsbGJhY2tfKHF1ZXVlLCBvYnNlcnZlcik7XG4gICAgICAgIGFueU5vbkVtcHR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoYW55Tm9uRW1wdHkpIGRpc3BhdGNoQ2FsbGJhY2tzKCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzRm9yKG9ic2VydmVyKSB7XG4gICAgb2JzZXJ2ZXIubm9kZXNfLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIHJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zVGFibGUuZ2V0KG5vZGUpO1xuICAgICAgaWYgKCFyZWdpc3RyYXRpb25zKSByZXR1cm47XG4gICAgICByZWdpc3RyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgIGlmIChyZWdpc3RyYXRpb24ub2JzZXJ2ZXIgPT09IG9ic2VydmVyKSByZWdpc3RyYXRpb24ucmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBmb3JFYWNoQW5jZXN0b3JBbmRPYnNlcnZlckVucXVldWVSZWNvcmQodGFyZ2V0LCBjYWxsYmFjaykge1xuICAgIGZvciAodmFyIG5vZGUgPSB0YXJnZXQ7IG5vZGU7IG5vZGUgPSBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHZhciByZWdpc3RyYXRpb25zID0gcmVnaXN0cmF0aW9uc1RhYmxlLmdldChub2RlKTtcbiAgICAgIGlmIChyZWdpc3RyYXRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVnaXN0cmF0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHZhciByZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25zW2pdO1xuICAgICAgICAgIHZhciBvcHRpb25zID0gcmVnaXN0cmF0aW9uLm9wdGlvbnM7XG4gICAgICAgICAgaWYgKG5vZGUgIT09IHRhcmdldCAmJiAhb3B0aW9ucy5zdWJ0cmVlKSBjb250aW51ZTtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gY2FsbGJhY2sob3B0aW9ucyk7XG4gICAgICAgICAgaWYgKHJlY29yZCkgcmVnaXN0cmF0aW9uLmVucXVldWUocmVjb3JkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgdWlkQ291bnRlciA9IDA7XG4gIGZ1bmN0aW9uIEpzTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XG4gICAgdGhpcy5ub2Rlc18gPSBbXTtcbiAgICB0aGlzLnJlY29yZHNfID0gW107XG4gICAgdGhpcy51aWRfID0gKyt1aWRDb3VudGVyO1xuICB9XG4gIEpzTXV0YXRpb25PYnNlcnZlci5wcm90b3R5cGUgPSB7XG4gICAgb2JzZXJ2ZTogZnVuY3Rpb24odGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0YXJnZXQgPSB3cmFwSWZOZWVkZWQodGFyZ2V0KTtcbiAgICAgIGlmICghb3B0aW9ucy5jaGlsZExpc3QgJiYgIW9wdGlvbnMuYXR0cmlidXRlcyAmJiAhb3B0aW9ucy5jaGFyYWN0ZXJEYXRhIHx8IG9wdGlvbnMuYXR0cmlidXRlT2xkVmFsdWUgJiYgIW9wdGlvbnMuYXR0cmlidXRlcyB8fCBvcHRpb25zLmF0dHJpYnV0ZUZpbHRlciAmJiBvcHRpb25zLmF0dHJpYnV0ZUZpbHRlci5sZW5ndGggJiYgIW9wdGlvbnMuYXR0cmlidXRlcyB8fCBvcHRpb25zLmNoYXJhY3RlckRhdGFPbGRWYWx1ZSAmJiAhb3B0aW9ucy5jaGFyYWN0ZXJEYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcigpO1xuICAgICAgfVxuICAgICAgdmFyIHJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zVGFibGUuZ2V0KHRhcmdldCk7XG4gICAgICBpZiAoIXJlZ2lzdHJhdGlvbnMpIHJlZ2lzdHJhdGlvbnNUYWJsZS5zZXQodGFyZ2V0LCByZWdpc3RyYXRpb25zID0gW10pO1xuICAgICAgdmFyIHJlZ2lzdHJhdGlvbjtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocmVnaXN0cmF0aW9uc1tpXS5vYnNlcnZlciA9PT0gdGhpcykge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvbnNbaV07XG4gICAgICAgICAgcmVnaXN0cmF0aW9uLnJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgcmVnaXN0cmF0aW9uID0gbmV3IFJlZ2lzdHJhdGlvbih0aGlzLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgICAgICByZWdpc3RyYXRpb25zLnB1c2gocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgdGhpcy5ub2Rlc18ucHVzaCh0YXJnZXQpO1xuICAgICAgfVxuICAgICAgcmVnaXN0cmF0aW9uLmFkZExpc3RlbmVycygpO1xuICAgIH0sXG4gICAgZGlzY29ubmVjdDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLm5vZGVzXy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIHJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zVGFibGUuZ2V0KG5vZGUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdHJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgcmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uc1tpXTtcbiAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uLm9ic2VydmVyID09PSB0aGlzKSB7XG4gICAgICAgICAgICByZWdpc3RyYXRpb24ucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICByZWdpc3RyYXRpb25zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgICB0aGlzLnJlY29yZHNfID0gW107XG4gICAgfSxcbiAgICB0YWtlUmVjb3JkczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29weU9mUmVjb3JkcyA9IHRoaXMucmVjb3Jkc187XG4gICAgICB0aGlzLnJlY29yZHNfID0gW107XG4gICAgICByZXR1cm4gY29weU9mUmVjb3JkcztcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIE11dGF0aW9uUmVjb3JkKHR5cGUsIHRhcmdldCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5hZGRlZE5vZGVzID0gW107XG4gICAgdGhpcy5yZW1vdmVkTm9kZXMgPSBbXTtcbiAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgdGhpcy5hdHRyaWJ1dGVOYW1lID0gbnVsbDtcbiAgICB0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZSA9IG51bGw7XG4gICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gY29weU11dGF0aW9uUmVjb3JkKG9yaWdpbmFsKSB7XG4gICAgdmFyIHJlY29yZCA9IG5ldyBNdXRhdGlvblJlY29yZChvcmlnaW5hbC50eXBlLCBvcmlnaW5hbC50YXJnZXQpO1xuICAgIHJlY29yZC5hZGRlZE5vZGVzID0gb3JpZ2luYWwuYWRkZWROb2Rlcy5zbGljZSgpO1xuICAgIHJlY29yZC5yZW1vdmVkTm9kZXMgPSBvcmlnaW5hbC5yZW1vdmVkTm9kZXMuc2xpY2UoKTtcbiAgICByZWNvcmQucHJldmlvdXNTaWJsaW5nID0gb3JpZ2luYWwucHJldmlvdXNTaWJsaW5nO1xuICAgIHJlY29yZC5uZXh0U2libGluZyA9IG9yaWdpbmFsLm5leHRTaWJsaW5nO1xuICAgIHJlY29yZC5hdHRyaWJ1dGVOYW1lID0gb3JpZ2luYWwuYXR0cmlidXRlTmFtZTtcbiAgICByZWNvcmQuYXR0cmlidXRlTmFtZXNwYWNlID0gb3JpZ2luYWwuYXR0cmlidXRlTmFtZXNwYWNlO1xuICAgIHJlY29yZC5vbGRWYWx1ZSA9IG9yaWdpbmFsLm9sZFZhbHVlO1xuICAgIHJldHVybiByZWNvcmQ7XG4gIH1cbiAgdmFyIGN1cnJlbnRSZWNvcmQsIHJlY29yZFdpdGhPbGRWYWx1ZTtcbiAgZnVuY3Rpb24gZ2V0UmVjb3JkKHR5cGUsIHRhcmdldCkge1xuICAgIHJldHVybiBjdXJyZW50UmVjb3JkID0gbmV3IE11dGF0aW9uUmVjb3JkKHR5cGUsIHRhcmdldCk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0UmVjb3JkV2l0aE9sZFZhbHVlKG9sZFZhbHVlKSB7XG4gICAgaWYgKHJlY29yZFdpdGhPbGRWYWx1ZSkgcmV0dXJuIHJlY29yZFdpdGhPbGRWYWx1ZTtcbiAgICByZWNvcmRXaXRoT2xkVmFsdWUgPSBjb3B5TXV0YXRpb25SZWNvcmQoY3VycmVudFJlY29yZCk7XG4gICAgcmVjb3JkV2l0aE9sZFZhbHVlLm9sZFZhbHVlID0gb2xkVmFsdWU7XG4gICAgcmV0dXJuIHJlY29yZFdpdGhPbGRWYWx1ZTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhclJlY29yZHMoKSB7XG4gICAgY3VycmVudFJlY29yZCA9IHJlY29yZFdpdGhPbGRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiByZWNvcmRSZXByZXNlbnRzQ3VycmVudE11dGF0aW9uKHJlY29yZCkge1xuICAgIHJldHVybiByZWNvcmQgPT09IHJlY29yZFdpdGhPbGRWYWx1ZSB8fCByZWNvcmQgPT09IGN1cnJlbnRSZWNvcmQ7XG4gIH1cbiAgZnVuY3Rpb24gc2VsZWN0UmVjb3JkKGxhc3RSZWNvcmQsIG5ld1JlY29yZCkge1xuICAgIGlmIChsYXN0UmVjb3JkID09PSBuZXdSZWNvcmQpIHJldHVybiBsYXN0UmVjb3JkO1xuICAgIGlmIChyZWNvcmRXaXRoT2xkVmFsdWUgJiYgcmVjb3JkUmVwcmVzZW50c0N1cnJlbnRNdXRhdGlvbihsYXN0UmVjb3JkKSkgcmV0dXJuIHJlY29yZFdpdGhPbGRWYWx1ZTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiBSZWdpc3RyYXRpb24ob2JzZXJ2ZXIsIHRhcmdldCwgb3B0aW9ucykge1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMudHJhbnNpZW50T2JzZXJ2ZWROb2RlcyA9IFtdO1xuICB9XG4gIFJlZ2lzdHJhdGlvbi5wcm90b3R5cGUgPSB7XG4gICAgZW5xdWV1ZTogZnVuY3Rpb24ocmVjb3JkKSB7XG4gICAgICB2YXIgcmVjb3JkcyA9IHRoaXMub2JzZXJ2ZXIucmVjb3Jkc187XG4gICAgICB2YXIgbGVuZ3RoID0gcmVjb3Jkcy5sZW5ndGg7XG4gICAgICBpZiAocmVjb3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBsYXN0UmVjb3JkID0gcmVjb3Jkc1tsZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIHJlY29yZFRvUmVwbGFjZUxhc3QgPSBzZWxlY3RSZWNvcmQobGFzdFJlY29yZCwgcmVjb3JkKTtcbiAgICAgICAgaWYgKHJlY29yZFRvUmVwbGFjZUxhc3QpIHtcbiAgICAgICAgICByZWNvcmRzW2xlbmd0aCAtIDFdID0gcmVjb3JkVG9SZXBsYWNlTGFzdDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjaGVkdWxlQ2FsbGJhY2sodGhpcy5vYnNlcnZlcik7XG4gICAgICB9XG4gICAgICByZWNvcmRzW2xlbmd0aF0gPSByZWNvcmQ7XG4gICAgfSxcbiAgICBhZGRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnNfKHRoaXMudGFyZ2V0KTtcbiAgICB9LFxuICAgIGFkZExpc3RlbmVyc186IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMuYXR0cmlidXRlcykgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQXR0ck1vZGlmaWVkXCIsIHRoaXMsIHRydWUpO1xuICAgICAgaWYgKG9wdGlvbnMuY2hhcmFjdGVyRGF0YSkgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ2hhcmFjdGVyRGF0YU1vZGlmaWVkXCIsIHRoaXMsIHRydWUpO1xuICAgICAgaWYgKG9wdGlvbnMuY2hpbGRMaXN0KSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Ob2RlSW5zZXJ0ZWRcIiwgdGhpcywgdHJ1ZSk7XG4gICAgICBpZiAob3B0aW9ucy5jaGlsZExpc3QgfHwgb3B0aW9ucy5zdWJ0cmVlKSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Ob2RlUmVtb3ZlZFwiLCB0aGlzLCB0cnVlKTtcbiAgICB9LFxuICAgIHJlbW92ZUxpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyc18odGhpcy50YXJnZXQpO1xuICAgIH0sXG4gICAgcmVtb3ZlTGlzdGVuZXJzXzogZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGVzKSBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01BdHRyTW9kaWZpZWRcIiwgdGhpcywgdHJ1ZSk7XG4gICAgICBpZiAob3B0aW9ucy5jaGFyYWN0ZXJEYXRhKSBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01DaGFyYWN0ZXJEYXRhTW9kaWZpZWRcIiwgdGhpcywgdHJ1ZSk7XG4gICAgICBpZiAob3B0aW9ucy5jaGlsZExpc3QpIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVJbnNlcnRlZFwiLCB0aGlzLCB0cnVlKTtcbiAgICAgIGlmIChvcHRpb25zLmNoaWxkTGlzdCB8fCBvcHRpb25zLnN1YnRyZWUpIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVSZW1vdmVkXCIsIHRoaXMsIHRydWUpO1xuICAgIH0sXG4gICAgYWRkVHJhbnNpZW50T2JzZXJ2ZXI6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGlmIChub2RlID09PSB0aGlzLnRhcmdldCkgcmV0dXJuO1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnNfKG5vZGUpO1xuICAgICAgdGhpcy50cmFuc2llbnRPYnNlcnZlZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB2YXIgcmVnaXN0cmF0aW9ucyA9IHJlZ2lzdHJhdGlvbnNUYWJsZS5nZXQobm9kZSk7XG4gICAgICBpZiAoIXJlZ2lzdHJhdGlvbnMpIHJlZ2lzdHJhdGlvbnNUYWJsZS5zZXQobm9kZSwgcmVnaXN0cmF0aW9ucyA9IFtdKTtcbiAgICAgIHJlZ2lzdHJhdGlvbnMucHVzaCh0aGlzKTtcbiAgICB9LFxuICAgIHJlbW92ZVRyYW5zaWVudE9ic2VydmVyczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdHJhbnNpZW50T2JzZXJ2ZWROb2RlcyA9IHRoaXMudHJhbnNpZW50T2JzZXJ2ZWROb2RlcztcbiAgICAgIHRoaXMudHJhbnNpZW50T2JzZXJ2ZWROb2RlcyA9IFtdO1xuICAgICAgdHJhbnNpZW50T2JzZXJ2ZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnNfKG5vZGUpO1xuICAgICAgICB2YXIgcmVnaXN0cmF0aW9ucyA9IHJlZ2lzdHJhdGlvbnNUYWJsZS5nZXQobm9kZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChyZWdpc3RyYXRpb25zW2ldID09PSB0aGlzKSB7XG4gICAgICAgICAgICByZWdpc3RyYXRpb25zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfSxcbiAgICBoYW5kbGVFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgY2FzZSBcIkRPTUF0dHJNb2RpZmllZFwiOlxuICAgICAgICB2YXIgbmFtZSA9IGUuYXR0ck5hbWU7XG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBlLnJlbGF0ZWROb2RlLm5hbWVzcGFjZVVSSTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgcmVjb3JkID0gbmV3IGdldFJlY29yZChcImF0dHJpYnV0ZXNcIiwgdGFyZ2V0KTtcbiAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPSBuYW1lO1xuICAgICAgICByZWNvcmQuYXR0cmlidXRlTmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSBlLmF0dHJDaGFuZ2UgPT09IE11dGF0aW9uRXZlbnQuQURESVRJT04gPyBudWxsIDogZS5wcmV2VmFsdWU7XG4gICAgICAgIGZvckVhY2hBbmNlc3RvckFuZE9ic2VydmVyRW5xdWV1ZVJlY29yZCh0YXJnZXQsIGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuYXR0cmlidXRlcykgcmV0dXJuO1xuICAgICAgICAgIGlmIChvcHRpb25zLmF0dHJpYnV0ZUZpbHRlciAmJiBvcHRpb25zLmF0dHJpYnV0ZUZpbHRlci5sZW5ndGggJiYgb3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIuaW5kZXhPZihuYW1lKSA9PT0gLTEgJiYgb3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIuaW5kZXhPZihuYW1lc3BhY2UpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGVPbGRWYWx1ZSkgcmV0dXJuIGdldFJlY29yZFdpdGhPbGRWYWx1ZShvbGRWYWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAgY2FzZSBcIkRPTUNoYXJhY3RlckRhdGFNb2RpZmllZFwiOlxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIHZhciByZWNvcmQgPSBnZXRSZWNvcmQoXCJjaGFyYWN0ZXJEYXRhXCIsIHRhcmdldCk7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IGUucHJldlZhbHVlO1xuICAgICAgICBmb3JFYWNoQW5jZXN0b3JBbmRPYnNlcnZlckVucXVldWVSZWNvcmQodGFyZ2V0LCBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmNoYXJhY3RlckRhdGEpIHJldHVybjtcbiAgICAgICAgICBpZiAob3B0aW9ucy5jaGFyYWN0ZXJEYXRhT2xkVmFsdWUpIHJldHVybiBnZXRSZWNvcmRXaXRoT2xkVmFsdWUob2xkVmFsdWUpO1xuICAgICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgIGNhc2UgXCJET01Ob2RlUmVtb3ZlZFwiOlxuICAgICAgICB0aGlzLmFkZFRyYW5zaWVudE9ic2VydmVyKGUudGFyZ2V0KTtcblxuICAgICAgIGNhc2UgXCJET01Ob2RlSW5zZXJ0ZWRcIjpcbiAgICAgICAgdmFyIGNoYW5nZWROb2RlID0gZS50YXJnZXQ7XG4gICAgICAgIHZhciBhZGRlZE5vZGVzLCByZW1vdmVkTm9kZXM7XG4gICAgICAgIGlmIChlLnR5cGUgPT09IFwiRE9NTm9kZUluc2VydGVkXCIpIHtcbiAgICAgICAgICBhZGRlZE5vZGVzID0gWyBjaGFuZ2VkTm9kZSBdO1xuICAgICAgICAgIHJlbW92ZWROb2RlcyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZGVkTm9kZXMgPSBbXTtcbiAgICAgICAgICByZW1vdmVkTm9kZXMgPSBbIGNoYW5nZWROb2RlIF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXZpb3VzU2libGluZyA9IGNoYW5nZWROb2RlLnByZXZpb3VzU2libGluZztcbiAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gY2hhbmdlZE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIHZhciByZWNvcmQgPSBnZXRSZWNvcmQoXCJjaGlsZExpc3RcIiwgZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICAgIHJlY29yZC5hZGRlZE5vZGVzID0gYWRkZWROb2RlcztcbiAgICAgICAgcmVjb3JkLnJlbW92ZWROb2RlcyA9IHJlbW92ZWROb2RlcztcbiAgICAgICAgcmVjb3JkLnByZXZpb3VzU2libGluZyA9IHByZXZpb3VzU2libGluZztcbiAgICAgICAgcmVjb3JkLm5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmc7XG4gICAgICAgIGZvckVhY2hBbmNlc3RvckFuZE9ic2VydmVyRW5xdWV1ZVJlY29yZChlLnJlbGF0ZWROb2RlLCBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmNoaWxkTGlzdCkgcmV0dXJuO1xuICAgICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2xlYXJSZWNvcmRzKCk7XG4gICAgfVxuICB9O1xuICBnbG9iYWwuSnNNdXRhdGlvbk9ic2VydmVyID0gSnNNdXRhdGlvbk9ic2VydmVyO1xuICBpZiAoIWdsb2JhbC5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgPSBKc011dGF0aW9uT2JzZXJ2ZXI7XG4gICAgSnNNdXRhdGlvbk9ic2VydmVyLl9pc1BvbHlmaWxsZWQgPSB0cnVlO1xuICB9XG59KShzZWxmKTtcbiIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTIgQmFybmVzYW5kbm9ibGUuY29tLCBsbGMsIERvbmF2b24gV2VzdCwgYW5kIERvbWVuaWMgRGVuaWNvbGFcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbmluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxuTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG5XSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHNldEltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIGFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJncykge1xuICAgICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gcGFydGlhbGx5QXBwbGllZC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyB0aGUgc2FtZSBhcmd1bWVudHMgYXMgc2V0SW1tZWRpYXRlLCBidXRcbiAgICAvLyByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCByZXF1aXJlcyBubyBhcmd1bWVudHMuXG4gICAgZnVuY3Rpb24gcGFydGlhbGx5QXBwbGllZChoYW5kbGVyKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgKG5ldyBGdW5jdGlvbihcIlwiICsgaGFuZGxlcikpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChwYXJ0aWFsbHlBcHBsaWVkKHJ1bklmUHJlc2VudCwgaGFuZGxlKSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrKCk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2socGFydGlhbGx5QXBwbGllZChydW5JZlByZXNlbnQsIGhhbmRsZSkpO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBhZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHBhcnRpYWxseUFwcGxpZWQocnVuSWZQcmVzZW50LCBoYW5kbGUpLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufShzZWxmKSk7XG4iLCIvLyBDYXV0aW9uOlxuLy8gRG8gbm90IHJlcGxhY2UgdGhpcyBpbXBvcnQgc3RhdGVtZW50IHdpdGggY29kZXMuXG4vL1xuLy8gSWYgeW91IHJlcGxhY2UgdGhpcyBpbXBvcnQgc3RhdGVtZW50IHdpdGggY29kZXMsXG4vLyB0aGUgY29kZXMgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgZm9sbG93aW5nIHBvbHlmaWxscyBhcmUgaW1wb3J0ZWRcbi8vIGJlY2F1c2UgaW1wb3J0IHN0YXRlbWVudHMgYXJlIGhvaXN0ZWQgZHVyaW5nIGNvbXBpbGF0aW9uLlxuaW1wb3J0ICcuL3BvbHlmaWxsLXN3aXRjaGVzJztcblxuLy8gUG9seWZpbGwgRUNNQVNjcmlwdCBzdGFuZGFyZCBmZWF0dXJlcyB3aXRoIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uXG5pbXBvcnQgJ2NvcmUtanMvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YnO1xuaW1wb3J0ICdjb3JlLWpzL2ZuL3NldCc7XG5pbXBvcnQgJ2NvcmUtanMvZm4vbWFwJztcbmltcG9ydCAnY29yZS1qcy9mbi93ZWFrLW1hcCc7XG5cbi8vIFBvbHlmaWxsIEN1c3RvbSBFbGVtZW50cyB2MSB3aXRoIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uXG5pbXBvcnQgJ0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvY3VzdG9tLWVsZW1lbnRzJztcblxuLy8gUG9seWZpbGwgTXV0YXRpb25PYnNlcnZlciB3aXRoIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uXG5pbXBvcnQgJy4vTXV0YXRpb25PYnNlcnZlckAwLjcuMjIvTXV0YXRpb25PYnNlcnZlci5qcyc7XG5cbi8vIFBvbHlmaWxsIHNldEltbWVkaWF0ZSB3aXRoIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uXG5pbXBvcnQgJy4vc2V0SW1tZWRpYXRlQDEuMC4yK21vZC9zZXRJbW1lZGlhdGUuanMnO1xuIiwiOyhmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogQHByZXNlcnZlIEZhc3RDbGljazogcG9seWZpbGwgdG8gcmVtb3ZlIGNsaWNrIGRlbGF5cyBvbiBicm93c2VycyB3aXRoIHRvdWNoIFVJcy5cblx0ICpcblx0ICogQGNvZGluZ3N0YW5kYXJkIGZ0bGFicy1qc3YyXG5cdCAqIEBjb3B5cmlnaHQgVGhlIEZpbmFuY2lhbCBUaW1lcyBMaW1pdGVkIFtBbGwgUmlnaHRzIFJlc2VydmVkXVxuXHQgKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoc2VlIExJQ0VOU0UudHh0KVxuXHQgKi9cblxuXHQvKmpzbGludCBicm93c2VyOnRydWUsIG5vZGU6dHJ1ZSovXG5cdC8qZ2xvYmFsIGRlZmluZSwgRXZlbnQsIE5vZGUqL1xuXG5cblx0LyoqXG5cdCAqIEluc3RhbnRpYXRlIGZhc3QtY2xpY2tpbmcgbGlzdGVuZXJzIG9uIHRoZSBzcGVjaWZpZWQgbGF5ZXIuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHNcblx0ICovXG5cdGZ1bmN0aW9uIEZhc3RDbGljayhsYXllciwgb3B0aW9ucykge1xuXHRcdHZhciBvbGRPbkNsaWNrO1xuXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIGEgY2xpY2sgaXMgY3VycmVudGx5IGJlaW5nIHRyYWNrZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRpbWVzdGFtcCBmb3Igd2hlbiBjbGljayB0cmFja2luZyBzdGFydGVkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaGUgZWxlbWVudCBiZWluZyB0cmFja2VkIGZvciBhIGNsaWNrLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgRXZlbnRUYXJnZXRcblx0XHQgKi9cblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXG5cblx0XHQvKipcblx0XHQgKiBYLWNvb3JkaW5hdGUgb2YgdG91Y2ggc3RhcnQgZXZlbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoU3RhcnRYID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogWS1jb29yZGluYXRlIG9mIHRvdWNoIHN0YXJ0IGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaFN0YXJ0WSA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIElEIG9mIHRoZSBsYXN0IHRvdWNoLCByZXRyaWV2ZWQgZnJvbSBUb3VjaC5pZGVudGlmaWVyLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVG91Y2htb3ZlIGJvdW5kYXJ5LCBiZXlvbmQgd2hpY2ggYSBjbGljayB3aWxsIGJlIGNhbmNlbGxlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hCb3VuZGFyeSA9IG9wdGlvbnMudG91Y2hCb3VuZGFyeSB8fCAxMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIEZhc3RDbGljayBsYXllci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIEVsZW1lbnRcblx0XHQgKi9cblx0XHR0aGlzLmxheWVyID0gbGF5ZXI7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbWluaW11bSB0aW1lIGJldHdlZW4gdGFwKHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kKSBldmVudHNcblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudGFwRGVsYXkgPSBvcHRpb25zLnRhcERlbGF5IHx8IDIwMDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBtYXhpbXVtIHRpbWUgZm9yIGEgdGFwXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRhcFRpbWVvdXQgPSBvcHRpb25zLnRhcFRpbWVvdXQgfHwgNzAwO1xuXG5cdFx0aWYgKEZhc3RDbGljay5ub3ROZWVkZWQobGF5ZXIpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU29tZSBvbGQgdmVyc2lvbnMgb2YgQW5kcm9pZCBkb24ndCBoYXZlIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5cdFx0ZnVuY3Rpb24gYmluZChtZXRob2QsIGNvbnRleHQpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ldGhvZC5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpOyB9O1xuXHRcdH1cblxuXG5cdFx0dmFyIG1ldGhvZHMgPSBbJ29uTW91c2UnLCAnb25DbGljaycsICdvblRvdWNoU3RhcnQnLCAnb25Ub3VjaE1vdmUnLCAnb25Ub3VjaEVuZCcsICdvblRvdWNoQ2FuY2VsJ107XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXHRcdGZvciAodmFyIGkgPSAwLCBsID0gbWV0aG9kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdGNvbnRleHRbbWV0aG9kc1tpXV0gPSBiaW5kKGNvbnRleHRbbWV0aG9kc1tpXV0sIGNvbnRleHQpO1xuXHRcdH1cblxuXHRcdC8vIFNldCB1cCBldmVudCBoYW5kbGVycyBhcyByZXF1aXJlZFxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCBmYWxzZSk7XG5cblx0XHQvLyBIYWNrIGlzIHJlcXVpcmVkIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgRXZlbnQjc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIChlLmcuIEFuZHJvaWQgMilcblx0XHQvLyB3aGljaCBpcyBob3cgRmFzdENsaWNrIG5vcm1hbGx5IHN0b3BzIGNsaWNrIGV2ZW50cyBidWJibGluZyB0byBjYWxsYmFja3MgcmVnaXN0ZXJlZCBvbiB0aGUgRmFzdENsaWNrXG5cdFx0Ly8gbGF5ZXIgd2hlbiB0aGV5IGFyZSBjYW5jZWxsZWQuXG5cdFx0aWYgKCFFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIHJtdiA9IE5vZGUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0cm12LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRybXYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIGFkdiA9IE5vZGUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0YWR2LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IChjYWxsYmFjay5oaWphY2tlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhldmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksIGNhcHR1cmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYSBoYW5kbGVyIGlzIGFscmVhZHkgZGVjbGFyZWQgaW4gdGhlIGVsZW1lbnQncyBvbmNsaWNrIGF0dHJpYnV0ZSwgaXQgd2lsbCBiZSBmaXJlZCBiZWZvcmVcblx0XHQvLyBGYXN0Q2xpY2sncyBvbkNsaWNrIGhhbmRsZXIuIEZpeCB0aGlzIGJ5IHB1bGxpbmcgb3V0IHRoZSB1c2VyLWRlZmluZWQgaGFuZGxlciBmdW5jdGlvbiBhbmRcblx0XHQvLyBhZGRpbmcgaXQgYXMgbGlzdGVuZXIuXG5cdFx0aWYgKHR5cGVvZiBsYXllci5vbmNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cblx0XHRcdC8vIEFuZHJvaWQgYnJvd3NlciBvbiBhdCBsZWFzdCAzLjIgcmVxdWlyZXMgYSBuZXcgcmVmZXJlbmNlIHRvIHRoZSBmdW5jdGlvbiBpbiBsYXllci5vbmNsaWNrXG5cdFx0XHQvLyAtIHRoZSBvbGQgb25lIHdvbid0IHdvcmsgaWYgcGFzc2VkIHRvIGFkZEV2ZW50TGlzdGVuZXIgZGlyZWN0bHkuXG5cdFx0XHRvbGRPbkNsaWNrID0gbGF5ZXIub25jbGljaztcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0b2xkT25DbGljayhldmVudCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRsYXllci5vbmNsaWNrID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBXaW5kb3dzIFBob25lIDguMSBmYWtlcyB1c2VyIGFnZW50IHN0cmluZyB0byBsb29rIGxpa2UgQW5kcm9pZCBhbmQgaVBob25lLlxuXHQqXG5cdCogQHR5cGUgYm9vbGVhblxuXHQqL1xuXHR2YXIgZGV2aWNlSXNXaW5kb3dzUGhvbmUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIFBob25lXCIpID49IDA7XG5cblx0LyoqXG5cdCAqIEFuZHJvaWQgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzQW5kcm9pZCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMCAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUyA9IC9pUChhZHxob25lfG9kKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIDQgcmVxdWlyZXMgYW4gZXhjZXB0aW9uIGZvciBzZWxlY3QgZWxlbWVudHMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUzQgPSBkZXZpY2VJc0lPUyAmJiAoL09TIDRfXFxkKF9cXGQpPy8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblxuXHQvKipcblx0ICogaU9TIDYuMC03LiogcmVxdWlyZXMgdGhlIHRhcmdldCBlbGVtZW50IHRvIGJlIG1hbnVhbGx5IGRlcml2ZWRcblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzSU9TV2l0aEJhZFRhcmdldCA9IGRldmljZUlzSU9TICYmICgvT1MgWzYtN11fXFxkLykudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXHQvKipcblx0ICogQmxhY2tCZXJyeSByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNCbGFja0JlcnJ5MTAgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0JCMTAnKSA+IDA7XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIGEgZ2l2ZW4gZWxlbWVudCByZXF1aXJlcyBhIG5hdGl2ZSBjbGljay5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgbmVlZHMgYSBuYXRpdmUgY2xpY2tcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNDbGljayA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgdG8gZGlzYWJsZWQgaW5wdXRzIChpc3N1ZSAjNjIpXG5cdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdGlmICh0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2lucHV0JzpcblxuXHRcdFx0Ly8gRmlsZSBpbnB1dHMgbmVlZCByZWFsIGNsaWNrcyBvbiBpT1MgNiBkdWUgdG8gYSBicm93c2VyIGJ1ZyAoaXNzdWUgIzY4KVxuXHRcdFx0aWYgKChkZXZpY2VJc0lPUyAmJiB0YXJnZXQudHlwZSA9PT0gJ2ZpbGUnKSB8fCB0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2xhYmVsJzpcblx0XHRjYXNlICdpZnJhbWUnOiAvLyBpT1M4IGhvbWVzY3JlZW4gYXBwcyBjYW4gcHJldmVudCBldmVudHMgYnViYmxpbmcgaW50byBmcmFtZXNcblx0XHRjYXNlICd2aWRlbyc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKC9cXGJuZWVkc2NsaWNrXFxiLykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIGNsaWNrIGludG8gZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIG5hdGl2ZSBjbGljay5cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNGb2N1cyA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0cmV0dXJuICFkZXZpY2VJc0FuZHJvaWQ7XG5cdFx0Y2FzZSAnaW5wdXQnOlxuXHRcdFx0c3dpdGNoICh0YXJnZXQudHlwZSkge1xuXHRcdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ2ZpbGUnOlxuXHRcdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBObyBwb2ludCBpbiBhdHRlbXB0aW5nIHRvIGZvY3VzIGRpc2FibGVkIGlucHV0c1xuXHRcdFx0cmV0dXJuICF0YXJnZXQuZGlzYWJsZWQgJiYgIXRhcmdldC5yZWFkT25seTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICgvXFxibmVlZHNmb2N1c1xcYi8pLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFNlbmQgYSBjbGljayBldmVudCB0byB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5zZW5kQ2xpY2sgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50LCBldmVudCkge1xuXHRcdHZhciBjbGlja0V2ZW50LCB0b3VjaDtcblxuXHRcdC8vIE9uIHNvbWUgQW5kcm9pZCBkZXZpY2VzIGFjdGl2ZUVsZW1lbnQgbmVlZHMgdG8gYmUgYmx1cnJlZCBvdGhlcndpc2UgdGhlIHN5bnRoZXRpYyBjbGljayB3aWxsIGhhdmUgbm8gZWZmZWN0ICgjMjQpXG5cdFx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGFyZ2V0RWxlbWVudCkge1xuXHRcdFx0ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG5cdFx0fVxuXG5cdFx0dG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdC8vIFN5bnRoZXNpemUgYSBjbGljayBldmVudCwgd2l0aCBhbiBleHRyYSBhdHRyaWJ1dGUgc28gaXQgY2FuIGJlIHRyYWNrZWRcblx0XHRjbGlja0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XG5cdFx0Y2xpY2tFdmVudC5pbml0TW91c2VFdmVudCh0aGlzLmRldGVybWluZUV2ZW50VHlwZSh0YXJnZXRFbGVtZW50KSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxLCB0b3VjaC5zY3JlZW5YLCB0b3VjaC5zY3JlZW5ZLCB0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG5cdFx0Y2xpY2tFdmVudC5mb3J3YXJkZWRUb3VjaEV2ZW50ID0gdHJ1ZTtcblx0XHR0YXJnZXRFbGVtZW50LmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XG5cdH07XG5cblx0RmFzdENsaWNrLnByb3RvdHlwZS5kZXRlcm1pbmVFdmVudFR5cGUgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cblx0XHQvL0lzc3VlICMxNTk6IEFuZHJvaWQgQ2hyb21lIFNlbGVjdCBCb3ggZG9lcyBub3Qgb3BlbiB3aXRoIGEgc3ludGhldGljIGNsaWNrIGV2ZW50XG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCAmJiB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcblx0XHRcdHJldHVybiAnbW91c2Vkb3duJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJ2NsaWNrJztcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cdFx0dmFyIGxlbmd0aDtcblxuXHRcdC8vIElzc3VlICMxNjA6IG9uIGlPUyA3LCBzb21lIGlucHV0IGVsZW1lbnRzIChlLmcuIGRhdGUgZGF0ZXRpbWUgbW9udGgpIHRocm93IGEgdmFndWUgVHlwZUVycm9yIG9uIHNldFNlbGVjdGlvblJhbmdlLiBUaGVzZSBlbGVtZW50cyBkb24ndCBoYXZlIGFuIGludGVnZXIgdmFsdWUgZm9yIHRoZSBzZWxlY3Rpb25TdGFydCBhbmQgc2VsZWN0aW9uRW5kIHByb3BlcnRpZXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IHRoYXQgY2FuJ3QgYmUgdXNlZCBmb3IgZGV0ZWN0aW9uIGJlY2F1c2UgYWNjZXNzaW5nIHRoZSBwcm9wZXJ0aWVzIGFsc28gdGhyb3dzIGEgVHlwZUVycm9yLiBKdXN0IGNoZWNrIHRoZSB0eXBlIGluc3RlYWQuIEZpbGVkIGFzIEFwcGxlIGJ1ZyAjMTUxMjI3MjQuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmIHRhcmdldEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UgJiYgdGFyZ2V0RWxlbWVudC50eXBlLmluZGV4T2YoJ2RhdGUnKSAhPT0gMCAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICd0aW1lJyAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdtb250aCcpIHtcblx0XHRcdGxlbmd0aCA9IHRhcmdldEVsZW1lbnQudmFsdWUubGVuZ3RoO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShsZW5ndGgsIGxlbmd0aCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiBhIHNjcm9sbGFibGUgbGF5ZXIgYW5kIGlmIHNvLCBzZXQgYSBmbGFnIG9uIGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUudXBkYXRlU2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXHRcdHZhciBzY3JvbGxQYXJlbnQsIHBhcmVudEVsZW1lbnQ7XG5cblx0XHRzY3JvbGxQYXJlbnQgPSB0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblxuXHRcdC8vIEF0dGVtcHQgdG8gZGlzY292ZXIgd2hldGhlciB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHNjcm9sbGFibGUgbGF5ZXIuIFJlLWNoZWNrIGlmIHRoZVxuXHRcdC8vIHRhcmdldCBlbGVtZW50IHdhcyBtb3ZlZCB0byBhbm90aGVyIHBhcmVudC5cblx0XHRpZiAoIXNjcm9sbFBhcmVudCB8fCAhc2Nyb2xsUGFyZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRwYXJlbnRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcblx0XHRcdGRvIHtcblx0XHRcdFx0aWYgKHBhcmVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQpIHtcblx0XHRcdFx0XHRzY3JvbGxQYXJlbnQgPSBwYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50ID0gcGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9IHdoaWxlIChwYXJlbnRFbGVtZW50KTtcblx0XHR9XG5cblx0XHQvLyBBbHdheXMgdXBkYXRlIHRoZSBzY3JvbGwgdG9wIHRyYWNrZXIgaWYgcG9zc2libGUuXG5cdFx0aWYgKHNjcm9sbFBhcmVudCkge1xuXHRcdFx0c2Nyb2xsUGFyZW50LmZhc3RDbGlja0xhc3RTY3JvbGxUb3AgPSBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSB0YXJnZXRFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fEV2ZW50VGFyZ2V0fVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24oZXZlbnRUYXJnZXQpIHtcblxuXHRcdC8vIE9uIHNvbWUgb2xkZXIgYnJvd3NlcnMgKG5vdGFibHkgU2FmYXJpIG9uIGlPUyA0LjEgLSBzZWUgaXNzdWUgIzU2KSB0aGUgZXZlbnQgdGFyZ2V0IG1heSBiZSBhIHRleHQgbm9kZS5cblx0XHRpZiAoZXZlbnRUYXJnZXQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gZXZlbnRUYXJnZXQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRUYXJnZXQ7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggc3RhcnQsIHJlY29yZCB0aGUgcG9zaXRpb24gYW5kIHNjcm9sbCBvZmZzZXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0YXJnZXRFbGVtZW50LCB0b3VjaCwgc2VsZWN0aW9uO1xuXG5cdFx0Ly8gSWdub3JlIG11bHRpcGxlIHRvdWNoZXMsIG90aGVyd2lzZSBwaW5jaC10by16b29tIGlzIHByZXZlbnRlZCBpZiBib3RoIGZpbmdlcnMgYXJlIG9uIHRoZSBGYXN0Q2xpY2sgZWxlbWVudCAoaXNzdWUgIzExMSkuXG5cdFx0aWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0RWxlbWVudCA9IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdHRvdWNoID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcblxuXHRcdC8vIElnbm9yZSB0b3VjaGVzIG9uIGNvbnRlbnRlZGl0YWJsZSBlbGVtZW50cyB0byBwcmV2ZW50IGNvbmZsaWN0IHdpdGggdGV4dCBzZWxlY3Rpb24uXG5cdFx0Ly8gKEZvciBkZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vZnRsYWJzL2Zhc3RjbGljay9wdWxsLzIxMSApXG5cdFx0aWYgKHRhcmdldEVsZW1lbnQuaXNDb250ZW50RWRpdGFibGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChkZXZpY2VJc0lPUykge1xuXG5cdFx0XHQvLyBPbmx5IHRydXN0ZWQgZXZlbnRzIHdpbGwgZGVzZWxlY3QgdGV4dCBvbiBpT1MgKGlzc3VlICM0OSlcblx0XHRcdHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblx0XHRcdGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCAmJiAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWRldmljZUlzSU9TNCkge1xuXG5cdFx0XHRcdC8vIFdlaXJkIHRoaW5ncyBoYXBwZW4gb24gaU9TIHdoZW4gYW4gYWxlcnQgb3IgY29uZmlybSBkaWFsb2cgaXMgb3BlbmVkIGZyb20gYSBjbGljayBldmVudCBjYWxsYmFjayAoaXNzdWUgIzIzKTpcblx0XHRcdFx0Ly8gd2hlbiB0aGUgdXNlciBuZXh0IHRhcHMgYW55d2hlcmUgZWxzZSBvbiB0aGUgcGFnZSwgbmV3IHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kIGV2ZW50cyBhcmUgZGlzcGF0Y2hlZFxuXHRcdFx0XHQvLyB3aXRoIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgdGhlIHRvdWNoIGV2ZW50IHRoYXQgcHJldmlvdXNseSB0cmlnZ2VyZWQgdGhlIGNsaWNrIHRoYXQgdHJpZ2dlcmVkIHRoZSBhbGVydC5cblx0XHRcdFx0Ly8gU2FkbHksIHRoZXJlIGlzIGFuIGlzc3VlIG9uIGlPUyA0IHRoYXQgY2F1c2VzIHNvbWUgbm9ybWFsIHRvdWNoIGV2ZW50cyB0byBoYXZlIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgYW5cblx0XHRcdFx0Ly8gaW1tZWRpYXRlbHkgcHJlY2VkaW5nIHRvdWNoIGV2ZW50IChpc3N1ZSAjNTIpLCBzbyB0aGlzIGZpeCBpcyB1bmF2YWlsYWJsZSBvbiB0aGF0IHBsYXRmb3JtLlxuXHRcdFx0XHQvLyBJc3N1ZSAxMjA6IHRvdWNoLmlkZW50aWZpZXIgaXMgMCB3aGVuIENocm9tZSBkZXYgdG9vbHMgJ0VtdWxhdGUgdG91Y2ggZXZlbnRzJyBpcyBzZXQgd2l0aCBhbiBpT1MgZGV2aWNlIFVBIHN0cmluZyxcblx0XHRcdFx0Ly8gd2hpY2ggY2F1c2VzIGFsbCB0b3VjaCBldmVudHMgdG8gYmUgaWdub3JlZC4gQXMgdGhpcyBibG9jayBvbmx5IGFwcGxpZXMgdG8gaU9TLCBhbmQgaU9TIGlkZW50aWZpZXJzIGFyZSBhbHdheXMgbG9uZyxcblx0XHRcdFx0Ly8gcmFuZG9tIGludGVnZXJzLCBpdCdzIHNhZmUgdG8gdG8gY29udGludWUgaWYgdGhlIGlkZW50aWZpZXIgaXMgMCBoZXJlLlxuXHRcdFx0XHRpZiAodG91Y2guaWRlbnRpZmllciAmJiB0b3VjaC5pZGVudGlmaWVyID09PSB0aGlzLmxhc3RUb3VjaElkZW50aWZpZXIpIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMubGFzdFRvdWNoSWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgYSBzY3JvbGxhYmxlIGxheWVyICh1c2luZyAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2gpIGFuZDpcblx0XHRcdFx0Ly8gMSkgdGhlIHVzZXIgZG9lcyBhIGZsaW5nIHNjcm9sbCBvbiB0aGUgc2Nyb2xsYWJsZSBsYXllclxuXHRcdFx0XHQvLyAyKSB0aGUgdXNlciBzdG9wcyB0aGUgZmxpbmcgc2Nyb2xsIHdpdGggYW5vdGhlciB0YXBcblx0XHRcdFx0Ly8gdGhlbiB0aGUgZXZlbnQudGFyZ2V0IG9mIHRoZSBsYXN0ICd0b3VjaGVuZCcgZXZlbnQgd2lsbCBiZSB0aGUgZWxlbWVudCB0aGF0IHdhcyB1bmRlciB0aGUgdXNlcidzIGZpbmdlclxuXHRcdFx0XHQvLyB3aGVuIHRoZSBmbGluZyBzY3JvbGwgd2FzIHN0YXJ0ZWQsIGNhdXNpbmcgRmFzdENsaWNrIHRvIHNlbmQgYSBjbGljayBldmVudCB0byB0aGF0IGxheWVyIC0gdW5sZXNzIGEgY2hlY2tcblx0XHRcdFx0Ly8gaXMgbWFkZSB0byBlbnN1cmUgdGhhdCBhIHBhcmVudCBsYXllciB3YXMgbm90IHNjcm9sbGVkIGJlZm9yZSBzZW5kaW5nIGEgc3ludGhldGljIGNsaWNrIChpc3N1ZSAjNDIpLlxuXHRcdFx0XHR0aGlzLnVwZGF0ZVNjcm9sbFBhcmVudCh0YXJnZXRFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSB0cnVlO1xuXHRcdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gZXZlbnQudGltZVN0YW1wO1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQ7XG5cblx0XHR0aGlzLnRvdWNoU3RhcnRYID0gdG91Y2gucGFnZVg7XG5cdFx0dGhpcy50b3VjaFN0YXJ0WSA9IHRvdWNoLnBhZ2VZO1xuXG5cdFx0Ly8gUHJldmVudCBwaGFudG9tIGNsaWNrcyBvbiBmYXN0IGRvdWJsZS10YXAgKGlzc3VlICMzNilcblx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMubGFzdENsaWNrVGltZSkgPCB0aGlzLnRhcERlbGF5ICYmIChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpID4gLTEpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogQmFzZWQgb24gYSB0b3VjaG1vdmUgZXZlbnQgb2JqZWN0LCBjaGVjayB3aGV0aGVyIHRoZSB0b3VjaCBoYXMgbW92ZWQgcGFzdCBhIGJvdW5kYXJ5IHNpbmNlIGl0IHN0YXJ0ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS50b3VjaEhhc01vdmVkID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSwgYm91bmRhcnkgPSB0aGlzLnRvdWNoQm91bmRhcnk7XG5cblx0XHRpZiAoTWF0aC5hYnModG91Y2gucGFnZVggLSB0aGlzLnRvdWNoU3RhcnRYKSA+IGJvdW5kYXJ5IHx8IE1hdGguYWJzKHRvdWNoLnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0WSkgPiBib3VuZGFyeSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgbGFzdCBwb3NpdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAoIXRoaXMudHJhY2tpbmdDbGljaykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIHRvdWNoIGhhcyBtb3ZlZCwgY2FuY2VsIHRoZSBjbGljayB0cmFja2luZ1xuXHRcdGlmICh0aGlzLnRhcmdldEVsZW1lbnQgIT09IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpIHx8IHRoaXMudG91Y2hIYXNNb3ZlZChldmVudCkpIHtcblx0XHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBBdHRlbXB0IHRvIGZpbmQgdGhlIGxhYmVsbGVkIGNvbnRyb2wgZm9yIHRoZSBnaXZlbiBsYWJlbCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEhUTUxMYWJlbEVsZW1lbnR9IGxhYmVsRWxlbWVudFxuXHQgKiBAcmV0dXJucyB7RWxlbWVudHxudWxsfVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5maW5kQ29udHJvbCA9IGZ1bmN0aW9uKGxhYmVsRWxlbWVudCkge1xuXG5cdFx0Ly8gRmFzdCBwYXRoIGZvciBuZXdlciBicm93c2VycyBzdXBwb3J0aW5nIHRoZSBIVE1MNSBjb250cm9sIGF0dHJpYnV0ZVxuXHRcdGlmIChsYWJlbEVsZW1lbnQuY29udHJvbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LmNvbnRyb2w7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsIGJyb3dzZXJzIHVuZGVyIHRlc3QgdGhhdCBzdXBwb3J0IHRvdWNoIGV2ZW50cyBhbHNvIHN1cHBvcnQgdGhlIEhUTUw1IGh0bWxGb3IgYXR0cmlidXRlXG5cdFx0aWYgKGxhYmVsRWxlbWVudC5odG1sRm9yKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGFiZWxFbGVtZW50Lmh0bWxGb3IpO1xuXHRcdH1cblxuXHRcdC8vIElmIG5vIGZvciBhdHRyaWJ1dGUgZXhpc3RzLCBhdHRlbXB0IHRvIHJldHJpZXZlIHRoZSBmaXJzdCBsYWJlbGxhYmxlIGRlc2NlbmRhbnQgZWxlbWVudFxuXHRcdC8vIHRoZSBsaXN0IG9mIHdoaWNoIGlzIGRlZmluZWQgaGVyZTogaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvZm9ybXMuaHRtbCNjYXRlZ29yeS1sYWJlbFxuXHRcdHJldHVybiBsYWJlbEVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLCBpbnB1dDpub3QoW3R5cGU9aGlkZGVuXSksIGtleWdlbiwgbWV0ZXIsIG91dHB1dCwgcHJvZ3Jlc3MsIHNlbGVjdCwgdGV4dGFyZWEnKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBlbmQsIGRldGVybWluZSB3aGV0aGVyIHRvIHNlbmQgYSBjbGljayBldmVudCBhdCBvbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaEVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIGZvckVsZW1lbnQsIHRyYWNraW5nQ2xpY2tTdGFydCwgdGFyZ2V0VGFnTmFtZSwgc2Nyb2xsUGFyZW50LCB0b3VjaCwgdGFyZ2V0RWxlbWVudCA9IHRoaXMudGFyZ2V0RWxlbWVudDtcblxuXHRcdGlmICghdGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBQcmV2ZW50IHBoYW50b20gY2xpY2tzIG9uIGZhc3QgZG91YmxlLXRhcCAoaXNzdWUgIzM2KVxuXHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdGhpcy5sYXN0Q2xpY2tUaW1lKSA8IHRoaXMudGFwRGVsYXkgJiYgKGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMubGFzdENsaWNrVGltZSkgPiAtMSkge1xuXHRcdFx0dGhpcy5jYW5jZWxOZXh0Q2xpY2sgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCkgPiB0aGlzLnRhcFRpbWVvdXQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFJlc2V0IHRvIHByZXZlbnQgd3JvbmcgY2xpY2sgY2FuY2VsIG9uIGlucHV0IChpc3N1ZSAjMTU2KS5cblx0XHR0aGlzLmNhbmNlbE5leHRDbGljayA9IGZhbHNlO1xuXG5cdFx0dGhpcy5sYXN0Q2xpY2tUaW1lID0gZXZlbnQudGltZVN0YW1wO1xuXG5cdFx0dHJhY2tpbmdDbGlja1N0YXJ0ID0gdGhpcy50cmFja2luZ0NsaWNrU3RhcnQ7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cdFx0Ly8gT24gc29tZSBpT1MgZGV2aWNlcywgdGhlIHRhcmdldEVsZW1lbnQgc3VwcGxpZWQgd2l0aCB0aGUgZXZlbnQgaXMgaW52YWxpZCBpZiB0aGUgbGF5ZXJcblx0XHQvLyBpcyBwZXJmb3JtaW5nIGEgdHJhbnNpdGlvbiBvciBzY3JvbGwsIGFuZCBoYXMgdG8gYmUgcmUtZGV0ZWN0ZWQgbWFudWFsbHkuIE5vdGUgdGhhdFxuXHRcdC8vIGZvciB0aGlzIHRvIGZ1bmN0aW9uIGNvcnJlY3RseSwgaXQgbXVzdCBiZSBjYWxsZWQgKmFmdGVyKiB0aGUgZXZlbnQgdGFyZ2V0IGlzIGNoZWNrZWQhXG5cdFx0Ly8gU2VlIGlzc3VlICM1NzsgYWxzbyBmaWxlZCBhcyByZGFyOi8vMTMwNDg1ODkgLlxuXHRcdGlmIChkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQpIHtcblx0XHRcdHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHRcdC8vIEluIGNlcnRhaW4gY2FzZXMgYXJndW1lbnRzIG9mIGVsZW1lbnRGcm9tUG9pbnQgY2FuIGJlIG5lZ2F0aXZlLCBzbyBwcmV2ZW50IHNldHRpbmcgdGFyZ2V0RWxlbWVudCB0byBudWxsXG5cdFx0XHR0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpIHx8IHRhcmdldEVsZW1lbnQ7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudCA9IHRoaXMudGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0VGFnTmFtZSA9IHRhcmdldEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICh0YXJnZXRUYWdOYW1lID09PSAnbGFiZWwnKSB7XG5cdFx0XHRmb3JFbGVtZW50ID0gdGhpcy5maW5kQ29udHJvbCh0YXJnZXRFbGVtZW50KTtcblx0XHRcdGlmIChmb3JFbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0YXJnZXRFbGVtZW50ID0gZm9yRWxlbWVudDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMubmVlZHNGb2N1cyh0YXJnZXRFbGVtZW50KSkge1xuXG5cdFx0XHQvLyBDYXNlIDE6IElmIHRoZSB0b3VjaCBzdGFydGVkIGEgd2hpbGUgYWdvIChiZXN0IGd1ZXNzIGlzIDEwMG1zIGJhc2VkIG9uIHRlc3RzIGZvciBpc3N1ZSAjMzYpIHRoZW4gZm9jdXMgd2lsbCBiZSB0cmlnZ2VyZWQgYW55d2F5LiBSZXR1cm4gZWFybHkgYW5kIHVuc2V0IHRoZSB0YXJnZXQgZWxlbWVudCByZWZlcmVuY2Ugc28gdGhhdCB0aGUgc3Vic2VxdWVudCBjbGljayB3aWxsIGJlIGFsbG93ZWQgdGhyb3VnaC5cblx0XHRcdC8vIENhc2UgMjogV2l0aG91dCB0aGlzIGV4Y2VwdGlvbiBmb3IgaW5wdXQgZWxlbWVudHMgdGFwcGVkIHdoZW4gdGhlIGRvY3VtZW50IGlzIGNvbnRhaW5lZCBpbiBhbiBpZnJhbWUsIHRoZW4gYW55IGlucHV0dGVkIHRleHQgd29uJ3QgYmUgdmlzaWJsZSBldmVuIHRob3VnaCB0aGUgdmFsdWUgYXR0cmlidXRlIGlzIHVwZGF0ZWQgYXMgdGhlIHVzZXIgdHlwZXMgKGlzc3VlICMzNykuXG5cdFx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRyYWNraW5nQ2xpY2tTdGFydCkgPiAxMDAgfHwgKGRldmljZUlzSU9TICYmIHdpbmRvdy50b3AgIT09IHdpbmRvdyAmJiB0YXJnZXRUYWdOYW1lID09PSAnaW5wdXQnKSkge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR0aGlzLnNlbmRDbGljayh0YXJnZXRFbGVtZW50LCBldmVudCk7XG5cblx0XHRcdC8vIFNlbGVjdCBlbGVtZW50cyBuZWVkIHRoZSBldmVudCB0byBnbyB0aHJvdWdoIG9uIGlPUyA0LCBvdGhlcndpc2UgdGhlIHNlbGVjdG9yIG1lbnUgd29uJ3Qgb3Blbi5cblx0XHRcdC8vIEFsc28gdGhpcyBicmVha3Mgb3BlbmluZyBzZWxlY3RzIHdoZW4gVm9pY2VPdmVyIGlzIGFjdGl2ZSBvbiBpT1M2LCBpT1M3IChhbmQgcG9zc2libHkgb3RoZXJzKVxuXHRcdFx0aWYgKCFkZXZpY2VJc0lPUyB8fCB0YXJnZXRUYWdOYW1lICE9PSAnc2VsZWN0Jykge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmICFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdFx0Ly8gRG9uJ3Qgc2VuZCBhIHN5bnRoZXRpYyBjbGljayBldmVudCBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHBhcmVudCBsYXllciB0aGF0IHdhcyBzY3JvbGxlZFxuXHRcdFx0Ly8gYW5kIHRoaXMgdGFwIGlzIGJlaW5nIHVzZWQgdG8gc3RvcCB0aGUgc2Nyb2xsaW5nICh1c3VhbGx5IGluaXRpYXRlZCBieSBhIGZsaW5nIC0gaXNzdWUgIzQyKS5cblx0XHRcdHNjcm9sbFBhcmVudCA9IHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHRcdFx0aWYgKHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQuZmFzdENsaWNrTGFzdFNjcm9sbFRvcCAhPT0gc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmV2ZW50IHRoZSBhY3R1YWwgY2xpY2sgZnJvbSBnb2luZyB0aG91Z2ggLSB1bmxlc3MgdGhlIHRhcmdldCBub2RlIGlzIG1hcmtlZCBhcyByZXF1aXJpbmdcblx0XHQvLyByZWFsIGNsaWNrcyBvciBpZiBpdCBpcyBpbiB0aGUgd2hpdGVsaXN0IGluIHdoaWNoIGNhc2Ugb25seSBub24tcHJvZ3JhbW1hdGljIGNsaWNrcyBhcmUgcGVybWl0dGVkLlxuXHRcdGlmICghdGhpcy5uZWVkc0NsaWNrKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5zZW5kQ2xpY2sodGFyZ2V0RWxlbWVudCwgZXZlbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBjYW5jZWwsIHN0b3AgdHJhY2tpbmcgdGhlIGNsaWNrLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaENhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdH07XG5cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIG1vdXNlIGV2ZW50cyB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Nb3VzZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cblx0XHQvLyBJZiBhIHRhcmdldCBlbGVtZW50IHdhcyBuZXZlciBzZXQgKGJlY2F1c2UgYSB0b3VjaCBldmVudCB3YXMgbmV2ZXIgZmlyZWQpIGFsbG93IHRoZSBldmVudFxuXHRcdGlmICghdGhpcy50YXJnZXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZm9yd2FyZGVkVG91Y2hFdmVudCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUHJvZ3JhbW1hdGljYWxseSBnZW5lcmF0ZWQgZXZlbnRzIHRhcmdldGluZyBhIHNwZWNpZmljIGVsZW1lbnQgc2hvdWxkIGJlIHBlcm1pdHRlZFxuXHRcdGlmICghZXZlbnQuY2FuY2VsYWJsZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gRGVyaXZlIGFuZCBjaGVjayB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gc2VlIHdoZXRoZXIgdGhlIG1vdXNlIGV2ZW50IG5lZWRzIHRvIGJlIHBlcm1pdHRlZDtcblx0XHQvLyB1bmxlc3MgZXhwbGljaXRseSBlbmFibGVkLCBwcmV2ZW50IG5vbi10b3VjaCBjbGljayBldmVudHMgZnJvbSB0cmlnZ2VyaW5nIGFjdGlvbnMsXG5cdFx0Ly8gdG8gcHJldmVudCBnaG9zdC9kb3VibGVjbGlja3MuXG5cdFx0aWYgKCF0aGlzLm5lZWRzQ2xpY2sodGhpcy50YXJnZXRFbGVtZW50KSB8fCB0aGlzLmNhbmNlbE5leHRDbGljaykge1xuXG5cdFx0XHQvLyBQcmV2ZW50IGFueSB1c2VyLWFkZGVkIGxpc3RlbmVycyBkZWNsYXJlZCBvbiBGYXN0Q2xpY2sgZWxlbWVudCBmcm9tIGJlaW5nIGZpcmVkLlxuXHRcdFx0aWYgKGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuXHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFydCBvZiB0aGUgaGFjayBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IEV2ZW50I3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoZS5nLiBBbmRyb2lkIDIpXG5cdFx0XHRcdGV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbmNlbCB0aGUgZXZlbnRcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBtb3VzZSBldmVudCBpcyBwZXJtaXR0ZWQsIHJldHVybiB0cnVlIGZvciB0aGUgYWN0aW9uIHRvIGdvIHRocm91Z2guXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gYWN0dWFsIGNsaWNrcywgZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhIHRvdWNoLWdlbmVyYXRlZCBjbGljaywgYSBjbGljayBhY3Rpb24gb2NjdXJyaW5nXG5cdCAqIG5hdHVyYWxseSBhZnRlciBhIGRlbGF5IGFmdGVyIGEgdG91Y2ggKHdoaWNoIG5lZWRzIHRvIGJlIGNhbmNlbGxlZCB0byBhdm9pZCBkdXBsaWNhdGlvbiksIG9yXG5cdCAqIGFuIGFjdHVhbCBjbGljayB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHBlcm1pdHRlZDtcblxuXHRcdC8vIEl0J3MgcG9zc2libGUgZm9yIGFub3RoZXIgRmFzdENsaWNrLWxpa2UgbGlicmFyeSBkZWxpdmVyZWQgd2l0aCB0aGlyZC1wYXJ0eSBjb2RlIHRvIGZpcmUgYSBjbGljayBldmVudCBiZWZvcmUgRmFzdENsaWNrIGRvZXMgKGlzc3VlICM0NCkuIEluIHRoYXQgY2FzZSwgc2V0IHRoZSBjbGljay10cmFja2luZyBmbGFnIGJhY2sgdG8gZmFsc2UgYW5kIHJldHVybiBlYXJseS4gVGhpcyB3aWxsIGNhdXNlIG9uVG91Y2hFbmQgdG8gcmV0dXJuIGVhcmx5LlxuXHRcdGlmICh0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFZlcnkgb2RkIGJlaGF2aW9yIG9uIGlPUyAoaXNzdWUgIzE4KTogaWYgYSBzdWJtaXQgZWxlbWVudCBpcyBwcmVzZW50IGluc2lkZSBhIGZvcm0gYW5kIHRoZSB1c2VyIGhpdHMgZW50ZXIgaW4gdGhlIGlPUyBzaW11bGF0b3Igb3IgY2xpY2tzIHRoZSBHbyBidXR0b24gb24gdGhlIHBvcC11cCBPUyBrZXlib2FyZCB0aGUgYSBraW5kIG9mICdmYWtlJyBjbGljayBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCB3aXRoIHRoZSBzdWJtaXQtdHlwZSBpbnB1dCBlbGVtZW50IGFzIHRoZSB0YXJnZXQuXG5cdFx0aWYgKGV2ZW50LnRhcmdldC50eXBlID09PSAnc3VibWl0JyAmJiBldmVudC5kZXRhaWwgPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHBlcm1pdHRlZCA9IHRoaXMub25Nb3VzZShldmVudCk7XG5cblx0XHQvLyBPbmx5IHVuc2V0IHRhcmdldEVsZW1lbnQgaWYgdGhlIGNsaWNrIGlzIG5vdCBwZXJtaXR0ZWQuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCB0aGUgY2hlY2sgZm9yICF0YXJnZXRFbGVtZW50IGluIG9uTW91c2UgZmFpbHMgYW5kIHRoZSBicm93c2VyJ3MgY2xpY2sgZG9lc24ndCBnbyB0aHJvdWdoLlxuXHRcdGlmICghcGVybWl0dGVkKSB7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblxuXHRcdC8vIElmIGNsaWNrcyBhcmUgcGVybWl0dGVkLCByZXR1cm4gdHJ1ZSBmb3IgdGhlIGFjdGlvbiB0byBnbyB0aHJvdWdoLlxuXHRcdHJldHVybiBwZXJtaXR0ZWQ7XG5cdH07XG5cblxuXHQvKipcblx0ICogUmVtb3ZlIGFsbCBGYXN0Q2xpY2sncyBldmVudCBsaXN0ZW5lcnMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGxheWVyID0gdGhpcy5sYXllcjtcblxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCBmYWxzZSk7XG5cdH07XG5cblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciBGYXN0Q2xpY2sgaXMgbmVlZGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICovXG5cdEZhc3RDbGljay5ub3ROZWVkZWQgPSBmdW5jdGlvbihsYXllcikge1xuXHRcdHZhciBtZXRhVmlld3BvcnQ7XG5cdFx0dmFyIGNocm9tZVZlcnNpb247XG5cdFx0dmFyIGJsYWNrYmVycnlWZXJzaW9uO1xuXHRcdHZhciBmaXJlZm94VmVyc2lvbjtcblxuXHRcdC8vIERldmljZXMgdGhhdCBkb24ndCBzdXBwb3J0IHRvdWNoIGRvbid0IG5lZWQgRmFzdENsaWNrXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hyb21lIHZlcnNpb24gLSB6ZXJvIGZvciBvdGhlciBicm93c2Vyc1xuXHRcdGNocm9tZVZlcnNpb24gPSArKC9DaHJvbWVcXC8oWzAtOV0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBbLDBdKVsxXTtcblxuXHRcdGlmIChjaHJvbWVWZXJzaW9uKSB7XG5cblx0XHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXG5cdFx0XHRcdGlmIChtZXRhVmlld3BvcnQpIHtcblx0XHRcdFx0XHQvLyBDaHJvbWUgb24gQW5kcm9pZCB3aXRoIHVzZXItc2NhbGFibGU9XCJub1wiIGRvZXNuJ3QgbmVlZCBGYXN0Q2xpY2sgKGlzc3VlICM4OSlcblx0XHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIENocm9tZSAzMiBhbmQgYWJvdmUgd2l0aCB3aWR0aD1kZXZpY2Utd2lkdGggb3IgbGVzcyBkb24ndCBuZWVkIEZhc3RDbGlja1xuXHRcdFx0XHRcdGlmIChjaHJvbWVWZXJzaW9uID4gMzEgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gQ2hyb21lIGRlc2t0b3AgZG9lc24ndCBuZWVkIEZhc3RDbGljayAoaXNzdWUgIzE1KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGRldmljZUlzQmxhY2tCZXJyeTEwKSB7XG5cdFx0XHRibGFja2JlcnJ5VmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1ZlcnNpb25cXC8oWzAtOV0qKVxcLihbMC05XSopLyk7XG5cblx0XHRcdC8vIEJsYWNrQmVycnkgMTAuMysgZG9lcyBub3QgcmVxdWlyZSBGYXN0Y2xpY2sgbGlicmFyeS5cblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mdGxhYnMvZmFzdGNsaWNrL2lzc3Vlcy8yNTFcblx0XHRcdGlmIChibGFja2JlcnJ5VmVyc2lvblsxXSA+PSAxMCAmJiBibGFja2JlcnJ5VmVyc2lvblsyXSA+PSAzKSB7XG5cdFx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuXHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0KSB7XG5cdFx0XHRcdFx0Ly8gdXNlci1zY2FsYWJsZT1ubyBlbGltaW5hdGVzIGNsaWNrIGRlbGF5LlxuXHRcdFx0XHRcdGlmIChtZXRhVmlld3BvcnQuY29udGVudC5pbmRleE9mKCd1c2VyLXNjYWxhYmxlPW5vJykgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gd2lkdGg9ZGV2aWNlLXdpZHRoIChvciBsZXNzIHRoYW4gZGV2aWNlLXdpZHRoKSBlbGltaW5hdGVzIGNsaWNrIGRlbGF5LlxuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElFMTAgd2l0aCAtbXMtdG91Y2gtYWN0aW9uOiBub25lIG9yIG1hbmlwdWxhdGlvbiwgd2hpY2ggZGlzYWJsZXMgZG91YmxlLXRhcC10by16b29tIChpc3N1ZSAjOTcpXG5cdFx0aWYgKGxheWVyLnN0eWxlLm1zVG91Y2hBY3Rpb24gPT09ICdub25lJyB8fCBsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ21hbmlwdWxhdGlvbicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIEZpcmVmb3ggdmVyc2lvbiAtIHplcm8gZm9yIG90aGVyIGJyb3dzZXJzXG5cdFx0ZmlyZWZveFZlcnNpb24gPSArKC9GaXJlZm94XFwvKFswLTldKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgWywwXSlbMV07XG5cblx0XHRpZiAoZmlyZWZveFZlcnNpb24gPj0gMjcpIHtcblx0XHRcdC8vIEZpcmVmb3ggMjcrIGRvZXMgbm90IGhhdmUgdGFwIGRlbGF5IGlmIHRoZSBjb250ZW50IGlzIG5vdCB6b29tYWJsZSAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTkyMjg5NlxuXG5cdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cdFx0XHRpZiAobWV0YVZpZXdwb3J0ICYmIChtZXRhVmlld3BvcnQuY29udGVudC5pbmRleE9mKCd1c2VyLXNjYWxhYmxlPW5vJykgIT09IC0xIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSUUxMTogcHJlZml4ZWQgLW1zLXRvdWNoLWFjdGlvbiBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGFuZCBpdCdzIHJlY29tbWVuZGVkIHRvIHVzZSBub24tcHJlZml4ZWQgdmVyc2lvblxuXHRcdC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS93aW5kb3dzL2FwcHMvSGg3NjczMTMuYXNweFxuXHRcdGlmIChsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ25vbmUnIHx8IGxheWVyLnN0eWxlLnRvdWNoQWN0aW9uID09PSAnbWFuaXB1bGF0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEZhY3RvcnkgbWV0aG9kIGZvciBjcmVhdGluZyBhIEZhc3RDbGljayBvYmplY3Rcblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzXG5cdCAqL1xuXHRGYXN0Q2xpY2suYXR0YWNoID0gZnVuY3Rpb24obGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gbmV3IEZhc3RDbGljayhsYXllciwgb3B0aW9ucyk7XG5cdH07XG5cbiAgd2luZG93LkZhc3RDbGljayA9IEZhc3RDbGljaztcbn0oKSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBERUZBVUxUX1ZJRVdQT1JUID0gJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsbWF4aW11bS1zY2FsZT0xLG1pbmltdW0tc2NhbGU9MSx1c2VyLXNjYWxhYmxlPW5vJztcblxuICB2YXIgVmlld3BvcnQgPSB7IFxuICAgIGVuc3VyZVZpZXdwb3J0RWxlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmlld3BvcnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXG4gICAgICBpZiAoIXZpZXdwb3J0RWxlbWVudCkge1xuICAgICAgICB2aWV3cG9ydEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG4gICAgICAgIHZpZXdwb3J0RWxlbWVudC5uYW1lID0gJ3ZpZXdwb3J0JztcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh2aWV3cG9ydEVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmlld3BvcnRFbGVtZW50O1xuICAgIH0sXG5cbiAgICBzZXR1cDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmlld3BvcnRFbGVtZW50ID0gVmlld3BvcnQuZW5zdXJlVmlld3BvcnRFbGVtZW50KCk7XG5cbiAgICAgIGlmICghdmlld3BvcnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2aWV3cG9ydEVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250ZW50JykpIHtcbiAgICAgICAgdmlld3BvcnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudCcsIERFRkFVTFRfVklFV1BPUlQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3aW5kb3cuVmlld3BvcnQgPSBWaWV3cG9ydDtcbn0pKCk7XG4iLCIvLyBMb2FkIG5vbi1wb2x5ZmlsbCBsaWJyYXJpZXNcbmltcG9ydCAnLi9GYXN0Q2xpY2tAMS4wLjYrbW9kL2Zhc3RjbGljay5qcyc7XG4vLyBpbXBvcnQgJy4vbWljcm9ldmVudC5qc0A0N2NiYzE0K21vZC9taWNyb2V2ZW50LmpzJztcbmltcG9ydCAnLi92aWV3cG9ydC5qcyc7XG4iLCJpbXBvcnQgJy4vb25zL3BsYXRmb3JtJzsgLy8gVGhpcyBmaWxlIG11c3QgYmUgbG9hZGVkIGJlZm9yZSBDdXN0b20gRWxlbWVudHMgcG9seWZpbGxzLlxuaW1wb3J0ICcuL3BvbHlmaWxscy9pbmRleC5qcyc7XG5pbXBvcnQgJy4vdmVuZG9yL2luZGV4LmpzJztcbmltcG9ydCAnLi9vbnMvbWljcm9ldmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwKG9ucykge1xuICBpZiAod2luZG93Ll9vbnNMb2FkZWQpIHtcbiAgICBvbnMuX3V0aWwud2FybignT25zZW4gVUkgaXMgbG9hZGVkIG1vcmUgdGhhbiBvbmNlLicpO1xuICB9XG4gIHdpbmRvdy5fb25zTG9hZGVkID0gdHJ1ZTtcblxuICAvLyBmYXN0Y2xpY2tcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgb25zLmZhc3RDbGljayA9IEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSk7XG5cbiAgICBjb25zdCBzdXBwb3J0VG91Y2hBY3Rpb24gPSAndG91Y2gtYWN0aW9uJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgb25zLnBsYXRmb3JtLl9ydW5PbkFjdHVhbFBsYXRmb3JtKCgpID0+IHtcbiAgICAgIGlmIChvbnMucGxhdGZvcm0uaXNBbmRyb2lkKCkpIHtcbiAgICAgICAgLy8gSW4gQW5kcm9pZDQuNCssIGNvcnJlY3Qgdmlld3BvcnQgc2V0dGluZ3MgY2FuIHJlbW92ZSBjbGljayBkZWxheS5cbiAgICAgICAgLy8gU28gZGlzYWJsZSBGYXN0Q2xpY2sgb24gQW5kcm9pZC5cbiAgICAgICAgb25zLmZhc3RDbGljay5kZXN0cm95KCk7XG4gICAgICB9IGVsc2UgaWYgKG9ucy5wbGF0Zm9ybS5pc0lPUygpKSB7XG4gICAgICAgIGlmIChzdXBwb3J0VG91Y2hBY3Rpb24gJiYgKG9ucy5wbGF0Zm9ybS5pc0lPU1NhZmFyaSgpIHx8IG9ucy5wbGF0Zm9ybS5pc1dLV2ViVmlldygpKSkge1xuICAgICAgICAgIC8vIElmICd0b3VjaC1hY3Rpb24nIHN1cHBvcnRlZCBpbiBpT1MgU2FmYXJpIG9yIFdLV2ViVmlldywgZGlzYWJsZSBGYXN0Q2xpY2suXG4gICAgICAgICAgb25zLmZhc3RDbGljay5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRG8gbm90aGluZy4gJ3RvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uJyBoYXMgbm8gZWZmZWN0IG9uIFVJV2ViVmlldy5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LCBmYWxzZSk7XG5cbiAgb25zLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIG9ucy5lbmFibGVEZXZpY2VCYWNrQnV0dG9uSGFuZGxlcigpO1xuICAgIG9ucy5fZGVmYXVsdERldmljZUJhY2tCdXR0b25IYW5kbGVyID0gb25zLl9pbnRlcm5hbC5kYmJEaXNwYXRjaGVyLmNyZWF0ZUhhbmRsZXIod2luZG93LmRvY3VtZW50LmJvZHksICgpID0+IHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChuYXZpZ2F0b3IsICdhcHAnKSkge1xuICAgICAgICBuYXZpZ2F0b3IuYXBwLmV4aXRBcHAoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IGNsb3NlIHRoZSBhcHAuIElzIFxcJ2NvcmRvdmEuanNcXCcgaW5jbHVkZWQ/XFxuRXJyb3I6IFxcJ3dpbmRvdy5uYXZpZ2F0b3IuYXBwXFwnIGlzIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5Ll9nZXN0dXJlRGV0ZWN0b3IgPSBuZXcgb25zLkdlc3R1cmVEZXRlY3Rvcihkb2N1bWVudC5ib2R5KTtcblxuICAgIC8vIFNpbXVsYXRlIERldmljZSBCYWNrIEJ1dHRvbiBvbiBFU0MgcHJlc3NcbiAgICBpZiAoIW9ucy5wbGF0Zm9ybS5pc1dlYlZpZXcoKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgb25zLmZpcmVEZXZpY2VCYWNrQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBzZXR1cCBsb2FkaW5nIHBsYWNlaG9sZGVyXG4gICAgb25zLl9zZXR1cExvYWRpbmdQbGFjZUhvbGRlcnMoKTtcbiAgfSk7XG5cbiAgLy8gdmlld3BvcnQuanNcbiAgVmlld3BvcnQuc2V0dXAoKTtcbn1cbiIsImltcG9ydCBvbnMgZnJvbSAnLi9vbnMnOyAvLyBFeHRlcm5hbCBkZXBlbmRlbmN5LCBhbHdheXMgaG9pc3RlZFxuaW1wb3J0IHNldHVwIGZyb20gJy4vc2V0dXAnOyAvLyBBZGQgcG9seWZpbGxzXG5cbnNldHVwKG9ucyk7IC8vIFNldHVwIGluaXRpYWwgbGlzdGVuZXJzXG5cbmV4cG9ydCBkZWZhdWx0IG9ucztcbiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXN0b21FbGVtZW50cyIsImZvcmNlUG9seWZpbGwiLCJnbG9iYWwiLCJtb2R1bGUiLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCJpdCIsImlzT2JqZWN0IiwiVHlwZUVycm9yIiwiZXhlYyIsImUiLCJyZXF1aXJlJCQwIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwiZG9jdW1lbnQiLCJpcyIsImNyZWF0ZUVsZW1lbnQiLCJyZXF1aXJlJCQxIiwicmVxdWlyZSQkMiIsIlMiLCJmbiIsInZhbCIsInRvU3RyaW5nIiwiY2FsbCIsInZhbHVlT2YiLCJkUCIsIk8iLCJQIiwiQXR0cmlidXRlcyIsInRvUHJpbWl0aXZlIiwiSUU4X0RPTV9ERUZJTkUiLCJ2YWx1ZSIsImJpdG1hcCIsIm9iamVjdCIsImtleSIsImYiLCJjcmVhdGVEZXNjIiwiaGFzT3duUHJvcGVydHkiLCJpZCIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwidW5kZWZpbmVkIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwic3BsaXQiLCJpbnNwZWN0U291cmNlIiwic2FmZSIsImlzRnVuY3Rpb24iLCJoYXMiLCJoaWRlIiwiam9pbiIsIlN0cmluZyIsInByb3RvdHlwZSIsInRoYXQiLCJsZW5ndGgiLCJiIiwiYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiUFJPVE9UWVBFIiwiJGV4cG9ydCIsInR5cGUiLCJuYW1lIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiRiIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJCIiwidGFyZ2V0IiwiZXhwb3J0cyIsImV4cFByb3RvIiwib3duIiwib3V0IiwiZXhwIiwiY3R4IiwicmVkZWZpbmUiLCJVIiwiVyIsIlIiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInNsaWNlIiwiY29mIiwiSU9iamVjdCIsImRlZmluZWQiLCJnT1BEIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidG9JT2JqZWN0IiwicElFIiwiY2hlY2siLCJwcm90byIsInNldFByb3RvdHlwZU9mIiwidGVzdCIsImJ1Z2d5Iiwic2V0IiwiQXJyYXkiLCJfX3Byb3RvX18iLCJTSEFSRUQiLCJzdG9yZSIsIlN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsInVpZCIsIlRBRyIsIkFSRyIsInRyeUdldCIsIlQiLCJjYWxsZWUiLCJjbGFzc29mIiwiY2VpbCIsImZsb29yIiwiaXNOYU4iLCJwb3MiLCJzIiwiaSIsInRvSW50ZWdlciIsImwiLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwibWluIiwibWF4IiwiaW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJ0b0xlbmd0aCIsInRvQWJzb2x1dGVJbmRleCIsInNoYXJlZCIsImFycmF5SW5kZXhPZiIsIklFX1BST1RPIiwibmFtZXMiLCJyZXN1bHQiLCJwdXNoIiwia2V5cyIsIiRrZXlzIiwiZW51bUJ1Z0tleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiUHJvcGVydGllcyIsImdldEtleXMiLCJkb2N1bWVudEVsZW1lbnQiLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsInNyYyIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImNyZWF0ZSIsImFuT2JqZWN0IiwiZFBzIiwiZGVmIiwidGFnIiwic3RhdCIsImNvbmZpZ3VyYWJsZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiQ29uc3RydWN0b3IiLCJOQU1FIiwibmV4dCIsImRlc2NyaXB0b3IiLCJPYmplY3RQcm90byIsImdldFByb3RvdHlwZU9mIiwidG9PYmplY3QiLCJjb25zdHJ1Y3RvciIsIklURVJBVE9SIiwiQlVHR1kiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiQmFzZSIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJraW5kIiwidmFsdWVzIiwiZW50cmllcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwibWV0aG9kcyIsIkxJQlJBUlkiLCIkYXQiLCJpdGVyYXRlZCIsIl90IiwiX2kiLCJwb2ludCIsImRvbmUiLCJVTlNDT1BBQkxFUyIsIkFycmF5UHJvdG8iLCJfayIsInN0ZXAiLCJJdGVyYXRvcnMiLCJBcmd1bWVudHMiLCJhZGRUb1Vuc2NvcGFibGVzIiwid2tzIiwiVE9fU1RSSU5HX1RBRyIsIkFycmF5VmFsdWVzIiwiRE9NSXRlcmFibGVzIiwiY29sbGVjdGlvbnMiLCJleHBsaWNpdCIsIkNvbGxlY3Rpb24iLCIkaXRlcmF0b3JzIiwiZm9yYmlkZGVuRmllbGQiLCJpdGVyYXRvciIsInJldCIsImdldEl0ZXJhdG9yTWV0aG9kIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyYWJsZSIsIml0ZXJGbiIsImdldEl0ZXJGbiIsImlzQXJyYXlJdGVyIiwiU1BFQ0lFUyIsIktFWSIsIkMiLCJERVNDUklQVE9SUyIsIk1FVEEiLCJzZXREZXNjIiwiaXNFeHRlbnNpYmxlIiwiRlJFRVpFIiwicHJldmVudEV4dGVuc2lvbnMiLCJzZXRNZXRhIiwiZmFzdEtleSIsImdldFdlYWsiLCJ3Iiwib25GcmVlemUiLCJtZXRhIiwiTkVFRCIsIlRZUEUiLCJTSVpFIiwiZ2V0RW50cnkiLCJlbnRyeSIsIl9mIiwibiIsImsiLCJ3cmFwcGVyIiwiSVNfTUFQIiwiQURERVIiLCJfbCIsImZvck9mIiwiY2xlYXIiLCJ2YWxpZGF0ZSIsImRhdGEiLCJyIiwicCIsInByZXYiLCJmb3JFYWNoIiwiY2FsbGJhY2tmbiIsInYiLCJTQUZFX0NMT1NJTkciLCJyaXRlciIsInNraXBDbG9zaW5nIiwiYXJyIiwiaXRlciIsImNvbW1vbiIsIklTX1dFQUsiLCJmaXhNZXRob2QiLCJhZGQiLCJmYWlscyIsImdldENvbnN0cnVjdG9yIiwiaW5zdGFuY2UiLCJIQVNOVF9DSEFJTklORyIsIlRIUk9XU19PTl9QUklNSVRJVkVTIiwiQUNDRVBUX0lURVJBQkxFUyIsIiRpdGVyRGV0ZWN0IiwiQlVHR1lfWkVSTyIsIiRpbnN0YW5jZSIsImluaGVyaXRJZlJlcXVpcmVkIiwic2V0U3Ryb25nIiwiU0VUIiwiU2V0Iiwic3Ryb25nIiwidG9KU09OIiwiZnJvbSIsIkNPTExFQ1RJT04iLCJvZiIsIkEiLCJtYXBGbiIsIm1hcHBpbmciLCJjYiIsImFGdW5jdGlvbiIsIm5leHRJdGVtIiwicmVxdWlyZSQkNyIsIk1BUCIsIk1hcCIsImlzQXJyYXkiLCJhcmciLCJvcmlnaW5hbCIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIiRjcmVhdGUiLCJJU19GSUxURVIiLCJJU19TT01FIiwiSVNfRVZFUlkiLCJJU19GSU5EX0lOREVYIiwiTk9fSE9MRVMiLCJhc2MiLCJyZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCIkYXNzaWduIiwiYXNzaWduIiwiSyIsImFMZW4iLCJnZXRTeW1ib2xzIiwiZ09QUyIsImlzRW51bSIsImoiLCJhcnJheUZpbmQiLCJjcmVhdGVBcnJheU1ldGhvZCIsImFycmF5RmluZEluZGV4IiwidW5jYXVnaHRGcm96ZW5TdG9yZSIsIlVuY2F1Z2h0RnJvemVuU3RvcmUiLCJmaW5kVW5jYXVnaHRGcm96ZW4iLCJzcGxpY2UiLCIkaGFzIiwiZWFjaCIsIldFQUtfTUFQIiwid2VhayIsInVmc3RvcmUiLCJ0bXAiLCJJbnRlcm5hbE1hcCIsIldlYWtNYXAiLCIkV2Vha01hcCIsImZyZWV6ZSIsIm1ldGhvZCIsInJlcXVpcmUkJDUiLCJyZXNlcnZlZFRhZ0xpc3QiLCJpc1ZhbGlkQ3VzdG9tRWxlbWVudE5hbWUiLCJsb2NhbE5hbWUiLCJyZXNlcnZlZCIsInZhbGlkRm9ybSIsImlzQ29ubmVjdGVkIiwibm9kZSIsIm5hdGl2ZVZhbHVlIiwiY3VycmVudCIsIl9fQ0VfaXNJbXBvcnREb2N1bWVudCIsIkRvY3VtZW50IiwicGFyZW50Tm9kZSIsIlNoYWRvd1Jvb3QiLCJob3N0IiwibmV4dFNpYmxpbmdPckFuY2VzdG9yU2libGluZyIsInJvb3QiLCJzdGFydCIsIm5leHRTaWJsaW5nIiwibmV4dE5vZGUiLCJmaXJzdENoaWxkIiwid2Fsa0RlZXBEZXNjZW5kYW50RWxlbWVudHMiLCJjYWxsYmFjayIsInZpc2l0ZWRJbXBvcnRzIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImltcG9ydE5vZGUiLCJpbXBvcnQiLCJjaGlsZCIsInNoYWRvd1Jvb3QiLCJfX0NFX3NoYWRvd1Jvb3QiLCJzZXRQcm9wZXJ0eVVuY2hlY2tlZCIsImRlc3RpbmF0aW9uIiwiQ3VzdG9tRWxlbWVudFN0YXRlIiwiQ3VzdG9tRWxlbWVudEludGVybmFscyIsIl9sb2NhbE5hbWVUb0RlZmluaXRpb24iLCJfY29uc3RydWN0b3JUb0RlZmluaXRpb24iLCJfcGF0Y2hlcyIsIl9oYXNQYXRjaGVzIiwiZGVmaW5pdGlvbiIsImxpc3RlbmVyIiwicGF0Y2giLCJfX0NFX3BhdGNoZWQiLCJlbGVtZW50cyIsIl9fQ0Vfc3RhdGUiLCJDRVN0YXRlIiwiY3VzdG9tIiwiVXRpbGl0aWVzIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJ1cGdyYWRlRWxlbWVudCIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiZ2F0aGVyRWxlbWVudHMiLCJyZWFkeVN0YXRlIiwiX19DRV9oYXNSZWdpc3RyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQiLCJkZWxldGUiLCJwYXRjaEFuZFVwZ3JhZGVUcmVlIiwiY3VycmVudFN0YXRlIiwibG9jYWxOYW1lVG9EZWZpbml0aW9uIiwiY29uc3RydWN0aW9uU3RhY2siLCJFcnJvciIsInBvcCIsImZhaWxlZCIsIl9fQ0VfZGVmaW5pdGlvbiIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIm9ic2VydmVkQXR0cmlidXRlcyIsIl9fQ0VfaXNDb25uZWN0ZWRDYWxsYmFja0NhbGxlZCIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJuYW1lc3BhY2UiLCJpbmRleE9mIiwiRG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlciIsImludGVybmFscyIsImRvYyIsIl9pbnRlcm5hbHMiLCJfZG9jdW1lbnQiLCJfb2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiX2hhbmRsZU11dGF0aW9ucyIsImJpbmQiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsIm11dGF0aW9ucyIsImFkZGVkTm9kZXMiLCJEZWZlcnJlZCIsIl92YWx1ZSIsIl9yZXNvbHZlIiwiX3Byb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsIkN1c3RvbUVsZW1lbnRSZWdpc3RyeSIsIl9lbGVtZW50RGVmaW5pdGlvbklzUnVubmluZyIsIl93aGVuRGVmaW5lZERlZmVycmVkIiwiX2ZsdXNoQ2FsbGJhY2siLCJfZmx1c2hQZW5kaW5nIiwiX3VuZmx1c2hlZExvY2FsTmFtZXMiLCJfZG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlciIsIlN5bnRheEVycm9yIiwiYWRvcHRlZENhbGxiYWNrIiwiZ2V0Q2FsbGJhY2siLCJjYWxsYmFja1ZhbHVlIiwic2V0RGVmaW5pdGlvbiIsIl9mbHVzaCIsInNoaWZ0IiwiZGVmZXJyZWQiLCJyZWplY3QiLCJwcmlvciIsInRvUHJvbWlzZSIsIm91dGVyIiwiaW5uZXIiLCJmbHVzaCIsImRlZmluZSIsIndoZW5EZWZpbmVkIiwicG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayIsImNyZWF0ZUVsZW1lbnROUyIsImNsb25lTm9kZSIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwicmVwbGFjZUNoaWxkIiwiRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlTlMiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsIkhUTUxFbGVtZW50IiwiQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyIiwiY29uc3RydWN0b3JUb0RlZmluaXRpb24iLCJOYXRpdmUiLCJEb2N1bWVudF9jcmVhdGVFbGVtZW50IiwibGFzdEluZGV4IiwiYnVpbHRJbiIsIm5vZGVzIiwiY29ubmVjdGVkQmVmb3JlIiwiZmlsdGVyIiwicHJlcGVuZCIsImRpc2Nvbm5lY3RUcmVlIiwiY29ubmVjdFRyZWUiLCJhcHBlbmQiLCJkZWVwIiwiY2xvbmUiLCJEb2N1bWVudF9pbXBvcnROb2RlIiwicGF0Y2hUcmVlIiwiTlNfSFRNTCIsIkRvY3VtZW50X2NyZWF0ZUVsZW1lbnROUyIsIkRvY3VtZW50X3ByZXBlbmQiLCJEb2N1bWVudF9hcHBlbmQiLCJyZWZOb2RlIiwiRG9jdW1lbnRGcmFnbWVudCIsImluc2VydGVkTm9kZXMiLCJjaGlsZE5vZGVzIiwibmF0aXZlUmVzdWx0IiwiTm9kZV9pbnNlcnRCZWZvcmUiLCJub2RlV2FzQ29ubmVjdGVkIiwiTm9kZV9hcHBlbmRDaGlsZCIsIk5vZGVfY2xvbmVOb2RlIiwib3duZXJEb2N1bWVudCIsIk5vZGVfcmVtb3ZlQ2hpbGQiLCJub2RlVG9JbnNlcnQiLCJub2RlVG9SZW1vdmUiLCJOb2RlX3JlcGxhY2VDaGlsZCIsIm5vZGVUb0luc2VydFdhc0Nvbm5lY3RlZCIsInRoaXNJc0Nvbm5lY3RlZCIsInBhdGNoX3RleHRDb250ZW50IiwiYmFzZURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiYXNzaWduZWRWYWx1ZSIsIlRFWFRfTk9ERSIsInJlbW92ZWROb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJOb2RlX3RleHRDb250ZW50IiwiYWRkUGF0Y2giLCJwYXJ0cyIsInRleHRDb250ZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJiZWZvcmUiLCJhZnRlciIsIndhc0Nvbm5lY3RlZCIsInJlcGxhY2VXaXRoIiwicmVtb3ZlIiwiRWxlbWVudF9hdHRhY2hTaGFkb3ciLCJpbml0Iiwid2FybiIsInBhdGNoX2lubmVySFRNTCIsImh0bWxTdHJpbmciLCJyZW1vdmVkRWxlbWVudHMiLCJFbGVtZW50X2lubmVySFRNTCIsIkhUTUxFbGVtZW50X2lubmVySFRNTCIsInJhd0RpdiIsImlubmVySFRNTCIsImNvbnRlbnQiLCJFbGVtZW50X3NldEF0dHJpYnV0ZSIsIkVsZW1lbnRfZ2V0QXR0cmlidXRlIiwiRWxlbWVudF9zZXRBdHRyaWJ1dGVOUyIsIkVsZW1lbnRfZ2V0QXR0cmlidXRlTlMiLCJFbGVtZW50X3JlbW92ZUF0dHJpYnV0ZSIsIkVsZW1lbnRfcmVtb3ZlQXR0cmlidXRlTlMiLCJwYXRjaF9pbnNlcnRBZGphY2VudEVsZW1lbnQiLCJiYXNlTWV0aG9kIiwid2hlcmUiLCJpbnNlcnRlZEVsZW1lbnQiLCJIVE1MRWxlbWVudF9pbnNlcnRBZGphY2VudEVsZW1lbnQiLCJFbGVtZW50X2luc2VydEFkamFjZW50RWxlbWVudCIsIkVsZW1lbnRfcHJlcGVuZCIsIkVsZW1lbnRfYXBwZW5kIiwiRWxlbWVudF9iZWZvcmUiLCJFbGVtZW50X2FmdGVyIiwiRWxlbWVudF9yZXBsYWNlV2l0aCIsIkVsZW1lbnRfcmVtb3ZlIiwicHJpb3JDdXN0b21FbGVtZW50cyIsIkpzTXV0YXRpb25PYnNlcnZlciIsInJlZ2lzdHJhdGlvbnNUYWJsZSIsInNldEltbWVkaWF0ZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInNldFRpbWVvdXQiLCJzZXRJbW1lZGlhdGVRdWV1ZSIsInNlbnRpbmVsIiwicXVldWUiLCJmdW5jIiwicG9zdE1lc3NhZ2UiLCJpc1NjaGVkdWxlZCIsInNjaGVkdWxlZE9ic2VydmVycyIsInNjaGVkdWxlQ2FsbGJhY2siLCJvYnNlcnZlciIsImRpc3BhdGNoQ2FsbGJhY2tzIiwid3JhcElmTmVlZGVkIiwiU2hhZG93RE9NUG9seWZpbGwiLCJvYnNlcnZlcnMiLCJzb3J0IiwibzEiLCJvMiIsInVpZF8iLCJhbnlOb25FbXB0eSIsInRha2VSZWNvcmRzIiwiY2FsbGJhY2tfIiwicmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzRm9yIiwibm9kZXNfIiwicmVnaXN0cmF0aW9ucyIsInJlZ2lzdHJhdGlvbiIsInJlbW92ZVRyYW5zaWVudE9ic2VydmVycyIsImZvckVhY2hBbmNlc3RvckFuZE9ic2VydmVyRW5xdWV1ZVJlY29yZCIsIm9wdGlvbnMiLCJzdWJ0cmVlIiwicmVjb3JkIiwiZW5xdWV1ZSIsInVpZENvdW50ZXIiLCJyZWNvcmRzXyIsImNoaWxkTGlzdCIsImF0dHJpYnV0ZXMiLCJjaGFyYWN0ZXJEYXRhIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCJjaGFyYWN0ZXJEYXRhT2xkVmFsdWUiLCJyZW1vdmVMaXN0ZW5lcnMiLCJSZWdpc3RyYXRpb24iLCJhZGRMaXN0ZW5lcnMiLCJjb3B5T2ZSZWNvcmRzIiwiTXV0YXRpb25SZWNvcmQiLCJwcmV2aW91c1NpYmxpbmciLCJhdHRyaWJ1dGVOYW1lIiwiYXR0cmlidXRlTmFtZXNwYWNlIiwiY29weU11dGF0aW9uUmVjb3JkIiwiY3VycmVudFJlY29yZCIsInJlY29yZFdpdGhPbGRWYWx1ZSIsImdldFJlY29yZCIsImdldFJlY29yZFdpdGhPbGRWYWx1ZSIsImNsZWFyUmVjb3JkcyIsInJlY29yZFJlcHJlc2VudHNDdXJyZW50TXV0YXRpb24iLCJzZWxlY3RSZWNvcmQiLCJsYXN0UmVjb3JkIiwibmV3UmVjb3JkIiwidHJhbnNpZW50T2JzZXJ2ZWROb2RlcyIsInJlY29yZHMiLCJyZWNvcmRUb1JlcGxhY2VMYXN0IiwiYWRkTGlzdGVuZXJzXyIsInJlbW92ZUxpc3RlbmVyc18iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYXR0ck5hbWUiLCJyZWxhdGVkTm9kZSIsIm5hbWVzcGFjZVVSSSIsImF0dHJDaGFuZ2UiLCJNdXRhdGlvbkV2ZW50IiwiQURESVRJT04iLCJwcmV2VmFsdWUiLCJhZGRUcmFuc2llbnRPYnNlcnZlciIsImNoYW5nZWROb2RlIiwiX2lzUG9seWZpbGxlZCIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyIsImFyZ3MiLCJwYXJ0aWFsbHlBcHBsaWVkIiwiaGFuZGxlciIsInJ1bklmUHJlc2VudCIsImhhbmRsZSIsInRhc2siLCJjbGVhckltbWVkaWF0ZSIsImluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uIiwibmV4dFRpY2siLCJjYW5Vc2VQb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzIiwib2xkT25NZXNzYWdlIiwib25tZXNzYWdlIiwiaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24iLCJtZXNzYWdlUHJlZml4Iiwib25HbG9iYWxNZXNzYWdlIiwiZXZlbnQiLCJhdHRhY2hFdmVudCIsImluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uIiwiY2hhbm5lbCIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJwb3J0MiIsImluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24iLCJodG1sIiwic2NyaXB0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbiIsImF0dGFjaFRvIiwicHJvY2VzcyIsIkZhc3RDbGljayIsImxheWVyIiwib2xkT25DbGljayIsInRyYWNraW5nQ2xpY2siLCJ0cmFja2luZ0NsaWNrU3RhcnQiLCJ0YXJnZXRFbGVtZW50IiwidG91Y2hTdGFydFgiLCJ0b3VjaFN0YXJ0WSIsImxhc3RUb3VjaElkZW50aWZpZXIiLCJ0b3VjaEJvdW5kYXJ5IiwidGFwRGVsYXkiLCJ0YXBUaW1lb3V0Iiwibm90TmVlZGVkIiwiY29udGV4dCIsImRldmljZUlzQW5kcm9pZCIsIm9uTW91c2UiLCJvbkNsaWNrIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoRW5kIiwib25Ub3VjaENhbmNlbCIsIkV2ZW50IiwiY2FwdHVyZSIsInJtdiIsImhpamFja2VkIiwiYWR2IiwicHJvcGFnYXRpb25TdG9wcGVkIiwib25jbGljayIsImRldmljZUlzV2luZG93c1Bob25lIiwiZGV2aWNlSXNJT1MiLCJkZXZpY2VJc0lPUzQiLCJkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQiLCJkZXZpY2VJc0JsYWNrQmVycnkxMCIsIm5lZWRzQ2xpY2siLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiZGlzYWJsZWQiLCJjbGFzc05hbWUiLCJuZWVkc0ZvY3VzIiwicmVhZE9ubHkiLCJzZW5kQ2xpY2siLCJjbGlja0V2ZW50IiwidG91Y2giLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsImNoYW5nZWRUb3VjaGVzIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRldGVybWluZUV2ZW50VHlwZSIsInNjcmVlblgiLCJzY3JlZW5ZIiwiY2xpZW50WCIsImNsaWVudFkiLCJmb3J3YXJkZWRUb3VjaEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInRhZ05hbWUiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwidXBkYXRlU2Nyb2xsUGFyZW50Iiwic2Nyb2xsUGFyZW50IiwicGFyZW50RWxlbWVudCIsImZhc3RDbGlja1Njcm9sbFBhcmVudCIsImNvbnRhaW5zIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZmFzdENsaWNrTGFzdFNjcm9sbFRvcCIsInNjcm9sbFRvcCIsImdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQiLCJldmVudFRhcmdldCIsInNlbGVjdGlvbiIsInRhcmdldFRvdWNoZXMiLCJpc0NvbnRlbnRFZGl0YWJsZSIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJpc0NvbGxhcHNlZCIsImlkZW50aWZpZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRpbWVTdGFtcCIsInBhZ2VYIiwicGFnZVkiLCJsYXN0Q2xpY2tUaW1lIiwidG91Y2hIYXNNb3ZlZCIsImJvdW5kYXJ5IiwiYWJzIiwiZmluZENvbnRyb2wiLCJsYWJlbEVsZW1lbnQiLCJjb250cm9sIiwiaHRtbEZvciIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvciIsImZvckVsZW1lbnQiLCJ0YXJnZXRUYWdOYW1lIiwiY2FuY2VsTmV4dENsaWNrIiwiZWxlbWVudEZyb21Qb2ludCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJ0b3AiLCJjYW5jZWxhYmxlIiwic3RvcFByb3BhZ2F0aW9uIiwicGVybWl0dGVkIiwiZGV0YWlsIiwiZGVzdHJveSIsIm1ldGFWaWV3cG9ydCIsImNocm9tZVZlcnNpb24iLCJibGFja2JlcnJ5VmVyc2lvbiIsImZpcmVmb3hWZXJzaW9uIiwib250b3VjaHN0YXJ0Iiwic2Nyb2xsV2lkdGgiLCJvdXRlcldpZHRoIiwibWF0Y2giLCJtc1RvdWNoQWN0aW9uIiwidG91Y2hBY3Rpb24iLCJhdHRhY2giLCJERUZBVUxUX1ZJRVdQT1JUIiwiVmlld3BvcnQiLCJ2aWV3cG9ydEVsZW1lbnQiLCJoZWFkIiwiZW5zdXJlVmlld3BvcnRFbGVtZW50IiwiaGFzQXR0cmlidXRlIiwic2V0dXAiLCJvbnMiLCJfb25zTG9hZGVkIiwiX3V0aWwiLCJmYXN0Q2xpY2siLCJib2R5Iiwic3VwcG9ydFRvdWNoQWN0aW9uIiwicGxhdGZvcm0iLCJfcnVuT25BY3R1YWxQbGF0Zm9ybSIsImlzQW5kcm9pZCIsImlzSU9TIiwiaXNJT1NTYWZhcmkiLCJpc1dLV2ViVmlldyIsInJlYWR5IiwiZW5hYmxlRGV2aWNlQmFja0J1dHRvbkhhbmRsZXIiLCJfZGVmYXVsdERldmljZUJhY2tCdXR0b25IYW5kbGVyIiwiX2ludGVybmFsIiwiZGJiRGlzcGF0Y2hlciIsImNyZWF0ZUhhbmRsZXIiLCJhcHAiLCJleGl0QXBwIiwiX2dlc3R1cmVEZXRlY3RvciIsIkdlc3R1cmVEZXRlY3RvciIsImlzV2ViVmlldyIsImtleUNvZGUiLCJmaXJlRGV2aWNlQmFja0J1dHRvbkV2ZW50IiwiX3NldHVwTG9hZGluZ1BsYWNlSG9sZGVycyJdLCJt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
