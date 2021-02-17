class SpotifyApiController < ApplicationController
    require 'rspotify'

    def authenticate
        # render text: "testing"
        RSpotify.authenticate(ENV["SPOTIFY_CLIENT_ID"], ENV["SPOTIFY_CLIENT_SECRET"])
        genres = RSpotify::Recommendations.available_genre_seeds
        render json: genres
    end

end




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