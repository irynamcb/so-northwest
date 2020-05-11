json.products do
  @products.each do |product|
    json.set! product.id do
      json.partial! 'api/products/product', product: product
    end
  end
end

json.cart do
   current_user.items_in_the_cart.each do |item|
        json.set! item.id do
            json.partial! 'api/carts/cart', cart: item
        end
    end
end