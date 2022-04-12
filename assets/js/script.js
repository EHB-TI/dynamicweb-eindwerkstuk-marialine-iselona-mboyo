//Error message

function errorMessage(formEle, type, message) {
    const messageEle = formEle.querySelector(".input_error_message")

    messageEle.textContent = message;
    messageEle.classList.remove("input_error_message");
    messageEle.classList.add(`input_error_message--${type}`);
}


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


let users = [{
        username: "lina",
        password: "a"
    },
    {
        username: "john",
        password: "academy10"
    }
]

//Create a user account

const form = document.getElementById("reg-form");
form.addEventListener('submit', registerUser)

//Send data as JSON
function registerUser(ev) {
    ev.preventDefault()
    let regUser = document.getElementById("newUser").value
    let regPassword = document.getElementById("newPassword").value

    let newUser = {
        username: regUser,
        password: regPassword
    }

    users.push(newUser);
    console.log(users);
}




//Login system
// Route to another page onsubmit

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    console.log("you're username is: " + username + " and your password is " +
        password);

    for (i = 0; i < users.length; i++) {
        if (username == users[i].username && password == users[i].password) {
            console.log(username + " is logged in.");
            window.location.href = 'html/profile.html';
            return false;
        }
    }
    console.log("Username or password is incorrect");


});

//-------------------------------------------------------------------------------------

//From profile to Quotes