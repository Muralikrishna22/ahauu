import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const SearchInput = ({ searchTerm, setSearchTerm }) => {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="search-input">
            <input
                type="text"
                placeholder="Search..."
                // value={searchTerm}
                // onChange={handleSearchChange}
            />
            <BiSearchAlt className="search-icon" />
        </div>
    );
};

export default SearchInput;
