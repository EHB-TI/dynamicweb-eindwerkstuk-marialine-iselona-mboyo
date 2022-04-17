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


// let users = [{
//         username: "lina",
//         password: "a"
//     },
//     {
//         username: "john",
//         password: "academy10"
//     }
// ]

//Create a user account and login 

const regForm = document.getElementById("reg-form");
const loginForm = document.getElementById("login-form");
regForm.addEventListener('submit', registerUser)
loginForm.addEventListener('submit', signinUser)

function createCookie(signinData) {
    document.cookie = "id="+signinData.id+"; username="+signinData.username+"; password="+signinData.password;
}


function httpPost(url, body) {
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

        if (xmlHttp.status === 201) {
            console.log("Successfully registered!")
            return xmlHttp.responseText;
        }
        
        if (xmlHttp.status === 401){
            console.log("Unsuccessfully logged in");
            return xmlHttp.responseText;
        }
    }

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

    console.log("object");
}


// Route to another page onsubmit

// document.getElementById('myForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     let username = document.getElementById("username").value
//     let password = document.getElementById("password").value

//     // console.log("you're username is: " + username + " and your password is " +
//     //     password);

//     for (i = 0; i < users.length; i++) {
//         if (username == users[i].username && password == users[i].password) {
//             console.log(username + " is logged in.");
//             window.location.href = 'html/profile.html';
//             return false;
//         }
//     }
//     console.log("Username or password is incorrect");

// });