class Color < ApplicationRecord
    validates :product_id, :color, precense: true
end
