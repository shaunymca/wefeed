class Repost < ActiveRecord::Base
  belongs_to :user
  belongs_to :reposted_post, :class_name => "Post"
end
