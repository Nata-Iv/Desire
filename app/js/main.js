$(function () {

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--hide');
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--hide');
    });

    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: ".living"
        }
    });
})