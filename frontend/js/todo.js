const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "toDos";
let toDos = [];
/*
toDos는? lists를 저장하기 위한 array
하지만 값을 추가한 후 새로고침 할 때, 기존의 원소들은 사라지는 문제점 발생
그렇다면? const가 아닌 let으로 변경하여 업데이트가 가능하게 만들고,
*/

//Get
fetch('http://localhost:8080/api/post')
.then((response) => response.json())
.then((data) => {data.forEach(i => console.log(i.content))});



function saveTodos(){
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify(): JavaScript객체를 JSON문자열로 변환할 때
}

function deleteTodo(event){
   const oneList = event.target.parentElement;
   oneList.remove();
   toDos = toDos.filter(item => item.id !== parseInt(oneList.id)); //oneList.id는 String, toDos.item.id는 number
   saveTodos();//localStorage에 다시 저장
}

function paintTodo(newTodo){
    const oneList = document.createElement("li");
    oneList.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.contents; // 기존의 newTodo는 text를 받았지만, 이젠 obj를 받으니까
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteTodo);
    oneList.appendChild(span);
    oneList.appendChild(button);
    todoList.appendChild(oneList);
}

function makeNewData(content){
    const newData = {
        id: Date.now(),
        contents: content,
    } ;
    paintTodo(newData);
}

function handleTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;// 비우기 전 값 저장
    todoInput.value=""; //작성 후 비우기 
    const newTodoObj = { //리스트를 ID, contents(String)으로 저장하기 위해 obj로 변경
        id:Date.now(),
        contents:newTodo, 
    };
    fetch("http://localhost:8080/api/post",{
        mode: 'cors',
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodoObj),
    })
    .then((response) => console.log("post work"));
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos != null){
     const parsedTodos = JSON.parse(savedTodos); //String을 Array로 변경
     toDos = parsedTodos; //기존에 있던 todos를 복원
     parsedTodos.forEach((item) => paintTodo(item));
}







   

