class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :songs
  
  # reference github.com/Netflix/fast_json_api 
end
