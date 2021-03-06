class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all.includes(:creator, :category)
    render :index
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def create
    @project = Project.new(project_params)
    @project.creator_id = current_user.id

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def edit
    render :edit
  end

  def update
    @project = current_user.project_proposals.find(params[:id])

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    project = current_user.project_proposals.find(params[:id])
    project.destroy
  end

  private
  def project_params
    params.require(:project).permit(:title, :creator_id, :location, :description, :image, :funding_goal, :end_date, :category_id)
  end
end
