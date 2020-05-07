class RemoveColumnsFromCart < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :product_id, :integer
    remove_column :carts, :size_id, :integer
    remove_column :carts, :color_id, :integer

    add_column :carts, :sku_id, :integer
  end
end
