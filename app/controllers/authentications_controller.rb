class AuthenticationsController < ApplicationController
  def index
    @authentications = Authentication.all
  end
  
  def home
    
  end
  
  def twitter
    #raise omni = request.env["omniauth.auth"].to_yaml
    omni = request.env["omniauth.auth"]
    #raise omni['info'].image
    authentication = Authentication.find_by_provider_and_uid(omni['provider'], omni['uid'])
    
    if authentication
      flash[:notice] = "Logged in Successfully"
      sign_in_and_redirect User.find(authentication.user_id)
    elsif current_user
      token = omni['credentials'].token
      token_secret = omni['credentials'].secret
      current_user.authentications.create!(:provider => omni['provider'], :uid => omni['uid'], :token => token, :token_secret => token_secret)
      flash[:notice] = "Authentication successful."
      sign_in_and_redirect current_user
    else
      user = User.new
      user.photo_location = omni['info'].image.to_s
      user.apply_omniauth(omni)
      
      if user.save
        flash[:notice] = "Logged in."
        sign_in_and_redirect User.find(user.id)
      else
        session[:omniauth] = omni.except('extra')
        session[:omniauth].photo_location = request.env["omniauth.auth"]["info"].image
        session[:omniauth].name = request.env["omniauth.auth"]['info'].name
        redirect_to new_user_registration_path
      end
    end
  end
  
  def facebook
    #raise omni = request.env["omniauth.auth"].to_yaml
    omni = request.env["omniauth.auth"]
    authentication = Authentication.find_by_provider_and_uid(omni['provider'], omni['uid'])
    
    if authentication # already have auth before.
      flash[:notice] = "Logged in Successfully"
      sign_in_and_redirect User.find(authentication.user_id)
    elsif current_user
      token = omni['credentials'].token
      token_secret = ""
      
      current_user.authentications.create!(:provider => omni['provider'], :uid => omni['uid'], :token => token, :token_secret => token_secret)
      
      flash[:notice] = "Authentication successful."
      sign_in_and_redirect current_user
    else
      user = User.find_by_email(omni['extra']['raw_info'].email)
      if user.nil?
        user = User.new
        user.email = omni['extra']['raw_info'].email 
        user.name = omni['extra']['raw_info'].name
        user.photo_location = omni['info'].image
        user.apply_omniauth(omni)
        
        if user.save
          flash[:notice] = "Logged in."
          sign_in_and_redirect User.find(user.id)             
        else
          session[:omniauth] = omni.except('extra')
          redirect_to new_user_registration_path
        end
      else
        token = omni['credentials'].token
        token_secret = ""
        
        user.authentications.create!(:provider => omni['provider'], :uid => omni['uid'], :token => token, :token_secret => token_secret)
        
        flash[:notice] = "Authentication successful."
        sign_in_and_redirect user
      end
    end
  end
  
  def google_oauth2
    #raise omni = request.env["omniauth.auth"].to_yaml
    omni = request.env["omniauth.auth"]
    authentication = Authentication.find_by_provider_and_uid(omni['provider'], omni['uid'])
    
    if authentication # already have auth before.
      flash[:notice] = "Logged in Successfully"
      sign_in_and_redirect User.find(authentication.user_id)
    elsif current_user
      token = omni['credentials'].token
      token_secret = ""
      
      current_user.authentications.create!(:provider => omni['provider'], :uid => omni['uid'], :token => token, :token_secret => token_secret)
      
      flash[:notice] = "Authentication successful."
      sign_in_and_redirect current_user
    else
      user = User.find_by_email(omni['extra']['raw_info'].email)
      if user.nil?
        user = User.new
        user.email = omni['extra']['raw_info'].email 
        user.name = omni['extra']['raw_info'].name
        user.photo_location = omni['info'].image
        user.apply_omniauth(omni)
        
        if user.save
          flash[:notice] = "Logged in."
          sign_in_and_redirect User.find(user.id)             
        else
          session[:omniauth] = omni.except('extra')
          redirect_to new_user_registration_path
        end
      else
        token = omni['credentials'].token
        token_secret = ""
        
        user.authentications.create!(:provider => omni['provider'], :uid => omni['uid'], :token => token, :token_secret => token_secret)
        
        flash[:notice] = "Authentication successful."
        sign_in_and_redirect user
      end
    end
  end
  
  
  def destroy
    @authentication = Authentication.find(params[:id])
    @authentication.destroy
    redirect_to authentications_url, :notice => "Successfully destroyed authentication."
  end
end