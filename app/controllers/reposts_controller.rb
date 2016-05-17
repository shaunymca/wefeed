class RepostsController < ApplicationController
  before_action :set_repost, only: [:show, :edit, :update, :destroy]

  # GET /reposts
  # GET /reposts.json
  def index
    @reposts = Repost.all
  end

  # GET /reposts/1
  # GET /reposts/1.json
  def show
    @repost = Repost.find(params[:id])
  end

  # GET /reposts/new
  def new
    @repost = Repost.new
  end

  # GET /reposts/1/edit
  def edit
  end

  # POST /reposts
  # POST /reposts.json
  def create
    @repost = current_user.reposts.build(:post_id => params[:reposted_post_id])
    respond_to do |format|
      if @repost.save
        format.html { redirect_to posts_path, notice: 'Repost was successfully created.' }
        format.json { render action: 'show', status: :created, location: @repost }
      else
        format.html { render action: 'new' }
        format.json { render json: @repost.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /reposts/1
  # PATCH/PUT /reposts/1.json
  def update
    respond_to do |format|
      if @repost.update(repost_params)
        format.html { redirect_to @repost, notice: 'Repost was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @repost.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reposts/1
  # DELETE /reposts/1.json
  def destroy
    @repost.destroy
    respond_to do |format|
      format.html { redirect_to reposts_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_repost
      @repost = Repost.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def repost_params
      params.require(:repost).permit(:post_id, :user_id)
    end
end
