console.log("It's working!");

//Quotes

//Getting the quote, author & button of next quote
const quote = document.querySelector("#text");
const author = document.querySelector("#author");
const newQuoteBtn = document.querySelector(".btn-click-newQuote");


async function getQuote() {
    const response = await fetch("https://type.fit/api/quotes")
    const data = await response.json();
    const num = Math.floor(Math.random() * data.length);
    const item = data[num];

    const quotes = item.text;
    let authorName = item.author || "Anonymous";
    quote.innerText = quotes;
    author.innerText = authorName;
}

newQuoteBtn.addEventListener("click", getQuote);

getQuote()



//------------------------------------------------------------

const addQuote = document.getElementById("addToProfile");
addQuote.addEventListener('submit', addQouteToProfile)


function httpPostQuote(url, body) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url, false); // false for synchronous request
    xmlHttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xmlHttp.send(body);
    xmlHttp.onload = function () {
        if (xmlHttp.status === 200) {
            console.log("Successfully logged in!")
            createCookie(xmlHttp.responseText);
            return xmlHttp.responseText;
        }
        
        if (xmlHttp.status === 404 || xmlHttp.status === 409){
            console.log("Not found / Already exists");
            return xmlHttp.responseText;
        }
    }

}

function addQouteToProfile(e) {
    e.preventDefault()

}