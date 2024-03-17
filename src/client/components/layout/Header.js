import React, { useEffect, useState } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { PiHandCoinsFill } from 'react-icons/pi';
import '../../assets/css/layout/Header.css';
import logo from '../../assets/images/logo.png';
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';


const Header = () => {
    // const [isMobile, setIsMobile] = useState(true);
    // const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     const userAgent = navigator.userAgent.toLowerCase();
    //     setIsMobile(userAgent?.includes('mobile'));
    // }, []);

    return (
        <header>
            <Container className="header-container">
                <div className="logo">
                    <span className="logo-text">Auhuu</span>
                </div>

                <div className="search_input">
                    <i>
                        <BiSearchAlt className="search-icon" />
                    </i>
                    <input
                        type="text"
                        placeholder="Search..."
                    // value={searchTerm}
                    // onChange={handleSearchChange}
                    />
                </div>

                <div className="header-right-block">
                    <div className='menu-item'> <i> <FaUserCircle /> </i>User</div>
                    <div className='menu-item'> <i> <FaShoppingCart /> </i> Cart</div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
