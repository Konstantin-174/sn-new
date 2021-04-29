import React, {ChangeEvent} from 'react';
import local from './Messages.module.scss'
import {BsBoxArrowInUp} from 'react-icons/bs';
import Conversation from './conversation/Conversation';
import DialogLink from './DialogLink';
import {DialogsType, MessageType} from '../../state/store';

type MessagesPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessage: string
    addMessage: (message: string) => void
    changeNewMessage: (newMessage: string) => void
}

const Messages = (props: MessagesPropsType) => {

    let dialogsEl = props.dialogs.map( (dialog:DialogsType) => <DialogLink key={dialog.id}
                                                                       id={dialog.id}
                                                                       name={dialog.name}/>)

    const addMessage = () => {
        props.addMessage(props.newMessage)
        props.changeNewMessage("")
    }

    const newMessageChangeHandler = (el: ChangeEvent<HTMLInputElement>) => props.changeNewMessage(el.currentTarget.value)

    return (
        <section className={local.messagesWrap}>
            <div className={local.dialogsInner}>
                <div className={local.friendsMessages}>
                    { dialogsEl }
                </div>
                <div className={local.messagesContent}>
                    <Conversation message={props.messages}/>
                </div>
            </div>
            <div className={local.messageInput}>
                <div className={local.inputArea}>
                    <input type="text"
                           value={props.newMessage}
                           onChange={newMessageChangeHandler}
                    />
                </div>
                <BsBoxArrowInUp className={local.inputBtn}
                                size="2em" onClick={addMessage}
                />
            </div>
        </section>
    )
}

export default Messages;