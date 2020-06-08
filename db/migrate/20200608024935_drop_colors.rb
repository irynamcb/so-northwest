class DropColors < ActiveRecord::Migration[5.2]
  def change
    drop_table :colors
  end
end
