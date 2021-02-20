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
        playlist = Playlist.new(playlist_params)
        if playlist.save
            playlist.songs = params[:songs]
            render json: PlaylistSerializer.new(playlist)
        else
            render json: {error: "Unable to save playlist"}
        end
    end

    private
    def playlist_params 
        params.require(:playlist).permit(:name, :user_id, songs: [])
    end 
end
