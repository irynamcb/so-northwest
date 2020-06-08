class Cart < ApplicationRecord

validates :sku_id, :user_id, :count, presence: true

belongs_to :user,
primary_key: :id,
foreign_key: :user_id,
class_name: :User

belongs_to :sku,
primary_key: :id,
foreign_key: :sku_id,
class_name: :Sku


has_one :cart_product,
through: :sku,
source: :single_product

end