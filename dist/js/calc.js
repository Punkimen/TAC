"use strict";

// const calc = () => {
//   let termplusSumm = $('.date_plusSumm'),
//     termminusSumm = $('.date_minusSumm'),
//     summplusSumm = $('.sum_plusSumm'),
//     summminusSumm = $('.sum_minusSumm'),
//     getSumm = $('.get__sum');
//   let handle = function () {



//     summminusSumm.on('click', function (event) {
//       let summFormat = + $(this).siblings('.summ').val().replace(/\s/g, '');
//       if (summFormat !== 0) {
//         summFormat -= 1000;
//         $('#summ').val($('#calculation-range-summ').val(summFormat))
//       }
//     })

//     termplusSumm.on('click', function (event) {
//       let term = +$(this).siblings('.term').val().replace(/\s/g, '');
//       if (term !== 60 && term !== 6) {
//         term += 12;
//         $('#term').val($('#calculation-range-term').val(term))
//       } else if (term == 6) {
//         term += 6;
//         $('#term').val($('#calculation-range-term').val(term))
//       }
//     })
//     termminusSumm.on('click', function (event) {
//       let term = +$(this).siblings('.term').val().replace(/\s/g, '');

//       if (term !== 6 && term !== 12) {
//         term -= 12;
//         $('#term').val($('#calculation-range-term').val(term))
//       } else if (term == 12) {
//         term -= 6;
//         $('#term').val($('#calculation-range-term').val(term))
//       }
//     })

//   };
//   handle();
//   $('#calculation-range-summ').ionRangeSlider({
//     min: $('#calculation-range-summ').attr('min'),
//     max: $('#calculation-range-summ').attr('max'),
//     step: $('#calculation-range-summ').attr('step'),
//     hide_min_max: true,
//     hide_from_to: true,
//     onStart: function (data) {
//       $('#summ').val($('#calculation-range-summ').val())
//     },
//     onChange: function (data) {
//       $('#summ').val($('#calculation-range-summ').val())
//     },
//     onFinish: function (data) {
//       $('#summ').val($('#calculation-range-summ').val())
//     },
//     onUpdate: function (data) {
//       $('#summ').val($('#calculation-range-summ').val())
//     },
//   })
//   $('#calculation-range-term').ionRangeSlider({
//     min: $('#calculation-range-term').attr('min'),
//     max: $('#calculation-range-term').attr('max'),
//     step: $('#calculation-range-term').attr('step'),
//     hide_min_max: true,
//     hide_from_to: true,
//     onStart: function (data) {
//       $('#term').val($('#calculation-range-term').val())
//     },
//     onChange: function (data) {
//       $('#term').val($('#calculation-range-term').val())
//     },
//     onFinish: function (data) {
//       $('#term').val($('#calculation-range-term').val())
//     },
//     onUpdate: function (data) {
//       $('#term').val($('#calculation-range-term').val())
//     }
//   })
// }
// calc()

const calc = () => {
  // calc
  let $range = $("#calculation-range-summ"),
    $rangeTerm = $("#calculation-range-term"),
    $inputSumm = $("#summ"),
    $inputTerm = $("#term"),
    instanceSumm,
    instanceTerm,
    minSumm = 1000,
    maxSumm = 500000,
    minTerm = 6,
    maxTerm = 60,
    plusSumm = $('.sum_plus'),
    minusSumm = $('.sum_minus'),
    plusTerm = $('.date_plus'),
    minusTerm = $('.date_minus');


  // summ
  $('#calculation-range-summ').ionRangeSlider({
    min: minSumm,
    max: maxSumm,
    step: 500,
    hide_min_max: true,
    hide_from_to: true,
    onStart: function (data) {
      $inputSumm.prop("value", data.from);
      calculation()
    },
    onChange: function (data) {
      $inputSumm.prop("value", data.from);
      calculation()
    }
  })
  instanceSumm = $range.data("ionRangeSlider");
  $inputSumm.on("input", function () {
    var val = $(this).prop("value");
    // validate
    if (val < minSumm) {
      val = minSumm;
    } else if (val > maxSumm) {
      val = maxSumm;
    }

    instanceSumm.update({
      from: val
    });
    calculation()
  });
  plusSumm.on('click', function () {
    let value = +$inputSumm.val()
    value += 500;
    if (value > maxSumm) {
      return false
    }
    $inputSumm.val(value)
    instanceSumm.update({
      from: value
    });
    calculation()
  })
  minusSumm.on('click', function () {
    let value = +$inputSumm.val()
    value -= 500;
    if (value < minSumm) {
      return false
    }
    $inputSumm.val(value)
    instanceSumm.update({
      from: value
    });
    calculation()
  })
  // summEnd

  //term
  var custom_values = [6, 12, 24, 36, 48, 60];
  var my_from = custom_values[0];

  $('#calculation-range-term').ionRangeSlider({
    // min: minTerm,
    // max: maxTerm,
    // from: my_from,
    values: custom_values,
    hide_min_max: true,
    hide_from_to: true,
    onStart: function (data) {
      $inputTerm.prop("value", custom_values[data.from]);
      calculation()
    },
    onChange: function (data) {
      $inputTerm.prop("value", custom_values[data.from]);
      calculation()
    }
  })
  instanceTerm = $rangeTerm.data("ionRangeSlider");

  plusTerm.on('click', function () {
    console.log(custom_values.length);

    if (custom_values.length - 1 > instanceTerm.old_from) {
      let value = custom_values[instanceTerm.old_from + 1]
      $inputTerm.val(value)
      instanceTerm.update({
        from: instanceTerm.old_from + 1
      });
      calculation()
    } else {
      return false
    }
  })
  minusTerm.on('click', function () {
    if (instanceTerm.old_from != 0) {
      let value = custom_values[instanceTerm.old_from - 1]
      $inputTerm.val(value)
      instanceTerm.update({
        from: instanceTerm.old_from - 1
      });
      calculation()
    } else {
      return false
    }
  })

  //term end

  function calculation() {
    let summ = +$('#summ').val();
    let term = +$('#term').val();
    let percent = 0.01;
    let creditSumm = summ / term
    let creditSummFormat = Math.round(creditSumm);
    $('#return__sum').text(creditSummFormat)
  }
  calculation()
}
calc()
// calc