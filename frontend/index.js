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
})

function loadTopPlaylists() {
    for (let i=0; i<10; i++) {
        const liItem = document.createElement('li')
        loadPlaylistLi(liItem)
        topList.appendChild(liItem)
    }
}

function loadPlaylistLi(item) {
    item.innerHTML = `<li> hi there </li>`
}
