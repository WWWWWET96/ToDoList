const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
  
    location.href = "../html/todo.html";
}

loginForm.addEventListener("submit", onLoginSubmit);

fetch("http://localhost:8080/api/login",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: "kim",
    }),
}).then((response) => console.log(response));