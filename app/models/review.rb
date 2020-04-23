class Review < ApplicationRecord
    validates :author_id, :product_id, :body, precense: true
    validates :star, inclusion: {in: [0, 1, 2, 3, 4, 5]}, precense: true

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product
end
