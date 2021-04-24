import React from 'react';
import local from './Navbar.module.scss';
import { BsFillGrid1X2Fill, BsFillChatFill,
    BsPeopleFill, BsFillExclamationSquareFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className={local.navWrap}>
            <div className={local.navContent}>
                <NavLink to="/profile" className={local.link} activeClassName={local.active}>
                    <BsFillGrid1X2Fill className={local.navIcon}/>
                    <div  className={local.navText}>
                        Profile
                    </div>
                </NavLink>
                <NavLink to="/messages" className={local.link} activeClassName={local.active}>
                    <BsFillChatFill className={local.navIcon}/>
                    <div className={local.navText}>
                        Messages
                    </div>
                </NavLink>
                <NavLink to="/friends" className={local.link} activeClassName={local.active}>
                    <BsPeopleFill className={local.navIcon}/>
                    <div className={local.navText}>
                        Friends
                    </div>
                </NavLink>
                <NavLink to="/news" className={local.link} activeClassName={local.active}>
                    <BsFillExclamationSquareFill className={local.navIcon}/>
                    <div className={local.navText}>
                        News
                    </div>
                </NavLink>
            </div>
        </section>
    )
}

export default Navbar;