$(document).ready(function(){

    $(".about__toogle").click(function(event){
        event.preventDefault();
        
        $(".about-content__box").hide();
        // $(".about-content__box").fadeOut();
        
        var href = $(this).attr("href");
        
        // $(href).show();
        $(href).fadeIn();
        
    });

var windowHeight = $(window).height();
// console.log(windowHeight);

// Следим за скроллом и показываем/скрываем кнопку
    $(window).scroll(function(){
        // console.log( $(this).scrollTop());
        // if ( $(this).scrollTop() > 1260) {
        if ( $(this).scrollTop() > windowHeight) {
            $ ("#scrollToTop").fadeIn();
        } else {
            $ ("#scrollToTop").fadeOut();
        }
    });

// При клике на кнопку делаем прокрутку наверх страницы
    $("#scrollToTop").click(function(event){
        event.preventDefault();

        $("html").animate({scrollTop: 0}, 800);
    });

});


