(function ($) {
"use strict";
    // owl-carousel
    $('.testimonial-active').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            992:{
                items:1
            }
        }
    })

    // owl-carousel
    $('.brand-active').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        nav:true,
        navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
        dots:true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:3
            },
            992:{
                items:5
            }
        }
    })
})(jQuery);	