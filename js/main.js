// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

	(function () {
		'use strict';

	 /* ==============================================
		Testimonial Slider
		=============================================== */ 

		$('a.page-scroll').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 40
					}, 900);
					return false;
				}
			}
		});
/*
		var mt1 = $('tf-menu').height();

		$(document).ready(function() {
			$('.opisPodjetja').css({
				marginTop: mt1
			});
		});
*/
		/*====================================
		Show Menu on Book
		======================================*/
		$(window).bind('scroll', function() {
			var navHeight = $(window).height() - 115;
			if ($('#tf-about').offset().top - $(window).scrollTop() < 60) {
				$('.navbar-default').addClass('on');
			} else {
				$('.navbar-default').removeClass('on');
			}
		});

		$('body').scrollspy({ 
			target: '.navbar-default',
			offset: 80
		})

		$(document).ready(function() {
			console.log($(window).width());
			if($(window).width() <= 800) {
				$('.sideBanner').hide();
			}
		})

		$(document).ready(function() {
			$("#team").owlCarousel({

					navigation : false, // Show next and prev buttons
					slideSpeed : 300,
					paginationSpeed : 400,
					autoHeight : true,
					itemsCustom : [
					[0, 1],
					[450, 2],
					[600, 2],
					[700, 2],
					[1000, 4],
					[1200, 4],
					[1400, 4],
					[1600, 4]
					],
				});

			$("#clients").owlCarousel({

					navigation : false, // Show next and prev buttons
					slideSpeed : 300,
					paginationSpeed : 400,
					autoHeight : true,
					itemsCustom : [
					[0, 1],
					[450, 2],
					[600, 2],
					[700, 2],
					[1000, 4],
					[1200, 5],
					[1400, 5],
					[1600, 5]
					],
				});

			$("#testimonial").owlCarousel({
				navigation : false, // Show next and prev buttons
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem:true
			});

		});

		/*====================================
		Portfolio Isotope Filter
		======================================*/
		$(window).load(function() {
			var $container = $('#lightbox');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			$('.cat a').click(function() {
				$('.cat .active').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$container.isotode({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;
			});

		});
/*
		$(document).ready(function() {
			var sekunde = new Date().getMilliseconds();
			var target = new Date("May 18, 2015, 9:00").getTime();
			var dan, ura, min, sek;
			setInterval(function() {
				var currentDate  = new Date().getTime();

				var secLeft = ( target - currentDate ) / 1000;
				dan = parseInt(secLeft / 86400);
				secLeft = secLeft % 86400;

				ura = parseInt(secLeft / 3600);
				if(ura <10){
					//ura = "0"+ura;
				}

				secLeft = secLeft % 3600;

				min = parseInt(secLeft / 60);
				sek = parseInt(secLeft % 60);

				if(min <10){
					min = "0"+min;
				}
				if(sek <10){
					sek= "0" + sek;
				}


				var danstr = "dni";
				if(dan == 2) danstr = "dneva";
				if(dan == 1) danstr = "dan";

				var urastr = "ur";
				if(ura == 2) urastr = "uri";
				if(ura == 1) urastr = "ura";

				if(target - currentDate > 0){
					document.getElementById('countdown').innerHTML = " - ŠE " + dan + " " + danstr + " in " + ura + " " + urastr + " do začetka"; 
				//document.getElementById('countdown').innerHTML = " - " + dan + " " + danstr + " " + ura + ":" + min + ":" + sek + ""; 
				} else {
					document.getElementById('countdown').innerHTML = " ";
				}

			}, 1000);
		});

*/

$('#program').hide();


$('#programButton').click(function() {
	$('#program').toggle(500);
	$('#programArrow').addClass('box_rotate box_transition');
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
	} else {
		$('.scrollup').fadeOut();
	}
});

$('.scrollup, .logoTop').click(function () {
	$("html, body").animate({
		scrollTop: 0
	}, 600);
	return false;

	$()
});


}());


}
main();
