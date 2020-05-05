class Cart < ApplicationRecord

validates :product_id, :color_id, :size_id, :user_id, :count, presence: true

belongs_to :user,
primary_key: :id,
foreign_key: :user_id,
class_name: :User

belongs_to :single_product,
primary_key: :id,
foreign_key: :product_id,
class_name: :Product

belongs_to :single_size,
primary_key: :id,
foreign_key: :size_id,
class_name: :Size

belongs_to :single_color,
primary_key: :id,
foreign_key: :color_id,
class_name: :Color


end
