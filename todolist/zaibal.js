// // let TodolistDiv = document.getElementById('container')
// // let TodolistAction = document.getElementById('Todolist-action')



// // let valueInput = ''
// // let valueDateInput = ''
// // let dataTodolist = []

// // const ValueInputHandler = (event) => {
// //     valueInput = event.target.value
// // }
// // const ValueDateInputHandler = (event) => {
// //     valueDateInput = event.target.value
// // }

// // const resultTodolistHandler = () => {
// // dataTodolist.push({
// //     name: valueInput,
// //     date: valueDateInput
// // })}
// // let localStorageData = JSON.stringify(dataTodolist)
// // localStorage.setItem('myTodolistElement', localStorageData)
// // task.forEach(task => {
// //     const li = document.createElement('li');
// //     li.textContent = task;
// //     taskList.appendChild(li);
// // });
// // function addTask() {
// // const taskInput = document.getElementById('taskInput');
// // const dateInput = document.getElementById('dateInput');
// // const taskList = document.getElementById('taskList');

// // const taskText = taskInput.value.trim();
// // const dateText = dateInput.value;}

// //         taskInput.value = "";
// //         dateInput.value = "";
// // if (taskText !== "") {
// // const li = document.createElement('li');
// // li.textContent = taskText + dateText
// // taskList.appendChild(li);

// // dataTodolist.forEach((item)=>{
// //     nameTodolist.innerHTML = item.name
// //     dataTodolist.innerHTML = item.date
// // })}
// // input.addEventListener('input', ValueInputHandler)
// // dateInput.addEventListener('input', ValueDateInputHandler)
// // button.addEventListener('click', resultTodolistHandler)




































































// let addMesage=document.getElementById('message')
// let addButton=document.getElementById('add')
// let todo=document.getElementById('todo')
// let todoList=[];


// addButton.addEventListener('click',()=>{
// let newTodo={
//     todo:addMesage.value,
//     checked:false,
//     important:false,
// }
// todoList.push(newTodo)
// displayMessage()
// })


// function displayMessage(){
//     let displayMessage=document.createElement('li')
//     displayMessage.innerHTML=''
//     todoList.forEach(function(item,i){
//         displayMessage+=''
//     let input=document.createElement('input')
//     input.setAttribute('type','chekbox')
//     input.id=`item_${i}`
//     let label=document.createElement('label')
//     label.setAttribute('for',`item_${i}`)
//     label.id=`item_$,{i}`
//     label.innerHTML=`${item.todo}`
    
//   ` <li>
//     <input  type='chekbox' id='item_${i}'>
//         <label for=item_${i}'>${item.todo}</label>
//         </li>`
//     todo.innerHTML=displayMessage
//     })
// }
// document.body.append(displayMessage)
// displayMessage.append(input)
// displayMessage.append(label)



// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }  




























// const close = document.getElementsByClassName("close");
// const date=document.getElementById('date').value;
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     const div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// const list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// function newElement() {
//   const li = document.createElement("li");
//   const inputValue = document.getElementById("myInput").value;
//   const t = document.createTextNode(inputValue);
//   const u=document.createTextNode(date)
//   li.appendChild(t );
//   li.appendChild(u)

//   if (inputValue === ''||date==='') {
//     alert("Вы должны заполнить !");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   const span = document.createElement("SPAN");
//   const txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//     const div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }










































































































// const close = document.getElementsByClassName("close");
// var i='';
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// const list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
   

// }, false);
// let array=[]
// function newElement() {
//   const li = document.createElement("li");
//   const inputValue = document.getElementById("myInput").value;
//   const t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("Вы должны заполнить !");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";
//   localStorage.setItem(array, JSON.stringify(array))
//   array=JSON.parse(localStorage.getItem('array'))
//   array.push(t)
//   const span = document.createElement("SPAN");
//   const txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//     const div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }











const close = document.getElementsByClassName("close");
let array = JSON.parse(localStorage.getItem('myArray')) || [];

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Вы должны заполнить !");
  } else {
    document.getElementById("myUL").appendChild(li);
    array.push(inputValue); 
  }
  document.getElementById("myInput").value = "";
  

    localStorage.setItem('myArray', JSON.stringify(array));

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}






































































// let input =document.getElementById('input')
// const btn=document.getElementById('addTask')
// btn.addEventListener('click',addList)
// input.addEventListener('keyup', (e)=>{
//     (e.keyCode===13 ? addList(e):null)
// })
// function addList(event){
//     const notComplete=document.getElementById('notCompleted')
//     const complete=document.getElementById('completed')
//     const newLi=document.createElement('li')
//     const checkBtn=document.createElement('button')
//     const delBtn=document.getElementById('button')
//     checkBtn.innerHTML=`<input type="checkbox"/> <span>'${task}'</span><button>Delete</button>`
//     delBtn.innerHTML='<i id="fa fa-trash"></i>'
//     if(input.value!==''){
//     newLi.textContent=input.value;
//     input.value='';
//     notComplete.appendChild(newLi)
//     newLi.appendChild(checkBtn)
//     }
//     checkBtn.addEventListener('click',()=>{
//         const parent=this.parentNode;
//         parent.remove()
//         complete.appendChild(parent)
//         checkBtn.style.display='none'
//     })
//     delBtn.addEventListener('click',()=>{
//         const parent=this.parentNode;
//         parent.remove()
       
//     })
// }





























































































