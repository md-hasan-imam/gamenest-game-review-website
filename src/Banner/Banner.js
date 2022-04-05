import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='container banner-container mx-auto text-left'>
            <div className='banner-text p-16'>
                <h2 className='text-6xl text-white py-7 font-bold'>FIND OUT YOUR NEXT GAME WITH <br></br> <span>GAMENEST</span></h2>
                <p className='banner-paragraph text-2xl'>GameNest is here for helping you to find out your next video game. Don't wait just explore others' openion about your next game.</p>
                <button className='banner-button p-4 px-10 my-8 text-3xl rounded text-bold'>Explore More</button>
            </div>
        </div>
    );
};

export default Banner;