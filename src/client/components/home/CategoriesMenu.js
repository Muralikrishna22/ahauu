import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import '../../assets/css/Home/CategoriesMenu.css'
import { FaCarSide } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";

const CategoriesMenu = ({ searchTerm, setSearchTerm }) => {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className='categories_menu'>
            <div className='tab'><i></i> <p> Explore </p></div>
            <div className='tab'><i></i> <p> Accessories </p></div>
            <div className='tab'><i></i> <p> Blogs </p></div>
            <div className='tab'>
                <i><FaCarSide /> </i>
                <p>Cab</p>
            </div>
            <div className='tab'>
                <i><MdVerifiedUser /> </i>
                <div>
                    <p>Travel</p>
                    <span>Insurance</span>
                </div>
            </div>
        </div>
    );
};

export default CategoriesMenu;
