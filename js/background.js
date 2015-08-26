//For response from Browser Action - popup.html
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "req-highlight":
            chrome.storage.local.set({'highlight': true},function(){});
            highlightTags();
            break;
        case "stop-highlight":
            chrome.storage.local.set({'highlight': false},function(){});
            stopHighlight();
            break;
        break;
    }
    return true;
});

var stopHighlight=function(){
   chrome.tabs.getSelected(null, function(tab){
	    chrome.tabs.sendMessage(tab.id, {type: "stop-highlight"});
   });
}
// send a message to Content Script
var highlightTags = function() {
	chrome.tabs.getSelected(null, function(tab){
	    chrome.tabs.sendMessage(tab.id, {type: "highlight"});
	});
}