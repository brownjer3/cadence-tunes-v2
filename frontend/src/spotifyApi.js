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
        debugger
        const genres = Genre.active
        cadence.value
        cadenceFloat = Number(cadenceFloat + '.01')
        const data = {
            genre: genres,
            cadence: cadenceFloat
        }
        fetch(this.recsUrl + new URLSearchParams(data))
        .then((r) => r.json())
        .then(recs => {
            recs.forEach((spotify_data) => {
                const rec = {
                    name: spotify_data.name,
                    spotifyId: spotify_data.id,
                    artist: spotify_data.artists[0].name,
                    album: spotify_data.album.name,
                    length: Song.milisecondsToMinutes(spotify_data.duration_ms),
                    // albumPhoto: spotify_data.album.images[0].url,
                    previewUrl: spotify_data.preview_url
                }
                const song = new Song({...rec})
                song.addToDom()
            })

        })
        // ADD A CATCH FOR WHEN THERE ARE NO RECS
    }




}