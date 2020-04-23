class RemoveProductIdFromColors < ActiveRecord::Migration[5.2]
  def change
    remove_column :colors, :product_id, :integer
    remove_column :sizes, :count, :integer
  end
end
