  json.extract! project, :id, :title, :description, :funding_goal, :category_id, :end_date, :creator_id, :created_at, :location
  json.image_url asset_path(project.image.url)
  json.pledges project.pledges.ids
  json.rewards project.rewards.ids
  json.backers project.backers.ids

# json.pledges do
#   project.pledges.each do |pledge|
#     json.set! pledge.id do
#       json.partial! 'api/pledges/pledge.json.jbuilder'
#     end
#   end
# end
#
# json.rewards do
#   project.rewards.each do |reward|
#     json.set! reward.id do
#       json.partial! 'api/rewards/reward.json.jbuilder'
#     end
#   end
# end
#
# json.backers do
#   project.backers.each do |backer|
#     json.set! backer.id do
#       json.partial! 'api/users/user.json.jbuilder'
#     end
#   end
# end
