// handle all fetch requests for playlists
class PlaylistApi {

    constructor(port) {
        this.baseUrl = `${port}/playlists`
    }

    //     static wipIds() {
    //     return Song.inProgress.filter((s) => s.spotifyId)
    // }

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
            // need to remove this hard coded user id
            user_id: 3, 
            songs: Song.inProgress, 
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
            const p = new Playlist({id: Number(playlist.data.id), ...playlist.data.attributes})
            p.addToDom()
            p.associate()
            //remove WIP Info here
        })
    }
}