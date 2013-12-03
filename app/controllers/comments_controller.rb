class CommentsController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    @user = current_user
    @comment = @user.comments.create(params[:comment].permit(:post_id, :content))
    redirect_to post_path(@post)
  end
  
  def comment_params
    params.require(:comment).permit(:user_id, :post_id, :content, :user_name)
  end
end