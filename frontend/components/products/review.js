import React from "react";
import { Link, useHistory } from "react-router-dom";
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
                {/* <h2>{review.star}</h2> */}
                <StarRatings rating={review.star}/>
                <h3>{createdAt}</h3>
                <h4>{review.authorId}</h4>
            </div>
            <p>{review.body}</p>
        </div>
    )
}

export default Review;