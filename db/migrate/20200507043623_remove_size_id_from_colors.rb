class RemoveSizeIdFromColors < ActiveRecord::Migration[5.2]
  def change
    remove_column :colors, :size_id
  end
end
