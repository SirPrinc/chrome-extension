console.log("Chrome Extension go....");


window.addEventListener('mouseup', wordSelected);

function wordSelected() {
  let textSelec = window.getSelection();
  let selectedText = textSelec.toString().trim();

  if (selectedText.length > 0){
    let message = {
      text : selectedText
    };

    chrome.runtime.sendMessage(message);
  }
}
