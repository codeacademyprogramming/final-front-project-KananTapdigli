$(document).ready(function () {

    //#region showing-selected-bullet
    $(document).on('click', '.bullet', (element) => {
        $('.bullet').removeClass('selected');
        $(element.target).addClass('selected');
    })
    //#endregion showing-selected-bullet


    //#region showing-banner-page-1
    $(document).on('click', '.bullet-1', () => {

        $('.banner-page-1').css({
            'z-index': '3',
            'opacity': '1'
        });
        $('.banner-page-2').css({
            'z-index': '2',
            'opacity': '0'
        });
        $('.banner-page-3').css({
            'z-index': '1',
            'opacity': '0'
        });

    })
    //#endregion showing-banner-page-1


    //#region showing-banner-page-2 
    $(document).on('click', '.bullet-2', () => {

        $('.banner-page-2').css({
            'z-index': '3',
            'opacity': '1',
        });
        $('.banner-page-1').css({
            'z-index': '2',
            'opacity': '0'
        });
        $('.banner-page-3').css({
            'z-index': '1',
            'opacity': '0'
        });

    })
    //#endregion showing-banner-page-2 



    //#region  showing-banner-page-3
    $(document).on('click', '.bullet-3', () => {

        $('.banner-page-3').css({
            'z-index': '3',
            'opacity': '1',
        });
        $('.banner-page-2').css({
            'z-index': '2',
            'opacity': '0'
        });
        $('.banner-page-1').css({
            'z-index': '1',
            'opacity': '0'
        });

    })
    //#endregion showing-banner-page-3


    //#region showing banner-pages with setInterval
    let customIndex = 0;
    window.setInterval(() => {

        if (customIndex > 2) {
            customIndex = 0;
        }

        if (customIndex == 0) {
            $('.banner-page-1').css({
                'z-index': '3',
                'opacity': '1'
            });
            $('.banner-page-2').css({
                'z-index': '2',
                'opacity': '0'
            });
            $('.banner-page-3').css({
                'z-index': '1',
                'opacity': '0'
            });

            $('.bullet').removeClass('selected');
            $($('.bullet').eq(customIndex)).addClass('selected');
        }

        if (customIndex == 1) {

            $('.banner-page-2').css({
                'z-index': '3',
                'opacity': '1',
            });
            $('.banner-page-1').css({
                'z-index': '2',
                'opacity': '0'
            });
            $('.banner-page-3').css({
                'z-index': '1',
                'opacity': '0'
            });

            $('.bullet').removeClass('selected');
            $($('.bullet').eq(customIndex)).addClass('selected');

        }

        if (customIndex == 2) {

            $('.banner-page-3').css({
                'z-index': '3',
                'opacity': '1',
            });
            $('.banner-page-2').css({
                'z-index': '2',
                'opacity': '0'
            });
            $('.banner-page-1').css({
                'z-index': '1',
                'opacity': '0'
            });

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
        focusOnSelect: true
    });
    //#endregion testimonials slider


    //#region latest-news slider
    $('.latest-news-bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        dots: true,
        autoplaySpeed: 1500,
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

    

});