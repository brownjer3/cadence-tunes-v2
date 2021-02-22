class PlaylistApi {

    constructor(port) {
        this.baseUrl = `${port}/playlists`
    }

    getPlaylists() {
        fetch(this.baseUrl)
        .then(r => r.json())
        .then(playlists => {
            playlists.data.forEach((playlist) => {
                const p = new Playlist({id: Number(playlist.id), ...playlist.attributes})
                p.li.addEventListener('click', p.toggleSongs)
                Playlist.recentList.appendChild(p.render())
                playlist.attributes.songs.forEach((s) => {
                    new Song({...s})
                })
            })
        })
    }

    save() {
        const playlist = {
            name: Playlist.playlistName.innerText,
            songs: Song.inProgress
        }
        const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }, 
            body: JSON.stringify(playlist)
        }
        fetch(this.baseUrl, configObj)
        .then(r => r.json())
        .then((playlist) => {
            const p = new Playlist({id: Number(playlist.data.id), ...playlist.data.attributes})
            p.addToDom()
        })
    }
}