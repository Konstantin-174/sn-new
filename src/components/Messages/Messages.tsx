import React from 'react';
import local from './Messages.module.scss'
import {BsBoxArrowInUp} from 'react-icons/bs';
import MessageRequest from './message/MessageRequest';
import MessageResponse from './message/MessageResponse';
import {NavLink, Route} from 'react-router-dom';
import Conversation from './conversation/Conversation';

const Messages = () => {
    return (
        <section className={local.messagesWrap}>
            <div className={local.messagesInner}>
                <div className={local.friendsMessages}>
                    <NavLink to="/messages/conversation" className={local.messagesLink} activeClassName={local.active}>
                        <div className={local.linkTitle}>Amy Wong</div>
                    </NavLink>
                    <NavLink to="#" className={local.messagesLink}>
                        <div className={local.linkTitle}>Zapp Brannigan</div>
                    </NavLink>
                    <NavLink to="#" className={local.messagesLink}>
                        <div className={local.linkTitle}>John D. Zoidberg</div>
                    </NavLink>
                    <NavLink to="#" className={local.messagesLink}>
                        <div className={local.linkTitle}>Turanga Leela</div>
                    </NavLink>
                    <NavLink to="#" className={local.messagesLink}>
                        <div className={local.linkTitle}>Hubert J. Farnsworth</div>
                    </NavLink>
                </div>
                <div className={local.messagesContent}>
                    <Route path="/messages/conversation" render={ () => <Conversation/>} />
                </div>
            </div>
            <div className={local.messageInput}>
                <div className={local.inputArea}>
                    <input type="text"/>
                </div>
                <BsBoxArrowInUp className={local.inputBtn} size="2em"/>
            </div>
        </section>
    )
}

export default Messages;