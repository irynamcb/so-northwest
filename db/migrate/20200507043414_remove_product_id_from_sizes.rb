class RemoveProductIdFromSizes < ActiveRecord::Migration[5.2]
  def change
    remove_column :sizes, :product_id
  end
end