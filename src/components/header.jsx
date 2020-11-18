import React from 'react';
import logo from '../images/share/logo.svg';
import '../scss/header.scss'
const Header = () => {
    return (<div className="header">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
    </div>);
}

export default Header;