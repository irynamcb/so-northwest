class Product < ApplicationRecord

validates :price, :description, :details, presence: true

has_many :sizes,
primary_key: :id,
foreign_key: :product_id,
class_name: :Size

has_and_belongs_to_many :tags

end
