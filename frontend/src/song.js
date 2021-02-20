class Song {

    static all = []
    static inProgress = []
    static recList = document.getElementById('recList')
    static form = document.getElementById('form')

    constructor(data) {
        this.name = data.name
        this.spotifyId = data.id
        this.artist = data.artists[0].name
        this.album = data.album.name
        this.length = Song.milisecondsToMinutes(data.duration_ms)
        this.albumPhoto = data.album.images[0].url
        this.previewUrl = data.preview_url

        this.div = document.createElement('div')
        // this.li = document.createElement('li')
        // this.input.classList.add("col-2", "p-3")

        Song.all.push(this)
    }

    render() {
        this.div.innerHTML = `
            <li id='${this.spotifyId}'>
                <span>${this.name}</span> by <span>${this.artist}</span>
                <i id='details' class="fas fa-info-circle"></i>
                <i id='add' class="fas fa-plus"></i>
            </li>
        `
        this.div.addEventListener('click', this.handleClick)
        return this.div
    }

    addToDom() {
        Song.form.style.display = "none"
        Song.recList.appendChild(this.render())
    }

    handleClick = (e) => {
        const song = Song.all.find(song => song.spotifyId === e.target.parentElement.id)
        if (e.target.id === "add") {
            if (Playlist.wipUl.childElementCount === 0) {
                // this might be where i need to ask for spotify access to export playlist
                const playlistName = prompt("Give your playlist a name:")
                document.getElementById('playlistName').innerText = playlistName
                wipTools.style.display = 'inline'
            }
            Song.inProgress.push(song)
            song.addToWIP()
        } else if (e.target.id === "details") {
            song.toggleSongDetails()
        }
    }

    addToWIP = () => {
        Playlist.wipUl.appendChild(this.render())
    }

    toggleSongDetails = () => {
        const activeDetails = document.getElementsByClassName('songDetails')
        if (activeDetails.length === 0) {
            this.displaySongDetails()
        } else {
            // debugger
            if (activeDetails[0].id === `details-${this.spotifyId}`) {
                activeDetails[0].remove()
            } else {
                activeDetails[0].remove()
                this.displaySongDetails()
            }
        }
    }

    displaySongDetails = () => {
        // artist, length, preview, image?
        const songDetails = document.createElement('div')
        songDetails.id = `details-${this.spotifyId}`
        songDetails.classList.add('songDetails')
        songDetails.innerHTML = `
                <div>Artist: ${this.artist}</div>
                <div>Album: ${this.album}</div>
                <div>Length: ${this.length}</div>
        `
        songDetails.appendChild(this.includePreview())
        this.div.appendChild(songDetails)
        
    }

    includePreview = () => {
        if (this.previewUrl !== null) {
            const audio = document.createElement('audio')
            audio.src = this.previewUrl
            audio.controls = true
            audio.autoplay = true
            return audio
        } else {
            return document.createElement('div')
        }
    }

    static milisecondsToMinutes(ms) {
        const mins = Math.floor(ms / 60000)
        const secs = Math.floor((ms / 1000) % 60)
        return `${mins}:${secs}`
      }

}