# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Playlist.delete_all
Song.delete_all


p1 = Playlist.create(name: "Slow Jogs")
p2 = Playlist.create(name: "Hip Hop Speed Work")
p3 = Playlist.create(name: "Interval Training")
p4 = Playlist.create(name: "Cool Down Tunes")
p5 = Playlist.create(name: "190 BPM")
p6 = Playlist.create(name: "180 BPM")
p7 = Playlist.create(name: "170 BPM")
p8 = Playlist.create(name: "Sprints")
p9 = Playlist.create(name: "Jogging to Paul Simon")
p10 = Playlist.create(name: "Rock N Roll @ 180 BPM")
p11 = Playlist.create(name: "Heavy Metal Intervals")

s1 = Song.create(name: "Beez In The Trap", spotify_id: "4It00tEYLwpjQtAhqnjCPC", artist: "Nicki Minaj", album: "Pink Friday ... Roman Reloaded (Deluxe)", length: "4:28", album_photo: "https://i.scdn.co/image/ab67616d0000b2734f0aae4e435a794e0e24d115", playlist_id: 1)
s2 = Song.create(album: "Strange Clouds", album_photo: "https://i.scdn.co/image/ab67616d0000b273a191830c8b300bc71c2faac7", artist: "B.o.B", length: "3:48", name: "Ray Bands", preview_url: "https://p.scdn.co/mp3-preview/bf28819c91ba4a83ded9645e5fa3c0716c68f985?cid=7221db812d6948ce8c59618f87bb52ca", spotify_id: "2g6zbVqZvnc1dk6cYUhr5g", playlist_id: 1)
s3 = Song.create(album: "Paper Trail", album_photo: "https://i.scdn.co/image/ab67616d0000b273a3c69b531fd18d1ac3310857", artist: "T.I.", length: "4:10", name: "Whatever You Like", spotify_id: "3tvWMBIblzT5FSjKtIeRR1", playlist_id: 1)
s4 = Song.create(album: "Kinda Don't Care", album_photo: "https://i.scdn.co/image/ab67616d0000b273b68f40b187d6d26914cad8ee", artist: "Justin Moore", length: "4:22", name: "Kinda Don't Care", spotify_id: "5XQv5uep3VmhEuDWeFwRep", playlist_id: 1)
s11 = Song.create(album: "Bang Bang", album_photo: "https://i.scdn.co/image/ab67616d0000b27390ae8b740ee25465d2e46da9", artist: "Jessie J", length: "3:19", name: "Bang Bang", spotify_id: "2VhPOtIQw2UpQmRVevdviU", playlist_id: 1)
s12 = Song.create(album: "The Dollar", album_photo: "https://i.scdn.co/image/ab67616d0000b273c3d1e465b9274e40a9d3e9ff", artist: "Jamey Johnson", length: "4:05", name: "Redneck Side of Me", preview_url: "https://p.scdn.co/mp3-preview/59830401fddcacdb9392c52a87ceeb2fbe48e064?cid=7221db812d6948ce8c59618f87bb52ca", spotify_id: "6l0j6PTbFsGqZWHv0CU53f", playlist_id: 1)
s5 = Song.create(album: "Lungs (Deluxe Edition)", album_photo: "https://i.scdn.co/image/ab67616d0000b2730672b0f8756ae2af86e8a5ce", artist: "Florence + The Machine", length: "4:12", name: "Dog Days Are Over", spotify_id: "1YLJVmuzeM2YSUkCCaTNUB", playlist_id: 2)
s6 = Song.create(name: "Beez In The Trap", spotify_id: "4It00tEYLwpjQtAhqnjCPC1", artist: "Nicki Minaj", album: "Pink Friday ... Roman Reloaded (Deluxe)", length: "4:28", album_photo: "https://i.scdn.co/image/ab67616d0000b2734f0aae4e435a794e0e24d115", playlist_id: 2)
s7 = Song.create(album: "Strange Clouds", album_photo: "https://i.scdn.co/image/ab67616d0000b273a191830c8b300bc71c2faac7", artist: "B.o.B", length: "3:48", name: "Ray Bands", preview_url: "https://p.scdn.co/mp3-preview/bf28819c91ba4a83ded9645e5fa3c0716c68f985?cid=7221db812d6948ce8c59618f87bb52ca", spotify_id: "2g6zbVqZvnc1dk6cYUhr5g1", playlist_id: 2)
s8 = Song.create(album: "Paper Trail", album_photo: "https://i.scdn.co/image/ab67616d0000b273a3c69b531fd18d1ac3310857", artist: "T.I.", length: "4:10", name: "Whatever You Like", spotify_id: "3tvWMBIblzT5FSjKtIeRR11", playlist_id: 2)
s9 = Song.create(album: "Kinda Don't Care", album_photo: "https://i.scdn.co/image/ab67616d0000b273b68f40b187d6d26914cad8ee", artist: "Justin Moore", length: "4:22", name: "Kinda Don't Care", spotify_id: "5XQv5uep3VmhEuDWeFwRep1", playlist_id: 2)
s10 = Song.create(album: "Lungs (Deluxe Edition)", album_photo: "https://i.scdn.co/image/ab67616d0000b2730672b0f8756ae2af86e8a5ce", artist: "Florence + The Machine", length: "4:12", name: "Dog Days Are Over", spotify_id: "1YLJVmuzeM2YSUkCCaTNUB1", playlist_id: 2)

