import React from 'react';
import local from './MessageRequest.module.scss';

type MessageRequestPropsType = {
    message: string
}

const MessageRequest = (props: MessageRequestPropsType) => {
    return (
        <section className={local.messageWrap}>
            <div className={local.angle}/>
            <div className={local.message}>
                {props.message}
            </div>
        </section>
    )
}

export default MessageRequest;