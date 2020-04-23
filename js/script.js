$(document).ready(function () {

  function SelectingBullet() {
    //#region showing-selected-bullet
    $(document).on('click', '.bullet', function () {
      $('.bullet').removeClass('selected');
      $(this).addClass('selected');
    })
    //#endregion showing-selected-bullet
  }
  SelectingBullet()


  function ShowingBanners() {

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
    let customIndex = 1;
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
  }
  ShowingBanners()


  function TestimonialsSlider() {
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
  }
  TestimonialsSlider()


  function SliderLatestNews() {
    //#region latest-news slider
    $('.latest-news-bottom').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      dots: true,
      arrows: false,
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
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    });

    $('.slick-dots').on('click', function () {
      $('.autoplay').slick('slickPause');
    });
    //#endregion latest-news slider
  }
  SliderLatestNews()

  function NewsTwitterSlider() {
    //#region news-twitter slider
    $('.news-twitter-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 1500
    });
    //#endregion news-twitter slider
  }
  NewsTwitterSlider()


  function ToggleMobileNav() {
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
  }
  ToggleMobileNav()


  function TranferTabTitle() {
    //#region Tranffering Tab Title
    $(document).on('click', '.tab', function () {
      $('.tab').removeClass('active-tab');
      $(this).addClass('active-tab');
      $('.content-title').text($(this).children().eq(0).text())
    })
    //#endregion Tranffering Tab Title
  }
  TranferTabTitle()

  function PricingSlider() {
    //#region Pricing-Slider
    $('.pricing-slider').slick({
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    //#endregion Pricing-Slider
  }
  PricingSlider()


  function CloseModal() {
    // #region closing-all-modal
    $(window).on('click', () => {
      let target = $(event.target);
      if (target.is('.modal') || target.is('.modal-container')) {
        $('.modal').removeClass('active-m');
        $('body').css('overflow', 'auto');
      }
    })
    // #endregion closing-all-modal
  }
  CloseModal()


  function OpenCloseVideo() {
    //#region Open-Video
    $(document).on('click', '.play-button', () => {
      $('.modal').addClass('active-m');
      $('body').css('overflow', 'hidden');
    })
    //#endregion Open-Video


    //#region Close-Video

    $(document).on('click', '.quit-x', () => {
      $('.modal').removeClass('active-m');
      $('body').css('overflow', 'auto');
    })

    $('.modal').each(function () {
      var src = $(this).find('iframe').attr('src');

      $(this).on('click', function () {

        $(this).find('iframe').attr('src', '');
        $(this).find('iframe').attr('src', src);

      });
    });
    //#endregion Close-Video
  }
  OpenCloseVideo()


  function ShowingNavScroll() {
    //#region Showing-Nav-On-Scroll
    $(window).scroll(function () {
      var height = $(window).scrollTop();

      if (height > $('header').outerHeight()) {
        $('.header-bottom').addClass('header-fixed');
        $('.st-btn').addClass('st-btn-active');
      } else {
        $('.header-bottom').removeClass('header-fixed');
        $('.st-btn').removeClass('st-btn-active');
      }
    });
    //#endregion Showing-Nav-On-Scroll
  }
  ShowingNavScroll()


  function ScrollTop0() {
    //#region Scroll-Top-Page
    $(document).on('click', '.st-btn', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    })
    //#endregion Scroll-Top-Page
  }
  ScrollTop0()

  function ShowingDateAppointment() {
    //#region Showing Date Appointment
    $(document).on('click', '#calendar-body td', function (element) {
      month_year = $(element.target).parent().parent().parent().siblings().eq(0).text();
      for (let i = 1; i < 32; i++) {
        num_text = i.toString();
        if ($(element.target).text().indexOf(`${num_text}`) !== -1) {
          $('.choosing-date').text(`${num_text} ${month_year} `)
          $('#calendar-body td').removeClass('active-date');
          $(element.target).addClass('active-date');
        }
      }
    })
    //#endregion Showing Date Appointment
  }
  ShowingDateAppointment()


  function OpenCloseAppointmentForm() {

    // #region Opening-Closing Appointment Form
    $(document).on('click', '.appointment-hour .button', () => {
      $('.modal').addClass('active-app-form');
    })
    $(window).on('click', () => {
      let target = $(event.target);
      if (target.is('.modal') || target.is('.modal-container')) {
        $('.modal').removeClass('active-app-form');
      }
    })
    // #endregion Opening-Closing Appointment Form
  }
  OpenCloseAppointmentForm()


  function ShowingActiveTrs() {
    //#region schedule active trs
    $('.timetable-select').change(function () {
      $('.timetable-bottom td').removeClass('active-td')

      var value = $(this).val();

      if (value == 'pulmonologist') {
        $(`.${value}`).addClass('active-td');
      } else if (value == 'peditrician') {
        $(`.${value}`).addClass('active-td');
      } else if (value == 'neurologist') {
        $(`.${value}`).addClass('active-td');
      } else if (value == 'geriatrician') {
        $(`.${value}`).addClass('active-td');
      } else if (value == 'cardologist') {
        $(`.${value}`).addClass('active-td');
      } else if (value == 'dentist') {
        $(`.${value}`).addClass('active-td');
      } else if (value == 'prthopaedics') {
        $(`.${value}`).addClass('active-td');
      } else if (value == 'cardiologist') {
        $(`.${value}`).addClass('active-td');
      } else if (value == 'pediatrician') {
        $(`.${value}`).addClass('active-td');
      } else if (value == 'prtjopaedisc') {
        $(`.${value}`).addClass('active-td');
      } else if (value == 'gynecological') {
        $(`.${value}`).addClass('active-td');
      }
    });
    //#endregion schedule active trs
  }
  ShowingActiveTrs()


  function SearchingDoctor() {
    //#region search-doctor on click
    $(document).on("click", '.search-button', function () {
      let searchValue = $('.search-doctor-input').val().toLowerCase().trim();
      $(".doctor-name").filter(function () {
        $(this).parent().parent().parent().toggle($(this).text().toLowerCase().trim().indexOf(searchValue) > -1)
      });
    })
    //#endregion search-doctor on click

    //#region search-doctor on enter press
    $(document).on('keypress', function (element) {
      if (element.which == 13) {
        let searchValue = $('.search-doctor-input').val().toLowerCase().trim();
        $(".doctor-name").filter(function () {
          $(this).parent().parent().parent().toggle($(this).text().toLowerCase().trim().indexOf(searchValue) > -1)
        });
      }
    });
    //#endregion search-doctor on enter press
    //#endregion search-doctor
  }
  SearchingDoctor()


  function OpenCloseDoctorForm() {
    // #region opening-closing form in find-doctor
    $(document).on('click', '.doctor-item .appointment', () => {
      $('.modal').addClass('active-m');
      $('body').css('overflow', 'hidden');
    })
    $(window).on('click', () => {
      let target = $(event.target);
      if (target.is('.modal') || target.is('.modal-container')) {
        $('.modal').removeClass('active-m');
        $('body').css('overflow', 'auto');
      }
    })
    // #region opening-closing form in find-doctor
  }
  OpenCloseDoctorForm()


  function clinicSlide() {
    $(document).on('click', '.gallery-photo', () => {
      $('.modal').addClass('active-m');
      $('body').css('overflow', 'hidden');
    })

    let sliderIndex = 0;

    $(document).on('click', '.plus-overlay-1', () => {
      sliderIndex = 0;
      $('.clinic-slider-element').removeClass('active-slide').addClass('non-active-slide');
      $('.clinic-slider-element').eq(sliderIndex).removeClass('non-active-slide').addClass('active-slide');
    })

    $(document).on('click', '.plus-overlay-2', () => {
      sliderIndex = 1;
      $('.clinic-slider-element').removeClass('active-slide').addClass('non-active-slide');
      $('.clinic-slider-element').eq(sliderIndex).removeClass('non-active-slide').addClass('active-slide');
    })

    $(document).on('click', '.plus-overlay-3', () => {
      sliderIndex = 2;
      $('.clinic-slider-element').removeClass('active-slide').addClass('non-active-slide');
      $('.clinic-slider-element').eq(sliderIndex).removeClass('non-active-slide').addClass('active-slide');
    })

    $(document).on('click', '.right-button', () => {
      sliderIndex += 1;
      if (sliderIndex > 2) {
        sliderIndex = 0;
      }
      $('.clinic-slider-element').removeClass('active-slide').addClass('non-active-slide');
      $('.clinic-slider-element').eq(sliderIndex).removeClass('non-active-slide').addClass('active-slide');
    })

    $(document).on('click', '.left-button', () => {
      sliderIndex -= 1;
      if (sliderIndex < 0) {
        sliderIndex = 2;
      }
      $('.clinic-slider-element').removeClass('active-slide').addClass('non-active-slide');
      $('.clinic-slider-element').eq(sliderIndex).removeClass('non-active-slide').addClass('active-slide');
    })

    $(document).on('click', '.quit', () => {
      $('.modal').removeClass('active-m');
      $('body').css('overflow', 'auto');
    })
  }
  clinicSlide()



  function TitleClinic() {
    $(document).on('click', '.department-ul li', function () {
      $('.department-ul li').removeClass('active-clinic-tab');
      $(this).addClass('active-clinic-tab');

      $('.frame-item .heading').text($(this).text())
      $('.frame-item .changable-subtitle').text($(this).text())
    })
  }
  TitleClinic()



  // #region AOS animation
  AOS.init({
    offset: 100,
    duration: 2000,
    easing: "ease-out-quad",
    once: !0
  });
  window.addEventListener('load', AOS.refresh);
  // #endregion AOS animation
});