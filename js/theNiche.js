// ie fix
if (typeof console == "undefined") {
    console = { log: function () { } };
}

// jquery init
$(document).ready(function(){
	console.log("document ready event");
  // hide the videos div
  $("#lessVideos").hide();
  
   // initialize the click handlers
  $( "#moreVideosClick" ).click(function() {
  	console.log("moreVideosClicked")
  	$("#moreVideos").hide();  	
  	$("#lessVideos").show();  
	});

  $( ".lessVideosClick" ).click(function() {
  	console.log("lessVideosClicked")
  	$("#moreVideos").show();  	
  	$("#lessVideos").hide();  
	});
	console.log("system initialized");
})

