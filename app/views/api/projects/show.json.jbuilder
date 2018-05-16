json.project do
  json.partial! 'api/projects/project', project: @project
end

json.user do
  json.partial! 'api/users/user', user: @project.creator
end

json.category do
  json.partial! 'api/categories/category', category: @project.category
end

# json.rewards do
#   json.partial! 'api/rewards/reward', reward: @project.rewards
# end
