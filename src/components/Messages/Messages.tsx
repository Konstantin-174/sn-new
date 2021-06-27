import React, {ChangeEvent} from 'react';
import styles from './Messages.module.scss'
import {BsBoxArrowInUp} from 'react-icons/bs';
import Conversation from './conversation/Conversation';
import DialogLink from './DialogLink';
import {DialogsType} from '../../state/reducers/dialogs_reducer';
import {MessagesPropsType} from './MessagesContainer';

const Messages: React.FC<MessagesPropsType> = ({
                                                   dialogs,
                                                   messages,
                                                   newMessage,
                                                   onAddMessage,
                                                   onNewMessageChangeHandler
                                               }) => {

    let dialogsEl = dialogs.map((dialog: DialogsType) => <DialogLink key={dialog.id}
                                                                     id={dialog.id}
                                                                     name={dialog.name}/>)

    const newMessageChangeHandler = (text: ChangeEvent<HTMLInputElement>) => onNewMessageChangeHandler(text)

    return (
        <section className={styles.messagesWrap}>
            <div className={styles.dialogsInner}>
                <div className={styles.friendsMessages}>
                    {dialogsEl}
                </div>
                <div className={styles.messagesContent}>
                    <Conversation message={messages}/>
                </div>
            </div>
            <div className={styles.messageInput}>
                <div className={styles.inputArea}>
                    <input type="text"
                           value={newMessage}
                           onChange={newMessageChangeHandler}
                           placeholder="Enter your message"
                    />
                </div>
                <BsBoxArrowInUp
                    onClick={onAddMessage}
                    className={styles.inputBtn}
                    size="2em"
                />
            </div>
        </section>
    )
}

export default Messages;