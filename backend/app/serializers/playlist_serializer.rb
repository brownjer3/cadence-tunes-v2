class PlaylistSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :user_id
  
  # reference github.com/Netflix/fast_json_api 
end
