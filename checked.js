$(function(){
  $("input[type='checkbox']").on('change', function () {if ($(".check:checked").length > 0) {
    $(".menu").addClass("active");} 
  else {$(".menu").removeClass("active");}});});
