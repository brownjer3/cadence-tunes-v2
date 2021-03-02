class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :songs
  
end
