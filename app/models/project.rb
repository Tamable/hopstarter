class Project < ApplicationRecord
  validates :title, :category, :creator, :description, :funding_goal, :end_date, presence: true

  belongs_to :creator,
    class_name: 'User',
    foreign_key: :creator_id

  belongs_to :category,
    class_name: 'Category',
    foreign_key: :category_id

  has_many :pledges,
    class_name: 'Pledge',
    foreign_key: :project_id

  has_many :backers,
  through: :pledges,
  source: :supporter_id

  def backer_count
    self.pledges.count
  end

  accepts_nested_attributes_for :category
end
