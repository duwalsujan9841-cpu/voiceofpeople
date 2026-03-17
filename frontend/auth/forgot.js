document.getElementById("forgotForm").addEventListener("submit", function(e){

e.preventDefault();

let email = document.getElementById("email").value;
let newPassword = document.getElementById("newPassword").value;

let user = JSON.parse(localStorage.getItem("user"));

if(user && email === user.email){

user.password = newPassword;

localStorage.setItem("user", JSON.stringify(user));

alert("Password Reset Successful");

window.location.href="login.html";

}
else{

alert("Email not found");

}

});