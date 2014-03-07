Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
	MathJax.Hub.Rerender();  // ctrlpt #010

} );

Reveal.addEventListener( 'customevent', function() {
	console.log( '"customevent" has fired' );
} );

Reveal.addEventListener( 'cloud', function() {
	console.log( '"cloud" has fired' );
} );


Reveal.addEventListener( 'fragmentshown', function( event ) {
	setTimeout(
	   		function() {
				MathJax.Hub.Rerender(document.querySelector(".slides .present")) 
	   		}, 100);   // ctrlpt #010
} );
