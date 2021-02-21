# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



jerry = User.create(name: "Jerry")

Playlist.create(name: "Slow Jogs", user: jerry)
Playlist.create(name: "Hip Hop Speed Work", user: jerry)
Playlist.create(name: "Interval Training", user: jerry)
Playlist.create(name: "Cool Down Tunes", user: jerry)
Playlist.create(name: "190 BPM", user: jerry)
Playlist.create(name: "180 BPM", user: jerry)
Playlist.create(name: "170 BPM", user: jerry)
Playlist.create(name: "Sprints", user: jerry)
Playlist.create(name: "Jogging to Paul Simon", user: jerry)
Playlist.create(name: "Rock N Roll @ 180 BPM", user: jerry)
Playlist.create(name: "Heavy Metal Intervals", user: jerry)