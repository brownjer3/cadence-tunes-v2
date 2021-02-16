// setting all properties (houses HTML for the Dom)
// attach event listeners

class Playlist {

    static all = []
    static topList = document.getElementById('topList')

    constructor({id, name}) {
        this.name = name
        this.id = id
        // this.userName = user.name
        // this.songs = songs

        this.li = document.createElement('li')
        this.li.dataset["id"] = id
        this.li.id = id

        Playlist.all.push(this)
    }

    render() {
        this.li.innerHTML = `
            <div data-id="${this.id}">
                <span>${this.name}</span>
            </div>
        `
        return this.li
    }

    addToDom(li) {
        Playlist.topList.appendChild(this.render())
    }
}