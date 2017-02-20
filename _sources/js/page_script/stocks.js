export default function () {
  if (window.stock === true) {
    // closer модального окна
    document.querySelector('.modal_shop .wrap .closer').addEventListener('click', () => {
      var _elem = document.querySelector('.modal_shop');

      _elem.classList.add('close');
      document.querySelector('.modal_shop .wrap').classList.add('close');

      setTimeout(() => _elem.style.display = 'none', 500);
    });

    // closer модального окна
    document.querySelector('.modal_shop').addEventListener('click', event => {
      var _elem = document.querySelector('.modal_shop');
      var target = event.target || event.srcElement;

      if (_elem === target) {
        _elem.classList.add('close');
        document.querySelector('.modal_shop .wrap').classList.add('close');

        setTimeout(() => _elem.style.display = 'none', 500);
      }
    });

      var search_elems = window.stock_main === true ? '.stocks .stock_elem' : '.stocks_page .shops_cont .stock_elem';

      // Обработка всех миниатюр акций
      [...document.querySelectorAll(search_elems)].forEach( (elem) => {
        elem.addEventListener('click', () => {
          // Находим модальное окно в DOM и делаем его видимым
          var _modal = document.querySelector('.modal_shop')
            _modal.style.display = 'block';

          setTimeout( () => _modal.classList.remove('close'), 100 );

          // Делаем запрос на сервер, по атрибуту магазина
          $.get('http://saryarka.com/?p=' + elem.dataset.id + '&json=1', function (data) {
            var _obj = htmlReplacerStockModal(data.post);

            document.querySelector('.modal_shop .wrap .images').innerHTML = _obj.images;
            document.querySelector('.modal_shop .wrap .text').innerHTML = _obj.text;

            setTimeout ( () => document.querySelector('.modal_shop .wrap').classList.remove('close'), 100);
          });

        });
      });
  }
}


function htmlReplacerStockModal(data) {
  var result = {
    images: '',
    text: ''
  }

  var _obj = {
    picture: data.custom_fields['wpcf-stock_picture'][0],
    content: data.custom_fields['wpcf-content_stock'][0],
  }

  result.images = `
    <h3>${data.title}</h3>
    <div style="background: url('${_obj.picture}') no-repeat center center; background-size: contain;" class="thumbnail">${checkVideo(_obj.video, data)}</div>`;

  result.text = `
    <h3>${data.title}</h3>
    <p class="text_content">${_obj.content}</p>`;

  return result;
}

function checkVideo(elem, data) {
  var result = '';
  if ('wpcf-cont_video' in data.custom_fields) {
    result = `
      <a href="${data.custom_fields['wpcf-cont_video'][0]}" class="fancybox fancybox.iframe">
        <div class="play"></div>
      </a>
    `
  }

  return result
}
