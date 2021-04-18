$(document).ready(function() {
    $('.wrapper').addClass('loaded');
    // работа бургера
    $('.icon-menu').click(function(event){
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu__link').click(function(event) {
        $('.icon-menu, .menu__body').removeClass('active');
        $('body').removeClass('lock')
    });
    // функция backgrounda
    function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
        $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
    }

    ibg();

    ////// работа slick slaider
    $('.slider').slick({
        arrows:true,
        slidesToShow: 4,  
        slidesToScroll: 2,      
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        swipe: true,
        responsive: [
    {
        breakpoint: 376, 
        settings: {
            // вносим изменения на ширине 375 и ниже 
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    ]
    });
});

