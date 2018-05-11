class ChangeAmountColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :amount_pledged
    add_column :projects, :amount_pledged, :integer, defaut: 0
    remove_column :pledges, :amount
    add_column :pledges, :amount, :integer, default: 0
  end
end
