class Comment < ActiveRecord::Base
  include PublicActivity::Model
  belongs_to :post
  belongs_to :user
  
  def user_name
    self.user.name
  end
  
  def comment_mk
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, :autolink => true, :space_after_headers => true, :no_intra_emphasis => true, :footnotes => true)
    markdown.render(self.content.to_s).html_safe
  end
  
end
