class RemoveColorIdFromSizes < ActiveRecord::Migration[5.2]
  def change
    remove_column :sizes, :color_id, :integer
  end
end
