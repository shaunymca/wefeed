class CreateReposts < ActiveRecord::Migration
  def change
    create_table :reposts do |t|
      t.integer :post_id
      t.integer :user_id

      t.timestamps
    end
  end
end
