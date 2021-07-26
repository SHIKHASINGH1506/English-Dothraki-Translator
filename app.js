var translateButton = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-text");
var outputArea = document.querySelector("#output");
var minionTranslateUrl = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(text){
    return encodeURI(minionTranslateUrl+ "?" + "text="+ text);
}

function eventListener(){
    console.log("clicked");
    var input = inputText.value; //taking input
    //server is processing 
    fetch(getTranslationURL(input))
    .then( response => response.json())
    .then(  json => {
        var output = json.contents.translated;
        outputArea.innerText = output;//output
        console.log("converted text", output)
    })
    .catch( error => console.log("Error occured", error));
}

//To better understand fetch() 
    // fetch(getTranslationURL(inputText.value))
    // .then(function parseResultToJson(response){
    //     response.json();
    // })
    // .then(function printResponse(json) // 
    // {
    //     console.log(json);
    // })

translateButton.addEventListener("click", eventListener);
//Exercise 04 challenge
// document.querySelector("textarea")
// document.querySelector(".btn-primary");
// document.querySelector("#input-btn")
// document.querySelector("input[name = 'translator']")
