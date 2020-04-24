export const fetchAllProducts = () => (
    $.ajax({
        url: `/api/products`,
        method: 'GET'
    })
);

export const fetchSingleProduct = (productId) => (
    $.ajax({
        url: `/api/products/${productId}`,
        method: 'GET'
    })
);