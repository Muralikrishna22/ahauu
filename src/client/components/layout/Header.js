import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput'; // Assuming the SearchInput component is in the same directory
import { BsFillCartCheckFill } from 'react-icons/bs';
import { PiHandCoinsFill } from 'react-icons/pi';
import '../../assets/css/layout/Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    const [isMobile, setIsMobile] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        setIsMobile(userAgent?.includes('mobile'));
    }, []);

    return (
        <header className="header-container">
            <div className="logo">
                <span className="logo-text">Sayumm!</span>
            </div>
            {!isMobile && (
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            )}
    
            <div className="header-right-block">
                <div className="profile">
                    <img className="profile-picture" src={logo} alt="Profile Picture" />
                </div>
                <div className="round-icon">
                    <PiHandCoinsFill />
                </div>
                <div className="round-icon">
                    <BsFillCartCheckFill />
                </div>
            </div>
    
            {isMobile && (
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            )}
        </header>
    );    
};

export default Header;
