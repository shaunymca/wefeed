class FriendshipsController < ApplicationController
  def create
    @friendship = current_user.friendships.build(:friend_id => params[:friend_id])
    if @friendship.save
      flash[:notice] = "Added friend."
      redirect_to @user
    else
      flash[:error] = "Unable to add friend."
      redirect_to @user
    end
  end
  
  def destroy
    @friendship = current_user.friendships.find(params[:id])
    @user = @friendship.friend
    @friendship.destroy
    flash[:notice] = "Removed friendship."
    redirect_to @user
  end
end