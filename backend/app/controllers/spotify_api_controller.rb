class SpotifyApiController < ApplicationController
    require 'rspotify'

    def authenticate
        # this authenticate action (and future refresh action) might need to be a before_action
        RSpotify.authenticate(ENV["SPOTIFY_CLIENT_ID"], ENV["SPOTIFY_CLIENT_SECRET"])
        genres = RSpotify::Recommendations.available_genre_seeds
        render json: genres


        # SAVING THIS JUST IN CASE I WANT TO GRAB ICONS
        # genres = Genre.popular.collect{|g| g.gsub(/-/,"_")}
        # categories = RSpotify::Category.list
        # matches = categories.filter {|c| genres.include?(c.id)}
        # byebug
        # full_genres = matches.collect { |m| RSpotify::Category.find(m.id)}
    
        # render json: full_genres
    end

    # def load_genres
        
    #     full_genres = request.params['genres'].collect { |g| RSpotify::Category.find(g)}
    #     byebug
        
    # end

    def recs
        recs = RSpotify::Recommendations.generate(seed_genres: [request.params['genre']], target_tempo: request.params['cadence'])
        render json: recs.tracks
    end

    private
    def params
        # DO NOT RUN SERVER UNTIL THIS CHANGES!!!
        # params.permit(:genre, :cadence)
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