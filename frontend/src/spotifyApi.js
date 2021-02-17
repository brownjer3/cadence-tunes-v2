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
        .then((r) => r.json())
        .then(json => {
            json.genres.forEach((genre) => {
                const i = new Genre(genre)
                i.addToDom()
            })
        })
    }



}