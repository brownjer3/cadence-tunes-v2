class Song {

    static all = []
    static recList = document.getElementById('recList')
    static form = document.getElementById('form')

    constructor(name) {
        this.name = name

        this.li = document.createElement('li')
        // this.input.classList.add("col-2", "p-3")

        Song.all.push(this)
    }

    render() {
        this.li.innerHTML = `
            <li>${this.name}</li>
        `
        return this.li
    }

    addToDom() {
        Song.form.style.display = "none"
        Song.recList.appendChild(this.render())
        // add event listener to select song
    }

}