json.cart do
    @cart.each do |item|
        json.set! item.id do
            json.partial! 'api/carts/cart', cart: item
        end
    end
end

# json.products do    
#     @cart.each do |item|
#         json.set! item.product_id do
#             json.partial! 'api/products/product', product: item.single_product
#         end
#     end
# end

# json.sizes do    
#     @cart.each do |item|
#         json.set! item.size_id do
#             json.partial! 'api/sizes/size', size: item.single_size
#         end
#     end
# end

# json.colors do    
#     @cart.each do |item|
#         json.set! item.color_id do
#             json.partial! 'api/colors/color', color: item.single_color
#         end
#     end
# end