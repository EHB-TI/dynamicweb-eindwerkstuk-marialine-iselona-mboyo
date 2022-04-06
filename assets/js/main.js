console.log("It's working!");

//Quotes

//Getting the quote, author & button of next quote
 const quote = document.querySelector("#text");
 const author = document.querySelector("#author");
 const newQuoteBtn = document.querySelector(".btn-click-newQuote");


async function getQuote() {
    const response = await fetch("https://type.fit/api/quotes")
    const data = await response.json();
    const num = Math.floor(Math.random()*data.length);
    const item = data[num];

    const quotes = item.text;
    const authorName = item.author;
    quote.innerText = quotes;
    author.innerText = authorName;
    // console.log(item);

    if(!author){
        authorName = "Anonymous"
    }
}

newQuoteBtn.addEventListener("click", getQuote);

getQuote()

//---------------------------------------------------------------------------
// OLD CODES

// //Getting the quote, author & button of next quote
// let quote = document.getElementsById("text");
// let author = document.getElementsById("author");
// let newQuoteBtn = document.getElementsByClassName("btn-click-newQuote");

// //Adding API link
// const url = 'https://type.fit/api/quotes';

// let getQuote = async() => {
//     fetch(url)
//     .then(response => response.json())
//     .then((item) => {
//         quote.innerText = item.content;
//         author.innerText = item.author;
//     });
// };

//window.addEventListener("load", getQuote);
 //newQuoteBtn.addEventListener("click", getQuote)



// const quote = document.querySelector("#text");
// const author = document.querySelector("#author");
// const newQuoteBtn = document.querySelector(".btn-click-newQuote");

// newQuoteBtn.addEventListener("click", newQuote);

// function newQuote() {
//     fetch('https://type.fit/api/quotes')
//     .then(response => response.json())
//     .then(data => {
//         quote.innerHTML = `"${data.content}"`;
//         author.innerHTML = data.author;
//     })
// }



// fetch('https://type.fit/api/quotes')
//  .then(res => {
//      if (res.ok) {
//          console.log('SUCCESS');
//      } else {
//          console.log("Not Successful");
//      }
//  })
//  .then(data => console.log(data))
//  .catch(error => console.log('ERROR'))



// fetch('https://type.fit/api/quotes')
// .then(data => {
// return data.json();
// })
// .then(post => {
// console.log(post.title);
// });
