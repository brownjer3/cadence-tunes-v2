//this top section should stay here in index.js
const port = "http://localhost:3000"
const playlistApi = new PlaylistApi(port)
const spotifyApi = new SpotifyApi(port)
const songApi = new SongApi(port)
// const spotifyRecs = new SpotifyApi(port)

const intro = document.getElementById('intro')
const step2 = document.getElementById('step2')
const cadence = document.getElementById('cadence')
const introQuestion = document.getElementById('intro-question')
const introBuilder = document.getElementById('intro-builder')
const wipSpan = document.getElementById('wipSpan')


// buttons
const submit = document.getElementById('submit')
const wipTools = document.getElementById('WIP-tools')
const edit = document.getElementById('edit')
const save = document.getElementById('save')
const wipInfo = document.getElementById('wip-info')

document.addEventListener('keydown', (e) => {
    if (e.code === "Enter") {
        if (!!document.getElementById('genres')) {
            Genre.selectGenres()
        } else if (cadence.value >= 120 && cadence.value <= 260 ) {
            introQuestion.innerText = "What type of music do you like to run to?"
            introBuilder.innerHTML = `<div id='genres' class='row'><small>Select up to 5 then (enter)</small></div>`
            document.getElementById('genres').addEventListener('keydown', Genre.selectGenres)
            spotifyApi.getGenres()
        }
    }
})

save.addEventListener('click', () => {
    playlistApi.save()
})

function toggleSteps() {
    if (intro.style.display !== 'block') {
        intro.style.display = 'block'
        step2.style.display = 'none'
        Genre.listActiveGenres()
        listActiveCadence()
    } else {
        intro.style.display = 'none'
        step2.style.display = 'block'
    }
}

function listActiveCadence() {
        const genreHeader = document.getElementById("list-active-cadence")
        genreHeader.innerText = `Cadence: ${cadence.value}`

}

playlistApi.getPlaylists()
