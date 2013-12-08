class CommentsController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    @user = current_user
    @comment = @user.comments.create(params[:comment].permit(:post_id, :content))
    redirect_to post_path(@post)
  end
  
  def show
    @comment = Comment.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.json {respond_with_bip(@comment) }
    end
  end
  
  def update
    #@post = Post.find(params[:post_id])
    @comment = Comment.find params[:id]
    
    respond_to do |format|
      if @comment.update_attributes(params[:comment].permit(:content))
        format.json { respond_with_bip(@comment) }
      else
        format.json { respond_with_bip(@comment) }
      end
    end
  end
  
  def destroy
    @comment = Comment.destroy(params[:id])
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to posts_url }
      format.js
    end
  end
  
  def comment_params
    params.require(:comment).permit(:user_id, :post_id, :content, :user_name)
  end
end