class UsersController < ApplicationController
  before_filter :authenticate_user!

  def index
    @nonfriends = User.all.where.not(id: current_user.friend_ids).where.not(id: current_user.id)
    @users = User.all.where(id: current_user.friend_ids)
    
  end

  def show
    @user = User.find(params[:id])
  end

end
