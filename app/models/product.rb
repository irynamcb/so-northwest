class Product < ApplicationRecord

validates :price, :description, :details, presence: true

has_one_attached :photo


has_many :reviews,
primary_key: :id,
foreign_key: :product_id,
class_name: :Review

has_many :reviewers,
through: :reviews,
source: :author

has_and_belongs_to_many :tags

has_many :product_skus,
primary_key: :id,
foreign_key: :product_id,
class_name: :Sku

end
