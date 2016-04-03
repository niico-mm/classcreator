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
  $('#level-1').change(function(){
    initSelect();
    var categoryName = $('#level-1 option:selected').data('cat');
    $('#level-2 [data-cat="' + categoryName + '"]').show();

    //rayoutのときにcmnの入力不可
    if(categoryName == 'rayout') {
      $('#level-3').attr('disabled', true).addClass('disabled');
    } else {
      $('#level-3').attr('disabled', false).removeClass('disabled');
    }
  });
}

function decisionInput () {
  if ($('#level-2 option:not(.default)').is(':selected') && $('#level-4').val() != "") {
    $('#js-trigger').attr('disabled', false).removeClass('disabled');
  } else {
    $('#js-trigger').attr('disabled', true).addClass('disabled');
  }
}
function createClass () {
  $('#level-2').change(function(){
    decisionInput();
  });
  $('#level-4').keypress(function() {
    decisionInput();
  });
  $('#level-4').keyup(function() {
    decisionInput();
  });

  $('#js-trigger').on("click", function(){
    var lv2 = $('#level-2 option:selected').val();
    var lv3 = $('#level-3:checked').val();
    var lv4 = $('#level-4').val();
    var lv5 = $('#level-5').val();



    var createName = lv2 + '-' + lv3 + '-' + lv4 + '-' + lv5;

    console.log(lv3);

    $('#js-create').text(createName);
  });
}
