class AddCountToColors < ActiveRecord::Migration[5.2]
  def change
    add_column :colors, :count, :integer
  end
end
