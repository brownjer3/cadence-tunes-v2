# cadence-tunes-v2
Cadence Tunes v2 is a single page web application to create running playlists based on running cadence (step count). The application connects with spotify to recommend songs based on target cadence and music genres. Cadence Tunes vs is built with vanilla JavaScript for the frontend, and Ruby on Rails for the custom API backend.

# Getting Started
Cadence Tunes v2 is not yet hosted online. To use the application:

1. Fork & clone the repo
2. Register your application on Spotify's Developer Dashboard (https://developer.spotify.com/)
3. Input your Client ID (SPOTIFY_CLIENT_ID) and Client Secret (SPOTIFY_CLIENT_SECRET) into the .env file in the /backend directory. Be sure that the naming matches.
4. CD into /backend to start the rails server (rails s)
5. Run open frontend/index.html

# Collaborating
Pull Requests are welcome on GitHub. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.