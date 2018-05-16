class Reward < ApplicationRecord
  validates :project, :pledge_amount, :title, presence: true

  belongs_to :project
end
