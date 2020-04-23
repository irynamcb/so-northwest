class Color < ApplicationRecord
    validates :color, precense: true
    validates :count, numericality: true

has_many :sizes,
primary_key: :id,
foreign_key: :color_id,
class_name: :Size

end
