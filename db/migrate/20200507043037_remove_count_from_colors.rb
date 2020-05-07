class RemoveCountFromColors < ActiveRecord::Migration[5.2]
  def change
    remove_column :colors, :count
  end
end