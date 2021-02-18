// this class should...
// fetch genres
// fetch recommendations
// create playlists

class SpotifyApi {

    constructor(port) {
        this.authUrl = `${port}/spotifyAuth`
        this.recsUrl = `${port}/spotifyRecs`
    }

    getGenres() {
        fetch(this.authUrl)
        .then(r => r.json())
        .then(genres => {
            genres.forEach((genre) => {
                const g = new Genre(genre)
                g.addToDom()
            })
        })
    }

    getRecs() {
        fetch(this.recsUrl)
        .then((r) => {debugger})
        .then(genres => {
            genres.forEach((genre) => {
                const g = new Genre(genre)
                g.addToDom()
            })
        })
    }


}