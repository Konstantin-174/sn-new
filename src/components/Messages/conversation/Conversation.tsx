import React from 'react';
import local from './Conversation.module.scss';
import MessageRequest from '../message/MessageRequest';
import MessageResponse from '../message/MessageResponse';
import {MessageType} from '../../../state/state';

type ConversationType = {
    message: Array<MessageType>
}

const Conversation = (props: ConversationType) => {

    const newMessageEl = props.message.map((message:MessageType) => <MessageResponse key={message.id}
                                                                                     message={message.text}/>)

    return (
        <section className={local.conversationWrap}>
            <MessageRequest message={props.message[0].text}/>
            {newMessageEl}
        </section>
    )
}

export default Conversation;