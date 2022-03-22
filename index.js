document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    const list = document.querySelector('ul');
    list.appendChild(movie);

    inputField.value = ''
}

function deleteMovie(event) {
    message.textContent = `Movie deleted!`
    
    event.target.parentNode.remove();
}
function crossOffMovie(event) {
    event.target.classlist.toggle('checked')
        if (event.target.classlist.contains('checked') === true) {
            message.textContent = 'Movie watched'
        }
}
