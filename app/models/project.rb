class Project < ApplicationRecord
  validates :title, :category, :creator, :description, :funding_goal, :end_date, presence: true

  belongs_to :creator,
    class_name: 'User',
    foreign_key: :creator_id

  belongs_to :category,
    class_name: 'Category',
    foreign_key: :category_id

  has_many :backers,
    class_name: 'User'
end
