Rails.application.routes.draw do
  resources :categories
  resources :jobs
  root 'jobs#index'
end