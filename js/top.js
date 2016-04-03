$(function() {
  initSelect();
  setHierSelect();
  createClass();
});

function initSelect() {
  $('#level-2 option:not(.default)').hide();
  $('#level-2 option').attr('selected', false);
  $('#level-3').prop('checked', false);
}

function setHierSelect() {
  $('#level-1').change(function(){
    initSelect();
    var categoryName = $('#level-1 option:selected').data('cat');
    $('#level-2 [data-cat="' + categoryName + '"]').show();

    if(categoryName == 'rayout') {
      $('#level-3').attr('disabled', true).addClass('disabled');
    } else {
      $('#level-3').attr('disabled', false).removeClass('disabled');
    }
  });
}

function createClass () {
  $('#js-trigger').on("click", function(){
    var lv2 = $('#level-2 option:selected').val();
    var lv3 = $('#level-3:checked').val();
    var lv4 = $('#level-4').val();
    var lv5 = $('#level-5').val();
    var createName = lv2 + '-' + lv3 + '-' + lv4 + '-' + lv5;

    console.log(createName);

    $('#js-create').text(createName);
  });
}
