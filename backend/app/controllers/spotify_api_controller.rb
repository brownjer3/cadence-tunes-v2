class SpotifyApiController < ApplicationController
    require 'rspotify'

    def authenticate
        # this authenticate action (and future refresh action) might need to be a before_action
        RSpotify.authenticate(ENV['SPOTIFY_CLIENT_ID'], ENV['SPOTIFY_CLIENT_SECRET'])
        seed_genres = RSpotify::Recommendations.available_genre_seeds
        genres = {}
        seed_genres.each do |g|
            id = g.gsub(/-/,"")
            genres[id] = g
        end
        categories = RSpotify::Category.list(limit: 50, country: 'US')
        matches = categories.filter {|c| genres.keys.include?(c.id)}
        render json: matches
    end

    def recs
        genres = request.params['genres'].split(",")
        recs = RSpotify::Recommendations.generate(seed_genres: genres, target_tempo: request.params['cadence'])
        render json: recs.tracks
    end

end