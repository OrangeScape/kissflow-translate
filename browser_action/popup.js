window.onload=function(){
		//alert("Translating strings now!");
		//Send message to background.js (background page)

      chrome.storage.local.get("highlight",function(results){
				    var highlight=results.highlight
				    if(highlight){
				       $("#stop-highlight").html("<button class='btn btn-primary' style='margin-left:15px;margin-top:10px;margin-bottom:10px' id='stop-highlighting'>Stop Highlight</button>")
                       $("#stop-highlighting").click(function(){
                          chrome.extension.sendMessage({
			               "type": "stop-highlight"
		                  });
	                   })
	                   chrome.storage.local.set({'highlight': false},function(){});
				    }
				    else
				    {
                       $("#stop-highlighting").remove()
				    }
		})

		$("#highlight").click(function(){
		   chrome.extension.sendMessage({
			 "type": "req-highlight"
		   });
		})




}