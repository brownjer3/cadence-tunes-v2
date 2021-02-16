// submit form button logic
const submit = document.getElementById('submit')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    //check that the fields have content
    //submit fetch request
})



//populate top playlists list
fetch('http://localhost:3000/playlists')
.then(r => r.json())
.then(playlists => renderPlaylists(playlists))

function renderPlaylists(playlists) {
    const topPlaylists = playlists.data
    topPlaylists.forEach((playlist) => {
        const i = new Playlist({id: playlist.id, ...playlist.attributes})
        i.addToDom()
    })
}


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
