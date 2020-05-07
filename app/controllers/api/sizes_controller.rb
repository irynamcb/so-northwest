class Api::SizesController < ApplicationController

def index

@sizes = Size.all

if @sizes
  render :index
else
  flash.now[:errors] = ['Nothing found']
  render json: ['Nothing found'], status: :not_found
end  

end


def show
    @size = Size.find_by(id: params[:id])
    
if @size
  render :show
else
  flash.now[:errors] = ['Nothing found :(']
  render json: ['Nothing found :('], status: 422
end
end


private
def size_params
    params.require(:size).permit(:size)
end      
end
