class Project < ApplicationRecord
  validates :title, :creator, :description, :funding_goal, :end_date, presence: true

  belongs_to :creator,
    class_name: 'User',
    foreign_key: :creator_id

  has_many :backers,
    class_name: 'User'
end
