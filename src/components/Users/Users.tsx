import React from 'react';
import styles from './Users.module.scss';
import {UsersPropsType} from './UsersContainer';
import {v1} from 'uuid';

export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    follow,
                                                    unfollow,
                                                    setUsers
                                                }) => {
    if (users.length === 0) {
        setUsers([
            {
                image: 'https://tridigital.wpengine.com/wp-content/uploads/2014/10/Turanga-Leela-Cartoon-Anime.jpg',
                id: v1(),
                followed: true,
                status: 'Never give up!',
                fullName: 'Turanga Leela',
                location: {city: 'Old New York', country: 'USA'}
            },
            {
                image: 'https://i.pinimg.com/736x/bb/4f/45/bb4f4529f8d7d3d60aa6fb3096b94ee6--futurama-why-not.jpg',
                id: v1(),
                followed: false,
                status: 'Whoop! Whoop! Whoop! Whoop! Whoop!',
                fullName: 'John D. Zoidberg',
                location: {city: 'Noname', country: 'Decapod 10'}
            },
            {
                image: 'http://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/d/d5/AmyWong.jpg',
                id: v1(),
                followed: false,
                status: 'Ok Fry, we\'re done putting on the bra!',
                fullName: 'Amy Wong',
                location: {city: 'New York', country: 'USA'}
            }
        ])
    }

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