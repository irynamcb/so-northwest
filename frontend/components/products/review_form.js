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

            <form onSubmit={handleSubmit} className="">

                    <div className="">
                    <input
                        type="text"
                        placeholder="Click to rate *"
                        value={form.star}
                        autoFocus={true}
                        onChange={update('star')}
                            
                        />
                    <input
                        type="text"
                        placeholder="Review *"
                        value={form.body}
                        autoFocus={true}
                        onChange={update('body')}

                        />
                </div>
                <button type='submit' className="">Post review</button>
            </form>
            
        </div>
    )
}

export default ReviewForm;