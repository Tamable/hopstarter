class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
    render :index
  end

  def show
    @category = Category.find(params[:id])
    render :show
  end

  def create
    @category = Category.new(category_params)
  end

  private
  def category_params
    params.require(:category).permit(:name, :parent_category_id)
  end
end
