class AddSizeIdToColors < ActiveRecord::Migration[5.2]
  def change
    add_column :colors, :size_id, :integer
  end
end
