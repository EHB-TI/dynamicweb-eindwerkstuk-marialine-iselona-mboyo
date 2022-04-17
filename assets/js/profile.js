function loadUser() {
    const cookie = document.cookie;
    const userCookie = cookie.split('='); // if cookie exists => ["user", "{...}"]; else => [""]

    if (userCookie.length > 1) {
        const userData = userCookie[1];
        const user = JSON.parse(userData);
        document.getElementById('username').textContent = user.username;
        loadQuotes(user.id)
    } else {
        window.location.href = '/index.html';
    }
}

loadUser();


function loadQuotes(userId) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'http://localhost:3000/users/' + userId + '/quotes', false);
    xmlHttp.send();
    const quotes = JSON.parse(xmlHttp.responseText);

    var ul = document.createElement('ul');
    ul.setAttribute('id', 'quotes');

    document.getElementById('myQuotes').appendChild(ul);
    quotes.forEach((element, index, arr) => {
        var li = document.createElement('li');
        li.setAttribute('class', 'quote')
        ul.appendChild(li);
        li.innerHTML = element.quote;
    });
}