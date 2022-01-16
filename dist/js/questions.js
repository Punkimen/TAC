"use strict";
$('.accordion__title').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active').next().slideToggle();
});