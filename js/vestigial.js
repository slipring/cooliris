

function setUIpositions( ) {

    $( "#reveal-left-top" ).position({
        my: "left top",
        at: "left top",
        of: ".reveal"
    });

    $( "#reveal-center-top" ).position({
        my: "center top",
        at: "center top",
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
    
    $( "#reveal-center-center" ).position({
        my: "center center",
        at: "center center",
        of: ".reveal"
    });
    
    $( "#reveal-right-center" ).position({
        my: "right center",
        at: "right center",
        of: ".reveal"
    });
    
    $( "#reveal-left-bottom" ).position({
        my: "left bottom",
        at: "left bottom",
        of: ".reveal"
    });

    $( "#reveal-center-bottom" ).position({
        my: "center bottom",
        at: "center bottom",
        of: ".reveal"
    });

    $( "#reveal-right-bottom" ).position({
        my: "right bottom",
        at: "right bottom",
        of: ".reveal"
    });

    $( "#Dpad" ).position({
        my: "left center",
        at: "right center",
        of: "#reveal-center-bottom"
    });

    $( "#eraser" ).position({
        my: "right center",
        at: "left center",
        of: "#reveal-center-bottom"
    });
};


setUIpositions();



$( window ).resize(function() {
    // console.log( '"resize" has fired' );
    setUIpositions();

});

Reveal.addEventListener( 'slidechanged', function( event ) {
    setUIpositions();
});



Reveal.addEventListener( 'yeah', function( event ) {
       $('#centroid').removeClass('fa-asterisk');
       $('#centroid').addClass('fa-eye');
});




$( ".resetUI" ).on( "click", function() {
    setUIpositions();
});


Reveal.addEventListener( 'customevent', function() {
    console.log( '"customevent" has fired' );
} );


$('#eraser').click(function() {
    $( "#anchorage" ).toggle();
    });

$('#Dpad').click(function() {
    $( "canvas[class='playback']" ).toggle();
    $( "aside[class='controls']" ).toggle();
    });

$('#eraser').click(function() {
    $( "#overlayUI" ).toggle();
    });








/*Section title="" attribute routed to titleText*/
Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var reTitle = event.currentSlide.title;
    if (reTitle) {
        document.getElementById('titleText').innerHTML = reTitle;
        } else {
            document.getElementById('titleText').innerHTML = "untitled";
        }








    // setting length of defrag bar
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

    alreadyScene = event.currentSlide.querySelector( '.prefacing' );
    if (alreadyScene) {
        var subsplash = alreadyScene.title;
        document.getElementById('splashline').innerHTML = subsplash;
        } else {
            document.getElementById('splashline').innerHTML = "no element with class prefacing";
        }

    // setUIpositions();

    // reporting to slipstream
    var slID = event.currentSlide.id;
    var slTitle = event.currentSlide.title;
    $("#slipstream>ul").prepend('<li><a href="#/'+(event.indexh)+'/'+(event.indexv)+'"><span class="tab">'+(event.indexh)+'-'+(event.indexv)+": "+slID+'</span></a></li>');
    if (slTitle) {
        $("#slipstream>ul").prepend('<li><span class="tab">'+slTitle+'</span></li>');
        }
    
    // reporting to console.log
    // console.log("Slide: "+(event.indexh)+"-"+event.indexv+": #"+slID);
    // var notes = $(".slides section:nth-child("+(event.indexh)+") aside.notes").text()
    // if (notes) {
    //  console.log(notes);
    //  }       
    // console.log(event.currentSlide)
    } );


var fragWidth = 60;

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


 
Reveal.addEventListener( 'fragmentshown', function( event ) {
    // $("#slipstream>ul").prepend('<li>'+ event.timeStamp + '</li>');    
    var bandwidth = $('#defrag').css("width");
        if (parseInt(bandwidth) > 11) {
            $('#defrag').css("width",parseInt(bandwidth)-fragWidth+"px");
    }
    var fraggle = event.fragment.title;
    if(fraggle) {
        document.getElementById('detailText').innerHTML = fraggle;
        } else {
            document.getElementById('detailText').innerHTML = "undetailed";
        }

    setUIpositions();


    // // reporting to slipstream
    // var fraglist = toArray( event.fragments );
    // var titles = fraglist.forEach( function (element) {
    //  if (element.title.length!=0) {
    //  $("#slipstream>ul").prepend('<li>'+ element.title + '</li>');}
    //  else {$("#slipstream>ul").prepend('<li>associated fragment without title</li>');}
    // });


    // // reporting to console.log
    // // console.log(event.fragments);
    // var thismany = event.fragments.length;
    // console.log("revealed " + thismany + " elements");

}  );
