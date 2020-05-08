json.users do
    json.set! @user.id do
        json.partial! "api/users/user", user: @user
    end
end 

json.user_cart do
    @user.items_in_the_cart.each do |cart_item|
        json.set! cart_item.id do
            json.partial! "api/carts/cart", cart: cart_item
        end
    end
end