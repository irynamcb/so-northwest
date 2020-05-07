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


private
def color_params
    params.require(:color).permit(:color)
end      

end
