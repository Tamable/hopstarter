class RemovePledgeColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :amount_pledged
  end
end
