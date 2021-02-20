class SongsController < ApplicationController
    def create
        song = Song.new(song_params)
        if song.save
            render json: {song}
        else
            render json: {error: "Unable to save song"}
        end
    end

    private
    def song_params 
        params.require(:song).permit(:name, :spotify_id, :artist, :album, :length, :playlist_id, :preview_url)
    end 
end
