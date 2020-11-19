import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/share/logo.svg';
import '../scss/header.scss'
const Header = () => {
    return (<div className="header">
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
        </div>
    </div>);
}

export default Header;