"use strict";
$(window).on('resize', function () {
  changeImgPos();
});
changeImgPos();
function changeImgPos() {
  const windowWidth = $(window).width();
  if (windowWidth < 992) {
    $('.form-questions__inner').append($('.form-questions__img'))
  } else {
    $('.form-questions__inner').after($('.form-questions__img'))
  };
}