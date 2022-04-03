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