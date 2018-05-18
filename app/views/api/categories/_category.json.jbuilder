  json.extract! category, :id, :name
  json.projects category.projects.ids

# json.projects do
#   category.projects.each do |category|
#     json.set! category.id do
#       json.partial! 'api/categories/category.json.jbuilder'
#     end
# end
