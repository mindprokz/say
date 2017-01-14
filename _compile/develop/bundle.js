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

	var _filters = __webpack_require__(1);

	var _filters2 = _interopRequireDefault(_filters);

	var _shops = __webpack_require__(2);

	var _shops2 = _interopRequireDefault(_shops);

	var _rest = __webpack_require__(3);

	var _rest2 = _interopRequireDefault(_rest);

	var _stocks = __webpack_require__(4);

	var _stocks2 = _interopRequireDefault(_stocks);

	var _service = __webpack_require__(5);

	var _service2 = _interopRequireDefault(_service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	$(document).ready(function () {
	  $(".navigation .wrap").mCustomScrollbar({
	    autoHideScrollbar: true
	  });
	});

	$(".fancybox").click(function () {
	  $(".fancybox").fancybox({
	    maxWidth: 800,
	    maxHeight: 800,
	    fitToView: false,
	    width: '80%',
	    height: '80%',
	    autoSize: false,
	    closeClick: false,
	    openEffect: 'fade',
	    closeEffect: 'fade'
	  });
	});

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

	document.querySelector('.header_cont .time_work').addEventListener('click', function () {
	  document.querySelector('.time_work_modal').classList.remove('close');
	});

	document.querySelector('.navigation .time').addEventListener('click', function () {
	  document.querySelector('.time_work_modal').classList.remove('close');
	});

	document.querySelector('.time_work_modal .closer').addEventListener('click', function () {
	  document.querySelector('.time_work_modal').classList.add('close');
	});

	if (window.contact === true) {
	  $(".feedback").mCustomScrollbar({
	    autoHideScrollbar: true,
	    theme: 'dark'
	  });
	  // Опции карты
	  var mapOptions = {
	    zoom: 15,
	    center: new google.maps.LatLng(51.138668, 71.474600),
	    disableDefaultUI: true
	  };

	  var map = new google.maps.Map(document.querySelector('.contact .map'), mapOptions);

	  var marker = new google.maps.Marker({
	    position: new google.maps.LatLng(51.138668, 71.474600),
	    map: map,
	    title: 'Филиал в Астане',
	    icon: 'img/maps_arrow.png'
	  });
	}

	(0, _shops2.default)();
	(0, _rest2.default)();
	(0, _stocks2.default)();
	(0, _service2.default)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	exports.default = function () {
	  if (window.shops === true) {
	    checkHash();
	    [].concat(_toConsumableArray(document.querySelectorAll('#shops_nav li a'))).forEach(function (el) {
	      el.addEventListener('click', function (e) {
	        var _this = this;

	        e.preventDefault();
	        var shop_wrap = document.querySelector('.shop_wrap');
	        shop_wrap.style.opacity = "0";

	        setTimeout(function () {
	          shop_wrap.style.display = 'none';
	          document.querySelector('.spinner').classList.remove('close');
	          setTimeout(function () {
	            return fulter_elem_shop(_this.dataset.attr);
	          }, 500);
	        }, 500);
	      });
	    });
	  } else if (window.cafe === true) {
	    checkHash();
	    [].concat(_toConsumableArray(document.querySelectorAll('#rest_nav li a'))).forEach(function (el) {
	      el.addEventListener('click', function (e) {
	        var _this2 = this;

	        e.preventDefault();
	        var shop_wrap = document.querySelector('.shop_wrap');
	        shop_wrap.style.opacity = "0";

	        setTimeout(function () {
	          shop_wrap.style.display = 'none';
	          document.querySelector('.spinner').classList.remove('close');
	          setTimeout(function () {
	            return filter_elem(_this2.dataset.attr);
	          }, 500);
	        }, 500);
	      });
	    });
	  } else if (window.service === true) {
	    checkHash();
	    [].concat(_toConsumableArray(document.querySelectorAll('#service_nav li a'))).forEach(function (el) {
	      el.addEventListener('click', function (e) {
	        var _this3 = this;

	        e.preventDefault();
	        var shop_wrap = document.querySelector('.shop_wrap');
	        shop_wrap.style.opacity = "0";

	        setTimeout(function () {
	          shop_wrap.style.display = 'none';
	          document.querySelector('.spinner').classList.remove('close');
	          setTimeout(function () {
	            return filter_elem(_this3.dataset.attr);
	          }, 500);
	        }, 500);
	      });
	    });
	  }
	}();

	function fulter_elem_shop(attr) {
	  changeHeaderForHash(attr);
	  location.hash = attr;

	  var reg = new RegExp(attr, 'i');
	  [].concat(_toConsumableArray(document.querySelectorAll('.shops .shops_cont .shop'))).forEach(function (el) {
	    el.style.display = 'block';

	    if (!reg.test(el.dataset.filter)) {
	      el.style.display = 'none';
	    }
	  });

	  document.querySelector('.spinner').classList.add('close');

	  var shop_wrap = document.querySelector('.shop_wrap');
	  shop_wrap.style.display = 'block';
	  setTimeout(function () {
	    return shop_wrap.style.opacity = "1";
	  }, 100);
	}

	function filter_elem(attr) {
	  changeHeaderForHash(attr);
	  location.hash = attr;
	  [].concat(_toConsumableArray(document.querySelectorAll('.shops .shops_cont .shop'))).forEach(function (el) {
	    el.style.display = 'block';

	    if (el.dataset.filter !== attr) {
	      el.style.display = 'none';
	    }
	  });

	  document.querySelector('.spinner').classList.add('close');

	  var shop_wrap = document.querySelector('.shop_wrap');
	  shop_wrap.style.display = 'block';
	  setTimeout(function () {
	    return shop_wrap.style.opacity = "1";
	  }, 100);
	}

	function checkHash() {
	  if (location.hash) {
	    filter_elem(location.hash.slice(1));
	  }
	}

	function changeHeaderForHash(hash) {
	  document.querySelector('.shops header span').textContent = '— ' + hash;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (window.shops === true) {

	    // Обработка всех миниатюр магазинов
	    [].concat(_toConsumableArray(document.querySelectorAll('.shops_cont .shop'))).forEach(function (elem) {
	      elem.addEventListener('click', function () {
	        // Находим модальное окно в DOM и делаем его видимым
	        var _modal = document.querySelector('.modal_shop');
	        _modal.style.display = 'block';

	        setTimeout(function () {
	          return _modal.classList.remove('close');
	        }, 100);

	        // Делаем запрос на сервер, по атрибуту магазина
	        $.get('http://saryarka.com/?p=' + elem.dataset.id + '&json=1', function (data) {
	          var _obj = htmlReplacerShopModal(data.post);

	          document.querySelector('.modal_shop .wrap .images').innerHTML = _obj.images;
	          document.querySelector('.modal_shop .wrap .text').innerHTML = _obj.text;

	          setTimeout(function () {

	            // Обновляем слайдер, скролл и fancybox
	            sliderUpdate();
	            scrollUpdate();
	            fancyboxUpdate();
	            document.querySelector('.modal_shop .wrap').classList.remove('close');
	          }, 100);
	        });
	      });
	    });

	    document.querySelector('.modal_shop .wrap .closer').addEventListener('click', function () {
	      var _elem = document.querySelector('.modal_shop');

	      _elem.classList.add('close');
	      document.querySelector('.modal_shop .wrap').classList.add('close');

	      setTimeout(function () {
	        return _elem.style.display = 'none';
	      }, 500);
	    });
	  }

	  function htmlReplacerShopModal(data) {
	    var result = {
	      images: '',
	      text: ''
	    };

	    var _obj = {
	      logo: data.custom_fields['wpcf-logo'][0],
	      number: data.custom_fields['wpcf-number'][0],
	      //site: data.custom_fields['wpcf-site'][0],
	      loc: data.custom_fields['wpcf-location'][0],
	      content: data.custom_fields['wpcf-content'][0],
	      photos: data.custom_fields['wpcf-photos_obj']
	    };

	    result.images = '<h3>' + data.title + '</h3>\n      <div style="background: url(\'' + _obj.logo + '\') no-repeat center center; background-size: 80%;" class="thumbnail">' + checkVideo(_obj.video, data) + '</div>\n      <div class="slider">\n        <div class="flexslider">\n          <ul class="slides">';
	    _obj.photos.forEach(function (elem, num) {
	      result.images += '\n          <li>\n            <a href="' + elem + '" class="fancybox" rel="gallery1">\n              <div style="background: url(\'' + elem + '\') no-repeat center center; background-size: cover;" class="image"></div>\n            </a>\n          </li>';
	    });

	    result.images += '</ul>\n        </div>\n      </div>';
	    result.text = '<h3>' + data.title + '</h3>\n        <div class="contacts_shop">\n          <div class="number">\n            <div class="icon"></div><span>' + _obj.number + '</span>\n          </div>' + checkSite(_obj, data) + '\n          <div class="location">\n            <div class="icon"></div><span>' + _obj.loc + '</span>\n          </div>\n        </div>\n        <p class="text_content">' + _obj.content + '</p>\n      </div>';

	    return result;
	  }

	  function sliderUpdate() {

	    $('.flexslider').flexslider({
	      animation: "slide",
	      animationLoop: false,
	      itemWidth: 60,
	      itemMargin: 5,
	      prevText: " ",
	      nextText: " "
	    });
	  }

	  function scrollUpdate() {
	    $(".text_content").mCustomScrollbar({
	      autoHideScrollbar: true,
	      theme: 'dark'
	    });
	  }

	  function fancyboxUpdate() {
	    $(".modal_shop .fancybox").click(function () {
	      $(".modal_shop .fancybox").fancybox({
	        maxWidth: 800,
	        maxHeight: 800,
	        fitToView: false,
	        width: '80%',
	        height: '80%',
	        autoSize: false,
	        closeClick: false,
	        openEffect: 'fade',
	        closeEffect: 'fade'
	      });
	    });
	  }

	  function checkVideo(elem, data) {
	    var result = '';

	    if ('wpcf-cont_video' in data.custom_fields) {
	      result = '\n        <a href="' + data.custom_fields['wpcf-cont_video'][0] + '" class="fancybox fancybox.iframe">\n          <div class="play"></div>\n        </a>\n      ';
	    }

	    return result;
	  }

	  function checkSite(elem, data) {
	    var result = '';

	    if ('wpcf-site' in data.custom_fields) {
	      result = '\n      <a href="' + data.custom_fields['wpcf-site'] + '" target="_blank" class="site">\n        <div class="icon"></div><span> \u0421\u0430\u0439\u0442: ' + data.title + '</span></a>\n      ';
	    }

	    return result;
	  }
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (window.cafe === true) {

	    // Обработка всех миниатюр магазинов
	    [].concat(_toConsumableArray(document.querySelectorAll('.shops_cont .shop'))).forEach(function (elem) {
	      elem.addEventListener('click', function () {
	        // Находим модальное окно в DOM и делаем его видимым
	        var _modal = document.querySelector('.modal_shop');
	        _modal.style.display = 'block';

	        setTimeout(function () {
	          return _modal.classList.remove('close');
	        }, 100);
	        // Делаем запрос на сервер, по атрибуту магазина
	        $.get('http://saryarka.com/?p=' + elem.dataset.id + '&json=1', function (data) {
	          var _obj = htmlReplacerShopModal(data.post);

	          document.querySelector('.modal_shop .wrap .images').innerHTML = _obj.images;
	          document.querySelector('.modal_shop .wrap .text').innerHTML = _obj.text;

	          setTimeout(function () {

	            // Обновляем слайдер
	            sliderUpdate();
	            scrollUpdate();
	            fancyboxUpdate();
	            document.querySelector('.modal_shop .wrap').classList.remove('close');
	          }, 100);
	        });
	      });
	    });

	    document.querySelector('.modal_shop .wrap .closer').addEventListener('click', function () {
	      var _elem = document.querySelector('.modal_shop');

	      _elem.classList.add('close');
	      document.querySelector('.modal_shop .wrap').classList.add('close');

	      setTimeout(function () {
	        return _elem.style.display = 'none';
	      }, 500);
	    });
	  }

	  function htmlReplacerShopModal(data) {
	    var result = {
	      images: '',
	      text: ''
	    };

	    var _obj = {
	      logo: data.custom_fields['wpcf-logo'][0],
	      number: data.custom_fields['wpcf-number'][0],
	      //site: data.custom_fields['wpcf-site'][0],
	      loc: data.custom_fields['wpcf-location'][0],
	      content: data.custom_fields['wpcf-content'][0],
	      photos: data.custom_fields['wpcf-photos_obj']
	    };

	    result.images = '<h3>' + data.title + '</h3>\n      <div style="background: url(\'' + _obj.logo + '\') no-repeat center center; background-size: 80%;" class="thumbnail">' + checkVideo(_obj.video, data) + '</div>\n      <div class="slider">\n        <div class="flexslider">\n          <ul class="slides">';
	    _obj.photos.forEach(function (elem, num) {
	      result.images += '\n          <li>\n            <a href="' + elem + '" class="fancybox" rel="gallery1">\n              <div style="background: url(\'' + elem + '\') no-repeat center center; background-size: cover;" class="image"></div>\n            </a>\n          </li>';
	    });

	    result.images += '</ul>\n        </div>\n      </div>';
	    result.text = '<h3>' + data.title + '</h3>\n        <div class="contacts_shop">\n          <div class="number">\n            <div class="icon"></div><span>' + _obj.number + '</span>\n          </div>' + checkSite(_obj, data) + '\n          <div class="location">\n            <div class="icon"></div><span>' + _obj.loc + '</span>\n          </div>\n        </div>\n        <p class="text_content">' + _obj.content + '</p>\n      </div>';

	    return result;
	  }

	  function sliderUpdate() {

	    $('.flexslider').flexslider({
	      animation: "slide",
	      animationLoop: false,
	      itemWidth: 60,
	      itemMargin: 5,
	      prevText: " ",
	      nextText: " "
	    });
	  }

	  function scrollUpdate() {
	    $(".text_content").mCustomScrollbar({
	      autoHideScrollbar: true,
	      theme: 'dark'
	    });
	  }

	  function fancyboxUpdate() {
	    $(".modal_shop .fancybox").click(function () {
	      $(".modal_shop .fancybox").fancybox({
	        maxWidth: 800,
	        maxHeight: 800,
	        fitToView: false,
	        width: '80%',
	        height: '80%',
	        autoSize: false,
	        closeClick: false,
	        openEffect: 'fade',
	        closeEffect: 'fade'
	      });
	    });
	  }

	  function checkVideo(elem, data) {
	    var result = '';

	    if ('wpcf-cont_video' in data.custom_fields) {
	      result = '\n        <a href="' + data.custom_fields['wpcf-cont_video'][0] + '" class="fancybox fancybox.iframe">\n          <div class="play"></div>\n        </a>\n      ';
	    }

	    return result;
	  }

	  function checkSite(elem, data) {
	    var result = '';

	    if ('wpcf-site' in data.custom_fields) {
	      result = '\n      <a href="' + data.custom_fields['wpcf-site'] + '" target="_blank" class="site">\n        <div class="icon"></div><span> \u0421\u0430\u0439\u0442: ' + data.title + '</span></a>\n      ';
	    }

	    return result;
	  }
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (window.stock === true) {
	    // closer модального окна
	    document.querySelector('.modal_shop .wrap .closer').addEventListener('click', function () {
	      var _elem = document.querySelector('.modal_shop');

	      _elem.classList.add('close');
	      document.querySelector('.modal_shop .wrap').classList.add('close');

	      setTimeout(function () {
	        return _elem.style.display = 'none';
	      }, 500);
	    });

	    var search_elems = window.stock_main === true ? '.stocks .stock_elem' : '.stocks_page .shops_cont .stock_elem';

	    // Обработка всех миниатюр акций
	    [].concat(_toConsumableArray(document.querySelectorAll(search_elems))).forEach(function (elem) {
	      elem.addEventListener('click', function () {
	        // Находим модальное окно в DOM и делаем его видимым
	        var _modal = document.querySelector('.modal_shop');
	        _modal.style.display = 'block';

	        setTimeout(function () {
	          return _modal.classList.remove('close');
	        }, 100);

	        // Делаем запрос на сервер, по атрибуту магазина
	        $.get('http://saryarka.com/?p=' + elem.dataset.id + '&json=1', function (data) {
	          var _obj = htmlReplacerStockModal(data.post);

	          document.querySelector('.modal_shop .wrap .images').innerHTML = _obj.images;
	          document.querySelector('.modal_shop .wrap .text').innerHTML = _obj.text;

	          setTimeout(function () {
	            return document.querySelector('.modal_shop .wrap').classList.remove('close');
	          }, 100);
	        });
	      });
	    });
	  }
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function htmlReplacerStockModal(data) {
	  var result = {
	    images: '',
	    text: ''
	  };

	  var _obj = {
	    picture: data.custom_fields['wpcf-stock_picture'][0],
	    content: data.custom_fields['wpcf-content_stock'][0]
	  };

	  result.images = '\n    <h3>' + data.title + '</h3>\n    <div style="background: url(\'' + _obj.picture + '\') no-repeat center center; background-size: contain;" class="thumbnail">' + checkVideo(_obj.video, data) + '</div>';

	  result.text = '\n    <h3>' + data.title + '</h3>\n    <p class="text_content">' + _obj.content + '</p>';

	  return result;
	}

	function checkVideo(elem, data) {
	  var result = '';
	  if ('wpcf-cont_video' in data.custom_fields) {
	    result = '\n      <a href="' + data.custom_fields['wpcf-cont_video'][0] + '" class="fancybox fancybox.iframe">\n        <div class="play"></div>\n      </a>\n    ';
	  }

	  return result;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  if (window.service === true) {

	    // Обработка всех миниатюр магазинов
	    [].concat(_toConsumableArray(document.querySelectorAll('.shops_cont .shop'))).forEach(function (elem) {
	      elem.addEventListener('click', function () {
	        // Находим модальное окно в DOM и делаем его видимым
	        var _modal = document.querySelector('.modal_shop');
	        _modal.style.display = 'block';

	        setTimeout(function () {
	          return _modal.classList.remove('close');
	        }, 100);

	        // Делаем запрос на сервер, по атрибуту магазина
	        $.get('http://saryarka.com/?p=' + elem.dataset.id + '&json=1', function (data) {
	          var _obj = htmlReplacerShopModal(data.post);

	          document.querySelector('.modal_shop .wrap .images').innerHTML = _obj.images;
	          document.querySelector('.modal_shop .wrap .text').innerHTML = _obj.text;

	          setTimeout(function () {

	            // Обновляем слайдер
	            sliderUpdate();
	            scrollUpdate();
	            fancyboxUpdate();
	            document.querySelector('.modal_shop .wrap').classList.remove('close');
	          }, 100);
	        });
	      });
	    });

	    document.querySelector('.modal_shop .wrap .closer').addEventListener('click', function () {
	      var _elem = document.querySelector('.modal_shop');

	      _elem.classList.add('close');
	      document.querySelector('.modal_shop .wrap').classList.add('close');

	      setTimeout(function () {
	        return _elem.style.display = 'none';
	      }, 500);
	    });
	  }

	  function htmlReplacerShopModal(data) {
	    var result = {
	      images: '',
	      text: ''
	    };

	    var _obj = {
	      logo: data.custom_fields['wpcf-logo'][0],
	      number: data.custom_fields['wpcf-number'][0],
	      //site: data.custom_fields['wpcf-site'][0],
	      loc: data.custom_fields['wpcf-location'][0],
	      content: data.custom_fields['wpcf-content'][0]
	    };

	    result.images = '<h3>' + data.title + '</h3>\n        <div style="background: url(\'' + _obj.logo + '\') no-repeat center center; background-size: 80%;" class="thumbnail">' + checkVideo(_obj.video, data) + '</div>';

	    if ('wpcf-photos_obj' in data.custom_fields && data.custom_fields['wpcf-photos_obj'][0] != '') {
	      _obj.photos = data.custom_fields['wpcf-photos_obj'];
	      result.images = '<h3>' + data.title + '</h3>\n          <div style="background: url(\'' + data.custom_fields["wpcf-logo"][0] + '\') no-repeat center center; background-size: 80%;" class="thumbnail">' + checkVideo(_obj.video, data) + '</div>\n          <div class="slider">\n            <div class="flexslider">\n              <ul class="slides">';
	      _obj.photos.forEach(function (elem, num) {
	        result.images += '\n              <li>\n                <a href="' + elem + '" class="fancybox" rel="gallery1">\n                  <div style="background: url(\'' + elem + '\') no-repeat center center; background-size: cover;" class="image"></div>\n                </a>\n              </li>';
	      });

	      result.images += '</ul>\n            </div>\n          </div>';
	    } else {
	      result.images += ' ';
	    }

	    result.text = '<h3>' + data.title + '</h3>\n          <div class="contacts_shop">\n            <div class="number">\n              <div class="icon"></div><span>' + _obj.number + '</span>\n            </div>' + checkSite(_obj, data) + '\n            <div class="location">\n              <div class="icon"></div><span>' + _obj.loc + '</span>\n            </div>\n          </div>\n          <p class="text_content">' + _obj.content + '</p>\n        </div>';

	    return result;
	  }

	  function sliderUpdate() {

	    $('.flexslider').flexslider({
	      animation: "slide",
	      animationLoop: false,
	      itemWidth: 60,
	      itemMargin: 5,
	      prevText: " ",
	      nextText: " "
	    });
	  }

	  function scrollUpdate() {
	    $(".text_content").mCustomScrollbar({
	      autoHideScrollbar: true,
	      theme: 'dark'
	    });
	  }

	  function fancyboxUpdate() {
	    $(".modal_shop .fancybox").click(function () {
	      $(".modal_shop .fancybox").fancybox({
	        maxWidth: 800,
	        maxHeight: 800,
	        fitToView: false,
	        width: '80%',
	        height: '80%',
	        autoSize: false,
	        closeClick: false,
	        openEffect: 'fade',
	        closeEffect: 'fade'
	      });
	    });
	  }

	  function checkVideo(elem, data) {
	    var result = '';

	    if ('wpcf-cont_video' in data.custom_fields) {
	      result = '\n          <a href="' + data.custom_fields['wpcf-cont_video'][0] + '" class="fancybox fancybox.iframe">\n            <div class="play"></div>\n          </a>\n        ';
	    }

	    return result;
	  }

	  function checkSite(elem, data) {
	    var result = '';

	    if ('wpcf-site' in data.custom_fields) {
	      result = '\n        <a href="' + data.custom_fields['wpcf-site'] + '" target="_blank" class="site">\n          <div class="icon"></div><span> \u0421\u0430\u0439\u0442: ' + data.title + '</span></a>\n        ';
	    }

	    return result;
	  }
	};

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	;

/***/ }
/******/ ]);