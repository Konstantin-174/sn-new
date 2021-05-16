import React, {ChangeEvent} from 'react';
import local from './Messages.module.scss'
import {BsBoxArrowInUp} from 'react-icons/bs';
import Conversation from './conversation/Conversation';
import DialogLink from './DialogLink';
import {DialogsType} from '../../state/reducers/dialogs_reducer';
import {MessagesPropsType} from './MessagesContainer';

const Messages = (props: MessagesPropsType) => {

    let dialogsEl = props.dialogs.map((dialog: DialogsType) => <DialogLink key={dialog.id}
                                                                           id={dialog.id}
                                                                           name={dialog.name}/>)

    const newMessageChangeHandler = (text: ChangeEvent<HTMLInputElement>) => props.onNewMessageChangeHandler(text)

    return (
        <section className={local.messagesWrap}>
            <div className={local.dialogsInner}>
                <div className={local.friendsMessages}>
                    {dialogsEl}
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
                           placeholder="Enter your message"
                    />
                </div>
                <BsBoxArrowInUp onClick={props.onAddMessage} //React.DOMAttributes<T>.onClick?: React.MouseEventHandler<SVGElement>
                                className={local.inputBtn}
                                size="2em"
                />
            </div>
        </section>
    )
}

export default Messages;