class PostComment < ActionMailer::Base
  default from: "noreply@wefeed.com"
  
  def post_comment(comment)
    @user = comment.post.user
    @comment = comment
    @commenter = comment.user
    @post = comment.post
    @post_url  = 'http://wefeed.co/posts/'+@post.id.to_s
    @commenter_url  = 'http://wefeed.co/users/'+ @commenter.id.to_s
    mail(to: @user.email, subject: "#{@commenter.name} commented on your wefeed post")
  end
end
