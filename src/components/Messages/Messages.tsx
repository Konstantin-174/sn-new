import React from 'react';
import local from './Messages.module.scss'
import {BsBoxArrowInUp} from 'react-icons/bs';
import MessageRequest from './message/MessageRequest';
import MessageResponse from './message/MessageResponse';
import {Route} from 'react-router-dom';
import Conversation from './conversation/Conversation';

const Messages = () => {
    return (
        <section className={local.messagesWrap}>
            <div className={local.messagesInner}>
                <div className={local.friendsMessages}>
                    <a href="/messages/conversation" className={local.messagesLink}>
                        <div className={local.linkTitle}>Amy Wong</div>
                    </a>
                    <a href="#" className={local.messagesLink}>
                        <div className={local.linkTitle}>Zapp Brannigan</div>
                    </a>
                    <a href="#" className={local.messagesLink}>
                        <div className={local.linkTitle}>John D. Zoidberg</div>
                    </a>
                    <a href="#" className={local.messagesLink}>
                        <div className={local.linkTitle}>Turanga Leela</div>
                    </a>
                    <a href="#" className={local.messagesLink}>
                        <div className={local.linkTitle}>Hubert J. Farnsworth</div>
                    </a>
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