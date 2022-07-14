$(document).ready(function () {
  /*top_btn*/
  $('#top_btn').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    });
  });

  /*hamburger_btn*/
  var button_click = 0;
  $('.hamburger_btn').on('click', function (event) {
    event.preventDefault();

    $(this).toggleClass('on');
    $('.top_menu_wrap').toggleClass('visible');

    button_click++;
    if (button_click % 2 == 1) {
      $('body').css({
        overflow: 'hidden',
      });
    } else {
      $('body').css({
        overflow: 'scroll',
      });
    }
  }); /* hamburgur end*/

  /*top_menu*/
  $('section').each(function (index) {
    $(this).attr('data-index2', index);
  });

  $('.top_menu>li')
    .each(function (index) {
      $(this).attr('data-index2', index);
    })
    .click(function () {
      top_menu_click = $(this).attr('data-index2');

      $('.hamburger_btn').trigger('click');
    });

  /*section_2 click*/

  function sec2_switch(i) {
    $('.sec2_menu_wrap')
      .find('li')
      .eq(i)
      .click(function () {
        $('.slide_full_wrap').removeClass('slide_full_active');
        $('.slide_full_wrap').eq(i).addClass('slide_full_active');

        $('html, body').animate({
          scrollTop: sec3,
        });
      });
  }
  for (var j = 0; j < 4; j++) {
    sec2_switch(j);
  }

  /*scroll*/
  $(window).scroll(function () {
    sct = $(window).scrollTop();
    bt = $('.banner').height();

    /*top_btn*/
    if (sct > bt) {
      $('#top_btn').css({
        opacity: 1,
        visibility: 'visible',
        zIndex: 999,
      });
    } else {
      $('#top_btn').css({
        opacity: 0,
        visibility: 'hidden',
        zIndex: -1,
      });
    }

    /*scroll_btn*/
    if (sct > 0) {
      $('#scroll_btn').css({
        left: -246,
      });
    } else if (sct < bt) {
      $('#scroll_btn')
        .css({
          left: -153,
        })
        .hover(
          function () {
            $(this).css({
              left: -143,
            });
          },
          function () {
            $(this).css({
              left: -153,
            });
          }
        );
    }

    /*section_1 bg*/
    var offset = 600;
    if (sct >= sec1 - offset) {
      $('.sec1_bg').animate(
        {
          opacity: 1,
        },
        2000
      );
    }

    if (sct >= sec2 - offset) {
      $('.sec2_title').animate(
        {
          opacity: 1,
        },
        900
      );
    }

    $('#cover_img').each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* 3 */
      if (bottom_of_window > bottom_of_object / 2) {
        $(this).animate(
          {
            opacity: '1',
          },
          500
        );
      }
    });
  });

  var sec1 = $('#section_1').offset().top;
  var sec2 = $('#section_2').offset().top;
  var sec3 = $('#section_3').offset().top;
  var sec4 = $('#section_4').offset().top;

  function scroll_resize() {
    $('#scroll_btn').click(function () {
      $('html, body').animate({
        scrollTop: sec1,
      });

      console.log(sec1);
    });
  }
  scroll_resize();

  $(window).resize(function () {
    sec1 = $('#section_1').offset().top;
    sec2 = $('#section_2').offset().top;
    sec3 = $('#section_3').offset().top;
    sec4 = $('#section_4').offset().top;
  });
  /*------------video----------------*/

  /*------------sec3_slide-----------------*/
  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    arrow: true,
    speed: 300,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    asNavFor: '.slider-nav',
    centerMode: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.slider-nav')
    .on('init', function (event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 300,
      cssEase: 'linear',
      arrow: true,
      dots: false,
      focusOnSelect: true,
      infinite: true,
      centerMode: true,
      asNavFor: '.slider-single',

      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 959,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });

  /*slider_nav*/

  $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem =
      '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });

  $('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });

  $('.slide_full_wrap').each(function (index) {
    $(this).attr('data-index', index);
  });

  function slider_switch(select_wrap) {
    $(select_wrap)
      .find('span')
      .each(function (index) {
        $(this).attr('data-index', index);
      })
      .click(function () {
        click_nav_menu = $(this).attr('data-index');

        $(this)
          .addClass('slide_menu_active')
          .siblings()
          .removeClass('slide_menu_active');

        $('.slide_full_wrap')
          .addClass('slide_full_active')
          .siblings()
          .removeClass('slide_full_active');
        $('.slide_full_wrap').eq(click_nav_menu).addClass('slide_full_active');
      });
  }
  slider_switch('#udong_wrap .slide_menu_item');
  slider_switch('#tenpura_wrap .slide_menu_item');
  slider_switch('#nigiri_wrap .slide_menu_item');
  slider_switch('#sonota_wrap .slide_menu_item');

  $('.visible').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 3,
    centerMode: true,
    arrow: true,
    centerPadding: '200px',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: 'true',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrow: true,
        },
      },
      {
        breakpoint: 779,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  });

  /*----------------------------smmthWheel---------------*/

  /*------------scrollMagic----------------*/
  var controller = new ScrollMagic.Controller();

  $('section').each(function () {
    console.log(this);

    var ourScene = new ScrollMagic.Scene({
      triggerElement: /*'#section_2',*/ this,
      /*duration:'90%',*/
      triggerHook: 0.9,
    })

      .setClassToggle(/*'#section_2'*/ this, 'fade-in')
      /*.addIndicators({
                name: 'fade scene',
          
            })*/
      .addTo(controller);
  });

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.img_wrap>img',
    /*duration:'90%',*/
    triggerHook: 0.9,
    reverse: true,
  })

    .setClassToggle('.img_wrap>img', 'fade-in')
    /*     .addIndicators({
            name: 'fade scene 2',

            indent: 200,
           
        })*/
    .addTo(controller);

  $('.sec4_contents').each(function () {
    var ourScene2 = new ScrollMagic.Scene({
      triggerElement: this,
      /*duration:'90%',*/
      triggerHook: 0.9,
      reverse: true,
    })

      .setClassToggle(this, 'fade-in')
      /*.addIndicators({
                name: 'fade scene 3',
          
                indent: 200,
             
            })*/
      .addTo(controller);
  });

  var ourScene3 = new ScrollMagic.Scene({
    triggerElement: '.contents_align',
    /*duration:'90%',*/
    triggerHook: 0.9,
    reverse: true,
  })

    .setClassToggle('.contents_align', 'fade-in')
    /* .addIndicators({
            name: 'fade scene 3',
            indent: 200,
          
        })*/
    .addTo(controller);
}); /*end*/
