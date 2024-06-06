$(document).ready(function () {



    // header-toggle-content

    $(".header-section .container .row .column .h-brgr").click(function () {
        $(".header-section .container .row .column .navigation ").slideDown(500)
    })
    $(".header-section .container .row .column .navigation .close-btn").click(function () {
        $(".header-section .container .row .column .navigation").slideUp(300)
    })


    // number-counting
    $('.stat-number').each(function () {
        var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            step: function (func) {
                $(this).text(parseFloat(func).toFixed(size));
            }
        });
    });

    //slider-----------------------+++____+++-----------------------//

    $(".right-arrow").click(function () {
        $(".slick-prev  ").click()
    })
    $(".left-arrow").click(function () {
        $(".slick-next  ").click()
    })

 

    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    autoplay: true,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-two').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    autoplay: true,
                    slidesToScroll: 1
                }
            }
        ]
    });





    //hover-cntrl

    // $(".img-box").hover(function () {
    //     $(".hover-eff").toggle()
    // })
    // $(".img-box").mouseleave(function () {
    //     $(".hover-eff").hide()
    // })
});

