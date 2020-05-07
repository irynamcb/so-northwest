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

json.colors do
    @cart.each do |item|
        json.set! item.cart_color.id do
            json.partial! 'api/colors/color', color: item.cart_color
        end
    end
end

json.sizes do
    @cart.each do |item|
        json.set! item.cart_size.id do
            json.partial! 'api/sizes/size', size: item.cart_size
        end
    end
end