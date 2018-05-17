json.extract! project, :id, :title, :description, :funding_goal, :category_id, :end_date, :creator_id, :backer_count, :created_at, :location, :rewards
json.amount_pledged project.pledges.sum(:amount)

json.image_url asset_path(project.image.url)
