class CommentsController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    @user = current_user
    @comment = @user.comments.create(params[:comment].permit(:post_id, :content))
    redirect_to post_path(@post)
  end
end