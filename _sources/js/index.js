import SendFunc from './sendForm.js';
import FloatMenu from './floatMenu.js';
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
    document.querySelector('.navigation nav').classList.remove('close')
  } else {
      this.classList.remove('closer');
      this.classList.add('menu');
      document.querySelector('.navigation nav').classList.add('close')
  }
});

// Открытие пунктов меню на десктопе
[...document.querySelectorAll('.opener')].forEach( (elem, index, arr) => {
  elem.addEventListener('click', function () {
    let list = this.parentNode.nextElementSibling;

    if (list.classList.contains('open')) {
      list.classList.add('close')
      list.classList.remove('open');
    } else {
        list.classList.remove('close')
        list.classList.add('open');
    }
  });
});
