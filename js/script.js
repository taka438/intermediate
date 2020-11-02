$(function() {
  // ヘッダー固定
  var navG = $('.navGlobal').offset().top;
  var height = $('#header').outerHeight(true);
  $(window).scroll(function() {
    if ($(window).scrollTop() > navG) {
      $('body').addClass('is-fixed');
      $('body').css('margin-top', height);
    } else {
      $('body').removeClass('is-fixed');
      $('body').css('margin-top', 0);
    }    
  });
  // アコーディオン
  $('.faq-list li').click(function() {
    var $answer = $(this).find('.faq-list_a');
    if ($answer.hasClass('is-open')) {
      $answer.removeClass('is-open');
      $answer.slideUp(200);
    } else {
      $answer.addClass('is-open');
      $answer.slideDown(200);
    }
  });
  // お問い合わせスクロール
  $('a[href^="#"]:not([href="#"]):not([href=""])').click(function() {
    var target = $($(this).attr('href')).offset().top;
    $('html, body').animate({
      scrollTop: target
    }, 500, 'swing');
    return false;
  });
  //  フォーム入力チェック
  $(document).ready(function () {
    const $submitBtn = $('#submit')
    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="mail"]').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #privacyCheck').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
  
      } else {
        $submitBtn.prop('disabled', true);
      }
    });
  });
  // 入力後
  $(document).ready(function () {
    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf5wOCeJNPZWeaW3Mfq5EmTo3OEbIM-W5u6mmKF07McIknDQw/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".end-message").slideDown();
            $(".submit-btn").fadeOut();
            window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
      
    });
  });
  // ハンバーガーメニュー
  $('.nav-button').click(function() {
    var navBtn = $(this).find('.nav-button_line');
    if (navBtn.hasClass('is-nav-open')) {
      navBtn.removeClass('is-nav-open');
      // $('.navGlobal').slideUp();
      $('.navGlobal-sp').css('transform', 'translateY(-100vh)');
    } else {
      navBtn.addClass('is-nav-open');
      // $('.navGlobal').slideDown();
      $('.navGlobal-sp').css('transform', 'translateY(0vh)');
    }
  });
  // ハンバーガーメニューのaリンクがクリックされたら、メニューが閉じる
  $('.navGlobal-list-sp a').click(function() {
    $('.nav-button').trigger('click');
  });
  
  // swiper
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3.76,
    spaceBetween: 55,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    simulateTouch: true,
    breakpoints: {
      1366: {
        spaceBetween: 55,
      },
      1024: {
        slidesPerView: 3.76,
        spaceBetween: 30,
      },
      769: {
        slidesPerView: 3.76,
        spaceBetween: 30,
      },
      568: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      }
    }
  });
});