import React from "react";
import { Link, useHistory } from "react-router-dom";


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
            <h2>{review.star}</h2>
            <h3>{createdAt}</h3>
            <h4>{review.authorId}</h4>
            <p>{review.body}</p>
        </div>
    )
}

export default Review;