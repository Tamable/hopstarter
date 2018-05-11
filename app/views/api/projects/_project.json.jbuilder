json.extract! project, :id, :title, :description, :funding_goal, :amount_pledged, :category_id, :end_date, :creator_id
json.image_url asset_path(project.image_url)

# :backer_count
