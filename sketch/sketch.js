function setup() {
  noCanvas();

  chrome.runtime.sendMessage({ action: "getWord" }, (response) => {
    word = response.text;

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    loadJSON(url, gotData);

    function gotData(data) {
      meaning = data[0].meanings[0].definitions[0].definition;
      createP(meaning).style('font-size', '20pt');
    }

  });

}