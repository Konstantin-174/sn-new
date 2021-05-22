import React from 'react';
import styles from './MessageRequest.module.scss';

type MessageRequestPropsType = {
    message: string
}

const MessageRequest: React.FC<MessageRequestPropsType> = ({message}) => {
    return (
        <section className={styles.messageWrap}>
            <div className={styles.angle}/>
            <div className={styles.message}>
                {message}
            </div>
        </section>
    )
}

export default MessageRequest;