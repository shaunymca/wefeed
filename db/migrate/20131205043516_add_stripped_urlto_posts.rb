class AddStrippedUrltoPosts < ActiveRecord::Migration
  def change
    add_column :posts, :stripped_url, :string
  end
end
