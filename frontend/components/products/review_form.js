import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { createReview } from './product_slice';


function ReviewForm(props) {

    const dispatch = useDispatch();

    const [form, setState] = useState({
        body: '',
        authorId: props.authorId,
        productId: props.productId,
        star: 0
    });

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createReview(form))
    }

    function update(field) {
       return e => setState({...form, [field]: e.currentTarget.value})
    }

    function clearBody() {
        setState({...form, body: '', star: 0})
    }

    function changeRating(newRating, name) {
        setState({...form, star: newRating})
    }

    return (
        <div className="review-form" >

            <form onSubmit={handleSubmit} className="rf">
                <label htmlFor="star">Product Rating *</label>

                <StarRatings
                    rating={form.star}
                    starRatedColor="darkgreen"
                    changeRating={changeRating}
                    numberOfStars={5}
                    starDimension="25px"
                    starSpacing="1px"
                    starHoverColor="orange"
                    name='star'
                />

                <label htmlFor="body">Review *</label>
                <textarea
                    value={form.body}
                    onChange={update('body')}
                    id="body">
                </textarea>
                <button type='submit' className="post-review">Post review</button>
            </form>
        </div>
    )
}

export default ReviewForm;