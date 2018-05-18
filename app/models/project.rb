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
    source: :supporter

  has_many :rewards,
    class_name: 'Reward',
    foreign_key: :project_id

  has_attached_file :image, default_url: "hedgehog.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def backer_count
    self.pledges.count
  end
end
