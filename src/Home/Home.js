import React from 'react';
import Banner from '../Banner/Banner';
import useReviews from '../Hooks/useReivews';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews, setreviews] = useReviews([]);

    return (
        <div>
            <Banner></Banner>

            <h2 className='section-title text-5xl py-7 mt-20 '> Customer <span>Reviews</span> </h2>

            <div className='review-container'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default Home;