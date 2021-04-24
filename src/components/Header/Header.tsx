import React from 'react';
import local from './Header.module.scss';
import {DiLinux} from "react-icons/di";

const Header = () => {
    return (
        <header className={local.headerWrap}>
            <a href="#" className={local.headLogo}>
                <DiLinux className={local.logo} size="2em" />
            </a>
            <div className={local.headContent}>Welcome to my SocialNetwork</div>
        </header>
    )
}

export default Header;