class CreateColors < ActiveRecord::Migration[5.2]
  def change
    create_table :colors do |t|
      t.integer :product_id, null: false
      t.string :color, null: false
      t.timestamps
    end
    add_index :colors, :product_id
  end
end
