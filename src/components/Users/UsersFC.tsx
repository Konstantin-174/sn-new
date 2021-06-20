import React from 'react';
import styles from './Users.module.scss';
import img from './images/nonameUser.jpg';
import {UserType} from '../../state/reducers/users_reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersFCPropsType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
    followingProgress: Array<number>
}

export const UsersFC: React.FC<UsersFCPropsType> = ({
                                                        users,
                                                        totalUsersCount,
                                                        currentPage,
                                                        pagesSize,
                                                        onPageChanged,
                                                        unfollow,
                                                        follow,
                                                        followingProgress,
                                                        toggleFollowingProgress
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
                    return <span style={{marginLeft: '5px'}}
                                 className={currentPage === p ? styles.selectedPage : ''}
                                 onClick={() => onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                users.map(u => (
                    <section key={u.id}
                             className={styles.innerWrap}>
                        <div className={styles.avaWrap}>
                            <NavLink to={'/profile/' + u.id}>
                                <div className={styles.avaImg}>
                                    <img className={styles.ava}
                                         src={u.photos.small === null ? img : u.photos.small}
                                         alt="Avatar"
                                    />
                                </div>
                            </NavLink>
                            <div className={styles.avaSettings}>
                                {u.followed
                                    ? <button className={styles.avaBtn}
                                              disabled={followingProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  toggleFollowingProgress(true, u.id)
                                                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                      withCredentials: true,
                                                      headers: {
                                                          'API-KEY': '26cd6eda-bc62-4bf5-b3d8-fb025b33cde9'
                                                      }
                                                  })
                                                      .then(response => {
                                                          if (response.data.resultCode == 0) {
                                                              unfollow(u.id)
                                                          }
                                                          toggleFollowingProgress(false, u.id)
                                                      })
                                              }}>Unfollow</button>
                                    : <button className={styles.avaBtn}
                                              disabled={followingProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  toggleFollowingProgress(true, u.id)
                                                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                                      withCredentials: true,
                                                      headers: {
                                                          'API-KEY': '26cd6eda-bc62-4bf5-b3d8-fb025b33cde9'
                                                      }
                                                  })
                                                      .then(response => {
                                                          if (response.data.resultCode == 0) {
                                                              follow(u.id)
                                                          }
                                                          toggleFollowingProgress(false, u.id)
                                                      })
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