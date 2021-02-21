//this top section should stay here in index.js
const port = "http://localhost:3000"
const playlistApi = new PlaylistApi(port)
const spotifyApi = new SpotifyApi(port)
const songApi = new SongApi(port)
// const spotifyRecs = new SpotifyApi(port)

const intro = document.getElementById('intro')
const phase2 = document.getElementById('phase2')
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
        if (cadencePresent() && !validGenres()) {
            if (validateCadenceRange()) {step2()}
        } else if(!cadencePresent() && validGenres()) {
            toggleSteps()
            step3()
        } else if (cadencePresent() && validGenres()) {
            if (validateCadenceRange()) {step3()}
        }
    }
})

document.addEventListener('click', (e) => {
    if (e.target === save) {
        playlistApi.save()
    } else if (e.target === edit) {
        Playlist.createPlaylistName()
    } else if (e.target.id === "change-cadence") {
        changeCadence()
    } else if (e.target.id === 'change-genres') {
        toggleSteps()
        step2()
    }
})

function step2() {
    Genre.active = []
    introQuestion.innerText = "What type of music do you like to run to?"
    introBuilder.innerHTML = `<div id='genres' class='row'><small>Select up to 5 then (enter)</small></div>`
    document.getElementById('genres').addEventListener('keydown', Genre.selectGenres)
    spotifyApi.getGenres()
}

function step3() {
    recList.innerHTML = ""
    spotifyApi.getRecs()
    Genre.listActiveGenres()
    listActiveCadence()
}

function validateCadenceRange() {
    if (cadence.value < 120) {
        alert("Please enter a valid cadence above 120")
    } else if (cadence.value > 260) {
        alert("Please enter a valid cadence below 260")
    }
    return (cadence.value > 120 && cadence.value < 260)
}

function cadencePresent() {
    return cadence.offsetParent !== null
}

function validGenres() {
    return Genre.active.length > 0 && Genre.active.length <= 5
}

function toggleSteps() {
    if (intro.style.display !== 'none') {
        intro.style.display = 'none'
        phase2.style.display = 'block'
    } else {
        intro.style.display = 'block'
        phase2.style.display = 'none'
    }
}

function changeCadence() {
    const cadenceField = document.getElementById('list-active-cadence')
    cadenceField.innerHTML = ""
    cadenceField.appendChild(cadence)
    cadenceField.classList.remove('w-100')
    cadenceField.classList.add('w-50', 'form-control-sm', 'float-end')
    const cadencePrompt = document.getElementById('change-cadence')
    cadencePrompt.innerText = "(enter)"
}

function listActiveCadence() {
    const genreHeader = document.getElementById("list-active-cadence")
    genreHeader.innerText = `Cadence: ${cadence.value}`
}

playlistApi.getPlaylists()
