import React from 'react';
import local from './Conversation.module.scss';
import MessageRequest from '../message/MessageRequest';
import MessageResponse from '../message/MessageResponse';

const Conversation = () => {
    return (
        <section className={local.conversationWrap}>
            <MessageRequest/>
            <MessageResponse/>
        </section>
    )
}

export default Conversation;