class Product < ApplicationRecord

validates :price, :description, :details, presence: true
end
