import React from 'react';
import local from './Messages.module.scss'
import {BsBoxArrowInUp} from 'react-icons/bs';
import {Route} from 'react-router-dom';
import Conversation from './conversation/Conversation';
import MessagesLink from './MessagesLink';



const Messages = () => {
    return (
        <section className={local.messagesWrap}>
            <div className={local.messagesInner}>
                <div className={local.friendsMessages}>
                    <MessagesLink id={1} name="Amy Wong"/>
                    <MessagesLink id={2} name="Zapp Brannigan"/>
                    <MessagesLink id={3} name="John D. Zoidberg"/>
                    <MessagesLink id={4} name="Turanga Leela"/>
                    <MessagesLink id={5} name="Hubert J. Farnsworth"/>
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