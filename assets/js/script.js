//Login and Create Account: form switching

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    /* When you click on "Create Account", the login from will be hidden but 
    you will be able to see de create form */
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault(); //It's not going to redirect via the href in the HTML
        loginForm.classList.add("form_hidden");
        createAccountForm.classList.remove("form_hidden");
    })

    /* When you click on "Login", the Create form will be hidden but 
    you will be able to see de Login form */
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden");
    })

})


//--------------------------------------------------------------------------------------


//Create a user account and login 

const regForm = document.getElementById("reg-form");
const loginForm = document.getElementById("login-form");
regForm.addEventListener('submit', registerUser)
loginForm.addEventListener('submit', signinUser)

function createCookie(responseText) {
    document.cookie = "user=" + responseText;
}

function httpPost(url, body) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url, false); // false for synchronous request
    xmlHttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8')

    xmlHttp.onload = function (xml, ev) {

        if (xml.target.status === 200) {
            console.log("Successfully logged in!")
            createCookie(xmlHttp.responseText);
            window.location.href = '/html/profile.html';
        }

        if (xml.target.status === 201) {
            console.log("Successfully registered!")
            createCookie(xmlHttp.responseText);
            return xml.responseText;
        }

        if (xml.target.status === 401) {
            console.log("Unsuccessfully logged in");
            return xml.responseText;
        }
    }

    xmlHttp.send(body);

}


//Send data as JSON
function registerUser(ev) {
    ev.preventDefault()
    const regUser = document.getElementById("newUser").value
    const regPassword = document.getElementById("newPassword").value

    const newUser = {
        username: regUser,
        password: regPassword
    }

    const post = JSON.stringify(newUser);

    httpPost("http://localhost:3000/users", post);

    console.log("object");
}


//Send data as JSON
function signinUser(ev) {
    ev.preventDefault()
    const login_User = document.getElementById("username").value
    const password_User = document.getElementById("password").value

    const user = {
        username: login_User,
        password: password_User
    }

    const body = JSON.stringify(user);

    httpPost("http://localhost:3000/login", body);
}