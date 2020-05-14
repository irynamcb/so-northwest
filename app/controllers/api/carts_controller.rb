class Api::CartsController < ApplicationController

def index

    @cart = Cart.where("user_id = ?", current_user.id)

    # test in postman
    # @cart = Cart.where("user_id = ?", 1)

    if @cart
        render :index
    else
        flash.now[:errors] = ['Empty cart']
        render json: ['Empty cart'], status: :not_found
    end  

end

def create

    @cart = Cart.find_by(["user_id = ? and sku_id = ?", current_user.id, cart_params[:sku_id]])

    if !@cart 

        @cart = Cart.new(user_id: current_user.id, sku_id: cart_params[:sku_id], count: cart_params[:count])
    
    else
        @cart.count += cart_params[:count].to_i
    end

    if @cart.save
      render :show
    else
      flash.now[:errors] = @cart.errors.full_messages
      render json: @cart.errors.full_messages, status: 422
    end

end

def update

  @cart = Cart.find(params[:id])

    if @cart.update(cart_params)
      render :show
    else
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
    
    params.require(:cart_item).permit(:sku_id, :count)
    
    # test in postman
    # params.permit(:sku_id, :count)
  end   

end
