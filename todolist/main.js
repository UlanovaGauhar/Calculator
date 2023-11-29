
//  function storageAvailable() {
// if( QwaZESXRDCTFVBGUHJIMOKLP){
//         const x = 'storage_test';
//         storage.setItem(x, x);
//         storage.removeItem(x);
//         return true;}
//    else {
//         return false;
//     }
// }
// function initializeTaskList() {
//     if (storageAvailable('localStorage')) {
//         const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         const taskList = document.getElementById('taskList');

//         tasks.forEach(task => {
//             const li = document.createElement('li');
//             li.textContent = task;
//             taskList.appendChild(li);
//         });}}
// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const dateInput = document.getElementById('dateInput');
//     const taskList = document.getElementById('taskList');

//     const taskText = taskInput.value.trim();
//     const dateText = dateInput.value;

//     if (taskText !== "") {
//         const li = document.createElement('li');
//         li.textContent = taskText + dateText
//         taskList.appendChild(li);

//         taskInput.value = "";
//         dateInput.value = "";
//         if (storageAvailable('localStorage')) {
//             const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//             tasks.push(li.textContent);
//             localStorage.setItem('tasks', JSON.stringify(tasks));
//         }}}
// function deleteTasks() {
//     const taskList = document.getElementById('taskList');
//     taskList.innerHTML = "";
//     if (storageAvailable('localStorage')) {
//         localStorage.removeItem('tasks');
//     }
// }
// // setTimeout(deleteTasks,2000)





















































































































































































































































































































































































































































































































// let todolIstDiv=document.getElementById('todolist')
// let todoListAction=document.getElementById('todoList-action')
// let title=document.createElement('h3')
// title.innerHTML='TodoList'
// title.style.backgroundColor='violet'
// let input=document.createElement('input')
// input.placeholder='Todo List...'
// let dateInput=document.createElement('input')
// dateInput.setAttribute('type','date')
// let button=document.createElement('button')
// button.innerHTML='Add'
// button.style.backgroundColor='black'
// button.style.color='violet'
// button.style.width='100px'
// input.style.backgroundColor='violet'
// dateInput.style.backgroundColor='violet'
// dateInput.style.color='black'
// let nameTodolist=document.createElement('p')
// let dateTodolist=document.createElement('p')
// nameTodolist.style.border='solid'
// nameTodolist.style.borderColor='black'
// nameTodolist.style.backgroundColor='violet'

// dateTodolist.style.border='solid'
// dateTodolist.style.borderColor='black'
// dateTodolist.style.backgroundColor='violet'
// dateTodolist.style.marginTop='10px      '




// let valueInput=''
// let valueDateInput=''
// let dataTodolist=[]

// const valueInputHAndler=(event)=>{
//     valueInput=event.target.value
// }
// const valueDateInputHAndler=(event)=>{
//     valueDateInput=event.target.value
// }
// const resultTodoListHAndler=()=>{
//     dataTodolist.push({
//         name:valueInput,
//         date:valueDateInput,
//     })
//     let local=JSON.stringify(dataTodolist)
//     localStorage.setItem('MyTodoListElement',local)
//     dataTodolist.forEach((item)=>{
//         nameTodolist.innerHTML=item.name
//         dateTodolist.innerHTML=item.date})}
// input.addEventListener('input',valueInputHAndler)
// dateInput.addEventListener('input',valueDateInputHAndler)
// button.addEventListener('click',resultTodoListHAndler,()=>{
//     const buttonDelete=document.createElement('button')
//     buttonDelete.addEventListener('click',()=>{
//         if (todolIstDiv) {
//             todolIstDiv.remove();}})
//         buttonDelete.innerHTML='Delete'
//         buttonDelete.style.width='100px'
//         buttonDelete.style.height='40px'
//         buttonDelete.style.marginTop='61px'
//         buttonDelete.style.backgroundColor='black'
//         buttonDelete.style.color='violet'
//     document.body.append(buttonDelete)})


// todolIstDiv.append(nameTodolist)
// todolIstDiv.append(dateTodolist)    
// todoListAction.append(title)
// todoListAction.append(input)
// todoListAction.append(dateInput)
// todoListAction.append(button)

