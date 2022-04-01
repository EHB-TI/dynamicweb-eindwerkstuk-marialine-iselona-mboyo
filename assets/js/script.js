console.log("It's working!!");

//Create a user account

//Login system
let users = [
    {
        username: "lina",
        password: "loops123"
    },
    {
        username: "john",
        password: "academy10"
    }
]

function loggedIn() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    console.log("you're username is: " + username + " and your password is " + password);

    for(i = 0; i < users.length; i++){
        if (username == users[i].username && password == users[i].password) {
            console.log(username + " is logged in.");
            return
        }
    }
    console.log("Username or password is incorrect");
}

console.log(loggedIn);
