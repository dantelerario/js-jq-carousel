// js-jq-carousel

$(document).ready( function() {

  console.log('OK') //debug

var arrowL = $('.arrow-left');

var arrowR = $('.arrow-right');





arrowL.click( function() {
  console.log('cliccato');  //debug

  var img = $('.active');
  var pImg = img.prev();

  if (img.hasClass('first')) {
    img.hadClass('active');
  }
  else if (img.hasClass('active')) {
    img.removeClass('active').addClass('hidden');
    pImg.removeClass('hidden').addClass('active');
  }


})

arrowR.click( function() {
  console.log('cliccato');  //debug

  var img = $('.active');
  var nImg = img.next();

  if (img.hasClass('last')) {
    img.hadClass('active');
  }
  else if (img.hasClass('active')) {
    img.removeClass('active').addClass('hidden');
    nImg.removeClass('hidden').addClass('active');
  }


})





















})
