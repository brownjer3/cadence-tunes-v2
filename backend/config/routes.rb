Rails.application.routes.draw do
  resources :genres
  resources :users
  resources :playlists

  # Spotify 
  # need to separate authenticate and getGenres
  get '/spotifyAuth', to: 'spotify_api#authenticate'
  get '/spotifyRecs', to: 'spotify_api#recs'
  get '/spotifyGenre', to: 'spotify_api#load_genres'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
