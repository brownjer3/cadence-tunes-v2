//this top section should stay here in index.js
const port = "http://localhost:3000"
const playlistApi = new PlaylistApi(port)
const spotifyApi = new SpotifyApi(port)
const songApi = new SongApi(port)
// const spotifyRecs = new SpotifyApi(port)

const cadence = document.getElementById('cadence')
const introQuestion = document.getElementById('intro-question')
const introBuilder = document.getElementById('intro-builder')


// buttons
const submit = document.getElementById('submit')
const wipTools = document.getElementById('WIP-tools')
const edit = document.getElementById('edit')
const save = document.getElementById('save')
const wipInfo = document.getElementById('wip-info')

document.addEventListener('keydown', (e) => {
    if (e.code === "Enter" && cadence.value >= 130 && cadence.value <= 240) {
        introQuestion.innerText = "What type of music do you like to run to?"
        introBuilder.innerHTML = `<div id='genres' class='row'></div>`
        spotifyApi.getGenres()
    }
})


submit.addEventListener('click', (e) => {
    e.preventDefault()
    //check that the fields have content
    //submit fetch request
    spotifyApi.getRecs()
})

save.addEventListener('click', () => {
    playlistApi.save()
})

// I AM HERE!!!!!
// save.addEventListener('click', (e) => {
//     e.preventDefault()
//     spotifyApi.save()
// })

playlistApi.getPlaylists()
