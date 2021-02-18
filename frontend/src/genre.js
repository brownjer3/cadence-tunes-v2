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
        //add event listener here
    }

    // load genre options
    static loadGenres() {
        const genreOptions = document.getElementById('genres')
        for (let i=0; i<20; i++) {
            const input = document.createElement('div')
            input.classList.add("col-2", "p-3")
            input.innerHTML = `<input id='genre-${i}' type="radio" class="btn-check" name="genre" value='genre-${i}'>
                <label class="btn btn-primary" for='genre-${i}'>Genre ${i+1}</label>
            `
            genreOptions.appendChild(input)
        }
    }


}