import {NavLink} from 'react-router-dom';
import local from './Messages.module.scss';
import React from 'react';

type DialogsLinkPropsType = {
    id: number
    name: string
}

const DialogLink = (props: DialogsLinkPropsType) => {
    return (
        <NavLink to={'/messages/conversation/' + props.id} className={local.messagesLink} activeClassName={local.active}>
            <div className={local.linkTitle}>{props.name}</div>
        </NavLink>
    )
}

export default DialogLink;

