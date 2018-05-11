class Pledge < ApplicationRecord
  validates :amount, :supporter, :project, presence: true

  belongs_to :supporter,
    class_name: 'User',
    foreign_key: :supporter_id

  belongs_to :project
end
