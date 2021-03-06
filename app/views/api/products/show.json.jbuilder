json.products do
  json.set! @product.id do
    json.partial! 'api/products/product', product: @product
  end
end

json.tags do 
    @product.tags.each do |tag|
        json.set! tag.id do
            json.partial! 'api/tags/tag', tag: tag
        end
    end
end

json.reviews do 
    @product.reviews.each do |review|
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end
end

json.skus do
    @product.product_skus.each do |sku|
         json.set! sku.id do
            json.partial! 'api/skus/sku', sku: sku
        end
    end
end


