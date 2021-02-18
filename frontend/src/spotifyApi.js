// this class should...
// fetch genres
// fetch recommendations
// create playlists

class SpotifyApi {

    constructor(port) {
        this.authUrl = `${port}/spotifyAuth`
        this.recsUrl = `${port}/spotifyRecs?`
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
        const genre = document.querySelector('input[name="genre"]:checked').value
        const cadence = document.getElementById('cadence').value
        const data = {
            genre: genre,
            cadence: cadence
        }
        // url = this.recsUrl + `` + ``
        // debugger
        fetch(this.recsUrl + new URLSearchParams(data))
        .then((r) => r.json())
        .then(recs => {
            recs.forEach((rec) => {
                console.log(rec['name'])
            })
        })
    }


}