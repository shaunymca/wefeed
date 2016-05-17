class AddPhotoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :photo_location, :string
  end
end
