json.extract! product, :id, :price, :description, :details

json.tags product.tags.map(&:id)
json.reviews product.reviews.map(&:id)
json.sizes product.sizes.map(&:id)