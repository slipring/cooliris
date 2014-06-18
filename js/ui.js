// $(function() {
//     $( ".indicator" ).draggable();
//     // $( "#slipstream" ).draggable().resizable();
//     // $( "canvas[class='playback']" ).draggable();
// });

// $('#crosshair').click(function() {
//     $( "#slipstream" ).toggle();
//     });


    // $( "#slipstream" ).position({
    //     my: "left top",
    //     at: "right bottom",
    //     of: "#crosshair"
    // });

    // $( "#targetline" ).position({
    //     my: "left center",
    //     at: "right center",
    //     of: "#crosshair"
    // });

   // $( "#decenter" ).position({
   //      my: "left top",
   //      at: "right bottom",
   //      of: "#crosshair"
   //  });

    // $( "#predict" ).position({
    //     my: "left top",
    //     at: "left bottom",
    //     of: ".reveal"
    // });



var corotating=true;

$(function() {
    $("#slipring").click(function(e) {
      e.preventDefault(); // if desired...
      // other methods to call...
      switch ( corotating ) {
 
        case true:
          $('#changingFrame').css('background-position', '-500px 0px');
          corotating = false;
            break;
     
        case false:
          $('#changingFrame').css('background-position', '0px 0px');
          corotating = true;
            break;
     
        default:
            alert( "everything else is just ok" );
     
        }
    });
  });


     // $('#changingFrame').css('background-position', '-500px 0px');


function setUIpositions( ) {

    $( "#crosshair" ).position({
        my: "left top",
        at: "left top",
        of: ".reveal"
    });


};




setUIpositions();

$( window ).resize(function() {
    setUIpositions();
});

// Reveal.addEventListener( 'slidechanged', function( event ) {
// 	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
// 	MathJax.Hub.Rerender();  // prevent display errors in equation formatting


// 	var slideTarget = event.currentSlide.title;
// 	if (slideTarget) {
// 		document.getElementById('targetline').innerHTML = slideTarget;
// 		} else {
// 			document.getElementById('targetline').innerHTML = "section has no title";
// 		}

// 	setUIpositions();

// 	// reporting to slipstream
// 	var slID = event.currentSlide.id;
// 	var slTitle = event.currentSlide.title;
// 	$("#slipstream>ul").prepend('<li><a href="#/'+(event.indexh)+'/'+(event.indexv)+'"><span class="tab">'+(event.indexh)+'-'+(event.indexv)+": "+slID+'</span></a></li>');
// 	if (slTitle) {
// 		$("#slipstream>ul").prepend('<li><span class="tab">'+slTitle+'</span></li>');
		
// } );