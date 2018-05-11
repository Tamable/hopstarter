class AddDefaultToProject < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :amount_pledged
    add_column :projects, :amount_pledged, :integer, default: 0
  end
end
