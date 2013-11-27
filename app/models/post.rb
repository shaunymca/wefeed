class Post < ActiveRecord::Base
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller.current_user }
  belongs_to :user
  has_many :reposts
  has_many :resposters, :through => :resposts
  before_create :generate_summary
  
  def generate_summary
    api = "http://clipped.me/algorithm/clippedapi.php?url="
    full_url = api + self.url.to_s
    response = Unirest::get full_url
    text = JSON.parse response.raw_body.to_s
    self.summary = text["summary"][0].to_s
    self.title = text["title"].to_s
  end
end