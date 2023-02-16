import React from 'react'
import './Header.css' 

const Header = ({ headerText, subHeaderText }) => {
    return (
        <div>
            <div className='header-text'>{headerText}</div>
            <div className='sub-header-text'>{subHeaderText}</div>
        </div>
    )
}

export default Header