export const fetchCartItems = () => (
    $.ajax({
        url: `/api/carts`,
        method: 'GET'
    })
);


export const addCartItem = (cartItem) => (
    $.ajax({
        url: `/api/carts`,
        method: 'POST',
        data: { cartItem }
    })
);


export const deleteCartItem = (cartItemId) => (
    $.ajax({
        url: `/api/carts/${cartItemId}`,
        method: 'DELETE'
    })
);

export const updateCartItem = (cartItem) => (
    $.ajax({
        url: `/api/carts/${cartItem.id}`,
        method: 'PATCH',
        data: { cartItem }
    })
);