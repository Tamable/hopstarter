Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [:index, :show]
    resources :projects do
      resources :pledges, only: [:create]
    end
    resources :pledges, only: [:update, :delete]
  end
end
