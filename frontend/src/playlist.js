class Playlist {

    static all = []
    static recentList = document.getElementById('recentList')
    static wipUl = document.getElementById('wipUl')
    static playlistName = document.getElementById('playlistName')

    constructor({id, name, songs}) {
        this.name = name
        this.id = id
        this.songs = songs
        // this.userName = user.name
        // this.songs = songs

        this.li = document.createElement('li')
        this.li.dataset["id"] = id
        // this.li.id = id

        // this.songs = []

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
        // debugger
        Playlist.recentList.appendChild(this.render())
        this.li.addEventListener('click', this.displaySongs)
    }

    // songs() {
    //     return Song.all.filter((s) => s.playlistId === Number(this.id))
    // }

    displaySongs = (e) => {
        const songList = document.createElement('ul')
        const id = Number(e.currentTarget.dataset.id)
        const p = Playlist.all.find((p) => p.id === id)
        p.songs.forEach((song) => {
            const li = document.createElement('li')
            li.innerText = song.name
            songList.appendChild(li)
        })
        e.currentTarget.appendChild(songList)
    }

    renderPlaylists(playlists) {
        const topPlaylists = playlists.data
        topPlaylists.forEach((playlist) => {
            const i = new Playlist({id: playlist.id, ...playlist.attributes})
            i.addToDom()
        })
    }




}