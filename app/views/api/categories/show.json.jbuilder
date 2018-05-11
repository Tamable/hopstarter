json.category do
  json.partial! 'api/categories/category', category: @category
end

json.projects do
  @category.projects.each do |project|
    json.set! project.id do
      json.partial! 'api/projects/project', project: project
    end
  end
end

json.creators do
  @category.creators.each do |creator|
    json.set! creator.id do
      json.partial! 'api/users/user', user: creator
    end
  end
end
