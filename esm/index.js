/* onsenui v2.8.2 - 2017-11-22 */

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
if (typeof WeakMap === "undefined") {
  (function () {
    var defineProperty = Object.defineProperty;
    var counter = Date.now() % 1e9;
    var WeakMap = function WeakMap() {
      this.name = "__st" + (Math.random() * 1e9 >>> 0) + (counter++ + "__");
    };
    WeakMap.prototype = {
      set: function set(key, value) {
        var entry = key[this.name];
        if (entry && entry[0] === key) entry[1] = value;else defineProperty(key, this.name, {
          value: [key, value],
          writable: true
        });
        return this;
      },
      get: function get(key) {
        var entry;
        return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined;
      },
      "delete": function _delete(key) {
        var entry = key[this.name];
        if (!entry || entry[0] !== key) return false;
        entry[0] = entry[1] = undefined;
        return true;
      },
      has: function has(key) {
        var entry = key[this.name];
        if (!entry) return false;
        return entry[0] === key;
      }
    };
    window.WeakMap = WeakMap;
  })();
}

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
  if (window.ons) {
    ons$$1._util.warn('Onsen UI is loaded more than once.');
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvc3JjL3BvbHlmaWxscy9wb2x5ZmlsbC1zd2l0Y2hlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3ZhbGlkYXRlLWNvbGxlY3Rpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc2V0LnRvLWpzb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC5vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1jb2xsZWN0aW9uLWZyb20uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQuZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ZuL3NldC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcubWFwLm9mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcubWFwLmZyb20uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9mbi9tYXAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9VdGlsaXRpZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9DdXN0b21FbGVtZW50U3RhdGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvRG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL0RlZmVycmVkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvUGF0Y2gvTmF0aXZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvUGF0Y2gvSFRNTEVsZW1lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9QYXRjaC9JbnRlcmZhY2UvUGFyZW50Tm9kZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL1BhdGNoL0RvY3VtZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvUGF0Y2gvTm9kZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL1BhdGNoL0ludGVyZmFjZS9DaGlsZE5vZGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9QYXRjaC9FbGVtZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvY3VzdG9tLWVsZW1lbnRzLmpzIiwiLi4vLi4vY29yZS9zcmMvcG9seWZpbGxzL011dGF0aW9uT2JzZXJ2ZXJAMC43LjIyL011dGF0aW9uT2JzZXJ2ZXIuanMiLCIuLi8uLi9jb3JlL3NyYy9wb2x5ZmlsbHMvc2V0SW1tZWRpYXRlQDEuMC4yK21vZC9zZXRJbW1lZGlhdGUuanMiLCIuLi8uLi9jb3JlL3NyYy9wb2x5ZmlsbHMvaW5kZXguanMiLCIuLi8uLi9jb3JlL3NyYy92ZW5kb3IvRmFzdENsaWNrQDEuMC42K21vZC9mYXN0Y2xpY2suanMiLCIuLi8uLi9jb3JlL3NyYy92ZW5kb3Ivdmlld3BvcnQuanMiLCIuLi8uLi9jb3JlL3NyYy92ZW5kb3IvaW5kZXguanMiLCIuLi8uLi9jb3JlL3NyYy9zZXR1cC5qcyIsIi4uLy4uL2NvcmUvc3JjL2luZGV4LmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb3IgQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzXG5pZiAod2luZG93LmN1c3RvbUVsZW1lbnRzKSB7IC8vIGV2ZW4gaWYgbmF0aXZlIENFMSBpbXBsIGV4aXN0cywgdXNlIHBvbHlmaWxsXG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmZvcmNlUG9seWZpbGwgPSB0cnVlO1xufVxuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4xJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVFlQRSkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJGl0ZXJEZXRlY3QgPSByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspIHtcbiAgdmFyIEJhc2UgPSBnbG9iYWxbTkFNRV07XG4gIHZhciBDID0gQmFzZTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZTtcbiAgdmFyIE8gPSB7fTtcbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgICB2YXIgZm4gPSBwcm90b1tLRVldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBLRVksXG4gICAgICBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKGEpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpOyByZXR1cm4gdGhpczsgfVxuICAgICAgICA6IGZ1bmN0aW9uIHNldChhLCBiKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTsgcmV0dXJuIHRoaXM7IH1cbiAgICApO1xuICB9O1xuICBpZiAodHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKSB7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgIHZhciBIQVNOVF9DSEFJTklORyA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2U7XG4gICAgLy8gVjggfiAgQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgdmFyIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBpbnN0YW5jZS5oYXMoMSk7IH0pO1xuICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICB2YXIgQUNDRVBUX0lURVJBQkxFUyA9ICRpdGVyRGV0ZWN0KGZ1bmN0aW9uIChpdGVyKSB7IG5ldyBDKGl0ZXIpOyB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICB2YXIgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgICB2YXIgaW5kZXggPSA1O1xuICAgICAgd2hpbGUgKGluZGV4LS0pICRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcbiAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG4gICAgfSk7XG4gICAgaWYgKCFBQ0NFUFRfSVRFUkFCTEVTKSB7XG4gICAgICBDID0gd3JhcHBlcihmdW5jdGlvbiAodGFyZ2V0LCBpdGVyYWJsZSkge1xuICAgICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSk7XG4gICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UoKSwgdGFyZ2V0LCBDKTtcbiAgICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQztcbiAgICB9XG4gICAgaWYgKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pIHtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuICAgIGlmIChCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKSBmaXhNZXRob2QoQURERVIpO1xuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYgKElTX1dFQUsgJiYgcHJvdG8uY2xlYXIpIGRlbGV0ZSBwcm90by5jbGVhcjtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcblxuICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTRVQgPSAnU2V0JztcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoU0VULCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBTRVQpLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7XG4iLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlciwgSVRFUkFUT1IpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgaWYgKGNsYXNzb2YodGhpcykgIT0gTkFNRSkgdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1NldCcsIHsgdG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnU2V0JykgfSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT0xMRUNUSU9OKSB7XG4gICRleHBvcnQoJGV4cG9ydC5TLCBDT0xMRUNUSU9OLCB7IG9mOiBmdW5jdGlvbiBvZigpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgQSA9IEFycmF5KGxlbmd0aCk7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSBBW2xlbmd0aF0gPSBhcmd1bWVudHNbbGVuZ3RoXTtcbiAgICByZXR1cm4gbmV3IHRoaXMoQSk7XG4gIH0gfSk7XG59O1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtc2V0Lm9mXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1vZicpKCdTZXQnKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS9cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTExFQ1RJT04pIHtcbiAgJGV4cG9ydCgkZXhwb3J0LlMsIENPTExFQ1RJT04sIHsgZnJvbTogZnVuY3Rpb24gZnJvbShzb3VyY2UgLyogLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgbWFwcGluZywgQSwgbiwgY2I7XG4gICAgYUZ1bmN0aW9uKHRoaXMpO1xuICAgIG1hcHBpbmcgPSBtYXBGbiAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChtYXBwaW5nKSBhRnVuY3Rpb24obWFwRm4pO1xuICAgIGlmIChzb3VyY2UgPT0gdW5kZWZpbmVkKSByZXR1cm4gbmV3IHRoaXMoKTtcbiAgICBBID0gW107XG4gICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgIG4gPSAwO1xuICAgICAgY2IgPSBjdHgobWFwRm4sIGFyZ3VtZW50c1syXSwgMik7XG4gICAgICBmb3JPZihzb3VyY2UsIGZhbHNlLCBmdW5jdGlvbiAobmV4dEl0ZW0pIHtcbiAgICAgICAgQS5wdXNoKGNiKG5leHRJdGVtLCBuKyspKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JPZihzb3VyY2UsIGZhbHNlLCBBLnB1c2gsIEEpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHRoaXMoQSk7XG4gIH0gfSk7XG59O1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtc2V0LmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnU2V0Jyk7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuc2V0Lm9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuU2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgTUFQID0gJ01hcCc7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywgeyB0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKSB9KTtcbiIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5vZlxucmVxdWlyZSgnLi9fc2V0LWNvbGxlY3Rpb24tb2YnKSgnTWFwJyk7XG4iLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1tYXAuZnJvbVxucmVxdWlyZSgnLi9fc2V0LWNvbGxlY3Rpb24tZnJvbScpKCdNYXAnKTtcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAub2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7XG4iLCJjb25zdCByZXNlcnZlZFRhZ0xpc3QgPSBuZXcgU2V0KFtcbiAgJ2Fubm90YXRpb24teG1sJyxcbiAgJ2NvbG9yLXByb2ZpbGUnLFxuICAnZm9udC1mYWNlJyxcbiAgJ2ZvbnQtZmFjZS1zcmMnLFxuICAnZm9udC1mYWNlLXVyaScsXG4gICdmb250LWZhY2UtZm9ybWF0JyxcbiAgJ2ZvbnQtZmFjZS1uYW1lJyxcbiAgJ21pc3NpbmctZ2x5cGgnLFxuXSk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkQ3VzdG9tRWxlbWVudE5hbWUobG9jYWxOYW1lKSB7XG4gIGNvbnN0IHJlc2VydmVkID0gcmVzZXJ2ZWRUYWdMaXN0Lmhhcyhsb2NhbE5hbWUpO1xuICBjb25zdCB2YWxpZEZvcm0gPSAvXlthLXpdWy4wLTlfYS16XSotW1xcLS4wLTlfYS16XSokLy50ZXN0KGxvY2FsTmFtZSk7XG4gIHJldHVybiAhcmVzZXJ2ZWQgJiYgdmFsaWRGb3JtO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDb25uZWN0ZWQobm9kZSkge1xuICAvLyBVc2UgYE5vZGUjaXNDb25uZWN0ZWRgLCBpZiBkZWZpbmVkLlxuICBjb25zdCBuYXRpdmVWYWx1ZSA9IG5vZGUuaXNDb25uZWN0ZWQ7XG4gIGlmIChuYXRpdmVWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5hdGl2ZVZhbHVlO1xuICB9XG5cbiAgLyoqIEB0eXBlIHs/Tm9kZXx1bmRlZmluZWR9ICovXG4gIGxldCBjdXJyZW50ID0gbm9kZTtcbiAgd2hpbGUgKGN1cnJlbnQgJiYgIShjdXJyZW50Ll9fQ0VfaXNJbXBvcnREb2N1bWVudCB8fCBjdXJyZW50IGluc3RhbmNlb2YgRG9jdW1lbnQpKSB7XG4gICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fCAod2luZG93LlNoYWRvd1Jvb3QgJiYgY3VycmVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyBjdXJyZW50Lmhvc3QgOiB1bmRlZmluZWQpO1xuICB9XG4gIHJldHVybiAhIShjdXJyZW50ICYmIChjdXJyZW50Ll9fQ0VfaXNJbXBvcnREb2N1bWVudCB8fCBjdXJyZW50IGluc3RhbmNlb2YgRG9jdW1lbnQpKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFOb2RlfSByb290XG4gKiBAcGFyYW0geyFOb2RlfSBzdGFydFxuICogQHJldHVybiB7P05vZGV9XG4gKi9cbmZ1bmN0aW9uIG5leHRTaWJsaW5nT3JBbmNlc3RvclNpYmxpbmcocm9vdCwgc3RhcnQpIHtcbiAgbGV0IG5vZGUgPSBzdGFydDtcbiAgd2hpbGUgKG5vZGUgJiYgbm9kZSAhPT0gcm9vdCAmJiAhbm9kZS5uZXh0U2libGluZykge1xuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuICghbm9kZSB8fCBub2RlID09PSByb290KSA/IG51bGwgOiBub2RlLm5leHRTaWJsaW5nO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU5vZGV9IHJvb3RcbiAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0XG4gKiBAcmV0dXJuIHs/Tm9kZX1cbiAqL1xuZnVuY3Rpb24gbmV4dE5vZGUocm9vdCwgc3RhcnQpIHtcbiAgcmV0dXJuIHN0YXJ0LmZpcnN0Q2hpbGQgPyBzdGFydC5maXJzdENoaWxkIDogbmV4dFNpYmxpbmdPckFuY2VzdG9yU2libGluZyhyb290LCBzdGFydCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHshTm9kZX0gcm9vdFxuICogQHBhcmFtIHshZnVuY3Rpb24oIUVsZW1lbnQpfSBjYWxsYmFja1xuICogQHBhcmFtIHshU2V0PE5vZGU+PX0gdmlzaXRlZEltcG9ydHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKHJvb3QsIGNhbGxiYWNrLCB2aXNpdGVkSW1wb3J0cyA9IG5ldyBTZXQoKSkge1xuICBsZXQgbm9kZSA9IHJvb3Q7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8obm9kZSk7XG5cbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBsb2NhbE5hbWUgPSBlbGVtZW50LmxvY2FsTmFtZTtcbiAgICAgIGlmIChsb2NhbE5hbWUgPT09ICdsaW5rJyAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgncmVsJykgPT09ICdpbXBvcnQnKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaW1wb3J0IChwb2x5ZmlsbGVkIG9yIG5vdCkgaGFzIGl0J3Mgcm9vdCBub2RlIGF2YWlsYWJsZSxcbiAgICAgICAgLy8gd2FsayBpdC5cbiAgICAgICAgY29uc3QgaW1wb3J0Tm9kZSA9IC8qKiBAdHlwZSB7IU5vZGV9ICovIChlbGVtZW50LmltcG9ydCk7XG4gICAgICAgIGlmIChpbXBvcnROb2RlIGluc3RhbmNlb2YgTm9kZSAmJiAhdmlzaXRlZEltcG9ydHMuaGFzKGltcG9ydE5vZGUpKSB7XG4gICAgICAgICAgLy8gUHJldmVudCBtdWx0aXBsZSB3YWxrcyBvZiB0aGUgc2FtZSBpbXBvcnQgcm9vdC5cbiAgICAgICAgICB2aXNpdGVkSW1wb3J0cy5hZGQoaW1wb3J0Tm9kZSk7XG5cbiAgICAgICAgICBmb3IgKGxldCBjaGlsZCA9IGltcG9ydE5vZGUuZmlyc3RDaGlsZDsgY2hpbGQ7IGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIHdhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKGNoaWxkLCBjYWxsYmFjaywgdmlzaXRlZEltcG9ydHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElnbm9yZSBkZXNjZW5kYW50cyBvZiBpbXBvcnQgbGlua3MgdG8gcHJldmVudCBhdHRlbXB0aW5nIHRvIHdhbGsgdGhlXG4gICAgICAgIC8vIGVsZW1lbnRzIGNyZWF0ZWQgYnkgdGhlIEhUTUwgSW1wb3J0cyBwb2x5ZmlsbCB0aGF0IHdlIGp1c3Qgd2Fsa2VkXG4gICAgICAgIC8vIGFib3ZlLlxuICAgICAgICBub2RlID0gbmV4dFNpYmxpbmdPckFuY2VzdG9yU2libGluZyhyb290LCBlbGVtZW50KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGxvY2FsTmFtZSA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAvLyBJZ25vcmUgZGVzY2VuZGFudHMgb2YgdGVtcGxhdGVzLiBUaGVyZSBzaG91bGRuJ3QgYmUgYW55IGRlc2NlbmRhbnRzXG4gICAgICAgIC8vIGJlY2F1c2UgdGhleSB3aWxsIGJlIG1vdmVkIGludG8gYC5jb250ZW50YCBkdXJpbmcgY29uc3RydWN0aW9uIGluXG4gICAgICAgIC8vIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0ZW1wbGF0ZSBidXQsIGluIGNhc2UgdGhleSBleGlzdCBhbmQgYXJlIHN0aWxsXG4gICAgICAgIC8vIHdhaXRpbmcgdG8gYmUgbW92ZWQgYnkgYSBwb2x5ZmlsbCwgdGhleSB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICAgIG5vZGUgPSBuZXh0U2libGluZ09yQW5jZXN0b3JTaWJsaW5nKHJvb3QsIGVsZW1lbnQpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gV2FsayBzaGFkb3cgcm9vdHMuXG4gICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5fX0NFX3NoYWRvd1Jvb3Q7XG4gICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICBmb3IgKGxldCBjaGlsZCA9IHNoYWRvd1Jvb3QuZmlyc3RDaGlsZDsgY2hpbGQ7IGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICB3YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhjaGlsZCwgY2FsbGJhY2ssIHZpc2l0ZWRJbXBvcnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5vZGUgPSBuZXh0Tm9kZShyb290LCBub2RlKTtcbiAgfVxufVxuXG4vKipcbiAqIFVzZWQgdG8gc3VwcHJlc3MgQ2xvc3VyZSdzIFwiTW9kaWZ5aW5nIHRoZSBwcm90b3R5cGUgaXMgb25seSBhbGxvd2VkIGlmIHRoZVxuICogY29uc3RydWN0b3IgaXMgaW4gdGhlIHNhbWUgc2NvcGVcIiB3YXJuaW5nIHdpdGhvdXQgdXNpbmdcbiAqIGBAc3VwcHJlc3Mge25ld0NoZWNrVHlwZXMsIGR1cGxpY2F0ZX1gIGJlY2F1c2UgYG5ld0NoZWNrVHlwZXNgIGlzIHRvbyBicm9hZC5cbiAqXG4gKiBAcGFyYW0geyFPYmplY3R9IGRlc3RpbmF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHlVbmNoZWNrZWQoZGVzdGluYXRpb24sIG5hbWUsIHZhbHVlKSB7XG4gIGRlc3RpbmF0aW9uW25hbWVdID0gdmFsdWU7XG59XG4iLCIvKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmNvbnN0IEN1c3RvbUVsZW1lbnRTdGF0ZSA9IHtcbiAgY3VzdG9tOiAxLFxuICBmYWlsZWQ6IDIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21FbGVtZW50U3RhdGU7XG4iLCJpbXBvcnQgKiBhcyBVdGlsaXRpZXMgZnJvbSAnLi9VdGlsaXRpZXMuanMnO1xuaW1wb3J0IENFU3RhdGUgZnJvbSAnLi9DdXN0b21FbGVtZW50U3RhdGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21FbGVtZW50SW50ZXJuYWxzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHshTWFwPHN0cmluZywgIUN1c3RvbUVsZW1lbnREZWZpbml0aW9uPn0gKi9cbiAgICB0aGlzLl9sb2NhbE5hbWVUb0RlZmluaXRpb24gPSBuZXcgTWFwKCk7XG5cbiAgICAvKiogQHR5cGUgeyFNYXA8IUZ1bmN0aW9uLCAhQ3VzdG9tRWxlbWVudERlZmluaXRpb24+fSAqL1xuICAgIHRoaXMuX2NvbnN0cnVjdG9yVG9EZWZpbml0aW9uID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqIEB0eXBlIHshQXJyYXk8IWZ1bmN0aW9uKCFOb2RlKT59ICovXG4gICAgdGhpcy5fcGF0Y2hlcyA9IFtdO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuX2hhc1BhdGNoZXMgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxOYW1lXG4gICAqIEBwYXJhbSB7IUN1c3RvbUVsZW1lbnREZWZpbml0aW9ufSBkZWZpbml0aW9uXG4gICAqL1xuICBzZXREZWZpbml0aW9uKGxvY2FsTmFtZSwgZGVmaW5pdGlvbikge1xuICAgIHRoaXMuX2xvY2FsTmFtZVRvRGVmaW5pdGlvbi5zZXQobG9jYWxOYW1lLCBkZWZpbml0aW9uKTtcbiAgICB0aGlzLl9jb25zdHJ1Y3RvclRvRGVmaW5pdGlvbi5zZXQoZGVmaW5pdGlvbi5jb25zdHJ1Y3RvciwgZGVmaW5pdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZVxuICAgKiBAcmV0dXJuIHshQ3VzdG9tRWxlbWVudERlZmluaXRpb258dW5kZWZpbmVkfVxuICAgKi9cbiAgbG9jYWxOYW1lVG9EZWZpbml0aW9uKGxvY2FsTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbE5hbWVUb0RlZmluaXRpb24uZ2V0KGxvY2FsTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gICAqIEByZXR1cm4geyFDdXN0b21FbGVtZW50RGVmaW5pdGlvbnx1bmRlZmluZWR9XG4gICAqL1xuICBjb25zdHJ1Y3RvclRvRGVmaW5pdGlvbihjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiB0aGlzLl9jb25zdHJ1Y3RvclRvRGVmaW5pdGlvbi5nZXQoY29uc3RydWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IWZ1bmN0aW9uKCFOb2RlKX0gbGlzdGVuZXJcbiAgICovXG4gIGFkZFBhdGNoKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5faGFzUGF0Y2hlcyA9IHRydWU7XG4gICAgdGhpcy5fcGF0Y2hlcy5wdXNoKGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqL1xuICBwYXRjaFRyZWUobm9kZSkge1xuICAgIGlmICghdGhpcy5faGFzUGF0Y2hlcykgcmV0dXJuO1xuXG4gICAgVXRpbGl0aWVzLndhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKG5vZGUsIGVsZW1lbnQgPT4gdGhpcy5wYXRjaChlbGVtZW50KSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKi9cbiAgcGF0Y2gobm9kZSkge1xuICAgIGlmICghdGhpcy5faGFzUGF0Y2hlcykgcmV0dXJuO1xuXG4gICAgaWYgKG5vZGUuX19DRV9wYXRjaGVkKSByZXR1cm47XG4gICAgbm9kZS5fX0NFX3BhdGNoZWQgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9wYXRjaGVzW2ldKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFOb2RlfSByb290XG4gICAqL1xuICBjb25uZWN0VHJlZShyb290KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICAgIFV0aWxpdGllcy53YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhyb290LCBlbGVtZW50ID0+IGVsZW1lbnRzLnB1c2goZWxlbWVudCkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaWYgKGVsZW1lbnQuX19DRV9zdGF0ZSA9PT0gQ0VTdGF0ZS5jdXN0b20pIHtcbiAgICAgICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZChlbGVtZW50KSkge1xuICAgICAgICAgIHRoaXMuY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBncmFkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU5vZGV9IHJvb3RcbiAgICovXG4gIGRpc2Nvbm5lY3RUcmVlKHJvb3QpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gICAgVXRpbGl0aWVzLndhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKHJvb3QsIGVsZW1lbnQgPT4gZWxlbWVudHMucHVzaChlbGVtZW50KSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWxlbWVudC5fX0NFX3N0YXRlID09PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhbGwgdW5jdXN0b21pemVkIGN1c3RvbSBlbGVtZW50cyBhdCBhbmQgYmVsb3cgYSByb290IG5vZGUgZm9yXG4gICAqIHdoaWNoIHRoZXJlIGlzIGEgZGVmaW5pdGlvbi4gV2hlbiBjdXN0b20gZWxlbWVudCByZWFjdGlvbiBjYWxsYmFja3MgYXJlXG4gICAqIGFzc3VtZWQgdG8gYmUgY2FsbGVkIHN5bmNocm9ub3VzbHkgKHdoaWNoLCBieSB0aGUgY3VycmVudCBET00gLyBIVE1MIHNwZWNcbiAgICogZGVmaW5pdGlvbnMsIHRoZXkgYXJlICpub3QqKSwgY2FsbGJhY2tzIGZvciBib3RoIGVsZW1lbnRzIGN1c3RvbWl6ZWRcbiAgICogc3luY2hyb25vdXNseSBieSB0aGUgcGFyc2VyIGFuZCBlbGVtZW50cyBiZWluZyB1cGdyYWRlZCBvY2N1ciBpbiB0aGUgc2FtZVxuICAgKiByZWxhdGl2ZSBvcmRlci5cbiAgICpcbiAgICogTk9URTogVGhpcyBmdW5jdGlvbiwgd2hlbiB1c2VkIHRvIHNpbXVsYXRlIHRoZSBjb25zdHJ1Y3Rpb24gb2YgYSB0cmVlIHRoYXRcbiAgICogaXMgYWxyZWFkeSBjcmVhdGVkIGJ1dCBub3QgY3VzdG9taXplZCAoaS5lLiBieSB0aGUgcGFyc2VyKSwgZG9lcyAqbm90KlxuICAgKiBwcmV2ZW50IHRoZSBlbGVtZW50IGZyb20gcmVhZGluZyB0aGUgJ2ZpbmFsJyAodHJ1ZSkgc3RhdGUgb2YgdGhlIHRyZWUuIEZvclxuICAgKiBleGFtcGxlLCB0aGUgZWxlbWVudCwgZHVyaW5nIHRydWx5IHN5bmNocm9ub3VzIHBhcnNpbmcgLyBjb25zdHJ1Y3Rpb24gd291bGRcbiAgICogc2VlIHRoYXQgaXQgY29udGFpbnMgbm8gY2hpbGRyZW4gYXMgdGhleSBoYXZlIG5vdCB5ZXQgYmVlbiBpbnNlcnRlZC5cbiAgICogSG93ZXZlciwgdGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBtb2RpZnkgdGhlIHRyZWUsIHRoZSBlbGVtZW50IHdpbGxcbiAgICogKGluY29ycmVjdGx5KSBoYXZlIGNoaWxkcmVuLiBBZGRpdGlvbmFsbHksIHNlbGYtbW9kaWZpY2F0aW9uIHJlc3RyaWN0aW9uc1xuICAgKiBmb3IgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3JzIGltcG9zZWQgYnkgdGhlIERPTSBzcGVjIGFyZSAqbm90KiBlbmZvcmNlZC5cbiAgICpcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBuZXN0ZWQgbGlzdCBzaG93cyB0aGUgc3RlcHMgZXh0ZW5kaW5nIGRvd24gZnJvbSB0aGUgSFRNTFxuICAgKiBzcGVjJ3MgcGFyc2luZyBzZWN0aW9uIHRoYXQgY2F1c2UgZWxlbWVudHMgdG8gYmUgc3luY2hyb25vdXNseSBjcmVhdGVkIGFuZFxuICAgKiB1cGdyYWRlZDpcbiAgICpcbiAgICogVGhlIFwiaW4gYm9keVwiIGluc2VydGlvbiBtb2RlOlxuICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNwYXJzaW5nLW1haW4taW5ib2R5XG4gICAqIC0gU3dpdGNoIG9uIHRva2VuOlxuICAgKiAgIC4uIG90aGVyIGNhc2VzIC4uXG4gICAqICAgLT4gQW55IG90aGVyIHN0YXJ0IHRhZ1xuICAgKiAgICAgIC0gW0luc2VydCBhbiBIVE1MIGVsZW1lbnRdKGJlbG93KSBmb3IgdGhlIHRva2VuLlxuICAgKlxuICAgKiBJbnNlcnQgYW4gSFRNTCBlbGVtZW50OlxuICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNpbnNlcnQtYW4taHRtbC1lbGVtZW50XG4gICAqIC0gSW5zZXJ0IGEgZm9yZWlnbiBlbGVtZW50IGZvciB0aGUgdG9rZW4gaW4gdGhlIEhUTUwgbmFtZXNwYWNlOlxuICAgKiAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2luc2VydC1hLWZvcmVpZ24tZWxlbWVudFxuICAgKiAgIC0gQ3JlYXRlIGFuIGVsZW1lbnQgZm9yIGEgdG9rZW46XG4gICAqICAgICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNjcmVhdGUtYW4tZWxlbWVudC1mb3ItdGhlLXRva2VuXG4gICAqICAgICAtIFdpbGwgZXhlY3V0ZSBzY3JpcHQgZmxhZyBpcyB0cnVlP1xuICAgKiAgICAgICAtIChFbGVtZW50IHF1ZXVlIHB1c2hlZCB0byB0aGUgY3VzdG9tIGVsZW1lbnQgcmVhY3Rpb25zIHN0YWNrLilcbiAgICogICAgIC0gQ3JlYXRlIGFuIGVsZW1lbnQ6XG4gICAqICAgICAgIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1jcmVhdGUtZWxlbWVudFxuICAgKiAgICAgICAtIFN5bmMgQ0UgZmxhZyBpcyB0cnVlP1xuICAgKiAgICAgICAgIC0gQ29uc3RydWN0b3IgY2FsbGVkLlxuICAgKiAgICAgICAgIC0gU2VsZi1tb2RpZmljYXRpb24gcmVzdHJpY3Rpb25zIGVuZm9yY2VkLlxuICAgKiAgICAgICAtIFN5bmMgQ0UgZmxhZyBpcyBmYWxzZT9cbiAgICogICAgICAgICAtIChVcGdyYWRlIHJlYWN0aW9uIGVucXVldWVkLilcbiAgICogICAgIC0gQXR0cmlidXRlcyBhcHBlbmRlZCB0byBlbGVtZW50LlxuICAgKiAgICAgICAoYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgcmVhY3Rpb25zIGVucXVldWVkLilcbiAgICogICAgIC0gV2lsbCBleGVjdXRlIHNjcmlwdCBmbGFnIGlzIHRydWU/XG4gICAqICAgICAgIC0gKEVsZW1lbnQgcXVldWUgcG9wcGVkIGZyb20gdGhlIGN1c3RvbSBlbGVtZW50IHJlYWN0aW9ucyBzdGFjay5cbiAgICogICAgICAgICBSZWFjdGlvbnMgaW4gdGhlIHBvcHBlZCBzdGFjayBhcmUgaW52b2tlZC4pXG4gICAqICAgLSAoRWxlbWVudCBxdWV1ZSBwdXNoZWQgdG8gdGhlIGN1c3RvbSBlbGVtZW50IHJlYWN0aW9ucyBzdGFjay4pXG4gICAqICAgLSBJbnNlcnQgdGhlIGVsZW1lbnQ6XG4gICAqICAgICBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1pbnNlcnRcbiAgICogICAgIC0gU2hhZG93LWluY2x1ZGluZyBkZXNjZW5kYW50cyBhcmUgY29ubmVjdGVkLiBEdXJpbmcgcGFyc2luZ1xuICAgKiAgICAgICBjb25zdHJ1Y3Rpb24sIHRoZXJlIGFyZSBubyBzaGFkb3ctKmV4Y2x1ZGluZyogZGVzY2VuZGFudHMuXG4gICAqICAgICAgIEhvd2V2ZXIsIHRoZSBjb25zdHJ1Y3RvciBtYXkgaGF2ZSB2YWxpZGx5IGF0dGFjaGVkIGEgc2hhZG93XG4gICAqICAgICAgIHRyZWUgdG8gaXRzZWxmIGFuZCBhZGRlZCBkZXNjZW5kYW50cyB0byB0aGF0IHNoYWRvdyB0cmVlLlxuICAgKiAgICAgICAoYGNvbm5lY3RlZENhbGxiYWNrYCByZWFjdGlvbnMgZW5xdWV1ZWQuKVxuICAgKiAgIC0gKEVsZW1lbnQgcXVldWUgcG9wcGVkIGZyb20gdGhlIGN1c3RvbSBlbGVtZW50IHJlYWN0aW9ucyBzdGFjay5cbiAgICogICAgIFJlYWN0aW9ucyBpbiB0aGUgcG9wcGVkIHN0YWNrIGFyZSBpbnZva2VkLilcbiAgICpcbiAgICogQHBhcmFtIHshTm9kZX0gcm9vdFxuICAgKiBAcGFyYW0geyFTZXQ8Tm9kZT49fSB2aXNpdGVkSW1wb3J0c1xuICAgKi9cbiAgcGF0Y2hBbmRVcGdyYWRlVHJlZShyb290LCB2aXNpdGVkSW1wb3J0cyA9IG5ldyBTZXQoKSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgICBjb25zdCBnYXRoZXJFbGVtZW50cyA9IGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSAnbGluaycgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JlbCcpID09PSAnaW1wb3J0Jykge1xuICAgICAgICAvLyBUaGUgSFRNTCBJbXBvcnRzIHBvbHlmaWxsIHNldHMgYSBkZXNjZW5kYW50IGVsZW1lbnQgb2YgdGhlIGxpbmsgdG9cbiAgICAgICAgLy8gdGhlIGBpbXBvcnRgIHByb3BlcnR5LCBzcGVjaWZpY2FsbHkgdGhpcyBpcyAqbm90KiBhIERvY3VtZW50LlxuICAgICAgICBjb25zdCBpbXBvcnROb2RlID0gLyoqIEB0eXBlIHs/Tm9kZX0gKi8gKGVsZW1lbnQuaW1wb3J0KTtcblxuICAgICAgICBpZiAoaW1wb3J0Tm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgaW1wb3J0Tm9kZS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgaW1wb3J0Tm9kZS5fX0NFX2lzSW1wb3J0RG9jdW1lbnQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gQ29ubmVjdGVkIGxpbmtzIGFyZSBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdHJ5LlxuICAgICAgICAgIGltcG9ydE5vZGUuX19DRV9oYXNSZWdpc3RyeSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBsaW5rJ3MgaW1wb3J0IHJvb3QgaXMgbm90IGF2YWlsYWJsZSwgaXRzIGNvbnRlbnRzIGNhbid0IGJlXG4gICAgICAgICAgLy8gd2Fsa2VkLiBXYWl0IGZvciAnbG9hZCcgYW5kIHdhbGsgaXQgd2hlbiBpdCdzIHJlYWR5LlxuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydE5vZGUgPSAvKiogQHR5cGUgeyFOb2RlfSAqLyAoZWxlbWVudC5pbXBvcnQpO1xuXG4gICAgICAgICAgICBpZiAoaW1wb3J0Tm9kZS5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQpIHJldHVybjtcbiAgICAgICAgICAgIGltcG9ydE5vZGUuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaW1wb3J0Tm9kZS5fX0NFX2lzSW1wb3J0RG9jdW1lbnQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBDb25uZWN0ZWQgbGlua3MgYXJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0cnkuXG4gICAgICAgICAgICBpbXBvcnROb2RlLl9fQ0VfaGFzUmVnaXN0cnkgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBDbG9uZSB0aGUgYHZpc2l0ZWRJbXBvcnRzYCBzZXQgdGhhdCB3YXMgcG9wdWxhdGVkIHN5bmMgZHVyaW5nXG4gICAgICAgICAgICAvLyB0aGUgYHBhdGNoQW5kVXBncmFkZVRyZWVgIGNhbGwgdGhhdCBjYXVzZWQgdGhpcyAnbG9hZCcgaGFuZGxlciB0b1xuICAgICAgICAgICAgLy8gYmUgYWRkZWQuIFRoZW4sIHJlbW92ZSAqdGhpcyogbGluaydzIGltcG9ydCBub2RlIHNvIHRoYXQgd2UgY2FuXG4gICAgICAgICAgICAvLyB3YWxrIHRoYXQgaW1wb3J0IGFnYWluLCBldmVuIGlmIGl0IHdhcyBwYXJ0aWFsbHkgd2Fsa2VkIGxhdGVyXG4gICAgICAgICAgICAvLyBkdXJpbmcgdGhlIHNhbWUgYHBhdGNoQW5kVXBncmFkZVRyZWVgIGNhbGwuXG4gICAgICAgICAgICBjb25zdCBjbG9uZWRWaXNpdGVkSW1wb3J0cyA9IG5ldyBTZXQodmlzaXRlZEltcG9ydHMpO1xuICAgICAgICAgICAgdmlzaXRlZEltcG9ydHMuZGVsZXRlKGltcG9ydE5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLnBhdGNoQW5kVXBncmFkZVRyZWUoaW1wb3J0Tm9kZSwgdmlzaXRlZEltcG9ydHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBgd2Fsa0RlZXBEZXNjZW5kYW50RWxlbWVudHNgIHBvcHVsYXRlcyAoYW5kIGludGVybmFsbHkgY2hlY2tzIGFnYWluc3QpXG4gICAgLy8gYHZpc2l0ZWRJbXBvcnRzYCB3aGVuIHRyYXZlcnNpbmcgYSBsb2FkZWQgaW1wb3J0LlxuICAgIFV0aWxpdGllcy53YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhyb290LCBnYXRoZXJFbGVtZW50cywgdmlzaXRlZEltcG9ydHMpO1xuXG4gICAgaWYgKHRoaXMuX2hhc1BhdGNoZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5wYXRjaChlbGVtZW50c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy51cGdyYWRlRWxlbWVudChlbGVtZW50c1tpXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIHVwZ3JhZGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBlbGVtZW50Ll9fQ0Vfc3RhdGU7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5sb2NhbE5hbWVUb0RlZmluaXRpb24oZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgIGlmICghZGVmaW5pdGlvbikgcmV0dXJuO1xuXG4gICAgZGVmaW5pdGlvbi5jb25zdHJ1Y3Rpb25TdGFjay5wdXNoKGVsZW1lbnQpO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBkZWZpbml0aW9uLmNvbnN0cnVjdG9yO1xuICAgIHRyeSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IChjb25zdHJ1Y3RvcikoKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yIGRpZCBub3QgcHJvZHVjZSB0aGUgZWxlbWVudCBiZWluZyB1cGdyYWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZGVmaW5pdGlvbi5jb25zdHJ1Y3Rpb25TdGFjay5wb3AoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlbGVtZW50Ll9fQ0Vfc3RhdGUgPSBDRVN0YXRlLmZhaWxlZDtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgZWxlbWVudC5fX0NFX3N0YXRlID0gQ0VTdGF0ZS5jdXN0b207XG4gICAgZWxlbWVudC5fX0NFX2RlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuXG4gICAgaWYgKGRlZmluaXRpb24uYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKSB7XG4gICAgICBjb25zdCBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBkZWZpbml0aW9uLm9ic2VydmVkQXR0cmlidXRlcztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzZXJ2ZWRBdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBvYnNlcnZlZEF0dHJpYnV0ZXNbaV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGVsZW1lbnQsIG5hbWUsIG51bGwsIHZhbHVlLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQoZWxlbWVudCkpIHtcbiAgICAgIHRoaXMuY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIGNvbm5lY3RlZENhbGxiYWNrKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gZWxlbWVudC5fX0NFX2RlZmluaXRpb247XG4gICAgaWYgKGRlZmluaXRpb24uY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgIGRlZmluaXRpb24uY29ubmVjdGVkQ2FsbGJhY2suY2FsbChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9fQ0VfaXNDb25uZWN0ZWRDYWxsYmFja0NhbGxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudC5fX0NFX2lzQ29ubmVjdGVkQ2FsbGJhY2tDYWxsZWQpIHtcbiAgICAgIHRoaXMuY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IGVsZW1lbnQuX19DRV9kZWZpbml0aW9uO1xuICAgIGlmIChkZWZpbml0aW9uLmRpc2Nvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICBkZWZpbml0aW9uLmRpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgZWxlbWVudC5fX0NFX2lzQ29ubmVjdGVkQ2FsbGJhY2tDYWxsZWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0gez9zdHJpbmd9IG9sZFZhbHVlXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gbmV3VmFsdWVcbiAgICogQHBhcmFtIHs/c3RyaW5nfSBuYW1lc3BhY2VcbiAgICovXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlbGVtZW50LCBuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIG5hbWVzcGFjZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBlbGVtZW50Ll9fQ0VfZGVmaW5pdGlvbjtcbiAgICBpZiAoXG4gICAgICBkZWZpbml0aW9uLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayAmJlxuICAgICAgZGVmaW5pdGlvbi5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihuYW1lKSA+IC0xXG4gICAgKSB7XG4gICAgICBkZWZpbml0aW9uLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjay5jYWxsKGVsZW1lbnQsIG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4vQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIge1xuICBjb25zdHJ1Y3RvcihpbnRlcm5hbHMsIGRvYykge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHshQ3VzdG9tRWxlbWVudEludGVybmFsc31cbiAgICAgKi9cbiAgICB0aGlzLl9pbnRlcm5hbHMgPSBpbnRlcm5hbHM7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7IURvY3VtZW50fVxuICAgICAqL1xuICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge011dGF0aW9uT2JzZXJ2ZXJ8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuX29ic2VydmVyID0gdW5kZWZpbmVkO1xuXG5cbiAgICAvLyBTaW11bGF0ZSB0cmVlIGNvbnN0cnVjdGlvbiBmb3IgYWxsIGN1cnJlbnRseSBhY2Nlc3NpYmxlIG5vZGVzIGluIHRoZVxuICAgIC8vIGRvY3VtZW50LlxuICAgIHRoaXMuX2ludGVybmFscy5wYXRjaEFuZFVwZ3JhZGVUcmVlKHRoaXMuX2RvY3VtZW50KTtcblxuICAgIGlmICh0aGlzLl9kb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5faGFuZGxlTXV0YXRpb25zLmJpbmQodGhpcykpO1xuXG4gICAgICAvLyBOb2RlcyBjcmVhdGVkIGJ5IHRoZSBwYXJzZXIgYXJlIGdpdmVuIHRvIHRoZSBvYnNlcnZlciAqYmVmb3JlKiB0aGUgbmV4dFxuICAgICAgLy8gdGFzayBydW5zLiBJbmxpbmUgc2NyaXB0cyBhcmUgcnVuIGluIGEgbmV3IHRhc2suIFRoaXMgbWVhbnMgdGhhdCB0aGVcbiAgICAgIC8vIG9ic2VydmVyIHdpbGwgYmUgYWJsZSB0byBoYW5kbGUgdGhlIG5ld2x5IHBhcnNlZCBub2RlcyBiZWZvcmUgdGhlIGlubGluZVxuICAgICAgLy8gc2NyaXB0IGlzIHJ1bi5cbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGlzY29ubmVjdCgpIHtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gbXV0YXRpb25zXG4gICAqL1xuICBfaGFuZGxlTXV0YXRpb25zKG11dGF0aW9ucykge1xuICAgIC8vIE9uY2UgdGhlIGRvY3VtZW50J3MgYHJlYWR5U3RhdGVgIGlzICdpbnRlcmFjdGl2ZScgb3IgJ2NvbXBsZXRlJywgYWxsIG5ld1xuICAgIC8vIG5vZGVzIGNyZWF0ZWQgd2l0aGluIHRoYXQgZG9jdW1lbnQgd2lsbCBiZSB0aGUgcmVzdWx0IG9mIHNjcmlwdCBhbmRcbiAgICAvLyBzaG91bGQgYmUgaGFuZGxlZCBieSBwYXRjaGluZy5cbiAgICBjb25zdCByZWFkeVN0YXRlID0gdGhpcy5fZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgICBpZiAocmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyB8fCByZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYWRkZWROb2RlcyA9IG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhZGRlZE5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBhZGRlZE5vZGVzW2pdO1xuICAgICAgICB0aGlzLl9pbnRlcm5hbHMucGF0Y2hBbmRVcGdyYWRlVHJlZShub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQHRlbXBsYXRlIFRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmZXJyZWQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtUfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXNvbHZlID0gdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IVByb21pc2U8VD59XG4gICAgICovXG4gICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cbiAgICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgICByZXNvbHZlKHRoaXMuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1R9IHZhbHVlXG4gICAqL1xuICByZXNvbHZlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FscmVhZHkgcmVzb2x2ZWQuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh0aGlzLl9yZXNvbHZlKSB7XG4gICAgICB0aGlzLl9yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IVByb21pc2U8VD59XG4gICAqL1xuICB0b1Byb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gIH1cbn1cbiIsImltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4vQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyc7XG5pbXBvcnQgRG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlciBmcm9tICcuL0RvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIuanMnO1xuaW1wb3J0IERlZmVycmVkIGZyb20gJy4vRGVmZXJyZWQuanMnO1xuaW1wb3J0ICogYXMgVXRpbGl0aWVzIGZyb20gJy4vVXRpbGl0aWVzLmpzJztcblxuLyoqXG4gKiBAdW5yZXN0cmljdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUN1c3RvbUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFsc1xuICAgKi9cbiAgY29uc3RydWN0b3IoaW50ZXJuYWxzKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9lbGVtZW50RGVmaW5pdGlvbklzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IUN1c3RvbUVsZW1lbnRJbnRlcm5hbHN9XG4gICAgICovXG4gICAgdGhpcy5faW50ZXJuYWxzID0gaW50ZXJuYWxzO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IU1hcDxzdHJpbmcsICFEZWZlcnJlZDx1bmRlZmluZWQ+Pn1cbiAgICAgKi9cbiAgICB0aGlzLl93aGVuRGVmaW5lZERlZmVycmVkID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgZmx1c2ggY2FsbGJhY2sgdHJpZ2dlcnMgdGhlIGRvY3VtZW50IHdhbGsgc3luY2hyb25vdXNseS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHshRnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fZmx1c2hDYWxsYmFjayA9IGZuID0+IGZuKCk7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2ZsdXNoUGVuZGluZyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IUFycmF5PHN0cmluZz59XG4gICAgICovXG4gICAgdGhpcy5fdW5mbHVzaGVkTG9jYWxOYW1lcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IURvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5fZG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlciA9IG5ldyBEb2N1bWVudENvbnN0cnVjdGlvbk9ic2VydmVyKGludGVybmFscywgZG9jdW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gICAqL1xuICBkZWZpbmUobG9jYWxOYW1lLCBjb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcnMgbXVzdCBiZSBmdW5jdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKCFVdGlsaXRpZXMuaXNWYWxpZEN1c3RvbUVsZW1lbnROYW1lKGxvY2FsTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgVGhlIGVsZW1lbnQgbmFtZSAnJHtsb2NhbE5hbWV9JyBpcyBub3QgdmFsaWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ludGVybmFscy5sb2NhbE5hbWVUb0RlZmluaXRpb24obG9jYWxOYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIGN1c3RvbSBlbGVtZW50IHdpdGggbmFtZSAnJHtsb2NhbE5hbWV9JyBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnREZWZpbml0aW9uSXNSdW5uaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgY3VzdG9tIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBkZWZpbmVkLicpO1xuICAgIH1cbiAgICB0aGlzLl9lbGVtZW50RGVmaW5pdGlvbklzUnVubmluZyA9IHRydWU7XG5cbiAgICBsZXQgY29ubmVjdGVkQ2FsbGJhY2s7XG4gICAgbGV0IGRpc2Nvbm5lY3RlZENhbGxiYWNrO1xuICAgIGxldCBhZG9wdGVkQ2FsbGJhY2s7XG4gICAgbGV0IGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaztcbiAgICBsZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzO1xuICAgIHRyeSB7XG4gICAgICAvKiogQHR5cGUgeyFPYmplY3R9ICovXG4gICAgICBjb25zdCBwcm90b3R5cGUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICBpZiAoIShwcm90b3R5cGUgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvclxcJ3MgcHJvdG90eXBlIGlzIG5vdCBhbiBvYmplY3QuJyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldENhbGxiYWNrKG5hbWUpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tWYWx1ZSA9IHByb3RvdHlwZVtuYW1lXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrVmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhKGNhbGxiYWNrVmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtuYW1lfScgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWxsYmFja1ZhbHVlO1xuICAgICAgfVxuXG4gICAgICBjb25uZWN0ZWRDYWxsYmFjayA9IGdldENhbGxiYWNrKCdjb25uZWN0ZWRDYWxsYmFjaycpO1xuICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBnZXRDYWxsYmFjaygnZGlzY29ubmVjdGVkQ2FsbGJhY2snKTtcbiAgICAgIGFkb3B0ZWRDYWxsYmFjayA9IGdldENhbGxiYWNrKCdhZG9wdGVkQ2FsbGJhY2snKTtcbiAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGdldENhbGxiYWNrKCdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snKTtcbiAgICAgIG9ic2VydmVkQXR0cmlidXRlcyA9IGNvbnN0cnVjdG9yWydvYnNlcnZlZEF0dHJpYnV0ZXMnXSB8fCBbXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2VsZW1lbnREZWZpbml0aW9uSXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHtcbiAgICAgIGxvY2FsTmFtZSxcbiAgICAgIGNvbnN0cnVjdG9yLFxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2ssXG4gICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjayxcbiAgICAgIGFkb3B0ZWRDYWxsYmFjayxcbiAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayxcbiAgICAgIG9ic2VydmVkQXR0cmlidXRlcyxcbiAgICAgIGNvbnN0cnVjdGlvblN0YWNrOiBbXSxcbiAgICB9O1xuXG4gICAgdGhpcy5faW50ZXJuYWxzLnNldERlZmluaXRpb24obG9jYWxOYW1lLCBkZWZpbml0aW9uKTtcblxuICAgIHRoaXMuX3VuZmx1c2hlZExvY2FsTmFtZXMucHVzaChsb2NhbE5hbWUpO1xuXG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBjYWxsZWQgdGhlIGZsdXNoIGNhbGxiYWNrIGFuZCBpdCBoYXNuJ3QgY2FsbGVkIGJhY2sgeWV0LFxuICAgIC8vIGRvbid0IGNhbGwgaXQgYWdhaW4uXG4gICAgaWYgKCF0aGlzLl9mbHVzaFBlbmRpbmcpIHtcbiAgICAgIHRoaXMuX2ZsdXNoUGVuZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9mbHVzaENhbGxiYWNrKCgpID0+IHRoaXMuX2ZsdXNoKCkpO1xuICAgIH1cbiAgfVxuXG4gIF9mbHVzaCgpIHtcbiAgICAvLyBJZiBubyBuZXcgZGVmaW5pdGlvbnMgd2VyZSBkZWZpbmVkLCBkb24ndCBhdHRlbXB0IHRvIGZsdXNoLiBUaGlzIGNvdWxkXG4gICAgLy8gaGFwcGVuIGlmIGEgZmx1c2ggY2FsbGJhY2sga2VlcHMgdGhlIGZ1bmN0aW9uIGl0IGlzIGdpdmVuIGFuZCBjYWxscyBpdFxuICAgIC8vIG11bHRpcGxlIHRpbWVzLlxuICAgIGlmICh0aGlzLl9mbHVzaFBlbmRpbmcgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICB0aGlzLl9mbHVzaFBlbmRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9pbnRlcm5hbHMucGF0Y2hBbmRVcGdyYWRlVHJlZShkb2N1bWVudCk7XG5cbiAgICB3aGlsZSAodGhpcy5fdW5mbHVzaGVkTG9jYWxOYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsb2NhbE5hbWUgPSB0aGlzLl91bmZsdXNoZWRMb2NhbE5hbWVzLnNoaWZ0KCk7XG4gICAgICBjb25zdCBkZWZlcnJlZCA9IHRoaXMuX3doZW5EZWZpbmVkRGVmZXJyZWQuZ2V0KGxvY2FsTmFtZSk7XG4gICAgICBpZiAoZGVmZXJyZWQpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxOYW1lXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAgICovXG4gIGdldChsb2NhbE5hbWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5faW50ZXJuYWxzLmxvY2FsTmFtZVRvRGVmaW5pdGlvbihsb2NhbE5hbWUpO1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICByZXR1cm4gZGVmaW5pdGlvbi5jb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWVcbiAgICogQHJldHVybiB7IVByb21pc2U8dW5kZWZpbmVkPn1cbiAgICovXG4gIHdoZW5EZWZpbmVkKGxvY2FsTmFtZSkge1xuICAgIGlmICghVXRpbGl0aWVzLmlzVmFsaWRDdXN0b21FbGVtZW50TmFtZShsb2NhbE5hbWUpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFN5bnRheEVycm9yKGAnJHtsb2NhbE5hbWV9JyBpcyBub3QgYSB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lLmApKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmlvciA9IHRoaXMuX3doZW5EZWZpbmVkRGVmZXJyZWQuZ2V0KGxvY2FsTmFtZSk7XG4gICAgaWYgKHByaW9yKSB7XG4gICAgICByZXR1cm4gcHJpb3IudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoKTtcbiAgICB0aGlzLl93aGVuRGVmaW5lZERlZmVycmVkLnNldChsb2NhbE5hbWUsIGRlZmVycmVkKTtcblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLl9pbnRlcm5hbHMubG9jYWxOYW1lVG9EZWZpbml0aW9uKGxvY2FsTmFtZSk7XG4gICAgLy8gUmVzb2x2ZSBpbW1lZGlhdGVseSBvbmx5IGlmIHRoZSBnaXZlbiBsb2NhbCBuYW1lIGhhcyBhIGRlZmluaXRpb24gKmFuZCpcbiAgICAvLyB0aGUgZnVsbCBkb2N1bWVudCB3YWxrIHRvIHVwZ3JhZGUgZWxlbWVudHMgd2l0aCB0aGF0IGxvY2FsIG5hbWUgaGFzXG4gICAgLy8gYWxyZWFkeSBoYXBwZW5lZC5cbiAgICBpZiAoZGVmaW5pdGlvbiAmJiB0aGlzLl91bmZsdXNoZWRMb2NhbE5hbWVzLmluZGV4T2YobG9jYWxOYW1lKSA9PT0gLTEpIHtcbiAgICAgIGRlZmVycmVkLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmZXJyZWQudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKG91dGVyKSB7XG4gICAgdGhpcy5fZG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgY29uc3QgaW5uZXIgPSB0aGlzLl9mbHVzaENhbGxiYWNrO1xuICAgIHRoaXMuX2ZsdXNoQ2FsbGJhY2sgPSBmbHVzaCA9PiBvdXRlcigoKSA9PiBpbm5lcihmbHVzaCkpO1xuICB9XG59XG5cbi8vIENsb3N1cmUgY29tcGlsZXIgZXhwb3J0cy5cbndpbmRvd1snQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5J10gPSBDdXN0b21FbGVtZW50UmVnaXN0cnk7XG5DdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlWydkZWZpbmUnXSA9IEN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGUuZGVmaW5lO1xuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZVsnZ2V0J10gPSBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLmdldDtcbkN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGVbJ3doZW5EZWZpbmVkJ10gPSBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLndoZW5EZWZpbmVkO1xuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZVsncG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayddID0gQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBEb2N1bWVudF9jcmVhdGVFbGVtZW50OiB3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQsXG4gIERvY3VtZW50X2NyZWF0ZUVsZW1lbnROUzogd2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50TlMsXG4gIERvY3VtZW50X2ltcG9ydE5vZGU6IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxcbiAgRG9jdW1lbnRfcHJlcGVuZDogd2luZG93LkRvY3VtZW50LnByb3RvdHlwZVsncHJlcGVuZCddLFxuICBEb2N1bWVudF9hcHBlbmQ6IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGVbJ2FwcGVuZCddLFxuICBOb2RlX2Nsb25lTm9kZTogd2luZG93Lk5vZGUucHJvdG90eXBlLmNsb25lTm9kZSxcbiAgTm9kZV9hcHBlbmRDaGlsZDogd2luZG93Lk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkLFxuICBOb2RlX2luc2VydEJlZm9yZTogd2luZG93Lk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSxcbiAgTm9kZV9yZW1vdmVDaGlsZDogd2luZG93Lk5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkLFxuICBOb2RlX3JlcGxhY2VDaGlsZDogd2luZG93Lk5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCxcbiAgTm9kZV90ZXh0Q29udGVudDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuTm9kZS5wcm90b3R5cGUsICd0ZXh0Q29udGVudCcpLFxuICBFbGVtZW50X2F0dGFjaFNoYWRvdzogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydhdHRhY2hTaGFkb3cnXSxcbiAgRWxlbWVudF9pbm5lckhUTUw6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkVsZW1lbnQucHJvdG90eXBlLCAnaW5uZXJIVE1MJyksXG4gIEVsZW1lbnRfZ2V0QXR0cmlidXRlOiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlLFxuICBFbGVtZW50X3NldEF0dHJpYnV0ZTogd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSxcbiAgRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGU6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsXG4gIEVsZW1lbnRfZ2V0QXR0cmlidXRlTlM6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOUyxcbiAgRWxlbWVudF9zZXRBdHRyaWJ1dGVOUzogd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZU5TLFxuICBFbGVtZW50X3JlbW92ZUF0dHJpYnV0ZU5TOiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlTlMsXG4gIEVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50OiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGVbJ2luc2VydEFkamFjZW50RWxlbWVudCddLFxuICBFbGVtZW50X3ByZXBlbmQ6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsncHJlcGVuZCddLFxuICBFbGVtZW50X2FwcGVuZDogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydhcHBlbmQnXSxcbiAgRWxlbWVudF9iZWZvcmU6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsnYmVmb3JlJ10sXG4gIEVsZW1lbnRfYWZ0ZXI6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsnYWZ0ZXInXSxcbiAgRWxlbWVudF9yZXBsYWNlV2l0aDogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydyZXBsYWNlV2l0aCddLFxuICBFbGVtZW50X3JlbW92ZTogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydyZW1vdmUnXSxcbiAgSFRNTEVsZW1lbnQ6IHdpbmRvdy5IVE1MRWxlbWVudCxcbiAgSFRNTEVsZW1lbnRfaW5uZXJIVE1MOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUsICdpbm5lckhUTUwnKSxcbiAgSFRNTEVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50OiB3aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlWydpbnNlcnRBZGphY2VudEVsZW1lbnQnXSxcbn07XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgZXhpc3RzIG9ubHkgdG8gd29yayBhcm91bmQgQ2xvc3VyZSdzIGxhY2sgb2YgYSB3YXkgdG8gZGVzY3JpYmVcbiAqIHNpbmdsZXRvbnMuIEl0IHJlcHJlc2VudHMgdGhlICdhbHJlYWR5IGNvbnN0cnVjdGVkIG1hcmtlcicgdXNlZCBpbiBjdXN0b21cbiAqIGVsZW1lbnQgY29uc3RydWN0aW9uIHN0YWNrcy5cbiAqXG4gKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWFscmVhZHktY29uc3RydWN0ZWQtbWFya2VyXG4gKi9cbmNsYXNzIEFscmVhZHlDb25zdHJ1Y3RlZE1hcmtlciB7fVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyKCk7XG4iLCJpbXBvcnQgTmF0aXZlIGZyb20gJy4vTmF0aXZlLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4uL0N1c3RvbUVsZW1lbnRJbnRlcm5hbHMuanMnO1xuaW1wb3J0IENFU3RhdGUgZnJvbSAnLi4vQ3VzdG9tRWxlbWVudFN0YXRlLmpzJztcbmltcG9ydCBBbHJlYWR5Q29uc3RydWN0ZWRNYXJrZXIgZnJvbSAnLi4vQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyLmpzJztcblxuLyoqXG4gKiBAcGFyYW0geyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJuYWxzKSB7XG4gIHdpbmRvd1snSFRNTEVsZW1lbnQnXSA9IChmdW5jdGlvbigpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb24obmV3OiBIVE1MRWxlbWVudCk6ICFIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBIVE1MRWxlbWVudCgpIHtcbiAgICAgIC8vIFRoaXMgc2hvdWxkIHJlYWxseSBiZSBgbmV3LnRhcmdldGAgYnV0IGBuZXcudGFyZ2V0YCBjYW4ndCBiZSBlbXVsYXRlZFxuICAgICAgLy8gaW4gRVM1LiBBc3N1bWluZyB0aGUgdXNlciBrZWVwcyB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgY29uc3RydWN0b3Inc1xuICAgICAgLy8gcHJvdG90eXBlJ3MgYGNvbnN0cnVjdG9yYCBwcm9wZXJ0eSwgdGhpcyBpcyBlcXVpdmFsZW50LlxuICAgICAgLyoqIEB0eXBlIHshRnVuY3Rpb259ICovXG4gICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbnRlcm5hbHMuY29uc3RydWN0b3JUb0RlZmluaXRpb24oY29uc3RydWN0b3IpO1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGN1c3RvbSBlbGVtZW50IGJlaW5nIGNvbnN0cnVjdGVkIHdhcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBjdXN0b21FbGVtZW50c2AuJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnN0cnVjdGlvblN0YWNrID0gZGVmaW5pdGlvbi5jb25zdHJ1Y3Rpb25TdGFjaztcblxuICAgICAgaWYgKGNvbnN0cnVjdGlvblN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gTmF0aXZlLkRvY3VtZW50X2NyZWF0ZUVsZW1lbnQuY2FsbChkb2N1bWVudCwgZGVmaW5pdGlvbi5sb2NhbE5hbWUpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZWxlbWVudCwgY29uc3RydWN0b3IucHJvdG90eXBlKTtcbiAgICAgICAgZWxlbWVudC5fX0NFX3N0YXRlID0gQ0VTdGF0ZS5jdXN0b207XG4gICAgICAgIGVsZW1lbnQuX19DRV9kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICAgICAgaW50ZXJuYWxzLnBhdGNoKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGFzdEluZGV4ID0gY29uc3RydWN0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb25zdHJ1Y3Rpb25TdGFja1tsYXN0SW5kZXhdO1xuICAgICAgaWYgKGVsZW1lbnQgPT09IEFscmVhZHlDb25zdHJ1Y3RlZE1hcmtlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBIVE1MRWxlbWVudCBjb25zdHJ1Y3RvciB3YXMgZWl0aGVyIGNhbGxlZCByZWVudHJhbnRseSBmb3IgdGhpcyBjb25zdHJ1Y3RvciBvciBjYWxsZWQgbXVsdGlwbGUgdGltZXMuJyk7XG4gICAgICB9XG4gICAgICBjb25zdHJ1Y3Rpb25TdGFja1tsYXN0SW5kZXhdID0gQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyO1xuXG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZWxlbWVudCwgY29uc3RydWN0b3IucHJvdG90eXBlKTtcbiAgICAgIGludGVybmFscy5wYXRjaCgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGVsZW1lbnQpKTtcblxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlID0gTmF0aXZlLkhUTUxFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHJldHVybiBIVE1MRWxlbWVudDtcbiAgfSkoKTtcbn07XG4iLCJpbXBvcnQgQ3VzdG9tRWxlbWVudEludGVybmFscyBmcm9tICcuLi8uLi9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzJztcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICcuLi8uLi9VdGlsaXRpZXMuanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHByZXBlbmQ6ICFmdW5jdGlvbiguLi4oIU5vZGV8c3RyaW5nKSksXG4gICogIGFwcGVuZDogIWZ1bmN0aW9uKC4uLighTm9kZXxzdHJpbmcpKSxcbiAqIH19XG4gKi9cbmxldCBQYXJlbnROb2RlTmF0aXZlTWV0aG9kcztcblxuLyoqXG4gKiBAcGFyYW0geyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHNcbiAqIEBwYXJhbSB7IU9iamVjdH0gZGVzdGluYXRpb25cbiAqIEBwYXJhbSB7IVBhcmVudE5vZGVOYXRpdmVNZXRob2RzfSBidWlsdEluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscywgZGVzdGluYXRpb24sIGJ1aWx0SW4pIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uKCFOb2RlfHN0cmluZyl9IG5vZGVzXG4gICAqL1xuICBkZXN0aW5hdGlvblsncHJlcGVuZCddID0gZnVuY3Rpb24oLi4ubm9kZXMpIHtcbiAgICAvLyBUT0RPOiBGaXggdGhpcyBmb3Igd2hlbiBvbmUgb2YgYG5vZGVzYCBpcyBhIERvY3VtZW50RnJhZ21lbnQhXG4gICAgY29uc3QgY29ubmVjdGVkQmVmb3JlID0gLyoqIEB0eXBlIHshQXJyYXk8IU5vZGU+fSAqLyAobm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xuICAgICAgLy8gRG9jdW1lbnRGcmFnbWVudHMgYXJlIG5vdCBjb25uZWN0ZWQgYW5kIHdpbGwgbm90IGJlIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBOb2RlICYmIFV0aWxpdGllcy5pc0Nvbm5lY3RlZChub2RlKTtcbiAgICB9KSk7XG5cbiAgICBidWlsdEluLnByZXBlbmQuYXBwbHkodGhpcywgbm9kZXMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25uZWN0ZWRCZWZvcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShjb25uZWN0ZWRCZWZvcmVbaV0pO1xuICAgIH1cblxuICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uKCFOb2RlfHN0cmluZyl9IG5vZGVzXG4gICAqL1xuICBkZXN0aW5hdGlvblsnYXBwZW5kJ10gPSBmdW5jdGlvbiguLi5ub2Rlcykge1xuICAgIC8vIFRPRE86IEZpeCB0aGlzIGZvciB3aGVuIG9uZSBvZiBgbm9kZXNgIGlzIGEgRG9jdW1lbnRGcmFnbWVudCFcbiAgICBjb25zdCBjb25uZWN0ZWRCZWZvcmUgPSAvKiogQHR5cGUgeyFBcnJheTwhTm9kZT59ICovIChub2Rlcy5maWx0ZXIobm9kZSA9PiB7XG4gICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBhcmUgbm90IGNvbm5lY3RlZCBhbmQgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgIH0pKTtcblxuICAgIGJ1aWx0SW4uYXBwZW5kLmFwcGx5KHRoaXMsIG5vZGVzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ubmVjdGVkQmVmb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUoY29ubmVjdGVkQmVmb3JlW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCBOYXRpdmUgZnJvbSAnLi9OYXRpdmUuanMnO1xuaW1wb3J0IEN1c3RvbUVsZW1lbnRJbnRlcm5hbHMgZnJvbSAnLi4vQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyc7XG5pbXBvcnQgKiBhcyBVdGlsaXRpZXMgZnJvbSAnLi4vVXRpbGl0aWVzLmpzJztcblxuaW1wb3J0IFBhdGNoUGFyZW50Tm9kZSBmcm9tICcuL0ludGVyZmFjZS9QYXJlbnROb2RlLmpzJztcblxuLyoqXG4gKiBAcGFyYW0geyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJuYWxzKSB7XG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChEb2N1bWVudC5wcm90b3R5cGUsICdjcmVhdGVFbGVtZW50JyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7RG9jdW1lbnR9XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZVxuICAgICAqIEByZXR1cm4geyFFbGVtZW50fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKGxvY2FsTmFtZSkge1xuICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZG9jdW1lbnQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSByZWdpc3RyeS5cbiAgICAgIGlmICh0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGludGVybmFscy5sb2NhbE5hbWVUb0RlZmluaXRpb24obG9jYWxOYW1lKTtcbiAgICAgICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IChkZWZpbml0aW9uLmNvbnN0cnVjdG9yKSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovXG4gICAgICAgIChOYXRpdmUuRG9jdW1lbnRfY3JlYXRlRWxlbWVudC5jYWxsKHRoaXMsIGxvY2FsTmFtZSkpO1xuICAgICAgaW50ZXJuYWxzLnBhdGNoKHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChEb2N1bWVudC5wcm90b3R5cGUsICdpbXBvcnROb2RlJyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7RG9jdW1lbnR9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGRlZXBcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihub2RlLCBkZWVwKSB7XG4gICAgICBjb25zdCBjbG9uZSA9IE5hdGl2ZS5Eb2N1bWVudF9pbXBvcnROb2RlLmNhbGwodGhpcywgbm9kZSwgZGVlcCk7XG4gICAgICAvLyBPbmx5IGNyZWF0ZSBjdXN0b20gZWxlbWVudHMgaWYgdGhpcyBkb2N1bWVudCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdHJ5LlxuICAgICAgaWYgKCF0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpIHtcbiAgICAgICAgaW50ZXJuYWxzLnBhdGNoVHJlZShjbG9uZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnRlcm5hbHMucGF0Y2hBbmRVcGdyYWRlVHJlZShjbG9uZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xvbmU7XG4gICAgfSk7XG5cbiAgY29uc3QgTlNfSFRNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChEb2N1bWVudC5wcm90b3R5cGUsICdjcmVhdGVFbGVtZW50TlMnLFxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtEb2N1bWVudH1cbiAgICAgKiBAcGFyYW0gez9zdHJpbmd9IG5hbWVzcGFjZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWVcbiAgICAgKiBAcmV0dXJuIHshRWxlbWVudH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihuYW1lc3BhY2UsIGxvY2FsTmFtZSkge1xuICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZG9jdW1lbnQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSByZWdpc3RyeS5cbiAgICAgIGlmICh0aGlzLl9fQ0VfaGFzUmVnaXN0cnkgJiYgKG5hbWVzcGFjZSA9PT0gbnVsbCB8fCBuYW1lc3BhY2UgPT09IE5TX0hUTUwpKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbnRlcm5hbHMubG9jYWxOYW1lVG9EZWZpbml0aW9uKGxvY2FsTmFtZSk7XG4gICAgICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyAoZGVmaW5pdGlvbi5jb25zdHJ1Y3RvcikoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICAoTmF0aXZlLkRvY3VtZW50X2NyZWF0ZUVsZW1lbnROUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbG9jYWxOYW1lKSk7XG4gICAgICBpbnRlcm5hbHMucGF0Y2gocmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgUGF0Y2hQYXJlbnROb2RlKGludGVybmFscywgRG9jdW1lbnQucHJvdG90eXBlLCB7XG4gICAgcHJlcGVuZDogTmF0aXZlLkRvY3VtZW50X3ByZXBlbmQsXG4gICAgYXBwZW5kOiBOYXRpdmUuRG9jdW1lbnRfYXBwZW5kLFxuICB9KTtcbn07XG4iLCJpbXBvcnQgTmF0aXZlIGZyb20gJy4vTmF0aXZlLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4uL0N1c3RvbUVsZW1lbnRJbnRlcm5hbHMuanMnO1xuaW1wb3J0ICogYXMgVXRpbGl0aWVzIGZyb20gJy4uL1V0aWxpdGllcy5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscykge1xuICAvLyBgTm9kZSNub2RlVmFsdWVgIGlzIGltcGxlbWVudGVkIG9uIGBBdHRyYC5cbiAgLy8gYE5vZGUjdGV4dENvbnRlbnRgIGlzIGltcGxlbWVudGVkIG9uIGBBdHRyYCwgYEVsZW1lbnRgLlxuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChOb2RlLnByb3RvdHlwZSwgJ2luc2VydEJlZm9yZScsXG4gICAgLyoqXG4gICAgICogQHRoaXMge05vZGV9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7P05vZGV9IHJlZk5vZGVcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihub2RlLCByZWZOb2RlKSB7XG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlLmNoaWxkTm9kZXMpO1xuICAgICAgICBjb25zdCBuYXRpdmVSZXN1bHQgPSBOYXRpdmUuTm9kZV9pbnNlcnRCZWZvcmUuY2FsbCh0aGlzLCBub2RlLCByZWZOb2RlKTtcblxuICAgICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBjYW4ndCBiZSBjb25uZWN0ZWQsIHNvIGBkaXNjb25uZWN0VHJlZWAgd2lsbCBuZXZlclxuICAgICAgICAvLyBuZWVkIHRvIGJlIGNhbGxlZCBvbiBhIERvY3VtZW50RnJhZ21lbnQncyBjaGlsZHJlbiBhZnRlciBpbnNlcnRpbmcgaXQuXG5cbiAgICAgICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKGluc2VydGVkTm9kZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYXRpdmVSZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vZGVXYXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQobm9kZSk7XG4gICAgICBjb25zdCBuYXRpdmVSZXN1bHQgPSBOYXRpdmUuTm9kZV9pbnNlcnRCZWZvcmUuY2FsbCh0aGlzLCBub2RlLCByZWZOb2RlKTtcblxuICAgICAgaWYgKG5vZGVXYXNDb25uZWN0ZWQpIHtcbiAgICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5hdGl2ZVJlc3VsdDtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoTm9kZS5wcm90b3R5cGUsICdhcHBlbmRDaGlsZCcsXG4gICAgLyoqXG4gICAgICogQHRoaXMge05vZGV9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEByZXR1cm4geyFOb2RlfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBjb25zdCBpbnNlcnRlZE5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KG5vZGUuY2hpbGROb2Rlcyk7XG4gICAgICAgIGNvbnN0IG5hdGl2ZVJlc3VsdCA9IE5hdGl2ZS5Ob2RlX2FwcGVuZENoaWxkLmNhbGwodGhpcywgbm9kZSk7XG5cbiAgICAgICAgLy8gRG9jdW1lbnRGcmFnbWVudHMgY2FuJ3QgYmUgY29ubmVjdGVkLCBzbyBgZGlzY29ubmVjdFRyZWVgIHdpbGwgbmV2ZXJcbiAgICAgICAgLy8gbmVlZCB0byBiZSBjYWxsZWQgb24gYSBEb2N1bWVudEZyYWdtZW50J3MgY2hpbGRyZW4gYWZ0ZXIgaW5zZXJ0aW5nIGl0LlxuXG4gICAgICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShpbnNlcnRlZE5vZGVzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmF0aXZlUmVzdWx0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub2RlV2FzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgICAgY29uc3QgbmF0aXZlUmVzdWx0ID0gTmF0aXZlLk5vZGVfYXBwZW5kQ2hpbGQuY2FsbCh0aGlzLCBub2RlKTtcblxuICAgICAgaWYgKG5vZGVXYXNDb25uZWN0ZWQpIHtcbiAgICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5hdGl2ZVJlc3VsdDtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoTm9kZS5wcm90b3R5cGUsICdjbG9uZU5vZGUnLFxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtOb2RlfVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IGRlZXBcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihkZWVwKSB7XG4gICAgICBjb25zdCBjbG9uZSA9IE5hdGl2ZS5Ob2RlX2Nsb25lTm9kZS5jYWxsKHRoaXMsIGRlZXApO1xuICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZWxlbWVudCdzIG93bmVyIGRvY3VtZW50IGlzXG4gICAgICAvLyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdHJ5LlxuICAgICAgaWYgKCF0aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeSkge1xuICAgICAgICBpbnRlcm5hbHMucGF0Y2hUcmVlKGNsb25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludGVybmFscy5wYXRjaEFuZFVwZ3JhZGVUcmVlKGNsb25lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoTm9kZS5wcm90b3R5cGUsICdyZW1vdmVDaGlsZCcsXG4gICAgLyoqXG4gICAgICogQHRoaXMge05vZGV9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEByZXR1cm4geyFOb2RlfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGNvbnN0IG5vZGVXYXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQobm9kZSk7XG4gICAgICBjb25zdCBuYXRpdmVSZXN1bHQgPSBOYXRpdmUuTm9kZV9yZW1vdmVDaGlsZC5jYWxsKHRoaXMsIG5vZGUpO1xuXG4gICAgICBpZiAobm9kZVdhc0Nvbm5lY3RlZCkge1xuICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuYXRpdmVSZXN1bHQ7XG4gICAgfSk7XG5cbiAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKE5vZGUucHJvdG90eXBlLCAncmVwbGFjZUNoaWxkJyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7Tm9kZX1cbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlVG9JbnNlcnRcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlVG9SZW1vdmVcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihub2RlVG9JbnNlcnQsIG5vZGVUb1JlbW92ZSkge1xuICAgICAgaWYgKG5vZGVUb0luc2VydCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlVG9JbnNlcnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIGNvbnN0IG5hdGl2ZVJlc3VsdCA9IE5hdGl2ZS5Ob2RlX3JlcGxhY2VDaGlsZC5jYWxsKHRoaXMsIG5vZGVUb0luc2VydCwgbm9kZVRvUmVtb3ZlKTtcblxuICAgICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBjYW4ndCBiZSBjb25uZWN0ZWQsIHNvIGBkaXNjb25uZWN0VHJlZWAgd2lsbCBuZXZlclxuICAgICAgICAvLyBuZWVkIHRvIGJlIGNhbGxlZCBvbiBhIERvY3VtZW50RnJhZ21lbnQncyBjaGlsZHJlbiBhZnRlciBpbnNlcnRpbmcgaXQuXG5cbiAgICAgICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKSkge1xuICAgICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShub2RlVG9SZW1vdmUpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zZXJ0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKGluc2VydGVkTm9kZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYXRpdmVSZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vZGVUb0luc2VydFdhc0Nvbm5lY3RlZCA9IFV0aWxpdGllcy5pc0Nvbm5lY3RlZChub2RlVG9JbnNlcnQpO1xuICAgICAgY29uc3QgbmF0aXZlUmVzdWx0ID0gTmF0aXZlLk5vZGVfcmVwbGFjZUNoaWxkLmNhbGwodGhpcywgbm9kZVRvSW5zZXJ0LCBub2RlVG9SZW1vdmUpO1xuICAgICAgY29uc3QgdGhpc0lzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpO1xuXG4gICAgICBpZiAodGhpc0lzQ29ubmVjdGVkKSB7XG4gICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShub2RlVG9SZW1vdmUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZVRvSW5zZXJ0V2FzQ29ubmVjdGVkKSB7XG4gICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShub2RlVG9JbnNlcnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpc0lzQ29ubmVjdGVkKSB7XG4gICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlVG9JbnNlcnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmF0aXZlUmVzdWx0O1xuICAgIH0pO1xuXG5cbiAgZnVuY3Rpb24gcGF0Y2hfdGV4dENvbnRlbnQoZGVzdGluYXRpb24sIGJhc2VEZXNjcmlwdG9yKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3RpbmF0aW9uLCAndGV4dENvbnRlbnQnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBiYXNlRGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBiYXNlRGVzY3JpcHRvci5nZXQsXG4gICAgICBzZXQ6IC8qKiBAdGhpcyB7Tm9kZX0gKi8gZnVuY3Rpb24oYXNzaWduZWRWYWx1ZSkge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgdGV4dCBub2RlIHRoZW4gdGhlcmUgYXJlIG5vIG5vZGVzIHRvIGRpc2Nvbm5lY3QuXG4gICAgICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIGJhc2VEZXNjcmlwdG9yLnNldC5jYWxsKHRoaXMsIGFzc2lnbmVkVmFsdWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZW1vdmVkTm9kZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIENoZWNraW5nIGZvciBgZmlyc3RDaGlsZGAgaXMgZmFzdGVyIHRoYW4gcmVhZGluZyBgY2hpbGROb2Rlcy5sZW5ndGhgXG4gICAgICAgIC8vIHRvIGNvbXBhcmUgd2l0aCAwLlxuICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgLy8gVXNpbmcgYGNoaWxkTm9kZXNgIGlzIGZhc3RlciB0aGFuIGBjaGlsZHJlbmAsIGV2ZW4gdGhvdWdoIHdlIG9ubHlcbiAgICAgICAgICAvLyBjYXJlIGFib3V0IGVsZW1lbnRzLlxuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXM7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICAgICAgICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID4gMCAmJiBVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgICAgICAgIC8vIENvcHlpbmcgYW4gYXJyYXkgYnkgaXRlcmF0aW5nIGlzIGZhc3RlciB0aGFuIHVzaW5nIHNsaWNlLlxuICAgICAgICAgICAgcmVtb3ZlZE5vZGVzID0gbmV3IEFycmF5KGNoaWxkTm9kZXNMZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgcmVtb3ZlZE5vZGVzW2ldID0gY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBiYXNlRGVzY3JpcHRvci5zZXQuY2FsbCh0aGlzLCBhc3NpZ25lZFZhbHVlKTtcblxuICAgICAgICBpZiAocmVtb3ZlZE5vZGVzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShyZW1vdmVkTm9kZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChOYXRpdmUuTm9kZV90ZXh0Q29udGVudCAmJiBOYXRpdmUuTm9kZV90ZXh0Q29udGVudC5nZXQpIHtcbiAgICBwYXRjaF90ZXh0Q29udGVudChOb2RlLnByb3RvdHlwZSwgTmF0aXZlLk5vZGVfdGV4dENvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGludGVybmFscy5hZGRQYXRjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBwYXRjaF90ZXh0Q29udGVudChlbGVtZW50LCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgLy8gTk9URTogVGhpcyBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgYHRleHRDb250ZW50YCBnZXR0ZXIgYXNzdW1lcyB0aGF0XG4gICAgICAgIC8vIHRleHQgbm9kZXMnIGB0ZXh0Q29udGVudGAgZ2V0dGVyIHdpbGwgbm90IGJlIHBhdGNoZWQuXG4gICAgICAgIGdldDogLyoqIEB0aGlzIHtOb2RlfSAqLyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvKiogQHR5cGUgeyFBcnJheTxzdHJpbmc+fSAqL1xuICAgICAgICAgIGNvbnN0IHBhcnRzID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFydHMucHVzaCh0aGlzLmNoaWxkTm9kZXNbaV0udGV4dENvbnRlbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJ0cy5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiAvKiogQHRoaXMge05vZGV9ICovIGZ1bmN0aW9uKGFzc2lnbmVkVmFsdWUpIHtcbiAgICAgICAgICB3aGlsZSAodGhpcy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBOYXRpdmUuTm9kZV9yZW1vdmVDaGlsZC5jYWxsKHRoaXMsIHRoaXMuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIE5hdGl2ZS5Ob2RlX2FwcGVuZENoaWxkLmNhbGwodGhpcywgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXNzaWduZWRWYWx1ZSkpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgQ3VzdG9tRWxlbWVudEludGVybmFscyBmcm9tICcuLi8uLi9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzJztcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICcuLi8uLi9VdGlsaXRpZXMuanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGJlZm9yZTogIWZ1bmN0aW9uKC4uLighTm9kZXxzdHJpbmcpKSxcbiAqICAgYWZ0ZXI6ICFmdW5jdGlvbiguLi4oIU5vZGV8c3RyaW5nKSksXG4gKiAgIHJlcGxhY2VXaXRoOiAhZnVuY3Rpb24oLi4uKCFOb2RlfHN0cmluZykpLFxuICogICByZW1vdmU6ICFmdW5jdGlvbigpLFxuICogfX1cbiAqL1xubGV0IENoaWxkTm9kZU5hdGl2ZU1ldGhvZHM7XG5cbi8qKlxuICogQHBhcmFtIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzXG4gKiBAcGFyYW0geyFPYmplY3R9IGRlc3RpbmF0aW9uXG4gKiBAcGFyYW0geyFDaGlsZE5vZGVOYXRpdmVNZXRob2RzfSBidWlsdEluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscywgZGVzdGluYXRpb24sIGJ1aWx0SW4pIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uKCFOb2RlfHN0cmluZyl9IG5vZGVzXG4gICAqL1xuICBkZXN0aW5hdGlvblsnYmVmb3JlJ10gPSBmdW5jdGlvbiguLi5ub2Rlcykge1xuICAgIC8vIFRPRE86IEZpeCB0aGlzIGZvciB3aGVuIG9uZSBvZiBgbm9kZXNgIGlzIGEgRG9jdW1lbnRGcmFnbWVudCFcbiAgICBjb25zdCBjb25uZWN0ZWRCZWZvcmUgPSAvKiogQHR5cGUgeyFBcnJheTwhTm9kZT59ICovIChub2Rlcy5maWx0ZXIobm9kZSA9PiB7XG4gICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBhcmUgbm90IGNvbm5lY3RlZCBhbmQgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgIH0pKTtcblxuICAgIGJ1aWx0SW4uYmVmb3JlLmFwcGx5KHRoaXMsIG5vZGVzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ubmVjdGVkQmVmb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUoY29ubmVjdGVkQmVmb3JlW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gey4uLighTm9kZXxzdHJpbmcpfSBub2Rlc1xuICAgKi9cbiAgZGVzdGluYXRpb25bJ2FmdGVyJ10gPSBmdW5jdGlvbiguLi5ub2Rlcykge1xuICAgIC8vIFRPRE86IEZpeCB0aGlzIGZvciB3aGVuIG9uZSBvZiBgbm9kZXNgIGlzIGEgRG9jdW1lbnRGcmFnbWVudCFcbiAgICBjb25zdCBjb25uZWN0ZWRCZWZvcmUgPSAvKiogQHR5cGUgeyFBcnJheTwhTm9kZT59ICovIChub2Rlcy5maWx0ZXIobm9kZSA9PiB7XG4gICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBhcmUgbm90IGNvbm5lY3RlZCBhbmQgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgIH0pKTtcblxuICAgIGJ1aWx0SW4uYWZ0ZXIuYXBwbHkodGhpcywgbm9kZXMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25uZWN0ZWRCZWZvcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShjb25uZWN0ZWRCZWZvcmVbaV0pO1xuICAgIH1cblxuICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uKCFOb2RlfHN0cmluZyl9IG5vZGVzXG4gICAqL1xuICBkZXN0aW5hdGlvblsncmVwbGFjZVdpdGgnXSA9IGZ1bmN0aW9uKC4uLm5vZGVzKSB7XG4gICAgLy8gVE9ETzogRml4IHRoaXMgZm9yIHdoZW4gb25lIG9mIGBub2Rlc2AgaXMgYSBEb2N1bWVudEZyYWdtZW50IVxuICAgIGNvbnN0IGNvbm5lY3RlZEJlZm9yZSA9IC8qKiBAdHlwZSB7IUFycmF5PCFOb2RlPn0gKi8gKG5vZGVzLmZpbHRlcihub2RlID0+IHtcbiAgICAgIC8vIERvY3VtZW50RnJhZ21lbnRzIGFyZSBub3QgY29ubmVjdGVkIGFuZCB3aWxsIG5vdCBiZSBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgTm9kZSAmJiBVdGlsaXRpZXMuaXNDb25uZWN0ZWQobm9kZSk7XG4gICAgfSkpO1xuXG4gICAgY29uc3Qgd2FzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpO1xuXG4gICAgYnVpbHRJbi5yZXBsYWNlV2l0aC5hcHBseSh0aGlzLCBub2Rlcyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbm5lY3RlZEJlZm9yZS5sZW5ndGg7IGkrKykge1xuICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKGNvbm5lY3RlZEJlZm9yZVtpXSk7XG4gICAgfVxuXG4gICAgaWYgKHdhc0Nvbm5lY3RlZCkge1xuICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKHRoaXMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkZXN0aW5hdGlvblsncmVtb3ZlJ10gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB3YXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcyk7XG5cbiAgICBidWlsdEluLnJlbW92ZS5jYWxsKHRoaXMpO1xuXG4gICAgaWYgKHdhc0Nvbm5lY3RlZCkge1xuICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKHRoaXMpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgTmF0aXZlIGZyb20gJy4vTmF0aXZlLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4uL0N1c3RvbUVsZW1lbnRJbnRlcm5hbHMuanMnO1xuaW1wb3J0IENFU3RhdGUgZnJvbSAnLi4vQ3VzdG9tRWxlbWVudFN0YXRlLmpzJztcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICcuLi9VdGlsaXRpZXMuanMnO1xuXG5pbXBvcnQgUGF0Y2hQYXJlbnROb2RlIGZyb20gJy4vSW50ZXJmYWNlL1BhcmVudE5vZGUuanMnO1xuaW1wb3J0IFBhdGNoQ2hpbGROb2RlIGZyb20gJy4vSW50ZXJmYWNlL0NoaWxkTm9kZS5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscykge1xuICBpZiAoTmF0aXZlLkVsZW1lbnRfYXR0YWNoU2hhZG93KSB7XG4gICAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKEVsZW1lbnQucHJvdG90eXBlLCAnYXR0YWNoU2hhZG93JyxcbiAgICAgIC8qKlxuICAgICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICAgKiBAcGFyYW0geyF7bW9kZTogc3RyaW5nfX0gaW5pdFxuICAgICAgICogQHJldHVybiB7U2hhZG93Um9vdH1cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24oaW5pdCkge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gTmF0aXZlLkVsZW1lbnRfYXR0YWNoU2hhZG93LmNhbGwodGhpcywgaW5pdCk7XG4gICAgICAgIHRoaXMuX19DRV9zaGFkb3dSb290ID0gc2hhZG93Um9vdDtcbiAgICAgICAgcmV0dXJuIHNoYWRvd1Jvb3Q7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oJ0N1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjYXR0YWNoU2hhZG93YCB3YXMgbm90IHBhdGNoZWQuJyk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHBhdGNoX2lubmVySFRNTChkZXN0aW5hdGlvbiwgYmFzZURlc2NyaXB0b3IpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdGluYXRpb24sICdpbm5lckhUTUwnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBiYXNlRGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBiYXNlRGVzY3JpcHRvci5nZXQsXG4gICAgICBzZXQ6IC8qKiBAdGhpcyB7RWxlbWVudH0gKi8gZnVuY3Rpb24oaHRtbFN0cmluZykge1xuICAgICAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKTtcblxuICAgICAgICAvLyBOT1RFOiBJbiBJRTExLCB3aGVuIHVzaW5nIHRoZSBuYXRpdmUgYGlubmVySFRNTGAgc2V0dGVyLCBhbGwgbm9kZXNcbiAgICAgICAgLy8gdGhhdCB3ZXJlIHByZXZpb3VzbHkgZGVzY2VuZGFudHMgb2YgdGhlIGNvbnRleHQgZWxlbWVudCBoYXZlIGFsbCBvZlxuICAgICAgICAvLyB0aGVpciBjaGlsZHJlbiByZW1vdmVkIGFzIHBhcnQgb2YgdGhlIHNldCAtIHRoZSBlbnRpcmUgc3VidHJlZSBpc1xuICAgICAgICAvLyAnZGlzYXNzZW1ibGVkJy4gVGhpcyB3b3JrIGFyb3VuZCB3YWxrcyB0aGUgc3VidHJlZSAqYmVmb3JlKiB1c2luZyB0aGVcbiAgICAgICAgLy8gbmF0aXZlIHNldHRlci5cbiAgICAgICAgLyoqIEB0eXBlIHshQXJyYXk8IUVsZW1lbnQ+fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgbGV0IHJlbW92ZWRFbGVtZW50cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgcmVtb3ZlZEVsZW1lbnRzID0gW107XG4gICAgICAgICAgVXRpbGl0aWVzLndhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzKHRoaXMsIGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlZEVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBiYXNlRGVzY3JpcHRvci5zZXQuY2FsbCh0aGlzLCBodG1sU3RyaW5nKTtcblxuICAgICAgICBpZiAocmVtb3ZlZEVsZW1lbnRzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZW1vdmVkRWxlbWVudHNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5fX0NFX3N0YXRlID09PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdGVkQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZWxlbWVudCdzIG93bmVyIGRvY3VtZW50IGlzXG4gICAgICAgIC8vIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0cnkuXG4gICAgICAgIGlmICghdGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnkpIHtcbiAgICAgICAgICBpbnRlcm5hbHMucGF0Y2hUcmVlKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGludGVybmFscy5wYXRjaEFuZFVwZ3JhZGVUcmVlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sU3RyaW5nO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChOYXRpdmUuRWxlbWVudF9pbm5lckhUTUwgJiYgTmF0aXZlLkVsZW1lbnRfaW5uZXJIVE1MLmdldCkge1xuICAgIHBhdGNoX2lubmVySFRNTChFbGVtZW50LnByb3RvdHlwZSwgTmF0aXZlLkVsZW1lbnRfaW5uZXJIVE1MKTtcbiAgfSBlbHNlIGlmIChOYXRpdmUuSFRNTEVsZW1lbnRfaW5uZXJIVE1MICYmIE5hdGl2ZS5IVE1MRWxlbWVudF9pbm5lckhUTUwuZ2V0KSB7XG4gICAgcGF0Y2hfaW5uZXJIVE1MKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgTmF0aXZlLkhUTUxFbGVtZW50X2lubmVySFRNTCk7XG4gIH0gZWxzZSB7XG5cbiAgICAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqL1xuICAgIGNvbnN0IHJhd0RpdiA9IE5hdGl2ZS5Eb2N1bWVudF9jcmVhdGVFbGVtZW50LmNhbGwoZG9jdW1lbnQsICdkaXYnKTtcblxuICAgIGludGVybmFscy5hZGRQYXRjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBwYXRjaF9pbm5lckhUTUwoZWxlbWVudCwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIC8vIEltcGxlbWVudHMgZ2V0dGluZyBgaW5uZXJIVE1MYCBieSBwZXJmb3JtaW5nIGFuIHVucGF0Y2hlZCBgY2xvbmVOb2RlYFxuICAgICAgICAvLyBvZiB0aGUgZWxlbWVudCBhbmQgcmV0dXJuaW5nIHRoZSByZXN1bHRpbmcgZWxlbWVudCdzIGBpbm5lckhUTUxgLlxuICAgICAgICAvLyBUT0RPOiBJcyB0aGlzIHRvbyBleHBlbnNpdmU/XG4gICAgICAgIGdldDogLyoqIEB0aGlzIHtFbGVtZW50fSAqLyBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gTmF0aXZlLk5vZGVfY2xvbmVOb2RlLmNhbGwodGhpcywgdHJ1ZSkuaW5uZXJIVE1MO1xuICAgICAgICB9LFxuICAgICAgICAvLyBJbXBsZW1lbnRzIHNldHRpbmcgYGlubmVySFRNTGAgYnkgY3JlYXRpbmcgYW4gdW5wYXRjaGVkIGVsZW1lbnQsXG4gICAgICAgIC8vIHNldHRpbmcgYGlubmVySFRNTGAgb2YgdGhhdCBlbGVtZW50IGFuZCByZXBsYWNpbmcgdGhlIHRhcmdldFxuICAgICAgICAvLyBlbGVtZW50J3MgY2hpbGRyZW4gd2l0aCB0aG9zZSBvZiB0aGUgdW5wYXRjaGVkIGVsZW1lbnQuXG4gICAgICAgIHNldDogLyoqIEB0aGlzIHtFbGVtZW50fSAqLyBmdW5jdGlvbihhc3NpZ25lZFZhbHVlKSB7XG4gICAgICAgICAgLy8gTk9URTogcmUtcm91dGUgdG8gYGNvbnRlbnRgIGZvciBgdGVtcGxhdGVgIGVsZW1lbnRzLlxuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gZG8gdGhpcyBiZWNhdXNlIGB0ZW1wbGF0ZS5hcHBlbmRDaGlsZGAgZG9lcyBub3RcbiAgICAgICAgICAvLyByb3V0ZSBpbnRvIGB0ZW1wbGF0ZS5jb250ZW50YC5cbiAgICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmxvY2FsTmFtZSA9PT0gJ3RlbXBsYXRlJyA/ICgvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyAodGhpcykpLmNvbnRlbnQgOiB0aGlzO1xuICAgICAgICAgIHJhd0Rpdi5pbm5lckhUTUwgPSBhc3NpZ25lZFZhbHVlO1xuXG4gICAgICAgICAgd2hpbGUgKGNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBOYXRpdmUuTm9kZV9yZW1vdmVDaGlsZC5jYWxsKGNvbnRlbnQsIGNvbnRlbnQuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlIChyYXdEaXYuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBOYXRpdmUuTm9kZV9hcHBlbmRDaGlsZC5jYWxsKGNvbnRlbnQsIHJhd0Rpdi5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKEVsZW1lbnQucHJvdG90eXBlLCAnc2V0QXR0cmlidXRlJyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7RWxlbWVudH1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgICAvLyBGYXN0IHBhdGggZm9yIG5vbi1jdXN0b20gZWxlbWVudHMuXG4gICAgICBpZiAodGhpcy5fX0NFX3N0YXRlICE9PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICByZXR1cm4gTmF0aXZlLkVsZW1lbnRfc2V0QXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IE5hdGl2ZS5FbGVtZW50X2dldEF0dHJpYnV0ZS5jYWxsKHRoaXMsIG5hbWUpO1xuICAgICAgTmF0aXZlLkVsZW1lbnRfc2V0QXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgbmV3VmFsdWUgPSBOYXRpdmUuRWxlbWVudF9nZXRBdHRyaWJ1dGUuY2FsbCh0aGlzLCBuYW1lKTtcbiAgICAgIGludGVybmFscy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcywgbmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBudWxsKTtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoRWxlbWVudC5wcm90b3R5cGUsICdzZXRBdHRyaWJ1dGVOUycsXG4gICAgLyoqXG4gICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSBuYW1lc3BhY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5hbWVzcGFjZSwgbmFtZSwgbmV3VmFsdWUpIHtcbiAgICAgIC8vIEZhc3QgcGF0aCBmb3Igbm9uLWN1c3RvbSBlbGVtZW50cy5cbiAgICAgIGlmICh0aGlzLl9fQ0Vfc3RhdGUgIT09IENFU3RhdGUuY3VzdG9tKSB7XG4gICAgICAgIHJldHVybiBOYXRpdmUuRWxlbWVudF9zZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IE5hdGl2ZS5FbGVtZW50X2dldEF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lKTtcbiAgICAgIE5hdGl2ZS5FbGVtZW50X3NldEF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lLCBuZXdWYWx1ZSk7XG4gICAgICBuZXdWYWx1ZSA9IE5hdGl2ZS5FbGVtZW50X2dldEF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lKTtcbiAgICAgIGludGVybmFscy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcywgbmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBuYW1lc3BhY2UpO1xuICAgIH0pO1xuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChFbGVtZW50LnByb3RvdHlwZSwgJ3JlbW92ZUF0dHJpYnV0ZScsXG4gICAgLyoqXG4gICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAvLyBGYXN0IHBhdGggZm9yIG5vbi1jdXN0b20gZWxlbWVudHMuXG4gICAgICBpZiAodGhpcy5fX0NFX3N0YXRlICE9PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICByZXR1cm4gTmF0aXZlLkVsZW1lbnRfcmVtb3ZlQXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gTmF0aXZlLkVsZW1lbnRfZ2V0QXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSk7XG4gICAgICBOYXRpdmUuRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGUuY2FsbCh0aGlzLCBuYW1lKTtcbiAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBpbnRlcm5hbHMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsIG5hbWUsIG9sZFZhbHVlLCBudWxsLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoRWxlbWVudC5wcm90b3R5cGUsICdyZW1vdmVBdHRyaWJ1dGVOUycsXG4gICAgLyoqXG4gICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSBuYW1lc3BhY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uKG5hbWVzcGFjZSwgbmFtZSkge1xuICAgICAgLy8gRmFzdCBwYXRoIGZvciBub24tY3VzdG9tIGVsZW1lbnRzLlxuICAgICAgaWYgKHRoaXMuX19DRV9zdGF0ZSAhPT0gQ0VTdGF0ZS5jdXN0b20pIHtcbiAgICAgICAgcmV0dXJuIE5hdGl2ZS5FbGVtZW50X3JlbW92ZUF0dHJpYnV0ZU5TLmNhbGwodGhpcywgbmFtZXNwYWNlLCBuYW1lKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSBOYXRpdmUuRWxlbWVudF9nZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgICBOYXRpdmUuRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgICAvLyBJbiBvbGRlciBicm93c2VycywgYEVsZW1lbnQjZ2V0QXR0cmlidXRlTlNgIG1heSByZXR1cm4gdGhlIGVtcHR5IHN0cmluZ1xuICAgICAgLy8gaW5zdGVhZCBvZiBudWxsIGlmIHRoZSBhdHRyaWJ1dGUgZG9lcyBub3QgZXhpc3QuIEZvciBkZXRhaWxzLCBzZWU7XG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9nZXRBdHRyaWJ1dGVOUyNOb3Rlc1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBOYXRpdmUuRWxlbWVudF9nZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIGludGVybmFscy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcywgbmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBuYW1lc3BhY2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgZnVuY3Rpb24gcGF0Y2hfaW5zZXJ0QWRqYWNlbnRFbGVtZW50KGRlc3RpbmF0aW9uLCBiYXNlTWV0aG9kKSB7XG4gICAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKGRlc3RpbmF0aW9uLCAnaW5zZXJ0QWRqYWNlbnRFbGVtZW50JyxcbiAgICAgIC8qKlxuICAgICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2hlcmVcbiAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICAgICAqIEByZXR1cm4gez9FbGVtZW50fVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbih3aGVyZSwgZWxlbWVudCkge1xuICAgICAgICBjb25zdCB3YXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGluc2VydGVkRWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovXG4gICAgICAgICAgKGJhc2VNZXRob2QuY2FsbCh0aGlzLCB3aGVyZSwgZWxlbWVudCkpO1xuXG4gICAgICAgIGlmICh3YXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKGluc2VydGVkRWxlbWVudCkpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc2VydGVkRWxlbWVudDtcbiAgICAgIH0pO1xuICB9XG5cbiAgaWYgKE5hdGl2ZS5IVE1MRWxlbWVudF9pbnNlcnRBZGphY2VudEVsZW1lbnQpIHtcbiAgICBwYXRjaF9pbnNlcnRBZGphY2VudEVsZW1lbnQoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBOYXRpdmUuSFRNTEVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50KTtcbiAgfSBlbHNlIGlmIChOYXRpdmUuRWxlbWVudF9pbnNlcnRBZGphY2VudEVsZW1lbnQpIHtcbiAgICBwYXRjaF9pbnNlcnRBZGphY2VudEVsZW1lbnQoRWxlbWVudC5wcm90b3R5cGUsIE5hdGl2ZS5FbGVtZW50X2luc2VydEFkamFjZW50RWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKCdDdXN0b20gRWxlbWVudHM6IGBFbGVtZW50I2luc2VydEFkamFjZW50RWxlbWVudGAgd2FzIG5vdCBwYXRjaGVkLicpO1xuICB9XG5cblxuICBQYXRjaFBhcmVudE5vZGUoaW50ZXJuYWxzLCBFbGVtZW50LnByb3RvdHlwZSwge1xuICAgIHByZXBlbmQ6IE5hdGl2ZS5FbGVtZW50X3ByZXBlbmQsXG4gICAgYXBwZW5kOiBOYXRpdmUuRWxlbWVudF9hcHBlbmQsXG4gIH0pO1xuXG4gIFBhdGNoQ2hpbGROb2RlKGludGVybmFscywgRWxlbWVudC5wcm90b3R5cGUsIHtcbiAgICBiZWZvcmU6IE5hdGl2ZS5FbGVtZW50X2JlZm9yZSxcbiAgICBhZnRlcjogTmF0aXZlLkVsZW1lbnRfYWZ0ZXIsXG4gICAgcmVwbGFjZVdpdGg6IE5hdGl2ZS5FbGVtZW50X3JlcGxhY2VXaXRoLFxuICAgIHJlbW92ZTogTmF0aXZlLkVsZW1lbnRfcmVtb3ZlLFxuICB9KTtcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IEN1c3RvbUVsZW1lbnRJbnRlcm5hbHMgZnJvbSAnLi9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50UmVnaXN0cnkgZnJvbSAnLi9DdXN0b21FbGVtZW50UmVnaXN0cnkuanMnO1xuXG5pbXBvcnQgUGF0Y2hIVE1MRWxlbWVudCBmcm9tICcuL1BhdGNoL0hUTUxFbGVtZW50LmpzJztcbmltcG9ydCBQYXRjaERvY3VtZW50IGZyb20gJy4vUGF0Y2gvRG9jdW1lbnQuanMnO1xuaW1wb3J0IFBhdGNoTm9kZSBmcm9tICcuL1BhdGNoL05vZGUuanMnO1xuaW1wb3J0IFBhdGNoRWxlbWVudCBmcm9tICcuL1BhdGNoL0VsZW1lbnQuanMnO1xuXG5jb25zdCBwcmlvckN1c3RvbUVsZW1lbnRzID0gd2luZG93WydjdXN0b21FbGVtZW50cyddO1xuXG5pZiAoIXByaW9yQ3VzdG9tRWxlbWVudHMgfHxcbiAgICAgcHJpb3JDdXN0b21FbGVtZW50c1snZm9yY2VQb2x5ZmlsbCddIHx8XG4gICAgICh0eXBlb2YgcHJpb3JDdXN0b21FbGVtZW50c1snZGVmaW5lJ10gIT0gJ2Z1bmN0aW9uJykgfHxcbiAgICAgKHR5cGVvZiBwcmlvckN1c3RvbUVsZW1lbnRzWydnZXQnXSAhPSAnZnVuY3Rpb24nKSkge1xuICAvKiogQHR5cGUgeyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSAqL1xuICBjb25zdCBpbnRlcm5hbHMgPSBuZXcgQ3VzdG9tRWxlbWVudEludGVybmFscygpO1xuXG4gIFBhdGNoSFRNTEVsZW1lbnQoaW50ZXJuYWxzKTtcbiAgUGF0Y2hEb2N1bWVudChpbnRlcm5hbHMpO1xuICBQYXRjaE5vZGUoaW50ZXJuYWxzKTtcbiAgUGF0Y2hFbGVtZW50KGludGVybmFscyk7XG5cbiAgLy8gVGhlIG1haW4gZG9jdW1lbnQgaXMgYWx3YXlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0cnkuXG4gIGRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnkgPSB0cnVlO1xuXG4gIC8qKiBAdHlwZSB7IUN1c3RvbUVsZW1lbnRSZWdpc3RyeX0gKi9cbiAgY29uc3QgY3VzdG9tRWxlbWVudHMgPSBuZXcgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5KGludGVybmFscyk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ2N1c3RvbUVsZW1lbnRzJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBjdXN0b21FbGVtZW50cyxcbiAgfSk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8vIEB2ZXJzaW9uIDAuNy4yMlxuaWYgKHR5cGVvZiBXZWFrTWFwID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgdmFyIGNvdW50ZXIgPSBEYXRlLm5vdygpICUgMWU5O1xuICAgIHZhciBXZWFrTWFwID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLm5hbWUgPSBcIl9fc3RcIiArIChNYXRoLnJhbmRvbSgpICogMWU5ID4+PiAwKSArIChjb3VudGVyKysgKyBcIl9fXCIpO1xuICAgIH07XG4gICAgV2Vha01hcC5wcm90b3R5cGUgPSB7XG4gICAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0ga2V5W3RoaXMubmFtZV07XG4gICAgICAgIGlmIChlbnRyeSAmJiBlbnRyeVswXSA9PT0ga2V5KSBlbnRyeVsxXSA9IHZhbHVlOyBlbHNlIGRlZmluZVByb3BlcnR5KGtleSwgdGhpcy5uYW1lLCB7XG4gICAgICAgICAgdmFsdWU6IFsga2V5LCB2YWx1ZSBdLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHJldHVybiAoZW50cnkgPSBrZXlbdGhpcy5uYW1lXSkgJiYgZW50cnlbMF0gPT09IGtleSA/IGVudHJ5WzFdIDogdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICAgIFwiZGVsZXRlXCI6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgZW50cnkgPSBrZXlbdGhpcy5uYW1lXTtcbiAgICAgICAgaWYgKCFlbnRyeSB8fCBlbnRyeVswXSAhPT0ga2V5KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVudHJ5WzBdID0gZW50cnlbMV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGhhczogZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciBlbnRyeSA9IGtleVt0aGlzLm5hbWVdO1xuICAgICAgICBpZiAoIWVudHJ5KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBlbnRyeVswXSA9PT0ga2V5O1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LldlYWtNYXAgPSBXZWFrTWFwO1xuICB9KSgpO1xufVxuXG4oZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIGlmIChnbG9iYWwuSnNNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciByZWdpc3RyYXRpb25zVGFibGUgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgc2V0SW1tZWRpYXRlO1xuICBpZiAoL1RyaWRlbnR8RWRnZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgIHNldEltbWVkaWF0ZSA9IHNldFRpbWVvdXQ7XG4gIH0gZWxzZSBpZiAod2luZG93LnNldEltbWVkaWF0ZSkge1xuICAgIHNldEltbWVkaWF0ZSA9IHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNldEltbWVkaWF0ZVF1ZXVlID0gW107XG4gICAgdmFyIHNlbnRpbmVsID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5kYXRhID09PSBzZW50aW5lbCkge1xuICAgICAgICB2YXIgcXVldWUgPSBzZXRJbW1lZGlhdGVRdWV1ZTtcbiAgICAgICAgc2V0SW1tZWRpYXRlUXVldWUgPSBbXTtcbiAgICAgICAgcXVldWUuZm9yRWFjaChmdW5jdGlvbihmdW5jKSB7XG4gICAgICAgICAgZnVuYygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgICBzZXRJbW1lZGlhdGVRdWV1ZS5wdXNoKGZ1bmMpO1xuICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHNlbnRpbmVsLCBcIipcIik7XG4gICAgfTtcbiAgfVxuICB2YXIgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgdmFyIHNjaGVkdWxlZE9ic2VydmVycyA9IFtdO1xuICBmdW5jdGlvbiBzY2hlZHVsZUNhbGxiYWNrKG9ic2VydmVyKSB7XG4gICAgc2NoZWR1bGVkT2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIGlmICghaXNTY2hlZHVsZWQpIHtcbiAgICAgIGlzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHNldEltbWVkaWF0ZShkaXNwYXRjaENhbGxiYWNrcyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHdyYXBJZk5lZWRlZChub2RlKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5TaGFkb3dET01Qb2x5ZmlsbCAmJiB3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwud3JhcElmTmVlZGVkKG5vZGUpIHx8IG5vZGU7XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGF0Y2hDYWxsYmFja3MoKSB7XG4gICAgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICB2YXIgb2JzZXJ2ZXJzID0gc2NoZWR1bGVkT2JzZXJ2ZXJzO1xuICAgIHNjaGVkdWxlZE9ic2VydmVycyA9IFtdO1xuICAgIG9ic2VydmVycy5zb3J0KGZ1bmN0aW9uKG8xLCBvMikge1xuICAgICAgcmV0dXJuIG8xLnVpZF8gLSBvMi51aWRfO1xuICAgIH0pO1xuICAgIHZhciBhbnlOb25FbXB0eSA9IGZhbHNlO1xuICAgIG9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgICB2YXIgcXVldWUgPSBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xuICAgICAgcmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzRm9yKG9ic2VydmVyKTtcbiAgICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgb2JzZXJ2ZXIuY2FsbGJhY2tfKHF1ZXVlLCBvYnNlcnZlcik7XG4gICAgICAgIGFueU5vbkVtcHR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoYW55Tm9uRW1wdHkpIGRpc3BhdGNoQ2FsbGJhY2tzKCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzRm9yKG9ic2VydmVyKSB7XG4gICAgb2JzZXJ2ZXIubm9kZXNfLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIHJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zVGFibGUuZ2V0KG5vZGUpO1xuICAgICAgaWYgKCFyZWdpc3RyYXRpb25zKSByZXR1cm47XG4gICAgICByZWdpc3RyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgIGlmIChyZWdpc3RyYXRpb24ub2JzZXJ2ZXIgPT09IG9ic2VydmVyKSByZWdpc3RyYXRpb24ucmVtb3ZlVHJhbnNpZW50T2JzZXJ2ZXJzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBmb3JFYWNoQW5jZXN0b3JBbmRPYnNlcnZlckVucXVldWVSZWNvcmQodGFyZ2V0LCBjYWxsYmFjaykge1xuICAgIGZvciAodmFyIG5vZGUgPSB0YXJnZXQ7IG5vZGU7IG5vZGUgPSBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHZhciByZWdpc3RyYXRpb25zID0gcmVnaXN0cmF0aW9uc1RhYmxlLmdldChub2RlKTtcbiAgICAgIGlmIChyZWdpc3RyYXRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVnaXN0cmF0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHZhciByZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25zW2pdO1xuICAgICAgICAgIHZhciBvcHRpb25zID0gcmVnaXN0cmF0aW9uLm9wdGlvbnM7XG4gICAgICAgICAgaWYgKG5vZGUgIT09IHRhcmdldCAmJiAhb3B0aW9ucy5zdWJ0cmVlKSBjb250aW51ZTtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gY2FsbGJhY2sob3B0aW9ucyk7XG4gICAgICAgICAgaWYgKHJlY29yZCkgcmVnaXN0cmF0aW9uLmVucXVldWUocmVjb3JkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgdWlkQ291bnRlciA9IDA7XG4gIGZ1bmN0aW9uIEpzTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XG4gICAgdGhpcy5ub2Rlc18gPSBbXTtcbiAgICB0aGlzLnJlY29yZHNfID0gW107XG4gICAgdGhpcy51aWRfID0gKyt1aWRDb3VudGVyO1xuICB9XG4gIEpzTXV0YXRpb25PYnNlcnZlci5wcm90b3R5cGUgPSB7XG4gICAgb2JzZXJ2ZTogZnVuY3Rpb24odGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0YXJnZXQgPSB3cmFwSWZOZWVkZWQodGFyZ2V0KTtcbiAgICAgIGlmICghb3B0aW9ucy5jaGlsZExpc3QgJiYgIW9wdGlvbnMuYXR0cmlidXRlcyAmJiAhb3B0aW9ucy5jaGFyYWN0ZXJEYXRhIHx8IG9wdGlvbnMuYXR0cmlidXRlT2xkVmFsdWUgJiYgIW9wdGlvbnMuYXR0cmlidXRlcyB8fCBvcHRpb25zLmF0dHJpYnV0ZUZpbHRlciAmJiBvcHRpb25zLmF0dHJpYnV0ZUZpbHRlci5sZW5ndGggJiYgIW9wdGlvbnMuYXR0cmlidXRlcyB8fCBvcHRpb25zLmNoYXJhY3RlckRhdGFPbGRWYWx1ZSAmJiAhb3B0aW9ucy5jaGFyYWN0ZXJEYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcigpO1xuICAgICAgfVxuICAgICAgdmFyIHJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zVGFibGUuZ2V0KHRhcmdldCk7XG4gICAgICBpZiAoIXJlZ2lzdHJhdGlvbnMpIHJlZ2lzdHJhdGlvbnNUYWJsZS5zZXQodGFyZ2V0LCByZWdpc3RyYXRpb25zID0gW10pO1xuICAgICAgdmFyIHJlZ2lzdHJhdGlvbjtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocmVnaXN0cmF0aW9uc1tpXS5vYnNlcnZlciA9PT0gdGhpcykge1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvbnNbaV07XG4gICAgICAgICAgcmVnaXN0cmF0aW9uLnJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgcmVnaXN0cmF0aW9uID0gbmV3IFJlZ2lzdHJhdGlvbih0aGlzLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgICAgICByZWdpc3RyYXRpb25zLnB1c2gocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgdGhpcy5ub2Rlc18ucHVzaCh0YXJnZXQpO1xuICAgICAgfVxuICAgICAgcmVnaXN0cmF0aW9uLmFkZExpc3RlbmVycygpO1xuICAgIH0sXG4gICAgZGlzY29ubmVjdDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLm5vZGVzXy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIHJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zVGFibGUuZ2V0KG5vZGUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdHJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgcmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uc1tpXTtcbiAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uLm9ic2VydmVyID09PSB0aGlzKSB7XG4gICAgICAgICAgICByZWdpc3RyYXRpb24ucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICByZWdpc3RyYXRpb25zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgICB0aGlzLnJlY29yZHNfID0gW107XG4gICAgfSxcbiAgICB0YWtlUmVjb3JkczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29weU9mUmVjb3JkcyA9IHRoaXMucmVjb3Jkc187XG4gICAgICB0aGlzLnJlY29yZHNfID0gW107XG4gICAgICByZXR1cm4gY29weU9mUmVjb3JkcztcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIE11dGF0aW9uUmVjb3JkKHR5cGUsIHRhcmdldCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5hZGRlZE5vZGVzID0gW107XG4gICAgdGhpcy5yZW1vdmVkTm9kZXMgPSBbXTtcbiAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgdGhpcy5hdHRyaWJ1dGVOYW1lID0gbnVsbDtcbiAgICB0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZSA9IG51bGw7XG4gICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gY29weU11dGF0aW9uUmVjb3JkKG9yaWdpbmFsKSB7XG4gICAgdmFyIHJlY29yZCA9IG5ldyBNdXRhdGlvblJlY29yZChvcmlnaW5hbC50eXBlLCBvcmlnaW5hbC50YXJnZXQpO1xuICAgIHJlY29yZC5hZGRlZE5vZGVzID0gb3JpZ2luYWwuYWRkZWROb2Rlcy5zbGljZSgpO1xuICAgIHJlY29yZC5yZW1vdmVkTm9kZXMgPSBvcmlnaW5hbC5yZW1vdmVkTm9kZXMuc2xpY2UoKTtcbiAgICByZWNvcmQucHJldmlvdXNTaWJsaW5nID0gb3JpZ2luYWwucHJldmlvdXNTaWJsaW5nO1xuICAgIHJlY29yZC5uZXh0U2libGluZyA9IG9yaWdpbmFsLm5leHRTaWJsaW5nO1xuICAgIHJlY29yZC5hdHRyaWJ1dGVOYW1lID0gb3JpZ2luYWwuYXR0cmlidXRlTmFtZTtcbiAgICByZWNvcmQuYXR0cmlidXRlTmFtZXNwYWNlID0gb3JpZ2luYWwuYXR0cmlidXRlTmFtZXNwYWNlO1xuICAgIHJlY29yZC5vbGRWYWx1ZSA9IG9yaWdpbmFsLm9sZFZhbHVlO1xuICAgIHJldHVybiByZWNvcmQ7XG4gIH1cbiAgdmFyIGN1cnJlbnRSZWNvcmQsIHJlY29yZFdpdGhPbGRWYWx1ZTtcbiAgZnVuY3Rpb24gZ2V0UmVjb3JkKHR5cGUsIHRhcmdldCkge1xuICAgIHJldHVybiBjdXJyZW50UmVjb3JkID0gbmV3IE11dGF0aW9uUmVjb3JkKHR5cGUsIHRhcmdldCk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0UmVjb3JkV2l0aE9sZFZhbHVlKG9sZFZhbHVlKSB7XG4gICAgaWYgKHJlY29yZFdpdGhPbGRWYWx1ZSkgcmV0dXJuIHJlY29yZFdpdGhPbGRWYWx1ZTtcbiAgICByZWNvcmRXaXRoT2xkVmFsdWUgPSBjb3B5TXV0YXRpb25SZWNvcmQoY3VycmVudFJlY29yZCk7XG4gICAgcmVjb3JkV2l0aE9sZFZhbHVlLm9sZFZhbHVlID0gb2xkVmFsdWU7XG4gICAgcmV0dXJuIHJlY29yZFdpdGhPbGRWYWx1ZTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhclJlY29yZHMoKSB7XG4gICAgY3VycmVudFJlY29yZCA9IHJlY29yZFdpdGhPbGRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiByZWNvcmRSZXByZXNlbnRzQ3VycmVudE11dGF0aW9uKHJlY29yZCkge1xuICAgIHJldHVybiByZWNvcmQgPT09IHJlY29yZFdpdGhPbGRWYWx1ZSB8fCByZWNvcmQgPT09IGN1cnJlbnRSZWNvcmQ7XG4gIH1cbiAgZnVuY3Rpb24gc2VsZWN0UmVjb3JkKGxhc3RSZWNvcmQsIG5ld1JlY29yZCkge1xuICAgIGlmIChsYXN0UmVjb3JkID09PSBuZXdSZWNvcmQpIHJldHVybiBsYXN0UmVjb3JkO1xuICAgIGlmIChyZWNvcmRXaXRoT2xkVmFsdWUgJiYgcmVjb3JkUmVwcmVzZW50c0N1cnJlbnRNdXRhdGlvbihsYXN0UmVjb3JkKSkgcmV0dXJuIHJlY29yZFdpdGhPbGRWYWx1ZTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiBSZWdpc3RyYXRpb24ob2JzZXJ2ZXIsIHRhcmdldCwgb3B0aW9ucykge1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMudHJhbnNpZW50T2JzZXJ2ZWROb2RlcyA9IFtdO1xuICB9XG4gIFJlZ2lzdHJhdGlvbi5wcm90b3R5cGUgPSB7XG4gICAgZW5xdWV1ZTogZnVuY3Rpb24ocmVjb3JkKSB7XG4gICAgICB2YXIgcmVjb3JkcyA9IHRoaXMub2JzZXJ2ZXIucmVjb3Jkc187XG4gICAgICB2YXIgbGVuZ3RoID0gcmVjb3Jkcy5sZW5ndGg7XG4gICAgICBpZiAocmVjb3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBsYXN0UmVjb3JkID0gcmVjb3Jkc1tsZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIHJlY29yZFRvUmVwbGFjZUxhc3QgPSBzZWxlY3RSZWNvcmQobGFzdFJlY29yZCwgcmVjb3JkKTtcbiAgICAgICAgaWYgKHJlY29yZFRvUmVwbGFjZUxhc3QpIHtcbiAgICAgICAgICByZWNvcmRzW2xlbmd0aCAtIDFdID0gcmVjb3JkVG9SZXBsYWNlTGFzdDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjaGVkdWxlQ2FsbGJhY2sodGhpcy5vYnNlcnZlcik7XG4gICAgICB9XG4gICAgICByZWNvcmRzW2xlbmd0aF0gPSByZWNvcmQ7XG4gICAgfSxcbiAgICBhZGRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnNfKHRoaXMudGFyZ2V0KTtcbiAgICB9LFxuICAgIGFkZExpc3RlbmVyc186IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMuYXR0cmlidXRlcykgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQXR0ck1vZGlmaWVkXCIsIHRoaXMsIHRydWUpO1xuICAgICAgaWYgKG9wdGlvbnMuY2hhcmFjdGVyRGF0YSkgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ2hhcmFjdGVyRGF0YU1vZGlmaWVkXCIsIHRoaXMsIHRydWUpO1xuICAgICAgaWYgKG9wdGlvbnMuY2hpbGRMaXN0KSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Ob2RlSW5zZXJ0ZWRcIiwgdGhpcywgdHJ1ZSk7XG4gICAgICBpZiAob3B0aW9ucy5jaGlsZExpc3QgfHwgb3B0aW9ucy5zdWJ0cmVlKSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Ob2RlUmVtb3ZlZFwiLCB0aGlzLCB0cnVlKTtcbiAgICB9LFxuICAgIHJlbW92ZUxpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyc18odGhpcy50YXJnZXQpO1xuICAgIH0sXG4gICAgcmVtb3ZlTGlzdGVuZXJzXzogZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGVzKSBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01BdHRyTW9kaWZpZWRcIiwgdGhpcywgdHJ1ZSk7XG4gICAgICBpZiAob3B0aW9ucy5jaGFyYWN0ZXJEYXRhKSBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01DaGFyYWN0ZXJEYXRhTW9kaWZpZWRcIiwgdGhpcywgdHJ1ZSk7XG4gICAgICBpZiAob3B0aW9ucy5jaGlsZExpc3QpIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVJbnNlcnRlZFwiLCB0aGlzLCB0cnVlKTtcbiAgICAgIGlmIChvcHRpb25zLmNoaWxkTGlzdCB8fCBvcHRpb25zLnN1YnRyZWUpIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVSZW1vdmVkXCIsIHRoaXMsIHRydWUpO1xuICAgIH0sXG4gICAgYWRkVHJhbnNpZW50T2JzZXJ2ZXI6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGlmIChub2RlID09PSB0aGlzLnRhcmdldCkgcmV0dXJuO1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnNfKG5vZGUpO1xuICAgICAgdGhpcy50cmFuc2llbnRPYnNlcnZlZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB2YXIgcmVnaXN0cmF0aW9ucyA9IHJlZ2lzdHJhdGlvbnNUYWJsZS5nZXQobm9kZSk7XG4gICAgICBpZiAoIXJlZ2lzdHJhdGlvbnMpIHJlZ2lzdHJhdGlvbnNUYWJsZS5zZXQobm9kZSwgcmVnaXN0cmF0aW9ucyA9IFtdKTtcbiAgICAgIHJlZ2lzdHJhdGlvbnMucHVzaCh0aGlzKTtcbiAgICB9LFxuICAgIHJlbW92ZVRyYW5zaWVudE9ic2VydmVyczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdHJhbnNpZW50T2JzZXJ2ZWROb2RlcyA9IHRoaXMudHJhbnNpZW50T2JzZXJ2ZWROb2RlcztcbiAgICAgIHRoaXMudHJhbnNpZW50T2JzZXJ2ZWROb2RlcyA9IFtdO1xuICAgICAgdHJhbnNpZW50T2JzZXJ2ZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnNfKG5vZGUpO1xuICAgICAgICB2YXIgcmVnaXN0cmF0aW9ucyA9IHJlZ2lzdHJhdGlvbnNUYWJsZS5nZXQobm9kZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChyZWdpc3RyYXRpb25zW2ldID09PSB0aGlzKSB7XG4gICAgICAgICAgICByZWdpc3RyYXRpb25zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcyk7XG4gICAgfSxcbiAgICBoYW5kbGVFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgY2FzZSBcIkRPTUF0dHJNb2RpZmllZFwiOlxuICAgICAgICB2YXIgbmFtZSA9IGUuYXR0ck5hbWU7XG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBlLnJlbGF0ZWROb2RlLm5hbWVzcGFjZVVSSTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgcmVjb3JkID0gbmV3IGdldFJlY29yZChcImF0dHJpYnV0ZXNcIiwgdGFyZ2V0KTtcbiAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPSBuYW1lO1xuICAgICAgICByZWNvcmQuYXR0cmlidXRlTmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSBlLmF0dHJDaGFuZ2UgPT09IE11dGF0aW9uRXZlbnQuQURESVRJT04gPyBudWxsIDogZS5wcmV2VmFsdWU7XG4gICAgICAgIGZvckVhY2hBbmNlc3RvckFuZE9ic2VydmVyRW5xdWV1ZVJlY29yZCh0YXJnZXQsIGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuYXR0cmlidXRlcykgcmV0dXJuO1xuICAgICAgICAgIGlmIChvcHRpb25zLmF0dHJpYnV0ZUZpbHRlciAmJiBvcHRpb25zLmF0dHJpYnV0ZUZpbHRlci5sZW5ndGggJiYgb3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIuaW5kZXhPZihuYW1lKSA9PT0gLTEgJiYgb3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIuaW5kZXhPZihuYW1lc3BhY2UpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGVPbGRWYWx1ZSkgcmV0dXJuIGdldFJlY29yZFdpdGhPbGRWYWx1ZShvbGRWYWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAgY2FzZSBcIkRPTUNoYXJhY3RlckRhdGFNb2RpZmllZFwiOlxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIHZhciByZWNvcmQgPSBnZXRSZWNvcmQoXCJjaGFyYWN0ZXJEYXRhXCIsIHRhcmdldCk7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IGUucHJldlZhbHVlO1xuICAgICAgICBmb3JFYWNoQW5jZXN0b3JBbmRPYnNlcnZlckVucXVldWVSZWNvcmQodGFyZ2V0LCBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmNoYXJhY3RlckRhdGEpIHJldHVybjtcbiAgICAgICAgICBpZiAob3B0aW9ucy5jaGFyYWN0ZXJEYXRhT2xkVmFsdWUpIHJldHVybiBnZXRSZWNvcmRXaXRoT2xkVmFsdWUob2xkVmFsdWUpO1xuICAgICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgIGNhc2UgXCJET01Ob2RlUmVtb3ZlZFwiOlxuICAgICAgICB0aGlzLmFkZFRyYW5zaWVudE9ic2VydmVyKGUudGFyZ2V0KTtcblxuICAgICAgIGNhc2UgXCJET01Ob2RlSW5zZXJ0ZWRcIjpcbiAgICAgICAgdmFyIGNoYW5nZWROb2RlID0gZS50YXJnZXQ7XG4gICAgICAgIHZhciBhZGRlZE5vZGVzLCByZW1vdmVkTm9kZXM7XG4gICAgICAgIGlmIChlLnR5cGUgPT09IFwiRE9NTm9kZUluc2VydGVkXCIpIHtcbiAgICAgICAgICBhZGRlZE5vZGVzID0gWyBjaGFuZ2VkTm9kZSBdO1xuICAgICAgICAgIHJlbW92ZWROb2RlcyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZGVkTm9kZXMgPSBbXTtcbiAgICAgICAgICByZW1vdmVkTm9kZXMgPSBbIGNoYW5nZWROb2RlIF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXZpb3VzU2libGluZyA9IGNoYW5nZWROb2RlLnByZXZpb3VzU2libGluZztcbiAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gY2hhbmdlZE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIHZhciByZWNvcmQgPSBnZXRSZWNvcmQoXCJjaGlsZExpc3RcIiwgZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICAgIHJlY29yZC5hZGRlZE5vZGVzID0gYWRkZWROb2RlcztcbiAgICAgICAgcmVjb3JkLnJlbW92ZWROb2RlcyA9IHJlbW92ZWROb2RlcztcbiAgICAgICAgcmVjb3JkLnByZXZpb3VzU2libGluZyA9IHByZXZpb3VzU2libGluZztcbiAgICAgICAgcmVjb3JkLm5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmc7XG4gICAgICAgIGZvckVhY2hBbmNlc3RvckFuZE9ic2VydmVyRW5xdWV1ZVJlY29yZChlLnJlbGF0ZWROb2RlLCBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmNoaWxkTGlzdCkgcmV0dXJuO1xuICAgICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2xlYXJSZWNvcmRzKCk7XG4gICAgfVxuICB9O1xuICBnbG9iYWwuSnNNdXRhdGlvbk9ic2VydmVyID0gSnNNdXRhdGlvbk9ic2VydmVyO1xuICBpZiAoIWdsb2JhbC5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgPSBKc011dGF0aW9uT2JzZXJ2ZXI7XG4gICAgSnNNdXRhdGlvbk9ic2VydmVyLl9pc1BvbHlmaWxsZWQgPSB0cnVlO1xuICB9XG59KShzZWxmKTsiLCIvKlxuQ29weXJpZ2h0IChjKSAyMDEyIEJhcm5lc2FuZG5vYmxlLmNvbSwgbGxjLCBEb25hdm9uIFdlc3QsIGFuZCBEb21lbmljIERlbmljb2xhXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG5cIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbk5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbkxJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbk9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciBzZXRJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBhZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzKGFyZ3MpIHtcbiAgICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHBhcnRpYWxseUFwcGxpZWQuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgdGhlIHNhbWUgYXJndW1lbnRzIGFzIHNldEltbWVkaWF0ZSwgYnV0XG4gICAgLy8gcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgcmVxdWlyZXMgbm8gYXJndW1lbnRzLlxuICAgIGZ1bmN0aW9uIHBhcnRpYWxseUFwcGxpZWQoaGFuZGxlcikge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIChuZXcgRnVuY3Rpb24oXCJcIiArIGhhbmRsZXIpKSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocGFydGlhbGx5QXBwbGllZChydW5JZlByZXNlbnQsIGhhbmRsZSksIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGFzaygpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBhZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKHBhcnRpYWxseUFwcGxpZWQocnVuSWZQcmVzZW50LCBoYW5kbGUpKTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBhZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgc2V0VGltZW91dChwYXJ0aWFsbHlBcHBsaWVkKHJ1bklmUHJlc2VudCwgaGFuZGxlKSwgMCk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0oc2VsZikpO1xuIiwiLy8gQ2F1dGlvbjpcbi8vIERvIG5vdCByZXBsYWNlIHRoaXMgaW1wb3J0IHN0YXRlbWVudCB3aXRoIGNvZGVzLlxuLy9cbi8vIElmIHlvdSByZXBsYWNlIHRoaXMgaW1wb3J0IHN0YXRlbWVudCB3aXRoIGNvZGVzLFxuLy8gdGhlIGNvZGVzIHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhlIGZvbGxvd2luZyBwb2x5ZmlsbHMgYXJlIGltcG9ydGVkXG4vLyBiZWNhdXNlIGltcG9ydCBzdGF0ZW1lbnRzIGFyZSBob2lzdGVkIGR1cmluZyBjb21waWxhdGlvbi5cbmltcG9ydCAnLi9wb2x5ZmlsbC1zd2l0Y2hlcyc7XG5cbi8vIFBvbHlmaWxsIEVDTUFTY3JpcHQgc3RhbmRhcmQgZmVhdHVyZXMgd2l0aCBnbG9iYWwgbmFtZXNwYWNlIHBvbGx1dGlvblxuaW1wb3J0ICdjb3JlLWpzL2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCAnY29yZS1qcy9mbi9zZXQnO1xuaW1wb3J0ICdjb3JlLWpzL2ZuL21hcCc7XG5cbi8vIFBvbHlmaWxsIEN1c3RvbSBFbGVtZW50cyB2MSB3aXRoIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uXG5pbXBvcnQgJ0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvY3VzdG9tLWVsZW1lbnRzJztcblxuLy8gUG9seWZpbGwgTXV0YXRpb25PYnNlcnZlciB3aXRoIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uXG5pbXBvcnQgJy4vTXV0YXRpb25PYnNlcnZlckAwLjcuMjIvTXV0YXRpb25PYnNlcnZlci5qcyc7XG5cbi8vIFBvbHlmaWxsIHNldEltbWVkaWF0ZSB3aXRoIGdsb2JhbCBuYW1lc3BhY2UgcG9sbHV0aW9uXG5pbXBvcnQgJy4vc2V0SW1tZWRpYXRlQDEuMC4yK21vZC9zZXRJbW1lZGlhdGUuanMnO1xuIiwiOyhmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogQHByZXNlcnZlIEZhc3RDbGljazogcG9seWZpbGwgdG8gcmVtb3ZlIGNsaWNrIGRlbGF5cyBvbiBicm93c2VycyB3aXRoIHRvdWNoIFVJcy5cblx0ICpcblx0ICogQGNvZGluZ3N0YW5kYXJkIGZ0bGFicy1qc3YyXG5cdCAqIEBjb3B5cmlnaHQgVGhlIEZpbmFuY2lhbCBUaW1lcyBMaW1pdGVkIFtBbGwgUmlnaHRzIFJlc2VydmVkXVxuXHQgKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoc2VlIExJQ0VOU0UudHh0KVxuXHQgKi9cblxuXHQvKmpzbGludCBicm93c2VyOnRydWUsIG5vZGU6dHJ1ZSovXG5cdC8qZ2xvYmFsIGRlZmluZSwgRXZlbnQsIE5vZGUqL1xuXG5cblx0LyoqXG5cdCAqIEluc3RhbnRpYXRlIGZhc3QtY2xpY2tpbmcgbGlzdGVuZXJzIG9uIHRoZSBzcGVjaWZpZWQgbGF5ZXIuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHNcblx0ICovXG5cdGZ1bmN0aW9uIEZhc3RDbGljayhsYXllciwgb3B0aW9ucykge1xuXHRcdHZhciBvbGRPbkNsaWNrO1xuXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIGEgY2xpY2sgaXMgY3VycmVudGx5IGJlaW5nIHRyYWNrZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRpbWVzdGFtcCBmb3Igd2hlbiBjbGljayB0cmFja2luZyBzdGFydGVkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaGUgZWxlbWVudCBiZWluZyB0cmFja2VkIGZvciBhIGNsaWNrLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgRXZlbnRUYXJnZXRcblx0XHQgKi9cblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXG5cblx0XHQvKipcblx0XHQgKiBYLWNvb3JkaW5hdGUgb2YgdG91Y2ggc3RhcnQgZXZlbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoU3RhcnRYID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogWS1jb29yZGluYXRlIG9mIHRvdWNoIHN0YXJ0IGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaFN0YXJ0WSA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIElEIG9mIHRoZSBsYXN0IHRvdWNoLCByZXRyaWV2ZWQgZnJvbSBUb3VjaC5pZGVudGlmaWVyLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVG91Y2htb3ZlIGJvdW5kYXJ5LCBiZXlvbmQgd2hpY2ggYSBjbGljayB3aWxsIGJlIGNhbmNlbGxlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hCb3VuZGFyeSA9IG9wdGlvbnMudG91Y2hCb3VuZGFyeSB8fCAxMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIEZhc3RDbGljayBsYXllci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIEVsZW1lbnRcblx0XHQgKi9cblx0XHR0aGlzLmxheWVyID0gbGF5ZXI7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbWluaW11bSB0aW1lIGJldHdlZW4gdGFwKHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kKSBldmVudHNcblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudGFwRGVsYXkgPSBvcHRpb25zLnRhcERlbGF5IHx8IDIwMDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBtYXhpbXVtIHRpbWUgZm9yIGEgdGFwXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRhcFRpbWVvdXQgPSBvcHRpb25zLnRhcFRpbWVvdXQgfHwgNzAwO1xuXG5cdFx0aWYgKEZhc3RDbGljay5ub3ROZWVkZWQobGF5ZXIpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU29tZSBvbGQgdmVyc2lvbnMgb2YgQW5kcm9pZCBkb24ndCBoYXZlIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5cdFx0ZnVuY3Rpb24gYmluZChtZXRob2QsIGNvbnRleHQpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ldGhvZC5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpOyB9O1xuXHRcdH1cblxuXG5cdFx0dmFyIG1ldGhvZHMgPSBbJ29uTW91c2UnLCAnb25DbGljaycsICdvblRvdWNoU3RhcnQnLCAnb25Ub3VjaE1vdmUnLCAnb25Ub3VjaEVuZCcsICdvblRvdWNoQ2FuY2VsJ107XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXHRcdGZvciAodmFyIGkgPSAwLCBsID0gbWV0aG9kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdGNvbnRleHRbbWV0aG9kc1tpXV0gPSBiaW5kKGNvbnRleHRbbWV0aG9kc1tpXV0sIGNvbnRleHQpO1xuXHRcdH1cblxuXHRcdC8vIFNldCB1cCBldmVudCBoYW5kbGVycyBhcyByZXF1aXJlZFxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCBmYWxzZSk7XG5cblx0XHQvLyBIYWNrIGlzIHJlcXVpcmVkIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgRXZlbnQjc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIChlLmcuIEFuZHJvaWQgMilcblx0XHQvLyB3aGljaCBpcyBob3cgRmFzdENsaWNrIG5vcm1hbGx5IHN0b3BzIGNsaWNrIGV2ZW50cyBidWJibGluZyB0byBjYWxsYmFja3MgcmVnaXN0ZXJlZCBvbiB0aGUgRmFzdENsaWNrXG5cdFx0Ly8gbGF5ZXIgd2hlbiB0aGV5IGFyZSBjYW5jZWxsZWQuXG5cdFx0aWYgKCFFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIHJtdiA9IE5vZGUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0cm12LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRybXYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIGFkdiA9IE5vZGUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0YWR2LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IChjYWxsYmFjay5oaWphY2tlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhldmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksIGNhcHR1cmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYSBoYW5kbGVyIGlzIGFscmVhZHkgZGVjbGFyZWQgaW4gdGhlIGVsZW1lbnQncyBvbmNsaWNrIGF0dHJpYnV0ZSwgaXQgd2lsbCBiZSBmaXJlZCBiZWZvcmVcblx0XHQvLyBGYXN0Q2xpY2sncyBvbkNsaWNrIGhhbmRsZXIuIEZpeCB0aGlzIGJ5IHB1bGxpbmcgb3V0IHRoZSB1c2VyLWRlZmluZWQgaGFuZGxlciBmdW5jdGlvbiBhbmRcblx0XHQvLyBhZGRpbmcgaXQgYXMgbGlzdGVuZXIuXG5cdFx0aWYgKHR5cGVvZiBsYXllci5vbmNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cblx0XHRcdC8vIEFuZHJvaWQgYnJvd3NlciBvbiBhdCBsZWFzdCAzLjIgcmVxdWlyZXMgYSBuZXcgcmVmZXJlbmNlIHRvIHRoZSBmdW5jdGlvbiBpbiBsYXllci5vbmNsaWNrXG5cdFx0XHQvLyAtIHRoZSBvbGQgb25lIHdvbid0IHdvcmsgaWYgcGFzc2VkIHRvIGFkZEV2ZW50TGlzdGVuZXIgZGlyZWN0bHkuXG5cdFx0XHRvbGRPbkNsaWNrID0gbGF5ZXIub25jbGljaztcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0b2xkT25DbGljayhldmVudCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRsYXllci5vbmNsaWNrID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBXaW5kb3dzIFBob25lIDguMSBmYWtlcyB1c2VyIGFnZW50IHN0cmluZyB0byBsb29rIGxpa2UgQW5kcm9pZCBhbmQgaVBob25lLlxuXHQqXG5cdCogQHR5cGUgYm9vbGVhblxuXHQqL1xuXHR2YXIgZGV2aWNlSXNXaW5kb3dzUGhvbmUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIFBob25lXCIpID49IDA7XG5cblx0LyoqXG5cdCAqIEFuZHJvaWQgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzQW5kcm9pZCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMCAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUyA9IC9pUChhZHxob25lfG9kKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIDQgcmVxdWlyZXMgYW4gZXhjZXB0aW9uIGZvciBzZWxlY3QgZWxlbWVudHMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUzQgPSBkZXZpY2VJc0lPUyAmJiAoL09TIDRfXFxkKF9cXGQpPy8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblxuXHQvKipcblx0ICogaU9TIDYuMC03LiogcmVxdWlyZXMgdGhlIHRhcmdldCBlbGVtZW50IHRvIGJlIG1hbnVhbGx5IGRlcml2ZWRcblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzSU9TV2l0aEJhZFRhcmdldCA9IGRldmljZUlzSU9TICYmICgvT1MgWzYtN11fXFxkLykudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXHQvKipcblx0ICogQmxhY2tCZXJyeSByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNCbGFja0JlcnJ5MTAgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0JCMTAnKSA+IDA7XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIGEgZ2l2ZW4gZWxlbWVudCByZXF1aXJlcyBhIG5hdGl2ZSBjbGljay5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgbmVlZHMgYSBuYXRpdmUgY2xpY2tcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNDbGljayA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgdG8gZGlzYWJsZWQgaW5wdXRzIChpc3N1ZSAjNjIpXG5cdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdGlmICh0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2lucHV0JzpcblxuXHRcdFx0Ly8gRmlsZSBpbnB1dHMgbmVlZCByZWFsIGNsaWNrcyBvbiBpT1MgNiBkdWUgdG8gYSBicm93c2VyIGJ1ZyAoaXNzdWUgIzY4KVxuXHRcdFx0aWYgKChkZXZpY2VJc0lPUyAmJiB0YXJnZXQudHlwZSA9PT0gJ2ZpbGUnKSB8fCB0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2xhYmVsJzpcblx0XHRjYXNlICdpZnJhbWUnOiAvLyBpT1M4IGhvbWVzY3JlZW4gYXBwcyBjYW4gcHJldmVudCBldmVudHMgYnViYmxpbmcgaW50byBmcmFtZXNcblx0XHRjYXNlICd2aWRlbyc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKC9cXGJuZWVkc2NsaWNrXFxiLykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIGNsaWNrIGludG8gZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIG5hdGl2ZSBjbGljay5cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNGb2N1cyA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0cmV0dXJuICFkZXZpY2VJc0FuZHJvaWQ7XG5cdFx0Y2FzZSAnaW5wdXQnOlxuXHRcdFx0c3dpdGNoICh0YXJnZXQudHlwZSkge1xuXHRcdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ2ZpbGUnOlxuXHRcdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBObyBwb2ludCBpbiBhdHRlbXB0aW5nIHRvIGZvY3VzIGRpc2FibGVkIGlucHV0c1xuXHRcdFx0cmV0dXJuICF0YXJnZXQuZGlzYWJsZWQgJiYgIXRhcmdldC5yZWFkT25seTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICgvXFxibmVlZHNmb2N1c1xcYi8pLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFNlbmQgYSBjbGljayBldmVudCB0byB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5zZW5kQ2xpY2sgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50LCBldmVudCkge1xuXHRcdHZhciBjbGlja0V2ZW50LCB0b3VjaDtcblxuXHRcdC8vIE9uIHNvbWUgQW5kcm9pZCBkZXZpY2VzIGFjdGl2ZUVsZW1lbnQgbmVlZHMgdG8gYmUgYmx1cnJlZCBvdGhlcndpc2UgdGhlIHN5bnRoZXRpYyBjbGljayB3aWxsIGhhdmUgbm8gZWZmZWN0ICgjMjQpXG5cdFx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGFyZ2V0RWxlbWVudCkge1xuXHRcdFx0ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG5cdFx0fVxuXG5cdFx0dG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdC8vIFN5bnRoZXNpemUgYSBjbGljayBldmVudCwgd2l0aCBhbiBleHRyYSBhdHRyaWJ1dGUgc28gaXQgY2FuIGJlIHRyYWNrZWRcblx0XHRjbGlja0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XG5cdFx0Y2xpY2tFdmVudC5pbml0TW91c2VFdmVudCh0aGlzLmRldGVybWluZUV2ZW50VHlwZSh0YXJnZXRFbGVtZW50KSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxLCB0b3VjaC5zY3JlZW5YLCB0b3VjaC5zY3JlZW5ZLCB0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG5cdFx0Y2xpY2tFdmVudC5mb3J3YXJkZWRUb3VjaEV2ZW50ID0gdHJ1ZTtcblx0XHR0YXJnZXRFbGVtZW50LmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XG5cdH07XG5cblx0RmFzdENsaWNrLnByb3RvdHlwZS5kZXRlcm1pbmVFdmVudFR5cGUgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cblx0XHQvL0lzc3VlICMxNTk6IEFuZHJvaWQgQ2hyb21lIFNlbGVjdCBCb3ggZG9lcyBub3Qgb3BlbiB3aXRoIGEgc3ludGhldGljIGNsaWNrIGV2ZW50XG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCAmJiB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcblx0XHRcdHJldHVybiAnbW91c2Vkb3duJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJ2NsaWNrJztcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cdFx0dmFyIGxlbmd0aDtcblxuXHRcdC8vIElzc3VlICMxNjA6IG9uIGlPUyA3LCBzb21lIGlucHV0IGVsZW1lbnRzIChlLmcuIGRhdGUgZGF0ZXRpbWUgbW9udGgpIHRocm93IGEgdmFndWUgVHlwZUVycm9yIG9uIHNldFNlbGVjdGlvblJhbmdlLiBUaGVzZSBlbGVtZW50cyBkb24ndCBoYXZlIGFuIGludGVnZXIgdmFsdWUgZm9yIHRoZSBzZWxlY3Rpb25TdGFydCBhbmQgc2VsZWN0aW9uRW5kIHByb3BlcnRpZXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IHRoYXQgY2FuJ3QgYmUgdXNlZCBmb3IgZGV0ZWN0aW9uIGJlY2F1c2UgYWNjZXNzaW5nIHRoZSBwcm9wZXJ0aWVzIGFsc28gdGhyb3dzIGEgVHlwZUVycm9yLiBKdXN0IGNoZWNrIHRoZSB0eXBlIGluc3RlYWQuIEZpbGVkIGFzIEFwcGxlIGJ1ZyAjMTUxMjI3MjQuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmIHRhcmdldEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UgJiYgdGFyZ2V0RWxlbWVudC50eXBlLmluZGV4T2YoJ2RhdGUnKSAhPT0gMCAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICd0aW1lJyAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdtb250aCcpIHtcblx0XHRcdGxlbmd0aCA9IHRhcmdldEVsZW1lbnQudmFsdWUubGVuZ3RoO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShsZW5ndGgsIGxlbmd0aCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiBhIHNjcm9sbGFibGUgbGF5ZXIgYW5kIGlmIHNvLCBzZXQgYSBmbGFnIG9uIGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUudXBkYXRlU2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXHRcdHZhciBzY3JvbGxQYXJlbnQsIHBhcmVudEVsZW1lbnQ7XG5cblx0XHRzY3JvbGxQYXJlbnQgPSB0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblxuXHRcdC8vIEF0dGVtcHQgdG8gZGlzY292ZXIgd2hldGhlciB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHNjcm9sbGFibGUgbGF5ZXIuIFJlLWNoZWNrIGlmIHRoZVxuXHRcdC8vIHRhcmdldCBlbGVtZW50IHdhcyBtb3ZlZCB0byBhbm90aGVyIHBhcmVudC5cblx0XHRpZiAoIXNjcm9sbFBhcmVudCB8fCAhc2Nyb2xsUGFyZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRwYXJlbnRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcblx0XHRcdGRvIHtcblx0XHRcdFx0aWYgKHBhcmVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQpIHtcblx0XHRcdFx0XHRzY3JvbGxQYXJlbnQgPSBwYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50ID0gcGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9IHdoaWxlIChwYXJlbnRFbGVtZW50KTtcblx0XHR9XG5cblx0XHQvLyBBbHdheXMgdXBkYXRlIHRoZSBzY3JvbGwgdG9wIHRyYWNrZXIgaWYgcG9zc2libGUuXG5cdFx0aWYgKHNjcm9sbFBhcmVudCkge1xuXHRcdFx0c2Nyb2xsUGFyZW50LmZhc3RDbGlja0xhc3RTY3JvbGxUb3AgPSBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSB0YXJnZXRFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fEV2ZW50VGFyZ2V0fVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24oZXZlbnRUYXJnZXQpIHtcblxuXHRcdC8vIE9uIHNvbWUgb2xkZXIgYnJvd3NlcnMgKG5vdGFibHkgU2FmYXJpIG9uIGlPUyA0LjEgLSBzZWUgaXNzdWUgIzU2KSB0aGUgZXZlbnQgdGFyZ2V0IG1heSBiZSBhIHRleHQgbm9kZS5cblx0XHRpZiAoZXZlbnRUYXJnZXQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gZXZlbnRUYXJnZXQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRUYXJnZXQ7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggc3RhcnQsIHJlY29yZCB0aGUgcG9zaXRpb24gYW5kIHNjcm9sbCBvZmZzZXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0YXJnZXRFbGVtZW50LCB0b3VjaCwgc2VsZWN0aW9uO1xuXG5cdFx0Ly8gSWdub3JlIG11bHRpcGxlIHRvdWNoZXMsIG90aGVyd2lzZSBwaW5jaC10by16b29tIGlzIHByZXZlbnRlZCBpZiBib3RoIGZpbmdlcnMgYXJlIG9uIHRoZSBGYXN0Q2xpY2sgZWxlbWVudCAoaXNzdWUgIzExMSkuXG5cdFx0aWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0RWxlbWVudCA9IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdHRvdWNoID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcblxuXHRcdC8vIElnbm9yZSB0b3VjaGVzIG9uIGNvbnRlbnRlZGl0YWJsZSBlbGVtZW50cyB0byBwcmV2ZW50IGNvbmZsaWN0IHdpdGggdGV4dCBzZWxlY3Rpb24uXG5cdFx0Ly8gKEZvciBkZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vZnRsYWJzL2Zhc3RjbGljay9wdWxsLzIxMSApXG5cdFx0aWYgKHRhcmdldEVsZW1lbnQuaXNDb250ZW50RWRpdGFibGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChkZXZpY2VJc0lPUykge1xuXG5cdFx0XHQvLyBPbmx5IHRydXN0ZWQgZXZlbnRzIHdpbGwgZGVzZWxlY3QgdGV4dCBvbiBpT1MgKGlzc3VlICM0OSlcblx0XHRcdHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblx0XHRcdGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCAmJiAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWRldmljZUlzSU9TNCkge1xuXG5cdFx0XHRcdC8vIFdlaXJkIHRoaW5ncyBoYXBwZW4gb24gaU9TIHdoZW4gYW4gYWxlcnQgb3IgY29uZmlybSBkaWFsb2cgaXMgb3BlbmVkIGZyb20gYSBjbGljayBldmVudCBjYWxsYmFjayAoaXNzdWUgIzIzKTpcblx0XHRcdFx0Ly8gd2hlbiB0aGUgdXNlciBuZXh0IHRhcHMgYW55d2hlcmUgZWxzZSBvbiB0aGUgcGFnZSwgbmV3IHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kIGV2ZW50cyBhcmUgZGlzcGF0Y2hlZFxuXHRcdFx0XHQvLyB3aXRoIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgdGhlIHRvdWNoIGV2ZW50IHRoYXQgcHJldmlvdXNseSB0cmlnZ2VyZWQgdGhlIGNsaWNrIHRoYXQgdHJpZ2dlcmVkIHRoZSBhbGVydC5cblx0XHRcdFx0Ly8gU2FkbHksIHRoZXJlIGlzIGFuIGlzc3VlIG9uIGlPUyA0IHRoYXQgY2F1c2VzIHNvbWUgbm9ybWFsIHRvdWNoIGV2ZW50cyB0byBoYXZlIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgYW5cblx0XHRcdFx0Ly8gaW1tZWRpYXRlbHkgcHJlY2VkaW5nIHRvdWNoIGV2ZW50IChpc3N1ZSAjNTIpLCBzbyB0aGlzIGZpeCBpcyB1bmF2YWlsYWJsZSBvbiB0aGF0IHBsYXRmb3JtLlxuXHRcdFx0XHQvLyBJc3N1ZSAxMjA6IHRvdWNoLmlkZW50aWZpZXIgaXMgMCB3aGVuIENocm9tZSBkZXYgdG9vbHMgJ0VtdWxhdGUgdG91Y2ggZXZlbnRzJyBpcyBzZXQgd2l0aCBhbiBpT1MgZGV2aWNlIFVBIHN0cmluZyxcblx0XHRcdFx0Ly8gd2hpY2ggY2F1c2VzIGFsbCB0b3VjaCBldmVudHMgdG8gYmUgaWdub3JlZC4gQXMgdGhpcyBibG9jayBvbmx5IGFwcGxpZXMgdG8gaU9TLCBhbmQgaU9TIGlkZW50aWZpZXJzIGFyZSBhbHdheXMgbG9uZyxcblx0XHRcdFx0Ly8gcmFuZG9tIGludGVnZXJzLCBpdCdzIHNhZmUgdG8gdG8gY29udGludWUgaWYgdGhlIGlkZW50aWZpZXIgaXMgMCBoZXJlLlxuXHRcdFx0XHRpZiAodG91Y2guaWRlbnRpZmllciAmJiB0b3VjaC5pZGVudGlmaWVyID09PSB0aGlzLmxhc3RUb3VjaElkZW50aWZpZXIpIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMubGFzdFRvdWNoSWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgYSBzY3JvbGxhYmxlIGxheWVyICh1c2luZyAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2gpIGFuZDpcblx0XHRcdFx0Ly8gMSkgdGhlIHVzZXIgZG9lcyBhIGZsaW5nIHNjcm9sbCBvbiB0aGUgc2Nyb2xsYWJsZSBsYXllclxuXHRcdFx0XHQvLyAyKSB0aGUgdXNlciBzdG9wcyB0aGUgZmxpbmcgc2Nyb2xsIHdpdGggYW5vdGhlciB0YXBcblx0XHRcdFx0Ly8gdGhlbiB0aGUgZXZlbnQudGFyZ2V0IG9mIHRoZSBsYXN0ICd0b3VjaGVuZCcgZXZlbnQgd2lsbCBiZSB0aGUgZWxlbWVudCB0aGF0IHdhcyB1bmRlciB0aGUgdXNlcidzIGZpbmdlclxuXHRcdFx0XHQvLyB3aGVuIHRoZSBmbGluZyBzY3JvbGwgd2FzIHN0YXJ0ZWQsIGNhdXNpbmcgRmFzdENsaWNrIHRvIHNlbmQgYSBjbGljayBldmVudCB0byB0aGF0IGxheWVyIC0gdW5sZXNzIGEgY2hlY2tcblx0XHRcdFx0Ly8gaXMgbWFkZSB0byBlbnN1cmUgdGhhdCBhIHBhcmVudCBsYXllciB3YXMgbm90IHNjcm9sbGVkIGJlZm9yZSBzZW5kaW5nIGEgc3ludGhldGljIGNsaWNrIChpc3N1ZSAjNDIpLlxuXHRcdFx0XHR0aGlzLnVwZGF0ZVNjcm9sbFBhcmVudCh0YXJnZXRFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSB0cnVlO1xuXHRcdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gZXZlbnQudGltZVN0YW1wO1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQ7XG5cblx0XHR0aGlzLnRvdWNoU3RhcnRYID0gdG91Y2gucGFnZVg7XG5cdFx0dGhpcy50b3VjaFN0YXJ0WSA9IHRvdWNoLnBhZ2VZO1xuXG5cdFx0Ly8gUHJldmVudCBwaGFudG9tIGNsaWNrcyBvbiBmYXN0IGRvdWJsZS10YXAgKGlzc3VlICMzNilcblx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMubGFzdENsaWNrVGltZSkgPCB0aGlzLnRhcERlbGF5ICYmIChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpID4gLTEpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogQmFzZWQgb24gYSB0b3VjaG1vdmUgZXZlbnQgb2JqZWN0LCBjaGVjayB3aGV0aGVyIHRoZSB0b3VjaCBoYXMgbW92ZWQgcGFzdCBhIGJvdW5kYXJ5IHNpbmNlIGl0IHN0YXJ0ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS50b3VjaEhhc01vdmVkID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSwgYm91bmRhcnkgPSB0aGlzLnRvdWNoQm91bmRhcnk7XG5cblx0XHRpZiAoTWF0aC5hYnModG91Y2gucGFnZVggLSB0aGlzLnRvdWNoU3RhcnRYKSA+IGJvdW5kYXJ5IHx8IE1hdGguYWJzKHRvdWNoLnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0WSkgPiBib3VuZGFyeSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgbGFzdCBwb3NpdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAoIXRoaXMudHJhY2tpbmdDbGljaykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIHRvdWNoIGhhcyBtb3ZlZCwgY2FuY2VsIHRoZSBjbGljayB0cmFja2luZ1xuXHRcdGlmICh0aGlzLnRhcmdldEVsZW1lbnQgIT09IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpIHx8IHRoaXMudG91Y2hIYXNNb3ZlZChldmVudCkpIHtcblx0XHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBBdHRlbXB0IHRvIGZpbmQgdGhlIGxhYmVsbGVkIGNvbnRyb2wgZm9yIHRoZSBnaXZlbiBsYWJlbCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEhUTUxMYWJlbEVsZW1lbnR9IGxhYmVsRWxlbWVudFxuXHQgKiBAcmV0dXJucyB7RWxlbWVudHxudWxsfVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5maW5kQ29udHJvbCA9IGZ1bmN0aW9uKGxhYmVsRWxlbWVudCkge1xuXG5cdFx0Ly8gRmFzdCBwYXRoIGZvciBuZXdlciBicm93c2VycyBzdXBwb3J0aW5nIHRoZSBIVE1MNSBjb250cm9sIGF0dHJpYnV0ZVxuXHRcdGlmIChsYWJlbEVsZW1lbnQuY29udHJvbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LmNvbnRyb2w7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsIGJyb3dzZXJzIHVuZGVyIHRlc3QgdGhhdCBzdXBwb3J0IHRvdWNoIGV2ZW50cyBhbHNvIHN1cHBvcnQgdGhlIEhUTUw1IGh0bWxGb3IgYXR0cmlidXRlXG5cdFx0aWYgKGxhYmVsRWxlbWVudC5odG1sRm9yKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGFiZWxFbGVtZW50Lmh0bWxGb3IpO1xuXHRcdH1cblxuXHRcdC8vIElmIG5vIGZvciBhdHRyaWJ1dGUgZXhpc3RzLCBhdHRlbXB0IHRvIHJldHJpZXZlIHRoZSBmaXJzdCBsYWJlbGxhYmxlIGRlc2NlbmRhbnQgZWxlbWVudFxuXHRcdC8vIHRoZSBsaXN0IG9mIHdoaWNoIGlzIGRlZmluZWQgaGVyZTogaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvZm9ybXMuaHRtbCNjYXRlZ29yeS1sYWJlbFxuXHRcdHJldHVybiBsYWJlbEVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLCBpbnB1dDpub3QoW3R5cGU9aGlkZGVuXSksIGtleWdlbiwgbWV0ZXIsIG91dHB1dCwgcHJvZ3Jlc3MsIHNlbGVjdCwgdGV4dGFyZWEnKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBlbmQsIGRldGVybWluZSB3aGV0aGVyIHRvIHNlbmQgYSBjbGljayBldmVudCBhdCBvbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaEVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIGZvckVsZW1lbnQsIHRyYWNraW5nQ2xpY2tTdGFydCwgdGFyZ2V0VGFnTmFtZSwgc2Nyb2xsUGFyZW50LCB0b3VjaCwgdGFyZ2V0RWxlbWVudCA9IHRoaXMudGFyZ2V0RWxlbWVudDtcblxuXHRcdGlmICghdGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBQcmV2ZW50IHBoYW50b20gY2xpY2tzIG9uIGZhc3QgZG91YmxlLXRhcCAoaXNzdWUgIzM2KVxuXHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdGhpcy5sYXN0Q2xpY2tUaW1lKSA8IHRoaXMudGFwRGVsYXkgJiYgKGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMubGFzdENsaWNrVGltZSkgPiAtMSkge1xuXHRcdFx0dGhpcy5jYW5jZWxOZXh0Q2xpY2sgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCkgPiB0aGlzLnRhcFRpbWVvdXQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFJlc2V0IHRvIHByZXZlbnQgd3JvbmcgY2xpY2sgY2FuY2VsIG9uIGlucHV0IChpc3N1ZSAjMTU2KS5cblx0XHR0aGlzLmNhbmNlbE5leHRDbGljayA9IGZhbHNlO1xuXG5cdFx0dGhpcy5sYXN0Q2xpY2tUaW1lID0gZXZlbnQudGltZVN0YW1wO1xuXG5cdFx0dHJhY2tpbmdDbGlja1N0YXJ0ID0gdGhpcy50cmFja2luZ0NsaWNrU3RhcnQ7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cdFx0Ly8gT24gc29tZSBpT1MgZGV2aWNlcywgdGhlIHRhcmdldEVsZW1lbnQgc3VwcGxpZWQgd2l0aCB0aGUgZXZlbnQgaXMgaW52YWxpZCBpZiB0aGUgbGF5ZXJcblx0XHQvLyBpcyBwZXJmb3JtaW5nIGEgdHJhbnNpdGlvbiBvciBzY3JvbGwsIGFuZCBoYXMgdG8gYmUgcmUtZGV0ZWN0ZWQgbWFudWFsbHkuIE5vdGUgdGhhdFxuXHRcdC8vIGZvciB0aGlzIHRvIGZ1bmN0aW9uIGNvcnJlY3RseSwgaXQgbXVzdCBiZSBjYWxsZWQgKmFmdGVyKiB0aGUgZXZlbnQgdGFyZ2V0IGlzIGNoZWNrZWQhXG5cdFx0Ly8gU2VlIGlzc3VlICM1NzsgYWxzbyBmaWxlZCBhcyByZGFyOi8vMTMwNDg1ODkgLlxuXHRcdGlmIChkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQpIHtcblx0XHRcdHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHRcdC8vIEluIGNlcnRhaW4gY2FzZXMgYXJndW1lbnRzIG9mIGVsZW1lbnRGcm9tUG9pbnQgY2FuIGJlIG5lZ2F0aXZlLCBzbyBwcmV2ZW50IHNldHRpbmcgdGFyZ2V0RWxlbWVudCB0byBudWxsXG5cdFx0XHR0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpIHx8IHRhcmdldEVsZW1lbnQ7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudCA9IHRoaXMudGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0VGFnTmFtZSA9IHRhcmdldEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICh0YXJnZXRUYWdOYW1lID09PSAnbGFiZWwnKSB7XG5cdFx0XHRmb3JFbGVtZW50ID0gdGhpcy5maW5kQ29udHJvbCh0YXJnZXRFbGVtZW50KTtcblx0XHRcdGlmIChmb3JFbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0YXJnZXRFbGVtZW50ID0gZm9yRWxlbWVudDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMubmVlZHNGb2N1cyh0YXJnZXRFbGVtZW50KSkge1xuXG5cdFx0XHQvLyBDYXNlIDE6IElmIHRoZSB0b3VjaCBzdGFydGVkIGEgd2hpbGUgYWdvIChiZXN0IGd1ZXNzIGlzIDEwMG1zIGJhc2VkIG9uIHRlc3RzIGZvciBpc3N1ZSAjMzYpIHRoZW4gZm9jdXMgd2lsbCBiZSB0cmlnZ2VyZWQgYW55d2F5LiBSZXR1cm4gZWFybHkgYW5kIHVuc2V0IHRoZSB0YXJnZXQgZWxlbWVudCByZWZlcmVuY2Ugc28gdGhhdCB0aGUgc3Vic2VxdWVudCBjbGljayB3aWxsIGJlIGFsbG93ZWQgdGhyb3VnaC5cblx0XHRcdC8vIENhc2UgMjogV2l0aG91dCB0aGlzIGV4Y2VwdGlvbiBmb3IgaW5wdXQgZWxlbWVudHMgdGFwcGVkIHdoZW4gdGhlIGRvY3VtZW50IGlzIGNvbnRhaW5lZCBpbiBhbiBpZnJhbWUsIHRoZW4gYW55IGlucHV0dGVkIHRleHQgd29uJ3QgYmUgdmlzaWJsZSBldmVuIHRob3VnaCB0aGUgdmFsdWUgYXR0cmlidXRlIGlzIHVwZGF0ZWQgYXMgdGhlIHVzZXIgdHlwZXMgKGlzc3VlICMzNykuXG5cdFx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRyYWNraW5nQ2xpY2tTdGFydCkgPiAxMDAgfHwgKGRldmljZUlzSU9TICYmIHdpbmRvdy50b3AgIT09IHdpbmRvdyAmJiB0YXJnZXRUYWdOYW1lID09PSAnaW5wdXQnKSkge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR0aGlzLnNlbmRDbGljayh0YXJnZXRFbGVtZW50LCBldmVudCk7XG5cblx0XHRcdC8vIFNlbGVjdCBlbGVtZW50cyBuZWVkIHRoZSBldmVudCB0byBnbyB0aHJvdWdoIG9uIGlPUyA0LCBvdGhlcndpc2UgdGhlIHNlbGVjdG9yIG1lbnUgd29uJ3Qgb3Blbi5cblx0XHRcdC8vIEFsc28gdGhpcyBicmVha3Mgb3BlbmluZyBzZWxlY3RzIHdoZW4gVm9pY2VPdmVyIGlzIGFjdGl2ZSBvbiBpT1M2LCBpT1M3IChhbmQgcG9zc2libHkgb3RoZXJzKVxuXHRcdFx0aWYgKCFkZXZpY2VJc0lPUyB8fCB0YXJnZXRUYWdOYW1lICE9PSAnc2VsZWN0Jykge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmICFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdFx0Ly8gRG9uJ3Qgc2VuZCBhIHN5bnRoZXRpYyBjbGljayBldmVudCBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHBhcmVudCBsYXllciB0aGF0IHdhcyBzY3JvbGxlZFxuXHRcdFx0Ly8gYW5kIHRoaXMgdGFwIGlzIGJlaW5nIHVzZWQgdG8gc3RvcCB0aGUgc2Nyb2xsaW5nICh1c3VhbGx5IGluaXRpYXRlZCBieSBhIGZsaW5nIC0gaXNzdWUgIzQyKS5cblx0XHRcdHNjcm9sbFBhcmVudCA9IHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHRcdFx0aWYgKHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQuZmFzdENsaWNrTGFzdFNjcm9sbFRvcCAhPT0gc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmV2ZW50IHRoZSBhY3R1YWwgY2xpY2sgZnJvbSBnb2luZyB0aG91Z2ggLSB1bmxlc3MgdGhlIHRhcmdldCBub2RlIGlzIG1hcmtlZCBhcyByZXF1aXJpbmdcblx0XHQvLyByZWFsIGNsaWNrcyBvciBpZiBpdCBpcyBpbiB0aGUgd2hpdGVsaXN0IGluIHdoaWNoIGNhc2Ugb25seSBub24tcHJvZ3JhbW1hdGljIGNsaWNrcyBhcmUgcGVybWl0dGVkLlxuXHRcdGlmICghdGhpcy5uZWVkc0NsaWNrKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5zZW5kQ2xpY2sodGFyZ2V0RWxlbWVudCwgZXZlbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBjYW5jZWwsIHN0b3AgdHJhY2tpbmcgdGhlIGNsaWNrLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaENhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdH07XG5cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIG1vdXNlIGV2ZW50cyB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Nb3VzZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cblx0XHQvLyBJZiBhIHRhcmdldCBlbGVtZW50IHdhcyBuZXZlciBzZXQgKGJlY2F1c2UgYSB0b3VjaCBldmVudCB3YXMgbmV2ZXIgZmlyZWQpIGFsbG93IHRoZSBldmVudFxuXHRcdGlmICghdGhpcy50YXJnZXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZm9yd2FyZGVkVG91Y2hFdmVudCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUHJvZ3JhbW1hdGljYWxseSBnZW5lcmF0ZWQgZXZlbnRzIHRhcmdldGluZyBhIHNwZWNpZmljIGVsZW1lbnQgc2hvdWxkIGJlIHBlcm1pdHRlZFxuXHRcdGlmICghZXZlbnQuY2FuY2VsYWJsZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gRGVyaXZlIGFuZCBjaGVjayB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gc2VlIHdoZXRoZXIgdGhlIG1vdXNlIGV2ZW50IG5lZWRzIHRvIGJlIHBlcm1pdHRlZDtcblx0XHQvLyB1bmxlc3MgZXhwbGljaXRseSBlbmFibGVkLCBwcmV2ZW50IG5vbi10b3VjaCBjbGljayBldmVudHMgZnJvbSB0cmlnZ2VyaW5nIGFjdGlvbnMsXG5cdFx0Ly8gdG8gcHJldmVudCBnaG9zdC9kb3VibGVjbGlja3MuXG5cdFx0aWYgKCF0aGlzLm5lZWRzQ2xpY2sodGhpcy50YXJnZXRFbGVtZW50KSB8fCB0aGlzLmNhbmNlbE5leHRDbGljaykge1xuXG5cdFx0XHQvLyBQcmV2ZW50IGFueSB1c2VyLWFkZGVkIGxpc3RlbmVycyBkZWNsYXJlZCBvbiBGYXN0Q2xpY2sgZWxlbWVudCBmcm9tIGJlaW5nIGZpcmVkLlxuXHRcdFx0aWYgKGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuXHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFydCBvZiB0aGUgaGFjayBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IEV2ZW50I3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoZS5nLiBBbmRyb2lkIDIpXG5cdFx0XHRcdGV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbmNlbCB0aGUgZXZlbnRcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBtb3VzZSBldmVudCBpcyBwZXJtaXR0ZWQsIHJldHVybiB0cnVlIGZvciB0aGUgYWN0aW9uIHRvIGdvIHRocm91Z2guXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gYWN0dWFsIGNsaWNrcywgZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhIHRvdWNoLWdlbmVyYXRlZCBjbGljaywgYSBjbGljayBhY3Rpb24gb2NjdXJyaW5nXG5cdCAqIG5hdHVyYWxseSBhZnRlciBhIGRlbGF5IGFmdGVyIGEgdG91Y2ggKHdoaWNoIG5lZWRzIHRvIGJlIGNhbmNlbGxlZCB0byBhdm9pZCBkdXBsaWNhdGlvbiksIG9yXG5cdCAqIGFuIGFjdHVhbCBjbGljayB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHBlcm1pdHRlZDtcblxuXHRcdC8vIEl0J3MgcG9zc2libGUgZm9yIGFub3RoZXIgRmFzdENsaWNrLWxpa2UgbGlicmFyeSBkZWxpdmVyZWQgd2l0aCB0aGlyZC1wYXJ0eSBjb2RlIHRvIGZpcmUgYSBjbGljayBldmVudCBiZWZvcmUgRmFzdENsaWNrIGRvZXMgKGlzc3VlICM0NCkuIEluIHRoYXQgY2FzZSwgc2V0IHRoZSBjbGljay10cmFja2luZyBmbGFnIGJhY2sgdG8gZmFsc2UgYW5kIHJldHVybiBlYXJseS4gVGhpcyB3aWxsIGNhdXNlIG9uVG91Y2hFbmQgdG8gcmV0dXJuIGVhcmx5LlxuXHRcdGlmICh0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFZlcnkgb2RkIGJlaGF2aW9yIG9uIGlPUyAoaXNzdWUgIzE4KTogaWYgYSBzdWJtaXQgZWxlbWVudCBpcyBwcmVzZW50IGluc2lkZSBhIGZvcm0gYW5kIHRoZSB1c2VyIGhpdHMgZW50ZXIgaW4gdGhlIGlPUyBzaW11bGF0b3Igb3IgY2xpY2tzIHRoZSBHbyBidXR0b24gb24gdGhlIHBvcC11cCBPUyBrZXlib2FyZCB0aGUgYSBraW5kIG9mICdmYWtlJyBjbGljayBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCB3aXRoIHRoZSBzdWJtaXQtdHlwZSBpbnB1dCBlbGVtZW50IGFzIHRoZSB0YXJnZXQuXG5cdFx0aWYgKGV2ZW50LnRhcmdldC50eXBlID09PSAnc3VibWl0JyAmJiBldmVudC5kZXRhaWwgPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHBlcm1pdHRlZCA9IHRoaXMub25Nb3VzZShldmVudCk7XG5cblx0XHQvLyBPbmx5IHVuc2V0IHRhcmdldEVsZW1lbnQgaWYgdGhlIGNsaWNrIGlzIG5vdCBwZXJtaXR0ZWQuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCB0aGUgY2hlY2sgZm9yICF0YXJnZXRFbGVtZW50IGluIG9uTW91c2UgZmFpbHMgYW5kIHRoZSBicm93c2VyJ3MgY2xpY2sgZG9lc24ndCBnbyB0aHJvdWdoLlxuXHRcdGlmICghcGVybWl0dGVkKSB7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblxuXHRcdC8vIElmIGNsaWNrcyBhcmUgcGVybWl0dGVkLCByZXR1cm4gdHJ1ZSBmb3IgdGhlIGFjdGlvbiB0byBnbyB0aHJvdWdoLlxuXHRcdHJldHVybiBwZXJtaXR0ZWQ7XG5cdH07XG5cblxuXHQvKipcblx0ICogUmVtb3ZlIGFsbCBGYXN0Q2xpY2sncyBldmVudCBsaXN0ZW5lcnMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGxheWVyID0gdGhpcy5sYXllcjtcblxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCBmYWxzZSk7XG5cdH07XG5cblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciBGYXN0Q2xpY2sgaXMgbmVlZGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICovXG5cdEZhc3RDbGljay5ub3ROZWVkZWQgPSBmdW5jdGlvbihsYXllcikge1xuXHRcdHZhciBtZXRhVmlld3BvcnQ7XG5cdFx0dmFyIGNocm9tZVZlcnNpb247XG5cdFx0dmFyIGJsYWNrYmVycnlWZXJzaW9uO1xuXHRcdHZhciBmaXJlZm94VmVyc2lvbjtcblxuXHRcdC8vIERldmljZXMgdGhhdCBkb24ndCBzdXBwb3J0IHRvdWNoIGRvbid0IG5lZWQgRmFzdENsaWNrXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hyb21lIHZlcnNpb24gLSB6ZXJvIGZvciBvdGhlciBicm93c2Vyc1xuXHRcdGNocm9tZVZlcnNpb24gPSArKC9DaHJvbWVcXC8oWzAtOV0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBbLDBdKVsxXTtcblxuXHRcdGlmIChjaHJvbWVWZXJzaW9uKSB7XG5cblx0XHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXG5cdFx0XHRcdGlmIChtZXRhVmlld3BvcnQpIHtcblx0XHRcdFx0XHQvLyBDaHJvbWUgb24gQW5kcm9pZCB3aXRoIHVzZXItc2NhbGFibGU9XCJub1wiIGRvZXNuJ3QgbmVlZCBGYXN0Q2xpY2sgKGlzc3VlICM4OSlcblx0XHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIENocm9tZSAzMiBhbmQgYWJvdmUgd2l0aCB3aWR0aD1kZXZpY2Utd2lkdGggb3IgbGVzcyBkb24ndCBuZWVkIEZhc3RDbGlja1xuXHRcdFx0XHRcdGlmIChjaHJvbWVWZXJzaW9uID4gMzEgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gQ2hyb21lIGRlc2t0b3AgZG9lc24ndCBuZWVkIEZhc3RDbGljayAoaXNzdWUgIzE1KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGRldmljZUlzQmxhY2tCZXJyeTEwKSB7XG5cdFx0XHRibGFja2JlcnJ5VmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1ZlcnNpb25cXC8oWzAtOV0qKVxcLihbMC05XSopLyk7XG5cblx0XHRcdC8vIEJsYWNrQmVycnkgMTAuMysgZG9lcyBub3QgcmVxdWlyZSBGYXN0Y2xpY2sgbGlicmFyeS5cblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mdGxhYnMvZmFzdGNsaWNrL2lzc3Vlcy8yNTFcblx0XHRcdGlmIChibGFja2JlcnJ5VmVyc2lvblsxXSA+PSAxMCAmJiBibGFja2JlcnJ5VmVyc2lvblsyXSA+PSAzKSB7XG5cdFx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuXHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0KSB7XG5cdFx0XHRcdFx0Ly8gdXNlci1zY2FsYWJsZT1ubyBlbGltaW5hdGVzIGNsaWNrIGRlbGF5LlxuXHRcdFx0XHRcdGlmIChtZXRhVmlld3BvcnQuY29udGVudC5pbmRleE9mKCd1c2VyLXNjYWxhYmxlPW5vJykgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gd2lkdGg9ZGV2aWNlLXdpZHRoIChvciBsZXNzIHRoYW4gZGV2aWNlLXdpZHRoKSBlbGltaW5hdGVzIGNsaWNrIGRlbGF5LlxuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElFMTAgd2l0aCAtbXMtdG91Y2gtYWN0aW9uOiBub25lIG9yIG1hbmlwdWxhdGlvbiwgd2hpY2ggZGlzYWJsZXMgZG91YmxlLXRhcC10by16b29tIChpc3N1ZSAjOTcpXG5cdFx0aWYgKGxheWVyLnN0eWxlLm1zVG91Y2hBY3Rpb24gPT09ICdub25lJyB8fCBsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ21hbmlwdWxhdGlvbicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIEZpcmVmb3ggdmVyc2lvbiAtIHplcm8gZm9yIG90aGVyIGJyb3dzZXJzXG5cdFx0ZmlyZWZveFZlcnNpb24gPSArKC9GaXJlZm94XFwvKFswLTldKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgWywwXSlbMV07XG5cblx0XHRpZiAoZmlyZWZveFZlcnNpb24gPj0gMjcpIHtcblx0XHRcdC8vIEZpcmVmb3ggMjcrIGRvZXMgbm90IGhhdmUgdGFwIGRlbGF5IGlmIHRoZSBjb250ZW50IGlzIG5vdCB6b29tYWJsZSAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTkyMjg5NlxuXG5cdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cdFx0XHRpZiAobWV0YVZpZXdwb3J0ICYmIChtZXRhVmlld3BvcnQuY29udGVudC5pbmRleE9mKCd1c2VyLXNjYWxhYmxlPW5vJykgIT09IC0xIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSUUxMTogcHJlZml4ZWQgLW1zLXRvdWNoLWFjdGlvbiBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGFuZCBpdCdzIHJlY29tbWVuZGVkIHRvIHVzZSBub24tcHJlZml4ZWQgdmVyc2lvblxuXHRcdC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS93aW5kb3dzL2FwcHMvSGg3NjczMTMuYXNweFxuXHRcdGlmIChsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ25vbmUnIHx8IGxheWVyLnN0eWxlLnRvdWNoQWN0aW9uID09PSAnbWFuaXB1bGF0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEZhY3RvcnkgbWV0aG9kIGZvciBjcmVhdGluZyBhIEZhc3RDbGljayBvYmplY3Rcblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzXG5cdCAqL1xuXHRGYXN0Q2xpY2suYXR0YWNoID0gZnVuY3Rpb24obGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gbmV3IEZhc3RDbGljayhsYXllciwgb3B0aW9ucyk7XG5cdH07XG5cbiAgd2luZG93LkZhc3RDbGljayA9IEZhc3RDbGljaztcbn0oKSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBERUZBVUxUX1ZJRVdQT1JUID0gJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsbWF4aW11bS1zY2FsZT0xLG1pbmltdW0tc2NhbGU9MSx1c2VyLXNjYWxhYmxlPW5vJztcblxuICB2YXIgVmlld3BvcnQgPSB7IFxuICAgIGVuc3VyZVZpZXdwb3J0RWxlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmlld3BvcnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXG4gICAgICBpZiAoIXZpZXdwb3J0RWxlbWVudCkge1xuICAgICAgICB2aWV3cG9ydEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG4gICAgICAgIHZpZXdwb3J0RWxlbWVudC5uYW1lID0gJ3ZpZXdwb3J0JztcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh2aWV3cG9ydEVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmlld3BvcnRFbGVtZW50O1xuICAgIH0sXG5cbiAgICBzZXR1cDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmlld3BvcnRFbGVtZW50ID0gVmlld3BvcnQuZW5zdXJlVmlld3BvcnRFbGVtZW50KCk7XG5cbiAgICAgIGlmICghdmlld3BvcnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2aWV3cG9ydEVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250ZW50JykpIHtcbiAgICAgICAgdmlld3BvcnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudCcsIERFRkFVTFRfVklFV1BPUlQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3aW5kb3cuVmlld3BvcnQgPSBWaWV3cG9ydDtcbn0pKCk7XG4iLCIvLyBMb2FkIG5vbi1wb2x5ZmlsbCBsaWJyYXJpZXNcbmltcG9ydCAnLi9GYXN0Q2xpY2tAMS4wLjYrbW9kL2Zhc3RjbGljay5qcyc7XG4vLyBpbXBvcnQgJy4vbWljcm9ldmVudC5qc0A0N2NiYzE0K21vZC9taWNyb2V2ZW50LmpzJztcbmltcG9ydCAnLi92aWV3cG9ydC5qcyc7XG4iLCJpbXBvcnQgJy4vb25zL3BsYXRmb3JtJzsgLy8gVGhpcyBmaWxlIG11c3QgYmUgbG9hZGVkIGJlZm9yZSBDdXN0b20gRWxlbWVudHMgcG9seWZpbGxzLlxuaW1wb3J0ICcuL3BvbHlmaWxscy9pbmRleC5qcyc7XG5pbXBvcnQgJy4vdmVuZG9yL2luZGV4LmpzJztcbmltcG9ydCAnLi9vbnMvbWljcm9ldmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwKG9ucykge1xuICBpZiAod2luZG93Lm9ucykge1xuICAgIG9ucy5fdXRpbC53YXJuKCdPbnNlbiBVSSBpcyBsb2FkZWQgbW9yZSB0aGFuIG9uY2UuJyk7XG4gIH1cblxuICAvLyBmYXN0Y2xpY2tcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgb25zLmZhc3RDbGljayA9IEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSk7XG5cbiAgICBjb25zdCBzdXBwb3J0VG91Y2hBY3Rpb24gPSAndG91Y2gtYWN0aW9uJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgb25zLnBsYXRmb3JtLl9ydW5PbkFjdHVhbFBsYXRmb3JtKCgpID0+IHtcbiAgICAgIGlmIChvbnMucGxhdGZvcm0uaXNBbmRyb2lkKCkpIHtcbiAgICAgICAgLy8gSW4gQW5kcm9pZDQuNCssIGNvcnJlY3Qgdmlld3BvcnQgc2V0dGluZ3MgY2FuIHJlbW92ZSBjbGljayBkZWxheS5cbiAgICAgICAgLy8gU28gZGlzYWJsZSBGYXN0Q2xpY2sgb24gQW5kcm9pZC5cbiAgICAgICAgb25zLmZhc3RDbGljay5kZXN0cm95KCk7XG4gICAgICB9IGVsc2UgaWYgKG9ucy5wbGF0Zm9ybS5pc0lPUygpKSB7XG4gICAgICAgIGlmIChzdXBwb3J0VG91Y2hBY3Rpb24gJiYgKG9ucy5wbGF0Zm9ybS5pc0lPU1NhZmFyaSgpIHx8IG9ucy5wbGF0Zm9ybS5pc1dLV2ViVmlldygpKSkge1xuICAgICAgICAgIC8vIElmICd0b3VjaC1hY3Rpb24nIHN1cHBvcnRlZCBpbiBpT1MgU2FmYXJpIG9yIFdLV2ViVmlldywgZGlzYWJsZSBGYXN0Q2xpY2suXG4gICAgICAgICAgb25zLmZhc3RDbGljay5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRG8gbm90aGluZy4gJ3RvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uJyBoYXMgbm8gZWZmZWN0IG9uIFVJV2ViVmlldy5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LCBmYWxzZSk7XG5cbiAgb25zLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIG9ucy5lbmFibGVEZXZpY2VCYWNrQnV0dG9uSGFuZGxlcigpO1xuICAgIG9ucy5fZGVmYXVsdERldmljZUJhY2tCdXR0b25IYW5kbGVyID0gb25zLl9pbnRlcm5hbC5kYmJEaXNwYXRjaGVyLmNyZWF0ZUhhbmRsZXIod2luZG93LmRvY3VtZW50LmJvZHksICgpID0+IHtcbiAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChuYXZpZ2F0b3IsICdhcHAnKSkge1xuICAgICAgICBuYXZpZ2F0b3IuYXBwLmV4aXRBcHAoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IGNsb3NlIHRoZSBhcHAuIElzIFxcJ2NvcmRvdmEuanNcXCcgaW5jbHVkZWQ/XFxuRXJyb3I6IFxcJ3dpbmRvdy5uYXZpZ2F0b3IuYXBwXFwnIGlzIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5Ll9nZXN0dXJlRGV0ZWN0b3IgPSBuZXcgb25zLkdlc3R1cmVEZXRlY3Rvcihkb2N1bWVudC5ib2R5KTtcblxuICAgIC8vIFNpbXVsYXRlIERldmljZSBCYWNrIEJ1dHRvbiBvbiBFU0MgcHJlc3NcbiAgICBpZiAoIW9ucy5wbGF0Zm9ybS5pc1dlYlZpZXcoKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgb25zLmZpcmVEZXZpY2VCYWNrQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBzZXR1cCBsb2FkaW5nIHBsYWNlaG9sZGVyXG4gICAgb25zLl9zZXR1cExvYWRpbmdQbGFjZUhvbGRlcnMoKTtcbiAgfSk7XG5cbiAgLy8gdmlld3BvcnQuanNcbiAgVmlld3BvcnQuc2V0dXAoKTtcbn1cbiIsImltcG9ydCBvbnMgZnJvbSAnLi9vbnMnOyAvLyBFeHRlcm5hbCBkZXBlbmRlbmN5LCBhbHdheXMgaG9pc3RlZFxuaW1wb3J0IHNldHVwIGZyb20gJy4vc2V0dXAnO1xuXG5zZXR1cChvbnMpOyAvLyBTZXR1cCBpbml0aWFsIGxpc3RlbmVyc1xuXG5leHBvcnQgZGVmYXVsdCBvbnM7XG4iXSwibmFtZXMiOlsid2luZG93IiwiY3VzdG9tRWxlbWVudHMiLCJmb3JjZVBvbHlmaWxsIiwiZ2xvYmFsIiwibW9kdWxlIiwiTWF0aCIsInNlbGYiLCJGdW5jdGlvbiIsIl9fZyIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiaXQiLCJpc09iamVjdCIsIlR5cGVFcnJvciIsImV4ZWMiLCJlIiwicmVxdWlyZSQkMCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYSIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50IiwicmVxdWlyZSQkMSIsInJlcXVpcmUkJDIiLCJTIiwiZm4iLCJ2YWwiLCJ0b1N0cmluZyIsImNhbGwiLCJ2YWx1ZU9mIiwiZFAiLCJPIiwiUCIsIkF0dHJpYnV0ZXMiLCJ0b1ByaW1pdGl2ZSIsIklFOF9ET01fREVGSU5FIiwidmFsdWUiLCJiaXRtYXAiLCJvYmplY3QiLCJrZXkiLCJmIiwiY3JlYXRlRGVzYyIsImhhc093blByb3BlcnR5IiwiaWQiLCJweCIsInJhbmRvbSIsImNvbmNhdCIsInVuZGVmaW5lZCIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsInNwbGl0IiwiaW5zcGVjdFNvdXJjZSIsInNhZmUiLCJpc0Z1bmN0aW9uIiwiaGFzIiwiaGlkZSIsImpvaW4iLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ0aGF0IiwibGVuZ3RoIiwiYiIsImMiLCJhcHBseSIsImFyZ3VtZW50cyIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJ0eXBlIiwibmFtZSIsInNvdXJjZSIsIklTX0ZPUkNFRCIsIkYiLCJJU19HTE9CQUwiLCJHIiwiSVNfU1RBVElDIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiQiIsInRhcmdldCIsImV4cG9ydHMiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsImN0eCIsInJlZGVmaW5lIiwiVSIsIlciLCJSIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJzbGljZSIsImNvZiIsIklPYmplY3QiLCJkZWZpbmVkIiwiZ09QRCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInRvSU9iamVjdCIsInBJRSIsImNoZWNrIiwicHJvdG8iLCJzZXRQcm90b3R5cGVPZiIsInRlc3QiLCJidWdneSIsInNldCIsIkFycmF5IiwiX19wcm90b19fIiwiU0hBUkVEIiwic3RvcmUiLCJTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJ1aWQiLCJUQUciLCJBUkciLCJ0cnlHZXQiLCJUIiwiY2FsbGVlIiwiY2xhc3NvZiIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwicG9zIiwicyIsImkiLCJ0b0ludGVnZXIiLCJsIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsIm1pbiIsIm1heCIsImluZGV4IiwiSVNfSU5DTFVERVMiLCIkdGhpcyIsImVsIiwiZnJvbUluZGV4IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJzaGFyZWQiLCJhcnJheUluZGV4T2YiLCJJRV9QUk9UTyIsIm5hbWVzIiwicmVzdWx0IiwicHVzaCIsImtleXMiLCIka2V5cyIsImVudW1CdWdLZXlzIiwiZGVmaW5lUHJvcGVydGllcyIsIlByb3BlcnRpZXMiLCJnZXRLZXlzIiwiZG9jdW1lbnRFbGVtZW50IiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJjcmVhdGUiLCJhbk9iamVjdCIsImRQcyIsImRlZiIsInRhZyIsInN0YXQiLCJjb25maWd1cmFibGUiLCJJdGVyYXRvclByb3RvdHlwZSIsIkNvbnN0cnVjdG9yIiwiTkFNRSIsIm5leHQiLCJkZXNjcmlwdG9yIiwiT2JqZWN0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsInRvT2JqZWN0IiwiY29uc3RydWN0b3IiLCJJVEVSQVRPUiIsIkJVR0dZIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkJhc2UiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInZhbHVlcyIsImVudHJpZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIm1ldGhvZHMiLCJMSUJSQVJZIiwiJGF0IiwiaXRlcmF0ZWQiLCJfdCIsIl9pIiwicG9pbnQiLCJkb25lIiwiVU5TQ09QQUJMRVMiLCJBcnJheVByb3RvIiwiX2siLCJzdGVwIiwiSXRlcmF0b3JzIiwiQXJndW1lbnRzIiwiYWRkVG9VbnNjb3BhYmxlcyIsIndrcyIsIlRPX1NUUklOR19UQUciLCJBcnJheVZhbHVlcyIsIkRPTUl0ZXJhYmxlcyIsImNvbGxlY3Rpb25zIiwiZXhwbGljaXQiLCJDb2xsZWN0aW9uIiwiJGl0ZXJhdG9ycyIsImZvcmJpZGRlbkZpZWxkIiwiaXRlcmF0b3IiLCJyZXQiLCJnZXRJdGVyYXRvck1ldGhvZCIsIkJSRUFLIiwiUkVUVVJOIiwiaXRlcmFibGUiLCJpdGVyRm4iLCJnZXRJdGVyRm4iLCJpc0FycmF5SXRlciIsIlNQRUNJRVMiLCJLRVkiLCJDIiwiREVTQ1JJUFRPUlMiLCJNRVRBIiwic2V0RGVzYyIsImlzRXh0ZW5zaWJsZSIsIkZSRUVaRSIsInByZXZlbnRFeHRlbnNpb25zIiwic2V0TWV0YSIsImZhc3RLZXkiLCJnZXRXZWFrIiwidyIsIm9uRnJlZXplIiwibWV0YSIsIk5FRUQiLCJUWVBFIiwiU0laRSIsImdldEVudHJ5IiwiZW50cnkiLCJfZiIsIm4iLCJrIiwid3JhcHBlciIsIklTX01BUCIsIkFEREVSIiwiX2wiLCJmb3JPZiIsImNsZWFyIiwidmFsaWRhdGUiLCJkYXRhIiwiciIsInAiLCJwcmV2IiwiZm9yRWFjaCIsImNhbGxiYWNrZm4iLCJ2IiwiU0FGRV9DTE9TSU5HIiwicml0ZXIiLCJza2lwQ2xvc2luZyIsImFyciIsIml0ZXIiLCJjb21tb24iLCJJU19XRUFLIiwiZml4TWV0aG9kIiwiYWRkIiwiZmFpbHMiLCJnZXRDb25zdHJ1Y3RvciIsImluc3RhbmNlIiwiSEFTTlRfQ0hBSU5JTkciLCJUSFJPV1NfT05fUFJJTUlUSVZFUyIsIkFDQ0VQVF9JVEVSQUJMRVMiLCIkaXRlckRldGVjdCIsIkJVR0dZX1pFUk8iLCIkaW5zdGFuY2UiLCJpbmhlcml0SWZSZXF1aXJlZCIsInNldFN0cm9uZyIsIlNFVCIsIlNldCIsInN0cm9uZyIsInRvSlNPTiIsImZyb20iLCJDT0xMRUNUSU9OIiwib2YiLCJBIiwibWFwRm4iLCJtYXBwaW5nIiwiY2IiLCJhRnVuY3Rpb24iLCJuZXh0SXRlbSIsInJlcXVpcmUkJDciLCJNQVAiLCJNYXAiLCJyZXNlcnZlZFRhZ0xpc3QiLCJpc1ZhbGlkQ3VzdG9tRWxlbWVudE5hbWUiLCJsb2NhbE5hbWUiLCJyZXNlcnZlZCIsInZhbGlkRm9ybSIsImlzQ29ubmVjdGVkIiwibm9kZSIsIm5hdGl2ZVZhbHVlIiwiY3VycmVudCIsIl9fQ0VfaXNJbXBvcnREb2N1bWVudCIsIkRvY3VtZW50IiwicGFyZW50Tm9kZSIsIlNoYWRvd1Jvb3QiLCJob3N0IiwibmV4dFNpYmxpbmdPckFuY2VzdG9yU2libGluZyIsInJvb3QiLCJzdGFydCIsIm5leHRTaWJsaW5nIiwibmV4dE5vZGUiLCJmaXJzdENoaWxkIiwid2Fsa0RlZXBEZXNjZW5kYW50RWxlbWVudHMiLCJjYWxsYmFjayIsInZpc2l0ZWRJbXBvcnRzIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImltcG9ydE5vZGUiLCJpbXBvcnQiLCJjaGlsZCIsInNoYWRvd1Jvb3QiLCJfX0NFX3NoYWRvd1Jvb3QiLCJzZXRQcm9wZXJ0eVVuY2hlY2tlZCIsImRlc3RpbmF0aW9uIiwiQ3VzdG9tRWxlbWVudFN0YXRlIiwiQ3VzdG9tRWxlbWVudEludGVybmFscyIsIl9sb2NhbE5hbWVUb0RlZmluaXRpb24iLCJfY29uc3RydWN0b3JUb0RlZmluaXRpb24iLCJfcGF0Y2hlcyIsIl9oYXNQYXRjaGVzIiwiZGVmaW5pdGlvbiIsImxpc3RlbmVyIiwicGF0Y2giLCJfX0NFX3BhdGNoZWQiLCJlbGVtZW50cyIsIl9fQ0Vfc3RhdGUiLCJDRVN0YXRlIiwiY3VzdG9tIiwiVXRpbGl0aWVzIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJ1cGdyYWRlRWxlbWVudCIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiZ2F0aGVyRWxlbWVudHMiLCJyZWFkeVN0YXRlIiwiX19DRV9oYXNSZWdpc3RyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQiLCJkZWxldGUiLCJwYXRjaEFuZFVwZ3JhZGVUcmVlIiwiY3VycmVudFN0YXRlIiwibG9jYWxOYW1lVG9EZWZpbml0aW9uIiwiY29uc3RydWN0aW9uU3RhY2siLCJFcnJvciIsInBvcCIsImZhaWxlZCIsIl9fQ0VfZGVmaW5pdGlvbiIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIm9ic2VydmVkQXR0cmlidXRlcyIsIl9fQ0VfaXNDb25uZWN0ZWRDYWxsYmFja0NhbGxlZCIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJuYW1lc3BhY2UiLCJpbmRleE9mIiwiRG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlciIsImludGVybmFscyIsImRvYyIsIl9pbnRlcm5hbHMiLCJfZG9jdW1lbnQiLCJfb2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiX2hhbmRsZU11dGF0aW9ucyIsImJpbmQiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsIm11dGF0aW9ucyIsImFkZGVkTm9kZXMiLCJqIiwiRGVmZXJyZWQiLCJfdmFsdWUiLCJfcmVzb2x2ZSIsIl9wcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJDdXN0b21FbGVtZW50UmVnaXN0cnkiLCJfZWxlbWVudERlZmluaXRpb25Jc1J1bm5pbmciLCJfd2hlbkRlZmluZWREZWZlcnJlZCIsIl9mbHVzaENhbGxiYWNrIiwiX2ZsdXNoUGVuZGluZyIsIl91bmZsdXNoZWRMb2NhbE5hbWVzIiwiX2RvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIiLCJTeW50YXhFcnJvciIsImFkb3B0ZWRDYWxsYmFjayIsImdldENhbGxiYWNrIiwiY2FsbGJhY2tWYWx1ZSIsInNldERlZmluaXRpb24iLCJfZmx1c2giLCJzaGlmdCIsImRlZmVycmVkIiwicmVqZWN0IiwicHJpb3IiLCJ0b1Byb21pc2UiLCJvdXRlciIsImlubmVyIiwiZmx1c2giLCJkZWZpbmUiLCJ3aGVuRGVmaW5lZCIsInBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2siLCJjcmVhdGVFbGVtZW50TlMiLCJjbG9uZU5vZGUiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsInJlcGxhY2VDaGlsZCIsIkVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZU5TIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJIVE1MRWxlbWVudCIsIkFscmVhZHlDb25zdHJ1Y3RlZE1hcmtlciIsImNvbnN0cnVjdG9yVG9EZWZpbml0aW9uIiwiTmF0aXZlIiwiRG9jdW1lbnRfY3JlYXRlRWxlbWVudCIsImxhc3RJbmRleCIsImJ1aWx0SW4iLCJub2RlcyIsImNvbm5lY3RlZEJlZm9yZSIsImZpbHRlciIsInByZXBlbmQiLCJkaXNjb25uZWN0VHJlZSIsImNvbm5lY3RUcmVlIiwiYXBwZW5kIiwiZGVlcCIsImNsb25lIiwiRG9jdW1lbnRfaW1wb3J0Tm9kZSIsInBhdGNoVHJlZSIsIk5TX0hUTUwiLCJEb2N1bWVudF9jcmVhdGVFbGVtZW50TlMiLCJEb2N1bWVudF9wcmVwZW5kIiwiRG9jdW1lbnRfYXBwZW5kIiwicmVmTm9kZSIsIkRvY3VtZW50RnJhZ21lbnQiLCJpbnNlcnRlZE5vZGVzIiwiY2hpbGROb2RlcyIsIm5hdGl2ZVJlc3VsdCIsIk5vZGVfaW5zZXJ0QmVmb3JlIiwibm9kZVdhc0Nvbm5lY3RlZCIsIk5vZGVfYXBwZW5kQ2hpbGQiLCJOb2RlX2Nsb25lTm9kZSIsIm93bmVyRG9jdW1lbnQiLCJOb2RlX3JlbW92ZUNoaWxkIiwibm9kZVRvSW5zZXJ0Iiwibm9kZVRvUmVtb3ZlIiwiTm9kZV9yZXBsYWNlQ2hpbGQiLCJub2RlVG9JbnNlcnRXYXNDb25uZWN0ZWQiLCJ0aGlzSXNDb25uZWN0ZWQiLCJwYXRjaF90ZXh0Q29udGVudCIsImJhc2VEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImFzc2lnbmVkVmFsdWUiLCJURVhUX05PREUiLCJyZW1vdmVkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwiTm9kZV90ZXh0Q29udGVudCIsImFkZFBhdGNoIiwicGFydHMiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZVRleHROb2RlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJ3YXNDb25uZWN0ZWQiLCJyZXBsYWNlV2l0aCIsInJlbW92ZSIsIkVsZW1lbnRfYXR0YWNoU2hhZG93IiwiaW5pdCIsIndhcm4iLCJwYXRjaF9pbm5lckhUTUwiLCJodG1sU3RyaW5nIiwicmVtb3ZlZEVsZW1lbnRzIiwiRWxlbWVudF9pbm5lckhUTUwiLCJIVE1MRWxlbWVudF9pbm5lckhUTUwiLCJyYXdEaXYiLCJpbm5lckhUTUwiLCJjb250ZW50IiwiRWxlbWVudF9zZXRBdHRyaWJ1dGUiLCJFbGVtZW50X2dldEF0dHJpYnV0ZSIsIkVsZW1lbnRfc2V0QXR0cmlidXRlTlMiLCJFbGVtZW50X2dldEF0dHJpYnV0ZU5TIiwiRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGUiLCJFbGVtZW50X3JlbW92ZUF0dHJpYnV0ZU5TIiwicGF0Y2hfaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiYmFzZU1ldGhvZCIsIndoZXJlIiwiaW5zZXJ0ZWRFbGVtZW50IiwiSFRNTEVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiRWxlbWVudF9pbnNlcnRBZGphY2VudEVsZW1lbnQiLCJFbGVtZW50X3ByZXBlbmQiLCJFbGVtZW50X2FwcGVuZCIsIkVsZW1lbnRfYmVmb3JlIiwiRWxlbWVudF9hZnRlciIsIkVsZW1lbnRfcmVwbGFjZVdpdGgiLCJFbGVtZW50X3JlbW92ZSIsInByaW9yQ3VzdG9tRWxlbWVudHMiLCJXZWFrTWFwIiwiY291bnRlciIsIkRhdGUiLCJub3ciLCJKc011dGF0aW9uT2JzZXJ2ZXIiLCJyZWdpc3RyYXRpb25zVGFibGUiLCJzZXRJbW1lZGlhdGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzZXRUaW1lb3V0Iiwic2V0SW1tZWRpYXRlUXVldWUiLCJzZW50aW5lbCIsInF1ZXVlIiwiZnVuYyIsInBvc3RNZXNzYWdlIiwiaXNTY2hlZHVsZWQiLCJzY2hlZHVsZWRPYnNlcnZlcnMiLCJzY2hlZHVsZUNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJkaXNwYXRjaENhbGxiYWNrcyIsIndyYXBJZk5lZWRlZCIsIlNoYWRvd0RPTVBvbHlmaWxsIiwib2JzZXJ2ZXJzIiwic29ydCIsIm8xIiwibzIiLCJ1aWRfIiwiYW55Tm9uRW1wdHkiLCJ0YWtlUmVjb3JkcyIsImNhbGxiYWNrXyIsInJlbW92ZVRyYW5zaWVudE9ic2VydmVyc0ZvciIsIm5vZGVzXyIsInJlZ2lzdHJhdGlvbnMiLCJyZWdpc3RyYXRpb24iLCJyZW1vdmVUcmFuc2llbnRPYnNlcnZlcnMiLCJmb3JFYWNoQW5jZXN0b3JBbmRPYnNlcnZlckVucXVldWVSZWNvcmQiLCJvcHRpb25zIiwic3VidHJlZSIsInJlY29yZCIsImVucXVldWUiLCJ1aWRDb3VudGVyIiwicmVjb3Jkc18iLCJjaGlsZExpc3QiLCJhdHRyaWJ1dGVzIiwiY2hhcmFjdGVyRGF0YSIsImF0dHJpYnV0ZU9sZFZhbHVlIiwiYXR0cmlidXRlRmlsdGVyIiwiY2hhcmFjdGVyRGF0YU9sZFZhbHVlIiwicmVtb3ZlTGlzdGVuZXJzIiwiUmVnaXN0cmF0aW9uIiwiYWRkTGlzdGVuZXJzIiwic3BsaWNlIiwiY29weU9mUmVjb3JkcyIsIk11dGF0aW9uUmVjb3JkIiwicHJldmlvdXNTaWJsaW5nIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZU5hbWVzcGFjZSIsImNvcHlNdXRhdGlvblJlY29yZCIsIm9yaWdpbmFsIiwiY3VycmVudFJlY29yZCIsInJlY29yZFdpdGhPbGRWYWx1ZSIsImdldFJlY29yZCIsImdldFJlY29yZFdpdGhPbGRWYWx1ZSIsImNsZWFyUmVjb3JkcyIsInJlY29yZFJlcHJlc2VudHNDdXJyZW50TXV0YXRpb24iLCJzZWxlY3RSZWNvcmQiLCJsYXN0UmVjb3JkIiwibmV3UmVjb3JkIiwidHJhbnNpZW50T2JzZXJ2ZWROb2RlcyIsInJlY29yZHMiLCJyZWNvcmRUb1JlcGxhY2VMYXN0IiwiYWRkTGlzdGVuZXJzXyIsInJlbW92ZUxpc3RlbmVyc18iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYXR0ck5hbWUiLCJyZWxhdGVkTm9kZSIsIm5hbWVzcGFjZVVSSSIsImF0dHJDaGFuZ2UiLCJNdXRhdGlvbkV2ZW50IiwiQURESVRJT04iLCJwcmV2VmFsdWUiLCJhZGRUcmFuc2llbnRPYnNlcnZlciIsImNoYW5nZWROb2RlIiwiX2lzUG9seWZpbGxlZCIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyIsImFyZ3MiLCJwYXJ0aWFsbHlBcHBsaWVkIiwiaGFuZGxlciIsInJ1bklmUHJlc2VudCIsImhhbmRsZSIsInRhc2siLCJjbGVhckltbWVkaWF0ZSIsImluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uIiwibmV4dFRpY2siLCJjYW5Vc2VQb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzIiwib2xkT25NZXNzYWdlIiwib25tZXNzYWdlIiwiaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24iLCJtZXNzYWdlUHJlZml4Iiwib25HbG9iYWxNZXNzYWdlIiwiZXZlbnQiLCJhdHRhY2hFdmVudCIsImluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uIiwiY2hhbm5lbCIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJwb3J0MiIsImluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24iLCJodG1sIiwic2NyaXB0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbiIsImF0dGFjaFRvIiwicHJvY2VzcyIsIkZhc3RDbGljayIsImxheWVyIiwib2xkT25DbGljayIsInRyYWNraW5nQ2xpY2siLCJ0cmFja2luZ0NsaWNrU3RhcnQiLCJ0YXJnZXRFbGVtZW50IiwidG91Y2hTdGFydFgiLCJ0b3VjaFN0YXJ0WSIsImxhc3RUb3VjaElkZW50aWZpZXIiLCJ0b3VjaEJvdW5kYXJ5IiwidGFwRGVsYXkiLCJ0YXBUaW1lb3V0Iiwibm90TmVlZGVkIiwibWV0aG9kIiwiY29udGV4dCIsImRldmljZUlzQW5kcm9pZCIsIm9uTW91c2UiLCJvbkNsaWNrIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoRW5kIiwib25Ub3VjaENhbmNlbCIsIkV2ZW50IiwiY2FwdHVyZSIsInJtdiIsImhpamFja2VkIiwiYWR2IiwicHJvcGFnYXRpb25TdG9wcGVkIiwib25jbGljayIsImRldmljZUlzV2luZG93c1Bob25lIiwiZGV2aWNlSXNJT1MiLCJkZXZpY2VJc0lPUzQiLCJkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQiLCJkZXZpY2VJc0JsYWNrQmVycnkxMCIsIm5lZWRzQ2xpY2siLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiZGlzYWJsZWQiLCJjbGFzc05hbWUiLCJuZWVkc0ZvY3VzIiwicmVhZE9ubHkiLCJzZW5kQ2xpY2siLCJjbGlja0V2ZW50IiwidG91Y2giLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsImNoYW5nZWRUb3VjaGVzIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRldGVybWluZUV2ZW50VHlwZSIsInNjcmVlblgiLCJzY3JlZW5ZIiwiY2xpZW50WCIsImNsaWVudFkiLCJmb3J3YXJkZWRUb3VjaEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInRhZ05hbWUiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwidXBkYXRlU2Nyb2xsUGFyZW50Iiwic2Nyb2xsUGFyZW50IiwicGFyZW50RWxlbWVudCIsImZhc3RDbGlja1Njcm9sbFBhcmVudCIsImNvbnRhaW5zIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZmFzdENsaWNrTGFzdFNjcm9sbFRvcCIsInNjcm9sbFRvcCIsImdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQiLCJldmVudFRhcmdldCIsInNlbGVjdGlvbiIsInRhcmdldFRvdWNoZXMiLCJpc0NvbnRlbnRFZGl0YWJsZSIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJpc0NvbGxhcHNlZCIsImlkZW50aWZpZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRpbWVTdGFtcCIsInBhZ2VYIiwicGFnZVkiLCJsYXN0Q2xpY2tUaW1lIiwidG91Y2hIYXNNb3ZlZCIsImJvdW5kYXJ5IiwiYWJzIiwiZmluZENvbnRyb2wiLCJsYWJlbEVsZW1lbnQiLCJjb250cm9sIiwiaHRtbEZvciIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvciIsImZvckVsZW1lbnQiLCJ0YXJnZXRUYWdOYW1lIiwiY2FuY2VsTmV4dENsaWNrIiwiZWxlbWVudEZyb21Qb2ludCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJ0b3AiLCJjYW5jZWxhYmxlIiwic3RvcFByb3BhZ2F0aW9uIiwicGVybWl0dGVkIiwiZGV0YWlsIiwiZGVzdHJveSIsIm1ldGFWaWV3cG9ydCIsImNocm9tZVZlcnNpb24iLCJibGFja2JlcnJ5VmVyc2lvbiIsImZpcmVmb3hWZXJzaW9uIiwib250b3VjaHN0YXJ0Iiwic2Nyb2xsV2lkdGgiLCJvdXRlcldpZHRoIiwibWF0Y2giLCJtc1RvdWNoQWN0aW9uIiwidG91Y2hBY3Rpb24iLCJhdHRhY2giLCJERUZBVUxUX1ZJRVdQT1JUIiwiVmlld3BvcnQiLCJ2aWV3cG9ydEVsZW1lbnQiLCJoZWFkIiwiZW5zdXJlVmlld3BvcnRFbGVtZW50IiwiaGFzQXR0cmlidXRlIiwic2V0dXAiLCJvbnMiLCJfdXRpbCIsImZhc3RDbGljayIsImJvZHkiLCJzdXBwb3J0VG91Y2hBY3Rpb24iLCJwbGF0Zm9ybSIsIl9ydW5PbkFjdHVhbFBsYXRmb3JtIiwiaXNBbmRyb2lkIiwiaXNJT1MiLCJpc0lPU1NhZmFyaSIsImlzV0tXZWJWaWV3IiwicmVhZHkiLCJlbmFibGVEZXZpY2VCYWNrQnV0dG9uSGFuZGxlciIsIl9kZWZhdWx0RGV2aWNlQmFja0J1dHRvbkhhbmRsZXIiLCJfaW50ZXJuYWwiLCJkYmJEaXNwYXRjaGVyIiwiY3JlYXRlSGFuZGxlciIsImFwcCIsImV4aXRBcHAiLCJfZ2VzdHVyZURldGVjdG9yIiwiR2VzdHVyZURldGVjdG9yIiwiaXNXZWJWaWV3Iiwia2V5Q29kZSIsImZpcmVEZXZpY2VCYWNrQnV0dG9uRXZlbnQiLCJfc2V0dXBMb2FkaW5nUGxhY2VIb2xkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLElBQUlBLE9BQU9DLGNBQVgsRUFBMkI7O1dBQ2hCQSxjQUFQLENBQXNCQyxhQUF0QixHQUFzQyxJQUF0Qzs7Ozs7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
