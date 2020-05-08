import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchProduct, productsSelector } from './product_slice';
import { useParams, useHistory} from 'react-router-dom';
import Review from './review';
import ReviewForm from './review_form';
import StarRatings from 'react-star-ratings';
import {addToCart} from '../cart/cart_slice';
import Counter from '../counter/counter';
import {openModal} from '../modal/modal_slice';


    function Product() {

    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [count, setCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState(false);
    const [selectedColor, setSelectedColor] = useState(false);
    const [hasError, setHasError] = useState(false);
    const showReviewForm = () => setShowForm(showForm => !showForm);

    let {productId} = useParams();
    productId = Number(productId);
    let history = useHistory();

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch]);


    const {product, sizes, colors, reviews, userId, skus} = useSelector(state => {

        let product = state.entities.products.products[productId]
        return {
            product: product,
            sizes: state.entities.products.sizes,
            colors: state.entities.products.colors,
            reviews: state.entities.products.reviews,
            skus: state.entities.products.skus,
            userId: state.session.id
    }});

    if (product === undefined) {
        return (<div></div>)
    }

    let colorNames = new Set();
    let sizeNames = new Set();

    product.skus.map(skuId => {
        if (skus[skuId] !== undefined) {
            colorNames.add(colors[skus[skuId].colorId].color)
            sizeNames.add(sizes[skus[skuId].sizeId].size)
        }
    });


    let stars = product.reviews.filter(reviewId => reviews[reviewId] !== undefined).map(reviewId => reviews[reviewId].star);
    let reviewCount = stars.length;
    let starsAvg = (reviewCount === 0) ? 0 : Number((stars.reduce((a, b) => a + b, 0) / reviewCount).toFixed(2));


    function selectColor(color) {
        setSelectedColor(color)
    }

    function selectSize(size) {
        setSelectedSize(size)
    }

    function checkErrors() {
        
        if (selectedColor === false || selectedSize === false) {
            setHasError(true);
            return true;
        }
        setHasError(false);
        return false;
    }

    function makeSku(skuId, count) {

        let item = {
            id: skuId,
            count: count
        }
        return item;

    }

    function handleCart() {
        if (userId !== null) {
            if (!checkErrors()) {
                // selectedSize and selectedColor

                let skuList = Object.values(skus).filter(item => productId === item.productId && selectedSize === sizes[item.sizeId].size)
                let sku = skuList.find(item => selectedColor === colors[item.colorId].color)
// debugger
                if (sku === undefined) {
                    dispatch(openModal('outOfStock'))
                    return
                }

                let item = makeSku(sku.id, count);
                dispatch(addToCart(item))
                dispatch(openModal('addToCart'))
            } 
        } else {
            history.push(`/login`)
        }
    }
// debugger
    return (
        
        <div className="sp">
        <h1 className="check-out">Check out this awesome product:</h1>
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
                Size: {(selectedSize) && selectedSize.toUpperCase()}
                <span className="size">
                {
                    Array.from(sizeNames).map((name, idx) => <button key={idx} onClick={() => selectSize(name)} className={(selectedSize === name) ? `sz selected` : 'sz'} >{name}</button>)
                }
                </span>
                Color: {(selectedColor) && selectedColor.toUpperCase()}
                <span className="color">
                {
                    Array.from(colorNames).map((name, idx) => <button key={idx} onClick={() => selectColor(name)} className={(selectedColor === name) ? `${name} selected` : name}>{name}</button>)
                }
                </span>
                {
                    (hasError) && <div className="error">Please select a size and a color!</div>
                }
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