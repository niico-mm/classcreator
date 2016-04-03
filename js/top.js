$(function() {
  initSelect();
  setHierSelect();
  decisionInput();
  createClass();
});

function initSelect() {
  $('#level-2 option:not(.default)').hide();
  $('#level-2 option').attr('selected', false);
  $('#level-3').prop('checked', false);
  $('#js-trigger').attr('disabled', true).addClass('disabled');
}

function setHierSelect() {
  $('#level-1').on('change', function(){
    initSelect();
    var categoryName = $('#level-1 option:selected').data('cat');
    $('#level-2 [data-cat="' + categoryName + '"]').show();

    //rayoutのときにcmnの入力不可
    if(categoryName === 'rayout') {
      $('#level-3').attr('disabled', true).addClass('disabled');
    } else {
      $('#level-3').attr('disabled', false).removeClass('disabled');
    }
  });
}

function decisionInput () {
  if ($('#level-2 option:not(.default)').is(':selected') && $('#level-4').val() !== "") {
    $('#js-trigger').attr('disabled', false).removeClass('disabled');
  } else {
    $('#js-trigger').attr('disabled', true).addClass('disabled');
  }
}

function createClass () {
  $('#level-2').on('change', function(){
    decisionInput();
  });
  $('#level-4').on('keyup', function() {
    decisionInput();
  });

  $('#js-trigger').on('click', function(){
    var lv2 = $('#level-2 option:selected').val();
    var lv3 = $('#level-3:checked').val();
    var lv4 = $('#level-4').val();
    var lv5 = $('#level-5').val();

    // if (lv3) {
    //   var primaryName = lv2 + '-' + lv3;
    // } else {
    //   var primaryName = lv2;
    // }
    //
    // if (lv5) {
    //   var secondaryName = lv4 + '-' + lv5;
    // } else {
    //   var secondaryName = lv4;
    // }
    //
    // var createName = primaryName + '-' + secondaryName;

    var createName = lv2;
    if (lv3) {
      createName = createName + '-' + lv3;
    }
    createName = createName + '-' + lv4;
    if (lv5) {
      createName = createName + '-' + lv5;
    }

    $('#js-create').text(createName);
  });
}
