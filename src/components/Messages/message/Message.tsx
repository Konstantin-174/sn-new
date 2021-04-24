import React from 'react';
import local from './Message.module.scss';

const Message = () => {
    return (
        <section className={local.messageWrap}>
            Hi! How are you?
        </section>
    )
}

export default Message;