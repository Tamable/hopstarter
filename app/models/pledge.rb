class Pledge < ApplicationRecord
  validates :amount, :supporter, :project, presence: true
  validates_uniqueness_of :supporter_id, scope: :project_id

  after_save :updateProjectPledge

  belongs_to :supporter,
    class_name: 'User',
    foreign_key: :supporter_id

  belongs_to :project,
    class_name: 'Project',
    foreign_key: :project_id

  def updateProjectPledge
    self.project.amount_pledged += self.amount
    self.project.save
  end
end
