	// $( "#ofcourse" ).position({
	//   	my: "left top",
	//   	at: "left top",
	//   	of: "#crosshair"
	// });


//fix lines 171 & 304    setUIpositions overlayUI.js:171   &  (anonymous function)
/* http://jsfiddle.net/7uTTs/ */

$(function () {
            $("#framewrap")
                .resizable()
                .draggable();           
        });

/* http://jsfiddle.net/7uTTs/ */



/* http://jsfiddle.net/XtksX/2/ */

$(function () {
    $("#slider").slider();
});

var rotation = 0;

jQuery.fn.rotate = function (degrees) {
    $(this).css({
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
            '-moz-transform': 'rotate(' + degrees + 'deg)',
            '-ms-transform': 'rotate(' + degrees + 'deg)',
            'transform': 'rotate(' + degrees + 'deg)'
    });
};

$(function () {
    $('.slider').slider({
        value: 0,
        min: 0,
        max: 9,
        slide: handleSliderChange
    });



    function handleSliderChange(event, slider) {
        rotation = slider.value;
        $('.rotate').rotate(rotation);
        $('.rotate').css("-webkit-animation","rotate 0.1s linear infinite;")
       
    }
});



/* http://jsfiddle.net/XtksX/2/ */




(function () {
    $(".lazy-load").on("mouseover", function () {
        var img = $(this),
            src = img.attr("src");
        img.attr("src", src.replace(/...$/, "gif")).data("src", src);
        }).on("mouseout", function () {
        $(this).attr("src", $(this).data("src"));
    });
})();


$('.slide-number').click(function() {
    Reveal.toggleOverview();
    });


$(function() {
    $( ".indicator" ).draggable();
    $( "#slipstream" ).draggable().resizable();
    // $( "canvas[class='playback']" ).draggable();
});


$('.spin-up').hover(
       function(){ $(this).addClass('fa-spin') },
       function(){ $(this).removeClass('fa-spin') }
);



$('.spin-up-ccw').hover(
       function(){ $(this).addClass('fa-spin-ccw') },
       function(){ $(this).removeClass('fa-spin-ccw') }
);


$('.inflate').hover(
       function(){ $(this).addClass('fa-1p5x') },
       function(){ $(this).removeClass('fa-1p5x') }
);


// $('#Dpad').click(function() {
//     $( "canvas[class='playback']" ).toggle();
//     $( "aside[class='controls']" ).toggle();
//     });

$('#eraser').click(function() {
    $( "#overlayUI" ).toggle();
    });

$('#spCB').click(function() {
    $( "#eraser" ).toggle();
    $( "#Dpad" ).toggle();
    });

$('#spCT').click(function() {
    $( "#anticyclone" ).toggle();
    $( "#cyclone" ).toggle();
    });

$('#crosshair').click(function() {
    $( "#slipstream" ).toggle();
    });

$('#desplash').click(function() {
    $( "#splashline" ).toggle();
    });

$('#retarget').click(function() {
    $( "#targetline" ).toggle();
    });





function setUIpositions( ) {





    $( "#crosshair" ).position({
        my: "left top",
        at: "left top",
        of: ".reveal"
    });

    $( "#scopeoscope" ).position({
        my: "right top",
        at: "right top",
        of: ".reveal"
    });

    $( "#timevortex" ).position({
        my: "left bottom",
        at: "left bottom",
        of: ".reveal"
    });

    $( "#tardis" ).position({
        my: "right bottom",
        at: "right bottom",
        of: ".reveal"
    });


    $( "#eyesight" ).position({
        my: "right top",
        at: "right top",
        of: "#scopeoscope"
    });

    $( "#inspector" ).position({
        my: "left bottom",
        at: "left bottom",
        of: "#scopeoscope"
    });


    $( "#defrag" ).position({
        my: "left center",
        at: "right center",
        of: "#crosshair"
    });


    $( "#desplash" ).position({
        my: "right bottom",
        at: "right bottom",
        of: "#crosshair"
    });

    $( "#splashline" ).position({
        my: "left center",
        at: "right center",
        of: "#desplash"
    });


    $( "#ofcourse" ).position({
        my: "left top",
        at: "left top",
        of: "#crosshair"
    });



    $( "#contextclue" ).position({
        my: "left bottom",
        at: "left bottom",
        of: "#crosshair"
    });


    $( "#retarget" ).position({
        my: "right top",
        at: "right top",
        of: "#crosshair"
    });

    $( "#targetline" ).position({
        my: "left center",
        at: "right center",
        of: "#retarget"
    });






    $( "#spCB" ).position({
        my: "center bottom",
        at: "center bottom",
        of: ".reveal"
    });

    $( "#spCT" ).position({
        my: "center top",
        at: "center top",
        of: ".reveal"
    });

    $( "#spLC" ).position({
        my: "left center",
        at: "left center",
        of: ".reveal"
    });
    
    $( "#spRC" ).position({
        my: "right center",
        at: "right center",
        of: ".reveal"
    });

    $( "#anticyclone" ).position({
        my: "right center",
        at: "left center",
        of: "#spCT"
    });

    $( "#cyclone" ).position({
        my: "left center",
        at: "right center",
        of: "#spCT"
    });




    $( "#slipstream" ).position({
        my: "left top",
        at: "right bottom",
        of: "#crosshair"
    });

    $( "#chatsoff" ).position({
        my: "left center",
        at: "right center",
        of: "#timevortex"
    });

    $( "#Dpad" ).position({
        my: "left center",
        at: "right center",
        of: "#spCB"
    });

    $( "#eraser" ).position({
        my: "right center",
        at: "left center",
        of: "#spCB"
    });


}



setUIpositions();



$( window ).resize(function() {
    setUIpositions();
});


$(function() {
    $( "#slider" ).slider();
    });
