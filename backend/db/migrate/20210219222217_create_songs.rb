class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :spotify_id
      t.string :artist
      t.string :album
      t.float :length
      t.integer :playlist_id
      t.string :album_photo
      t.string :preview_url


      t.timestamps
    end
  end
end
