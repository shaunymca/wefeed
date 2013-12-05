class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :check_for_existing_post, only: [:create]

  # GET /posts
  # GET /posts.json
  def index
    if user_signed_in?
      @posts = Post.from_users_followed_by(current_user).sort_by{ |post| post.last_friend_update(current_user) }.reverse
      @all_posts = Post.all.order("updated_at desc")
    else
      @all_posts = Post.all.order("updated_at desc")
    end
  end
  
  # GET /posts/1
  # GET /posts/1.json
  def show
    @post = Post.find(params[:id])
    @repost = params[:repost]
  end
  
  # GET /posts/new
  def new
    @post = Post.new
  end
  
  # GET /posts/1/edit
  def edit
    @post = Post.find(params[:id])
  end
  
  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params)
    
    respond_to do |format|
      if @post.save
        format.html { redirect_to posts_path, notice: 'Post was successfully created.' }
        format.json { render action: 'show', status: :created, location: @post }
      else
        format.html { render action: 'new' }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end
  
  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end
  
  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url }
      format.json { head :no_content }
    end
  end
  
  private
  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end
  
  # Never trust parameters from the scary internet, only allow the white list through.
  def post_params
    params.require(:post).permit(:user_id, :url, :summary, :title, :last_friend_update, :stripped_url, :check_for_existing_post)
  end
  
  def check_for_existing_post
    stripped_param = params[:post][:url].gsub(/\Ahttp:\/\/www.|\Ahttp:|\/+|\Awww./, "")
    post = Post.where(:stripped_url => stripped_param).first
    if post
      redirect_to post_path(post, :repost => 'yes') and return
    end
  end
end
