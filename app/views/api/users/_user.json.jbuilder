# json.user do
  json.extract! user, :id, :email, :name, :project_count, :supporting_projects, :pledges, :created_at
  json.image_url asset_path(user.image.url)
  json.projectProposalIds user.project_proposals.ids
  json.supportProjectIds user.supporting_projects.ids
# end

json.project_proposals do
  json.array! user.project_proposals do |project|
    json.partial! 'api/projects/project.json.jbuilder', project: project
  end
end

# json.projects do
#   user.project_proposals.concat(user.supporting_projects).each do |project|
#     json.set! project.id do
#       json.partial! 'api/projects/project'
#     end
#   end
# end
