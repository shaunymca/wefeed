class UsersController < ApplicationController
  before_filter :authenticate_user!

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @followers = @user.inverse_friendships.all
    @followed = @user.friendships.all
    respond_to do |format|
      format.html
      format.js
    end
  end

end
