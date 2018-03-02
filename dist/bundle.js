/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssmbly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/auth/auth.js":
/*!**************************!*\
  !*** ./api/auth/auth.js ***!
  \**************************/
/*! exports provided: signin, createToken, verifyToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signin\", function() { return signin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createToken\", function() { return createToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyToken\", function() { return verifyToken; });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.model */ \"./api/user/user.model.js\");\n\n\n\n\nconst checkToken = express_jwt__WEBPACK_IMPORTED_MODULE_1___default()({ secret: \"blogSecret\" });\n\nconst signin = function(req, res, next) {\n  console.log(req.userDetails._id);\n  const token = signToken(req.userDetails._id);\n  res.json({ access_token: token });\n};\n\nconst createToken = function(req, res, next) {\n  const username = req.body.username;\n  const password = req.body.password;\n\n  if (username && password) {\n    _user_user_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({ username: username })\n      .then(user => {\n        if (!user.authenticate(password)) {\n          res.status(401).send(\"Invalid Username or Password\");\n        }\n        req.userDetails = user;\n        next();\n      })\n      .catch(err => {\n        res.status(401).send(\"No user found\");\n      });\n  } else {\n    res.status(401).send(\"User and password is mandatory\");\n  }\n};\n\nconst decodeToken = function(req, res, next) {\n  console.log(req.headers.authorization);\n  checkToken(req, res, next);\n};\n\nconst verifyToken = function(req, res, next) {\n  console.log(\"verifyToken\");\n  decodeToken(req, res, next);\n};\n\nconst signToken = id => jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign({ id: id }, \"blogSecret\");\n\n\n//# sourceURL=webpack:///./api/auth/auth.js?");

/***/ }),

/***/ "./api/user/user.controller.js":
/*!*************************************!*\
  !*** ./api/user/user.controller.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ \"./api/user/user.model.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst userController = {\n  getOne: function(req, res) {\n    res.json(req.userDetails);\n  },\n  getAll: function(req, res) {\n    _user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find()\n      .then(data => {\n        res.json(data);\n      })\n      .catch(err => {\n        res.json({ err: err });\n      });\n  },\n  createOne: function(req, res) {\n    var user = new _user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n    user\n      .save()\n      .then(data => {\n        res.json(data);\n      })\n      .catch(err => {\n        res.json({ err: err });\n      });\n  },\n  updateOne: function(req, res) {\n    var user = req.userDetails;\n    lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()(user, req.body);\n    user\n      .save()\n      .then(data => {\n        res.json(data);\n      })\n      .catch(err => {\n        res.json(err);\n      });\n  },\n  delete: function(req, res) {\n    var user = req.userDetails;\n    user.remove().then(data => {\n      res.json(data);\n    });\n  },\n  findById: function(req, res, next) {\n    _user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.id, (err, res) => {\n      req.userDetails = res;\n      next();\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userController);\n\n\n//# sourceURL=webpack:///./api/user/user.controller.js?");

/***/ }),

/***/ "./api/user/user.model.js":
/*!********************************!*\
  !*** ./api/user/user.model.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\n\nconst UserSchema = new Schema({\n  username: {\n    type: String,\n    required: [true, \"Name is required\"]\n  },\n  password: {\n    type: String,\n    required: true,\n    validate: {\n      validator: function(data) {\n        if (data.length <= 8) {\n          return false;\n        }\n      },\n      message: \"{VALUE} is invalid\"\n    }\n  },\n  age: {\n    type: Number,\n    min: [18, \"Age should not be less then 18\"],\n    max: [28, \" Age should not be more the 28\"]\n  }\n});\nUserSchema.pre(\"save\", function(next) {\n  var hashPassword = bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hashSync(this.password, salt);\n  this.password = hashPassword;\n  next();\n});\n\nUserSchema.methods = {\n  authenticate: function(plainPassword) {\n    return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compareSync(plainPassword, this.password);\n  }\n};\n\nconst salt = bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.genSaltSync(10);\n\nconst UserModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"user\", UserSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserModel);\n\n\n//# sourceURL=webpack:///./api/user/user.model.js?");

/***/ }),

/***/ "./api/user/user.router.js":
/*!*********************************!*\
  !*** ./api/user/user.router.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.controller */ \"./api/user/user.controller.js\");\n\n\n\nconst userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nuserRouter.param('id', _user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById);\n\nuserRouter\n  .route(\"/\")\n  .get(_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAll)\n  .post(_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createOne);\n\nuserRouter\n  .route(\"/:id\")\n  .get(_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getOne)\n  .put(_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateOne)\n  .delete(_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userRouter);\n\n\n//# sourceURL=webpack:///./api/user/user.router.js?");

/***/ }),

/***/ "./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst connect = () => {\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a\n    .connect(\"mongodb://lax:lax@ds249798.mlab.com:49798/nodeapp\")\n    .then(() => {\n      console.log(\"connected successfully\");\n    })\n    .catch(err => {\n      console.log(\"Error connecting to database\", err);\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connect);\n\n\n//# sourceURL=webpack:///./db.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ \"./server.js\");\n\n\n_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(3000, () => {\n  console.log(\"listening on port 3000\");\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _setMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setMiddleware */ \"./setMiddleware.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./db.js\");\n/* harmony import */ var _api_user_user_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/user/user.router */ \"./api/user/user.router.js\");\n/* harmony import */ var _api_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/auth/auth */ \"./api/auth/auth.js\");\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\nObject(_setMiddleware__WEBPACK_IMPORTED_MODULE_1__[\"setUpMiddleware\"])(app);\nObject(_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\napp.post(\"/signin\", _api_auth_auth__WEBPACK_IMPORTED_MODULE_4__[\"createToken\"], _api_auth_auth__WEBPACK_IMPORTED_MODULE_4__[\"signin\"]);\n\napp.use(\"/api\", _api_auth_auth__WEBPACK_IMPORTED_MODULE_4__[\"verifyToken\"], _api_user_user_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\napp.route(\"/\").get((req, res) => {\n  res.json({ ok: true });\n});\n\napp.use(function(err, req, res, next) {\n  res.status(401).send(err);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./setMiddleware.js":
/*!**************************!*\
  !*** ./setMiddleware.js ***!
  \**************************/
/*! exports provided: setUpMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpMiddleware\", function() { return setUpMiddleware; });\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst setUpMiddleware = function(app) {\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({ extended: true }));\n  app.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.json());\n};\n\n\n//# sourceURL=webpack:///./setMiddleware.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/merge\");\n\n//# sourceURL=webpack:///external_%22lodash/merge%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });