class Playlist {

    static all = []
    static topList = document.getElementById('topList')
    static wipUl = document.getElementById('wipUl')
    static playlistName = document.getElementById('playlistName')

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

    addToDom() {
        Playlist.topList.appendChild(this.render())
        this.li.addEventListener('click', this.displaySongs)
    }

    displaySongs = (e) => {
        const songList = document.createElement('ul')
        const song = document.createElement('li')
        song.innerText = "song name test"
        songList.appendChild(song)
        e.target.appendChild(songList)
    }

    renderPlaylists(playlists) {
        const topPlaylists = playlists.data
        topPlaylists.forEach((playlist) => {
            const i = new Playlist({id: playlist.id, ...playlist.attributes})
            i.addToDom()
        })
    }


}