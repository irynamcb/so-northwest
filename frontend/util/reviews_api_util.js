
export const createSingleReview = review => (
    $.ajax({
        url: `/api/reviews/`,
        method: 'POST',
        data: { review }
    })
);

export const deleteSingleReview = reviewId => (
    $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: 'DELETE'
    })
);