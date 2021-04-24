import React from 'react';
import local from './Messages.module.scss'
import {BsBoxArrowInUp} from 'react-icons/bs';
import {Route} from 'react-router-dom';
import Conversation from './conversation/Conversation';
import DialogLink from './DialogLink';

const Messages = () => {

    let dialogs = [
        {id: 1, name: "Amy Wong"},
        {id: 2, name: "Zapp Brannigan"},
        {id: 3, name: "John D. Zoidberg"},
        {id: 4, name: "Turanga Leela"},
        {id: 5, name: "Hubert J. Farnsworth"},
    ]

    let dialogsEl = dialogs.map( (dialog) => <DialogLink id={dialog.id} name={dialog.name}/>)

    return (
        <section className={local.messagesWrap}>
            <div className={local.dialogsInner}>
                <div className={local.friendsMessages}>
                    { dialogsEl }
                </div>
                <div className={local.messagesContent}>
                    <Route path="/messages/conversation" render={ () => <Conversation/>} />
                </div>
            </div>
            <div className={local.messageInput}>
                <div className={local.inputArea}>
                    <input type="text"/>
                </div>
                <BsBoxArrowInUp className={local.inputBtn} size="2em"/>
            </div>
        </section>
    )
}

export default Messages;