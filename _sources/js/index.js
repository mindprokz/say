import Filters from './filters.js';
import shops from './page_script/shops.js';
import cafe from './page_script/rest.js';
import stocks from './page_script/stocks.js';
import service from './page_script/service.js';

$(document).ready( function () {
  $(".navigation .wrap").mCustomScrollbar({
    autoHideScrollbar: true,
  });
});

$(".fancybox").click(function() {
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
[...document.querySelectorAll('.opener')].forEach( (elem, index, arr) => {
  elem.addEventListener('click', function () {
    let list = this.parentNode.nextElementSibling;

    if (list.classList.contains('open')) {
      list.classList.add('close');
      list.classList.remove('open');
    } else {
        list.classList.remove('close');
        list.classList.add('open');
    }
  });
});

document.querySelector('.header_cont .time_work').addEventListener('click', () => {
  document.querySelector('.time_work_modal').classList.remove('close');
});

document.querySelector('.navigation .time').addEventListener('click', () => {
  document.querySelector('.time_work_modal').classList.remove('close');
});

document.querySelector('.time_work_modal .closer').addEventListener('click', () => {
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
  	center: new google.maps.LatLng(51.138668,71.474600),
  	disableDefaultUI: true
  };

  var map = new google.maps.Map(document.querySelector('.contact .map'), mapOptions);

  var marker = new google.maps.Marker({
  	position: new google.maps.LatLng(51.138668,71.474600),
  	map: map,
  	title: 'Филиал в Астане',
  	icon : 'img/maps_arrow.png'
  });
}

shops();
cafe();
stocks();
service();
