import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchProduct } from './product_slice';
import {useParams} from 'react-router-dom';
import Review from './review';
import ReviewForm from './review_form';
import StarRatings from 'react-star-ratings';

function Product() {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const showReviewForm = () => setShowForm(showForm => !showForm);

    let {productId} = useParams();

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch]);

    // similar to mapStateToProps
    const {product, sizes, colors, reviews, userId} = useSelector(state => {

        let productIdx = state.entities.products.products.findIndex(product => product.id === Number(productId));
        let product = state.entities.products.products[productIdx]
        return {
            product: product,
            sizes: state.entities.products.sizes,
            colors: state.entities.products.colors,
            reviews: state.entities.products.reviews,
            userId: state.session.id
    }});

    if (product === undefined) {
        return (<div></div>)
    }
//   debugger
    let colorNames = new Set();
    product.sizes.map(sizeId => {
        if (sizes[sizeId] !== undefined)
        sizes[sizeId].colors.map(colorId => colorNames.add(colors[colorId].color))
    });

    let stars = product.reviews.map( reviewId => reviews[reviewId].star );
    let reviewCount = stars.length;
    let starsAvg = Number((stars.reduce((a, b) => a + b, 0) / reviewCount).toFixed(2));
    

    return (
        
        <div className="sp">
        <div className="single-product-details">
            <h1>Check out this awesome product:</h1>
            <div className="spd">
                <h1>{product.description}</h1>
                <StarRatings
                    rating={starsAvg}
                    starRatedColor="#3278ae"
                    starDimension="25px"
                    starSpacing="1px"
                /> {`${starsAvg} | (${reviewCount})`}
                <h2>${product.price}.00</h2>
                Size:
                <span className="size">
                {
                    product.sizes.map(sizeId => {
                    if (sizes[sizeId] !== undefined) {
                        return (
                            <button key={sizeId}>{sizes[sizeId].size}</button>
                        )}})
                }
                </span>
                Color:
                <span className="color">
                {
                    Array.from(colorNames).map((name, idx) => <button key={idx} className={name}>{name}</button>)
                }
                </span>
                {
                    (userId !== null) && <button className="write-review" onClick={showReviewForm}>Write a review</button>
                }
                {
                    (showForm) && <ReviewForm productId={productId} authorId={userId} />
                }

            </div>
        </div>
            Reviews:
            <div className="average-rating">
                <div className="ar">
                    <p>Average Customer Ratings</p>
                    <div className="ard">
                    Overall
                    <StarRatings
                        rating={starsAvg}
                        starRatedColor="#3278ae"
                        starDimension="18px"
                        starSpacing="1px"
                        /> {starsAvg}
                    </div>
                </div>
            </div>
            <div className="reviews">
                {
                    product.reviews.map((reviewId, idx) => <Review review={reviews[reviewId]} key={idx} currentUserId={userId} />)
                }
            </div>
    </div>
    )

}

export default Product;