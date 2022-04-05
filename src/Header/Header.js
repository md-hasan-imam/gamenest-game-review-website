import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

        <div className="header-container flex justify-around py-9  items-center mx-auto">
            <div className='text-5xl' >
                <h2>GameNest</h2>
            </div>
            <div className='navigation-links text-xl '>
                <Link to='/home'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>

    );
};

export default Header;