import React from 'react';
import local from './MessageResponse.module.scss';

type MessageResponsePropsType = {
    message: string
}

const MessageResponse = (props: MessageResponsePropsType) => {
    return (
        <section className={local.messageWrap}>
            <div className={local.message}>
                {props.message}
            </div>
            <div className={local.angle}/>
        </section>
    )
}

export default MessageResponse;