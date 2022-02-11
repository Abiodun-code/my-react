import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";

function Header(props) {

    const [isMobile, setMobile] = useState(false);

    return (
        <nav className='navbar'>
            <h3 className='logo'>Logo</h3>
            <ul className={isMobile ? 'nav-links-mobile': 'nav-links'}
            onClick={() => setMobile(false)}
            >
                <Link to='/' className = 'home'>
                    <li>Home</li>
                </Link>
                <Link to='/' className = 'about'>
                    <li>About</li>
                </Link>
                <Link to='/' className = 'skill'>
                    <li>Skill</li>
                </Link>
                <Link to='/' className = 'contact'>
                    <li>Contact</li>
                </Link>
                <Link to='/' className = 'signup'>
                    <li>Signup</li>
                </Link>
            </ul>
            <button className='mobile-menu-icon' 
            onClick={() => setMobile(!isMobile)}
            >
                {isMobile ? (<i className='fas fa-times'></i>) : (<i className='fas fa-bars'></i>)}
            </button>
        </nav>
    );
}

export default Header;