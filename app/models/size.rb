class Size < ApplicationRecord
    validates :product_id, :color_id, presence: true
    validates :size, inclusion: { in: %w(XS, S, M, L, XL) }, presence: true
    validates :count, numericality: true
end
