

(function () {
    var $noselex = $('.no-hilight');
  $noselex.draggable = false;
  $noselex.mousedown(function(e) { e.preventDefault(); }, false);
})();



/*props to http://jsfiddle.net/sCanr/1/ */

(function () {
        var $troposection = $('#troposection');
        var $parcelat = $('#parcelat');
        var parcelatW2 = $parcelat.width()/2;
        var parcelatH2 = $parcelat.height()/2;    
        var radius = 200;
        var deg = 0;    
        var elP = $('#troposection').offset();
        var elPos = { x: elP.left, y: elP.top};
        var X = 0, Y = 0;
        var mdown = false;
        $('#troposection')
        .mousedown(function (e) { mdown = true; })
        .mouseup(function (e) { mdown = false; })
        .mousemove(function (e) {
            if (mdown) {
               var mPos = {x: e.clientX-elPos.x, y: e.clientY-elPos.y};
               var atan = Math.atan2(mPos.x-radius, mPos.y-radius);
               deg = -atan/(Math.PI/180) + 180; // final (0-360 positive) degrees from mouse position 
                
               X = Math.round(radius* Math.sin(deg*Math.PI/180));    
               Y = Math.round(radius*  -Math.cos(deg*Math.PI/180));
               $parcelat.css({ left: X+radius-parcelatW2, top: Y+radius-parcelatH2 });              
               // AND FINALLY apply exact degrees to ball rotation
               $parcelat.css({ WebkitTransform: 'rotate(' + deg + 'deg)'});
               $parcelat.css({ '-moz-transform': 'rotate(' + deg + 'deg)'});
               //
               // PRINT DEGREES
               var fromEQ = 90;
               if ((deg < 360) && (deg > 180)){
                var flipThis = 270 - deg;
                fromEQ = -flipThis;
               }
               else {
                fromEQ = 90 - deg;
               }
               var latRound = Math.floor(fromEQ);           
               $('#angleread').html('Latitude = '+latRound); 
            }
        });
})();


/* generic EventListener cued by data-state="customevent" attributed to a section*/
Reveal.addEventListener( 'parcelzone', function() {
  $( "#troposection" ).toggle();
  $( "#parcelat" ).toggle();
  $( "#angleread").toggle();
  console.log( '"parcelzone" has fired' );
} );

Reveal.addEventListener( 'tempgrad', function() {
  $( "#troposection" ).hide();
  $( "#parcelat" ).hide();
  $( "#angleread").hide();
  console.log( '"tempgrad" has fired' );
} );

Reveal.addEventListener( 'analogues', function() {
  $( "#troposection" ).hide();
  $( "#parcelat" ).hide();
  $( "#angleread").hide();
  console.log( '"analogues" has fired' );
} );


Reveal.addEventListener( 'slidechanged', function( event ) {
 // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var lastScene = event.previousSlide;
    console.log(lastScene);
 } );




// Reveal.addEventListener( 'slidechanged', function( event ) {
//  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
// console.log( event.currentSlide);
// var thisSlide = event.currentSlide;
// var nixSelect = thisSlide.get$('.no-hilight');
// if (nixSelect) {
//     console.log(nixSelect);
//     nixSelect.draggable = false;
//     nixSelect.addEventListener("mousedown", function(e) { e.preventDefault(); }, false);
//   } else {
//     console.log("this needs fixed");
//   }
//  } );



Reveal.addEventListener( 'slidechanged', function( event ) {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  var slideTitled = event.currentSlide.title;
  if (slideTitled) {
    document.getElementById('titleText').innerHTML = slideTitled;
    } else {
      document.getElementById('titleText').innerHTML = "Untitled Slide";
    }
  } );















/* uncertainly useful provisions */
function toArray( o ) {
  return Array.prototype.slice.call( o );
};

function sortFragments( fragments ) {
  var a = toArray( fragments );
  a.forEach( function( el, idx ) {
    if( !el.hasAttribute( 'data-fragment-index' ) ) {
      el.setAttribute( 'data-fragment-index', idx );
    }
  } );
  a.sort( function( l, r ) {
    return l.getAttribute( 'data-fragment-index' ) - r.getAttribute( 'data-fragment-index');
  } );
  return a;
};

var fragWidth = 24;


/* defrag bar */
Reveal.addEventListener( 'slidechanged', function( event ) {
  document.getElementById('promptText').innerHTML = " ";
  var alreadyScene = event.currentSlide.querySelector( '.prefacing' );
  if (alreadyScene) {
    var subsplash = alreadyScene.title;
    document.getElementById('promptText').innerHTML = subsplash;
    } else {
      document.getElementById('promptText').innerHTML = "";
    }
  var fragments = sortFragments( event.currentSlide.querySelectorAll( '.fragment' ) );
  totalFrags = fragments.length;
  if (totalFrags) {
    var firstFrag = (fragments[0]);
    var minIndex = firstFrag.getAttribute( 'data-fragment-index' );
    var lastFrag = (fragments[totalFrags-1]);
    var maxIndex = lastFrag.getAttribute( 'data-fragment-index' );
    var fragSets = maxIndex-minIndex+1;
    $('#defrag').css("width",fragSets*fragWidth+18+"px");
    console.log(fragSets);
  } else {$('#defrag').css("width","0px");
      setTimeout(
      function() {
        $('#defrag').css("width","24px")
      }, 1000); }
});





Reveal.addEventListener( 'fragmentshown', function( event ) {
  // $("#slipstream>ul").prepend('<li>'+ event.timeStamp + '</li>');
  
  var bandwidth = $('#defrag').css("width");
  if (parseInt(bandwidth) > 11) {
    $('#defrag').css("width",parseInt(bandwidth)-fragWidth+"px");
  }

  var titleBytes = event.fragment.title;
  if(titleBytes) {
    document.getElementById('promptText').innerHTML = titleBytes;
    } else {
      document.getElementById('promptText').innerHTML = " ";
    }

});



$('zoomOut').click(function() {
    Reveal.toggleOverview();
    });
