class Color < ApplicationRecord

validates :color, presence: true
    


has_many :color_skus,
primary_key: :id,
foreign_key: :color_id,
class_name: :Sku


end
