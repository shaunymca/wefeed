class Post < ActiveRecord::Base
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller.current_user }
  belongs_to :user
  has_many :reposts
  has_many :resposters, :through => :resposts
  default_scope -> { order('created_at DESC') }
  before_create :generate_summary
  
  def generate_summary
    key = ENV["SUMMLY"]
    api = "http://api.smmry.com/&SM_API_KEY=#{key}&SM_LENGTH=5&SM_URL="
    full_url = api + self.url.to_s
    response = Unirest::get full_url
    text = JSON.parse response.raw_body.to_s
    self.summary = text["sm_api_content"]
    self.title = text["sm_api_title"].to_s
  end
end