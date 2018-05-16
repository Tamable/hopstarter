  @rewards.each do |reward|
    json.set! reward.id do
      json.partial! '/api/rewards/reward', reward: reward
    end
  end
#
# json.projects do
#   @rewards.map(&:project).each do |project|
#     json.set! project.id do
#       json.partial! 'api/projects/project', project: project
#     end
#   end
# end
