import React from 'react';
import './Review.css'

const Review = (props) => {

    const {name, body, ratings, img, reviewerName, reviewerImg } = props.review;

    return (
        <div className='grid review-card'>
            <div className="review-img">
                <img src={img} alt="" />
            </div>
            <div className="review-details">
                <h2 className='game-title text-2xl font-bold'>Game Name: {name}</h2>
                <img src={reviewerImg} alt="" width='50px' className='rounded-full my-3'/>
                <h2 className='reviewer-name my-2'>Reviewer: <span>{reviewerName}</span>  </h2>
                <h2 className='my-3'> {body}</h2>
                <h2 className='ratings text-lg'>Ratings: {ratings}</h2>
            </div>

        </div>
    );
};

export default Review;