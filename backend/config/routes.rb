Rails.application.routes.draw do
  resources :genres
  resources :users
  resources :playlists

  # Spotify 
  get '/spotifyAuth', to: 'spotify_api#authenticate'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
