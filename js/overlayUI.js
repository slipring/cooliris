	// $( "#ofcourse" ).position({
	//   	my: "left top",
	//   	at: "left top",
	//   	of: "#crosshair"
	// });



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