(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
	_inherits(Sidebar, _Component);

	function Sidebar() {
		_classCallCheck(this, Sidebar);

		return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
	}

	_createClass(Sidebar, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h3",
					null,
					"Cora Mylene Tattoos"
				),
				_react2.default.createElement("hr", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement(
					"ul",
					{ className: "list-plain" },
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							"a",
							{ href: "mailto:coramylene@gmail.com?Subject=" + this.props.subject },
							_react2.default.createElement("i", { className: "fas fa-envelope", style: { paddingRight: ".5rem" } }),
							"coramylene@gmail.com"
						)
					),
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							"a",
							{ target: "_blank", href: "https://www.instagram.com/cora_mylene/" },
							_react2.default.createElement("i", { className: "fab fa-instagram", style: { paddingRight: ".5rem" } }),
							"@cora_mylene"
						)
					)
				),
				_react2.default.createElement("br", null),
				_react2.default.createElement("hr", null),
				_react2.default.createElement(
					"ul",
					{ className: "list-plain" },
					_react2.default.createElement(
						"li",
						{ style: { display: "flex" } },
						_react2.default.createElement("i", { className: "fas fa-map-marker-alt", style: { paddingRight: ".5rem", paddingTop: '.2rem' } }),
						_react2.default.createElement(
							"span",
							null,
							"Art Realm",
							_react2.default.createElement("br", null),
							"1806 W. Anderson Ln",
							_react2.default.createElement("br", null),
							"Austin, TX 78757"
						)
					)
				)
			);
		}
	}]);

	return Sidebar;
}(_react.Component);

exports.default = Sidebar;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _logo = __webpack_require__(29);

var _logo2 = _interopRequireDefault(_logo);

var _Hexagons = __webpack_require__(30);

var _Hexagons2 = _interopRequireDefault(_Hexagons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      { className: 'text-center text-uppercase' },
      'Cora Mylene Tattoos'
    ),
    _react2.default.createElement(_Hexagons2.default, null)
  );
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Gallery = __webpack_require__(33);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
	return _react2.default.createElement(_Gallery2.default, null);
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _About = __webpack_require__(34);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_About2.default, null);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Contact = __webpack_require__(35);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
	return _react2.default.createElement(_Contact2.default, null);
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Booking = __webpack_require__(36);

var _Booking2 = _interopRequireDefault(_Booking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
	return _react2.default.createElement(_Booking2.default, null);
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Inquiries = __webpack_require__(37);

var _Inquiries2 = _interopRequireDefault(_Inquiries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
	return _react2.default.createElement(_Inquiries2.default, null);
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
	return _react2.default.createElement(
		'h1',
		null,
		'Store'
	);
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _FAQ = __webpack_require__(38);

var _FAQ2 = _interopRequireDefault(_FAQ);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
	return _react2.default.createElement(_FAQ2.default, null);
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(18);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _App2.default;


if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };
  render(_App2.default);
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(19);

var _reactStaticRoutes = __webpack_require__(20);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _Footer = __webpack_require__(40);

var _Footer2 = _interopRequireDefault(_Footer);

var _Navigation = __webpack_require__(41);

var _Navigation2 = _interopRequireDefault(_Navigation);

__webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      { className: 'root-container' },
      _react2.default.createElement(_Navigation2.default, null),
      _react2.default.createElement(
        'main',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      ),
      _react2.default.createElement(_Footer2.default, null)
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(21);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(22);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(23);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _reactUniversalComponent = __webpack_require__(25);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/Users/mmccarthy/gitroot/corasite/coramylene/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 6)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(6);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Gallery',
  file: '/Users/mmccarthy/gitroot/corasite/coramylene/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/containers/Gallery', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Gallery');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/containers/Gallery';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/Users/mmccarthy/gitroot/corasite/coramylene/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Contact',
  file: '/Users/mmccarthy/gitroot/corasite/coramylene/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/Contact', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Contact');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/Contact';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Booking',
  file: '/Users/mmccarthy/gitroot/corasite/coramylene/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/Booking', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Booking');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/Booking';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Inquiries',
  file: '/Users/mmccarthy/gitroot/corasite/coramylene/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/containers/Inquiries', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Inquiries');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/containers/Inquiries';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Store',
  file: '/Users/mmccarthy/gitroot/corasite/coramylene/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/containers/Store', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Store');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/containers/Store';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/FAQ',
  file: '/Users/mmccarthy/gitroot/corasite/coramylene/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/containers/FAQ', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/FAQ');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/containers/FAQ';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/mmccarthy/gitroot/corasite/coramylene/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 8

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(26);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(27);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(28);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(4);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.9ff8fc2e.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Carousel = __webpack_require__(31);

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Hex = __webpack_require__(32);

var _Hex2 = _interopRequireDefault(_Hex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createImagePaths = function createImagePaths(first, last) {
	var images = [];
	for (var i = first; i <= last; i++) {
		images.push('/img/portfolio/' + i + '.jpeg');
	}
	return images;
};

var images = createImagePaths(1, 10);

var Hexagons = function (_Component) {
	_inherits(Hexagons, _Component);

	function Hexagons() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Hexagons);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hexagons.__proto__ || Object.getPrototypeOf(Hexagons)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			selected: "/img/portfolio/1.jpeg"
		}, _this.handleHexClick = function (path) {
			_this.setState({ selected: path });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Hexagons, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ 'class': 'hex-grid' },
					images.map(function (path, index) {
						if (index === 3 || index === 7) return [_react2.default.createElement('br', null), _react2.default.createElement(_Hex2.default, { path: path, handleClick: _this2.handleHexClick })];
						return _react2.default.createElement(_Hex2.default, { path: path, handleClick: _this2.handleHexClick });
					})
				),
				_react2.default.createElement(_Carousel2.default, { selected: this.state.selected, images: images })
			);
		}
	}]);

	return Hexagons;
}(_react.Component);

exports.default = Hexagons;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
	_inherits(Carousel, _Component);

	function Carousel() {
		_classCallCheck(this, Carousel);

		return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
	}

	_createClass(Carousel, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "modal fade", id: "HexModal", tabindex: "-1", role: "dialog", "aria-labelledby": "exampleModalCenterTitle", "aria-hidden": "true" },
				_react2.default.createElement(
					"div",
					{ className: "modal-dialog modal-lg modal-dialog-centered", role: "document" },
					_react2.default.createElement(
						"div",
						{ className: "modal-content" },
						_react2.default.createElement(
							"div",
							{ className: "modal-body" },
							_react2.default.createElement("img", {
								className: "carousel-image",
								src: this.props.selected
							})
						)
					)
				)
			);
		}
	}]);

	return Carousel;
}(_react.Component);

exports.default = Carousel;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hex = function (_Component) {
	_inherits(Hex, _Component);

	function Hex() {
		_classCallCheck(this, Hex);

		return _possibleConstructorReturn(this, (Hex.__proto__ || Object.getPrototypeOf(Hex)).apply(this, arguments));
	}

	_createClass(Hex, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: "hex" },
				_react2.default.createElement(
					"div",
					{
						"data-toggle": "modal",
						"data-target": "#HexModal",
						onClick: function onClick() {
							return _this2.props.handleClick(_this2.props.path);
						},
						className: "hex-image",
						style: { backgroundImage: "url(" + this.props.path + ")" }
					},
					_react2.default.createElement("div", { className: "hex-left" }),
					_react2.default.createElement("div", { className: "hex-right" })
				)
			);
		}
	}]);

	return Hex;
}(_react.Component);

exports.default = Hex;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
	_inherits(Gallery, _Component);

	function Gallery() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Gallery);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call.apply(_ref, [this].concat(args))), _this), _this.renderGrid = function () {
			return _react2.default.createElement(
				"div",
				{ className: "gallery-grid" },
				_react2.default.createElement(
					"div",
					{
						style: {
							gridColumn: "1/3",
							gridRow: "1/5"
						}
					},
					"1"
				),
				_react2.default.createElement(
					"div",
					{
						style: {
							gridColumn: "3/7",
							gridRow: "1/3"
						}
					},
					"2"
				),
				_react2.default.createElement(
					"div",
					{
						style: {
							gridColumn: "3/5",
							gridRow: "3/5"
						}
					},
					"3"
				),
				_react2.default.createElement(
					"div",
					{
						style: {
							gridColumn: "5/7",
							gridRow: "3/7"
						}
					},
					"4"
				),
				_react2.default.createElement(
					"div",
					{
						style: {
							gridColumn: "1/5",
							gridRow: "5/7"
						}
					},
					"5"
				)
			);
		}, _this.renderRows = function (number) {
			var content = [];
			for (var i = 0; i < number; i++) {
				content.push(_react2.default.createElement(
					"div",
					{ className: "col-6 gallery-row" },
					_this.renderGrid()
				));
			}
			return content;
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Gallery, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "row" },
				this.renderRows(6)
			);
		}
	}]);

	return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Sidebar = __webpack_require__(3);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
	_inherits(About, _Component);

	function About() {
		_classCallCheck(this, About);

		return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	}

	_createClass(About, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-9' },
						_react2.default.createElement(
							'h2',
							{ className: 'pb-20' },
							'About Me'
						),
						_react2.default.createElement(
							'div',
							{ className: 'row' },
							_react2.default.createElement(
								'div',
								{ className: 'col-lg-6' },
								_react2.default.createElement(
									'div',
									{ className: 'about-img' },
									_react2.default.createElement('img', {
										className: 'about-img',
										src: '/img/about.png',
										onError: function onError(i) {
											return i.target.style.display = "none";
										}
									})
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-lg-6' },
								_react2.default.createElement(
									'p',
									null,
									'I had the great opportunity to learn to tattoo under the tutelage of Michael Norris, the owner of Hub Tattoo in Austin, TX.'
								),
								_react2.default.createElement(
									'p',
									null,
									'I finished my apprenticeship at the end of 2014 and began my full-time tattooing career in 2015. I have been very fortunate with my career thus far and have had the pleasure to tattoo amazing people who have supported me for a while, and some since the beginning of my career.'
								),
								_react2.default.createElement(
									'p',
									null,
									'I enjoy getting to know people and building a strong clientele with those that I work with. My favorite part of tattooing is getting to be a part of people\'s personal growth and expression and I am very grateful for the trust that my clients have given me!'
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-md-3 desktop-only' },
						_react2.default.createElement(_Sidebar2.default, { subject: 'Booking%20Request' })
					)
				)
			);
		}
	}]);

	return About;
}(_react.Component);

exports.default = About;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
	_inherits(Contact, _Component);

	function Contact() {
		_classCallCheck(this, Contact);

		return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
	}

	_createClass(Contact, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'text-center' },
				_react2.default.createElement(
					'h1',
					{ className: 'text-uppercase' },
					'Cora Mylene Tattoos'
				),
				_react2.default.createElement('hr', { style: { width: "35%" } }),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'h3',
					null,
					_react2.default.createElement(
						'a',
						{ href: 'mailto:coramylene@gmail.com?Subject=' + this.props.subject },
						_react2.default.createElement('i', { className: 'fas fa-envelope contact-icon' }),
						'coramylene@gmail.com'
					),
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'a',
						{ target: '_blank', href: 'https://www.instagram.com/cora_mylene/' },
						_react2.default.createElement('i', { className: 'fab fa-instagram contact-icon' }),
						'@cora_mylene'
					)
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'h3',
					null,
					'Art Realm',
					_react2.default.createElement('br', null),
					'1806 W. Anderson Ln',
					_react2.default.createElement('br', null),
					'Austin, TX 78757'
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement('hr', { style: { width: "35%" } }),
				_react2.default.createElement(
					'div',
					{ className: 'row contact-links-container' },
					_react2.default.createElement(
						'div',
						{ className: 'col-6' },
						_react2.default.createElement(
							_reactStatic.Link,
							{
								className: 'contact-link',
								to: '/booking'
							},
							'Booking\xA0',
							_react2.default.createElement(
								'small',
								null,
								_react2.default.createElement('i', { className: 'fas fa-arrow-right' })
							),
							_react2.default.createElement('hr', { className: 'contact-divider' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-6' },
						_react2.default.createElement(
							_reactStatic.Link,
							{
								className: 'contact-link',
								to: 'inquiries'
							},
							'Inquiries\xA0',
							_react2.default.createElement(
								'small',
								null,
								_react2.default.createElement('i', { className: 'fas fa-arrow-right' })
							),
							_react2.default.createElement('hr', { className: 'contact-divider' })
						)
					)
				)
			);
		}
	}]);

	return Contact;
}(_react.Component);

exports.default = Contact;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _moment = __webpack_require__(11);

var _moment2 = _interopRequireDefault(_moment);

var _Sidebar = __webpack_require__(3);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Booking = function (_Component) {
	_inherits(Booking, _Component);

	function Booking() {
		_classCallCheck(this, Booking);

		return _possibleConstructorReturn(this, (Booking.__proto__ || Object.getPrototypeOf(Booking)).apply(this, arguments));
	}

	_createClass(Booking, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-9' },
						_react2.default.createElement(
							'h2',
							{ className: 'pb-20' },
							'Booking'
						),
						_react2.default.createElement(
							'p',
							null,
							'My books open 4 times a year on the following dates:'
						),
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								'January 15th'
							),
							_react2.default.createElement(
								'li',
								null,
								'Aprtil 15th'
							),
							_react2.default.createElement(
								'li',
								null,
								'July 15th'
							),
							_react2.default.createElement(
								'li',
								null,
								'October 15th'
							)
						),
						_react2.default.createElement(
							'p',
							null,
							'These booking dates are the starting dates in which I will be responding to emails and setting appointments with new clients. Once I have booked out for that quarter, I will close my books. If you do not get a personal email reply it\u2019s because I have booked all available appointments and/or I\u2019m not the right fit for your tattoo concept.'
						),
						_react2.default.createElement(
							'p',
							null,
							'Please note that I will not be reading tattoo inquiry emails until the next booking period. I will also not be reading old inquiries, so if you are serious please wait until a booking date and shoot me an email on or shortly after that date.'
						),
						_react2.default.createElement(
							'p',
							null,
							'Please visit ',
							_react2.default.createElement(
								_reactStatic.Link,
								{ to: '/inquiries', className: 'text-link' },
								'Inquiries'
							),
							' to see what information I will need from you for your inquiry.',
							_react2.default.createElement('br', null),
							'For all other questions please visit my ',
							_react2.default.createElement(
								_reactStatic.Link,
								{ to: '/faq', className: 'text-link' },
								'FAQ'
							),
							' page.'
						),
						(0, _moment2.default)().isBefore('2019-1-1') && _react2.default.createElement(
							'p',
							null,
							'***For the remaining of 2018, I am only booking people that have gotten a reply from me saying that I have put them on my waiting list. If you and I have not talked about this waiting list, please get back to me starting January 15th.***'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-md-3 desktop-only' },
						_react2.default.createElement(_Sidebar2.default, { subject: 'Booking%20Request' })
					)
				)
			);
		}
	}]);

	return Booking;
}(_react.Component);

exports.default = Booking;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _moment = __webpack_require__(11);

var _moment2 = _interopRequireDefault(_moment);

var _Sidebar = __webpack_require__(3);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inquiries = function (_Component) {
	_inherits(Inquiries, _Component);

	function Inquiries() {
		_classCallCheck(this, Inquiries);

		return _possibleConstructorReturn(this, (Inquiries.__proto__ || Object.getPrototypeOf(Inquiries)).apply(this, arguments));
	}

	_createClass(Inquiries, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-9' },
						_react2.default.createElement(
							'h2',
							{ className: 'pb-20' },
							'Inquiries'
						),
						_react2.default.createElement(
							'p',
							null,
							'When inquiring about a tattoo, please give me the following information in your email:'
						),
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								'A brief description of your tattoo concept and your style preference if you have one. '
							),
							_react2.default.createElement(
								'li',
								null,
								'Desired size of tattoo and location on body (include all options if you are flexible on placement and/or size)'
							),
							_react2.default.createElement(
								'li',
								null,
								'Reference photos (if any) and short descriptions identifying what you like/dislike about the image so that I can understand what you like as best as I can. '
							),
							_react2.default.createElement(
								'li',
								null,
								'Availability. Please note that weekends are booked the fastest, so include days/times that work for you during the week as well. I work Wednesday - Saturday and have 2 slots per day, noon and 5 pm. Please only give availability that falls within those days/times.'
							)
						),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'strong',
								null,
								'Once that is done:'
							)
						),
						_react2.default.createElement(
							'p',
							null,
							'I will get back to you  to set up the appointment date(s) that would work for both of us. Once we agree on a date/dates, I will send you a PayPal invoice for the $100 non-refundable deposit payable by debit or credit card. I do not take cash for deposits. Until the deposit is received, your appointment is not guaranteed or held. Once the date and deposit is set up, I will let you know if I feel an in-person consultation is needed. I only book consultations with those that I need more clarification from, and most of the time corresponding via email about the tattoo concept/design works just as well and saves you a trip!'
						),
						_react2.default.createElement(
							'p',
							null,
							'For additional info, please visit my ',
							_react2.default.createElement(
								_reactStatic.Link,
								{ to: '/faq', className: 'text-link' },
								'FAQ'
							),
							' page.'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-md-3 desktop-only' },
						_react2.default.createElement(_Sidebar2.default, { subject: 'Tattoo%20Inquiry' })
					)
				)
			);
		}
	}]);

	return Inquiries;
}(_react.Component);

exports.default = Inquiries;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _faq = __webpack_require__(39);

var _faq2 = _interopRequireDefault(_faq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FAQ = function (_Component) {
	_inherits(FAQ, _Component);

	function FAQ() {
		_classCallCheck(this, FAQ);

		return _possibleConstructorReturn(this, (FAQ.__proto__ || Object.getPrototypeOf(FAQ)).apply(this, arguments));
	}

	_createClass(FAQ, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'h2',
					null,
					'Frequently Asked Questions'
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'ul',
					{ className: 'list-plain' },
					_faq2.default.map(function (faq) {
						return _react2.default.createElement(
							'li',
							{ className: 'faq-list' },
							_react2.default.createElement(
								'strong',
								null,
								_react2.default.createElement(
									'em',
									null,
									faq.question
								)
							),
							_react2.default.createElement('br', null),
							faq.answer
						);
					})
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'em',
						null,
						'I hope this has helped to answer any/most of your questions. Please feel free to ask me any unanswered questions via email. Thank you for taking the time to read this!'
					)
				)
			);
		}
	}]);

	return FAQ;
}(_react.Component);

exports.default = FAQ;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = [{"question":"Where do you work?","answer":"I work at Art Realm Tattoo, located in Austin, Texas."},{"question":"Do you take walk-ins?","answer":"I do not take walk-ins. I work by appointment only."},{"question":"Do you have an hourly minimum? If so, why?","answer":"Yes, my hourly minimum is 3 hours. I have an hourly minimum because I like to focus my time on medium to large sized tattoos."},{"question":"What is your hourly rate?","answer":"My hourly rate is $125/h currently but will go up to $150/h starting January 1st, 2018."},{"question":"What kind of tattoos do you like to do?","answer":"I love to tattoo things like animals, flowers, plants, lady heads, insects, and other organic things. I would really like to do more neo-traditional tattoos."},{"question":"What kind of tattoos do you not want to do?","answer":"Realistic portraits and words/lettering. Those are not things that I tattoo and it is very important to find the right tattooer who specializes in the style you are looking for. "},{"question":"Do yo do cover-ups?","answer":"I do, but selectively. I will only do a cover-up that I know I can successfully do. Cover-ups are very tricky and are all different cases. This is something I would need to talk to you about in person to see what the tattoo you'd like to get covered looks like, what you'd want it covered up by, how big you're wanting the cover-up to be, etc."},{"question":"Are you the right artist for me?","answer":"If you like what I've done in the past and if you'd like something that falls in the same style as my work, I'd like to think so! If we end up not being a good fit, I am happy to give recommendations and referrals to another artist in town."},{"question":"When can I get tattooed by you?","answer":"Please see my Booking Schedule page."},{"question":"How do I book an appointment?","answer":"Please see my Inquiries page."},{"question":"What days do you work at the shop?","answer":"I am typically at the shop Wednesday - Saturday."},{"question":"Do you require a consultation before setting up an appointment?","answer":"Only if I feel your tattoo concept/design needs more in-person clarification."},{"question":"Do you take a deposit for the tattoo appointment?","answer":"Yes, I take a $100 deposit. This is to ensure that you are committed and will show up on the time and date of the appointment(s) we set up for you. The deposit will come out of the final price of the tattoo. If the tattoo requires multiple sessions, the deposit will be taken out during the last session. The deposit is non-refundable and non-transferable.  "},{"question":"How do I pay for a tattoo that requires multiple sessions?","answer":"You always pay by the session, so however long each sessions last is how much it will be on that day."},{"question":"How long are the sessions?","answer":"It depends on what we are working on. I normally work on a tattoo for about 3-4 hours at a time. You are also welcome to book a full day (6-8 hours) session with me if you prefer getting more done in one sitting."},{"question":"When can I see the design of my future tattoo?","answer":"I will have your design ready to be looked at and reviewed when you come in on your appointment. We can discuss the details and potential changes at that time."},{"question":"How can I get ready for my session?","answer":"I recommend coming in after a good meal and with snacks. It's a good idea to bring your own pillow as well for extra comfort. We provide water at the shop. If you are getting tattooed on your hip/leg, bringing a loose-fitting pair of pants or a flowy skirt/dress would be best."},{"question":"Can I bring people with me when I come get tattooed?","answer":"You're welcome to bring someone during your session, however please limit to one person as we have limited chairs and seating. "},{"question":"Do you take cards, checks or cash?","answer":"I take cash and cards, but no checks. Please note that for credit or debit cards, you will be charged a 3% convenience fee by PayPal."}]

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        { className: 'footer' },
        _react2.default.createElement('hr', { className: 'footer-border' }),
        _react2.default.createElement(
          'div',
          { className: 'footer-content' },
          _react2.default.createElement(
            'div',
            { className: 'footer-left' },
            'COPYRIGHT \xA9 CORA MYLENE. ALL RIGHTS RESERVED.'
          ),
          _react2.default.createElement(
            'div',
            { className: 'footer-right desktop-only' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/faq' },
              'FAQ'
            ),
            '\xA0\xA0\xA0\xA0|\xA0\xA0\xA0\xA0',
            _react2.default.createElement(
              'a',
              { target: '_blank', href: 'https://www.instagram.com/cora_mylene/' },
              '@cora_mylene\xA0\xA0',
              _react2.default.createElement('i', { className: 'fab fa-instagram' })
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_Component) {
	_inherits(Navigation, _Component);

	function Navigation() {
		_classCallCheck(this, Navigation);

		return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
	}

	_createClass(Navigation, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'nav',
				{ className: 'navbar navbar-expand-lg' },
				_react2.default.createElement(
					'button',
					{
						className: 'navbar-toggler',
						type: 'button',
						'data-toggle': 'collapse',
						'data-target': '#NavbarMain',
						'aria-controls': 'NavbarMain',
						'aria-expanded': 'false',
						'aria-label': 'Toggle navigation'
					},
					_react2.default.createElement('i', { className: 'text-white fas fa-bars' })
				),
				_react2.default.createElement(
					'a',
					{ className: 'navigation-insta', target: 'blank', href: 'https://www.instagram.com/cora_mylene/' },
					_react2.default.createElement('i', { className: 'text-white fab fa-instagram ml-auto' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'collapse navbar-collapse', id: 'NavbarMain' },
					_react2.default.createElement(
						'ul',
						{ className: 'navbar-nav m-auto' },
						_react2.default.createElement(
							'li',
							{ className: 'nav-item mobile-only' },
							_react2.default.createElement(
								_reactStatic.NavLink,
								{
									to: '/',
									exact: true,
									className: 'nav-link text-right',
									active: 'active'
								},
								'Home'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: 'nav-item' },
							_react2.default.createElement(
								_reactStatic.NavLink,
								{
									to: '/gallery',
									className: 'nav-link text-right',
									active: 'active'
								},
								'Gallery'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: 'nav-item' },
							_react2.default.createElement(
								_reactStatic.NavLink,
								{
									to: '/about',
									className: 'nav-link text-right',
									active: 'active'
								},
								'About'
							)
						),
						_react2.default.createElement(
							_reactStatic.NavLink,
							{
								to: '/',
								className: 'nav-img',
								exact: true
							},
							_react2.default.createElement('img', { src: '/img/main.jpeg', onError: function onError(i) {
									return i.target.style.display = "none";
								} })
						),
						_react2.default.createElement(
							'li',
							{ className: 'nav-item' },
							_react2.default.createElement(
								_reactStatic.NavLink,
								{
									to: '/contact',
									className: 'nav-link dropdown',
									active: 'active'
								},
								'Contact',
								_react2.default.createElement(
									'div',
									{ className: 'dropdown-menu' },
									_react2.default.createElement(
										_reactStatic.NavLink,
										{
											to: '/contact/booking',
											className: 'dropdown-item'
										},
										'Booking'
									),
									_react2.default.createElement(
										_reactStatic.NavLink,
										{
											to: '/contact/inquiries',
											className: 'dropdown-item'
										},
										'Inquiries'
									)
								)
							)
						),
						_react2.default.createElement(
							'li',
							{ className: 'nav-item' },
							_react2.default.createElement(
								_reactStatic.NavLink,
								{
									to: '/store',
									className: 'nav-link',
									active: 'active'
								},
								'Store'
							)
						)
					)
				)
			);
		}
	}]);

	return Navigation;
}(_react.Component);

exports.default = Navigation;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:Brandon-Black;src:url(\"/fonts/Brandon_blk.otf\")}@font-face{font-family:Brandon-Reg;src:url(\"/fonts/Brandon_reg.otf\")}@font-face{font-family:Brandon-Italic;src:url(\"/fonts/Brandon_reg_it.otf\")}@font-face{font-family:Brandon-Thin;src:url(\"/fonts/Brandon_thin.otf\")}body{font-family:Brandon-Reg,sans-serif;font-weight:300;font-size:16px;margin:0;padding:0;background-image:url(\"/img/background.jpg\");background-position:50%;background-repeat:no-repeat;background-color:#1d0000;min-height:100vh;background-size:auto;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}em{font-family:Brandon-Italic}strong{font-weight:700}hr{border-color:#fff;width:80%}a{color:#fff}a,a:hover{text-decoration:none;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}a:hover{cursor:pointer;color:#e0a6a6}h1{font-size:6rem;padding:30px 0}h1,h2{font-family:Brandon-Reg}h2{font-size:4rem}img{max-width:100%}nav{width:100%}nav a{color:#fff;padding:1rem;display:inline-block}.pb-20{padding-bottom:20px}.pt-20{padding-top:20px}.pr-20{padding-right:20px}.pl-20{padding-left:20px}.p-20{padding:20px}.root-container{min-height:100vh;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.content{padding:1rem}.list-plain{list-style:none;margin-bottom:0}.text-link{color:#954d4d}.navigation-insta{display:none;font-size:1.25rem;background:transparent;border:none}.nav-item{margin:0 10px;border-bottom:1px solid #fff;-ms-flex-item-align:center;align-self:center;width:200px}.nav-item,.nav-link{-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.nav-link{font-family:Brandon-Thin;font-weight:700;font-size:1.5rem;text-transform:uppercase;letter-spacing:.4rem}.nav-link:hover{color:#fff}.nav-link.active,.nav-link:hover{letter-spacing:.6rem;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.nav-link.active{color:#e0a6a6}.nav-img img{height:200px}.dropdown-menu{display:block;opacity:0;width:100%}.dropdown-menu,.dropdown:focus .dropdown-menu,.dropdown:hover .dropdown-menu{-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.dropdown:focus .dropdown-menu,.dropdown:hover .dropdown-menu{opacity:1;letter-spacing:.4rem}.dropdown-item,.dropdown-item.active{font-family:Brandon-Reg;font-weight:400;letter-spacing:.4rem;font-size:16px;color:#1d0000}.dropdown-item.active{background-color:inherit}.dropdown-item:focus,.dropdown-item:hover{background-color:#f3f3f3}.mobile-only{display:none}.footer{margin-top:auto;width:100%}.footer-border{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid #fff;width:90%}.footer-content{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:20px 6%;font-family:Brandon-Reg;font-size:12px;text-transform:uppercase}.footer-left{color:#6c757d}.footer-right{margin-left:auto;color:#fff}.hex-grid{text-align:center;margin:55px auto;padding-top:2px}.hex{position:relative;max-width:100%;width:190px;display:inline-block;vertical-align:middle;margin:37px 10px;z-index:10}.hex,.hex:hover{-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.hex:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);z-index:99}.hex-left:before,.hex-right:before{height:220px;width:220px}.hex-left:before{-webkit-transform:rotate(-60deg) translate(-110px);-ms-transform:rotate(-60deg) translate(-110px);transform:rotate(-60deg) translate(-110px)}.hex-right:before{-webkit-transform:rotate(60deg) translate(40px,40px);-ms-transform:rotate(60deg) translate(40px,40px);transform:rotate(60deg) translate(40px,40px)}.hex-image{height:110px;background-repeat:no-repeat;background-position:50% 50%;background-size:auto 260px;display:block}.hex-image:hover{cursor:pointer}.hex-left,.hex-right{position:absolute;height:100%;width:100%;z-index:-2;top:0;left:0;overflow:hidden;background:inherit}.hex-left:before,.hex-right:before{content:\"\";position:absolute;background:inherit;left:0}.hex-left{z-index:-1;-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.hex-left:before{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}.hex-right{-webkit-transform:rotate(-60deg);-ms-transform:rotate(-60deg);transform:rotate(-60deg)}.hex-right:before{bottom:0}.carousel-image{width:100%;-o-object-fit:cover;object-fit:cover;border-radius:20px}.modal-content{background:transparent}.modal-body{padding:0}.gallery-grid{display:grid;grid-template-columns:repeat(6,1fr);grid-auto-rows:minmax(150px,auto);grid-gap:10px;max-width:100%;margin:0 auto}.gallery-grid div{background:#333;padding:30px;text-align:center}.gallery-row{padding:5px}.about-img{text-align:right}.about-img img{border-radius:20px;border:1px solid #954d4d}.contact-icon{padding:.5rem}.contact-links-container{margin-top:30px}.contact-link{font-size:4rem}.contact-link:hover{color:#e0a6a6}.contact-divider{width:0}.contact-divider,.contact-link:hover>.contact-divider{-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.contact-link:hover>.contact-divider{width:20%}.faq-list{padding-bottom:40px;font-size:18px}.faq-list strong{font-size:20px}@media (max-width:992px){h1{font-size:3rem}h2{font-size:2.5rem}h3{font-size:1.25rem}a{color:#e0a6a6}a i{color:#fff}.mobile-only{display:block}.desktop-only{display:none}.navigation-insta{display:block}.nav-item{margin-right:auto;border-bottom:none;-ms-flex-item-align:center;align-self:center;width:auto;text-align:left}.nav-img{display:none}.dropdown-menu{opacity:1;width:auto;background:transparent}.dropdown-item{color:#fff}.dropdown-item,.dropdown-item.active{background:transparent;font-family:Brandon-Thin;font-weight:700;letter-spacing:.4rem;font-size:1.5rem}.dropdown-item.active{color:#954d4d;letter-spacing:.6rem;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.dropdown-item:focus,.dropdown-item:hover{background-color:transparent}.navbar-collapse.collapse.show:after{content:\"\";display:block;margin:0 auto;width:60%;border-bottom:1px solid #fff;-webkit-transition:all 1s ease-in-out;-o-transition:all 1s ease-in-out;transition:all 1s ease-in-out}.hex-grid{margin:0}.hex{width:100%;margin:10px 0}.hex-image{height:400px;background-size:cover}.hex-left,.hex-right{display:none}.about-img{text-align:center;margin-bottom:15px}.contact-links-container{margin-top:0}.contact-link{font-size:2rem}.footer-content div{width:100%;text-align:center}}.clearfix:after{content:\"\";display:table;clear:both}", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.2b652214.js.map