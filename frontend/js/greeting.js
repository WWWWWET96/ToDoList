const greeting = document.querySelector(".greeting");
const savedUsername = localStorage.getItem("username");

function paintGreetings(username){
    greeting.innerText = `it's ${username}'s todolist`;
}

paintGreetings(savedUsername);

if(savedUsername ===null){
   location.href= "file:///C:/momentum/frontend/html/index.html";

}