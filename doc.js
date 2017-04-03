// Get the last photos with the tag Fuenlabrada on Flicker
//
$(document).ready(function() {
    $("#fuenla").click(function(){
    	jsonp = $.ajax({url: "http://api.flickr.com/services/feeds/photos_public.gne?tags=fuenlabrada&tagmode=any&format=json&jsoncallback=?",
    			dataType: "jsonp",
    			jsonpCallback: "ex_5.8.6"});
    	jsonp.success( function(data) {
        var list = '<ul>';
        for (elem in data.items){
            list += '<li><img src=' + data.items[elem].media.m + '</img></li>';
        }
        list += '</ul>';
        $('#fuenla').after(list);
    	});
    	jsonp.fail( function(data) {
    	    console.log("Something went wrong...");
    	    console.log(data);
    	    console.log(data.error());
    	});
    });
});
