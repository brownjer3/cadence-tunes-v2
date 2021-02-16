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
    const liItem = document.createElement('li')
    liItem.innerHTML = `<li> hi there </li>`
    topList.appendChild(liItem)
})

