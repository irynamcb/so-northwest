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