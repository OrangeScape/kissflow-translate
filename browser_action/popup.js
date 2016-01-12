window.onload=function(){
		//alert("Translating strings now!");
		//Send message to background.js (background page)

      chrome.storage.local.get("highlight",function(results){
				    var highlight=results.highlight
				    if(highlight){
				       $("#stop-highlight").html("<button class='btn btn-primary' style='border:1px solid #419d45;margin-left:0;margin-top:10px;margin-bottom:10px;background-color:#419d45' id='stop-highlighting'>STOP HIGHLIGHT</button>")
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

		$("#sync_translation").click(function(){
		   chrome.extension.sendMessage({
			 "type": "sync-translation"
		   });
		})




}