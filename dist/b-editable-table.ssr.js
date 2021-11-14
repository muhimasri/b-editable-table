'use strict';var Vue=require('vue');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);function ownKeys$w(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$w(Object(source), true).forEach(function (key) {
        _defineProperty$C(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$w(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty$C(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$6(arr, i) || _nonIterableRest$1();
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray$6(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen);
}

function _arrayLikeToArray$6(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var e=function(){return (e=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function r(e,t){return t?t.toUpperCase():""}function s(e){for(var s,a={},c=0,o=e.split(t.styleList);c<o.length;c++){var n=o[c].split(t.styleProp),i=n[0],l=n[1];(i=i.trim())&&("string"==typeof l&&(l=l.trim()),a[(s=i,s.replace(t.kebab,r))]=l);}return a}function a(){for(var t,r,a={},c=arguments.length;c--;)for(var o=0,n=Object.keys(arguments[c]);o<n.length;o++)switch(t=n[o]){case"class":case"style":case"directives":if(Array.isArray(a[t])||(a[t]=[]),"style"===t){var i=void 0;i=Array.isArray(arguments[c].style)?arguments[c].style:[arguments[c].style];for(var l=0;l<i.length;l++){var y=i[l];"string"==typeof y&&(i[l]=s(y));}arguments[c].style=i;}a[t]=a[t].concat(arguments[c][t]);break;case"staticClass":if(!arguments[c][t])break;void 0===a[t]&&(a[t]=""),a[t]&&(a[t]+=" "),a[t]+=arguments[c][t].trim();break;case"on":case"nativeOn":a[t]||(a[t]={});for(var p=0,f=Object.keys(arguments[c][t]||{});p<f.length;p++)r=f[p],a[t][r]?a[t][r]=[].concat(a[t][r],arguments[c][t][r]):a[t][r]=arguments[c][t][r];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":a[t]||(a[t]={}),a[t]=e({},arguments[c][t],a[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:a[t]||(a[t]=arguments[c][t]);}return a}var COMPONENT_UID_KEY = '_uid';var HAS_WINDOW_SUPPORT = typeof window !== 'undefined';
var HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined';
var HAS_NAVIGATOR_SUPPORT = typeof navigator !== 'undefined';
var IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT;
var WINDOW = HAS_WINDOW_SUPPORT ? window : {};
var DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {};
var NAVIGATOR = HAS_NAVIGATOR_SUPPORT ? navigator : {};
var USER_AGENT = (NAVIGATOR.userAgent || '').toLowerCase();
USER_AGENT.indexOf('jsdom') > 0;
/msie|trident/.test(USER_AGENT); // Determine if the browser supports the option passive for events

var HAS_PASSIVE_EVENT_SUPPORT = function () {
  var passiveEventSupported = false;

  if (IS_BROWSER) {
    try {
      var options = {
        // This function will be called when the browser
        // attempts to access the passive property
        get passive() {
          /* istanbul ignore next: will never be called in JSDOM */
          passiveEventSupported = true;
        }

      };
      WINDOW.addEventListener('test', options, options);
      WINDOW.removeEventListener('test', options, options);
    } catch (_unused) {
      /* istanbul ignore next: will never be called in JSDOM */
      passiveEventSupported = false;
    }
  }

  return passiveEventSupported;
}();
IS_BROWSER && ('ontouchstart' in DOCUMENT.documentElement || NAVIGATOR.maxTouchPoints > 0);
IS_BROWSER && Boolean(WINDOW.PointerEvent || WINDOW.MSPointerEvent);
/* istanbul ignore next: JSDOM only checks for 'IntersectionObserver' */

IS_BROWSER && 'IntersectionObserver' in WINDOW && 'IntersectionObserverEntry' in WINDOW && // Edge 15 and UC Browser lack support for `isIntersecting`
// but we an use `intersectionRatio > 0` instead
// 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
'intersectionRatio' in WINDOW.IntersectionObserverEntry.prototype;var PROP_NAME = '$bvConfig';// --- General ---
var RX_ARRAY_NOTATION = /\[(\d+)]/g;
var RX_BV_PREFIX = /^(BV?)/;
var RX_DIGITS = /^\d+$/;
var RX_HTML_TAGS = /(<([^>]+)>)/gi;
var RX_HYPHENATE = /\B([A-Z])/g;
var RX_LOWER_UPPER = /([a-z])([A-Z])/g;
var RX_NUMBER = /^[0-9]*\.?[0-9]+$/;
var RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g;
var RX_SPACES = /[\s\uFEFF\xA0]+/g;
var RX_START_SPACE_WORD = /(\s|^)(\w)/g;
var RX_UNDERSCORE = /_/g;
var RX_UN_KEBAB = /-(\w)/g; // --- Date ---
// Loose YYYY-MM-DD matching, ignores any appended time inforation
// Matches '1999-12-20', '1999-1-1', '1999-01-20T22:51:49.118Z', '1999-01-02 13:00:00'

var RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/; // Used to split off the date parts of the YYYY-MM-DD string

var RX_DATE_SPLIT = /-|\s|T/; // Time string RegEx (optional seconds)
var RX_ENCODED_COMMA = /%2C/g;
var RX_ENCODE_REVERSE = /[!'()*]/g;

var RX_ICON_PREFIX = /^BIcon/; // --- Locale ---

var RX_STRIP_LOCALE_MODS = /-u-.+/;function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct$1(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf$1(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct$1(Parent, args, Class) { if (_isNativeReflectConstruct$1()) { _construct$1 = Reflect.construct; } else { _construct$1 = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf$1(instance, Class.prototype); return instance; }; } return _construct$1.apply(null, arguments); }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/* istanbul ignore next */

var Element = HAS_WINDOW_SUPPORT ? WINDOW.Element : /*#__PURE__*/function (_Object) {
  _inherits(Element, _Object);

  var _super = _createSuper(Element);

  function Element() {
    _classCallCheck$1(this, Element);

    return _super.apply(this, arguments);
  }

  return Element;
}( /*#__PURE__*/_wrapNativeSuper(Object));
/* istanbul ignore next */

var HTMLElement = HAS_WINDOW_SUPPORT ? WINDOW.HTMLElement : /*#__PURE__*/function (_Element) {
  _inherits(HTMLElement, _Element);

  var _super2 = _createSuper(HTMLElement);

  function HTMLElement() {
    _classCallCheck$1(this, HTMLElement);

    return _super2.apply(this, arguments);
  }

  return HTMLElement;
}(Element);
/* istanbul ignore next */

HAS_WINDOW_SUPPORT ? WINDOW.SVGElement : /*#__PURE__*/function (_Element2) {
  _inherits(SVGElement, _Element2);

  var _super3 = _createSuper(SVGElement);

  function SVGElement() {
    _classCallCheck$1(this, SVGElement);

    return _super3.apply(this, arguments);
  }

  return SVGElement;
}(Element);
/* istanbul ignore next */

HAS_WINDOW_SUPPORT ? WINDOW.File : /*#__PURE__*/function (_Object2) {
  _inherits(File, _Object2);

  var _super4 = _createSuper(File);

  function File() {
    _classCallCheck$1(this, File);

    return _super4.apply(this, arguments);
  }

  return File;
}( /*#__PURE__*/_wrapNativeSuper(Object));function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var toType = function toType(value) {
  return _typeof(value);
};
var toRawType = function toRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
};
var isUndefined = function isUndefined(value) {
  return value === undefined;
};
var isNull = function isNull(value) {
  return value === null;
};
var isUndefinedOrNull = function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value);
};
var isFunction$1 = function isFunction(value) {
  return toType(value) === 'function';
};
var isBoolean = function isBoolean(value) {
  return toType(value) === 'boolean';
};
var isString = function isString(value) {
  return toType(value) === 'string';
};
var isNumber = function isNumber(value) {
  return toType(value) === 'number';
};
var isNumeric$1 = function isNumeric(value) {
  return RX_NUMBER.test(String(value));
};
var isArray = function isArray(value) {
  return Array.isArray(value);
}; // Quick object check
// This is primarily used to tell Objects from primitive values
// when we know the value is a JSON-compliant type
// Note object could be a complex type like array, Date, etc.

var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}; // Strict object type check
// Only returns true for plain JavaScript objects

var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
var isDate = function isDate(value) {
  return value instanceof Date;
};
var isEvent = function isEvent(value) {
  return value instanceof Event;
};
var isRegExp = function isRegExp(value) {
  return toRawType(value) === 'RegExp';
};
var isPromise = function isPromise(value) {
  return !isUndefinedOrNull(value) && isFunction$1(value.then) && isFunction$1(value.catch);
};function ownKeys$v(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$v(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$v(Object(source), true).forEach(function (key) { _defineProperty$B(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$v(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$B(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assign = function assign() {
  return Object.assign.apply(Object, arguments);
};
var defineProperties = function defineProperties(obj, props) {
  return Object.defineProperties(obj, props);
};
var defineProperty$1 = function defineProperty(obj, prop, descriptor) {
  return Object.defineProperty(obj, prop, descriptor);
};
var keys = function keys(obj) {
  return Object.keys(obj);
}; // --- "Instance" ---

var hasOwnProperty = function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
// Shallow copy an object

var clone = function clone(obj) {
  return _objectSpread$v({}, obj);
}; // Return a shallow copy of object with the specified properties only
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc

var pick = function pick(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) !== -1;
  }).reduce(function (result, key) {
    return _objectSpread$v(_objectSpread$v({}, result), {}, _defineProperty$B({}, key, obj[key]));
  }, {});
}; // Return a shallow copy of object with the specified properties omitted
// See: https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc

var omit = function omit(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) === -1;
  }).reduce(function (result, key) {
    return _objectSpread$v(_objectSpread$v({}, result), {}, _defineProperty$B({}, key, obj[key]));
  }, {});
}; // Merges two object deeply together
// See: https://gist.github.com/Salakar/1d7137de9cb8b704e48a

var mergeDeep = function mergeDeep(target, source) {
  if (isObject(target) && isObject(source)) {
    keys(source).forEach(function (key) {
      if (isObject(source[key])) {
        if (!target[key] || !isObject(target[key])) {
          target[key] = source[key];
        }

        mergeDeep(target[key], source[key]);
      } else {
        assign(target, _defineProperty$B({}, key, source[key]));
      }
    });
  }

  return target;
}; // Returns a shallow copy of the object with keys in sorted order

var sortKeys = function sortKeys(obj) {
  return keys(obj).sort().reduce(function (result, key) {
    return _objectSpread$v(_objectSpread$v({}, result), {}, _defineProperty$B({}, key, obj[key]));
  }, {});
}; // Convenience method to create a read-only descriptor

var readonlyDescriptor = function readonlyDescriptor() {
  return {
    enumerable: true,
    configurable: false,
    writable: false
  };
};function ownKeys$u(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$u(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$u(Object(source), true).forEach(function (key) { _defineProperty$A(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$u(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$A(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray$4(arr) { return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) || _unsupportedIterableToArray$5(arr) || _nonIterableSpread$4(); }

function _nonIterableSpread$4() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }

function _iterableToArray$4(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$4(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$5(arr); }

function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var cloneDeep = function cloneDeep(obj) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obj;

  if (isArray(obj)) {
    return obj.reduce(function (result, val) {
      return [].concat(_toConsumableArray$4(result), [cloneDeep(val, val)]);
    }, []);
  }

  if (isPlainObject(obj)) {
    return keys(obj).reduce(function (result, key) {
      return _objectSpread$u(_objectSpread$u({}, result), {}, _defineProperty$A({}, key, cloneDeep(obj[key], obj[key])));
    }, {});
  }

  return defaultValue;
};var identity = function identity(x) {
  return x;
};/**
 * Get property defined by dot/array notation in string, returns undefined if not found
 *
 * @link https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf#gistcomment-1935901
 *
 * @param {Object} obj
 * @param {string|Array} path
 * @return {*}
 */

var getRaw = function getRaw(obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  // Handle array of path values
  path = isArray(path) ? path.join('.') : path; // If no path or no object passed

  if (!path || !isObject(obj)) {
    return defaultValue;
  } // Handle edge case where user has dot(s) in top-level item field key
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2762
  // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
  // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463


  if (path in obj) {
    return obj[path];
  } // Handle string array notation (numeric indices only)


  path = String(path).replace(RX_ARRAY_NOTATION, '.$1');
  var steps = path.split('.').filter(identity); // Handle case where someone passes a string of only dots

  if (steps.length === 0) {
    return defaultValue;
  } // Traverse path in object to find result
  // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
  // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463


  return steps.every(function (step) {
    return isObject(obj) && step in obj && !isUndefinedOrNull(obj = obj[step]);
  }) ? obj : isNull(obj) ? null : defaultValue;
};
/**
 * Get property defined by dot/array notation in string.
 *
 * @link https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf#gistcomment-1935901
 *
 * @param {Object} obj
 * @param {string|Array} path
 * @param {*} defaultValue (optional)
 * @return {*}
 */

var get = function get(obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var value = getRaw(obj, path);
  return isUndefinedOrNull(value) ? defaultValue : value;
};/**
 * Utilities to get information about the current environment
 */
var getEnv = function getEnv(key) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var env = typeof process !== 'undefined' && process ? process.env || {} : {};

  if (!key) {
    /* istanbul ignore next */
    return env;
  }

  return env[key] || fallback;
};
var getNoWarn = function getNoWarn() {
  return getEnv('BOOTSTRAP_VUE_NO_WARN') || getEnv('NODE_ENV') === 'production';
};/**
 * Log a warning message to the console with BootstrapVue formatting
 * @param {string} message
 */

var warn = function warn(message)
/* istanbul ignore next */
{
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!getNoWarn()) {
    console.warn("[BootstrapVue warn]: ".concat(source ? "".concat(source, " - ") : '').concat(message));
  }
};// Component names
var NAME_BUTTON = 'BButton';
var NAME_CALENDAR = 'BCalendar';
var NAME_DROPDOWN = 'BDropdown';
var NAME_FORM_CHECKBOX = 'BFormCheckbox';
var NAME_FORM_DATEPICKER = 'BFormDatepicker';
var NAME_FORM_INPUT = 'BFormInput';
var NAME_FORM_RATING = 'BFormRating';
var NAME_FORM_SELECT = 'BFormSelect';
var NAME_FORM_SELECT_OPTION = 'BFormSelectOption';
var NAME_FORM_SELECT_OPTION_GROUP = 'BFormSelectOptionGroup';
var NAME_ICON = 'BIcon';
var NAME_ICON_BASE = 'BIconBase';
var NAME_LINK = 'BLink';
var NAME_TABLE = 'BTable';
var NAME_TABLE_CELL = 'BTableCell';
var NAME_TBODY = 'BTbody';
var NAME_TFOOT = 'BTfoot';
var NAME_TH = 'BTh';
var NAME_THEAD = 'BThead';
var NAME_TR = 'BTr'; // Helper component names
var NAME_FORM_BUTTON_LABEL_CONTROL = 'BVFormBtnLabelControl';
var NAME_FORM_RATING_STAR = 'BVFormRatingStar';var EVENT_NAME_BLUR = 'blur';
var EVENT_NAME_CHANGE = 'change';
var EVENT_NAME_CLICK = 'click';
var EVENT_NAME_CONTEXT = 'context';
var EVENT_NAME_CONTEXT_CHANGED = 'context-changed';
var EVENT_NAME_FILTERED = 'filtered';
var EVENT_NAME_HEAD_CLICKED = 'head-clicked';
var EVENT_NAME_HIDDEN = 'hidden';
var EVENT_NAME_HIDE = 'hide';
var EVENT_NAME_INPUT = 'input';
var EVENT_NAME_REFRESH = 'refresh';
var EVENT_NAME_REFRESHED = 'refreshed';
var EVENT_NAME_ROW_CLICKED = 'row-clicked';
var EVENT_NAME_ROW_CONTEXTMENU = 'row-contextmenu';
var EVENT_NAME_ROW_DBLCLICKED = 'row-dblclicked';
var EVENT_NAME_ROW_HOVERED = 'row-hovered';
var EVENT_NAME_ROW_MIDDLE_CLICKED = 'row-middle-clicked';
var EVENT_NAME_ROW_SELECTED = 'row-selected';
var EVENT_NAME_ROW_UNHOVERED = 'row-unhovered';
var EVENT_NAME_SELECTED = 'selected';
var EVENT_NAME_SHOW = 'show';
var EVENT_NAME_SHOWN = 'shown';
var EVENT_NAME_SORT_CHANGED = 'sort-changed';
var EVENT_NAME_TOGGLE = 'toggle';
var EVENT_NAME_UPDATE = 'update';
var HOOK_EVENT_NAME_BEFORE_DESTROY = 'hook:beforeDestroy';
var MODEL_EVENT_NAME_PREFIX = 'update:';
var ROOT_EVENT_NAME_PREFIX = 'bv';
var ROOT_EVENT_NAME_SEPARATOR = '::';
var EVENT_OPTIONS_NO_CAPTURE = {
  passive: true,
  capture: false
};// General types
var PROP_TYPE_ANY = undefined;
var PROP_TYPE_ARRAY = Array;
var PROP_TYPE_BOOLEAN = Boolean;
var PROP_TYPE_DATE = Date;
var PROP_TYPE_FUNCTION = Function;
var PROP_TYPE_NUMBER = Number;
var PROP_TYPE_OBJECT = Object;
var PROP_TYPE_REG_EXP = RegExp;
var PROP_TYPE_STRING = String; // Multiple types

var PROP_TYPE_ARRAY_FUNCTION = [PROP_TYPE_ARRAY, PROP_TYPE_FUNCTION];
var PROP_TYPE_ARRAY_OBJECT = [PROP_TYPE_ARRAY, PROP_TYPE_OBJECT];
var PROP_TYPE_ARRAY_OBJECT_STRING = [PROP_TYPE_ARRAY, PROP_TYPE_OBJECT, PROP_TYPE_STRING];
var PROP_TYPE_ARRAY_STRING = [PROP_TYPE_ARRAY, PROP_TYPE_STRING];
var PROP_TYPE_BOOLEAN_STRING = [PROP_TYPE_BOOLEAN, PROP_TYPE_STRING];
var PROP_TYPE_DATE_STRING = [PROP_TYPE_DATE, PROP_TYPE_STRING];
var PROP_TYPE_NUMBER_STRING = [PROP_TYPE_NUMBER, PROP_TYPE_STRING];
var PROP_TYPE_OBJECT_FUNCTION = [PROP_TYPE_OBJECT, PROP_TYPE_FUNCTION];
var PROP_TYPE_OBJECT_STRING = [PROP_TYPE_OBJECT, PROP_TYPE_STRING];var SLOT_NAME_BOTTOM_ROW = 'bottom-row';
var SLOT_NAME_BUTTON_CONTENT = 'button-content';
var SLOT_NAME_CUSTOM_FOOT = 'custom-foot';
var SLOT_NAME_DEFAULT = 'default';
var SLOT_NAME_EMPTY = 'empty';
var SLOT_NAME_EMPTYFILTERED = 'emptyfiltered';
var SLOT_NAME_FIRST = 'first';
var SLOT_NAME_ICON_CLEAR = 'icon-clear';
var SLOT_NAME_ICON_EMPTY = 'icon-empty';
var SLOT_NAME_ICON_FULL = 'icon-full';
var SLOT_NAME_ICON_HALF = 'icon-half';
var SLOT_NAME_NAV_NEXT_DECADE = 'nav-next-decade';
var SLOT_NAME_NAV_NEXT_MONTH = 'nav-next-month';
var SLOT_NAME_NAV_NEXT_YEAR = 'nav-next-year';
var SLOT_NAME_NAV_PEV_DECADE = 'nav-prev-decade';
var SLOT_NAME_NAV_PEV_MONTH = 'nav-prev-month';
var SLOT_NAME_NAV_PEV_YEAR = 'nav-prev-year';
var SLOT_NAME_NAV_THIS_MONTH = 'nav-this-month';
var SLOT_NAME_ROW_DETAILS = 'row-details';
var SLOT_NAME_TABLE_BUSY = 'table-busy';
var SLOT_NAME_TABLE_CAPTION = 'table-caption';
var SLOT_NAME_TABLE_COLGROUP = 'table-colgroup';
var SLOT_NAME_THEAD_TOP = 'thead-top';
var SLOT_NAME_TOP_ROW = 'top-row';var from = function from() {
  return Array.from.apply(Array, arguments);
}; // --- Instance ---

var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};
var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
}; // --- Utilities ---

var createArray = function createArray(length, fillFn) {
  var mapFn = isFunction$1(fillFn) ? fillFn : function () {
    return fillFn;
  };
  return Array.apply(null, {
    length: length
  }).map(mapFn);
};// Number utilities
// Converts a value (string, number, etc.) to an integer number
// Assumes radix base 10
var toInteger = function toInteger(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  var integer = parseInt(value, 10);
  return isNaN(integer) ? defaultValue : integer;
}; // Converts a value (string, number, etc.) to a number

var toFloat = function toFloat(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  var float = parseFloat(value);
  return isNaN(float) ? defaultValue : float;
}; // Converts a value (string, number, etc.) to a string
// String utilities
// Converts PascalCase or camelCase to kebab-case

var kebabCase = function kebabCase(str) {
  return str.replace(RX_HYPHENATE, '-$1').toLowerCase();
}; // Converts a kebab-case or camelCase string to PascalCase

var pascalCase = function pascalCase(str) {
  str = kebabCase(str).replace(RX_UN_KEBAB, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Converts a string, including strings in camelCase or snake_case, into Start Case
// It keeps original single quote and hyphen in the word
// https://github.com/UrbanCompass/to-start-case

var startCase = function startCase(str) {
  return str.replace(RX_UNDERSCORE, ' ').replace(RX_LOWER_UPPER, function (str, $1, $2) {
    return $1 + ' ' + $2;
  }).replace(RX_START_SPACE_WORD, function (str, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}; // Lowercases the first letter of a string and returns a new string

var escapeRegExp = function escapeRegExp(str) {
  return str.replace(RX_REGEXP_REPLACE, '\\$&');
}; // Convert a value to a string that can be rendered
// `undefined`/`null` will be converted to `''`
// Plain objects and arrays will be JSON stringified

var toString = function toString(val) {
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return isUndefinedOrNull(val) ? '' : isArray(val) || isPlainObject(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
}; // Remove leading white space from a string

var trim = function trim(str) {
  return toString(str).trim();
}; // Lower case a string
var ELEMENT_PROTO = Element.prototype;
// See: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill

/* istanbul ignore next */

var matchesEl = ELEMENT_PROTO.matches || ELEMENT_PROTO.msMatchesSelector || ELEMENT_PROTO.webkitMatchesSelector; // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

/* istanbul ignore next */

var closestEl = ELEMENT_PROTO.closest || function (sel) {
  var el = this;

  do {
    // Use our "patched" matches function
    if (matches(el, sel)) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (!isNull(el) && el.nodeType === Node.ELEMENT_NODE);

  return null;
}; // `requestAnimationFrame()` convenience method

/* istanbul ignore next: JSDOM always returns the first option */

var requestAF = WINDOW.requestAnimationFrame || WINDOW.webkitRequestAnimationFrame || WINDOW.mozRequestAnimationFrame || WINDOW.msRequestAnimationFrame || WINDOW.oRequestAnimationFrame || // Fallback, but not a true polyfill
// Only needed for Opera Mini

/* istanbul ignore next */
function (cb) {
  return setTimeout(cb, 16);
};
WINDOW.MutationObserver || WINDOW.WebKitMutationObserver || WINDOW.MozMutationObserver || null; // --- Utils ---

var isElement = function isElement(el) {
  return !!(el && el.nodeType === Node.ELEMENT_NODE);
}; // Get the currently active HTML element

var getActiveElement = function getActiveElement() {
  var excludes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var activeElement = DOCUMENT.activeElement;
  return activeElement && !excludes.some(function (el) {
    return el === activeElement;
  }) ? activeElement : null;
}; // Returns `true` if a tag's name equals `name`

var isTag = function isTag(tag, name) {
  return toString(tag).toLowerCase() === toString(name).toLowerCase();
}; // Determine if an HTML element is the currently active element

var isActiveElement = function isActiveElement(el) {
  return isElement(el) && el === getActiveElement();
}; // Determine if an HTML element is visible - Faster than CSS check

var isVisible = function isVisible(el) {
  if (!isElement(el) || !el.parentNode || !contains(DOCUMENT.body, el)) {
    // Note this can fail for shadow dom elements since they
    // are not a direct descendant of document.body
    return false;
  }

  if (getStyle(el, 'display') === 'none') {
    // We do this check to help with vue-test-utils when using v-show

    /* istanbul ignore next */
    return false;
  } // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM
  // Except when we override the getBCR prototype in some tests


  var bcr = getBCR(el);
  return !!(bcr && bcr.height > 0 && bcr.width > 0);
}; // Determine if an element is disabled

var selectAll = function selectAll(selector, root) {
  return from((isElement(root) ? root : DOCUMENT).querySelectorAll(selector));
}; // Select a single element, returns `null` if not found

var select = function select(selector, root) {
  return (isElement(root) ? root : DOCUMENT).querySelector(selector) || null;
}; // Determine if an element matches a selector

var matches = function matches(el, selector) {
  return isElement(el) ? matchesEl.call(el, selector) : false;
}; // Finds closest element matching selector. Returns `null` if not found

var closest = function closest(selector, root) {
  var includeRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!isElement(root)) {
    return null;
  }

  var el = closestEl.call(root, selector); // Native closest behaviour when `includeRoot` is truthy,
  // else emulate jQuery closest and return `null` if match is
  // the passed in root element when `includeRoot` is falsey

  return includeRoot ? el : el === root ? null : el;
}; // Returns true if the parent element contains the child element

var contains = function contains(parent, child) {
  return parent && isFunction$1(parent.contains) ? parent.contains(child) : false;
}; // Get an element given an ID

var getById = function getById(id) {
  return DOCUMENT.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
}; // Add a class to an element

var addClass = function addClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
}; // Remove a class from an element

var removeClass = function removeClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
}; // Test if an element has a class
// Returns `null` if not found

var getAttr = function getAttr(el, attr) {
  return attr && isElement(el) ? el.getAttribute(attr) : null;
}; // Determine if an attribute exists on an element
// Returns `null` if not found

var getStyle = function getStyle(el, prop) {
  return prop && isElement(el) ? el.style[prop] || null : null;
}; // Return the Bounding Client Rect of an element
// Returns `null` if not an element

/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */

var getBCR = function getBCR(el) {
  return isElement(el) ? el.getBoundingClientRect() : null;
}; // Get computed style object for an element
// Returns `null` if no window support is given

/* istanbul ignore next: getSelection() doesn't work in JSDOM */

var getSel = function getSel() {
  var getSelection = WINDOW.getSelection;
  return getSelection ? WINDOW.getSelection() : null;
}; // Return an element's offset with respect to document element

var attemptFocus = function attemptFocus(el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  try {
    el.focus(options);
  } catch (_unused) {}

  return isActiveElement(el);
}; // Attempt to blur an element, and return `true` if successful

var attemptBlur = function attemptBlur(el) {
  try {
    el.blur();
  } catch (_unused2) {}

  return !isActiveElement(el);
};var VueProto = Vue__default['default'].prototype; // --- Getter methods ---

var getConfigValue = function getConfigValue(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var bvConfig = VueProto[PROP_NAME];
  return bvConfig ? bvConfig.getConfigValue(key, defaultValue) : cloneDeep(defaultValue);
}; // Method to grab a config value for a particular component

var getComponentConfig = function getComponentConfig(key) {
  var propKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  // Return the particular config value for key if specified,
  // otherwise we return the full config (or an empty object if not found)
  return propKey ? getConfigValue("".concat(key, ".").concat(propKey), defaultValue) : getConfigValue(key, {});
}; // Get all breakpoint names
function ownKeys$t(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$t(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$t(Object(source), true).forEach(function (key) { _defineProperty$z(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$t(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$z(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var makeProp = function makeProp() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PROP_TYPE_ANY;
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var requiredOrValidator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var validator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var required = requiredOrValidator === true;
  validator = required ? validator : requiredOrValidator;
  return _objectSpread$t(_objectSpread$t(_objectSpread$t({}, type ? {
    type: type
  } : {}), required ? {
    required: required
  } : isUndefined(value) ? {} : {
    default: isObject(value) ? function () {
      return value;
    } : value
  }), isUndefined(validator) ? {} : {
    validator: validator
  });
}; // Copies props from one array/object to a new array/object
// plucks all the values off the target object, returning a new object
// that has props that reference the original prop values

var pluckProps = function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
  return (isArray(keysToPluck) ? keysToPluck.slice() : keys(keysToPluck)).reduce(function (memo, prop) {
    memo[transformFn(prop)] = objToPluck[prop];
    return memo;
  }, {});
}; // Make a prop object configurable by global configuration
// Replaces the current `default` key of each prop with a `getComponentConfig()`
// call that falls back to the current default value of the prop

var makePropConfigurable = function makePropConfigurable(prop, key, componentKey) {
  return _objectSpread$t(_objectSpread$t({}, cloneDeep(prop)), {}, {
    default: function bvConfigurablePropDefault() {
      var value = getComponentConfig(componentKey, key, prop.default);
      return isFunction$1(value) ? value() : value;
    }
  });
}; // Make a props object configurable by global configuration
// Replaces the current `default` key of each prop with a `getComponentConfig()`
// call that falls back to the current default value of the prop

var makePropsConfigurable = function makePropsConfigurable(props, componentKey) {
  return keys(props).reduce(function (result, key) {
    return _objectSpread$t(_objectSpread$t({}, result), {}, _defineProperty$z({}, key, makePropConfigurable(props[key], key, componentKey)));
  }, {});
}; // Get function name we use in `makePropConfigurable()`
// for the prop default value override to compare
// against in `hasPropFunction()`

var configurablePropDefaultFnName = makePropConfigurable({}, '', '').default.name; // Detect wether the given value is currently a function
// and isn't the props default function

var hasPropFunction = function hasPropFunction(fn) {
  return isFunction$1(fn) && fn.name !== configurablePropDefaultFnName;
};function _defineProperty$y(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var makeModelMixin = function makeModelMixin(prop) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? PROP_TYPE_ANY : _ref$type,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? undefined : _ref$defaultValue,
      _ref$validator = _ref.validator,
      validator = _ref$validator === void 0 ? undefined : _ref$validator,
      _ref$event = _ref.event,
      event = _ref$event === void 0 ? EVENT_NAME_INPUT : _ref$event;

  var props = _defineProperty$y({}, prop, makeProp(type, defaultValue, validator)); // @vue/component


  var mixin = Vue__default['default'].extend({
    model: {
      prop: prop,
      event: event
    },
    props: props
  });
  return {
    mixin: mixin,
    props: props,
    prop: prop,
    event: event
  };
};// In functional components, `slots` is a function so it must be called
// first before passing to the below methods. `scopedSlots` is always an
// object and may be undefined (for Vue < 2.6.x)

/**
 * Returns true if either scoped or unscoped named slot exists
 *
 * @param {String, Array} name or name[]
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var hasNormalizedSlot = function hasNormalizedSlot(names) {
  var $scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Ensure names is an array
  names = concat(names).filter(identity); // Returns true if the either a $scopedSlot or $slot exists with the specified name

  return names.some(function (name) {
    return $scopedSlots[name] || $slots[name];
  });
};
/**
 * Returns VNodes for named slot either scoped or unscoped
 *
 * @param {String, Array} name or name[]
 * @param {String} scope
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var normalizeSlot = function normalizeSlot(names) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Ensure names is an array
  names = concat(names).filter(identity);
  var slot;

  for (var i = 0; i < names.length && !slot; i++) {
    var name = names[i];
    slot = $scopedSlots[name] || $slots[name];
  } // Note: in Vue 2.6.x, all named slots are also scoped slots


  return isFunction$1(slot) ? slot(scope) : slot;
};var normalizeSlotMixin = Vue__default['default'].extend({
  methods: {
    // Returns `true` if the either a `$scopedSlot` or `$slot` exists with the specified name
    // `name` can be a string name or an array of names
    hasNormalizedSlot: function hasNormalizedSlot$1() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SLOT_NAME_DEFAULT;
      var scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$scopedSlots;
      var slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$slots;
      return hasNormalizedSlot(name, scopedSlots, slots);
    },
    // Returns an array of rendered VNodes if slot found, otherwise `undefined`
    // `name` can be a string name or an array of names
    normalizeSlot: function normalizeSlot$1() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SLOT_NAME_DEFAULT;
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$scopedSlots;
      var slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.$slots;

      var vNodes = normalizeSlot(name, scope, scopedSlots, slots);

      return vNodes ? concat(vNodes) : vNodes;
    }
  }
});// Normalize event options based on support of passive option
// Exported only for testing purposes

var parseEventOptions = function parseEventOptions(options) {
  /* istanbul ignore else: can't test in JSDOM, as it supports passive */
  if (HAS_PASSIVE_EVENT_SUPPORT) {
    return isObject(options) ? options : {
      capture: !!options || false
    };
  } else {
    // Need to translate to actual Boolean value
    return !!(isObject(options) ? options.capture : options);
  }
}; // Attach an event listener to an element

var eventOn = function eventOn(el, eventName, handler, options) {
  if (el && el.addEventListener) {
    el.addEventListener(eventName, handler, parseEventOptions(options));
  }
}; // Remove an event listener from an element

var eventOff = function eventOff(el, eventName, handler, options) {
  if (el && el.removeEventListener) {
    el.removeEventListener(eventName, handler, parseEventOptions(options));
  }
}; // Utility method to add/remove a event listener based on first argument (boolean)
// It passes all other arguments to the `eventOn()` or `eventOff` method

var eventOnOff = function eventOnOff(on) {
  var method = on ? eventOn : eventOff;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  method.apply(void 0, args);
}; // Utility method to prevent the default event handling and propagation

var stopEvent = function stopEvent(event) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault,
      _ref$propagation = _ref.propagation,
      propagation = _ref$propagation === void 0 ? true : _ref$propagation,
      _ref$immediatePropaga = _ref.immediatePropagation,
      immediatePropagation = _ref$immediatePropaga === void 0 ? false : _ref$immediatePropaga;

  if (preventDefault) {
    event.preventDefault();
  }

  if (propagation) {
    event.stopPropagation();
  }

  if (immediatePropagation) {
    event.stopImmediatePropagation();
  }
}; // Helper method to convert a component/directive name to a base event name
// `getBaseEventName('BNavigationItem')` => 'navigation-item'
// `getBaseEventName('BVToggle')` => 'toggle'

var getBaseEventName = function getBaseEventName(value) {
  return kebabCase(value.replace(RX_BV_PREFIX, ''));
}; // Get a root event name by component/directive and event name
// `getBaseEventName('BModal', 'show')` => 'bv::modal::show'


var getRootEventName = function getRootEventName(name, eventName) {
  return [ROOT_EVENT_NAME_PREFIX, getBaseEventName(name), eventName].join(ROOT_EVENT_NAME_SEPARATOR);
}; // Get a root action event name by component/directive and action name
// `getRootActionEventName('BModal', 'show')` => 'bv::show::modal'

var getRootActionEventName = function getRootActionEventName(name, actionName) {
  return [ROOT_EVENT_NAME_PREFIX, actionName, getBaseEventName(name)].join(ROOT_EVENT_NAME_SEPARATOR);
};// Math utilty functions
var mathMin = Math.min;
var mathMax = Math.max;var ANCHOR_TAG = 'a'; // Method to replace reserved chars

var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
}; // Fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas


var encode = function encode(str) {
  return encodeURIComponent(toString(str)).replace(RX_ENCODE_REVERSE, encodeReserveReplacer).replace(RX_ENCODED_COMMA, ',');
};
// See: https://github.com/vuejs/vue-router/blob/dev/src/util/query.js

var stringifyQueryObj = function stringifyQueryObj(obj) {
  if (!isPlainObject(obj)) {
    return '';
  }

  var query = keys(obj).map(function (key) {
    var value = obj[key];

    if (isUndefined(value)) {
      return '';
    } else if (isNull(value)) {
      return encode(key);
    } else if (isArray(value)) {
      return value.reduce(function (results, value2) {
        if (isNull(value2)) {
          results.push(encode(key));
        } else if (!isUndefined(value2)) {
          // Faster than string interpolation
          results.push(encode(key) + '=' + encode(value2));
        }

        return results;
      }, []).join('&');
    } // Faster than string interpolation


    return encode(key) + '=' + encode(value);
  })
  /* must check for length, as we only want to filter empty strings, not things that look falsey! */
  .filter(function (x) {
    return x.length > 0;
  }).join('&');
  return query ? "?".concat(query) : '';
};
var isLink$1 = function isLink(props) {
  return !!(props.href || props.to);
};
var isRouterLink = function isRouterLink(tag) {
  return !!(tag && !isTag(tag, 'a'));
};
var computeTag = function computeTag(_ref, thisOrParent) {
  var to = _ref.to,
      disabled = _ref.disabled,
      routerComponentName = _ref.routerComponentName;
  var hasRouter = !!thisOrParent.$router;

  if (!hasRouter || hasRouter && (disabled || !to)) {
    return ANCHOR_TAG;
  } // TODO:
  //   Check registered components for existence of user supplied router link component name
  //   We would need to check PascalCase, kebab-case, and camelCase versions of name:
  //   const name = routerComponentName
  //   const names = [name, PascalCase(name), KebabCase(name), CamelCase(name)]
  //   exists = names.some(name => !!thisOrParent.$options.components[name])
  //   And may want to cache the result for performance or we just let the render fail
  //   if the component is not registered


  return routerComponentName || (thisOrParent.$nuxt ? 'nuxt-link' : 'router-link');
};
var computeRel = function computeRel() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      target = _ref2.target,
      rel = _ref2.rel;

  return target === '_blank' && isNull(rel) ? 'noopener' : rel || null;
};
var computeHref = function computeHref() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      href = _ref3.href,
      to = _ref3.to;

  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ANCHOR_TAG;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#';
  var toFallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

  // Return `href` when explicitly provided
  if (href) {
    return href;
  } // We've checked for `$router` in `computeTag()`, so `isRouterLink()` indicates a live router
  // When deferring to Vue Router's `<router-link>`, don't use the `href` attribute at all
  // We return `null`, and then remove `href` from the attributes passed to `<router-link>`


  if (isRouterLink(tag)) {
    return null;
  } // Fallback to `to` prop (if `to` is a string)


  if (isString(to)) {
    return to || toFallback;
  } // Fallback to `to.path' + `to.query` + `to.hash` prop (if `to` is an object)


  if (isPlainObject(to) && (to.path || to.query || to.hash)) {
    var path = toString(to.path);
    var query = stringifyQueryObj(to.query);
    var hash = toString(to.hash);
    hash = !hash || hash.charAt(0) === '#' ? hash : "#".concat(hash);
    return "".concat(path).concat(query).concat(hash) || toFallback;
  } // If nothing is provided return the fallback


  return fallback;
};function _defineProperty$x(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// Base attributes needed on all icons

var BASE_ATTRS = {
  viewBox: '0 0 16 16',
  width: '1em',
  height: '1em',
  focusable: 'false',
  role: 'img',
  'aria-label': 'icon'
}; // Attributes that are nulled out when stacked

var STACKED_ATTRS = {
  width: null,
  height: null,
  focusable: null,
  role: null,
  'aria-label': null
}; // --- Props ---

var props$M = {
  animation: makeProp(PROP_TYPE_STRING),
  content: makeProp(PROP_TYPE_STRING),
  flipH: makeProp(PROP_TYPE_BOOLEAN, false),
  flipV: makeProp(PROP_TYPE_BOOLEAN, false),
  fontScale: makeProp(PROP_TYPE_NUMBER_STRING, 1),
  rotate: makeProp(PROP_TYPE_NUMBER_STRING, 0),
  scale: makeProp(PROP_TYPE_NUMBER_STRING, 1),
  shiftH: makeProp(PROP_TYPE_NUMBER_STRING, 0),
  shiftV: makeProp(PROP_TYPE_NUMBER_STRING, 0),
  stacked: makeProp(PROP_TYPE_BOOLEAN, false),
  title: makeProp(PROP_TYPE_STRING),
  variant: makeProp(PROP_TYPE_STRING)
}; // --- Main component ---
// Shared private base component to reduce bundle/runtime size
// @vue/component

var BVIconBase = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_ICON_BASE,
  functional: true,
  props: props$M,
  render: function render(h, _ref) {
    var _class;

    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;
    var animation = props.animation,
        content = props.content,
        flipH = props.flipH,
        flipV = props.flipV,
        stacked = props.stacked,
        title = props.title,
        variant = props.variant;
    var fontScale = mathMax(toFloat(props.fontScale, 1), 0) || 1;
    var scale = mathMax(toFloat(props.scale, 1), 0) || 1;
    var rotate = toFloat(props.rotate, 0);
    var shiftH = toFloat(props.shiftH, 0);
    var shiftV = toFloat(props.shiftV, 0); // Compute the transforms
    // Note that order is important as SVG transforms are applied in order from
    // left to right and we want flipping/scale to occur before rotation
    // Note shifting is applied separately
    // Assumes that the viewbox is `0 0 16 16` (`8 8` is the center)

    var hasScale = flipH || flipV || scale !== 1;
    var hasTransforms = hasScale || rotate;
    var hasShift = shiftH || shiftV;
    var hasContent = !isUndefinedOrNull(content);
    var transforms = [hasTransforms ? 'translate(8 8)' : null, hasScale ? "scale(".concat((flipH ? -1 : 1) * scale, " ").concat((flipV ? -1 : 1) * scale, ")") : null, rotate ? "rotate(".concat(rotate, ")") : null, hasTransforms ? 'translate(-8 -8)' : null].filter(identity); // We wrap the content in a `<g>` for handling the transforms (except shift)

    var $inner = h('g', {
      attrs: {
        transform: transforms.join(' ') || null
      },
      domProps: hasContent ? {
        innerHTML: content || ''
      } : {}
    }, children); // If needed, we wrap in an additional `<g>` in order to handle the shifting

    if (hasShift) {
      $inner = h('g', {
        attrs: {
          transform: "translate(".concat(16 * shiftH / 16, " ").concat(-16 * shiftV / 16, ")")
        }
      }, [$inner]);
    } // Wrap in an additional `<g>` for proper animation handling if stacked


    if (stacked) {
      $inner = h('g', [$inner]);
    }

    var $title = title ? h('title', title) : null;
    var $content = [$title, $inner].filter(identity);
    return h('svg', a({
      staticClass: 'b-icon bi',
      class: (_class = {}, _defineProperty$x(_class, "text-".concat(variant), variant), _defineProperty$x(_class, "b-icon-animation-".concat(animation), animation), _class),
      attrs: BASE_ATTRS,
      style: stacked ? {} : {
        fontSize: fontScale === 1 ? null : "".concat(fontScale * 100, "%")
      }
    }, // Merge in user supplied data
    data, // If icon is stacked, null-out some attrs
    stacked ? {
      attrs: STACKED_ATTRS
    } : {}, // These cannot be overridden by users
    {
      attrs: {
        xmlns: stacked ? null : 'http://www.w3.org/2000/svg',
        fill: 'currentColor'
      }
    }), $content);
  }
});function ownKeys$s(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$s(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$s(Object(source), true).forEach(function (key) { _defineProperty$w(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$s(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$w(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Icon component generator function
 *
 * @param {string} icon name (minus the leading `BIcon`)
 * @param {string} raw `innerHTML` for SVG
 * @return {VueComponent}
 */

var makeIcon = function makeIcon(name, content) {
  // For performance reason we pre-compute some values, so that
  // they are not computed on each render of the icon component
  var kebabName = kebabCase(name);
  var iconName = "BIcon".concat(pascalCase(name));
  var iconNameClass = "bi-".concat(kebabName);
  var iconTitle = kebabName.replace(/-/g, ' ');
  var svgContent = trim(content || '');
  return /*#__PURE__*/Vue__default['default'].extend({
    name: iconName,
    functional: true,
    props: omit(props$M, ['content']),
    render: function render(h, _ref) {
      var data = _ref.data,
          props = _ref.props;
      return h(BVIconBase, a( // Defaults
      {
        props: {
          title: iconTitle
        },
        attrs: {
          'aria-label': iconTitle
        }
      }, // User data
      data, // Required data
      {
        staticClass: iconNameClass,
        props: _objectSpread$s(_objectSpread$s({}, props), {}, {
          content: svgContent
        })
      }));
    }
  });
};// --- BEGIN AUTO-GENERATED FILE ---
var BIconBlank=/*#__PURE__*/makeIcon('Blank','');// --- Bootstrap Icons ---
var BIconCalendar=/*#__PURE__*/makeIcon('Calendar','<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>');// eslint-disable-next-line
var BIconCalendarFill=/*#__PURE__*/makeIcon('CalendarFill','<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>');// eslint-disable-next-line
var BIconChevronBarLeft=/*#__PURE__*/makeIcon('ChevronBarLeft','<path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>');// eslint-disable-next-line
var BIconChevronDoubleLeft=/*#__PURE__*/makeIcon('ChevronDoubleLeft','<path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>');// eslint-disable-next-line
var BIconChevronDown=/*#__PURE__*/makeIcon('ChevronDown','<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>');// eslint-disable-next-line
var BIconChevronLeft=/*#__PURE__*/makeIcon('ChevronLeft','<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>');// eslint-disable-next-line
var BIconCircleFill=/*#__PURE__*/makeIcon('CircleFill','<circle cx="8" cy="8" r="8"/>');// eslint-disable-next-line
var BIconStar=/*#__PURE__*/makeIcon('Star','<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>');// eslint-disable-next-line
var BIconStarFill=/*#__PURE__*/makeIcon('StarFill','<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>');// eslint-disable-next-line
var BIconStarHalf=/*#__PURE__*/makeIcon('StarHalf','<path d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z"/>');// eslint-disable-next-line
var BIconX=/*#__PURE__*/makeIcon('X','<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>');// eslint-disable-next-line
// --- END AUTO-GENERATED FILE ---
function ownKeys$r(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$r(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$r(Object(source), true).forEach(function (key) { _defineProperty$v(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$r(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$v(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var findIconComponent = function findIconComponent(ctx, iconName) {
  if (!ctx) {
    return null;
  }

  var components = (ctx.$options || {}).components;
  var iconComponent = components[iconName];
  return iconComponent || findIconComponent(ctx.$parent, iconName);
}; // --- Props ---


var iconProps = omit(props$M, ['content']);
var props$L = makePropsConfigurable(sortKeys(_objectSpread$r(_objectSpread$r({}, iconProps), {}, {
  icon: makeProp(PROP_TYPE_STRING)
})), NAME_ICON); // --- Main component ---
// Helper BIcon component
// Requires the requested icon component to be installed
// @vue/component

var BIcon = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_ICON,
  functional: true,
  props: props$L,
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        parent = _ref.parent;
    var icon = pascalCase(trim(props.icon || '')).replace(RX_ICON_PREFIX, ''); // If parent context exists, we check to see if the icon has been registered
    // either locally in the parent component, or globally at the `$root` level
    // If not registered, we render a blank icon

    return h(icon ? findIconComponent(parent, "BIcon".concat(icon)) || BIconBlank : BIconBlank, a(data, {
      props: pluckProps(iconProps, props)
    }));
  }
});var CODE_DOWN = 40;
var CODE_END = 35;
var CODE_ENTER = 13;
var CODE_ESC = 27;
var CODE_HOME = 36;
var CODE_LEFT = 37;
var CODE_PAGEDOWN = 34;
var CODE_PAGEUP = 33;
var CODE_RIGHT = 39;
var CODE_SPACE = 32;
var CODE_UP = 38;// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)

var compareArrays = function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */


var looseEqual = function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = keys(a).length;
    var bKeysCount = keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = hasOwnProperty(a, key);
      var bHasKey = hasOwnProperty(b, key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
};function _defineProperty$u(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isEmpty = function isEmpty(value) {
  return !value || keys(value).length === 0;
};

var makePropWatcher = function makePropWatcher(propName) {
  return {
    handler: function handler(newValue, oldValue) {
      if (looseEqual(newValue, oldValue)) {
        return;
      }

      if (isEmpty(newValue) || isEmpty(oldValue)) {
        this[propName] = cloneDeep(newValue);
        return;
      }

      for (var key in oldValue) {
        if (!hasOwnProperty(newValue, key)) {
          this.$delete(this.$data[propName], key);
        }
      }

      for (var _key in newValue) {
        this.$set(this.$data[propName], _key, newValue[_key]);
      }
    }
  };
};
var makePropCacheMixin = function makePropCacheMixin(propName, proxyPropName) {
  return Vue__default['default'].extend({
    data: function data() {
      return _defineProperty$u({}, proxyPropName, cloneDeep(this[propName]));
    },
    watch: _defineProperty$u({}, propName, makePropWatcher(proxyPropName))
  });
};var attrsMixin = makePropCacheMixin('$attrs', 'bvAttrs');var listenOnRootMixin = Vue__default['default'].extend({
  methods: {
    /**
     * Safely register event listeners on the root Vue node
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on root and is destroyed,
     * this orphans a callback because the node is gone,
     * but the root does not clear the callback
     *
     * When registering a `$root` listener, it also registers a listener on
     * the component's `beforeDestroy()` hook to automatically remove the
     * event listener from the `$root` instance
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOnRoot: function listenOnRoot(event, callback) {
      var _this = this;

      this.$root.$on(event, callback);
      this.$on(HOOK_EVENT_NAME_BEFORE_DESTROY, function () {
        _this.$root.$off(event, callback);
      });
    },

    /**
     * Safely register a `$once()` event listener on the root Vue node
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on root and is destroyed,
     * this orphans a callback because the node is gone,
     * but the root does not clear the callback
     *
     * When registering a $root listener, it also registers a listener on
     * the component's `beforeDestroy` hook to automatically remove the
     * event listener from the $root instance.
     *
     * @param {string} event
     * @param {function} callback
     */
    listenOnRootOnce: function listenOnRootOnce(event, callback) {
      var _this2 = this;

      this.$root.$once(event, callback);
      this.$on(HOOK_EVENT_NAME_BEFORE_DESTROY, function () {
        _this2.$root.$off(event, callback);
      });
    },

    /**
     * Convenience method for calling `vm.$emit()` on `vm.$root`
     *
     * @param {string} event
     * @param {*} args
     */
    emitOnRoot: function emitOnRoot(event) {
      var _this$$root;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_this$$root = this.$root).$emit.apply(_this$$root, [event].concat(args));
    }
  }
});var listenersMixin = makePropCacheMixin('$listeners', 'bvListeners');function _toConsumableArray$3(arr) { return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread$3(); }

function _nonIterableSpread$3() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _iterableToArray$3(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$3(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$4(arr); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$q(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$q(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$q(Object(source), true).forEach(function (key) { _defineProperty$t(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$q(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$t(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ROOT_EVENT_NAME_CLICKED = getRootEventName(NAME_LINK, 'clicked'); // --- Props ---
// `<router-link>` specific props

var routerLinkProps = {
  activeClass: makeProp(PROP_TYPE_STRING),
  append: makeProp(PROP_TYPE_BOOLEAN, false),
  event: makeProp(PROP_TYPE_ARRAY_STRING, EVENT_NAME_CLICK),
  exact: makeProp(PROP_TYPE_BOOLEAN, false),
  exactActiveClass: makeProp(PROP_TYPE_STRING),
  replace: makeProp(PROP_TYPE_BOOLEAN, false),
  routerTag: makeProp(PROP_TYPE_STRING, 'a'),
  to: makeProp(PROP_TYPE_OBJECT_STRING)
}; // `<nuxt-link>` specific props

var nuxtLinkProps = {
  noPrefetch: makeProp(PROP_TYPE_BOOLEAN, false),
  // Must be `null` to fall back to the value defined in the
  // `nuxt.config.js` configuration file for `router.prefetchLinks`
  // We convert `null` to `undefined`, so that Nuxt.js will use the
  // compiled default
  // Vue treats `undefined` as default of `false` for Boolean props,
  // so we must set it as `null` here to be a true tri-state prop
  prefetch: makeProp(PROP_TYPE_BOOLEAN, null)
}; // All `<b-link>` props

var props$K = makePropsConfigurable(sortKeys(_objectSpread$q(_objectSpread$q(_objectSpread$q({}, nuxtLinkProps), routerLinkProps), {}, {
  active: makeProp(PROP_TYPE_BOOLEAN, false),
  disabled: makeProp(PROP_TYPE_BOOLEAN, false),
  href: makeProp(PROP_TYPE_STRING),
  // Must be `null` if no value provided
  rel: makeProp(PROP_TYPE_STRING, null),
  // To support 3rd party router links based on `<router-link>` (i.e. `g-link` for Gridsome)
  // Default is to auto choose between `<router-link>` and `<nuxt-link>`
  // Gridsome doesn't provide a mechanism to auto detect and has caveats
  // such as not supporting FQDN URLs or hash only URLs
  routerComponentName: makeProp(PROP_TYPE_STRING),
  target: makeProp(PROP_TYPE_STRING, '_self')
})), NAME_LINK); // --- Main component ---
// @vue/component

var BLink = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_LINK,
  // Mixin order is important!
  mixins: [attrsMixin, listenersMixin, listenOnRootMixin, normalizeSlotMixin],
  inheritAttrs: false,
  props: props$K,
  computed: {
    computedTag: function computedTag() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var to = this.to,
          disabled = this.disabled,
          routerComponentName = this.routerComponentName;
      return computeTag({
        to: to,
        disabled: disabled,
        routerComponentName: routerComponentName
      }, this);
    },
    isRouterLink: function isRouterLink$1() {
      return isRouterLink(this.computedTag);
    },
    computedRel: function computedRel() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var target = this.target,
          rel = this.rel;
      return computeRel({
        target: target,
        rel: rel
      });
    },
    computedHref: function computedHref() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var to = this.to,
          href = this.href;
      return computeHref({
        to: to,
        href: href
      }, this.computedTag);
    },
    computedProps: function computedProps() {
      var prefetch = this.prefetch;
      return this.isRouterLink ? _objectSpread$q(_objectSpread$q({}, pluckProps(_objectSpread$q(_objectSpread$q({}, routerLinkProps), nuxtLinkProps), this)), {}, {
        // Coerce `prefetch` value `null` to be `undefined`
        prefetch: isBoolean(prefetch) ? prefetch : undefined,
        // Pass `router-tag` as `tag` prop
        tag: this.routerTag
      }) : {};
    },
    computedAttrs: function computedAttrs() {
      var bvAttrs = this.bvAttrs,
          href = this.computedHref,
          rel = this.computedRel,
          disabled = this.disabled,
          target = this.target,
          routerTag = this.routerTag,
          isRouterLink = this.isRouterLink;
      return _objectSpread$q(_objectSpread$q(_objectSpread$q(_objectSpread$q({}, bvAttrs), href ? {
        href: href
      } : {}), isRouterLink && !isTag(routerTag, 'a') ? {} : {
        rel: rel,
        target: target
      }), {}, {
        tabindex: disabled ? '-1' : isUndefined(bvAttrs.tabindex) ? null : bvAttrs.tabindex,
        'aria-disabled': disabled ? 'true' : null
      });
    },
    computedListeners: function computedListeners() {
      return _objectSpread$q(_objectSpread$q({}, this.bvListeners), {}, {
        // We want to overwrite any click handler since our callback
        // will invoke the user supplied handler(s) if `!this.disabled`
        click: this.onClick
      });
    }
  },
  methods: {
    onClick: function onClick(event) {
      var _arguments = arguments;
      var eventIsEvent = isEvent(event);
      var isRouterLink = this.isRouterLink;
      var suppliedHandler = this.bvListeners.click;

      if (eventIsEvent && this.disabled) {
        // Stop event from bubbling up
        // Kill the event loop attached to this specific `EventTarget`
        // Needed to prevent `vue-router` for doing its thing
        stopEvent(event, {
          immediatePropagation: true
        });
      } else {
        /* istanbul ignore next: difficult to test, but we know it works */
        if (isRouterLink && event.currentTarget.__vue__) {
          // Router links do not emit instance `click` events, so we
          // add in an `$emit('click', event)` on its Vue instance
          event.currentTarget.__vue__.$emit(EVENT_NAME_CLICK, event);
        } // Call the suppliedHandler(s), if any provided


        concat(suppliedHandler).filter(function (h) {
          return isFunction$1(h);
        }).forEach(function (handler) {
          handler.apply(void 0, _toConsumableArray$3(_arguments));
        }); // Emit the global `$root` click event

        this.emitOnRoot(ROOT_EVENT_NAME_CLICKED, event); // TODO: Remove deprecated 'clicked::link' event with next major release

        this.emitOnRoot('clicked::link', event);
      } // Stop scroll-to-top behavior or navigation on
      // regular links when href is just '#'


      if (eventIsEvent && !isRouterLink && this.computedHref === '#') {
        stopEvent(event, {
          propagation: false
        });
      }
    },
    focus: function focus() {
      attemptFocus(this.$el);
    },
    blur: function blur() {
      attemptBlur(this.$el);
    }
  },
  render: function render(h) {
    var active = this.active,
        disabled = this.disabled;
    return h(this.computedTag, _defineProperty$t({
      class: {
        active: active,
        disabled: disabled
      },
      attrs: this.computedAttrs,
      props: this.computedProps
    }, this.isRouterLink ? 'nativeOn' : 'on', this.computedListeners), this.normalizeSlot());
  }
});function ownKeys$p(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$p(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$p(Object(source), true).forEach(function (key) { _defineProperty$s(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$p(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$s(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var linkProps = omit(props$K, ['event', 'routerTag']);
delete linkProps.href.default;
delete linkProps.to.default;
var props$J = makePropsConfigurable(sortKeys(_objectSpread$p(_objectSpread$p({}, linkProps), {}, {
  block: makeProp(PROP_TYPE_BOOLEAN, false),
  disabled: makeProp(PROP_TYPE_BOOLEAN, false),
  pill: makeProp(PROP_TYPE_BOOLEAN, false),
  // Tri-state: `true`, `false` or `null`
  // => On, off, not a toggle
  pressed: makeProp(PROP_TYPE_BOOLEAN, null),
  size: makeProp(PROP_TYPE_STRING),
  squared: makeProp(PROP_TYPE_BOOLEAN, false),
  tag: makeProp(PROP_TYPE_STRING, 'button'),
  type: makeProp(PROP_TYPE_STRING, 'button'),
  variant: makeProp(PROP_TYPE_STRING, 'secondary')
})), NAME_BUTTON); // --- Helper methods ---
// Focus handler for toggle buttons
// Needs class of 'focus' when focused

var handleFocus = function handleFocus(event) {
  if (event.type === 'focusin') {
    addClass(event.target, 'focus');
  } else if (event.type === 'focusout') {
    removeClass(event.target, 'focus');
  }
}; // Is the requested button a link?
// If tag prop is set to `a`, we use a <b-link> to get proper disabled handling


var isLink = function isLink(props) {
  return isLink$1(props) || isTag(props.tag, 'a');
}; // Is the button to be a toggle button?


var isToggle = function isToggle(props) {
  return isBoolean(props.pressed);
}; // Is the button "really" a button?


var isButton = function isButton(props) {
  return !(isLink(props) || props.tag && !isTag(props.tag, 'button'));
}; // Is the requested tag not a button or link?


var isNonStandardTag = function isNonStandardTag(props) {
  return !isLink(props) && !isButton(props);
}; // Compute required classes (non static classes)


var computeClass = function computeClass(props) {
  var _ref;

  return ["btn-".concat(props.variant || 'secondary'), (_ref = {}, _defineProperty$s(_ref, "btn-".concat(props.size), props.size), _defineProperty$s(_ref, 'btn-block', props.block), _defineProperty$s(_ref, 'rounded-pill', props.pill), _defineProperty$s(_ref, 'rounded-0', props.squared && !props.pill), _defineProperty$s(_ref, "disabled", props.disabled), _defineProperty$s(_ref, "active", props.pressed), _ref)];
}; // Compute the link props to pass to b-link (if required)


var computeLinkProps = function computeLinkProps(props) {
  return isLink(props) ? pluckProps(linkProps, props) : {};
}; // Compute the attributes for a button


var computeAttrs = function computeAttrs(props, data) {
  var button = isButton(props);
  var link = isLink(props);
  var toggle = isToggle(props);
  var nonStandardTag = isNonStandardTag(props);
  var hashLink = link && props.href === '#';
  var role = data.attrs && data.attrs.role ? data.attrs.role : null;
  var tabindex = data.attrs ? data.attrs.tabindex : null;

  if (nonStandardTag || hashLink) {
    tabindex = '0';
  }

  return {
    // Type only used for "real" buttons
    type: button && !link ? props.type : null,
    // Disabled only set on "real" buttons
    disabled: button ? props.disabled : null,
    // We add a role of button when the tag is not a link or button for ARIA
    // Don't bork any role provided in `data.attrs` when `isLink` or `isButton`
    // Except when link has `href` of `#`
    role: nonStandardTag || hashLink ? 'button' : role,
    // We set the `aria-disabled` state for non-standard tags
    'aria-disabled': nonStandardTag ? String(props.disabled) : null,
    // For toggles, we need to set the pressed state for ARIA
    'aria-pressed': toggle ? String(props.pressed) : null,
    // `autocomplete="off"` is needed in toggle mode to prevent some browsers
    // from remembering the previous setting when using the back button
    autocomplete: toggle ? 'off' : null,
    // `tabindex` is used when the component is not a button
    // Links are tabbable, but don't allow disabled, while non buttons or links
    // are not tabbable, so we mimic that functionality by disabling tabbing
    // when disabled, and adding a `tabindex="0"` to non buttons or non links
    tabindex: props.disabled && !button ? '-1' : tabindex
  };
}; // --- Main component ---
// @vue/component


var BButton = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_BUTTON,
  functional: true,
  props: props$J,
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        listeners = _ref2.listeners,
        children = _ref2.children;
    var toggle = isToggle(props);
    var link = isLink(props);
    var nonStandardTag = isNonStandardTag(props);
    var hashLink = link && props.href === '#';
    var on = {
      keydown: function keydown(event) {
        // When the link is a `href="#"` or a non-standard tag (has `role="button"`),
        // we add a keydown handlers for CODE_SPACE/CODE_ENTER

        /* istanbul ignore next */
        if (props.disabled || !(nonStandardTag || hashLink)) {
          return;
        }

        var keyCode = event.keyCode; // Add CODE_SPACE handler for `href="#"` and CODE_ENTER handler for non-standard tags

        if (keyCode === CODE_SPACE || keyCode === CODE_ENTER && nonStandardTag) {
          var target = event.currentTarget || event.target;
          stopEvent(event, {
            propagation: false
          });
          target.click();
        }
      },
      click: function click(event) {
        /* istanbul ignore if: blink/button disabled should handle this */
        if (props.disabled && isEvent(event)) {
          stopEvent(event);
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send `.sync` updates to any "pressed" prop (if `.sync` listeners)
          // `concat()` will normalize the value to an array without
          // double wrapping an array value in an array
          concat(listeners['update:pressed']).forEach(function (fn) {
            if (isFunction$1(fn)) {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (toggle) {
      on.focusin = handleFocus;
      on.focusout = handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: computeClass(props),
      props: computeLinkProps(props),
      attrs: computeAttrs(props, data),
      on: on
    };
    return h(link ? BLink : props.tag, a(data, componentData), children);
  }
});var stripTags = function stripTags() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(text).replace(RX_HTML_TAGS, '');
}; // Generate a `domProps` object for either `innerHTML`, `textContent` or an empty object

var htmlOrText = function htmlOrText(innerHTML, textContent) {
  return innerHTML ? {
    innerHTML: innerHTML
  } : textContent ? {
    textContent: textContent
  } : {};
};var CALENDAR_GREGORY = 'gregory';
var CALENDAR_LONG = 'long';
var CALENDAR_NARROW = 'narrow';
var CALENDAR_SHORT = 'short';
var DATE_FORMAT_2_DIGIT = '2-digit';
var DATE_FORMAT_NUMERIC = 'numeric';function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
// Create or clone a date (`new Date(...)` shortcut)

var createDate = function createDate() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Date, args);
}; // Parse a date sting, or Date object, into a Date object (with no time information)

var parseYMD = function parseYMD(date) {
  if (isString(date) && RX_DATE.test(date.trim())) {
    var _date$split$map = date.split(RX_DATE_SPLIT).map(function (v) {
      return toInteger(v, 1);
    }),
        _date$split$map2 = _slicedToArray(_date$split$map, 3),
        year = _date$split$map2[0],
        month = _date$split$map2[1],
        day = _date$split$map2[2];

    return createDate(year, month - 1, day);
  } else if (isDate(date)) {
    return createDate(date.getFullYear(), date.getMonth(), date.getDate());
  }

  return null;
}; // Format a date object as `YYYY-MM-DD` format

var formatYMD = function formatYMD(date) {
  date = parseYMD(date);

  if (!date) {
    return null;
  }

  var year = date.getFullYear();
  var month = "0".concat(date.getMonth() + 1).slice(-2);
  var day = "0".concat(date.getDate()).slice(-2);
  return "".concat(year, "-").concat(month, "-").concat(day);
}; // Given a locale (or locales), resolve the browser available locale

var resolveLocale = function resolveLocale(locales)
/* istanbul ignore next */
{
  var calendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CALENDAR_GREGORY;
  locales = concat(locales).filter(identity);
  var fmt = new Intl.DateTimeFormat(locales, {
    calendar: calendar
  });
  return fmt.resolvedOptions().locale;
}; // Create a `Intl.DateTimeFormat` formatter function

var createDateFormatter = function createDateFormatter(locale, options)
/* istanbul ignore next */
{
  var dtf = new Intl.DateTimeFormat(locale, options);
  return dtf.format;
}; // Determine if two dates are the same date (ignoring time portion)

var datesEqual = function datesEqual(date1, date2) {
  // Returns true of the date portion of two date objects are equal
  // We don't compare the time portion
  return formatYMD(date1) === formatYMD(date2);
}; // --- Date "math" utility methods (for BCalendar component mainly) ---

var firstDateOfMonth = function firstDateOfMonth(date) {
  date = createDate(date);
  date.setDate(1);
  return date;
};
var lastDateOfMonth = function lastDateOfMonth(date) {
  date = createDate(date);
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  return date;
};
var addYears = function addYears(date, numberOfYears) {
  date = createDate(date);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear() + numberOfYears); // Handle Feb 29th for leap years

  if (date.getMonth() !== month) {
    date.setDate(0);
  }

  return date;
};
var oneMonthAgo = function oneMonthAgo(date) {
  date = createDate(date);
  var month = date.getMonth();
  date.setMonth(month - 1); // Handle when days in month are different

  if (date.getMonth() === month) {
    date.setDate(0);
  }

  return date;
};
var oneMonthAhead = function oneMonthAhead(date) {
  date = createDate(date);
  var month = date.getMonth();
  date.setMonth(month + 1); // Handle when days in month are different

  if (date.getMonth() === (month + 2) % 12) {
    date.setDate(0);
  }

  return date;
};
var oneYearAgo = function oneYearAgo(date) {
  return addYears(date, -1);
};
var oneYearAhead = function oneYearAhead(date) {
  return addYears(date, 1);
};
var oneDecadeAgo = function oneDecadeAgo(date) {
  return addYears(date, -10);
};
var oneDecadeAhead = function oneDecadeAhead(date) {
  return addYears(date, 10);
}; // Helper function to constrain a date between two values
// Always returns a `Date` object or `null` if no date passed

var constrainDate = function constrainDate(date) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // Ensure values are `Date` objects (or `null`)
  date = parseYMD(date);
  min = parseYMD(min) || date;
  max = parseYMD(max) || date; // Return a new `Date` object (or `null`)

  return date ? date < min ? min : date > max ? max : date : null;
};// Localization utilities

var RTL_LANGS = ['ar', 'az', 'ckb', 'fa', 'he', 'ks', 'lrc', 'mzn', 'ps', 'sd', 'te', 'ug', 'ur', 'yi'].map(function (locale) {
  return locale.toLowerCase();
}); // Returns true if the locale is RTL

var isLocaleRTL = function isLocaleRTL(locale) {
  // Determines if the locale is RTL (only single locale supported)
  var parts = toString(locale).toLowerCase().replace(RX_STRIP_LOCALE_MODS, '').split('-');
  var locale1 = parts.slice(0, 2).join('-');
  var locale2 = parts[0];
  return arrayIncludes(RTL_LANGS, locale1) || arrayIncludes(RTL_LANGS, locale2);
};// SSR safe client-side ID attribute generation

var props$I = {
  id: makeProp(PROP_TYPE_STRING)
}; // --- Mixin ---
// @vue/component

var idMixin = Vue__default['default'].extend({
  props: props$I,
  data: function data() {
    return {
      localId_: null
    };
  },
  computed: {
    safeId: function safeId() {
      // Computed property that returns a dynamic function for creating the ID
      // Reacts to changes in both `.id` and `.localId_` and regenerates a new function
      var id = this.id || this.localId_; // We return a function that accepts an optional suffix string
      // So this computed prop looks and works like a method
      // but benefits from Vue's computed prop caching

      var fn = function fn(suffix) {
        if (!id) {
          return null;
        }

        suffix = String(suffix || '').replace(/\s+/g, '_');
        return suffix ? id + '_' + suffix : id;
      };

      return fn;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // `mounted()` only occurs client-side
    this.$nextTick(function () {
      // Update DOM with auto-generated ID after mount
      // to prevent SSR hydration errors
      _this.localId_ = "__BVID__".concat(_this[COMPONENT_UID_KEY]);
    });
  }
});var _watch$4;

function ownKeys$o(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$o(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$o(Object(source), true).forEach(function (key) { _defineProperty$r(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$o(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$r(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _makeModelMixin$6 = makeModelMixin('value', {
  type: PROP_TYPE_DATE_STRING
}),
    modelMixin$5 = _makeModelMixin$6.mixin,
    modelProps$5 = _makeModelMixin$6.props,
    MODEL_PROP_NAME$5 = _makeModelMixin$6.prop,
    MODEL_EVENT_NAME$5 = _makeModelMixin$6.event; // --- Props ---


var props$H = makePropsConfigurable(sortKeys(_objectSpread$o(_objectSpread$o(_objectSpread$o({}, props$I), modelProps$5), {}, {
  ariaControls: makeProp(PROP_TYPE_STRING),
  // Makes calendar the full width of its parent container
  block: makeProp(PROP_TYPE_BOOLEAN, false),
  dateDisabledFn: makeProp(PROP_TYPE_FUNCTION),
  // `Intl.DateTimeFormat` object
  dateFormatOptions: makeProp(PROP_TYPE_OBJECT, {
    year: DATE_FORMAT_NUMERIC,
    month: CALENDAR_LONG,
    day: DATE_FORMAT_NUMERIC,
    weekday: CALENDAR_LONG
  }),
  // Function to set a class of (classes) on the date cell
  // if passed a string or an array
  // TODO:
  //   If the function returns an object, look for class prop for classes,
  //   and other props for handling events/details/descriptions
  dateInfoFn: makeProp(PROP_TYPE_FUNCTION),
  // 'ltr', 'rtl', or `null` (for auto detect)
  direction: makeProp(PROP_TYPE_STRING),
  disabled: makeProp(PROP_TYPE_BOOLEAN, false),
  // When `true`, renders a comment node, but keeps the component instance active
  // Mainly for <b-form-date>, so that we can get the component's value and locale
  // But we might just use separate date formatters, using the resolved locale
  // (adjusted for the gregorian calendar)
  hidden: makeProp(PROP_TYPE_BOOLEAN, false),
  // When `true` makes the selected date header `sr-only`
  hideHeader: makeProp(PROP_TYPE_BOOLEAN, false),
  // This specifies the calendar year/month/day that will be shown when
  // first opening the datepicker if no v-model value is provided
  // Default is the current date (or `min`/`max`)
  initialDate: makeProp(PROP_TYPE_DATE_STRING),
  // Labels for buttons and keyboard shortcuts
  labelCalendar: makeProp(PROP_TYPE_STRING, 'Calendar'),
  labelCurrentMonth: makeProp(PROP_TYPE_STRING, 'Current month'),
  labelHelp: makeProp(PROP_TYPE_STRING, 'Use cursor keys to navigate calendar dates'),
  labelNav: makeProp(PROP_TYPE_STRING, 'Calendar navigation'),
  labelNextDecade: makeProp(PROP_TYPE_STRING, 'Next decade'),
  labelNextMonth: makeProp(PROP_TYPE_STRING, 'Next month'),
  labelNextYear: makeProp(PROP_TYPE_STRING, 'Next year'),
  labelNoDateSelected: makeProp(PROP_TYPE_STRING, 'No date selected'),
  labelPrevDecade: makeProp(PROP_TYPE_STRING, 'Previous decade'),
  labelPrevMonth: makeProp(PROP_TYPE_STRING, 'Previous month'),
  labelPrevYear: makeProp(PROP_TYPE_STRING, 'Previous year'),
  labelSelected: makeProp(PROP_TYPE_STRING, 'Selected date'),
  labelToday: makeProp(PROP_TYPE_STRING, 'Today'),
  // Locale(s) to use
  // Default is to use page/browser default setting
  locale: makeProp(PROP_TYPE_ARRAY_STRING),
  max: makeProp(PROP_TYPE_DATE_STRING),
  min: makeProp(PROP_TYPE_DATE_STRING),
  // Variant color to use for the navigation buttons
  navButtonVariant: makeProp(PROP_TYPE_STRING, 'secondary'),
  // Disable highlighting today's date
  noHighlightToday: makeProp(PROP_TYPE_BOOLEAN, false),
  noKeyNav: makeProp(PROP_TYPE_BOOLEAN, false),
  readonly: makeProp(PROP_TYPE_BOOLEAN, false),
  roleDescription: makeProp(PROP_TYPE_STRING),
  // Variant color to use for the selected date
  selectedVariant: makeProp(PROP_TYPE_STRING, 'primary'),
  // When `true` enables the decade navigation buttons
  showDecadeNav: makeProp(PROP_TYPE_BOOLEAN, false),
  // Day of week to start calendar on
  // `0` (Sunday), `1` (Monday), ... `6` (Saturday)
  startWeekday: makeProp(PROP_TYPE_NUMBER_STRING, 0),
  // Variant color to use for today's date (defaults to `selectedVariant`)
  todayVariant: makeProp(PROP_TYPE_STRING),
  // Always return the `v-model` value as a date object
  valueAsDate: makeProp(PROP_TYPE_BOOLEAN, false),
  // Format of the weekday names at the top of the calendar
  // `short` is typically a 3 letter abbreviation,
  // `narrow` is typically a single letter
  // `long` is the full week day name
  // Although some locales may override this (i.e `ar`, etc.)
  weekdayHeaderFormat: makeProp(PROP_TYPE_STRING, CALENDAR_SHORT, function (value) {
    return arrayIncludes([CALENDAR_LONG, CALENDAR_SHORT, CALENDAR_NARROW], value);
  }),
  // Has no effect if prop `block` is set
  width: makeProp(PROP_TYPE_STRING, '270px')
})), NAME_CALENDAR); // --- Main component ---
// @vue/component

var BCalendar = Vue__default['default'].extend({
  name: NAME_CALENDAR,
  // Mixin order is important!
  mixins: [attrsMixin, idMixin, modelMixin$5, normalizeSlotMixin],
  props: props$H,
  data: function data() {
    var selected = formatYMD(this[MODEL_PROP_NAME$5]) || '';
    return {
      // Selected date
      selectedYMD: selected,
      // Date in calendar grid that has `tabindex` of `0`
      activeYMD: selected || formatYMD(constrainDate(this.initialDate || this.getToday()), this.min, this.max),
      // Will be true if the calendar grid has/contains focus
      gridHasFocus: false,
      // Flag to enable the `aria-live` region(s) after mount
      // to prevent screen reader "outbursts" when mounting
      isLive: false
    };
  },
  computed: {
    valueId: function valueId() {
      return this.safeId();
    },
    widgetId: function widgetId() {
      return this.safeId('_calendar-wrapper_');
    },
    navId: function navId() {
      return this.safeId('_calendar-nav_');
    },
    gridId: function gridId() {
      return this.safeId('_calendar-grid_');
    },
    gridCaptionId: function gridCaptionId() {
      return this.safeId('_calendar-grid-caption_');
    },
    gridHelpId: function gridHelpId() {
      return this.safeId('_calendar-grid-help_');
    },
    activeId: function activeId() {
      return this.activeYMD ? this.safeId("_cell-".concat(this.activeYMD, "_")) : null;
    },
    // TODO: Use computed props to convert `YYYY-MM-DD` to `Date` object
    selectedDate: function selectedDate() {
      // Selected as a `Date` object
      return parseYMD(this.selectedYMD);
    },
    activeDate: function activeDate() {
      // Active as a `Date` object
      return parseYMD(this.activeYMD);
    },
    computedMin: function computedMin() {
      return parseYMD(this.min);
    },
    computedMax: function computedMax() {
      return parseYMD(this.max);
    },
    computedWeekStarts: function computedWeekStarts() {
      // `startWeekday` is a prop (constrained to `0` through `6`)
      return mathMax(toInteger(this.startWeekday, 0), 0) % 7;
    },
    computedLocale: function computedLocale() {
      // Returns the resolved locale used by the calendar
      return resolveLocale(concat(this.locale).filter(identity), CALENDAR_GREGORY);
    },
    computedDateDisabledFn: function computedDateDisabledFn() {
      var dateDisabledFn = this.dateDisabledFn;
      return hasPropFunction(dateDisabledFn) ? dateDisabledFn : function () {
        return false;
      };
    },
    // TODO: Change `dateInfoFn` to handle events and notes as well as classes
    computedDateInfoFn: function computedDateInfoFn() {
      var dateInfoFn = this.dateInfoFn;
      return hasPropFunction(dateInfoFn) ? dateInfoFn : function () {
        return {};
      };
    },
    calendarLocale: function calendarLocale() {
      // This locale enforces the gregorian calendar (for use in formatter functions)
      // Needed because IE 11 resolves `ar-IR` as islamic-civil calendar
      // and IE 11 (and some other browsers) do not support the `calendar` option
      // And we currently only support the gregorian calendar
      var fmt = new Intl.DateTimeFormat(this.computedLocale, {
        calendar: CALENDAR_GREGORY
      });
      var calendar = fmt.resolvedOptions().calendar;
      var locale = fmt.resolvedOptions().locale;
      /* istanbul ignore if: mainly for IE 11 and a few other browsers, hard to test in JSDOM */

      if (calendar !== CALENDAR_GREGORY) {
        // Ensure the locale requests the gregorian calendar
        // Mainly for IE 11, and currently we can't handle non-gregorian calendars
        // TODO: Should we always return this value?
        locale = locale.replace(/-u-.+$/i, '').concat('-u-ca-gregory');
      }

      return locale;
    },
    calendarYear: function calendarYear() {
      return this.activeDate.getFullYear();
    },
    calendarMonth: function calendarMonth() {
      return this.activeDate.getMonth();
    },
    calendarFirstDay: function calendarFirstDay() {
      // We set the time for this date to 12pm to work around
      // date formatting issues in Firefox and Safari
      // See: https://github.com/bootstrap-vue/bootstrap-vue/issues/5818
      return createDate(this.calendarYear, this.calendarMonth, 1, 12);
    },
    calendarDaysInMonth: function calendarDaysInMonth() {
      // We create a new date as to not mutate the original
      var date = createDate(this.calendarFirstDay);
      date.setMonth(date.getMonth() + 1, 0);
      return date.getDate();
    },
    computedVariant: function computedVariant() {
      return "btn-".concat(this.selectedVariant || 'primary');
    },
    computedTodayVariant: function computedTodayVariant() {
      return "btn-outline-".concat(this.todayVariant || this.selectedVariant || 'primary');
    },
    computedNavButtonVariant: function computedNavButtonVariant() {
      return "btn-outline-".concat(this.navButtonVariant || 'primary');
    },
    isRTL: function isRTL() {
      // `true` if the language requested is RTL
      var dir = toString(this.direction).toLowerCase();

      if (dir === 'rtl') {
        /* istanbul ignore next */
        return true;
      } else if (dir === 'ltr') {
        /* istanbul ignore next */
        return false;
      }

      return isLocaleRTL(this.computedLocale);
    },
    context: function context() {
      var selectedYMD = this.selectedYMD,
          activeYMD = this.activeYMD;
      var selectedDate = parseYMD(selectedYMD);
      var activeDate = parseYMD(activeYMD);
      return {
        // The current value of the `v-model`
        selectedYMD: selectedYMD,
        selectedDate: selectedDate,
        selectedFormatted: selectedDate ? this.formatDateString(selectedDate) : this.labelNoDateSelected,
        // Which date cell is considered active due to navigation
        activeYMD: activeYMD,
        activeDate: activeDate,
        activeFormatted: activeDate ? this.formatDateString(activeDate) : '',
        // `true` if the date is disabled (when using keyboard navigation)
        disabled: this.dateDisabled(activeDate),
        // Locales used in formatting dates
        locale: this.computedLocale,
        calendarLocale: this.calendarLocale,
        rtl: this.isRTL
      };
    },
    // Computed props that return a function reference
    dateOutOfRange: function dateOutOfRange() {
      // Check whether a date is within the min/max range
      // Returns a new function ref if the pops change
      // We do this as we need to trigger the calendar computed prop
      // to update when these props update
      var min = this.computedMin,
          max = this.computedMax;
      return function (date) {
        // Handle both `YYYY-MM-DD` and `Date` objects
        date = parseYMD(date);
        return min && date < min || max && date > max;
      };
    },
    dateDisabled: function dateDisabled() {
      var _this = this;

      // Returns a function for validating if a date is within range
      // We grab this variables first to ensure a new function ref
      // is generated when the props value changes
      // We do this as we need to trigger the calendar computed prop
      // to update when these props update
      var rangeFn = this.dateOutOfRange; // Return the function ref

      return function (date) {
        // Handle both `YYYY-MM-DD` and `Date` objects
        date = parseYMD(date);
        var ymd = formatYMD(date);
        return !!(rangeFn(date) || _this.computedDateDisabledFn(ymd, date));
      };
    },
    // Computed props that return date formatter functions
    formatDateString: function formatDateString() {
      // Returns a date formatter function
      return createDateFormatter(this.calendarLocale, _objectSpread$o(_objectSpread$o({
        // Ensure we have year, month, day shown for screen readers/ARIA
        // If users really want to leave one of these out, they can
        // pass `undefined` for the property value
        year: DATE_FORMAT_NUMERIC,
        month: DATE_FORMAT_2_DIGIT,
        day: DATE_FORMAT_2_DIGIT
      }, this.dateFormatOptions), {}, {
        // Ensure hours/minutes/seconds are not shown
        // As we do not support the time portion (yet)
        hour: undefined,
        minute: undefined,
        second: undefined,
        // Ensure calendar is gregorian
        calendar: CALENDAR_GREGORY
      }));
    },
    formatYearMonth: function formatYearMonth() {
      // Returns a date formatter function
      return createDateFormatter(this.calendarLocale, {
        year: DATE_FORMAT_NUMERIC,
        month: CALENDAR_LONG,
        calendar: CALENDAR_GREGORY
      });
    },
    formatWeekdayName: function formatWeekdayName() {
      // Long weekday name for weekday header aria-label
      return createDateFormatter(this.calendarLocale, {
        weekday: CALENDAR_LONG,
        calendar: CALENDAR_GREGORY
      });
    },
    formatWeekdayNameShort: function formatWeekdayNameShort() {
      // Weekday header cell format
      // defaults to 'short' 3 letter days, where possible
      return createDateFormatter(this.calendarLocale, {
        weekday: this.weekdayHeaderFormat || CALENDAR_SHORT,
        calendar: CALENDAR_GREGORY
      });
    },
    formatDay: function formatDay() {
      // Calendar grid day number formatter
      // We don't use DateTimeFormatter here as it can place extra
      // character(s) after the number (i.e the `zh` locale)
      var nf = new Intl.NumberFormat([this.computedLocale], {
        style: 'decimal',
        minimumIntegerDigits: 1,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        notation: 'standard'
      }); // Return a formatter function instance

      return function (date) {
        return nf.format(date.getDate());
      };
    },
    // Disabled states for the nav buttons
    prevDecadeDisabled: function prevDecadeDisabled() {
      var min = this.computedMin;
      return this.disabled || min && lastDateOfMonth(oneDecadeAgo(this.activeDate)) < min;
    },
    prevYearDisabled: function prevYearDisabled() {
      var min = this.computedMin;
      return this.disabled || min && lastDateOfMonth(oneYearAgo(this.activeDate)) < min;
    },
    prevMonthDisabled: function prevMonthDisabled() {
      var min = this.computedMin;
      return this.disabled || min && lastDateOfMonth(oneMonthAgo(this.activeDate)) < min;
    },
    thisMonthDisabled: function thisMonthDisabled() {
      // TODO: We could/should check if today is out of range
      return this.disabled;
    },
    nextMonthDisabled: function nextMonthDisabled() {
      var max = this.computedMax;
      return this.disabled || max && firstDateOfMonth(oneMonthAhead(this.activeDate)) > max;
    },
    nextYearDisabled: function nextYearDisabled() {
      var max = this.computedMax;
      return this.disabled || max && firstDateOfMonth(oneYearAhead(this.activeDate)) > max;
    },
    nextDecadeDisabled: function nextDecadeDisabled() {
      var max = this.computedMax;
      return this.disabled || max && firstDateOfMonth(oneDecadeAhead(this.activeDate)) > max;
    },
    // Calendar dates generation
    calendar: function calendar() {
      var matrix = [];
      var firstDay = this.calendarFirstDay;
      var calendarYear = firstDay.getFullYear();
      var calendarMonth = firstDay.getMonth();
      var daysInMonth = this.calendarDaysInMonth;
      var startIndex = firstDay.getDay(); // `0`..`6`

      var weekOffset = (this.computedWeekStarts > startIndex ? 7 : 0) - this.computedWeekStarts; // Build the calendar matrix

      var currentDay = 0 - weekOffset - startIndex;

      for (var week = 0; week < 6 && currentDay < daysInMonth; week++) {
        // For each week
        matrix[week] = []; // The following could be a map function

        for (var j = 0; j < 7; j++) {
          // For each day in week
          currentDay++;
          var date = createDate(calendarYear, calendarMonth, currentDay);
          var month = date.getMonth();
          var dayYMD = formatYMD(date);
          var dayDisabled = this.dateDisabled(date); // TODO: This could be a normalizer method

          var dateInfo = this.computedDateInfoFn(dayYMD, parseYMD(dayYMD));
          dateInfo = isString(dateInfo) || isArray(dateInfo) ?
          /* istanbul ignore next */
          {
            class: dateInfo
          } : isPlainObject(dateInfo) ? _objectSpread$o({
            class: ''
          }, dateInfo) :
          /* istanbul ignore next */
          {
            class: ''
          };
          matrix[week].push({
            ymd: dayYMD,
            // Cell content
            day: this.formatDay(date),
            label: this.formatDateString(date),
            // Flags for styling
            isThisMonth: month === calendarMonth,
            isDisabled: dayDisabled,
            // TODO: Handle other dateInfo properties such as notes/events
            info: dateInfo
          });
        }
      }

      return matrix;
    },
    calendarHeadings: function calendarHeadings() {
      var _this2 = this;

      return this.calendar[0].map(function (d) {
        return {
          text: _this2.formatWeekdayNameShort(parseYMD(d.ymd)),
          label: _this2.formatWeekdayName(parseYMD(d.ymd))
        };
      });
    }
  },
  watch: (_watch$4 = {}, _defineProperty$r(_watch$4, MODEL_PROP_NAME$5, function (newValue, oldValue) {
    var selected = formatYMD(newValue) || '';
    var old = formatYMD(oldValue) || '';

    if (!datesEqual(selected, old)) {
      this.activeYMD = selected || this.activeYMD;
      this.selectedYMD = selected;
    }
  }), _defineProperty$r(_watch$4, "selectedYMD", function selectedYMD(newYMD, oldYMD) {
    // TODO:
    //   Should we compare to `formatYMD(this.value)` and emit
    //   only if they are different?
    if (newYMD !== oldYMD) {
      this.$emit(MODEL_EVENT_NAME$5, this.valueAsDate ? parseYMD(newYMD) || null : newYMD || '');
    }
  }), _defineProperty$r(_watch$4, "context", function context(newValue, oldValue) {
    if (!looseEqual(newValue, oldValue)) {
      this.$emit(EVENT_NAME_CONTEXT, newValue);
    }
  }), _defineProperty$r(_watch$4, "hidden", function hidden(newValue) {
    // Reset the active focused day when hidden
    this.activeYMD = this.selectedYMD || formatYMD(this[MODEL_PROP_NAME$5] || this.constrainDate(this.initialDate || this.getToday())); // Enable/disable the live regions

    this.setLive(!newValue);
  }), _watch$4),
  created: function created() {
    var _this3 = this;

    this.$nextTick(function () {
      _this3.$emit(EVENT_NAME_CONTEXT, _this3.context);
    });
  },
  mounted: function mounted() {
    this.setLive(true);
  },

  /* istanbul ignore next */
  activated: function activated() {
    this.setLive(true);
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    this.setLive(false);
  },
  beforeDestroy: function beforeDestroy() {
    this.setLive(false);
  },
  methods: {
    // Public method(s)
    focus: function focus() {
      if (!this.disabled) {
        attemptFocus(this.$refs.grid);
      }
    },
    blur: function blur() {
      if (!this.disabled) {
        attemptBlur(this.$refs.grid);
      }
    },
    // Private methods
    setLive: function setLive(on) {
      var _this4 = this;

      if (on) {
        this.$nextTick(function () {
          requestAF(function () {
            _this4.isLive = true;
          });
        });
      } else {
        this.isLive = false;
      }
    },
    getToday: function getToday() {
      return parseYMD(createDate());
    },
    constrainDate: function constrainDate$1(date) {
      // Constrains a date between min and max
      // returns a new `Date` object instance
      return constrainDate(date, this.computedMin, this.computedMax);
    },
    emitSelected: function emitSelected(date) {
      var _this5 = this;

      // Performed in a `$nextTick()` to (probably) ensure
      // the input event has emitted first
      this.$nextTick(function () {
        _this5.$emit(EVENT_NAME_SELECTED, formatYMD(date) || '', parseYMD(date) || null);
      });
    },
    // Event handlers
    setGridFocusFlag: function setGridFocusFlag(event) {
      // Sets the gridHasFocus flag to make date "button" look focused
      this.gridHasFocus = !this.disabled && event.type === 'focus';
    },
    onKeydownWrapper: function onKeydownWrapper(event) {
      // Calendar keyboard navigation
      // Handles PAGEUP/PAGEDOWN/END/HOME/LEFT/UP/RIGHT/DOWN
      // Focuses grid after updating
      if (this.noKeyNav) {
        /* istanbul ignore next */
        return;
      }

      var altKey = event.altKey,
          ctrlKey = event.ctrlKey,
          keyCode = event.keyCode;

      if (!arrayIncludes([CODE_PAGEUP, CODE_PAGEDOWN, CODE_END, CODE_HOME, CODE_LEFT, CODE_UP, CODE_RIGHT, CODE_DOWN], keyCode)) {
        /* istanbul ignore next */
        return;
      }

      stopEvent(event);
      var activeDate = createDate(this.activeDate);
      var checkDate = createDate(this.activeDate);
      var day = activeDate.getDate();
      var constrainedToday = this.constrainDate(this.getToday());
      var isRTL = this.isRTL;

      if (keyCode === CODE_PAGEUP) {
        // PAGEUP - Previous month/year
        activeDate = (altKey ? ctrlKey ? oneDecadeAgo : oneYearAgo : oneMonthAgo)(activeDate); // We check the first day of month to be in rage

        checkDate = createDate(activeDate);
        checkDate.setDate(1);
      } else if (keyCode === CODE_PAGEDOWN) {
        // PAGEDOWN - Next month/year
        activeDate = (altKey ? ctrlKey ? oneDecadeAhead : oneYearAhead : oneMonthAhead)(activeDate); // We check the last day of month to be in rage

        checkDate = createDate(activeDate);
        checkDate.setMonth(checkDate.getMonth() + 1);
        checkDate.setDate(0);
      } else if (keyCode === CODE_LEFT) {
        // LEFT - Previous day (or next day for RTL)
        activeDate.setDate(day + (isRTL ? 1 : -1));
        activeDate = this.constrainDate(activeDate);
        checkDate = activeDate;
      } else if (keyCode === CODE_RIGHT) {
        // RIGHT - Next day (or previous day for RTL)
        activeDate.setDate(day + (isRTL ? -1 : 1));
        activeDate = this.constrainDate(activeDate);
        checkDate = activeDate;
      } else if (keyCode === CODE_UP) {
        // UP - Previous week
        activeDate.setDate(day - 7);
        activeDate = this.constrainDate(activeDate);
        checkDate = activeDate;
      } else if (keyCode === CODE_DOWN) {
        // DOWN - Next week
        activeDate.setDate(day + 7);
        activeDate = this.constrainDate(activeDate);
        checkDate = activeDate;
      } else if (keyCode === CODE_HOME) {
        // HOME - Today
        activeDate = constrainedToday;
        checkDate = activeDate;
      } else if (keyCode === CODE_END) {
        // END - Selected date, or today if no selected date
        activeDate = parseYMD(this.selectedDate) || constrainedToday;
        checkDate = activeDate;
      }

      if (!this.dateOutOfRange(checkDate) && !datesEqual(activeDate, this.activeDate)) {
        // We only jump to date if within min/max
        // We don't check for individual disabled dates though (via user function)
        this.activeYMD = formatYMD(activeDate);
      } // Ensure grid is focused


      this.focus();
    },
    onKeydownGrid: function onKeydownGrid(event) {
      // Pressing enter/space on grid to select active date
      var keyCode = event.keyCode;
      var activeDate = this.activeDate;

      if (keyCode === CODE_ENTER || keyCode === CODE_SPACE) {
        stopEvent(event);

        if (!this.disabled && !this.readonly && !this.dateDisabled(activeDate)) {
          this.selectedYMD = formatYMD(activeDate);
          this.emitSelected(activeDate);
        } // Ensure grid is focused


        this.focus();
      }
    },
    onClickDay: function onClickDay(day) {
      // Clicking on a date "button" to select it
      var selectedDate = this.selectedDate,
          activeDate = this.activeDate;
      var clickedDate = parseYMD(day.ymd);

      if (!this.disabled && !day.isDisabled && !this.dateDisabled(clickedDate)) {
        if (!this.readonly) {
          // If readonly mode, we don't set the selected date, just the active date
          // If the clicked date is equal to the already selected date, we don't update the model
          this.selectedYMD = formatYMD(datesEqual(clickedDate, selectedDate) ? selectedDate : clickedDate);
          this.emitSelected(clickedDate);
        }

        this.activeYMD = formatYMD(datesEqual(clickedDate, activeDate) ? activeDate : createDate(clickedDate)); // Ensure grid is focused

        this.focus();
      }
    },
    gotoPrevDecade: function gotoPrevDecade() {
      this.activeYMD = formatYMD(this.constrainDate(oneDecadeAgo(this.activeDate)));
    },
    gotoPrevYear: function gotoPrevYear() {
      this.activeYMD = formatYMD(this.constrainDate(oneYearAgo(this.activeDate)));
    },
    gotoPrevMonth: function gotoPrevMonth() {
      this.activeYMD = formatYMD(this.constrainDate(oneMonthAgo(this.activeDate)));
    },
    gotoCurrentMonth: function gotoCurrentMonth() {
      // TODO: Maybe this goto date should be configurable?
      this.activeYMD = formatYMD(this.constrainDate(this.getToday()));
    },
    gotoNextMonth: function gotoNextMonth() {
      this.activeYMD = formatYMD(this.constrainDate(oneMonthAhead(this.activeDate)));
    },
    gotoNextYear: function gotoNextYear() {
      this.activeYMD = formatYMD(this.constrainDate(oneYearAhead(this.activeDate)));
    },
    gotoNextDecade: function gotoNextDecade() {
      this.activeYMD = formatYMD(this.constrainDate(oneDecadeAhead(this.activeDate)));
    },
    onHeaderClick: function onHeaderClick() {
      if (!this.disabled) {
        this.activeYMD = this.selectedYMD || formatYMD(this.getToday());
        this.focus();
      }
    }
  },
  render: function render(h) {
    var _this6 = this;

    // If `hidden` prop is set, render just a placeholder node
    if (this.hidden) {
      return h();
    }

    var valueId = this.valueId,
        widgetId = this.widgetId,
        navId = this.navId,
        gridId = this.gridId,
        gridCaptionId = this.gridCaptionId,
        gridHelpId = this.gridHelpId,
        activeId = this.activeId,
        disabled = this.disabled,
        noKeyNav = this.noKeyNav,
        isLive = this.isLive,
        isRTL = this.isRTL,
        activeYMD = this.activeYMD,
        selectedYMD = this.selectedYMD,
        safeId = this.safeId;
    var hideDecadeNav = !this.showDecadeNav;
    var todayYMD = formatYMD(this.getToday());
    var highlightToday = !this.noHighlightToday; // Header showing current selected date

    var $header = h('output', {
      staticClass: 'form-control form-control-sm text-center',
      class: {
        'text-muted': disabled,
        readonly: this.readonly || disabled
      },
      attrs: {
        id: valueId,
        for: gridId,
        role: 'status',
        tabindex: disabled ? null : '-1',
        // Mainly for testing purposes, as we do not know
        // the exact format `Intl` will format the date string
        'data-selected': toString(selectedYMD),
        // We wait until after mount to enable `aria-live`
        // to prevent initial announcement on page render
        'aria-live': isLive ? 'polite' : 'off',
        'aria-atomic': isLive ? 'true' : null
      },
      on: {
        // Transfer focus/click to focus grid
        // and focus active date (or today if no selection)
        click: this.onHeaderClick,
        focus: this.onHeaderClick
      }
    }, this.selectedDate ? [// We use `bdi` elements here in case the label doesn't match the locale
    // Although IE 11 does not deal with <BDI> at all (equivalent to a span)
    h('bdi', {
      staticClass: 'sr-only'
    }, " (".concat(toString(this.labelSelected), ") ")), h('bdi', this.formatDateString(this.selectedDate))] : this.labelNoDateSelected || "\xA0" // '&nbsp;'
    );
    $header = h('header', {
      staticClass: 'b-calendar-header',
      class: {
        'sr-only': this.hideHeader
      },
      attrs: {
        title: this.selectedDate ? this.labelSelectedDate || null : null
      }
    }, [$header]); // Content for the date navigation buttons

    var navScope = {
      isRTL: isRTL
    };
    var navProps = {
      shiftV: 0.5
    };

    var navPrevProps = _objectSpread$o(_objectSpread$o({}, navProps), {}, {
      flipH: isRTL
    });

    var navNextProps = _objectSpread$o(_objectSpread$o({}, navProps), {}, {
      flipH: !isRTL
    });

    var $prevDecadeIcon = this.normalizeSlot(SLOT_NAME_NAV_PEV_DECADE, navScope) || h(BIconChevronBarLeft, {
      props: navPrevProps
    });
    var $prevYearIcon = this.normalizeSlot(SLOT_NAME_NAV_PEV_YEAR, navScope) || h(BIconChevronDoubleLeft, {
      props: navPrevProps
    });
    var $prevMonthIcon = this.normalizeSlot(SLOT_NAME_NAV_PEV_MONTH, navScope) || h(BIconChevronLeft, {
      props: navPrevProps
    });
    var $thisMonthIcon = this.normalizeSlot(SLOT_NAME_NAV_THIS_MONTH, navScope) || h(BIconCircleFill, {
      props: navProps
    });
    var $nextMonthIcon = this.normalizeSlot(SLOT_NAME_NAV_NEXT_MONTH, navScope) || h(BIconChevronLeft, {
      props: navNextProps
    });
    var $nextYearIcon = this.normalizeSlot(SLOT_NAME_NAV_NEXT_YEAR, navScope) || h(BIconChevronDoubleLeft, {
      props: navNextProps
    });
    var $nextDecadeIcon = this.normalizeSlot(SLOT_NAME_NAV_NEXT_DECADE, navScope) || h(BIconChevronBarLeft, {
      props: navNextProps
    }); // Utility to create the date navigation buttons

    var makeNavBtn = function makeNavBtn(content, label, handler, btnDisabled, shortcut) {
      return h('button', {
        staticClass: 'btn btn-sm border-0 flex-fill',
        class: [_this6.computedNavButtonVariant, {
          disabled: btnDisabled
        }],
        attrs: {
          title: label || null,
          type: 'button',
          tabindex: noKeyNav ? '-1' : null,
          'aria-label': label || null,
          'aria-disabled': btnDisabled ? 'true' : null,
          'aria-keyshortcuts': shortcut || null
        },
        on: btnDisabled ? {} : {
          click: handler
        }
      }, [h('div', {
        attrs: {
          'aria-hidden': 'true'
        }
      }, [content])]);
    }; // Generate the date navigation buttons


    var $nav = h('div', {
      staticClass: 'b-calendar-nav d-flex',
      attrs: {
        id: navId,
        role: 'group',
        tabindex: noKeyNav ? '-1' : null,
        'aria-hidden': disabled ? 'true' : null,
        'aria-label': this.labelNav || null,
        'aria-controls': gridId
      }
    }, [hideDecadeNav ? h() : makeNavBtn($prevDecadeIcon, this.labelPrevDecade, this.gotoPrevDecade, this.prevDecadeDisabled, 'Ctrl+Alt+PageDown'), makeNavBtn($prevYearIcon, this.labelPrevYear, this.gotoPrevYear, this.prevYearDisabled, 'Alt+PageDown'), makeNavBtn($prevMonthIcon, this.labelPrevMonth, this.gotoPrevMonth, this.prevMonthDisabled, 'PageDown'), makeNavBtn($thisMonthIcon, this.labelCurrentMonth, this.gotoCurrentMonth, this.thisMonthDisabled, 'Home'), makeNavBtn($nextMonthIcon, this.labelNextMonth, this.gotoNextMonth, this.nextMonthDisabled, 'PageUp'), makeNavBtn($nextYearIcon, this.labelNextYear, this.gotoNextYear, this.nextYearDisabled, 'Alt+PageUp'), hideDecadeNav ? h() : makeNavBtn($nextDecadeIcon, this.labelNextDecade, this.gotoNextDecade, this.nextDecadeDisabled, 'Ctrl+Alt+PageUp')]); // Caption for calendar grid

    var $gridCaption = h('header', {
      staticClass: 'b-calendar-grid-caption text-center font-weight-bold',
      class: {
        'text-muted': disabled
      },
      attrs: {
        id: gridCaptionId,
        'aria-live': isLive ? 'polite' : null,
        'aria-atomic': isLive ? 'true' : null
      },
      key: 'grid-caption'
    }, this.formatYearMonth(this.calendarFirstDay)); // Calendar weekday headings

    var $gridWeekDays = h('div', {
      staticClass: 'b-calendar-grid-weekdays row no-gutters border-bottom',
      attrs: {
        'aria-hidden': 'true'
      }
    }, this.calendarHeadings.map(function (d, idx) {
      return h('small', {
        staticClass: 'col text-truncate',
        class: {
          'text-muted': disabled
        },
        attrs: {
          title: d.label === d.text ? null : d.label,
          'aria-label': d.label
        },
        key: idx
      }, d.text);
    })); // Calendar day grid

    var $gridBody = this.calendar.map(function (week) {
      var $cells = week.map(function (day, dIndex) {
        var _class;

        var isSelected = day.ymd === selectedYMD;
        var isActive = day.ymd === activeYMD;
        var isToday = day.ymd === todayYMD;
        var idCell = safeId("_cell-".concat(day.ymd, "_")); // "fake" button

        var $btn = h('span', {
          staticClass: 'btn border-0 rounded-circle text-nowrap',
          // Should we add some classes to signify if today/selected/etc?
          class: (_class = {
            // Give the fake button a focus ring
            focus: isActive && _this6.gridHasFocus,
            // Styling
            disabled: day.isDisabled || disabled,
            active: isSelected
          }, _defineProperty$r(_class, _this6.computedVariant, isSelected), _defineProperty$r(_class, _this6.computedTodayVariant, isToday && highlightToday && !isSelected && day.isThisMonth), _defineProperty$r(_class, 'btn-outline-light', !(isToday && highlightToday) && !isSelected && !isActive), _defineProperty$r(_class, 'btn-light', !(isToday && highlightToday) && !isSelected && isActive), _defineProperty$r(_class, 'text-muted', !day.isThisMonth && !isSelected), _defineProperty$r(_class, 'text-dark', !(isToday && highlightToday) && !isSelected && !isActive && day.isThisMonth), _defineProperty$r(_class, 'font-weight-bold', (isSelected || day.isThisMonth) && !day.isDisabled), _class),
          on: {
            click: function click() {
              return _this6.onClickDay(day);
            }
          }
        }, day.day);
        return h('div', // Cell with button
        {
          staticClass: 'col p-0',
          class: day.isDisabled ? 'bg-light' : day.info.class || '',
          attrs: {
            id: idCell,
            role: 'button',
            'data-date': day.ymd,
            // Primarily for testing purposes
            // Only days in the month are presented as buttons to screen readers
            'aria-hidden': day.isThisMonth ? null : 'true',
            'aria-disabled': day.isDisabled || disabled ? 'true' : null,
            'aria-label': [day.label, isSelected ? "(".concat(_this6.labelSelected, ")") : null, isToday ? "(".concat(_this6.labelToday, ")") : null].filter(identity).join(' '),
            // NVDA doesn't convey `aria-selected`, but does `aria-current`,
            // ChromeVox doesn't convey `aria-current`, but does `aria-selected`,
            // so we set both attributes for robustness
            'aria-selected': isSelected ? 'true' : null,
            'aria-current': isSelected ? 'date' : null
          },
          key: dIndex
        }, [$btn]);
      }); // Return the week "row"
      // We use the first day of the weeks YMD value as a
      // key for efficient DOM patching / element re-use

      return h('div', {
        staticClass: 'row no-gutters',
        key: week[0].ymd
      }, $cells);
    });
    $gridBody = h('div', {
      // A key is only required on the body if we add in transition support
      staticClass: 'b-calendar-grid-body',
      style: disabled ? {
        pointerEvents: 'none'
      } : {} // key: this.activeYMD.slice(0, -3)

    }, $gridBody);
    var $gridHelp = h('footer', {
      staticClass: 'b-calendar-grid-help border-top small text-muted text-center bg-light',
      attrs: {
        id: gridHelpId
      }
    }, [h('div', {
      staticClass: 'small'
    }, this.labelHelp)]);
    var $grid = h('div', {
      staticClass: 'b-calendar-grid form-control h-auto text-center',
      attrs: {
        id: gridId,
        role: 'application',
        tabindex: noKeyNav ? '-1' : disabled ? null : '0',
        'data-month': activeYMD.slice(0, -3),
        // `YYYY-MM`, mainly for testing
        'aria-roledescription': this.labelCalendar || null,
        'aria-labelledby': gridCaptionId,
        'aria-describedby': gridHelpId,
        // `aria-readonly` is not considered valid on `role="application"`
        // https://www.w3.org/TR/wai-aria-1.1/#aria-readonly
        // 'aria-readonly': this.readonly && !disabled ? 'true' : null,
        'aria-disabled': disabled ? 'true' : null,
        'aria-activedescendant': activeId
      },
      on: {
        keydown: this.onKeydownGrid,
        focus: this.setGridFocusFlag,
        blur: this.setGridFocusFlag
      },
      ref: 'grid'
    }, [$gridCaption, $gridWeekDays, $gridBody, $gridHelp]); // Optional bottom slot

    var $slot = this.normalizeSlot();
    $slot = $slot ? h('footer', {
      staticClass: 'b-calendar-footer'
    }, $slot) : h();
    var $widget = h('div', {
      staticClass: 'b-calendar-inner',
      style: this.block ? {} : {
        width: this.width
      },
      attrs: {
        id: widgetId,
        dir: isRTL ? 'rtl' : 'ltr',
        lang: this.computedLocale || null,
        role: 'group',
        'aria-disabled': disabled ? 'true' : null,
        // If datepicker controls an input, this will specify the ID of the input
        'aria-controls': this.ariaControls || null,
        // This should be a prop (so it can be changed to Date picker, etc, localized
        'aria-roledescription': this.roleDescription || null,
        'aria-describedby': [// Should the attr (if present) go last?
        // Or should this attr be a prop?
        this.bvAttrs['aria-describedby'], valueId, gridHelpId].filter(identity).join(' ')
      },
      on: {
        keydown: this.onKeydownWrapper
      }
    }, [$header, $nav, $grid, $slot]); // Wrap in an outer div that can be styled

    return h('div', {
      staticClass: 'b-calendar',
      class: {
        'd-block': this.block
      }
    }, [$widget]);
  }
});var noop = function noop() {};/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

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





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;var PLACEMENT_TOP_START = 'top-start';
var PLACEMENT_TOP_END = 'top-end';
var PLACEMENT_BOTTOM_START = 'bottom-start';
var PLACEMENT_BOTTOM_END = 'bottom-end';
var PLACEMENT_RIGHT_START = 'right-start';
var PLACEMENT_LEFT_START = 'left-start';function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
var BvEvent = /*#__PURE__*/function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor
    if (!type) {
      /* istanbul ignore next */
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Merge defaults first, the eventInit, and the type last
    // so it can't be overwritten


    assign(this, BvEvent.Defaults, this.constructor.Defaults, eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable

    defineProperties(this, {
      type: readonlyDescriptor(),
      cancelable: readonlyDescriptor(),
      nativeEvent: readonlyDescriptor(),
      target: readonlyDescriptor(),
      relatedTarget: readonlyDescriptor(),
      vueTarget: readonlyDescriptor(),
      componentId: readonlyDescriptor()
    }); // Create a private variable using closure scoping

    var defaultPrevented = false; // Recreate preventDefault method. One way setter

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create `defaultPrevented` publicly accessible prop that
    // can only be altered by the preventDefault method


    defineProperty$1(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: "Defaults",
    get: function get() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null,
        componentId: null
      };
    }
  }]);

  return BvEvent;
}();var clickOutMixin = Vue__default['default'].extend({
  data: function data() {
    return {
      listenForClickOut: false
    };
  },
  watch: {
    listenForClickOut: function listenForClickOut(newValue, oldValue) {
      if (newValue !== oldValue) {
        eventOff(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, EVENT_OPTIONS_NO_CAPTURE);

        if (newValue) {
          eventOn(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, EVENT_OPTIONS_NO_CAPTURE);
        }
      }
    }
  },
  beforeCreate: function beforeCreate() {
    // Declare non-reactive properties
    this.clickOutElement = null;
    this.clickOutEventName = null;
  },
  mounted: function mounted() {
    if (!this.clickOutElement) {
      this.clickOutElement = document;
    }

    if (!this.clickOutEventName) {
      this.clickOutEventName = 'click';
    }

    if (this.listenForClickOut) {
      eventOn(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, EVENT_OPTIONS_NO_CAPTURE);
    }
  },
  beforeDestroy: function beforeDestroy() {
    eventOff(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, EVENT_OPTIONS_NO_CAPTURE);
  },
  methods: {
    isClickOut: function isClickOut(event) {
      return !contains(this.$el, event.target);
    },
    _clickOutHandler: function _clickOutHandler(event) {
      if (this.clickOutHandler && this.isClickOut(event)) {
        this.clickOutHandler(event);
      }
    }
  }
});var focusInMixin = Vue__default['default'].extend({
  data: function data() {
    return {
      listenForFocusIn: false
    };
  },
  watch: {
    listenForFocusIn: function listenForFocusIn(newValue, oldValue) {
      if (newValue !== oldValue) {
        eventOff(this.focusInElement, 'focusin', this._focusInHandler, EVENT_OPTIONS_NO_CAPTURE);

        if (newValue) {
          eventOn(this.focusInElement, 'focusin', this._focusInHandler, EVENT_OPTIONS_NO_CAPTURE);
        }
      }
    }
  },
  beforeCreate: function beforeCreate() {
    // Declare non-reactive properties
    this.focusInElement = null;
  },
  mounted: function mounted() {
    if (!this.focusInElement) {
      this.focusInElement = document;
    }

    if (this.listenForFocusIn) {
      eventOn(this.focusInElement, 'focusin', this._focusInHandler, EVENT_OPTIONS_NO_CAPTURE);
    }
  },
  beforeDestroy: function beforeDestroy() {
    eventOff(this.focusInElement, 'focusin', this._focusInHandler, EVENT_OPTIONS_NO_CAPTURE);
  },
  methods: {
    _focusInHandler: function _focusInHandler(event) {
      if (this.focusInHandler) {
        this.focusInHandler(event);
      }
    }
  }
});function ownKeys$n(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$n(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$n(Object(source), true).forEach(function (key) { _defineProperty$q(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$n(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$q(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ROOT_EVENT_NAME_SHOWN = getRootEventName(NAME_DROPDOWN, EVENT_NAME_SHOWN);
var ROOT_EVENT_NAME_HIDDEN = getRootEventName(NAME_DROPDOWN, EVENT_NAME_HIDDEN); // CSS selectors

var SELECTOR_FORM_CHILD = '.dropdown form';
var SELECTOR_ITEM = ['.dropdown-item', '.b-dropdown-form'].map(function (selector) {
  return "".concat(selector, ":not(.disabled):not([disabled])");
}).join(', '); // --- Helper methods ---
// Return an array of visible items

var filterVisibles = function filterVisibles(els) {
  return (els || []).filter(isVisible);
}; // --- Props ---


var props$G = makePropsConfigurable(sortKeys(_objectSpread$n(_objectSpread$n({}, props$I), {}, {
  // String: `scrollParent`, `window` or `viewport`
  // HTMLElement: HTML Element reference
  boundary: makeProp([HTMLElement, PROP_TYPE_STRING], 'scrollParent'),
  disabled: makeProp(PROP_TYPE_BOOLEAN, false),
  // Place left if possible
  dropleft: makeProp(PROP_TYPE_BOOLEAN, false),
  // Place right if possible
  dropright: makeProp(PROP_TYPE_BOOLEAN, false),
  // Place on top if possible
  dropup: makeProp(PROP_TYPE_BOOLEAN, false),
  // Disable auto-flipping of menu from bottom <=> top
  noFlip: makeProp(PROP_TYPE_BOOLEAN, false),
  // Number of pixels or a CSS unit value to offset menu
  // (i.e. `1px`, `1rem`, etc.)
  offset: makeProp(PROP_TYPE_NUMBER_STRING, 0),
  popperOpts: makeProp(PROP_TYPE_OBJECT, {}),
  // Right align menu (default is left align)
  right: makeProp(PROP_TYPE_BOOLEAN, false)
})), NAME_DROPDOWN); // --- Mixin ---
// @vue/component

var dropdownMixin = Vue__default['default'].extend({
  mixins: [idMixin, listenOnRootMixin, clickOutMixin, focusInMixin],
  provide: function provide() {
    return {
      bvDropdown: this
    };
  },
  inject: {
    bvNavbar: {
      default: null
    }
  },
  props: props$G,
  data: function data() {
    return {
      visible: false,
      visibleChangePrevented: false
    };
  },
  computed: {
    inNavbar: function inNavbar() {
      return !isNull(this.bvNavbar);
    },
    toggler: function toggler() {
      var toggle = this.$refs.toggle;
      return toggle ? toggle.$el || toggle : null;
    },
    directionClass: function directionClass() {
      if (this.dropup) {
        return 'dropup';
      } else if (this.dropright) {
        return 'dropright';
      } else if (this.dropleft) {
        return 'dropleft';
      }

      return '';
    },
    boundaryClass: function boundaryClass() {
      // Position `static` is needed to allow menu to "breakout" of the `scrollParent`
      // boundaries when boundary is anything other than `scrollParent`
      // See: https://github.com/twbs/bootstrap/issues/24251#issuecomment-341413786
      return this.boundary !== 'scrollParent' && !this.inNavbar ? 'position-static' : '';
    }
  },
  watch: {
    visible: function visible(newValue, oldValue) {
      if (this.visibleChangePrevented) {
        this.visibleChangePrevented = false;
        return;
      }

      if (newValue !== oldValue) {
        var eventName = newValue ? EVENT_NAME_SHOW : EVENT_NAME_HIDE;
        var bvEvent = new BvEvent(eventName, {
          cancelable: true,
          vueTarget: this,
          target: this.$refs.menu,
          relatedTarget: null,
          componentId: this.safeId ? this.safeId() : this.id || null
        });
        this.emitEvent(bvEvent);

        if (bvEvent.defaultPrevented) {
          // Reset value and exit if canceled
          this.visibleChangePrevented = true;
          this.visible = oldValue; // Just in case a child element triggered `this.hide(true)`

          this.$off(EVENT_NAME_HIDDEN, this.focusToggler);
          return;
        }

        if (newValue) {
          this.showMenu();
        } else {
          this.hideMenu();
        }
      }
    },
    disabled: function disabled(newValue, oldValue) {
      if (newValue !== oldValue && newValue && this.visible) {
        // Hide dropdown if disabled changes to true
        this.visible = false;
      }
    }
  },
  created: function created() {
    // Create private non-reactive props
    this.$_popper = null;
    this.$_hideTimeout = null;
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    // In case we are inside a `<keep-alive>`
    this.visible = false;
    this.whileOpenListen(false);
    this.destroyPopper();
  },
  beforeDestroy: function beforeDestroy() {
    this.visible = false;
    this.whileOpenListen(false);
    this.destroyPopper();
    this.clearHideTimeout();
  },
  methods: {
    // Event emitter
    emitEvent: function emitEvent(bvEvent) {
      var type = bvEvent.type;
      this.emitOnRoot(getRootEventName(NAME_DROPDOWN, type), bvEvent);
      this.$emit(type, bvEvent);
    },
    showMenu: function showMenu() {
      var _this = this;

      if (this.disabled) {
        /* istanbul ignore next */
        return;
      } // Only instantiate Popper.js when dropdown is not in `<b-navbar>`


      if (!this.inNavbar) {
        if (typeof Popper === 'undefined') {
          /* istanbul ignore next */
          warn('Popper.js not found. Falling back to CSS positioning', NAME_DROPDOWN);
        } else {
          // For dropup with alignment we use the parent element as popper container
          var el = this.dropup && this.right || this.split ? this.$el : this.$refs.toggle; // Make sure we have a reference to an element, not a component!

          el = el.$el || el; // Instantiate Popper.js

          this.createPopper(el);
        }
      } // Ensure other menus are closed


      this.emitOnRoot(ROOT_EVENT_NAME_SHOWN, this); // Enable listeners

      this.whileOpenListen(true); // Wrap in `$nextTick()` to ensure menu is fully rendered/shown

      this.$nextTick(function () {
        // Focus on the menu container on show
        _this.focusMenu(); // Emit the shown event


        _this.$emit(EVENT_NAME_SHOWN);
      });
    },
    hideMenu: function hideMenu() {
      this.whileOpenListen(false);
      this.emitOnRoot(ROOT_EVENT_NAME_HIDDEN, this);
      this.$emit(EVENT_NAME_HIDDEN);
      this.destroyPopper();
    },
    createPopper: function createPopper(element) {
      this.destroyPopper();
      this.$_popper = new Popper(element, this.$refs.menu, this.getPopperConfig());
    },
    // Ensure popper event listeners are removed cleanly
    destroyPopper: function destroyPopper() {
      this.$_popper && this.$_popper.destroy();
      this.$_popper = null;
    },
    // Instructs popper to re-computes the dropdown position
    // useful if the content changes size
    updatePopper: function updatePopper() {
      try {
        this.$_popper.scheduleUpdate();
      } catch (_unused) {}
    },
    clearHideTimeout: function clearHideTimeout() {
      clearTimeout(this.$_hideTimeout);
      this.$_hideTimeout = null;
    },
    getPopperConfig: function getPopperConfig() {
      var placement = PLACEMENT_BOTTOM_START;

      if (this.dropup) {
        placement = this.right ? PLACEMENT_TOP_END : PLACEMENT_TOP_START;
      } else if (this.dropright) {
        placement = PLACEMENT_RIGHT_START;
      } else if (this.dropleft) {
        placement = PLACEMENT_LEFT_START;
      } else if (this.right) {
        placement = PLACEMENT_BOTTOM_END;
      }

      var popperConfig = {
        placement: placement,
        modifiers: {
          offset: {
            offset: this.offset || 0
          },
          flip: {
            enabled: !this.noFlip
          }
        }
      };
      var boundariesElement = this.boundary;

      if (boundariesElement) {
        popperConfig.modifiers.preventOverflow = {
          boundariesElement: boundariesElement
        };
      }

      return mergeDeep(popperConfig, this.popperOpts || {});
    },
    // Turn listeners on/off while open
    whileOpenListen: function whileOpenListen(isOpen) {
      // Hide the dropdown when clicked outside
      this.listenForClickOut = isOpen; // Hide the dropdown when it loses focus

      this.listenForFocusIn = isOpen; // Hide the dropdown when another dropdown is opened

      var method = isOpen ? '$on' : '$off';
      this.$root[method](ROOT_EVENT_NAME_SHOWN, this.rootCloseListener);
    },
    rootCloseListener: function rootCloseListener(vm) {
      if (vm !== this) {
        this.visible = false;
      }
    },
    // Public method to show dropdown
    show: function show() {
      var _this2 = this;

      if (this.disabled) {
        return;
      } // Wrap in a `requestAF()` to allow any previous
      // click handling to occur first


      requestAF(function () {
        _this2.visible = true;
      });
    },
    // Public method to hide dropdown
    hide: function hide() {
      var refocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      /* istanbul ignore next */
      if (this.disabled) {
        return;
      }

      this.visible = false;

      if (refocus) {
        // Child element is closing the dropdown on click
        this.$once(EVENT_NAME_HIDDEN, this.focusToggler);
      }
    },
    // Called only by a button that toggles the menu
    toggle: function toggle(event) {
      event = event || {}; // Early exit when not a click event or ENTER, SPACE or DOWN were pressed

      var _event = event,
          type = _event.type,
          keyCode = _event.keyCode;

      if (type !== 'click' && !(type === 'keydown' && [CODE_ENTER, CODE_SPACE, CODE_DOWN].indexOf(keyCode) !== -1)) {
        /* istanbul ignore next */
        return;
      }
      /* istanbul ignore next */


      if (this.disabled) {
        this.visible = false;
        return;
      }

      this.$emit(EVENT_NAME_TOGGLE, event);
      stopEvent(event); // Toggle visibility

      if (this.visible) {
        this.hide(true);
      } else {
        this.show();
      }
    },
    // Mousedown handler for the toggle

    /* istanbul ignore next */
    onMousedown: function onMousedown(event) {
      // We prevent the 'mousedown' event for the toggle to stop the
      // 'focusin' event from being fired
      // The event would otherwise be picked up by the global 'focusin'
      // listener and there is no cross-browser solution to detect it
      // relates to the toggle click
      // The 'click' event will still be fired and we handle closing
      // other dropdowns there too
      // See https://github.com/bootstrap-vue/bootstrap-vue/issues/4328
      stopEvent(event, {
        propagation: false
      });
    },
    // Called from dropdown menu context
    onKeydown: function onKeydown(event) {
      var keyCode = event.keyCode;

      if (keyCode === CODE_ESC) {
        // Close on ESC
        this.onEsc(event);
      } else if (keyCode === CODE_DOWN) {
        // Down Arrow
        this.focusNext(event, false);
      } else if (keyCode === CODE_UP) {
        // Up Arrow
        this.focusNext(event, true);
      }
    },
    // If user presses ESC, close the menu
    onEsc: function onEsc(event) {
      if (this.visible) {
        this.visible = false;
        stopEvent(event); // Return focus to original trigger button

        this.$once(EVENT_NAME_HIDDEN, this.focusToggler);
      }
    },
    // Called only in split button mode, for the split button
    onSplitClick: function onSplitClick(event) {
      /* istanbul ignore next */
      if (this.disabled) {
        this.visible = false;
        return;
      }

      this.$emit(EVENT_NAME_CLICK, event);
    },
    // Shared hide handler between click-out and focus-in events
    hideHandler: function hideHandler(event) {
      var _this3 = this;

      var target = event.target;

      if (this.visible && !contains(this.$refs.menu, target) && !contains(this.toggler, target)) {
        this.clearHideTimeout();
        this.$_hideTimeout = setTimeout(function () {
          return _this3.hide();
        }, this.inNavbar ? 300 : 0);
      }
    },
    // Document click-out listener
    clickOutHandler: function clickOutHandler(event) {
      this.hideHandler(event);
    },
    // Document focus-in listener
    focusInHandler: function focusInHandler(event) {
      this.hideHandler(event);
    },
    // Keyboard nav
    focusNext: function focusNext(event, up) {
      var _this4 = this;

      // Ignore key up/down on form elements
      var target = event.target;

      if (!this.visible || event && closest(SELECTOR_FORM_CHILD, target)) {
        /* istanbul ignore next: should never happen */
        return;
      }

      stopEvent(event);
      this.$nextTick(function () {
        var items = _this4.getItems();

        if (items.length < 1) {
          /* istanbul ignore next: should never happen */
          return;
        }

        var index = items.indexOf(target);

        if (up && index > 0) {
          index--;
        } else if (!up && index < items.length - 1) {
          index++;
        }

        if (index < 0) {
          /* istanbul ignore next: should never happen */
          index = 0;
        }

        _this4.focusItem(index, items);
      });
    },
    focusItem: function focusItem(index, items) {
      var el = items.find(function (el, i) {
        return i === index;
      });
      attemptFocus(el);
    },
    getItems: function getItems() {
      // Get all items
      return filterVisibles(selectAll(SELECTOR_ITEM, this.$refs.menu));
    },
    focusMenu: function focusMenu() {
      attemptFocus(this.$refs.menu);
    },
    focusToggler: function focusToggler() {
      var _this5 = this;

      this.$nextTick(function () {
        attemptFocus(_this5.toggler);
      });
    }
  }
});var OPTIONS_OBJECT_DEPRECATED_MSG = 'Setting prop "options" to an object is deprecated. Use the array format instead.'; // --- Props ---

var props$F = makePropsConfigurable({
  disabledField: makeProp(PROP_TYPE_STRING, 'disabled'),
  htmlField: makeProp(PROP_TYPE_STRING, 'html'),
  options: makeProp(PROP_TYPE_ARRAY_OBJECT, []),
  textField: makeProp(PROP_TYPE_STRING, 'text'),
  valueField: makeProp(PROP_TYPE_STRING, 'value')
}, 'formOptionControls'); // --- Mixin ---
// @vue/component

var formOptionsMixin = Vue__default['default'].extend({
  props: props$F,
  computed: {
    formOptions: function formOptions() {
      return this.normalizeOptions(this.options);
    }
  },
  methods: {
    normalizeOption: function normalizeOption(option) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // When the option is an object, normalize it
      if (isPlainObject(option)) {
        var value = get(option, this.valueField);
        var text = get(option, this.textField);
        return {
          value: isUndefined(value) ? key || text : value,
          text: stripTags(String(isUndefined(text) ? key : text)),
          html: get(option, this.htmlField),
          disabled: Boolean(get(option, this.disabledField))
        };
      } // Otherwise create an `<option>` object from the given value


      return {
        value: key || option,
        text: stripTags(String(option)),
        disabled: false
      };
    },
    normalizeOptions: function normalizeOptions(options) {
      var _this = this;

      // Normalize the given options array
      if (isArray(options)) {
        return options.map(function (option) {
          return _this.normalizeOption(option);
        });
      } else if (isPlainObject(options)) {
        // Deprecate the object options format
        warn(OPTIONS_OBJECT_DEPRECATED_MSG, this.$options.name); // Normalize a `options` object to an array of options

        return keys(options).map(function (key) {
          return _this.normalizeOption(options[key] || {}, key);
        });
      } // If not an array or object, return an empty array

      /* istanbul ignore next */


      return [];
    }
  }
});var looseIndexOf = function looseIndexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (looseEqual(array[i], value)) {
      return i;
    }
  }

  return -1;
};var SELECTOR = 'input, textarea, select'; // --- Props ---

var props$E = makePropsConfigurable({
  autofocus: makeProp(PROP_TYPE_BOOLEAN, false),
  disabled: makeProp(PROP_TYPE_BOOLEAN, false),
  form: makeProp(PROP_TYPE_STRING),
  id: makeProp(PROP_TYPE_STRING),
  name: makeProp(PROP_TYPE_STRING),
  required: makeProp(PROP_TYPE_BOOLEAN, false)
}, 'formControls'); // --- Mixin ---
// @vue/component

var formControlMixin = Vue__default['default'].extend({
  props: props$E,
  mounted: function mounted() {
    this.handleAutofocus();
  },

  /* istanbul ignore next */
  activated: function activated() {
    this.handleAutofocus();
  },
  methods: {
    handleAutofocus: function handleAutofocus() {
      var _this = this;

      this.$nextTick(function () {
        requestAF(function () {
          var el = _this.$el;

          if (_this.autofocus && isVisible(el)) {
            if (!matches(el, SELECTOR)) {
              el = select(SELECTOR, el);
            }

            attemptFocus(el);
          }
        });
      });
    }
  }
});var props$D = makePropsConfigurable({
  plain: makeProp(PROP_TYPE_BOOLEAN, false)
}, 'formControls'); // --- Mixin ---
// @vue/component

var formCustomMixin = Vue__default['default'].extend({
  props: props$D,
  computed: {
    custom: function custom() {
      return !this.plain;
    }
  }
});var props$C = makePropsConfigurable({
  size: makeProp(PROP_TYPE_STRING)
}, 'formControls'); // --- Mixin ---
// @vue/component

var formSizeMixin = Vue__default['default'].extend({
  props: props$C,
  computed: {
    sizeFormClass: function sizeFormClass() {
      return [this.size ? "form-control-".concat(this.size) : null];
    }
  }
});/* Form control contextual state class computation
 *
 * Returned class is either 'is-valid' or 'is-invalid' based on the 'state' prop
 * state can be one of five values:
 *  - true for is-valid
 *  - false for is-invalid
 *  - null for no contextual state
 */

var props$B = makePropsConfigurable({
  // Tri-state prop: true, false, null (or undefined)
  state: makeProp(PROP_TYPE_BOOLEAN, null)
}, 'formState'); // --- Mixin ---
// @vue/component

var formStateMixin = Vue__default['default'].extend({
  props: props$B,
  computed: {
    computedState: function computedState() {
      // If not a boolean, ensure that value is null
      return isBoolean(this.state) ? this.state : null;
    },
    stateClass: function stateClass() {
      var state = this.computedState;
      return state === true ? 'is-valid' : state === false ? 'is-invalid' : null;
    },
    computedAriaInvalid: function computedAriaInvalid() {
      var ariaInvalid = this.ariaInvalid;

      if (ariaInvalid === true || ariaInvalid === 'true' || ariaInvalid === '') {
        return 'true';
      }

      return this.computedState === false ? 'true' : ariaInvalid;
    }
  }
});var _watch$3, _methods;

function ownKeys$m(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$m(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$m(Object(source), true).forEach(function (key) { _defineProperty$p(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$m(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$p(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _makeModelMixin$5 = makeModelMixin('checked', {
  defaultValue: null
}),
    modelMixin$4 = _makeModelMixin$5.mixin,
    modelProps$4 = _makeModelMixin$5.props,
    MODEL_PROP_NAME$4 = _makeModelMixin$5.prop,
    MODEL_EVENT_NAME$4 = _makeModelMixin$5.event;

var props$A = makePropsConfigurable(sortKeys(_objectSpread$m(_objectSpread$m(_objectSpread$m(_objectSpread$m(_objectSpread$m(_objectSpread$m(_objectSpread$m({}, props$I), modelProps$4), props$E), props$C), props$B), props$D), {}, {
  ariaLabel: makeProp(PROP_TYPE_STRING),
  ariaLabelledby: makeProp(PROP_TYPE_STRING),
  // Only applicable in standalone mode (non group)
  button: makeProp(PROP_TYPE_BOOLEAN, false),
  // Only applicable when rendered with button style
  buttonVariant: makeProp(PROP_TYPE_STRING),
  inline: makeProp(PROP_TYPE_BOOLEAN, false),
  value: makeProp(PROP_TYPE_ANY)
})), 'formRadioCheckControls'); // --- Mixin ---
// @vue/component

var formRadioCheckMixin = Vue__default['default'].extend({
  mixins: [attrsMixin, idMixin, modelMixin$4, normalizeSlotMixin, formControlMixin, formSizeMixin, formStateMixin, formCustomMixin],
  inheritAttrs: false,
  props: props$A,
  data: function data() {
    return {
      localChecked: this.isGroup ? this.bvGroup[MODEL_PROP_NAME$4] : this[MODEL_PROP_NAME$4],
      hasFocus: false
    };
  },
  computed: {
    computedLocalChecked: {
      get: function get() {
        return this.isGroup ? this.bvGroup.localChecked : this.localChecked;
      },
      set: function set(value) {
        if (this.isGroup) {
          this.bvGroup.localChecked = value;
        } else {
          this.localChecked = value;
        }
      }
    },
    isChecked: function isChecked() {
      return looseEqual(this.value, this.computedLocalChecked);
    },
    isRadio: function isRadio() {
      return true;
    },
    isGroup: function isGroup() {
      // Is this check/radio a child of check-group or radio-group?
      return !!this.bvGroup;
    },
    isBtnMode: function isBtnMode() {
      // Support button style in single input mode
      return this.isGroup ? this.bvGroup.buttons : this.button;
    },
    isPlain: function isPlain() {
      return this.isBtnMode ? false : this.isGroup ? this.bvGroup.plain : this.plain;
    },
    isCustom: function isCustom() {
      return this.isBtnMode ? false : !this.isPlain;
    },
    isSwitch: function isSwitch() {
      // Custom switch styling (checkboxes only)
      return this.isBtnMode || this.isRadio || this.isPlain ? false : this.isGroup ? this.bvGroup.switches : this.switch;
    },
    isInline: function isInline() {
      return this.isGroup ? this.bvGroup.inline : this.inline;
    },
    isDisabled: function isDisabled() {
      // Child can be disabled while parent isn't, but is always disabled if group is
      return this.isGroup ? this.bvGroup.disabled || this.disabled : this.disabled;
    },
    isRequired: function isRequired() {
      // Required only works when a name is provided for the input(s)
      // Child can only be required when parent is
      // Groups will always have a name (either user supplied or auto generated)
      return this.computedName && (this.isGroup ? this.bvGroup.required : this.required);
    },
    computedName: function computedName() {
      // Group name preferred over local name
      return (this.isGroup ? this.bvGroup.groupName : this.name) || null;
    },
    computedForm: function computedForm() {
      return (this.isGroup ? this.bvGroup.form : this.form) || null;
    },
    computedSize: function computedSize() {
      return (this.isGroup ? this.bvGroup.size : this.size) || '';
    },
    computedState: function computedState() {
      return this.isGroup ? this.bvGroup.computedState : isBoolean(this.state) ? this.state : null;
    },
    computedButtonVariant: function computedButtonVariant() {
      // Local variant preferred over group variant
      var buttonVariant = this.buttonVariant;

      if (buttonVariant) {
        return buttonVariant;
      }

      if (this.isGroup && this.bvGroup.buttonVariant) {
        return this.bvGroup.buttonVariant;
      }

      return 'secondary';
    },
    buttonClasses: function buttonClasses() {
      var _ref;

      var computedSize = this.computedSize;
      return ['btn', "btn-".concat(this.computedButtonVariant), (_ref = {}, _defineProperty$p(_ref, "btn-".concat(computedSize), computedSize), _defineProperty$p(_ref, "disabled", this.isDisabled), _defineProperty$p(_ref, "active", this.isChecked), _defineProperty$p(_ref, "focus", this.hasFocus), _ref)];
    },
    computedAttrs: function computedAttrs() {
      var disabled = this.isDisabled,
          required = this.isRequired;
      return _objectSpread$m(_objectSpread$m({}, this.bvAttrs), {}, {
        id: this.safeId(),
        type: this.isRadio ? 'radio' : 'checkbox',
        name: this.computedName,
        form: this.computedForm,
        disabled: disabled,
        required: required,
        'aria-required': required || null,
        'aria-label': this.ariaLabel || null,
        'aria-labelledby': this.ariaLabelledby || null
      });
    }
  },
  watch: (_watch$3 = {}, _defineProperty$p(_watch$3, MODEL_PROP_NAME$4, function () {
    this["".concat(MODEL_PROP_NAME$4, "Watcher")].apply(this, arguments);
  }), _defineProperty$p(_watch$3, "computedLocalChecked", function computedLocalChecked() {
    this.computedLocalCheckedWatcher.apply(this, arguments);
  }), _watch$3),
  methods: (_methods = {}, _defineProperty$p(_methods, "".concat(MODEL_PROP_NAME$4, "Watcher"), function Watcher(newValue) {
    if (!looseEqual(newValue, this.computedLocalChecked)) {
      this.computedLocalChecked = newValue;
    }
  }), _defineProperty$p(_methods, "computedLocalCheckedWatcher", function computedLocalCheckedWatcher(newValue, oldValue) {
    if (!looseEqual(newValue, oldValue)) {
      this.$emit(MODEL_EVENT_NAME$4, newValue);
    }
  }), _defineProperty$p(_methods, "handleChange", function handleChange(_ref2) {
    var _this = this;

    var checked = _ref2.target.checked;
    var value = this.value;
    var localChecked = checked ? value : null;
    this.computedLocalChecked = value; // Fire events in a `$nextTick()` to ensure the `v-model` is updated

    this.$nextTick(function () {
      // Change is only emitted on user interaction
      _this.$emit(EVENT_NAME_CHANGE, localChecked); // If this is a child of a group, we emit a change event on it as well


      if (_this.isGroup) {
        _this.bvGroup.$emit(EVENT_NAME_CHANGE, localChecked);
      }
    });
  }), _defineProperty$p(_methods, "handleFocus", function handleFocus(event) {
    // When in buttons mode, we need to add 'focus' class to label when input focused
    // As it is the hidden input which has actual focus
    if (event.target) {
      if (event.type === 'focus') {
        this.hasFocus = true;
      } else if (event.type === 'blur') {
        this.hasFocus = false;
      }
    }
  }), _defineProperty$p(_methods, "focus", function focus() {
    if (!this.isDisabled) {
      attemptFocus(this.$refs.input);
    }
  }), _defineProperty$p(_methods, "blur", function blur() {
    if (!this.isDisabled) {
      attemptBlur(this.$refs.input);
    }
  }), _methods),
  render: function render(h) {
    var isRadio = this.isRadio,
        isBtnMode = this.isBtnMode,
        isPlain = this.isPlain,
        isCustom = this.isCustom,
        isInline = this.isInline,
        isSwitch = this.isSwitch,
        computedSize = this.computedSize,
        bvAttrs = this.bvAttrs;
    var $content = this.normalizeSlot();
    var $input = h('input', {
      class: [{
        'form-check-input': isPlain,
        'custom-control-input': isCustom,
        // https://github.com/bootstrap-vue/bootstrap-vue/issues/2911
        'position-static': isPlain && !$content
      }, isBtnMode ? '' : this.stateClass],
      directives: [{
        name: 'model',
        value: this.computedLocalChecked
      }],
      attrs: this.computedAttrs,
      domProps: {
        value: this.value,
        checked: this.isChecked
      },
      on: _objectSpread$m({
        change: this.handleChange
      }, isBtnMode ? {
        focus: this.handleFocus,
        blur: this.handleFocus
      } : {}),
      key: 'input',
      ref: 'input'
    });

    if (isBtnMode) {
      var $button = h('label', {
        class: this.buttonClasses
      }, [$input, $content]);

      if (!this.isGroup) {
        // Standalone button mode, so wrap in 'btn-group-toggle'
        // and flag it as inline-block to mimic regular buttons
        $button = h('div', {
          class: ['btn-group-toggle', 'd-inline-block']
        }, [$button]);
      }

      return $button;
    } // If no label content in plain mode we dont render the label
    // See: https://github.com/bootstrap-vue/bootstrap-vue/issues/2911


    var $label = h();

    if (!(isPlain && !$content)) {
      $label = h('label', {
        class: {
          'form-check-label': isPlain,
          'custom-control-label': isCustom
        },
        attrs: {
          for: this.safeId()
        }
      }, $content);
    }

    return h('div', {
      class: [_defineProperty$p({
        'form-check': isPlain,
        'form-check-inline': isPlain && isInline,
        'custom-control': isCustom,
        'custom-control-inline': isCustom && isInline,
        'custom-checkbox': isCustom && !isRadio && !isSwitch,
        'custom-switch': isSwitch,
        'custom-radio': isCustom && isRadio
      }, "b-custom-control-".concat(computedSize), computedSize && !isBtnMode), bvAttrs.class],
      style: bvAttrs.style
    }, [$input, $label]);
  }
});var _objectSpread2;

function ownKeys$l(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$l(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$l(Object(source), true).forEach(function (key) { _defineProperty$o(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$l(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$o(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MODEL_PROP_NAME_INDETERMINATE = 'indeterminate';
var MODEL_EVENT_NAME_INDETERMINATE = MODEL_EVENT_NAME_PREFIX + MODEL_PROP_NAME_INDETERMINATE; // --- Props ---

var props$z = makePropsConfigurable(sortKeys(_objectSpread$l(_objectSpread$l({}, props$A), {}, (_objectSpread2 = {}, _defineProperty$o(_objectSpread2, MODEL_PROP_NAME_INDETERMINATE, makeProp(PROP_TYPE_BOOLEAN, false)), _defineProperty$o(_objectSpread2, "switch", makeProp(PROP_TYPE_BOOLEAN, false)), _defineProperty$o(_objectSpread2, "uncheckedValue", makeProp(PROP_TYPE_ANY, false)), _defineProperty$o(_objectSpread2, "value", makeProp(PROP_TYPE_ANY, true)), _objectSpread2))), NAME_FORM_CHECKBOX); // --- Main component ---
// @vue/component

var BFormCheckbox = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_FORM_CHECKBOX,
  mixins: [formRadioCheckMixin],
  inject: {
    bvGroup: {
      from: 'bvCheckGroup',
      default: null
    }
  },
  props: props$z,
  computed: {
    isChecked: function isChecked() {
      var value = this.value,
          checked = this.computedLocalChecked;
      return isArray(checked) ? looseIndexOf(checked, value) > -1 : looseEqual(checked, value);
    },
    isRadio: function isRadio() {
      return false;
    }
  },
  watch: _defineProperty$o({}, MODEL_PROP_NAME_INDETERMINATE, function (newValue, oldValue) {
    if (!looseEqual(newValue, oldValue)) {
      this.setIndeterminate(newValue);
    }
  }),
  mounted: function mounted() {
    // Set initial indeterminate state
    this.setIndeterminate(this[MODEL_PROP_NAME_INDETERMINATE]);
  },
  methods: {
    computedLocalCheckedWatcher: function computedLocalCheckedWatcher(newValue, oldValue) {
      if (!looseEqual(newValue, oldValue)) {
        this.$emit(MODEL_EVENT_NAME$4, newValue);
        var $input = this.$refs.input;

        if ($input) {
          this.$emit(MODEL_EVENT_NAME_INDETERMINATE, $input.indeterminate);
        }
      }
    },
    handleChange: function handleChange(_ref) {
      var _this = this;

      var _ref$target = _ref.target,
          checked = _ref$target.checked,
          indeterminate = _ref$target.indeterminate;
      var value = this.value,
          uncheckedValue = this.uncheckedValue; // Update `computedLocalChecked`

      var localChecked = this.computedLocalChecked;

      if (isArray(localChecked)) {
        var index = looseIndexOf(localChecked, value);

        if (checked && index < 0) {
          // Add value to array
          localChecked = localChecked.concat(value);
        } else if (!checked && index > -1) {
          // Remove value from array
          localChecked = localChecked.slice(0, index).concat(localChecked.slice(index + 1));
        }
      } else {
        localChecked = checked ? value : uncheckedValue;
      }

      this.computedLocalChecked = localChecked; // Fire events in a `$nextTick()` to ensure the `v-model` is updated

      this.$nextTick(function () {
        // Change is only emitted on user interaction
        _this.$emit(EVENT_NAME_CHANGE, localChecked); // If this is a child of a group, we emit a change event on it as well


        if (_this.isGroup) {
          _this.bvGroup.$emit(EVENT_NAME_CHANGE, localChecked);
        }

        _this.$emit(MODEL_EVENT_NAME_INDETERMINATE, indeterminate);
      });
    },
    setIndeterminate: function setIndeterminate(state) {
      // Indeterminate only supported in single checkbox mode
      if (isArray(this.computedLocalChecked)) {
        state = false;
      }

      var $input = this.$refs.input;

      if ($input) {
        $input.indeterminate = state; // Emit update event to prop

        this.$emit(MODEL_EVENT_NAME_INDETERMINATE, state);
      }
    }
  }
});// v-b-hover directive

var PROP = '__BV_hover_handler__';
var MOUSEENTER = 'mouseenter';
var MOUSELEAVE = 'mouseleave'; // --- Helper methods ---

var createListener = function createListener(handler) {
  var listener = function listener(event) {
    handler(event.type === MOUSEENTER, event);
  };

  listener.fn = handler;
  return listener;
};

var updateListeners = function updateListeners(on, el, listener) {
  eventOnOff(on, el, MOUSEENTER, listener, EVENT_OPTIONS_NO_CAPTURE);
  eventOnOff(on, el, MOUSELEAVE, listener, EVENT_OPTIONS_NO_CAPTURE);
}; // --- Directive bind/unbind/update handler ---


var directive = function directive(el, _ref) {
  var _ref$value = _ref.value,
      handler = _ref$value === void 0 ? null : _ref$value;

  if (IS_BROWSER) {
    var listener = el[PROP];
    var hasListener = isFunction$1(listener);
    var handlerChanged = !(hasListener && listener.fn === handler);

    if (hasListener && handlerChanged) {
      updateListeners(false, el, listener);
      delete el[PROP];
    }

    if (isFunction$1(handler) && handlerChanged) {
      el[PROP] = createListener(handler);
      updateListeners(true, el, el[PROP]);
    }
  }
}; // VBHover directive


var VBHover = {
  bind: directive,
  componentUpdated: directive,
  unbind: function unbind(el) {
    directive(el, {
      value: null
    });
  }
};function ownKeys$k(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$k(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$k(Object(source), true).forEach(function (key) { _defineProperty$n(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$k(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$n(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props$y = sortKeys(_objectSpread$k(_objectSpread$k(_objectSpread$k(_objectSpread$k(_objectSpread$k(_objectSpread$k({}, props$I), props$C), props$B), omit(props$G, ['disabled'])), omit(props$E, ['autofocus'])), {}, {
  // When `true`, renders a `btn-group` wrapper and visually hides the label
  buttonOnly: makeProp(PROP_TYPE_BOOLEAN, false),
  // Applicable in button mode only
  buttonVariant: makeProp(PROP_TYPE_STRING, 'secondary'),
  // This is the value shown in the label
  // Defaults back to `value`
  formattedValue: makeProp(PROP_TYPE_STRING),
  // Value placed in `.sr-only` span inside label when value is present
  labelSelected: makeProp(PROP_TYPE_STRING),
  lang: makeProp(PROP_TYPE_STRING),
  // Extra classes to apply to the `dropdown-menu` div
  menuClass: makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  // This is the value placed on the hidden input when no value selected
  placeholder: makeProp(PROP_TYPE_STRING),
  readonly: makeProp(PROP_TYPE_BOOLEAN, false),
  // Tri-state prop: `true`, `false` or `null`
  rtl: makeProp(PROP_TYPE_BOOLEAN, null),
  value: makeProp(PROP_TYPE_STRING, '')
})); // --- Main component ---
// @vue/component

var BVFormBtnLabelControl = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_FORM_BUTTON_LABEL_CONTROL,
  directives: {
    'b-hover': VBHover
  },
  mixins: [idMixin, formSizeMixin, formStateMixin, dropdownMixin, normalizeSlotMixin],
  props: props$y,
  data: function data() {
    return {
      isHovered: false,
      hasFocus: false
    };
  },
  computed: {
    idButton: function idButton() {
      return this.safeId();
    },
    idLabel: function idLabel() {
      return this.safeId('_value_');
    },
    idMenu: function idMenu() {
      return this.safeId('_dialog_');
    },
    idWrapper: function idWrapper() {
      return this.safeId('_outer_');
    },
    computedDir: function computedDir() {
      return this.rtl === true ? 'rtl' : this.rtl === false ? 'ltr' : null;
    }
  },
  methods: {
    focus: function focus() {
      if (!this.disabled) {
        attemptFocus(this.$refs.toggle);
      }
    },
    blur: function blur() {
      if (!this.disabled) {
        attemptBlur(this.$refs.toggle);
      }
    },
    setFocus: function setFocus(event) {
      this.hasFocus = event.type === 'focus';
    },
    handleHover: function handleHover(hovered) {
      this.isHovered = hovered;
    }
  },
  render: function render(h) {
    var _class;

    var idButton = this.idButton,
        idLabel = this.idLabel,
        idMenu = this.idMenu,
        idWrapper = this.idWrapper,
        disabled = this.disabled,
        readonly = this.readonly,
        required = this.required,
        name = this.name,
        state = this.state,
        visible = this.visible,
        size = this.size,
        isHovered = this.isHovered,
        hasFocus = this.hasFocus,
        labelSelected = this.labelSelected,
        buttonVariant = this.buttonVariant,
        buttonOnly = this.buttonOnly;
    var value = toString(this.value) || '';
    var invalid = state === false || required && !value;
    var btnScope = {
      isHovered: isHovered,
      hasFocus: hasFocus,
      state: state,
      opened: visible
    };
    var $button = h('button', {
      staticClass: 'btn',
      class: (_class = {}, _defineProperty$n(_class, "btn-".concat(buttonVariant), buttonOnly), _defineProperty$n(_class, "btn-".concat(size), size), _defineProperty$n(_class, 'h-auto', !buttonOnly), _defineProperty$n(_class, 'dropdown-toggle', buttonOnly), _defineProperty$n(_class, 'dropdown-toggle-no-caret', buttonOnly), _class),
      attrs: {
        id: idButton,
        type: 'button',
        disabled: disabled,
        'aria-haspopup': 'dialog',
        'aria-expanded': visible ? 'true' : 'false',
        'aria-invalid': invalid ? 'true' : null,
        'aria-required': required ? 'true' : null
      },
      directives: [{
        name: 'b-hover',
        value: this.handleHover
      }],
      on: {
        mousedown: this.onMousedown,
        click: this.toggle,
        keydown: this.toggle,
        // Handle ENTER, SPACE and DOWN
        '!focus': this.setFocus,
        '!blur': this.setFocus
      },
      ref: 'toggle'
    }, [this.hasNormalizedSlot(SLOT_NAME_BUTTON_CONTENT) ? this.normalizeSlot(SLOT_NAME_BUTTON_CONTENT, btnScope) :
    /* istanbul ignore next */
    h(BIconChevronDown, {
      props: {
        scale: 1.25
      }
    })]); // Hidden input

    var $hidden = h();

    if (name && !disabled) {
      $hidden = h('input', {
        attrs: {
          type: 'hidden',
          name: name || null,
          form: this.form || null,
          value: value
        }
      });
    } // Dropdown content


    var $menu = h('div', {
      staticClass: 'dropdown-menu',
      class: [this.menuClass, {
        show: visible,
        'dropdown-menu-right': this.right
      }],
      attrs: {
        id: idMenu,
        role: 'dialog',
        tabindex: '-1',
        'aria-modal': 'false',
        'aria-labelledby': idLabel
      },
      on: {
        keydown: this.onKeydown // Handle ESC

      },
      ref: 'menu'
    }, [this.normalizeSlot(SLOT_NAME_DEFAULT, {
      opened: visible
    })]); // Value label

    var $label = h('label', {
      class: buttonOnly ? 'sr-only' // Hidden in button only mode
      : ['form-control', // Mute the text if showing the placeholder
      {
        'text-muted': !value
      }, this.stateClass, this.sizeFormClass],
      attrs: {
        id: idLabel,
        for: idButton,
        'aria-invalid': invalid ? 'true' : null,
        'aria-required': required ? 'true' : null
      },
      directives: [{
        name: 'b-hover',
        value: this.handleHover
      }],
      on: {
        // Disable bubbling of the click event to
        // prevent menu from closing and re-opening
        '!click':
        /* istanbul ignore next */
        function click(event) {
          stopEvent(event, {
            preventDefault: false
          });
        }
      }
    }, [value ? this.formattedValue || value : this.placeholder || '', // Add the selected label for screen readers when a value is provided
    value && labelSelected ? h('bdi', {
      staticClass: 'sr-only'
    }, labelSelected) : '']); // Return the custom form control wrapper

    return h('div', {
      staticClass: 'b-form-btn-label-control dropdown',
      class: [this.directionClass, this.boundaryClass, [{
        'btn-group': buttonOnly,
        'form-control': !buttonOnly,
        focus: hasFocus && !buttonOnly,
        show: visible,
        'is-valid': state === true,
        'is-invalid': state === false
      }, buttonOnly ? null : this.sizeFormClass]],
      attrs: {
        id: idWrapper,
        role: buttonOnly ? null : 'group',
        lang: this.lang || null,
        dir: this.computedDir,
        'aria-disabled': disabled,
        'aria-readonly': readonly && !disabled,
        'aria-labelledby': idLabel,
        'aria-invalid': state === false || required && !value ? 'true' : null,
        'aria-required': required ? 'true' : null
      }
    }, [$button, $hidden, $menu, $label]);
  }
});var _watch$2;

function ownKeys$j(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$j(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$j(Object(source), true).forEach(function (key) { _defineProperty$m(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$j(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$m(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _makeModelMixin$4 = makeModelMixin('value', {
  type: PROP_TYPE_DATE_STRING
}),
    modelMixin$3 = _makeModelMixin$4.mixin,
    modelProps$3 = _makeModelMixin$4.props,
    MODEL_PROP_NAME$3 = _makeModelMixin$4.prop,
    MODEL_EVENT_NAME$3 = _makeModelMixin$4.event; // --- Props ---


var calendarProps = omit(props$H, ['block', 'hidden', 'id', 'noKeyNav', 'roleDescription', 'value', 'width']);
var formBtnLabelControlProps = omit(props$y, ['formattedValue', 'id', 'lang', 'rtl', 'value']);
var props$x = makePropsConfigurable(sortKeys(_objectSpread$j(_objectSpread$j(_objectSpread$j(_objectSpread$j(_objectSpread$j({}, props$I), modelProps$3), calendarProps), formBtnLabelControlProps), {}, {
  // Width of the calendar dropdown
  calendarWidth: makeProp(PROP_TYPE_STRING, '270px'),
  closeButton: makeProp(PROP_TYPE_BOOLEAN, false),
  closeButtonVariant: makeProp(PROP_TYPE_STRING, 'outline-secondary'),
  // Dark mode
  dark: makeProp(PROP_TYPE_BOOLEAN, false),
  labelCloseButton: makeProp(PROP_TYPE_STRING, 'Close'),
  labelResetButton: makeProp(PROP_TYPE_STRING, 'Reset'),
  labelTodayButton: makeProp(PROP_TYPE_STRING, 'Select today'),
  noCloseOnSelect: makeProp(PROP_TYPE_BOOLEAN, false),
  resetButton: makeProp(PROP_TYPE_BOOLEAN, false),
  resetButtonVariant: makeProp(PROP_TYPE_STRING, 'outline-danger'),
  resetValue: makeProp(PROP_TYPE_DATE_STRING),
  todayButton: makeProp(PROP_TYPE_BOOLEAN, false),
  todayButtonVariant: makeProp(PROP_TYPE_STRING, 'outline-primary')
})), NAME_FORM_DATEPICKER); // --- Main component ---
// @vue/component

var BFormDatepicker = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_FORM_DATEPICKER,
  mixins: [idMixin, modelMixin$3],
  props: props$x,
  data: function data() {
    return {
      // We always use `YYYY-MM-DD` value internally
      localYMD: formatYMD(this[MODEL_PROP_NAME$3]) || '',
      // If the popup is open
      isVisible: false,
      // Context data from BCalendar
      localLocale: null,
      isRTL: false,
      formattedValue: '',
      activeYMD: ''
    };
  },
  computed: {
    calendarYM: function calendarYM() {
      // Returns the calendar year/month
      // Returns the `YYYY-MM` portion of the active calendar date
      return this.activeYMD.slice(0, -3);
    },
    computedLang: function computedLang() {
      return (this.localLocale || '').replace(/-u-.*$/i, '') || null;
    },
    computedResetValue: function computedResetValue() {
      return formatYMD(constrainDate(this.resetValue)) || '';
    }
  },
  watch: (_watch$2 = {}, _defineProperty$m(_watch$2, MODEL_PROP_NAME$3, function (newValue) {
    this.localYMD = formatYMD(newValue) || '';
  }), _defineProperty$m(_watch$2, "localYMD", function localYMD(newValue) {
    // We only update the v-model when the datepicker is open
    if (this.isVisible) {
      this.$emit(MODEL_EVENT_NAME$3, this.valueAsDate ? parseYMD(newValue) || null : newValue || '');
    }
  }), _defineProperty$m(_watch$2, "calendarYM", function calendarYM(newValue, oldValue) {
    // Displayed calendar month has changed
    // So possibly the calendar height has changed...
    // We need to update popper computed position
    if (newValue !== oldValue && oldValue) {
      try {
        this.$refs.control.updatePopper();
      } catch (_unused) {}
    }
  }), _watch$2),
  methods: {
    // Public methods
    focus: function focus() {
      if (!this.disabled) {
        attemptFocus(this.$refs.control);
      }
    },
    blur: function blur() {
      if (!this.disabled) {
        attemptBlur(this.$refs.control);
      }
    },
    // Private methods
    setAndClose: function setAndClose(ymd) {
      var _this = this;

      this.localYMD = ymd; // Close calendar popup, unless `noCloseOnSelect`

      if (!this.noCloseOnSelect) {
        this.$nextTick(function () {
          _this.$refs.control.hide(true);
        });
      }
    },
    onSelected: function onSelected(ymd) {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.setAndClose(ymd);
      });
    },
    onInput: function onInput(ymd) {
      if (this.localYMD !== ymd) {
        this.localYMD = ymd;
      }
    },
    onContext: function onContext(ctx) {
      var activeYMD = ctx.activeYMD,
          isRTL = ctx.isRTL,
          locale = ctx.locale,
          selectedYMD = ctx.selectedYMD,
          selectedFormatted = ctx.selectedFormatted;
      this.isRTL = isRTL;
      this.localLocale = locale;
      this.formattedValue = selectedFormatted;
      this.localYMD = selectedYMD;
      this.activeYMD = activeYMD; // Re-emit the context event

      this.$emit(EVENT_NAME_CONTEXT, ctx);
    },
    onTodayButton: function onTodayButton() {
      // Set to today (or min/max if today is out of range)
      this.setAndClose(formatYMD(constrainDate(createDate(), this.min, this.max)));
    },
    onResetButton: function onResetButton() {
      this.setAndClose(this.computedResetValue);
    },
    onCloseButton: function onCloseButton() {
      this.$refs.control.hide(true);
    },
    // Menu handlers
    onShow: function onShow() {
      this.isVisible = true;
    },
    onShown: function onShown() {
      var _this3 = this;

      this.$nextTick(function () {
        attemptFocus(_this3.$refs.calendar);

        _this3.$emit(EVENT_NAME_SHOWN);
      });
    },
    onHidden: function onHidden() {
      this.isVisible = false;
      this.$emit(EVENT_NAME_HIDDEN);
    },
    // Render helpers
    defaultButtonFn: function defaultButtonFn(_ref) {
      var isHovered = _ref.isHovered,
          hasFocus = _ref.hasFocus;
      return this.$createElement(isHovered || hasFocus ? BIconCalendarFill : BIconCalendar, {
        attrs: {
          'aria-hidden': 'true'
        }
      });
    }
  },
  render: function render(h) {
    var localYMD = this.localYMD,
        disabled = this.disabled,
        readonly = this.readonly,
        dark = this.dark,
        $props = this.$props,
        $scopedSlots = this.$scopedSlots;
    var placeholder = isUndefinedOrNull(this.placeholder) ? this.labelNoDateSelected : this.placeholder; // Optional footer buttons

    var $footer = [];

    if (this.todayButton) {
      var label = this.labelTodayButton;
      $footer.push(h(BButton, {
        props: {
          disabled: disabled || readonly,
          size: 'sm',
          variant: this.todayButtonVariant
        },
        attrs: {
          'aria-label': label || null
        },
        on: {
          click: this.onTodayButton
        }
      }, label));
    }

    if (this.resetButton) {
      var _label = this.labelResetButton;
      $footer.push(h(BButton, {
        props: {
          disabled: disabled || readonly,
          size: 'sm',
          variant: this.resetButtonVariant
        },
        attrs: {
          'aria-label': _label || null
        },
        on: {
          click: this.onResetButton
        }
      }, _label));
    }

    if (this.closeButton) {
      var _label2 = this.labelCloseButton;
      $footer.push(h(BButton, {
        props: {
          disabled: disabled,
          size: 'sm',
          variant: this.closeButtonVariant
        },
        attrs: {
          'aria-label': _label2 || null
        },
        on: {
          click: this.onCloseButton
        }
      }, _label2));
    }

    if ($footer.length > 0) {
      $footer = [h('div', {
        staticClass: 'b-form-date-controls d-flex flex-wrap',
        class: {
          'justify-content-between': $footer.length > 1,
          'justify-content-end': $footer.length < 2
        }
      }, $footer)];
    }

    var $calendar = h(BCalendar, {
      staticClass: 'b-form-date-calendar w-100',
      props: _objectSpread$j(_objectSpread$j({}, pluckProps(calendarProps, $props)), {}, {
        hidden: !this.isVisible,
        value: localYMD,
        valueAsDate: false,
        width: this.calendarWidth
      }),
      on: {
        selected: this.onSelected,
        input: this.onInput,
        context: this.onContext
      },
      scopedSlots: pick($scopedSlots, ['nav-prev-decade', 'nav-prev-year', 'nav-prev-month', 'nav-this-month', 'nav-next-month', 'nav-next-year', 'nav-next-decade']),
      key: 'calendar',
      ref: 'calendar'
    }, $footer);
    return h(BVFormBtnLabelControl, {
      staticClass: 'b-form-datepicker',
      props: _objectSpread$j(_objectSpread$j({}, pluckProps(formBtnLabelControlProps, $props)), {}, {
        formattedValue: localYMD ? this.formattedValue : '',
        id: this.safeId(),
        lang: this.computedLang,
        menuClass: [{
          'bg-dark': dark,
          'text-light': dark
        }, this.menuClass],
        placeholder: placeholder,
        rtl: this.isRTL,
        value: localYMD
      }),
      on: {
        show: this.onShow,
        shown: this.onShown,
        hidden: this.onHidden
      },
      scopedSlots: _defineProperty$m({}, SLOT_NAME_BUTTON_CONTENT, $scopedSlots[SLOT_NAME_BUTTON_CONTENT] || this.defaultButtonFn),
      ref: 'control'
    }, [$calendar]);
  }
});var formSelectionMixin = Vue__default['default'].extend({
  computed: {
    selectionStart: {
      // Expose selectionStart for formatters, etc
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.selectionStart;
      },

      /* istanbul ignore next */
      set: function set(val) {
        this.$refs.input.selectionStart = val;
      }
    },
    selectionEnd: {
      // Expose selectionEnd for formatters, etc
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.selectionEnd;
      },

      /* istanbul ignore next */
      set: function set(val) {
        this.$refs.input.selectionEnd = val;
      }
    },
    selectionDirection: {
      // Expose selectionDirection for formatters, etc
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.selectionDirection;
      },

      /* istanbul ignore next */
      set: function set(val) {
        this.$refs.input.selectionDirection = val;
      }
    }
  },
  methods: {
    /* istanbul ignore next */
    select: function select() {
      var _this$$refs$input;

      // For external handler that may want a select() method
      (_this$$refs$input = this.$refs.input).select.apply(_this$$refs$input, arguments);
    },

    /* istanbul ignore next */
    setSelectionRange: function setSelectionRange() {
      var _this$$refs$input2;

      // For external handler that may want a setSelectionRange(a,b,c) method
      (_this$$refs$input2 = this.$refs.input).setSelectionRange.apply(_this$$refs$input2, arguments);
    },

    /* istanbul ignore next */
    setRangeText: function setRangeText() {
      var _this$$refs$input3;

      // For external handler that may want a setRangeText(a,b,c) method
      (_this$$refs$input3 = this.$refs.input).setRangeText.apply(_this$$refs$input3, arguments);
    }
  }
});function ownKeys$i(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$i(Object(source), true).forEach(function (key) { _defineProperty$l(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$i(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$l(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _makeModelMixin$3 = makeModelMixin('value', {
  type: PROP_TYPE_NUMBER_STRING,
  defaultValue: '',
  event: EVENT_NAME_UPDATE
}),
    modelMixin$2 = _makeModelMixin$3.mixin,
    modelProps$2 = _makeModelMixin$3.props,
    MODEL_PROP_NAME$2 = _makeModelMixin$3.prop,
    MODEL_EVENT_NAME$2 = _makeModelMixin$3.event;

var props$w = makePropsConfigurable(sortKeys(_objectSpread$i(_objectSpread$i({}, modelProps$2), {}, {
  ariaInvalid: makeProp(PROP_TYPE_BOOLEAN_STRING, false),
  autocomplete: makeProp(PROP_TYPE_STRING),
  // Debounce timeout (in ms). Not applicable with `lazy` prop
  debounce: makeProp(PROP_TYPE_NUMBER_STRING, 0),
  formatter: makeProp(PROP_TYPE_FUNCTION),
  // Only update the `v-model` on blur/change events
  lazy: makeProp(PROP_TYPE_BOOLEAN, false),
  lazyFormatter: makeProp(PROP_TYPE_BOOLEAN, false),
  number: makeProp(PROP_TYPE_BOOLEAN, false),
  placeholder: makeProp(PROP_TYPE_STRING),
  plaintext: makeProp(PROP_TYPE_BOOLEAN, false),
  readonly: makeProp(PROP_TYPE_BOOLEAN, false),
  trim: makeProp(PROP_TYPE_BOOLEAN, false)
})), 'formTextControls'); // --- Mixin ---
// @vue/component

var formTextMixin = Vue__default['default'].extend({
  mixins: [modelMixin$2],
  props: props$w,
  data: function data() {
    var value = this[MODEL_PROP_NAME$2];
    return {
      localValue: toString(value),
      vModelValue: this.modifyValue(value)
    };
  },
  computed: {
    computedClass: function computedClass() {
      var plaintext = this.plaintext,
          type = this.type;
      var isRange = type === 'range';
      var isColor = type === 'color';
      return [{
        // Range input needs class `custom-range`
        'custom-range': isRange,
        // `plaintext` not supported by `type="range"` or `type="color"`
        'form-control-plaintext': plaintext && !isRange && !isColor,
        // `form-control` not used by `type="range"` or `plaintext`
        // Always used by `type="color"`
        'form-control': isColor || !plaintext && !isRange
      }, this.sizeFormClass, this.stateClass];
    },
    computedDebounce: function computedDebounce() {
      // Ensure we have a positive number equal to or greater than 0
      return mathMax(toInteger(this.debounce, 0), 0);
    },
    hasFormatter: function hasFormatter() {
      return hasPropFunction(this.formatter);
    }
  },
  watch: _defineProperty$l({}, MODEL_PROP_NAME$2, function (newValue) {
    var stringifyValue = toString(newValue);
    var modifiedValue = this.modifyValue(newValue);

    if (stringifyValue !== this.localValue || modifiedValue !== this.vModelValue) {
      // Clear any pending debounce timeout, as we are overwriting the user input
      this.clearDebounce(); // Update the local values

      this.localValue = stringifyValue;
      this.vModelValue = modifiedValue;
    }
  }),
  created: function created() {
    // Create private non-reactive props
    this.$_inputDebounceTimer = null;
  },
  mounted: function mounted() {
    // Set up destroy handler
    this.$on(HOOK_EVENT_NAME_BEFORE_DESTROY, this.clearDebounce);
  },
  beforeDestroy: function beforeDestroy() {
    this.clearDebounce();
  },
  methods: {
    clearDebounce: function clearDebounce() {
      clearTimeout(this.$_inputDebounceTimer);
      this.$_inputDebounceTimer = null;
    },
    formatValue: function formatValue(value, event) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      value = toString(value);

      if (this.hasFormatter && (!this.lazyFormatter || force)) {
        value = this.formatter(value, event);
      }

      return value;
    },
    modifyValue: function modifyValue(value) {
      value = toString(value); // Emulate `.trim` modifier behaviour

      if (this.trim) {
        value = value.trim();
      } // Emulate `.number` modifier behaviour


      if (this.number) {
        value = toFloat(value, value);
      }

      return value;
    },
    updateValue: function updateValue(value) {
      var _this = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var lazy = this.lazy;

      if (lazy && !force) {
        return;
      } // Make sure to always clear the debounce when `updateValue()`
      // is called, even when the v-model hasn't changed


      this.clearDebounce(); // Define the shared update logic in a method to be able to use
      // it for immediate and debounced value changes

      var doUpdate = function doUpdate() {
        value = _this.modifyValue(value);

        if (value !== _this.vModelValue) {
          _this.vModelValue = value;

          _this.$emit(MODEL_EVENT_NAME$2, value);
        } else if (_this.hasFormatter) {
          // When the `vModelValue` hasn't changed but the actual input value
          // is out of sync, make sure to change it to the given one
          // Usually caused by browser autocomplete and how it triggers the
          // change or input event, or depending on the formatter function
          // https://github.com/bootstrap-vue/bootstrap-vue/issues/2657
          // https://github.com/bootstrap-vue/bootstrap-vue/issues/3498

          /* istanbul ignore next: hard to test */
          var $input = _this.$refs.input;
          /* istanbul ignore if: hard to test out of sync value */

          if ($input && value !== $input.value) {
            $input.value = value;
          }
        }
      }; // Only debounce the value update when a value greater than `0`
      // is set and we are not in lazy mode or this is a forced update


      var debounce = this.computedDebounce;

      if (debounce > 0 && !lazy && !force) {
        this.$_inputDebounceTimer = setTimeout(doUpdate, debounce);
      } else {
        // Immediately update the v-model
        doUpdate();
      }
    },
    onInput: function onInput(event) {
      // `event.target.composing` is set by Vue
      // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js
      // TODO: Is this needed now with the latest Vue?

      /* istanbul ignore if: hard to test composition events */
      if (event.target.composing) {
        return;
      }

      var value = event.target.value;
      var formattedValue = this.formatValue(value, event); // Exit when the `formatter` function strictly returned `false`
      // or prevented the input event

      /* istanbul ignore next */

      if (formattedValue === false || event.defaultPrevented) {
        stopEvent(event, {
          propagation: false
        });
        return;
      }

      this.localValue = formattedValue;
      this.updateValue(formattedValue);
      this.$emit(EVENT_NAME_INPUT, formattedValue);
    },
    onChange: function onChange(event) {
      var value = event.target.value;
      var formattedValue = this.formatValue(value, event); // Exit when the `formatter` function strictly returned `false`
      // or prevented the input event

      /* istanbul ignore next */

      if (formattedValue === false || event.defaultPrevented) {
        stopEvent(event, {
          propagation: false
        });
        return;
      }

      this.localValue = formattedValue;
      this.updateValue(formattedValue, true);
      this.$emit(EVENT_NAME_CHANGE, formattedValue);
    },
    onBlur: function onBlur(event) {
      // Apply the `localValue` on blur to prevent cursor jumps
      // on mobile browsers (e.g. caused by autocomplete)
      var value = event.target.value;
      var formattedValue = this.formatValue(value, event, true);

      if (formattedValue !== false) {
        // We need to use the modified value here to apply the
        // `.trim` and `.number` modifiers properly
        this.localValue = toString(this.modifyValue(formattedValue)); // We pass the formatted value here since the `updateValue` method
        // handles the modifiers itself

        this.updateValue(formattedValue, true);
      } // Emit native blur event


      this.$emit(EVENT_NAME_BLUR, event);
    },
    focus: function focus() {
      // For external handler that may want a focus method
      if (!this.disabled) {
        attemptFocus(this.$el);
      }
    },
    blur: function blur() {
      // For external handler that may want a blur method
      if (!this.disabled) {
        attemptBlur(this.$el);
      }
    }
  }
});var formValidityMixin = Vue__default['default'].extend({
  computed: {
    validity: {
      // Expose validity property
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.validity;
      }
    },
    validationMessage: {
      // Expose validationMessage property
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.validationMessage;
      }
    },
    willValidate: {
      // Expose willValidate property
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.willValidate;
      }
    }
  },
  methods: {
    /* istanbul ignore next */
    setCustomValidity: function setCustomValidity() {
      var _this$$refs$input;

      // For external handler that may want a setCustomValidity(...) method
      return (_this$$refs$input = this.$refs.input).setCustomValidity.apply(_this$$refs$input, arguments);
    },

    /* istanbul ignore next */
    checkValidity: function checkValidity() {
      var _this$$refs$input2;

      // For external handler that may want a checkValidity(...) method
      return (_this$$refs$input2 = this.$refs.input).checkValidity.apply(_this$$refs$input2, arguments);
    },

    /* istanbul ignore next */
    reportValidity: function reportValidity() {
      var _this$$refs$input3;

      // For external handler that may want a reportValidity(...) method
      return (_this$$refs$input3 = this.$refs.input).reportValidity.apply(_this$$refs$input3, arguments);
    }
  }
});function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$h(Object(source), true).forEach(function (key) { _defineProperty$k(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$h(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$k(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// Valid supported input types

var TYPES = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'range', 'color', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week']; // --- Props ---

var props$v = makePropsConfigurable(sortKeys(_objectSpread$h(_objectSpread$h(_objectSpread$h(_objectSpread$h(_objectSpread$h(_objectSpread$h({}, props$I), props$E), props$C), props$B), props$w), {}, {
  list: makeProp(PROP_TYPE_STRING),
  max: makeProp(PROP_TYPE_NUMBER_STRING),
  min: makeProp(PROP_TYPE_NUMBER_STRING),
  // Disable mousewheel to prevent wheel from changing values (i.e. number/date)
  noWheel: makeProp(PROP_TYPE_BOOLEAN, false),
  step: makeProp(PROP_TYPE_NUMBER_STRING),
  type: makeProp(PROP_TYPE_STRING, 'text', function (type) {
    return arrayIncludes(TYPES, type);
  })
})), NAME_FORM_INPUT); // --- Main component ---
// @vue/component

var BFormInput = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_FORM_INPUT,
  // Mixin order is important!
  mixins: [listenersMixin, idMixin, formControlMixin, formSizeMixin, formStateMixin, formTextMixin, formSelectionMixin, formValidityMixin],
  props: props$v,
  computed: {
    localType: function localType() {
      // We only allow certain types
      var type = this.type;
      return arrayIncludes(TYPES, type) ? type : 'text';
    },
    computedAttrs: function computedAttrs() {
      var type = this.localType,
          name = this.name,
          form = this.form,
          disabled = this.disabled,
          placeholder = this.placeholder,
          required = this.required,
          min = this.min,
          max = this.max,
          step = this.step;
      return {
        id: this.safeId(),
        name: name,
        form: form,
        type: type,
        disabled: disabled,
        placeholder: placeholder,
        required: required,
        autocomplete: this.autocomplete || null,
        readonly: this.readonly || this.plaintext,
        min: min,
        max: max,
        step: step,
        list: type !== 'password' ? this.list : null,
        'aria-required': required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      };
    },
    computedListeners: function computedListeners() {
      return _objectSpread$h(_objectSpread$h({}, this.bvListeners), {}, {
        input: this.onInput,
        change: this.onChange,
        blur: this.onBlur
      });
    }
  },
  watch: {
    noWheel: function noWheel(newValue) {
      this.setWheelStopper(newValue);
    }
  },
  mounted: function mounted() {
    this.setWheelStopper(this.noWheel);
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    // Turn off listeners when keep-alive component deactivated

    /* istanbul ignore next */
    this.setWheelStopper(false);
  },

  /* istanbul ignore next */
  activated: function activated() {
    // Turn on listeners (if no-wheel) when keep-alive component activated

    /* istanbul ignore next */
    this.setWheelStopper(this.noWheel);
  },
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  methods: {
    setWheelStopper: function setWheelStopper(on) {
      var input = this.$el; // We use native events, so that we don't interfere with propagation

      eventOnOff(on, input, 'focus', this.onWheelFocus);
      eventOnOff(on, input, 'blur', this.onWheelBlur);

      if (!on) {
        eventOff(document, 'wheel', this.stopWheel);
      }
    },
    onWheelFocus: function onWheelFocus() {
      eventOn(document, 'wheel', this.stopWheel);
    },
    onWheelBlur: function onWheelBlur() {
      eventOff(document, 'wheel', this.stopWheel);
    },
    stopWheel: function stopWheel(event) {
      stopEvent(event, {
        propagation: false
      });
      attemptBlur(this.$el);
    }
  },
  render: function render(h) {
    return h('input', {
      class: this.computedClass,
      attrs: this.computedAttrs,
      domProps: {
        value: this.localValue
      },
      on: this.computedListeners,
      ref: 'input'
    });
  }
});var _watch$1;

function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$g(Object(source), true).forEach(function (key) { _defineProperty$j(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$g(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$j(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _makeModelMixin$2 = makeModelMixin('value', {
  type: PROP_TYPE_NUMBER_STRING,
  event: EVENT_NAME_CHANGE
}),
    modelMixin$1 = _makeModelMixin$2.mixin,
    modelProps$1 = _makeModelMixin$2.props,
    MODEL_PROP_NAME$1 = _makeModelMixin$2.prop,
    MODEL_EVENT_NAME$1 = _makeModelMixin$2.event;

var MIN_STARS = 3;
var DEFAULT_STARS = 5; // --- Helper methods ---

var computeStars = function computeStars(stars) {
  return mathMax(MIN_STARS, toInteger(stars, DEFAULT_STARS));
};

var clampValue = function clampValue(value, min, max) {
  return mathMax(mathMin(value, max), min);
}; // --- Helper components ---
// @vue/component


var BVFormRatingStar = Vue__default['default'].extend({
  name: NAME_FORM_RATING_STAR,
  mixins: [normalizeSlotMixin],
  props: {
    disabled: makeProp(PROP_TYPE_BOOLEAN, false),
    // If parent is focused
    focused: makeProp(PROP_TYPE_BOOLEAN, false),
    hasClear: makeProp(PROP_TYPE_BOOLEAN, false),
    rating: makeProp(PROP_TYPE_NUMBER, 0),
    readonly: makeProp(PROP_TYPE_BOOLEAN, false),
    star: makeProp(PROP_TYPE_NUMBER, 0),
    variant: makeProp(PROP_TYPE_STRING)
  },
  methods: {
    onClick: function onClick(event) {
      if (!this.disabled && !this.readonly) {
        stopEvent(event, {
          propagation: false
        });
        this.$emit(EVENT_NAME_SELECTED, this.star);
      }
    }
  },
  render: function render(h) {
    var rating = this.rating,
        star = this.star,
        focused = this.focused,
        hasClear = this.hasClear,
        variant = this.variant,
        disabled = this.disabled,
        readonly = this.readonly;
    var minStar = hasClear ? 0 : 1;
    var type = rating >= star ? 'full' : rating >= star - 0.5 ? 'half' : 'empty';
    var slotScope = {
      variant: variant,
      disabled: disabled,
      readonly: readonly
    };
    return h('span', {
      staticClass: 'b-rating-star',
      class: {
        // When not hovered, we use this class to focus the current (or first) star
        focused: focused && rating === star || !toInteger(rating) && star === minStar,
        // We add type classes to we can handle RTL styling
        'b-rating-star-empty': type === 'empty',
        'b-rating-star-half': type === 'half',
        'b-rating-star-full': type === 'full'
      },
      attrs: {
        tabindex: !disabled && !readonly ? '-1' : null
      },
      on: {
        click: this.onClick
      }
    }, [h('span', {
      staticClass: 'b-rating-icon'
    }, [this.normalizeSlot(type, slotScope)])]);
  }
}); // --- Props ---

var props$u = makePropsConfigurable(sortKeys(_objectSpread$g(_objectSpread$g(_objectSpread$g(_objectSpread$g(_objectSpread$g({}, props$I), modelProps$1), omit(props$E, ['required', 'autofocus'])), props$C), {}, {
  // CSS color string (overrides variant)
  color: makeProp(PROP_TYPE_STRING),
  iconClear: makeProp(PROP_TYPE_STRING, 'x'),
  iconEmpty: makeProp(PROP_TYPE_STRING, 'star'),
  iconFull: makeProp(PROP_TYPE_STRING, 'star-fill'),
  iconHalf: makeProp(PROP_TYPE_STRING, 'star-half'),
  inline: makeProp(PROP_TYPE_BOOLEAN, false),
  // Locale for the formatted value (if shown)
  // Defaults to the browser locale. Falls back to `en`
  locale: makeProp(PROP_TYPE_ARRAY_STRING),
  noBorder: makeProp(PROP_TYPE_BOOLEAN, false),
  precision: makeProp(PROP_TYPE_NUMBER_STRING),
  readonly: makeProp(PROP_TYPE_BOOLEAN, false),
  showClear: makeProp(PROP_TYPE_BOOLEAN, false),
  showValue: makeProp(PROP_TYPE_BOOLEAN, false),
  showValueMax: makeProp(PROP_TYPE_BOOLEAN, false),
  stars: makeProp(PROP_TYPE_NUMBER_STRING, DEFAULT_STARS, function (value) {
    return toInteger(value) >= MIN_STARS;
  }),
  variant: makeProp(PROP_TYPE_STRING)
})), NAME_FORM_RATING); // --- Main component ---
// @vue/component

var BFormRating = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_FORM_RATING,
  components: {
    BIconStar: BIconStar,
    BIconStarHalf: BIconStarHalf,
    BIconStarFill: BIconStarFill,
    BIconX: BIconX
  },
  mixins: [idMixin, modelMixin$1, formSizeMixin],
  props: props$u,
  data: function data() {
    var value = toFloat(this[MODEL_PROP_NAME$1], null);
    var stars = computeStars(this.stars);
    return {
      localValue: isNull(value) ? null : clampValue(value, 0, stars),
      hasFocus: false
    };
  },
  computed: {
    computedStars: function computedStars() {
      return computeStars(this.stars);
    },
    computedRating: function computedRating() {
      var value = toFloat(this.localValue, 0);
      var precision = toInteger(this.precision, 3); // We clamp the value between `0` and stars

      return clampValue(toFloat(value.toFixed(precision)), 0, this.computedStars);
    },
    computedLocale: function computedLocale() {
      var locales = concat(this.locale).filter(identity);
      var nf = new Intl.NumberFormat(locales);
      return nf.resolvedOptions().locale;
    },
    isInteractive: function isInteractive() {
      return !this.disabled && !this.readonly;
    },
    isRTL: function isRTL() {
      return isLocaleRTL(this.computedLocale);
    },
    formattedRating: function formattedRating() {
      var precision = toInteger(this.precision);
      var showValueMax = this.showValueMax;
      var locale = this.computedLocale;
      var formatOptions = {
        notation: 'standard',
        minimumFractionDigits: isNaN(precision) ? 0 : precision,
        maximumFractionDigits: isNaN(precision) ? 3 : precision
      };
      var stars = this.computedStars.toLocaleString(locale);
      var value = this.localValue;
      value = isNull(value) ? showValueMax ? '-' : '' : value.toLocaleString(locale, formatOptions);
      return showValueMax ? "".concat(value, "/").concat(stars) : value;
    }
  },
  watch: (_watch$1 = {}, _defineProperty$j(_watch$1, MODEL_PROP_NAME$1, function (newValue, oldValue) {
    if (newValue !== oldValue) {
      var value = toFloat(newValue, null);
      this.localValue = isNull(value) ? null : clampValue(value, 0, this.computedStars);
    }
  }), _defineProperty$j(_watch$1, "localValue", function localValue(newValue, oldValue) {
    if (newValue !== oldValue && newValue !== (this.value || 0)) {
      this.$emit(MODEL_EVENT_NAME$1, newValue || null);
    }
  }), _defineProperty$j(_watch$1, "disabled", function disabled(newValue) {
    if (newValue) {
      this.hasFocus = false;
      this.blur();
    }
  }), _watch$1),
  methods: {
    // --- Public methods ---
    focus: function focus() {
      if (!this.disabled) {
        attemptFocus(this.$el);
      }
    },
    blur: function blur() {
      if (!this.disabled) {
        attemptBlur(this.$el);
      }
    },
    // --- Private methods ---
    onKeydown: function onKeydown(event) {
      var keyCode = event.keyCode;

      if (this.isInteractive && arrayIncludes([CODE_LEFT, CODE_DOWN, CODE_RIGHT, CODE_UP], keyCode)) {
        stopEvent(event, {
          propagation: false
        });
        var value = toInteger(this.localValue, 0);
        var min = this.showClear ? 0 : 1;
        var stars = this.computedStars; // In RTL mode, LEFT/RIGHT are swapped

        var amountRtl = this.isRTL ? -1 : 1;

        if (keyCode === CODE_LEFT) {
          this.localValue = clampValue(value - amountRtl, min, stars) || null;
        } else if (keyCode === CODE_RIGHT) {
          this.localValue = clampValue(value + amountRtl, min, stars);
        } else if (keyCode === CODE_DOWN) {
          this.localValue = clampValue(value - 1, min, stars) || null;
        } else if (keyCode === CODE_UP) {
          this.localValue = clampValue(value + 1, min, stars);
        }
      }
    },
    onSelected: function onSelected(value) {
      if (this.isInteractive) {
        this.localValue = value;
      }
    },
    onFocus: function onFocus(event) {
      this.hasFocus = !this.isInteractive ? false : event.type === 'focus';
    },
    // --- Render methods ---
    renderIcon: function renderIcon(icon) {
      return this.$createElement(BIcon, {
        props: {
          icon: icon,
          variant: this.disabled || this.color ? null : this.variant || null
        }
      });
    },
    iconEmptyFn: function iconEmptyFn() {
      return this.renderIcon(this.iconEmpty);
    },
    iconHalfFn: function iconHalfFn() {
      return this.renderIcon(this.iconHalf);
    },
    iconFullFn: function iconFullFn() {
      return this.renderIcon(this.iconFull);
    },
    iconClearFn: function iconClearFn() {
      return this.$createElement(BIcon, {
        props: {
          icon: this.iconClear
        }
      });
    }
  },
  render: function render(h) {
    var _this = this;

    var disabled = this.disabled,
        readonly = this.readonly,
        name = this.name,
        form = this.form,
        inline = this.inline,
        variant = this.variant,
        color = this.color,
        noBorder = this.noBorder,
        hasFocus = this.hasFocus,
        computedRating = this.computedRating,
        computedStars = this.computedStars,
        formattedRating = this.formattedRating,
        showClear = this.showClear,
        isRTL = this.isRTL,
        isInteractive = this.isInteractive,
        $scopedSlots = this.$scopedSlots;
    var $content = [];

    if (showClear && !disabled && !readonly) {
      var $icon = h('span', {
        staticClass: 'b-rating-icon'
      }, [($scopedSlots[SLOT_NAME_ICON_CLEAR] || this.iconClearFn)()]);
      $content.push(h('span', {
        staticClass: 'b-rating-star b-rating-star-clear flex-grow-1',
        class: {
          focused: hasFocus && computedRating === 0
        },
        attrs: {
          tabindex: isInteractive ? '-1' : null
        },
        on: {
          click: function click() {
            return _this.onSelected(null);
          }
        },
        key: 'clear'
      }, [$icon]));
    }

    for (var index = 0; index < computedStars; index++) {
      var value = index + 1;
      $content.push(h(BVFormRatingStar, {
        staticClass: 'flex-grow-1',
        style: color && !disabled ? {
          color: color
        } : {},
        props: {
          rating: computedRating,
          star: value,
          variant: disabled ? null : variant || null,
          disabled: disabled,
          readonly: readonly,
          focused: hasFocus,
          hasClear: showClear
        },
        on: {
          selected: this.onSelected
        },
        scopedSlots: {
          empty: $scopedSlots[SLOT_NAME_ICON_EMPTY] || this.iconEmptyFn,
          half: $scopedSlots[SLOT_NAME_ICON_HALF] || this.iconHalfFn,
          full: $scopedSlots[SLOT_NAME_ICON_FULL] || this.iconFullFn
        },
        key: index
      }));
    }

    if (name) {
      $content.push(h('input', {
        attrs: {
          type: 'hidden',
          value: isNull(this.localValue) ? '' : computedRating,
          name: name,
          form: form || null
        },
        key: 'hidden'
      }));
    }

    if (this.showValue) {
      $content.push(h('b', {
        staticClass: 'b-rating-value flex-grow-1',
        attrs: {
          'aria-hidden': 'true'
        },
        key: 'value'
      }, toString(formattedRating)));
    }

    return h('output', {
      staticClass: 'b-rating form-control align-items-center',
      class: [{
        'd-inline-flex': inline,
        'd-flex': !inline,
        'border-0': noBorder,
        disabled: disabled,
        readonly: !disabled && readonly
      }, this.sizeFormClass],
      attrs: {
        id: this.safeId(),
        dir: isRTL ? 'rtl' : 'ltr',
        tabindex: disabled ? null : '0',
        disabled: disabled,
        role: 'slider',
        'aria-disabled': disabled ? 'true' : null,
        'aria-readonly': !disabled && readonly ? 'true' : null,
        'aria-live': 'off',
        'aria-valuemin': showClear ? '0' : '1',
        'aria-valuemax': toString(computedStars),
        'aria-valuenow': computedRating ? toString(computedRating) : null
      },
      on: {
        keydown: this.onKeydown,
        focus: this.onFocus,
        blur: this.onFocus
      }
    }, $content);
  }
});var _makeModelMixin$1 = makeModelMixin('value'),
    mixin = _makeModelMixin$1.mixin,
    props$t = _makeModelMixin$1.props,
    prop = _makeModelMixin$1.prop,
    event = _makeModelMixin$1.event;function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$f(Object(source), true).forEach(function (key) { _defineProperty$i(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$f(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$i(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props$s = makePropsConfigurable(sortKeys(_objectSpread$f(_objectSpread$f({}, props$F), {}, {
  labelField: makeProp(PROP_TYPE_STRING, 'label'),
  optionsField: makeProp(PROP_TYPE_STRING, 'options')
})), 'formOptions'); // --- Mixin ---
// @vue/component

var optionsMixin = Vue__default['default'].extend({
  mixins: [formOptionsMixin],
  props: props$s,
  methods: {
    normalizeOption: function normalizeOption(option) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // When the option is an object, normalize it
      if (isPlainObject(option)) {
        var value = get(option, this.valueField);
        var text = get(option, this.textField);
        var options = get(option, this.optionsField, null); // When it has options, create an `<optgroup>` object

        if (!isNull(options)) {
          return {
            label: String(get(option, this.labelField) || text),
            options: this.normalizeOptions(options)
          };
        } // Otherwise create an `<option>` object


        return {
          value: isUndefined(value) ? key || text : value,
          text: String(isUndefined(text) ? key : text),
          html: get(option, this.htmlField),
          disabled: Boolean(get(option, this.disabledField))
        };
      } // Otherwise create an `<option>` object from the given value


      return {
        value: key || option,
        text: String(option),
        disabled: false
      };
    }
  }
});var props$r = makePropsConfigurable({
  disabled: makeProp(PROP_TYPE_BOOLEAN, false),
  value: makeProp(PROP_TYPE_ANY, undefined, true) // Required

}, NAME_FORM_SELECT_OPTION); // --- Main component ---
// @vue/component

var BFormSelectOption = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_FORM_SELECT_OPTION,
  functional: true,
  props: props$r,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var value = props.value,
        disabled = props.disabled;
    return h('option', a(data, {
      attrs: {
        disabled: disabled
      },
      domProps: {
        value: value
      }
    }), children);
  }
});function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$e(Object(source), true).forEach(function (key) { _defineProperty$h(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$h(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props$q = makePropsConfigurable(sortKeys(_objectSpread$e(_objectSpread$e({}, props$F), {}, {
  label: makeProp(PROP_TYPE_STRING, undefined, true) // Required

})), NAME_FORM_SELECT_OPTION_GROUP); // --- Main component ---
// @vue/component

var BFormSelectOptionGroup = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_FORM_SELECT_OPTION_GROUP,
  mixins: [normalizeSlotMixin, formOptionsMixin],
  props: props$q,
  render: function render(h) {
    var label = this.label;
    var $options = this.formOptions.map(function (option, index) {
      var value = option.value,
          text = option.text,
          html = option.html,
          disabled = option.disabled;
      return h(BFormSelectOption, {
        attrs: {
          value: value,
          disabled: disabled
        },
        domProps: htmlOrText(html, text),
        key: "option_".concat(index)
      });
    });
    return h('optgroup', {
      attrs: {
        label: label
      }
    }, [this.normalizeSlot(SLOT_NAME_FIRST), $options, this.normalizeSlot()]);
  }
});function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(Object(source), true).forEach(function (key) { _defineProperty$g(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$g(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props$p = makePropsConfigurable(sortKeys(_objectSpread$d(_objectSpread$d(_objectSpread$d(_objectSpread$d(_objectSpread$d(_objectSpread$d(_objectSpread$d({}, props$I), props$t), props$E), props$D), props$C), props$B), {}, {
  ariaInvalid: makeProp(PROP_TYPE_BOOLEAN_STRING, false),
  multiple: makeProp(PROP_TYPE_BOOLEAN, false),
  // Browsers default size to `0`, which shows 4 rows in most browsers in multiple mode
  // Size of `1` can bork out Firefox
  selectSize: makeProp(PROP_TYPE_NUMBER, 0)
})), NAME_FORM_SELECT); // --- Main component ---
// @vue/component

var BFormSelect = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_FORM_SELECT,
  mixins: [idMixin, mixin, formControlMixin, formSizeMixin, formStateMixin, formCustomMixin, optionsMixin, normalizeSlotMixin],
  props: props$p,
  data: function data() {
    return {
      localValue: this[prop]
    };
  },
  computed: {
    computedSelectSize: function computedSelectSize() {
      // Custom selects with a size of zero causes the arrows to be hidden,
      // so dont render the size attribute in this case
      return !this.plain && this.selectSize === 0 ? null : this.selectSize;
    },
    inputClass: function inputClass() {
      return [this.plain ? 'form-control' : 'custom-select', this.size && this.plain ? "form-control-".concat(this.size) : null, this.size && !this.plain ? "custom-select-".concat(this.size) : null, this.stateClass];
    }
  },
  watch: {
    value: function value(newValue) {
      this.localValue = newValue;
    },
    localValue: function localValue() {
      this.$emit(event, this.localValue);
    }
  },
  methods: {
    focus: function focus() {
      attemptFocus(this.$refs.input);
    },
    blur: function blur() {
      attemptBlur(this.$refs.input);
    },
    onChange: function onChange(event) {
      var _this = this;

      var target = event.target;
      var selectedValue = from(target.options).filter(function (o) {
        return o.selected;
      }).map(function (o) {
        return '_value' in o ? o._value : o.value;
      });
      this.localValue = target.multiple ? selectedValue : selectedValue[0];
      this.$nextTick(function () {
        _this.$emit(EVENT_NAME_CHANGE, _this.localValue);
      });
    }
  },
  render: function render(h) {
    var name = this.name,
        disabled = this.disabled,
        required = this.required,
        size = this.computedSelectSize,
        value = this.localValue;
    var $options = this.formOptions.map(function (option, index) {
      var value = option.value,
          label = option.label,
          options = option.options,
          disabled = option.disabled;
      var key = "option_".concat(index);
      return isArray(options) ? h(BFormSelectOptionGroup, {
        props: {
          label: label,
          options: options
        },
        key: key
      }) : h(BFormSelectOption, {
        props: {
          value: value,
          disabled: disabled
        },
        domProps: htmlOrText(option.html, option.text),
        key: key
      });
    });
    return h('select', {
      class: this.inputClass,
      attrs: {
        id: this.safeId(),
        name: name,
        form: this.form || null,
        multiple: this.multiple || null,
        size: size,
        disabled: disabled,
        required: required,
        'aria-required': required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      },
      on: {
        change: this.onChange
      },
      directives: [{
        name: 'model',
        value: value
      }],
      ref: 'input'
    }, [this.normalizeSlot(SLOT_NAME_FIRST), $options, this.normalizeSlot()]);
  }
});// Mixin to determine if an event listener has been registered

var hasListenerMixin = Vue__default['default'].extend({
  methods: {
    hasListener: function hasListener(name) {
      // Only includes listeners registered via `v-on:name`
      var $listeners = this.$listeners || {}; // Includes `v-on:name` and `this.$on('name')` registered listeners
      // Note this property is not part of the public Vue API, but it is
      // the only way to determine if a listener was added via `vm.$on`

      var $events = this._events || {}; // Registered listeners in `this._events` are always an array,
      // but might be zero length

      return !isUndefined($listeners[name]) || isArray($events[name]) && $events[name].length > 0;
    }
  }
});function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(Object(source), true).forEach(function (key) { _defineProperty$f(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$f(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LIGHT = 'light';
var DARK = 'dark'; // --- Props ---

var props$o = makePropsConfigurable({
  variant: makeProp(PROP_TYPE_STRING)
}, NAME_TR); // --- Main component ---
// TODO:
//   In Bootstrap v5, we won't need "sniffing" as table element variants properly inherit
//   to the child elements, so this can be converted to a functional component
// @vue/component

var BTr = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_TR,
  mixins: [attrsMixin, listenersMixin, normalizeSlotMixin],
  provide: function provide() {
    return {
      bvTableTr: this
    };
  },
  inject: {
    bvTableRowGroup: {
      default:
      /* istanbul ignore next */
      function _default() {
        return {};
      }
    }
  },
  inheritAttrs: false,
  props: props$o,
  computed: {
    // Sniffed by `<b-td>` / `<b-th>`
    inTbody: function inTbody() {
      return this.bvTableRowGroup.isTbody;
    },
    // Sniffed by `<b-td>` / `<b-th>`
    inThead: function inThead() {
      return this.bvTableRowGroup.isThead;
    },
    // Sniffed by `<b-td>` / `<b-th>`
    inTfoot: function inTfoot() {
      return this.bvTableRowGroup.isTfoot;
    },
    // Sniffed by `<b-td>` / `<b-th>`
    isDark: function isDark() {
      return this.bvTableRowGroup.isDark;
    },
    // Sniffed by `<b-td>` / `<b-th>`
    isStacked: function isStacked() {
      return this.bvTableRowGroup.isStacked;
    },
    // Sniffed by `<b-td>` / `<b-th>`
    isResponsive: function isResponsive() {
      return this.bvTableRowGroup.isResponsive;
    },
    // Sniffed by `<b-td>` / `<b-th>`
    // Sticky headers are only supported in thead
    isStickyHeader: function isStickyHeader() {
      return this.bvTableRowGroup.isStickyHeader;
    },
    // Sniffed by <b-tr> / `<b-td>` / `<b-th>`
    // Needed to handle header background classes, due to lack of
    // background color inheritance with Bootstrap v4 table CSS
    hasStickyHeader: function hasStickyHeader() {
      return !this.isStacked && this.bvTableRowGroup.hasStickyHeader;
    },
    // Sniffed by `<b-td>` / `<b-th>`
    tableVariant: function tableVariant() {
      return this.bvTableRowGroup.tableVariant;
    },
    // Sniffed by `<b-td>` / `<b-th>`
    headVariant: function headVariant() {
      return this.inThead ? this.bvTableRowGroup.headVariant : null;
    },
    // Sniffed by `<b-td>` / `<b-th>`
    footVariant: function footVariant() {
      return this.inTfoot ? this.bvTableRowGroup.footVariant : null;
    },
    isRowDark: function isRowDark() {
      return this.headVariant === LIGHT || this.footVariant === LIGHT ?
      /* istanbul ignore next */
      false : this.headVariant === DARK || this.footVariant === DARK ?
      /* istanbul ignore next */
      true : this.isDark;
    },
    trClasses: function trClasses() {
      var variant = this.variant;
      return [variant ? "".concat(this.isRowDark ? 'bg' : 'table', "-").concat(variant) : null];
    },
    trAttrs: function trAttrs() {
      return _objectSpread$c({
        role: 'row'
      }, this.bvAttrs);
    }
  },
  render: function render(h) {
    return h('tr', {
      class: this.trClasses,
      attrs: this.trAttrs,
      // Pass native listeners to child
      on: this.bvListeners
    }, this.normalizeSlot());
  }
});var props$n = {}; // --- Mixin ---
// @vue/component

var bottomRowMixin = Vue__default['default'].extend({
  props: props$n,
  methods: {
    renderBottomRow: function renderBottomRow() {
      var fields = this.computedFields,
          stacked = this.stacked,
          tbodyTrClass = this.tbodyTrClass,
          tbodyTrAttr = this.tbodyTrAttr;
      var h = this.$createElement; // Static bottom row slot (hidden in visibly stacked mode as we can't control the data-label)
      // If in *always* stacked mode, we don't bother rendering the row

      if (!this.hasNormalizedSlot(SLOT_NAME_BOTTOM_ROW) || stacked === true || stacked === '') {
        return h();
      }

      return h(BTr, {
        staticClass: 'b-table-bottom-row',
        class: [isFunction$1(tbodyTrClass) ?
        /* istanbul ignore next */
        tbodyTrClass(null, 'row-bottom') : tbodyTrClass],
        attrs: isFunction$1(tbodyTrAttr) ?
        /* istanbul ignore next */
        tbodyTrAttr(null, 'row-bottom') : tbodyTrAttr,
        key: 'b-bottom-row'
      }, this.normalizeSlot(SLOT_NAME_BOTTOM_ROW, {
        columns: fields.length,
        fields: fields
      }));
    }
  }
});function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(Object(source), true).forEach(function (key) { _defineProperty$e(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$e(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// Parse a rowspan or colspan into a digit (or `null` if < `1` )

var parseSpan = function parseSpan(value) {
  value = toInteger(value, 0);
  return value > 0 ? value : null;
};
/* istanbul ignore next */


var spanValidator = function spanValidator(value) {
  return isUndefinedOrNull(value) || parseSpan(value) > 0;
}; // --- Props ---


var props$m = makePropsConfigurable({
  colspan: makeProp(PROP_TYPE_NUMBER_STRING, null, spanValidator),
  rowspan: makeProp(PROP_TYPE_NUMBER_STRING, null, spanValidator),
  stackedHeading: makeProp(PROP_TYPE_STRING),
  stickyColumn: makeProp(PROP_TYPE_BOOLEAN, false),
  variant: makeProp(PROP_TYPE_STRING)
}, NAME_TABLE_CELL); // --- Main component ---
// TODO:
//   In Bootstrap v5, we won't need "sniffing" as table element variants properly inherit
//   to the child elements, so this can be converted to a functional component
// @vue/component

var BTd = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_TABLE_CELL,
  // Mixin order is important!
  mixins: [attrsMixin, listenersMixin, normalizeSlotMixin],
  inject: {
    bvTableTr: {
      default:
      /* istanbul ignore next */
      function _default() {
        return {};
      }
    }
  },
  inheritAttrs: false,
  props: props$m,
  computed: {
    // Overridden by `<b-th>`
    tag: function tag() {
      return 'td';
    },
    inTbody: function inTbody() {
      return this.bvTableTr.inTbody;
    },
    inThead: function inThead() {
      return this.bvTableTr.inThead;
    },
    inTfoot: function inTfoot() {
      return this.bvTableTr.inTfoot;
    },
    isDark: function isDark() {
      return this.bvTableTr.isDark;
    },
    isStacked: function isStacked() {
      return this.bvTableTr.isStacked;
    },
    // We only support stacked-heading in tbody in stacked mode
    isStackedCell: function isStackedCell() {
      return this.inTbody && this.isStacked;
    },
    isResponsive: function isResponsive() {
      return this.bvTableTr.isResponsive;
    },
    // Needed to handle header background classes, due to lack of
    // background color inheritance with Bootstrap v4 table CSS
    // Sticky headers only apply to cells in table `thead`
    isStickyHeader: function isStickyHeader() {
      return this.bvTableTr.isStickyHeader;
    },
    // Needed to handle header background classes, due to lack of
    // background color inheritance with Bootstrap v4 table CSS
    hasStickyHeader: function hasStickyHeader() {
      return this.bvTableTr.hasStickyHeader;
    },
    // Needed to handle background classes, due to lack of
    // background color inheritance with Bootstrap v4 table CSS
    // Sticky column cells are only available in responsive
    // mode (horizontal scrolling) or when sticky header mode
    // Applies to cells in `thead`, `tbody` and `tfoot`
    isStickyColumn: function isStickyColumn() {
      return !this.isStacked && (this.isResponsive || this.hasStickyHeader) && this.stickyColumn;
    },
    rowVariant: function rowVariant() {
      return this.bvTableTr.variant;
    },
    headVariant: function headVariant() {
      return this.bvTableTr.headVariant;
    },
    footVariant: function footVariant() {
      return this.bvTableTr.footVariant;
    },
    tableVariant: function tableVariant() {
      return this.bvTableTr.tableVariant;
    },
    computedColspan: function computedColspan() {
      return parseSpan(this.colspan);
    },
    computedRowspan: function computedRowspan() {
      return parseSpan(this.rowspan);
    },
    // We use computed props here for improved performance by caching
    // the results of the string interpolation
    cellClasses: function cellClasses() {
      var variant = this.variant,
          headVariant = this.headVariant,
          isStickyColumn = this.isStickyColumn;

      if (!variant && this.isStickyHeader && !headVariant || !variant && isStickyColumn && this.inTfoot && !this.footVariant || !variant && isStickyColumn && this.inThead && !headVariant || !variant && isStickyColumn && this.inTbody) {
        // Needed for sticky-header mode as Bootstrap v4 table cells do
        // not inherit parent's `background-color`
        variant = this.rowVariant || this.tableVariant || 'b-table-default';
      }

      return [variant ? "".concat(this.isDark ? 'bg' : 'table', "-").concat(variant) : null, isStickyColumn ? 'b-table-sticky-column' : null];
    },
    cellAttrs: function cellAttrs() {
      var stackedHeading = this.stackedHeading; // We use computed props here for improved performance by caching
      // the results of the object spread (Object.assign)

      var headOrFoot = this.inThead || this.inTfoot; // Make sure col/rowspan's are > 0 or null

      var colspan = this.computedColspan;
      var rowspan = this.computedRowspan; // Default role and scope

      var role = 'cell';
      var scope = null; // Compute role and scope
      // We only add scopes with an explicit span of 1 or greater

      if (headOrFoot) {
        // Header or footer cells
        role = 'columnheader';
        scope = colspan > 0 ? 'colspan' : 'col';
      } else if (isTag(this.tag, 'th')) {
        // th's in tbody
        role = 'rowheader';
        scope = rowspan > 0 ? 'rowgroup' : 'row';
      }

      return _objectSpread$b(_objectSpread$b({
        colspan: colspan,
        rowspan: rowspan,
        role: role,
        scope: scope
      }, this.bvAttrs), {}, {
        // Add in the stacked cell label data-attribute if in
        // stacked mode (if a stacked heading label is provided)
        'data-label': this.isStackedCell && !isUndefinedOrNull(stackedHeading) ?
        /* istanbul ignore next */
        toString(stackedHeading) : null
      });
    }
  },
  render: function render(h) {
    var $content = [this.normalizeSlot()];
    return h(this.tag, {
      class: this.cellClasses,
      attrs: this.cellAttrs,
      // Transfer any native listeners
      on: this.bvListeners
    }, [this.isStackedCell ? h('div', [$content]) : $content]);
  }
});function _defineProperty$d(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MODEL_PROP_NAME_BUSY = 'busy';
var MODEL_EVENT_NAME_BUSY = MODEL_EVENT_NAME_PREFIX + MODEL_PROP_NAME_BUSY; // --- Props ---

var props$l = _defineProperty$d({}, MODEL_PROP_NAME_BUSY, makeProp(PROP_TYPE_BOOLEAN, false)); // --- Mixin ---
// @vue/component

var busyMixin = Vue__default['default'].extend({
  props: props$l,
  data: function data() {
    return {
      localBusy: false
    };
  },
  computed: {
    computedBusy: function computedBusy() {
      return this[MODEL_PROP_NAME_BUSY] || this.localBusy;
    }
  },
  watch: {
    localBusy: function localBusy(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit(MODEL_EVENT_NAME_BUSY, newValue);
      }
    }
  },
  methods: {
    // Event handler helper
    stopIfBusy: function stopIfBusy(event) {
      // If table is busy (via provider) then don't propagate
      if (this.computedBusy) {
        stopEvent(event);
        return true;
      }

      return false;
    },
    // Render the busy indicator or return `null` if not busy
    renderBusy: function renderBusy() {
      var tbodyTrClass = this.tbodyTrClass,
          tbodyTrAttr = this.tbodyTrAttr;
      var h = this.$createElement; // Return a busy indicator row, or `null` if not busy

      if (this.computedBusy && this.hasNormalizedSlot(SLOT_NAME_TABLE_BUSY)) {
        return h(BTr, {
          staticClass: 'b-table-busy-slot',
          class: [isFunction$1(tbodyTrClass) ?
          /* istanbul ignore next */
          tbodyTrClass(null, SLOT_NAME_TABLE_BUSY) : tbodyTrClass],
          attrs: isFunction$1(tbodyTrAttr) ?
          /* istanbul ignore next */
          tbodyTrAttr(null, SLOT_NAME_TABLE_BUSY) : tbodyTrAttr,
          key: 'table-busy-slot'
        }, [h(BTd, {
          props: {
            colspan: this.computedFields.length || null
          }
        }, [this.normalizeSlot(SLOT_NAME_TABLE_BUSY)])]);
      } // We return `null` here so that we can determine if we need to
      // render the table items rows or not


      return null;
    }
  }
});var props$k = {
  caption: makeProp(PROP_TYPE_STRING),
  captionHtml: makeProp(PROP_TYPE_STRING) // `caption-top` is part of table-render mixin (styling)
  // captionTop: makeProp(PROP_TYPE_BOOLEAN, false)

}; // --- Mixin ---
// @vue/component

var captionMixin = Vue__default['default'].extend({
  props: props$k,
  computed: {
    captionId: function captionId() {
      return this.isStacked ? this.safeId('_caption_') : null;
    }
  },
  methods: {
    renderCaption: function renderCaption() {
      var caption = this.caption,
          captionHtml = this.captionHtml;
      var h = this.$createElement;
      var $caption = h();
      var hasCaptionSlot = this.hasNormalizedSlot(SLOT_NAME_TABLE_CAPTION);

      if (hasCaptionSlot || caption || captionHtml) {
        $caption = h('caption', {
          attrs: {
            id: this.captionId
          },
          domProps: hasCaptionSlot ? {} : htmlOrText(captionHtml, caption),
          key: 'caption',
          ref: 'caption'
        }, this.normalizeSlot(SLOT_NAME_TABLE_CAPTION));
      }

      return $caption;
    }
  }
});var props$j = {}; // --- Mixin ---
// @vue/component

var colgroupMixin = Vue__default['default'].extend({
  methods: {
    renderColgroup: function renderColgroup() {
      var fields = this.computedFields;
      var h = this.$createElement;
      var $colgroup = h();

      if (this.hasNormalizedSlot(SLOT_NAME_TABLE_COLGROUP)) {
        $colgroup = h('colgroup', {
          key: 'colgroup'
        }, [this.normalizeSlot(SLOT_NAME_TABLE_COLGROUP, {
          columns: fields.length,
          fields: fields
        })]);
      }

      return $colgroup;
    }
  }
});var props$i = {
  emptyFilteredHtml: makeProp(PROP_TYPE_STRING),
  emptyFilteredText: makeProp(PROP_TYPE_STRING, 'There are no records matching your request'),
  emptyHtml: makeProp(PROP_TYPE_STRING),
  emptyText: makeProp(PROP_TYPE_STRING, 'There are no records to show'),
  showEmpty: makeProp(PROP_TYPE_BOOLEAN, false)
}; // --- Mixin ---
// @vue/component

var emptyMixin = Vue__default['default'].extend({
  props: props$i,
  methods: {
    renderEmpty: function renderEmpty() {
      var items = this.computedItems;
      var h = this.$createElement;
      var $empty = h();

      if (this.showEmpty && (!items || items.length === 0) && !(this.computedBusy && this.hasNormalizedSlot(SLOT_NAME_TABLE_BUSY))) {
        var fields = this.computedFields,
            isFiltered = this.isFiltered,
            emptyText = this.emptyText,
            emptyHtml = this.emptyHtml,
            emptyFilteredText = this.emptyFilteredText,
            emptyFilteredHtml = this.emptyFilteredHtml,
            tbodyTrClass = this.tbodyTrClass,
            tbodyTrAttr = this.tbodyTrAttr;
        $empty = this.normalizeSlot(isFiltered ? SLOT_NAME_EMPTYFILTERED : SLOT_NAME_EMPTY, {
          emptyFilteredHtml: emptyFilteredHtml,
          emptyFilteredText: emptyFilteredText,
          emptyHtml: emptyHtml,
          emptyText: emptyText,
          fields: fields,
          // Not sure why this is included, as it will always be an empty array
          items: items
        });

        if (!$empty) {
          $empty = h('div', {
            class: ['text-center', 'my-2'],
            domProps: isFiltered ? htmlOrText(emptyFilteredHtml, emptyFilteredText) : htmlOrText(emptyHtml, emptyText)
          });
        }

        $empty = h(BTd, {
          props: {
            colspan: fields.length || null
          }
        }, [h('div', {
          attrs: {
            role: 'alert',
            'aria-live': 'polite'
          }
        }, [$empty])]);
        $empty = h(BTr, {
          staticClass: 'b-table-empty-row',
          class: [isFunction$1(tbodyTrClass) ?
          /* istanbul ignore next */
          tbodyTrClass(null, 'row-empty') : tbodyTrClass],
          attrs: isFunction$1(tbodyTrAttr) ?
          /* istanbul ignore next */
          tbodyTrAttr(null, 'row-empty') : tbodyTrAttr,
          key: isFiltered ? 'b-empty-filtered-row' : 'b-empty-row'
        }, [$empty]);
      }

      return $empty;
    }
  }
});// SSR safe deterministic way (keys are sorted before stringification)
//
//   ex:
//     { b: 3, c: { z: 'zzz', d: null, e: 2 }, d: [10, 12, 11], a: 'one' }
//   becomes
//     'one 3 2 zzz 10 12 11'
//
// Strings are returned as-is
// Numbers get converted to string
// `null` and `undefined` values are filtered out
// Dates are converted to their native string format

var stringifyObjectValues = function stringifyObjectValues(value) {
  if (isUndefinedOrNull(value)) {
    return '';
  } // Arrays are also object, and keys just returns the array indexes
  // Date objects we convert to strings


  if (isObject(value) && !isDate(value)) {
    return keys(value).sort() // Sort to prevent SSR issues on pre-rendered sorted tables
    .map(function (k) {
      return stringifyObjectValues(value[k]);
    }).filter(function (v) {
      return !!v;
    }) // Ignore empty strings
    .join(' ');
  }

  return toString(value);
};function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { _defineProperty$c(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Constants used by table helpers
var FIELD_KEY_CELL_VARIANT = '_cellVariants';
var FIELD_KEY_ROW_VARIANT = '_rowVariant';
var FIELD_KEY_SHOW_DETAILS = '_showDetails'; // Object of item keys that should be ignored for headers and
// stringification and filter events

var IGNORED_FIELD_KEYS = [FIELD_KEY_CELL_VARIANT, FIELD_KEY_ROW_VARIANT, FIELD_KEY_SHOW_DETAILS].reduce(function (result, key) {
  return _objectSpread$a(_objectSpread$a({}, result), {}, _defineProperty$c({}, key, true));
}, {}); // Filter CSS selector for click/dblclick/etc. events
// If any of these selectors match the clicked element, we ignore the event

var EVENT_FILTER = ['a', 'a *', // Include content inside links
'button', 'button *', // Include content inside buttons
'input:not(.disabled):not([disabled])', 'select:not(.disabled):not([disabled])', 'textarea:not(.disabled):not([disabled])', '[role="link"]', '[role="link"] *', '[role="button"]', '[role="button"] *', '[tabindex]:not(.disabled):not([disabled])'].join(',');var sanitizeRow = function sanitizeRow(row, ignoreFields, includeFields) {
  var fieldsObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // We first need to format the row based on the field configurations
  // This ensures that we add formatted values for keys that may not
  // exist in the row itself
  var formattedRow = keys(fieldsObj).reduce(function (result, key) {
    var field = fieldsObj[key];
    var filterByFormatted = field.filterByFormatted;
    var formatter = isFunction$1(filterByFormatted) ?
    /* istanbul ignore next */
    filterByFormatted : filterByFormatted ?
    /* istanbul ignore next */
    field.formatter : null;

    if (isFunction$1(formatter)) {
      result[key] = formatter(row[key], key, row);
    }

    return result;
  }, clone(row)); // Determine the allowed keys:
  //   - Ignore special fields that start with `_`
  //   - Ignore fields in the `ignoreFields` array
  //   - Include only fields in the `includeFields` array

  var allowedKeys = keys(formattedRow).filter(function (key) {
    return !IGNORED_FIELD_KEYS[key] && !(isArray(ignoreFields) && ignoreFields.length > 0 && arrayIncludes(ignoreFields, key)) && !(isArray(includeFields) && includeFields.length > 0 && !arrayIncludes(includeFields, key));
  });
  return pick(formattedRow, allowedKeys);
};// TODO: Add option to stringify `scopedSlot` items

var stringifyRecordValues = function stringifyRecordValues(row, ignoreFields, includeFields, fieldsObj) {
  return isObject(row) ? stringifyObjectValues(sanitizeRow(row, ignoreFields, includeFields, fieldsObj)) :
  /* istanbul ignore next */
  '';
};function _toConsumableArray$2(arr) { return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2(); }

function _nonIterableSpread$2() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _iterableToArray$2(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$2(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$2(arr); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DEBOUNCE_DEPRECATED_MSG = 'Prop "filter-debounce" is deprecated. Use the debounce feature of "<b-form-input>" instead.'; // --- Props ---

var props$h = {
  filter: makeProp([].concat(_toConsumableArray$2(PROP_TYPE_ARRAY_OBJECT_STRING), [PROP_TYPE_REG_EXP])),
  filterDebounce: makeProp(PROP_TYPE_NUMBER_STRING, 0, function (value) {
    return RX_DIGITS.test(String(value));
  }),
  filterFunction: makeProp(PROP_TYPE_FUNCTION),
  filterIgnoredFields: makeProp(PROP_TYPE_ARRAY, []),
  filterIncludedFields: makeProp(PROP_TYPE_ARRAY, [])
}; // --- Mixin ---
// @vue/component

var filteringMixin = Vue__default['default'].extend({
  props: props$h,
  data: function data() {
    return {
      // Flag for displaying which empty slot to show and some event triggering
      isFiltered: false,
      // Where we store the copy of the filter criteria after debouncing
      // We pre-set it with the sanitized filter value
      localFilter: this.filterSanitize(this.filter)
    };
  },
  computed: {
    computedFilterIgnored: function computedFilterIgnored() {
      return concat(this.filterIgnoredFields || []).filter(identity);
    },
    computedFilterIncluded: function computedFilterIncluded() {
      return concat(this.filterIncludedFields || []).filter(identity);
    },
    computedFilterDebounce: function computedFilterDebounce() {
      var ms = toInteger(this.filterDebounce, 0);
      /* istanbul ignore next */

      if (ms > 0) {
        warn(DEBOUNCE_DEPRECATED_MSG, NAME_TABLE);
      }

      return ms;
    },
    localFiltering: function localFiltering() {
      return this.hasProvider ? !!this.noProviderFiltering : true;
    },
    // For watching changes to `filteredItems` vs `localItems`
    filteredCheck: function filteredCheck() {
      var filteredItems = this.filteredItems,
          localItems = this.localItems,
          localFilter = this.localFilter;
      return {
        filteredItems: filteredItems,
        localItems: localItems,
        localFilter: localFilter
      };
    },
    // Sanitized/normalize filter-function prop
    localFilterFn: function localFilterFn() {
      // Return `null` to signal to use internal filter function
      var filterFunction = this.filterFunction;
      return hasPropFunction(filterFunction) ? filterFunction : null;
    },
    // Returns the records in `localItems` that match the filter criteria
    // Returns the original `localItems` array if not sorting
    filteredItems: function filteredItems() {
      // Note the criteria is debounced and sanitized
      var items = this.localItems,
          criteria = this.localFilter; // Resolve the filtering function, when requested
      // We prefer the provided filtering function and fallback to the internal one
      // When no filtering criteria is specified the filtering factories will return `null`

      var filterFn = this.localFiltering ? this.filterFnFactory(this.localFilterFn, criteria) || this.defaultFilterFnFactory(criteria) : null; // We only do local filtering when requested and there are records to filter

      return filterFn && items.length > 0 ? items.filter(filterFn) : items;
    }
  },
  watch: {
    // Watch for debounce being set to 0
    computedFilterDebounce: function computedFilterDebounce(newValue) {
      if (!newValue && this.$_filterTimer) {
        this.clearFilterTimer();
        this.localFilter = this.filterSanitize(this.filter);
      }
    },
    // Watch for changes to the filter criteria, and debounce if necessary
    filter: {
      // We need a deep watcher in case the user passes
      // an object when using `filter-function`
      deep: true,
      handler: function handler(newCriteria) {
        var _this = this;

        var timeout = this.computedFilterDebounce;
        this.clearFilterTimer();

        if (timeout && timeout > 0) {
          // If we have a debounce time, delay the update of `localFilter`
          this.$_filterTimer = setTimeout(function () {
            _this.localFilter = _this.filterSanitize(newCriteria);
          }, timeout);
        } else {
          // Otherwise, immediately update `localFilter` with `newFilter` value
          this.localFilter = this.filterSanitize(newCriteria);
        }
      }
    },
    // Watch for changes to the filter criteria and filtered items vs `localItems`
    // Set visual state and emit events as required
    filteredCheck: function filteredCheck(_ref) {
      var filteredItems = _ref.filteredItems,
          localFilter = _ref.localFilter;
      // Determine if the dataset is filtered or not
      var isFiltered = false;

      if (!localFilter) {
        // If filter criteria is falsey
        isFiltered = false;
      } else if (looseEqual(localFilter, []) || looseEqual(localFilter, {})) {
        // If filter criteria is an empty array or object
        isFiltered = false;
      } else if (localFilter) {
        // If filter criteria is truthy
        isFiltered = true;
      }

      if (isFiltered) {
        this.$emit(EVENT_NAME_FILTERED, filteredItems, filteredItems.length);
      }

      this.isFiltered = isFiltered;
    },
    isFiltered: function isFiltered(newValue, oldValue) {
      if (newValue === false && oldValue === true) {
        // We need to emit a filtered event if `isFiltered` transitions from `true` to
        // `false` so that users can update their pagination controls
        var localItems = this.localItems;
        this.$emit(EVENT_NAME_FILTERED, localItems, localItems.length);
      }
    }
  },
  created: function created() {
    var _this2 = this;

    // Create private non-reactive props
    this.$_filterTimer = null; // If filter is "pre-set", set the criteria
    // This will trigger any watchers/dependents
    // this.localFilter = this.filterSanitize(this.filter)
    // Set the initial filtered state in a `$nextTick()` so that
    // we trigger a filtered event if needed

    this.$nextTick(function () {
      _this2.isFiltered = Boolean(_this2.localFilter);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.clearFilterTimer();
  },
  methods: {
    clearFilterTimer: function clearFilterTimer() {
      clearTimeout(this.$_filterTimer);
      this.$_filterTimer = null;
    },
    filterSanitize: function filterSanitize(criteria) {
      // Sanitizes filter criteria based on internal or external filtering
      if (this.localFiltering && !this.localFilterFn && !(isString(criteria) || isRegExp(criteria))) {
        // If using internal filter function, which only accepts string or RegExp,
        // return '' to signify no filter
        return '';
      } // Could be a string, object or array, as needed by external filter function
      // We use `cloneDeep` to ensure we have a new copy of an object or array
      // without Vue's reactive observers


      return cloneDeep(criteria);
    },
    // Filter Function factories
    filterFnFactory: function filterFnFactory(filterFn, criteria) {
      // Wrapper factory for external filter functions
      // Wrap the provided filter-function and return a new function
      // Returns `null` if no filter-function defined or if criteria is falsey
      // Rather than directly grabbing `this.computedLocalFilterFn` or `this.filterFunction`
      // we have it passed, so that the caller computed prop will be reactive to changes
      // in the original filter-function (as this routine is a method)
      if (!filterFn || !isFunction$1(filterFn) || !criteria || looseEqual(criteria, []) || looseEqual(criteria, {})) {
        return null;
      } // Build the wrapped filter test function, passing the criteria to the provided function


      var fn = function fn(item) {
        // Generated function returns true if the criteria matches part
        // of the serialized data, otherwise false
        return filterFn(item, criteria);
      }; // Return the wrapped function


      return fn;
    },
    defaultFilterFnFactory: function defaultFilterFnFactory(criteria) {
      var _this3 = this;

      // Generates the default filter function, using the given filter criteria
      // Returns `null` if no criteria or criteria format not supported
      if (!criteria || !(isString(criteria) || isRegExp(criteria))) {
        // Built in filter can only support strings or RegExp criteria (at the moment)
        return null;
      } // Build the RegExp needed for filtering


      var regExp = criteria;

      if (isString(regExp)) {
        // Escape special RegExp characters in the string and convert contiguous
        // whitespace to \s+ matches
        var pattern = escapeRegExp(criteria).replace(RX_SPACES, '\\s+'); // Build the RegExp (no need for global flag, as we only need
        // to find the value once in the string)

        regExp = new RegExp(".*".concat(pattern, ".*"), 'i');
      } // Generate the wrapped filter test function to use


      var fn = function fn(item) {
        // This searches all row values (and sub property values) in the entire (excluding
        // special `_` prefixed keys), because we convert the record to a space-separated
        // string containing all the value properties (recursively), even ones that are
        // not visible (not specified in this.fields)
        // Users can ignore filtering on specific fields, or on only certain fields,
        // and can optionall specify searching results of fields with formatter
        //
        // TODO: Enable searching on scoped slots (optional, as it will be SLOW)
        //
        // Generated function returns true if the criteria matches part of
        // the serialized data, otherwise false
        //
        // We set `lastIndex = 0` on the `RegExp` in case someone specifies the `/g` global flag
        regExp.lastIndex = 0;
        return regExp.test(stringifyRecordValues(item, _this3.computedFilterIgnored, _this3.computedFilterIncluded, _this3.computedFieldsObj));
      }; // Return the generated function


      return fn;
    }
  }
});var processField = function processField(key, value) {
  var field = null;

  if (isString(value)) {
    // Label shortcut
    field = {
      key: key,
      label: value
    };
  } else if (isFunction$1(value)) {
    // Formatter shortcut
    field = {
      key: key,
      formatter: value
    };
  } else if (isObject(value)) {
    field = clone(value);
    field.key = field.key || key;
  } else if (value !== false) {
    // Fallback to just key

    /* istanbul ignore next */
    field = {
      key: key
    };
  }

  return field;
}; // We normalize fields into an array of objects
// [ { key:..., label:..., ...}, {...}, ..., {..}]


var normalizeFields = function normalizeFields(origFields, items) {
  var fields = [];

  if (isArray(origFields)) {
    // Normalize array Form
    origFields.filter(identity).forEach(function (f) {
      if (isString(f)) {
        fields.push({
          key: f,
          label: startCase(f)
        });
      } else if (isObject(f) && f.key && isString(f.key)) {
        // Full object definition. We use assign so that we don't mutate the original
        fields.push(clone(f));
      } else if (isObject(f) && keys(f).length === 1) {
        // Shortcut object (i.e. { 'foo_bar': 'This is Foo Bar' }
        var key = keys(f)[0];
        var field = processField(key, f[key]);

        if (field) {
          fields.push(field);
        }
      }
    });
  } // If no field provided, take a sample from first record (if exits)


  if (fields.length === 0 && isArray(items) && items.length > 0) {
    var sample = items[0];
    keys(sample).forEach(function (k) {
      if (!IGNORED_FIELD_KEYS[k]) {
        fields.push({
          key: k,
          label: startCase(k)
        });
      }
    });
  } // Ensure we have a unique array of fields and that they have String labels


  var memo = {};
  return fields.filter(function (f) {
    if (!memo[f.key]) {
      memo[f.key] = true;
      f.label = isString(f.label) ? f.label : startCase(f.key);
      return true;
    }

    return false;
  });
};function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty$b(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _makeModelMixin = makeModelMixin('value', {
  type: PROP_TYPE_ARRAY,
  defaultValue: []
}),
    modelMixin = _makeModelMixin.mixin,
    modelProps = _makeModelMixin.props,
    MODEL_PROP_NAME = _makeModelMixin.prop,
    MODEL_EVENT_NAME = _makeModelMixin.event;

var props$g = sortKeys(_objectSpread$9(_objectSpread$9({}, modelProps), {}, _defineProperty$b({
  fields: makeProp(PROP_TYPE_ARRAY, null),
  // Provider mixin adds in `Function` type
  items: makeProp(PROP_TYPE_ARRAY, []),
  // Primary key for record
  // If provided the value in each row must be unique!
  primaryKey: makeProp(PROP_TYPE_STRING)
}, MODEL_PROP_NAME, makeProp(PROP_TYPE_ARRAY, [])))); // --- Mixin ---
// @vue/component

var itemsMixin = Vue__default['default'].extend({
  mixins: [modelMixin],
  props: props$g,
  data: function data() {
    var items = this.items;
    return {
      // Our local copy of the items
      // Must be an array
      localItems: isArray(items) ? items.slice() : []
    };
  },
  computed: {
    computedFields: function computedFields() {
      // We normalize fields into an array of objects
      // `[ { key:..., label:..., ...}, {...}, ..., {..}]`
      return normalizeFields(this.fields, this.localItems);
    },
    computedFieldsObj: function computedFieldsObj() {
      // Fields as a simple lookup hash object
      // Mainly for formatter lookup and use in `scopedSlots` for convenience
      // If the field has a formatter, it normalizes formatter to a
      // function ref or `undefined` if no formatter
      var $parent = this.$parent;
      return this.computedFields.reduce(function (obj, f) {
        // We use object spread here so we don't mutate the original field object
        obj[f.key] = clone(f);

        if (f.formatter) {
          // Normalize formatter to a function ref or `undefined`
          var formatter = f.formatter;

          if (isString(formatter) && isFunction$1($parent[formatter])) {
            formatter = $parent[formatter];
          } else if (!isFunction$1(formatter)) {
            /* istanbul ignore next */
            formatter = undefined;
          } // Return formatter function or `undefined` if none


          obj[f.key].formatter = formatter;
        }

        return obj;
      }, {});
    },
    computedItems: function computedItems() {
      // Fallback if various mixins not provided
      return (this.paginatedItems || this.sortedItems || this.filteredItems || this.localItems ||
      /* istanbul ignore next */
      []).slice();
    },
    context: function context() {
      // Current state of sorting, filtering and pagination props/values
      return {
        filter: this.localFilter,
        sortBy: this.localSortBy,
        sortDesc: this.localSortDesc,
        perPage: mathMax(toInteger(this.perPage, 0), 0),
        currentPage: mathMax(toInteger(this.currentPage, 0), 1),
        apiUrl: this.apiUrl
      };
    }
  },
  watch: {
    items: function items(newValue) {
      // Set `localItems`/`filteredItems` to a copy of the provided array
      this.localItems = isArray(newValue) ? newValue.slice() : [];
    },
    // Watch for changes on `computedItems` and update the `v-model`
    computedItems: function computedItems(newValue, oldValue) {
      if (!looseEqual(newValue, oldValue)) {
        this.$emit(MODEL_EVENT_NAME, newValue);
      }
    },
    // Watch for context changes
    context: function context(newValue, oldValue) {
      // Emit context information for external paging/filtering/sorting handling
      if (!looseEqual(newValue, oldValue)) {
        this.$emit(EVENT_NAME_CONTEXT_CHANGED, newValue);
      }
    }
  },
  mounted: function mounted() {
    // Initially update the `v-model` of displayed items
    this.$emit(MODEL_EVENT_NAME, this.computedItems);
  },
  methods: {
    // Method to get the formatter method for a given field key
    getFieldFormatter: function getFieldFormatter(key) {
      var field = this.computedFieldsObj[key]; // `this.computedFieldsObj` has pre-normalized the formatter to a
      // function ref if present, otherwise `undefined`

      return field ? field.formatter : undefined;
    }
  }
});var props$f = {
  currentPage: makeProp(PROP_TYPE_NUMBER_STRING, 1),
  perPage: makeProp(PROP_TYPE_NUMBER_STRING, 0)
}; // --- Mixin ---
// @vue/component

var paginationMixin = Vue__default['default'].extend({
  props: props$f,
  computed: {
    localPaging: function localPaging() {
      return this.hasProvider ? !!this.noProviderPaging : true;
    },
    paginatedItems: function paginatedItems() {
      var items = this.sortedItems || this.filteredItems || this.localItems || [];
      var currentPage = mathMax(toInteger(this.currentPage, 1), 1);
      var perPage = mathMax(toInteger(this.perPage, 0), 0); // Apply local pagination

      if (this.localPaging && perPage) {
        // Grab the current page of data (which may be past filtered items limit)
        items = items.slice((currentPage - 1) * perPage, currentPage * perPage);
      } // Return the items to display in the table


      return items;
    }
  }
});var ROOT_EVENT_NAME_REFRESHED = getRootEventName(NAME_TABLE, EVENT_NAME_REFRESHED);
var ROOT_ACTION_EVENT_NAME_REFRESH = getRootActionEventName(NAME_TABLE, EVENT_NAME_REFRESH); // --- Props ---

var props$e = {
  // Passed to the context object
  // Not used by `<b-table>` directly
  apiUrl: makeProp(PROP_TYPE_STRING),
  // Adds in 'Function' support
  items: makeProp(PROP_TYPE_ARRAY_FUNCTION, []),
  noProviderFiltering: makeProp(PROP_TYPE_BOOLEAN, false),
  noProviderPaging: makeProp(PROP_TYPE_BOOLEAN, false),
  noProviderSorting: makeProp(PROP_TYPE_BOOLEAN, false)
}; // --- Mixin ---
// @vue/component

var providerMixin = Vue__default['default'].extend({
  mixins: [listenOnRootMixin],
  props: props$e,
  computed: {
    hasProvider: function hasProvider() {
      return isFunction$1(this.items);
    },
    providerTriggerContext: function providerTriggerContext() {
      // Used to trigger the provider function via a watcher. Only the fields that
      // are needed for triggering a provider update are included. Note that the
      // regular this.context is sent to the provider during fetches though, as they
      // may need all the prop info.
      var ctx = {
        apiUrl: this.apiUrl,
        filter: null,
        sortBy: null,
        sortDesc: null,
        perPage: null,
        currentPage: null
      };

      if (!this.noProviderFiltering) {
        // Either a string, or could be an object or array.
        ctx.filter = this.localFilter;
      }

      if (!this.noProviderSorting) {
        ctx.sortBy = this.localSortBy;
        ctx.sortDesc = this.localSortDesc;
      }

      if (!this.noProviderPaging) {
        ctx.perPage = this.perPage;
        ctx.currentPage = this.currentPage;
      }

      return clone(ctx);
    }
  },
  watch: {
    // Provider update triggering
    items: function items(newValue) {
      // If a new provider has been specified, trigger an update
      if (this.hasProvider || isFunction$1(newValue)) {
        this.$nextTick(this._providerUpdate);
      }
    },
    providerTriggerContext: function providerTriggerContext(newValue, oldValue) {
      // Trigger the provider to update as the relevant context values have changed.
      if (!looseEqual(newValue, oldValue)) {
        this.$nextTick(this._providerUpdate);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Call the items provider if necessary
    if (this.hasProvider && (!this.localItems || this.localItems.length === 0)) {
      // Fetch on mount if localItems is empty
      this._providerUpdate();
    } // Listen for global messages to tell us to force refresh the table


    this.listenOnRoot(ROOT_ACTION_EVENT_NAME_REFRESH, function (id) {
      if (id === _this.id || id === _this) {
        _this.refresh();
      }
    });
  },
  methods: {
    refresh: function refresh() {
      var items = this.items,
          refresh = this.refresh; // Public Method: Force a refresh of the provider function

      this.$off(EVENT_NAME_REFRESHED, refresh);

      if (this.computedBusy) {
        // Can't force an update when forced busy by user (busy prop === true)
        if (this.localBusy && this.hasProvider) {
          // But if provider running (localBusy), re-schedule refresh once `refreshed` emitted
          this.$on(EVENT_NAME_REFRESHED, refresh);
        }
      } else {
        this.clearSelected();

        if (this.hasProvider) {
          this.$nextTick(this._providerUpdate);
        } else {
          /* istanbul ignore next */
          this.localItems = isArray(items) ? items.slice() : [];
        }
      }
    },
    // Provider related methods
    _providerSetLocal: function _providerSetLocal(items) {
      this.localItems = isArray(items) ? items.slice() : [];
      this.localBusy = false;
      this.$emit(EVENT_NAME_REFRESHED); // New root emit

      if (this.id) {
        this.emitOnRoot(ROOT_EVENT_NAME_REFRESHED, this.id);
      }
    },
    _providerUpdate: function _providerUpdate() {
      var _this2 = this;

      // Refresh the provider function items.
      if (!this.hasProvider) {
        // Do nothing if no provider
        return;
      } // If table is busy, wait until refreshed before calling again


      if (this.computedBusy) {
        // Schedule a new refresh once `refreshed` is emitted
        this.$nextTick(this.refresh);
        return;
      } // Set internal busy state


      this.localBusy = true; // Call provider function with context and optional callback after DOM is fully updated

      this.$nextTick(function () {
        try {
          // Call provider function passing it the context and optional callback
          var data = _this2.items(_this2.context, _this2._providerSetLocal);

          if (isPromise(data)) {
            // Provider returned Promise
            data.then(function (items) {
              // Provider resolved with items
              _this2._providerSetLocal(items);
            });
          } else if (isArray(data)) {
            // Provider returned Array data
            _this2._providerSetLocal(data);
          } else {
            /* istanbul ignore if */
            if (_this2.items.length !== 2) {
              // Check number of arguments provider function requested
              // Provider not using callback (didn't request second argument), so we clear
              // busy state as most likely there was an error in the provider function

              /* istanbul ignore next */
              warn("Provider function didn't request callback and did not return a promise or data.", NAME_TABLE);
              _this2.localBusy = false;
            }
          }
        } catch (e)
        /* istanbul ignore next */
        {
          // Provider function borked on us, so we spew out a warning
          // and clear the busy state
          warn("Provider function error [".concat(e.name, "] ").concat(e.message, "."), NAME_TABLE);
          _this2.localBusy = false;

          _this2.$off(EVENT_NAME_REFRESHED, _this2.refresh);
        }
      });
    }
  }
});function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SELECT_MODES = ['range', 'multi', 'single']; // --- Props ---

var props$d = {
  // Disable use of click handlers for row selection
  noSelectOnClick: makeProp(PROP_TYPE_BOOLEAN, false),
  selectMode: makeProp(PROP_TYPE_STRING, 'multi', function (value) {
    return arrayIncludes(SELECT_MODES, value);
  }),
  selectable: makeProp(PROP_TYPE_BOOLEAN, false),
  selectedVariant: makeProp(PROP_TYPE_STRING, 'active')
}; // --- Mixin ---
// @vue/component

var selectableMixin = Vue__default['default'].extend({
  props: props$d,
  data: function data() {
    return {
      selectedRows: [],
      selectedLastRow: -1
    };
  },
  computed: {
    isSelectable: function isSelectable() {
      return this.selectable && this.selectMode;
    },
    hasSelectableRowClick: function hasSelectableRowClick() {
      return this.isSelectable && !this.noSelectOnClick;
    },
    supportsSelectableRows: function supportsSelectableRows() {
      return true;
    },
    selectableHasSelection: function selectableHasSelection() {
      var selectedRows = this.selectedRows;
      return this.isSelectable && selectedRows && selectedRows.length > 0 && selectedRows.some(identity);
    },
    selectableIsMultiSelect: function selectableIsMultiSelect() {
      return this.isSelectable && arrayIncludes(['range', 'multi'], this.selectMode);
    },
    selectableTableClasses: function selectableTableClasses() {
      var _ref;

      var isSelectable = this.isSelectable;
      return _ref = {
        'b-table-selectable': isSelectable
      }, _defineProperty$a(_ref, "b-table-select-".concat(this.selectMode), isSelectable), _defineProperty$a(_ref, 'b-table-selecting', this.selectableHasSelection), _defineProperty$a(_ref, 'b-table-selectable-no-click', isSelectable && !this.hasSelectableRowClick), _ref;
    },
    selectableTableAttrs: function selectableTableAttrs() {
      return {
        // TODO:
        //   Should this attribute not be included when no-select-on-click is set
        //   since this attribute implies keyboard navigation?
        'aria-multiselectable': !this.isSelectable ? null : this.selectableIsMultiSelect ? 'true' : 'false'
      };
    }
  },
  watch: {
    computedItems: function computedItems(newValue, oldValue) {
      // Reset for selectable
      var equal = false;

      if (this.isSelectable && this.selectedRows.length > 0) {
        // Quick check against array length
        equal = isArray(newValue) && isArray(oldValue) && newValue.length === oldValue.length;

        for (var i = 0; equal && i < newValue.length; i++) {
          // Look for the first non-loosely equal row, after ignoring reserved fields
          equal = looseEqual(sanitizeRow(newValue[i]), sanitizeRow(oldValue[i]));
        }
      }

      if (!equal) {
        this.clearSelected();
      }
    },
    selectable: function selectable(newValue) {
      this.clearSelected();
      this.setSelectionHandlers(newValue);
    },
    selectMode: function selectMode() {
      this.clearSelected();
    },
    hasSelectableRowClick: function hasSelectableRowClick(newValue) {
      this.clearSelected();
      this.setSelectionHandlers(!newValue);
    },
    selectedRows: function selectedRows(_selectedRows, oldValue) {
      var _this = this;

      if (this.isSelectable && !looseEqual(_selectedRows, oldValue)) {
        var items = []; // `.forEach()` skips over non-existent indices (on sparse arrays)

        _selectedRows.forEach(function (v, idx) {
          if (v) {
            items.push(_this.computedItems[idx]);
          }
        });

        this.$emit(EVENT_NAME_ROW_SELECTED, items);
      }
    }
  },
  beforeMount: function beforeMount() {
    // Set up handlers if needed
    if (this.isSelectable) {
      this.setSelectionHandlers(true);
    }
  },
  methods: {
    // Public methods
    selectRow: function selectRow(index) {
      // Select a particular row (indexed based on computedItems)
      if (this.isSelectable && isNumber(index) && index >= 0 && index < this.computedItems.length && !this.isRowSelected(index)) {
        var selectedRows = this.selectableIsMultiSelect ? this.selectedRows.slice() : [];
        selectedRows[index] = true;
        this.selectedLastClicked = -1;
        this.selectedRows = selectedRows;
      }
    },
    unselectRow: function unselectRow(index) {
      // Un-select a particular row (indexed based on `computedItems`)
      if (this.isSelectable && isNumber(index) && this.isRowSelected(index)) {
        var selectedRows = this.selectedRows.slice();
        selectedRows[index] = false;
        this.selectedLastClicked = -1;
        this.selectedRows = selectedRows;
      }
    },
    selectAllRows: function selectAllRows() {
      var length = this.computedItems.length;

      if (this.isSelectable && length > 0) {
        this.selectedLastClicked = -1;
        this.selectedRows = this.selectableIsMultiSelect ? createArray(length, true) : [true];
      }
    },
    isRowSelected: function isRowSelected(index) {
      // Determine if a row is selected (indexed based on `computedItems`)
      return !!(isNumber(index) && this.selectedRows[index]);
    },
    clearSelected: function clearSelected() {
      // Clear any active selected row(s)
      this.selectedLastClicked = -1;
      this.selectedRows = [];
    },
    // Internal private methods
    selectableRowClasses: function selectableRowClasses(index) {
      if (this.isSelectable && this.isRowSelected(index)) {
        var variant = this.selectedVariant;
        return _defineProperty$a({
          'b-table-row-selected': true
        }, "".concat(this.dark ? 'bg' : 'table', "-").concat(variant), variant);
      }

      return {};
    },
    selectableRowAttrs: function selectableRowAttrs(index) {
      return {
        'aria-selected': !this.isSelectable ? null : this.isRowSelected(index) ? 'true' : 'false'
      };
    },
    setSelectionHandlers: function setSelectionHandlers(on) {
      var method = on && !this.noSelectOnClick ? '$on' : '$off'; // Handle row-clicked event

      this[method](EVENT_NAME_ROW_CLICKED, this.selectionHandler); // Clear selection on filter, pagination, and sort changes

      this[method](EVENT_NAME_FILTERED, this.clearSelected);
      this[method](EVENT_NAME_CONTEXT_CHANGED, this.clearSelected);
    },
    selectionHandler: function selectionHandler(item, index, event) {
      /* istanbul ignore if: should never happen */
      if (!this.isSelectable || this.noSelectOnClick) {
        // Don't do anything if table is not in selectable mode
        this.clearSelected();
        return;
      }

      var selectMode = this.selectMode,
          selectedLastRow = this.selectedLastRow;
      var selectedRows = this.selectedRows.slice();
      var selected = !selectedRows[index]; // Note 'multi' mode needs no special event handling

      if (selectMode === 'single') {
        selectedRows = [];
      } else if (selectMode === 'range') {
        if (selectedLastRow > -1 && event.shiftKey) {
          // range
          for (var idx = mathMin(selectedLastRow, index); idx <= mathMax(selectedLastRow, index); idx++) {
            selectedRows[idx] = true;
          }

          selected = true;
        } else {
          if (!(event.ctrlKey || event.metaKey)) {
            // Clear range selection if any
            selectedRows = [];
            selected = true;
          }

          this.selectedLastRow = selected ? index : -1;
        }
      }

      selectedRows[index] = selected;
      this.selectedRows = selectedRows;
    }
  }
});/*
 * Consistent and stable sort function across JavaScript platforms
 *
 * Inconsistent sorts can cause SSR problems between client and server
 * such as in <b-table> if sortBy is applied to the data on server side render.
 * Chrome and V8 native sorts are inconsistent/unstable
 *
 * This function uses native sort with fallback to index compare when the a and b
 * compare returns 0
 *
 * Algorithm based on:
 * https://stackoverflow.com/questions/1427608/fast-stable-sorting-algorithm-implementation-in-javascript/45422645#45422645
 *
 * @param {array} array to sort
 * @param {function} sort compare function
 * @return {array}
 */
var stableSort = function stableSort(array, compareFn) {
  // Using `.bind(compareFn)` on the wrapped anonymous function improves
  // performance by avoiding the function call setup. We don't use an arrow
  // function here as it binds `this` to the `stableSort` context rather than
  // the `compareFn` context, which wouldn't give us the performance increase.
  return array.map(function (a, index) {
    return [index, a];
  }).sort(function (a, b) {
    return this(a[1], b[1]) || a[0] - b[0];
  }.bind(compareFn)).map(function (e) {
    return e[1];
  });
};var normalizeValue = function normalizeValue(value) {
  if (isUndefinedOrNull(value)) {
    return '';
  }

  if (isNumeric$1(value)) {
    return toFloat(value, value);
  }

  return value;
}; // Default sort compare routine
//
// TODO:
//   Add option to sort by multiple columns (tri-state per column,
//   plus order of columns in sort) where `sortBy` could be an array
//   of objects `[ {key: 'foo', sortDir: 'asc'}, {key:'bar', sortDir: 'desc'} ...]`
//   or an array of arrays `[ ['foo','asc'], ['bar','desc'] ]`
//   Multisort will most likely be handled in `mixin-sort.js` by
//   calling this method for each sortBy


var defaultSortCompare = function defaultSortCompare(a, b) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$sortBy = _ref.sortBy,
      sortBy = _ref$sortBy === void 0 ? null : _ref$sortBy,
      _ref$formatter = _ref.formatter,
      formatter = _ref$formatter === void 0 ? null : _ref$formatter,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? undefined : _ref$locale,
      _ref$localeOptions = _ref.localeOptions,
      localeOptions = _ref$localeOptions === void 0 ? {} : _ref$localeOptions,
      _ref$nullLast = _ref.nullLast,
      nullLast = _ref$nullLast === void 0 ? false : _ref$nullLast;

  // Get the value by `sortBy`
  var aa = get(a, sortBy, null);
  var bb = get(b, sortBy, null); // Apply user-provided formatter

  if (isFunction$1(formatter)) {
    aa = formatter(aa, sortBy, a);
    bb = formatter(bb, sortBy, b);
  } // Internally normalize value
  // `null` / `undefined` => ''
  // `'0'` => `0`


  aa = normalizeValue(aa);
  bb = normalizeValue(bb);

  if (isDate(aa) && isDate(bb) || isNumber(aa) && isNumber(bb)) {
    // Special case for comparing dates and numbers
    // Internally dates are compared via their epoch number values
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  } else if (nullLast && aa === '' && bb !== '') {
    // Special case when sorting `null` / `undefined` / '' last
    return 1;
  } else if (nullLast && aa !== '' && bb === '') {
    // Special case when sorting `null` / `undefined` / '' last
    return -1;
  } // Do localized string comparison


  return stringifyObjectValues(aa).localeCompare(stringifyObjectValues(bb), locale, localeOptions);
};var _props, _watch;

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty$9(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MODEL_PROP_NAME_SORT_BY = 'sortBy';
var MODEL_EVENT_NAME_SORT_BY = MODEL_EVENT_NAME_PREFIX + MODEL_PROP_NAME_SORT_BY;
var MODEL_PROP_NAME_SORT_DESC = 'sortDesc';
var MODEL_EVENT_NAME_SORT_DESC = MODEL_EVENT_NAME_PREFIX + MODEL_PROP_NAME_SORT_DESC;
var SORT_DIRECTION_ASC = 'asc';
var SORT_DIRECTION_DESC = 'desc';
var SORT_DIRECTION_LAST = 'last';
var SORT_DIRECTIONS = [SORT_DIRECTION_ASC, SORT_DIRECTION_DESC, SORT_DIRECTION_LAST]; // --- Props ---

var props$c = (_props = {
  labelSortAsc: makeProp(PROP_TYPE_STRING, 'Click to sort Ascending'),
  labelSortClear: makeProp(PROP_TYPE_STRING, 'Click to clear sorting'),
  labelSortDesc: makeProp(PROP_TYPE_STRING, 'Click to sort Descending'),
  noFooterSorting: makeProp(PROP_TYPE_BOOLEAN, false),
  noLocalSorting: makeProp(PROP_TYPE_BOOLEAN, false),
  // Another prop that should have had a better name
  // It should be `noSortClear` (on non-sortable headers)
  // We will need to make sure the documentation is clear on what
  // this prop does (as well as in the code for future reference)
  noSortReset: makeProp(PROP_TYPE_BOOLEAN, false)
}, _defineProperty$9(_props, MODEL_PROP_NAME_SORT_BY, makeProp(PROP_TYPE_STRING)), _defineProperty$9(_props, "sortCompare", makeProp(PROP_TYPE_FUNCTION)), _defineProperty$9(_props, "sortCompareLocale", makeProp(PROP_TYPE_ARRAY_STRING)), _defineProperty$9(_props, "sortCompareOptions", makeProp(PROP_TYPE_OBJECT, {
  numeric: true
})), _defineProperty$9(_props, MODEL_PROP_NAME_SORT_DESC, makeProp(PROP_TYPE_BOOLEAN, false)), _defineProperty$9(_props, "sortDirection", makeProp(PROP_TYPE_STRING, SORT_DIRECTION_ASC, function (value) {
  return arrayIncludes(SORT_DIRECTIONS, value);
})), _defineProperty$9(_props, "sortIconLeft", makeProp(PROP_TYPE_BOOLEAN, false)), _defineProperty$9(_props, "sortNullLast", makeProp(PROP_TYPE_BOOLEAN, false)), _props); // --- Mixin ---
// @vue/component

var sortingMixin = Vue__default['default'].extend({
  props: props$c,
  data: function data() {
    return {
      localSortBy: this[MODEL_PROP_NAME_SORT_BY] || '',
      localSortDesc: this[MODEL_PROP_NAME_SORT_DESC] || false
    };
  },
  computed: {
    localSorting: function localSorting() {
      return this.hasProvider ? !!this.noProviderSorting : !this.noLocalSorting;
    },
    isSortable: function isSortable() {
      return this.computedFields.some(function (f) {
        return f.sortable;
      });
    },
    // Sorts the filtered items and returns a new array of the sorted items
    // When not sorted, the original items array will be returned
    sortedItems: function sortedItems() {
      var sortBy = this.localSortBy,
          sortDesc = this.localSortDesc,
          locale = this.sortCompareLocale,
          nullLast = this.sortNullLast,
          sortCompare = this.sortCompare,
          localSorting = this.localSorting;
      var items = (this.filteredItems || this.localItems || []).slice();

      var localeOptions = _objectSpread$8(_objectSpread$8({}, this.sortCompareOptions), {}, {
        usage: 'sort'
      });

      if (sortBy && localSorting) {
        var field = this.computedFieldsObj[sortBy] || {};
        var sortByFormatted = field.sortByFormatted;
        var formatter = isFunction$1(sortByFormatted) ?
        /* istanbul ignore next */
        sortByFormatted : sortByFormatted ? this.getFieldFormatter(sortBy) : undefined; // `stableSort` returns a new array, and leaves the original array intact

        return stableSort(items, function (a, b) {
          var result = null; // Call user provided `sortCompare` routine first

          if (isFunction$1(sortCompare)) {
            // TODO:
            //   Change the `sortCompare` signature to the one of `defaultSortCompare`
            //   with the next major version bump
            result = sortCompare(a, b, sortBy, sortDesc, formatter, localeOptions, locale);
          } // Fallback to built-in `defaultSortCompare` if `sortCompare`
          // is not defined or returns `null`/`false`


          if (isUndefinedOrNull(result) || result === false) {
            result = defaultSortCompare(a, b, {
              sortBy: sortBy,
              formatter: formatter,
              locale: locale,
              localeOptions: localeOptions,
              nullLast: nullLast
            });
          } // Negate result if sorting in descending order


          return (result || 0) * (sortDesc ? -1 : 1);
        });
      }

      return items;
    }
  },
  watch: (_watch = {
    /* istanbul ignore next: pain in the butt to test */
    isSortable: function isSortable(newValue) {
      if (newValue) {
        if (this.isSortable) {
          this.$on(EVENT_NAME_HEAD_CLICKED, this.handleSort);
        }
      } else {
        this.$off(EVENT_NAME_HEAD_CLICKED, this.handleSort);
      }
    }
  }, _defineProperty$9(_watch, MODEL_PROP_NAME_SORT_DESC, function (newValue) {
    /* istanbul ignore next */
    if (newValue === this.localSortDesc) {
      return;
    }

    this.localSortDesc = newValue || false;
  }), _defineProperty$9(_watch, MODEL_PROP_NAME_SORT_BY, function (newValue) {
    /* istanbul ignore next */
    if (newValue === this.localSortBy) {
      return;
    }

    this.localSortBy = newValue || '';
  }), _defineProperty$9(_watch, "localSortDesc", function localSortDesc(newValue, oldValue) {
    // Emit update to sort-desc.sync
    if (newValue !== oldValue) {
      this.$emit(MODEL_EVENT_NAME_SORT_DESC, newValue);
    }
  }), _defineProperty$9(_watch, "localSortBy", function localSortBy(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.$emit(MODEL_EVENT_NAME_SORT_BY, newValue);
    }
  }), _watch),
  created: function created() {
    if (this.isSortable) {
      this.$on(EVENT_NAME_HEAD_CLICKED, this.handleSort);
    }
  },
  methods: {
    // Handlers
    // Need to move from thead-mixin
    handleSort: function handleSort(key, field, event, isFoot) {
      var _this = this;

      if (!this.isSortable) {
        /* istanbul ignore next */
        return;
      }

      if (isFoot && this.noFooterSorting) {
        return;
      } // TODO: make this tri-state sorting
      // cycle desc => asc => none => desc => ...


      var sortChanged = false;

      var toggleLocalSortDesc = function toggleLocalSortDesc() {
        var sortDirection = field.sortDirection || _this.sortDirection;

        if (sortDirection === SORT_DIRECTION_ASC) {
          _this.localSortDesc = false;
        } else if (sortDirection === SORT_DIRECTION_DESC) {
          _this.localSortDesc = true;
        } else ;
      };

      if (field.sortable) {
        var sortKey = !this.localSorting && field.sortKey ? field.sortKey : key;

        if (this.localSortBy === sortKey) {
          // Change sorting direction on current column
          this.localSortDesc = !this.localSortDesc;
        } else {
          // Start sorting this column ascending
          this.localSortBy = sortKey; // this.localSortDesc = false

          toggleLocalSortDesc();
        }

        sortChanged = true;
      } else if (this.localSortBy && !this.noSortReset) {
        this.localSortBy = '';
        toggleLocalSortDesc();
        sortChanged = true;
      }

      if (sortChanged) {
        // Sorting parameters changed
        this.$emit(EVENT_NAME_SORT_CHANGED, this.context);
      }
    },
    // methods to compute classes and attrs for thead>th cells
    sortTheadThClasses: function sortTheadThClasses(key, field, isFoot) {
      return {
        // If sortable and sortIconLeft are true, then place sort icon on the left
        'b-table-sort-icon-left': field.sortable && this.sortIconLeft && !(isFoot && this.noFooterSorting)
      };
    },
    sortTheadThAttrs: function sortTheadThAttrs(key, field, isFoot) {
      if (!this.isSortable || isFoot && this.noFooterSorting) {
        // No attributes if not a sortable table
        return {};
      }

      var sortable = field.sortable; // Assemble the aria-sort attribute value

      var ariaSort = sortable && this.localSortBy === key ? this.localSortDesc ? 'descending' : 'ascending' : sortable ? 'none' : null; // Return the attribute

      return {
        'aria-sort': ariaSort
      };
    },
    sortTheadThLabel: function sortTheadThLabel(key, field, isFoot) {
      // A label to be placed in an `.sr-only` element in the header cell
      if (!this.isSortable || isFoot && this.noFooterSorting) {
        // No label if not a sortable table
        return null;
      }

      var sortable = field.sortable; // The correctness of these labels is very important for screen-reader users.

      var labelSorting = '';

      if (sortable) {
        if (this.localSortBy === key) {
          // currently sorted sortable column.
          labelSorting = this.localSortDesc ? this.labelSortAsc : this.labelSortDesc;
        } else {
          // Not currently sorted sortable column.
          // Not using nested ternary's here for clarity/readability
          // Default for ariaLabel
          labelSorting = this.localSortDesc ? this.labelSortDesc : this.labelSortAsc; // Handle sortDirection setting

          var sortDirection = this.sortDirection || field.sortDirection;

          if (sortDirection === SORT_DIRECTION_ASC) {
            labelSorting = this.labelSortAsc;
          } else if (sortDirection === SORT_DIRECTION_DESC) {
            labelSorting = this.labelSortDesc;
          }
        }
      } else if (!this.noSortReset) {
        // Non sortable column
        labelSorting = this.localSortBy ? this.labelSortClear : '';
      } // Return the sr-only sort label or null if no label


      return trim(labelSorting) || null;
    }
  }
});function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props$b = {
  stacked: makeProp(PROP_TYPE_BOOLEAN_STRING, false)
}; // --- Mixin ---
// @vue/component

var stackedMixin = Vue__default['default'].extend({
  props: props$b,
  computed: {
    isStacked: function isStacked() {
      var stacked = this.stacked; // `true` when always stacked, or returns breakpoint specified

      return stacked === '' ? true : stacked;
    },
    isStackedAlways: function isStackedAlways() {
      return this.isStacked === true;
    },
    stackedTableClasses: function stackedTableClasses() {
      var isStackedAlways = this.isStackedAlways;
      return _defineProperty$8({
        'b-table-stacked': isStackedAlways
      }, "b-table-stacked-".concat(this.stacked), !isStackedAlways && this.isStacked);
    }
  }
});function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// Includes all main table styling options
// --- Props ---

var props$a = {
  bordered: makeProp(PROP_TYPE_BOOLEAN, false),
  borderless: makeProp(PROP_TYPE_BOOLEAN, false),
  captionTop: makeProp(PROP_TYPE_BOOLEAN, false),
  dark: makeProp(PROP_TYPE_BOOLEAN, false),
  fixed: makeProp(PROP_TYPE_BOOLEAN, false),
  hover: makeProp(PROP_TYPE_BOOLEAN, false),
  noBorderCollapse: makeProp(PROP_TYPE_BOOLEAN, false),
  outlined: makeProp(PROP_TYPE_BOOLEAN, false),
  responsive: makeProp(PROP_TYPE_BOOLEAN_STRING, false),
  small: makeProp(PROP_TYPE_BOOLEAN, false),
  // If a string, it is assumed to be the table `max-height` value
  stickyHeader: makeProp(PROP_TYPE_BOOLEAN_STRING, false),
  striped: makeProp(PROP_TYPE_BOOLEAN, false),
  tableClass: makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  tableVariant: makeProp(PROP_TYPE_STRING)
}; // --- Mixin ---
// @vue/component

var tableRendererMixin = Vue__default['default'].extend({
  mixins: [attrsMixin],
  provide: function provide() {
    return {
      bvTable: this
    };
  },
  // Don't place attributes on root element automatically,
  // as table could be wrapped in responsive `<div>`
  inheritAttrs: false,
  props: props$a,
  computed: {
    // Layout related computed props
    isResponsive: function isResponsive() {
      var responsive = this.responsive;
      return responsive === '' ? true : responsive;
    },
    isStickyHeader: function isStickyHeader() {
      var stickyHeader = this.stickyHeader;
      stickyHeader = stickyHeader === '' ? true : stickyHeader;
      return this.isStacked ? false : stickyHeader;
    },
    wrapperClasses: function wrapperClasses() {
      var isResponsive = this.isResponsive;
      return [this.isStickyHeader ? 'b-table-sticky-header' : '', isResponsive === true ? 'table-responsive' : isResponsive ? "table-responsive-".concat(this.responsive) : ''].filter(identity);
    },
    wrapperStyles: function wrapperStyles() {
      var isStickyHeader = this.isStickyHeader;
      return isStickyHeader && !isBoolean(isStickyHeader) ? {
        maxHeight: isStickyHeader
      } : {};
    },
    tableClasses: function tableClasses() {
      var hover = this.hover,
          tableVariant = this.tableVariant;
      hover = this.isTableSimple ? hover : hover && this.computedItems.length > 0 && !this.computedBusy;
      return [// User supplied classes
      this.tableClass, // Styling classes
      {
        'table-striped': this.striped,
        'table-hover': hover,
        'table-dark': this.dark,
        'table-bordered': this.bordered,
        'table-borderless': this.borderless,
        'table-sm': this.small,
        // The following are b-table custom styles
        border: this.outlined,
        'b-table-fixed': this.fixed,
        'b-table-caption-top': this.captionTop,
        'b-table-no-border-collapse': this.noBorderCollapse
      }, tableVariant ? "".concat(this.dark ? 'bg' : 'table', "-").concat(tableVariant) : '', // Stacked table classes
      this.stackedTableClasses, // Selectable classes
      this.selectableTableClasses];
    },
    tableAttrs: function tableAttrs() {
      var items = this.computedItems,
          filteredItems = this.filteredItems,
          fields = this.computedFields,
          selectableTableAttrs = this.selectableTableAttrs;
      var ariaAttrs = this.isTableSimple ? {} : {
        'aria-busy': this.computedBusy ? 'true' : 'false',
        'aria-colcount': toString(fields.length),
        // Preserve user supplied `aria-describedby`, if provided
        'aria-describedby': this.bvAttrs['aria-describedby'] || this.$refs.caption ? this.captionId : null
      };
      var rowCount = items && filteredItems && filteredItems.length > items.length ? toString(filteredItems.length) : null;
      return _objectSpread$7(_objectSpread$7(_objectSpread$7({
        // We set `aria-rowcount` before merging in `$attrs`,
        // in case user has supplied their own
        'aria-rowcount': rowCount
      }, this.bvAttrs), {}, {
        // Now we can override any `$attrs` here
        id: this.safeId(),
        role: 'table'
      }, ariaAttrs), selectableTableAttrs);
    }
  },
  render: function render(h) {
    var wrapperClasses = this.wrapperClasses,
        renderCaption = this.renderCaption,
        renderColgroup = this.renderColgroup,
        renderThead = this.renderThead,
        renderTbody = this.renderTbody,
        renderTfoot = this.renderTfoot;
    var $content = [];

    if (this.isTableSimple) {
      $content.push(this.normalizeSlot());
    } else {
      // Build the `<caption>` (from caption mixin)
      $content.push(renderCaption ? renderCaption() : null); // Build the `<colgroup>`

      $content.push(renderColgroup ? renderColgroup() : null); // Build the `<thead>`

      $content.push(renderThead ? renderThead() : null); // Build the `<tbody>`

      $content.push(renderTbody ? renderTbody() : null); // Build the `<tfoot>`

      $content.push(renderTfoot ? renderTfoot() : null);
    } // Assemble `<table>`


    var $table = h('table', {
      staticClass: 'table b-table',
      class: this.tableClasses,
      attrs: this.tableAttrs,
      key: 'b-table'
    }, $content.filter(identity)); // Add responsive/sticky wrapper if needed and return table

    return wrapperClasses.length > 0 ? h('div', {
      class: wrapperClasses,
      style: this.wrapperStyles,
      key: 'wrap'
    }, [$table]) : $table;
  }
});function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props$9 = makePropsConfigurable({
  tbodyTransitionHandlers: makeProp(PROP_TYPE_OBJECT),
  tbodyTransitionProps: makeProp(PROP_TYPE_OBJECT)
}, NAME_TBODY); // --- Main component ---
// TODO:
//   In Bootstrap v5, we won't need "sniffing" as table element variants properly inherit
//   to the child elements, so this can be converted to a functional component
// @vue/component

var BTbody = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_TBODY,
  mixins: [attrsMixin, listenersMixin, normalizeSlotMixin],
  provide: function provide() {
    return {
      bvTableRowGroup: this
    };
  },
  inject: {
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    bvTable: {
      default:
      /* istanbul ignore next */
      function _default() {
        return {};
      }
    }
  },
  inheritAttrs: false,
  props: props$9,
  computed: {
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    isTbody: function isTbody() {
      return true;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    isDark: function isDark() {
      return this.bvTable.dark;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    isStacked: function isStacked() {
      return this.bvTable.isStacked;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    isResponsive: function isResponsive() {
      return this.bvTable.isResponsive;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    // Sticky headers are only supported in thead
    isStickyHeader: function isStickyHeader() {
      return false;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    // Needed to handle header background classes, due to lack of
    // background color inheritance with Bootstrap v4 table CSS
    hasStickyHeader: function hasStickyHeader() {
      return !this.isStacked && this.bvTable.stickyHeader;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    tableVariant: function tableVariant() {
      return this.bvTable.tableVariant;
    },
    isTransitionGroup: function isTransitionGroup() {
      return this.tbodyTransitionProps || this.tbodyTransitionHandlers;
    },
    tbodyAttrs: function tbodyAttrs() {
      return _objectSpread$6({
        role: 'rowgroup'
      }, this.bvAttrs);
    },
    tbodyProps: function tbodyProps() {
      var tbodyTransitionProps = this.tbodyTransitionProps;
      return tbodyTransitionProps ? _objectSpread$6(_objectSpread$6({}, tbodyTransitionProps), {}, {
        tag: 'tbody'
      }) : {};
    }
  },
  render: function render(h) {
    var data = {
      props: this.tbodyProps,
      attrs: this.tbodyAttrs
    };

    if (this.isTransitionGroup) {
      // We use native listeners if a transition group for any delegated events
      data.on = this.tbodyTransitionHandlers || {};
      data.nativeOn = this.bvListeners;
    } else {
      // Otherwise we place any listeners on the tbody element
      data.on = this.bvListeners;
    }

    return h(this.isTransitionGroup ? 'transition-group' : 'tbody', data, this.normalizeSlot());
  }
});var TABLE_TAG_NAMES = ['TD', 'TH', 'TR']; // Returns `true` if we should ignore the click/double-click/keypress event
// Avoids having the user need to use `@click.stop` on the form control

var filterEvent = function filterEvent(event) {
  // Exit early when we don't have a target element
  if (!event || !event.target) {
    /* istanbul ignore next */
    return false;
  }

  var el = event.target; // Exit early when element is disabled or a table element

  if (el.disabled || TABLE_TAG_NAMES.indexOf(el.tagName) !== -1) {
    return false;
  } // Ignore the click when it was inside a dropdown menu


  if (closest('.dropdown-menu', el)) {
    return true;
  }

  var label = el.tagName === 'LABEL' ? el : closest('label', el); // If the label's form control is not disabled then we don't propagate event
  // Modern browsers have `label.control` that references the associated input, but IE 11
  // does not have this property on the label element, so we resort to DOM lookups

  if (label) {
    var labelFor = getAttr(label, 'for');
    var input = labelFor ? getById(labelFor) : select('input, select, textarea', label);

    if (input && !input.disabled) {
      return true;
    }
  } // Otherwise check if the event target matches one of the selectors in the
  // event filter (i.e. anchors, non disabled inputs, etc.)
  // Return `true` if we should ignore the event


  return matches(el, EVENT_FILTER);
};// Used to filter out click events caused by the mouse up at end of selection
//
// Accepts an element as only argument to test to see if selection overlaps or is
// contained within the element

var textSelectionActive = function textSelectionActive() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var sel = getSel();
  return sel && sel.toString().trim() !== '' && sel.containsNode && isElement(el) ?
  /* istanbul ignore next */
  sel.containsNode(el, true) : false;
};var props$8 = makePropsConfigurable(props$m, NAME_TH); // --- Main component ---
// TODO:
//   In Bootstrap v5, we won't need "sniffing" as table element variants properly inherit
//   to the child elements, so this can be converted to a functional component
// @vue/component

var BTh = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_TH,
  extends: BTd,
  props: props$8,
  computed: {
    tag: function tag() {
      return 'th';
    }
  }
});function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }

function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var props$7 = {
  detailsTdClass: makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  tbodyTrAttr: makeProp(PROP_TYPE_OBJECT_FUNCTION),
  tbodyTrClass: makeProp([].concat(_toConsumableArray$1(PROP_TYPE_ARRAY_OBJECT_STRING), [PROP_TYPE_FUNCTION]))
}; // --- Mixin ---
// @vue/component

var tbodyRowMixin = Vue__default['default'].extend({
  props: props$7,
  methods: {
    // Methods for computing classes, attributes and styles for table cells
    getTdValues: function getTdValues(item, key, tdValue, defaultValue) {
      var $parent = this.$parent;

      if (tdValue) {
        var value = get(item, key, '');

        if (isFunction$1(tdValue)) {
          return tdValue(value, key, item);
        } else if (isString(tdValue) && isFunction$1($parent[tdValue])) {
          return $parent[tdValue](value, key, item);
        }

        return tdValue;
      }

      return defaultValue;
    },
    getThValues: function getThValues(item, key, thValue, type, defaultValue) {
      var $parent = this.$parent;

      if (thValue) {
        var value = get(item, key, '');

        if (isFunction$1(thValue)) {
          return thValue(value, key, item, type);
        } else if (isString(thValue) && isFunction$1($parent[thValue])) {
          return $parent[thValue](value, key, item, type);
        }

        return thValue;
      }

      return defaultValue;
    },
    // Method to get the value for a field
    getFormattedValue: function getFormattedValue(item, field) {
      var key = field.key;
      var formatter = this.getFieldFormatter(key);
      var value = get(item, key, null);

      if (isFunction$1(formatter)) {
        value = formatter(value, key, item);
      }

      return isUndefinedOrNull(value) ? '' : value;
    },
    // Factory function methods
    toggleDetailsFactory: function toggleDetailsFactory(hasDetailsSlot, item) {
      var _this = this;

      // Returns a function to toggle a row's details slot
      return function () {
        if (hasDetailsSlot) {
          _this.$set(item, FIELD_KEY_SHOW_DETAILS, !item[FIELD_KEY_SHOW_DETAILS]);
        }
      };
    },
    // Row event handlers
    rowHovered: function rowHovered(event) {
      // `mouseenter` handler (non-bubbling)
      // `this.tbodyRowEvtStopped` from tbody mixin
      if (!this.tbodyRowEvtStopped(event)) {
        // `this.emitTbodyRowEvent` from tbody mixin
        this.emitTbodyRowEvent(EVENT_NAME_ROW_HOVERED, event);
      }
    },
    rowUnhovered: function rowUnhovered(event) {
      // `mouseleave` handler (non-bubbling)
      // `this.tbodyRowEvtStopped` from tbody mixin
      if (!this.tbodyRowEvtStopped(event)) {
        // `this.emitTbodyRowEvent` from tbody mixin
        this.emitTbodyRowEvent(EVENT_NAME_ROW_UNHOVERED, event);
      }
    },
    // Renders a TD or TH for a row's field
    renderTbodyRowCell: function renderTbodyRowCell(field, colIndex, item, rowIndex) {
      var _this2 = this;

      var isStacked = this.isStacked;
      var key = field.key,
          label = field.label,
          isRowHeader = field.isRowHeader;
      var h = this.$createElement;
      var hasDetailsSlot = this.hasNormalizedSlot(SLOT_NAME_ROW_DETAILS);
      var formatted = this.getFormattedValue(item, field);
      var stickyColumn = !isStacked && (this.isResponsive || this.stickyHeader) && field.stickyColumn; // We only uses the helper components for sticky columns to
      // improve performance of BTable/BTableLite by reducing the
      // total number of vue instances created during render

      var cellTag = stickyColumn ? isRowHeader ? BTh : BTd : isRowHeader ? 'th' : 'td';
      var cellVariant = item[FIELD_KEY_CELL_VARIANT] && item[FIELD_KEY_CELL_VARIANT][key] ? item[FIELD_KEY_CELL_VARIANT][key] : field.variant || null;
      var data = {
        // For the Vue key, we concatenate the column index and
        // field key (as field keys could be duplicated)
        // TODO: Although we do prevent duplicate field keys...
        //   So we could change this to: `row-${rowIndex}-cell-${key}`
        class: [field.class ? field.class : '', this.getTdValues(item, key, field.tdClass, '')],
        props: {},
        attrs: _objectSpread$5({
          'aria-colindex': String(colIndex + 1)
        }, isRowHeader ? this.getThValues(item, key, field.thAttr, 'row', {}) : this.getTdValues(item, key, field.tdAttr, {})),
        key: "row-".concat(rowIndex, "-cell-").concat(colIndex, "-").concat(key)
      };

      if (stickyColumn) {
        // We are using the helper BTd or BTh
        data.props = {
          stackedHeading: isStacked ? label : null,
          stickyColumn: true,
          variant: cellVariant
        };
      } else {
        // Using native TD or TH element, so we need to
        // add in the attributes and variant class
        data.attrs['data-label'] = isStacked && !isUndefinedOrNull(label) ? toString(label) : null;
        data.attrs.role = isRowHeader ? 'rowheader' : 'cell';
        data.attrs.scope = isRowHeader ? 'row' : null; // Add in the variant class

        if (cellVariant) {
          data.class.push("".concat(this.dark ? 'bg' : 'table', "-").concat(cellVariant));
        }
      }

      var slotScope = {
        item: item,
        index: rowIndex,
        field: field,
        unformatted: get(item, key, ''),
        value: formatted,
        toggleDetails: this.toggleDetailsFactory(hasDetailsSlot, item),
        detailsShowing: Boolean(item[FIELD_KEY_SHOW_DETAILS])
      }; // If table supports selectable mode, then add in the following scope
      // this.supportsSelectableRows will be undefined if mixin isn't loaded

      if (this.supportsSelectableRows) {
        slotScope.rowSelected = this.isRowSelected(rowIndex);

        slotScope.selectRow = function () {
          return _this2.selectRow(rowIndex);
        };

        slotScope.unselectRow = function () {
          return _this2.unselectRow(rowIndex);
        };
      } // The new `v-slot` syntax doesn't like a slot name starting with
      // a square bracket and if using in-document HTML templates, the
      // v-slot attributes are lower-cased by the browser.
      // Switched to round bracket syntax to prevent confusion with
      // dynamic slot name syntax.
      // We look for slots in this order: `cell(${key})`, `cell(${key.toLowerCase()})`, 'cell()'
      // Slot names are now cached by mixin tbody in `this.$_bodyFieldSlotNameCache`
      // Will be `null` if no slot (or fallback slot) exists


      var slotName = this.$_bodyFieldSlotNameCache[key];
      var $childNodes = slotName ? this.normalizeSlot(slotName, slotScope) : toString(formatted);

      if (this.isStacked) {
        // We wrap in a DIV to ensure rendered as a single cell when visually stacked!
        $childNodes = [h('div', [$childNodes])];
      } // Render either a td or th cell


      return h(cellTag, data, [$childNodes]);
    },
    // Renders an item's row (or rows if details supported)
    renderTbodyRow: function renderTbodyRow(item, rowIndex) {
      var _this3 = this;

      var fields = this.computedFields,
          striped = this.striped,
          primaryKey = this.primaryKey,
          currentPage = this.currentPage,
          perPage = this.perPage,
          tbodyTrClass = this.tbodyTrClass,
          tbodyTrAttr = this.tbodyTrAttr;
      var h = this.$createElement;
      var hasDetailsSlot = this.hasNormalizedSlot(SLOT_NAME_ROW_DETAILS);
      var rowShowDetails = item[FIELD_KEY_SHOW_DETAILS] && hasDetailsSlot;
      var hasRowClickHandler = this.$listeners[EVENT_NAME_ROW_CLICKED] || this.hasSelectableRowClick; // We can return more than one TR if rowDetails enabled

      var $rows = []; // Details ID needed for `aria-details` when details showing
      // We set it to `null` when not showing so that attribute
      // does not appear on the element

      var detailsId = rowShowDetails ? this.safeId("_details_".concat(rowIndex, "_")) : null; // For each item data field in row

      var $tds = fields.map(function (field, colIndex) {
        return _this3.renderTbodyRowCell(field, colIndex, item, rowIndex);
      }); // Calculate the row number in the dataset (indexed from 1)

      var ariaRowIndex = null;

      if (currentPage && perPage && perPage > 0) {
        ariaRowIndex = String((currentPage - 1) * perPage + rowIndex + 1);
      } // Create a unique :key to help ensure that sub components are re-rendered rather than
      // re-used, which can cause issues. If a primary key is not provided we use the rendered
      // rows index within the tbody.
      // See: https://github.com/bootstrap-vue/bootstrap-vue/issues/2410


      var primaryKeyValue = toString(get(item, primaryKey)) || null;
      var rowKey = primaryKeyValue || toString(rowIndex); // If primary key is provided, use it to generate a unique ID on each tbody > tr
      // In the format of '{tableId}__row_{primaryKeyValue}'

      var rowId = primaryKeyValue ? this.safeId("_row_".concat(primaryKeyValue)) : null; // Selectable classes and attributes

      var selectableClasses = this.selectableRowClasses ? this.selectableRowClasses(rowIndex) : {};
      var selectableAttrs = this.selectableRowAttrs ? this.selectableRowAttrs(rowIndex) : {}; // Additional classes and attributes

      var userTrClasses = isFunction$1(tbodyTrClass) ? tbodyTrClass(item, 'row') : tbodyTrClass;
      var userTrAttrs = isFunction$1(tbodyTrAttr) ?
      /* istanbul ignore next */
      tbodyTrAttr(item, 'row') : tbodyTrAttr; // Add the item row

      $rows.push(h(BTr, {
        class: [userTrClasses, selectableClasses, rowShowDetails ? 'b-table-has-details' : ''],
        props: {
          variant: item[FIELD_KEY_ROW_VARIANT] || null
        },
        attrs: _objectSpread$5(_objectSpread$5({
          id: rowId
        }, userTrAttrs), {}, {
          // Users cannot override the following attributes
          tabindex: hasRowClickHandler ? '0' : null,
          'data-pk': primaryKeyValue || null,
          'aria-details': detailsId,
          'aria-owns': detailsId,
          'aria-rowindex': ariaRowIndex
        }, selectableAttrs),
        on: {
          // Note: These events are not A11Y friendly!
          mouseenter: this.rowHovered,
          mouseleave: this.rowUnhovered
        },
        key: "__b-table-row-".concat(rowKey, "__"),
        ref: 'item-rows',
        refInFor: true
      }, $tds)); // Row Details slot

      if (rowShowDetails) {
        var detailsScope = {
          item: item,
          index: rowIndex,
          fields: fields,
          toggleDetails: this.toggleDetailsFactory(hasDetailsSlot, item)
        }; // If table supports selectable mode, then add in the following scope
        // this.supportsSelectableRows will be undefined if mixin isn't loaded

        if (this.supportsSelectableRows) {
          detailsScope.rowSelected = this.isRowSelected(rowIndex);

          detailsScope.selectRow = function () {
            return _this3.selectRow(rowIndex);
          };

          detailsScope.unselectRow = function () {
            return _this3.unselectRow(rowIndex);
          };
        } // Render the details slot in a TD


        var $details = h(BTd, {
          props: {
            colspan: fields.length
          },
          class: this.detailsTdClass
        }, [this.normalizeSlot(SLOT_NAME_ROW_DETAILS, detailsScope)]); // Add a hidden row to keep table row striping consistent when details showing
        // Only added if the table is striped

        if (striped) {
          $rows.push( // We don't use `BTr` here as we don't need the extra functionality
          h('tr', {
            staticClass: 'd-none',
            attrs: {
              'aria-hidden': 'true',
              role: 'presentation'
            },
            key: "__b-table-details-stripe__".concat(rowKey)
          }));
        } // Add the actual details row


        var userDetailsTrClasses = isFunction$1(this.tbodyTrClass) ?
        /* istanbul ignore next */
        this.tbodyTrClass(item, SLOT_NAME_ROW_DETAILS) : this.tbodyTrClass;
        var userDetailsTrAttrs = isFunction$1(this.tbodyTrAttr) ?
        /* istanbul ignore next */
        this.tbodyTrAttr(item, SLOT_NAME_ROW_DETAILS) : this.tbodyTrAttr;
        $rows.push(h(BTr, {
          staticClass: 'b-table-details',
          class: [userDetailsTrClasses],
          props: {
            variant: item[FIELD_KEY_ROW_VARIANT] || null
          },
          attrs: _objectSpread$5(_objectSpread$5({}, userDetailsTrAttrs), {}, {
            // Users cannot override the following attributes
            id: detailsId,
            tabindex: '-1'
          }),
          key: "__b-table-details__".concat(rowKey)
        }, [$details]));
      } else if (hasDetailsSlot) {
        // Only add the placeholder if a the table has a row-details slot defined (but not shown)
        $rows.push(h());

        if (striped) {
          // Add extra placeholder if table is striped
          $rows.push(h());
        }
      } // Return the row(s)


      return $rows;
    }
  }
});function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getCellSlotName = function getCellSlotName(value) {
  return "cell(".concat(value || '', ")");
}; // --- Props ---


var props$6 = sortKeys(_objectSpread$4(_objectSpread$4(_objectSpread$4({}, props$9), props$7), {}, {
  tbodyClass: makeProp(PROP_TYPE_ARRAY_OBJECT_STRING)
})); // --- Mixin ---
// @vue/component

var tbodyMixin = Vue__default['default'].extend({
  mixins: [tbodyRowMixin],
  props: props$6,
  beforeDestroy: function beforeDestroy() {
    this.$_bodyFieldSlotNameCache = null;
  },
  methods: {
    // Returns all the item TR elements (excludes detail and spacer rows)
    // `this.$refs['item-rows']` is an array of item TR components/elements
    // Rows should all be `<b-tr>` components, but we map to TR elements
    // Also note that `this.$refs['item-rows']` may not always be in document order
    getTbodyTrs: function getTbodyTrs() {
      var $refs = this.$refs;
      var tbody = $refs.tbody ? $refs.tbody.$el || $refs.tbody : null;
      var trs = ($refs['item-rows'] || []).map(function (tr) {
        return tr.$el || tr;
      });
      return tbody && tbody.children && tbody.children.length > 0 && trs && trs.length > 0 ? from(tbody.children).filter(function (tr) {
        return arrayIncludes(trs, tr);
      }) :
      /* istanbul ignore next */
      [];
    },
    // Returns index of a particular TBODY item TR
    // We set `true` on closest to include self in result
    getTbodyTrIndex: function getTbodyTrIndex(el) {
      /* istanbul ignore next: should not normally happen */
      if (!isElement(el)) {
        return -1;
      }

      var tr = el.tagName === 'TR' ? el : closest('tr', el, true);
      return tr ? this.getTbodyTrs().indexOf(tr) : -1;
    },
    // Emits a row event, with the item object, row index and original event
    emitTbodyRowEvent: function emitTbodyRowEvent(type, event) {
      if (type && this.hasListener(type) && event && event.target) {
        var rowIndex = this.getTbodyTrIndex(event.target);

        if (rowIndex > -1) {
          // The array of TRs correlate to the `computedItems` array
          var item = this.computedItems[rowIndex];
          this.$emit(type, item, rowIndex, event);
        }
      }
    },
    tbodyRowEvtStopped: function tbodyRowEvtStopped(event) {
      return this.stopIfBusy && this.stopIfBusy(event);
    },
    // Delegated row event handlers
    onTbodyRowKeydown: function onTbodyRowKeydown(event) {
      // Keyboard navigation and row click emulation
      var target = event.target,
          keyCode = event.keyCode;

      if (this.tbodyRowEvtStopped(event) || target.tagName !== 'TR' || !isActiveElement(target) || target.tabIndex !== 0) {
        // Early exit if not an item row TR
        return;
      }

      if (arrayIncludes([CODE_ENTER, CODE_SPACE], keyCode)) {
        // Emulated click for keyboard users, transfer to click handler
        stopEvent(event);
        this.onTBodyRowClicked(event);
      } else if (arrayIncludes([CODE_UP, CODE_DOWN, CODE_HOME, CODE_END], keyCode)) {
        // Keyboard navigation
        var rowIndex = this.getTbodyTrIndex(target);

        if (rowIndex > -1) {
          stopEvent(event);
          var trs = this.getTbodyTrs();
          var shift = event.shiftKey;

          if (keyCode === CODE_HOME || shift && keyCode === CODE_UP) {
            // Focus first row
            attemptFocus(trs[0]);
          } else if (keyCode === CODE_END || shift && keyCode === CODE_DOWN) {
            // Focus last row
            attemptFocus(trs[trs.length - 1]);
          } else if (keyCode === CODE_UP && rowIndex > 0) {
            // Focus previous row
            attemptFocus(trs[rowIndex - 1]);
          } else if (keyCode === CODE_DOWN && rowIndex < trs.length - 1) {
            // Focus next row
            attemptFocus(trs[rowIndex + 1]);
          }
        }
      }
    },
    onTBodyRowClicked: function onTBodyRowClicked(event) {
      // Don't emit event when the table is busy, the user clicked
      // on a non-disabled control or is selecting text
      if (this.tbodyRowEvtStopped(event) || filterEvent(event) || textSelectionActive(this.$el)) {
        return;
      }

      this.emitTbodyRowEvent(EVENT_NAME_ROW_CLICKED, event);
    },
    onTbodyRowMiddleMouseRowClicked: function onTbodyRowMiddleMouseRowClicked(event) {
      if (!this.tbodyRowEvtStopped(event) && event.which === 2) {
        this.emitTbodyRowEvent(EVENT_NAME_ROW_MIDDLE_CLICKED, event);
      }
    },
    onTbodyRowContextmenu: function onTbodyRowContextmenu(event) {
      if (!this.tbodyRowEvtStopped(event)) {
        this.emitTbodyRowEvent(EVENT_NAME_ROW_CONTEXTMENU, event);
      }
    },
    onTbodyRowDblClicked: function onTbodyRowDblClicked(event) {
      if (!this.tbodyRowEvtStopped(event) && !filterEvent(event)) {
        this.emitTbodyRowEvent(EVENT_NAME_ROW_DBLCLICKED, event);
      }
    },
    // Render the tbody element and children
    // Note:
    //   Row hover handlers are handled by the tbody-row mixin
    //   As mouseenter/mouseleave events do not bubble
    renderTbody: function renderTbody() {
      var _this = this;

      var items = this.computedItems,
          renderBusy = this.renderBusy,
          renderTopRow = this.renderTopRow,
          renderEmpty = this.renderEmpty,
          renderBottomRow = this.renderBottomRow;
      var h = this.$createElement;
      var hasRowClickHandler = this.hasListener(EVENT_NAME_ROW_CLICKED) || this.hasSelectableRowClick; // Prepare the tbody rows

      var $rows = []; // Add the item data rows or the busy slot

      var $busy = renderBusy ? renderBusy() : null;

      if ($busy) {
        // If table is busy and a busy slot, then return only the busy "row" indicator
        $rows.push($busy);
      } else {
        // Table isn't busy, or we don't have a busy slot
        // Create a slot cache for improved performance when looking up cell slot names
        // Values will be keyed by the field's `key` and will store the slot's name
        // Slots could be dynamic (i.e. `v-if`), so we must compute on each render
        // Used by tbody-row mixin render helper
        var cache = {};
        var defaultSlotName = getCellSlotName();
        defaultSlotName = this.hasNormalizedSlot(defaultSlotName) ? defaultSlotName : null;
        this.computedFields.forEach(function (field) {
          var key = field.key;
          var slotName = getCellSlotName(key);
          var lowercaseSlotName = getCellSlotName(key.toLowerCase());
          cache[key] = _this.hasNormalizedSlot(slotName) ? slotName : _this.hasNormalizedSlot(lowercaseSlotName) ?
          /* istanbul ignore next */
          lowercaseSlotName : defaultSlotName;
        }); // Created as a non-reactive property so to not trigger component updates
        // Must be a fresh object each render

        this.$_bodyFieldSlotNameCache = cache; // Add static top row slot (hidden in visibly stacked mode
        // as we can't control `data-label` attr)

        $rows.push(renderTopRow ? renderTopRow() : h()); // Render the rows

        items.forEach(function (item, rowIndex) {
          // Render the individual item row (rows if details slot)
          $rows.push(_this.renderTbodyRow(item, rowIndex));
        }); // Empty items / empty filtered row slot (only shows if `items.length < 1`)

        $rows.push(renderEmpty ? renderEmpty() : h()); // Static bottom row slot (hidden in visibly stacked mode
        // as we can't control `data-label` attr)

        $rows.push(renderBottomRow ? renderBottomRow() : h());
      } // Note: these events will only emit if a listener is registered


      var handlers = {
        auxclick: this.onTbodyRowMiddleMouseRowClicked,
        // TODO:
        //   Perhaps we do want to automatically prevent the
        //   default context menu from showing if there is a
        //   `row-contextmenu` listener registered
        contextmenu: this.onTbodyRowContextmenu,
        // The following event(s) is not considered A11Y friendly
        dblclick: this.onTbodyRowDblClicked // Hover events (`mouseenter`/`mouseleave`) are handled by `tbody-row` mixin

      }; // Add in click/keydown listeners if needed

      if (hasRowClickHandler) {
        handlers.click = this.onTBodyRowClicked;
        handlers.keydown = this.onTbodyRowKeydown;
      } // Assemble rows into the tbody


      var $tbody = h(BTbody, {
        class: this.tbodyClass || null,
        props: pluckProps(props$9, this.$props),
        // BTbody transfers all native event listeners to the root element
        // TODO: Only set the handlers if the table is not busy
        on: handlers,
        ref: 'tbody'
      }, $rows); // Return the assembled tbody

      return $tbody;
    }
  }
});function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props$5 = makePropsConfigurable({
  // Supported values: 'lite', 'dark', or null
  footVariant: makeProp(PROP_TYPE_STRING)
}, NAME_TFOOT); // --- Main component ---
// TODO:
//   In Bootstrap v5, we won't need "sniffing" as table element variants properly inherit
//   to the child elements, so this can be converted to a functional component
// @vue/component

var BTfoot = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_TFOOT,
  mixins: [attrsMixin, listenersMixin, normalizeSlotMixin],
  provide: function provide() {
    return {
      bvTableRowGroup: this
    };
  },
  inject: {
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    bvTable: {
      default:
      /* istanbul ignore next */
      function _default() {
        return {};
      }
    }
  },
  inheritAttrs: false,
  props: props$5,
  computed: {
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    isTfoot: function isTfoot() {
      return true;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    isDark: function isDark() {
      return this.bvTable.dark;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    isStacked: function isStacked() {
      return this.bvTable.isStacked;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    isResponsive: function isResponsive() {
      return this.bvTable.isResponsive;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    // Sticky headers are only supported in thead
    isStickyHeader: function isStickyHeader() {
      return false;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    // Needed to handle header background classes, due to lack of
    // background color inheritance with Bootstrap v4 table CSS
    hasStickyHeader: function hasStickyHeader() {
      return !this.isStacked && this.bvTable.stickyHeader;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    tableVariant: function tableVariant() {
      return this.bvTable.tableVariant;
    },
    tfootClasses: function tfootClasses() {
      return [this.footVariant ? "thead-".concat(this.footVariant) : null];
    },
    tfootAttrs: function tfootAttrs() {
      return _objectSpread$3(_objectSpread$3({}, this.bvAttrs), {}, {
        role: 'rowgroup'
      });
    }
  },
  render: function render(h) {
    return h('tfoot', {
      class: this.tfootClasses,
      attrs: this.tfootAttrs,
      // Pass down any native listeners
      on: this.bvListeners
    }, this.normalizeSlot());
  }
});var props$4 = {
  footClone: makeProp(PROP_TYPE_BOOLEAN, false),
  // Any Bootstrap theme variant (or custom)
  // Falls back to `headRowVariant`
  footRowVariant: makeProp(PROP_TYPE_STRING),
  // 'dark', 'light', or `null` (or custom)
  footVariant: makeProp(PROP_TYPE_STRING),
  tfootClass: makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  tfootTrClass: makeProp(PROP_TYPE_ARRAY_OBJECT_STRING)
}; // --- Mixin ---
// @vue/component

var tfootMixin = Vue__default['default'].extend({
  props: props$4,
  methods: {
    renderTFootCustom: function renderTFootCustom() {
      var h = this.$createElement;

      if (this.hasNormalizedSlot(SLOT_NAME_CUSTOM_FOOT)) {
        return h(BTfoot, {
          class: this.tfootClass || null,
          props: {
            footVariant: this.footVariant || this.headVariant || null
          },
          key: 'bv-tfoot-custom'
        }, this.normalizeSlot(SLOT_NAME_CUSTOM_FOOT, {
          items: this.computedItems.slice(),
          fields: this.computedFields.slice(),
          columns: this.computedFields.length
        }));
      }

      return h();
    },
    renderTfoot: function renderTfoot() {
      // Passing true to renderThead will make it render a tfoot
      return this.footClone ? this.renderThead(true) : this.renderTFootCustom();
    }
  }
});function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props$3 = makePropsConfigurable({
  // Also sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
  // Supported values: 'lite', 'dark', or `null`
  headVariant: makeProp(PROP_TYPE_STRING)
}, NAME_THEAD); // --- Main component ---
// TODO:
//   In Bootstrap v5, we won't need "sniffing" as table element variants properly inherit
//   to the child elements, so this can be converted to a functional component
// @vue/component

var BThead = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_THEAD,
  mixins: [attrsMixin, listenersMixin, normalizeSlotMixin],
  provide: function provide() {
    return {
      bvTableRowGroup: this
    };
  },
  inject: {
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    bvTable: {
      default:
      /* istanbul ignore next */
      function _default() {
        return {};
      }
    }
  },
  inheritAttrs: false,
  props: props$3,
  computed: {
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    isThead: function isThead() {
      return true;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    isDark: function isDark() {
      return this.bvTable.dark;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    isStacked: function isStacked() {
      return this.bvTable.isStacked;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    isResponsive: function isResponsive() {
      return this.bvTable.isResponsive;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    // Needed to handle header background classes, due to lack of
    // background color inheritance with Bootstrap v4 table CSS
    // Sticky headers only apply to cells in table `thead`
    isStickyHeader: function isStickyHeader() {
      return !this.isStacked && this.bvTable.stickyHeader;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    // Needed to handle header background classes, due to lack of
    // background color inheritance with Bootstrap v4 table CSS
    hasStickyHeader: function hasStickyHeader() {
      return !this.isStacked && this.bvTable.stickyHeader;
    },
    // Sniffed by `<b-tr>` / `<b-td>` / `<b-th>`
    tableVariant: function tableVariant() {
      return this.bvTable.tableVariant;
    },
    theadClasses: function theadClasses() {
      return [this.headVariant ? "thead-".concat(this.headVariant) : null];
    },
    theadAttrs: function theadAttrs() {
      return _objectSpread$2({
        role: 'rowgroup'
      }, this.bvAttrs);
    }
  },
  render: function render(h) {
    return h('thead', {
      class: this.theadClasses,
      attrs: this.theadAttrs,
      // Pass down any native listeners
      on: this.bvListeners
    }, this.normalizeSlot());
  }
});function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getHeadSlotName = function getHeadSlotName(value) {
  return "head(".concat(value || '', ")");
};

var getFootSlotName = function getFootSlotName(value) {
  return "foot(".concat(value || '', ")");
}; // --- Props ---


var props$2 = {
  // Any Bootstrap theme variant (or custom)
  headRowVariant: makeProp(PROP_TYPE_STRING),
  // 'light', 'dark' or `null` (or custom)
  headVariant: makeProp(PROP_TYPE_STRING),
  theadClass: makeProp(PROP_TYPE_ARRAY_OBJECT_STRING),
  theadTrClass: makeProp(PROP_TYPE_ARRAY_OBJECT_STRING)
}; // --- Mixin ---
// @vue/component

var theadMixin = Vue__default['default'].extend({
  props: props$2,
  methods: {
    fieldClasses: function fieldClasses(field) {
      // Header field (<th>) classes
      return [field.class ? field.class : '', field.thClass ? field.thClass : ''];
    },
    headClicked: function headClicked(event, field, isFoot) {
      if (this.stopIfBusy && this.stopIfBusy(event)) {
        // If table is busy (via provider) then don't propagate
        return;
      } else if (filterEvent(event)) {
        // Clicked on a non-disabled control so ignore
        return;
      } else if (textSelectionActive(this.$el)) {
        // User is selecting text, so ignore

        /* istanbul ignore next: JSDOM doesn't support getSelection() */
        return;
      }

      stopEvent(event);
      this.$emit(EVENT_NAME_HEAD_CLICKED, field.key, field, event, isFoot);
    },
    renderThead: function renderThead() {
      var _this = this;

      var isFoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var fields = this.computedFields,
          isSortable = this.isSortable,
          isSelectable = this.isSelectable,
          headVariant = this.headVariant,
          footVariant = this.footVariant,
          headRowVariant = this.headRowVariant,
          footRowVariant = this.footRowVariant;
      var h = this.$createElement; // In always stacked mode, we don't bother rendering the head/foot
      // Or if no field headings (empty table)

      if (this.isStackedAlways || fields.length === 0) {
        return h();
      }

      var hasHeadClickListener = isSortable || this.hasListener(EVENT_NAME_HEAD_CLICKED); // Reference to `selectAllRows` and `clearSelected()`, if table is selectable

      var selectAllRows = isSelectable ? this.selectAllRows : noop;
      var clearSelected = isSelectable ? this.clearSelected : noop; // Helper function to generate a field <th> cell

      var makeCell = function makeCell(field, colIndex) {
        var label = field.label,
            labelHtml = field.labelHtml,
            variant = field.variant,
            stickyColumn = field.stickyColumn,
            key = field.key;
        var ariaLabel = null;

        if (!field.label.trim() && !field.headerTitle) {
          // In case field's label and title are empty/blank
          // We need to add a hint about what the column is about for non-sighted users

          /* istanbul ignore next */
          ariaLabel = startCase(field.key);
        }

        var on = {};

        if (hasHeadClickListener) {
          on.click = function (event) {
            _this.headClicked(event, field, isFoot);
          };

          on.keydown = function (event) {
            var keyCode = event.keyCode;

            if (keyCode === CODE_ENTER || keyCode === CODE_SPACE) {
              _this.headClicked(event, field, isFoot);
            }
          };
        }

        var sortAttrs = isSortable ? _this.sortTheadThAttrs(key, field, isFoot) : {};
        var sortClass = isSortable ? _this.sortTheadThClasses(key, field, isFoot) : null;
        var sortLabel = isSortable ? _this.sortTheadThLabel(key, field, isFoot) : null;
        var data = {
          class: [_this.fieldClasses(field), sortClass],
          props: {
            variant: variant,
            stickyColumn: stickyColumn
          },
          style: field.thStyle || {},
          attrs: _objectSpread$1(_objectSpread$1({
            // We only add a `tabindex` of `0` if there is a head-clicked listener
            // and the current field is sortable
            tabindex: hasHeadClickListener && field.sortable ? '0' : null,
            abbr: field.headerAbbr || null,
            title: field.headerTitle || null,
            'aria-colindex': colIndex + 1,
            'aria-label': ariaLabel
          }, _this.getThValues(null, key, field.thAttr, isFoot ? 'foot' : 'head', {})), sortAttrs),
          on: on,
          key: key
        }; // Handle edge case where in-document templates are used with new
        // `v-slot:name` syntax where the browser lower-cases the v-slot's
        // name (attributes become lower cased when parsed by the browser)
        // We have replaced the square bracket syntax with round brackets
        // to prevent confusion with dynamic slot names

        var slotNames = [getHeadSlotName(key), getHeadSlotName(key.toLowerCase()), getHeadSlotName()]; // Footer will fallback to header slot names

        if (isFoot) {
          slotNames = [getFootSlotName(key), getFootSlotName(key.toLowerCase()), getFootSlotName()].concat(_toConsumableArray(slotNames));
        }

        var scope = {
          label: label,
          column: key,
          field: field,
          isFoot: isFoot,
          // Add in row select methods
          selectAllRows: selectAllRows,
          clearSelected: clearSelected
        };
        var $content = _this.normalizeSlot(slotNames, scope) || h('div', {
          domProps: htmlOrText(labelHtml, label)
        });
        var $srLabel = sortLabel ? h('span', {
          staticClass: 'sr-only'
        }, " (".concat(sortLabel, ")")) : null; // Return the header cell

        return h(BTh, data, [$content, $srLabel].filter(identity));
      }; // Generate the array of <th> cells


      var $cells = fields.map(makeCell).filter(identity); // Generate the row(s)

      var $trs = [];

      if (isFoot) {
        $trs.push(h(BTr, {
          class: this.tfootTrClass,
          props: {
            variant: isUndefinedOrNull(footRowVariant) ? headRowVariant :
            /* istanbul ignore next */
            footRowVariant
          }
        }, $cells));
      } else {
        var scope = {
          columns: fields.length,
          fields: fields,
          // Add in row select methods
          selectAllRows: selectAllRows,
          clearSelected: clearSelected
        };
        $trs.push(this.normalizeSlot(SLOT_NAME_THEAD_TOP, scope) || h());
        $trs.push(h(BTr, {
          class: this.theadTrClass,
          props: {
            variant: headRowVariant
          }
        }, $cells));
      }

      return h(isFoot ? BTfoot : BThead, {
        class: (isFoot ? this.tfootClass : this.theadClass) || null,
        props: isFoot ? {
          footVariant: footVariant || headVariant || null
        } : {
          headVariant: headVariant || null
        },
        key: isFoot ? 'bv-tfoot' : 'bv-thead'
      }, $trs);
    }
  }
});var props$1 = {}; // --- Mixin ---
// @vue/component

var topRowMixin = Vue__default['default'].extend({
  methods: {
    renderTopRow: function renderTopRow() {
      var fields = this.computedFields,
          stacked = this.stacked,
          tbodyTrClass = this.tbodyTrClass,
          tbodyTrAttr = this.tbodyTrAttr;
      var h = this.$createElement; // Add static Top Row slot (hidden in visibly stacked mode as we can't control the data-label)
      // If in *always* stacked mode, we don't bother rendering the row

      if (!this.hasNormalizedSlot(SLOT_NAME_TOP_ROW) || stacked === true || stacked === '') {
        return h();
      }

      return h(BTr, {
        staticClass: 'b-table-top-row',
        class: [isFunction$1(tbodyTrClass) ? tbodyTrClass(null, 'row-top') : tbodyTrClass],
        attrs: isFunction$1(tbodyTrAttr) ? tbodyTrAttr(null, 'row-top') : tbodyTrAttr,
        key: 'b-top-row'
      }, [this.normalizeSlot(SLOT_NAME_TOP_ROW, {
        columns: fields.length,
        fields: fields
      })]);
    }
  }
});function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = makePropsConfigurable(sortKeys(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, props$I), props$n), props$l), props$k), props$j), props$i), props$h), props$g), props$f), props$e), props$d), props$c), props$b), props$a), props$6), props$4), props$2), props$1)), NAME_TABLE); // --- Main component ---
// @vue/component

var BTable = /*#__PURE__*/Vue__default['default'].extend({
  name: NAME_TABLE,
  // Order of mixins is important!
  // They are merged from first to last, followed by this component
  mixins: [// General mixins
  attrsMixin, hasListenerMixin, idMixin, normalizeSlotMixin, // Required table mixins
  itemsMixin, tableRendererMixin, stackedMixin, theadMixin, tfootMixin, tbodyMixin, // Table features mixins
  stackedMixin, filteringMixin, sortingMixin, paginationMixin, captionMixin, colgroupMixin, selectableMixin, emptyMixin, topRowMixin, bottomRowMixin, busyMixin, providerMixin],
  props: props // Render function is provided by `tableRendererMixin`

});var script = Vue__default['default'].extend({
  name: "BEditableTable",
  components: {
    BTable: BTable,
    BFormDatepicker: BFormDatepicker,
    BFormInput: BFormInput,
    BFormSelect: BFormSelect,
    BFormCheckbox: BFormCheckbox,
    BFormRating: BFormRating
  },
  props: {
    fields: Array,
    items: Array,
    value: Array
  },
  directives: {
    focus: {
      inserted: function inserted(el, event) {
        switch (event.value) {
          case "checkbox":
            el.children[0].focus();

          case "date":
            el.children[0].focus();

          default:
            el.focus();
        }
      }
    },
    clickOutside: {
      bind: function bind(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          if (!(el == event.target || el.contains(event.target))) {
            if (document.contains(event.target)) {
              vnode.context[binding.expression](event);
            }
          }
        };

        document.addEventListener("click", el.clickOutsideEvent);
      },
      unbind: function unbind(el) {
        document.removeEventListener("click", el.clickOutsideEvent);
      }
    }
  },
  data: function data() {
    return {
      selectedCell: {
        type: String,
        default: null
      },
      tableItems: this.value ? this.value.map(function (item) {
        return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          isEdit: false
        });
      }) : this.items.map(function (item) {
        return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          isEdit: false
        });
      }),
      updatedTable: this.value
    };
  },
  methods: {
    handleEditCell: function handleEditCell(e, index, name) {
      e.stopPropagation();
      this.mapItems();
      this.tableItems[index].isEdit = true;
      this.selectedCell = name;
    },
    handleKeydown: function handleKeydown(e, index, data) {
      if (e.code === "Tab") {
        e.preventDefault();
        var fieldIndex = this.fields.length - 1 === index ? 0 : index + 1;
        var rowIndex = this.fields.length - 1 === index ? data.index + 1 : data.index;
        var i = fieldIndex; // Find next editable field

        while (!this.fields[i].editable) {
          if (i === this.fields.length - 1) {
            i = 0;
            rowIndex++;
          } else {
            i++;
          }
        }

        fieldIndex = i;
        this.selectedCell = this.fields[fieldIndex].key;
        this.mapItems();
        this.tableItems[rowIndex].isEdit = true;
      } else if (e.code === "Escape") {
        e.preventDefault();
        this.selectedCell = null;
        this.mapItems();
      }
    },
    handleClickOut: function handleClickOut() {
      this.selectedCell = null;
      this.mapItems();
    },
    inputHandler: function inputHandler(value, data, key) {
      this.tableItems[data.index][key] = value;
      this.$emit('input-change', value, data); // If v-model is set then emit updated table

      if (this.value) {
        this.updatedTable[data.index][key] = value;
        this.$emit('input', this.updatedTable);
      }
    },
    handleListeners: function handleListeners(listeners) {
      // Exclude listeners that are not part of Bootstrap Vue
      var excludeEvents = {
        "input": true,
        "input-change": true
      };
      return Object.keys(listeners).reduce(function (a, c) {
        return excludeEvents[c] ? a : _objectSpread2$1(_objectSpread2$1({}, a), {}, _defineProperty$C({}, c, listeners[c]));
      }, {});
    },
    mapItems: function mapItems() {
      this.tableItems = this.tableItems.map(function (item) {
        return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          isEdit: false
        });
      });
    }
  }
});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('b-table', _vm._g(_vm._b({
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.handleClickOut,
      expression: "handleClickOut"
    }],
    attrs: {
      "items": _vm.tableItems
    },
    scopedSlots: _vm._u([_vm._l(_vm.fields, function (field, index) {
      return {
        key: "cell(" + field.key + ")",
        fn: function fn(data) {
          return [field.type === 'date' && _vm.tableItems[data.index].isEdit && _vm.selectedCell === field.key && field.editable ? _c('b-form-datepicker', _vm._b({
            directives: [{
              name: "focus",
              rawName: "v-focus",
              value: 'date',
              expression: "'date'"
            }],
            key: index,
            attrs: {
              "type": field.type,
              "value": _vm.tableItems[data.index][field.key]
            },
            on: {
              "input": function input(value) {
                return _vm.inputHandler(value, data, field.key);
              }
            },
            nativeOn: {
              "keydown": function keydown($event) {
                return _vm.handleKeydown($event, index, data);
              }
            }
          }, 'b-form-datepicker', Object.assign({}, field), false)) : field.type === 'select' && _vm.tableItems[data.index].isEdit && _vm.selectedCell === field.key && field.editable ? _c('b-form-select', _vm._b({
            directives: [{
              name: "focus",
              rawName: "v-focus"
            }],
            key: index,
            attrs: {
              "value": _vm.tableItems[data.index][field.key]
            },
            on: {
              "change": function change(value) {
                return _vm.inputHandler(value, data, field.key);
              }
            },
            nativeOn: {
              "keydown": function keydown($event) {
                return _vm.handleKeydown($event, index, data);
              }
            }
          }, 'b-form-select', Object.assign({}, field), false)) : field.type === 'checkbox' && _vm.tableItems[data.index].isEdit && _vm.selectedCell === field.key && field.editable ? _c('b-form-checkbox', _vm._b({
            directives: [{
              name: "focus",
              rawName: "v-focus",
              value: 'checkbox',
              expression: "'checkbox'"
            }],
            key: index,
            attrs: {
              "checked": _vm.tableItems[data.index][field.key]
            },
            on: {
              "change": function change(value) {
                return _vm.inputHandler(value, data, field.key);
              }
            },
            nativeOn: {
              "keydown": function keydown($event) {
                return _vm.handleKeydown($event, index, data);
              }
            }
          }, 'b-form-checkbox', Object.assign({}, field), false)) : field.type === 'rating' && field.type && _vm.tableItems[data.index].isEdit && _vm.selectedCell === field.key && field.editable ? _c('b-form-rating', _vm._b({
            directives: [{
              name: "focus",
              rawName: "v-focus"
            }],
            key: index,
            attrs: {
              "type": field.type,
              "value": _vm.tableItems[data.index][field.key]
            },
            on: {
              "keydown": function keydown($event) {
                return _vm.handleKeydown($event, index, data);
              },
              "change": function change(value) {
                return _vm.inputHandler(value, data, field.key);
              }
            }
          }, 'b-form-rating', Object.assign({}, field), false)) : field.type && _vm.tableItems[data.index].isEdit && _vm.selectedCell === field.key && field.editable ? _c('b-form-input', _vm._b({
            directives: [{
              name: "focus",
              rawName: "v-focus"
            }],
            key: index,
            attrs: {
              "type": field.type,
              "value": _vm.tableItems[data.index][field.key]
            },
            on: {
              "keydown": function keydown($event) {
                return _vm.handleKeydown($event, index, data);
              },
              "input": function input(value) {
                return _vm.inputHandler(value, data, field.key);
              }
            }
          }, 'b-form-input', Object.assign({}, field), false)) : _c('span', {
            key: index,
            staticClass: "data-cell",
            on: {
              "click": function click($event) {
                return _vm.handleEditCell($event, data.index, field.key);
              }
            }
          }, [_vm.$scopedSlots["cell-" + field.key] ? _vm._t("cell-" + field.key, null, null, data) : [_vm._v(_vm._s(data.value))]], 2)];
        }
      };
    }), _vm._l(_vm.$scopedSlots, function (_, slot) {
      return {
        key: slot,
        fn: function fn(scope) {
          return [_vm._t(slot, null, null, scope)];
        }
      };
    })], null, true)
  }, 'b-table', Object.assign({}, _vm.$props, _vm.$attrs), false), _vm.handleListeners(_vm.$listeners)));
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1738c209_0", {
    source: ".data-cell{display:flex;width:100%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-1738c209";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var component = /*#__PURE__*/(function () {
  // Assign InstallableComponent type
  var installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = function (Vue) {
    Vue.component('BEditableTable', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray$1(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;