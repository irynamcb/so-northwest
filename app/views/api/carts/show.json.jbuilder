json.cart do
  json.set! @cart.id do
    json.partial! 'api/carts/cart', cart: @cart
  end
end