json.extract! product, :id, :price, :description, :details

if product.photo.attached?
    json.photoUrl url_for(product.photo)
end

json.tags product.tags.map(&:id)
json.reviews product.reviews.map(&:id)
json.sizes product.sizes.map(&:id)