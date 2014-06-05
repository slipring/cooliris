
		
		Reveal.addEventListener( 'splash', function() {
			console.log( '"splash" has fired' );
		   	document.getElementById('M2m').src='trigger/gcsplash.gif';
		} );

		Reveal.addEventListener( 'regimes', function() {
			console.log( '"regimes" has fired' );
			document.getElementById('M2m').src='trigger/gcsplash.png';
		/*	document.getElementById('hadleyio').src='trigger/tankspin_horizn.gif';
			document.getElementById('worldio').src='trigger/worldspin_trans.gif';
			document.getElementById('eddio').src='trigger/tankspin_eddy.gif';*/
		} );

		Reveal.addEventListener( 'pretracers', function() {
			console.log( '"pretracers" has fired' );
	  	} );

		Reveal.addEventListener( 'vimvid', function() {
			console.log( '"vimvid" has fired' );
	  	} );

		Reveal.addEventListener( 'vlab', function() {
			console.log( '"vlab" has fired' );
   		} );

		Reveal.addEventListener( 'freecam', function() {
			console.log( '"freecam" has fired' );
	  	} );

		Reveal.addEventListener( 'tracerlooks', function() {
			console.log( '"tracerlooks" has fired' );
	  	} );

		Reveal.addEventListener( 'greenrelease', function() {
			console.log( '"greenrelease" has fired' );
	  	} );

		Reveal.addEventListener( 'pinkrelease', function() {
			console.log( '"pinkrelease" has fired' );
	  	} );

		Reveal.addEventListener( 'pinkspread', function() {
			console.log( '"pinkspread" has fired' );
	  	} );

		Reveal.addEventListener( 'greenwinding', function() {
			console.log( '"greenwinding" has fired' );
	  	} );

	  	Reveal.addEventListener( 'particletrk', function() {
			console.log( '"particletrk" has fired' );
	  	} );

	  	Reveal.addEventListener( 'schemata', function() {
			console.log( '"schemata" has fired' );
	  	} );

	  	Reveal.addEventListener( 'numnumnum', function() {
			console.log( '"numnumnum" has fired' );
	  	} );

	  	Reveal.addEventListener( 'climated', function() {
			console.log( '"climated" has fired' );
	  	} );


		/*$('.swap').click(function(){ 
    		$(this).attr('src','new/path/to/img.jpg');
		});*/

		/* document.getElementById("img").src = img.src.replace(".gif", ".png");*/
