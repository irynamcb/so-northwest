class RemoveSizeIdAndColorIdFromSkus < ActiveRecord::Migration[5.2]
  def change
    remove_column :skus, :size_id
    remove_column :skus, :color_id
  end
end
