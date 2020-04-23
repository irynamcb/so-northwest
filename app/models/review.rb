class Review < ApplicationRecord
    validates :author_id, :product_id, :body, precense: true
    validates :star, inclusion: {in: [0, 1, 2, 3, 4, 5]}, precense: true
end
