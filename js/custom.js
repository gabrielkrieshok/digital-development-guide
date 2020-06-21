/*
	Author: BestPixels
	Template: Booki - Responsive HTML Book Landing Page
	Version: 1.0
*/
;(function($){
	'use strict';
	
	//Global Variables
	var $body = $('body');
	
	// Smooth scrolling using jQuery easing
	$('a.nav-item[href*="#"]:not([href="#"])').on("click", function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
		  var toHash = $(this.hash), toHashN = (this.hash.slice(1)) ? $('[name=' + this.hash.slice(1) + ']') : false;
		  toHash = toHash.length ? toHash : toHashN;
		  if (toHash.length) {
			$('html, body').animate({
			  scrollTop: (toHash.offset().top - 70)
			}, 1000, "easeInOutExpo");
			return false;
		  }
		}
	});
	
	// navigation ScrolSpy
	$body.scrollspy({
		target: '#navigation',
		offset: 90,
	});
	
	// Nav collapse
	$('.nav-item').on("click",function() {
		$('.navbar-collapse').collapse('hide');
	});
	
	//magnificPopup	Video
	var $embadedPopup = $('.embaded-popup');
	if ($embadedPopup.length > 0 ) {
		$embadedPopup.magnificPopup({
			type: 'iframe',
			removalDelay: 160,
			preloader: true,
			fixedContentPos: false,
			callbacks: {
			beforeOpen: function() {
				  // just a hack that adds mfp-anim class to markup 
				  this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				  this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
		});
	}
	
	// on scroll animation
	var $animate = $('.animate');
	if ($animate.length > 0 ) {
		$animate.each(function(){
			
			// Grab data with variable
			var $this = $(this);
			var animatetop = $this.data("top");
			var animateleft = $this.data("left");
			var animatebottom = $this.data("bottom");
			var animateright = $this.data("right");
			var animateduration = $this.data("duration");
			var animatedelay = $this.data("delay");
			var animatetype = $this.data("animate-type");
			
			// Checking if variable is set then set the value
			if ( typeof animatetop !== "undefined" && animatetop) {
				$this.css({
					'top': animatetop + 'px'
				});
			}
			if ( typeof animatebottom !== "undefined" && animatebottom) {
				$this.css({
					'bottom': animatebottom + 'px'
				});
			}
			if ( typeof animateleft !== "undefined" && animateleft) {
				$this.css({
					'left': animateleft + 'px'
				});
			}
			if ( typeof animateright !== "undefined" && animateright) {
				$this.css({
					'right': animateright + 'px'
				});
			}
			if ( typeof animateduration !== "undefined" && animateduration) {
				$this.css({
					'transition-duration': animateduration + 's'
				});
			}
			if ( typeof animatedelay !== "undefined" && animatedelay) {
				$this.css({
					'transition-delay': animatedelay + 's'
				});
			}
			if ( typeof animatetype !== "undefined" && animatetype) {
				$this.css({
					'transition-timing-function': animatetype
				});
			}
			$this.css({
				'opacity':'0'
			});
			
			// Run gathered data on appear
			$this.appear(function() {
				$this.css({ 
					"opacity" : "1" 
				});
				if ( typeof animatetop !== "undefined" && animatetop) {
					$this.css({
						"top" : "0" ,
					});
				}
				if ( typeof animatebottom !== "undefined" && animatebottom) {
					$this.css({
						"bottom" : "0" ,
					});
				}
				if ( typeof animateleft !== "undefined" && animateleft) {
					$this.css({
						"left" : "0", 
					});
				}
				if ( typeof animateright !== "undefined" && animateright) {
					$this.css({
						"right" : "0" ,
					});
				}
			});
			
		});
	}
	
	/* var $has_carousel = $('.has-carousel');
	if ($has_carousel.length > 0 ) {
		$has_carousel.each(function(){
		  var $self = $(this);
		  var c_item = ($self.data('items')) ? $self.data('items') : 4;
		  var c_item_t = (c_item >= 3) ? 3 : c_item;
		  var c_item_m = (c_item_t >= 2) ? 2 : c_item_t;
		  var c_delay =($self.data('delay')) ? $self.data('delay') : 6000;
		  var c_auto =($self.data('auto')) ? true : false;
		  var c_loop =($self.data('loop')) ? true : false;
		  var c_dots = ($self.data('dots')) ? true : false;
		  var c_navs = ($self.data('navs')) ? true : false;
		  var c_ctr = ($self.data('center')) ? true : false;
		  var c_mgn = ($self.data('margin')) ? $self.data('margin') : 30;
		  var c_animateOut = ($self.data('animateOut')) ? $self.data('animateOut') : 'fadeOut';
		  $self.owlCarousel({
			navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			items: c_item, loop: c_loop, nav: c_navs, dots: c_dots, margin: c_mgn, center: c_ctr, animateOut: c_animateOut, 
			autoplay: c_auto, autoplayTimeout: c_delay, autoplaySpeed: 300, 
			responsive:{ 0:{ items:1 }, 480:{ items: c_item_m }, 768:{ items: c_item_t }, 1170:{ items: c_item } }
		  });
		});
	} */
	
	// Masonry Layout
	var $masonryLayout = $('.masonry-layout');
	if ($masonryLayout.length > 0 ) {
		$(window).on('load', function () {
			$masonryLayout.masonry({
			  itemSelector: '.masonry-item',
			});
		});
	}
	
	// Back To Top
	if ($('#back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
	
})(jQuery);