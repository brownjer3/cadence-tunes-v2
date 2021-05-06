// const port = "https://fast-sea-71078.herokuapp.com"
const port = 'http://localhost:3000'
const playlistApi = new PlaylistApi(port)
const spotifyApi = new SpotifyApi(port)

const intro = document.getElementById('intro')
const phase2 = document.getElementById('phase2')
const cadence = document.getElementById('cadence')
const introQuestion = document.getElementById('intro-question')
const introBuilder = document.getElementById('intro-builder')
const wipSpan = document.getElementById('wipSpan')
const prompt = document.getElementById('prompt')

// info modals
const infoLinks = document.getElementById('info-links')
const modalInfo = document.getElementById('modal-info')

// buttons
const next = document.getElementById('next')
const submit = document.getElementById('submit')
const wipTools = document.getElementById('WIP-tools')
const edit = document.getElementById('edit')
const save = document.getElementById('save')
const wipInfo = document.getElementById('wip-info')


next.addEventListener('click', (e) => {
    // bug on step 2
    if (cadencePresent() && !validGenres()) { // step 1 -> step 2
        if (validateCadenceRange()) {step2()}
    } else if(!cadencePresent() && validGenres()) { // step 2 -> step 3
        toggleSteps()
        step3()
    } else if (cadencePresent() && validGenres()) { // step 3 refresh
        if (validateCadenceRange()) {step3()}
    }
})

document.addEventListener('click', (e) => {
    if (e.target === save) {
        playlistApi.save()
        alert("Playlist saved!")
    } else if (e.target === edit) {
        Playlist.createPlaylistName()
    } else if (e.target.id === "change-cadence") {
        changeCadence()
    } else if (e.target.id === 'change-genres') {
        toggleSteps()
        step2()
    }
})

infoLinks.addEventListener('click', (e) => {
    if (e.target.id === 'how') {
        modalInfo.innerText = "When running, count the number of times your left foot hits the ground in 60 seconds, then double it to get the total for both feet."
    } else if (e.target.id === 'what') {
        modalInfo.innerText = "There's no ideal cadence for everyone. That said, most recreational runners will have a cadence between 150 - 170 with a max of around 180."
    } else if (e.target.id === 'why') {
        modalInfo.innerText = "When you have a quicker cadence, your stride becomes shorter, making it easier for your feet to land underneath you, which reduces heel striking, saves your knees, and helps prevent other injuries."
    }
})

function step2() {
    Genre.active = []
    introQuestion.innerText = "What type of music do you like to run to?"
    prompt.innerText = "Select up to 5 genres"
    introBuilder.innerHTML += `<div id='genres' class='row'></div>`
    document.getElementById('genres').addEventListener('keydown', Genre.selectGenres)
    infoLinks.style.display = 'none'
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
    document.getElementById('change-cadence').innerText = "(change)"
}

playlistApi.getPlaylists()
