class AddTimeStamps < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :created_at, :datetime, null: false
    add_column :projects, :updated_at, :datetime, null: false
    add_column :pledges, :created_at, :datetime, null: false
    add_column :pledges, :updated_at, :datetime, null: false
  end
end
