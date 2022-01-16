"use strict";
// main func
$(window).on('resize', function () {
  navToMobile();
  footerAccord()

});
navToMobile();
footerAccord()

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

// footer

function footerAccord() {
  let windowWidth = $(window).width();
  if (windowWidth <= 767) {
    $('.footer-accord__opened .footer-col__label').on('click', function () {
      $(this).toggleClass('active')
      if (!$(this).next().hasClass('show')) {
        $(this).next().addClass('show')
      } else {
        $(this).next().removeClass('show')
      }
    })
  } else {
    $(this).next().show()
    $('.footer-accord__opened .footer-col__label').on('click', function () {
      return false
    })
  }
}


// footer end

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