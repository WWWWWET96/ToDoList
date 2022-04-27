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
function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify(): JavaScript객체를 JSON문자열로 변환할 때
}

function deleteTodo(event){
   const oneList = event.target.parentElement;
   oneList.remove();
}

function paintTodo(newTodo){
    const oneList = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteTodo);
    oneList.appendChild(span);
    oneList.appendChild(button);
    todoList.appendChild(oneList);
}

function handleTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;// 비우기 전 값 저장
    todoInput.value=""; //작성 후 비우기 
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos != null){
    const parsedTodos = JSON.parse(savedTodos); //String을 Array로 변경
    toDos = parsedTodos; //기존에 있던 todos를 복원
    parsedTodos.forEach((item) => paintTodo(item));
}