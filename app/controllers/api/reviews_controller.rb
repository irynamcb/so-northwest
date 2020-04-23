class Api::ReviewsController < ApplicationController

    def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      flash.now[:errors] = @review.errors.full_messages
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review
       @review.destroy
       render :show
    else
      flash.now[:errors] = ['Cant find this review']
      render json: ['Cant find this review'], status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:body, :author_id, :product_id, :star)
  end 
end
