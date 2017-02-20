export default function (){
  if (window.service === true) {

    // Обработка всех миниатюр магазинов
    [...document.querySelectorAll('.shops_cont .shop')].forEach( (elem) => {
      elem.addEventListener('click', () => {
        // Находим модальное окно в DOM и делаем его видимым
        var _modal = document.querySelector('.modal_shop')
          _modal.style.display = 'block';

        setTimeout( () => _modal.classList.remove('close'), 100 );

        // Делаем запрос на сервер, по атрибуту магазина
        $.get('http://saryarka.com/?p=' + elem.dataset.id + '&json=1', function (data) {
          var _obj = htmlReplacerShopModal(data.post);

          document.querySelector('.modal_shop .wrap .images').innerHTML = _obj.images;
          document.querySelector('.modal_shop .wrap .text').innerHTML = _obj.text;

          setTimeout ( () => {

            // Обновляем слайдер
            sliderUpdate();
            scrollUpdate();
            fancyboxUpdate();
            document.querySelector('.modal_shop .wrap').classList.remove('close');
          }, 100);
        });

      });
    });

    document.querySelector('.modal_shop .wrap .closer').addEventListener('click', () => {
      var _elem = document.querySelector('.modal_shop');

      _elem.classList.add('close');
      document.querySelector('.modal_shop .wrap').classList.add('close');

      setTimeout(() => _elem.style.display = 'none', 500);
    });

    document.querySelector('.modal_shop').addEventListener('click', event => {
      var _elem = document.querySelector('.modal_shop');
      var target = event.target || event.srcElement;

      if (_elem === target) {
        _elem.classList.add('close');
        document.querySelector('.modal_shop .wrap').classList.add('close');

        setTimeout(() => _elem.style.display = 'none', 500);
      }
    });
  }



    function htmlReplacerShopModal(data) {
      var result = {
        images: '',
        text: ''
      }

      var _obj = {
        logo: data.custom_fields['wpcf-logo'][0],
        number: data.custom_fields['wpcf-number'][0],
        //site: data.custom_fields['wpcf-site'][0],
        loc: data.custom_fields['wpcf-location'][0],
        content: data.custom_fields['wpcf-content'][0],
        //photos: data.custom_fields['wpcf-photos_obj'],
        //video: data.custom_fields['wpcf-_video'][0]
      }

      result.images = `<h3>${data.title}</h3>
        <div style="background: url('${_obj.logo}') no-repeat center center; background-size: 80%;" class="thumbnail">${checkVideo(_obj.video, data)}</div>`

      if ('wpcf-photos_obj' in data.custom_fields && data.custom_fields['wpcf-photos_obj'][0] != '') {
        _obj.photos = data.custom_fields['wpcf-photos_obj'];
        result.images = `<h3>${data.title}</h3>
          <div style="background: url('${data.custom_fields["wpcf-logo"][0]}') no-repeat center center; background-size: 80%;" class="thumbnail">${checkVideo(_obj.video, data)}</div>
          <div class="slider">
            <div class="flexslider">
              <ul class="slides">`
          _obj.photos.forEach( (elem, num) => {
            result.images += `
              <li>
                <a href="${elem}" class="fancybox" rel="gallery1">
                  <div style="background: url('${elem}') no-repeat center center; background-size: cover;" class="image"></div>
                </a>
              </li>`
          });

          result.images += `</ul>
            </div>
          </div>`;
      } else {
        result.images += ' ';
      }

      result.text = `<h3>${data.title}</h3>
          <div class="contacts_shop">
            <div class="number">
              <div class="icon"></div><span>${_obj.number}</span>
            </div>${checkSite(_obj, data)}
            <div class="location">
              <div class="icon"></div><span>${_obj.loc}</span>
            </div>
          </div>
          <p class="text_content">${_obj.content}</p>
        </div>`;

      return result;
    }

    function sliderUpdate() {

      $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 60,
        itemMargin: 5,
        prevText: " ",
        nextText: " ",
      });
    }

    function scrollUpdate() {
      $(".text_content").mCustomScrollbar({
        autoHideScrollbar: true,
        theme: 'dark'
      });
    }

    function fancyboxUpdate() {
      $(".modal_shop .fancybox").click(function() {
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
        result = `
          <a href="${data.custom_fields['wpcf-cont_video'][0]}" class="fancybox fancybox.iframe">
            <div class="play"></div>
          </a>
        `
      }

      return result
    }

    function checkSite(elem, data) {
      var result = '';

      if ('wpcf-site' in data.custom_fields) {
        result = `
        <a href="${data.custom_fields['wpcf-site']}" target="_blank" class="site">
          <div class="icon"></div><span> Сайт: ${data.title}</span></a>
        `
      }

      return result
    }

};
