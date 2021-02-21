class RemoveUserFromPlaylists < ActiveRecord::Migration[6.1]
  def change
    remove_column :playlists, :user_id
    add_column :playlists, :total_time, :time
  end
end
