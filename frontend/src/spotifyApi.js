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

    getRecs() {
        const data = SpotifyApi.recParams()
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
                    albumPhoto: spotify_data.album.images[0].url,
                    previewUrl: spotify_data.preview_url
                }
                const song = new Song({...rec})
                song.addToDom()
            })

        })
        // ADD A CATCH FOR WHEN THERE ARE NO RECS
    }

    static recParams() {
        const data = {}
        const float = cadence.value
        const cadenceFloat = Number(float + '.01')
        data.cadence = cadenceFloat
        data.genres = Genre.setSeedStr()
        return data
    }

}