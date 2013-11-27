class Repost < ActiveRecord::Base
  belongs_to :reposter, :class_name => "User"
  belongs_to :reposted_post, :class_name => "Post"
end
