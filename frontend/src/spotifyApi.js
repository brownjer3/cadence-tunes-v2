// this class should...
// fetch genres
// fetch recommendations
// create playlists

class SpotifyApi {

    constructor(port) {
        this.authUrl = `${port}/spotifyAuth`
        this.recsUrl = `${port}/spotifyRecs?`
        this.genreUrl = `${port}/spotifyGenre?`
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

    // SAVING IN CASE I END UP GETTING GENRE ICONS
    // loadGenre() {
    //     fetch(this.genreUrl + new URLSearchParams({genre: this}))
    //     .then(r => r.json())
    //     .then(data => {
    //         const g = new Genre(data)
    //         g.addToDom()
    //     })
    // }

    getRecs() {
        const genre = document.querySelector('input[name="genre"]:checked').value
        const cadence = parseInt(document.getElementById('cadence')).value
        const data = {
            genre: genre,
            cadence: cadence
        }
        fetch(this.recsUrl + new URLSearchParams(data))
        .then((r) => r.json())
        .then(recs => {
            recs.forEach((rec) => {
                // debugger
                const song = new Song({...rec})
                
                song.addToDom()
            })
        })
    }




}