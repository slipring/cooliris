var loader = new PxLoader({ 
  // how frequently we poll resources for progress 
  statusInterval: 5000, // every 5 seconds by default 
  // delay before logging since last progress change 
  loggingDelay: 20 * 1000, // log stragglers after 20 secs 
  // stop waiting if no progress has been made in the moving time window 
  noProgressTimeout: Infinity // do not stop waiting by default 
  }); 

var 

  //slide 0,0
	imgElement00 = loader.addImage('trigger/gcsplash.png','first');
  //slide 1,0
  imgElement10A = loader.addImage('trigger/gctankspin_horzn.gif','motion');
  imgElement10B = loader.addImage('trigger/gcworldspin_trans.gif','motion');
  imgElement10C = loader.addImage('trigger/gctankspin_eddy.gif','motion');
  imgElement10ABP = loader.addImage('trigger/gctankspin_horzn.jpg','proxy');
  //slide 2,0
  
  //slide 3,0
  //slide 3,1
  imgElement31A = loader.addImage('sprites/hadley_sprite.png','spritest');

  //slide 4,0
  imgElement40A = loader.addImage('trigger/hadley_mediumless.gif','motion');
  imgElement40AP = loader.addImage('trigger/hadley_mediumless.jpg','proxy');
  imgElement40B = loader.addImage('trigger/hadley_canless.gif','motion');
  imgElement40BP = loader.addImage('trigger/hadley_canless.jpg','proxy');
  imgElement40C = loader.addImage('static/hadley_1wind.png','still');
  imgElement40D = loader.addImage('static/hadley_1p5wind.png','still');
  imgElement40Z = loader.addImage('trigger/hadley_replay1.gif','motion');
  imgElement40ZU = loader.addImage('static/hadley_replay1bdrop.png','still');
  //slide 4,1
  imgElement41A = loader.addImage('trigger/hadley_contourside.gif','motion');
  imgElement41AP = loader.addImage('trigger/hadley_contourside.jpg','proxy');
  imgElement41B = loader.addImage('trigger/hadley_contourover.gif','motion');
  imgElement41BP = loader.addImage('trigger/hadley_contourover.jpg','proxy');
  imgElement41C = loader.addImage('static/hadley_rotoscope.png','still');
  imgElement41D = loader.addImage('trigger/hadley_inking.gif','motion');
  imgElement41DP = loader.addImage('trigger/hadley_inking.jpg','proxy');
   //slide 4,2
  imgElement42A = loader.addImage('trigger/hadley_fcontext.gif','motion');
  imgElement42AP = loader.addImage('trigger/hadley_fcontext.jpg','proxy');
  imgElement42B = loader.addImage('trigger/hadley_wcontext.gif','motion');
  imgElement42BP = loader.addImage('trigger/hadley_wcontext.jpg','proxy');


  //slide 5,0
  imgElement50A = loader.addImage('trigger/hadley_roamview.gif','motion');
  imgElement50AP = loader.addImage('trigger/hadley_roamview.jpg','proxy');

  //slide 6,0
  //slide 7,0
  //slide 8,0
  //slide 9,0
  //slide 10,0
  //slide 11,0
  //slide 12,0
  //slide 13,0
  //slide 14,0
  //slide 0,0
	imgElement99 = loader.addImage('trigger/gcsplash.gif','last');


loader.addProgressListener(function(e) { 
  console.log(e.resource.getName()); 
  document.getElementById('contented').innerHTML =
    'preloading image ' +
    (e.completedCount + ' / ' + e.totalCount);
}); 


loader.addCompletionListener(function(e) { 
  console.log('Ready to go!');
  document.getElementById('headliner').innerHTML = 
  "spinning up... fluid ready!"
  document.getElementById('M2m').src='trigger/gcsplash.gif';
}); 


loader.start(['first','still', 'motion', 'proxy', 'spritest', 'last']);