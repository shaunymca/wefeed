class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, :class_name => "User"
  has_many :posts, :foreign_key => "user_id", :primary_key => "friend_id"
  has_many :reposts, :foreign_key => "user_id", :primary_key => "friend_id"
  has_many :comments, :foreign_key => "user_id", :primary_key => "friend_id"
end
