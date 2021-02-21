class Playlist < ApplicationRecord
    belongs_to :user
    has_many :songs

    scope :ten_recent, -> { order(created_at: :desc).limit(10) }

    def songs=(array_of_song_attributes)
        # for each song, find or create by spotify id
        playlist_songs = array_of_song_attributes.map do |song_attributes|
            Song.create(
                name: song_attributes['name'], 
                spotify_id: song_attributes['spotifyId'], 
                artist: song_attributes['artist'],
                album: song_attributes['album'],
                length: song_attributes['length'],
                preview_url: song_attributes['previewUrl'], 
                album_photo: song_attributes['albumPhoto'],
                playlist_id: self.id
            )
        end

    end
end
