Wefeed::Application.routes.draw do
  
  resources :reposts
  resources :friendships
  resources :home
  resources :posts do
    resources :comments
  end
  resources :activities
  resources :comments
  
  root :to => "posts#index"
  
  #match '/auth/:provider/callback' => 'authentications#create'
  resources :authentications
  
  devise_for :users, path_names: {sign_in: "login", sign_out: "sign_out"}, controllers: {omniauth_callbacks: "authentications", registrations: "registrations"}
  resources :users
  
  
  
end