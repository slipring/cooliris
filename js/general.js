



  // function updateProgress() {

  //   // Update progress if enabled
  //   // if( config.progress && dom.progressbar ) {
  //   //   console.log("ok")
  //   //   var getWidth = dom.progressbar.style.width;
  //   //    // = getProgress() * window.innerWidth + 'px';
  //   //    console.log(getWidth);
  //   }

  // }

function zeroPadInteger( num ) {

          var str = '00' + parseInt( num );
          return str.substring( str.length - 2 );

        }

      function setupTimer() {

          var start = new Date(),
            timeEl = document.querySelector( '.speaker-controls-time' ),
            clockEl = timeEl.querySelector( '.clock-value' ),
            hoursEl = timeEl.querySelector( '.hours-value' ),
            minutesEl = timeEl.querySelector( '.minutes-value' ),
            secondsEl = timeEl.querySelector( '.seconds-value' );

          function _updateTimer() {

            var diff, hours, minutes, seconds,
              now = new Date();

            diff = now.getTime() - start.getTime();
            hours = Math.floor( diff / ( 1000 * 60 * 60 ) );
            minutes = Math.floor( ( diff / ( 1000 * 60 ) ) % 60 );
            seconds = Math.floor( ( diff / 1000 ) % 60 );

            clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
            hoursEl.innerHTML = zeroPadInteger( hours );
            hoursEl.className = hours > 0 ? '' : 'mute';
            minutesEl.innerHTML = ':' + zeroPadInteger( minutes );
            minutesEl.className = minutes > 0 ? '' : 'mute';
            secondsEl.innerHTML = ':' + zeroPadInteger( seconds );

          }

          // Update once directly
          _updateTimer();

          // Then update every second
          setInterval( _updateTimer, 1000 );

          timeEl.addEventListener( 'click', function() {
            start = new Date();
            _updateTimer();
            return false;
          } );

        }

setupTimer();



$('.hide-time').click(function() {
  $('.clock').toggle();
  $('.timer').toggle();
  $('.reset-button').toggle();
  $('.hide-time').toggleClass('purpleiff');
});

$('.tone-arm').click(function(){
  var syncs = document.getElementsByClassName("skips");
  // console.log(syncs);     //report all resyncers
  $('#dudea').removeClass('fa-1rpmS');
  var jets = [].map.call(syncs, function (el) {
        if (el.src){
        el.src = el.src;}
        });
  setTimeout(
             function() {
  $('#dudea').addClass('fa-1rpmS');}, 1 );
});

$('#dudea').click(function(){
  $('#dudea').removeClass('fa-1rpmS');
  setTimeout(
             function() {
  $('#dudea').addClass('fa-1rpmS');}, 1 );
});

$('.reset-button').click(function(){
  $('#dudea').removeClass('fa-1rpmS');
  setTimeout(
             function() {
  $('#dudea').addClass('fa-1rpmS');}, 1 );
});



// $('.sychro').click(function(){
//   var syncs = document.getElementsByClassName("skips");
//   console.log(syncs);
//   var onicities = [].map.call(syncs, function (el) {
//         el.src = el.src;
//         return el.getAttribute("src");
//         });
//   console.log(onicities)
// });


// var scratches = toArray(document.getElementsByClassName('skips'));

// scratches.forEach(function(entry) {
//     var reSync = entry.attr('data-title');
//         entry.src=reSync;
//         console.log(reSync);
//   });


   // var looper = Reveal.getCurrentSlide;
   // console.log(looper);

// scratches.forEach(function(entry) {
//     var reSync = entry.attr('data-title');
//         entry.src=reSync;
//         console.log(reSync);
//   });

// arrSync = dojo.map(scratches, function(item) {
//             var reSync = item.attr('data-title');
//             item.src=reSync;
//             return reSync;
//         });
// console.log(arrSync);
// var scratches = event.currentSlide.querySelectorAll( '.skips' );
// onClick="document.getElementById('resetme00').src='http://coriolis.no-ip.org/clear/up/load/hadley_mediumless.gif'"




//* mostly harmless

var flipper = 0

$('.clearFace').click(function() {
    // $('#inertialFrame').toggle();
    // $('.titleBlock').toggle();
    $('#haLo').toggle();
    $('.overView').toggle();
    // $('.clearTome').toggle();
    $('.loadNotes').toggle();
    $('.clockLock').toggle();
    $('.coRotator').toggle();
    $('.help').toggle();
    // $('.controls').toggle();
    $('.greenBuilding').toggle();
    $('.radome').toggle();
    $('.startTank').toggle();
    if (flipper) {
       $('#tilt').removeClass('fa-flip-horizontal');
       $('.playback').show();
       flipper = 0;      
    } else {
      $('#tilt').addClass('fa-flip-horizontal');
      $('.playback').hide();
      flipper = 1;
    }
  });


$('.coRotator').click(function() {
    $('.clockLock').toggle();
    $('.greenBuilding').toggle();
    $('.radome').toggle();
    $('.startTank').toggle();
    // $(this).toggleClass('fa-spinOut-1rpm');
     // $(this).toggleClass('glowering');
      $(this).toggleClass('glowering');
     $('.viewData').toggleClass('purpleif');
    $('.cryo').toggle();
    });

$('.overView').click(function() {
    Reveal.toggleOverview();
    });






Reveal.addEventListener( 'slidechanged', function( event ) {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  var slideID = event.currentSlide.id;
  if (slideID) {
  console.log (slideID);} else {
    console.log ('noid')
  }
});




var autoStream = 0;

$('.timeData').click(function() {
    if (autoStream == 0) {
      autoStream = 1; 
      $('.timeData').css("color","rgba(3,188,112,.9)");
      Reveal.configure({ loop: true });     
    } else {
      autoStream = 0;
      $('.timeData').css("color","#13daec;");
      Reveal.configure({ loop: true });
    }
  });

/* rgba(255,94,71,1)       ORANGE RED COLOR */





var mapState = 1;
var spiralbounds = 0;

$('.map').click(function() {
  switch (mapState) {
    case 0:
     $('.piecewise').css("left",3+"px");
    mapState = 1;
    spiralbounds = 1;
      break;
    case 1:
      var navWidth = $('.piecewise');
      var theWidth = navWidth.width();
      $('.piecewise').css("left",-theWidth+25+"px");
      mapState = 0;
     spiralbounds = 1;
      break;
    case 2:
      console.log('nav locked')
      break;
    default:
      console.log('map ping')
  }
});



$('.clearTome').click(function() {
    switch (spiralbounds) {
      case 0:
        $('.piecewise').show();
         $('#booklet').removeClass("expansion");
        mapState = 1;
        spiralbounds = 1;
        break;
      case 1:
       $('#booklet').addClass("glowring");
       $('.piecewise').css("left",3+"px");
        spiralbounds = 2;
        mapState = 2;
        break;
      case 2:
          $('#booklet').removeClass("glowring");
         var navWidth = $('.piecewise');
          var theWidth = navWidth.width();
        $('.piecewise').css("left",-theWidth+25+"px"); 
        mapState = 0;
        spiralbounds = 3;
        break;
      case 3:
        $('.piecewise').hide();
         $('.titleBlock').hide();
         $('#booklet').addClass("dropshad");
         mapState = 0;
        spiralbounds = 4;
        break;
      case 4:
        $('.titleBlock').show();
        $('.piecewise').css("left",3+"px");
        $('#booklet').removeClass("dropshad");
        $('#booklet').addClass("expansion")
        spiralbounds = 0;
      default:
        console.log(spiralbounds);
           }
});




$( "i.map" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});


$('.hypernav').click(function() {
  if (mapState == 2) {
        $('.piecewise').hide();
        $('#booklet').removeClass("glowring");
        mapState = 1;
        spiralbounds = 0;
  } else { console.log('hypernav clear');}
});


     // var currentViewWind = $(window).width();
     //    $('#inertialFrame').addClass("fluidSpan");
     //    $('.fluidSpan').css("width",parseInt(currentViewWind)-155+"px");
     //    spiralbounds = 2;
   

  //   var currentViewHeight = $(window).height();
  //   var newHt = parseInt(currentViewHeight)+"px";
  //   console.log(newHt);
  // console.log(    $('.piecewise').css('height'));
  // $('.piecewise').toggle();



// $('.clearTome').click(function() {
//   //   var currentViewHeight = $(window).height();
//   //   var newHt = parseInt(currentViewHeight)+"px";
//   //   console.log(newHt);
//   // console.log(    $('.piecewise').css('height'));
//   $('.piecewise').toggle();});


//* cross-check on devices







var titleShowing = 1;

$('.loadNotes').click(function() {
    switch (titleShowing) {
      case 0:
        $('#inertialFrame').css("left",0+"px");
        $('#inertialFrame').css("right","auto");
        $('#inertialFrame').show();
        titleShowing = 1;
        break;
      case 1:
        var currentViewWind = $(window).width();
        $('#inertialFrame').addClass("fluidSpan");
        $('.fluidSpan').css("width",parseInt(currentViewWind)-155+"px");
        titleShowing = 2;
        break;
      case 2:
       $('#inertialFrame').css("bottom", "50%");
        $('#notesPane').show();
        titleShowing = 3;
        break;
      case 3:
        $('#notesPane').hide();
        $('#inertialFrame').css("bottom", 9+"px");
        $('#inertialFrame').removeClass("fluidSpan");
        $('#inertialFrame').css("width","auto");
        $('#inertialFrame').css("left","auto");
        $('#inertialFrame').css("right",80+"px");
        titleShowing = 4;
        break;
      default:
        $('#inertialFrame').hide();
        titleShowing = 0;
        console.log('subtitle switch');
    }
});




$( window ).resize(function() {
  var currentViewWind = $(window).width();
  $('.fluidSpan').css("width",parseInt(currentViewWind)-155+"px");
});






  // if (slideTitled) {
  //   document.getElementById('titleText').innerHTML = slideTitled;
  //   var elem = document.getElementById('titleText');
  //   elem.innerHTML = slideTitled;
  //   elem.setAttribute("style","content: 500px; background-color: yellow;");
  //   content: 'WEATHER IN A TANK';
  //   } else {
  //     document.getElementById('titleText').innerHTML = "weather in a tank";
  //   }





Reveal.addEventListener( 'slidechanged', function( event ) {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  var slideTitled = event.currentSlide.getAttribute('data-title');
  if (slideTitled) {
    document.getElementById('titleText').innerHTML = slideTitled;
    document.getElementById('titleText').setAttribute( 'data-title', slideTitled );
    } else {
      document.getElementById('titleText').innerHTML = "weather in a tank";
      document.getElementById('titleText').setAttribute( 'data-title', "weather in a tank" );

    }
  // prompt reset, taking title of element with class preface or displaying default message
  document.getElementById('promptText').innerHTML = " ";
  var preEstablished = event.currentSlide.querySelector( '.preface' );
  if (preEstablished) {
    var lineDetail = preEstablished.getAttribute('data-title');
    document.getElementById('promptText').innerHTML = lineDetail;
  } else {
    document.getElementById('promptText').innerHTML = " ";
  }
  
  setTimeout(
             function() {
                 document.getElementById('notesPane').innerHTML = " ";
                var slID = event.currentSlide.id;
                var slTitle = event.currentSlide.getAttribute('data-title');
                // reporting to console.log
                // console.log((event.indexh)+"-"+event.indexv+": #"+slID+" / "+slTitle);
                var notes = $("section.stack section.present aside.notes").text();
                if (notes) {
                 console.log(notes);
                 document.getElementById('notesPane').innerHTML = notes;
                 }  else {
                  notes = $("section.present aside.notes").text();
                  if (notes) {
                  console.log(notes);
                 document.getElementById('notesPane').innerHTML = notes;}
                 else {
                  console.log("blank page of notes");
                  document.getElementById('notesPane').innerHTML = " ";
                 }
                }
              }, 200); 

});


Reveal.addEventListener( 'fragmentshown', function( event ) {
  var titleBytes = event.fragment.getAttribute('data-title');
  if(titleBytes) {
    document.getElementById('promptText').innerHTML = titleBytes;
    } 
  else {
      document.getElementById('promptText').innerHTML = " ";
    }
});



Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var timeControl = event.currentSlide.getAttribute('data-period');
    if(timeControl && autoStream == 1) {
      console.log( timeControl + ' second window' );
      msperiod = timeControl * 1000;
    Reveal.configure({ autoSlide: msperiod });
    }
  });




Reveal.addEventListener( 'fragmentshown', function( event ) {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  var timeControl = event.fragment.getAttribute('data-period');
  if(timeControl && autoStream == 1) {
      console.log( timeControl + ' second window' );
      msperiod = timeControl * 1000;
    Reveal.configure({ autoSlide: msperiod });
    }
});







/*MathJax tweaks to prevent display errors in equation formatting  */
    /* disable if performance is dragging */

Reveal.addEventListener( 'fragmentshown', function( event ) {
 setTimeout(
       function() {
       MathJax.Hub.Rerender(document.querySelector(".slides .present")) 
       }, 500);
       } );
Reveal.addEventListener( 'slidechanged', function( event ) {
 // event.previousSlide, event.currentSlide, event.indexh, event.indexv
 setTimeout(
       function() {
       MathJax.Hub.Rerender(document.querySelector(".slides .present")) 
       }, 500);
       } ); 






var controlMode = 0;


$('.help').click(function( event ) {
  // $('.playback').toggle();
  $('.controls').toggle();
    if (controlMode == 0) {
    Reveal.showHelp( true );
      $('.helpicon').removeClass('fa-gamepad');
         $('.helpicon').removeClass('fa-flip-horizontal');
       $('.helpicon').addClass('fa-keyboard-o');
    $('.notesToggle').toggle();
    // $('.clearFace').toggle();
    controlMode = 1; }
    else {
              $('.helpicon').removeClass('fa-keyboard-o');
    $('.helpicon').addClass('fa-gamepad');
    $('.helpicon').addClass('fa-flip-horizontal');

       $('.notesToggle').toggle();
       // $('.clearFace').toggle();
       controlMode = 0;
    }
  });


$( ".hide-time" ).trigger( "click" );
$( ".clearFace" ).trigger( "click" );



// $('.help').click(function( event ) {
//   // $('.playback').toggle();
//   $('.controls').toggle();
//     if (controlMode == 0) {
//     $('.helpicon').removeClass('fa-keyboard-o');
//     $('.helpicon').addClass('fa-gamepad');
//     // $('.helpicon').addClass('fa-flip-horizontal');
//     Reveal.showHelp( true );
//     controlMode = 1}
//     else {
//       $('.helpicon').removeClass('fa-gamepad');
//          // $('.helpicon').removeClass('fa-flip-horizontal');
//        $('.helpicon').addClass('fa-keyboard-o');
//           $('.clockLock').toggle();
//        controlMode = 0;
//     }
//   });


// $('.help').click(function( event ) {
//   $('.playback').toggle();
//   $('.controls').toggle();
//     if (controlMode == 0) {
//     $('.helpicon').removeClass('fa-keyboard-o');
//     $('.helpicon').addClass('fa-gamepad');
//     $('.helpicon').addClass('fa-flip-horizontal');
//        $('.clockLock').toggle();
//     $('.coRotator').toggle();
//  $('.greenBuilding').toggle();
//     $('.radome').toggle();
//     $('.startTank').toggle();
//     $('.clearTome').toggle();
//     $('.clearFace').toggle();
//     $('.overView').toggle();
//     $('#haLo').toggle();
//     Reveal.showHelp( true );
//     controlMode = 1}
//     else {
//       $('.helpicon').removeClass('fa-gamepad');
//          $('.helpicon').removeClass('fa-flip-horizontal');
//        $('.helpicon').addClass('fa-keyboard-o');
//           $('.clockLock').toggle();
//     $('.coRotator').toggle();
//  $('.greenBuilding').toggle();
//     $('.radome').toggle();
//     $('.startTank').toggle();
//        controlMode = 0;
//     }
//   });




// Reveal.addEventListener( 'fragmenthidden', function( event ) {
//   var lastFrag = event.prevFragment();
//   console.log(lastFrag);
//   // var fragger = lastFrag.title;
//   // console.log(fragger);
//   // if(fragger) {
//   //   document.getElementById('promptText').innerHTML = fragger;
//   //   } 
//   // else {
//   //     document.getElementById('promptText').innerHTML = " ";
//   //   }
// });






 // // var titleLength = parseInt($('#titleText').css("width"));
 //     // var $getWidth = $(".progress");
 //       // = getProgress() * window.innerWidth + 'px';
 //      var elo = document.getElementsByClassName("progress");
 //       console.log(elo);
 //       var eloi = elo.item[0];

 //       // elo.firstChild;
 //       console.log(eloi);



// (function($) {
//     // Attrs
//     $.fn.attrs = function(attrs) {
//         var t = $(this);
//         if (attrs) {
//             // Set attributes
//             t.each(function(i, e) {
//                 var j = $(e);
//                 for (var attr in attrs) {
//                     j.attr(attr, attrs[attr]);
//                 };
//             });
//             return t;
//         } else {
//             // Get attributes
//             var a = {},
//                 r = t.get(0);
//             if (r) {
//                 r = r.attributes;
//                 for (var i in r) {
//                     var p = r[i];
//                     if (typeof p.nodeValue !== 'undefined') a[p.nodeName] = p.nodeValue;
//                 }
//             }
//             return a;
//         }
//     };
// })(jQuery);


// // Setter
// $('#element').attrs({
//     'name' : 'newName',
//     'id' : 'newId',
//     'readonly': true
// });

// // Getter
// var attrs = $('#element').attrs();



// Reveal.addEventListener( 'slidechanged', function( event ) {
//   // event.previousSlide, event.currentSlide, event.indexh, event.indexv
//   var slideID = event.currentSlide.id;
//   console.log(slideID);
  // var el = document.getElementsByClassName("map");
  // console.log (el);
  // var nodes=[], values=[];
  // for (var attr, i=0, attrs=el.attributes, l=attrs.length; i<l; i++){
  //   attr = attrs.item(i)
  //   nodes.push(attr.nodeName);
  //   values.push(attr.nodeValue);
  // // }
  // });

//   $mapper = $('.map');
//   console.log($mapper);
// });












// $('.loadNotes').click(function() {
//     $('#inertialFrame').toggle();
//     });




  // if (titleShowing == 0) {
  //    $(this).css("width","auto");
  //    $(this).css("bottom", 2+"px");
  //    $('#promptText').css("font-size", 2.2+"vw");
  //    $('#titleText').css("font-size", 3.2+"vw");
  //    titleShowing = 1; 
  // } else { 
  //       if (titleShowing == 1) {
  //          $(this).css("bottom", 12+"px");
  //          $('#promptText').css("font-size", 2+"vw");
  //          $('#titleText').css("font-size", 3+"vw");
  //          titleShowing = 1.5;  
  //       } else {
  //           if (titleShowing == 1.5) {
  //             $(this).css("bottom", 53+"px");
  //             $('#promptText').css("font-size", 1.8+"vw");
  //             $('#titleText').css("font-size", 2.8+"vw");
  //             titleShowing = 2;   
  //           } else {
  //               if (titleShowing < 8) {
  //                  $(this).css("bottom", "25%");
  //                  var notesHeight = $('.notesPane').css('height');
  //                 $('#promptText').css("font-size", 2.5+"vw");
  //                 $('#titleText').css("font-size", 2.5+"vw");
  //                 $(this).addClass("fluidSpan");
  //                 var currentViewWind = $(window).width();
  //                 $('.fluidSpan').css("width",parseInt(currentViewWind)-155+"px");
  //                 $('#notesPane').show();
  //                 titleShowing++;  
  //                } else {
  //                     if (titleShowing == 8) {
  //                         var currentViewWind = $(window).width();
  //                         $('.fluidSpan').css("width",parseInt(currentViewWind)-155+"px");
  //                         $('#notesPane').hide();
  //                         $(this).css("bottom", 2+"px");
  //                         // $('#promptText').css("font-size", 2+"vw");
  //                         // $('#titleText').css("font-size", 3+"vw");
  //                       titleShowing = 9;   
  //                      } else {
  //                         $(this).removeClass("fluidSpan");
  //                         $(this).css("width","auto");
  //                         $(this).css("bottom", 3+"px");
  //                         $('#promptText').css("font-size", 2+"vw");
  //                         $('#titleText').css("font-size", 2.5+"vw");
  //                         // $('#promptText').css("font-size", 10+"px");
  //                         // $('#titleText').css("font-size", 18+"px");
  //                         titleShowing = 0; 
  //                   }  
  //               }
  //             }
  //           }
  //         }
  //       });











// var editable = document.getElementById('editable');

// addEvent(editable, 'blur', function () {
//   // lame that we're hooking the blur event
//   localStorage.setItem('contenteditable', this.innerHTML);
//   document.designMode = 'off';
// });

// addEvent(editable, 'focus', function () {
//   document.designMode = 'on';
// });

// addEvent(document.getElementById('clear'), 'click', function () {
//   localStorage.clear();
//   window.location = window.location; // refresh
// });

// if (localStorage.getItem('contenteditable')) {
//   editable.innerHTML = localStorage.getItem('contenteditable');
// }



















// Reveal.addEventListener( 'slidechanged', function( event ) {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv

  // reporting to slipstream

  // $("#slipstream>ul").prepend('<li><a href="#/'+(event.indexh)+'/'+(event.indexv)+'"><span class="tab">'+(event.indexh)+'-'+(event.indexv)+": "+slID+'</span></a></li>');
  // if (slTitle) {
  //   $("#slipstream>ul").prepend('<li><span class="tab">'+slTitle+'</span></li>');
  //   }
  // document.getElementById('notesPane').innerHTML = " ";
  // var slID = event.currentSlide.id;
  // var slTitle = event.currentSlide.title;
  // // reporting to console.log
  // console.log("Slide: "+(event.indexh)+"-"+event.indexv+": #"+slID+" : "+slTitle);
  // var notes = $("section.stack section.present aside.notes").text();
  // if (notes) {
  //  console.log(notes);
  //  document.getElementById('notesPane').innerHTML = notes;
  //  }  else {
  //   notes = $("section.present aside.notes").text();
  //   if (notes) {
  //   console.log(notes);
  //  document.getElementById('notesPane').innerHTML = notes;}
  //  }
  // console.log(event.currentSlide);
  // var thisSlide = event.currentSlide;
  // console.log(thisSlide);
  // var domThis = thisSlide.getElementsByClassName('aside.notes');
  // console.log(domThis);
// });













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




