class Tag < ApplicationRecord
    validates :tag, precense: true

    has_and_belongs_to_many :products
end
