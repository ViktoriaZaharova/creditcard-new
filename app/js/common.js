$(function () {

  $(".main_carousel").owlCarousel({
    loop: true,
    mouseDrag: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 4,
    slideBy: 1,
    navSpeed: 900,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      768: {
        items: 4
      }
    }
  });

    $(".text_page-slider").owlCarousel({
        loop: true,
        mouseDrag: true,
        margin: 0,
        center: true,
        // autoplay: true,
        // autoplayTimeout: 3000,
        items: 3,
        navSpeed: 900,
        smartSpeed: 900,
        dots: true,
        responsive: {
            0: {
                items: 1,
                center: false
            },
            860: {
                items: 3
            }
        }
    });


  $(".reviews_carousel").owlCarousel({
    loop: true,
    mouseDrag: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 700,
    items: 1,
    navSpeed: 900,
    dots: true
  });

  $('.sidebar_menu ul li span').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.sidebar_menu ul li span').not(this).removeClass('in').next().slideUp();
  });

  $('.panel_heading .block_title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
  });

  $("a.gallery").fancybox(
    {
      "padding": 20,
      "imageScale": false,
      "zoomOpacity": false,
      "zoomSpeedIn": 1000,
      "zoomSpeedOut": 1000,
      "zoomSpeedChange": 1000,
      "frameWidth": 700,
      "frameHeight": 600,
      "overlayShow": true,
      "overlayOpacity": 0.8,
      "hideOnContentClick": false,
      "centerOnScroll": false

    });

    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });

  // tabs
  // $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
  //   $(this)
  //     .addClass('active').siblings().removeClass('active')
  //     .closest('.personal_area > .container').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  // });


// активная ссылка меню
  $('.pagination li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
      $(this).addClass('current');
    }
  });
// end

  $('input[name="number_card"]').mask('0000');
  $('input[name="shelf_life"]').mask('00:00:00');
  $('input[name="cvv"]').mask('0000');
  $('input[name="phone"]').mask('+38(000)-000-00-00');

});


$(document).ready(function () {
  $(".slider_list1").slider({
    animate: true,
    range: "min",
    value: 0,
    min: 1,
    max: 1000,
    step: 1,

    slide: function (event, ui) {
      $(".slider-result1").html(ui.value);
    },

    change: function (event, ui) {
      $('.znch1').attr('value', ui.value);
    }

  });

  $(".slider_list2").slider({
    animate: true,
    range: "min",
    value: 0,
    min: 1,
    max: 1000,
    step: 1,

    slide: function (event, ui) {
      $(".slider-result2").html(ui.value);
    },

    change: function (event, ui) {
      $('.znch2').attr('value', ui.value);
    }

  });

  $("#slider_list3").slider({
    animate: true,
    range: "min",
    value: 0,
    min: 1,
    max: 1000,
    step: 1,

    slide: function (event, ui) {
      $(".slider-result3").html(ui.value).append("грн");
    },

    change: function (event, ui) {
      $('.znch3').attr('value', ui.value);
    }

  });


  $("#slider_list4").slider({
    animate: true,
    range: "min",
    value: 0,
    min: 1,
    max: 24,
    step: 1,

    slide: function (event, ui) {
      $(".slider-result4").html(ui.value).append("мес");
    },

    change: function (event, ui) {
      $('.znch4').attr('value', ui.value);
    }

  });

    $('.popup-content').magnificPopup({
        type: 'inline',
        preloader: false,
        mainClass: 'mfp-zoom-in',
        removalDelay: 500,
        closeOnBgClick: false,
        fixedContentPos: true
    });

    $('.steps').steps({
        headerTag: 'h3',
        bodyTag: 'section',
        autoFocus: true,
        stepsOrientation: 'horizontal',
        transitionEffect: 'slide',
        transitionEffectSpeed: 250,
        labels: {
            next: 'Далее',
            previous: '',
            finish: 'Завершить'
        }
    });

    $('.credit-steps-form').steps({
        headerTag: 'h3',
        bodyTag: 'section',
        autoFocus: true,
        stepsOrientation: 'horizontal',
        transitionEffect: 'fade',
        transitionEffectSpeed: 250,
        titleTemplate: '<span class="number">#index#</span>',
        labels: {
            next: 'Продолжить',
            previous: 'Сохранить',
            finish: 'Оформить'
        }
    });

    $('.input-effect input, .input-effect textarea').focusout(function() {
        if ($(this).val() != '') {
            $(this).addClass('has-content');
        } else {
            $(this).removeClass('has-content');
        }
    });

    $('.input-effect').each(function(i, item) {
        if ($(item).find('input').val() !== '') {
            $(item).find('input').addClass('has-content');
        }
    });

    $('#messages .icon').click(function() {
        var parent = $(this).parent();
        if (parent.hasClass('open')) {
            parent.removeClass('open').find('.messages-popup').slideUp(200);
        } else {
            parent.addClass('open').find('.messages-popup').slideDown(200);
        }
    });

    $(document).mouseup(function(e) {
        var item = $('#messages');
        if (item.has(e.target).length === 0) {
            item.removeClass('open').find('.messages-popup').slideUp(200);
        }
    });

    $('#select-a-payment-method-popup .show-more').click(function() {
        $(this).parent().find('.items.hidden').slideDown(300).removeClass('hidden');
        $(this).remove();
    });

    $('#registration-address-checkbox').change(function() {
        if (this.checked) {
            $('#registration-address').slideUp(300);
        } else {
            $('#registration-address').slideDown(300);
        }
    });
    $('.magnif-popup-close').on('click', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


});

