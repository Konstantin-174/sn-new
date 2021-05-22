import React from 'react';
import styles from './Navbar.module.scss';
import { BsFillGrid1X2Fill, BsFillChatFill,
    BsPeopleFill, BsFillExclamationSquareFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <section className={styles.navWrap}>
            <div className={styles.navContent}>
                <NavLink to="/profile" className={styles.link} activeClassName={styles.active}>
                    <BsFillGrid1X2Fill className={styles.navIcon}/>
                    <div  className={styles.navText}>
                        Profile
                    </div>
                </NavLink>
                <NavLink to="/messages" className={styles.link} activeClassName={styles.active}>
                    <BsFillChatFill className={styles.navIcon}/>
                    <div className={styles.navText}>
                        Messages
                    </div>
                </NavLink>
                <NavLink to="/friends" className={styles.link} activeClassName={styles.active}>
                    <BsPeopleFill className={styles.navIcon}/>
                    <div className={styles.navText}>
                        Friends
                    </div>
                </NavLink>
                <NavLink to="/news" className={styles.link} activeClassName={styles.active}>
                    <BsFillExclamationSquareFill className={styles.navIcon}/>
                    <div className={styles.navText}>
                        News
                    </div>
                </NavLink>
            </div>
        </section>
    )
}

export default Navbar;