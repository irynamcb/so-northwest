class Size < ApplicationRecord
 
validates :size, inclusion: { in: ["XS", "S", "M", "L", "XL"] }, presence: true


has_many :size_skus,
primary_key: :id,
foreign_key: :size_id,
class_name: :Sku

end
