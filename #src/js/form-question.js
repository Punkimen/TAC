"use strict";
$(window).on('resize', function () {
  changeImgPos();
  changeTextBtn();
});
changeImgPos();
changeTextBtn();
function changeImgPos() {
  const windowWidth = $(window).width();
  if (windowWidth < 992) {
    $('.form-questions__inner').append($('.form-questions__img'))
  } else {
    $('.form-questions__form').after($('.form-questions__img'))
  };
}

function changeTextBtn() {
  const windowWidth = $(window).width();
  if (windowWidth < 768) {
    $('.form-questions__btn').text('Відправити')
  } else {
    $('.form-questions__btn').text('Відправити повідомлення')
  };
}
