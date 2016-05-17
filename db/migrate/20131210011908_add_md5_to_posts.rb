class AddMd5ToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :summary_md5, :string
  end
end
