class FriendshipsController < ApplicationController
  def create
    @friendship = current_user.friendships.build(:friend_id => params[:friend_id])
    @follower = @friendship.user
    @followed = @friendship.friend
    if @friendship.save
      FriendMailer.follow_email(@followed, @follower).deliver
      flash[:notice] = "Added friend."
      return
    else
      flash[:error] = "Unable to add friend."
      return
    end
  end
  
  def destroy
    @friendship = current_user.friendships.find(params[:id])
    @user = @friendship.user
    @friend = @friendship.friend
    @friendship.destroy
    flash[:notice] = "Removed friendship."
    redirect_to @user
  end
end