"use strict";
$('.aside-tabs__item').on('click', function (e) {
  e.preventDefault();
  let index = $(this).index();
  $('.aside-tabs__item').removeClass('active');
  $('.rates-doc__body').removeClass('show');
  $(this).addClass('active');
  $('.rates-doc__body').eq(index).addClass('show');
})