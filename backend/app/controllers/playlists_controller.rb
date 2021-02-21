class PlaylistsController < ApplicationController
    def index
        playlists = Playlist.ten_recent
        render json: PlaylistSerializer.new(playlists)
    end

    def show
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
        params.require(:playlist).permit(:name, :total_time, songs: [])
    end 
end
