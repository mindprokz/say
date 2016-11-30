<!DOCTYPE html>
<html>
<head>
	<?php if($browser == 'iphone'){ ?>
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
	<?php } ?>
	<meta charset="<?php bloginfo('charset');?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php wp_title(); ?></title>
	<?php wp_head(); ?>	
	<link rel="shortcut icon" type="image/x-icon" href="<?php bloginfo('template_directory'); ?>/favicon.png">
	<link rel="apple-touch-icon" href="<?php bloginfo('template_directory'); ?>/favicon.png" />	
	<script type="text/javascript">
	$(function($) {$.localScroll({duration: 1000, hash: false, margin:true, offset: {top: -40} }); });
	</script>
	<script>
		$(document).ready(function(){
		        $(window).scroll(function(){
		            var bo = $("body").scrollTop();
					if ( bo > 0 ) { $(".fix-panel").addClass( "menu-fixed" ); } else { $(".fix-panel").removeClass( "menu-fixed" ); };
		        })
		    })
	</script>
<script type="text/javascript" src="//vk.com/js/api/openapi.js?116"></script>
<script type="text/javascript">
  VK.init({apiId: 4960321, onlyWidgets: true});
</script>
</head>
<body <?php body_class(''); ?>>
	<div class="wrapper">
		<div class="fix-panel">
		<!-- Mobile Navigation -->
		<div class="mobile-navigator">
		<div class="block">
			<a href="<?php echo home_url(); ?>" class="logo left"><img src="<?php bloginfo('template_directory'); ?>/img/logo.png" alt="<?php bloginfo('name');?>"></a>
			<a class="mobmimg" href="#" onclick="block('#mobile-menu'); return false"><img src="<?php bloginfo('template_directory'); ?>/img/mobile-menu.png" alt=""></a>
		</div>
		<div id="mobile-menu" style="display:none"> 
			<?php wp_nav_menu(array('theme_location'=>'main-menu','menu_class'=>'main-mobile','container'=>false)); ?>
		</div> 
		</div>
		<!-- Mobile Navigation -->		
			<div class="header" id="home">
				<div class="container">
					<a href="<?php echo home_url(); ?>" class="logo left"><img src="<?php bloginfo('template_directory'); ?>/img/logo.png" alt="<?php bloginfo('name');?>"></a>
					<div class="adress left">
						<p>г.Астана Тауельсiздiк 34 ТРЦ Астана</p>
						<p>Молл 4 этаж 26 кабинет</p>
					</div>
					<div class="number right">
						<p>+7(7172)46-95-61</p>
						<p>+77070600703</p>
<p></p>
					</div>
				</div>
			</div>
			<div class="menu-panel">
				<div class="container">
					<?php wp_nav_menu(array('theme_location'=>'main-menu','menu_class'=>'main-menu','container'=>false)); ?>
				</div>
			</div>
		</div>
		<div class="main-panel">
			<div class="container">
				<div class="lambo left"></div>
				<div class="about left">
					<div class="title">Наш автоломбард <p>гарантирует:</p></div>
					<li>Одобрение кредита за 30 минут.</li>
					<li>Полная сохранность автомобиля.</li>
					<li>Деньги любым удобным для Вас способом.</li>
				</div>
				<div class="form right">
					<div class="title">Калькулятор</div>
						<div class="tabs">
						    <input id="tab1" type="radio" name="tabs" checked>
						    <label for="tab1" title="Без права вождения">Без права вождения</label>
						 
						    <input id="tab2" type="radio" name="tabs">
						    <label for="tab2" title="С правом вождения">С правом вождения</label>
						 
						    <section id="content1">
						        <p>
									<div class="block line">
										<span class="name">Сумма кредита:</span>
										<div class="pc-form">
											<div id="polz1"></div>
											<span id="respolz1"></span>
										</div>
										<div class="block mobform">
											<input type="number" placeholder="Сумма кредита" id="summ1" class="form-inp" value="500000">
										</div>
									</div>
									<div class="block line">
										<span class="name">Срок кредита:</span>
										<div class="pc-form">
											<div id="polz2"></div>
											<span id="respolz2"></span>
										</div>
										<div class="block mobform">
											<input type="number" placeholder="Срок кредита" id="srok1" class="form-inp" value="1">
										</div>
									</div>
									<a href="javascript:void(0)" id="result-btn" class="res-btn">Посчитать</a>
									<div class="block">
										<div class="col-2 left">
											<span>Процент: </span><span id="plata">10%</span>			
										</div>
										<div class="col-2 left">	
											<span>Каждый месяц: <span id="month">50000</span></span>
										</div>
									</div>
			        			</p>
						    </section>  
						    <section id="content2">
						        <p>
									<div class="block line">
										<span class="name">Сумма кредита:</span>
										<div class="pc-form">
											<div id="polz3"></div>
											<span id="respolz3"></span>
										</div>
										<div class="block mobform">
											<input type="number" placeholder="Сумма кредита" id="summ2" class="form-inp" value="500000">
										</div>
									</div>
									<div class="block line">
										<span class="name">Срок кредита:</span>
										<div class="pc-form">
											<div id="polz4"></div>
											<span id="respolz4"></span>
										</div>
										<div class="block mobform">
											<input type="number" placeholder="Срок кредита" id="srok2" class="form-inp" value="1">
										</div>
									</div>
									<a href="javascript:void(0)" id="result-btn2" class="res-btn">Посчитать</a>
									<div class="block">
										<div class="col-2 left">
											<span>Процент: <span id="plata2">13%</span></span>			
										</div>
										<div class="col-2 left">	
											<span>Каждый месяц: <span id="month2">65000</span></span>
										</div>
									</div>
						        </p>
						    </section>    
						</div>					
				</div>				
			</div>
		</div>		