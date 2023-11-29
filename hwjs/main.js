// let hew = document.createElement('input')
// let fe = document.createElement('input')
// let b = document.createElement('input')
// let bd = document.createElement('h2')
// let c = document.createElement('button')
// c.innerHTML = 'RESULT'
// c.style.backgroundColor='black'
// c.style.color='red'
// c.style.borderRadius='10px'
// hew.style.backgroundColor='black'
// hew.style.color='white'
// hew.style.borderRadius='10px'
// hew.style.borderColor='purple'
// fe.style.backgroundColor='black'
// fe.style.color='white'
// fe.style.borderRadius='10px'
// fe.style.borderColor='purple'
// b.style.backgroundColor='black'
// b.style.color='red'
// b.style.borderRadius='10px'
// let as = ''
// let s = ''
// let fs = ''
// let resultts = ''
// let te=''
const handlerAs = (event) => {
    as = event.target.value
}
const handler = (event) => {
    s = event.target.value
}
const opera = (event) => {
    fs = event.target.value
}
// const results = () => {
//     if (fs === '-' || fs === '/') {
//     if (fs === '-') {
//     fs = Number(as) - Number(s);
//     } else if (te === '/') {
//     fs = Number(as) / Number(s);}
//     bd.innerHTML = fs;}}



//     const result = () => {
//         if (fs === '+' || fs === '*') {
//             if (fs === '+') {
//                 resultts = Number(as) + Number(s);
//             } else if (fs === '*') {
//                 resultts = Number(as) * Number(s);}
//                 bd.innerHTML = resultts;}}
//                 hew.addEventListener('input', handlerAs)
//                 b.addEventListener('input', handler)
// c.addEventListener('click', results)
// fe.addEventListener('input', opera)
// document.body.append(hew)
// document.body.append(fe)
// document.body.append(b)
// document.body.append(c)
// document.body.append(bd)


//         const container = document.getElementById('container');
//         const nameInput = document.getElementById('name');
//         const imgInput = document.getElementById('img');
//         const priceInput = document.getElementById('price');
//         const addBtn = document.getElementById('addBtn');
//         const movieList = document.getElementById('movieList');

//         let movies = [];

//         function createMovieElement(movie) {
//             const movieDiv = document.createElement('div');
//             const nameElement = document.createElement('h2');
//             const imgElement = document.createElement('img');
//             const priceElement = document.createElement('p');

//             nameElement.textContent = 'Movie Title: ' + movie.name;
//             imgElement.src = movie.picture;
//             priceElement.textContent = 'Movie Price: ' + movie.price;

//             movieDiv.appendChild(nameElement);
//             movieDiv.appendChild(imgElement);
//             movieDiv.appendChild(priceElement);

//             return movieDiv;
//         }

//         function displayMovies() {
//             movieList.innerHTML = '';
//             movies.forEach((movie) => {
//                 const movieElement = createMovieElement(movie);
//                 movieList.appendChild(movieElement);
//             });
//         }

//         addBtn.addEventListener('click', () => {
//             const name = nameInput.value;
//             const picture = imgInput.value;
//             const price = priceInput.value;

//             if (name && picture && price) {
//                 const movie = { name, picture, price };
//                 movies.push(movie);
//                 displayMovies();
//                 nameInput.value = '';
//                 imgInput.value = '';
//                 priceInput.value = '';
//             } else {
//                 alert('Please fill in all fields.');
//             }
//         });
