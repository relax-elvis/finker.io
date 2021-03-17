//= ../../node_modules/bootstrap/js/dist/index.js
'use strict';
$(function() {
	$(document).ready(function() {
		if($(window).width() < 991 && $(window).width() > 675) {
			var block = $('.move-mobile-logo');
			var gran = $('.move-to-logotype');
			$('.move-to-logotype').remove();
			$('.move-mobile-logo').remove();
			$('.footer-section__bottom .after-block').after(block);
			$('.footer-section__bottom .after-block').append(gran);

			var btn = $('header .btn');
			$('header .btn').remove();
			$('header .d-lg-none').after(btn);
			$('header .navbar-nav + .btn').removeClass('d-md-none d-none');
		}
		///
		if($(this).scrollTop() > 100) {
			$('header').addClass("fixed-bg");
		}
		$(document).scroll(function(e) {
			if($(this).scrollTop() > 100) {
				$('header').addClass("fixed-bg");
			} else {
				$('header').removeClass("fixed-bg");
			}
		});
		
		if(document.cookie.match('accept')) {
			$('#cookie').fadeOut(300);
			$('footer').removeClass('cookie');
		} else {
			setTimeout(function(){$('#cookie').fadeIn(300);}, 2000);
		}

		// Custom JS
		$('.navbar-nav a[href^="#"], header button.btn, .informate .btn').click(function(e) {
			e.preventDefault();
			var __this;
			if($(this)[0].nodeName == 'BUTTON') {
				__this = '#' + $(this).attr('data-href');
			} else {
				__this = $(this).attr('href');
			}
			if($('body').find(__this).length == false) return false;
			$('html, body').animate({scrollTop: $(__this).offset().top+'px'});
			__this = null;
			return false;
		});

		// $('.block-video-btn .btn-video, .block-video-btn .btn-video-second').click(function(e) {
		// 	e.preventDefault();
		// 	$('#video-gallery').lightGallery({
		// 		autoplay: true,
		// 	}); 
		// 	$('#video-gallery1').lightGallery({
		// 		autoplay: true,
		// 	}); 
		// });
		function initGallery(id) {
			$(id).lightGallery({
				autoplay: true,
			});
		};
		// initGallery('#video-gallery');
		// initGallery('#video-gallery1');

		$('.block-video-btn').on('click', '.btn-video, .btn-video-second', function(e) {
			e.preventDefault();
			initGallery('#video-gallery');
			initGallery('#video-gallery1');
		});
			
		$("#cookie .btn-accetp-cookie").click(function(e) {
			if(document.cookie.match('accept')) {
				$('#cookie').fadeOut(300);
				$('footer').removeClass('cookie');
			} else {
				document.cookie = 'accept=true';
				$('#cookie').fadeOut(300);
				$('footer').removeClass('cookie');
			}
		});
	});

	// on table and mobile 
	if($(window).width() < 991) {
		function f_scroll() {

		   last_scroll_top = 0;
		   top_display = 100;

		   $(window).off('scroll')
		   $(window).on('scroll', function(){

			   var scroll_top = $(this).scrollTop();

			   if ((scroll_top > last_scroll_top) && (scroll_top >top_display)) {
				   //downscroll code
				   $('.js-header').addClass('has-transform-header');
				   $('.js-footer').addClass('has-transform-footer');
			   } else {
				   $('.js-header').removeClass('has-transform-header');
				   $('.js-footer').removeClass('has-transform-footer');
			   }

			   last_scroll_top = scroll_top;
		   });

		   /*actions botons message and call*/ 

		   
		   var $window = $(window);
		   var maxWidth = 600; /* <--- Custom size here*/

		   $window.on('scroll resize', function(){

			   if ($(window).width() <= maxWidth) {  
				   $('.js-input-focus').on('focusin', function() {
					   $('.js-header').addClass('has-transform-header');
					   $('.js-footer').addClass('has-transform-footer');
				   });

				   $('.js-input-focus').on('focusout', function(){
					   $('.js-header').removeClass('has-transform-header');
					   $('.js-footer').removeClass('has-transform-footer');
				   });


			   }   

		   });

		}
		f_scroll();
	}

});