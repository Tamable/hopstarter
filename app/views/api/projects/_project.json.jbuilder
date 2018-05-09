json.extract! project, :id, :title, :description, :funding_goal, :amount_pledged, :category_id, :end_date
json.image_url asset_path(project.image_url)
