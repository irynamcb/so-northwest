json.extract! user, :id, :first_name, :last_name, :email, :city, :created_at

json.cart_items user.items_in_the_cart.map(&:id).count
