
$(document).ready(function () {
    $(function(){
        $('.phone').mask("+380(99) 999-99-99");
    });

    $('.open-modal').click(() => {
        $('#callback-container').css('display', 'flex');
    });

    $('.callback-cancel-close, #callback-container').click((e) => {
        if(e.target.id === 'callback-container' || e.target.id === 'callback-cancel-close') {
            $('#callback-container').hide();
        }
    });

    $('.callback-btn > button').click(() => {
        let name = $('#name');
        let callbackSend = $('#callback-send');
        if (name.val()) {
            callbackSend.show();
            callbackSend.css('display', 'flex');
            $('#callback-content').hide();
        } else {
            name.css('border', '1px solid red');
            $('.form-action-error ').show();
        }
    });

    $('#contact-phone').click(() => {
        $('#callback-container').show();
    });

    $('#success-cancel-close, #success-container, #callback-btn-close').click((e) => {
        if(e.target.id === 'success-container' || e.target.id === 'success-cancel-close' || e.target.id === 'callback-btn-close') {
            $('#success-container').hide();
        }
    });

    $('#tariff-btn').click(() => {

        let error = $('.form-action-error');
        error.hide();
        let hasError = false;
        let choose = $('#choose');
        let phone = $('#phone');
        let email = $('#email');
        let success = $('#success-container');


        if (!phone.val()) {
            phone.siblings('.form-action-error').show();
            // error.css('display', 'block')
            hasError = true;
            phone.css('border-color', 'red');
            // return;
        } else {
            phone.css('border-color', 'transparent');
            phone.siblings('.form-action-error').hide();
        }

        if (!email.val()) {
            email.siblings('.form-action-error').show();
            // error.css('display', 'block');
            hasError = true;
            email.css('border-color', 'red');
            return;

        } else {
            email.css('border-color', 'transparent');
        }

            if (phone.val() && email.val() && choose.val()) {
                success.css('display', 'flex');
                success.show();
                // $('form[name=myForm]').trigger('reset');
                $('#form-action-block').hide();
                $.ajax({
                    method: 'POST',
                    url: 'mail.php',
                    data: {choose: choose.val(), phone: phone.val(), email: email.val()}
                })
                    .done(function (response){
                        alert(response);
                    })
                    fail(function (response) {
                        alert(response);
                    })
            }
    });

    let menuOpen = false;
    let hasError = false;
    let item1 = $('.tariff-item-info-more1');

    $('.tariff-item-info-more1').click(function() {

        if(menuOpen === false) {
            menuOpen = true;
            hasError = true;
            $('.tariff-item-more1').css('display', 'block');
            $('.tariff-svg-down1').hide();
            $('.tariff-svg-up1').show();
            $('.info-more1').hide();
            $('.info-less1').show();
            $('.form-field').addClass('active')
        } else if(menuOpen === true) {
            menuOpen = false;
            $('.tariff-item-more1').css('display', 'none');
            $('.info-more1').show();
            $('.info-less1').hide();
            $('.tariff-svg-down1').show();
            $('.tariff-svg-up1').hide();
        }
    });

    $('.tariff-item-info-more2').click(function() {
        if(menuOpen === false) {
            menuOpen = true;
            $('.tariff-item-more2').css('display', 'block');
            $('.tariff-svg-down2').hide();
            $('.tariff-svg-up2').show();
            $('.info-more2').hide();
            $('.info-less2').show();
        } else if(menuOpen === true) {
            menuOpen = false;
            $('.tariff-item-more2').css('display', 'none');
            $('.tariff-svg-down2').show();
            $('.tariff-svg-up2').hide();
            $('.info-more2').show();
            $('.info-less2').hide();
        }
    });

    $('.tariff-item-info-more3').click(function() {
        if(menuOpen === false) {
            menuOpen = true;
            $('.tariff-item-more3').css('display', 'block');
            $('.tariff-svg-down3').hide();
            $('.tariff-svg-up3').show();
            $('.info-more3').hide();
            $('.info-less3').show();
        } else if(menuOpen === true) {
            menuOpen = false;
            $('.tariff-item-more3').css('display', 'none');
            $('.tariff-svg-down3').show();
            $('.tariff-svg-up3').hide();
            $('.info-more3').show();
            $('.info-less3').hide();
        }
    });

    $(function() {
        $('.form-field').click(function() {
            $('.form-field').removeClass("active");
            $(this).toggleClass("active");
        })
    });

    $('option').mouseover(function(){
        $('option').css('color', '#ff993e');
    });

    let helpers = {
        addZeros: function (n) {
            return (n < 10) ? n : '' + n;
        }
    };

    $(window).on('load resize', function() {
        if ($(window).width() < 1121) {
            $('#advantage-items:not(.slick-initialized)').slick({
                centerMode: false,
                variableWidth: false,
                dots: true,
                infinite: true,
                speed: 350,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 581,
                        settings: {
                            centerMode: false,
                            slidesToShow: 1,
                            // centerPadding: '630px',
                            slidesToScroll: 1,
                            dots: true,
                            infinite: true,
                        },
                    },
                ]
            });
        } else {
            $("#advantage-items.slick-initialized").slick("unslick");
        }
    });

    // slider graduates

    function sliderInit() {
        let $slider = $('.slider-holder');
        $slider.each(function() {
            let $sliderParent = $(this).parent();
            $(this).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                // variableWidth: true,
                responsive: [
                    {
                        breakpoint: 1201,
                        settings: {
                            centerMode: false,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: true,
                            infinite: true,
                        },
                    },
                    {
                        breakpoint: 985,
                        settings: {
                            centerMode: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            infinite: true,
                        },
                    },

                    {
                        breakpoint: 561,
                        settings: {
                            centerMode: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            infinite: true,
                        }
                    }
                ]
            });

            if ($(this).find('.item').length > 1) {
                $(this).siblings('.slides-numbers').show();
            }

            $(this).on('afterChange', function(event, slick, currentSlide){
                $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
            });

            let sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
            $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

        });
    }

    sliderInit();

    // teacher

    $('.your-class').slick({
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 924,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
        ]
    });


    $(window).on('load resize', function() {
        if ($(window).width() < 1101) {
            $('#teacher-items:not(.slick-initialized)').slick({
                centerMode: false,
                dots: true,
                infinite: true,
                speed: 100,
                slidesToShow: 2,
                responsive: [
                    {
                        breakpoint: 924,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: false,
                        }
                    },
                ]
            });
        } else {
            $("#teacher-items.slick-initialized").slick("unslick");
        }
    });

    $(function() {
        $('.slick-dots > li').click(function() {
            $('.slick-dots li').removeClass("active");
            $(this).toggleClass("active");
        })
    });

    let menuShow = FontFaceSetLoadEvent;
    $('.teacher-item-info-more1').click(() => {
        if(menuShow === false) {
            menuShow = true;
            $('.teacher-block1 p').css('display', 'block');
            $('.teacher-svg-down1').css('display', 'none');
            $('.teacher-svg-up1').css('display', 'block');
            $('.teacher-more1').css('display', 'none');
            $('.teacher-less1').css('display', 'block');
        } else if(menuShow === true) {
            menuShow = false;
            $('.teacher-block1 p').css('display', 'none');
            $('.teacher-svg-down1').css('display', 'block');
            $('.teacher-svg-up1').css('display', 'none');
            $('.teacher-more1').css('display', 'block');
            $('.teacher-less1').css('display', 'none');
        }
    });

    $('.teacher-item-info-more2').click(() => {
        if(menuShow === false) {
            menuShow = true;
            $('.teacher-block2 p').css('display', 'block');
            $('.teacher-svg-down2').hide();
            $('.teacher-svg-up2').show();
            $('.teacher-more2').hide();
            $('.teacher-less2').show();
        } else if(menuShow === true) {
            menuShow = false;
            $('.teacher-block2 p').css('display', 'none');
            $('.teacher-more2').show();
            $('.teacher-less2').hide();
            $('.teacher-svg-down2').show();
            $('.teacher-svg-up2').hide();
        }
    });


    $('.teacher-item-info-more3').click(() => {
        if(menuShow === false) {
            menuShow = true;
            $('.teacher-block3 p').css('display', 'block');
            $('.teacher-svg-down3').hide();
            $('.teacher-svg-up3').show();
            $('.teacher-more3').hide();
            $('.teacher-less3').show();
        } else if(menuShow === true) {
            menuShow = false;
            $('.teacher-block3 p').css('display', 'none');
            $('.teacher-more3').show();
            $('.teacher-less3').hide();
            $('.teacher-svg-down3').show();
            $('.teacher-svg-up3').hide();
        }
    });

    $('.teacher-item-info-more4').click(() => {
        if(menuShow === false) {
            menuShow = true;
            $('.teacher-block4 p').css('display', 'block');
            $('.teacher-svg-down4').hide();
            $('.teacher-svg-up4').show();
            $('.teacher-more4').hide();
            $('.teacher-less4').show();
        } else if(menuShow === true) {
            menuShow = false;
            $('.teacher-block4 p').css('display', 'none');
            $('.teacher-more4').show();
            $('.teacher-less4').hide();
            $('.teacher-svg-down4').show();
            $('.teacher-svg-up4').hide();
        }
    });

    $('#burger').click(() => {
        $('.menu').show();
        $('#header-container').css('padding-left', '0');
        $('#close').css('display', 'block');
        // $('#header').toggleClass('menu-open');
    })

    $('#header .menu ul li, #close').click(() => {
        // $('#header').removeClass('menu-open');
        $('.menu_burger').hide();
        $('#close').hide();
        $('#header-container').css('padding-left', '20px');
    })

})

