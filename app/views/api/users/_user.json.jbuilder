  json.extract! user, :id, :email, :name, :created_at, :location
  json.image_url asset_path(user.image.url)
  json.projectProposalIds user.project_proposals.ids
  json.supportProjectIds user.supporting_projects.ids
  json.pledges user.pledges.ids


# json.projects do
#   user.project_proposals.concat(user.supporting_projects).each do |project|
#     json.set! project.id do
#       json.partial! 'api/projects/project.json.jbuilder'
#     end
#   end
# end
#
# json.pledges do
#   user.pledges.each do |pledge|
#     json.set! pledge.id do
#       json.partial! 'api/pledges/pledge.json.jbuilder'
#     end
#   end
# end
