class Api::ProductsController < ApplicationController

def index

@products = Product.all.includes(:reviews)
                       .includes(:reviewers)
                       .includes(:product_skus)

if @products
  render :index
else
  flash.now[:errors] = ['Nothing found']
  render json: ['Nothing found'], status: :not_found
end  

end


def show
    @product = Product.includes(:reviews)
                .includes(:reviewers)
                .includes(:product_skus)
                .find_by(id: params[:id])
if @product
  render :show
else
  flash.now[:errors] = ['Nothing found :(']
  render json: ['Nothing found :('], status: 422
end
end

private
def product_params
    params.require(:product).permit(:price, :description, :details)
end

end
