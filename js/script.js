$(document).ready(function () {

  //#region showing-selected-bullet
  $(document).on('click', '.bullet', (element) => {
    $('.bullet').removeClass('selected');
    $(element.target).addClass('selected');
  })
  //#endregion showing-selected-bullet


  //#region showing-banner-page-1
  $(document).on('click', '.bullet-1', () => {

    $('.banner-page-1').removeClass('second-banner third-banner').addClass('first-banner')
    $('.banner-page-2').removeClass('first-banner third-banner').addClass('second-banner')
    $('.banner-page-3').removeClass('first-banner second-banner').addClass('third-banner')

  })
  //#endregion showing-banner-page-1


  //#region showing-banner-page-2 
  $(document).on('click', '.bullet-2', () => {

    $('.banner-page-2').removeClass('second-banner third-banner').addClass('first-banner')
    $('.banner-page-1').removeClass('first-banner third-banner').addClass('second-banner')
    $('.banner-page-3').removeClass('first-banner second-banner').addClass('third-banner')

  })
  //#endregion showing-banner-page-2 



  //#region  showing-banner-page-3
  $(document).on('click', '.bullet-3', () => {

    $('.banner-page-3').removeClass('second-banner third-banner').addClass('first-banner')
    $('.banner-page-2').removeClass('first-banner third-banner').addClass('second-banner')
    $('.banner-page-1').removeClass('first-banner second-banner').addClass('third-banner')

  })
  //#endregion showing-banner-page-3


  //#region showing banner-pages with setInterval
  let customIndex = 0;
  window.setInterval(() => {

    if (customIndex > 2) {
      customIndex = 0;
    }

    if (customIndex == 0) {
      $('.banner-page-1').removeClass('second-banner third-banner').addClass('first-banner')
      $('.banner-page-2').removeClass('first-banner third-banner').addClass('second-banner')
      $('.banner-page-3').removeClass('first-banner second-banner').addClass('third-banner')

      $('.bullet').removeClass('selected');
      $($('.bullet').eq(customIndex)).addClass('selected');
    }

    if (customIndex == 1) {

      $('.banner-page-2').removeClass('second-banner third-banner').addClass('first-banner')
      $('.banner-page-1').removeClass('first-banner third-banner').addClass('second-banner')
      $('.banner-page-3').removeClass('first-banner second-banner').addClass('third-banner')

      $('.bullet').removeClass('selected');
      $($('.bullet').eq(customIndex)).addClass('selected');

    }

    if (customIndex == 2) {

      $('.banner-page-3').removeClass('second-banner third-banner').addClass('first-banner')
      $('.banner-page-2').removeClass('first-banner third-banner').addClass('second-banner')
      $('.banner-page-1').removeClass('first-banner second-banner').addClass('third-banner')


      $('.bullet').removeClass('selected');
      $($('.bullet').eq(customIndex)).addClass('selected');

    }

    customIndex += 1;


  }, 10000)
  //#endregion showing banner-pages with setInterval


  //#region testimonials slider
  $('.comments').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  //#endregion testimonials slider


  //#region latest-news slider
  $('.latest-news-bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1500,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1
        }
      }
    ]

  });

  $('.slick-dots').on('click', function () {
    $('.autoplay').slick('slickPause');
  });
  //#endregion latest-news slider

  //#region news-twitter slider
  $('.news-twitter-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500
  });
  //#endregion news-twitter slider

  //#region Open-Close-Mobile-Nav
  $(document).on('click', '.burger-menu', function () {
    $(".mobile-nav").slideToggle()
  })
  //#endregion Open-Close-Mobile-Nav

  //#region accordion
  $("#accordion > li > span").click(function () {
    $(this).closest('li').siblings().find('span').removeClass('active').next('div').slideUp(250);
    $(this).toggleClass("active").next('div').slideToggle(250);
  });
  //#endregion accordion


  //#region Tranffering Tab Title
  $(document).on('click', '.tab', function () {
    $('.tab').removeClass('active-tab');
    $(this).addClass('active-tab');
    $('.content-title').text($(this).children().eq(0).text())
  })
  //#endregion Tranffering Tab Title

  //#region Pricing-Slider
  $('.pricing-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  //#endregion Pricing-Slider





});