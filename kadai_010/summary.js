$(function(){
$('#change-color').on('click',function(){
$('#target').css('color','red');
});

$('#changr-text').on('click',function(){
  const p =$('p').text('Hello!');
});

$('#fade-out').on('click',function(){
  $('#target').fadeOut();
});

$('#fade-in').on('click',function(){
 $('#target').fadeIn();
});

});