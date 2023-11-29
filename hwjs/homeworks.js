let container = document.createElement('div')
let label = document.createElement('label')
let inputs = document.createElement('input')
let input = document.createElement('input')
let inputos = document.createElement('input')
let labels = document.createElement('label')
let title = document.createElement('label')
let btn = document.createElement('button')

label.setAttribute('for', 'name')
input.setAttribute('placeholder', 'Movie Title')
labels.setAttribute('for', 'img')
inputs.setAttribute('placeholder', 'Image URL')
title.setAttribute('for', 'price')
inputos.setAttribute('placeholder', 'Movie Price')
label.className = 'title'
label.innerHTML = 'Movie title:'
labels.innerHTML = 'Image URL:'
title.innerHTML = 'Movie Price:'
btn.innerHTML = 'Add'

inputs.id = 'img'
inputos.id = 'price'
container.className = 'contar'
container.id = 'idName'
input.id = 'name'
btn.style.color = 'white'
btn.style.backgroundColor = 'darkBlue'

let moveis = [{
    name: input.value,
    picture: inputs.value,
    price: inputos.value
}]
function result(moveis) {
    console.log(moveis);
    const conteiners = document.createElement('div')
    conteiners.id = 'idName'
    const nameMove = document.createElement('h2')
    const imgMove = document.createElement('img')
    const priceMove = document.createElement('p')
    moveis.name.textContent = 'Movie Title' + nameMove
    moveis.src.textContent = 'Movie Title' + imgMove
    moveis.price.textContent = 'Movie Title' + priceMove
    // nameMove.innerHTML=moveis.name
    // img.src=moveis.picture
    // priceMove.innerHTML=moveis.price
    document.body.div.append(nameMove)
    document.body.div.append(imgMove)
    document.body.div.append(priceMove)
}
function displayMoveis() {
    container.innerHTML = ''
    moveis.forEach((item) => {
        const movieElement = result(item)
        document.body.div.append(movieElement)
    });
}
btn.addEventListener('click', () => {
    const name = nameMoveis.value;
    const picture = pictureMoveis.value;
    const price = priceMoveis.value;

    if (name && picture && price) {
        const movie = { name, picture, price };
        moveis.push(movie);
        displayMoveis();
        inputs.value = '';
        input.value = '';
        inputos.value = '';
    } else {
        alert('Please fill in all fields.');
    }
});

document.body.append(container)
document.body.append(label)
document.body.append(input)
document.body.append(labels)
document.body.append(inputs)
document.body.append(title)
document.body.append(inputos)
document.body.append(btn)














<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div id="container">
    <div id="addTask">
    <input type="text" id="input" placeholder="Введите задание ">

</div>
<ol id="notCompleted">
    <h3>Не заполнено</h3>
    <li>Введитe задание...
        <input type="checkbox">
        <!-- <button><i id="fa fa-check"></i></button> -->
        <!-- <button><i id="fa fa-trash"></i></button> -->
    </li>
</ol>

<ol id="completed">
    <h3>Не заполнено</h3>
</ol>
</div>
    <script src="./zaibal.js"></script>
</body>
</html>





let input =document.getElementById('input')
const btn=document.getElementById('addTask')
btn.addEventListener('click',addList)
function addList(event){
    const notComplete=document.getElementById('notCompleted')
    const complete=document.getElementById('completed')
    const newLi=document.createElement('li')
    const checkBtn=document.createElement('button')
    const delBtn=document.getElementById('button')
    checkBtn.innerHTML='   <input type="checkbox">'
    delBtn.innerHTML='<i id="fa fa-trash"></i>'
    if(input.value!==''){
    newLi.textContent=input.value;
    input.value='';
    notComplete.appendChild(newLi)
    newLi.appendChild(checkBtn)
    }
    checkBtn.addEventListener('click',()=>{
        const parent=this.parentsNode;
        parent.remove()
    })
}