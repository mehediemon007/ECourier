;(function($){

    // WOW Animation
    
    $(document).ready(function () {
        new wow().init()
    });

    $(window).on('scroll', function () {
        if(jQuery('.sticky-header').length > 0){
            var menu = jQuery('.sticky-header');
            var merchant_login_btn = jQuery('#merchant-login-btn');
            if ($(window).scrollTop() > menu.offset().top) {
                menu.addClass('is-fixed');
                merchant_login_btn.addClass('btn-primary');
                merchant_login_btn.addClass('gradient');
                merchant_login_btn.removeClass('btn-light');
                $('.site-header .container > .logo-header .logo-3').attr('src','/images/logo.png');
            } else {
                menu.removeClass('is-fixed');
                merchant_login_btn.removeClass('gradient');
                merchant_login_btn.removeClass('btn-primary');
                merchant_login_btn.addClass('btn-light');
                $('.site-header .container > .logo-header .logo, .site-header .container > .logo-header .logo-2, .site-header .container > .logo-header .logo-3').attr('src','/images/logo.png')
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
