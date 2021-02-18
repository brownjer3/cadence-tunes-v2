//this top section should stay here in index.js
const port = "http://localhost:3000"
const playlistApi = new PlaylistApi(port)
const spotifyApi = new SpotifyApi(port)
// const spotifyRecs = new SpotifyApi(port)


// submit form button
const submit = document.getElementById('submit')

submit.addEventListener('click', (e) => {

    //check that the fields have content
    //submit fetch request
    spotifyApi.getRecs()
    e.preventDefault()
})

playlistApi.getPlaylists()
spotifyApi.getGenres()