class Api::TagsController < ApplicationController

def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      flash.now[:errors] = @tag.errors.full_messages
      render json: @tag.errors.full_messages, status: 422
    end
  end
 
  def destroy
    @tag = Tag.find(params[:id])

    if @tag
       @tag.destroy
       render :show
    else
       render json: ["Can not find tag"], status: 422
    end
  end

  private
  def tag_params
    params.require(:tag).permit(:tag)
  end     

end
