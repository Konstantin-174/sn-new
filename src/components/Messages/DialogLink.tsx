import {NavLink} from 'react-router-dom';
import local from './Messages.module.scss';
import React from 'react';

type MessagesLinkPropsType = {
    id: number
    name: string
}

const DialogLink = (props: MessagesLinkPropsType) => {
    return (
        <NavLink to={'/messages/conversation/' + props.id} className={local.messagesLink} activeClassName={local.active}>
            <div className={local.linkTitle}>{props.name}</div>
        </NavLink>
    )
}

export default DialogLink;

