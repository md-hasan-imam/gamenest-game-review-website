import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'recharts';
import Banner from '../Banner/Banner';
import useReviews from '../Hooks/useReivews';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews, setreviews] = useReviews([]);

    const selectedReviews = reviews.slice(0, 3);

    return (
        <div>
            <Banner></Banner>
            <h2 className='section-title text-5xl py-7 mt-20 '> Customer <span>Reviews</span> </h2>

            <div className='review-container'>
                {

                    selectedReviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
            <Link to='/reviews'>
                <button className='button p-3 px-10 my-8 text-xl rounded text-bold mb-24'>See All Reviews</button>
            </Link>

        </div>
    );
};

export default Home;