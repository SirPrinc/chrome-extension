console.log("background running");

let word = ""; 

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
  // when content script sends selected text
  if (request.text) {
    word = request.text;
  }
  // when popup asks for word
  if (request.action === "getWord") {
    sendResponse({ text: word });
  }
});