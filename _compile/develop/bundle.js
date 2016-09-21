/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _sendForm = __webpack_require__(1);

	var _sendForm2 = _interopRequireDefault(_sendForm);

	var _floatMenu = __webpack_require__(2);

	var _floatMenu2 = _interopRequireDefault(_floatMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	//   $(document).ready(function () {
	//     'use strict';
	// //Аякс отправка форм
	//     $("#application").submit(function () {
	//       var data = {
	//         name : document.querySelector('input[name="name"]').value,
	//         email : document.querySelector('input[name="email"]').value,
	//         telephone : document.querySelector('input[name="telephone"]').value
	//       };
	//       $.ajax({
	//         type: "POST",
	//         url: "mail.php",
	//         data: data
	//       }).done(function (value) {
	//         $('#mail')[0].innerHTML = value;
	//         $('#mail').removeClass('not_visible_mail');
	//         setTimeout(function () {
	//           $("#form").trigger("reset");
	//         }, 1000);
	//       });
	//     return false;
	//     });
	//  function  test() {
	// 	console.log('test!');
	// }
	//         $("img, a").on("dragstart", function (event) { event.preventDefault(); });
	//   });

	//Плавающее меню
	// new FloatMenu({
	//     elem : document.getElementById('navigation'),
	//     height : 200,
	//     first_class : 'menu_fixed_on_top',
	//     second_class : 'float_menu'
	//   }).init();
	//
	//
	// // Отправка формы обратной связи скрипту для отправления по почте
	// let data = {
	//   name : 'input[name="name"]',
	//   email : 'input[name="email"]',
	//   telephone : 'input[name="telephone"]'
	// };
	//
	// new SendFunc('application', data, 'mail');

	// Открытие мобильного меню
	var menu = document.querySelector('.navigation .burger');

	menu.addEventListener('click', function () {
	  if (this.classList.contains('menu')) {
	    this.classList.remove('menu');
	    this.classList.add('closer');
	    document.querySelector('.navigation nav').classList.remove('close');
	  } else {
	    this.classList.remove('closer');
	    this.classList.add('menu');
	    document.querySelector('.navigation nav').classList.add('close');
	  }
	});

	// Открытие пунктов меню на десктопе
	[].concat(_toConsumableArray(document.querySelectorAll('.opener'))).forEach(function (elem, index, arr) {
	  elem.addEventListener('click', function () {
	    var list = this.parentNode.nextElementSibling;

	    if (list.classList.contains('open')) {
	      list.classList.add('close');
	      list.classList.remove('open');
	    } else {
	      list.classList.remove('close');
	      list.classList.add('open');
	    }
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sendForm = function sendForm(id, dates, idMail) {
	  _classCallCheck(this, sendForm);

	  document.getElementById(id).addEventListener('submit', function () {

	    var data = {
	      name: document.querySelector(dates.name.value),
	      email: document.querySelector(dates.email.value),
	      telephone: document.querySelector(dates.telephone.value)
	    };

	    $("#application").submit(function () {
	      $.ajax({
	        type: "POST",
	        url: "mail.php",
	        data: data
	      }).done(function (value) {
	        var mail = document.getElementById(idMail);

	        mail.innerHTML = value;
	        mail.classList.remove('not_visible_mail');

	        setTimeout(function () {
	          $("#" + id).trigger("reset");
	          mail.classList.add('not_visible_mail');
	        }, 1000);
	      });

	      return false;
	    });
	  });
	};

	exports.default = sendForm;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Принимает объект с настройками для меню
	var FloatMenu = function () {
	  function FloatMenu() {
	    _classCallCheck(this, FloatMenu);
	  }

	  _createClass(FloatMenu, [{
	    key: 'construnctor',

	    // @params - object
	    value: function construnctor(params) {
	      this.elem = params.elem;
	      this.height = params.height;
	      this.first_class = params.first_class;
	      this.second_class = params.second_class;
	      this.active_class = params.first_class;
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var _this = this;

	      if (window.pageYOffset > this.height) {
	        this.elem.classList.add(this.first_class);
	        this.elem.classList.add(this.second_class);
	      } else {
	        this.elem.classList.add(this.first_class);
	      }

	      window.addEventListener('scroll', function () {

	        if (window.pageYOffset > _this.height && _this.active_class === _this.first_class) {
	          _this.elem.classList.add(_this.second_class);
	          _this.active_class = _this.second_class;
	        } else if (window.pageYOffset < _this.height && _this.active_class === _this.second_class) {
	          _this.elem.classList.remove(_this.second_class);
	          _this.active_class = _this.first_class;
	        }
	      });
	    }
	  }]);

	  return FloatMenu;
	}();

	exports.default = FloatMenu;

/***/ }
/******/ ]);