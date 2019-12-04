$(function(){
	$('.menutren ul li:nth-child(1) a').on('click', function(event) {
 		event.preventDefault();
 		/* Act on the event */
 		$('html').animate({scrollTop: 190}, 600);
 	});
 	$('.menutren ul li:nth-child(2) a').on('click', function(event) {
 		event.preventDefault();
 		/* Act on the event */
 		$('html').animate({scrollTop: $('.khoichinhgiua2').offset().top - 40}, 600);
 	});
 	$('.menutren ul li:nth-child(3) a').on('click', function(event) {
 		event.preventDefault();
 		/* Act on the event */
 		$('html').animate({scrollTop: $('.khoichinhgiua3').offset().top - 40}, 600);
 	});
 	$('.menutren ul li:nth-child(4) a').on('click', function(event) {
 		event.preventDefault();
 		/* Act on the event */
 		$('html').animate({scrollTop: $('.khoichinhgiua4').offset().top - 40}, 600);
 	});
 	$('.menutren ul li:nth-child(5) a').on('click', function(event) {
 		event.preventDefault();
 		/* Act on the event */
 		$('html').animate({scrollTop: $('.khoichinhgiua5').offset().top - 40}, 600);
 	});
})