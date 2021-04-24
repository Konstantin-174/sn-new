import React from 'react';
import local from './MessageRequest.module.scss';

type MessageRequestPropsType = {
    message: string
}

const MessageRequest = (props: MessageRequestPropsType) => {
    return (
        <section className={local.messageWrap}>
            {props.message}
        </section>
    )
}

export default MessageRequest;