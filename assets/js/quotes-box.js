let user;

function loadUser() {
    const cookie = document.cookie;
    const userCookie = cookie.split('='); // if cookie exists => ["user", "{...}"]; else => [""]

    if (userCookie.length > 1) {
        const userData = userCookie[1];
        user = JSON.parse(userData);
        getQuote()
    } else {
        window.location.href = '/index.html';
    }
}

loadUser();


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


//------------------------------------------------------------

const addQuote = document.getElementById("addToProfile");
addQuote.addEventListener('click', addQuoteToProfile)

function addQuoteToProfile() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", 'http://localhost:3000/quotes', false); // false for synchronous request
    xmlHttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8')

    xmlHttp.onload = function () {
        if (xmlHttp.status === 201) {
            console.log("Successfully logged in!")
            createCookie(xmlHttp.responseText);
            return xmlHttp.responseText;
        }

        if (xmlHttp.status === 409) {
            console.log("Already exists");
            alert("Quote already saved")
            return xmlHttp.responseText;
        }
    }

    xmlHttp.send(JSON.stringify({
        'user_id': user.id,
        'quote': quote.innerText
    }));

}