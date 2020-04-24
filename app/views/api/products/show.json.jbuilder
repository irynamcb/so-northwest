json.products do
  json.set! @product.id do
    json.partial! 'api/products/product', product: @product
  end
end

json.sizes do 
    @producs.sizes.each do |size|
        json.set size.id do
            json.partial! 'api/sizes/size', size: size
        end
    end
end

json.colors do 
    @producs.colors.each do |colors|
        json.set color.id do
            json.partial! 'api/colors/color', color: color
        end
    end
end

json.tags do 
    @producs.tags.each do |tag|
        json.set tag.id do
            json.partial! 'api/tags/tag', tag: tag
        end
    end
end

json.reviews do 
    @producs.reviews.each do |review|
        json.set review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end
end