$(document).ready(function() {
// Add jQuery here

$('.m-open').click(function(){
    $('.nav').addClass('slide-in');
    $('.menu-open').addClass('hide');
    $('.menu-close').removeClass('hide');
});

$('.m-close').click(function(){
    $('.nav').removeClass('active');
    $('.m-close').addClass('hide');
});

$('.b-red').click(function(){

    $('.col').addClass('hide');
    $('.col').removeClass('show');

    $('.col.red').addClass('show');
    $('.col.red').removeClass('hide');


});

$('.b-blue').click(function(){

    $('.col').addClass('hide');
    $('.col').removeClass('show');

    $('.col.blue').addClass('show');
    $('.col.blue').removeClass('hide');


});

















// Dont remove this line
  });
