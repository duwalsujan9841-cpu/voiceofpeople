document.getElementById("signupForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let user = {
name:name,
email:email,
password:password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Account Created Successfully");

window.location.href="login.html";

});