"use strict";
$('.passport-type__input').on('change', function () {
  if ($(this).prop('checked') === true && $(this).attr('id') === "radio_passport") {
    $('.passport-type__body').removeClass('show');
    $('.passport-type__body').eq(0).addClass('show');
  } else if ($(this).prop('checked') === true && $(this).attr('id') === "radio_idCard") {
    $('.passport-type__body').removeClass('show');
    $('.passport-type__body').eq(1).addClass('show');
  }
})

const adressSwitch = document.querySelector('.adress-switch')
function adressLeaveShow() {

  if ($('#adress-check').prop('checked') === true) {
    $('#adress-leave').hide()
  } else {
    $('#adress-leave').show()
  }
}
if (adressSwitch) {
  adressLeaveShow()
}
$('#adress-check').on('change', function () {
  adressLeaveShow()
})