class FriendMailer < ActionMailer::Base
  default from: "noreply@wefeed.com"
  
  def follow_email(followed, follower)
    @user = followed
    @follower = follower
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: '#{@follower.name} Followed you on WeFeed')
  end
end
