class PlaylistsController < ApplicationController
    def index
        playlists = Playlist.all
        render json: PlaylistSerializer.new(playlists)
    end

    def show
        # byebug
        playlist = Playlist.find(id: params[:id])
    end

    def create
        # byebug
        playlist = Playlist.new(playlist_params)
        if playlist.save
            render json: PlaylistSerializer.new(playlist)
        else
            render json: {error: "Unable to save playlist"}
        end
    end

    private
    def playlist_params 
        params.require(:playlist).permit(:name, :user_id)
    end 
end
