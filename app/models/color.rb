class Color < ApplicationRecord
    validates :color, :size_id, presence: true
    validates :count, numericality: true

belongs_to :size,
primary_key: :id,
foreign_key: :size_id,
class_name: :Size

end
