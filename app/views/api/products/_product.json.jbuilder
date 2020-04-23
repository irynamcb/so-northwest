json.extract! product, :id, :price, :description, :details

json.tags products.tags.map(&:id)
json.reviews products.reviews.map(&:id)