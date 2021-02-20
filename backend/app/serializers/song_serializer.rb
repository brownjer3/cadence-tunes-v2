class SongSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :spotify_id, :artist, :album, :length, :playlist_id, :preview_url
    
  end