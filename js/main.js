;(function($){

    // WOW Animation
    
    $(document).ready(function () {
        new wow().init()
    });

    $(window).on('scroll', function () {
        if($('.sticky-header').length > 0){
            var menu = $('.sticky-header');
            var merchant_login_btn = $('#merchant-login-btn');
            if ($(window).scrollTop() > menu.offset().top) {
                menu.addClass('is-fixed');
                merchant_login_btn.addClass('btn-primary');
                merchant_login_btn.addClass('gradient');
                merchant_login_btn.removeClass('btn-light');
                $('.site-header .container > .logo-header .logo-3').attr('src','./images/logo.png');
            } else {
                menu.removeClass('is-fixed');
                merchant_login_btn.removeClass('gradient');
                merchant_login_btn.removeClass('btn-primary');
                merchant_login_btn.addClass('btn-light');
                $('.site-header .container > .logo-header .logo, .site-header .container > .logo-header .logo-2, .site-header .container > .logo-header .logo-3').attr('src','./images/logo.png')
            }
        }
    });

    $(document).ready(function() {
        'use strict';
    
        /*  Team Carousel = owl.carousel.js */
        $('.team-carousel1').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            autoplaySpeed: 3000,
            navSpeed: 3000,
            paginationSpeed: 3000,
            slideSpeed: 3000,
            smartSpeed: 3000,
            autoplay: true,
            dots: true,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },			
                
                767:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        })
        
        /*  Team Carousel = owl.carousel.js */
        $('.team-carousel2').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            autoplaySpeed: 3000,
            navSpeed: 3000,
            paginationSpeed: 3000,
            slideSpeed: 3000,
            smartSpeed: 3000,
            autoplay: true,
            dots: true,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },			
                
                767:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        })
        
        /*  Testimonials Carousel = owl.carousel.js */
        $('.testimonials-carousel1').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            autoplaySpeed: 3000,
            navSpeed: 3000,
            paginationSpeed: 3000,
            slideSpeed: 3000,
            smartSpeed: 3000,
            autoplay: true,
            dots: false,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },			
                
                767:{
                    items:2
                },
                1200:{
                    items:3
                },
                2400:{
                    items:4
                }
            }
        })
        
        /*  Testimonials Carousel = owl.carousel.js */
        $('.testimonials-carousel2').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            autoplaySpeed: 3000,
            navSpeed: 3000,
            paginationSpeed: 3000,
            slideSpeed: 3000,
            smartSpeed: 3000,
            autoplay: true,
            dots: true,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },			
                
                767:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        })
            
        /*  Clients Carousel = owl.carousel.js */
        $('.clients-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            autoplaySpeed: 3000,
            navSpeed: 3000,
            paginationSpeed: 3000,
            slideSpeed: 3000,
            smartSpeed: 3000,
            autoplay: true,
            dots: true,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },			
                
                767:{
                    items:5
                },
                1200:{
                    items:6
                }
            }
        })
        
        /*  Blgo Carousel = owl.carousel.js */
        $('.blog-carousel1').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplaySpeed: 3000,
            navSpeed: 3000,
            paginationSpeed: 3000,
            slideSpeed: 3000,
            smartSpeed: 3000,
            autoplay: true,
            dots: true,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },			
                
                767:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        })
        
        
    });

    /* Scroll To Top ============ */
	var scrollTop = function (){
		'use strict';
		var scrollTop = $("button.scroltop");
		/* page scroll top on click function */	
		scrollTop.on('click',function() {
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		})

		$(window).bind("scroll", function() {
			var scroll = $(window).scrollTop();
			if (scroll > 900) {
				$("button.scroltop").fadeIn(1000);
			} else {
				$("button.scroltop").fadeOut(1000);
			}
		});
		/* page scroll top on click function end*/
	}

    scrollTop();

    var screenWidth = $( window ).width();

    /* Header Height ============ */
	var handleResizeElement = function(){
		$('.header').css('height','');
		var HeaderHeight = $('.header').height();
		$('.header').css('height', HeaderHeight);
		if(screenWidth > 991 ){
			$('.homedemo').find('.mega-menu').css('height','calc(100vh - '+HeaderHeight+'px)');
		}
	}
	
	/* Load File ============ */
	var dzTheme = function(){
		 'use strict';
		 var loadingImage = '<img src="images/loading.gif">';
		 $('.dzload').each(function(){
		 var dzsrc =   siteUrl + $(this).attr('dzsrc');
		  //$(this).html(loadingImage);
		 	$(this).hide(function(){
				$(this).load(dzsrc, function(){
					$(this).fadeIn('slow');
				}); 
			})
			
		 });
		 
		
		if(screenWidth <= 991 ){
			$('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function(e){
				if($(this).parent().hasClass('open'))
				{
					$(this).parent().removeClass('open');
				}
				else{
					$(this).parent().parent().find('li').removeClass('open');
					$(this).parent().addClass('open');
				}
			});
		}
		
		
		$('.full-sidenav .navbar-nav > li > a').next('.sub-menu').slideUp();
		$('.full-sidenav .sub-menu > li > a').next('.sub-menu').slideUp();
			
		$('.full-sidenav .navbar-nav > li > a, .full-sidenav .sub-menu > li > a').unbind().on('click', function(e){
			$('.full-sidenav .navbar-nav > li > a').not(this).next('.sub-menu').slideUp();
			$(this).next('.sub-menu').toggle(500);
		});
		$('.menu-icon').on('click',function(){
			$('.menu-close,.full-sidenav').addClass('active');
			onePageLayout();
		});
		$('.menu-close').on('click',function(){
			$('.menu-close,.full-sidenav').removeClass('active');
		});
		
		
		$('.contact-btn').on('click',function(){
			$('.contact-button, .contact-button-2').toggleClass('active');
			
		});
		$('.enter-button, .enquire').on('click',function(){
			$('.enter-form').addClass('active');
			
			setTimeout(function() {
				$('.enter-form').removeClass('active');
			}, 500);
		});
		
		setTimeout(function() {
			$("#myModal").modal('show');
		}, 3000)
	}

    dzTheme();


})(jQuery);

(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".header-wpr");

    if(headerContainer != null){
        window.onscroll = ()=>{
            this.scrollY > 80 ? headerContainer.classList.add("fixed") : headerContainer.classList.remove("fixed");
        }
    }

    var navToggle = document.querySelector(".nav-toggle");

    if(navToggle !== null){

        navToggle.addEventListener("click",()=>{

            $(".ec-nav-menu").slideToggle("200");
     
         })
    }

    $("li.menu-item-has-children").on("click",function(){

        $(".sub-menu").slideToggle("200");
        
    })

})()
