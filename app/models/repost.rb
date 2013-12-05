class Repost < ActiveRecord::Base
  belongs_to :user
  belongs_to :post
  accepts_nested_attributes_for :post
  after_save :update_post
  
end
