console.log("It's working!");

//Quotes

// //Getting the quote, author & button of next quote
// let quote = document.getElementsByClassName("quote-text");
// let author = document.getElementsByClassName("author");
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

// window.addEventListener("load", getQuote);
// newQuoteBtn.addEventListener("click", getQuote)



fetch('https://type.fit/api/quotes')
.then(res => {
    if (res.ok) {
        console.log('SUCCESS');
    } else {
        console.log("Not Successful");
    }
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))