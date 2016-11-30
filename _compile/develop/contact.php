
<?php /*
 Template Name: Контакты
*/?><!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="Keywords" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=480px, maximum-scale=1">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri();?>/img/favicon/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri();?>/img/favicon/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri();?>/img/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri();?>/images/favicon/apple-touch-icon-114x114.png">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/style.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/jquery.mcustomscrollbar/3.0.6/jquery.mCustomScrollbar.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.6.3/flexslider.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/libs/fancybox/source/jquery.fancybox.css">
  </head>
  <body>
    <section class="navigation">
      <div class="skew"></div>
      <div class="fill_skew"></div>
      <div class="wrap"><a href="http://saryarka.com/" class="logo"></a>
        <div class="tel">+7 (7172) <b>515 606</b></div>
        <div class="time"><b>Время работы</b>: 10:00 - 22:00</div>
        <div class="geo">г. Астана, пр. Туран, 24</div>
        <div class="burger menu"></div>
        <nav class="close">
          <div class="wrap_menu">
            <h3><span class="opener"></span><a href="http://saryarka.com/shops">Магазины</a></h3>
            <ul id="shops_nav" class="filters close">
              <li><a href="http://saryarka.com/shops#Аксессуары" data-attr="Аксессуары"><span class="circle">⚬</span><span>Аксессуары</span></a></li>
              <li><a href="http://saryarka.com/shops#Аптека" data-attr="Аптека"><span class="circle">⚬</span><span>Аптека</span></a></li>
              <li><a href="http://saryarka.com/shops#Косметика" data-attr="Косметика"><span class="circle">⚬</span><span>Косметика</span></a></li>
              <li><a href="http://saryarka.com/shops#Одежда мужская" data-attr="Одежда мужская"><span class="circle">⚬</span><span>Одежда мужская</span></a></li>
              <li><a href="http://saryarka.com/shops#Одежда женская" data-attr="Одежда женская"><span class="circle">⚬</span><span>Одежда женская</span></a></li>
              <li><a href="http://saryarka.com/shops#Одежда детская" data-attr="Одежда детская"><span class="circle">⚬</span><span>Одежда детская</span></a></li>
              <li><a href="http://saryarka.com/shops#Обувь" data-attr="Обувь"><span class="circle">⚬</span><span>Обувь</span></a></li>
              <li><a href="http://saryarka.com/shops#Oптика" data-attr="Oптика"><span class="circle">⚬</span><span>Oптика</span></a></li>
              <li><a href="http://saryarka.com/shops#Сувениры" data-attr="Сувениры"><span class="circle">⚬</span><span>Сувениры</span></a></li>
              <li><a href="http://saryarka.com/shops#Спортивная одежда" data-attr="Спортивная одежда"><span class="circle">⚬</span><span>Спортивная одежда</span></a></li>
              <li><a href="http://saryarka.com/shops#Супермаркет" data-attr="Супермаркет"><span class="circle">⚬</span><span>Супермаркет</span></a></li>
              <li><a href="http://saryarka.com/shops#Товары для дома" data-attr="Товары для дома"><span class="circle">⚬</span><span>Товары для дома</span></a></li>
              <li><a href="http://saryarka.com/shops#Ювелирные изделия и часы" data-attr="Ювелирные изделия и часы"><span class="circle">⚬</span><span>Ювелирные изделия и часы</span></a></li>
              <li><a href="http://saryarka.com/shops#Белье мужское и женское" data-attr="Белье мужское и женское"><span class="circle">⚬</span><span>Белье мужское и женское</span></a></li>
              <li><a href="http://saryarka.com/shops#Книги" data-attr="Книги"><span class="circle">⚬</span><span>Книги</span></a></li>
              <li><a href="http://saryarka.com/shops#Игрушки" data-attr="Игрушки"><span class="circle">⚬</span><span>Игрушки</span></a></li>
            </ul>
            <h3><span class="opener"></span><a href="http://saryarka.com/eatplace/">Кафе бары рестораны</a></h3>
            <ul id="rest_nav" class="filters close">
              <li><a href="http://saryarka.com/eatplace/#Рестораны" data-attr="Рестораны"><span class="circle">⚬</span><span>Рестораны</span></a></li>
              <li><a href="http://saryarka.com/eatplace/#Кафе" data-attr="Кафе"><span class="circle">⚬</span><span>Кафе</span></a></li>
              <li><a href="http://saryarka.com/eatplace/#Фуд-корт" data-attr="Фуд-корт"><span class="circle">⚬</span><span>Фуд-корт</span></a></li>
              <li><a href="http://saryarka.com/eatplace/#Снеки и сладости" data-attr="Снеки и сладости"><span class="circle">⚬</span><span>Снеки и сладости</span></a></li>
            </ul>
            <h3><span class="opener"></span><a href="http://saryarka.com/service/">Услуги и развлечения</a></h3>
            <ul id="service_nav" class="filters close">
              <li><a href="http://saryarka.com/service/#Кинотеатр" data-attr="Кинотеатр"><span class="circle">⚬</span><span>Кинотеатр</span></a></li>
              <li><a href="http://saryarka.com/service/#Мимиория" data-attr="Мимиория"><span class="circle">⚬</span><span>Мимиория</span></a></li>
              <li><a href="http://saryarka.com/service/#Шиномонтаж" data-attr="Шиномонтаж"><span class="circle">⚬</span><span>Шиномонтаж</span></a></li>
              <li><a href="http://saryarka.com/service/#Автомойка" data-attr="Автомойка"><span class="circle">⚬</span><span>Автомойка</span></a></li>
              <li><a href="http://saryarka.com/service/#Банк" data-attr="Банк"><span class="circle">⚬</span><span>Банк</span></a></li>
              <li><a href="http://saryarka.com/service/#Студия танца" data-attr="Студия танца"><span class="circle">⚬</span><span>Студия танца</span></a></li>
              <li><a href="http://saryarka.com/service/#Автосервис" data-attr="Автосервис"><span class="circle">⚬</span><span>Автосервис</span></a></li>
              <li><a href="http://saryarka.com/service/#Банкоматы и терминалы" data-attr="Банкоматы и терминалы"><span class="circle">⚬</span><span>Банкоматы и терминалы</span></a></li>
              <li><a href="http://saryarka.com/service/#Детский паровозик" data-attr="Детский паровозик"><span class="circle">⚬</span><span>Детский паровозик</span></a></li>
              <li><a href="http://saryarka.com/service/#Салон красоты" data-attr="Салон красоты"><span class="circle">⚬</span><span>Салон красоты</span></a></li>
              <li><a href="http://saryarka.com/service/#Детская парикмахерская" data-attr="Детская парикмахерская"><span class="circle">⚬</span><span>Детская парикмахерская</span></a></li>
              <li><a href="http://saryarka.com/service/#Салон чистки обуви" data-attr="Салон чистки обуви"><span class="circle">⚬</span><span>Салон чистки обуви</span></a></li>
              <li><a href="http://saryarka.com/service/#Обмен валюты" data-attr="Обмен валюты"><span class="circle">⚬</span><span>Обмен валюты</span></a></li>
              <li><a href="http://saryarka.com/service/#Авиаагентство" data-attr="Авиаагентство"><span class="circle">⚬</span><span>Авиаагентство</span></a></li>
              <li><a href="http://saryarka.com/service/#Химчистка" data-attr="Химчистка"><span class="circle">⚬</span><span>Химчистка</span></a></li>
              <li><a href="http://saryarka.com/service/#Фотосалон" data-attr="Фотосалон"><span class="circle">⚬</span><span>Фотосалон</span></a></li>
              <li><a href="http://saryarka.com/service/#Контактный Зоопарк" data-attr="Контактный Зоопарк"><span class="circle">⚬</span><span>Контактный Зоопарк</span></a></li>
            </ul><a href="http://saryarka.com/stocks">
              <h3>Акции</h3></a>
            <h3><a href="http://saryarka.com/contact">Контакты</a></h3>
          </div>
        </nav>
        <div class="copyright"><span>© M-Line Property Management</span><br><a href="http://mindpro-group.com/" target="_blank">Сделано в mindpro-group.com</a></div>
      </div>
    </section>
    <section class="contact">
      <section class="header_cont">
        <div class="number">+7 (7172) <b>515 606</b></div>
        <div class="time_work">
          <div class="icon"></div>
          <p><b>Время работы:</b> 10:00 - 22:00 <span>▼</span></p>
        </div>
        <div class="geo">
          <div class="icon"></div>
          <p>г. Астана, пр. Туран, 24</p>
        </div>
        <div class="social"><a href="https://www.instagram.com/trcsaryarka/" target="_blank">
            <div class="inst"></div></a><a href="https://www.facebook.com/saryarka.admin?fref=ts" target="_blank">
            <div class="facebook"></div></a>
          <!--.vk-->
          <!--.twitter-->
        </div>
      </section>
      <div class="wrap">
        <div class="map"></div>
        <div class="feedback">
          <h3>ТРЦ «Сарыарка»</h3>
          <div class="adress">Адрес: 010000, г. Астана Республика Казахстан<br>Торгово-развлекательный центр «Сарыарка» пр. Туран, 24  </div>
          <h4>Офис Администрации Торгово-развлекательного центра  </h4>
          <div class="tel">Тел.: +7 (7172) 515 606  </div>
          <div class="fax">Факс: +7 (7172) 515 599  </div>
          <div class="mail">Электронная почта: <a href='mailto:info@saryarka.com'>info@saryarka.com</a></div>
          <div class="social">
            <div class="wraper"><a href="https://www.instagram.com/trcsaryarka/" target="_blank">
                <div class="inst"></div></a><a href="https://www.facebook.com/saryarka.admin?fref=ts" target="_blank">
                <div class="facebook"></div></a>
              <!--.vk-->
              <!--.twitter-->
            </div>
          </div>
          <form>
            <h2>Остались вопросы?</h2>
            <input type="text" placeholder="Имя">
            <input type="tel" placeholder="Телефон">
            <input type="email" placeholder=" E-mail">
            <textarea placeholder="Сообщение"></textarea>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </section>
    <script src="http://maps.google.com/maps/api/js?key=AIzaSyDkS0y-j9aq7GAuQPJJy5uhEiVKIWBcTM4"></script>
    <script>var contact = true</script>
    <section class="time_work_modal close">
      <div class="closer"></div>
      <h3>Время работы:</h3>
      <ul>
        <li>
          <h4>Магазины</h4>
          <h5>(1,2,3 этажи) 10:00 - 22:00 </h5>
        </li>
        <li>
          <h4>Супермаркет «5 минут»</h4>
          <h5>(1 этаж) 09:00 - 23:00</h5>
        </li>
        <li>
          <h4>Закусочные</h4>
          <h5>(3 этаж) 10:00 - 24:00</h5>
        </li>
        <li>
          <h4>Рестораны</h4>
          <h5> (1,3 этажи) 12:00 - 24:00 выходные до 02:00 </h5>
        </li>
        <li>
          <h4>Гардероб</h4>
          <h5>(2 этаж) 09:00 - 22:00</h5>
        </li>
        <li>
          <h4>Подземный паркинг</h4>
          <h5>платный круглосуточный</h5>
        </li>
        <li>
          <h4>Наземный паркинг</h4>
          <h5>бесплатный</h5>
        </li>
        <li>
          <h4>Кинотеатр</h4>
          <h5>(3 этаж) 10:00 - 03:00</h5>
        </li>
      </ul>
    </section>
    <script src="<?php echo get_template_directory_uri();?>/libs/jquery/dist/jquery.min.js"></script>
    <script src="//cdn.jsdelivr.net/jquery.mcustomscrollbar/3.0.6/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.6.3/jquery.flexslider.min.js"></script>
    <script src="<?php echo get_template_directory_uri();?>/libs/fancybox/source/jquery.fancybox.pack.js"></script>
    <script src="<?php echo get_template_directory_uri();?>/bundle.js"></script>
  </body>
</html>