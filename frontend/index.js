const port = "http://localhost:3000"
const playlistApi = new PlaylistApi(port)


// submit form button logic
const submit = document.getElementById('submit')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    //check that the fields have content
    //submit fetch request
})


// load genre options
function loadGenres() {
    const genreOptions = document.getElementById('genres')
    for (let i=0; i<20; i++) {
        const input = document.createElement('div')
        input.classList.add("col-2", "p-3")
        input.innerHTML = `<input id='genre-${i}' type="radio" class="btn-check" name="genre" value='genre-${i}'>
            <label class="btn btn-primary" for='genre-${i}'>Genre ${i+1}</label>
        `
        genreOptions.appendChild(input)
    }
}

playlistApi.getPlaylists()
