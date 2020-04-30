import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchProduct } from './product_slice';
import {useParams} from 'react-router-dom';
import Review from './review';
import ReviewForm from './review_form';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import {addToCart} from '../cart/cart_slice';



function Product() {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [count, setCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState(false);
    const [selectedColor, setSelectedColor] = useState(false);
    const showReviewForm = () => setShowForm(showForm => !showForm);

    let {productId} = useParams();

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch]);


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

    let colorNames = new Set();
    product.sizes.map(sizeId => {
        if (sizes[sizeId] !== undefined)
        sizes[sizeId].colors.map(colorId => colorNames.add(colors[colorId].color))
    });

    let stars = product.reviews.filter(reviewId => reviews[reviewId] !== undefined).map(reviewId => reviews[reviewId].star);
    let reviewCount = stars.length;
    let starsAvg = (reviewCount === 0) ? 0 : Number((stars.reduce((a, b) => a + b, 0) / reviewCount).toFixed(2));
    
    function decrement() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    function selectColor(color) {
        setSelectedColor(color)
    }

    function selectSize(size) {
        setSelectedSize(size)
    }

    function makeId(num1, num2, num3) {
        return [num1, num2, num3]
    }

    function sku(productId, selectedSize, selectedColor, count) {
        
        let item = {
            id: makeId(productId, selectedSize, selectedColor),
            productId: productId,
            sizeId: selectedSize,
            color: selectedColor,
            count: count
        }
        return item;
        
    }

    function handleCart() {
        let item = sku(productId, selectedSize, selectedColor, count);  
        dispatch(addToCart(item));
        alert("You have successfully added an item to a cart! All good :)")
    }
// debugger
    return (
        
        <div className="sp">
        <h1>Check out this awesome product:</h1>
        <div className="single-product-details">
            <img src={product.photoUrl} />
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
                Size:
                <span className="size">
                {
                    product.sizes.map(sizeId => {
                    if (sizes[sizeId] !== undefined) {
                        return (
                            <button key={sizeId} onClick={() => selectSize(sizeId)} className={(selectedSize === sizeId) ? `sz selected` : 'sz'} >{sizes[sizeId].size}</button>
                        )}})
                }
                </span>
                Color:
                <span className="color">
                {
                    Array.from(colorNames).map((name, idx) => <button key={idx} onClick={() => selectColor(name)} className={(selectedColor === name) ? `${name} selected` : name}>{name}</button>)
                }
                </span>
                Quantity:
                <div className="quantity">
                    <FontAwesomeIcon icon={faMinusCircle} 
                    color="#c5c5c5"
                    size="lg"
                    cursor="pointer"
                    onClick={decrement}
                    /> 
                    <h1>{count}</h1>
                    <FontAwesomeIcon icon={faPlusCircle} 
                    color="#c5c5c5"
                    size="lg"
                    cursor="pointer"
                    onClick={() => setCount(count + 1)}
                    />
                </div>
                
                <button className="add-to-cart" onClick={handleCart} >Add to cart</button>
                
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