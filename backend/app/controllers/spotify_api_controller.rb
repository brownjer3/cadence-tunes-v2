class SpotifyApiController < ApplicationController

    def authenticate

    end

end


# this.apiTokenUrl = "https://accounts.spotify.com/api/token"
# this.genreUrl = "https://api.spotify.com/v1/recommendations/available-genre-seeds"

# // const encoded = btoa(`${ENV["SPOTIFY_CLIENT_ID"]}:${ENV["SPOTIFY_CLIENT_SECRET"]}`)
# const encoded = "NzIyMWRiODEyZDY5NDhjZThjNTk2MThmODdiYjUyY2E6MDg4YjkxODk2OTYyNDRmZDg2YTIwODU2YzQ5MTk5YmQ="

# fetch(this.apiTokenUrl, {
#     method: "POST",
#     headers: {
#         Authorization: `Basic ${encoded}`
#     }, 
#     body: {
#         content_type: "application/x-www-form-urlencoded",
#         grant_type: "client_credentials"
#     }
# })
# .then(r => r.json())
# .then(json => console.log(json)) 