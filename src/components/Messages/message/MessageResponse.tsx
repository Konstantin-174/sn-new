import React from 'react';
import styles from './MessageResponse.module.scss';

type MessageResponsePropsType = {
    message: string
}

const MessageResponse: React.FC<MessageResponsePropsType> = ({message}) => {
    return (
        <section className={styles.messageWrap}>
            <div className={styles.message}>
                {message}
            </div>
            <div className={styles.angle}/>
        </section>
    )
}

export default MessageResponse;