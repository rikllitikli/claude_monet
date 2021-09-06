$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            1000:{
                items:4
            },
            992:{
                items:3
            },
            576:{
                items:3
            },
            575:{
                items:2
            },
            414:{
                items:2
            },
            413:{
                items:1
            },
            0:{
                items:1
            },
        }
    });
});

