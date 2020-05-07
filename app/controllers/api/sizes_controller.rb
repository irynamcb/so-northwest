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

# def create 
#   @size = Size.new(size_params)

#   if @size.save
#     render :show
#   else
#     flash.now[:errors] = @size.errors.full_messages
#     render json: @size.errors.full_messages, status: 422
#   end
# end

# def update
#   @size = Size.find(params[:id])

#   if @size.update(size_params)
#     render :show
#   else
#     render json: @size.errors.full_messages, status: 422
#   end
# end

# def destroy
#   @size = Size.find(params[:id])

#   if @size
#     @size.destroy
#     render :show
#   else
#     flash.now[:errors] = ['Cannot find size']
#     render json: ['Cannot find size'], status: 422
#   end

# end

private
def size_params
    params.require(:size).permit(:size)
end      
end
