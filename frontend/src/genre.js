class Genre {

    // load genre options
    static loadGenres() {
        const genreOptions = document.getElementById('genres')
        for (let i=0; i<20; i++) {
            const input = document.createElement('div')
            input.classList.add("col-2", "p-3")
            input.innerHTML = `<input id='genre-${i}' type="radio" class="btn-check" name="genre" value='genre-${i}'>
                <label class="btn btn-primary" for='genre-${i}'>Genre ${i+1}</label>
            `
            genreOptions.appendChild(input)
        }
    }


}