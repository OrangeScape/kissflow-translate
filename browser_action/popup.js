window.onload=function(){
	document.getElementById("highlight").onclick = function(){

		console.log("request passing from popup to background");

		//alert("Translating strings now!");

		//Send message to background.js (background page)
		chrome.extension.sendMessage({
			"type": "req-highlight",
			"lang": document.getElementById("languageSelect").value
		});
	}
}