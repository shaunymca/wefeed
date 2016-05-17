class HomeController < ApplicationController
  def index
    @users = User.all
    if user_signed_in?
      render  "posts/index"
    else
    end
  end
end
