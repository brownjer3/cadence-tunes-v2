class Genre {

    static all = []
    static active = []

    constructor(data) {
        this.name = data.name
        this.categoryId = data.id
        this.seedId = Genre.seed_id(data.name)
        this.iconUrl = data.icons[0].url

        this.input = document.createElement('div')
        this.input.classList.add("col-2", "p-3")
        this.input.id = this.seedId

        Genre.all.push(this)
    }

    static seed_id(name) {
        return name.toLowerCase().replace(" ","-")
    }

    static listActiveGenres() {
        const str = Genre.active.map((g) => g.name).join(", ")
        const genreHeader = document.getElementById("list-active-genres")
        genreHeader.innerText = `Genres: ${str}`
    }

    render() { 
    this.input.innerHTML = `
        <input id='${this.seedId}' type="checkbox" class="btn-check form-check-input" name="genre" value='${this.seedId}'>
        <label class='form-check-label' for='${this.seedId}'><img src='${this.iconUrl}' class="img-thumbnail border">
            ${this.name}
        </label>
        `
        this.input.addEventListener('click', () => {
            this.toggleActive()
        })
        return this.input
    }


    toggleActive() {
        console.log(Genre.active)
        const img = this.input.getElementsByTagName('IMG')[0]
        if (this.input.checked !== true) {
            this.input.checked = true
            img.classList.add("border-primary", "border-5")
            Genre.active.push(this)
        } else {
            this.input.checked = false
            img.classList.remove("border-primary", "border-5")
            Genre.active.pop(this)
        }
    }

    addlisteners() {
        const genres = document.getElementById('genres')
        genres.addEventListener('keydown', (e) => {
            Genre.selectGenres(e)
        })
    }

    addToDom() {
        const genreOptions = document.getElementById('genres')
        genreOptions.appendChild(this.render())
    }

    static selectGenres() {
        if (Genre.active.length > 0 && Genre.active.length <= 5) {
            spotifyApi.getRecs()
        } else if (Genre.active.length === 0) {
            alert("Please select a genre")
        } else if (Genre.active.length > 5) {
            alert("You can only select up to 5 genres")
        }
    }

    static setSeedStr() {
        let str = ""
        Genre.active.forEach(g => str += g.seedId + ",")
        return str
    }


}