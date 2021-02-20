//this top section should stay here in index.js
const port = "http://localhost:3000"
const playlistApi = new PlaylistApi(port)
const spotifyApi = new SpotifyApi(port)
const songApi = new SongApi(port)
// const spotifyRecs = new SpotifyApi(port)

// buttons
const submit = document.getElementById('submit')
const wipTools = document.getElementById('WIP-tools')
const edit = document.getElementById('edit')
const save = document.getElementById('save')
const wipInfo = document.getElementById('wip-info')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    //check that the fields have content
    //submit fetch request
    spotifyApi.getRecs()
})

save.addEventListener('click', () => {
    // save the playlist
    // save each song, associating with new playlist
    playlistApi.save()
})

// I AM HERE!!!!!
// save.addEventListener('click', (e) => {
//     e.preventDefault()
//     spotifyApi.save()
// })

playlistApi.getPlaylists()
spotifyApi.getGenres()