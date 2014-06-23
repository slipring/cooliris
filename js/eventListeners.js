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


Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
	MathJax.Hub.Rerender();  // prevent display errors in equation formatting


	var slideTarget = event.currentSlide.title;
	if (slideTarget) {
		document.getElementById('targetline').innerHTML = slideTarget;
		} else {
			document.getElementById('targetline').innerHTML = "section has no title";
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

	setUIpositions();

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
	// 	console.log(notes);
	// 	}		
	// console.log(event.currentSlide)

} );




Reveal.addEventListener( 'fragmentshown', function( event ) {
	// $("#slipstream>ul").prepend('<li>'+ event.timeStamp + '</li>');
	
	var bandwidth = $('#defrag').css("width");
	if (parseInt(bandwidth) > 11) {
		$('#defrag').css("width",parseInt(bandwidth)-fragWidth+"px");
	}

	var subsplash = event.fragment.title;
	if(subsplash) {
		document.getElementById('splashline').innerHTML = subsplash;
		} else {
			document.getElementById('splashline').innerHTML = "revealed fragment has no title";
		}

	setUIpositions();


	// reporting to slipstream
	var fraglist = toArray( event.fragments );
	var titles = fraglist.forEach( function (element) {
		if (element.title.length!=0) {
		$("#slipstream>ul").prepend('<li>'+ element.title + '</li>');}
		else {$("#slipstream>ul").prepend('<li>associated fragment without title</li>');}
	});


	// reporting to console.log
	// console.log(event.fragments);
	var thismany = event.fragments.length;
	console.log("revealed " + thismany + " elements");


	setTimeout(
   		function() {
			MathJax.Hub.Rerender(document.querySelector(".slides .present")) 
   		}, 100);   // prevent display errors in equation formatting
}  );




