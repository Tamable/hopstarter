class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :category_id
      t.integer :creator_id, null: false
      t.text :description, null: false
      t.string :image_url
      t.integer :funding_goal, null: false
      t.integer :amount_pledged
      t.boolean :reward_offered, default: false
      t.date :end_date, null: false
    end

    add_index :projects, :creator_id
  end
end
