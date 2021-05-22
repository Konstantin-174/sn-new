import React from 'react';
import styles from './Conversation.module.scss';
import MessageRequest from '../message/MessageRequest';
import MessageResponse from '../message/MessageResponse';
import {MessageType} from '../../../state/reducers/dialogs_reducer';

type ConversationType = {
    message: Array<MessageType>
}

const Conversation: React.FC<ConversationType> = ({message}) => {

    const newMessageEl = message.map((message:MessageType) => <MessageResponse key={message.id}
                                                                                     message={message.text}/>)

    return (
        <section className={styles.conversationWrap}>
            <MessageRequest message={message[0].text}/>
            {newMessageEl}
        </section>
    )
}

export default Conversation;