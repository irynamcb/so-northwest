import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchProduct } from './product_slice';
import { useParams, useHistory } from 'react-router-dom';
import Review from './review';
import ReviewForm from './review_form';
import StarRatings from 'react-star-ratings';
import { add, fetchCart } from '../cart/cart_slice';
import Counter from '../counter/counter';
import { openModal } from '../modal/modal_slice';


    function Product() {

    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [count, setCount] = useState(1);
    const showReviewForm = () => setShowForm(showForm => !showForm);

    let {productId} = useParams();
    productId = Number(productId);
    let history = useHistory();

    useEffect(() => {
        dispatch(fetchProduct(productId));
        dispatch(fetchCart());
    }, [dispatch]);


    const {product, reviews, userId, skus} = useSelector(state => {

        let product = state.entities.products.products[productId]
        return {
            product: product,
            reviews: state.entities.products.reviews,
            skus: state.entities.products.skus,
            userId: state.session.id
    }});

    if (product === undefined) {
        return (<div></div>)
    }

    // product.skus.map(skuId => {
    //     if (skus[skuId] !== undefined) {
    //         colorNames.add(colors[skus[skuId].colorId].color)
    //         sizeNames.add(sizes[skus[skuId].sizeId].size)
    //     }
    // });


    let stars = product.reviews.filter(reviewId => reviews[reviewId] !== undefined).map(reviewId => reviews[reviewId].star);
    let reviewCount = stars.length;
    let starsAvg = (reviewCount === 0) ? 0 : Number((stars.reduce((a, b) => a + b, 0) / reviewCount).toFixed(2));


    function makeSku(skuId, count) {

        let item = {
            skuId: skuId,
            count: count
        }
        return item;

    }

    function handleCart() {
        if (userId !== null) {
           
                // let skuList = Object.values(skus).filter(item => productId === item.productId)
                // let sku = skuList.find(item => selectedColor === colors[item.colorId].color)

                let sku = Object.values(skus).filter(item => productId === item.productId)

                if (sku === undefined) {
                    dispatch(openModal('outOfStock'))
                    return;
                }

                let item = makeSku(sku.id, count);
                dispatch(add(item))
                dispatch(openModal('addToCart'))
            
        } else {
            history.push(`/login`)
        }
    }
// debugger
    return (
        
        <div className="sp">
        <div className="single-product-details">
            {/* <img src={product.photoUrl} /> */}
            <div className="spd">
                <h1>{product.description}</h1>
                <span className="stars-info">
                <StarRatings
                    rating={starsAvg}
                    starRatedColor="#3278ae"
                    starDimension="25px"
                    starSpacing="1px"
                />&nbsp;{`${starsAvg} | (${reviewCount})`}
                </span>
                <h2>${product.price}.00</h2>
                <h2>{product.details}</h2>
                <h2>Please keep in mind that we do not do delivery. Choose a date and a market location where you would like to pick up your order, upon checkout</h2>
                <h2>Category: Savory</h2>
                Quantity

                <Counter val={count} callback={setCount}/>

                <button className="add-to-cart" onClick={handleCart} >Add to Cart - ${(count * product.price).toFixed(2)}</button>
                
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