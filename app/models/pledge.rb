class Pledge < ApplicationRecord
  validates :amount, :project, :supporter, presence: true
  validates_uniqueness_of :supporter_id, scope: :project_id

  belongs_to :supporter,
    class_name: 'User',
    foreign_key: :supporter_id

  belongs_to :project,
    class_name: 'Project',
    foreign_key: :project_id
end
