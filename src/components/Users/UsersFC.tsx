import React from 'react';
import styles from './Users.module.scss';
import img from './images/nonameUser.jpg';
import {UserType} from '../../state/reducers/users_reducer';

type UsersFCPropsType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const UsersFC: React.FC<UsersFCPropsType> = ({
                                                        users,
                                                        totalUsersCount,
                                                        currentPage,
                                                        pagesSize,
                                                        onPageChanged,
                                                        unfollow,
                                                        follow
                                                    }) => {

    let pagesCount = Math.ceil(totalUsersCount / pagesSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <section className={styles.usersWrap}>
            <div className={styles.pagesWrap}>
                {pages.map(p => {
                    return <span style={{marginLeft: "5px"}}
                                 className={currentPage === p ? styles.selectedPage : ''}
                                 onClick={() => onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                users.map(u => (
                    <section key={u.id}
                             className={styles.innerWrap}>
                        <div className={styles.avaWrap}>
                            <div className={styles.avaImg}>
                                <img className={styles.ava}
                                     src={u.photos.large === null ? img : u.photos.large}
                                     alt="Avatar"
                                />
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