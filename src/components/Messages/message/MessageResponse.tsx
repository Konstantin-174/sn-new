import React from 'react';
import local from './MessageResponse.module.scss';

type MessageResponsePropsType = {
    message: string
}

const MessageResponse = (props: MessageResponsePropsType) => {
    return (
        <section className={local.messageWrap}>
            {props.message}
        </section>
    )
}

export default MessageResponse;