import React from 'react';
import styles from './Header.module.scss';
import {DiLinux} from "react-icons/di";

const Header: React.FC = () => {
    return (
        <header className={styles.headerWrap}>
            <a href="#" className={styles.headLogo}>
                <DiLinux className={styles.logo} size="2em" />
            </a>
            <div className={styles.headContent}>Welcome to my SocialNetwork</div>
        </header>
    )
}

export default Header;