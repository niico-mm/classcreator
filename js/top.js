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
    $('#level-2 option').attr('value');
  });
}
