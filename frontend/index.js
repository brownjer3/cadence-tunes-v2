//this top section should stay here in index.js
const port = "http://localhost:3000"
const playlistApi = new PlaylistApi(port)
const spotifyApi = new SpotifyApi(port)
// const spotifyRecs = new SpotifyApi(port)

// buttons
const submit = document.getElementById('submit')
const edit = document.getElementById('edit')

submit.addEventListener('click', (e) => {
    e.preventDefault()

    //check that the fields have content
    //submit fetch request
    spotifyApi.getRecs()
})

playlistApi.getPlaylists()
spotifyApi.getGenres()