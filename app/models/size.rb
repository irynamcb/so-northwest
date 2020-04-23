class Size < ApplicationRecord
    validates :product_id, :color_id, presence: true
    validates :size, inclusion: { in: %w(XS, S, M, L, XL) }, presence: true
    validates :count, numericality: true

belongs_to :product,
primary_key: :id,
foreign_key: :product_id,
class_name: :Product

belongs_to :color,
primary_key: :id,
foreign_key: :color_id,
class_name: :Color

end
