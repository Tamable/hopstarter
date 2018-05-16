class RedoRewardsTableColumns < ActiveRecord::Migration[5.1]
  def change
    remove_column :rewards, :project_id
    remove_column :rewards, :pledge_amount
    remove_column :rewards, :title
    remove_column :rewards, :description
    remove_column :rewards, :item_name
    add_column :rewards, :project_id, :integer
    add_column :rewards, :pledge_amount, :integer
    add_column :rewards, :title, :string
    add_column :rewards, :description, :text
    add_column :rewards, :item_name, :string
  end
end
