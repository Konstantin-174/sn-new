import React from 'react';
import styles from './Header.module.scss';
import {DiLinux} from 'react-icons/di';
import {NavLink} from 'react-router-dom';

type HeaderFCPropsType = {
    isAuth: boolean,
    login: null | string
}

const HeaderFC: React.FC<HeaderFCPropsType> = ({
                                                   isAuth,
                                                   login
                                               }) => {
    return (
        <header className={styles.headerWrap}>
            <a href="#" className={styles.headLogo}>
                <DiLinux className={styles.logo} size="2em"/>
            </a>
            <div className={styles.headContent}>
                {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default HeaderFC;