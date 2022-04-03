console.log("It's working!");

//Login and Create Accoun: form switching

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    /* When you click on "Create Account", the login from will be hidden but 
    you will be able to see de create form */
    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault(); //It's not going to redirect via the href in the HTML
        loginForm.classList.add("form_hidden");
        createAccountForm.classList.remove("form_hidden");
    })

    /* When you click on "Login", the Create form will be hidden but 
    you will be able to see de Login form */
    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAccountForm.classList.add("form_hidden");
    })

})


//Login system

let users = [
    {
        username: "lina",
        password: "a"
    },
    {
        username: "john",
        password: "academy10"
    }
]

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let username = document.getElementsByClassName("username").value
    let password = document.getElementsByClassName("password").value
    
    console.log("you're username is: " + username + " and your password is " + password);

    for(i = 0; i < users.length; i++){
        if (username == users[i].username && password == users[i].password) {
            console.log(username + " is logged in.");
            window.location.href = "../profile.html";
            return false;
        }
    }
    console.log("Username or password is incorrect");

    
});