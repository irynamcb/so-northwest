Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html





root to: 'static_pages#root'

namespace :api, defaults: {format: :json} do 
  
  resources :users, only: [:create, :edit, :update, :delete, :show] 
  resource :session, only: [:create, :destroy]
  resources :products, only: [:index, :show]
  resources :sizes, only: [:index, :show]
  resources :colors, only: [:index, :show]
  resources :tags, only: [:index, :show, :create, :update, :destroy]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :carts, only: [:index, :create, :destroy, :update]

end

get '*path', to: 'static_pages#root'

end
