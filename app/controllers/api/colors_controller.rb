class Api::ColorsController < ApplicationController

def index

@colors = Color.all

if @colors
  render :index
else
  flash.now[:errors] = ['Nothing found']
  render json: ['Nothing found'], status: :not_found
end  

end


def show
    @color = Color.find_by(id: params[:id])
if @color
  render :show
else
  flash.now[:errors] = ['Nothing found :(']
  render json: ['Nothing found :('], status: 422
end
end

# def create 
#   @color = Color.new(color_params)

#   if @color.save
#     render :show
#   else
#     flash.now[:errors] = @color.errors.full_messages
#     render json: @color.errors.full_messages, status: 422
#   end
# end

# def update
#   @color = Color.find(params[:id])

#   if @color.update(color_params)
#     render :show
#   else
#     render json: @color.errors.full_messages, status: 422
#   end
# end

# def destroy
#   @color = Color.find(params[:id])

#   if @color
#     @color.destroy
#     render :show
#   else
#     flash.now[:errors] = ['Cannot find a color']
#     render json: ['Cannot find a color'], status: 422
#   end

# end

private
def color_params
    params.require(:color).permit(:color, :count)
end      

end
