import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import StarRatings from 'react-star-ratings';
import AutosizeInput from 'react-input-autosize';
import { createReview } from './product_slice';


function ReviewForm(props) {

    const dispatch = useDispatch();

    const [form, setState] = useState({
        body: '',
        authorId: props.authorId,
        productId: props.productId,
        star: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createReview(form))
    }

    function update(field) {
       return e => setState({...form, [field]: e.currentTarget.value})
    }

    function clearBody() {
        setState({...form, body: '', star: ''})
    }


    return (
        <div className="review-form" >

            <form onSubmit={handleSubmit} className="rf">
                    <label htmlFor="star">Product Rating *</label>
                    <input
                        type="text"
                        value={form.star}
                        onChange={update('star')}
                        id="star"
                            
                        />
                    <label htmlFor="body">Review *</label>
                    <input
                        type="text"
                        value={form.body}
                        onChange={update('body')}
                        id="body"

                        />
                <button type='submit' className="post-review">Post review</button>
            </form>
            
        </div>
    )
}

export default ReviewForm;