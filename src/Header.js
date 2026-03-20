import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import img from './images/IMG_0050.jpeg';

function Header() {
    const navigate = useNavigate();

    function selectHome() {
        navigate('/');
    }

    function selectAbout() {
        navigate('/about_me');
    }

    function selectOOO() {
        navigate('/out_of_office');
    }

    return (
        <div className="header" style={{ backgroundImage: `url(${img})` }}>
            <div className="header-nav">
                <span className="header-nav-item" onClick={selectHome}>cd ..</span>
                <span className="header-nav-item" onClick={selectAbout}>cd about_me/</span>
                <span className="header-nav-item" onClick={selectOOO}>cd out_of_office/</span>
            </div>
        </div>
    );
}

export default Header;