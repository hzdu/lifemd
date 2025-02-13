jQuery(document).ready(function() {

// BEGIN of script for top-banner-slider
	$('.top-banner-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		pauseOnHover: false,
		speed: 2000,
	});
// END of script for top-banner-slider

// BEGIN of script for slider-logos
	$('.slider-logos').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: false,
		pauseOnHover: false,
		speed: 600,
		variableWidth: true,
		// centerMode: true,
	});
// END of script for slider-logos

    // BEGIN of script for slider-before-after
    $('.slider-before-after').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: false,
        pauseOnHover: false,
        speed: 600,
    });
    // END of script for slider-before-after

// BEGIN of script for slider-logos
	$('.slider-reviews').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 6000,
		fade: false,
		pauseOnHover: false,
		speed: 600,
		variableWidth: true,
		centerMode: true,
	});
// END of script for slider-logos

// BEGIN of script for slider-logos
	$('.slider-simple').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: false,
		pauseOnHover: false,
		speed: 600,
	});
// END of script for slider-logos

// BEGIN of script for slider-logos
	$('.slider-variable-width').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		adaptiveHeight: false,
		autoplay: true,
        autoplaySpeed: 6500,
		fade: false,
		pauseOnHover: false,
		speed: 600,
		variableWidth: true,
		centerMode: false,
	});
// END of script for slider-logos

// BEGIN of script for slider-doctors-thumbs
	$('.slider-doctors-thumbs').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		adaptiveHeight: false,
        // autoplay: true,
		autoplaySpeed: 6500,
		fade: false,
		pauseOnHover: false,
		speed: 600,
		variableWidth: true,
		centerMode: false,
	});
// END of script for slider-doctors-thumbs

// BEGIN of script for slider-programs-offer
	$('.slider-programs-offer').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		adaptiveHeight: false,
		autoplay: true,
		autoplaySpeed: 6500,
		fade: false,
		pauseOnHover: false,
		speed: 600,
	});
// END of script for slider-programs-offer

// BEGIN of script for connected-sliderS
	$('.connected-slider-images').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		pauseOnHover: false,
		speed: 800,
		asNavFor: '.connected-slider-labels',
		focusOnSelect: true,
	});
	$('.connected-slider-labels').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: false,
		pauseOnHover: false,
		speed: 800,
		asNavFor: '.connected-slider-images',
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,
	});
// END of script for connected-sliderS

// BEGIN of script for connected-sliderS
	$('.connected-slider-description').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: false,
		autoplay: true,
		autoplaySpeed: 5500,
		fade: false,
		pauseOnHover: false,
		speed: 800,
		asNavFor: '.connected-slider-controls',
		focusOnSelect: true,
	});
	$('.connected-slider-controls').slick({
		slidesToShow: 13,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5500,
		fade: false,
		pauseOnHover: false,
		speed: 800,
		asNavFor: '.connected-slider-description',
		focusOnSelect: true,
		infinite: false,
		variableWidth: true,
		// centerMode: true,
	});
// END of script for connected-sliderS

// BEGIN of script for connected-sliderS
	$('.slider-with-thumbs-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		pauseOnHover: false,
		speed: 800,
		asNavFor: '.slider-with-thumbs-thumbinal',
		focusOnSelect: true,
	});
	$('.slider-with-thumbs-thumbinal').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: false,
		pauseOnHover: false,
		speed: 800,
		asNavFor: '.slider-with-thumbs-main',
		focusOnSelect: true,
		// variableWidth: true,
		infinite: false,
	});
// END of script for connected-sliderS


// BEGIN of script for slider-2-per-row
$('.slider-2-per-row').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	adaptiveHeight: false,
	// autoplay: true,
	autoplaySpeed: 5000,
	fade: false,
	pauseOnHover: false,
	speed: 600,
	responsive: [{
		breakpoint: 991,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
	]
});
// END of script for slider-2-per-row


// BEGIN of script for slider-3-per-row
	$('.slider-3-per-row').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		// autoplay: true,
		autoplaySpeed: 5000,
		fade: false,
		pauseOnHover: false,
		speed: 600,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
// END of script for slider-3-per-row

	// BEGIN of script for slider-3-per-row
	$('.slider-3-per-row-blog-details').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		adaptiveHeight: false,
		// autoplay: true,
		autoplaySpeed: 5000,
		fade: false,
		pauseOnHover: false,
		speed: 600,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
// END of script for slider-3-per-row

// BEGIN of script for slider-4-per-row
	$('.slider-4-per-row').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		// autoplay: true,
		autoplaySpeed: 5000,
		fade: false,
		pauseOnHover: false,
		speed: 600,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
// END of script for slider-4-per-row

// BEGIN of script for slider-4-per-row
	$('.slider-5-per-row').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		adaptiveHeight: false,
		// autoplay: true,
		autoplaySpeed: 5000,
		fade: false,
		pauseOnHover: false,
		speed: 600,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 766,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
// END of script for slider-4-per-row

// BEGIN of script for slider-on-mobile-only
	/* Slick needs no get Reinitialized on window Resize after it was destroyed */
	$(window).on('load resize orientationchange', function() {
		$('.slider-on-mobile-only').each(function(){
			var $carousel = $(this);
			/* Initializes a slick carousel only on mobile screens */
			// slick on mobile
			if ($(window).width() > 767) {
				if ($carousel.hasClass('slick-initialized')) {
					$carousel.slick('unslick');
				}
			}
			else {
				if (!$carousel.hasClass('slick-initialized')) {
					$carousel.slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: true,
						dots: true,
						adaptiveHeight: false,
						mobileFirst: true,
						autoplay: true,
						autoplaySpeed: 5000,
						fade: false,
						pauseOnHover: false,
						speed: 600,
						centerMode: true,
						variableWidth: true,
					});
				}
			}
		});
	});
// END of script for slider-on-mobile-only

// BEGIN of script for slider-destroy-on-mobile
	$(window).on('load resize orientationchange', function() {
		$('.slider-destroy-on-mobile').each(function(){
			if ($(window).width() < 768) {
				$(this).slick('unslick');
			}
		});
	});
// END of script for slider-destroy-on-mobile

// BEGIN of script for header submenu
	$(".navbar-toggler").on("click", function () {
		$(this).find('.navbar-toggler-icon').toggleClass("active");
		$(this).toggleClass("active");
		$('body').toggleClass('popup-item-active');
	});
	$('.overlay-trigger-close-nav').click(function(){
		$('.navbar-toggler').trigger('click');
		$('body').removeClass('popup-item-active');
	})
// END of script for header submenu

// BEGIN of script to stick header
	$(window).scroll(function(){
		var sticky = $('header'),
			scroll = $(window).scrollTop();
		if (scroll > 60) {
			sticky.addClass('header-fixed');
		} else {
			sticky.removeClass('header-fixed');
		};
	});
// END of script to stick header

// BEGIN of script for back-to-top btn
	if ($('.back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function() {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.back-to-top').addClass('show');
				} else {
					$('.back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function() {
			backToTop();
		});
		$('.back-to-top').on('click', function(e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 0);
		});
	}
// END of script for back-to-top btn

// BEGIN of script for page .content min height
	function contentMinHeight() {
		var _windowH = $(window).outerHeight(true);
		var _headerH = $('header').outerHeight(true);
		var _footerH = $('footer').outerHeight(true);
		if (($('header').css('position') == 'fixed') || ($('header').css('position') == 'absolute')) {
			_headerH = 0;
		};
		var _contentMinH = _windowH - _headerH - _footerH;
		$('.content').css('min-height', _contentMinH+'px');
	};
	contentMinHeight();
	$(window).resize(function(){
		contentMinHeight();
	});
// BEGIN of script for page .content min height

// BEGIN of script for scrollTo anchors
	$('.scrollto').click( function(){
		var scroll_el = $(this).attr('href');
		var headerHeight = $('header').outerHeight();
        if ($(window).outerWidth() < 750) {
			if ($(scroll_el).length != 0) {
				//$('html, body').animate({ scrollTop: $(scroll_el).offset().top - headerHeight + 0 });
				$('html, body').animate({ scrollTop: $(scroll_el).offset().top - headerHeight - 60 });
			}
		} else {
			if ($(scroll_el).length != 0) {
				$('html, body').animate({ scrollTop: $(scroll_el).offset().top - headerHeight + 60 });
			}
		}
		$('.navbar-toggler.active').trigger('click');
		return false;
	});
// END of script for scrollTo anchors

// BEGIN of script for accordion
	$('.accordion-item-nav').click(function(){
		var _accItemParent = $(this).parents('.accordion-item');
		if (_accItemParent.hasClass('active')) {
			$('.accordion-item').removeClass('active');
			$('.accordion-item .accordion-item-content').slideUp(400,function(){
			});
		} else {
			// $('.accordion-item').removeClass('active');
			// $('.accordion-item .accordion-item-content').slideUp(400);
			_accItemParent.addClass('active');
			_accItemParent.find('.accordion-item-content').slideDown(400,function(){
			});
		}
	})
	// $('.accordion-item:first-child .accordion-item-nav a').click();
// END of script for accordion

// BEGIN of script for tabs
	$('.tabs-nav-item').click(function() {
		var _id = $(this).attr('href');
		var _targetElement = $(this).parents('.tabs-wr').find(_id);
		$('.tabs-nav-item').removeClass('active');
		$('.tabs-nav-item-wrapper').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.tabs-nav-item-wrapper').addClass('active');
		$('.tabs-item').removeClass('active');
		_targetElement.addClass('active');
		$('.slider-4-per-row').slick('setPosition');
		return false;
	});

	$('.btn-close-tab').click(function(){
		$(this).parents('.tabs-item').removeClass('active');
	})
	$('.tabs-nav-item:first').click();
// END of script for tabs

// BEGIN of script to toggle show/hide more-less text
	$('.btn-toggle-more-less').click(function(){
		$(this).parents('.more-less-wr').toggleClass('active');
	})
// END of script to toggle show/hide more-less text

// BEGIN of script to toggle show/hide popup subscribe
	$('.btn-popup-subscribe').click(function(){
		$('.popup-subscribe-wrapper').toggleClass('active');
	})
	$('.btn-close-popup').click(function(){
		$('.popup-subscribe-wrapper').removeClass('active');
		$('.popup-item').removeClass('active');
		$('body').removeClass('popup-item-active');
	})
// END of script to toggle show/hide popup subscribe

// BEGIN of script to toggle change header color style depend of hero section bg color
	if ($('.box-top-banner').hasClass('bg-theme-secondary')) {
		$('html').addClass('header-style-white');
	};
// END of script to toggle change header color style depend of hero section bg color

// BEGIN of script to move Illness Icons Details Left
	function moveIllnessIconDetailsLeft() {
		$('.illness-icon-details').each(function(){
			var _containerWidth = $('.box-illness-icons .container').outerWidth();
			// console.log(_containerWidth);
			var _illnessIconDetailsLeft = $(this).offset().left - $('.box-illness-icons .container').offset().left;
			// console.log(_illnessIconDetailsLeft);
			$(this).css('left', '-'+_illnessIconDetailsLeft+'px');
			$(this).css('width', _containerWidth+'px');
		});
	};
	moveIllnessIconDetailsLeft();
	$(window).resize(function(){
		moveIllnessIconDetailsLeft();
	});
	$('.illness-icon').click(function(){
		if ($(this).parents('.illness-icon-item').hasClass('active')) {
			$('.illness-icon-item').removeClass('active');
		} else {
			$('.illness-icon-item').removeClass('active');
			$(this).parents('.illness-icon-item').toggleClass('active');
		}
	});
// END of script to move Illness Icons Details Left

// BEGIN of script to init select2
	$(".select-styled").select2({
		dropdownPosition: 'below',
	});
// END of script to init select2

// BEGIN of script to show/hide button on search form
	$(document).on('select2:open', () => {
		document.querySelector('.select2-search__field').focus();
	});
	$('.form-search select').change(function(){
		// _searchSelectVal = $(this).val();
		_searchSelectVal = $(this).find(':selected').data('value');
		console.log(_searchSelectVal);

		var _btnSearchDataHref = $('.btn-book-an-appointment-form').data('href');
		var _btnSearchHref = _btnSearchDataHref;
		_btnSearchHref = _btnSearchHref.replace('DATA_VARIABLE_CATEGORY',_searchSelectVal);
		$('.btn-book-an-appointment-form').attr('href',_btnSearchHref);
		console.log(_btnSearchHref);


		$('.form-search select').each(function(){
			// $(this).val(_searchSelectVal);
			// $(this).trigger('change.select2');

			if ($(this).val() == '') {
				$(this).parents('.form-search').removeClass('active');
			} else {
				$(this).parents('.form-search').addClass('active');
			};
		});

	});
// END of script to show/hide button on search form

// BEGIN of script to clone element into other position for mobile views
	$('.mobile-move-element').each(function(){
		var _cloneElement = $(this).clone();
		_cloneElement.appendTo($(this).parents('.mobile-move-element-wrapper').find('.mobile-move-element-position'));
	});
// END of script to clone element into other position for mobile views

// BEGIN of script to change book-an-appointment links for correct widget path
	$('.btn-book-an-appointment').each(function(){
		var _dataVariableCategory = $(this).data('variable-category');
		var _btnHref = $(this).attr('href');
		_btnHref = _btnHref.replace('DATA_VARIABLE_CATEGORY',_dataVariableCategory);
		$(this).attr('href',_btnHref);
	});
// END of script to change book-an-appointment links for correct widget path

// BEGIN of script for sticky sidebar item
	function stickySidebarRight() {
		var footerOuterHeight = $('footer').outerHeight();
		var headerOuterHeight = $('header').outerHeight();
		if ($('.sticky-position').length) {
			if ($(window).width() < 1200) {
				$('.sticky-position').unstick();
			} else {
				$('.sticky-position').sticky({
					topSpacing: 120,
					bottomSpacing: footerOuterHeight + 150,
				});
			};
		};
	};
	stickySidebarRight();
	$(window).resize(function(){
		stickySidebarRight();
	});
// END of script for sticky sidebar item

// BEGIN of script for sticky item stickyInsideBlock
	function stickyInsideBlock() {
		var footerOuterHeight = $('footer').outerHeight();
		var headerOuterHeight = $('header').outerHeight();
		$('.sticky-inside-block').each(function(){
			var _stickyTillPos = $('body').outerHeight() - $(this).parents('.sticky-inside-block-wrapper').offset().top - $(this).parents('.sticky-inside-block-wrapper').outerHeight();
			if ($(window).width() < 991) {
				$(this).unstick();
			} else {
				$(this).sticky({
					topSpacing: headerOuterHeight + 50,
					bottomSpacing: _stickyTillPos + 150,
				});
			};
		});
	};
	stickyInsideBlock();
	$(window).resize(function(){
		stickyInsideBlock();
	});
	$(window).scroll(function(){
		stickyInsideBlock();
	});
// END of script for sticky item stickyInsideBlock

// BEGIN of script for sticky item stickyInsideBlock
	$(window).scroll(function() {
		$('.opacity-on-scroll').each(function(){
			_blockOffsetTop = $(this).parent().parent().offset().top;
			_scrollPos = $(window).scrollTop();
			let opacity = 1 - ((_scrollPos-_blockOffsetTop) / 600);
			if ((_scrollPos > _blockOffsetTop+50) && (opacity > 0)) {
				if ($(this).hasClass('bg-decoration-radial')) {
					opacity = 1 - ((_scrollPos-_blockOffsetTop) / 900);
				}
				$(this).css('opacity', opacity);
			};
			// console.log(_blockOffsetTop);
			// console.log(_scrollPos);
		});
	});

	$(window).scroll(function() {
		$('.text-gradient-on-scroll, .text-gradient-on-scroll-h').each(function(){
			_blockOffsetTop = $(this).parent().parent().offset().top;
			_scrollPos = $(window).scrollTop();
			let percentEnd = 110 - ((_scrollPos-_blockOffsetTop) / 2);
			let percentStart = percentEnd - 10;
			if ((_scrollPos > (_blockOffsetTop-100)) && (percentStart > -10) && (percentEnd > -10)) {
				$(this).attr('style', 'background-image: linear-gradient(90deg, #093e52 '+percentStart+'%, var(--theme-color) '+percentEnd+'%)');
				if ($(this).hasClass('text-gradient-on-scroll-h')) {
					$(this).attr('style', 'background-image: linear-gradient(0deg, #093e52 '+percentStart+'%, var(--theme-color) '+percentEnd+'%)');
				}
			};
			// console.log(_blockOffsetTop);
			// console.log(_scrollPos);
		});
	});

	$(window).scroll(function() {

		if ( $('.container-scale-on-scroll').length > 0 ) {

			_containerWhite = $('.container-scale-on-scroll').offset().top;
			_containerWhiteHeight = $('.container-scale-on-scroll').outerHeight();
			_scrollPosTop = $(window).scrollTop();
			_windowHeight = $(window).outerHeight();
			_effectPoint = _scrollPosTop + _windowHeight / 2 - _containerWhite;
			_effectPointCSS = _effectPoint / 10;
			if (_effectPoint > 0) {
				if (_effectPointCSS < 60) {
					// $('.container-scale-on-scroll').css('margin', 0-_effectPointCSS+'px');
				}
				$('.container-scale-on-scroll').addClass('active');
				// console.log(_effectPoint);
				// console.log(_effectPointCSS);
			} else {
				$('.container-scale-on-scroll').removeClass('active');
			};
			_scrolledToBlockBottom = _scrollPosTop + _windowHeight - _containerWhiteHeight - _containerWhite - 150;
			if (_scrolledToBlockBottom > 0) {
				$('.container-scale-on-scroll').removeClass('active');
			};

		}
	});



// BEGIN of script for animated numbers counter up
	const initAnimatedCounts = () => {
		const ease = (n) => {
			// https://github.com/component/ease/blob/master/index.js
			return --n * n * n + 1;
		};
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Once this element is in view and starts animating, remove the observer,
					// because it should only animate once per page load.
					observer.unobserve(entry.target);
					const countToString = entry.target.getAttribute('data-countTo');
					const countTo = parseFloat(countToString);
					const duration = parseFloat(entry.target.getAttribute('data-animateDuration'));
					const countToParts = countToString.split('.');
					const precision = countToParts.length === 2 ? countToParts[1].length : 0;
					const startTime = performance.now();
					const step = (currentTime) => {
						const progress = Math.min(ease((currentTime  - startTime) / duration), 1);
						entry.target.textContent = (progress * countTo).toLocaleString('en-US', { maximumFractionDigits: 0 });
						if (progress < 1) {
							animationFrame = window.requestAnimationFrame(step);
						} else {
							window.cancelAnimationFrame(animationFrame);
						}
					};
					let animationFrame = window.requestAnimationFrame(step);
				}
			});
		});
		document.querySelectorAll('[data-animateDuration]').forEach((target) => {
			target.setAttribute('data-countTo', target.textContent);
			target.textContent = '0';
			observer.observe(target);
		});
	};
	initAnimatedCounts();
// END of script for animated numbers counter up


// BEGIN of script for open/hide popup
	$('.btn-popup-open').click(function(){
		_popupId = $(this).attr('href');
		console.log(_popupId);
		$(_popupId).addClass('active');
		$('body').addClass('popup-item-active');
		return false;
	});
	$('.popup-item').click(function(){
		$(this).removeClass('active');
		$('body').removeClass('popup-item-active');
	})
	$('.popup-item-inner').click(function(event){
		event.stopPropagation();
	});
// BEGIN of script for open/hide popup


	$('.sidebar-nav a').click(function(event){
		// event.stopPropagation();
	});


// BEGIN of script for table-of-contents
	$('.table-of-contents h5').click(function(event){
		$(this).parents('.table-of-contents').toggleClass('active');
	});
	$('.table-of-contents a').click(function(event){
		$(this).parents('.table-of-contents').removeClass('active');
	});

	var _sectionIds = $('.table-of-contents a');

	$(document).scroll(function(){
		_sectionIds.each(function(){

			var _containerId = $(this).attr('href');
			var containerOffset = $(_containerId).offset().top;
			var containerHeight = $(_containerId).outerHeight();
			var containerBottom = containerOffset + containerHeight;
			var scrollPosition = $(document).scrollTop();
			// if(scrollPosition < containerBottom + 20 && scrollPosition >= containerOffset - 120){
			if(scrollPosition >= containerOffset - 120){
				$(this).addClass('active');
			} else{
				$(this).removeClass('active');
			}
		});
	});
// END of script for table-of-contents

// BEGIN of script for open/hide popup
	$('.doctor-thumb-slide-item .btn-play').click(function(){
		$('.doctor-thumb-slide-item').find('video').each(function(){
			$(this).get(0).pause();
			$('.doctor-thumb-slide-item').removeClass('video-active');
		})
		_docVideo = $(this).parents('.doctor-thumb-slide-item').find('video');
		$(this).parents('.doctor-thumb-slide-item').addClass('video-active');
		_docVideo.get(0).play();
	});
	$('.doctor-thumb-slide-item .btn-play-close').click(function(){
		_docVideo = $(this).parents('.doctor-thumb-slide-item').find('video');
		$(this).parents('.doctor-thumb-slide-item').removeClass('video-active');
		_docVideo.get(0).pause();
	});
// BEGIN of script for open/hide popup


	function membershipCalculateRowSavings() {
		$('.membership-calculate-number').each(function(){
			var _membershipCalculateNumber = $(this).val();
			var _membershipCalculatePrice = parseFloat($(this).parents('.membership-calculate-row').find('.membership-calculate-price').data('membership-calculate-price'));
			var _membershipCalculatePriceOther = parseFloat($(this).parents('.membership-calculate-row').find('.membership-calculate-price-other').data('membership-calculate-price-other'));
			var _membershipCalculateSavings = (_membershipCalculatePriceOther - _membershipCalculatePrice) * _membershipCalculateNumber;
            var _membershipHourSavings =
			$(this).parents('.membership-calculate-row').find('.membership-calculate-price').html(_membershipCalculatePrice*_membershipCalculateNumber);
			$(this).parents('.membership-calculate-row').find('.membership-calculate-price-other').html(_membershipCalculatePriceOther*_membershipCalculateNumber);
			$(this).parents('.membership-calculate-row').find('.membership-calculate-savings').html(_membershipCalculateSavings);
		});
	};
	membershipCalculateRowSavings();

	function membershipCalculateRowSavingsTotal() {
		$('.membership-calculate-block').each(function(){
			_membershipCalculateRowSavingsTotal = 0;
			$(this).find('.membership-calculate-savings').each(function(){
				_QQQ = parseFloat($(this).html());
				_membershipCalculateRowSavingsTotal = _membershipCalculateRowSavingsTotal + _QQQ;
			});
            $(this).find('.totalcare-total').html(_membershipCalculateRowSavingsTotal - 468);
            $(this).find('.conciergecare-total').html(_membershipCalculateRowSavingsTotal - 1188);

        });
        var _totalMembershipHourSavings = ($("input[name=totalcare-appt]").val() * 2.5) + ($("input[name=totalcare-urgent]").val() * 1.5) + ($("input[name=totalcare-prescriptions]").val() * .5);
        var _conciergeMembershipHourSavings = ($("input[name=conciergecare-appt]").val() * 2.5) + ($("input[name=conciergecare-urgent]").val() * 1.5) + ($("input[name=conciergecare-prescriptions]").val() * .5);
        $(".total-hours-saved").text(_totalMembershipHourSavings);
        $(".concierge-hours-saved").text(_conciergeMembershipHourSavings);

	};
	membershipCalculateRowSavingsTotal();

	$('.membership-calculate-number').change(function(){
		membershipCalculateRowSavings();
		membershipCalculateRowSavingsTotal();
	});


// BEGIN of script to copy details of treatments from header popup and append elements into #treatments-list-items
	$('.ilness-icon-link').each(function(index,item) {
		_ilnessIconName = $(this).find('h4').html();
		_ilnessIconHref = $(this).attr('href');
		_ilnessIconImgSrc = $(this).find('img').attr('src');
		// console.log("|_ " + _ilnessIconName + " / "  + _ilnessIconHref + " / " + _ilnessIconImgSrc + " _|");
		_htmlTreatmentsListItem = '<div class="treatments-list-item"><div class="img-wr"><img src="'+_ilnessIconImgSrc+'" alt=""></div><div class="text-wr"><h5>'+_ilnessIconName+'</h5></div><div class="btns-wr"><a href="javascript:void(0);" class="btn-main color-theme bg-theme-transparent ttu"><span>Learn More</span></a><a href="'+_ilnessIconHref+'" class="btn-main bg-theme ttu" target="_blank"><span>Appointment</span></a></div></div>';
		//$('#treatments-list-items').append(_htmlTreatmentsListItem);
	});
// END of script to copy details of treatments from header popup and append elements into #treatments-list-items

// BEGIN of script to copy to clipboard btn
	$('.btn-copy').click(function(){
		var _textToCopy = $(this).parents('.btn-copy-wrapper').find('.btn-copy-text');
		_textToCopy.select();
		// _textToCopy.setSelectionRange(0, 99999); // For mobile devices
		// Copy the text inside the text field
		navigator.clipboard.writeText(_textToCopy.val());
		var _tooltipItem = $(this).parents('.btn-copy-wrapper').find('.tooltiptext');
		_tooltipItem.html("Copied: <br> <span>" + _textToCopy.val() + "</span>");
		return false;
	});
	$('.btn-copy').mouseout(function(){
		var _tooltipItem = $(this).parents('.btn-copy-wrapper').find('.tooltiptext');
		_tooltipItem.html("Copy to clipboard");
	});
// END of script to copy to clipboard btn

// BEGIN of script to toggle show/hide popup subscribe
	$('.btn-close-block').click(function(){
		$('.block-fixed-bottom').fadeOut(500);
	})
// END of script to toggle show/hide popup subscribe







































});

// BEGIN of script for page load
window.onload = function() {

	// BEGIN of script for columns-equal-height
	function columnsEqualHeight() {
		$('.columns-equal-height-container').each(function(){
			var highestBox = 0;
			$('.column-equal-height-item', this).each(function(){
				if($(this).height() > highestBox) {
					highestBox = $(this).height();
				}

			});
			$('.column-equal-height-item',this).height(highestBox);
		});
	}
	columnsEqualHeight();
	$(window).resize(function(){
		columnsEqualHeight();
	});
	// END of script for columns-equal-height

	// BEGIN of script for page preloader
	$('.spinner-wr').fadeOut(900,function(){
		$(this).remove();
	});
	$('body').addClass('loaded');
	// END of script for page preloader

	// BEGIN of script for init wow.js for animate.css
	// if(Modernizr.cssanimations) {
	// 	wow = new WOW({
	// 		// mobile: false,
	// 	});
	// 	wow.init();
	// }
	// END of script for init wow.js for animate.css

};
// END of script for page loader
