import React from 'react';
import styles from './Users.module.scss';
import {UsersPropsType} from './UsersContainer';

export const Users: React.FC<UsersPropsType> = ({users}) => {
    return (
        <section className={styles.usersWrap}>
            {
                users.map(u => <div key={u.id}>
                    {u.fullName}
                </div> )
            }
        </section>
    )
}