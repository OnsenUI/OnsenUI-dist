/* onsenui v2.8.1 - 2017-11-15 */

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





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

'use strict';
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

'use strict';

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

'use strict';

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

'use strict';
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

'use strict';

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

'use strict';

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

var _validateCollection = function _validateCollection(it, TYPE) {
  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

'use strict';
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

'use strict';

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

'use strict';

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

'use strict';
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

'use strict';
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

'use strict';

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
    "use strict";

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
	'use strict';

	/**
  * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
  *
  * @codingstandard ftlabs-jsv2
  * @copyright The Financial Times Limited [All Rights Reserved]
  * @license MIT License (see LICENSE.txt)
  */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/

	/**
  * Instantiate fast-clicking listeners on the specified layer.
  *
  * @constructor
  * @param {Element} layer The layer to listen on
  * @param {Object} [options={}] The options to override the defaults
  */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvc3JjL3BvbHlmaWxscy9wb2x5ZmlsbC1zd2l0Y2hlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc2V0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktZnJvbS1pdGVyYWJsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LWNvbGxlY3Rpb24tb2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQub2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1mcm9tLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc2V0LmZyb20uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hcC5vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hcC5mcm9tLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvVXRpbGl0aWVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvQ3VzdG9tRWxlbWVudFN0YXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL0RvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9EZWZlcnJlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL0N1c3RvbUVsZW1lbnRSZWdpc3RyeS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL1BhdGNoL05hdGl2ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL0FscmVhZHlDb25zdHJ1Y3RlZE1hcmtlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL1BhdGNoL0hUTUxFbGVtZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvUGF0Y2gvSW50ZXJmYWNlL1BhcmVudE5vZGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9QYXRjaC9Eb2N1bWVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL1BhdGNoL05vZGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG9uc2VudWkvY3VzdG9tLWVsZW1lbnRzL3NyYy9QYXRjaC9JbnRlcmZhY2UvQ2hpbGROb2RlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BvbnNlbnVpL2N1c3RvbS1lbGVtZW50cy9zcmMvUGF0Y2gvRWxlbWVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ab25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL2N1c3RvbS1lbGVtZW50cy5qcyIsIi4uLy4uL2NvcmUvc3JjL3BvbHlmaWxscy9NdXRhdGlvbk9ic2VydmVyQDAuNy4yMi9NdXRhdGlvbk9ic2VydmVyLmpzIiwiLi4vLi4vY29yZS9zcmMvcG9seWZpbGxzL3NldEltbWVkaWF0ZUAxLjAuMittb2Qvc2V0SW1tZWRpYXRlLmpzIiwiLi4vLi4vY29yZS9zcmMvcG9seWZpbGxzL2luZGV4LmpzIiwiLi4vLi4vY29yZS9zcmMvdmVuZG9yL0Zhc3RDbGlja0AxLjAuNittb2QvZmFzdGNsaWNrLmpzIiwiLi4vLi4vY29yZS9zcmMvdmVuZG9yL3ZpZXdwb3J0LmpzIiwiLi4vLi4vY29yZS9zcmMvdmVuZG9yL2luZGV4LmpzIiwiLi4vLi4vY29yZS9zcmMvc2V0dXAuanMiLCIuLi8uLi9jb3JlL3NyYy9pbmRleC5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9yIEBvbnNlbnVpL2N1c3RvbS1lbGVtZW50c1xuaWYgKHdpbmRvdy5jdXN0b21FbGVtZW50cykgeyAvLyBldmVuIGlmIG5hdGl2ZSBDRTEgaW1wbCBleGlzdHMsIHVzZSBwb2x5ZmlsbFxuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5mb3JjZVBvbHlmaWxsID0gdHJ1ZTtcbn1cbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVFlQRSkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJGl0ZXJEZXRlY3QgPSByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspIHtcbiAgdmFyIEJhc2UgPSBnbG9iYWxbTkFNRV07XG4gIHZhciBDID0gQmFzZTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZTtcbiAgdmFyIE8gPSB7fTtcbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgICB2YXIgZm4gPSBwcm90b1tLRVldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBLRVksXG4gICAgICBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKGEpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpOyByZXR1cm4gdGhpczsgfVxuICAgICAgICA6IGZ1bmN0aW9uIHNldChhLCBiKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTsgcmV0dXJuIHRoaXM7IH1cbiAgICApO1xuICB9O1xuICBpZiAodHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKSB7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgIHZhciBIQVNOVF9DSEFJTklORyA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2U7XG4gICAgLy8gVjggfiAgQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgdmFyIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBpbnN0YW5jZS5oYXMoMSk7IH0pO1xuICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICB2YXIgQUNDRVBUX0lURVJBQkxFUyA9ICRpdGVyRGV0ZWN0KGZ1bmN0aW9uIChpdGVyKSB7IG5ldyBDKGl0ZXIpOyB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICB2YXIgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgICB2YXIgaW5kZXggPSA1O1xuICAgICAgd2hpbGUgKGluZGV4LS0pICRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcbiAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG4gICAgfSk7XG4gICAgaWYgKCFBQ0NFUFRfSVRFUkFCTEVTKSB7XG4gICAgICBDID0gd3JhcHBlcihmdW5jdGlvbiAodGFyZ2V0LCBpdGVyYWJsZSkge1xuICAgICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSk7XG4gICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UoKSwgdGFyZ2V0LCBDKTtcbiAgICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQztcbiAgICB9XG4gICAgaWYgKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pIHtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuICAgIGlmIChCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKSBmaXhNZXRob2QoQURERVIpO1xuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYgKElTX1dFQUsgJiYgcHJvdG8uY2xlYXIpIGRlbGV0ZSBwcm90by5jbGVhcjtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcblxuICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTRVQgPSAnU2V0JztcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoU0VULCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBTRVQpLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7XG4iLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlciwgSVRFUkFUT1IpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgaWYgKGNsYXNzb2YodGhpcykgIT0gTkFNRSkgdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1NldCcsIHsgdG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnU2V0JykgfSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT0xMRUNUSU9OKSB7XG4gICRleHBvcnQoJGV4cG9ydC5TLCBDT0xMRUNUSU9OLCB7IG9mOiBmdW5jdGlvbiBvZigpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgQSA9IEFycmF5KGxlbmd0aCk7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSBBW2xlbmd0aF0gPSBhcmd1bWVudHNbbGVuZ3RoXTtcbiAgICByZXR1cm4gbmV3IHRoaXMoQSk7XG4gIH0gfSk7XG59O1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtc2V0Lm9mXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1vZicpKCdTZXQnKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS9cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTExFQ1RJT04pIHtcbiAgJGV4cG9ydCgkZXhwb3J0LlMsIENPTExFQ1RJT04sIHsgZnJvbTogZnVuY3Rpb24gZnJvbShzb3VyY2UgLyogLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgbWFwcGluZywgQSwgbiwgY2I7XG4gICAgYUZ1bmN0aW9uKHRoaXMpO1xuICAgIG1hcHBpbmcgPSBtYXBGbiAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChtYXBwaW5nKSBhRnVuY3Rpb24obWFwRm4pO1xuICAgIGlmIChzb3VyY2UgPT0gdW5kZWZpbmVkKSByZXR1cm4gbmV3IHRoaXMoKTtcbiAgICBBID0gW107XG4gICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgIG4gPSAwO1xuICAgICAgY2IgPSBjdHgobWFwRm4sIGFyZ3VtZW50c1syXSwgMik7XG4gICAgICBmb3JPZihzb3VyY2UsIGZhbHNlLCBmdW5jdGlvbiAobmV4dEl0ZW0pIHtcbiAgICAgICAgQS5wdXNoKGNiKG5leHRJdGVtLCBuKyspKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JPZihzb3VyY2UsIGZhbHNlLCBBLnB1c2gsIEEpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHRoaXMoQSk7XG4gIH0gfSk7XG59O1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtc2V0LmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnU2V0Jyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBNQVAgPSAnTWFwJztcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoTUFQLCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7IHRvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpIH0pO1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLm9mXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1vZicpKCdNYXAnKTtcbiIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ01hcCcpO1xuIiwiY29uc3QgcmVzZXJ2ZWRUYWdMaXN0ID0gbmV3IFNldChbXG4gICdhbm5vdGF0aW9uLXhtbCcsXG4gICdjb2xvci1wcm9maWxlJyxcbiAgJ2ZvbnQtZmFjZScsXG4gICdmb250LWZhY2Utc3JjJyxcbiAgJ2ZvbnQtZmFjZS11cmknLFxuICAnZm9udC1mYWNlLWZvcm1hdCcsXG4gICdmb250LWZhY2UtbmFtZScsXG4gICdtaXNzaW5nLWdseXBoJyxcbl0pO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEN1c3RvbUVsZW1lbnROYW1lKGxvY2FsTmFtZSkge1xuICBjb25zdCByZXNlcnZlZCA9IHJlc2VydmVkVGFnTGlzdC5oYXMobG9jYWxOYW1lKTtcbiAgY29uc3QgdmFsaWRGb3JtID0gL15bYS16XVsuMC05X2Etel0qLVtcXC0uMC05X2Etel0qJC8udGVzdChsb2NhbE5hbWUpO1xuICByZXR1cm4gIXJlc2VydmVkICYmIHZhbGlkRm9ybTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ29ubmVjdGVkKG5vZGUpIHtcbiAgLy8gVXNlIGBOb2RlI2lzQ29ubmVjdGVkYCwgaWYgZGVmaW5lZC5cbiAgY29uc3QgbmF0aXZlVmFsdWUgPSBub2RlLmlzQ29ubmVjdGVkO1xuICBpZiAobmF0aXZlVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBuYXRpdmVWYWx1ZTtcbiAgfVxuXG4gIC8qKiBAdHlwZSB7P05vZGV8dW5kZWZpbmVkfSAqL1xuICBsZXQgY3VycmVudCA9IG5vZGU7XG4gIHdoaWxlIChjdXJyZW50ICYmICEoY3VycmVudC5fX0NFX2lzSW1wb3J0RG9jdW1lbnQgfHwgY3VycmVudCBpbnN0YW5jZW9mIERvY3VtZW50KSkge1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgfHwgKHdpbmRvdy5TaGFkb3dSb290ICYmIGN1cnJlbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gY3VycmVudC5ob3N0IDogdW5kZWZpbmVkKTtcbiAgfVxuICByZXR1cm4gISEoY3VycmVudCAmJiAoY3VycmVudC5fX0NFX2lzSW1wb3J0RG9jdW1lbnQgfHwgY3VycmVudCBpbnN0YW5jZW9mIERvY3VtZW50KSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHshTm9kZX0gcm9vdFxuICogQHBhcmFtIHshTm9kZX0gc3RhcnRcbiAqIEByZXR1cm4gez9Ob2RlfVxuICovXG5mdW5jdGlvbiBuZXh0U2libGluZ09yQW5jZXN0b3JTaWJsaW5nKHJvb3QsIHN0YXJ0KSB7XG4gIGxldCBub2RlID0gc3RhcnQ7XG4gIHdoaWxlIChub2RlICYmIG5vZGUgIT09IHJvb3QgJiYgIW5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiAoIW5vZGUgfHwgbm9kZSA9PT0gcm9vdCkgPyBudWxsIDogbm9kZS5uZXh0U2libGluZztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFOb2RlfSByb290XG4gKiBAcGFyYW0geyFOb2RlfSBzdGFydFxuICogQHJldHVybiB7P05vZGV9XG4gKi9cbmZ1bmN0aW9uIG5leHROb2RlKHJvb3QsIHN0YXJ0KSB7XG4gIHJldHVybiBzdGFydC5maXJzdENoaWxkID8gc3RhcnQuZmlyc3RDaGlsZCA6IG5leHRTaWJsaW5nT3JBbmNlc3RvclNpYmxpbmcocm9vdCwgc3RhcnQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU5vZGV9IHJvb3RcbiAqIEBwYXJhbSB7IWZ1bmN0aW9uKCFFbGVtZW50KX0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7IVNldDxOb2RlPj19IHZpc2l0ZWRJbXBvcnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhyb290LCBjYWxsYmFjaywgdmlzaXRlZEltcG9ydHMgPSBuZXcgU2V0KCkpIHtcbiAgbGV0IG5vZGUgPSByb290O1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovKG5vZGUpO1xuXG4gICAgICBjYWxsYmFjayhlbGVtZW50KTtcblxuICAgICAgY29uc3QgbG9jYWxOYW1lID0gZWxlbWVudC5sb2NhbE5hbWU7XG4gICAgICBpZiAobG9jYWxOYW1lID09PSAnbGluaycgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JlbCcpID09PSAnaW1wb3J0Jykge1xuICAgICAgICAvLyBJZiB0aGlzIGltcG9ydCAocG9seWZpbGxlZCBvciBub3QpIGhhcyBpdCdzIHJvb3Qgbm9kZSBhdmFpbGFibGUsXG4gICAgICAgIC8vIHdhbGsgaXQuXG4gICAgICAgIGNvbnN0IGltcG9ydE5vZGUgPSAvKiogQHR5cGUgeyFOb2RlfSAqLyAoZWxlbWVudC5pbXBvcnQpO1xuICAgICAgICBpZiAoaW1wb3J0Tm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgIXZpc2l0ZWRJbXBvcnRzLmhhcyhpbXBvcnROb2RlKSkge1xuICAgICAgICAgIC8vIFByZXZlbnQgbXVsdGlwbGUgd2Fsa3Mgb2YgdGhlIHNhbWUgaW1wb3J0IHJvb3QuXG4gICAgICAgICAgdmlzaXRlZEltcG9ydHMuYWRkKGltcG9ydE5vZGUpO1xuXG4gICAgICAgICAgZm9yIChsZXQgY2hpbGQgPSBpbXBvcnROb2RlLmZpcnN0Q2hpbGQ7IGNoaWxkOyBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICB3YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhjaGlsZCwgY2FsbGJhY2ssIHZpc2l0ZWRJbXBvcnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZ25vcmUgZGVzY2VuZGFudHMgb2YgaW1wb3J0IGxpbmtzIHRvIHByZXZlbnQgYXR0ZW1wdGluZyB0byB3YWxrIHRoZVxuICAgICAgICAvLyBlbGVtZW50cyBjcmVhdGVkIGJ5IHRoZSBIVE1MIEltcG9ydHMgcG9seWZpbGwgdGhhdCB3ZSBqdXN0IHdhbGtlZFxuICAgICAgICAvLyBhYm92ZS5cbiAgICAgICAgbm9kZSA9IG5leHRTaWJsaW5nT3JBbmNlc3RvclNpYmxpbmcocm9vdCwgZWxlbWVudCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChsb2NhbE5hbWUgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgLy8gSWdub3JlIGRlc2NlbmRhbnRzIG9mIHRlbXBsYXRlcy4gVGhlcmUgc2hvdWxkbid0IGJlIGFueSBkZXNjZW5kYW50c1xuICAgICAgICAvLyBiZWNhdXNlIHRoZXkgd2lsbCBiZSBtb3ZlZCBpbnRvIGAuY29udGVudGAgZHVyaW5nIGNvbnN0cnVjdGlvbiBpblxuICAgICAgICAvLyBicm93c2VycyB0aGF0IHN1cHBvcnQgdGVtcGxhdGUgYnV0LCBpbiBjYXNlIHRoZXkgZXhpc3QgYW5kIGFyZSBzdGlsbFxuICAgICAgICAvLyB3YWl0aW5nIHRvIGJlIG1vdmVkIGJ5IGEgcG9seWZpbGwsIHRoZXkgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAgICBub2RlID0gbmV4dFNpYmxpbmdPckFuY2VzdG9yU2libGluZyhyb290LCBlbGVtZW50KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFdhbGsgc2hhZG93IHJvb3RzLlxuICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuX19DRV9zaGFkb3dSb290O1xuICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgPSBzaGFkb3dSb290LmZpcnN0Q2hpbGQ7IGNoaWxkOyBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgd2Fsa0RlZXBEZXNjZW5kYW50RWxlbWVudHMoY2hpbGQsIGNhbGxiYWNrLCB2aXNpdGVkSW1wb3J0cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlID0gbmV4dE5vZGUocm9vdCwgbm9kZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBVc2VkIHRvIHN1cHByZXNzIENsb3N1cmUncyBcIk1vZGlmeWluZyB0aGUgcHJvdG90eXBlIGlzIG9ubHkgYWxsb3dlZCBpZiB0aGVcbiAqIGNvbnN0cnVjdG9yIGlzIGluIHRoZSBzYW1lIHNjb3BlXCIgd2FybmluZyB3aXRob3V0IHVzaW5nXG4gKiBgQHN1cHByZXNzIHtuZXdDaGVja1R5cGVzLCBkdXBsaWNhdGV9YCBiZWNhdXNlIGBuZXdDaGVja1R5cGVzYCBpcyB0b28gYnJvYWQuXG4gKlxuICogQHBhcmFtIHshT2JqZWN0fSBkZXN0aW5hdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByb3BlcnR5VW5jaGVja2VkKGRlc3RpbmF0aW9uLCBuYW1lLCB2YWx1ZSkge1xuICBkZXN0aW5hdGlvbltuYW1lXSA9IHZhbHVlO1xufVxuIiwiLyoqXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5jb25zdCBDdXN0b21FbGVtZW50U3RhdGUgPSB7XG4gIGN1c3RvbTogMSxcbiAgZmFpbGVkOiAyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRWxlbWVudFN0YXRlO1xuIiwiaW1wb3J0ICogYXMgVXRpbGl0aWVzIGZyb20gJy4vVXRpbGl0aWVzLmpzJztcbmltcG9ydCBDRVN0YXRlIGZyb20gJy4vQ3VzdG9tRWxlbWVudFN0YXRlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRWxlbWVudEludGVybmFscyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7IU1hcDxzdHJpbmcsICFDdXN0b21FbGVtZW50RGVmaW5pdGlvbj59ICovXG4gICAgdGhpcy5fbG9jYWxOYW1lVG9EZWZpbml0aW9uID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqIEB0eXBlIHshTWFwPCFGdW5jdGlvbiwgIUN1c3RvbUVsZW1lbnREZWZpbml0aW9uPn0gKi9cbiAgICB0aGlzLl9jb25zdHJ1Y3RvclRvRGVmaW5pdGlvbiA9IG5ldyBNYXAoKTtcblxuICAgIC8qKiBAdHlwZSB7IUFycmF5PCFmdW5jdGlvbighTm9kZSk+fSAqL1xuICAgIHRoaXMuX3BhdGNoZXMgPSBbXTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLl9oYXNQYXRjaGVzID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZVxuICAgKiBAcGFyYW0geyFDdXN0b21FbGVtZW50RGVmaW5pdGlvbn0gZGVmaW5pdGlvblxuICAgKi9cbiAgc2V0RGVmaW5pdGlvbihsb2NhbE5hbWUsIGRlZmluaXRpb24pIHtcbiAgICB0aGlzLl9sb2NhbE5hbWVUb0RlZmluaXRpb24uc2V0KGxvY2FsTmFtZSwgZGVmaW5pdGlvbik7XG4gICAgdGhpcy5fY29uc3RydWN0b3JUb0RlZmluaXRpb24uc2V0KGRlZmluaXRpb24uY29uc3RydWN0b3IsIGRlZmluaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWVcbiAgICogQHJldHVybiB7IUN1c3RvbUVsZW1lbnREZWZpbml0aW9ufHVuZGVmaW5lZH1cbiAgICovXG4gIGxvY2FsTmFtZVRvRGVmaW5pdGlvbihsb2NhbE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxOYW1lVG9EZWZpbml0aW9uLmdldChsb2NhbE5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBjb25zdHJ1Y3RvclxuICAgKiBAcmV0dXJuIHshQ3VzdG9tRWxlbWVudERlZmluaXRpb258dW5kZWZpbmVkfVxuICAgKi9cbiAgY29uc3RydWN0b3JUb0RlZmluaXRpb24oY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uc3RydWN0b3JUb0RlZmluaXRpb24uZ2V0KGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFmdW5jdGlvbighTm9kZSl9IGxpc3RlbmVyXG4gICAqL1xuICBhZGRQYXRjaChsaXN0ZW5lcikge1xuICAgIHRoaXMuX2hhc1BhdGNoZXMgPSB0cnVlO1xuICAgIHRoaXMuX3BhdGNoZXMucHVzaChsaXN0ZW5lcik7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKi9cbiAgcGF0Y2hUcmVlKG5vZGUpIHtcbiAgICBpZiAoIXRoaXMuX2hhc1BhdGNoZXMpIHJldHVybjtcblxuICAgIFV0aWxpdGllcy53YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhub2RlLCBlbGVtZW50ID0+IHRoaXMucGF0Y2goZWxlbWVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICovXG4gIHBhdGNoKG5vZGUpIHtcbiAgICBpZiAoIXRoaXMuX2hhc1BhdGNoZXMpIHJldHVybjtcblxuICAgIGlmIChub2RlLl9fQ0VfcGF0Y2hlZCkgcmV0dXJuO1xuICAgIG5vZGUuX19DRV9wYXRjaGVkID0gdHJ1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fcGF0Y2hlc1tpXShub2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTm9kZX0gcm9vdFxuICAgKi9cbiAgY29ubmVjdFRyZWUocm9vdCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgICBVdGlsaXRpZXMud2Fsa0RlZXBEZXNjZW5kYW50RWxlbWVudHMocm9vdCwgZWxlbWVudCA9PiBlbGVtZW50cy5wdXNoKGVsZW1lbnQpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIGlmIChlbGVtZW50Ll9fQ0Vfc3RhdGUgPT09IENFU3RhdGUuY3VzdG9tKSB7XG4gICAgICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQoZWxlbWVudCkpIHtcbiAgICAgICAgICB0aGlzLmNvbm5lY3RlZENhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZ3JhZGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFOb2RlfSByb290XG4gICAqL1xuICBkaXNjb25uZWN0VHJlZShyb290KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICAgIFV0aWxpdGllcy53YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyhyb290LCBlbGVtZW50ID0+IGVsZW1lbnRzLnB1c2goZWxlbWVudCkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaWYgKGVsZW1lbnQuX19DRV9zdGF0ZSA9PT0gQ0VTdGF0ZS5jdXN0b20pIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ZWRDYWxsYmFjayhlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZXMgYWxsIHVuY3VzdG9taXplZCBjdXN0b20gZWxlbWVudHMgYXQgYW5kIGJlbG93IGEgcm9vdCBub2RlIGZvclxuICAgKiB3aGljaCB0aGVyZSBpcyBhIGRlZmluaXRpb24uIFdoZW4gY3VzdG9tIGVsZW1lbnQgcmVhY3Rpb24gY2FsbGJhY2tzIGFyZVxuICAgKiBhc3N1bWVkIHRvIGJlIGNhbGxlZCBzeW5jaHJvbm91c2x5ICh3aGljaCwgYnkgdGhlIGN1cnJlbnQgRE9NIC8gSFRNTCBzcGVjXG4gICAqIGRlZmluaXRpb25zLCB0aGV5IGFyZSAqbm90KiksIGNhbGxiYWNrcyBmb3IgYm90aCBlbGVtZW50cyBjdXN0b21pemVkXG4gICAqIHN5bmNocm9ub3VzbHkgYnkgdGhlIHBhcnNlciBhbmQgZWxlbWVudHMgYmVpbmcgdXBncmFkZWQgb2NjdXIgaW4gdGhlIHNhbWVcbiAgICogcmVsYXRpdmUgb3JkZXIuXG4gICAqXG4gICAqIE5PVEU6IFRoaXMgZnVuY3Rpb24sIHdoZW4gdXNlZCB0byBzaW11bGF0ZSB0aGUgY29uc3RydWN0aW9uIG9mIGEgdHJlZSB0aGF0XG4gICAqIGlzIGFscmVhZHkgY3JlYXRlZCBidXQgbm90IGN1c3RvbWl6ZWQgKGkuZS4gYnkgdGhlIHBhcnNlciksIGRvZXMgKm5vdCpcbiAgICogcHJldmVudCB0aGUgZWxlbWVudCBmcm9tIHJlYWRpbmcgdGhlICdmaW5hbCcgKHRydWUpIHN0YXRlIG9mIHRoZSB0cmVlLiBGb3JcbiAgICogZXhhbXBsZSwgdGhlIGVsZW1lbnQsIGR1cmluZyB0cnVseSBzeW5jaHJvbm91cyBwYXJzaW5nIC8gY29uc3RydWN0aW9uIHdvdWxkXG4gICAqIHNlZSB0aGF0IGl0IGNvbnRhaW5zIG5vIGNoaWxkcmVuIGFzIHRoZXkgaGF2ZSBub3QgeWV0IGJlZW4gaW5zZXJ0ZWQuXG4gICAqIEhvd2V2ZXIsIHRoaXMgZnVuY3Rpb24gZG9lcyBub3QgbW9kaWZ5IHRoZSB0cmVlLCB0aGUgZWxlbWVudCB3aWxsXG4gICAqIChpbmNvcnJlY3RseSkgaGF2ZSBjaGlsZHJlbi4gQWRkaXRpb25hbGx5LCBzZWxmLW1vZGlmaWNhdGlvbiByZXN0cmljdGlvbnNcbiAgICogZm9yIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9ycyBpbXBvc2VkIGJ5IHRoZSBET00gc3BlYyBhcmUgKm5vdCogZW5mb3JjZWQuXG4gICAqXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgbmVzdGVkIGxpc3Qgc2hvd3MgdGhlIHN0ZXBzIGV4dGVuZGluZyBkb3duIGZyb20gdGhlIEhUTUxcbiAgICogc3BlYydzIHBhcnNpbmcgc2VjdGlvbiB0aGF0IGNhdXNlIGVsZW1lbnRzIHRvIGJlIHN5bmNocm9ub3VzbHkgY3JlYXRlZCBhbmRcbiAgICogdXBncmFkZWQ6XG4gICAqXG4gICAqIFRoZSBcImluIGJvZHlcIiBpbnNlcnRpb24gbW9kZTpcbiAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjcGFyc2luZy1tYWluLWluYm9keVxuICAgKiAtIFN3aXRjaCBvbiB0b2tlbjpcbiAgICogICAuLiBvdGhlciBjYXNlcyAuLlxuICAgKiAgIC0+IEFueSBvdGhlciBzdGFydCB0YWdcbiAgICogICAgICAtIFtJbnNlcnQgYW4gSFRNTCBlbGVtZW50XShiZWxvdykgZm9yIHRoZSB0b2tlbi5cbiAgICpcbiAgICogSW5zZXJ0IGFuIEhUTUwgZWxlbWVudDpcbiAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjaW5zZXJ0LWFuLWh0bWwtZWxlbWVudFxuICAgKiAtIEluc2VydCBhIGZvcmVpZ24gZWxlbWVudCBmb3IgdGhlIHRva2VuIGluIHRoZSBIVE1MIG5hbWVzcGFjZTpcbiAgICogICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNpbnNlcnQtYS1mb3JlaWduLWVsZW1lbnRcbiAgICogICAtIENyZWF0ZSBhbiBlbGVtZW50IGZvciBhIHRva2VuOlxuICAgKiAgICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjY3JlYXRlLWFuLWVsZW1lbnQtZm9yLXRoZS10b2tlblxuICAgKiAgICAgLSBXaWxsIGV4ZWN1dGUgc2NyaXB0IGZsYWcgaXMgdHJ1ZT9cbiAgICogICAgICAgLSAoRWxlbWVudCBxdWV1ZSBwdXNoZWQgdG8gdGhlIGN1c3RvbSBlbGVtZW50IHJlYWN0aW9ucyBzdGFjay4pXG4gICAqICAgICAtIENyZWF0ZSBhbiBlbGVtZW50OlxuICAgKiAgICAgICBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtY3JlYXRlLWVsZW1lbnRcbiAgICogICAgICAgLSBTeW5jIENFIGZsYWcgaXMgdHJ1ZT9cbiAgICogICAgICAgICAtIENvbnN0cnVjdG9yIGNhbGxlZC5cbiAgICogICAgICAgICAtIFNlbGYtbW9kaWZpY2F0aW9uIHJlc3RyaWN0aW9ucyBlbmZvcmNlZC5cbiAgICogICAgICAgLSBTeW5jIENFIGZsYWcgaXMgZmFsc2U/XG4gICAqICAgICAgICAgLSAoVXBncmFkZSByZWFjdGlvbiBlbnF1ZXVlZC4pXG4gICAqICAgICAtIEF0dHJpYnV0ZXMgYXBwZW5kZWQgdG8gZWxlbWVudC5cbiAgICogICAgICAgKGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIHJlYWN0aW9ucyBlbnF1ZXVlZC4pXG4gICAqICAgICAtIFdpbGwgZXhlY3V0ZSBzY3JpcHQgZmxhZyBpcyB0cnVlP1xuICAgKiAgICAgICAtIChFbGVtZW50IHF1ZXVlIHBvcHBlZCBmcm9tIHRoZSBjdXN0b20gZWxlbWVudCByZWFjdGlvbnMgc3RhY2suXG4gICAqICAgICAgICAgUmVhY3Rpb25zIGluIHRoZSBwb3BwZWQgc3RhY2sgYXJlIGludm9rZWQuKVxuICAgKiAgIC0gKEVsZW1lbnQgcXVldWUgcHVzaGVkIHRvIHRoZSBjdXN0b20gZWxlbWVudCByZWFjdGlvbnMgc3RhY2suKVxuICAgKiAgIC0gSW5zZXJ0IHRoZSBlbGVtZW50OlxuICAgKiAgICAgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtaW5zZXJ0XG4gICAqICAgICAtIFNoYWRvdy1pbmNsdWRpbmcgZGVzY2VuZGFudHMgYXJlIGNvbm5lY3RlZC4gRHVyaW5nIHBhcnNpbmdcbiAgICogICAgICAgY29uc3RydWN0aW9uLCB0aGVyZSBhcmUgbm8gc2hhZG93LSpleGNsdWRpbmcqIGRlc2NlbmRhbnRzLlxuICAgKiAgICAgICBIb3dldmVyLCB0aGUgY29uc3RydWN0b3IgbWF5IGhhdmUgdmFsaWRseSBhdHRhY2hlZCBhIHNoYWRvd1xuICAgKiAgICAgICB0cmVlIHRvIGl0c2VsZiBhbmQgYWRkZWQgZGVzY2VuZGFudHMgdG8gdGhhdCBzaGFkb3cgdHJlZS5cbiAgICogICAgICAgKGBjb25uZWN0ZWRDYWxsYmFja2AgcmVhY3Rpb25zIGVucXVldWVkLilcbiAgICogICAtIChFbGVtZW50IHF1ZXVlIHBvcHBlZCBmcm9tIHRoZSBjdXN0b20gZWxlbWVudCByZWFjdGlvbnMgc3RhY2suXG4gICAqICAgICBSZWFjdGlvbnMgaW4gdGhlIHBvcHBlZCBzdGFjayBhcmUgaW52b2tlZC4pXG4gICAqXG4gICAqIEBwYXJhbSB7IU5vZGV9IHJvb3RcbiAgICogQHBhcmFtIHshU2V0PE5vZGU+PX0gdmlzaXRlZEltcG9ydHNcbiAgICovXG4gIHBhdGNoQW5kVXBncmFkZVRyZWUocm9vdCwgdmlzaXRlZEltcG9ydHMgPSBuZXcgU2V0KCkpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gICAgY29uc3QgZ2F0aGVyRWxlbWVudHMgPSBlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gJ2xpbmsnICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyZWwnKSA9PT0gJ2ltcG9ydCcpIHtcbiAgICAgICAgLy8gVGhlIEhUTUwgSW1wb3J0cyBwb2x5ZmlsbCBzZXRzIGEgZGVzY2VuZGFudCBlbGVtZW50IG9mIHRoZSBsaW5rIHRvXG4gICAgICAgIC8vIHRoZSBgaW1wb3J0YCBwcm9wZXJ0eSwgc3BlY2lmaWNhbGx5IHRoaXMgaXMgKm5vdCogYSBEb2N1bWVudC5cbiAgICAgICAgY29uc3QgaW1wb3J0Tm9kZSA9IC8qKiBAdHlwZSB7P05vZGV9ICovIChlbGVtZW50LmltcG9ydCk7XG5cbiAgICAgICAgaWYgKGltcG9ydE5vZGUgaW5zdGFuY2VvZiBOb2RlICYmIGltcG9ydE5vZGUucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgIGltcG9ydE5vZGUuX19DRV9pc0ltcG9ydERvY3VtZW50ID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIENvbm5lY3RlZCBsaW5rcyBhcmUgYXNzb2NpYXRlZCB3aXRoIHRoZSByZWdpc3RyeS5cbiAgICAgICAgICBpbXBvcnROb2RlLl9fQ0VfaGFzUmVnaXN0cnkgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIHRoaXMgbGluaydzIGltcG9ydCByb290IGlzIG5vdCBhdmFpbGFibGUsIGl0cyBjb250ZW50cyBjYW4ndCBiZVxuICAgICAgICAgIC8vIHdhbGtlZC4gV2FpdCBmb3IgJ2xvYWQnIGFuZCB3YWxrIGl0IHdoZW4gaXQncyByZWFkeS5cbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbXBvcnROb2RlID0gLyoqIEB0eXBlIHshTm9kZX0gKi8gKGVsZW1lbnQuaW1wb3J0KTtcblxuICAgICAgICAgICAgaWYgKGltcG9ydE5vZGUuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkKSByZXR1cm47XG4gICAgICAgICAgICBpbXBvcnROb2RlLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGltcG9ydE5vZGUuX19DRV9pc0ltcG9ydERvY3VtZW50ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gQ29ubmVjdGVkIGxpbmtzIGFyZSBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdHJ5LlxuICAgICAgICAgICAgaW1wb3J0Tm9kZS5fX0NFX2hhc1JlZ2lzdHJ5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIGB2aXNpdGVkSW1wb3J0c2Agc2V0IHRoYXQgd2FzIHBvcHVsYXRlZCBzeW5jIGR1cmluZ1xuICAgICAgICAgICAgLy8gdGhlIGBwYXRjaEFuZFVwZ3JhZGVUcmVlYCBjYWxsIHRoYXQgY2F1c2VkIHRoaXMgJ2xvYWQnIGhhbmRsZXIgdG9cbiAgICAgICAgICAgIC8vIGJlIGFkZGVkLiBUaGVuLCByZW1vdmUgKnRoaXMqIGxpbmsncyBpbXBvcnQgbm9kZSBzbyB0aGF0IHdlIGNhblxuICAgICAgICAgICAgLy8gd2FsayB0aGF0IGltcG9ydCBhZ2FpbiwgZXZlbiBpZiBpdCB3YXMgcGFydGlhbGx5IHdhbGtlZCBsYXRlclxuICAgICAgICAgICAgLy8gZHVyaW5nIHRoZSBzYW1lIGBwYXRjaEFuZFVwZ3JhZGVUcmVlYCBjYWxsLlxuICAgICAgICAgICAgY29uc3QgY2xvbmVkVmlzaXRlZEltcG9ydHMgPSBuZXcgU2V0KHZpc2l0ZWRJbXBvcnRzKTtcbiAgICAgICAgICAgIHZpc2l0ZWRJbXBvcnRzLmRlbGV0ZShpbXBvcnROb2RlKTtcblxuICAgICAgICAgICAgdGhpcy5wYXRjaEFuZFVwZ3JhZGVUcmVlKGltcG9ydE5vZGUsIHZpc2l0ZWRJbXBvcnRzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYHdhbGtEZWVwRGVzY2VuZGFudEVsZW1lbnRzYCBwb3B1bGF0ZXMgKGFuZCBpbnRlcm5hbGx5IGNoZWNrcyBhZ2FpbnN0KVxuICAgIC8vIGB2aXNpdGVkSW1wb3J0c2Agd2hlbiB0cmF2ZXJzaW5nIGEgbG9hZGVkIGltcG9ydC5cbiAgICBVdGlsaXRpZXMud2Fsa0RlZXBEZXNjZW5kYW50RWxlbWVudHMocm9vdCwgZ2F0aGVyRWxlbWVudHMsIHZpc2l0ZWRJbXBvcnRzKTtcblxuICAgIGlmICh0aGlzLl9oYXNQYXRjaGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMucGF0Y2goZWxlbWVudHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMudXBncmFkZUVsZW1lbnQoZWxlbWVudHNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICB1cGdyYWRlRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gZWxlbWVudC5fX0NFX3N0YXRlO1xuICAgIGlmIChjdXJyZW50U3RhdGUgIT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMubG9jYWxOYW1lVG9EZWZpbml0aW9uKGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICBpZiAoIWRlZmluaXRpb24pIHJldHVybjtcblxuICAgIGRlZmluaXRpb24uY29uc3RydWN0aW9uU3RhY2sucHVzaChlbGVtZW50KTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gZGVmaW5pdGlvbi5jb25zdHJ1Y3RvcjtcbiAgICB0cnkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyAoY29uc3RydWN0b3IpKCk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvciBkaWQgbm90IHByb2R1Y2UgdGhlIGVsZW1lbnQgYmVpbmcgdXBncmFkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGRlZmluaXRpb24uY29uc3RydWN0aW9uU3RhY2sucG9wKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZWxlbWVudC5fX0NFX3N0YXRlID0gQ0VTdGF0ZS5mYWlsZWQ7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX19DRV9zdGF0ZSA9IENFU3RhdGUuY3VzdG9tO1xuICAgIGVsZW1lbnQuX19DRV9kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcblxuICAgIGlmIChkZWZpbml0aW9uLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaykge1xuICAgICAgY29uc3Qgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gZGVmaW5pdGlvbi5vYnNlcnZlZEF0dHJpYnV0ZXM7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic2VydmVkQXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gb2JzZXJ2ZWRBdHRyaWJ1dGVzW2ldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhlbGVtZW50LCBuYW1lLCBudWxsLCB2YWx1ZSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKGVsZW1lbnQpKSB7XG4gICAgICB0aGlzLmNvbm5lY3RlZENhbGxiYWNrKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICBjb25uZWN0ZWRDYWxsYmFjayhlbGVtZW50KSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IGVsZW1lbnQuX19DRV9kZWZpbml0aW9uO1xuICAgIGlmIChkZWZpbml0aW9uLmNvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICBkZWZpbml0aW9uLmNvbm5lY3RlZENhbGxiYWNrLmNhbGwoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgZWxlbWVudC5fX0NFX2lzQ29ubmVjdGVkQ2FsbGJhY2tDYWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQuX19DRV9pc0Nvbm5lY3RlZENhbGxiYWNrQ2FsbGVkKSB7XG4gICAgICB0aGlzLmNvbm5lY3RlZENhbGxiYWNrKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBlbGVtZW50Ll9fQ0VfZGVmaW5pdGlvbjtcbiAgICBpZiAoZGVmaW5pdGlvbi5kaXNjb25uZWN0ZWRDYWxsYmFjaykge1xuICAgICAgZGVmaW5pdGlvbi5kaXNjb25uZWN0ZWRDYWxsYmFjay5jYWxsKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX19DRV9pc0Nvbm5lY3RlZENhbGxiYWNrQ2FsbGVkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHs/c3RyaW5nfSBvbGRWYWx1ZVxuICAgKiBAcGFyYW0gez9zdHJpbmd9IG5ld1ZhbHVlXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gbmFtZXNwYWNlXG4gICAqL1xuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soZWxlbWVudCwgbmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBuYW1lc3BhY2UpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gZWxlbWVudC5fX0NFX2RlZmluaXRpb247XG4gICAgaWYgKFxuICAgICAgZGVmaW5pdGlvbi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgJiZcbiAgICAgIGRlZmluaXRpb24ub2JzZXJ2ZWRBdHRyaWJ1dGVzLmluZGV4T2YobmFtZSkgPiAtMVxuICAgICkge1xuICAgICAgZGVmaW5pdGlvbi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2suY2FsbChlbGVtZW50LCBuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIG5hbWVzcGFjZSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQ3VzdG9tRWxlbWVudEludGVybmFscyBmcm9tICcuL0N1c3RvbUVsZW1lbnRJbnRlcm5hbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudENvbnN0cnVjdGlvbk9ic2VydmVyIHtcbiAgY29uc3RydWN0b3IoaW50ZXJuYWxzLCBkb2MpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7IUN1c3RvbUVsZW1lbnRJbnRlcm5hbHN9XG4gICAgICovXG4gICAgdGhpcy5faW50ZXJuYWxzID0gaW50ZXJuYWxzO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUgeyFEb2N1bWVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvYztcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNdXRhdGlvbk9ic2VydmVyfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLl9vYnNlcnZlciA9IHVuZGVmaW5lZDtcblxuXG4gICAgLy8gU2ltdWxhdGUgdHJlZSBjb25zdHJ1Y3Rpb24gZm9yIGFsbCBjdXJyZW50bHkgYWNjZXNzaWJsZSBub2RlcyBpbiB0aGVcbiAgICAvLyBkb2N1bWVudC5cbiAgICB0aGlzLl9pbnRlcm5hbHMucGF0Y2hBbmRVcGdyYWRlVHJlZSh0aGlzLl9kb2N1bWVudCk7XG5cbiAgICBpZiAodGhpcy5fZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX2hhbmRsZU11dGF0aW9ucy5iaW5kKHRoaXMpKTtcblxuICAgICAgLy8gTm9kZXMgY3JlYXRlZCBieSB0aGUgcGFyc2VyIGFyZSBnaXZlbiB0byB0aGUgb2JzZXJ2ZXIgKmJlZm9yZSogdGhlIG5leHRcbiAgICAgIC8vIHRhc2sgcnVucy4gSW5saW5lIHNjcmlwdHMgYXJlIHJ1biBpbiBhIG5ldyB0YXNrLiBUaGlzIG1lYW5zIHRoYXQgdGhlXG4gICAgICAvLyBvYnNlcnZlciB3aWxsIGJlIGFibGUgdG8gaGFuZGxlIHRoZSBuZXdseSBwYXJzZWQgbm9kZXMgYmVmb3JlIHRoZSBpbmxpbmVcbiAgICAgIC8vIHNjcmlwdCBpcyBydW4uXG4gICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LCB7XG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7XG4gICAgaWYgKHRoaXMuX29ic2VydmVyKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IG11dGF0aW9uc1xuICAgKi9cbiAgX2hhbmRsZU11dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgICAvLyBPbmNlIHRoZSBkb2N1bWVudCdzIGByZWFkeVN0YXRlYCBpcyAnaW50ZXJhY3RpdmUnIG9yICdjb21wbGV0ZScsIGFsbCBuZXdcbiAgICAvLyBub2RlcyBjcmVhdGVkIHdpdGhpbiB0aGF0IGRvY3VtZW50IHdpbGwgYmUgdGhlIHJlc3VsdCBvZiBzY3JpcHQgYW5kXG4gICAgLy8gc2hvdWxkIGJlIGhhbmRsZWQgYnkgcGF0Y2hpbmcuXG4gICAgY29uc3QgcmVhZHlTdGF0ZSA9IHRoaXMuX2RvY3VtZW50LnJlYWR5U3RhdGU7XG4gICAgaWYgKHJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgfHwgcmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGFkZGVkTm9kZXMgPSBtdXRhdGlvbnNbaV0uYWRkZWROb2RlcztcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWRkZWROb2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBub2RlID0gYWRkZWROb2Rlc1tqXTtcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzLnBhdGNoQW5kVXBncmFkZVRyZWUobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmVycmVkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7VHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtGdW5jdGlvbnx1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5fcmVzb2x2ZSA9IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgeyFQcm9taXNlPFQ+fVxuICAgICAqL1xuICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuXG4gICAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLl92YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUfSB2YWx1ZVxuICAgKi9cbiAgcmVzb2x2ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbHJlYWR5IHJlc29sdmVkLicpO1xuICAgIH1cblxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodGhpcy5fcmVzb2x2ZSkge1xuICAgICAgdGhpcy5fcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFQcm9taXNlPFQ+fVxuICAgKi9cbiAgdG9Qcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICB9XG59XG4iLCJpbXBvcnQgQ3VzdG9tRWxlbWVudEludGVybmFscyBmcm9tICcuL0N1c3RvbUVsZW1lbnRJbnRlcm5hbHMuanMnO1xuaW1wb3J0IERvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIgZnJvbSAnLi9Eb2N1bWVudENvbnN0cnVjdGlvbk9ic2VydmVyLmpzJztcbmltcG9ydCBEZWZlcnJlZCBmcm9tICcuL0RlZmVycmVkLmpzJztcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICcuL1V0aWxpdGllcy5qcyc7XG5cbi8qKlxuICogQHVucmVzdHJpY3RlZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21FbGVtZW50UmVnaXN0cnkge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfSBpbnRlcm5hbHNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGludGVybmFscykge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5fZWxlbWVudERlZmluaXRpb25Jc1J1bm5pbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgeyFDdXN0b21FbGVtZW50SW50ZXJuYWxzfVxuICAgICAqL1xuICAgIHRoaXMuX2ludGVybmFscyA9IGludGVybmFscztcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgeyFNYXA8c3RyaW5nLCAhRGVmZXJyZWQ8dW5kZWZpbmVkPj59XG4gICAgICovXG4gICAgdGhpcy5fd2hlbkRlZmluZWREZWZlcnJlZCA9IG5ldyBNYXAoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGZsdXNoIGNhbGxiYWNrIHRyaWdnZXJzIHRoZSBkb2N1bWVudCB3YWxrIHN5bmNocm9ub3VzbHkuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IUZ1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX2ZsdXNoQ2FsbGJhY2sgPSBmbiA9PiBmbigpO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9mbHVzaFBlbmRpbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgeyFBcnJheTxzdHJpbmc+fVxuICAgICAqL1xuICAgIHRoaXMuX3VuZmx1c2hlZExvY2FsTmFtZXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgeyFEb2N1bWVudENvbnN0cnVjdGlvbk9ic2VydmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2RvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIgPSBuZXcgRG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlcihpbnRlcm5hbHMsIGRvY3VtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxOYW1lXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZGVmaW5lKGxvY2FsTmFtZSwgY29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShjb25zdHJ1Y3RvciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3JzIG11c3QgYmUgZnVuY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICghVXRpbGl0aWVzLmlzVmFsaWRDdXN0b21FbGVtZW50TmFtZShsb2NhbE5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFRoZSBlbGVtZW50IG5hbWUgJyR7bG9jYWxOYW1lfScgaXMgbm90IHZhbGlkLmApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbnRlcm5hbHMubG9jYWxOYW1lVG9EZWZpbml0aW9uKGxvY2FsTmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQSBjdXN0b20gZWxlbWVudCB3aXRoIG5hbWUgJyR7bG9jYWxOYW1lfScgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLmApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50RGVmaW5pdGlvbklzUnVubmluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGN1c3RvbSBlbGVtZW50IGlzIGFscmVhZHkgYmVpbmcgZGVmaW5lZC4nKTtcbiAgICB9XG4gICAgdGhpcy5fZWxlbWVudERlZmluaXRpb25Jc1J1bm5pbmcgPSB0cnVlO1xuXG4gICAgbGV0IGNvbm5lY3RlZENhbGxiYWNrO1xuICAgIGxldCBkaXNjb25uZWN0ZWRDYWxsYmFjaztcbiAgICBsZXQgYWRvcHRlZENhbGxiYWNrO1xuICAgIGxldCBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2s7XG4gICAgbGV0IG9ic2VydmVkQXR0cmlidXRlcztcbiAgICB0cnkge1xuICAgICAgLyoqIEB0eXBlIHshT2JqZWN0fSAqL1xuICAgICAgY29uc3QgcHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgaWYgKCEocHJvdG90eXBlIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3JcXCdzIHByb3RvdHlwZSBpcyBub3QgYW4gb2JqZWN0LicpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRDYWxsYmFjayhuYW1lKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrVmFsdWUgPSBwcm90b3R5cGVbbmFtZV07XG4gICAgICAgIGlmIChjYWxsYmFja1ZhbHVlICE9PSB1bmRlZmluZWQgJiYgIShjYWxsYmFja1ZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7bmFtZX0nIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbGJhY2tWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgY29ubmVjdGVkQ2FsbGJhY2sgPSBnZXRDYWxsYmFjaygnY29ubmVjdGVkQ2FsbGJhY2snKTtcbiAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZ2V0Q2FsbGJhY2soJ2Rpc2Nvbm5lY3RlZENhbGxiYWNrJyk7XG4gICAgICBhZG9wdGVkQ2FsbGJhY2sgPSBnZXRDYWxsYmFjaygnYWRvcHRlZENhbGxiYWNrJyk7XG4gICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgPSBnZXRDYWxsYmFjaygnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJyk7XG4gICAgICBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBjb25zdHJ1Y3Rvclsnb2JzZXJ2ZWRBdHRyaWJ1dGVzJ10gfHwgW107XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9lbGVtZW50RGVmaW5pdGlvbklzUnVubmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSB7XG4gICAgICBsb2NhbE5hbWUsXG4gICAgICBjb25zdHJ1Y3RvcixcbiAgICAgIGNvbm5lY3RlZENhbGxiYWNrLFxuICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2ssXG4gICAgICBhZG9wdGVkQ2FsbGJhY2ssXG4gICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2ssXG4gICAgICBvYnNlcnZlZEF0dHJpYnV0ZXMsXG4gICAgICBjb25zdHJ1Y3Rpb25TdGFjazogW10sXG4gICAgfTtcblxuICAgIHRoaXMuX2ludGVybmFscy5zZXREZWZpbml0aW9uKGxvY2FsTmFtZSwgZGVmaW5pdGlvbik7XG5cbiAgICB0aGlzLl91bmZsdXNoZWRMb2NhbE5hbWVzLnB1c2gobG9jYWxOYW1lKTtcblxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgY2FsbGVkIHRoZSBmbHVzaCBjYWxsYmFjayBhbmQgaXQgaGFzbid0IGNhbGxlZCBiYWNrIHlldCxcbiAgICAvLyBkb24ndCBjYWxsIGl0IGFnYWluLlxuICAgIGlmICghdGhpcy5fZmx1c2hQZW5kaW5nKSB7XG4gICAgICB0aGlzLl9mbHVzaFBlbmRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fZmx1c2hDYWxsYmFjaygoKSA9PiB0aGlzLl9mbHVzaCgpKTtcbiAgICB9XG4gIH1cblxuICBfZmx1c2goKSB7XG4gICAgLy8gSWYgbm8gbmV3IGRlZmluaXRpb25zIHdlcmUgZGVmaW5lZCwgZG9uJ3QgYXR0ZW1wdCB0byBmbHVzaC4gVGhpcyBjb3VsZFxuICAgIC8vIGhhcHBlbiBpZiBhIGZsdXNoIGNhbGxiYWNrIGtlZXBzIHRoZSBmdW5jdGlvbiBpdCBpcyBnaXZlbiBhbmQgY2FsbHMgaXRcbiAgICAvLyBtdWx0aXBsZSB0aW1lcy5cbiAgICBpZiAodGhpcy5fZmx1c2hQZW5kaW5nID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fZmx1c2hQZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5faW50ZXJuYWxzLnBhdGNoQW5kVXBncmFkZVRyZWUoZG9jdW1lbnQpO1xuXG4gICAgd2hpbGUgKHRoaXMuX3VuZmx1c2hlZExvY2FsTmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbG9jYWxOYW1lID0gdGhpcy5fdW5mbHVzaGVkTG9jYWxOYW1lcy5zaGlmdCgpO1xuICAgICAgY29uc3QgZGVmZXJyZWQgPSB0aGlzLl93aGVuRGVmaW5lZERlZmVycmVkLmdldChsb2NhbE5hbWUpO1xuICAgICAgaWYgKGRlZmVycmVkKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsTmFtZVxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbnx1bmRlZmluZWR9XG4gICAqL1xuICBnZXQobG9jYWxOYW1lKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuX2ludGVybmFscy5sb2NhbE5hbWVUb0RlZmluaXRpb24obG9jYWxOYW1lKTtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgcmV0dXJuIGRlZmluaXRpb24uY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxOYW1lXG4gICAqIEByZXR1cm4geyFQcm9taXNlPHVuZGVmaW5lZD59XG4gICAqL1xuICB3aGVuRGVmaW5lZChsb2NhbE5hbWUpIHtcbiAgICBpZiAoIVV0aWxpdGllcy5pc1ZhbGlkQ3VzdG9tRWxlbWVudE5hbWUobG9jYWxOYW1lKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBTeW50YXhFcnJvcihgJyR7bG9jYWxOYW1lfScgaXMgbm90IGEgdmFsaWQgY3VzdG9tIGVsZW1lbnQgbmFtZS5gKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpb3IgPSB0aGlzLl93aGVuRGVmaW5lZERlZmVycmVkLmdldChsb2NhbE5hbWUpO1xuICAgIGlmIChwcmlvcikge1xuICAgICAgcmV0dXJuIHByaW9yLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XG4gICAgdGhpcy5fd2hlbkRlZmluZWREZWZlcnJlZC5zZXQobG9jYWxOYW1lLCBkZWZlcnJlZCk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5faW50ZXJuYWxzLmxvY2FsTmFtZVRvRGVmaW5pdGlvbihsb2NhbE5hbWUpO1xuICAgIC8vIFJlc29sdmUgaW1tZWRpYXRlbHkgb25seSBpZiB0aGUgZ2l2ZW4gbG9jYWwgbmFtZSBoYXMgYSBkZWZpbml0aW9uICphbmQqXG4gICAgLy8gdGhlIGZ1bGwgZG9jdW1lbnQgd2FsayB0byB1cGdyYWRlIGVsZW1lbnRzIHdpdGggdGhhdCBsb2NhbCBuYW1lIGhhc1xuICAgIC8vIGFscmVhZHkgaGFwcGVuZWQuXG4gICAgaWYgKGRlZmluaXRpb24gJiYgdGhpcy5fdW5mbHVzaGVkTG9jYWxOYW1lcy5pbmRleE9mKGxvY2FsTmFtZSkgPT09IC0xKSB7XG4gICAgICBkZWZlcnJlZC5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmVycmVkLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgcG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayhvdXRlcikge1xuICAgIHRoaXMuX2RvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIGNvbnN0IGlubmVyID0gdGhpcy5fZmx1c2hDYWxsYmFjaztcbiAgICB0aGlzLl9mbHVzaENhbGxiYWNrID0gZmx1c2ggPT4gb3V0ZXIoKCkgPT4gaW5uZXIoZmx1c2gpKTtcbiAgfVxufVxuXG4vLyBDbG9zdXJlIGNvbXBpbGVyIGV4cG9ydHMuXG53aW5kb3dbJ0N1c3RvbUVsZW1lbnRSZWdpc3RyeSddID0gQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5O1xuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZVsnZGVmaW5lJ10gPSBDdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLmRlZmluZTtcbkN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGVbJ2dldCddID0gQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS5nZXQ7XG5DdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlWyd3aGVuRGVmaW5lZCddID0gQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZS53aGVuRGVmaW5lZDtcbkN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGVbJ3BvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2snXSA9IEN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgRG9jdW1lbnRfY3JlYXRlRWxlbWVudDogd2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50LFxuICBEb2N1bWVudF9jcmVhdGVFbGVtZW50TlM6IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudE5TLFxuICBEb2N1bWVudF9pbXBvcnROb2RlOiB3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmltcG9ydE5vZGUsXG4gIERvY3VtZW50X3ByZXBlbmQ6IHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGVbJ3ByZXBlbmQnXSxcbiAgRG9jdW1lbnRfYXBwZW5kOiB3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlWydhcHBlbmQnXSxcbiAgTm9kZV9jbG9uZU5vZGU6IHdpbmRvdy5Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGUsXG4gIE5vZGVfYXBwZW5kQ2hpbGQ6IHdpbmRvdy5Ob2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCxcbiAgTm9kZV9pbnNlcnRCZWZvcmU6IHdpbmRvdy5Ob2RlLnByb3RvdHlwZS5pbnNlcnRCZWZvcmUsXG4gIE5vZGVfcmVtb3ZlQ2hpbGQ6IHdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCxcbiAgTm9kZV9yZXBsYWNlQ2hpbGQ6IHdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQsXG4gIE5vZGVfdGV4dENvbnRlbnQ6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93Lk5vZGUucHJvdG90eXBlLCAndGV4dENvbnRlbnQnKSxcbiAgRWxlbWVudF9hdHRhY2hTaGFkb3c6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsnYXR0YWNoU2hhZG93J10sXG4gIEVsZW1lbnRfaW5uZXJIVE1MOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSwgJ2lubmVySFRNTCcpLFxuICBFbGVtZW50X2dldEF0dHJpYnV0ZTogd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZSxcbiAgRWxlbWVudF9zZXRBdHRyaWJ1dGU6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUsXG4gIEVsZW1lbnRfcmVtb3ZlQXR0cmlidXRlOiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlLFxuICBFbGVtZW50X2dldEF0dHJpYnV0ZU5TOiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlTlMsXG4gIEVsZW1lbnRfc2V0QXR0cmlidXRlTlM6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUyxcbiAgRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGVOUzogd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZU5TLFxuICBFbGVtZW50X2luc2VydEFkamFjZW50RWxlbWVudDogd2luZG93LkVsZW1lbnQucHJvdG90eXBlWydpbnNlcnRBZGphY2VudEVsZW1lbnQnXSxcbiAgRWxlbWVudF9wcmVwZW5kOiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGVbJ3ByZXBlbmQnXSxcbiAgRWxlbWVudF9hcHBlbmQ6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsnYXBwZW5kJ10sXG4gIEVsZW1lbnRfYmVmb3JlOiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGVbJ2JlZm9yZSddLFxuICBFbGVtZW50X2FmdGVyOiB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGVbJ2FmdGVyJ10sXG4gIEVsZW1lbnRfcmVwbGFjZVdpdGg6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsncmVwbGFjZVdpdGgnXSxcbiAgRWxlbWVudF9yZW1vdmU6IHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZVsncmVtb3ZlJ10sXG4gIEhUTUxFbGVtZW50OiB3aW5kb3cuSFRNTEVsZW1lbnQsXG4gIEhUTUxFbGVtZW50X2lubmVySFRNTDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnaW5uZXJIVE1MJyksXG4gIEhUTUxFbGVtZW50X2luc2VydEFkamFjZW50RWxlbWVudDogd2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZVsnaW5zZXJ0QWRqYWNlbnRFbGVtZW50J10sXG59O1xuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGV4aXN0cyBvbmx5IHRvIHdvcmsgYXJvdW5kIENsb3N1cmUncyBsYWNrIG9mIGEgd2F5IHRvIGRlc2NyaWJlXG4gKiBzaW5nbGV0b25zLiBJdCByZXByZXNlbnRzIHRoZSAnYWxyZWFkeSBjb25zdHJ1Y3RlZCBtYXJrZXInIHVzZWQgaW4gY3VzdG9tXG4gKiBlbGVtZW50IGNvbnN0cnVjdGlvbiBzdGFja3MuXG4gKlxuICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1hbHJlYWR5LWNvbnN0cnVjdGVkLW1hcmtlclxuICovXG5jbGFzcyBBbHJlYWR5Q29uc3RydWN0ZWRNYXJrZXIge31cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFscmVhZHlDb25zdHJ1Y3RlZE1hcmtlcigpO1xuIiwiaW1wb3J0IE5hdGl2ZSBmcm9tICcuL05hdGl2ZS5qcyc7XG5pbXBvcnQgQ3VzdG9tRWxlbWVudEludGVybmFscyBmcm9tICcuLi9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzJztcbmltcG9ydCBDRVN0YXRlIGZyb20gJy4uL0N1c3RvbUVsZW1lbnRTdGF0ZS5qcyc7XG5pbXBvcnQgQWxyZWFkeUNvbnN0cnVjdGVkTWFya2VyIGZyb20gJy4uL0FscmVhZHlDb25zdHJ1Y3RlZE1hcmtlci5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscykge1xuICB3aW5kb3dbJ0hUTUxFbGVtZW50J10gPSAoZnVuY3Rpb24oKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge2Z1bmN0aW9uKG5ldzogSFRNTEVsZW1lbnQpOiAhSFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gSFRNTEVsZW1lbnQoKSB7XG4gICAgICAvLyBUaGlzIHNob3VsZCByZWFsbHkgYmUgYG5ldy50YXJnZXRgIGJ1dCBgbmV3LnRhcmdldGAgY2FuJ3QgYmUgZW11bGF0ZWRcbiAgICAgIC8vIGluIEVTNS4gQXNzdW1pbmcgdGhlIHVzZXIga2VlcHMgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGNvbnN0cnVjdG9yJ3NcbiAgICAgIC8vIHByb3RvdHlwZSdzIGBjb25zdHJ1Y3RvcmAgcHJvcGVydHksIHRoaXMgaXMgZXF1aXZhbGVudC5cbiAgICAgIC8qKiBAdHlwZSB7IUZ1bmN0aW9ufSAqL1xuICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gaW50ZXJuYWxzLmNvbnN0cnVjdG9yVG9EZWZpbml0aW9uKGNvbnN0cnVjdG9yKTtcbiAgICAgIGlmICghZGVmaW5pdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjdXN0b20gZWxlbWVudCBiZWluZyBjb25zdHJ1Y3RlZCB3YXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgY3VzdG9tRWxlbWVudHNgLicpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb25zdHJ1Y3Rpb25TdGFjayA9IGRlZmluaXRpb24uY29uc3RydWN0aW9uU3RhY2s7XG5cbiAgICAgIGlmIChjb25zdHJ1Y3Rpb25TdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IE5hdGl2ZS5Eb2N1bWVudF9jcmVhdGVFbGVtZW50LmNhbGwoZG9jdW1lbnQsIGRlZmluaXRpb24ubG9jYWxOYW1lKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGVsZW1lbnQsIGNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG4gICAgICAgIGVsZW1lbnQuX19DRV9zdGF0ZSA9IENFU3RhdGUuY3VzdG9tO1xuICAgICAgICBlbGVtZW50Ll9fQ0VfZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG4gICAgICAgIGludGVybmFscy5wYXRjaChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGNvbnN0cnVjdGlvblN0YWNrLmxlbmd0aCAtIDE7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY29uc3RydWN0aW9uU3RhY2tbbGFzdEluZGV4XTtcbiAgICAgIGlmIChlbGVtZW50ID09PSBBbHJlYWR5Q29uc3RydWN0ZWRNYXJrZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgSFRNTEVsZW1lbnQgY29uc3RydWN0b3Igd2FzIGVpdGhlciBjYWxsZWQgcmVlbnRyYW50bHkgZm9yIHRoaXMgY29uc3RydWN0b3Igb3IgY2FsbGVkIG11bHRpcGxlIHRpbWVzLicpO1xuICAgICAgfVxuICAgICAgY29uc3RydWN0aW9uU3RhY2tbbGFzdEluZGV4XSA9IEFscmVhZHlDb25zdHJ1Y3RlZE1hcmtlcjtcblxuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGVsZW1lbnQsIGNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG4gICAgICBpbnRlcm5hbHMucGF0Y2goLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChlbGVtZW50KSk7XG5cbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZSA9IE5hdGl2ZS5IVE1MRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICByZXR1cm4gSFRNTEVsZW1lbnQ7XG4gIH0pKCk7XG59O1xuIiwiaW1wb3J0IEN1c3RvbUVsZW1lbnRJbnRlcm5hbHMgZnJvbSAnLi4vLi4vQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyc7XG5pbXBvcnQgKiBhcyBVdGlsaXRpZXMgZnJvbSAnLi4vLi4vVXRpbGl0aWVzLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBwcmVwZW5kOiAhZnVuY3Rpb24oLi4uKCFOb2RlfHN0cmluZykpLFxuICAqICBhcHBlbmQ6ICFmdW5jdGlvbiguLi4oIU5vZGV8c3RyaW5nKSksXG4gKiB9fVxuICovXG5sZXQgUGFyZW50Tm9kZU5hdGl2ZU1ldGhvZHM7XG5cbi8qKlxuICogQHBhcmFtIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzXG4gKiBAcGFyYW0geyFPYmplY3R9IGRlc3RpbmF0aW9uXG4gKiBAcGFyYW0geyFQYXJlbnROb2RlTmF0aXZlTWV0aG9kc30gYnVpbHRJblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnRlcm5hbHMsIGRlc3RpbmF0aW9uLCBidWlsdEluKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0gey4uLighTm9kZXxzdHJpbmcpfSBub2Rlc1xuICAgKi9cbiAgZGVzdGluYXRpb25bJ3ByZXBlbmQnXSA9IGZ1bmN0aW9uKC4uLm5vZGVzKSB7XG4gICAgLy8gVE9ETzogRml4IHRoaXMgZm9yIHdoZW4gb25lIG9mIGBub2Rlc2AgaXMgYSBEb2N1bWVudEZyYWdtZW50IVxuICAgIGNvbnN0IGNvbm5lY3RlZEJlZm9yZSA9IC8qKiBAdHlwZSB7IUFycmF5PCFOb2RlPn0gKi8gKG5vZGVzLmZpbHRlcihub2RlID0+IHtcbiAgICAgIC8vIERvY3VtZW50RnJhZ21lbnRzIGFyZSBub3QgY29ubmVjdGVkIGFuZCB3aWxsIG5vdCBiZSBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgTm9kZSAmJiBVdGlsaXRpZXMuaXNDb25uZWN0ZWQobm9kZSk7XG4gICAgfSkpO1xuXG4gICAgYnVpbHRJbi5wcmVwZW5kLmFwcGx5KHRoaXMsIG5vZGVzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ubmVjdGVkQmVmb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUoY29ubmVjdGVkQmVmb3JlW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gey4uLighTm9kZXxzdHJpbmcpfSBub2Rlc1xuICAgKi9cbiAgZGVzdGluYXRpb25bJ2FwcGVuZCddID0gZnVuY3Rpb24oLi4ubm9kZXMpIHtcbiAgICAvLyBUT0RPOiBGaXggdGhpcyBmb3Igd2hlbiBvbmUgb2YgYG5vZGVzYCBpcyBhIERvY3VtZW50RnJhZ21lbnQhXG4gICAgY29uc3QgY29ubmVjdGVkQmVmb3JlID0gLyoqIEB0eXBlIHshQXJyYXk8IU5vZGU+fSAqLyAobm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xuICAgICAgLy8gRG9jdW1lbnRGcmFnbWVudHMgYXJlIG5vdCBjb25uZWN0ZWQgYW5kIHdpbGwgbm90IGJlIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBOb2RlICYmIFV0aWxpdGllcy5pc0Nvbm5lY3RlZChub2RlKTtcbiAgICB9KSk7XG5cbiAgICBidWlsdEluLmFwcGVuZC5hcHBseSh0aGlzLCBub2Rlcyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbm5lY3RlZEJlZm9yZS5sZW5ndGg7IGkrKykge1xuICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKGNvbm5lY3RlZEJlZm9yZVtpXSk7XG4gICAgfVxuXG4gICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgTmF0aXZlIGZyb20gJy4vTmF0aXZlLmpzJztcbmltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4uL0N1c3RvbUVsZW1lbnRJbnRlcm5hbHMuanMnO1xuaW1wb3J0ICogYXMgVXRpbGl0aWVzIGZyb20gJy4uL1V0aWxpdGllcy5qcyc7XG5cbmltcG9ydCBQYXRjaFBhcmVudE5vZGUgZnJvbSAnLi9JbnRlcmZhY2UvUGFyZW50Tm9kZS5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gaW50ZXJuYWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGludGVybmFscykge1xuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoRG9jdW1lbnQucHJvdG90eXBlLCAnY3JlYXRlRWxlbWVudCcsXG4gICAgLyoqXG4gICAgICogQHRoaXMge0RvY3VtZW50fVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbE5hbWVcbiAgICAgKiBAcmV0dXJuIHshRWxlbWVudH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihsb2NhbE5hbWUpIHtcbiAgICAgIC8vIE9ubHkgY3JlYXRlIGN1c3RvbSBlbGVtZW50cyBpZiB0aGlzIGRvY3VtZW50IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0cnkuXG4gICAgICBpZiAodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5KSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbnRlcm5hbHMubG9jYWxOYW1lVG9EZWZpbml0aW9uKGxvY2FsTmFtZSk7XG4gICAgICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyAoZGVmaW5pdGlvbi5jb25zdHJ1Y3RvcikoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICAoTmF0aXZlLkRvY3VtZW50X2NyZWF0ZUVsZW1lbnQuY2FsbCh0aGlzLCBsb2NhbE5hbWUpKTtcbiAgICAgIGludGVybmFscy5wYXRjaChyZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoRG9jdW1lbnQucHJvdG90eXBlLCAnaW1wb3J0Tm9kZScsXG4gICAgLyoqXG4gICAgICogQHRoaXMge0RvY3VtZW50fVxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBkZWVwXG4gICAgICogQHJldHVybiB7IU5vZGV9XG4gICAgICovXG4gICAgZnVuY3Rpb24obm9kZSwgZGVlcCkge1xuICAgICAgY29uc3QgY2xvbmUgPSBOYXRpdmUuRG9jdW1lbnRfaW1wb3J0Tm9kZS5jYWxsKHRoaXMsIG5vZGUsIGRlZXApO1xuICAgICAgLy8gT25seSBjcmVhdGUgY3VzdG9tIGVsZW1lbnRzIGlmIHRoaXMgZG9jdW1lbnQgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSByZWdpc3RyeS5cbiAgICAgIGlmICghdGhpcy5fX0NFX2hhc1JlZ2lzdHJ5KSB7XG4gICAgICAgIGludGVybmFscy5wYXRjaFRyZWUoY2xvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJuYWxzLnBhdGNoQW5kVXBncmFkZVRyZWUoY2xvbmUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH0pO1xuXG4gIGNvbnN0IE5TX0hUTUwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoRG9jdW1lbnQucHJvdG90eXBlLCAnY3JlYXRlRWxlbWVudE5TJyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7RG9jdW1lbnR9XG4gICAgICogQHBhcmFtIHs/c3RyaW5nfSBuYW1lc3BhY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxOYW1lXG4gICAgICogQHJldHVybiB7IUVsZW1lbnR9XG4gICAgICovXG4gICAgZnVuY3Rpb24obmFtZXNwYWNlLCBsb2NhbE5hbWUpIHtcbiAgICAgIC8vIE9ubHkgY3JlYXRlIGN1c3RvbSBlbGVtZW50cyBpZiB0aGlzIGRvY3VtZW50IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0cnkuXG4gICAgICBpZiAodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5ICYmIChuYW1lc3BhY2UgPT09IG51bGwgfHwgbmFtZXNwYWNlID09PSBOU19IVE1MKSkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gaW50ZXJuYWxzLmxvY2FsTmFtZVRvRGVmaW5pdGlvbihsb2NhbE5hbWUpO1xuICAgICAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICAgIHJldHVybiBuZXcgKGRlZmluaXRpb24uY29uc3RydWN0b3IpKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9cbiAgICAgICAgKE5hdGl2ZS5Eb2N1bWVudF9jcmVhdGVFbGVtZW50TlMuY2FsbCh0aGlzLCBuYW1lc3BhY2UsIGxvY2FsTmFtZSkpO1xuICAgICAgaW50ZXJuYWxzLnBhdGNoKHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gIFBhdGNoUGFyZW50Tm9kZShpbnRlcm5hbHMsIERvY3VtZW50LnByb3RvdHlwZSwge1xuICAgIHByZXBlbmQ6IE5hdGl2ZS5Eb2N1bWVudF9wcmVwZW5kLFxuICAgIGFwcGVuZDogTmF0aXZlLkRvY3VtZW50X2FwcGVuZCxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IE5hdGl2ZSBmcm9tICcuL05hdGl2ZS5qcyc7XG5pbXBvcnQgQ3VzdG9tRWxlbWVudEludGVybmFscyBmcm9tICcuLi9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzJztcbmltcG9ydCAqIGFzIFV0aWxpdGllcyBmcm9tICcuLi9VdGlsaXRpZXMuanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7IUN1c3RvbUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFsc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnRlcm5hbHMpIHtcbiAgLy8gYE5vZGUjbm9kZVZhbHVlYCBpcyBpbXBsZW1lbnRlZCBvbiBgQXR0cmAuXG4gIC8vIGBOb2RlI3RleHRDb250ZW50YCBpcyBpbXBsZW1lbnRlZCBvbiBgQXR0cmAsIGBFbGVtZW50YC5cblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoTm9kZS5wcm90b3R5cGUsICdpbnNlcnRCZWZvcmUnLFxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtOb2RlfVxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKiBAcGFyYW0gez9Ob2RlfSByZWZOb2RlXG4gICAgICogQHJldHVybiB7IU5vZGV9XG4gICAgICovXG4gICAgZnVuY3Rpb24obm9kZSwgcmVmTm9kZSkge1xuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIGNvbnN0IGluc2VydGVkTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkobm9kZS5jaGlsZE5vZGVzKTtcbiAgICAgICAgY29uc3QgbmF0aXZlUmVzdWx0ID0gTmF0aXZlLk5vZGVfaW5zZXJ0QmVmb3JlLmNhbGwodGhpcywgbm9kZSwgcmVmTm9kZSk7XG5cbiAgICAgICAgLy8gRG9jdW1lbnRGcmFnbWVudHMgY2FuJ3QgYmUgY29ubmVjdGVkLCBzbyBgZGlzY29ubmVjdFRyZWVgIHdpbGwgbmV2ZXJcbiAgICAgICAgLy8gbmVlZCB0byBiZSBjYWxsZWQgb24gYSBEb2N1bWVudEZyYWdtZW50J3MgY2hpbGRyZW4gYWZ0ZXIgaW5zZXJ0aW5nIGl0LlxuXG4gICAgICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShpbnNlcnRlZE5vZGVzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmF0aXZlUmVzdWx0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub2RlV2FzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgICAgY29uc3QgbmF0aXZlUmVzdWx0ID0gTmF0aXZlLk5vZGVfaW5zZXJ0QmVmb3JlLmNhbGwodGhpcywgbm9kZSwgcmVmTm9kZSk7XG5cbiAgICAgIGlmIChub2RlV2FzQ29ubmVjdGVkKSB7XG4gICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKSkge1xuICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuYXRpdmVSZXN1bHQ7XG4gICAgfSk7XG5cbiAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKE5vZGUucHJvdG90eXBlLCAnYXBwZW5kQ2hpbGQnLFxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtOb2RlfVxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihub2RlKSB7XG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShub2RlLmNoaWxkTm9kZXMpO1xuICAgICAgICBjb25zdCBuYXRpdmVSZXN1bHQgPSBOYXRpdmUuTm9kZV9hcHBlbmRDaGlsZC5jYWxsKHRoaXMsIG5vZGUpO1xuXG4gICAgICAgIC8vIERvY3VtZW50RnJhZ21lbnRzIGNhbid0IGJlIGNvbm5lY3RlZCwgc28gYGRpc2Nvbm5lY3RUcmVlYCB3aWxsIG5ldmVyXG4gICAgICAgIC8vIG5lZWQgdG8gYmUgY2FsbGVkIG9uIGEgRG9jdW1lbnRGcmFnbWVudCdzIGNoaWxkcmVuIGFmdGVyIGluc2VydGluZyBpdC5cblxuICAgICAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnNlcnRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUoaW5zZXJ0ZWROb2Rlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5hdGl2ZVJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9kZVdhc0Nvbm5lY3RlZCA9IFV0aWxpdGllcy5pc0Nvbm5lY3RlZChub2RlKTtcbiAgICAgIGNvbnN0IG5hdGl2ZVJlc3VsdCA9IE5hdGl2ZS5Ob2RlX2FwcGVuZENoaWxkLmNhbGwodGhpcywgbm9kZSk7XG5cbiAgICAgIGlmIChub2RlV2FzQ29ubmVjdGVkKSB7XG4gICAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKSkge1xuICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuYXRpdmVSZXN1bHQ7XG4gICAgfSk7XG5cbiAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKE5vZGUucHJvdG90eXBlLCAnY2xvbmVOb2RlJyxcbiAgICAvKipcbiAgICAgKiBAdGhpcyB7Tm9kZX1cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBkZWVwXG4gICAgICogQHJldHVybiB7IU5vZGV9XG4gICAgICovXG4gICAgZnVuY3Rpb24oZGVlcCkge1xuICAgICAgY29uc3QgY2xvbmUgPSBOYXRpdmUuTm9kZV9jbG9uZU5vZGUuY2FsbCh0aGlzLCBkZWVwKTtcbiAgICAgIC8vIE9ubHkgY3JlYXRlIGN1c3RvbSBlbGVtZW50cyBpZiB0aGlzIGVsZW1lbnQncyBvd25lciBkb2N1bWVudCBpc1xuICAgICAgLy8gYXNzb2NpYXRlZCB3aXRoIHRoZSByZWdpc3RyeS5cbiAgICAgIGlmICghdGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnkpIHtcbiAgICAgICAgaW50ZXJuYWxzLnBhdGNoVHJlZShjbG9uZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnRlcm5hbHMucGF0Y2hBbmRVcGdyYWRlVHJlZShjbG9uZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xvbmU7XG4gICAgfSk7XG5cbiAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKE5vZGUucHJvdG90eXBlLCAncmVtb3ZlQ2hpbGQnLFxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtOb2RlfVxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbihub2RlKSB7XG4gICAgICBjb25zdCBub2RlV2FzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgICAgY29uc3QgbmF0aXZlUmVzdWx0ID0gTmF0aXZlLk5vZGVfcmVtb3ZlQ2hpbGQuY2FsbCh0aGlzLCBub2RlKTtcblxuICAgICAgaWYgKG5vZGVXYXNDb25uZWN0ZWQpIHtcbiAgICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmF0aXZlUmVzdWx0O1xuICAgIH0pO1xuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChOb2RlLnByb3RvdHlwZSwgJ3JlcGxhY2VDaGlsZCcsXG4gICAgLyoqXG4gICAgICogQHRoaXMge05vZGV9XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVRvSW5zZXJ0XG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVRvUmVtb3ZlXG4gICAgICogQHJldHVybiB7IU5vZGV9XG4gICAgICovXG4gICAgZnVuY3Rpb24obm9kZVRvSW5zZXJ0LCBub2RlVG9SZW1vdmUpIHtcbiAgICAgIGlmIChub2RlVG9JbnNlcnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIGNvbnN0IGluc2VydGVkTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkobm9kZVRvSW5zZXJ0LmNoaWxkTm9kZXMpO1xuICAgICAgICBjb25zdCBuYXRpdmVSZXN1bHQgPSBOYXRpdmUuTm9kZV9yZXBsYWNlQ2hpbGQuY2FsbCh0aGlzLCBub2RlVG9JbnNlcnQsIG5vZGVUb1JlbW92ZSk7XG5cbiAgICAgICAgLy8gRG9jdW1lbnRGcmFnbWVudHMgY2FuJ3QgYmUgY29ubmVjdGVkLCBzbyBgZGlzY29ubmVjdFRyZWVgIHdpbGwgbmV2ZXJcbiAgICAgICAgLy8gbmVlZCB0byBiZSBjYWxsZWQgb24gYSBEb2N1bWVudEZyYWdtZW50J3MgY2hpbGRyZW4gYWZ0ZXIgaW5zZXJ0aW5nIGl0LlxuXG4gICAgICAgIGlmIChVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcykpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUobm9kZVRvUmVtb3ZlKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2VydGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShpbnNlcnRlZE5vZGVzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmF0aXZlUmVzdWx0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub2RlVG9JbnNlcnRXYXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQobm9kZVRvSW5zZXJ0KTtcbiAgICAgIGNvbnN0IG5hdGl2ZVJlc3VsdCA9IE5hdGl2ZS5Ob2RlX3JlcGxhY2VDaGlsZC5jYWxsKHRoaXMsIG5vZGVUb0luc2VydCwgbm9kZVRvUmVtb3ZlKTtcbiAgICAgIGNvbnN0IHRoaXNJc0Nvbm5lY3RlZCA9IFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKTtcblxuICAgICAgaWYgKHRoaXNJc0Nvbm5lY3RlZCkge1xuICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUobm9kZVRvUmVtb3ZlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGVUb0luc2VydFdhc0Nvbm5lY3RlZCkge1xuICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUobm9kZVRvSW5zZXJ0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXNJc0Nvbm5lY3RlZCkge1xuICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUobm9kZVRvSW5zZXJ0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5hdGl2ZVJlc3VsdDtcbiAgICB9KTtcblxuXG4gIGZ1bmN0aW9uIHBhdGNoX3RleHRDb250ZW50KGRlc3RpbmF0aW9uLCBiYXNlRGVzY3JpcHRvcikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0aW5hdGlvbiwgJ3RleHRDb250ZW50Jywge1xuICAgICAgZW51bWVyYWJsZTogYmFzZURlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogYmFzZURlc2NyaXB0b3IuZ2V0LFxuICAgICAgc2V0OiAvKiogQHRoaXMge05vZGV9ICovIGZ1bmN0aW9uKGFzc2lnbmVkVmFsdWUpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHRleHQgbm9kZSB0aGVuIHRoZXJlIGFyZSBubyBub2RlcyB0byBkaXNjb25uZWN0LlxuICAgICAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICBiYXNlRGVzY3JpcHRvci5zZXQuY2FsbCh0aGlzLCBhc3NpZ25lZFZhbHVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVtb3ZlZE5vZGVzID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBDaGVja2luZyBmb3IgYGZpcnN0Q2hpbGRgIGlzIGZhc3RlciB0aGFuIHJlYWRpbmcgYGNoaWxkTm9kZXMubGVuZ3RoYFxuICAgICAgICAvLyB0byBjb21wYXJlIHdpdGggMC5cbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIC8vIFVzaW5nIGBjaGlsZE5vZGVzYCBpcyBmYXN0ZXIgdGhhbiBgY2hpbGRyZW5gLCBldmVuIHRob3VnaCB3ZSBvbmx5XG4gICAgICAgICAgLy8gY2FyZSBhYm91dCBlbGVtZW50cy5cbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzO1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgICAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA+IDAgJiYgVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICAgICAgICAvLyBDb3B5aW5nIGFuIGFycmF5IGJ5IGl0ZXJhdGluZyBpcyBmYXN0ZXIgdGhhbiB1c2luZyBzbGljZS5cbiAgICAgICAgICAgIHJlbW92ZWROb2RlcyA9IG5ldyBBcnJheShjaGlsZE5vZGVzTGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGROb2Rlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHJlbW92ZWROb2Rlc1tpXSA9IGNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYmFzZURlc2NyaXB0b3Iuc2V0LmNhbGwodGhpcywgYXNzaWduZWRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHJlbW92ZWROb2Rlcykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUocmVtb3ZlZE5vZGVzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBpZiAoTmF0aXZlLk5vZGVfdGV4dENvbnRlbnQgJiYgTmF0aXZlLk5vZGVfdGV4dENvbnRlbnQuZ2V0KSB7XG4gICAgcGF0Y2hfdGV4dENvbnRlbnQoTm9kZS5wcm90b3R5cGUsIE5hdGl2ZS5Ob2RlX3RleHRDb250ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpbnRlcm5hbHMuYWRkUGF0Y2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgcGF0Y2hfdGV4dENvbnRlbnQoZWxlbWVudCwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaW1wbGVtZW50YXRpb24gb2YgdGhlIGB0ZXh0Q29udGVudGAgZ2V0dGVyIGFzc3VtZXMgdGhhdFxuICAgICAgICAvLyB0ZXh0IG5vZGVzJyBgdGV4dENvbnRlbnRgIGdldHRlciB3aWxsIG5vdCBiZSBwYXRjaGVkLlxuICAgICAgICBnZXQ6IC8qKiBAdGhpcyB7Tm9kZX0gKi8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHshQXJyYXk8c3RyaW5nPn0gKi9cbiAgICAgICAgICBjb25zdCBwYXJ0cyA9IFtdO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhcnRzLnB1c2godGhpcy5jaGlsZE5vZGVzW2ldLnRleHRDb250ZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFydHMuam9pbignJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogLyoqIEB0aGlzIHtOb2RlfSAqLyBmdW5jdGlvbihhc3NpZ25lZFZhbHVlKSB7XG4gICAgICAgICAgd2hpbGUgKHRoaXMuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgTmF0aXZlLk5vZGVfcmVtb3ZlQ2hpbGQuY2FsbCh0aGlzLCB0aGlzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBOYXRpdmUuTm9kZV9hcHBlbmRDaGlsZC5jYWxsKHRoaXMsIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFzc2lnbmVkVmFsdWUpKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IEN1c3RvbUVsZW1lbnRJbnRlcm5hbHMgZnJvbSAnLi4vLi4vQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyc7XG5pbXBvcnQgKiBhcyBVdGlsaXRpZXMgZnJvbSAnLi4vLi4vVXRpbGl0aWVzLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBiZWZvcmU6ICFmdW5jdGlvbiguLi4oIU5vZGV8c3RyaW5nKSksXG4gKiAgIGFmdGVyOiAhZnVuY3Rpb24oLi4uKCFOb2RlfHN0cmluZykpLFxuICogICByZXBsYWNlV2l0aDogIWZ1bmN0aW9uKC4uLighTm9kZXxzdHJpbmcpKSxcbiAqICAgcmVtb3ZlOiAhZnVuY3Rpb24oKSxcbiAqIH19XG4gKi9cbmxldCBDaGlsZE5vZGVOYXRpdmVNZXRob2RzO1xuXG4vKipcbiAqIEBwYXJhbSB7IUN1c3RvbUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFsc1xuICogQHBhcmFtIHshT2JqZWN0fSBkZXN0aW5hdGlvblxuICogQHBhcmFtIHshQ2hpbGROb2RlTmF0aXZlTWV0aG9kc30gYnVpbHRJblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnRlcm5hbHMsIGRlc3RpbmF0aW9uLCBidWlsdEluKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0gey4uLighTm9kZXxzdHJpbmcpfSBub2Rlc1xuICAgKi9cbiAgZGVzdGluYXRpb25bJ2JlZm9yZSddID0gZnVuY3Rpb24oLi4ubm9kZXMpIHtcbiAgICAvLyBUT0RPOiBGaXggdGhpcyBmb3Igd2hlbiBvbmUgb2YgYG5vZGVzYCBpcyBhIERvY3VtZW50RnJhZ21lbnQhXG4gICAgY29uc3QgY29ubmVjdGVkQmVmb3JlID0gLyoqIEB0eXBlIHshQXJyYXk8IU5vZGU+fSAqLyAobm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xuICAgICAgLy8gRG9jdW1lbnRGcmFnbWVudHMgYXJlIG5vdCBjb25uZWN0ZWQgYW5kIHdpbGwgbm90IGJlIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBOb2RlICYmIFV0aWxpdGllcy5pc0Nvbm5lY3RlZChub2RlKTtcbiAgICB9KSk7XG5cbiAgICBidWlsdEluLmJlZm9yZS5hcHBseSh0aGlzLCBub2Rlcyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbm5lY3RlZEJlZm9yZS5sZW5ndGg7IGkrKykge1xuICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKGNvbm5lY3RlZEJlZm9yZVtpXSk7XG4gICAgfVxuXG4gICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgIGludGVybmFscy5jb25uZWN0VHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHsuLi4oIU5vZGV8c3RyaW5nKX0gbm9kZXNcbiAgICovXG4gIGRlc3RpbmF0aW9uWydhZnRlciddID0gZnVuY3Rpb24oLi4ubm9kZXMpIHtcbiAgICAvLyBUT0RPOiBGaXggdGhpcyBmb3Igd2hlbiBvbmUgb2YgYG5vZGVzYCBpcyBhIERvY3VtZW50RnJhZ21lbnQhXG4gICAgY29uc3QgY29ubmVjdGVkQmVmb3JlID0gLyoqIEB0eXBlIHshQXJyYXk8IU5vZGU+fSAqLyAobm9kZXMuZmlsdGVyKG5vZGUgPT4ge1xuICAgICAgLy8gRG9jdW1lbnRGcmFnbWVudHMgYXJlIG5vdCBjb25uZWN0ZWQgYW5kIHdpbGwgbm90IGJlIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBOb2RlICYmIFV0aWxpdGllcy5pc0Nvbm5lY3RlZChub2RlKTtcbiAgICB9KSk7XG5cbiAgICBidWlsdEluLmFmdGVyLmFwcGx5KHRoaXMsIG5vZGVzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ubmVjdGVkQmVmb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRlcm5hbHMuZGlzY29ubmVjdFRyZWUoY29ubmVjdGVkQmVmb3JlW2ldKTtcbiAgICB9XG5cbiAgICBpZiAoVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gey4uLighTm9kZXxzdHJpbmcpfSBub2Rlc1xuICAgKi9cbiAgZGVzdGluYXRpb25bJ3JlcGxhY2VXaXRoJ10gPSBmdW5jdGlvbiguLi5ub2Rlcykge1xuICAgIC8vIFRPRE86IEZpeCB0aGlzIGZvciB3aGVuIG9uZSBvZiBgbm9kZXNgIGlzIGEgRG9jdW1lbnRGcmFnbWVudCFcbiAgICBjb25zdCBjb25uZWN0ZWRCZWZvcmUgPSAvKiogQHR5cGUgeyFBcnJheTwhTm9kZT59ICovIChub2Rlcy5maWx0ZXIobm9kZSA9PiB7XG4gICAgICAvLyBEb2N1bWVudEZyYWdtZW50cyBhcmUgbm90IGNvbm5lY3RlZCBhbmQgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGxpc3QuXG4gICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE5vZGUgJiYgVXRpbGl0aWVzLmlzQ29ubmVjdGVkKG5vZGUpO1xuICAgIH0pKTtcblxuICAgIGNvbnN0IHdhc0Nvbm5lY3RlZCA9IFV0aWxpdGllcy5pc0Nvbm5lY3RlZCh0aGlzKTtcblxuICAgIGJ1aWx0SW4ucmVwbGFjZVdpdGguYXBwbHkodGhpcywgbm9kZXMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25uZWN0ZWRCZWZvcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZShjb25uZWN0ZWRCZWZvcmVbaV0pO1xuICAgIH1cblxuICAgIGlmICh3YXNDb25uZWN0ZWQpIHtcbiAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZSh0aGlzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuY29ubmVjdFRyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZGVzdGluYXRpb25bJ3JlbW92ZSddID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgd2FzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKHRoaXMpO1xuXG4gICAgYnVpbHRJbi5yZW1vdmUuY2FsbCh0aGlzKTtcblxuICAgIGlmICh3YXNDb25uZWN0ZWQpIHtcbiAgICAgIGludGVybmFscy5kaXNjb25uZWN0VHJlZSh0aGlzKTtcbiAgICB9XG4gIH07XG59O1xuIiwiaW1wb3J0IE5hdGl2ZSBmcm9tICcuL05hdGl2ZS5qcyc7XG5pbXBvcnQgQ3VzdG9tRWxlbWVudEludGVybmFscyBmcm9tICcuLi9DdXN0b21FbGVtZW50SW50ZXJuYWxzLmpzJztcbmltcG9ydCBDRVN0YXRlIGZyb20gJy4uL0N1c3RvbUVsZW1lbnRTdGF0ZS5qcyc7XG5pbXBvcnQgKiBhcyBVdGlsaXRpZXMgZnJvbSAnLi4vVXRpbGl0aWVzLmpzJztcblxuaW1wb3J0IFBhdGNoUGFyZW50Tm9kZSBmcm9tICcuL0ludGVyZmFjZS9QYXJlbnROb2RlLmpzJztcbmltcG9ydCBQYXRjaENoaWxkTm9kZSBmcm9tICcuL0ludGVyZmFjZS9DaGlsZE5vZGUuanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7IUN1c3RvbUVsZW1lbnRJbnRlcm5hbHN9IGludGVybmFsc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnRlcm5hbHMpIHtcbiAgaWYgKE5hdGl2ZS5FbGVtZW50X2F0dGFjaFNoYWRvdykge1xuICAgIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChFbGVtZW50LnByb3RvdHlwZSwgJ2F0dGFjaFNoYWRvdycsXG4gICAgICAvKipcbiAgICAgICAqIEB0aGlzIHtFbGVtZW50fVxuICAgICAgICogQHBhcmFtIHshe21vZGU6IHN0cmluZ319IGluaXRcbiAgICAgICAqIEByZXR1cm4ge1NoYWRvd1Jvb3R9XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uKGluaXQpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IE5hdGl2ZS5FbGVtZW50X2F0dGFjaFNoYWRvdy5jYWxsKHRoaXMsIGluaXQpO1xuICAgICAgICB0aGlzLl9fQ0Vfc2hhZG93Um9vdCA9IHNoYWRvd1Jvb3Q7XG4gICAgICAgIHJldHVybiBzaGFkb3dSb290O1xuICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKCdDdXN0b20gRWxlbWVudHM6IGBFbGVtZW50I2F0dGFjaFNoYWRvd2Agd2FzIG5vdCBwYXRjaGVkLicpO1xuICB9XG5cblxuICBmdW5jdGlvbiBwYXRjaF9pbm5lckhUTUwoZGVzdGluYXRpb24sIGJhc2VEZXNjcmlwdG9yKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3RpbmF0aW9uLCAnaW5uZXJIVE1MJywge1xuICAgICAgZW51bWVyYWJsZTogYmFzZURlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogYmFzZURlc2NyaXB0b3IuZ2V0LFxuICAgICAgc2V0OiAvKiogQHRoaXMge0VsZW1lbnR9ICovIGZ1bmN0aW9uKGh0bWxTdHJpbmcpIHtcbiAgICAgICAgY29uc3QgaXNDb25uZWN0ZWQgPSBVdGlsaXRpZXMuaXNDb25uZWN0ZWQodGhpcyk7XG5cbiAgICAgICAgLy8gTk9URTogSW4gSUUxMSwgd2hlbiB1c2luZyB0aGUgbmF0aXZlIGBpbm5lckhUTUxgIHNldHRlciwgYWxsIG5vZGVzXG4gICAgICAgIC8vIHRoYXQgd2VyZSBwcmV2aW91c2x5IGRlc2NlbmRhbnRzIG9mIHRoZSBjb250ZXh0IGVsZW1lbnQgaGF2ZSBhbGwgb2ZcbiAgICAgICAgLy8gdGhlaXIgY2hpbGRyZW4gcmVtb3ZlZCBhcyBwYXJ0IG9mIHRoZSBzZXQgLSB0aGUgZW50aXJlIHN1YnRyZWUgaXNcbiAgICAgICAgLy8gJ2Rpc2Fzc2VtYmxlZCcuIFRoaXMgd29yayBhcm91bmQgd2Fsa3MgdGhlIHN1YnRyZWUgKmJlZm9yZSogdXNpbmcgdGhlXG4gICAgICAgIC8vIG5hdGl2ZSBzZXR0ZXIuXG4gICAgICAgIC8qKiBAdHlwZSB7IUFycmF5PCFFbGVtZW50Pnx1bmRlZmluZWR9ICovXG4gICAgICAgIGxldCByZW1vdmVkRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgICAgIHJlbW92ZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICAgIFV0aWxpdGllcy53YWxrRGVlcERlc2NlbmRhbnRFbGVtZW50cyh0aGlzLCBlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIHJlbW92ZWRFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYmFzZURlc2NyaXB0b3Iuc2V0LmNhbGwodGhpcywgaHRtbFN0cmluZyk7XG5cbiAgICAgICAgaWYgKHJlbW92ZWRFbGVtZW50cykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3ZlZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVtb3ZlZEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuX19DRV9zdGF0ZSA9PT0gQ0VTdGF0ZS5jdXN0b20pIHtcbiAgICAgICAgICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgY3JlYXRlIGN1c3RvbSBlbGVtZW50cyBpZiB0aGlzIGVsZW1lbnQncyBvd25lciBkb2N1bWVudCBpc1xuICAgICAgICAvLyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdHJ5LlxuICAgICAgICBpZiAoIXRoaXMub3duZXJEb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5KSB7XG4gICAgICAgICAgaW50ZXJuYWxzLnBhdGNoVHJlZSh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnRlcm5hbHMucGF0Y2hBbmRVcGdyYWRlVHJlZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHRtbFN0cmluZztcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBpZiAoTmF0aXZlLkVsZW1lbnRfaW5uZXJIVE1MICYmIE5hdGl2ZS5FbGVtZW50X2lubmVySFRNTC5nZXQpIHtcbiAgICBwYXRjaF9pbm5lckhUTUwoRWxlbWVudC5wcm90b3R5cGUsIE5hdGl2ZS5FbGVtZW50X2lubmVySFRNTCk7XG4gIH0gZWxzZSBpZiAoTmF0aXZlLkhUTUxFbGVtZW50X2lubmVySFRNTCAmJiBOYXRpdmUuSFRNTEVsZW1lbnRfaW5uZXJIVE1MLmdldCkge1xuICAgIHBhdGNoX2lubmVySFRNTChIVE1MRWxlbWVudC5wcm90b3R5cGUsIE5hdGl2ZS5IVE1MRWxlbWVudF9pbm5lckhUTUwpO1xuICB9IGVsc2Uge1xuXG4gICAgLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gKi9cbiAgICBjb25zdCByYXdEaXYgPSBOYXRpdmUuRG9jdW1lbnRfY3JlYXRlRWxlbWVudC5jYWxsKGRvY3VtZW50LCAnZGl2Jyk7XG5cbiAgICBpbnRlcm5hbHMuYWRkUGF0Y2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgcGF0Y2hfaW5uZXJIVE1MKGVsZW1lbnQsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAvLyBJbXBsZW1lbnRzIGdldHRpbmcgYGlubmVySFRNTGAgYnkgcGVyZm9ybWluZyBhbiB1bnBhdGNoZWQgYGNsb25lTm9kZWBcbiAgICAgICAgLy8gb2YgdGhlIGVsZW1lbnQgYW5kIHJldHVybmluZyB0aGUgcmVzdWx0aW5nIGVsZW1lbnQncyBgaW5uZXJIVE1MYC5cbiAgICAgICAgLy8gVE9ETzogSXMgdGhpcyB0b28gZXhwZW5zaXZlP1xuICAgICAgICBnZXQ6IC8qKiBAdGhpcyB7RWxlbWVudH0gKi8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIE5hdGl2ZS5Ob2RlX2Nsb25lTm9kZS5jYWxsKHRoaXMsIHRydWUpLmlubmVySFRNTDtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gSW1wbGVtZW50cyBzZXR0aW5nIGBpbm5lckhUTUxgIGJ5IGNyZWF0aW5nIGFuIHVucGF0Y2hlZCBlbGVtZW50LFxuICAgICAgICAvLyBzZXR0aW5nIGBpbm5lckhUTUxgIG9mIHRoYXQgZWxlbWVudCBhbmQgcmVwbGFjaW5nIHRoZSB0YXJnZXRcbiAgICAgICAgLy8gZWxlbWVudCdzIGNoaWxkcmVuIHdpdGggdGhvc2Ugb2YgdGhlIHVucGF0Y2hlZCBlbGVtZW50LlxuICAgICAgICBzZXQ6IC8qKiBAdGhpcyB7RWxlbWVudH0gKi8gZnVuY3Rpb24oYXNzaWduZWRWYWx1ZSkge1xuICAgICAgICAgIC8vIE5PVEU6IHJlLXJvdXRlIHRvIGBjb250ZW50YCBmb3IgYHRlbXBsYXRlYCBlbGVtZW50cy5cbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIGRvIHRoaXMgYmVjYXVzZSBgdGVtcGxhdGUuYXBwZW5kQ2hpbGRgIGRvZXMgbm90XG4gICAgICAgICAgLy8gcm91dGUgaW50byBgdGVtcGxhdGUuY29udGVudGAuXG4gICAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5sb2NhbE5hbWUgPT09ICd0ZW1wbGF0ZScgPyAoLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gKi8gKHRoaXMpKS5jb250ZW50IDogdGhpcztcbiAgICAgICAgICByYXdEaXYuaW5uZXJIVE1MID0gYXNzaWduZWRWYWx1ZTtcblxuICAgICAgICAgIHdoaWxlIChjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgTmF0aXZlLk5vZGVfcmVtb3ZlQ2hpbGQuY2FsbChjb250ZW50LCBjb250ZW50LmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aGlsZSAocmF3RGl2LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgTmF0aXZlLk5vZGVfYXBwZW5kQ2hpbGQuY2FsbChjb250ZW50LCByYXdEaXYuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChFbGVtZW50LnByb3RvdHlwZSwgJ3NldEF0dHJpYnV0ZScsXG4gICAgLyoqXG4gICAgICogQHRoaXMge0VsZW1lbnR9XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFsdWVcbiAgICAgKi9cbiAgICBmdW5jdGlvbihuYW1lLCBuZXdWYWx1ZSkge1xuICAgICAgLy8gRmFzdCBwYXRoIGZvciBub24tY3VzdG9tIGVsZW1lbnRzLlxuICAgICAgaWYgKHRoaXMuX19DRV9zdGF0ZSAhPT0gQ0VTdGF0ZS5jdXN0b20pIHtcbiAgICAgICAgcmV0dXJuIE5hdGl2ZS5FbGVtZW50X3NldEF0dHJpYnV0ZS5jYWxsKHRoaXMsIG5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSBOYXRpdmUuRWxlbWVudF9nZXRBdHRyaWJ1dGUuY2FsbCh0aGlzLCBuYW1lKTtcbiAgICAgIE5hdGl2ZS5FbGVtZW50X3NldEF0dHJpYnV0ZS5jYWxsKHRoaXMsIG5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgIG5ld1ZhbHVlID0gTmF0aXZlLkVsZW1lbnRfZ2V0QXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSk7XG4gICAgICBpbnRlcm5hbHMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsIG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbnVsbCk7XG4gICAgfSk7XG5cbiAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKEVsZW1lbnQucHJvdG90eXBlLCAnc2V0QXR0cmlidXRlTlMnLFxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtFbGVtZW50fVxuICAgICAqIEBwYXJhbSB7P3N0cmluZ30gbmFtZXNwYWNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFsdWVcbiAgICAgKi9cbiAgICBmdW5jdGlvbihuYW1lc3BhY2UsIG5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgICAvLyBGYXN0IHBhdGggZm9yIG5vbi1jdXN0b20gZWxlbWVudHMuXG4gICAgICBpZiAodGhpcy5fX0NFX3N0YXRlICE9PSBDRVN0YXRlLmN1c3RvbSkge1xuICAgICAgICByZXR1cm4gTmF0aXZlLkVsZW1lbnRfc2V0QXR0cmlidXRlTlMuY2FsbCh0aGlzLCBuYW1lc3BhY2UsIG5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSBOYXRpdmUuRWxlbWVudF9nZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgICBOYXRpdmUuRWxlbWVudF9zZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgbmV3VmFsdWUgPSBOYXRpdmUuRWxlbWVudF9nZXRBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgICBpbnRlcm5hbHMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsIG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcbiAgICB9KTtcblxuICBVdGlsaXRpZXMuc2V0UHJvcGVydHlVbmNoZWNrZWQoRWxlbWVudC5wcm90b3R5cGUsICdyZW1vdmVBdHRyaWJ1dGUnLFxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtFbGVtZW50fVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICovXG4gICAgZnVuY3Rpb24obmFtZSkge1xuICAgICAgLy8gRmFzdCBwYXRoIGZvciBub24tY3VzdG9tIGVsZW1lbnRzLlxuICAgICAgaWYgKHRoaXMuX19DRV9zdGF0ZSAhPT0gQ0VTdGF0ZS5jdXN0b20pIHtcbiAgICAgICAgcmV0dXJuIE5hdGl2ZS5FbGVtZW50X3JlbW92ZUF0dHJpYnV0ZS5jYWxsKHRoaXMsIG5hbWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IE5hdGl2ZS5FbGVtZW50X2dldEF0dHJpYnV0ZS5jYWxsKHRoaXMsIG5hbWUpO1xuICAgICAgTmF0aXZlLkVsZW1lbnRfcmVtb3ZlQXR0cmlidXRlLmNhbGwodGhpcywgbmFtZSk7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgaW50ZXJuYWxzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLCBuYW1lLCBvbGRWYWx1ZSwgbnVsbCwgbnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgVXRpbGl0aWVzLnNldFByb3BlcnR5VW5jaGVja2VkKEVsZW1lbnQucHJvdG90eXBlLCAncmVtb3ZlQXR0cmlidXRlTlMnLFxuICAgIC8qKlxuICAgICAqIEB0aGlzIHtFbGVtZW50fVxuICAgICAqIEBwYXJhbSB7P3N0cmluZ30gbmFtZXNwYWNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBmdW5jdGlvbihuYW1lc3BhY2UsIG5hbWUpIHtcbiAgICAgIC8vIEZhc3QgcGF0aCBmb3Igbm9uLWN1c3RvbSBlbGVtZW50cy5cbiAgICAgIGlmICh0aGlzLl9fQ0Vfc3RhdGUgIT09IENFU3RhdGUuY3VzdG9tKSB7XG4gICAgICAgIHJldHVybiBOYXRpdmUuRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGVOUy5jYWxsKHRoaXMsIG5hbWVzcGFjZSwgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gTmF0aXZlLkVsZW1lbnRfZ2V0QXR0cmlidXRlTlMuY2FsbCh0aGlzLCBuYW1lc3BhY2UsIG5hbWUpO1xuICAgICAgTmF0aXZlLkVsZW1lbnRfcmVtb3ZlQXR0cmlidXRlTlMuY2FsbCh0aGlzLCBuYW1lc3BhY2UsIG5hbWUpO1xuICAgICAgLy8gSW4gb2xkZXIgYnJvd3NlcnMsIGBFbGVtZW50I2dldEF0dHJpYnV0ZU5TYCBtYXkgcmV0dXJuIHRoZSBlbXB0eSBzdHJpbmdcbiAgICAgIC8vIGluc3RlYWQgb2YgbnVsbCBpZiB0aGUgYXR0cmlidXRlIGRvZXMgbm90IGV4aXN0LiBGb3IgZGV0YWlscywgc2VlO1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvZ2V0QXR0cmlidXRlTlMjTm90ZXNcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gTmF0aXZlLkVsZW1lbnRfZ2V0QXR0cmlidXRlTlMuY2FsbCh0aGlzLCBuYW1lc3BhY2UsIG5hbWUpO1xuICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICBpbnRlcm5hbHMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsIG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgbmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gIGZ1bmN0aW9uIHBhdGNoX2luc2VydEFkamFjZW50RWxlbWVudChkZXN0aW5hdGlvbiwgYmFzZU1ldGhvZCkge1xuICAgIFV0aWxpdGllcy5zZXRQcm9wZXJ0eVVuY2hlY2tlZChkZXN0aW5hdGlvbiwgJ2luc2VydEFkamFjZW50RWxlbWVudCcsXG4gICAgICAvKipcbiAgICAgICAqIEB0aGlzIHtFbGVtZW50fVxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHdoZXJlXG4gICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50XG4gICAgICAgKiBAcmV0dXJuIHs/RWxlbWVudH1cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24od2hlcmUsIGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgd2FzQ29ubmVjdGVkID0gVXRpbGl0aWVzLmlzQ29ubmVjdGVkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpbnNlcnRlZEVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICAgIChiYXNlTWV0aG9kLmNhbGwodGhpcywgd2hlcmUsIGVsZW1lbnQpKTtcblxuICAgICAgICBpZiAod2FzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgaW50ZXJuYWxzLmRpc2Nvbm5lY3RUcmVlKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWxpdGllcy5pc0Nvbm5lY3RlZChpbnNlcnRlZEVsZW1lbnQpKSB7XG4gICAgICAgICAgaW50ZXJuYWxzLmNvbm5lY3RUcmVlKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnNlcnRlZEVsZW1lbnQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIGlmIChOYXRpdmUuSFRNTEVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50KSB7XG4gICAgcGF0Y2hfaW5zZXJ0QWRqYWNlbnRFbGVtZW50KEhUTUxFbGVtZW50LnByb3RvdHlwZSwgTmF0aXZlLkhUTUxFbGVtZW50X2luc2VydEFkamFjZW50RWxlbWVudCk7XG4gIH0gZWxzZSBpZiAoTmF0aXZlLkVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50KSB7XG4gICAgcGF0Y2hfaW5zZXJ0QWRqYWNlbnRFbGVtZW50KEVsZW1lbnQucHJvdG90eXBlLCBOYXRpdmUuRWxlbWVudF9pbnNlcnRBZGphY2VudEVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2FybignQ3VzdG9tIEVsZW1lbnRzOiBgRWxlbWVudCNpbnNlcnRBZGphY2VudEVsZW1lbnRgIHdhcyBub3QgcGF0Y2hlZC4nKTtcbiAgfVxuXG5cbiAgUGF0Y2hQYXJlbnROb2RlKGludGVybmFscywgRWxlbWVudC5wcm90b3R5cGUsIHtcbiAgICBwcmVwZW5kOiBOYXRpdmUuRWxlbWVudF9wcmVwZW5kLFxuICAgIGFwcGVuZDogTmF0aXZlLkVsZW1lbnRfYXBwZW5kLFxuICB9KTtcblxuICBQYXRjaENoaWxkTm9kZShpbnRlcm5hbHMsIEVsZW1lbnQucHJvdG90eXBlLCB7XG4gICAgYmVmb3JlOiBOYXRpdmUuRWxlbWVudF9iZWZvcmUsXG4gICAgYWZ0ZXI6IE5hdGl2ZS5FbGVtZW50X2FmdGVyLFxuICAgIHJlcGxhY2VXaXRoOiBOYXRpdmUuRWxlbWVudF9yZXBsYWNlV2l0aCxcbiAgICByZW1vdmU6IE5hdGl2ZS5FbGVtZW50X3JlbW92ZSxcbiAgfSk7XG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCBDdXN0b21FbGVtZW50SW50ZXJuYWxzIGZyb20gJy4vQ3VzdG9tRWxlbWVudEludGVybmFscy5qcyc7XG5pbXBvcnQgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5IGZyb20gJy4vQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LmpzJztcblxuaW1wb3J0IFBhdGNoSFRNTEVsZW1lbnQgZnJvbSAnLi9QYXRjaC9IVE1MRWxlbWVudC5qcyc7XG5pbXBvcnQgUGF0Y2hEb2N1bWVudCBmcm9tICcuL1BhdGNoL0RvY3VtZW50LmpzJztcbmltcG9ydCBQYXRjaE5vZGUgZnJvbSAnLi9QYXRjaC9Ob2RlLmpzJztcbmltcG9ydCBQYXRjaEVsZW1lbnQgZnJvbSAnLi9QYXRjaC9FbGVtZW50LmpzJztcblxuY29uc3QgcHJpb3JDdXN0b21FbGVtZW50cyA9IHdpbmRvd1snY3VzdG9tRWxlbWVudHMnXTtcblxuaWYgKCFwcmlvckN1c3RvbUVsZW1lbnRzIHx8XG4gICAgIHByaW9yQ3VzdG9tRWxlbWVudHNbJ2ZvcmNlUG9seWZpbGwnXSB8fFxuICAgICAodHlwZW9mIHByaW9yQ3VzdG9tRWxlbWVudHNbJ2RlZmluZSddICE9ICdmdW5jdGlvbicpIHx8XG4gICAgICh0eXBlb2YgcHJpb3JDdXN0b21FbGVtZW50c1snZ2V0J10gIT0gJ2Z1bmN0aW9uJykpIHtcbiAgLyoqIEB0eXBlIHshQ3VzdG9tRWxlbWVudEludGVybmFsc30gKi9cbiAgY29uc3QgaW50ZXJuYWxzID0gbmV3IEN1c3RvbUVsZW1lbnRJbnRlcm5hbHMoKTtcblxuICBQYXRjaEhUTUxFbGVtZW50KGludGVybmFscyk7XG4gIFBhdGNoRG9jdW1lbnQoaW50ZXJuYWxzKTtcbiAgUGF0Y2hOb2RlKGludGVybmFscyk7XG4gIFBhdGNoRWxlbWVudChpbnRlcm5hbHMpO1xuXG4gIC8vIFRoZSBtYWluIGRvY3VtZW50IGlzIGFsd2F5cyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdHJ5LlxuICBkb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5ID0gdHJ1ZTtcblxuICAvKiogQHR5cGUgeyFDdXN0b21FbGVtZW50UmVnaXN0cnl9ICovXG4gIGNvbnN0IGN1c3RvbUVsZW1lbnRzID0gbmV3IEN1c3RvbUVsZW1lbnRSZWdpc3RyeShpbnRlcm5hbHMpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csICdjdXN0b21FbGVtZW50cycsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3VzdG9tRWxlbWVudHMsXG4gIH0pO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE0IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vLyBAdmVyc2lvbiAwLjcuMjJcbmlmICh0eXBlb2YgV2Vha01hcCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICAgIHZhciBjb3VudGVyID0gRGF0ZS5ub3coKSAlIDFlOTtcbiAgICB2YXIgV2Vha01hcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5uYW1lID0gXCJfX3N0XCIgKyAoTWF0aC5yYW5kb20oKSAqIDFlOSA+Pj4gMCkgKyAoY291bnRlcisrICsgXCJfX1wiKTtcbiAgICB9O1xuICAgIFdlYWtNYXAucHJvdG90eXBlID0ge1xuICAgICAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IGtleVt0aGlzLm5hbWVdO1xuICAgICAgICBpZiAoZW50cnkgJiYgZW50cnlbMF0gPT09IGtleSkgZW50cnlbMV0gPSB2YWx1ZTsgZWxzZSBkZWZpbmVQcm9wZXJ0eShrZXksIHRoaXMubmFtZSwge1xuICAgICAgICAgIHZhbHVlOiBbIGtleSwgdmFsdWUgXSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgZ2V0OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICByZXR1cm4gKGVudHJ5ID0ga2V5W3RoaXMubmFtZV0pICYmIGVudHJ5WzBdID09PSBrZXkgPyBlbnRyeVsxXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBcImRlbGV0ZVwiOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0ga2V5W3RoaXMubmFtZV07XG4gICAgICAgIGlmICghZW50cnkgfHwgZW50cnlbMF0gIT09IGtleSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBlbnRyeVswXSA9IGVudHJ5WzFdID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBoYXM6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgZW50cnkgPSBrZXlbdGhpcy5uYW1lXTtcbiAgICAgICAgaWYgKCFlbnRyeSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gZW50cnlbMF0gPT09IGtleTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5XZWFrTWFwID0gV2Vha01hcDtcbiAgfSkoKTtcbn1cblxuKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBpZiAoZ2xvYmFsLkpzTXV0YXRpb25PYnNlcnZlcikge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgcmVnaXN0cmF0aW9uc1RhYmxlID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIHNldEltbWVkaWF0ZTtcbiAgaWYgKC9UcmlkZW50fEVkZ2UvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICBzZXRJbW1lZGlhdGUgPSBzZXRUaW1lb3V0O1xuICB9IGVsc2UgaWYgKHdpbmRvdy5zZXRJbW1lZGlhdGUpIHtcbiAgICBzZXRJbW1lZGlhdGUgPSB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICB9IGVsc2Uge1xuICAgIHZhciBzZXRJbW1lZGlhdGVRdWV1ZSA9IFtdO1xuICAgIHZhciBzZW50aW5lbCA9IFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUuZGF0YSA9PT0gc2VudGluZWwpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gc2V0SW1tZWRpYXRlUXVldWU7XG4gICAgICAgIHNldEltbWVkaWF0ZVF1ZXVlID0gW107XG4gICAgICAgIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24oZnVuYykge1xuICAgICAgICAgIGZ1bmMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24oZnVuYykge1xuICAgICAgc2V0SW1tZWRpYXRlUXVldWUucHVzaChmdW5jKTtcbiAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShzZW50aW5lbCwgXCIqXCIpO1xuICAgIH07XG4gIH1cbiAgdmFyIGlzU2NoZWR1bGVkID0gZmFsc2U7XG4gIHZhciBzY2hlZHVsZWRPYnNlcnZlcnMgPSBbXTtcbiAgZnVuY3Rpb24gc2NoZWR1bGVDYWxsYmFjayhvYnNlcnZlcikge1xuICAgIHNjaGVkdWxlZE9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICBpZiAoIWlzU2NoZWR1bGVkKSB7XG4gICAgICBpc1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICBzZXRJbW1lZGlhdGUoZGlzcGF0Y2hDYWxsYmFja3MpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB3cmFwSWZOZWVkZWQobm9kZSkge1xuICAgIHJldHVybiB3aW5kb3cuU2hhZG93RE9NUG9seWZpbGwgJiYgd2luZG93LlNoYWRvd0RPTVBvbHlmaWxsLndyYXBJZk5lZWRlZChub2RlKSB8fCBub2RlO1xuICB9XG4gIGZ1bmN0aW9uIGRpc3BhdGNoQ2FsbGJhY2tzKCkge1xuICAgIGlzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgdmFyIG9ic2VydmVycyA9IHNjaGVkdWxlZE9ic2VydmVycztcbiAgICBzY2hlZHVsZWRPYnNlcnZlcnMgPSBbXTtcbiAgICBvYnNlcnZlcnMuc29ydChmdW5jdGlvbihvMSwgbzIpIHtcbiAgICAgIHJldHVybiBvMS51aWRfIC0gbzIudWlkXztcbiAgICB9KTtcbiAgICB2YXIgYW55Tm9uRW1wdHkgPSBmYWxzZTtcbiAgICBvYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbihvYnNlcnZlcikge1xuICAgICAgdmFyIHF1ZXVlID0gb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcbiAgICAgIHJlbW92ZVRyYW5zaWVudE9ic2VydmVyc0ZvcihvYnNlcnZlcik7XG4gICAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIG9ic2VydmVyLmNhbGxiYWNrXyhxdWV1ZSwgb2JzZXJ2ZXIpO1xuICAgICAgICBhbnlOb25FbXB0eSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGFueU5vbkVtcHR5KSBkaXNwYXRjaENhbGxiYWNrcygpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZVRyYW5zaWVudE9ic2VydmVyc0ZvcihvYnNlcnZlcikge1xuICAgIG9ic2VydmVyLm5vZGVzXy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciByZWdpc3RyYXRpb25zID0gcmVnaXN0cmF0aW9uc1RhYmxlLmdldChub2RlKTtcbiAgICAgIGlmICghcmVnaXN0cmF0aW9ucykgcmV0dXJuO1xuICAgICAgcmVnaXN0cmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICBpZiAocmVnaXN0cmF0aW9uLm9ic2VydmVyID09PSBvYnNlcnZlcikgcmVnaXN0cmF0aW9uLnJlbW92ZVRyYW5zaWVudE9ic2VydmVycygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZm9yRWFjaEFuY2VzdG9yQW5kT2JzZXJ2ZXJFbnF1ZXVlUmVjb3JkKHRhcmdldCwgY2FsbGJhY2spIHtcbiAgICBmb3IgKHZhciBub2RlID0gdGFyZ2V0OyBub2RlOyBub2RlID0gbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICB2YXIgcmVnaXN0cmF0aW9ucyA9IHJlZ2lzdHJhdGlvbnNUYWJsZS5nZXQobm9kZSk7XG4gICAgICBpZiAocmVnaXN0cmF0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlZ2lzdHJhdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB2YXIgcmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uc1tqXTtcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IHJlZ2lzdHJhdGlvbi5vcHRpb25zO1xuICAgICAgICAgIGlmIChub2RlICE9PSB0YXJnZXQgJiYgIW9wdGlvbnMuc3VidHJlZSkgY29udGludWU7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGNhbGxiYWNrKG9wdGlvbnMpO1xuICAgICAgICAgIGlmIChyZWNvcmQpIHJlZ2lzdHJhdGlvbi5lbnF1ZXVlKHJlY29yZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIHVpZENvdW50ZXIgPSAwO1xuICBmdW5jdGlvbiBKc011dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrXyA9IGNhbGxiYWNrO1xuICAgIHRoaXMubm9kZXNfID0gW107XG4gICAgdGhpcy5yZWNvcmRzXyA9IFtdO1xuICAgIHRoaXMudWlkXyA9ICsrdWlkQ291bnRlcjtcbiAgfVxuICBKc011dGF0aW9uT2JzZXJ2ZXIucHJvdG90eXBlID0ge1xuICAgIG9ic2VydmU6IGZ1bmN0aW9uKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGFyZ2V0ID0gd3JhcElmTmVlZGVkKHRhcmdldCk7XG4gICAgICBpZiAoIW9wdGlvbnMuY2hpbGRMaXN0ICYmICFvcHRpb25zLmF0dHJpYnV0ZXMgJiYgIW9wdGlvbnMuY2hhcmFjdGVyRGF0YSB8fCBvcHRpb25zLmF0dHJpYnV0ZU9sZFZhbHVlICYmICFvcHRpb25zLmF0dHJpYnV0ZXMgfHwgb3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIgJiYgb3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIubGVuZ3RoICYmICFvcHRpb25zLmF0dHJpYnV0ZXMgfHwgb3B0aW9ucy5jaGFyYWN0ZXJEYXRhT2xkVmFsdWUgJiYgIW9wdGlvbnMuY2hhcmFjdGVyRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoKTtcbiAgICAgIH1cbiAgICAgIHZhciByZWdpc3RyYXRpb25zID0gcmVnaXN0cmF0aW9uc1RhYmxlLmdldCh0YXJnZXQpO1xuICAgICAgaWYgKCFyZWdpc3RyYXRpb25zKSByZWdpc3RyYXRpb25zVGFibGUuc2V0KHRhcmdldCwgcmVnaXN0cmF0aW9ucyA9IFtdKTtcbiAgICAgIHZhciByZWdpc3RyYXRpb247XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdHJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbnNbaV0ub2JzZXJ2ZXIgPT09IHRoaXMpIHtcbiAgICAgICAgICByZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25zW2ldO1xuICAgICAgICAgIHJlZ2lzdHJhdGlvbi5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgICByZWdpc3RyYXRpb24ub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghcmVnaXN0cmF0aW9uKSB7XG4gICAgICAgIHJlZ2lzdHJhdGlvbiA9IG5ldyBSZWdpc3RyYXRpb24odGhpcywgdGFyZ2V0LCBvcHRpb25zKTtcbiAgICAgICAgcmVnaXN0cmF0aW9ucy5wdXNoKHJlZ2lzdHJhdGlvbik7XG4gICAgICAgIHRoaXMubm9kZXNfLnB1c2godGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIHJlZ2lzdHJhdGlvbi5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9LFxuICAgIGRpc2Nvbm5lY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5ub2Rlc18uZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHZhciByZWdpc3RyYXRpb25zID0gcmVnaXN0cmF0aW9uc1RhYmxlLmdldChub2RlKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RyYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHJlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvbnNbaV07XG4gICAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbi5vYnNlcnZlciA9PT0gdGhpcykge1xuICAgICAgICAgICAgcmVnaXN0cmF0aW9uLnJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICAgICAgcmVnaXN0cmF0aW9ucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgICAgdGhpcy5yZWNvcmRzXyA9IFtdO1xuICAgIH0sXG4gICAgdGFrZVJlY29yZHM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvcHlPZlJlY29yZHMgPSB0aGlzLnJlY29yZHNfO1xuICAgICAgdGhpcy5yZWNvcmRzXyA9IFtdO1xuICAgICAgcmV0dXJuIGNvcHlPZlJlY29yZHM7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBNdXRhdGlvblJlY29yZCh0eXBlLCB0YXJnZXQpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuYWRkZWROb2RlcyA9IFtdO1xuICAgIHRoaXMucmVtb3ZlZE5vZGVzID0gW107XG4gICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgIHRoaXMuYXR0cmlidXRlTmFtZSA9IG51bGw7XG4gICAgdGhpcy5hdHRyaWJ1dGVOYW1lc3BhY2UgPSBudWxsO1xuICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICB9XG4gIGZ1bmN0aW9uIGNvcHlNdXRhdGlvblJlY29yZChvcmlnaW5hbCkge1xuICAgIHZhciByZWNvcmQgPSBuZXcgTXV0YXRpb25SZWNvcmQob3JpZ2luYWwudHlwZSwgb3JpZ2luYWwudGFyZ2V0KTtcbiAgICByZWNvcmQuYWRkZWROb2RlcyA9IG9yaWdpbmFsLmFkZGVkTm9kZXMuc2xpY2UoKTtcbiAgICByZWNvcmQucmVtb3ZlZE5vZGVzID0gb3JpZ2luYWwucmVtb3ZlZE5vZGVzLnNsaWNlKCk7XG4gICAgcmVjb3JkLnByZXZpb3VzU2libGluZyA9IG9yaWdpbmFsLnByZXZpb3VzU2libGluZztcbiAgICByZWNvcmQubmV4dFNpYmxpbmcgPSBvcmlnaW5hbC5uZXh0U2libGluZztcbiAgICByZWNvcmQuYXR0cmlidXRlTmFtZSA9IG9yaWdpbmFsLmF0dHJpYnV0ZU5hbWU7XG4gICAgcmVjb3JkLmF0dHJpYnV0ZU5hbWVzcGFjZSA9IG9yaWdpbmFsLmF0dHJpYnV0ZU5hbWVzcGFjZTtcbiAgICByZWNvcmQub2xkVmFsdWUgPSBvcmlnaW5hbC5vbGRWYWx1ZTtcbiAgICByZXR1cm4gcmVjb3JkO1xuICB9XG4gIHZhciBjdXJyZW50UmVjb3JkLCByZWNvcmRXaXRoT2xkVmFsdWU7XG4gIGZ1bmN0aW9uIGdldFJlY29yZCh0eXBlLCB0YXJnZXQpIHtcbiAgICByZXR1cm4gY3VycmVudFJlY29yZCA9IG5ldyBNdXRhdGlvblJlY29yZCh0eXBlLCB0YXJnZXQpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFJlY29yZFdpdGhPbGRWYWx1ZShvbGRWYWx1ZSkge1xuICAgIGlmIChyZWNvcmRXaXRoT2xkVmFsdWUpIHJldHVybiByZWNvcmRXaXRoT2xkVmFsdWU7XG4gICAgcmVjb3JkV2l0aE9sZFZhbHVlID0gY29weU11dGF0aW9uUmVjb3JkKGN1cnJlbnRSZWNvcmQpO1xuICAgIHJlY29yZFdpdGhPbGRWYWx1ZS5vbGRWYWx1ZSA9IG9sZFZhbHVlO1xuICAgIHJldHVybiByZWNvcmRXaXRoT2xkVmFsdWU7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXJSZWNvcmRzKCkge1xuICAgIGN1cnJlbnRSZWNvcmQgPSByZWNvcmRXaXRoT2xkVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gcmVjb3JkUmVwcmVzZW50c0N1cnJlbnRNdXRhdGlvbihyZWNvcmQpIHtcbiAgICByZXR1cm4gcmVjb3JkID09PSByZWNvcmRXaXRoT2xkVmFsdWUgfHwgcmVjb3JkID09PSBjdXJyZW50UmVjb3JkO1xuICB9XG4gIGZ1bmN0aW9uIHNlbGVjdFJlY29yZChsYXN0UmVjb3JkLCBuZXdSZWNvcmQpIHtcbiAgICBpZiAobGFzdFJlY29yZCA9PT0gbmV3UmVjb3JkKSByZXR1cm4gbGFzdFJlY29yZDtcbiAgICBpZiAocmVjb3JkV2l0aE9sZFZhbHVlICYmIHJlY29yZFJlcHJlc2VudHNDdXJyZW50TXV0YXRpb24obGFzdFJlY29yZCkpIHJldHVybiByZWNvcmRXaXRoT2xkVmFsdWU7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gUmVnaXN0cmF0aW9uKG9ic2VydmVyLCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnRyYW5zaWVudE9ic2VydmVkTm9kZXMgPSBbXTtcbiAgfVxuICBSZWdpc3RyYXRpb24ucHJvdG90eXBlID0ge1xuICAgIGVucXVldWU6IGZ1bmN0aW9uKHJlY29yZCkge1xuICAgICAgdmFyIHJlY29yZHMgPSB0aGlzLm9ic2VydmVyLnJlY29yZHNfO1xuICAgICAgdmFyIGxlbmd0aCA9IHJlY29yZHMubGVuZ3RoO1xuICAgICAgaWYgKHJlY29yZHMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgbGFzdFJlY29yZCA9IHJlY29yZHNbbGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciByZWNvcmRUb1JlcGxhY2VMYXN0ID0gc2VsZWN0UmVjb3JkKGxhc3RSZWNvcmQsIHJlY29yZCk7XG4gICAgICAgIGlmIChyZWNvcmRUb1JlcGxhY2VMYXN0KSB7XG4gICAgICAgICAgcmVjb3Jkc1tsZW5ndGggLSAxXSA9IHJlY29yZFRvUmVwbGFjZUxhc3Q7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY2hlZHVsZUNhbGxiYWNrKHRoaXMub2JzZXJ2ZXIpO1xuICAgICAgfVxuICAgICAgcmVjb3Jkc1tsZW5ndGhdID0gcmVjb3JkO1xuICAgIH0sXG4gICAgYWRkTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzXyh0aGlzLnRhcmdldCk7XG4gICAgfSxcbiAgICBhZGRMaXN0ZW5lcnNfOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGlmIChvcHRpb25zLmF0dHJpYnV0ZXMpIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUF0dHJNb2RpZmllZFwiLCB0aGlzLCB0cnVlKTtcbiAgICAgIGlmIChvcHRpb25zLmNoYXJhY3RlckRhdGEpIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNoYXJhY3RlckRhdGFNb2RpZmllZFwiLCB0aGlzLCB0cnVlKTtcbiAgICAgIGlmIChvcHRpb25zLmNoaWxkTGlzdCkgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiRE9NTm9kZUluc2VydGVkXCIsIHRoaXMsIHRydWUpO1xuICAgICAgaWYgKG9wdGlvbnMuY2hpbGRMaXN0IHx8IG9wdGlvbnMuc3VidHJlZSkgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiRE9NTm9kZVJlbW92ZWRcIiwgdGhpcywgdHJ1ZSk7XG4gICAgfSxcbiAgICByZW1vdmVMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnNfKHRoaXMudGFyZ2V0KTtcbiAgICB9LFxuICAgIHJlbW92ZUxpc3RlbmVyc186IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMuYXR0cmlidXRlcykgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQXR0ck1vZGlmaWVkXCIsIHRoaXMsIHRydWUpO1xuICAgICAgaWYgKG9wdGlvbnMuY2hhcmFjdGVyRGF0YSkgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ2hhcmFjdGVyRGF0YU1vZGlmaWVkXCIsIHRoaXMsIHRydWUpO1xuICAgICAgaWYgKG9wdGlvbnMuY2hpbGRMaXN0KSBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Ob2RlSW5zZXJ0ZWRcIiwgdGhpcywgdHJ1ZSk7XG4gICAgICBpZiAob3B0aW9ucy5jaGlsZExpc3QgfHwgb3B0aW9ucy5zdWJ0cmVlKSBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Ob2RlUmVtb3ZlZFwiLCB0aGlzLCB0cnVlKTtcbiAgICB9LFxuICAgIGFkZFRyYW5zaWVudE9ic2VydmVyOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICBpZiAobm9kZSA9PT0gdGhpcy50YXJnZXQpIHJldHVybjtcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzXyhub2RlKTtcbiAgICAgIHRoaXMudHJhbnNpZW50T2JzZXJ2ZWROb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgdmFyIHJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zVGFibGUuZ2V0KG5vZGUpO1xuICAgICAgaWYgKCFyZWdpc3RyYXRpb25zKSByZWdpc3RyYXRpb25zVGFibGUuc2V0KG5vZGUsIHJlZ2lzdHJhdGlvbnMgPSBbXSk7XG4gICAgICByZWdpc3RyYXRpb25zLnB1c2godGhpcyk7XG4gICAgfSxcbiAgICByZW1vdmVUcmFuc2llbnRPYnNlcnZlcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRyYW5zaWVudE9ic2VydmVkTm9kZXMgPSB0aGlzLnRyYW5zaWVudE9ic2VydmVkTm9kZXM7XG4gICAgICB0aGlzLnRyYW5zaWVudE9ic2VydmVkTm9kZXMgPSBbXTtcbiAgICAgIHRyYW5zaWVudE9ic2VydmVkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzXyhub2RlKTtcbiAgICAgICAgdmFyIHJlZ2lzdHJhdGlvbnMgPSByZWdpc3RyYXRpb25zVGFibGUuZ2V0KG5vZGUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdHJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uc1tpXSA9PT0gdGhpcykge1xuICAgICAgICAgICAgcmVnaXN0cmF0aW9ucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG4gICAgaGFuZGxlRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgIGNhc2UgXCJET01BdHRyTW9kaWZpZWRcIjpcbiAgICAgICAgdmFyIG5hbWUgPSBlLmF0dHJOYW1lO1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gZS5yZWxhdGVkTm9kZS5uYW1lc3BhY2VVUkk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgdmFyIHJlY29yZCA9IG5ldyBnZXRSZWNvcmQoXCJhdHRyaWJ1dGVzXCIsIHRhcmdldCk7XG4gICAgICAgIHJlY29yZC5hdHRyaWJ1dGVOYW1lID0gbmFtZTtcbiAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZU5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gZS5hdHRyQ2hhbmdlID09PSBNdXRhdGlvbkV2ZW50LkFERElUSU9OID8gbnVsbCA6IGUucHJldlZhbHVlO1xuICAgICAgICBmb3JFYWNoQW5jZXN0b3JBbmRPYnNlcnZlckVucXVldWVSZWNvcmQodGFyZ2V0LCBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmF0dHJpYnV0ZXMpIHJldHVybjtcbiAgICAgICAgICBpZiAob3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIgJiYgb3B0aW9ucy5hdHRyaWJ1dGVGaWx0ZXIubGVuZ3RoICYmIG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyLmluZGV4T2YobmFtZSkgPT09IC0xICYmIG9wdGlvbnMuYXR0cmlidXRlRmlsdGVyLmluZGV4T2YobmFtZXNwYWNlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9wdGlvbnMuYXR0cmlidXRlT2xkVmFsdWUpIHJldHVybiBnZXRSZWNvcmRXaXRoT2xkVmFsdWUob2xkVmFsdWUpO1xuICAgICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgIGNhc2UgXCJET01DaGFyYWN0ZXJEYXRhTW9kaWZpZWRcIjpcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgcmVjb3JkID0gZ2V0UmVjb3JkKFwiY2hhcmFjdGVyRGF0YVwiLCB0YXJnZXQpO1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSBlLnByZXZWYWx1ZTtcbiAgICAgICAgZm9yRWFjaEFuY2VzdG9yQW5kT2JzZXJ2ZXJFbnF1ZXVlUmVjb3JkKHRhcmdldCwgZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgIGlmICghb3B0aW9ucy5jaGFyYWN0ZXJEYXRhKSByZXR1cm47XG4gICAgICAgICAgaWYgKG9wdGlvbnMuY2hhcmFjdGVyRGF0YU9sZFZhbHVlKSByZXR1cm4gZ2V0UmVjb3JkV2l0aE9sZFZhbHVlKG9sZFZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICBjYXNlIFwiRE9NTm9kZVJlbW92ZWRcIjpcbiAgICAgICAgdGhpcy5hZGRUcmFuc2llbnRPYnNlcnZlcihlLnRhcmdldCk7XG5cbiAgICAgICBjYXNlIFwiRE9NTm9kZUluc2VydGVkXCI6XG4gICAgICAgIHZhciBjaGFuZ2VkTm9kZSA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgYWRkZWROb2RlcywgcmVtb3ZlZE5vZGVzO1xuICAgICAgICBpZiAoZS50eXBlID09PSBcIkRPTU5vZGVJbnNlcnRlZFwiKSB7XG4gICAgICAgICAgYWRkZWROb2RlcyA9IFsgY2hhbmdlZE5vZGUgXTtcbiAgICAgICAgICByZW1vdmVkTm9kZXMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRlZE5vZGVzID0gW107XG4gICAgICAgICAgcmVtb3ZlZE5vZGVzID0gWyBjaGFuZ2VkTm9kZSBdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2aW91c1NpYmxpbmcgPSBjaGFuZ2VkTm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIHZhciBuZXh0U2libGluZyA9IGNoYW5nZWROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICB2YXIgcmVjb3JkID0gZ2V0UmVjb3JkKFwiY2hpbGRMaXN0XCIsIGUudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgICByZWNvcmQuYWRkZWROb2RlcyA9IGFkZGVkTm9kZXM7XG4gICAgICAgIHJlY29yZC5yZW1vdmVkTm9kZXMgPSByZW1vdmVkTm9kZXM7XG4gICAgICAgIHJlY29yZC5wcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIHJlY29yZC5uZXh0U2libGluZyA9IG5leHRTaWJsaW5nO1xuICAgICAgICBmb3JFYWNoQW5jZXN0b3JBbmRPYnNlcnZlckVucXVldWVSZWNvcmQoZS5yZWxhdGVkTm9kZSwgZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgIGlmICghb3B0aW9ucy5jaGlsZExpc3QpIHJldHVybjtcbiAgICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNsZWFyUmVjb3JkcygpO1xuICAgIH1cbiAgfTtcbiAgZ2xvYmFsLkpzTXV0YXRpb25PYnNlcnZlciA9IEpzTXV0YXRpb25PYnNlcnZlcjtcbiAgaWYgKCFnbG9iYWwuTXV0YXRpb25PYnNlcnZlcikge1xuICAgIGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyID0gSnNNdXRhdGlvbk9ic2VydmVyO1xuICAgIEpzTXV0YXRpb25PYnNlcnZlci5faXNQb2x5ZmlsbGVkID0gdHJ1ZTtcbiAgfVxufSkoc2VsZik7IiwiLypcbkNvcHlyaWdodCAoYykgMjAxMiBCYXJuZXNhbmRub2JsZS5jb20sIGxsYywgRG9uYXZvbiBXZXN0LCBhbmQgRG9tZW5pYyBEZW5pY29sYVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG5OT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFXG5MSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG5PRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbldJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4qL1xuKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgc2V0SW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyhhcmdzKSB7XG4gICAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSBwYXJ0aWFsbHlBcHBsaWVkLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBhY2NlcHRzIHRoZSBzYW1lIGFyZ3VtZW50cyBhcyBzZXRJbW1lZGlhdGUsIGJ1dFxuICAgIC8vIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHJlcXVpcmVzIG5vIGFyZ3VtZW50cy5cbiAgICBmdW5jdGlvbiBwYXJ0aWFsbHlBcHBsaWVkKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAobmV3IEZ1bmN0aW9uKFwiXCIgKyBoYW5kbGVyKSkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHBhcnRpYWxseUFwcGxpZWQocnVuSWZQcmVzZW50LCBoYW5kbGUpLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2soKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhwYXJ0aWFsbHlBcHBsaWVkKHJ1bklmUHJlc2VudCwgaGFuZGxlKSk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBhZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBhZGRGcm9tU2V0SW1tZWRpYXRlQXJndW1lbnRzKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGFkZEZyb21TZXRJbW1lZGlhdGVBcmd1bWVudHMoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocGFydGlhbGx5QXBwbGllZChydW5JZlByZXNlbnQsIGhhbmRsZSksIDApO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHNlbGYpKTtcbiIsIi8vIENhdXRpb246XG4vLyBEbyBub3QgcmVwbGFjZSB0aGlzIGltcG9ydCBzdGF0ZW1lbnQgd2l0aCBjb2Rlcy5cbi8vXG4vLyBJZiB5b3UgcmVwbGFjZSB0aGlzIGltcG9ydCBzdGF0ZW1lbnQgd2l0aCBjb2Rlcyxcbi8vIHRoZSBjb2RlcyB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSBmb2xsb3dpbmcgcG9seWZpbGxzIGFyZSBpbXBvcnRlZFxuLy8gYmVjYXVzZSBpbXBvcnQgc3RhdGVtZW50cyBhcmUgaG9pc3RlZCBkdXJpbmcgY29tcGlsYXRpb24uXG5pbXBvcnQgJy4vcG9seWZpbGwtc3dpdGNoZXMnO1xuXG4vLyBQb2x5ZmlsbCBFQ01BU2NyaXB0IHN0YW5kYXJkIGZlYXR1cmVzIHdpdGggZ2xvYmFsIG5hbWVzcGFjZSBwb2xsdXRpb25cbmltcG9ydCAnY29yZS1qcy9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgJ2NvcmUtanMvZm4vc2V0JztcbmltcG9ydCAnY29yZS1qcy9mbi9tYXAnO1xuXG4vLyBQb2x5ZmlsbCBDdXN0b20gRWxlbWVudHMgdjEgd2l0aCBnbG9iYWwgbmFtZXNwYWNlIHBvbGx1dGlvblxuaW1wb3J0ICdAb25zZW51aS9jdXN0b20tZWxlbWVudHMvc3JjL2N1c3RvbS1lbGVtZW50cyc7XG5cbi8vIFBvbHlmaWxsIE11dGF0aW9uT2JzZXJ2ZXIgd2l0aCBnbG9iYWwgbmFtZXNwYWNlIHBvbGx1dGlvblxuaW1wb3J0ICcuL011dGF0aW9uT2JzZXJ2ZXJAMC43LjIyL011dGF0aW9uT2JzZXJ2ZXIuanMnO1xuXG4vLyBQb2x5ZmlsbCBzZXRJbW1lZGlhdGUgd2l0aCBnbG9iYWwgbmFtZXNwYWNlIHBvbGx1dGlvblxuaW1wb3J0ICcuL3NldEltbWVkaWF0ZUAxLjAuMittb2Qvc2V0SW1tZWRpYXRlLmpzJztcbiIsIjsoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIEBwcmVzZXJ2ZSBGYXN0Q2xpY2s6IHBvbHlmaWxsIHRvIHJlbW92ZSBjbGljayBkZWxheXMgb24gYnJvd3NlcnMgd2l0aCB0b3VjaCBVSXMuXG5cdCAqXG5cdCAqIEBjb2RpbmdzdGFuZGFyZCBmdGxhYnMtanN2MlxuXHQgKiBAY29weXJpZ2h0IFRoZSBGaW5hbmNpYWwgVGltZXMgTGltaXRlZCBbQWxsIFJpZ2h0cyBSZXNlcnZlZF1cblx0ICogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKHNlZSBMSUNFTlNFLnR4dClcblx0ICovXG5cblx0Lypqc2xpbnQgYnJvd3Nlcjp0cnVlLCBub2RlOnRydWUqL1xuXHQvKmdsb2JhbCBkZWZpbmUsIEV2ZW50LCBOb2RlKi9cblxuXG5cdC8qKlxuXHQgKiBJbnN0YW50aWF0ZSBmYXN0LWNsaWNraW5nIGxpc3RlbmVycyBvbiB0aGUgc3BlY2lmaWVkIGxheWVyLlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzXG5cdCAqL1xuXHRmdW5jdGlvbiBGYXN0Q2xpY2sobGF5ZXIsIG9wdGlvbnMpIHtcblx0XHR2YXIgb2xkT25DbGljaztcblxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogV2hldGhlciBhIGNsaWNrIGlzIGN1cnJlbnRseSBiZWluZyB0cmFja2VkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdCAqL1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaW1lc3RhbXAgZm9yIHdoZW4gY2xpY2sgdHJhY2tpbmcgc3RhcnRlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGVsZW1lbnQgYmVpbmcgdHJhY2tlZCBmb3IgYSBjbGljay5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIEV2ZW50VGFyZ2V0XG5cdFx0ICovXG5cdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblxuXG5cdFx0LyoqXG5cdFx0ICogWC1jb29yZGluYXRlIG9mIHRvdWNoIHN0YXJ0IGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaFN0YXJ0WCA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFktY29vcmRpbmF0ZSBvZiB0b3VjaCBzdGFydCBldmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hTdGFydFkgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBJRCBvZiB0aGUgbGFzdCB0b3VjaCwgcmV0cmlldmVkIGZyb20gVG91Y2guaWRlbnRpZmllci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMubGFzdFRvdWNoSWRlbnRpZmllciA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRvdWNobW92ZSBib3VuZGFyeSwgYmV5b25kIHdoaWNoIGEgY2xpY2sgd2lsbCBiZSBjYW5jZWxsZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoQm91bmRhcnkgPSBvcHRpb25zLnRvdWNoQm91bmRhcnkgfHwgMTA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBGYXN0Q2xpY2sgbGF5ZXIuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBFbGVtZW50XG5cdFx0ICovXG5cdFx0dGhpcy5sYXllciA9IGxheWVyO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIG1pbmltdW0gdGltZSBiZXR3ZWVuIHRhcCh0b3VjaHN0YXJ0IGFuZCB0b3VjaGVuZCkgZXZlbnRzXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRhcERlbGF5ID0gb3B0aW9ucy50YXBEZWxheSB8fCAyMDA7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbWF4aW11bSB0aW1lIGZvciBhIHRhcFxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50YXBUaW1lb3V0ID0gb3B0aW9ucy50YXBUaW1lb3V0IHx8IDcwMDtcblxuXHRcdGlmIChGYXN0Q2xpY2subm90TmVlZGVkKGxheWVyKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIEFuZHJvaWQgZG9uJ3QgaGF2ZSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuXHRcdGZ1bmN0aW9uIGJpbmQobWV0aG9kLCBjb250ZXh0KSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBtZXRob2QuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTsgfTtcblx0XHR9XG5cblxuXHRcdHZhciBtZXRob2RzID0gWydvbk1vdXNlJywgJ29uQ2xpY2snLCAnb25Ub3VjaFN0YXJ0JywgJ29uVG91Y2hNb3ZlJywgJ29uVG91Y2hFbmQnLCAnb25Ub3VjaENhbmNlbCddO1xuXHRcdHZhciBjb250ZXh0ID0gdGhpcztcblx0XHRmb3IgKHZhciBpID0gMCwgbCA9IG1ldGhvZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRjb250ZXh0W21ldGhvZHNbaV1dID0gYmluZChjb250ZXh0W21ldGhvZHNbaV1dLCBjb250ZXh0KTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdXAgZXZlbnQgaGFuZGxlcnMgYXMgcmVxdWlyZWRcblx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdH1cblxuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMub25Ub3VjaENhbmNlbCwgZmFsc2UpO1xuXG5cdFx0Ly8gSGFjayBpcyByZXF1aXJlZCBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IEV2ZW50I3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoZS5nLiBBbmRyb2lkIDIpXG5cdFx0Ly8gd2hpY2ggaXMgaG93IEZhc3RDbGljayBub3JtYWxseSBzdG9wcyBjbGljayBldmVudHMgYnViYmxpbmcgdG8gY2FsbGJhY2tzIHJlZ2lzdGVyZWQgb24gdGhlIEZhc3RDbGlja1xuXHRcdC8vIGxheWVyIHdoZW4gdGhleSBhcmUgY2FuY2VsbGVkLlxuXHRcdGlmICghRXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG5cdFx0XHRcdHZhciBybXYgPSBOb2RlLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xuXHRcdFx0XHRcdHJtdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjay5oaWphY2tlZCB8fCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cm12LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG5cdFx0XHRcdHZhciBhZHYgPSBOb2RlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xuXHRcdFx0XHRcdGFkdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjay5oaWphY2tlZCB8fCAoY2FsbGJhY2suaGlqYWNrZWQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdFx0aWYgKCFldmVudC5wcm9wYWdhdGlvblN0b3BwZWQpIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pLCBjYXB0dXJlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhZHYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIElmIGEgaGFuZGxlciBpcyBhbHJlYWR5IGRlY2xhcmVkIGluIHRoZSBlbGVtZW50J3Mgb25jbGljayBhdHRyaWJ1dGUsIGl0IHdpbGwgYmUgZmlyZWQgYmVmb3JlXG5cdFx0Ly8gRmFzdENsaWNrJ3Mgb25DbGljayBoYW5kbGVyLiBGaXggdGhpcyBieSBwdWxsaW5nIG91dCB0aGUgdXNlci1kZWZpbmVkIGhhbmRsZXIgZnVuY3Rpb24gYW5kXG5cdFx0Ly8gYWRkaW5nIGl0IGFzIGxpc3RlbmVyLlxuXHRcdGlmICh0eXBlb2YgbGF5ZXIub25jbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuXG5cdFx0XHQvLyBBbmRyb2lkIGJyb3dzZXIgb24gYXQgbGVhc3QgMy4yIHJlcXVpcmVzIGEgbmV3IHJlZmVyZW5jZSB0byB0aGUgZnVuY3Rpb24gaW4gbGF5ZXIub25jbGlja1xuXHRcdFx0Ly8gLSB0aGUgb2xkIG9uZSB3b24ndCB3b3JrIGlmIHBhc3NlZCB0byBhZGRFdmVudExpc3RlbmVyIGRpcmVjdGx5LlxuXHRcdFx0b2xkT25DbGljayA9IGxheWVyLm9uY2xpY2s7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdG9sZE9uQ2xpY2soZXZlbnQpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0bGF5ZXIub25jbGljayA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogV2luZG93cyBQaG9uZSA4LjEgZmFrZXMgdXNlciBhZ2VudCBzdHJpbmcgdG8gbG9vayBsaWtlIEFuZHJvaWQgYW5kIGlQaG9uZS5cblx0KlxuXHQqIEB0eXBlIGJvb2xlYW5cblx0Ki9cblx0dmFyIGRldmljZUlzV2luZG93c1Bob25lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93cyBQaG9uZVwiKSA+PSAwO1xuXG5cdC8qKlxuXHQgKiBBbmRyb2lkIHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0FuZHJvaWQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDAgJiYgIWRldmljZUlzV2luZG93c1Bob25lO1xuXG5cblx0LyoqXG5cdCAqIGlPUyByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNJT1MgPSAvaVAoYWR8aG9uZXxvZCkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIWRldmljZUlzV2luZG93c1Bob25lO1xuXG5cblx0LyoqXG5cdCAqIGlPUyA0IHJlcXVpcmVzIGFuIGV4Y2VwdGlvbiBmb3Igc2VsZWN0IGVsZW1lbnRzLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNJT1M0ID0gZGV2aWNlSXNJT1MgJiYgKC9PUyA0X1xcZChfXFxkKT8vKS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5cblx0LyoqXG5cdCAqIGlPUyA2LjAtNy4qIHJlcXVpcmVzIHRoZSB0YXJnZXQgZWxlbWVudCB0byBiZSBtYW51YWxseSBkZXJpdmVkXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQgPSBkZXZpY2VJc0lPUyAmJiAoL09TIFs2LTddX1xcZC8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblx0LyoqXG5cdCAqIEJsYWNrQmVycnkgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzQmxhY2tCZXJyeTEwID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdCQjEwJykgPiAwO1xuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGVsZW1lbnQgcmVxdWlyZXMgYSBuYXRpdmUgY2xpY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0IFRhcmdldCBET00gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IG5lZWRzIGEgbmF0aXZlIGNsaWNrXG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm5lZWRzQ2xpY2sgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRzd2l0Y2ggKHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHQvLyBEb24ndCBzZW5kIGEgc3ludGhldGljIGNsaWNrIHRvIGRpc2FibGVkIGlucHV0cyAoaXNzdWUgIzYyKVxuXHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRpZiAodGFyZ2V0LmRpc2FibGVkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdpbnB1dCc6XG5cblx0XHRcdC8vIEZpbGUgaW5wdXRzIG5lZWQgcmVhbCBjbGlja3Mgb24gaU9TIDYgZHVlIHRvIGEgYnJvd3NlciBidWcgKGlzc3VlICM2OClcblx0XHRcdGlmICgoZGV2aWNlSXNJT1MgJiYgdGFyZ2V0LnR5cGUgPT09ICdmaWxlJykgfHwgdGFyZ2V0LmRpc2FibGVkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdsYWJlbCc6XG5cdFx0Y2FzZSAnaWZyYW1lJzogLy8gaU9TOCBob21lc2NyZWVuIGFwcHMgY2FuIHByZXZlbnQgZXZlbnRzIGJ1YmJsaW5nIGludG8gZnJhbWVzXG5cdFx0Y2FzZSAndmlkZW8nOlxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICgvXFxibmVlZHNjbGlja1xcYi8pLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG5cdH07XG5cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgYSBnaXZlbiBlbGVtZW50IHJlcXVpcmVzIGEgY2FsbCB0byBmb2N1cyB0byBzaW11bGF0ZSBjbGljayBpbnRvIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0IFRhcmdldCBET00gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IHJlcXVpcmVzIGEgY2FsbCB0byBmb2N1cyB0byBzaW11bGF0ZSBuYXRpdmUgY2xpY2suXG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm5lZWRzRm9jdXMgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRzd2l0Y2ggKHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdHJldHVybiAhZGV2aWNlSXNBbmRyb2lkO1xuXHRcdGNhc2UgJ2lucHV0Jzpcblx0XHRcdHN3aXRjaCAodGFyZ2V0LnR5cGUpIHtcblx0XHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRjYXNlICdmaWxlJzpcblx0XHRcdGNhc2UgJ2ltYWdlJzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTm8gcG9pbnQgaW4gYXR0ZW1wdGluZyB0byBmb2N1cyBkaXNhYmxlZCBpbnB1dHNcblx0XHRcdHJldHVybiAhdGFyZ2V0LmRpc2FibGVkICYmICF0YXJnZXQucmVhZE9ubHk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAoL1xcYm5lZWRzZm9jdXNcXGIvKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBTZW5kIGEgY2xpY2sgZXZlbnQgdG8gdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuc2VuZENsaWNrID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCwgZXZlbnQpIHtcblx0XHR2YXIgY2xpY2tFdmVudCwgdG91Y2g7XG5cblx0XHQvLyBPbiBzb21lIEFuZHJvaWQgZGV2aWNlcyBhY3RpdmVFbGVtZW50IG5lZWRzIHRvIGJlIGJsdXJyZWQgb3RoZXJ3aXNlIHRoZSBzeW50aGV0aWMgY2xpY2sgd2lsbCBoYXZlIG5vIGVmZmVjdCAoIzI0KVxuXHRcdGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRhcmdldEVsZW1lbnQpIHtcblx0XHRcdGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuXHRcdH1cblxuXHRcdHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHQvLyBTeW50aGVzaXplIGEgY2xpY2sgZXZlbnQsIHdpdGggYW4gZXh0cmEgYXR0cmlidXRlIHNvIGl0IGNhbiBiZSB0cmFja2VkXG5cdFx0Y2xpY2tFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuXHRcdGNsaWNrRXZlbnQuaW5pdE1vdXNlRXZlbnQodGhpcy5kZXRlcm1pbmVFdmVudFR5cGUodGFyZ2V0RWxlbWVudCksIHRydWUsIHRydWUsIHdpbmRvdywgMSwgdG91Y2guc2NyZWVuWCwgdG91Y2guc2NyZWVuWSwgdG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuXHRcdGNsaWNrRXZlbnQuZm9yd2FyZGVkVG91Y2hFdmVudCA9IHRydWU7XG5cdFx0dGFyZ2V0RWxlbWVudC5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xuXHR9O1xuXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZGV0ZXJtaW5lRXZlbnRUeXBlID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXG5cdFx0Ly9Jc3N1ZSAjMTU5OiBBbmRyb2lkIENocm9tZSBTZWxlY3QgQm94IGRvZXMgbm90IG9wZW4gd2l0aCBhIHN5bnRoZXRpYyBjbGljayBldmVudFxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQgJiYgdGFyZ2V0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnKSB7XG5cdFx0XHRyZXR1cm4gJ21vdXNlZG93bic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICdjbGljayc7XG5cdH07XG5cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXHRcdHZhciBsZW5ndGg7XG5cblx0XHQvLyBJc3N1ZSAjMTYwOiBvbiBpT1MgNywgc29tZSBpbnB1dCBlbGVtZW50cyAoZS5nLiBkYXRlIGRhdGV0aW1lIG1vbnRoKSB0aHJvdyBhIHZhZ3VlIFR5cGVFcnJvciBvbiBzZXRTZWxlY3Rpb25SYW5nZS4gVGhlc2UgZWxlbWVudHMgZG9uJ3QgaGF2ZSBhbiBpbnRlZ2VyIHZhbHVlIGZvciB0aGUgc2VsZWN0aW9uU3RhcnQgYW5kIHNlbGVjdGlvbkVuZCBwcm9wZXJ0aWVzLCBidXQgdW5mb3J0dW5hdGVseSB0aGF0IGNhbid0IGJlIHVzZWQgZm9yIGRldGVjdGlvbiBiZWNhdXNlIGFjY2Vzc2luZyB0aGUgcHJvcGVydGllcyBhbHNvIHRocm93cyBhIFR5cGVFcnJvci4gSnVzdCBjaGVjayB0aGUgdHlwZSBpbnN0ZWFkLiBGaWxlZCBhcyBBcHBsZSBidWcgIzE1MTIyNzI0LlxuXHRcdGlmIChkZXZpY2VJc0lPUyAmJiB0YXJnZXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlICYmIHRhcmdldEVsZW1lbnQudHlwZS5pbmRleE9mKCdkYXRlJykgIT09IDAgJiYgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAndGltZScgJiYgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAnbW9udGgnKSB7XG5cdFx0XHRsZW5ndGggPSB0YXJnZXRFbGVtZW50LnZhbHVlLmxlbmd0aDtcblx0XHRcdHRhcmdldEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UobGVuZ3RoLCBsZW5ndGgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmZvY3VzKCk7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgYSBzY3JvbGxhYmxlIGxheWVyIGFuZCBpZiBzbywgc2V0IGEgZmxhZyBvbiBpdC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLnVwZGF0ZVNjcm9sbFBhcmVudCA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQpIHtcblx0XHR2YXIgc2Nyb2xsUGFyZW50LCBwYXJlbnRFbGVtZW50O1xuXG5cdFx0c2Nyb2xsUGFyZW50ID0gdGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cblx0XHQvLyBBdHRlbXB0IHRvIGRpc2NvdmVyIHdoZXRoZXIgdGhlIHRhcmdldCBlbGVtZW50IGlzIGNvbnRhaW5lZCB3aXRoaW4gYSBzY3JvbGxhYmxlIGxheWVyLiBSZS1jaGVjayBpZiB0aGVcblx0XHQvLyB0YXJnZXQgZWxlbWVudCB3YXMgbW92ZWQgdG8gYW5vdGhlciBwYXJlbnQuXG5cdFx0aWYgKCFzY3JvbGxQYXJlbnQgfHwgIXNjcm9sbFBhcmVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSkge1xuXHRcdFx0cGFyZW50RWxlbWVudCA9IHRhcmdldEVsZW1lbnQ7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGlmIChwYXJlbnRFbGVtZW50LnNjcm9sbEhlaWdodCA+IHBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0KSB7XG5cdFx0XHRcdFx0c2Nyb2xsUGFyZW50ID0gcGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudCA9IHBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0fSB3aGlsZSAocGFyZW50RWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Ly8gQWx3YXlzIHVwZGF0ZSB0aGUgc2Nyb2xsIHRvcCB0cmFja2VyIGlmIHBvc3NpYmxlLlxuXHRcdGlmIChzY3JvbGxQYXJlbnQpIHtcblx0XHRcdHNjcm9sbFBhcmVudC5mYXN0Q2xpY2tMYXN0U2Nyb2xsVG9wID0gc2Nyb2xsUGFyZW50LnNjcm9sbFRvcDtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldH0gdGFyZ2V0RWxlbWVudFxuXHQgKiBAcmV0dXJucyB7RWxlbWVudHxFdmVudFRhcmdldH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldCA9IGZ1bmN0aW9uKGV2ZW50VGFyZ2V0KSB7XG5cblx0XHQvLyBPbiBzb21lIG9sZGVyIGJyb3dzZXJzIChub3RhYmx5IFNhZmFyaSBvbiBpT1MgNC4xIC0gc2VlIGlzc3VlICM1NikgdGhlIGV2ZW50IHRhcmdldCBtYXkgYmUgYSB0ZXh0IG5vZGUuXG5cdFx0aWYgKGV2ZW50VGFyZ2V0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuXHRcdFx0cmV0dXJuIGV2ZW50VGFyZ2V0LnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50VGFyZ2V0O1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIHRvdWNoIHN0YXJ0LCByZWNvcmQgdGhlIHBvc2l0aW9uIGFuZCBzY3JvbGwgb2Zmc2V0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgdGFyZ2V0RWxlbWVudCwgdG91Y2gsIHNlbGVjdGlvbjtcblxuXHRcdC8vIElnbm9yZSBtdWx0aXBsZSB0b3VjaGVzLCBvdGhlcndpc2UgcGluY2gtdG8tem9vbSBpcyBwcmV2ZW50ZWQgaWYgYm90aCBmaW5nZXJzIGFyZSBvbiB0aGUgRmFzdENsaWNrIGVsZW1lbnQgKGlzc3VlICMxMTEpLlxuXHRcdGlmIChldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRhcmdldEVsZW1lbnQgPSB0aGlzLmdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQoZXZlbnQudGFyZ2V0KTtcblx0XHR0b3VjaCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF07XG5cblx0XHQvLyBJZ25vcmUgdG91Y2hlcyBvbiBjb250ZW50ZWRpdGFibGUgZWxlbWVudHMgdG8gcHJldmVudCBjb25mbGljdCB3aXRoIHRleHQgc2VsZWN0aW9uLlxuXHRcdC8vIChGb3IgZGV0YWlsczogaHR0cHM6Ly9naXRodWIuY29tL2Z0bGFicy9mYXN0Y2xpY2svcHVsbC8yMTEgKVxuXHRcdGlmICh0YXJnZXRFbGVtZW50LmlzQ29udGVudEVkaXRhYmxlKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoZGV2aWNlSXNJT1MpIHtcblxuXHRcdFx0Ly8gT25seSB0cnVzdGVkIGV2ZW50cyB3aWxsIGRlc2VsZWN0IHRleHQgb24gaU9TIChpc3N1ZSAjNDkpXG5cdFx0XHRzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0XHRpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQgJiYgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdFx0XHQvLyBXZWlyZCB0aGluZ3MgaGFwcGVuIG9uIGlPUyB3aGVuIGFuIGFsZXJ0IG9yIGNvbmZpcm0gZGlhbG9nIGlzIG9wZW5lZCBmcm9tIGEgY2xpY2sgZXZlbnQgY2FsbGJhY2sgKGlzc3VlICMyMyk6XG5cdFx0XHRcdC8vIHdoZW4gdGhlIHVzZXIgbmV4dCB0YXBzIGFueXdoZXJlIGVsc2Ugb24gdGhlIHBhZ2UsIG5ldyB0b3VjaHN0YXJ0IGFuZCB0b3VjaGVuZCBldmVudHMgYXJlIGRpc3BhdGNoZWRcblx0XHRcdFx0Ly8gd2l0aCB0aGUgc2FtZSBpZGVudGlmaWVyIGFzIHRoZSB0b3VjaCBldmVudCB0aGF0IHByZXZpb3VzbHkgdHJpZ2dlcmVkIHRoZSBjbGljayB0aGF0IHRyaWdnZXJlZCB0aGUgYWxlcnQuXG5cdFx0XHRcdC8vIFNhZGx5LCB0aGVyZSBpcyBhbiBpc3N1ZSBvbiBpT1MgNCB0aGF0IGNhdXNlcyBzb21lIG5vcm1hbCB0b3VjaCBldmVudHMgdG8gaGF2ZSB0aGUgc2FtZSBpZGVudGlmaWVyIGFzIGFuXG5cdFx0XHRcdC8vIGltbWVkaWF0ZWx5IHByZWNlZGluZyB0b3VjaCBldmVudCAoaXNzdWUgIzUyKSwgc28gdGhpcyBmaXggaXMgdW5hdmFpbGFibGUgb24gdGhhdCBwbGF0Zm9ybS5cblx0XHRcdFx0Ly8gSXNzdWUgMTIwOiB0b3VjaC5pZGVudGlmaWVyIGlzIDAgd2hlbiBDaHJvbWUgZGV2IHRvb2xzICdFbXVsYXRlIHRvdWNoIGV2ZW50cycgaXMgc2V0IHdpdGggYW4gaU9TIGRldmljZSBVQSBzdHJpbmcsXG5cdFx0XHRcdC8vIHdoaWNoIGNhdXNlcyBhbGwgdG91Y2ggZXZlbnRzIHRvIGJlIGlnbm9yZWQuIEFzIHRoaXMgYmxvY2sgb25seSBhcHBsaWVzIHRvIGlPUywgYW5kIGlPUyBpZGVudGlmaWVycyBhcmUgYWx3YXlzIGxvbmcsXG5cdFx0XHRcdC8vIHJhbmRvbSBpbnRlZ2VycywgaXQncyBzYWZlIHRvIHRvIGNvbnRpbnVlIGlmIHRoZSBpZGVudGlmaWVyIGlzIDAgaGVyZS5cblx0XHRcdFx0aWYgKHRvdWNoLmlkZW50aWZpZXIgJiYgdG91Y2guaWRlbnRpZmllciA9PT0gdGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmxhc3RUb3VjaElkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuXG5cdFx0XHRcdC8vIElmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIGEgc2Nyb2xsYWJsZSBsYXllciAodXNpbmcgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoKSBhbmQ6XG5cdFx0XHRcdC8vIDEpIHRoZSB1c2VyIGRvZXMgYSBmbGluZyBzY3JvbGwgb24gdGhlIHNjcm9sbGFibGUgbGF5ZXJcblx0XHRcdFx0Ly8gMikgdGhlIHVzZXIgc3RvcHMgdGhlIGZsaW5nIHNjcm9sbCB3aXRoIGFub3RoZXIgdGFwXG5cdFx0XHRcdC8vIHRoZW4gdGhlIGV2ZW50LnRhcmdldCBvZiB0aGUgbGFzdCAndG91Y2hlbmQnIGV2ZW50IHdpbGwgYmUgdGhlIGVsZW1lbnQgdGhhdCB3YXMgdW5kZXIgdGhlIHVzZXIncyBmaW5nZXJcblx0XHRcdFx0Ly8gd2hlbiB0aGUgZmxpbmcgc2Nyb2xsIHdhcyBzdGFydGVkLCBjYXVzaW5nIEZhc3RDbGljayB0byBzZW5kIGEgY2xpY2sgZXZlbnQgdG8gdGhhdCBsYXllciAtIHVubGVzcyBhIGNoZWNrXG5cdFx0XHRcdC8vIGlzIG1hZGUgdG8gZW5zdXJlIHRoYXQgYSBwYXJlbnQgbGF5ZXIgd2FzIG5vdCBzY3JvbGxlZCBiZWZvcmUgc2VuZGluZyBhIHN5bnRoZXRpYyBjbGljayAoaXNzdWUgIzQyKS5cblx0XHRcdFx0dGhpcy51cGRhdGVTY3JvbGxQYXJlbnQodGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gdHJ1ZTtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCA9IGV2ZW50LnRpbWVTdGFtcDtcblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50O1xuXG5cdFx0dGhpcy50b3VjaFN0YXJ0WCA9IHRvdWNoLnBhZ2VYO1xuXHRcdHRoaXMudG91Y2hTdGFydFkgPSB0b3VjaC5wYWdlWTtcblxuXHRcdC8vIFByZXZlbnQgcGhhbnRvbSBjbGlja3Mgb24gZmFzdCBkb3VibGUtdGFwIChpc3N1ZSAjMzYpXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpIDwgdGhpcy50YXBEZWxheSAmJiAoZXZlbnQudGltZVN0YW1wIC0gdGhpcy5sYXN0Q2xpY2tUaW1lKSA+IC0xKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEJhc2VkIG9uIGEgdG91Y2htb3ZlIGV2ZW50IG9iamVjdCwgY2hlY2sgd2hldGhlciB0aGUgdG91Y2ggaGFzIG1vdmVkIHBhc3QgYSBib3VuZGFyeSBzaW5jZSBpdCBzdGFydGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUudG91Y2hIYXNNb3ZlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0sIGJvdW5kYXJ5ID0gdGhpcy50b3VjaEJvdW5kYXJ5O1xuXG5cdFx0aWYgKE1hdGguYWJzKHRvdWNoLnBhZ2VYIC0gdGhpcy50b3VjaFN0YXJ0WCkgPiBib3VuZGFyeSB8fCBNYXRoLmFicyh0b3VjaC5wYWdlWSAtIHRoaXMudG91Y2hTdGFydFkpID4gYm91bmRhcnkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIGxhc3QgcG9zaXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSB0b3VjaCBoYXMgbW92ZWQsIGNhbmNlbCB0aGUgY2xpY2sgdHJhY2tpbmdcblx0XHRpZiAodGhpcy50YXJnZXRFbGVtZW50ICE9PSB0aGlzLmdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQoZXZlbnQudGFyZ2V0KSB8fCB0aGlzLnRvdWNoSGFzTW92ZWQoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogQXR0ZW1wdCB0byBmaW5kIHRoZSBsYWJlbGxlZCBjb250cm9sIGZvciB0aGUgZ2l2ZW4gbGFiZWwgZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxIVE1MTGFiZWxFbGVtZW50fSBsYWJlbEVsZW1lbnRcblx0ICogQHJldHVybnMge0VsZW1lbnR8bnVsbH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZmluZENvbnRyb2wgPSBmdW5jdGlvbihsYWJlbEVsZW1lbnQpIHtcblxuXHRcdC8vIEZhc3QgcGF0aCBmb3IgbmV3ZXIgYnJvd3NlcnMgc3VwcG9ydGluZyB0aGUgSFRNTDUgY29udHJvbCBhdHRyaWJ1dGVcblx0XHRpZiAobGFiZWxFbGVtZW50LmNvbnRyb2wgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5jb250cm9sO1xuXHRcdH1cblxuXHRcdC8vIEFsbCBicm93c2VycyB1bmRlciB0ZXN0IHRoYXQgc3VwcG9ydCB0b3VjaCBldmVudHMgYWxzbyBzdXBwb3J0IHRoZSBIVE1MNSBodG1sRm9yIGF0dHJpYnV0ZVxuXHRcdGlmIChsYWJlbEVsZW1lbnQuaHRtbEZvcikge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhYmVsRWxlbWVudC5odG1sRm9yKTtcblx0XHR9XG5cblx0XHQvLyBJZiBubyBmb3IgYXR0cmlidXRlIGV4aXN0cywgYXR0ZW1wdCB0byByZXRyaWV2ZSB0aGUgZmlyc3QgbGFiZWxsYWJsZSBkZXNjZW5kYW50IGVsZW1lbnRcblx0XHQvLyB0aGUgbGlzdCBvZiB3aGljaCBpcyBkZWZpbmVkIGhlcmU6IGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L2Zvcm1zLmh0bWwjY2F0ZWdvcnktbGFiZWxcblx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiwgaW5wdXQ6bm90KFt0eXBlPWhpZGRlbl0pLCBrZXlnZW4sIG1ldGVyLCBvdXRwdXQsIHByb2dyZXNzLCBzZWxlY3QsIHRleHRhcmVhJyk7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggZW5kLCBkZXRlcm1pbmUgd2hldGhlciB0byBzZW5kIGEgY2xpY2sgZXZlbnQgYXQgb25jZS5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBmb3JFbGVtZW50LCB0cmFja2luZ0NsaWNrU3RhcnQsIHRhcmdldFRhZ05hbWUsIHNjcm9sbFBhcmVudCwgdG91Y2gsIHRhcmdldEVsZW1lbnQgPSB0aGlzLnRhcmdldEVsZW1lbnQ7XG5cblx0XHRpZiAoIXRoaXMudHJhY2tpbmdDbGljaykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUHJldmVudCBwaGFudG9tIGNsaWNrcyBvbiBmYXN0IGRvdWJsZS10YXAgKGlzc3VlICMzNilcblx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMubGFzdENsaWNrVGltZSkgPCB0aGlzLnRhcERlbGF5ICYmIChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpID4gLTEpIHtcblx0XHRcdHRoaXMuY2FuY2VsTmV4dENsaWNrID0gdHJ1ZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdGhpcy50cmFja2luZ0NsaWNrU3RhcnQpID4gdGhpcy50YXBUaW1lb3V0KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBSZXNldCB0byBwcmV2ZW50IHdyb25nIGNsaWNrIGNhbmNlbCBvbiBpbnB1dCAoaXNzdWUgIzE1NikuXG5cdFx0dGhpcy5jYW5jZWxOZXh0Q2xpY2sgPSBmYWxzZTtcblxuXHRcdHRoaXMubGFzdENsaWNrVGltZSA9IGV2ZW50LnRpbWVTdGFtcDtcblxuXHRcdHRyYWNraW5nQ2xpY2tTdGFydCA9IHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0O1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gMDtcblxuXHRcdC8vIE9uIHNvbWUgaU9TIGRldmljZXMsIHRoZSB0YXJnZXRFbGVtZW50IHN1cHBsaWVkIHdpdGggdGhlIGV2ZW50IGlzIGludmFsaWQgaWYgdGhlIGxheWVyXG5cdFx0Ly8gaXMgcGVyZm9ybWluZyBhIHRyYW5zaXRpb24gb3Igc2Nyb2xsLCBhbmQgaGFzIHRvIGJlIHJlLWRldGVjdGVkIG1hbnVhbGx5LiBOb3RlIHRoYXRcblx0XHQvLyBmb3IgdGhpcyB0byBmdW5jdGlvbiBjb3JyZWN0bHksIGl0IG11c3QgYmUgY2FsbGVkICphZnRlciogdGhlIGV2ZW50IHRhcmdldCBpcyBjaGVja2VkIVxuXHRcdC8vIFNlZSBpc3N1ZSAjNTc7IGFsc28gZmlsZWQgYXMgcmRhcjovLzEzMDQ4NTg5IC5cblx0XHRpZiAoZGV2aWNlSXNJT1NXaXRoQmFkVGFyZ2V0KSB7XG5cdFx0XHR0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXG5cdFx0XHQvLyBJbiBjZXJ0YWluIGNhc2VzIGFyZ3VtZW50cyBvZiBlbGVtZW50RnJvbVBvaW50IGNhbiBiZSBuZWdhdGl2ZSwgc28gcHJldmVudCBzZXR0aW5nIHRhcmdldEVsZW1lbnQgdG8gbnVsbFxuXHRcdFx0dGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2gucGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQsIHRvdWNoLnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0KSB8fCB0YXJnZXRFbGVtZW50O1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQgPSB0aGlzLnRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHRcdH1cblxuXHRcdHRhcmdldFRhZ05hbWUgPSB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAodGFyZ2V0VGFnTmFtZSA9PT0gJ2xhYmVsJykge1xuXHRcdFx0Zm9yRWxlbWVudCA9IHRoaXMuZmluZENvbnRyb2wodGFyZ2V0RWxlbWVudCk7XG5cdFx0XHRpZiAoZm9yRWxlbWVudCkge1xuXHRcdFx0XHR0aGlzLmZvY3VzKHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGFyZ2V0RWxlbWVudCA9IGZvckVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0aGlzLm5lZWRzRm9jdXModGFyZ2V0RWxlbWVudCkpIHtcblxuXHRcdFx0Ly8gQ2FzZSAxOiBJZiB0aGUgdG91Y2ggc3RhcnRlZCBhIHdoaWxlIGFnbyAoYmVzdCBndWVzcyBpcyAxMDBtcyBiYXNlZCBvbiB0ZXN0cyBmb3IgaXNzdWUgIzM2KSB0aGVuIGZvY3VzIHdpbGwgYmUgdHJpZ2dlcmVkIGFueXdheS4gUmV0dXJuIGVhcmx5IGFuZCB1bnNldCB0aGUgdGFyZ2V0IGVsZW1lbnQgcmVmZXJlbmNlIHNvIHRoYXQgdGhlIHN1YnNlcXVlbnQgY2xpY2sgd2lsbCBiZSBhbGxvd2VkIHRocm91Z2guXG5cdFx0XHQvLyBDYXNlIDI6IFdpdGhvdXQgdGhpcyBleGNlcHRpb24gZm9yIGlucHV0IGVsZW1lbnRzIHRhcHBlZCB3aGVuIHRoZSBkb2N1bWVudCBpcyBjb250YWluZWQgaW4gYW4gaWZyYW1lLCB0aGVuIGFueSBpbnB1dHRlZCB0ZXh0IHdvbid0IGJlIHZpc2libGUgZXZlbiB0aG91Z2ggdGhlIHZhbHVlIGF0dHJpYnV0ZSBpcyB1cGRhdGVkIGFzIHRoZSB1c2VyIHR5cGVzIChpc3N1ZSAjMzcpLlxuXHRcdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0cmFja2luZ0NsaWNrU3RhcnQpID4gMTAwIHx8IChkZXZpY2VJc0lPUyAmJiB3aW5kb3cudG9wICE9PSB3aW5kb3cgJiYgdGFyZ2V0VGFnTmFtZSA9PT0gJ2lucHV0JykpIHtcblx0XHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmZvY3VzKHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0dGhpcy5zZW5kQ2xpY2sodGFyZ2V0RWxlbWVudCwgZXZlbnQpO1xuXG5cdFx0XHQvLyBTZWxlY3QgZWxlbWVudHMgbmVlZCB0aGUgZXZlbnQgdG8gZ28gdGhyb3VnaCBvbiBpT1MgNCwgb3RoZXJ3aXNlIHRoZSBzZWxlY3RvciBtZW51IHdvbid0IG9wZW4uXG5cdFx0XHQvLyBBbHNvIHRoaXMgYnJlYWtzIG9wZW5pbmcgc2VsZWN0cyB3aGVuIFZvaWNlT3ZlciBpcyBhY3RpdmUgb24gaU9TNiwgaU9TNyAoYW5kIHBvc3NpYmx5IG90aGVycylcblx0XHRcdGlmICghZGV2aWNlSXNJT1MgfHwgdGFyZ2V0VGFnTmFtZSAhPT0gJ3NlbGVjdCcpIHtcblx0XHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChkZXZpY2VJc0lPUyAmJiAhZGV2aWNlSXNJT1M0KSB7XG5cblx0XHRcdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgZXZlbnQgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGNvbnRhaW5lZCB3aXRoaW4gYSBwYXJlbnQgbGF5ZXIgdGhhdCB3YXMgc2Nyb2xsZWRcblx0XHRcdC8vIGFuZCB0aGlzIHRhcCBpcyBiZWluZyB1c2VkIHRvIHN0b3AgdGhlIHNjcm9sbGluZyAodXN1YWxseSBpbml0aWF0ZWQgYnkgYSBmbGluZyAtIGlzc3VlICM0MikuXG5cdFx0XHRzY3JvbGxQYXJlbnQgPSB0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblx0XHRcdGlmIChzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50LmZhc3RDbGlja0xhc3RTY3JvbGxUb3AgIT09IHNjcm9sbFBhcmVudC5zY3JvbGxUb3ApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUHJldmVudCB0aGUgYWN0dWFsIGNsaWNrIGZyb20gZ29pbmcgdGhvdWdoIC0gdW5sZXNzIHRoZSB0YXJnZXQgbm9kZSBpcyBtYXJrZWQgYXMgcmVxdWlyaW5nXG5cdFx0Ly8gcmVhbCBjbGlja3Mgb3IgaWYgaXQgaXMgaW4gdGhlIHdoaXRlbGlzdCBpbiB3aGljaCBjYXNlIG9ubHkgbm9uLXByb2dyYW1tYXRpYyBjbGlja3MgYXJlIHBlcm1pdHRlZC5cblx0XHRpZiAoIXRoaXMubmVlZHNDbGljayh0YXJnZXRFbGVtZW50KSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuc2VuZENsaWNrKHRhcmdldEVsZW1lbnQsIGV2ZW50KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggY2FuY2VsLCBzdG9wIHRyYWNraW5nIHRoZSBjbGljay5cblx0ICpcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hDYW5jZWwgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIERldGVybWluZSBtb3VzZSBldmVudHMgd2hpY2ggc2hvdWxkIGJlIHBlcm1pdHRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uTW91c2UgPSBmdW5jdGlvbihldmVudCkge1xuXG5cdFx0Ly8gSWYgYSB0YXJnZXQgZWxlbWVudCB3YXMgbmV2ZXIgc2V0IChiZWNhdXNlIGEgdG91Y2ggZXZlbnQgd2FzIG5ldmVyIGZpcmVkKSBhbGxvdyB0aGUgZXZlbnRcblx0XHRpZiAoIXRoaXMudGFyZ2V0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LmZvcndhcmRlZFRvdWNoRXZlbnQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFByb2dyYW1tYXRpY2FsbHkgZ2VuZXJhdGVkIGV2ZW50cyB0YXJnZXRpbmcgYSBzcGVjaWZpYyBlbGVtZW50IHNob3VsZCBiZSBwZXJtaXR0ZWRcblx0XHRpZiAoIWV2ZW50LmNhbmNlbGFibGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIERlcml2ZSBhbmQgY2hlY2sgdGhlIHRhcmdldCBlbGVtZW50IHRvIHNlZSB3aGV0aGVyIHRoZSBtb3VzZSBldmVudCBuZWVkcyB0byBiZSBwZXJtaXR0ZWQ7XG5cdFx0Ly8gdW5sZXNzIGV4cGxpY2l0bHkgZW5hYmxlZCwgcHJldmVudCBub24tdG91Y2ggY2xpY2sgZXZlbnRzIGZyb20gdHJpZ2dlcmluZyBhY3Rpb25zLFxuXHRcdC8vIHRvIHByZXZlbnQgZ2hvc3QvZG91YmxlY2xpY2tzLlxuXHRcdGlmICghdGhpcy5uZWVkc0NsaWNrKHRoaXMudGFyZ2V0RWxlbWVudCkgfHwgdGhpcy5jYW5jZWxOZXh0Q2xpY2spIHtcblxuXHRcdFx0Ly8gUHJldmVudCBhbnkgdXNlci1hZGRlZCBsaXN0ZW5lcnMgZGVjbGFyZWQgb24gRmFzdENsaWNrIGVsZW1lbnQgZnJvbSBiZWluZyBmaXJlZC5cblx0XHRcdGlmIChldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHtcblx0XHRcdFx0ZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFBhcnQgb2YgdGhlIGhhY2sgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBFdmVudCNzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKGUuZy4gQW5kcm9pZCAyKVxuXHRcdFx0XHRldmVudC5wcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDYW5jZWwgdGhlIGV2ZW50XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbW91c2UgZXZlbnQgaXMgcGVybWl0dGVkLCByZXR1cm4gdHJ1ZSBmb3IgdGhlIGFjdGlvbiB0byBnbyB0aHJvdWdoLlxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIGFjdHVhbCBjbGlja3MsIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYSB0b3VjaC1nZW5lcmF0ZWQgY2xpY2ssIGEgY2xpY2sgYWN0aW9uIG9jY3VycmluZ1xuXHQgKiBuYXR1cmFsbHkgYWZ0ZXIgYSBkZWxheSBhZnRlciBhIHRvdWNoICh3aGljaCBuZWVkcyB0byBiZSBjYW5jZWxsZWQgdG8gYXZvaWQgZHVwbGljYXRpb24pLCBvclxuXHQgKiBhbiBhY3R1YWwgY2xpY2sgd2hpY2ggc2hvdWxkIGJlIHBlcm1pdHRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uQ2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBwZXJtaXR0ZWQ7XG5cblx0XHQvLyBJdCdzIHBvc3NpYmxlIGZvciBhbm90aGVyIEZhc3RDbGljay1saWtlIGxpYnJhcnkgZGVsaXZlcmVkIHdpdGggdGhpcmQtcGFydHkgY29kZSB0byBmaXJlIGEgY2xpY2sgZXZlbnQgYmVmb3JlIEZhc3RDbGljayBkb2VzIChpc3N1ZSAjNDQpLiBJbiB0aGF0IGNhc2UsIHNldCB0aGUgY2xpY2stdHJhY2tpbmcgZmxhZyBiYWNrIHRvIGZhbHNlIGFuZCByZXR1cm4gZWFybHkuIFRoaXMgd2lsbCBjYXVzZSBvblRvdWNoRW5kIHRvIHJldHVybiBlYXJseS5cblx0XHRpZiAodGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBWZXJ5IG9kZCBiZWhhdmlvciBvbiBpT1MgKGlzc3VlICMxOCk6IGlmIGEgc3VibWl0IGVsZW1lbnQgaXMgcHJlc2VudCBpbnNpZGUgYSBmb3JtIGFuZCB0aGUgdXNlciBoaXRzIGVudGVyIGluIHRoZSBpT1Mgc2ltdWxhdG9yIG9yIGNsaWNrcyB0aGUgR28gYnV0dG9uIG9uIHRoZSBwb3AtdXAgT1Mga2V5Ym9hcmQgdGhlIGEga2luZCBvZiAnZmFrZScgY2xpY2sgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCB0aGUgc3VibWl0LXR5cGUgaW5wdXQgZWxlbWVudCBhcyB0aGUgdGFyZ2V0LlxuXHRcdGlmIChldmVudC50YXJnZXQudHlwZSA9PT0gJ3N1Ym1pdCcgJiYgZXZlbnQuZGV0YWlsID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRwZXJtaXR0ZWQgPSB0aGlzLm9uTW91c2UoZXZlbnQpO1xuXG5cdFx0Ly8gT25seSB1bnNldCB0YXJnZXRFbGVtZW50IGlmIHRoZSBjbGljayBpcyBub3QgcGVybWl0dGVkLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgdGhlIGNoZWNrIGZvciAhdGFyZ2V0RWxlbWVudCBpbiBvbk1vdXNlIGZhaWxzIGFuZCB0aGUgYnJvd3NlcidzIGNsaWNrIGRvZXNuJ3QgZ28gdGhyb3VnaC5cblx0XHRpZiAoIXBlcm1pdHRlZCkge1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBJZiBjbGlja3MgYXJlIHBlcm1pdHRlZCwgcmV0dXJuIHRydWUgZm9yIHRoZSBhY3Rpb24gdG8gZ28gdGhyb3VnaC5cblx0XHRyZXR1cm4gcGVybWl0dGVkO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgRmFzdENsaWNrJ3MgZXZlbnQgbGlzdGVuZXJzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBsYXllciA9IHRoaXMubGF5ZXI7XG5cblx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdH1cblxuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMub25Ub3VjaENhbmNlbCwgZmFsc2UpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgRmFzdENsaWNrIGlzIG5lZWRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqL1xuXHRGYXN0Q2xpY2subm90TmVlZGVkID0gZnVuY3Rpb24obGF5ZXIpIHtcblx0XHR2YXIgbWV0YVZpZXdwb3J0O1xuXHRcdHZhciBjaHJvbWVWZXJzaW9uO1xuXHRcdHZhciBibGFja2JlcnJ5VmVyc2lvbjtcblx0XHR2YXIgZmlyZWZveFZlcnNpb247XG5cblx0XHQvLyBEZXZpY2VzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0b3VjaCBkb24ndCBuZWVkIEZhc3RDbGlja1xuXHRcdGlmICh0eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIENocm9tZSB2ZXJzaW9uIC0gemVybyBmb3Igb3RoZXIgYnJvd3NlcnNcblx0XHRjaHJvbWVWZXJzaW9uID0gKygvQ2hyb21lXFwvKFswLTldKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgWywwXSlbMV07XG5cblx0XHRpZiAoY2hyb21lVmVyc2lvbikge1xuXG5cdFx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuXHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0KSB7XG5cdFx0XHRcdFx0Ly8gQ2hyb21lIG9uIEFuZHJvaWQgd2l0aCB1c2VyLXNjYWxhYmxlPVwibm9cIiBkb2Vzbid0IG5lZWQgRmFzdENsaWNrIChpc3N1ZSAjODkpXG5cdFx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydC5jb250ZW50LmluZGV4T2YoJ3VzZXItc2NhbGFibGU9bm8nKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBDaHJvbWUgMzIgYW5kIGFib3ZlIHdpdGggd2lkdGg9ZGV2aWNlLXdpZHRoIG9yIGxlc3MgZG9uJ3QgbmVlZCBGYXN0Q2xpY2tcblx0XHRcdFx0XHRpZiAoY2hyb21lVmVyc2lvbiA+IDMxICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdC8vIENocm9tZSBkZXNrdG9wIGRvZXNuJ3QgbmVlZCBGYXN0Q2xpY2sgKGlzc3VlICMxNSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChkZXZpY2VJc0JsYWNrQmVycnkxMCkge1xuXHRcdFx0YmxhY2tiZXJyeVZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9WZXJzaW9uXFwvKFswLTldKilcXC4oWzAtOV0qKS8pO1xuXG5cdFx0XHQvLyBCbGFja0JlcnJ5IDEwLjMrIGRvZXMgbm90IHJlcXVpcmUgRmFzdGNsaWNrIGxpYnJhcnkuXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZnRsYWJzL2Zhc3RjbGljay9pc3N1ZXMvMjUxXG5cdFx0XHRpZiAoYmxhY2tiZXJyeVZlcnNpb25bMV0gPj0gMTAgJiYgYmxhY2tiZXJyeVZlcnNpb25bMl0gPj0gMykge1xuXHRcdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cblx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydCkge1xuXHRcdFx0XHRcdC8vIHVzZXItc2NhbGFibGU9bm8gZWxpbWluYXRlcyBjbGljayBkZWxheS5cblx0XHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIHdpZHRoPWRldmljZS13aWR0aCAob3IgbGVzcyB0aGFuIGRldmljZS13aWR0aCkgZWxpbWluYXRlcyBjbGljayBkZWxheS5cblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJRTEwIHdpdGggLW1zLXRvdWNoLWFjdGlvbjogbm9uZSBvciBtYW5pcHVsYXRpb24sIHdoaWNoIGRpc2FibGVzIGRvdWJsZS10YXAtdG8tem9vbSAoaXNzdWUgIzk3KVxuXHRcdGlmIChsYXllci5zdHlsZS5tc1RvdWNoQWN0aW9uID09PSAnbm9uZScgfHwgbGF5ZXIuc3R5bGUudG91Y2hBY3Rpb24gPT09ICdtYW5pcHVsYXRpb24nKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBGaXJlZm94IHZlcnNpb24gLSB6ZXJvIGZvciBvdGhlciBicm93c2Vyc1xuXHRcdGZpcmVmb3hWZXJzaW9uID0gKygvRmlyZWZveFxcLyhbMC05XSspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IFssMF0pWzFdO1xuXG5cdFx0aWYgKGZpcmVmb3hWZXJzaW9uID49IDI3KSB7XG5cdFx0XHQvLyBGaXJlZm94IDI3KyBkb2VzIG5vdCBoYXZlIHRhcCBkZWxheSBpZiB0aGUgY29udGVudCBpcyBub3Qgem9vbWFibGUgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD05MjI4OTZcblxuXHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXHRcdFx0aWYgKG1ldGFWaWV3cG9ydCAmJiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElFMTE6IHByZWZpeGVkIC1tcy10b3VjaC1hY3Rpb24gaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBhbmQgaXQncyByZWNvbW1lbmRlZCB0byB1c2Ugbm9uLXByZWZpeGVkIHZlcnNpb25cblx0XHQvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvd2luZG93cy9hcHBzL0hoNzY3MzEzLmFzcHhcblx0XHRpZiAobGF5ZXIuc3R5bGUudG91Y2hBY3Rpb24gPT09ICdub25lJyB8fCBsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ21hbmlwdWxhdGlvbicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBGYWN0b3J5IG1ldGhvZCBmb3IgY3JlYXRpbmcgYSBGYXN0Q2xpY2sgb2JqZWN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gbGF5ZXIgVGhlIGxheWVyIHRvIGxpc3RlbiBvblxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0c1xuXHQgKi9cblx0RmFzdENsaWNrLmF0dGFjaCA9IGZ1bmN0aW9uKGxheWVyLCBvcHRpb25zKSB7XG5cdFx0cmV0dXJuIG5ldyBGYXN0Q2xpY2sobGF5ZXIsIG9wdGlvbnMpO1xuXHR9O1xuXG4gIHdpbmRvdy5GYXN0Q2xpY2sgPSBGYXN0Q2xpY2s7XG59KCkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgREVGQVVMVF9WSUVXUE9SVCA9ICd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLG1heGltdW0tc2NhbGU9MSxtaW5pbXVtLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ubyc7XG5cbiAgdmFyIFZpZXdwb3J0ID0geyBcbiAgICBlbnN1cmVWaWV3cG9ydEVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZpZXdwb3J0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuICAgICAgaWYgKCF2aWV3cG9ydEVsZW1lbnQpIHtcbiAgICAgICAgdmlld3BvcnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICAgICAgICB2aWV3cG9ydEVsZW1lbnQubmFtZSA9ICd2aWV3cG9ydCc7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodmlld3BvcnRFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZpZXdwb3J0RWxlbWVudDtcbiAgICB9LFxuXG4gICAgc2V0dXA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZpZXdwb3J0RWxlbWVudCA9IFZpZXdwb3J0LmVuc3VyZVZpZXdwb3J0RWxlbWVudCgpO1xuXG4gICAgICBpZiAoIXZpZXdwb3J0RWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghdmlld3BvcnRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnY29udGVudCcpKSB7XG4gICAgICAgIHZpZXdwb3J0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBERUZBVUxUX1ZJRVdQT1JUKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2luZG93LlZpZXdwb3J0ID0gVmlld3BvcnQ7XG59KSgpO1xuIiwiLy8gTG9hZCBub24tcG9seWZpbGwgbGlicmFyaWVzXG5pbXBvcnQgJy4vRmFzdENsaWNrQDEuMC42K21vZC9mYXN0Y2xpY2suanMnO1xuLy8gaW1wb3J0ICcuL21pY3JvZXZlbnQuanNANDdjYmMxNCttb2QvbWljcm9ldmVudC5qcyc7XG5pbXBvcnQgJy4vdmlld3BvcnQuanMnO1xuIiwiaW1wb3J0ICcuL29ucy9wbGF0Zm9ybSc7IC8vIFRoaXMgZmlsZSBtdXN0IGJlIGxvYWRlZCBiZWZvcmUgQ3VzdG9tIEVsZW1lbnRzIHBvbHlmaWxscy5cbmltcG9ydCAnLi9wb2x5ZmlsbHMvaW5kZXguanMnO1xuaW1wb3J0ICcuL3ZlbmRvci9pbmRleC5qcyc7XG5pbXBvcnQgJy4vb25zL21pY3JvZXZlbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cChvbnMpIHtcbiAgaWYgKHdpbmRvdy5vbnMpIHtcbiAgICBvbnMuX3V0aWwud2FybignT25zZW4gVUkgaXMgbG9hZGVkIG1vcmUgdGhhbiBvbmNlLicpO1xuICB9XG5cbiAgLy8gZmFzdGNsaWNrXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIG9ucy5mYXN0Q2xpY2sgPSBGYXN0Q2xpY2suYXR0YWNoKGRvY3VtZW50LmJvZHkpO1xuXG4gICAgY29uc3Qgc3VwcG9ydFRvdWNoQWN0aW9uID0gJ3RvdWNoLWFjdGlvbicgaW4gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgIG9ucy5wbGF0Zm9ybS5fcnVuT25BY3R1YWxQbGF0Zm9ybSgoKSA9PiB7XG4gICAgICBpZiAob25zLnBsYXRmb3JtLmlzQW5kcm9pZCgpKSB7XG4gICAgICAgIC8vIEluIEFuZHJvaWQ0LjQrLCBjb3JyZWN0IHZpZXdwb3J0IHNldHRpbmdzIGNhbiByZW1vdmUgY2xpY2sgZGVsYXkuXG4gICAgICAgIC8vIFNvIGRpc2FibGUgRmFzdENsaWNrIG9uIEFuZHJvaWQuXG4gICAgICAgIG9ucy5mYXN0Q2xpY2suZGVzdHJveSgpO1xuICAgICAgfSBlbHNlIGlmIChvbnMucGxhdGZvcm0uaXNJT1MoKSkge1xuICAgICAgICBpZiAoc3VwcG9ydFRvdWNoQWN0aW9uICYmIChvbnMucGxhdGZvcm0uaXNJT1NTYWZhcmkoKSB8fCBvbnMucGxhdGZvcm0uaXNXS1dlYlZpZXcoKSkpIHtcbiAgICAgICAgICAvLyBJZiAndG91Y2gtYWN0aW9uJyBzdXBwb3J0ZWQgaW4gaU9TIFNhZmFyaSBvciBXS1dlYlZpZXcsIGRpc2FibGUgRmFzdENsaWNrLlxuICAgICAgICAgIG9ucy5mYXN0Q2xpY2suZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERvIG5vdGhpbmcuICd0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbicgaGFzIG5vIGVmZmVjdCBvbiBVSVdlYlZpZXcuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgZmFsc2UpO1xuXG4gIG9ucy5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBvbnMuZW5hYmxlRGV2aWNlQmFja0J1dHRvbkhhbmRsZXIoKTtcbiAgICBvbnMuX2RlZmF1bHREZXZpY2VCYWNrQnV0dG9uSGFuZGxlciA9IG9ucy5faW50ZXJuYWwuZGJiRGlzcGF0Y2hlci5jcmVhdGVIYW5kbGVyKHdpbmRvdy5kb2N1bWVudC5ib2R5LCAoKSA9PiB7XG4gICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobmF2aWdhdG9yLCAnYXBwJykpIHtcbiAgICAgICAgbmF2aWdhdG9yLmFwcC5leGl0QXBwKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBjbG9zZSB0aGUgYXBwLiBJcyBcXCdjb3Jkb3ZhLmpzXFwnIGluY2x1ZGVkP1xcbkVycm9yOiBcXCd3aW5kb3cubmF2aWdhdG9yLmFwcFxcJyBpcyB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5fZ2VzdHVyZURldGVjdG9yID0gbmV3IG9ucy5HZXN0dXJlRGV0ZWN0b3IoZG9jdW1lbnQuYm9keSk7XG5cbiAgICAvLyBTaW11bGF0ZSBEZXZpY2UgQmFjayBCdXR0b24gb24gRVNDIHByZXNzXG4gICAgaWYgKCFvbnMucGxhdGZvcm0uaXNXZWJWaWV3KCkpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgIG9ucy5maXJlRGV2aWNlQmFja0J1dHRvbkV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gc2V0dXAgbG9hZGluZyBwbGFjZWhvbGRlclxuICAgIG9ucy5fc2V0dXBMb2FkaW5nUGxhY2VIb2xkZXJzKCk7XG4gIH0pO1xuXG4gIC8vIHZpZXdwb3J0LmpzXG4gIFZpZXdwb3J0LnNldHVwKCk7XG59XG4iLCJpbXBvcnQgb25zIGZyb20gJy4vb25zJzsgLy8gRXh0ZXJuYWwgZGVwZW5kZW5jeSwgYWx3YXlzIGhvaXN0ZWRcbmltcG9ydCBzZXR1cCBmcm9tICcuL3NldHVwJztcblxuc2V0dXAob25zKTsgLy8gU2V0dXAgaW5pdGlhbCBsaXN0ZW5lcnNcblxuZXhwb3J0IGRlZmF1bHQgb25zO1xuIl0sIm5hbWVzIjpbIndpbmRvdyIsImN1c3RvbUVsZW1lbnRzIiwiZm9yY2VQb2x5ZmlsbCIsImdsb2JhbCIsIm1vZHVsZSIsIk1hdGgiLCJzZWxmIiwiRnVuY3Rpb24iLCJfX2ciLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIml0IiwiaXNPYmplY3QiLCJUeXBlRXJyb3IiLCJleGVjIiwiZSIsInJlcXVpcmUkJDAiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImEiLCJkb2N1bWVudCIsImlzIiwiY3JlYXRlRWxlbWVudCIsInJlcXVpcmUkJDEiLCJyZXF1aXJlJCQyIiwiUyIsImZuIiwidmFsIiwidG9TdHJpbmciLCJjYWxsIiwidmFsdWVPZiIsImRQIiwiTyIsIlAiLCJBdHRyaWJ1dGVzIiwidG9QcmltaXRpdmUiLCJJRThfRE9NX0RFRklORSIsInZhbHVlIiwiYml0bWFwIiwib2JqZWN0Iiwia2V5IiwiZiIsImNyZWF0ZURlc2MiLCJoYXNPd25Qcm9wZXJ0eSIsImlkIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJ1bmRlZmluZWQiLCJTUkMiLCJUT19TVFJJTkciLCIkdG9TdHJpbmciLCJUUEwiLCJzcGxpdCIsImluc3BlY3RTb3VyY2UiLCJzYWZlIiwiaXNGdW5jdGlvbiIsImhhcyIsImhpZGUiLCJqb2luIiwiU3RyaW5nIiwicHJvdG90eXBlIiwidGhhdCIsImxlbmd0aCIsImIiLCJjIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJQUk9UT1RZUEUiLCIkZXhwb3J0IiwidHlwZSIsIm5hbWUiLCJzb3VyY2UiLCJJU19GT1JDRUQiLCJGIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIklTX1BST1RPIiwiSVNfQklORCIsIkIiLCJ0YXJnZXQiLCJleHBvcnRzIiwiZXhwUHJvdG8iLCJvd24iLCJvdXQiLCJleHAiLCJjdHgiLCJyZWRlZmluZSIsIlUiLCJXIiwiUiIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwic2xpY2UiLCJjb2YiLCJJT2JqZWN0IiwiZGVmaW5lZCIsImdPUEQiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJ0b0lPYmplY3QiLCJwSUUiLCJjaGVjayIsInByb3RvIiwic2V0UHJvdG90eXBlT2YiLCJ0ZXN0IiwiYnVnZ3kiLCJzZXQiLCJBcnJheSIsIl9fcHJvdG9fXyIsIlNIQVJFRCIsInN0b3JlIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwidWlkIiwiVEFHIiwiQVJHIiwidHJ5R2V0IiwiVCIsImNhbGxlZSIsImNsYXNzb2YiLCJjZWlsIiwiZmxvb3IiLCJpc05hTiIsInBvcyIsInMiLCJpIiwidG9JbnRlZ2VyIiwibCIsImNoYXJDb2RlQXQiLCJjaGFyQXQiLCJtaW4iLCJtYXgiLCJpbmRleCIsIklTX0lOQ0xVREVTIiwiJHRoaXMiLCJlbCIsImZyb21JbmRleCIsInRvTGVuZ3RoIiwidG9BYnNvbHV0ZUluZGV4Iiwic2hhcmVkIiwiYXJyYXlJbmRleE9mIiwiSUVfUFJPVE8iLCJuYW1lcyIsInJlc3VsdCIsInB1c2giLCJrZXlzIiwiJGtleXMiLCJlbnVtQnVnS2V5cyIsImRlZmluZVByb3BlcnRpZXMiLCJQcm9wZXJ0aWVzIiwiZ2V0S2V5cyIsImRvY3VtZW50RWxlbWVudCIsIkVtcHR5IiwiY3JlYXRlRGljdCIsImlmcmFtZSIsImx0IiwiZ3QiLCJpZnJhbWVEb2N1bWVudCIsInN0eWxlIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwic3JjIiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiY3JlYXRlIiwiYW5PYmplY3QiLCJkUHMiLCJkZWYiLCJ0YWciLCJzdGF0IiwiY29uZmlndXJhYmxlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJDb25zdHJ1Y3RvciIsIk5BTUUiLCJuZXh0IiwiZGVzY3JpcHRvciIsIk9iamVjdFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJ0b09iamVjdCIsImNvbnN0cnVjdG9yIiwiSVRFUkFUT1IiLCJCVUdHWSIsIkZGX0lURVJBVE9SIiwiS0VZUyIsIlZBTFVFUyIsInJldHVyblRoaXMiLCJCYXNlIiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsImtpbmQiLCJ2YWx1ZXMiLCJlbnRyaWVzIiwiREVGX1ZBTFVFUyIsIlZBTFVFU19CVUciLCIkbmF0aXZlIiwiJGRlZmF1bHQiLCIkZW50cmllcyIsIiRhbnlOYXRpdmUiLCJtZXRob2RzIiwiTElCUkFSWSIsIiRhdCIsIml0ZXJhdGVkIiwiX3QiLCJfaSIsInBvaW50IiwiZG9uZSIsIlVOU0NPUEFCTEVTIiwiQXJyYXlQcm90byIsIl9rIiwic3RlcCIsIkl0ZXJhdG9ycyIsIkFyZ3VtZW50cyIsImFkZFRvVW5zY29wYWJsZXMiLCJ3a3MiLCJUT19TVFJJTkdfVEFHIiwiQXJyYXlWYWx1ZXMiLCJET01JdGVyYWJsZXMiLCJjb2xsZWN0aW9ucyIsImV4cGxpY2l0IiwiQ29sbGVjdGlvbiIsIiRpdGVyYXRvcnMiLCJmb3JiaWRkZW5GaWVsZCIsIml0ZXJhdG9yIiwicmV0IiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJCUkVBSyIsIlJFVFVSTiIsIml0ZXJhYmxlIiwiaXRlckZuIiwiZ2V0SXRlckZuIiwiaXNBcnJheUl0ZXIiLCJTUEVDSUVTIiwiS0VZIiwiQyIsIkRFU0NSSVBUT1JTIiwiTUVUQSIsInNldERlc2MiLCJpc0V4dGVuc2libGUiLCJGUkVFWkUiLCJwcmV2ZW50RXh0ZW5zaW9ucyIsInNldE1ldGEiLCJmYXN0S2V5IiwiZ2V0V2VhayIsInciLCJvbkZyZWV6ZSIsIm1ldGEiLCJORUVEIiwiVFlQRSIsIlNJWkUiLCJnZXRFbnRyeSIsImVudHJ5IiwiX2YiLCJuIiwiayIsIndyYXBwZXIiLCJJU19NQVAiLCJBRERFUiIsIl9sIiwiZm9yT2YiLCJjbGVhciIsInZhbGlkYXRlIiwiZGF0YSIsInIiLCJwIiwicHJldiIsImZvckVhY2giLCJjYWxsYmFja2ZuIiwidiIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwic2tpcENsb3NpbmciLCJhcnIiLCJpdGVyIiwiY29tbW9uIiwiSVNfV0VBSyIsImZpeE1ldGhvZCIsImFkZCIsImZhaWxzIiwiZ2V0Q29uc3RydWN0b3IiLCJpbnN0YW5jZSIsIkhBU05UX0NIQUlOSU5HIiwiVEhST1dTX09OX1BSSU1JVElWRVMiLCJBQ0NFUFRfSVRFUkFCTEVTIiwiJGl0ZXJEZXRlY3QiLCJCVUdHWV9aRVJPIiwiJGluc3RhbmNlIiwiaW5oZXJpdElmUmVxdWlyZWQiLCJzZXRTdHJvbmciLCJTRVQiLCJTZXQiLCJzdHJvbmciLCJ0b0pTT04iLCJmcm9tIiwiQ09MTEVDVElPTiIsIm9mIiwiQSIsIm1hcEZuIiwibWFwcGluZyIsImNiIiwiYUZ1bmN0aW9uIiwibmV4dEl0ZW0iLCJNQVAiLCJNYXAiLCJyZXNlcnZlZFRhZ0xpc3QiLCJpc1ZhbGlkQ3VzdG9tRWxlbWVudE5hbWUiLCJsb2NhbE5hbWUiLCJyZXNlcnZlZCIsInZhbGlkRm9ybSIsImlzQ29ubmVjdGVkIiwibm9kZSIsIm5hdGl2ZVZhbHVlIiwiY3VycmVudCIsIl9fQ0VfaXNJbXBvcnREb2N1bWVudCIsIkRvY3VtZW50IiwicGFyZW50Tm9kZSIsIlNoYWRvd1Jvb3QiLCJob3N0IiwibmV4dFNpYmxpbmdPckFuY2VzdG9yU2libGluZyIsInJvb3QiLCJzdGFydCIsIm5leHRTaWJsaW5nIiwibmV4dE5vZGUiLCJmaXJzdENoaWxkIiwid2Fsa0RlZXBEZXNjZW5kYW50RWxlbWVudHMiLCJjYWxsYmFjayIsInZpc2l0ZWRJbXBvcnRzIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImltcG9ydE5vZGUiLCJpbXBvcnQiLCJjaGlsZCIsInNoYWRvd1Jvb3QiLCJfX0NFX3NoYWRvd1Jvb3QiLCJzZXRQcm9wZXJ0eVVuY2hlY2tlZCIsImRlc3RpbmF0aW9uIiwiQ3VzdG9tRWxlbWVudFN0YXRlIiwiQ3VzdG9tRWxlbWVudEludGVybmFscyIsIl9sb2NhbE5hbWVUb0RlZmluaXRpb24iLCJfY29uc3RydWN0b3JUb0RlZmluaXRpb24iLCJfcGF0Y2hlcyIsIl9oYXNQYXRjaGVzIiwiZGVmaW5pdGlvbiIsImxpc3RlbmVyIiwicGF0Y2giLCJfX0NFX3BhdGNoZWQiLCJlbGVtZW50cyIsIl9fQ0Vfc3RhdGUiLCJDRVN0YXRlIiwiY3VzdG9tIiwiVXRpbGl0aWVzIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJ1cGdyYWRlRWxlbWVudCIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiZ2F0aGVyRWxlbWVudHMiLCJyZWFkeVN0YXRlIiwiX19DRV9oYXNSZWdpc3RyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQiLCJkZWxldGUiLCJwYXRjaEFuZFVwZ3JhZGVUcmVlIiwiY3VycmVudFN0YXRlIiwibG9jYWxOYW1lVG9EZWZpbml0aW9uIiwiY29uc3RydWN0aW9uU3RhY2siLCJFcnJvciIsInBvcCIsImZhaWxlZCIsIl9fQ0VfZGVmaW5pdGlvbiIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIm9ic2VydmVkQXR0cmlidXRlcyIsIl9fQ0VfaXNDb25uZWN0ZWRDYWxsYmFja0NhbGxlZCIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJuYW1lc3BhY2UiLCJpbmRleE9mIiwiRG9jdW1lbnRDb25zdHJ1Y3Rpb25PYnNlcnZlciIsImludGVybmFscyIsImRvYyIsIl9pbnRlcm5hbHMiLCJfZG9jdW1lbnQiLCJfb2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiX2hhbmRsZU11dGF0aW9ucyIsImJpbmQiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsIm11dGF0aW9ucyIsImFkZGVkTm9kZXMiLCJqIiwiRGVmZXJyZWQiLCJfdmFsdWUiLCJfcmVzb2x2ZSIsIl9wcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJDdXN0b21FbGVtZW50UmVnaXN0cnkiLCJfZWxlbWVudERlZmluaXRpb25Jc1J1bm5pbmciLCJfd2hlbkRlZmluZWREZWZlcnJlZCIsIl9mbHVzaENhbGxiYWNrIiwiX2ZsdXNoUGVuZGluZyIsIl91bmZsdXNoZWRMb2NhbE5hbWVzIiwiX2RvY3VtZW50Q29uc3RydWN0aW9uT2JzZXJ2ZXIiLCJTeW50YXhFcnJvciIsImFkb3B0ZWRDYWxsYmFjayIsImdldENhbGxiYWNrIiwiY2FsbGJhY2tWYWx1ZSIsInNldERlZmluaXRpb24iLCJfZmx1c2giLCJzaGlmdCIsImRlZmVycmVkIiwicmVqZWN0IiwicHJpb3IiLCJ0b1Byb21pc2UiLCJvdXRlciIsImlubmVyIiwiZmx1c2giLCJkZWZpbmUiLCJ3aGVuRGVmaW5lZCIsInBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2siLCJjcmVhdGVFbGVtZW50TlMiLCJjbG9uZU5vZGUiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsInJlcGxhY2VDaGlsZCIsIkVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZU5TIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJIVE1MRWxlbWVudCIsIkFscmVhZHlDb25zdHJ1Y3RlZE1hcmtlciIsImNvbnN0cnVjdG9yVG9EZWZpbml0aW9uIiwiTmF0aXZlIiwiRG9jdW1lbnRfY3JlYXRlRWxlbWVudCIsImxhc3RJbmRleCIsImJ1aWx0SW4iLCJub2RlcyIsImNvbm5lY3RlZEJlZm9yZSIsImZpbHRlciIsInByZXBlbmQiLCJkaXNjb25uZWN0VHJlZSIsImNvbm5lY3RUcmVlIiwiYXBwZW5kIiwiZGVlcCIsImNsb25lIiwiRG9jdW1lbnRfaW1wb3J0Tm9kZSIsInBhdGNoVHJlZSIsIk5TX0hUTUwiLCJEb2N1bWVudF9jcmVhdGVFbGVtZW50TlMiLCJEb2N1bWVudF9wcmVwZW5kIiwiRG9jdW1lbnRfYXBwZW5kIiwicmVmTm9kZSIsIkRvY3VtZW50RnJhZ21lbnQiLCJpbnNlcnRlZE5vZGVzIiwiY2hpbGROb2RlcyIsIm5hdGl2ZVJlc3VsdCIsIk5vZGVfaW5zZXJ0QmVmb3JlIiwibm9kZVdhc0Nvbm5lY3RlZCIsIk5vZGVfYXBwZW5kQ2hpbGQiLCJOb2RlX2Nsb25lTm9kZSIsIm93bmVyRG9jdW1lbnQiLCJOb2RlX3JlbW92ZUNoaWxkIiwibm9kZVRvSW5zZXJ0Iiwibm9kZVRvUmVtb3ZlIiwiTm9kZV9yZXBsYWNlQ2hpbGQiLCJub2RlVG9JbnNlcnRXYXNDb25uZWN0ZWQiLCJ0aGlzSXNDb25uZWN0ZWQiLCJwYXRjaF90ZXh0Q29udGVudCIsImJhc2VEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImFzc2lnbmVkVmFsdWUiLCJURVhUX05PREUiLCJyZW1vdmVkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwiTm9kZV90ZXh0Q29udGVudCIsImFkZFBhdGNoIiwicGFydHMiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZVRleHROb2RlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJ3YXNDb25uZWN0ZWQiLCJyZXBsYWNlV2l0aCIsInJlbW92ZSIsIkVsZW1lbnRfYXR0YWNoU2hhZG93IiwiaW5pdCIsIndhcm4iLCJwYXRjaF9pbm5lckhUTUwiLCJodG1sU3RyaW5nIiwicmVtb3ZlZEVsZW1lbnRzIiwiRWxlbWVudF9pbm5lckhUTUwiLCJIVE1MRWxlbWVudF9pbm5lckhUTUwiLCJyYXdEaXYiLCJpbm5lckhUTUwiLCJjb250ZW50IiwiRWxlbWVudF9zZXRBdHRyaWJ1dGUiLCJFbGVtZW50X2dldEF0dHJpYnV0ZSIsIkVsZW1lbnRfc2V0QXR0cmlidXRlTlMiLCJFbGVtZW50X2dldEF0dHJpYnV0ZU5TIiwiRWxlbWVudF9yZW1vdmVBdHRyaWJ1dGUiLCJFbGVtZW50X3JlbW92ZUF0dHJpYnV0ZU5TIiwicGF0Y2hfaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiYmFzZU1ldGhvZCIsIndoZXJlIiwiaW5zZXJ0ZWRFbGVtZW50IiwiSFRNTEVsZW1lbnRfaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiRWxlbWVudF9pbnNlcnRBZGphY2VudEVsZW1lbnQiLCJFbGVtZW50X3ByZXBlbmQiLCJFbGVtZW50X2FwcGVuZCIsIkVsZW1lbnRfYmVmb3JlIiwiRWxlbWVudF9hZnRlciIsIkVsZW1lbnRfcmVwbGFjZVdpdGgiLCJFbGVtZW50X3JlbW92ZSIsInByaW9yQ3VzdG9tRWxlbWVudHMiLCJXZWFrTWFwIiwiY291bnRlciIsIkRhdGUiLCJub3ciLCJKc011dGF0aW9uT2JzZXJ2ZXIiLCJyZWdpc3RyYXRpb25zVGFibGUiLCJzZXRJbW1lZGlhdGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzZXRUaW1lb3V0Iiwic2V0SW1tZWRpYXRlUXVldWUiLCJzZW50aW5lbCIsInF1ZXVlIiwiZnVuYyIsInBvc3RNZXNzYWdlIiwiaXNTY2hlZHVsZWQiLCJzY2hlZHVsZWRPYnNlcnZlcnMiLCJzY2hlZHVsZUNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJkaXNwYXRjaENhbGxiYWNrcyIsIndyYXBJZk5lZWRlZCIsIlNoYWRvd0RPTVBvbHlmaWxsIiwib2JzZXJ2ZXJzIiwic29ydCIsIm8xIiwibzIiLCJ1aWRfIiwiYW55Tm9uRW1wdHkiLCJ0YWtlUmVjb3JkcyIsImNhbGxiYWNrXyIsInJlbW92ZVRyYW5zaWVudE9ic2VydmVyc0ZvciIsIm5vZGVzXyIsInJlZ2lzdHJhdGlvbnMiLCJyZWdpc3RyYXRpb24iLCJyZW1vdmVUcmFuc2llbnRPYnNlcnZlcnMiLCJmb3JFYWNoQW5jZXN0b3JBbmRPYnNlcnZlckVucXVldWVSZWNvcmQiLCJvcHRpb25zIiwic3VidHJlZSIsInJlY29yZCIsImVucXVldWUiLCJ1aWRDb3VudGVyIiwicmVjb3Jkc18iLCJjaGlsZExpc3QiLCJhdHRyaWJ1dGVzIiwiY2hhcmFjdGVyRGF0YSIsImF0dHJpYnV0ZU9sZFZhbHVlIiwiYXR0cmlidXRlRmlsdGVyIiwiY2hhcmFjdGVyRGF0YU9sZFZhbHVlIiwicmVtb3ZlTGlzdGVuZXJzIiwiUmVnaXN0cmF0aW9uIiwiYWRkTGlzdGVuZXJzIiwic3BsaWNlIiwiY29weU9mUmVjb3JkcyIsIk11dGF0aW9uUmVjb3JkIiwicHJldmlvdXNTaWJsaW5nIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZU5hbWVzcGFjZSIsImNvcHlNdXRhdGlvblJlY29yZCIsIm9yaWdpbmFsIiwiY3VycmVudFJlY29yZCIsInJlY29yZFdpdGhPbGRWYWx1ZSIsImdldFJlY29yZCIsImdldFJlY29yZFdpdGhPbGRWYWx1ZSIsImNsZWFyUmVjb3JkcyIsInJlY29yZFJlcHJlc2VudHNDdXJyZW50TXV0YXRpb24iLCJzZWxlY3RSZWNvcmQiLCJsYXN0UmVjb3JkIiwibmV3UmVjb3JkIiwidHJhbnNpZW50T2JzZXJ2ZWROb2RlcyIsInJlY29yZHMiLCJyZWNvcmRUb1JlcGxhY2VMYXN0IiwiYWRkTGlzdGVuZXJzXyIsInJlbW92ZUxpc3RlbmVyc18iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYXR0ck5hbWUiLCJyZWxhdGVkTm9kZSIsIm5hbWVzcGFjZVVSSSIsImF0dHJDaGFuZ2UiLCJNdXRhdGlvbkV2ZW50IiwiQURESVRJT04iLCJwcmV2VmFsdWUiLCJhZGRUcmFuc2llbnRPYnNlcnZlciIsImNoYW5nZWROb2RlIiwiX2lzUG9seWZpbGxlZCIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiYWRkRnJvbVNldEltbWVkaWF0ZUFyZ3VtZW50cyIsImFyZ3MiLCJwYXJ0aWFsbHlBcHBsaWVkIiwiaGFuZGxlciIsInJ1bklmUHJlc2VudCIsImhhbmRsZSIsInRhc2siLCJjbGVhckltbWVkaWF0ZSIsImluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uIiwibmV4dFRpY2siLCJjYW5Vc2VQb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzIiwib2xkT25NZXNzYWdlIiwib25tZXNzYWdlIiwiaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24iLCJtZXNzYWdlUHJlZml4Iiwib25HbG9iYWxNZXNzYWdlIiwiZXZlbnQiLCJhdHRhY2hFdmVudCIsImluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uIiwiY2hhbm5lbCIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJwb3J0MiIsImluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24iLCJodG1sIiwic2NyaXB0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbiIsImF0dGFjaFRvIiwicHJvY2VzcyIsIkZhc3RDbGljayIsImxheWVyIiwib2xkT25DbGljayIsInRyYWNraW5nQ2xpY2siLCJ0cmFja2luZ0NsaWNrU3RhcnQiLCJ0YXJnZXRFbGVtZW50IiwidG91Y2hTdGFydFgiLCJ0b3VjaFN0YXJ0WSIsImxhc3RUb3VjaElkZW50aWZpZXIiLCJ0b3VjaEJvdW5kYXJ5IiwidGFwRGVsYXkiLCJ0YXBUaW1lb3V0Iiwibm90TmVlZGVkIiwibWV0aG9kIiwiY29udGV4dCIsImRldmljZUlzQW5kcm9pZCIsIm9uTW91c2UiLCJvbkNsaWNrIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoRW5kIiwib25Ub3VjaENhbmNlbCIsIkV2ZW50IiwiY2FwdHVyZSIsInJtdiIsImhpamFja2VkIiwiYWR2IiwicHJvcGFnYXRpb25TdG9wcGVkIiwib25jbGljayIsImRldmljZUlzV2luZG93c1Bob25lIiwiZGV2aWNlSXNJT1MiLCJkZXZpY2VJc0lPUzQiLCJkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQiLCJkZXZpY2VJc0JsYWNrQmVycnkxMCIsIm5lZWRzQ2xpY2siLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiZGlzYWJsZWQiLCJjbGFzc05hbWUiLCJuZWVkc0ZvY3VzIiwicmVhZE9ubHkiLCJzZW5kQ2xpY2siLCJjbGlja0V2ZW50IiwidG91Y2giLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsImNoYW5nZWRUb3VjaGVzIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRldGVybWluZUV2ZW50VHlwZSIsInNjcmVlblgiLCJzY3JlZW5ZIiwiY2xpZW50WCIsImNsaWVudFkiLCJmb3J3YXJkZWRUb3VjaEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInRhZ05hbWUiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwidXBkYXRlU2Nyb2xsUGFyZW50Iiwic2Nyb2xsUGFyZW50IiwicGFyZW50RWxlbWVudCIsImZhc3RDbGlja1Njcm9sbFBhcmVudCIsImNvbnRhaW5zIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZmFzdENsaWNrTGFzdFNjcm9sbFRvcCIsInNjcm9sbFRvcCIsImdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQiLCJldmVudFRhcmdldCIsInNlbGVjdGlvbiIsInRhcmdldFRvdWNoZXMiLCJpc0NvbnRlbnRFZGl0YWJsZSIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJpc0NvbGxhcHNlZCIsImlkZW50aWZpZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRpbWVTdGFtcCIsInBhZ2VYIiwicGFnZVkiLCJsYXN0Q2xpY2tUaW1lIiwidG91Y2hIYXNNb3ZlZCIsImJvdW5kYXJ5IiwiYWJzIiwiZmluZENvbnRyb2wiLCJsYWJlbEVsZW1lbnQiLCJjb250cm9sIiwiaHRtbEZvciIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvciIsImZvckVsZW1lbnQiLCJ0YXJnZXRUYWdOYW1lIiwiY2FuY2VsTmV4dENsaWNrIiwiZWxlbWVudEZyb21Qb2ludCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJ0b3AiLCJjYW5jZWxhYmxlIiwic3RvcFByb3BhZ2F0aW9uIiwicGVybWl0dGVkIiwiZGV0YWlsIiwiZGVzdHJveSIsIm1ldGFWaWV3cG9ydCIsImNocm9tZVZlcnNpb24iLCJibGFja2JlcnJ5VmVyc2lvbiIsImZpcmVmb3hWZXJzaW9uIiwib250b3VjaHN0YXJ0Iiwic2Nyb2xsV2lkdGgiLCJvdXRlcldpZHRoIiwibWF0Y2giLCJtc1RvdWNoQWN0aW9uIiwidG91Y2hBY3Rpb24iLCJhdHRhY2giLCJERUZBVUxUX1ZJRVdQT1JUIiwiVmlld3BvcnQiLCJ2aWV3cG9ydEVsZW1lbnQiLCJoZWFkIiwiZW5zdXJlVmlld3BvcnRFbGVtZW50IiwiaGFzQXR0cmlidXRlIiwic2V0dXAiLCJvbnMiLCJfdXRpbCIsImZhc3RDbGljayIsImJvZHkiLCJzdXBwb3J0VG91Y2hBY3Rpb24iLCJwbGF0Zm9ybSIsIl9ydW5PbkFjdHVhbFBsYXRmb3JtIiwiaXNBbmRyb2lkIiwiaXNJT1MiLCJpc0lPU1NhZmFyaSIsImlzV0tXZWJWaWV3IiwicmVhZHkiLCJlbmFibGVEZXZpY2VCYWNrQnV0dG9uSGFuZGxlciIsIl9kZWZhdWx0RGV2aWNlQmFja0J1dHRvbkhhbmRsZXIiLCJfaW50ZXJuYWwiLCJkYmJEaXNwYXRjaGVyIiwiY3JlYXRlSGFuZGxlciIsImFwcCIsImV4aXRBcHAiLCJfZ2VzdHVyZURldGVjdG9yIiwiR2VzdHVyZURldGVjdG9yIiwiaXNXZWJWaWV3Iiwia2V5Q29kZSIsImZpcmVEZXZpY2VCYWNrQnV0dG9uRXZlbnQiLCJfc2V0dXBMb2FkaW5nUGxhY2VIb2xkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLElBQUlBLE9BQU9DLGNBQVgsRUFBMkI7O1dBQ2hCQSxjQUFQLENBQXNCQyxhQUF0QixHQUFzQyxJQUF0Qzs7Ozs7Ozs7O01DREFDLFNBQVNDLGNBQUEsR0FBaUIsT0FBT0osTUFB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
