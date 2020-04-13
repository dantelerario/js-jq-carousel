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

//FRECCIA SINISTRA DOT
arrowL.click( function() {
  console.log('dot click');

  var dot = $('.active-dot');
  var pDot = dot.prev();

  if (dot.hasClass('first-dot')) {
    dot.addClass('active-dot');
  }
  else if (dot.hasClass('active-dot')) {
    dot.removeClass('active-dot').addClass('white-dot');
    pDot.addClass('active-dot').removeClass('white-dot');
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

//FRECCIA DESTRA DOT
arrowR.click( function() {
  console.log('dot click');

  var dot = $('.active-dot');
  var nDot = dot.next();

  if (dot.hasClass('last-dot')) {
    dot.addClass('active-dot');
  }
  else if (dot.hasClass('active-dot')) {
    dot.removeClass('active-dot').addClass('white-dot');
    nDot.addClass('active-dot').removeClass('white-dot');
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

//KEY DESTRA DOTS
$(document).keydown( function(e) {
  var dot = $('.active-dot');
  var nDot = dot.next();

  if (e.keyCode == 39 && dot.hasClass('last-dot')) {
    dot.addClass('active-dot');
  }
  else if (e.keyCode == 39 && dot.hasClass('active-dot')) {
    dot.removeClass('active-dot').addClass('white-dot');
    nDot.addClass('active-dot').removeClass('white-dot');
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

//KEY SINISTRA DOTS
$(document).keydown( function(e) {
  var dot = $('.active-dot');
  var pDot = dot.prev();

  if (e.keyCode == 37 && dot.hasClass('first-dot')) {
    dot.addClass('active-dot');
  }
  else if (e.keyCode == 37 && dot.hasClass('active-dot')) {
    dot.removeClass('active-dot').addClass('white-dot');
    pDot.addClass('active-dot').removeClass('white-dot');
  }
});


})
