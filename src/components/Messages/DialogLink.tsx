import {NavLink} from 'react-router-dom';
import styles from './Messages.module.scss';
import React from 'react';

type DialogsLinkPropsType = {
    id: string
    name: string
}

const DialogLink: React.FC<DialogsLinkPropsType> = ({name,
                                                        id}) => {
    return (
        <NavLink to={'/messages/conversation/' + id}
                 className={styles.messagesLink}
                 activeClassName={styles.active}
        >
            <div className={styles.linkTitle}>{name}</div>
        </NavLink>
    )
}

export default DialogLink;

