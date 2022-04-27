const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
  
    location.href = "/momentum/frontend/html/todo.html";
}

loginForm.addEventListener("submit", onLoginSubmit);


