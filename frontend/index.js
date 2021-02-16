//this top section should stay here in index.js
const port = "http://localhost:3000"
const playlistApi = new PlaylistApi(port)


// submit form button logic
const submit = document.getElementById('submit')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    //check that the fields have content
    //submit fetch request
})


playlistApi.getPlaylists()
