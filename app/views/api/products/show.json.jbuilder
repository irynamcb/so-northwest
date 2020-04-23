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