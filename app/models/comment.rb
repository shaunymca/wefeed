class Comment < ActiveRecord::Base
  include PublicActivity::Model
  belongs_to :post
  belongs_to :user
  before_save :markdown_convert
  
  def markdown_convert
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, :autolink => true, :space_after_headers => true, :no_intra_emphasis => true, :footnotes => true)
    self.content = markdown.render(self.content.to_s).to_s
  end
  
end
