class Genre {

    static all = []

    constructor(name) {
        this.name = name

        this.input = document.createElement('div')
        this.input.classList.add("col-2", "p-3")

        Genre.all.push(this)
    }

    render() {
        this.input.innerHTML = `<input id='${this.name}' type="radio" class="btn-check" name="genre" value='${this.name}'>
        <label class="btn btn-primary" for='${this.name}'>${this.name}</label>
    `
        return this.input
    }

    addToDom() {
        const genreOptions = document.getElementById('genres')
        genreOptions.appendChild(this.render())
        //add event listener here in case i want to hide the genres and only show cadence form
        // this.input.addEventListener('click', getCadence)
    }

    // displaySongs = (e) => {
    //     const songList = document.createElement('ul')
    //     const song = document.createElement('li')
    //     song.innerText = "song name test"
    //     songList.appendChild(song)
    //     e.target.appendChild(songList)
    // }


}