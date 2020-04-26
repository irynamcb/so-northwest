
export const createReview = review => (
    $.ajax({
        url: `/api/reviews/`,
        method: 'POST',
        data: { review }
    })
);

export const deleteReview = reviewId => (
    $.ajax({
        url: `/api/comments/${reviewId}`,
        method: 'DELETE'
    })
);