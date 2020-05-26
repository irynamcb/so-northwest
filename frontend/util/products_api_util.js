import history from './history';


export const fetchAllProducts = () => (
    $.ajax({
        url: `/api/products`,
        method: 'GET'
    })
);

export const fetchSingleProduct = (productId) => (
    $.ajax({
        url: `/api/products/${productId}`,
        method: 'GET',
        error: function(xhr, status, error) {
            // console.log(xhr.status)
            history.replace(history.location.pathname, {errorStatusCode: xhr.status});
    }
    })

);