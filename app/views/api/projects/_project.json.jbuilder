json.extract! project, :id, :title, :description, :funding_goal, :end_date, :creator_id
json.image_url asset_path(project.image_url)
