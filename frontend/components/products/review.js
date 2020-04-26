import React from "react";
import StarRatings from 'react-star-ratings';


function Review(props) {

    const review = props.review
 
    if (review === undefined) {
        return (<div></div>)
    }

    let cdate = new Date(review.createdAt);
    let createdAt = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long"
    }).format(cdate);

    return (
        <div className="review" >
            <div className="review-info">
                <StarRatings rating={review.star}
                starRatedColor="darkblue"
                starDimension="25px"
                starSpacing="1px"
                />
                <h4>{review.author}</h4>
                <h3>{createdAt}</h3>
            </div>
            <p>{review.body}</p>
        </div>
    )
}

export default Review;