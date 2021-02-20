class SongApi { 

    constructor(port) {
        this.baseUrl = `${port}/songs`
    }

    static saveSongs() {
        Song.inProgress.forEach((s) => {
            songApi.save(s)
        })
        Song.inProgress = []
    }

    save(s) {
        const song = {
            name: s.name,
            spotify_id: s.spotifyId,
            artist: s.artist,
            album: s.album,
            length: s.length,
            // albumPhoto: s.album.images[0].url,
            preview_url: s.previewUrl,
            playlist_id: Playlist.all[Playlist.all.length - 1].id
        }
        const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }, 
            body: JSON.stringify(song)
        }
        fetch(this.baseUrl, configObj)
        //theres a bug somewhere in here - can't save songs properly
        .then(r => r.json())
        .then((song) => {
            const p = Playlist.all[Playlist.all.length - 1]
            p.songs.push(song)
        })
    }
}
