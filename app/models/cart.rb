class Cart < ApplicationRecord

validates :sku_id, :user_id, :count, presence: true

belongs_to :user,
primary_key: :id,
foreign_key: :user_id,
class_name: :User




end