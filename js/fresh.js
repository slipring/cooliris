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



/*Slide title routed to a titleText (probably inside a class speaker div)*/
Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
	var slideTarget = event.currentSlide.title;
	if (slideTarget) {
		document.getElementById('titleText').innerHTML = slideTarget;
		} else {
			document.getElementById('titleText').innerHTML = "untitled";
		}
	} );





/* generic EventListener cued by data-state="customevent" attributed to a section*/
Reveal.addEventListener( 'customevent', function() {
	console.log( '"customevent" has fired' );
} );





/*MathJax tweaks to prevent display errors in equation formatting  */
/* currently is giving scope errors, only re-enable and bugfix if display errors are apparent  */
// Reveal.addEventListener( 'fragmentshown', function( event ) {
// 	setTimeout(
// 	   		function() {
// 				MathJax.Hub.Rerender(document.querySelector(".slides .present")) 
// 	   		}, 100);
// 	   		} );
// Reveal.addEventListener( 'slidechanged', function( event ) {
// 	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
// 	MathJax.Hub.Rerender(); 
// 	} );

/*end MathJax*/


$('.spin-up').hover(
       function(){ $(this).addClass('fa-spin') },
       function(){ $(this).removeClass('fa-spin') }
);


$('.spin-out').hover(
       function(){ $(this).addClass('fa-spin-out') },
       function(){ $(this).removeClass('fa-spin-out') }
);


function setUIpositions( ) {

    $( "#reveal-left-top" ).position({
        my: "left top",
        at: "left top",
        of: ".reveal"
    });

     $( "#reveal-right-top" ).position({
        my: "right top",
        at: "right top",
        of: ".reveal"
    });
    
      $( "#reveal-left-center" ).position({
        my: "left center",
        at: "left center",
        of: ".reveal"
    });
       $( "#reveal-right-center" ).position({
        my: "right center",
        at: "right center",
        of: ".reveal"
    });

     $( "#reveal-center-top" ).position({
        my: "center top",
        at: "center top",
        of: ".reveal"
    });

     $( "#reveal-left-bottom" ).position({
        my: "left-bottom",
        at: "left-bottom",
        of: ".reveal"
    });

  // $( "#slipstream" ).position({
  //       my: "left top",
  //       at: "right center",
  //       of: "#reveal-left-center"
  //   });

    $( "#defrag" ).position({
        my: "left center",
        at: "right center",
        of: "#reveal-left-top"
    });

    // $( "#inertial" ).position({
    //     my: "left center",
    //     at: "right center",
    //     of: "#reveal-left-top"
    // });

    // $( "#revealing" ).position({
    //     my: "center bottom",
    //     at: "center top",
    //     of: "#reveal-left-center"
    // });

    // $( "#circle-over" ).position({
    //     my: "center center",
    //     at: "center center",
    //     of: "#revealing"
    // });


    // $( "#turntable" ).position({
    //     my: "center center",
    //     at: "center center",
    //     of: "#revealing"
    // });

    // $( "#labframe" ).position({
    //     my: "right center",
    //     at: "right bottom",
    //     of: "#turntable"
    // });

    // $( "#fluidframe" ).position({
    //     my: "left center",
    //     at: "right center",
    //     of: "#revealing"
    // });
};

setUIpositions();

$( window ).resize(function() {
	console.log( '"resize" has fired' );
    setUIpositions();
});

$( ".saveoffscreen" ).on( "click", function() {
  setUIpositions();
});

Reveal.addEventListener( 'slidechanged', function( event ) {
	setUIpositions();
});



Reveal.addEventListener( 'temporary', function() {
	console.log( '"temporary" has fired' );
	$('#test').hide().delay(30000).fadeIn('slow');
} );




/* defrag bar */
Reveal.addEventListener( 'slidechanged', function( event ) {
	console.log("You got this far");
	var fragments = sortFragments( event.currentSlide.querySelectorAll( '.fragment' ) );
	totalFrags = fragments.length;
	if (totalFrags) {
		var firstFrag = (fragments[0]);
		var minIndex = firstFrag.getAttribute( 'data-fragment-index' );
		var lastFrag = (fragments[totalFrags-1]);
		var maxIndex = lastFrag.getAttribute( 'data-fragment-index' );
		var fragSets = maxIndex-minIndex+1;
		$('#defrag').css("width",fragSets*fragWidth+2+"px");
		console.log(fragSets);
	} else {$('#defrag').css("width","2px")}
});










Reveal.addEventListener( 'fragmentshown', function( event ) {
	// $("#slipstream>ul").prepend('<li>'+ event.timeStamp + '</li>');
	
	var bandwidth = $('#defrag').css("width");
	if (parseInt(bandwidth) > 11) {
		$('#defrag').css("width",parseInt(bandwidth)-fragWidth+"px");
	}

	var subsplash = event.fragment.title;
	if(subsplash) {
		document.getElementById('fluidframe').innerHTML = subsplash;
		} else {
			document.getElementById('fluidframe').innerHTML = "undetailed";
		}

	setUIpositions();


	// // reporting to slipstream
	// var fraglist = toArray( event.fragments );
	// var titles = fraglist.forEach( function (element) {
	// 	if (element.title.length!=0) {
	// 	$("#slipstream>ul").prepend('<li>'+ element.title + '</li>');}
	// 	else {$("#slipstream>ul").prepend('<li>associated fragment without title</li>');}
	// });


	// // reporting to console.log
	// // console.log(event.fragments);
	// var thismany = event.fragments.length;
	// console.log("revealed " + thismany + " elements");

}  );






Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    if(event.currentSlide.dataset.timer) {
    	var autoslideDuration = event.currentSlide.dataset.timer;
    	console.log( autoslideDuration + ' second play window' );
    	msTimer = autoslideDuration * 1000;
		Reveal.configure({ autoSlide: msTimer });
	} });


/* Adjustment of autoslide time after initialization by section data-state flag */ 
Reveal.addEventListener( 'timer6s', function() {
	console.log( '6 second play window' );
	// Start auto-sliding every 6s
	Reveal.configure({ autoSlide: 6000 });
} );

Reveal.addEventListener( 'timer12s', function() {
	console.log( '12 second play window' );
	// Start auto-sliding every 12s
	Reveal.configure({ autoSlide: 12000 });
} );

Reveal.addEventListener( 'timer30s', function() {
	console.log( '30 second play window' );
	// Start auto-sliding every 30s
	Reveal.configure({ autoSlide: 30000 });
} );

Reveal.addEventListener( 'timer60s', function() {
	console.log( '60 second play window' );
	// Start auto-sliding every 60s
	Reveal.configure({ autoSlide: 60000 });
} );










