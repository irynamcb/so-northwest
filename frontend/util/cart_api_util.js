export const fetchCart = () => (
    $.ajax({
        url: `/api/carts`,
        method: 'GET'
    })
);