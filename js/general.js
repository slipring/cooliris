//* mostly harmless

var flipper = 0

$('.clearFace').click(function() {
    $('#inertialFrame').toggle();
    $('.overView').toggle();
    $('.loadNotes').toggle();
    $('.clockLock').toggle();
    $('.coRotator').toggle();
    $('.playback').toggle();
    $('.controls').toggle();
    $('.greenBuilding').toggle();
    $('.radome').toggle();
    $('.startTank').toggle();
    if (flipper) {
       $('#tilt').removeClass('fa-flip-horizontal');
       flipper = 0;      
    } else {
      $('#tilt').addClass('fa-flip-horizontal');
      flipper = 1;
    }
  });



$('.coRotator').click(function() {
    $('.clockLock').toggle();
    $('.greenBuilding').toggle();
    $('.radome').toggle();
    $('.startTank').toggle();
    $(this).toggleClass('fa-spinOut-1rpm');
    });

$('.overView').click(function() {
    Reveal.toggleOverview();
    });


$('.loadNotes').click(function() {
    $('#inertialFrame').toggle();
    });


var autoStream = 0;

$('.timeData').click(function() {
    if (autoStream == 0) {
      autoStream = 1; 
      $('.timeData').css("color","rgba(255,255,255,.9)");     
    } else {
      autoStream = 0;
      $('.timeData').css("color","#13daec;");
    }
  });








//* cross-check on devices


var titleShowing = 0;

$('#inertialFrame').click(function() {

  if (titleShowing == 0) {
     $(this).css("width","auto");
     $(this).css("bottom", -2+"px");
     $('#promptText').css("font-size", 2.2+"vw");
     $('#titleText').css("font-size", 3.2+"vw");
     titleShowing = 1; 
  } else { 
        if (titleShowing == 1) {
           $(this).css("bottom", 12+"px");
           $('#promptText').css("font-size", 2+"vw");
           $('#titleText').css("font-size", 3+"vw");
           titleShowing = 1.5;  
        } else {
            if (titleShowing == 1.5) {
              $(this).css("bottom", 53+"px");
              $('#promptText').css("font-size", 1.8+"vw");
              $('#titleText').css("font-size", 2.8+"vw");
              titleShowing = 2;   
            } else {
                if (titleShowing == 2) {
                   $(this).css("bottom", "25%");
                   var notesHeight = $('.notesPane').css('height');
                  $('#promptText').css("font-size", 2.5+"vw");
                  $('#titleText').css("font-size", 2.5+"vw");
                  $(this).addClass("fluidSpan");
                  var currentViewWind = $(window).width();
                  $('.fluidSpan').css("width",parseInt(currentViewWind)-155+"px");
                  $('#notesPane').show();
                  titleShowing = 3;   
                 } else {
                      if (titleShowing == 3) {
                          var currentViewWind = $(window).width();
                          $('.fluidSpan').css("width",parseInt(currentViewWind)-155+"px");
                          $('#notesPane').hide();
                          $(this).css("bottom", 0+"px");
                          // $('#promptText').css("font-size", 2+"vw");
                          // $('#titleText').css("font-size", 3+"vw");
                        titleShowing = 4;   
                       } else {
                          $(this).removeClass("fluidSpan");
                          $(this).css("width","auto");
                          $(this).css("bottom", -12+"px");
                          $('#promptText').css("font-size", 2.4+"vw");
                          $('#titleText').css("font-size", 3.4+"vw");
                          // $('#promptText').css("font-size", 10+"px");
                          // $('#titleText').css("font-size", 18+"px");
                          titleShowing = 0; 
                    }  
                }
              }
            }
          }
        });



$( window ).resize(function() {
  var currentViewWind = $(window).width();
  $('.fluidSpan').css("width",parseInt(currentViewWind)-155+"px");
});






  // if (slideTitled) {
  //   document.getElementById('titleText').innerHTML = slideTitled;
  //   var elem = document.getElementById('titleText');
  //   elem.innerHTML = slideTitled;
  //   elem.setAttribute("style","content: 500px; background-color: yellow;");
  //   content: 'WEATHER IN A TANK';
  //   } else {
  //     document.getElementById('titleText').innerHTML = "weather in a tank";
  //   }





Reveal.addEventListener( 'slidechanged', function( event ) {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  var slideTitled = event.currentSlide.title;
  if (slideTitled) {
    document.getElementById('titleText').innerHTML = slideTitled;
    document.getElementById('titleText').setAttribute( 'data-title', slideTitled );
    } else {
      document.getElementById('titleText').innerHTML = "weather in a tank";
      document.getElementById('titleText').setAttribute( 'data-title', "weather in a tank" );

    }
  // prompt reset, taking title of element with class preface or displaying default message
  document.getElementById('promptText').innerHTML = " ";
  var preEstablished = event.currentSlide.querySelector( '.preface' );
  if (preEstablished) {
    var lineDetail = preEstablished.title;
    document.getElementById('promptText').innerHTML = lineDetail;
  } else {
    document.getElementById('promptText').innerHTML = " ";
  }
  
  setTimeout(
             function() {
                 document.getElementById('notesPane').innerHTML = " ";
                var slID = event.currentSlide.id;
                var slTitle = event.currentSlide.title;
                // reporting to console.log
                console.log((event.indexh)+"-"+event.indexv+": #"+slID+" / "+slTitle);
                var notes = $("section.stack section.present aside.notes").text();
                if (notes) {
                 console.log(notes);
                 document.getElementById('notesPane').innerHTML = notes;
                 }  else {
                  notes = $("section.present aside.notes").text();
                  if (notes) {
                  console.log(notes);
                 document.getElementById('notesPane').innerHTML = notes;}
                 else {
                  console.log("blank");
                  document.getElementById('notesPane').innerHTML = " ";
                 }
                }
              }, 200); 

});


Reveal.addEventListener( 'fragmentshown', function( event ) {
  var titleBytes = event.fragment.title;
  if(titleBytes) {
    document.getElementById('promptText').innerHTML = titleBytes;
    } 
  else {
      document.getElementById('promptText').innerHTML = " ";
    }
});





Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var timeControl = event.currentSlide.getAttribute('timer');
    if(timeControl && autoStream == 1) {
      console.log( timeControl + ' second window' );
      msTimer = timeControl * 1000;
    Reveal.configure({ autoSlide: msTimer });
    }
  });


Reveal.addEventListener( 'fragmentshown', function( event ) {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  var timeControl = event.fragment.getAttribute('timer');
  if(timeControl && autoStream == 1) {
      console.log( timeControl + ' second window' );
      msTimer = timeControl * 1000;
    Reveal.configure({ autoSlide: msTimer });
    }
});























// Reveal.addEventListener( 'slidechanged', function( event ) {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv

  // reporting to slipstream

  // $("#slipstream>ul").prepend('<li><a href="#/'+(event.indexh)+'/'+(event.indexv)+'"><span class="tab">'+(event.indexh)+'-'+(event.indexv)+": "+slID+'</span></a></li>');
  // if (slTitle) {
  //   $("#slipstream>ul").prepend('<li><span class="tab">'+slTitle+'</span></li>');
  //   }
  // document.getElementById('notesPane').innerHTML = " ";
  // var slID = event.currentSlide.id;
  // var slTitle = event.currentSlide.title;
  // // reporting to console.log
  // console.log("Slide: "+(event.indexh)+"-"+event.indexv+": #"+slID+" : "+slTitle);
  // var notes = $("section.stack section.present aside.notes").text();
  // if (notes) {
  //  console.log(notes);
  //  document.getElementById('notesPane').innerHTML = notes;
  //  }  else {
  //   notes = $("section.present aside.notes").text();
  //   if (notes) {
  //   console.log(notes);
  //  document.getElementById('notesPane').innerHTML = notes;}
  //  }
  // console.log(event.currentSlide);
  // var thisSlide = event.currentSlide;
  // console.log(thisSlide);
  // var domThis = thisSlide.getElementsByClassName('aside.notes');
  // console.log(domThis);
// });













//* likely to be broken on mobile

//* uncertainly useful provisions ahead

// function toArray( o ) {
//   return Array.prototype.slice.call( o );
// };

// function sortFragments( fragments ) {
//   var a = toArray( fragments );
//   a.forEach( function( el, idx ) {
//     if( !el.hasAttribute( 'data-fragment-index' ) ) {
//       el.setAttribute( 'data-fragment-index', idx );
//     }
//   } );
//   a.sort( function( l, r ) {
//     return l.getAttribute( 'data-fragment-index' ) - r.getAttribute( 'data-fragment-index');
//   } );
//   return a;
// };

//* just putting this out there

// var fragWidth = 24;
// var fminWidth = 24;
// var activeFragThreshold = 12;
// var titleLength = parseInt($('#titleText').css("width"));
// $('#defrag').css("width", titleLength+fminWidth+"px");

//* defrag bar 

// Reveal.addEventListener( 'slidechanged', function( event ) {
  // titleLength = parseInt($('#titleText').css("width"));
  // $('#defrag').css("width", titleLength+fminWidth+"px");
  // var fragmentPool = sortFragments( event.currentSlide.querySelectorAll( '.fragment' ) );
  // var totalFrags = fragmentPool.length;
  // // console.log(parseInt(titleLength));
  // console.log("total fragments: "+totalFrags);
  // if (totalFrags) {
  //   var firstFrag = (fragmentPool[0]);
  //   var minIndex = firstFrag.getAttribute( 'data-fragment-index' );
  //   var lastFrag = (fragmentPool[totalFrags-1]);
  //   var maxIndex = lastFrag.getAttribute( 'data-fragment-index' );
  //   var fragSets = maxIndex-minIndex+1;
  //   console.log("frag moments: "+fragSets);
  //   fragWidth = Math.floor(titleLength/fragSets);
  //   console.log(fragWidth+" / "+titleLength);
  //   $('#defrag').css("width",fragSets*fragWidth+fminWidth+"px"); 
  //   // console.log(fragSets);
  // } else { ;
  //           setTimeout(
  //             function() {
  //               $('#defrag').css("width",titleLength+"px")
  //             }, 1000); }
  // });


// Reveal.addEventListener( 'fragmentshown', function( event ) {
  // $("#slipstream>ul").prepend('<li>'+ event.timeStamp + '</li>');
  
  // var bandwidth = $('#defrag').css("width");
  // if (parseInt(bandwidth) > activeFragThreshold ) {
  //   $('#defrag').css("width",parseInt(bandwidth)-fragWidth+"px");
  // }
// });




