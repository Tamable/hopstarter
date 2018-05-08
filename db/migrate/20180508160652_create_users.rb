class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null: false
      t.string :image_url
      t.string :location
      t.string :website
      t.text :profile_description
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
