import React from 'react';
import useReviews from '../Hooks/useReivews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setreviews] =useReviews();



    return (
        <div className='review-container'>
            {
                reviews.map(review => <Review 
                    key={review.id} 
                    review={review}
                    ></Review>)
            }
        </div>
    );
};

export default Reviews;