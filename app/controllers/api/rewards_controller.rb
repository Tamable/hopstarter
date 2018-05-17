class Api::RewardsController < ApplicationController
  def index
    @rewards = Reward.all
  end

  def show
    render :show
  end

  def create
    @reward = Reward.new(reward_params)

    if @reward.save
      render :show
    else
      render json:
      @reward.errors.full_messages, status: 422
    end
  end

  def edit
    render :edit
  end

  def update
    @reward = Reward.find(params[:id])

    if @reward.update(reward_params)
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def destroy
    reward = Reward.find(params[:id])
    reward.destroy
  end

  def reward_params
    params.require(:reward).permit(:project_id, :pledge_amount, :title, :description, :item_name, :digital_item, :estimated_delivery, :limited_availability, :backer_limit)
  end
end
