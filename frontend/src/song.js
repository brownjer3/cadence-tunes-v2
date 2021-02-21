class Song {

    static all = []
    static inProgress = []
    static recList = document.getElementById('recList')
    
    constructor(data) {
        this.name = data.name
        this.spotifyId = data.spotifyId
        this.artist = data.artist
        this.album = data.album
        this.length = data.length
        this.albumPhoto = data.albumPhoto
        this.playlistId = data.playlistId
        this.previewUrl = data.previewUrl

        this.li = document.createElement('li')
        this.li.classList.add('p-2')
        this.li.id = this.spotifyId

        Song.all.push(this)
    }


    render() {
        this.li.innerHTML = `
            <div class='row align-items-center'>
                <div class='col-2'>
                    <img src=${this.albumPhoto} class='rounded w-100 h-auto'>
                </div>
                <div class='col-9' id='extra-${this.spotifyId}'>
                    <span class='me-3'><strong class='lead'>${this.name}</strong> by ${this.artist}</span>
                    <i id='details' class="fas fa-info-circle me-2"></i>
                    <i id='add' class="fas fa-plus"></i>
                </div>
            </div>
        `
        this.li.addEventListener('click', this.handleClick)
        return this.li
    }

    addToDom() {
        Song.recList.appendChild(this.render())
    }

    handleClick = (e) => {
        const song = Song.all.find(song => song.spotifyId === e.currentTarget.id)
        if (e.target.id === "add") {
            if (Song.inProgress.length === 0) {
                Playlist.createPlaylistName()
            }
            Song.inProgress.push(song)
            song.addToWIP()
        } else if (e.target.id === "details") {
            song.toggleSongDetails()
        } else if (e.target.id === "remove") {
            const i = Song.inProgress.indexOf(this)
            Song.inProgress.splice(i, 1)
            Song.recList.appendChild(this.render())
        }
    }

    addToWIP = () => {
        const li = this.render()
        li.getElementsByTagName("I")[1].classList.replace('fa-plus', 'fa-minus-circle')
        li.getElementsByTagName("I")[1].id = "remove"
        li.getElementsByTagName("I")[0].remove()
        Playlist.wipUl.appendChild(li)
    }

    toggleSongDetails = () => {
        const activeDetails = document.getElementsByClassName('songDetails')
        if (activeDetails.length === 0) {
            this.displaySongDetails()
        } else {
            if (activeDetails[0].id === `details-${this.spotifyId}`) {
                activeDetails[0].remove()
            } else {
                activeDetails[0].remove()
                this.displaySongDetails()
            }
        }
    }

    displaySongDetails = () => {
        const songDetails = document.createElement('div')
        songDetails.id = `details-${this.spotifyId}`
        songDetails.classList.add('songDetails')
        songDetails.innerHTML = `
                <div>Album: ${this.album}</div>
                <div>Length: ${this.length}</div>
        `
        songDetails.appendChild(this.includePreview())
        document.getElementById(`extra-${this.spotifyId}`).appendChild(songDetails)
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
        const secs = ((ms % 60000) / 1000).toFixed(0)
        return mins + ":" + (secs < 10 ? '0' : '') + secs;
      }

}