class Api::CartsController < ApplicationController

def index

    # @cart = Cart.where("user_id = ?", current_user.id)

    # test in postman
    @cart = Cart.where("user_id = ?", 1)

    if @cart
        render :index
    else
        flash.now[:errors] = ['Empty cart']
        render json: ['Empty cart'], status: :not_found
    end  

end

def create

    # sku = Sku.find_by(product_id: params[:id], color_id: params[:color_id], size_id: params[:size_id])

    # @cart = Cart.new(user_id: current_user.id, sku_id: sku.id, count: cart_params[:count])

    # postman test
    @cart = Cart.new(user_id: 1, sku_id: 1, count: cart_params[:count])

    if @cart.save
      render :show
    else
      flash.now[:errors] = @cart.errors.full_messages
      render json: @cart.errors.full_messages, status: 422
    end

end

def destroy

    @cart = Cart.find(params[:id])

    if @cart
       @cart.destroy
       render :show
    else
      flash.now[:errors] = ['Cant find a cart item']
      render json: ['Cant find a cart item'], status: 422
    end

end

private
  def cart_params
    
    # params.require(:cart).permit(:count)
    
    # test in postman
    params.permit(:count)
  end   

end
