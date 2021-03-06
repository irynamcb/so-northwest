class CreateSkus < ActiveRecord::Migration[5.2]
  def change
    create_table :skus do |t|
      t.integer :product_id, null: false
      t.integer :color_id, null: false
      t.integer :size_id, null: false
      t.integer :count, null: false
      t.timestamps
    end
  end
end
