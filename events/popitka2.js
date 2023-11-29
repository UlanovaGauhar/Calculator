        
        const container = document.getElementById('container');
        const nameInput = document.getElementById('name');
        const imgInput = document.getElementById('img');
        const priceInput = document.getElementById('price');
        const addBtn = document.getElementById('addBtn');
        const movieList = document.getElementById('movieList');

        let movies = [];

        function createMovieElement(movie) {
            const movieDiv = document.createElement('div');
            const nameElement = document.createElement('h2');
            const imgElement = document.createElement('img');
            const priceElement = document.createElement('p');

            nameElement.textContent = 'Movie Title: ' + movie.name;
            imgElement.src = movie.picture;
            priceElement.textContent = 'Movie Price: ' + movie.price;

            movieDiv.appendChild(nameElement);
            movieDiv.appendChild(imgElement);
            movieDiv.appendChild(priceElement);

            return movieDiv;
        }

        function displayMovies() {
            movieList.innerHTML = '';
            movies.forEach((movie) => {
                const movieElement = createMovieElement(movie);
                movieList.appendChild(movieElement);
            });
        }

        addBtn.addEventListener('click', () => {
            const name = nameInput.value;
            const picture = imgInput.value;
            const price = priceInput.value;

            if (name && picture && price) {
                const movie = { name, picture, price };
                movies.push(movie);
                displayMovies();
                nameInput.value = '';
                imgInput.value = '';
                priceInput.value = '';
            } else {
                alert('Please fill in all fields.');
            }
        });
