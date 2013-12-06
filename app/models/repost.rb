class Repost < ActiveRecord::Base
  belongs_to :user
  belongs_to :post
  accepts_nested_attributes_for :post
  
  def user_name
    user.name
  end
end
