// Listen for message from Background - background.js
chrome.extension.onMessage.addListener(function(message, sender, sendResponse){
	switch(message.type){
		case "highlight":
			// var translate_elements = document.querySelectorAll("[translate]");
			var strings = $('[translate]');

			if(strings.length){
				//Load page content onto browser page for Modal
				$.ajax({
				    url: chrome.extension.getURL("spellscape/spellscape.html"),
				    success: function (data) { $('body').append(data); },
				    dataType: 'html'
				});
				//Pass message to Browser Page
				window.postMessage(JSON.stringify({ type: "HIGHLIGHT_TRANSLATE", text: "Hello from the webpage!" }), "*");
			}
			else
				alert("GetText Module unavailable");
            break;
		case "stop-highlight":
		     window.postMessage(JSON.stringify({type: "STOP_HIGHLIGHT", text: "Hello from the webpage!" }), "*");
             break;
		case "sync-translation":
		     window.postMessage(JSON.stringify({type:"SYNC_TRANSLATION", text: "Sync translation"}), "*");
		     break;
	}
});