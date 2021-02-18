// this class should...
// fetch genres
// fetch recommendations
// create playlist

class SpotifyApi {

    constructor() {
        this.authUrl = `${port}/spotifyAuth`
    }

    getGenres() {
        fetch(this.authUrl)
        .then(r => r.json())
        .then(genres => {
            genres.forEach((genre) => {
                // debugger
                const g = new Genre(genre)
                g.addToDom()
            })
        })
    }



}