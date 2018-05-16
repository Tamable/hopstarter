class CreateRewards < ActiveRecord::Migration[5.1]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.integer :pledge_amount, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :item_name, null: false
      t.boolean :digital_item, default: false
      t.date :estimated_delivery
      t.boolean :limited_availability, default: false
      t.integer :backer_limit
      t.timestamps
    end

    add_index :rewards, :project_id
  end
end
