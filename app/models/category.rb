class Category < ApplicationRecord
  validates :name, presence: true

  has_many :projects,
    class_name: 'Project',
    foreign_key: :category_id
end
