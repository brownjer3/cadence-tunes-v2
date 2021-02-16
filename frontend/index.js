// submit form button logic
const submit = document.getElementById('submit')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    //check that the fields have content
    //submit fetch request
})



//populate top playlists list
const topList = document.getElementById('topList')

document.addEventListener("DOMContentLoaded", () => {
    loadTopPlaylists()
    loadGenres()
})

function loadTopPlaylists() {
    for (let i=0; i<10; i++) {
        const liItem = document.createElement('div')
        liItem.innerHTML = `<li id='playlist-${i}'> Playlist ${i+1} </li>`
        topList.appendChild(liItem)
    }
}

// function loadPlaylistLi(item) {
//     item.innerHTML = `<li> Song # </li>`
// }


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
