Wefeed::Application.routes.draw do

  resources :reposts

  resources :friendships

  resources :posts
  resources :activities

  #match '/auth/:provider/callback' => 'authentications#create'
  resources :authentications
  
  devise_for :users, path_names: {sign_in: "login", sign_out: "sign_out"}, controllers: {omniauth_callbacks: "authentications", registrations: "registrations"}
  resources :users

  root to: 'authentications#home'
end