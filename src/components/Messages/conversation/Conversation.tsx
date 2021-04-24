import React from 'react';
import local from './Conversation.module.scss';
import MessageRequest from '../message/MessageRequest';
import MessageResponse from '../message/MessageResponse';

const Conversation = () => {
    return (
        <section className={local.conversationWrap}>
            <MessageRequest message="Hi! How are you?"/>
            <MessageResponse message="Hi! I'm fine, thanks!"/>
        </section>
    )
}

export default Conversation;