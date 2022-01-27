"use strict";
// main func
$(window).on('resize', function () {
  navToMobile();
  footerColChanged()
});
navToMobile();
footerColChanged()
// main func end

// header
const burgerChange = () => {
  $('.burger__icon').on('click', function () {
    $(this).toggleClass('active')
    $('.mobile-menu').slideToggle()
  })
};
burgerChange()

function navToMobile() {
  const windowWidth = $(window).width();
  if (windowWidth < 768) {
    $('.mobile-menu__container').prepend($('.header__nav'))
  } else {
    $('.header__logo').after($('.header__nav'))
  };
};
// header end

// scroll=href
$('[scroll-href]').on('click', function (e) {
  e.preventDefault();
  const id = $(this).attr('scroll-href');

  $([document.documentElement, document.body]).animate({
    scrollTop: $(id).offset().top
  }, 1300);

})

// footer
function footerColChanged() {
  const windowWidth = $(window).width();
  if (windowWidth < 992) {
    $('.footer-top__right').prepend($('.footer-phone'))
  } else {
    $('.footer-top__left').append($('.footer-phone'))
  };
}

// popup
const timer = (seconds, el, cb) => {
  let sec = seconds;
  let h, m, s, t;
  function countDown() {
    if (sec > 0) {
      sec--;
      h = sec / 3600 ^ 0,
        m = (sec - h * 3600) / 60 ^ 0,
        s = sec - h * 3600 - m * 60,
        t = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
      el.text(t);
    } else {
      if (cb != null) {
        cb()
      }

      return false
    }
    setTimeout(function () {
      countDown();
    }, 1000);
  }
  countDown()
}
function showPopup(el) {
  $('.popups').show();
  $(el).addClass('show');
}
function closePopup() {
  $('.popups').hide();
  $('.popup').removeClass('show')
}
function noCloseShowPopup(el) {
  $('.popups-noclose').show();
  $(el).addClass('show');
}
function noCloseClosePopup() {
  $('.popups-noclose').hide();
  $('.popup').removeClass('show')
}
function renderUniversalPopup(title, text) {
  $('#popup__universal .popup__title').text(title)
  $('#popup__universal .popup__text').text(text)
}

$('[data-popup]').on('click', function (e) {
  e.preventDefault()

  let el = $(this).attr('data-popup')

  showPopup(el)
  timer(3, $('.timer'), null)
  // timer(3, $('.timer'), closePopup)
});

$('.js-close-popup').on('click', function () {
  closePopup()
});
document.addEventListener('click', e => {
  if (e.target.className === 'popups__inner') {
    closePopup()
  }
});
// popup end

// validation
jQuery.extend(jQuery.validator.messages, {
  required: "Заповніть поле",
});

$.jMaskGlobals.translation["d"] = $.jMaskGlobals.translation["0"];
delete $.jMaskGlobals.translation["0"];
$('.input-phone').mask('+38 (0ZZ) ZZZ-ZZ-ZZ', {
  nonInput: [0],
  translation: {
    'Z': {
      pattern: /[0-9]/, optional: true
    },
  },
});

$('.login__form').validate();
$('.form-quest').validate();
$('#login-btn').on('click', function (e) {
  e.preventDefault();
  if ($('.login__form').valid()) {
    $('.login__form').submit()
    window.location.href = 'step_1.html';
  }
})
$('.form-questions__btn').on('click', function (e) {
  e.preventDefault();
  if ($('.form-quest').valid()) {
    renderUniversalPopup("Успішно", "Ваша заявка успішно відправлена очікуйте дзвінка")
    showPopup("#popup__universal")
    // $('.form-quest').submit()
  }
})