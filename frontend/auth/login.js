document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let user = JSON.parse(localStorage.getItem("user"));

if(user && email === user.email && password === user.password){
    alert("Login Successful");
}
else{
    alert("Invalid Credentials");
}

});