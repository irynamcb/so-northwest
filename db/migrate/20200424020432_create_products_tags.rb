class CreateProductsTags < ActiveRecord::Migration[5.2]
  def change
    create_table :products_tags, id: false do |t|
      t.belongs_to :product 
      t.belongs_to :tag
    end
  end
end
