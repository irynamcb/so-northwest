class Api::SessionsController < ApplicationController

before_action :require_logged_in!, only:[:destroy]

def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ["Invalid username/password combination"], status: 401
    else
      login!(@user)
      render 'api/users/show'
    end
end


def destroy
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end    

end