json.projects do
  @projects.each do |project|
    json.set! project.id do
      json.extract! 'api/projects/project', project: project
    end
  end
end

json.users do
  @projects.each do |project|
    json.set! project.creator_id do
      json.partial! 'api/users/user', user: creator
  end
end
