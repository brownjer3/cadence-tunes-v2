class PlaylistsController < ApplicationController
    def index
        playlists = Playlist.all
        render json: PlaylistSerializer.new(playlists)
    end

    def show
        playlist = Playlist.find(id: params[:id])
    end
end
