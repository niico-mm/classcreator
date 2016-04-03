$(function() {
  initSelect();
  setHierSelect();
  createClass();
});

function initSelect() {
  $('#level-2 option:not(.default)').hide();
  $('#level-2 option').attr('selected', false);
}

function setHierSelect() {
  $('#level-1').change(function(){
    initSelect();
    var categoryName = $('#level-1 option:selected').data('cat');
    $('#level-2 [data-cat="' + categoryName + '"]').show();
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

    $('.txt-create').append(createName);
  });
}
