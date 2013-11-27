Wefeed::Application.routes.draw do
  
  resources :reposts
  
  resources :friendships
  resources :home
  resources :posts
  resources :activities
    
  authenticated :user do
    root :to => "posts#index"
  end
  
  devise_scope :user do
    get "/" => "home#index"
  end
  #match '/auth/:provider/callback' => 'authentications#create'
  resources :authentications
  
  devise_for :users, path_names: {sign_in: "login", sign_out: "sign_out"}, controllers: {omniauth_callbacks: "authentications", registrations: "registrations"}
  resources :users


  
end