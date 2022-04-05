import React from 'react';
import './Review.css'

const Review = (props) => {

    const { id, name, body, ratings, img } = props.review;

    return (
        <div className='grid review-card'>
            <div className="review-img">
                <img src={img} alt=""/>
            </div>
            <div className="review-details">
                <h2 className='game-title text-2xl font-bold'> {name}</h2>
                <h2 className='my-3'> {body}</h2>
                <h2 className='ratings text-lg'>Ratings: {ratings}</h2>
            </div>
        </div>
    );
};

export default Review;