import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo.png';

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <img src={Logo} alt="shop LOGO"/>
            </div>
        </header>
    );
};

export default Header;