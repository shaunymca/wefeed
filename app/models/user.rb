class User < ActiveRecord::Base
  rolify
  has_many :authentications
  has_many :posts
  has_many :friendships, dependent: :destroy
  has_many :friends, :through => :friendships
  has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id", dependent: :destroy
  has_many :inverse_friends, :through => :inverse_friendships, :source => :user
  has_many :reposts
  has_many :reposted_posts, :through => :reposts, :source => :post
  has_many :friend_posts, :through => :friendships, :source => :posts
  has_many :friend_reposts, :through => :friendships, :source => :reposts
  
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :omniauthable,
  :recoverable, :rememberable, :trackable, :validatable
  
  before_create :fake_photo
  
  def apply_omniauth(omni)
    authentications.build(:provider => omni['provider'], 
      :uid => omni['uid'], 
      :token => omni['credentials'].token, 
      :token_secret => omni['credentials'].secret)
  end
  
  def password_required?
    (authentications.empty? || !password.blank?) && super #&& provider.blank?
  end
  
  def update_with_password(params, *options)
    if encrypted_password.blank?
      update_attributes(params, *options)
    else
      super
    end
  end
  def user_picture(omniauth)
    self.picture = omniauth['info']['image'] 
  end
  
  def fake_photo
    if self.photo_location.nil?
      number = ([*475..525]).sample
      self.photo_location = "http://www.placecage.com/500/#{number}"
    end
  end
  
  def update_role(role)
    self.role_ids = []
    self.add_role(role.name)
  end
  
end
