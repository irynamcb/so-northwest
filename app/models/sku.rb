class Sku < ApplicationRecord

validates :product_id, presence: true
# validates :count, presence: true, numericality: true
# in this case :count repsesents count of inventory


belongs_to :single_product,
primary_key: :id,
foreign_key: :product_id,
class_name: :Product


has_many :carts,
primary_key: :id,
foreign_key: :sku_id,
class_name: :Cart

end
