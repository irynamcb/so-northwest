class Sku < ApplicationRecord

validates :product_id, presence: true
validates :count, presence: true, numericality: true


belongs_to :single_product,
primary_key: :id,
foreign_key: :product_id,
class_name: :Product

belongs_to :single_color,
primary_key: :id,
foreign_key: :color_id,
class_name: :Color

belongs_to :single_size,
primary_key: :id,
foreign_key: :size_id,
class_name: :Size

end
