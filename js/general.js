//* mostly harmless

var flipper = 0

$('.clearFace').click(function() {
    $('#inertialFrame').toggle();
    $('.overView').toggle();
    $('.loadNotes').toggle();
    $('.playback').toggle();
    $('.controls').toggle();
    if (flipper) {
       $('#tilt').removeClass('fa-flip-horizontal');
       flipper = 0;      
    } else {
      $('#tilt').addClass('fa-flip-horizontal');
      flipper = 1;
    }
  });

$('.overView').click(function() {
    Reveal.toggleOverview();
    });



var titleShowing = 0;

$('#inertialFrame').click(function() {

    if (titleShowing) {
       $(this).css("bottom", -14+"px");
       titleShowing = 0;  
    } else {
      $(this).css("bottom", 0+"px");
       titleShowing = 1;   
    }
  });



// $('.loadNotes').click(function() {
//     $('#notePane').toggle();
//     });


//* cross-check on devices

Reveal.addEventListener( 'slidechanged', function( event ) {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  var slideTitled = event.currentSlide.title;
  if (slideTitled) {
    document.getElementById('titleText').innerHTML = slideTitled;
    } else {
      document.getElementById('titleText').innerHTML = "weather in a tank";
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




