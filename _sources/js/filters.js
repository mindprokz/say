export default (function () {
  if (window.shops === true) {
    checkHash();
    [...document.querySelectorAll('#shops_nav li a')].forEach( (el) => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var shop_wrap = document.querySelector('.shop_wrap');
        shop_wrap.style.opacity="0";

        setTimeout(() => {
          shop_wrap.style.display = 'none';
          document.querySelector('.spinner').classList.remove('close');
          setTimeout(() => fulter_elem_shop(this.dataset.attr), 500);
        }, 500);

      });
    });
  } else if (window.cafe === true) {
    checkHash();
    [...document.querySelectorAll('#rest_nav li a')].forEach( (el) => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var shop_wrap = document.querySelector('.shop_wrap');
        shop_wrap.style.opacity="0";

        setTimeout(() => {
          shop_wrap.style.display = 'none';
          document.querySelector('.spinner').classList.remove('close');
          setTimeout(() => filter_elem(this.dataset.attr), 500);
        }, 500);

      });
    });
  } else if (window.service === true) {
    checkHash();
    [...document.querySelectorAll('#service_nav li a')].forEach( (el) => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var shop_wrap = document.querySelector('.shop_wrap');
        shop_wrap.style.opacity="0";

        setTimeout(() => {
          shop_wrap.style.display = 'none';
          document.querySelector('.spinner').classList.remove('close');
          setTimeout(() => filter_elem(this.dataset.attr), 500);
        }, 500);

      });
    });
  }
})();

function fulter_elem_shop(attr) {
  changeHeaderForHash(attr);
  location.hash = attr;

  let reg = new RegExp(attr, 'i');
  [...document.querySelectorAll('.shops .shops_cont .shop')].forEach( (el) => {
    el.style.display = 'block';

    if ( !reg.test(el.dataset.filter) ) {
      el.style.display = 'none';
    }
  });

  document.querySelector('.spinner').classList.add('close');

  var shop_wrap = document.querySelector('.shop_wrap');
  shop_wrap.style.display = 'block';
  setTimeout(() => shop_wrap.style.opacity="1", 100);
}

function filter_elem(attr) {
  changeHeaderForHash(attr);
  location.hash = attr;
  [...document.querySelectorAll('.shops .shops_cont .shop')].forEach( (el) => {
    el.style.display = 'block';

    if ( el.dataset.filter !== attr ) {
      el.style.display = 'none';
    }
  });

  document.querySelector('.spinner').classList.add('close');

  var shop_wrap = document.querySelector('.shop_wrap');
  shop_wrap.style.display = 'block';
  setTimeout(() => shop_wrap.style.opacity="1", 100);
}

function checkHash() {
  if (location.hash) {
    filter_elem(location.hash.slice(1))
  }
}

function changeHeaderForHash(hash) {
  document.querySelector('.shops header span').textContent = '— ' + hash;
}
