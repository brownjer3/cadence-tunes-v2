class Playlist {

    static all = []
    static recentList = document.getElementById('recentList')
    static wipUl = document.getElementById('wipUl')
    static playlistName = document.getElementById('playlistName')

    constructor({id, name}) {
        this.name = name
        this.id = Number(id)

        this.li = document.createElement('li')
        this.li.dataset["id"] = id

        Playlist.all.push(this)
    }

    songs() {
        return Song.all.filter((s) => s.playlistId === this.id)
    }

    render() {
        this.li.innerHTML = `
            <div data-id="${this.id}">
                <span>${this.name}</span>
            </div>
        `
        return this.li
    }

    addToDom() {
        Playlist.recentList.appendChild(this.render())
        this.associate()
        Playlist.resetWip()
        this.li.addEventListener('click', this.displaySongs)
    }

    static resetWip() {
        Playlist.playlistName.innerText = ''
        Playlist.wipUl.innerText = ''
        Song.inProgress = []
        wipTools.style.display = 'none'
    }

    associate() {
        Song.inProgress.forEach((s) => {
            s.playlistId = this.id
        })
    }

    displaySongs = (e) => {
        const songList = document.createElement('ul')
        const id = Number(e.currentTarget.dataset.id)
        const p = Playlist.all.find((p) => p.id === id)
        p.songs().forEach((song) => {
            const li = document.createElement('li')
            li.innerText = song.name
            songList.appendChild(li)
        })
        e.currentTarget.appendChild(songList)
    }


}