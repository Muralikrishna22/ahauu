import React, { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import '../../assets/css/layout/Header.css'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { PiHandCoinsFill } from 'react-icons/pi'

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        setIsMobile(/mobile|android|iphone|ipad|iemobile/i.test(userAgent));
    }, []);

    const searchInput = () => {
        const [searchTerm, setSearchTerm] = useState('');

        return (
            <div className="search-input">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <BiSearchAlt className="search-icon" />
            </div>
        );
    }

    return (
        <header className="header-container">
            <div className="logo">
                <span className="logo-text">Sayumm!</span>
            </div>
            {!isMobile && searchInput()}


            <div className="header-right-block">
                <div className="profile">
                    <img className="profile-picture" src="https://lh3.googleusercontent.com/ogw/AOLn63Hf13KWjo9IJr_xTBgKhzKby9xcaPFAbF-SAxU=s32-c-mo" alt="Profile Picture" />
                </div>
                <div className="round-icon">
                    <PiHandCoinsFill />
                </div>
                <div className="round-icon">
                    <BsFillCartCheckFill />
                </div>
            </div>

            {isMobile && searchInput()}

        </header>

    );
};

export default Header;
