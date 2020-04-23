class CreateSizes < ActiveRecord::Migration[5.2]
  def change
    create_table :sizes do |t|
      t.integer :product_id, null: false
      t.string :size, null: false
      t.integer :count
      t.integer :color_id, null: false
      t.timestamps
    end
    add_index :sizes, :product_id
    add_index :sizes, :color_id
  end
end
