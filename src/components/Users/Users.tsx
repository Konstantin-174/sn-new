import React from 'react';
import styles from './Users.module.scss';
import {UsersPropsType} from './UsersContainer';

export const Users: React.FC<UsersPropsType> = ({users,
                                                    follow,
                                                    unfollow}) => {
    return (
        <section className={styles.usersWrap}>
            {
                users.map(u => (
                    <section className={styles.innerWrap} key={u.id}>
                        <div className={styles.avaWrap}>
                            <div className={styles.avaImg}>
                                <img className={styles.ava} src={u.image} alt="Avatar"/>
                            </div>
                            <div className={styles.avaSettings}>
                                {u.followed
                                    ? <button className={styles.avaBtn} onClick={() => {follow(u.id)}}>Follow</button>
                                    : <button className={styles.avaBtn} onClick={() => {unfollow(u.id)}}>Unfollow</button>}
                            </div>
                        </div>
                        <div className={styles.userInfoWrap}>
                           <div className={styles.user}>
                               <div className={styles.userName}>
                                   {u.fullName}
                               </div>
                               <div className={styles.userStatus}>
                                   &#8220;{u.status}&#8221;
                               </div>
                           </div>
                            <div className={styles.location}>
                                <div className={styles.country}>
                                    {u.location.country}
                                </div>
                                <div className={styles.city}>
                                    {u.location.city}
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            }
        </section>
    )
}