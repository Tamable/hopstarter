class Api::PledgesController < ApplicationController
  def create
    @pledge = Pledge.new(pledge_params)
    @pledge.project_id = params[:project_id]
    @pledge.supporter_id = current_user.id

    if @pledge.save
      render 'api/projects/show'
    else
      render json: @pledge.errors.full_messages
  end

  def edit
    render :edit
  end

  def update
    @pledge = current_user.pledges.find(params[:id])

    if @pledge.update(pledge_params)
      render 'api/projects/show'
    else
      render json: @pledge.errors.full_messages
    end
  end

  def delete
    pledge = current_user.pledges.find(params[:id])
    pledge.destroy
    render 'api/projects/show'
  end

  def pledge_params
    params.require(:pledge).permit(:amount, :reward_id)
  end
end
