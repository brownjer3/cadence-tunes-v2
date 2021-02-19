class Song {

    static all = []
    static recList = document.getElementById('recList')
    static form = document.getElementById('form')

    constructor(data) {
        // debugger
        this.name = data.name
        this.spotify_id = data.id
        this.artist = data.artists[0].name
        this.length = data.duration_ms / 60000
        this.photo_url = data.album.images[0].url
        this.preview_url = data.preview_url

        this.div = document.createElement('div')
        // this.li = document.createElement('li')
        // this.input.classList.add("col-2", "p-3")

        Song.all.push(this)
    }

    render() {
        this.div.innerHTML = `
            <li id='${this.spotify_id}'>
                <span>${this.name}</span> by <span>${this.artist}</span>
                <svg id='details' xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <svg id='add' xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
                    <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
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
        const song = Song.all.find(song => song.spotify_id === e.target.parentElement.id)
        if (e.target.id === "add") {
            if (Playlist.inProgress.childElementCount === 0) {
                // this might be where i need to ask for spotify access to export playlist
                const playlistName = prompt("Give your playlist a name:")
                document.getElementById('playlistName').innerText = playlistName
            }
            
            song.addToWIP()
        } else if (e.target.id === "details") {
            debugger
            song.toggleSongDetails()
        }
    }

    addToWIP = () => {
        Playlist.inProgress.appendChild(this.render())
    }

    toggleSongDetails = () => {
        const activeDetails = document.getElementsByClassName('songDetails')
        if (activeDetails.length === 0) {
            this.displaySongDetails()
        } else {
            activeDetails[0].remove()
            this.displaySongDetails()
        }
    }

    displaySongDetails = () => {
        // artist, length, preview, image?
        const songDetails = document.createElement('div')
        songDetails.classList.add('songDetails')
        songDetails.innerHTML = `
                <div>Artist: ${this.artist}</div>
                <div>Album: TBD</div>
                <div>Length: ${this.length}</div>
        `
        songDetails.appendChild(this.includePreview())
        this.div.appendChild(songDetails)
        
    }

    includePreview = () => {
        if (this.preview_url !== null) {
            const audio = document.createElement('audio')
            audio.src = this.preview_url
            audio.controls = true
            audio.autoplay = true
            return audio
        } else {
            return document.createElement('div')
        }
    }

}