json.cart do
    @cart.each do |item|
        json.set! item.id do
            json.partial! 'api/carts/cart', cart: item
        end
    end
end


json.skus do
    @cart.each do |item|
        json.set! item.sku_id do
            json.partial! 'api/skus/sku', sku: item.sku
        end
    end
end

json.products do
    @cart.each do |item|
        json.set! item.cart_product.id do
            json.partial! 'api/products/product', product: item.cart_product
        end
    end
end

