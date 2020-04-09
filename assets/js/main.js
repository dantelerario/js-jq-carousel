// js-jq-carousel

$(document).ready( function() {

  console.log('OK') //debug

// VARIABILI ARROW
var arrowL = $('.arrow-left');

var arrowR = $('.arrow-right');


//FRECCIA SINISTRA
arrowL.click( function() {
  console.log('cliccato');  //debug

  var img = $('.active');
  var pImg = img.prev();

  if (img.hasClass('first')) {
    img.addClass('active');
  }
  else if (img.hasClass('active')) {
    img.removeClass('active').addClass('hidden');
    pImg.removeClass('hidden').addClass('active');
  }

})

//FRECCIA DESTRA
arrowR.click( function() {
  console.log('cliccato');  //debug

  var img = $('.active');
  var nImg = img.next();

  if (img.hasClass('last')) {
    img.addClass('active');
  }
  else if (img.hasClass('active')) {
    img.removeClass('active').addClass('hidden');
    nImg.removeClass('hidden').addClass('active');
  }

})

//KEYDOWN SECTION
//KEY DESTRA
$(document).keydown( function(e) {
  var img = $('.active');
  var nImg = img.next();

  if (e.keyCode == 39 && img.hasClass('last') ) {
    img.addClass('active');
  } else if (e.keyCode == 39) {
    img.removeClass('active').addClass('hidden');
    nImg.removeClass('hidden').addClass('active');
  }
});

//KEY SINISTRA
$(document).keydown( function(e) {
  var img = $('.active');
  var pImg = img.prev();

  if (e.keyCode == 37 && img.hasClass('first') ) {
    img.addClass('active');
  } else if (e.keyCode == 37) {
    img.removeClass('active').addClass('hidden');
    pImg.removeClass('hidden').addClass('active');
  }
});





















})
