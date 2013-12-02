class Post < ActiveRecord::Base
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller.current_user }
  belongs_to :user
  has_many :reposts
  has_many :comments
  has_many :resposters, :through => :resposts, :source => :user
  before_validation :generate_summary
  before_validation :check_title
  validates_presence_of :summary
  
  def generate_summary
    key = ENV["SUMMLY"]
    api = "http://api.smmry.com/&SM_API_KEY=#{key}&SM_WITH_BREAK&SM_LENGTH=7&SM_URL="
    full_url = api + self.url.to_s
    response = Unirest::get full_url
    text = JSON.parse response.raw_body.to_s
    self.summary = text["sm_api_content"]
    self.title = text["sm_api_title"].to_s
  end
  
  def self.from_users_followed_by(user)
    followed_user_ids = user.friend_ids
    repost_ids = user.reposts.map(&:post_id)
    friend_reposts_ids = user.friend_reposts.map(&:post_id)
    where(['user_id IN (:followed_user_ids) OR user_id = :user_id OR id IN (:repost_ids) OR id IN (:friend_reposts_ids)',
      {followed_user_ids: followed_user_ids, user_id: user, repost_ids: repost_ids, friend_reposts_ids: friend_reposts_ids}])
  end
  
  def check_title
    if self.title.blank?
      self.title = "Non-titled url"
    end
  end
  
end