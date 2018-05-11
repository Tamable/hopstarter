class RemoveIndexPledge < ActiveRecord::Migration[5.1]
  def change
    remove_index :pledges, :supporter_id
    add_index :pledges, [:supporter_id, :project_id], unique: true
  end
end
