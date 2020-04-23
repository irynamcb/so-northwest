class Color < ApplicationRecord
    validates :product_id, :color, precense: true

has_many :sizes,
primary_key: :id,
foreign_key: :color_id,
class_name: :Size

end
