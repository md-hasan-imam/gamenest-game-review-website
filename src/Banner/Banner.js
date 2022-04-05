import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='container banner-container mx-auto text-left rounded-lg'>
            <div className='banner-text p-16 rounded-l-lg'>
                <h2 className='text-6xl text-white py-5 font-bold'>FIND OUT YOUR NEXT GAME WITH <br></br> <span>GAMENEST</span></h2>
                <p className='banner-paragraph text-2xl p-2'>GameNest is here for helping you to find out your next video game. Don't wait just explore others' openion about your next game.</p>

                <Link to='/reviews'>
                    <button className='banner-button p-4 px-10 my-8 text-xl rounded text-bold'>Explore More</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;