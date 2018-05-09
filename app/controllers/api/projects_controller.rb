class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all.includes(:creator, :category)
    render :index
  end

  def show
    @project = Project.find(params[:id])
    render json: @project
  end

  def create
    @project = Project.new(project_params)
    @project.creator_id = current_user.id

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages
    end
  end

  def edit
    render :edit
  end

  def update
    @project = current_user.projects.find(params[:id])

    if @project.update
      render :show
    else
      render json: @project.errors.full_messages
    end
  end

  def delete
    project = current_user.projects.find(params[:id])
    project.destroy
    render :index
  end

  private
  def project_params
    params.require(:project).permit(:title, :category, :description, :image_url, :funding_goal, :reward_offered, :end_date)
  end
end
