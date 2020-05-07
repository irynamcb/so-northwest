class Size < ApplicationRecord
    validates :product_id, presence: true
    validates :size, inclusion: { in: ["XS", "S", "M", "L", "XL"] }, presence: true

belongs_to :product,
primary_key: :id,
foreign_key: :product_id,
class_name: :Product

has_many :colors,
primary_key: :id,
foreign_key: :size_id,
class_name: :Color



end
