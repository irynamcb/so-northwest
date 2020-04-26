import React, {useState} from "react";
import StarRatings from 'react-star-ratings';
import AutosizeInput from 'react-input-autosize';
import { createReview } from './product_slice';


function ReviewForm(props) {

    const [form, setState] = useState({
        body: '',
        authorId: props.authorId,
        productId: props.productId,
        star: 0
    });

    function handleSubmit(e) {
        e.preventDefault;
        createReview(form).then(() => clearBody())
    }

    function update(field) {
       return e => setState({[field]: e.currentTarget.value})
    }

    function clearBody() {
        setState({body: ''})
    }


    return (
        <div className="review-form" >

            <form onSubmit={handleSubmit} className="">

                    <div className="">
                    <AutosizeInput
                        type="text"
                        placeholder="Click to rate *"
                        value={form.star}
                        autoFocus={true}
                        onChange={update('star')}
                            
                        />
                    <AutosizeInput
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