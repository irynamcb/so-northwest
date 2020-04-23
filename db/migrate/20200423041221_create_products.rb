class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :price, null: false
      t.text :description, null: false
      t.text :details, null: false
      t.timestamps
    end
  end
end
