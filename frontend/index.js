const hello = document.getElementById('title')

hello.addEventListener("click", (e) => {
    e.target.innerText = 'Goodbye world'
})
