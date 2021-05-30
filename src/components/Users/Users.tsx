import React from 'react';
import styles from './Users.module.scss';
import {UsersPropsType} from './UsersContainer';
import img from '../Users/images/nonameUser.jpg'
import axios from 'axios';

export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    follow,
                                                    unfollow,
                                                    setUsers
                                                }) => {
    const getUsers = () => {
        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                setUsers(response.data.items)
            })
        }
    }

    return (
        <section className={styles.usersWrap}>
            <button onClick={getUsers} className={styles.getBtn}>Get Users</button>
            {
                users.map(u => (
                    <section className={styles.innerWrap} key={u.id}>
                        <div className={styles.avaWrap}>
                            <div className={styles.avaImg}>
                                <img className={styles.ava} src={img} alt="Avatar"/>
                            </div>
                            <div className={styles.avaSettings}>
                                {u.followed
                                    ? <button className={styles.avaBtn} onClick={() => {
                                        unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button className={styles.avaBtn} onClick={() => {
                                        follow(u.id)
                                    }}>Follow</button>}
                            </div>
                        </div>
                        <div className={styles.userInfoWrap}>
                            <div className={styles.user}>
                                <div className={styles.userName}>
                                    {u.name}
                                </div>
                                <div className={styles.userStatus}>
                                    &#8220;{u.status}&#8221;
                                </div>
                            </div>
                            <div className={styles.location}>
                                <div className={styles.country}>
                                    country
                                </div>
                                <div className={styles.city}>
                                    city
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            }
        </section>
    )
}