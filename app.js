//random quotes api
const quoteApiUrl = "httpd://api.quotable.io/random?minLength=80&maxLength=100";

const quoteSection = document.getElementById('quote');
const userInput = document.getElementById('quote-input');
let quote = "";
let time = 60;
let timer = "";
let mistakes = "";

//display random quotes
const renderNewQuote = async () => {
    //fetch
    const response = await fetch(quoteApiUrl);
    //store response
    let data = await response.json();
 
    //access quote
    quote = data.content;

    //array of characters in the quote
    let arr = quote.split("").map(value => {
        return "<span class = 'quote-chars'>" + value + "</span>"
    })

    //join array for displaying
    quoteSection.innerHTML += arr.join("");
    
    

}


window.onload = () => {
    userInput.value = "";
    document.getElementById("start-test").style.display = "block";
    document.getElementById("stop-test").style.display = "none";
    userInput.disabled = true;
    renderNewQuote();
}