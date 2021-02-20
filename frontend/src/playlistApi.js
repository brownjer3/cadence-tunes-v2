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

    save() {
        const playlist = {
            name: Playlist.playlistName.innerText
            // desc: tbd,
            // user_id: tbd,"
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
        .then(json => {debugger})
    }
}