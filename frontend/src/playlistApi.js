// handle all fetch requests for playlists
class PlaylistApi {

    constructor(port) {
        this.baseUrl = `${port}/playlists`
    }

    getPlaylists() {
        fetch(this.baseUrl)
        .then(r => r.json())
        .then(playlists => {
            playlists.data.forEach((playlist) => {
                const i = new Playlist({id: playlist.id, ...playlist.attributes})
                i.addToDom()
            })
        })
    }
}