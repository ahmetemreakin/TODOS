
const form =document.querySelector("#todoAddForm");
const addInput=document.querySelector("#todoName");
const todoList=document.querySelector(".list-group");
const firstCarBody=document.querySelectorAll(".list-group")[0];
const secondCarBody=document.querySelectorAll(".list-group")[1];
const clearButton=document.querySelector("#todoClearButton");
const getAttirubate=document.querySelector("#getconsole");
const deleteForm =document.querySelector("#tododeleteForm");
const deleteInput=document.querySelector("#tododeleteName");
deleteEvent()
function deleteEvent(){
    deleteForm.addEventListener("submit",deletToDo)
}

let todos=[];
runevent();
function runevent(){
    form.addEventListener("submit",addTodo);

}
function addTodo(e){
    const inputText=addInput.value.trim();
    if(inputText==null||inputText==""){
        alert("bir değer giriniz")
    }
    else{
        addToDoToUI(inputText);
        addToDoToStorage(inputText);
    }
    e.preventDefault();

    
}
function addToDoToUI(newToDo){

const li=document.createElement("li");
li.className="list-group-item d-flex justify-content-between";

li.textContent=newToDo;
const a=document.createElement("a")
a.href="#";
a.className="delete-item";
const i=document.createElement("i");
i.classname="fa fa-remove"; 
a.appendChild(i);
li.appendChild(a);
todoList.appendChild(li);
addInput.value="";

}
function addToDoToStorage(newToDo){
    checkTodosFromStorage();
    todos.push(newToDo);
    localStorage.setItem("todos",JSON.stringify(todos));
}
function checkTodosFromStorage(){
    if(localStorage.getItem("todos")===null){
        todos=[]
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }

}

function getTodosFromLocalToConsole(){

    gettodos=JSON.parse(localStorage.getItem("todos"));
    gettodos.forEach(element => {
        console.log(element)
    });
}
function deletToDo(e){
    console.log("deletetodo")
    let val=deleteInput.value;
    if(val===null||val===""){
        alert("bir değer giriniz")
    }
    else{
        checkTodosFromStorage()
        if(todos===null){
            alert("silinecek bir şey yok")
        }
        else{
            for(let i =0;i<todos.length;i++){
                if(todos[i]==val){
                    todos=todos.filter(todo => todo !== val)
                }
            }
            localStorage.setItem("todos",JSON.stringify(todos));
            
        }
}
    

}