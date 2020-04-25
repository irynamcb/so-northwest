import React from "react";
import { Link, useHistory } from "react-router-dom";


function Review(props) {

    const review = props.review
 
    if (props === undefined) {
        return (<div></div>)
    }

    return (
        <div className="" >
            <h2>{review.star}</h2>
            <h3>{review.authorId}</h3>
            <p>{review.body}</p>
        </div>
    )
}

export default Review;