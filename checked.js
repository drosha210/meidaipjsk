$(function(){
  $("input[type='checkbox']").on('change', function () {if ($(".toggle-menu-botton:checked").length > 0) {
    $(".menu").addClass("active");} 
  else {$(".menu").removeClass("active");}});});
