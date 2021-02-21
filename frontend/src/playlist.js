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

    static createPlaylistName() {
        const name = prompt("Give your playlist a name:")
        Playlist.playlistName.innerText = name
        wipTools.style.display = 'inline'
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
        Playlist.recentList.insertBefore(this.render(), Playlist.recentList.childNodes[0])
        this.associate()
        Playlist.resetWip()
        this.li.addEventListener('click', this.toggleSongs)
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

    toggleSongs() {
        const p = Playlist.all.find((p) => p.id === Number(this.dataset.id))
        if (this.childElementCount > 1) {
            p.hideSongs()
        } else {
            p.displaySongs()
        }
    }

    hideSongs = () => {
        this.li.getElementsByClassName('unstyled-list')[0].remove()
    }

    displaySongs = () => {
        const songList = document.createElement('ul')
        songList.classList.add('unstyled-list')
        // const p = Playlist.all.find((p) => p.id === id)
        this.songs().forEach((song) => {
            const li = document.createElement('li')
            li.innerText = song.name
            songList.appendChild(li)
        })
        this.li.appendChild(songList)
    }


}