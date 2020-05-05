export const fetchCartItems = () => (
    $.ajax({
        url: `/api/carts`,
        method: 'GET'
    })
);