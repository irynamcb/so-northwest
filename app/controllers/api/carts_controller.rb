class Api::CartsController < ApplicationController

def index

    @cart = Cart.where("user_id = ?", current_user.id)

    if @cart
        render :index
    else
        flash.now[:errors] = ['Empty cart']
        render json: ['Empty cart'], status: :not_found
    end  

end

end
