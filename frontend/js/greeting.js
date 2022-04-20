const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const shapeLeft = document.querySelector(".background .shape:first-child");
const shapeRight = document.querySelector(".background .shape:last-child");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    shapeLeft.classList.add(HIDDEN_CLASSNAME);
    shapeRight.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username){
    greeting.innerText = `hello it's ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);


if(savedUsername === null){//localstorage에 username없을 경우
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    
}else{
    //show the greetings
    paintGreetings(savedUsername);

}

/*
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

Same with upper code

*/