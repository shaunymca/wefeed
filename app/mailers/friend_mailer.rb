class FriendMailer < ActionMailer::Base
  default from: "noreply@wefeed.com"
  
  def follow_email(followed, follower)
    @user = followed
    @follower = follower
    @user_url  = 'http://wefeed.co/users/'+@user.id.to_s
    @follwer_url  = 'http://wefeed.co/users/'+ @follower.id.to_s
    mail(to: @user.email, subject: "#{@follower.name} Followed you on WeFeed")
  end
end
