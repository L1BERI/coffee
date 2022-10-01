$(function () {
  $(".header__top-nav a, .up").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  })

  $('.burger,.overlay').on('click', function (e) {
    e.preventDefault()
    $('.burger').toggleClass('burger--active')
    $('.header__top').toggleClass('header__top--media')
    $('.overlay').toggleClass('overlay--visible')
  })

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--media') === false) {
      $('.burger').addClass('burger--scroll')
      // $('.up').addClass('up--scroll')
    } else {
      $('.burger').removeClass('burger--scroll')
      // $('.up').removeClass('up--scroll')
    }
  }, 0);

  setInterval(() => {
    if ($(window).scrollTop() > 110 && $('.header__top').hasClass('header__top--media') === false) {
      $('.header__top-nav').addClass('header__top-nav--scroll')
    } else {
      $('.header__top-nav').removeClass('header__top-nav--scroll')
    }
  }, 0);

  $('.nav__list-item').on('click', function(e){
    e.preventDefault()
    if ($('.header__top').hasClass('header__top--media')){
      $('.header__top').removeClass('header__top--media')
      $('.overlay').removeClass('overlay--visible')
      $('body').css('overflow-y', 'scroll')
    }
  })
  setInterval(() => {
    if ($('.overlay').hasClass('overlay--visible')) {
      $('body').css('overflow', 'hidden')
    } else {
      $('body').css('overflow', 'scroll')
    }

  }, 0);

});