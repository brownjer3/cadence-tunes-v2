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
                const p = new Playlist({id: playlist.id, ...playlist.attributes})
                p.addToDom()
            })
        })
    }

    save() {
        const playlist = {
            name: Playlist.playlistName.innerText,
            user_id: 3
            // desc: tbd,
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
            // debugger
            const p = new Playlist({id: playlist.data.id, ...playlist.data.attributes})
            p.addToDom()
        })
    }
}